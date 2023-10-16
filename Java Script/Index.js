// var a;
// a=10;
// var a=10;
// console.log(a);
// let b;
// b=420;
// c=501;
// console.log(b);
// console.log(c);
// const d=1;
// console.log(d);
// console.log(j);
// var j=20;
// console.log(l);
// let l=60;
// let a=1;
// let b=6;
// let c=a+b;
// document.writeln(c);
// let x=6;
// let y=5;
// let z=x*y;
// document.writeln(z);
// console.log(c);
// let k=Number (prompt("Enter first number"));
// let l=Number (prompt("Enter second number"));
// let m=(k+l);
// console.log(m);
// let a=155;
// console.log(a, typeof a);
// let b='A'
// console.log(b, typeof b);
// let c=String (35);
// console.log(c, typeof c);
// let d=Number ('abc');
// console.log(d, typeof d);
// let e=Boolean(123);
// console.log(e, typeof e);
77;
// "ABCD"
// true
// let a=10;
// let b=20;
// console.log("a+b="+ a+b);
// console.log("a-b="+ a-b);
// console.log("a*b="+ a*b);
// console.log("a/b="+ a/b);
// console.log("a%b="+ a%b);
// console.log("a**b="+ a**b);
// // Assaignment Operator
// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log(a%=b);
// console.log(a**=b);
// // Comparision Operator
// console.log(a==b);
// console.log(a!=b);
// console.log(a===b);
// console.log(a!==b);
// console.log(a<b);
// console.log(a>b);
// console.log(a<=b);
// console.log(a>=b);
// //Logical Operator
function hof(x,y,task){
    a=task(x,y);
    return a;
}
let add =hof(20, 40, function (x,y) {
    return y+x;
})
console.log("add "+add);
let sub =hof(20, 40, function (x,y) {
    return y-x;
})
console.log("sub "+sub);
let mul=hof(20, 40, function (x,y) {
    return x*y;
})
console.log("mul "+mul);
let div=hof(20, 40, function (x,y) {
    return x/y;
})
console.log("div "+div);
let mod=hof(20, 40, function (x,y) {
    return x%y;
})
console.log("Moduls "+mod);
