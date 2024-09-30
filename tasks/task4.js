// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
function findMax(numbers) {
  let max = numbers[0]; // Ініціалізуємо max першим елементом масиву
  for (let i = 1; i < numbers.length; i++) { // Починаємо з другого елемента
    if (numbers[i] > max) { // Якщо поточний елемент більше max
      max = numbers[i]; // Оновлюємо max
    }
  }
  return max; // Повертаємо найбільше число
}

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax; // Експортуємо функцію для використання в інших файлах

