import { createApp } from 'vue'
import {createPinia} from 'pinia'
import {createRouter,createWebHashHistory} from 'vue-router'
import './style.css'
import App from './App.vue'

const routes=[
    {
    path:'/',
    name:'main',
    component:()=>import('@/components/Main.vue')
},
{
    path:'/user/login',
    name:'login',
    component:()=>import('@/components/Login.vue')
},
{
    path:'/package/transfer/:mode',
    name:'transfer',
    component:()=>import('@/components/Transfer.vue'),
},
{
    path:'/package/transfer/:mode',
    name:'transfer',
    component:()=>import('@/components/Transfer.vue'),
},
{
    path:'/package/info',
    name:'info',
    component:()=>import('@/components/PackageInfo.vue'),
}
,
{
    path:'/coder',
    name:'coder',
    component:()=>import('@/components/Coder.vue'),
}
]
const pinia=createPinia()
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

const app=createApp(App)
app.use(pinia)
app.use(router)
app.mount('#app')
