let points = 0
const pontuation = document.getElementById('pontuation')

function startGame() {
    const cards = document.querySelectorAll('.card')
    turnCards(cards)

    points = 0
    pontuation.innerText = points

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('show')
            const openCards = document.querySelectorAll('.show')
            openCards.length >= 2 ? verifyCards(openCards, points, pontuation) : null
        })
    })
}

function verifyCards(openCards) {
    if(openCards[0].id === openCards[1].id){
        openCards.forEach(card => {
            card.classList.remove('show')
            card.classList.add('correct')
        })
        verifyPoints(true)
        return
    }
    
    verifyPoints(false)
    setTimeout(() => {
        openCards.forEach(card => {
            card.classList.remove('show')
        })
    }, 1000)
}

function verifyPoints(boolean) {
    if(boolean) {
        points = points + 20
        pontuation.innerText = points
        return
    }

    if(points == 0) return
    points -= 5
    pontuation.innerText = points
}

function turnCards(cards) {
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('show')
        })
    }, 2000)
}

export { startGame }