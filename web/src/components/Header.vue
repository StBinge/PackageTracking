<script setup lang="ts">
import { ref } from 'vue'
import {useRouter} from 'vue-router'
import { sign_out } from './User';
import { useMessage } from 'naive-ui';
import { useUserStore } from '../store';

const router=useRouter()
const message=useMessage()
const user=useUserStore()

async function sign_out_confirm(){
    if (confirm('确认注销当前账户?')){
        try {            
            const res=await sign_out()
            if (res) {
                message.success('注销账户成功, 请重新登录.')
                user.logined=false
                router.push({name:'login'})
            }
        } catch (error) {
            message.error('注销账户操作异常!')
            console.error(error)
            router.push({name:'login'})
        }
    }
}
</script>

<template>
<div class="header-panel">
    <n-button text @click="router.back()">返回</n-button>
    <h1>物流信息系统</h1>
    <n-button v-show="user.logined" @click="sign_out_confirm()" text>注销</n-button>
</div>
</template>

<style scoped>
.header-panel{
    width: 100%;
    background-color: dodgerblue;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
}
.header-panel>h1{
    margin: 0;
    text-align: center;
}
</style>
