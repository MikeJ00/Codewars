//--1--//Какие способы создания объекта есть в JS

// 1.1 Литерал объекта - состоит из пары ключ - значение
let object = {
    name: "Ivan",
    age: 39
}
//1.2 Констурктор объекта
let object1 = new Object();
let object2 = Object();

// 1.3 Метод создания объекта - полезен для создания новых объектов
// на основе существвующих
let obj1 = Object.create(null);
let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
}
let carProps = {
    type: {
        value: 'Volkswagen'
    },
    model: {
        value: 'Golf'
    }
}
let car = Object.create(vehicle, carProps);
console.log(car);

// 1.4 Функция конструктор - При таком подходе создаем любую функцию и
// применяем оператор new для создания экземпляров объекта.
function Person(name, age) {
    this.name = name;
    this.age = age
}

let obj2 = new Person("Kolja", 90)
console.log(obj2)

// 1.5 Функция конструктор с прототипом
function Person1(name) {
}

Person1.prototype.name = "Ivan";
let obj3 = new Person1();
console.log(obj3)

// 1.6 Метод присоединения объекта - используется для копирования всех свойств из одного
// или нескольких исходных объектов и сохранения их в целевом объекте.
const orgObj = {company: "RogaAndCop"}
const carObj = {name: "UAZ"}
const targetObj = Object.assign({}, orgObj, carObj)
console.log(targetObj)

// 1.7 ES6 Классовый синтакс
class Person2 {
    constructor(name) {
        this.name = name;
    }
}

let obj4 = new Person2("IIII")
console.log(obj4)

// 1.8 Паттерн синглтон - это объект, экземпляр которого может быть создан только один раз
// Повторные вызовы будут возвращать один и тот же экземпляр.
let obj5 = new (function () {
    this.name = "Only 1 name"
})();
console.log(obj5)

//--2--// Что такое цепочка прототипов
// Цепочка прототипов используется для создания новых типов объектов на основе существующих.
//Это что-то типа наследование в классах.

//--3--// Разница между Call/Apply/bind
// 3.1 Call вызывает  функцию с заданными значением и аргументами, следующими друг за другом
let empl1 = {firstName: "Gena", lastName: "Plot"}
let empl2 = {firstName: "Ok", lastName: "Wsr"}

function invite(greeting1) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName)
}

invite.call(empl1, "Hey!")
invite.call(empl2, "Good Morning!")

// 3.2 Apply вызывает  функцию с заданными значением и позволяет передать аргумент в виде массива
let empl3 = {firstName: "Gena", lastName: "Plot"}
let empl4 = {firstName: "Ok", lastName: "Wsr"}

function invite1(greeting1) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName)
}

invite1.apply(empl3, ["Hello!"])
invite1.apply(empl4, ["WWWW!"])

// 3.3 Bind возвращает новую функцию, позволяющую передавать любое количество аргументов.
let empl5 = {firstName: "Gena", lastName: "Plot"}
let empl6 = {firstName: "Ok", lastName: "Wsr"}

function invite2(greeting1) {
    console.log(greeting1 + " " + this.firstName + " " + this.lastName)
}

let inviteEmpl1 = invite2.bind(empl5)
let inviteEmpl2 = invite2.bind(empl6)
inviteEmpl1("QQQQQQQQQ")
inviteEmpl2("SSSSSSSSSSSSS")
// Call and Apply are pretty much interchangeable.
// Both execute the current function immediately.
// You need to decide whether it’s easier to send in an array or a comma
// separated list of arguments. You can remember by treating
// Call is for comma (separated list) and Apply is for Array.
// Bind creates a new function that will have this set to the first parameter passed to bind().
//     РУССКИЙ
// Позвонить и подать заявку практически взаимозаменяемы.
// Оба немедленно выполняют текущую функцию.
// Вам нужно решить, что проще отправить: массив или список аргументов, разделенных запятыми.
// Вы можете запомнить это, обработав Call для запятой (разделенный список),
// а Apply для массива. Bind создает новую функцию, для которой это значение будет установлено
// в качестве первого параметра, переданного в функцию Bind().

//--4--// Что такое JSON и его операции
// JSON - это текстовый формат данных, который соотв синтаксу объектов JS.
// Используем когда нам нужно передать данные по сети
// 4.1 Parsing - преобразование строки в объект
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj.count);
// 4.2 Stringification - преобразование объекта в строку для передачи по сети
console.log(JSON.stringify({x: 5, y: 6}));
console.log(JSON.stringify(new Date()));

