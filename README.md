# Ex.08 Design of Interactive Image Gallery

## AIM
  To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

## Step 1:

Clone the github repository and create Django admin interface

## Step 2:

Change settings.py file to allow request from all hosts.

## Step 3:

Use CSS for positioning and styling.

## Step 4:

Write JavaScript program for implementing interactivit

## Step 5:

Validate the HTML and CSS code

## Step 6:

Publish the website in the given URL.

## PROGRAM

BirthFlowerGallery.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Birth Month Flowers</title>
  <link rel="stylesheet" href="BirthFlowerGallery.css">
</head>
<body>
  <h1>Birth Month Flower Gallery 🌸</h1>

  <div class="gallery" onclick="openLightbox(event)">
    <div class="img-card"><img src="Images/january.jpg" alt="January - Carnation"><p>January – Carnation</p></div>
    <div class="img-card"><img src="Images/february.jpg" alt="February - Violet"><p>February – Violet</p></div>
    <div class="img-card"><img src="Images/march.jpg" alt="March - Daffodil"><p>March – Daffodil</p></div>
    <div class="img-card"><img src="Images/april.jpg" alt="April - Daisy"><p>April – Daisy</p></div>
    <div class="img-card"><img src="Images/may.jpg" alt="May - Lily of the Valley"><p>May – Lily of the Valley</p></div>
    <div class="img-card"><img src="Images/june.jpg" alt="June - Rose"><p>June – Rose</p></div>
    <div class="img-card"><img src="Images/july.jpg" alt="July - Larkspur"><p>July – Larkspur</p></div>
    <div class="img-card"><img src="Images/august.jpg" alt="August - Gladiolus"><p>August – Gladiolus</p></div>
    <div class="img-card"><img src="Images/september.jpg" alt="September - Aster"><p>September – Aster</p></div>
    <div class="img-card"><img src="Images/october.jpg" alt="October - Marigold"><p>October – Marigold</p></div>
    <div class="img-card"><img src="Images/november.jpg" alt="November - Chrysanthemum"><p>November – Chrysanthemum</p></div>
    <div class="img-card"><img src="Images/december.jpg" alt="December - Narcissus"><p>December – Narcissus</p></div>
  </div>

  <div id="lightbox">
    <span id="close-btn" onclick="closeLightbox()">&times;</span>
    <img id="lightbox-img" src="" alt="Flower Image">
    <p id="caption"></p>
    <div id="thumbnail-container"></div>
    <button id="prev-btn" onclick="changeImage(-1)">&lt; Prev</button>
    <button id="next-btn" onclick="changeImage(1)">Next &gt;</button>
  </div>

  <script src="BirthFlowerGallery.js"></script>
</body>
</html>
```


BirthFlowerGallery.css

```css
body {
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #f9e3e3, #fbe8f4);
  text-align: center;
  margin: 0;
}

h1 {
  color: #d63384;
  margin: 30px 0;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
  padding: 20px;
}

.img-card {
  background: #fff;
  border-radius: 12px;
  padding: 10px;
  transition: transform 0.3s;
  cursor: pointer;
}

.img-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.img-card img {
  width: 100%;
  border-radius: 10px;
}

.img-card p {
  margin: 8px 0 0;
  font-size: 14px;
  color: #555;
}

#lightbox {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.85);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  padding: 20px;
}

#lightbox-img {
  width: 60%;
  max-height: 70%;
  border-radius: 12px;
}

#caption {
  color: white;
  font-size: 18px;
  margin-top: 10px;
}

#close-btn {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 40px;
  color: white;
  cursor: pointer;
}

#thumbnail-container {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  margin-top: 15px;
  padding: 10px;
}

#thumbnail-container img {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  opacity: 0.7;
  cursor: pointer;
}

#thumbnail-container img.active {
  border: 3px solid #ff80aa;
  opacity: 1;
}

#prev-btn, #next-btn {
  background: #ff80aa;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

#prev-btn:hover, #next-btn:hover {
  background: #e85d90;
}
```


BirthFlowerGallery.js

```js
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
```

## OUTPUT

![alt text](<Screenshot 2025-11-06 110337.png>)
![alt text](<Screenshot (191).png>)
![alt text](<Screenshot (192).png>)
![alt text](<Screenshot (193).png>)
![alt text](<Screenshot (194).png>)
![alt text](<Screenshot (195).png>)
![alt text](<Screenshot (196).png>)
![alt text](<Screenshot (197).png>)
![alt text](<Screenshot (198).png>)
![alt text](<Screenshot (199).png>)
![alt text](<Screenshot (200).png>)
![alt text](<Screenshot (201).png>)
![alt text](<Screenshot (201).png>)
![alt text](<Screenshot (202).png>)

## RESULT
  The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.