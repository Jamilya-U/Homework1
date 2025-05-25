//задание 1
let i = 0;
while (i <= 1) {
    console.log("Привет")
    i++;
}
//задание 2
i = 1;
while (i <= 5) {
    console.log(i)
    i++;
}
//задание 3
i = 7;
while (i <= 22) {
    console.log(i);
    i++;
}
//задание 4
const obj = {
    Коля: 200,
    Вася: 300,
    Петя: 400,
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов`)
}
//задание 5
n = 1000;
nam = 0;
do {
    n /= 2;
    nam += 1;
    console.log(n);
}
while (n >= 50);
console.log("Количество итераций =", nam)
//задание 6
nam = 3;
while (nam <= 31) {
    console.log("Сегодня пятница,", nam + "-е число. Необходимо подготовить отчет.")
    nam += 7;
}
//доп задания
//задиние 1
k = 100;
n = 0;
do {
    k -= 7;
    n += 1
}
while (k > 0)
console.log("Количество итераций =", n, "число =", k)
//задиние 2
month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"]
nam = 0;
for (let key in month) {
    nam += 1;
    console.log(month[key], "-", +nam);
}
//задиние 3
const book = {
    "Название" : "Робин гуд",
    "Автор" : "Александр Дюма",
    "Год издания" : "1872",
    "Жанр" : "историко-приключенческий роман",
}
for (let key in book) {
    console.log(`${key} - ${book[key]}`)
}
//задиние 4
minnamber = [22, 35, 15, 100, 105, 60, 70, 19, 45, 88]
min=minnamber[0];
for (let i in minnamber) {
    if (min>minnamber[i]) {
        min=minnamber[i]
    }
}
console.log(min)