// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceVowels(str) {
function replaceVowels(str) {
  // Список гласных символов
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  
  // Преобразуем строку в массив символов и заменяем гласные
  let result = '';
  
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += '*'; // Если символ гласный, заменяем на *
    } else {
      result += str[i]; // Если не гласный, добавляем символ без изменений
    }
  }

  return result;
}

console.log(replaceVowels("hello world")); // Виведе: "h*ll* w*rld"
console.log(replaceVowels("Javascript"));  // Виведе: "J*v*scr*pt"

module.exports = replaceVowels;


