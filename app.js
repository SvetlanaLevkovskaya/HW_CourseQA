// 1 Переменные
// camelCase
//const firstName = 'Svetlana'
//const lastName = 'Levkovskaya' // string
//let age = 42 // number
//const isProgrammer = true // boolean

//const _ = 'private'
//const $ = 'some value'

// const if = 'skjh' // err
//const withNumber5 = '5'
//const 5withNumber = '5' // err

// 2 Мутирование
//console.log('Имя человека: ' + firstName +', а возраст человека: ' + age)
//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

//prompt('Введите фамилию')
//alert(firstName + ' ' + lastName)

// 3 Операторы

//let currentYear = 2021
//const birthday = 1979
// const age = currentYear - birthday
//console.log(age)

//const a = 10
//const b = 5
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)

//console.log(currentYear)
//console.log(++currentYear)
//console.log(--currentYear)
//console.log(currentYear--)

//let a = 10
//let b = 5
//et c = 32
// c = c + a  равно  c += a
//c += a
//c -= a
//c *= a
//c /= a
//console.log(c)


//4 Типы данных
//const isProgrammer = true
//const firstName = 'Svetlana'
//const age = 42
//let x
//console.log(typeof isProgrammer)
//console.log(typeof firstName)
//console.log(typeof age)
//console.log(typeof x)
//console.log(typeof null)
//console.log(null)

// 5 Приоритет оператора
//const fullAge = 42
//const birthYear = 1979
//const currentYear = 2021

// > < >= <=
//const isFullAge = (currentYear - birthYear) >= fullAge //42 >= 41 => true
//console.log(isFullAge)

//6 Условные операторы
//const courseStatus = 'pending' // ready, fail, pending

//if (courseStatus === 'ready') {
    //console.log ('Курс готов и его можно проходить')
//}
//else if (courseStatus === 'pending') {
    //console.log('Курс находится в процессе разработки')
//}
//else {console.log('Курс не получился')}

//const num1 = 42 // number
//const num2 = '42' // string
//console.log(num1 == num2)
//console.log(num1 === num2)


//const isReady = true
//if (isReady) {
    //console.log('Все готово!')
//}
//else {
    //console.log('Все не готово!')
//}

//Тернарное выражение
//const isReady = false
//isReady ? console.log('Все готово!') : console.log('Все не готово!')

// 7 Булевая логика
// && - И;  Возвращает операнд expr1, если он может быть преобразован в false; в противном случае возвращает операнд expr2 
//(находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные). 
// II - ИЛИ;  Возвращает операнд expr1, если он может быть преобразован в true; в противном случае возвращает операнд expr2
// (находит и возвращает первое истинное значение).

//! - НЕ; Возвращает f/alse, если операнд может быть преобразован в true; в противном случае возвращает true.


// 8  Функции

//function calculateAge(year) {
    //return 2021 - year
//}

// console.log(calculateAge(1979))

//function logInfoAbout(name, year) {
    //const age = calculateAge(year)

    //if (age>0) {
    //console.log('Человек по имени ' + name + ' имеет возраст ' + age)
//} else {
    //console.log('Это уже будущее')
//}
//}

//logInfoAbout('Svetlana', 1979)
//logInfoAbout('Svet', 2022)

// 9 Массивы
//const cars  = ['mers', 'opel', 'ford']
//console.log(cars)
//console.log(cars[0])
//console.log(cars.length)
//cars[0] = 'Porsche'
//console.log(cars)
//сars[3] = 'Mazda' // [3] - статический индекс
//console.log(cars)

//cars[cars.length] = 'Mazda' // [cars.length] - динамический индекс
//console.log(cars)


// 10 Циклы
//const cars  = ['mers', 'opel', 'ford']
//for (let i=0; i < cars.length; i++) {
    //console.log (i)
//}

//const cars  = ['mers', 'opel', 'ford']
//for (let i=0; i < cars.length; i++) {
    //const car = cars[i]
    //console.log (car)
//}

//const cars  = ['mers', 'opel', 'ford', 'porsche']
//for (let i=0; i < cars.length; i++) {
    //const car = cars[i]
    //console.log (car)
//}

//const cars  = ['mers', 'opel', 'ford', 'porsche']
//for (let car of cars) {
    //console.log (car)
//}

// 11 Объекты
//const person = {
    //firstName: 'Svetlana',
    //lastName: 'Levkovskaya',
    //year: 1979,
    //languages: ['Russian' ,'English'],
    //hasChild: false,
    //greet: function(){
        //console.log('greet from person')
    //}
//}

//console.log(person)
//console.log(person.firstName)
//person.greet()
//console.log(person ['lastName'])

//const key = 'languages'
//console.log(person [key])

//const key = 'year'
//console.log(person [key])

//person.hasChild = true
//console.log(person)

//person.isProgrammer = true
//console.log(person)

// Number
//const num = 42
//const float = 42.42
//console.log(float)

//const pow = 10e3
//console.log(pow)

