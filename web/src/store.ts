import { defineStore } from "pinia";
import { Html5Qrcode } from "html5-qrcode";

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