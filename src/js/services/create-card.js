import { mountCard } from '../functions/mount-card.js'

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

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

export { createCard }