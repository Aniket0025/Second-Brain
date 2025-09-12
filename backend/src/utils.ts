export function random(len: number) {
    let options = "kfvkfvkbsdkbvdskbvkdsbvd";
    let length = options.length;
    let ans:"";
    for(let i=0;i<len;i++) {
        //@ts-ignore
        ans += options[Math.floor((Math.random()*length))]
    }
    //@ts-ignore
    return ans;

}