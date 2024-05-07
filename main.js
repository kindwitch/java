//1.간단한 입출력 방법: alert, confirm, prompt

//alert("안녕하세요! 반갑습니다.");

//let select = confirm("배경 이미지를 바꾸시겠습니까?");
//console.log("사용자 선택은?", select);

//let name = prompt("당신의 이름을 입력하세요", "홍길동");
//document.write(name1, "님, 입니다.");

//2.간단한 입출력 방법
document.write('<h2 style="color:red">Hello world</h2>');
console.log("Hello world........");

//3. 변수 선언 :var, let, const
/*var key, name, year, month;
key = "12dfsjhdsjk";
key = 123;
key = true;
var key = "eeuioriu";
var key = 123;

let key = 123;
key = "daslkjlaskjd";
key = true;

const hello = "hello world";
const world = "kjldksflskd";
let isEmpty = true;
*/
/*let seasons = ["봄", "여름", "가을", "겨울", 100];
let date = new Date();
document.write("오늘은", date.toLocaleTimeString());

let today;
document.write(today);

let number = 100;
document.write("<br>");
document.write("오늘은" + date.toLocaleString() + "입니다");

let a = 3;
let b = 3;
let c = a <= b;
document.write("<br>" + c);
let d = a === b || a !== b;
document.write("<br>" + d);

//4.조건문

/*let userNumber = prompt("사용자 수는?");
if (userNumber != null) {
  //  if(userNumber %3 ===0){
  //    alert('3의 배수입니다')
  // }else{
  //alert('3의 배수가 아닙니다....')
  //}
  userNumber % 3 === 0 || userNumber % 4 === 0
    ? alert("3 또는 4의 배수입니다")
    : alert("3 또는 4의 배수가 아닙니다....");
} else alert("입력 값이 없습니다");
*/
//5.함수

// let a, b, c, d;
// a = 3;
// b = 4;
// c = 6;
// d = addNumber(a, b, c);
// console.log(a + "+" + b + "+" + c + "=" + d);

// function addNumber(a, b, c) {
//   return;
//   a + b + c;
// // }
// let sum;
// function calcSum(n) {
//   sum = 0;
//   for (let i = 1; i < n; i++) {
//     sum += i;
//   }
// }
// calcSum(101);
// console.log(sum);

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calcSum(101));
// console.log(calcSum(102));
// console.log(calcSum(103));
// console.log(calcSum(104));
// console.log(calcSum(105));

//익명함수
/*let sum = function (a, b) {
  return a + b;
};

// function sum(a, b) {
//   return a + b;
// }

console.log("결과:", sum(3, 6));
*/

// (function (a, b) {
//   sum = a + b;
// })(100, 200);
// document.write(sum);

//1.
// const hi = function (user) {
//   document.write(user + "님 안녕하세요!<br>");
// };
// hi("hello");
//2.
// const hi1 = (user, user1) => {
//   document.write(user + "님 안녕하세요! 1 <br>");
//   document.write(user1 + "님도 안녕하세요! <br>");
// };
// hi1("hello", "world");
//3.
// const hi2 = () => alert("안녕하세요 hi2");
// hi2();
// document.querySelector("#change").onclick = function () {
//   document.querySelector("p").style.color = "#f00";
//   document.querySelector("#change").style.color = "blue";
// };

// let changeBtn = document.querySelector("#change");
// changeBtn.onclick = changeColor;
// function changeColor() {
//   document.querySelector("p").style.color = "#f00";
//   document.querySelector("#change").style.color = "blue";
// }
