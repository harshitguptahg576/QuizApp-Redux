import { combineReducers } from "redux";
import LoginUser from "./LoginUser";
import QuizStartReducer from "./QuizStartReducer";
import RegisterUser from "./RegisterUser";
import TokenReducer from "./TokenReducer";

export default combineReducers({
    Quiz:QuizStartReducer,
    Token:TokenReducer,
    Users:RegisterUser,
    LoginUser:LoginUser
}
)