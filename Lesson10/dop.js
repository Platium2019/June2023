let array = []
let title = []
let author = []
let mp3 = []

let newtitle = document.querySelectorAll(".item-grid-card__title")
let newAutor = document.querySelectorAll(".item-grid-music-preview__author")
let newMp3 = document.querySelectorAll("audio")

newtitle.forEach((values)=>{title.push(values.innerText)})
newAutor.forEach((values)=>{author.push(values.innerText)})
newMp3.forEach((values)=>{mp3.push(values.getAttribute("src"))})

for (let index = 0; index < title.length; index++) {
    let data = {
        title:title[index],
        author:author[index],
        mp3:mp3[index]
    };
    array.push(data);
}

https://mixkit.co/free-stock-music/


    let newtitle = document.querySelectorAll(".item-grid-card__title");
let newAutor = document.querySelectorAll(".item-grid-music-preview__author");
let newMp3 = document.querySelectorAll("audio");

let array = Array.from(newtitle).reduce((accumulator, currentValue, index) => {
    let data = {
        title: currentValue.innerText,
        author: newAutor[index].innerText,
        mp3: newMp3[index].getAttribute("src")
    };
    accumulator.push(data);
    return accumulator;
}, []);

console.log(array)