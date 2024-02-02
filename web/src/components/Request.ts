// import { getCookie } from "./Cookie"
import { get_token } from "./Token"

// interface ResponseHandler{
//     [index:number]:(res:Response)=>void,
// }

const Handlers:Map<number,(res:Response)=>void>=new Map()
export function add_bad_request_hanlder(status_code:number,handler:(res:Response)=>void) {
    Handlers.set(status_code,handler)
}

interface Params{
    [index:string]:string|boolean
}

function add_params_to_url(url:string,params?:Params){
    // const values:string[]=[]
    // if (add_token) {
        
    //     const token=getCookie('token')
    //     if (token) {
    //         values.push('token='+token)
    //     }
    // }
    if (params) {
        const values:string[]=[]
        for (const key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                const element = params[key];
                values.push(`${key}=${element}`)
            }
        }
        return `${url}?${values.join('&')}`
    }
    return url
}

export async function Post(url:string,data:any,params?:Params){
    url=add_params_to_url(url,params)
    const res=await fetch(url,{
        method:'POST',
        body:JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json',
            'x-token':get_token(),
          })        
    })
    Handlers.get(res.status)?.call(null,res)
    return res
}

export async function Get(url:string,params?:Params){
    url=add_params_to_url(url,params)

    const res=await fetch(url,{
        headers:{
            'x-token':get_token(),
        }
    })
    Handlers.get(res.status)?.call(null,res)
    return res
}