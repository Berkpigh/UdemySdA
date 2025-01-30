import { AuthenticationUser, LoginUser } from "../models"

// TODO : ALERT, delete from code !!!
const url = 'https://localhost:7216/api/login/'

type ApiReturnType = {
    surname: string,
    // tokenType: string;
    token: string
    // expiresIn: number;
    // refreshToken: string;
}

/**
  * Return list of characters from api
 */
async function postRawApi(user: LoginUser): Promise<ApiReturnType> {
    const response = await fetch(url)
    const result = await response.json() as ApiReturnType
    return result
}

// async function postLoginByApiGeneric(rawApi: () => Promise<ApiReturnType>): Promise<AuthenticationUser> {
//     const resultApi = await rawApi()

//     return resultApi
// }

export async function postLoginByApi(user: LoginUser): Promise<AuthenticationUser> {
    return postRawApi(user)
}

export async function fakePostLogInByApi(user: LoginUser): Promesse<AuthenticationUser> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                surname: 'Legolas',
                token: '123456789'
            })
        }, 1000)
    })
}