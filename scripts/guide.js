function toggleGuideVisibility() {
    const guide = document.getElementById('guide');
    if (guide.style.visibility === 'visible') {
        guide.style.visibility = 'hidden';
    } else {
        guide.style.visibility = 'visible';
    }
}

const img = document.querySelector('.img-container img');
img.addEventListener('click', toggleGuideVisibility);
