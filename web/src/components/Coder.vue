<script setup lang="ts">
import { ref, computed, watch, onMounted, reactive } from 'vue'
import { download } from 'download'
import { toCanvas} from 'html-to-image'
import { useMessage } from 'naive-ui';
import { create_codes } from './QRCode';
import logoUrl from '../assets/logo.jpg'

const message=useMessage()
const count = ref<number>(4)
// const row_count = ref<number>(2)
const code_size=ref<number>(550)
const label_size=ref<number>(50)
const logo_size=ref<number>(200)
const scaled_width=ref(0)
const scaled_height=ref(0)
const page_width = 1240
const page_height = 1754
const page_scale=ref<number>(0)
const codes=ref<string[]>()
onMounted(() => { 
    scale_preview_page()
    generate_codes()
})

watch(count,()=>generate_codes())
watch(logo_size,()=>generate_codes())

function generate_codes(){
    codes.value=create_codes(count.value)
}

function scale_preview_page() {
    const client_width=document.documentElement.clientWidth-20
    page_scale.value=client_width/page_width
    scaled_width.value=page_width*page_scale.value
    scaled_height.value=page_height*page_scale.value
}

async function download_code_image(){
    const ele=document.querySelector('#codes') as HTMLElement
    if (!ele){
        message.warning('未检测到转换元素!')
        return
    }
    const scale=page_scale.value
    page_scale.value=1
    const canvas= await toCanvas(ele,{backgroundColor:'#fff'})
    const dataUrl=canvas.toDataURL()
    page_scale.value=scale
    const link=document.createElement('a')
    link.download='codes.png'
    link.style.display='none'
    link.href=dataUrl
    document.body.append(link)
    link.click()
    setTimeout(() => {
        document.body.removeChild(link)
    }, 1000);
}

</script>

<template>
    <div class="coder-panel">
        <div class="form">
            <h2 class="title">生成参数</h2>
            <n-form label-placement="left" label-align="left" label-width="100" size="large">
                <n-form-item label="生成数量">
                    <n-input-number v-model:value="count" :precision="0" min="1" max="1000"></n-input-number>
                </n-form-item>
                <!-- <n-form-item label="每行数量">
                    <n-input-number v-model:value="row_count" :precision="0" min="1" max="10"></n-input-number>
                </n-form-item> -->
                <n-form-item label="二维码尺寸">
                    <n-input-number v-model:value="code_size" :precision="0" :step="50" min="1"></n-input-number>
                </n-form-item>
                <n-form-item label="文本尺寸">
                    <n-input-number v-model:value="label_size" :precision="0" :step="1" min="1"></n-input-number>
                </n-form-item>
                <n-form-item label="图标尺寸">
                    <n-input-number v-model:value="logo_size" :precision="0" :step="5" min="1"></n-input-number>
                </n-form-item>
                <!-- <n-form-item label="页面尺寸">
                <n-select :options="page_size_options" v-model:value="page_type"></n-select>
            </n-form-item> -->
            </n-form>
            <p class="button-group">
                <n-button type="primary" @click="generate_codes()">刷新</n-button>
                <n-button type="primary" @click="download_code_image()">下载</n-button>

            </p>

        </div>
        <div class="preview">
            <div class="page-box" :style="{'width':scaled_width+'px','height':scaled_height+'px'}">
                <div class="page" id="codes" :style="{'transform':`scale(${page_scale})`}" >
                    <div class="box" v-for="code of codes " :key="code">
                        <n-qr-code :value="code" :size="code_size" :icon-src="logoUrl" :icon-size="logo_size"></n-qr-code>
                        <p class="code-label" :style="{'font-size':label_size+'px'}">{{ code }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.coder-panel {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-rows: auto 1fr 20px;

}

.form {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}

.preview {
    /* width: 100%;
    height: 100%; */
    overflow-x:hidden;
    /* overflow-y: visible; */
    display: flex;
    padding: 10px;
}

.page {
    border: 1px solid gray;
    width:1240px;
    height:1754px;
    /* background-color: gray; */
    transform-origin: left top;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px 0;
    flex-wrap: wrap;
    row-gap: 20px;
}
.code-label{
    font-weight: bolder;
    margin: 0;
    text-align: center;
}
.page-box{
    overflow-x: hidden;
    overflow-y: hidden;
    box-shadow: 2px 2px 4px black;
}
.button-group{
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
}
</style>
