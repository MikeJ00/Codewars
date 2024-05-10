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
const arrowFunc1 = (a, b) => a * b;
console.log(arrowFunc1(2, 5))

//--11--// Что такое функция первого класса?
// В Javascript функции являются объектами первого класса. Функции первого класса означают,
//что функции на этом языке рассматриваются как любая другая переменная.
//Например, в таком языке функция может передаваться в качестве аргумента другим функциям,
//может быть возвращена другой функцией и может быть присвоена как значение переменной.
//Например, в приведенном ниже примере функции-обработчики, назначенные прослушивателю
// const handler = () => console.log("This is a click handler function");
// document.addEventListener("click", handler);

//--12--// Что такое функция первого порядка?
// Функция первого порядка — это функция, которая не принимает другую функцию в качестве аргумента
// и не возвращает функцию в качестве возвращаемого значения.
const firstOrder = () => console.log("I am a first order function!");
firstOrder()

//--13--// Что такое функция высшего порядка?
// Функция высшего порядка — это функция, которая принимает другую функцию в качестве аргумента или возвращает функцию
// в качестве возвращаемого значения, или и то, и другое.
//     Синтаксическая структура функции высшего порядка будет следующей:
const firstOrderFunc = () => console.log("Hello, I'm a higher order function")
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc)
// Вы также можете вызвать функцию, которую вы передаете функции более высокого порядка,
//     в качестве функции обратного вызова. Функция высшего порядка полезна для написания модульного и
// многократно используемого кода.

//--14--// Что такое унарная функция?
// Унарная функция (т.е. монадическая) — это функция, которая принимает ровно один аргумент.
//     Он обозначает один аргумент, принимаемый функцией. Возьмем пример унарной функции:
const unaryFunc = (a) => console.log(a + 10)
unaryFunc(30)

//--15--// Что такое функция каррирования?
// Каррирование — это процесс преобразования функции с несколькими аргументами в последовательность функций,
//каждая из которых имеет только один аргумент.
//Применяя каррирование, n-арная функция превращается в унарную функцию.
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3));
const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
console.log(curryUnaryFunction(1)(2)(8))
// Каррированные функции отлично подходят для улучшения повторного использования кода и функциональной композиции.

//--16--//Что такое чистая функция
// ЧФ - это функция, возвращаемое значение которой определяется только ее
// аргументами без каких-либо побочных эффектов. то есть,Если вы вызываете функцию с одинаковыми
// аргументами «n» количество раз и «n» количество мест в
// приложении, она всегда будет возвращать одно и то же значение.
let numberArr = [];
const impureAddNumber = (number) => numberArr.push(number)
const pureAddNumber = (number) => (argNumberArray) => argNumberArray.concat([number])

console.log(impureAddNumber(6))
console.log(numberArr)
console.log(pureAddNumber(9)(numberArr))

// Согласно приведенным выше фрагментам кода, функция Push сама по себе является нечистой, изменяя массив и
// возвращая индекс номера push, независимый от значения параметра, тогда как Concat, с другой стороны, берет массив и
// объединяет его с другим массивом, создавая совершенно новый массив. без побочных эффектов. Кроме того, возвращаемое
// значение представляет собой объединение предыдущего массива.
// Помните, что чистые функции важны, поскольку они упрощают модульное тестирование без каких-либо побочных
// эффектов и отсутствия необходимости внедрения зависимостей.
//Они также избегают жесткой связи и затрудняют выход из строя вашего приложения, не вызывая каких-либо побочныхэффектов.
//Эти принципы сочетаются с концепцией неизменяемости ES6: предпочтение отдается использованию const, а не let.

//--17--//Какова цель ключевого слова let
//Оператор let объявляет локальную переменную области действия блока.
//Следовательно, переменные, определенные с помощью ключевого слова let,
// ограничены по объему блоком, оператором или выражением, в котором они используются.
//В то время как переменные, объявленные с помощью ключевого слова var, используются для определения переменной
// глобально или локально для всей функции независимо от области действия блока.
let counter = 37;
if (counter === 30) {
    let counter = 31;
    console.log(counter); // 31
}
console.log(counter);

