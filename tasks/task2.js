// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
 function reverseWithoutNumbers(str) {
  // Создаем массив, чтобы хранить только буквы и символы
  let filteredCharacters = [];

  // Проходим по каждому символу строки и пропускаем цифры
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= '0' && str[i] <= '9')) { // Проверяем, что символ — не цифра
      filteredCharacters.push(str[i]);
    }
  }

  // Переворачиваем массив и соединяем его в строку
  let reversedString = '';
  for (let j = filteredCharacters.length - 1; j >= 0; j--) {
    reversedString += filteredCharacters[j];
  }

  return reversedString;
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;
