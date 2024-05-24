// function deepCopy(input) {
//     if(typeof input !== "object" || input === null) return input;
//     let tmp = Array.isArray(input) ? [] : {}
//     for(let key in input) {
//         if(typeof input[key] === "object") {
//             tmp[key] = deepCopy(input[key]);
//         }
//         else if(typeof input[key] === "function") {
//             let tmpFunc = new Function("return " + input[key].toString());
//             tmp[key] = tmpFunc()
//         }
//         else {
//             tmp[key] = input[key]
//         }
//         if(getPrototypeOf(input) !== globalThis) {
//             Object.setPrototypeOf(tmp, deepCopy(getPrototypeOf(input)))
//         }
//     }
//     return tmp
// }


