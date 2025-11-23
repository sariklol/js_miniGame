const input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    gameTime = document.querySelector('.time'),
    gameBox = document.querySelector('.game__box')

let score = 0
let time = 0
let interval = 0

btn.addEventListener('click', () => {
    if (input.value > 4) {
        time = input.value
        input.value = ''
        gameBox.innerHTML = ''
        score = 0
        clearInterval(interval)
        startGame()
    } else {
        alert('You wrote number less than 5 sec')
    }
})

gameBox.addEventListener('click', (event) => {
    if (event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        ballCreate()
    }
})

function startGame() {
    btn.disabled = true
    btn.style.background = 'rgb(101, 148, 30)'
    gameTime.innerHTML = time
    interval = setInterval(() => decreaseTime(), 1000)
    ballCreate()
}

function decreaseTime() {
    if (time == 1) {
        gameTime.innerHTML = 0
        endGame()
    } else {
        gameTime.innerHTML = --time
    }
}

function endGame() {
    btn.disabled = false
    btn.style.background = ''
    gameBox.innerHTML = `<h2 class='result'>Your score is ${score}</h2>`
}

function ballCreate() {
    let ball = document.createElement('div')
    ball.classList.add('ball')

    let size = Math.floor(random(20, 100))

    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.background = randColor()
    ball.style.clipPath = randShape()

    let { width, height } = gameBox.getBoundingClientRect()

    let leftValue = random(0, width - size)
    let topValue = random(0, height - size)

    ball.style.left = leftValue + 'px'
    ball.style.top = topValue + 'px'

    gameBox.append(ball)
}

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function randColor() {
    let colors = ['red', 'pink', 'purple', 'greenyellow', 'brown', 'red', 'blueviolet']

    let colorIndex = Math.floor(Math.random() * colors.length)

    return colors[colorIndex]
}

function randShape() {
    let shape = ['polygon(50% 0%, 0% 100%, 100% 100%)', 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)', 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', 'polygon(34% 50%, 70% 7%, 100% 60%, 39% 69%, 43% 97%, 0 73%, 25% 18%)']

    let shapeIndex = Math.floor(Math.random() * shape.length)

    return shape[shapeIndex]
}
