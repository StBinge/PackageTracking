<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { validate_code } from './QRCode';
import { get_package_info, PackageInfo, Record } from './Package';
import { useMessage } from 'naive-ui';

const message = useMessage()
const show_scanner = ref(false)
const package_code = ref('')
const package_info = ref<PackageInfo | null>()
const code_state = computed(() => {
    if (!package_code.value) {
        return 'warning'
    }
    else if (validate_code(package_code.value)) {
        return 'success'
    } else {
        return 'error'
    }
})


watch(package_code, async (new_code) => {
    if (validate_code(new_code)) {
        try {
            package_info.value = await get_package_info(new_code, true)
            if (!package_info.value) {
                message.warning('未查询到包裹, 请确认包裹是否发出!')
            }
        } catch (error) {
            message.error('获取包裹信息失败:' + error)
        }
    }
})

function on_code_scanned(code: string) {
    console.debug('Get Code from scanner:', code)
    package_code.value = code
    show_scanner.value = false
}

function map_record_status(record: Record) {
    const status = new Map()
    status.set('完整', 'success')
    status.set('损坏', 'warning')
    status.set('丢失', 'error')
    return status.get(record.status) || 'default'
}

function map_package_status(package_info:PackageInfo){
    if (package_info?.signed) return 'success'
    return 'default'

}

function get_package_statue(package_info:PackageInfo){
    if (!package_info) return '包裹不存在'
    if (package_info.signed) {
        return '已签收'
    } else if (package_info.posted) {
        return '运送中'
    }
    return '未发出'
}

function map_last_record_status(package_info:PackageInfo){
    if ((!package_info?.records) || package_info.records.length==0 )return 'error'
    return map_record_status(package_info.records[package_info.records.length-1])
}
function get_last_record_status(package_info:PackageInfo){
    if ((!package_info?.records) || package_info.records.length==0 )return ''
    return package_info.records[package_info.records.length-1].status
}

</script>

<template>
    <div class="info-panel">
        <div class="package-info">
            <n-input-group>
                <n-input :status="code_state" v-model:value="package_code" placeholder="请输入包裹码或者扫码"></n-input>
                <n-button type="primary" @click="show_scanner = true">扫码</n-button>
            </n-input-group>
            <n-card :title="package_info?.content" size="small" v-if="!!package_info">
                <n-tag :type="map_package_status(package_info)">{{ get_package_statue(package_info)}}</n-tag>
                <n-tag :type="map_last_record_status(package_info)">{{ get_last_record_status(package_info)}}</n-tag>
            </n-card>

        </div>
        <div class="records-info">
            <n-timeline>
                <n-timeline-item v-for="record in package_info?.records" :type="map_record_status(record)"
                    :title="record.location" :time="record.datetime">
                    <n-collapse>
                        <n-collapse-item :title="record.user">
                            <n-tag :type="map_record_status(record)">{{record.status}}</n-tag>
                            <p>{{ record.comment }}</p>
                        </n-collapse-item>
                    </n-collapse>
                </n-timeline-item>
            </n-timeline>
        </div>
    </div>
    <teleport to="body">
        <Scanner @close="show_scanner = false" @ok="on_code_scanned" v-if="show_scanner"></Scanner>
    </teleport>
</template>

<style scoped>
.info-panel {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr;
}
.package-info{
    padding: 10px 10px;
}
.records-info{
    width: 100%;
    padding: 10px 20px;
}
</style>
