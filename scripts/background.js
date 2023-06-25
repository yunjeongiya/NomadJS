const imgNum = 6
const selected = Math.floor(Math.random()*imgNum)
console.log("imgNum: ", selected)
const bgImg = document.querySelector("#bgImg")
bgImg.src = `img/${selected}.jpg`
document.body.appendChild(bgImg)