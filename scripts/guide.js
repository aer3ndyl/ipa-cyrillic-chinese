// Функция переключения видимости элемента #guide
function toggleGuideVisibility() {
    const guide = document.getElementById('guide');
    if (guide.style.visibility === 'visible') {
        guide.style.visibility = 'hidden';
    } else {
        guide.style.visibility = 'visible';
    }
}

// Привязка функции к клику на картинку
const img = document.querySelector('.img-container img');
img.addEventListener('click', toggleGuideVisibility);
