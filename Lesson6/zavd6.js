// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strObj = ['hello world', 'lorem ipsum', 'javascript is cool']
function strLenght(text){
    for (const textElement of text) {
        console.log(textElement.length);
    }
 }
strLenght(strObj);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
function strUppercase(text){
    for (const textElement of text) {
        console.log(textElement.toUpperCase());
    }
}
strUppercase(strObj);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strObj1 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
function strLowrcase(text){
    for (const textElement of text) {
        console.log(textElement.toLowerCase());
    }
}
strLowrcase(strObj1)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
while (str.charAt(0) === ' ') {
    str = str.slice(1);
}
while (str.charAt(str.length -1) === ' ') {
    str = str.slice(0, -1);
}
console.log(str.trim());
console.log(str)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str2 = 'Ревуть воли як ясла повні';
    let wordsArray = str2.split(' ');
    console.log(wordsArray);

// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrays = [10,8,-7,55,987,-1011,0,1050,0]
let rezultArray = arrays.map(String);
console.log(rezultArray)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
let nums = [11,21,3]
console.log(nums.sort((a,b) => a-b));
console.log(nums.sort((a,b) => b-a))
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let rezultCAD = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(rezultCAD);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredCurses = coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredCurses);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const newArray = coursesAndDurationArray.map((course, index) => ({
    id: index+1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(newArray);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cardSuits = ['spade', 'diamond','heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];
const colorCard = ['red','black'];

let cardsDesc=[]
for (const suit of cardSuits) {
    for (const value of values){
            let color = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
             cardsDesc.push({suit: suit, value: value, color: color});
        }
    }
console.log(cardsDesc);
// - знайти піковий туз
const piqAce = cardsDesc.filter(card => card.suit == 'spade' && card.value == 'ace'&&card.color =='black');
console.log(piqAce);
// - всі шістки
 const six = cardsDesc.filter(card => card.value ==6);
 console.log(six);
// - всі червоні карти
const redCard = cardsDesc.filter(card =>card.color == 'red');
console.log(redCard);
// - всі буби
const clubsCard = cardsDesc.filter(card =>card.suit == 'clubs');
console.log(clubsCard);
// - всі трефи від 9 та більше
const spadeCards = cardsDesc.filter(card => card.suit == 'spade' && parseInt(card.value)>=9);
console.log(spadeCards);


// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = cardsDesc.reduce(function (accumulator, u) {
    if (u.suit == 'spade') {
        accumulator.spade.push(u);
    } else if (u.suit == 'diamond'){
        accumulator.diamonds.push(u);
    } else if (u.suit == 'heart') {
        accumulator.hearts.push(u);
    }else {
        accumulator.clubs.push(u);
    }
    return accumulator

}, {spade: [], diamonds:[],hearts:[],clubs:[]});
console.log(reduce);



// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass
let coursSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log(coursSass);
// --написати пошук всіх об'єктів, в який в modules є docker
let coursDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log(coursDocker);