let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const thumbnails = document.getElementById('thumbnail-container');
const images = document.querySelectorAll('.gallery img');

images.forEach((img, i) => {
  const thumb = img.cloneNode();
  thumb.addEventListener('click', () => showImage(i));
  thumbnails.appendChild(thumb);
});

function openLightbox(event) {
  if (event.target.tagName !== 'IMG') return;
  currentIndex = [...images].indexOf(event.target);
  showImage(currentIndex);
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  showImage(currentIndex);
}

function showImage(index) {
  const selected = images[index];
  lightboxImg.src = selected.src;
  caption.textContent = selected.alt;
  document.querySelectorAll('#thumbnail-container img').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}
