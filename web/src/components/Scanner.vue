<script setup lang="ts">
import { onMounted, defineEmits,onBeforeUnmount,ref } from 'vue'
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode'
import { useMessage } from 'naive-ui'
import { validate_code } from './QRCode'
// import { useScannerStore } from '../store'

const emits = defineEmits<{
    (event: 'close'): void,
    (event: 'ok', code: string): void,
}>()
const message = useMessage()
// const store = useScannerStore()

const scanner=ref<Html5Qrcode>()

const camera_id=ref<string>('')

onMounted(async () => {
    // validate_code('20240129150396123')
    try {
        // await setup_scanner()
        await start_scan()
    } catch (error) {
        message.error('启动扫码功能失败!')
        console.error('Failed start scanner!', error)
    }
})

// onUpdated(async () => {
//     try {
//             // console.log('active scanner')
//             // await setup_scanner()
//             await start_scan()
//         } catch (error) {
//             message.error('Start Scanner failed!')
//             console.error('Failed start scanner!', error)
//         }
// })

onBeforeUnmount(async ()=>{
    await stop_scanner()
})

async function setup_scanner() {
    if (!camera_id.value) {
        camera_id.value = await getCameraID()
    }
    if (!scanner.value) {
        scanner.value = new Html5Qrcode('reader')
    }
    // window.$scanner=scanner.value
}

async function getCameraID() {
    const devices = await Html5Qrcode.getCameras()
    if (!devices) {
        message.error('未检测到摄像头!')
        return ''
    }
    if (devices.length > 1) {
        // camera_id.value= devices[1].id
        return devices[1].id
    } else {
        // camera_id.value= devices[0].id
        return devices[0].id
    }
    // window.$cameraId=camera_id.value
}



async function  scann_ok(decode_text: string) {
    console.debug('Code Scanned:',decode_text)
    if (validate_code(decode_text)) {
        console.log('Valid Code:', decode_text)
        // pause_scanner()
        await stop_scanner()
        emits('ok', decode_text)
    } else {
        message.warning('无效二维码!')
    }
}

async function start_scan() {
    await setup_scanner()
    const state=scanner.value?.getState()
    if (state==Html5QrcodeScannerState.SCANNING) return
    switch (state) {
        case Html5QrcodeScannerState.PAUSED:
            scanner.value?.resume()
            break;
        case Html5QrcodeScannerState.NOT_STARTED:
            await scanner.value?.start(
                camera_id.value,
                {
                    fps: 10,
                    qrbox: { width: 250, height: 250 },
                },
                scann_ok,
                (err)=>console.debug(err)
            )
            break
        default:
            throw 'Unknown Scanner State!'
    }
}

async function stop_scanner() {
    if (!scanner.value) return 
    const state=scanner.value?.getState()
    if (state==Html5QrcodeScannerState.SCANNING || state==Html5QrcodeScannerState.PAUSED) {
        await scanner.value?.stop()
    }

}

// function pause_scanner(){
//     if (!scanner.value) {
//         return
//     }
//     const state=scanner.value?.getState()
//     if (state==Html5QrcodeScannerState.SCANNING) {
//         scanner.value?.pause(true)
//     }
// }

async function quit() {
    // pause_scanner() 
    await stop_scanner()
    emits('close')
}

</script>

<template>
    <div class="mask">
        <div class="container">
            <div id="reader"></div>
            <n-button @click="quit()">Quit</n-button>
        </div>
    </div>
</template>

<style scoped>
.mask {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #111;
    z-index: 99;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
}

#reader {
    width: 50%;
    /* height: 600px;
    background-color: aqua; */
}
</style>
