import { getRandomId } from './functions/random-id.js'

document.getElementById('restart-button').addEventListener('click', () => {
    removeCards()
    getRandomId()
})

function removeCards() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.remove()
    })
}

getRandomId()