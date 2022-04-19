import { getAll, updateData } from "../Constants";

const initialPayload = {
  userData: [],
};

export default (state = initialPayload, action) => {
  switch (action.type) {
    case getAll:
      return { ...state, userData: action.payload };
    case updateData:
        const update=state.userData
        update.push(action.payload)
      return { ...state, userData:update };
    default:
      return state;
  }
};