//--18--//В чем разница между let и var
// var                                                               let
// Он был доступен с самого начала JavaScript.                       Представлен как часть ES6
// Он имеет функциональную область видимости                         Он имеет область видимости блока
// Объявление переменной будет поднято                               Поднят, но не инициализирован
// Можно повторно объявить переменную в той же области видимости.    Невозможно повторно объявить переменную
let pol1 = "WWW"
console.log(pol1)
console.log(pol)
var pol = 2;
console.log(pol)
function userDetails(username){
    if(username){
        let age = 30;
        console.log(salary)// undefined due to hoisting
        console.log(age)// Cannot access 'age' before initialization
        // let age = 30;
        var salary = 10000;
    }
    // console.log(age)//age is not defined
    console.log(salary)
}
userDetails("OL")

//--19--//
//--20--//Как переобъявить переменные в блоке switch без ошибки?
// Если вы попытаетесь переопределить переменные в блоке переключателя, это приведет к ошибкам,
//     поскольку существует только один блок.
//     Например, приведенный ниже блок кода выдает синтаксическую ошибку, как показано ниже:
let counter1 = 1;
let x = 5
switch (x) {
    case 0:
        let name;
        break;

    case 1:
        // let name; // SyntaxError for redeclaration.
        break;
}
// Чтобы избежать этой ошибки, мы моежм создать вложенный блок внутри
// предложения case и создать новую лексическую среду с областью действия блока.
let counter2 = 1;
switch (x) {
    case 0: {
        let name;
        break;
    }
    case 1: {
        let name; // No SyntaxError for redeclaration.
        break;
    }
}

//--21--//Что такое временная мертвая зона
// Временная мертвая зона (TDZ) — это определенный период или область блока, где переменная недоступна
// до тех пор, пока она не будет инициализирована значением. Такое поведение в JavaScript,
//     которое происходит при объявлении переменной с ключевыми словами let и const, но не с помощью var.
// В ECMAScript 6 доступ к переменной let или const до ее объявления (в пределах ее области действия)
// вызывает ошибку ReferenceError.
function somemethod(){
    console.log(ex1);//undefined
    // console.log(ex2);//Cannot access 'ex2' before initialization
    var ex1 = 5;
    let ex2 = 10;
}
somemethod()

//--22--//Что такое IIFE (выражение функции с немедленным вызовом)
// IIFE (выражение немедленно вызываемой функции) — это функция JavaScript, которая
// запускается сразу после ее определения.Подпись будет такой, как показано ниже:
//     function (){
//         console.log("55")
// }();
// Основная причина использования IIFE — обеспечение конфиденциальности данных,
//     поскольку любые переменные, объявленные в IIFE, не могут быть доступны внешнему миру.
//     т. е. если вы попытаетесь получить доступ к переменным из IIFE, то выдается ошибка, как показано ниже:
let a1 = (function () {
    var message = "IIFE";
    console.log(message);
})();
// console.log(message);//message is not defined

//--23--// Как декодировать или кодировать URL-адрес в JavaScript?
// Функция encodeURI() используется для кодирования URL-адреса.
//     Эта функция требует строку URL-адреса в качестве параметра и возвращает эту закодированную строку.
//     Функция decodeURI() используется для декодирования URL-адреса. Эта функция требует
// в качестве параметра закодированную строку URL-адреса и возвращает эту декодированную строку.
//     Примечание. Если вы хотите закодировать такие символы, как / ? : @ & = + $ #
// тогда вам нужно использовать encodeURIComponent().
let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri)
console.log(decoded_uri)

