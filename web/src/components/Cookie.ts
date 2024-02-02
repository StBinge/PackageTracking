export function setCookie(name:string, value:string, day:number) {
    let date = new Date()
    date.setDate(date.getDate() + day)
    document.cookie = name + '=' + value + ';expires=' + date
  }

export function getCookie(name:string) {
    let reg = RegExp(name + '=([^;]+)')
    let arr = document.cookie.match(reg)
    if (arr) {
      return arr[1]
    } else {
      return ''
    }
  }

export function delCookie(name:string) {
    setCookie(name, '', -1)
}