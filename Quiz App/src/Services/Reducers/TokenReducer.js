import { updateToken } from "../Constants";

const initialToken={token:false}

export default (state = initialToken, action) => {
    switch (action.type) {
        case updateToken:
            return {token:action.payload}
        default:
            return state
    }
}