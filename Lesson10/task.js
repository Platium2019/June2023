// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом
let f1r = document.forms.F1;

f1r.onsubmit = function (e) {
    e.preventDefault();
    let data = {
        name: f1r.name.value,
        surname: f1r.surname.value,
        age: f1r.age.value,
    }
    console.log(data);
    let dataOutput = JSON.stringify(data);
    document.getElementById("output").textContent = dataOutput;
}
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені
// стоінки буде додавати до неї +1

let currentNumber = localStorage.getItem('count') || 0;
const counterElement = document.getElementById('counter');
currentNumber++;
counterElement.textContent = currentNumber;
localStorage.setItem('count', currentNumber.toString());

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається
// інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//
let data = [];
const prevPages = 10;
let currentPage = 0;

const output1 = document.getElementById("output1");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");




//
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при
// натисканні на кнопку зникав елемент з id="text".
//
const textElement = document.getElementById('text');
const hideButton = document.getElementById('hideButton');
const visibleButton = document.getElementById('visibleButton');
hideButton.addEventListener('click', function () {
    textElement.style.display = 'none';
});
visibleButton.addEventListener('click', function () {
textElement.style.display = 'block';
});
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const buttonAge = document.getElementById('buttonAge');
buttonAge.addEventListener('click',function (){
    const age1 = document.getElementById("ageInput").value;
    if (age1 < 18) {
        document.getElementById("result").innerHTML = "Вам меньше 18";
    } else {
        document.getElementById("result").innerHTML = "Ваш вік більше 18 ";
    }
});


