/**
 * Character chosen by a player
 */
export interface Character {
    surname: string
}

/**
 * Partie de jeu
 */
export interface Game {
    persoChoisi: Character;
    success: boolean;
};

export type Games = Game[];