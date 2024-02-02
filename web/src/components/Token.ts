export function get_token() {
    return localStorage.getItem('token')??''
}

export function set_token(val:string){
    localStorage.setItem('token',val)
}

export function del_token(){
    localStorage.removeItem('token')
}