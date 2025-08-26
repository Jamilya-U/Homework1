//задание 1
let password = 'пароль';
kay = prompt('Введите пароль');
console.log(kay == password ? "Пароль введен верно" : "Пароль введен неправильно");
//задание 2
let c = 9;
console.log(c > 0 && c < 10 ? "Верно" : "Неверно");
//задание 3
d = 15;
e = 200;
console.log(d > 100 || e > 100 ? "Верно" : "Неверно");
//задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));
//задани 5
let monthNumber = 12;
switch (monthNumber) {
    case (monthNumber >= 1 && monthNumber <= 2) || monthNumber === 12:
        console.log('зима');
        break;
    case (monthNumber <= 3 && monthNumber >= 5):
        console.log('весна');
        break;
    case (monthNumber <= 6 && monthNumber >= 8):
        console.log('лето');
        break;
    case (monthNumber <= 9 && monthNumber >= 11):
        console.log('осень');
        break;
    default:
        monthNumber > 12;
}

//доп. задания
//задание 1
number = prompt("Пожалуйста, введите любое число")
if (Number(number) && number % 2 === 0) {
    console.log("четное")
}
else if (Number(number) && number % 2 !== 0) {
    console.log("нечетное")
}
else {
    console.log("ошибка")
}
//задание 2,3
clientOS = Number(prompt("Введите 1 если произвели вход с устройства Android, 0 если c IOS"))
clientDeviceYear = Number(prompt("Пожалуйста введите год выпуска, вашего смартфона"))
if (clientOS === 0) {
    console.log(clientDeviceYear < 2015
        ? "Установите облегченную версию приложения для iOS по ссылке"
        : "Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
    console.log(clientDeviceYear < 2015
        ? "Установите облегченную версию приложения для Android по ссылке"
        : "Установите версию приложения для Android по ссылке");
} 
