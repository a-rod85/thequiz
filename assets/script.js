const gameName = 'The Quizmania'
const body = document.getElementById('body')
    //const title = document.getElementById('title')
    //const subtitle = document.getElementById('subtitle')
const userform = document.getElementById('userform')
const score = document.getElementById('score')
const scoretitle = document.getElementById('scoretitle')
const scorecount = document.getElementById('scorecount')
const quiz = document.getElementById('quiz')

const feedback_button = document.getElementById('feedback_button')

var username = "Aaron"

var count = 0

const genres = [
    { name: 'Books', id: 10 },
    { name: 'Film', id: 11 },
    { name: 'Music', id: 12 },
    { name: 'Games', id: 15 }
]

const levels = [
    { name: 'easy', id: 100 },
    { name: 'medium', id: 200 },
    { name: 'hard', id: 300 }
]

function startup() {
    test1()
}

function test1() {
    document.getElementById('subtitle').innerText = 'Enter your name: '
    userform.onsubmit = userSubmit
}

function userSubmit() {
    console.log(document.getElementById('name').value)
    username = document.getElementById('name').value
    test2()
    return false
}

function test2() {
    subtitle.innerText = `Feeling lucky ${username}?`
    userform.style.display = 'none'
    score.style.display = 'flex'
    feedback_button.style.display = 'block'
    feedback_button.onclick = showFeedback
    theGame()
}

function theGame() {

    let col = 0
    genres.forEach(genre => {
        col++
        const column = document.createElement('div')
        const columnTitle = document.createElement('div')

        column.classList.add('genre-column')
        column.classList.add(`col-${col}`)
        columnTitle.classList.add('col-title')
        columnTitle.innerHTML = genre.name

        quiz.append(column)
        column.append(columnTitle)

        levels.forEach(level => {

        })
    })    
}
