// 1. Создаём переменные для имени и возраста
let name = "Эркин";
let age = 24;

// 2. Условие для проверки возраста
if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

// 1. Цикл for, выводящий числа от 1 до 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Цикл while, выводящий числа от 10 до 1
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 1. Создание массивов для лекций и практик
const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

// 2. Добавление новых тем
lectures.push('Тема 4');  // Добавить в конец массива
practices.unshift('Практика 0');  // Добавить в начало массива

// 3. Вывод всех тем лекций и практик с использованием forEach()
console.log('Темы лекций:');
lectures.forEach(function(lecture) {
    console.log(lecture);
});

console.log('Темы практик:');
practices.forEach(function(practice) {
    console.log(practice);
});

// 4. Функция для вывода элементов массива через запятую
function printArray(arr) {
    console.log(arr.join(', '));
}

// Пример использования функции
printArray(lectures);
printArray(practices);

// 1. Функция, которая возвращает массив тем, начинающихся с буквы "О"
function filterLectures(lectures) {
    return lectures.filter(function(lecture) {
        return lecture[0] === 'О';  // Проверка, начинается ли тема с "О"
    });
}

// Пример данных
const filteredLectures = filterLectures(['Окружающая среда', 'Математика', 'Образование']);
console.log(filteredLectures);  // Выводим результат