//--5--// Какова цель метода slice массива
// возвращает выбранные элементы массива как новый объект массива.
// Он выбирает элементы, начинающиеся с данного начального аргумента, и заканчиваются данным
// необязательным конечным аргументом, не включая последний элемент.
//Если вы опустите второй аргумент, он будет выбирать до конца массива.
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2);
let arrayIntegers2 = arrayIntegers.slice(1);
console.log(arrayIntegers1, arrayIntegers2)
console.log(arrayIntegers)

//--6--// Какова цель метода splice массива
// Метод splice() добавляет/удаляет элементы в массив или из него, а затем возвращает удаленный элемент.
// Первый аргумент указывает позицию/индекс массива для вставки или удаления, тогда как необязательный второй аргумент
// указывает количество элементов, которые необходимо удалить.
//     Каждый дополнительный аргумент добавляется в массив.
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrInt1 = arrayIntegersOriginal1.splice(0, 2)
let arrInt2 = arrayIntegersOriginal2.splice(3)
console.log(arrInt1, arrInt2)
console.log(arrayIntegersOriginal1, arrayIntegersOriginal2)

//--7--// В чем разница между splice/slice
// Slice                                         Splice
// Не изменяет исходный массив (неизменяемый)    Изменяет исходный массив (изменяемый)
// Возвращает подмножество исходного массива     Возвращает удаленные элементы в виде массива
// Используется для выбора элементов из массива  Используется для вставки/удаления элементов в/из массива.

//--8--// Сравнение map & Object
// Объекты похожи на Карты в том, что оба позволяют устанавливать ключи в значения, извлекать эти значения, удалять ключи
// и определять, хранится ли что-то по ключу. По этой причине объекты исторически использовались в качестве карт.
// Но есть важные различия, которые делают использование карты предпочтительнее в определенных случаях:
// 8.1 Ключами объекта могут быть строки и символы,
//тогда как для map они могут быть любым значением, включая функции, объекты и любые примитивы.
// 8.2 Ключи на map упорядочены, а ключи, добавленные в объект, — нет.
// Таким образом, при переборе объект Map возвращает ключи в порядке вставки.
// 8.3 Ключи на map упорядочены, а ключи, добавленные в объект, — нет.
// Таким образом, при переборе объект Map возвращает ключи в порядке вставки.
// 8.4 map является итерируемой, и поэтому ее можно перебирать напрямую,
// тогда как итерация по объекту требует каким-то образом получить его ключи и перебрать их.
// 8.5 У объекта есть прототип, поэтому в объекте есть ключи по умолчанию,
// которые могут столкнуться с вашими ключами, если вы не будете осторожны.
// Начиная с ES5, это можно обойти, создав объект (который можно назвать картой) с помощью Object.create(null),
// но такая практика применяется редко.
// 8.6 Map может работать лучше в сценариях, связанных с частым добавлением и удалением пар ключей.

//--9--// В чем разница между операторами == и ===
// JavaScript обеспечивает как строгое (===, !==), так и преобразование типов (==, !=) сравнение на равенство.
//Строгие операторы учитывают тип переменной, тогда как нестрогие операторы выполняют
// коррекцию/преобразование типа на основе значений переменных.
//Строгие операторы следуют приведенным ниже условиям для разных типов:
//Две строки строго равны, если они имеют одинаковую последовательность символов,
//одинаковую длину и одинаковые символы в соответствующих позициях.
//Два числа строго равны, если они численно равны, т. е. имеют одинаковое числовое значение.
//Здесь есть два особых случая:
// NaN не равен ничему, включая NaN.
//Положительные и отрицательные нули равны друг другу.
// Два логических операнда строго равны, если оба истинны или оба ложны.
// Два объекта строго равны, если они ссылаются на один и тот же объект.
// Типы Null и Undefine не равны ===, но равны == . т.е. null===undefined --> ложь,
//     но null==undefined --> true
console.log(0 == false)
console.log(0 === false)
console.log(1 == "1")
console.log(1 === "1")
console.log(null == undefined)
console.log(null === undefined)
console.log(NaN === NaN)
console.log(NaN === NaN)
console.log({} === {})
console.log({} == {})

//--10--// Что такое лямбда-выражения или стрелочные функции?
// Стрелочная функция представляет собой более короткий/лаконичный синтаксис функционального выражения
// и не имеет собственных аргументов this, super или new.target.
// Эти функции лучше всего подходят для функций, не являющихся методами, и их нельзя использовать
// в качестве конструкторов.
const arrowFunc1 = (a,b) => a*b;
console.log(arrowFunc1(2,5))
