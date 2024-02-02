import { defineStore,createPinia } from "pinia";
import { Html5Qrcode } from "html5-qrcode";

export const pinia=createPinia()

export const useScannerStore=defineStore('scanner',{
    state:()=>{
        return {
            cameraId:'',
            scanner:null as Html5Qrcode|null,
        }
    },
    getters:{
        scanner_state:(state)=>state.scanner?.getState()??-1
    }
})                                          

interface Components{
    [index:string]:any
}

export const useRouterStore=defineStore('router',{
    state:()=>{
        return {
            active_component_name:'',
            components:{} as Components
        }
    },
    getters:{
        active_component:(state)=>state.components[state.active_component_name]
    }
})



export const useUserStore=defineStore('user',{
    state:()=>{
        return {
            group:-1
        }
    }
})