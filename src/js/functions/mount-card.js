import { startGame } from './start-game.js'

function mountCard(characterInfo) {
    const card = `<div class="card show" id=${characterInfo.id}>
                    <div class="back"></div>
                    <div class="front">
                        <img src="${characterInfo.image}" alt="${characterInfo.name}">
                        <p>${characterInfo.name}</p>
                    </div>
                </div>`

    document.getElementById('main').innerHTML += card

    startGame()
}

export { mountCard }