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

//=======================================================================

// 2 Мутирование

//const firstName = 'Svetlana'
//let age = 42 // number
//console.log('Имя человека: ' + firstName +', а возраст человека: ' + age) // string
//console.log(age) // number

//alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// cntrl+X // delete string

//prompt('Введите фамилию')

//const lastName = prompt ('Введите фамилию')
//alert(firstName + ' ' + lastName)

//========================================================================

// 3 Операторы

//let currentYear = 2021
//let birthYear = 1979
//const age = currentYear - birthYear
//console.log(age)

//const a = 10
//const b = 5
//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)

//console.log(currentYear) //2021
//console.log(++currentYear) //2022
//console.log(--currentYear) //2021
//console.log(currentYear--) //2021

//let a = 10
//let b = 5
//et c = 32
// c = c + a  равно  c += a
//c += a
//c -= a // c = c - a
//c *= a // c = c * a
//c /= a // c = c / a
//console.log(c)

//==========================================================================


//4 Типы данных

//const isProgrammer = true
//const firstName = 'Svetlana'
//const age = 42
//let x

// примитивы в языке (5)
//console.log(typeof isProgrammer) // boolean
//console.log(typeof firstName) // string
//console.log(typeof age) // number
//console.log(typeof x) // undefined
//console.log(typeof null) //  возвращает object - баг в JS
//console.log(null)

//=========================================================================

// 5 Приоритет операторов //mdn - mozila developer network - документация по JS

//const fullAge = 42
//const birthYear = 1979
//const currentYear = 2021

// > < >= <= // операторы стравнения // сложение и вычитаение с приоритетом 13; больше или равно - приоритет 11.
//const isFullAge = (currentYear - birthYear) >= fullAge //42 >= 41 => true

//console.log(isFullAge)

//=========================================================================

//6 Условные операторы
//const courseStatus = 'pending' // ready, fail, pending

//if () {}

//if (courseStatus === 'ready') {
    //console.log ('Курс готов и его можно проходить')
//}
//else if (courseStatus === 'pending') {
    //console.log('Курс находится в процессе разработки')
//}
//else {console.log('Курс не получился')}

//const num1 = 42 // number
//const num2 = '42' // string
//console.log(num1 == num2) // true, JS приводит к одному типу данных (строка)
//console.log(num1 === num2) // false, проверяется тип данных


//const isReady = true
//if (isReady) {     //  = if (is ready === true)
    //console.log('Все готово!')
//} else {
    //console.log('Все не готово!')
//}

//Тернарное выражение
//const isReady = false
//isReady ? console.log('Все готово!') : console.log('Все не готово!')

//=========================================================================

// 7 Булевая логика

// && - логическое И;  Возвращает операнд expr1, если он может быть преобразован в false; в противном случае возвращает операнд expr2 
//(находит и возвращает первое ложное значение либо последний операнд, когда все значения истинные). 
// true && true = true 
// true && false = false
// false && true = false
// false && false = false
// cat && dog = t && t = dog
// false && cat = f && t = false
// cat && false = t && f = false

// II - логическое ИЛИ;  Возвращает операнд expr1, если он может быть преобразован в true; в противном случае возвращает операнд expr2
// (находит и возвращает первое истинное значение).
// true || true = true 
// true || false = true
// false || true = true
// false || false = false
// cat || dog = t || t = cat
// false || cat = f || t = cat
// cat || false = t || f = cat

//! - логическое НЕ; Возвращает false, если операнд может быть преобразован в true; в противном случае возвращает true.
//true = true
//!true = false
//!!true  = true 
//!false = true
//!cat = !t = false

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Конвертирование И в ИЛИ

// a1 && a2 = !(!a1 || a2)

// Конвертирование ИЛИ в И

//

//=========================================================================


// 8  Функции (облегчает код, чтобы не дублировать)

/* function calculateAge(year) {
    return 2021 - year
}

const myAge = calculateAge(1979)
console.log(myAge)
// либо
console.log(calculateAge(1979))
 */


/* function calculateAge(year) {
    return 2021 - year
}

function logInfoAbout(name, year) {
    const age = calculateAge(year)

    if (age>0) {
    console.log('Человек по имени ' + name + ' имеет возраст ' + age)
} else {
    console.log('Это уже будущее')
}
}

logInfoAbout('Svetlana', 1979)
logInfoAbout('Svet', 2022) */

//=========================================================================

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

//=========================================================================


// 10 Циклы
//const cars  = ['mers', 'opel', 'ford'] // создание цикла через индекс i
//for (let i=0; i < cars.length; i++) {
    //console.log (i)
//}

//const cars  = ['mers', 'opel', 'ford'] // оздание цикла через индекс i
//for (let i=0; i < cars.length; i++) {
    //const car = cars[i]
    //console.log (car)
//}

//const cars  = ['mers', 'opel', 'ford', 'porsche'] // оздание цикла через индекс i
//for (let i=0; i < cars.length; i++) {
    //const car = cars[i]
    //console.log (car)
//}

//const cars  = ['mers', 'opel', 'ford', 'porsche'] // цикл для итерирования массивов, созданием переменную car, который является элементом массива cars без создания индекса
//for (let car of cars) {
    //console.log (car)
//}

//=========================================================================

// 11 Объекты - в объекте создается группа значений

// создаем новый объект:
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

