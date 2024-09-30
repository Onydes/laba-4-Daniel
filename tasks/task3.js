// Задача: Напишіть функцію sumArray, яка приймає масив чисел і 
// повертає їхню суму. Використовуйте цикл для обчислення суми.

function sumArray(numbers) {
function sumArray(numbers) {
  let total = 0; // Ініціалізуємо змінну для зберігання суми
  for (let i = 0; i < numbers.length; i++) { // Проходимо по всіх елементах масиву
    total += numbers[i]; // Додаємо кожен елемент до загальної суми
  }
  return total; // Повертаємо загальну суму
}

console.log(sumArray([1, 2, 3, 4, 5])); // Виведе: 15
console.log(sumArray([10, 20, 30]));    // Виведе: 60

module.exports = sumArray; // Експортуємо функцію для використання в інших файлах