//console.log(Number.MAX_SAFE_INTEGER)
//console.log(Math)
//console.log(Math.pow(2, 53) - 1) // максимальный ing в js 2 в 53 степени минус 1
//console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
//console.log('Max_Value', Number.MAX_VALUE)
//console.log('Min_Value', Number.MIN_VALUE)
//console.log('positive_infinity', Number.POSITIVE_INFINITY)
//console.log('negative_infinity', Number.NEGATIVE_INFINITY)
//console.log('2/0', 2 / 0)
//console.log(Number.NaN) // Not a Number
//console.log(typeof NaN)
//const weird = 2 / undefined
//console.log(isNaN(weird))
//console.log(Number.isNaN(weird))
//console.log(Number.isNaN(42))
//console.log(Number.isFinite(42))


//const stringInt = '42'
//const stringFloat = '42.42'
//console.log(stringInt + 2) // строковое

//const stringInt = '40'
//console.log(Number.parseInt(stringInt) + 2) // распарсили и получили числовое
//console.log(parseInt(stringInt) + 2)
//console.log(Number(stringInt) + 2)
//console.log(+stringInt + 2)

//const stringFloat = '40.42'
//console.log(parseFloat(stringFloat) + 2)
//console.log(+stringFloat + 2)

//console.log(0.4+0.2) // 0.6000000000000001
//console.log(2/5 + 1/5) // 0.6000000000000001
//console.log((0.4+0.2).toFixed (1)) // строковое 
//console.log((+0.4+0.2).toFixed (1)) // строковое
//console.log(parseFloat((0.4+0.2).toFixed (1))) // числовое

// BigInt
//console.log(Number.MAX_SAFE_INTEGER)
//console.log(900719925474099199999)
//console.log(typeof 900719925474099199999n)
//console.log(900719925474099199999n - 90071992547409919999n)
//console.log(-900719925474099199999n)
//console.log(-900719925474099199999/.000n) // error

//console.log(10n-4) // error
//console.log(parseInt(10n) - 4) // 6
//console.log(10n - BigInt(4)) // 6n
//console.log(5n/2n) // 2n

// Math
//console.log(Math.E) // экспонента
//console.log(Math.PI) // число Пи

//console.log(Math.sqrt(25))  // корень квадратный
//console.log(Math.pow(5,3)) // возведение в степень
//console.log(Math.abs(-42)) // Модуль

//console.log(Math.max(42,12,23,11,422)) // максимальное значение = 422
//console.log(Math.min(42,12,23,11,422)) // минимальнгое значение = 11
//console.log(Math.floor(4.9)) // округление всегда в меньшую сторону = 4
//console.log(Math.ceil(4.9)) // округление всегда в большую сторону = 5
//console.log(Math.round(4.9)) // округление к ближайшему целому = 5
//console.log(Math.trunc(4.9)) // возвращает целую часть числа = 4 
//console.log(Math.random()) // рандомное число

// ПРИМЕРЫ с Math
//function getRandomBetween(min, max) {
    //return Math.random() * (max-min) + min
//}

//console.log (getRandomBetween(10,42))

//function getRandomBetween(min, max) {
    //return Math.floor(Math.random() * (max-min+1) + min)
//}

//console.log (getRandomBetween(10,42))

// Строки
//const name = 'Svetlana'
//console.log(typeof name)

//const name = 'Svetlana'
//const age = 42
//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age
//console.log(output)


//const name = 'Svetlana'
//const age = 42
//const output = `Привет, меня зовут ${name} и мой возраст ${age}`  
//console.log(output)

//const name = 'Svetlana'
//const age = 42
//const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'A':'B'} лет.`  
//console.log(output)

//const output = `
   //<div>This is div</div>
   //<p>this is o</p>
//`
//console.log(output)


//const name = 'Svetlana'
//console.log(name.length)
//console.log(name.toUpperCase())
//console.log(name.toLowerCase())
//console.log(name.charAt(2))
//console.log(name.indexOf('lan'))
//console.log(name.indexOf('!'))
//console.log(name.startsWith('svet'))
//console.log(name.startsWith('Svet'))
//console.log(name.toLowerCase().startsWith('svet'))
//console.log(name.endsWith('ana'))
//console.log(name.endsWith('!'))
//console.log(name.repeat(3))
//const string = '       password'
//console.log(string)
//console.log(string.trimLeft())
//console.log(string.trimRight())

//function logPerson (s, name, age) {
   //console.log(s, name, age)
    //return 'Info about person'
//}

//const personName = 'Svetlana'
//const personAge = 42
//const output = logPerson `Имя: ${personName}, возраст: ${personAge}!`
//console.log(output)



//function logPerson (s, name, age) {
    //console.log(s, name, age)
    //return `${s[0]}${name}${s[1]}${age}${s[2]}`
//}

//const personName = 'Svetlana'
//const personAge = 42
//const output = logPerson `Имя: ${personName}, возраст: ${personAge}!`
//console.log(output)


function logPerson (s, name, age) {
    if (age <0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Svetlana'
const personName2 = 'Max'
const personAge = 42
const personAge2 = -42
const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)



