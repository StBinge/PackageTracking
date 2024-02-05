export function validate_code(code:string){
    if (code.length!=17) {
        return false
    }
    const parts=[
        [4,2024,2100],//year
        [2,0,12],//month
        [2,0,31],//day
        [2,0,24],//hour
        [2,0,60],//minute
        [2,0,60],//second
        [3,0,1000],//millisecond
    ]
    let idx=0
    for (const part of parts) {
        let n=parseInt(code.substring(idx,idx+part[0]))
        if (n<part[1] || n>part[2]) {
            return false
        }
        idx+=part[0]
    }
    return true
}

export function create_codes(count:number){
    const now=new Date()
    const year=now.getFullYear().toString()
    const month=(now.getMonth()+1).toString().padStart(2,'0')
    const day=now.getDate().toString().padStart(2,'0')
    const hour=now.getHours().toString().padStart(2,'0')
    const minute=now.getMinutes().toString().padStart(2,'0')
    const second=now.getSeconds().toString().padStart(2,'0')
    const prefix=year+month+day+hour+minute+second
    const codes:string[]=[]
    for (let index = 0; index < count; index++) {
        codes.push(prefix+index.toString().padStart(3,'0'))
    }
    return codes
}