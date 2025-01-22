import { Characters } from "../models"

/**
 * Contract to provde function to get characters
 */
export type GetAllCharacters = () => Promise<Characters>