//console.log(person) // полное описание объекта
//console.log(person.firstName) // выводит имя
//person.greet() // у персона вызываем метод грит
//console.log(person ['lastName']) // передаем строчку

//const key = 'languages'  // задали ключ
//console.log(person [key])

//const key = 'year' // поменяли ключ
//console.log(person [key])

//person.hasChild = true // изменили значение
//console.log(person)

//person.isProgrammer = true // добавили новый ключт
//console.log(person)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1.Number

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
//console.log('2/0', 2 / 0) // при делении получаем безсконечность
//console.log(Number.NaN) // переводтится как Not a Number, в консоли тип - number
//console.log(typeof NaN)
//const weird = 2 / undefined // получим NaN
//console.log(isNaN(weird)) // получим true
//console.log(Number.isNaN(weird))
//console.log(Number.isNaN(42)) // получим falseб так как 42 есть число
//console.log(Number.isFinite(Infinity)) // получим false, // конечна ли бесконечность
//console.log(Number.isFinite(42)) // получим true // конечно ли число 42

//const stringInt = '42'
//const stringFloat = '42.42'
//console.log(stringInt + 2) // получим 422 // строковое// к строке прибавляем 2 / конкотинирует

//const stringInt = '40'
//console.log(Number.parseInt(stringInt) + 2) // распарсили и получили числовое // получим 42
//console.log(parseInt(stringInt) + 2) // 2-ой способ преобразования в число
//console.log(Number(stringInt) + 2) // 3-ий способ
//console.log(+stringInt + 2) // 4-ый споспоб // + обозначает преобразование в число

//const stringFloat = '40.42'
//console.log(parseFloat(stringFloat) + 2)
//console.log(+stringFloat + 2)

//console.log(0.4+0.2) // получаем 0.6000000000000001 
//console.log(2/5 + 1/5) // 0.6000000000000001
//console.log((0.4+0.2).toFixed (1)) // получим 0,6, но строковое 
//console.log((+0.4+0.2).toFixed (1)) // 0,6 числовое
//console.log(parseFloat((0.4+0.2).toFixed (1))) // числовое

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2. BigInt
//console.log(Number.MAX_SAFE_INTEGER)
//console.log(900719925474099199999)
//console.log(typeof 900719925474099199999n)
//console.log(900719925474099199999n - 90071992547409919999n)
//console.log(-900719925474099199999n)
//console.log(-900719925474099199999/.000n) // error

//console.log(10n-4) // error
//console.log(parseInt(10n) - 4) // 6 // intenger
//console.log(10n - BigInt(4)) // 6n // тип BigInt
//console.log(5n/2n) // 2n // тип BigInt

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3. Math
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
    //return Math.random() * (max-min) + min // получаем число с дробной частью
//}

//console.log (getRandomBetween(10,42))  

//function getRandomBetween(min, max) {
    //return Math.floor(Math.random() * (max-min+1) + min) // получаем целое число
//}

//console.log (getRandomBetween(10,42))

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4. Строки - примитивный тип данных. В строке большое количество методов
//const name = 'Svetlana'
//console.log(typeof name)

//const name = 'Svetlana'
//const age = 42
//const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age // не очень хороший вариант - много плюсов переменных
//console.log(output)


//const name = 'Svetlana'
//const age = 42
//const output = `Привет, меня зовут ${name} и мой возраст ${age}` // используем обратные кавычки + динамические выражение  
//console.log(output)

//${} = в скобрах можно указывать переменную, функцию ${getAge()}, тернарные выражения ${age>20 ? 'A' : 'B' }

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
//console.log(name.length) // посмотреть количество символов в строчке // 8
//console.log(name.toUpperCase()) // привести все символы строки к верхнему регистру // SVETLANA
//console.log(name.toLowerCase()) // привести все символы строки к нижнему регистру // svetlana
//console.log(name.charAt(2)) // какой символ находится на 2ой позиции // е
//console.log(name.indexOf('lan'))// присутствует ли в строчке комбинация lan // начиная с 4го символа
//console.log(name.indexOf('!')) // если укажим что-то, что не присутствует, то получим -1
//console.log(name.startsWith('svet')) // стартует ли строка с svet // false
//console.log(name.startsWith('Svet')) // стартует ли строка с Svet // true
//console.log(name.toLowerCase().startsWith('svet')) // привести с нижнему регистру+проверить начинается ли она с svet // true
//console.log(name.endsWith('ana')) // заканчивается ли строка символами ana // true
//console.log(name.endsWith('!')) // восклицательный знак отсутствует // false 
//console.log(name.repeat(3)) // повторить трижды
//const string = '       password'
//console.log(string) // символ пробела также включается
//console.log(string.trimLeft()) // очищает все пробелы слева
//console.log(string.trimRight()) // очищает все пробелы справа

//function logPerson (s, name, age) { // называть параметры можно как угодно
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


/* function logPerson (s, name, age) {
    if (age <0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}` 
} */

/* const personName = 'Svetlana'
const personName2 = 'Max'
const personAge = 42
const personAge2 = -42
const output = logPerson `Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson `Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2) */

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5. Функции

// Function Declaration - можем обращаться когда хотим

/* function greet(name) {
    console.log('Привет - ', name)
}

greet('Лена') */

// Function Expression - создаем функцию и вкладываем ее в переменную

/* const greet2 = function greet2(name) {
    console.log('Привет 2 - ', name)
}

greet2 ('Лена')  */

//console.log(typeof greet)



