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
    path:'/login',
    name:'login',
    component:()=>import('@/components/Login.vue')
},
{
    path:'/transfer/:mode',
    name:'transfer',
    component:()=>import('@/components/Transfer.vue'),
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
