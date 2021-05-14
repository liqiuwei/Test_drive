window.onload = function (){

}
//定义一个变量a
var a = 100;
// 先声明后面在定义
var b;
// 同事定义多个变量
var c = 200,d = 300;

// js中的数据类型
// 字符串
var sdfg = 'python';
// 数字(不分整数和小数)
var x = 100;
var y = 10.21;
// 空类型
var n = null;
// 布尔类型
var t = true;
var f = false;
// 数组和python里列表差不多
var list = Array(11,22,33,44,55)
// list.push(66)
//在浏览器里console输入
    // list.push('66')在list里增加66元素
    // list.length统计长度
    // list.pop()默认删除最后一个元素

//对象和 python里字典差不多
var ojbk = {
    a:11,
    b:22
}
//获取对象的属性和获取字典键值对方式一样
ojbk.a
ojbk[a]
// js比较运算符
a = 100
b = '100'
// a == b 是成立的  a === b 不成立 .==不判断数据类型 ===判断数据类型(其它比较 运算符是一样的)
// console.log() 输入到网页的控制台
// console.log(a == b)
// 逻辑运算符
// &&(与), ||(或), !(否)

// if语句
// if (a<200){
//     console.log("a小于200")
// }else{
//     console.log('a不小于200')
// }
// if多重判断
// if (a === 100){
//     console.log("a等于100")
// }else if (a<100){
//     console.log("a小于100")
// }else {
//     console.log("a大于100")
// }
// 函数
function func1(){
    console.log("js第一个函数")
}
// 调用函数,或者直接在 控制台输入函数名称func1()
console.log(func1())