import { loginInfo } from "../models"

// TODO : ALERT, delete from code !!!
const url = 'https://localhost:7216/api/login/'

type LoginApiReturnType = {
    tokenType: string;
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
}

/**
  * Return list of characters from api
 */
async function postRawApi(): Promise<LoginApiReturnType> {
    const response = await fetch(url)
    const result = await response.json() as LoginApiReturnType
    return result
}

async function postLoginByApiGeneric(rawApi: () => Promise<LoginApiReturnType>): Promise<loginInfo> {
    const resultApi = await rawApi()

    return resultApi
}

export async function postLoginByApi(): Promise<LoginInfo> {
    return postLoginByApiGeneric(postRawApi)
}