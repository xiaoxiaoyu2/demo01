// awaiting.js
// 上面代码中，awaiting.js除了输出output，还默认输出一个 Promise 对象
// （async 函数立即执行后，返回一个 Promise 对象），从这个对象判断异步操作是否结束
let output;
export default (async function main() {
    const dynamic = await import(someMission);
    const data = await fetch(url);
    output = someProcess(dynamic.default, data);
})();
export { output };