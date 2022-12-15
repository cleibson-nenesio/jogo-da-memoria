let points = 0

function startGame() {
    const cards = document.querySelectorAll('.card')
    turnCards(cards)

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('show')
            const openCards = document.querySelectorAll('.show')
            openCards.length == 2 ? verifyCards(openCards, points, pontuation) : null
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
    const pontuation = document.getElementById('pontuation')

    if(boolean == true) {
        points = points + 20
        pontuation.innerText = points
        return
    }

    if(points == 0) return
    points = points - 5
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