// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const area_rectangle = (a,b) => {
    return a*b
}
console.log(area_rectangle(2,3))


// - створити функцію яка обчислює та повертає площу кола з радіусом r
const  area_circle = (r) => {
        return 3.14*(r**2)
}
console.log(area_circle(5))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let  area_cylinder =  (h,r)=> {
    return 2*3.14*r*(h+r)
}
console.log(area_cylinder(5,7))


// - створити функцію яка приймає масив та виводить кожен його елемент
let print_user = (users)=>{
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
        }
    }
let user = [12,'tes',2,'ty',6,7,8,10]
print_user(user)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraf  = (text)=>{
   document.write(`<p> ${text}</p>`)
}
paragraf('Privet');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const li_three = (text) => {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
            document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
    return;
}
li_three( 'text')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ul_li_three =(text,b)=> {
    document.write('<ul>')
    for (let i = 0; i < b; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
    return;
}
ul_li_three( 'text',6)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function array_list(list){
    document.write(`<ol>`)
    for (let ind = 0; ind < list.length; ind++) {
        document.write(`<li>${list[ind]}</li>`)
    }
    document.write(`</ol>`)
}
let test = [3,666,'323',true];
array_list(test)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const  list_array = (list1) => {
    for (let ind = 0; ind < list1.length; ind++) {
        document.write(`<div>${list1[ind].id} ${list1[ind].name} ${list1[ind].age}</div>`)
    }
}
let text1 = [
    {id:1, name:'terr',age:20},
    {id:3, name:'terr',age:24},
    {id:4, name:'terr',age:27}
]

list_array(text1)


// - створити функцію яка повертає найменьше число з масиву
let list_number = [4,2,8,10,30]
let  min_number = (array_numb)=> {
    let min = array_numb[0];
    for (let i = 1; i < array_numb.length; i++) {
        if (array_numb[i] < min) {
         min = array_numb[i];
        }

    }
    return min
}
console.log(min_number(list_number));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let Sum_array = (array)=>{
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum+=array[i];
    }
    return  sum
}
let arr_list = [3,5,8,10];
console.log(Sum_array(arr_list))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (arr,index1,index2)=> {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
const myarray =[11,22,33,44];
swap(myarray,0,1);
console.log(myarray);
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

const  exchange = (sumUAH,currencyValues,exchangeCurrency)=> {
    for (let cur of currencyValues) {
        if (cur.currency === exchangeCurrency) {
            return sumUAH / cur.value;
        }
    }
   }

let currencyValues = [
    {currency:'usd', value:40},
    {currency:'EUR', value:42}
]

console.log(exchange(10000,currencyValues,'usd'));

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250