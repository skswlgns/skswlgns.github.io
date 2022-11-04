const randomNumber = Math.floor(Math.random() * 10);
const onBgClass = document.querySelector(".onBg");

// const imgElement = document.createElement('img')
// imgElement.src = `img/${randomNumber}.jpg`

// document.body.prepend(imgElement)
// document.body.append(imgElement)

// document.body.style.backgroundImage = `url("img/${randomNumber}.jpg")`;
// document.body.style.backgroundSize = '100vw 100vh'

onBgClass.style.backgroundImage = `linear-gradient(rgba(20, 20, 20, 0.2), rgba(20, 20, 20, 0.2)), url(img/${randomNumber}.jpg)`;
onBgClass.style.backgroundSize = "100vw 100vh";

// const afterBg = window.getComputedStyle(document.querySelector('.onBg'), ':after');
// afterBg.setProperty.backgroundImage = `url(img/${randomNumber}.jpg)`
