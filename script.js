const startButton = document.querySelector(".startButton")
const start = document.querySelector(".start")
const game = document.querySelector(".game")
const rabbitNumber = document.querySelector(".numberR")
const catNumber = document.querySelector(".numberC")
const final = document.querySelector(".final")
const animal = document.querySelector(".animal")
const catHouse = document.querySelector(".btn1")
const rabbitHouse = document.querySelector(".btn2")
const wrong = document.querySelector(".wrong")
const catRight = document.querySelector(".catR")
const rabbitRight = document.querySelector(".rabbitR")
const restart = document.querySelector(".restart")
const home = document.querySelector(".home")
const body = document.querySelector("body")

let rabbitCount
let catCount

let Total

let rabbitDone
let catDone

let moving = {step: 0.5}
let current
let select
let animation

const rabbits = [{image:"pinkR", text:"#CB6875"}, {image:"brownR", text:"#9B6842"}, {image:"greyR", text:"#858585"}]

const cats = [{image:"blueC", text:"#4BADAC"}, {image: "orangeC", text:"#FD8F41"}, {image:"greyC", text:"#858585"}]

startButton.addEventListener("click", () => {
    start.classList.add("hide")
    Began()
})

restart.addEventListener("click", () => {
    final.classList.add("hide")
    Began()
})

home.addEventListener("click", () => {
    final.classList.add("hide")
    start.classList.remove("hide")
})

function Began(){
    game.classList.remove("hide")
    body.style.backgroundColor = "#E9E9E9"
    rabbitCount = catCount = 0
    rabbitDone = catDone = select = false
    Total = Math.floor(Math.random() * 5) + 1
    rabbitNumber.innerHTML = `${rabbitCount}/${Total}`
    catNumber.innerHTML = `${catCount}/${Total}`
    Question()
}

function Question(){
    if(rabbitCount == Total && catCount == Total){
        body.style.backgroundColor = "#44347A"
        game.classList.add("hide")
        final.classList.remove("hide")
    }

    let delay = setTimeout(() => {
        animal.classList.remove("right")
        animal.classList.add("appear")
      }, 100);

    current = Math.floor(Math.random() * 2)
    let color = Math.floor(Math.random() * 3)

    if(rabbitCount == Total){
        current = 1
    }
    if(catCount == Total){
        current = 0
    }

    if(current == 0){
        animal.innerHTML = `<img src="./img/${rabbits[color].image}.png">
        <p>Hello, I am Rabbit</p>`
        animal.style.color = `${rabbits[color].text}`
    }
    if(current == 1){
        animal.innerHTML = `<img src="./img/${cats[color].image}.png">
        <p>Hello, I am Cat</p>`
        animal.style.color = `${cats[color].text}`
    }
    let delayselect = setTimeout(() => {
        select = true
      }, 800);
}

catHouse.addEventListener("click", () => {
    if(current == 1 && select == true){
        select = false
        animal.classList.add("right")
        catRight.classList.remove("hide")
        let delayarrow = setTimeout(() => {
            catRight.classList.add("hide")
            catCount += 1
            catNumber.innerHTML = `${catCount}/${Total}`
        }, 1500);
        let delay = setTimeout(() => {
            Question()
        }, 2000);
          return
    }
    else{
        wrong.classList.remove("hide")
        let delaywrong = setTimeout(() => {
            wrong.classList.add("hide")
          }, 500);
    }
})

rabbitHouse.addEventListener("click", () => {
    if(current == 0 && select == true){
        select = false
        animal.classList.add("right")
        rabbitRight.classList.remove("hide")
        let delayarrow = setTimeout(() => {
            rabbitRight.classList.add("hide")
            rabbitCount += 1
            rabbitNumber.innerHTML = `${rabbitCount}/${Total}`
        }, 1500);
        let delay = setTimeout(() => {
            Question()
        }, 2000);
          return
    }
    else{
        wrong.classList.remove("hide")
        let delaywrong = setTimeout(() => {
            wrong.classList.add("hide")
          }, 500);
    }
})
