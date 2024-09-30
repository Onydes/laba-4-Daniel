// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
function countOccurrences(str, char) {
  let count = 0; // Ініціалізуємо лічильник
  for (let i = 0; i < str.length; i++) { // Проходимо по кожному символу рядка
    if (str[i] === char) { // Якщо символ у рядку дорівнює заданому символу
      count++; // Збільшуємо лічильник
    }
  }
  return count; // Повертаємо кількість входжень
}

// Приклади використання:
console.log(countOccurrences("hello world", 'o')); // Виведе: 2
console.log(countOccurrences("banana", 'a'));       // Виведе: 3

module.exports = countOccurrences; // Експортуємо функцію для використання в інших файлах

