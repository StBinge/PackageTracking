<script setup lang="ts">
import { ref,computed } from 'vue';
import Main from './components/Main.vue';

const components={
  'main':Main
}

const active_component_name=ref('main')



const show_scanner=ref(false)

const qrcode=ref('')

function accpet_qrcode(code:string){
  qrcode.value=code
  show_scanner.value=false
}


</script>

<template>
  <n-message-provider>
    <div class="container">      
      <div class="header">
        <h1>物流信息系统</h1>
      </div>
      <component :is="components[active_component_name]"></component>
    </div>
      <teleport to="body">
        <Scanner 
        v-show="show_scanner" 
        @close="show_scanner=false"
        @ok="accpet_qrcode"></Scanner>
      </teleport>
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
  background-color: #333;
}
.header{
  background-color: dodgerblue;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
