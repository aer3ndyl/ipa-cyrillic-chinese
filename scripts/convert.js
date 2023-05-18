const input = document.querySelector('#input'); // Получаем ссылку на элемент ввода

const ChineseInitials = ['p', 'pʰ', 'm', 'f', 't', 'tʰ', 't͡s', 't͡sʰ', 's', 'n', 'l', 'ʈ͡ʂ', 'ʈ͡ʂʰ', 'ʂ', 'ʐ', 't͡ɕ', 't͡ɕʰ', 'ɕ', 'k', 'kʰ', 'x', 'h']; // Список китайских инициалей
const ChineseFinals = ['a', 'ai̯', 'au̯', 'an', 'aŋ', 'ɤ', 'ei̯', 'ou̯', 'ən', 'əŋ', 'aɚ̯', 'ʅ', 'ɿ', 'i̯a', 'i̯au̯', 'i̯ɛn', 'i̯aŋ', 'i̯e', 'i̯ou̯', 'in', 'iŋ', 'i', 'u̯a', 'u̯ai̯', 'u̯an', 'u̯aŋ', 'u̯o', 'u̯ei̯', 'u̯ən', 'ʊŋ', 'u', 'y̯ɛn', 'y̯e', 'yn', 'i̯ʊŋ', 'y']; // Список китайских финалей

const PalladiumTable = new Map();

PalladiumTable.set('p', 'б');
PalladiumTable.set('pʰ', 'п');
PalladiumTable.set('m', 'м');
PalladiumTable.set('f', 'ф');
PalladiumTable.set('t', 'д');
PalladiumTable.set('tʰ', 'т');
PalladiumTable.set('t͡s', 'цз');
PalladiumTable.set('t͡sʰ', 'ц');
PalladiumTable.set('s', 'с');
PalladiumTable.set('l', 'л');
PalladiumTable.set('n', 'н');
PalladiumTable.set('ʈ͡ʂ', 'чж');
PalladiumTable.set('ʈ͡ʂʰ', 'ч');
PalladiumTable.set('ʂ', 'ш');
PalladiumTable.set('ʐ', 'ж');
PalladiumTable.set('t͡ɕ', 'цз');
PalladiumTable.set('t͡ɕʰ', 'ц');
PalladiumTable.set('ɕ', 'с');
PalladiumTable.set('k', 'г');
PalladiumTable.set('kʰ', 'к');
PalladiumTable.set('x', 'х');
PalladiumTable.set('h', 'х');

PalladiumTable.set('a', 'а');
PalladiumTable.set('ai̯', 'ай');
PalladiumTable.set('au̯', 'ао');
PalladiumTable.set('an', 'ань');
PalladiumTable.set('aŋ', 'ан');
PalladiumTable.set('ɤ', 'э');
PalladiumTable.set('ei̯', 'эй');
PalladiumTable.set('ou̯', 'оу');
PalladiumTable.set('ən', 'энь');
PalladiumTable.set('əŋ', 'эн');
PalladiumTable.set('aɚ̯', 'эр');
PalladiumTable.set('ʅ', 'и');
PalladiumTable.set('ɿ', 'ы');
PalladiumTable.set('i̯a', 'я');
PalladiumTable.set('i̯au̯', 'яо');
PalladiumTable.set('i̯ɛn', 'янь');
PalladiumTable.set('i̯aŋ', 'ян');
PalladiumTable.set('i̯e', 'е');
PalladiumTable.set('i̯ou̯', 'ю');
PalladiumTable.set('in', 'инь');
PalladiumTable.set('iŋ', 'ин');
PalladiumTable.set('i', 'и');
PalladiumTable.set('u̯a', 'уа');
PalladiumTable.set('u̯ai̯', 'уай');
PalladiumTable.set('u̯an', 'уань');
PalladiumTable.set('u̯aŋ', 'уан');
PalladiumTable.set('u̯o', 'о');
PalladiumTable.set('u̯ei̯', 'уй');
PalladiumTable.set('u̯ən', 'унь');
PalladiumTable.set('ʊŋ', 'ун');
PalladiumTable.set('u', 'у');
PalladiumTable.set('y̯ɛn', 'юaнь');
PalladiumTable.set('y̯e', 'юэ');
PalladiumTable.set('yn', 'юнь');
PalladiumTable.set('i̯ʊŋ', 'юн');
PalladiumTable.set('y', 'юй');

