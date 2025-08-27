const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.getElementById('close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

function openModal(index) {
  modal.style.display = 'flex';
  modalImg.src = galleryItems[index].src;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = 'none';
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].src;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].src;
}

galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'Escape') closeModal();
});
