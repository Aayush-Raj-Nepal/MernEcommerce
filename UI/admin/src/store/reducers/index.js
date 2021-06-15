import userReducer from "./user"
import {combineReducers} from "redux"
import cartReducer from "./cart"
import authReducer from "./auth"
const allReducers=combineReducers({
    user:userReducer,
    cart:cartReducer,
    auth:authReducer
})

export default allReducers