<script setup lang="ts">
import {useRouter} from 'vue-router'
const router=useRouter()
</script>

<template>
<div class="menu-container">
    <button>查看包裹</button>
    <button @click="router.push({name:'transfer',params:{'mode':'post'}})">发送包裹</button>
    <button @click="router.push({name:'transfer',params:{'mode':'transfer'}})">中转包裹</button>
    <!-- <button>签收包裹</button> -->
</div>
</template>

<style scoped>
.menu-container{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    row-gap: 10px;
}
</style>
