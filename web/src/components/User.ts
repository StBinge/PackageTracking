import {Post,Get} from './Request'
// import { setCookie, delCookie,getCookie } from './Cookie'
import { del_token, set_token } from './Token'

export async function sign_out() {
    const res=await Get('/api/user/signout')
    if (res.ok){
        del_token()
        return true
    }
    throw (await res.json()).detail
}

export async function sign_in(name:string,password:string) {
    const api='/api/user/signin'
    const data={'name':name,'password':password}
    const res=await Post(api,data)
    if (res.ok) {
        const token=await res.text()
        set_token(token)
    }else{
        // throw new Error(await res.text());    
        throw (await res.json()).detail

    }
}

export async function sign_up(name:string,password:string,realname:string){
    const api='/api/user/signup'
    const data={'name':name,'password':password,'realname':realname}
    const res=await Post(api,data)
    if (res.ok) {
        const token=await res.text()
        // setCookie('token',token,1)
        set_token(token)
    }else{
        throw (await res.json()).detail
    }
}

export async function check_token() {
    const url='/api/user'
    const res= await Get(url)
    if (res.ok) {
        return true
    }
    // del_token()
    return false
}