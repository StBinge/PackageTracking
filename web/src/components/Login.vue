<script setup lang="ts">
import { ref,computed,defineEmits,onMounted } from 'vue'
import {sign_in,sign_up,check_token} from './User'
import { useMessage } from 'naive-ui';
import {useRouter} from 'vue-router'
import {useUserStore} from '../store'


const router=useRouter()
const message=useMessage()
const user=useUserStore()
const emits=defineEmits<{
    (event:'sign_in'):void,
}>()

const mode=ref('sign_in')
const user_name=ref('')
const user_password=ref('')
const user_realname=ref('')

const can_sign_in=computed(()=>user_name.value.length>0 && user_password.value.length>0)
const can_sign_up=computed(()=>!!user_name.value && !!user_password.value && !!user_realname.value)

// onMounted(async()=>{
//     try {
        
//         const valid=await check_token()
//         if (valid){
//             console.log('Token is valid, skip login.')
//             emits('sign_in')
//             router.push({name:'main'})
//         }
//     } catch (error) {
//         console.warn('Check token error!',error)
//     }
// })

async function try_sign_in(){
    try {
        await sign_in(user_name.value,user_password.value)
        message.success('登录成功')
        user.logined=true
        emits('sign_in')
        router.push({name:'main'})

    } catch (error) {
        message.error('登录失败!\n'+error)
    }
}

async function try_sign_up(){
    try {
        await sign_up(user_name.value,user_password.value,user_realname.value)
        message.success('注册成功')
        user.logined=true
        emits('sign_in')
        router.push({name:'main'})

    } catch (error) {
        message.error('注册失败!\n'+error)
    }
}
</script>

<template>
<div class="login-panel">
    <div class="login-box">
        <div class="switch">
            <span class="option" :class="{active:mode=='sign_in'}" @click="mode='sign_in'">登录</span>
            <span class="option" :class="{active:mode=='sign_up'}" @click="mode='sign_up'">注册</span>
        </div>
        <div class="form">
        <n-input-group>
            <n-input-group-label>账户</n-input-group-label>
            <n-input v-model:value="user_name"></n-input>
        </n-input-group>
        <n-input-group v-if="mode=='sign_up'">
            <n-input-group-label>真实姓名</n-input-group-label>
            <n-input v-model:value="user_realname"></n-input>
        </n-input-group>
        <n-input-group>
            <n-input-group-label>密码</n-input-group-label>
            <n-input type="password" v-model:value="user_password"></n-input>
        </n-input-group>
            <button 
            :disabled="!can_sign_in"
            @click="try_sign_in()" 
            v-if="mode=='sign_in'">确认</button>
            <button 
            :disabled="!can_sign_up"
            @click="try_sign_up()" 
            v-else>确认</button>
        </div>
    </div>
</div>
</template>

<style scoped>
.login-panel{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.login-box{
    display: grid;
    grid-template-rows: auto 1fr;
    border-radius: 10px;
    padding: 0;
    border: 2px solid dodgerblue;
    grid-template-columns: 1fr;
    overflow: hidden;
}
.switch{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
}
.option{
    width: 100%;
    padding: 5px 20px;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: white;
    background-color: gray;
    text-shadow: 1px 1px black;
}
.option.active{
    color:white;
    background-color: dodgerblue;
}
.form{
    border-top: 0;
    display: flex;
    flex-direction: column;
    height: 300px;
    justify-content: center;
    padding: 0 20px;
    row-gap: 20px;
}

</style>
