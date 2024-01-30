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

