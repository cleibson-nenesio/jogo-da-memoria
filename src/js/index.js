function getRandomId() {
    let randomCharactersIds = []

    for(let x = 0; x < 9; x++) {
        randomCharactersIds.push(Math.floor(Math.random() * 826 + 1))
    }

    getCharaters(randomCharactersIds) 
}

async function getCharaters(randomCharacters)  {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacters}`)
    const character = await response.json()

    createCard(character)
}

async function createCard(characters) {
    characters.push(...characters)
    shuffleArray(characters)

    const characterInfo = {
        name: [],
        image: [],
        id: [],
        setCharacter(character) {
            this.name = character.name
            this.image = character.image
            this.id = character.id
            mountCard(characterInfo)
        }
    }

    characters.forEach(character => {
        characterInfo.setCharacter(character)
    })
}

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

function startGame() {
    const cards = document.querySelectorAll('.card')
    const pontuation = document.getElementById('pontuation')
    let points = 0
    pontuation.innerText = points
    
    setTimeout(() => {
        cards.forEach(card => {
            card.classList.remove('show')
        })
    }, 2000)

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('show')
            const openCards = document.querySelectorAll('.show')

            if(openCards.length == 2) {
                if(openCards[0].id === openCards[1].id){
                    points = points + 20
                    pontuation.innerText = points
                    openCards.forEach(card => {
                        card.classList.remove('show')
                        card.classList.add('correct')
                    })
                    return
                }

                setTimeout(() => {
                    openCards.forEach(card => {
                        card.classList.remove('show')
                    })
                }, 1000)

                if(points == 0) return

                points = points - 5
                pontuation.innerText = points
            }

            setInterval(() => {
                const allCorrectCards = document.querySelectorAll('.correct')

                if(allCorrectCards.length == 18) {
                    alert(`Parabéns você pontuou ${points}`)
                    verifyCards()
                    getRandomId()
                }
            }, 2000)
        })
    })

    
}

function verifyCards() {
    const cards = document.querySelectorAll('.card')
    cards.forEach(card => {
        card.remove()
    })
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

document.getElementById('restart-button').addEventListener('click', () => {
    verifyCards()
    getRandomId()
})

getRandomId()