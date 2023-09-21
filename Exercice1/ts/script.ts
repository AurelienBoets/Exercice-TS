let userName: string = "toto";
let userAge: number = 0;
let isLogin: boolean = true;
let userNames: string[] = [];
userNames.push(userName);
let person = {};
person = {
  firstName: "Dupont",
  age: 20,
  isLoggedIn: true,
};
// console.log(person.age);

let person1: {
  firstName: string;
  age: number;
  isLoggedIn: boolean;
} = {
  firstName: "Dupont",
  age: 20,
  isLoggedIn: true,
};
console.log(person1.age);

let person2 = {
  firstName: "Dupont",
  age: 20,
  isLoggedIn: true,
};
let infos: [string, number];
