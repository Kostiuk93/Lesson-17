"use strict";


const str = "teSt"; // Колличество символов в строке
const arr = [1, 2, 3]; // Колличество элементов внутри массива
// length - свойство
console.log(str.length); // Колличество символов в строке
console.log(arr.length); // Колличество элементов внутри массива
console.log(str[2]);  // Вывести индекс строки
console.log(str.toLocaleUpperCase()); //Метод toLocaleUpperCase изменяет текст на заглавные буквы (высший регистр)
console.log(str.toLocaleLowerCase()); //Метод toLocaleLowerCase изменяет текст на прописные буквы (низший регистр)

const fruit = "Some fruit";
console.log(fruit.indexOf("t")); //Метод indexOf находит номер символа строки

// (2) Медоты для модификации строк

const logg = "Hello world!";
// Метод slice выводит символы, заданные в аргументе(), от 6 до 10 , не включая 10 индекс. Пробел считается за индекс
console.log(logg.slice(6, 10)); 
// Метод substring аналог slice за исключением того, что не поддерживает отрицательные значения аргументов.
// Оба приминяются в практике. Выбор за тобой!
console.log(logg.substring(6, 10)); 
// Метод substr. Первый аргумент, как и в прошлых методах обозначает индекс начала работы метода.
// Второй аргумент означает сколько символов вырезать из строки, когда в прошлых примерах он означает до какого индекса вырезать символы строки.
console.log(logg.substr(6, 4)); 


// (3) Работа с числами

const num = 12.2;
// Vath.round - округление дробного числа в целое
console.log(Math.round(num));

// Перевод числа в другую систему исчесления.
const test = "12.2px";
// parseInt - переводит в Integer(целочисленное).
console.log(parseInt(test));
// parseFloat - переводит в Float(дробное).
console.log(parseFloat(test));