<script setup lang="ts">
import {onMounted,ref,computed,watch} from 'vue'
import {useRoute} from 'vue-router'
import {get_location,post_package,get_package_info,transfer_package} from './Package'
import Scanner from './Scanner.vue';
import {validate_code} from './QRCode'
import { useMessage } from 'naive-ui';

const route=useRoute()
const message=useMessage()
const package_code=ref('')
const package_content=ref('')
const package_status=ref('')
const package_comment=ref('')
const package_signed=ref(false)
const location=ref('')
const show_scanner=ref(false)
const status_options=[
    {
        label:'完整',
        value:'完整',
    },
    {
        label:'损坏',
        value:'损坏',
    },
    {
        label:'丢失',
        value:'丢失',
    },
]
const can_transfer=computed(()=>{
    if (route.params.mode=='post'){
        return validate_code(package_code.value) && !!package_content.value && !! location.value
    }else{
        return validate_code(package_code.value) && !!package_content.value && !! location.value && !!package_status.value
    }
})

const botton_text=computed(()=>{
    return {
    'post':'发送包裹',
    'transfer':'中转包裹',
}[route.params.mode as string]
})

const code_state=computed(()=>{
    if (!package_code.value){
        return 'warning'
    }
    else if (validate_code(package_code.value)){
        return 'success'
    }else{
        return 'error'
    }
})

// const can_edit_content=computed(()=>route.params.mode=='post')

onMounted(async ()=>{
    console.debug('Transfer Mode:',route.params.mode)
    try {        
        location.value=await get_location()
    } catch (error) {
        console.warn('Get location failed',error)
    }
})

watch(package_code,async (new_code,old_code)=>{
    if (new_code==old_code || validate_code(new_code)==false) {
        return
    }
    const package_info=await get_package_info(new_code)
    reset_all_inputs()
    if (package_info){
        package_content.value=package_info.content    
        return
    }
    if (route.params.mode!='post'){
        message.warning('未查询到包裹, 请确认包裹是否发出!')
    }
})

function on_code_scanned(code:string){
    console.debug('Get Code from scanner:',code)
    package_code.value=code
    show_scanner.value=false
}

function get_error_msg(error:any|unknown){
    if (!error) return ''
    if (error instanceof String) {
        return error
    }else if (error instanceof Error) {
        return error.message
    }
    return ''+error
}

async function try_transfer_package(){
    const mode=route.params.mode
    switch (mode) {
        case 'post':
            try {
                await post_package({
                    package_code:package_code.value,
                    package_content:package_content.value,
                    location:location.value,
                    package_comment:package_comment.value
                })
                message.success('发送包裹成功!')
                reset_all_inputs()
            } catch (error) {
                message.warning(`发送包裹失败:${get_error_msg(error)}`)
                console.error(error)
            }
            break;
        case 'transfer':
            try {
                await transfer_package({
                    package_code:package_code.value,
                    location:location.value,
                    package_comment:package_comment.value,
                    package_status:package_status.value,
                    signed:package_signed.value
                })
                message.success('中转包裹成功!')
                reset_all_inputs()
            } catch (error) {
                message.warning('中转包裹失败:'+error)
            }
            break
        default:
            message.error('未指定中转模式!')
            break;
    }
}

function reset_all_inputs(){
    package_code.value=''
    package_content.value=''
    package_comment.value=''
    package_status.value=''
    package_signed.value=false
}
</script>

<template>
<div class="post-panel">
    <div class="form">
        <!-- <h1 class="form-title">{{ page_title }}</h1> -->
        <n-input-group>
            <n-input :status="code_state" v-model:value="package_code" placeholder="请输入包裹码或者扫码"></n-input>
            <n-button type="primary" @click="show_scanner=true">扫码</n-button>
        </n-input-group>
        <n-input-group>
            <n-input-group-label>包裹内容</n-input-group-label>
            <n-input 
            v-model:value="package_content"></n-input>
        </n-input-group>
        <n-input-group>
            <n-input-group-label>所在地点</n-input-group-label>
            <n-input v-model:value="location"></n-input>
        </n-input-group>
        <n-input-group v-if="route.params.mode=='transfer'">
            <n-input-group-label>包裹状态</n-input-group-label>
            <n-select v-model:value="package_status" :options="status_options" default-value="完整"></n-select>
        </n-input-group>
        <n-input-group>
            <n-input-group-label>包裹备注</n-input-group-label>
            <n-input v-model:value="package_comment"></n-input>
        </n-input-group>
        <n-input-group v-if="route.params.mode=='transfer'">
            <n-checkbox 
            v-model:checked="package_signed" 
            size="large">签收包裹</n-checkbox>
        </n-input-group>
        <n-button 
        size="large"
        @click="try_transfer_package()"
        :disabled="!can_transfer"
        type="primary">{{ botton_text }}</n-button>
    </div>
    <teleport to="body">
        <Scanner 
        @close="show_scanner=false"
        @ok="on_code_scanned"
        v-if="show_scanner"></Scanner>
    </teleport>
</div>
</template>

<style scoped>
.post-panel{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form{
    width: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    gap:20px;
}
</style>
