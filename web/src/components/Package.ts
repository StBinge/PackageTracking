import { Post,Get } from "./Request"
interface Record{
    user:string
    location:string
    datetime:string
}
interface PackageInfo{
    code:string
    content:string
    records:Record[]
}
export function get_location(){
    if (!navigator.geolocation) return ''
    return new Promise<string>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(res=>{
            const geo=[res.coords.latitude.toFixed(0),res.coords.longitude.toFixed(0)].join(',')
            resolve(localStorage.getItem(geo)??'')
        },err=>{
            let msg=''
            switch (err.code) {
                case 1:
                    msg='位置服务请求被拒绝'
                    break
                case 2:
                    msg='暂时获取不到位置信息'
                    break
                case 3:
                    msg='获取信息超时'
                    break
                case 4:
                    msg='未知错误'
                    break
            }
            reject(msg)
        },{
            enableHighAccuracy:true,
            maximumAge:3000,
            timeout:4000,
        })
    })
}

export async function get_package_info(code:string,with_records:boolean=false){
    const api='/api/package'
    const res=await Get(api,{'code':code,'full':with_records})
    if (res.ok) {
        return await res.json() as PackageInfo
    }else{
        console.debug('Get package info failed:',await res.text())
        return null
    }
}

export async function post_package(package_code:string,package_content:string,location:string) {
    const api='/api/package/post'
    const res= await Post(api,{package_code,package_content,location})
    if (res.ok){
        return true
    }
    throw new Error((await res.json()).detail)
}