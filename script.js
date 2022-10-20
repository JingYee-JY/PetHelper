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
const body = document.querySelector("body")
const homeButton = document.querySelector(".home")

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")

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
    playClickSound()
    //controls amd buttons visibility
    let delay = setTimeout(() => {
        start.classList.add("hide")
        Began()
    }, 200);
})

restart.addEventListener("click", () => {
    playClickSound()
    //controls amd buttons visibility
    let delay = setTimeout(() => {
        final.classList.add("hide")
        start.classList.remove("hide")
    }, 200);
})

homeButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
      location.assign('https://gimme.sg/activations/dementia/');
    }, 200);
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
        completed.currentTime = 0;
        completed.play()
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
        animal.src = `./img/${rabbits[color].image}.png`
    }
    if(current == 1){
        animal.src = `./img/${cats[color].image}.png`
    }
    let delayselect = setTimeout(() => {
        select = true
      }, 800);
}

catHouse.addEventListener("click", () => {
    playClickSound()
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
    if(select == true){
        wrong.classList.remove("hide")
        let delaywrong = setTimeout(() => {
            wrong.classList.add("hide")
          }, 500);
    }
})

rabbitHouse.addEventListener("click", () => {
    playClickSound()
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
    if(select == true){
        wrong.classList.remove("hide")
        let delaywrong = setTimeout(() => {
            wrong.classList.add("hide")
          }, 500);
    }
})

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });