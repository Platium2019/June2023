// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

function userFactoryFunction(id,name,surname,email,phone) {
    return {id,name,surname,email,phone}
}

console.log(userFactoryFunction(1,'petya','dfhfd','vovan12@gmail','654654'))
console.log('створити пустий масив, наповнити його 10 об\'єктами new User(....)')
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name) {
    this.id = id,
    this.name = name
}
let users = [
    new User(4, 'Olya'),
    new User(2, 'Petya'),
    new User(9, 'Oksana'),
    new User(1, 'Lera'),
    new User(5, 'Kolya'),
    new User(6, 'Natalya'),
    new User(8, 'misha'),
    new User(7, 'oleg'),
    new User(3, 'dima'),
    new User(10, 'Angela'),

];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log('Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об\'єкти з парними id (filter)');
console.log(users.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log('Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)');
console.log(users.sort( (a,b) => a.id-b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
console.log('створити класс для об\'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)');
console.log(users.sort( (a,b) => b.id-a.id));
// створити пустий масив, наповнити його 10 об'єктами Client

function Client(id, product, order) {
    this.id = id,
    this.product = product,
    this.order = order
};
let clients = [
    new Client(1,'watch','40'),
    new Client(2,'watch','100'),
    new Client(3,'watch','40'),
    new Client(4,'watch','30'),
    new Client(5,'watch','200'),
    new Client(6,'watch','650'),
    new Client(7,'watch','40'),
    new Client(8,'watch','90'),
    new Client(9,'watch','5'),
    new Client(10,'watch','70'),
];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)');
console.log(clients.sort((a,b) =>a.order-b.order));
//
console.log('Створити функцію конструктор яка дозволяє створювати об\'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об\'єм двигуна. додати в об\'єкт функції:')
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Car(model, manufacturer, year, maxSpeed, power) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.power = power;
    this.driver = 0;

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    console.log('drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину')
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    console.log('info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`')
    this.info = function () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed} км/год`);
        console.log(`Об'єм двигуна: ${this.power} л`);
    };
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    console.log( 'increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed')
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`Максимальна швидкість збільшена на ${newSpeed} км/год`);
    };
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newYear) {
        this.year += newYear;
        console.log(`Рік випуску змінено ${newYear}`);
    };
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
     this.addDriver = function (driver) {
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий`);
    };
};
//
const clientCar = new Car('Nemo', 'Citroen', 20, 180, 1.4);
console.log('Info');
clientCar.info();
console.log('Drive')
clientCar.drive();
console.log('increaseMaxSpeed');
clientCar.increaseMaxSpeed(60);
console.log('changeYear');
clientCar.changeYear(2024);
console.log('addDriver');
clientCar.addDriver({ name: 'Petya'});
console.log('Output change info')
clientCar.info();


// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Carone {
    constructor(model, manufacturer, year, maxSpeed, power) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.power = power;
        this.driver = null;
    }
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info () {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.year}`);
        console.log(`Максимальна швидкість: ${this.maxSpeed}`);
        console.log(`Об'єм двигуна: ${this.power} `);
    };

/// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`Максимальна швидкість збільшена ${newSpeed} км/год`);
    };
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear (newYear) {
        this.year = newYear;
        console.log(`Рік випуску змінено ${newYear}`);
    };
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver){
        this.driver = driver;
        console.log(`Водій ${driver.name} доданий`);
    };

}
//
const myCar = new Carone('Nemo', 'Citroen', 20, 180, 1.4);
myCar.info();
myCar.drive();
myCar.increaseMaxSpeed(30);
myCar.changeYear(2020);
myCar.addDriver({ name: 'Petya'});

myCar.info();
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class  Cinderell {
    constructor(name,age, footsize) {
        this.name = name;
        this.age = age;
        this.footsize = footsize;
    }
}
let Cinderells =[
    new Cinderell('Olya',19,19),
    new Cinderell('Natalya',27,17),
    new Cinderell('Oksana',32,20),
    new Cinderell('Vika',40,47),
    new Cinderell('Vera',33,37),
    new Cinderell('Lucya',23,47),
    new Cinderell('Dusya',36,36),
    new Cinderell('Hrustuna',53,18),
    new Cinderell('Luba',43,22),
    new Cinderell('Nadya',33,23)
    ];

console.log(Cinderells);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, findshoes) {
    this.name = name;
    this.age = age;
    this.findshoes = findshoes;
}
};

const princelove = new Prince ('Dima', 33, 22);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

let findCinderella = 0;
for (const cinderell of Cinderells) {
    if (cinderell.footsize === princelove.findshoes)    {
        findCinderella = cinderell;
}
    }
if (findCinderella) {
    console.log(`Принц ${princelove.name} + Попелюшка ${findCinderella.name}`);
}else {
    console.log('? не поталанило')
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(Cinderells.find((cinderella) => cinderella.footsize === princelove.findshoes));
