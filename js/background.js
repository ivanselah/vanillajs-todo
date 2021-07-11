const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// js로 생성한 태그를 body안에 태크 삽입(태그 위치 appendChild 뒤로, prepend 앞으로)
document.body.prepend(bgImage);