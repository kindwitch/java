//let now = new Date("2020-02-02");
// document.write("현재 시간은", now.toLocaleString(), "<br>");
// document.write("현재 시간은", now.toString(), "<br>");
//document.write("현재", now.getTime(), "<br>");
// now.setFullYear(now.getFullYear() + 1);
// document.write("1년 후 시간은", now.toLocaleString());

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let chars = ["one", "two", "three", "four"];
// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//   document.write("<p>" + numbers[i] + "</p>");
// }

// let numchars = numbers.concat(chars);
// document.write(numchars, "<br>");

// let string1 = numbers.join("===");
// document.write(string1, "<br>");
// let numbers1 = numbers.push(100);
// document.write(numbers, "<br>");
// numbers.unshift(-100);
// document.write(numbers, "<br>");

// let result = numbers.pop();
// document.write(result, "<br>");
// document.write(numbers, "<br>");

// let newNumbers = numbers.slice(3, 6);
// document.write(newNumbers, "<br>");
// document.write(numbers, "<br>");

// let spliceNumbers = numbers.splice(3, 2);
// document.write(spliceNumbers, "<br>");
// document.write(numbers, "<br>");

// document.write("<br>" + Math.abs(-10.1111));
// document.write("<br>" + Math.cos(Math.PI / 2));
// document.write("<br>" + Math.ceil(1.3456));
// document.write("<br>" + Math.round(1.345678));
// document.write("<br>" + Math.random());

// document.write("<br>" + navigator.appCodeName);
// document.write("<br>" + screen.width);

//object 객체를 다루는 방법

// const person = {
//   firstName: "John",
//   lastName: "Lennon",
//   age: 60,
//   hobbies: ["music", "movie", "sports", "kpop", "cooking"],
//   address: {
//     street: "2037 Main street",
//     city: "LA",
//     state: "CA",
//     country: "USA",
//   },
// };

// person.address.city = "Seoul";
// person.email = "abc@chd.com";

// console.log(person);

//TODO
// const todos = [
//   {
//     id: 1,
//     text: "과제물 제출",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "점심 식사",
//     isCompleted: false,
//   },
//   {
//     id: 3,
//     text: "프로젝트 미팅",
//     isCompleted: false,
//   },
//   {
//     id: 4,
//     text: "쇼핑",
//     isCompleted: false,
//   },
//   {
//     id: 5,
//     text: "저녁운동",
//     isCompleted: false,
//   },
// ];
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].id + ":" + todos[i].text);
// }

// for (let a of todos) {
//   console.log(a.text);
// }
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todotext = todos.map(function (todo) {
//   return todo.text;

//   console.log(todotext);
// });

// const todocompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });
// console.log(todocompleted);

//객체지향프로그래밍(Object Oriented Programming)
//함수형 객체지향프로그래밍
function person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  this.getKoreanFullName = function () {
    return `${this.lastName} ${this.firstName}`;
  };
}

const person1 = new Person("byoungcheon", "lee", new Date(2001, 1, 1));
const person2 = new Person("병천", "이", new Date(2001, 1, 1));

const name1 = person1.getFullName();
const name2 = person2.getKoreanFullName();
console.log(name1);
console.log(name2);

//클래스를 이용하는 객체프로그램밍
class Man {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getKoreanFullName() {
    return `${this.lastName} ${this.firstName}`;
  }
}

const man1 = new Man("승원", "권", 2002);
const man2 = new Man("민욱", "성", 2005);
const manname1 = man1.getFullName();
const manname2 = man2.getKoreanFullName();
console.log(manname1);
console.log(manname2);