//--24--//Что такое мемоизация
// Мемоизация — это метод функционального программирования, который пытается повысить
// производительность функции за счет кэширования ранее вычисленных результатов.Каждый раз,
//     когда вызывается мемоизированная функция, ее параметры используются для индексации кеша.
//     Если данные присутствуют, то их можно вернуть, не выполняя всю функцию.
//     В противном случае функция выполняется, а затем результат добавляется в кеш.
//     Давайте рассмотрим пример добавления функции с мемоизацией:
const memoizAddition = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log("Fetching from cache");
            return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
        } else {
            console.log("Calculating result");
            let result = value + 20;
            cache[value] = result;
            return result;
        }
    };
};
// returned function from memoizAddition
const addition = memoizAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(30)); //output: 40 calculated
console.log(addition(40)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached

//--25--//Что такое подъем(hoisting)
// https://www.w3schools.com/js/js_hoisting.asp#:~:text=Hoisting%20is%20JavaScript's%20default%20behavior%20of%20moving%20all%20declarations%20to,script%20or%20the%20current%20function).
// Подъем — это механизм JavaScript, в котором переменные, объявления функций и классы
// перемещаются в верхнюю часть области видимости перед выполнением кода.
//Помните, что JavaScript поддерживает только объявления, а не инициализацию.
p = 0
console.log(p)
var p;
var message1;
console.log(message); //output : undefined
console.log(message1); //output : undefined
message1 = "variable hoisted"
var message = "The variable Has been hoisted";
console.log(message)
var xx = 5;
var yyy;
// console.log( xx + " " +  yy + " " + yyy)
// console.log( xx + yyy)
// console.log(xx)
// console.log(yy)
var yy = 7
yyy = 9
message2("wwwww")
function message2(name) {
    console.log(name);
}

//--26--//Что такое классы в ES6
// В ES6 классы Javascript представляют собой в первую очередь синтаксический сахар по сравнению с
// существующим в JavaScript наследованием на основе прототипов.
//     Например, наследование на основе прототипа, записанное в функциональном выражении, как показано ниже:
function Bike(model, color) {
    this.model = model;
    this.color = color;
}

Bike.prototype.getDetails = function () {
    return this.model + " bike has" + this.color + " color";
};
let Bike2 = new Bike("toyota","white");
console.log(Bike2.getDetails())
// Классы ES6 могут быть определены как альтернатива
class Bike1 {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    getDetails() {
        return this.model + " bike has " + this.color + " color";
    }
}
let myBike = new Bike1("black", "bmw");
console.log(myBike.getDetails())
//--27--//Что такое замыкания
// Замыкание — это комбинация функции, связанной (заключенной) вместе с ее лексическим окружением,
//     в котором эта функция была объявлена. то есть это внутренняя функция, которая имеет доступ к
// переменным, функциям и другим данным внешней или охватывающей функции даже после того, как внешняя
// функция завершила свое выполнение.
//     Замыкание имеет три цепи охвата.
// Собственная область действия, где переменные определены между фигурными скобками.
//     Переменные внешней функции
// Глобальные переменные
function Welcome(name) {
    var greetingInfo = function (message) {
        console.log(message + " " + name);
    };
    return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr. John
// Согласно приведенному выше коду, внутренняя функция (т. е. GreetingInfo)
// имеет доступ к переменным в области внешней функции
// (т. е. Welcome) даже после возврата внешней функции.
// +еще пример
function makeAdder(x){
    return function(y){
        return x + y
    }
}
let add6 = makeAdder(6)
console.log(add6(2))
// Одна из основных причин, по которой замыкания полезны, это то, что они позволяют "скрывать"
// значения внутри функции, защищая их от внешнего мира. Это может быть полезно, когда вы хотите
// сохранить состояние, которое должно быть доступно только для определенной функции.
//     Они также могут быть использованы для создания функций, которые имеют "приватные" переменные.
//     В JavaScript нет встроенной возможности сделать переменные приватными,
//     но это можно эмулировать с помощью замыкания.



