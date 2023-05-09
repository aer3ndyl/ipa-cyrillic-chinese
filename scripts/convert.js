const input = document.querySelector('#input'); // получаем содержимое поля
const ChineseInitials = ['p', 'pʰ', 'm', 'f', 't', 'tʰ', 't͡s', 't͡sʰ', 's', 'l', 'ʈ͡ʂ', 'ʈ͡ʂʰ', 'ʂ', 'ʐ', 't͡ɕ', 't͡ɕʰ', 'ɕ', 'k', 'kʰ', 'x', 'h'] // Список китайских инициалей
const ChineseFinals = ['a', 'ai̯', 'au̯', 'an', 'ɤ', 'ei̯', 'ou̯', 'ən', 'əŋ', 'aɚ̯', 'ʅ', 'ɿ', 'i̯a', 'i̯au̯', 'i̯ɛn', 'i̯aŋ', 'i̯e', 'i̯ou̯', 'in', 'iŋ', 'i', 'u̯a', 'u̯ai̯', 'u̯an', 'u̯aŋ', 'u̯o', 'u̯ei̯', 'u̯ən', 'ʊŋ', 'u', 'y̯ɛn', 'y̯e', 'yn', 'i̯ʊŋ', 'y'] //Список китайских финалей

function getSyllables(input) {
    const syllables = input.value.split(' ');
    return syllables;
}

input.addEventListener('input', () => { //При каждом изменении содержимого поля, последовательно выполняем методы
    console.log(ChineseInitials.length+ChineseFinals.length);
    console.log(ChineseInitials.length);
    console.log(ChineseFinals.length);
});
