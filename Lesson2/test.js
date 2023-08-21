// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array_a = ['apple',20,true,'orange','kg','gramm',false,5,'banan','potatoes']
console.log(array_a[0]);
console.log(array_a[2]);
console.log(array_a[3]);
console.log(array_a[4]);
console.log(array_a[5]);
console.log(array_a[6]);
console.log(array_a[7]);
console.log(array_a[8]);
console.log(array_a[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book_one ={
    title:'Adams',
    pageCount:200,
    genre:'novel'
}
let book_two ={
    title:'Scarlet Sails',
    pageCount:290,
    genre:'novel'
}
let book_three ={
    title:'Kobzar',
    pageCount:150,
    genre:'poems'
}
console.log(book_one);
console.log(book_two);
console.log(book_three);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
let book_four ={
    title:'King Arthur and the Knights of the Round Table',
    pageCount:424,
    genre:'adventure',
    authors:'Peter Ackroyd'
}
let book_five ={
    title:'Scarlet Sails',
    pageCount:290,
    genre:'novel',
    authors:'Alexander Hryn'
}
let book_six ={
    title:'Kobzar',
    pageCount:150,
    genre:'poems',
    authors:'Taras Shevchenko'
}
console.log(book_six);
console.log(book_five);
console.log(book_four);
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
 book_six ['autors'] = [{ name:'', age:10}];
console.log(book_six);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
let autors_array = [
    {name:'Volodya',username:'Volodya',password:'123'},
    {name:'Oksana',username:'Oksana',password:'345'},
    {name:'Petya',username:'Petya',password:'132'},
    {name:'Sergiy',username:'Sergiy',password:'734'},
    {name:'Natalya',username:'Natalya',password:'21354'},
    {name:'Lesya',username:'Lesya',password:'57@'},
    {name:'Roman',username:'Roman',password:'56dsc'},
    {name:'Sacha',username:'Sacha',password:'df87*'},
    {name:'Ivan',username:'Ivan',password:'gfj$'},
    {name:'Tolya',username:'Tolya',password:'yuj7'},
]
// Вивести в консоль пароль кожного користувача
console.log(autors_array[0].username,autors_array[0].password);
console.log(autors_array[1].username,autors_array[0].password);
console.log(autors_array[2].username,autors_array[0].password);
console.log(autors_array[3].username,autors_array[0].password);
console.log(autors_array[4].username,autors_array[0].password);
console.log(autors_array[5].username,autors_array[0].password);
console.log(autors_array[6].username,autors_array[0].password);
console.log(autors_array[7].username,autors_array[0].password);
console.log(autors_array[8].username,autors_array[0].password);
console.log(autors_array[9].username,autors_array[0].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
let x;
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
if (x!== 0) {
    console.log('Вірно')
} else console.log('Невірно')
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
var a = 1;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
var a = 0;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
var a = -3;

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої
// четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 19;
if (time >= 0 && time <= 14) {
    console.log("Перша чверть години");
} else if (time >= 15 && time <= 29) {
    console.log("Друга чверть години");
} else if (time >= 30 && time <= 44) {
    console.log("Третя чверть години");
} else if (time >= 45 && time <= 59) {
    console.log("Четверта чверть години");
} else {
    console.log("Значення некоректне");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє
// це число (у першу, другу чи третю).
let day = 30;
if (day >= 1 && day <= 10) {
    console.log("Перша декада місяця");
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада місяця");
} else if (day >= 21 && day <= 31) {
    console.log("Третя декад місяця");
} else {
    console.log("Значення дня некоректне");
}

// -    Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayNumber = 1;
switch (dayNumber) {
    case 1:
        console.log( 'План на понеділок');
        break;
    case 2:
        console.log('План на вівторок');
        break;
    case 3:
        console.log('План на середу')
        break;
    case 4:
        console.log('План на четвер');
        break;
    case 5:
        console.log('План на пятницю');
        break;
    case 6:
        console.log('План на суботу');
        break;
    case 7:
        console.log('План на неділю');
        break;
    default:
        console.log('Помилка такого дня тиждня не існує ');
}
//     - Користувач вводить або має два числа.
//       Потрібно знайти та вивести максимальне число з тих двох .
////       Також потрібно врахувати коли введені рівні числа.
let b = 1;
let c = 6;
if (b>c) {
    console.log('Max Number',b)
} else
    if (b<c){
        console.log('Max Number',c)
    }
    else { console.log('b == c')
    }

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення
//  змінної х являється falsy (хибноподібні, тобто приводиться до false)
let d;
d = d || "default";
console.log(d);

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо
// тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>=5) {
    console.log('Супер',coursesAndDurationArray[0].monthDuration);
}if (coursesAndDurationArray[1].monthDuration>=5) {
    console.log('Супер',coursesAndDurationArray[0].monthDuration);
}if (coursesAndDurationArray[2].monthDuration>=5) {
    console.log('Супер',coursesAndDurationArray[0].monthDuration);
}if (coursesAndDurationArray[3].monthDuration>=5) {
    console.log('Супер',coursesAndDurationArray[0].monthDuration);
}if (coursesAndDurationArray[4].monthDuration>=5) {
    console.log('Супер',coursesAndDurationArray[0].monthDuration);
}if (coursesAndDurationArray[5].monthDuration>=5) {
    console.log('Супер',coursesAndDurationArray[0].monthDuration);
}
