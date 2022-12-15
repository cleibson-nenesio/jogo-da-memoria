import { createCard } from './create-card.js'

async function getCharaters(randomCharacters)  {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacters}`)
    const character = await response.json()

    createCard(character)
}

export { getCharaters }