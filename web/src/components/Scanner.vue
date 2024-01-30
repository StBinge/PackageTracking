<script setup lang="ts">
import { onMounted, defineEmits, onUpdated,onBeforeUnmount } from 'vue'
import { Html5Qrcode, Html5QrcodeScannerState } from 'html5-qrcode'
import { useMessage } from 'naive-ui'
import { validate_code } from './QRCode'
import { useScannerStore } from '../store'

const emits = defineEmits<{
    (event: 'close'): void,
    (event: 'ok', code: string): void,
}>()
const message = useMessage()
const store = useScannerStore()

// const scanner=ref<Html5Qrcode>()

// const camera_id=ref<string>('')

onMounted(async () => {
    // validate_code('20240129150396123')
    try {
        await setup_scanner()
        // await start_scan()
    } catch (error) {
        message.error('Start Scanner failed!')
        console.error('Failed start scanner!', error)
    }
})

onUpdated(async () => {
    try {
            // console.log('active scanner')
            // await setup_scanner()
            await start_scan()
        } catch (error) {
            message.error('Start Scanner failed!')
            console.error('Failed start scanner!', error)
        }
})

onBeforeUnmount(async ()=>{
    await stop_scanner()
})

async function setup_scanner() {
    if (!store.cameraId) {
        store.cameraId = await getCameraID()
    }
    if (!store.scanner) {
        store.scanner = new Html5Qrcode('reader')
    }
    // window.$scanner=scanner.value
}

async function getCameraID() {
    // if (window.$cameraId) {
    //     camera_id.value=window.$cameraId
    //     return
    // }
    const devices = await Html5Qrcode.getCameras()
    if (!devices) {
        message.error('No camera found!')
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



function scann_ok(decode_text: string) {
    if (validate_code(decode_text)) {
        console.log('Read code:', decode_text)
        pause_scanner()
        emits('ok', decode_text)
    } else {
        message.warning('Invalidate QRCode!')
    }
}

// function scan_fail(error:string){

//     console.error(error)
// }

async function start_scan() {
    const state = store.scanner_state
    if (state==Html5QrcodeScannerState.SCANNING) return
    const scanner = store.scanner
    switch (state) {
        case Html5QrcodeScannerState.PAUSED:
            scanner?.resume()
            break;
        case Html5QrcodeScannerState.NOT_STARTED:
            await setup_scanner()
            await store.scanner?.start(
                store.cameraId,
                {
                    fps: 10,
                    qrbox: { width: 250, height: 250 },
                },
                scann_ok,
                undefined
            )
            break
        default:
            throw 'Unknown Scanner State!'
            break;
    }
}

async function stop_scanner() {
    const scanner=store.scanner
    const state=scanner?.getState()
    if (state==Html5QrcodeScannerState.SCANNING || state==Html5QrcodeScannerState.PAUSED) {
        await scanner?.stop()
    }

}

function pause_scanner(){
    const scanner=store.scanner
    const state=scanner?.getState()
    if (state==Html5QrcodeScannerState.SCANNING) {
        scanner?.pause(true)
    }
}

async function quit() {
    pause_scanner() 
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
