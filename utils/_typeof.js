let class2type = {}
let ta = "Boolean Number String Function Array Date RegExp Object Error".split(" ")
for (let i = 0; i < ta.length; i++) {
    let e = ta[i]
    class2type["[object " + e + "]"] = e.toLowerCase()
}

export default function _typeof(obj) {
    if (obj == null) {
        return String(obj)
    }
    return typeof obj === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : typeof obj
}