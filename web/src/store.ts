import { defineStore,createPinia } from "pinia";

export const pinia=createPinia()

export const useUserStore=defineStore('user',{
    state:()=>{
        return {
            group:-1,
            logined:false,
        }
    }
})