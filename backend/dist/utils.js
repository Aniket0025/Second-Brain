export function random(len) {
    let options = "kfvkfvkbsdkbvdskbvkdsbvd";
    let length = options.length;
    let ans;
    for (let i = 0; i < len; i++) {
        //@ts-ignore
        ans += options[Math.floor((Math.random() * length))];
    }
    //@ts-ignore
    return ans;
}
//# sourceMappingURL=utils.js.map