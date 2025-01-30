
import { PostOneUser } from "../custom-types"
import { AuthenticationUser, LoginUser} from "../models" 
import { fakePostLogInByApi } from "./authentication.infrastructure"

/**
 * Login user to database (api)
 * * @param api Api to get raw user
*/
async function loginUser(user: LoginUser, api: PostOneUser): Promise<AuthenticationUser> {
    let result = await api(user)

    // TODO: save in localStorage

    return result
}

export function factoryLoginUserBusiness(user: LoginUser): Promise<AuthenticationUser> {
    return loginUser(user, fakePostLogInByApi)
}

const business = {
    getAll: factoryLoginUserBusiness
}

export default business