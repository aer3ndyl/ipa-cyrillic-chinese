const input = document.querySelector('#input'); // получаем содержимое поля
const ChineseInitials = ['p', 'pʰ', 'm', 'f', 't', 'tʰ', 't͡s', 't͡sʰ', 's', 'l', 'ʈ͡ʂ', 'ʈ͡ʂʰ', 'ʂ', 'ʐ', 't͡ɕ', 't͡ɕʰ', 'ɕ', 'k', 'kʰ', 'x', 'h'] // Список китайских инициалей
const ChineseFinals = ['a', 'ai̯', 'au̯', 'an', 'ɤ', 'ei̯', 'ou̯', 'ən', 'əŋ', 'aɚ̯', 'ʅ', 'ɿ', 'i̯a', 'i̯au̯', 'i̯ɛn', 'i̯aŋ', 'i̯e', 'i̯ou̯', 'in', 'iŋ', 'i', 'u̯a', 'u̯ai̯', 'u̯an', 'u̯aŋ', 'u̯o', 'u̯ei̯', 'u̯ən', 'ʊŋ', 'u', 'y̯ɛn', 'y̯e', 'yn', 'i̯ʊŋ', 'y'] //Список китайских финалей

localStorage.setItem('ChineseInitials', JSON.stringify(ChineseInitials));
localStorage.setItem('ChineseFinals', JSON.stringify(ChineseFinals));


// Получение списка слогов, присутствующих в поле #input
function getSyllables(input) {
    try {
      const syllables = input.value.trim().split(/\s+/).filter(syllable => syllable !== '');
      saveSyllablesToLocalStorage(syllables); // Сохранение массива в localStorage
      return syllables;
    } catch (error) {
      const output = document.querySelector('#output');
      output.style.color = 'red';
      output.value = 'Произошла ошибка.';
      setTimeout(() => {
        output.style.color = 'black';
      }, 2000);
    }
  }
  
  function saveSyllablesToLocalStorage(syllables) {
    const serializedSyllables = JSON.stringify(syllables);
    localStorage.setItem('syllables', serializedSyllables);
  }

function splitChineseSyllable(syllable) {
    const initialsRegex = new RegExp(`^(${ChineseInitials.join('|')})(?![${ChineseFinals.join('')}])`);
    const initialsMatch = syllable.match(initialsRegex);
    const initials = initialsMatch ? initialsMatch[0] : '';
  
    const finals = syllable.replace(initials, '');
  
    return [initials, finals];
  }

// Выполнения алгоритма после изменения содержимого поля #input
// input.addEventListener('input', () => {
    
// });
