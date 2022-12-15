import { getCharaters } from "../services/get-characters.js"

function getRandomId() {
    let randomCharactersIds = []

    for(let x = 0; x < 9; x++) {
        randomCharactersIds.push(Math.floor(Math.random() * 826 + 1))
    }

    getCharaters(randomCharactersIds) 
}

export { getRandomId }