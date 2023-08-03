/*
function calcSumm(numOne, numTwo) {
  let result = 1;
  // умножаем result на numOne numTwo раз в цикле
  for (let i = 0; i < numTwo; i++) {
    result *= numOne;
  }
  return result;
}
console.log(calcSumm(2, 3));

--------------------------------------------

function calc(x1, x2) {
  let summary = x1 + x2;
  return summary;
}
let result = calc(6, 2);
console.log(result);




let what = 2 * 3;
console.log(what);



function TabliCalculatorUmnozenie(value1, value2) {
  let summary = value1 ** value2;
  return summary;
}
let result = TabliCalculatorUmnozenie(10, 5);
console.log(`your multiplication result is:${result}`);
*/
/*
function calcSumm(numOne, numTwo) {
  return numOne ** numTwo;
}

console.log(calcSumm(2, 3));


function getMessage(text, name) {
  let message = text + name;
  return message;
}
console.log(getMessage("vasja", " ty" + " sho" + " blat"));

--------------------------------------
колбеки))дописать равно
--------------------------------------
function calcSumm(numOne, numTwo, more, less, equal) {
  let numSumm = numOne + numTwo;

  if (numSumm > 3) {
    more();
  } else if (numSumm < 3) {
    less();
  } else if (numSumm == 3) {
    equal();
  }
}

function showMoreMessage() {
  console.log("Больше чем 3");
}
function showLessMessage() {
  console.log("Меньше чем 3");
}
function showEqualMessage() {
  console.log("Equal to 3");
}

calcSumm(2, 1, showMoreMessage, showLessMessage, showEqualMessage);


----------------------)))
интервалы?))
-------------------------
let result = 0;
function showNumber(num) {
  result += num;
  console.log(result);
  if (result === 6) {
    clearInterval(timeId);
  }
}
let timeId = setInterval(showNumber, 10, 2);
=====================================

===========================================
функция возвращает значения тем самім создаем конструкцию
============================================
function makeUserInfo(name, age) {
  return {
    name, // Тоже самое что и  name: name,
    age, // Тоже самое что и  age: age,
    "likes javascript": true,
    // ...другие свойства
  };
}
let user = makeUserInfo("Вася", 30);
console.log(user);
)))))
console.log(`{name: 'Вася', age: 30, likes javascript: true}`);
)))))
==========

//how does this program work
//1 cycles(while)=1/1  total and count
//2 cycles(while)=2/1
//3 cycles(while)=3/2
//4 cycles(while)=4/3
//5 cycles(while)=5/4

//sum the result of var total and the result in memory behind each loop
//1+0=1/2+1=3/3+3=6/6+4=10/.etc
var total = 0,
  count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);


let getMessage = (text, name) => text + ", " + name + "!";
console.log(getMessage("Привет", "Вася"));

let rewrite;
function rewrite12() {
  let text = "Привет",
    name1 = "Вася";
  znak = ",";
  znak2 = "!";
  prob = " ";
  return text + znak + prob + name1 + znak2;
}
rewrite = rewrite12();
console.log(rewrite);

console.log("Привет, Вася!");

let innysposob = {
  text: "Привет",
  name1: "Вася",
  znak: ",",
  znak2: "!",
  prob: " ",
  showinfofunc() {
    console.log(
      `${innysposob.text}${innysposob.znak}${innysposob.prob}${innysposob.name1}${innysposob.znak2}`
    );
  },
};

innysposob.showinfofunc();

*/
/*
==================ARRAY==========МАССИВЫ======================
------------------------homework freelancer-------------------
const users1 = ["Ваня", "Иштван"];

users1.push("olja");
console.log(users1);

users1.splice(1, 1, "gtnz");
console.log(users1);

var deletelement1 = users1.splice(0, 1);
console.log(deletelement1);

users1.splice(0, 0, "Маша", "Паша");
console.log(users1);
*/
//

