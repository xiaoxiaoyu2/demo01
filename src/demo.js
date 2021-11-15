// for(let i=0;i<100;i++){
// }
//  console.log(i);



// var a=[];
// for(let i=0;i<10;i++){
//  a[i]=function(){
//   console.log(i);
//  }
// }
// a[6]();



// {
//     let a="zhangsan";
//     let w= function (){
//         return a;
//     }
// }
// console.log(w()); 




// function* fibs() {
//     let a = 0;
//     let b = 1;
//     while (true) {
//       yield a;
//       [a, b] = [b, a + b];
//     }
//   }




//   let [first, second, third, fourth, fifth, sixth] = fibs();
//   console.log(sixth);  // 5



// var {x: y = 3} = {x: 5};
// console.log(y);     //5



// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');



// for (let [key, value] of map) {
//     console.log(key + " is " + value);
// }        // first is hello
// // second is world



// console.log("\uD834\uDF06");
// for (let codePoint of '张三') {
//     console.log(codePoint)
//   }




// JSON.stringify('\u{D834}')



// function compile(template) {
//     const evalExpr = /<%=(.+?)%>/g;
//     const expr = /<%([\s\S]+?)%>/g;

//     template = template
//         .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
//         .replace(expr, '`); \n $1 \n  echo(`');

//     template = 'echo(`' + template + '`);';

//     let script =
//         `(function parse(data){
//       let output = "";

//       function echo(html){
//         output += html;
//       }

//       ${template}

//       return output;
//     })`;

//     return script;
// }
// let parse = eval(compile(template));
// div.innerHTML = parse({ supplies: ["broom", "mop", "cleaner"] });



// let a = 5;
// let b = 10;
// function tag(s, v1, v2) {
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);
//   return "OK";
// }
// tag`Hello ${ a + b } world ${ a * b}`;



// function factorial(n) {
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// }

// console.log(factorial(5)); // 120




// const a=[1,2];
// // const b=[...a]

// const[...b]=a;
// console.log(b);

// const arr1=["a","b"];
// const arr2=["c"];
// const arr3=["d","e"]
// console.log([...arr1,...arr2,...arr3]);

// console.log([..."hello"]);

// let map=new Map([
//     [1,"one"],
//     [2,"two"],
//     [3,"whree"]
// ]);
// let arr=[...map.values()];
// console.log(arr);



// var obj = new Proxy({}, {
//     get: function (target, propKey, receiver) {
//         console.log('getting ${propKey}!');
//         return Reflect.get(target, propKey, receiver);
//     },
//     set: function (target, propKey, receiver) {
//         console.log('setting ${propKey}!');
//         return Reflect.set(target, propKey, value, receiver);
//     }
// });
// obj.count = 1;
// ++obj.count




// var a={};
//                     //function *表明一个生产函数
// a[Symbol.iterator]=function* (){
//   // symbol.iterator  
//     yield [1,2,[5,9,8],3,4];
//     yield [5,6,7];
//     yield [8,9];
// };
// console.log(...a);




// function* a(x) {
//     var y = 2 * (yield (x + 1));
//     var z = yield (y / 3);
//     return (x + y + z);
// }
// var b = a(5);
// console.log(b.next());
// console.log(b.next(12));
// console.log(b.next(13));      
//上面代码第一次调用b的next方法时，返回x+1的值6；第二次调用next方法，将上一次yield表达式的值设为12，
//因此y等于24，返回y / 3的值8；第三次调用next方法，将上一次yield表达式的值设为13，因此z等于13，这时x等于5
//，y等于24，所以return语句的值等于42。



// function* foo() {
//     console.log("started");
//     console.log(`1.${yield}`);
//     console.log(`2.${yield}`);
//     return "result";
// }
// let getFoo = foo();
// getFoo.next();
// getFoo.next("张三");
// getFoo.next("李四")



// function* foo() {
//     yield 1; 
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }
// for (let a of foo()) {
//     console.log(a);
// }




// function sleep(interval) {  //定义一个休眠函数
//     return new Promise(resolve => {
//         setTimeout(resolve, interval);
//     })
// }
// // 用法↓
// async function one2FiveInAsync() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(i);
//         await sleep(1000); //每隔一秒打印一次
//     }
// }

// one2FiveInAsync();




import promise, { output } from "./awaiting.js";
function outputPlusValue(value) { return output + value };
promise.then(() => {
    console.log(outputPlusValue(100));
    setTimeout(() => console.log(outputPlusValue(100)), 1000);
});






