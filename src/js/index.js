import { getRandomId } from './functions/random-id.js'

if (window.matchMedia("(orientation: portrait)").matches) {
    alert('Gire a tela do celular')
}

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