localStorage.setItem('ChineseInitials', JSON.stringify(ChineseInitials)); // Сохраняем список инициалей в localStorage
localStorage.setItem('ChineseFinals', JSON.stringify(ChineseFinals)); // Сохраняем список финалей в localStorage

// Получение списка слогов, присутствующих в поле #input
function getSyllables(input) {
  try {
    const syllables = input.value.trim().split(/\s+/).filter(syllable => syllable !== ''); // Извлекаем слоги из поля ввода и очищаем от лишних пробелов
    saveSyllablesToLocalStorage(syllables); // Сохраняем слоги в localStorage
    return syllables;
  } catch (error) {
    const output = document.querySelector('#output-data');
    output.value = 'Произошла ошибка.';
    setTimeout(() => {
      output.style.color = 'black';
    }, 2000);
  }
}

function saveSyllablesToLocalStorage(syllables) {
  const serializedSyllables = JSON.stringify(syllables); // Преобразуем слоги в строку JSON
  localStorage.setItem('syllables', serializedSyllables); // Сохраняем слоги в localStorage
}

function separateInitFinals(syllable) {
  const initials = JSON.parse(localStorage.getItem('ChineseInitials')); // Получаем список инициалей из localStorage
  const finals = JSON.parse(localStorage.getItem('ChineseFinals')); // Получаем список финалей из localStorage

  const syllables = {};

  // Создаем все возможные слоги
  for (const initial of initials) {
    for (const final of finals) {
      const key = initial + final;
      syllables[key] = [initial, final];
    }
  }

  // Ищем переданный слог
  for (let i = 0; i < syllable.length; i++) {
    const initial = syllable.substring(0, i + 1);
    const final = syllable.substring(i + 1);

    if (initials.includes(initial) && finals.includes(final)) {
      return [initial, final];
    }
  }

  document.getElementById('output-data').value = 'Произошла ошибка.';
  return null;
}

function getProcessedSyllables() {
  const syllables = JSON.parse(localStorage.getItem('syllables')); // Получаем слоги из localStorage
  const processedSyllables = [];

  if (Array.isArray(syllables)) { // Проверяем, является ли слоги массивом
    for (const syllable of syllables) {
      const result = separateInitFinals(syllable); // Разделяем слог на инициал и финал
      if (result) {
        processedSyllables.push(result); // Добавляем разделенные инициал и финал в обработанные слоги
      }
    }
  }

  return processedSyllables;
}

function getSeparatePalladium(ipaData) {
  const convertedData = [];

  for (const ipa of ipaData) {
    let convertedSyllable = '';

    for (let i = 0; i < ipa.length; i++) {
      const segment = ipa[i];
      const conversion = PalladiumTable.get(segment);

      if (conversion) {
        convertedSyllable += conversion;
      }
    }

    convertedData.push(convertedSyllable);
  }

  return convertedData;
}

function combineConvertedData(convertedData) {
  const combinedData = convertedData.map(syllable => {
    const firstLetter = syllable.charAt(0).toUpperCase();
    const restOfSyllable = syllable.slice(1);
    return firstLetter + restOfSyllable;
  });

  return combinedData.join(' ');
}

function updateOutputTextColor() {
  const outputTextarea = document.querySelector('#output-data'); // Получаем ссылку на поле вывода
  const errorText = 'Произошла ошибка.';
  const defaultColor = 'black';
  const errorColor = 'red';

  if (outputTextarea.value === errorText) { // Если содержимое поля вывода равно тексту ошибки
    outputTextarea.style.color = errorColor; // Устанавливаем цвет текста на красный
  } else {
    outputTextarea.style.color = defaultColor; // В противном случае восстанавливаем цвет текста по умолчанию (черный)
  }
}

input.addEventListener('input', () => {
  const outputData = document.getElementById('output-data');
  const syllables = getSyllables(input);
  const processedSyllables = getProcessedSyllables(syllables);
  
  if (processedSyllables.length > 0) {
    const convertedData = getSeparatePalladium(processedSyllables);
    const combinedData = combineConvertedData(convertedData);
    outputData.value = combinedData;
  } else {
    outputData.value = '';
  }
});
