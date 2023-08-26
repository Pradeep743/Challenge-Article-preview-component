const authorInfo = document.querySelector('.author-info');
const authorSection = document.querySelector('.author-section');
const shareSection = document.querySelector('.share-section');
const shareBtn = document.querySelector('#share-btn');

shareBtn.addEventListener('click', function() {
    authorInfo.classList.toggle('hidden');
    shareSection.classList.toggle('hidden');
    shareBtn.classList.toggle('button-change');
    authorSection.classList.toggle('bg-change');
})
