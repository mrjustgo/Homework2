// Задание 1 
let a = 10;
alert(a);
let b = 20;
alert(b);

//Задание 2 
let iphone = prompt('Год выпуска айфона');
alert(iphone);

//Задание 3 
let languagecreator = prompt('Имя создателя JavaScript');
alert(languagecreator);

//Задание 4
let c = 10;
let d = 2;
alert(c+d);
alert(c-d);
alert(c*d);
alert(c/d);

//Задание 5
let g = 2;
let h = 5;
let result = g**h;
 alert(result);

//Задание 6
let name1 = 9;
let name2 = 2;
let newresult = name1 % name2;
alert(newresult);

//Задание 7
let num =1;
num += 5;
num -= -3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Задание 8
let age = prompt('Сколько вам лет');
age = Number(age);

//Задание 9.0
let user = {
    name:'Daniil',
    age: 25,
    isAdmin:true,
}
console.log(user)
//Задание 9.1
user.Lastname = 'City of residence'
//Задание 9.2
user.name = 'Viktoriya'
//Задание 9.3
delete user.Lastname

//Задание 9.4 Не понял вот эту задачу что надо именно сделать?
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(info.user);

// Задание 10
let Programist = prompt('Как тебя зовут?');
alert(`Привет,${Programist}'!'`);
