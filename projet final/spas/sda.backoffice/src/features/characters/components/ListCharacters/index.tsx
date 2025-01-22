import { useState, useEffect } from "react"
import { Characters } from "../../models"
import business from "../../services/characters.application"

/**
 * Head component to display list of characters
 */
export const ListCharacters = () => {
    const [characters, setCharacters] = useState<Characters>([])
    const characterDivList = characters.map(character => <div>key={character.id} {character.name}</div>)

    useEffect(() => {
        business.getAll().then(result => {
            setCharacters(result)
        })
    }, []) // Appel qu'une seule fois après le rendu initial

    return (
        <>
        <div>
            {characterDivList}
        </div>
        </>
    )
}