/*
let arr23 = [9, 2, 8];
let reduceValue = arr23.reduce(function (previousValue, item, index, array) {
  return item + previousValue;
}, 0);
console.log(reduceValue);



let arr2 = [1, 2, 3, 4];
let new2 = arr2.reduce((previousValue, item) => {
  return previousValue + item;
});
console.log(new2);
//or
let arr3 = [1, 1];
let new3 = arr3.reduce(function (previousValue, item) {
  return previousValue + item;
});
console.log(new3);
*/
/*
--------------------homework chatgpt----------------------
//1.Задача: Сумма элементов
//Напишите функцию, которая принимает массив чисел и возвращает их сумму..

let allarray = [1,2,3,4,5]
let arraysumm = allarray.reduce((previousValue,item) =>{
  return previousValue + item;
});


//2.Задача: Поиск максимального значения
//Напишите функцию, которая принимает массив чисел и возвращает наибольшее число в этом массиве.

let arr = [20, 3, 4, 5, -50, 100, 19, 200, 5000, 599, 6786786];
let max = arr[0];

arr.forEach(function (elem, index) {
  if (index > 0) {
    if (max < elem) {
      max = elem;
    }
  }
});

console.log(max);

//or

console.log(Math.max(1, 123, 3, 2342134523154135));

//or my solution
/////////////////

//3.Задача: Обратный порядок
//Напишите функцию, которая принимает массив элементов 
//и возвращает новый массив с элементами в обратном порядке.


let users13 = ["vasja", "vasjadalbaeb", "vasjadalbaebextra"];
let usersmirror = users13.reduce((previousValue, item) => {
  return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${usersmirror}`);

let users12 = ["vasja", "vasjadalbaeb", "vasjadalbaebextra"];
let reversedUsers = users12.reverse();
console.log("Пользователи: " + reversedUsers);

//4.Задача: Фильтрация элементов
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
//содержащий только положительные числа.

const numbers = [-2, -1, 0, 1, 2, 3];
const positiveNumbers = getPositiveNumbers(numbers);
function getPositiveNumbers(numbers) {
  const positiveNumbers = numbers.filter((num) => num > 0);
  return positiveNumbers;
}

console.log(positiveNumbers); // Вывод: [1, 2, 3]

//5.Задача: Поиск элемента
//Напишите функцию, которая принимает массив элементов и значение, 
//и возвращает индекс первого вхождения этого значения в массиве. Если значение не найдено, верните -1.
let arr34 = ["Ваня", "Иштван", "Оля"];
let arrfindelement = arr34.indexOf("Ваня");
console.log(arrfindelement);

//6.Задача: Удаление дубликатов
//Напишите функцию, которая принимает массив элементов и возвращает новый массив, 
//в котором удалены все повторяющиеся элементы.
const arr = [1, 2, 3, 2, 4, 1, 5];
const uniqueArr = removeDuplicates(arr);

function removeDuplicates(arr) {
  const uniqueArr = Array.from(new Set(arr));
  return uniqueArr;
}
console.log(uniqueArr); // Вывод: [1, 2, 3, 4, 5]

//7.Задача: Сортировка элементов
//Напишите функцию, которая принимает массив чисел и возвращает новый массив, 
//содержащий эти числа в отсортированном порядке от наименьшего к наибольшему.
let arrTwo = [8, 22, 1];
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

console.log(arrTwo.sort(compareNumeric));
//or
console.log(arrTwo.sort((a, b) => a - b));

//8.Задача: Объединение массивов
//Напишите функцию, которая принимает два массива и возвращает новый массив
// содержащий все элементы обоих массивов.
let newarr = [1, 2, 3, 4];
let arr2 = [8, 8, 8, 8];

let arrall = newarr.concat(arr2);
console.log(arrall);

//9.Задача :
//Напишите функцию findMaxMin, которая принимает массив чисел и возвращает объект с двумя свойствами:
// max (максимальное число в массиве) и min (минимальное число в массиве).
const numbers = [2, 5, 1, 8, 4];
const result = findMaxMin(numbers);

function findMaxMin(numbers) {
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  return {
    max: max,
    min: min,
  };
}
console.log(result); // Вывод: { max: 8, min: 1 }

//10.Задача :
//Напишите функцию reverseArray, которая принимает массив и возвращает новый массив,
// в котором элементы исходного массива расположены в обратном порядке.

let arrTwo = ["Ваня", "Иштван", "Оля"];
let reduceValueTwo = arrTwo.reduce(function (previousValue, item) {
  return `${item}, ${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);

//11.Задача :
//Напишите функцию removeFalsyValues, которая принимает массив и возвращает новый массив,
// в котором удалены все ложные значения (например, false, null, 0, "", undefined).

function removeFalsyValues(arr) {
  const filteredArr = arr.filter(Boolean);
  return filteredArr;
}
const arr = [false, null, 0, "", undefined, "Hello", 42];
const filteredArr = removeFalsyValues(arr);
console.log(filteredArr); // Вывод: ["Hello", 42]


//12.Задача :
//Напишите функцию countOccurrences, которая принимает массив строк и возвращает объект, содержащий количество вхождений каждой строки в массиве.
 //Ключами в объекте должны быть строки из массива, а значениями - количество их вхождений.
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const occurrences = countOccurrences(arr);
function countOccurrences(arr) {
  const occurrences = {};
  arr.forEach((str) => {
    occurrences[str] = occurrences[str] ? occurrences[str] + 1 : 1;
  });

  return occurrences;
}
console.log(occurrences);
*/
