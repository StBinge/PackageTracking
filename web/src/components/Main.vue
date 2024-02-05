<script setup lang="ts">
import {useRouter} from 'vue-router'
const router=useRouter()
</script>

<template>
<div class="menu-container">
    <n-button size="large" type="primary" @click="router.push({name:'coder'})">生成包裹码</n-button>
    <n-button size="large" type="primary" @click="router.push({name:'info'})">查看包裹</n-button>
    <n-button size="large" type="primary" @click="router.push({name:'transfer',params:{'mode':'post'}})">发送包裹</n-button>
    <n-button size="large" type="primary" @click="router.push({name:'transfer',params:{'mode':'transfer'}})">中转包裹</n-button>
    
</div>
</template>

<style scoped>
.menu-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    row-gap: 10px;
    height: 100%;
}
</style>
