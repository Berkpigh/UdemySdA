import { PostRequest } from "../../../shared/models/custom.types"
import { loginInfo } from "../models"

/**
 * Contract to provde function to post login info
 */
export type PostLogin = PostRequest<loginInfo>