<script setup lang="ts">
import { onMounted } from 'vue';
import {useRouter} from 'vue-router'
import { useMessage } from 'naive-ui';
import { add_bad_request_hanlder } from './components/Request';
const router=useRouter()


onMounted(()=>{
  add_bad_request_hanlder(401,async (res)=>{
    const message=useMessage()
    message.warning(await res.text())
    router.push({name:'login'})

  })
  router.push({name:'login'})
  // router.push({name:'transfer',params:{'mode':'post'}})
})

</script>

<template>
  <n-message-provider>
    <div class="container">      
      <div class="header">
        <h1>物流信息系统</h1>
      </div>
      <router-view></router-view>
    </div>
  </n-message-provider>
</template>

<style scoped>
.container{
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 80px 1fr;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
  background-color: #111;
}
.header{
  background-color: dodgerblue;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
