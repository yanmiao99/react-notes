/*
*  storage 二次封装
*  功能 :
*   1. 命名空间实现 , 防止不同项目数据混淆
*   2. 存储类型支持 object
*   3. 支持删除单项
* */

let namespace = 'jobify'

export default {
    setItem(key, val) {
        /*
        * 思路 :
        * 先取出命名空间里面的内容, 然后通过命名空间的 key 值进行添加,以免造成全局污染 , 并且支持传入 object
        * */
        let storage = this.getStorage()
        storage[key] = val
        window.localStorage.setItem(namespace, JSON.stringify(storage))
    },
    getItem(key) {
        return this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem(namespace) || "{}")
    },
    clearItem(key) {
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(namespace, JSON.stringify(storage))
    },
    clearAll() {
        window.localStorage.clear()
    }
}
