<script setup lang="ts">
import { onMounted } from 'vue';
import {useRouter} from 'vue-router'
// import { useMessage } from 'naive-ui';
import { add_bad_request_hanlder } from './components/Request';
import Header from './components/Header.vue';
import { check_token } from './components/User';
import { useUserStore } from './store';

const router=useRouter()
const user=useUserStore()

onMounted(async ()=>{
  add_bad_request_hanlder(401,async (res)=>{
    // const message=useMessage()
    // message.warning(await res.text())
    user.logined=false
    router.push({name:'login'})
  })
  try {
    if (await check_token()){
      console.debug('Token is valid, skip login.')
      router.push({name:'main'})
      user.logined=true
    }else{
      router.push({name:'login'})
    }
  } catch (error) {
    console.warn('Check token error:',error)
    router.push({name:'login'})
  }

  // router.push({name:'transfer',params:{'mode':'post'}})
})

</script>

<template>
  <n-message-provider>
    <div class="container">      
      <Header></Header>
      <router-view></router-view>
    </div>
  </n-message-provider>
</template>

<style scoped>
.container{
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-rows: auto 1fr;
  height: 100%;
  width: 100%;
  grid-template-columns: 1fr;
}
.header{
  background-color: dodgerblue;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
