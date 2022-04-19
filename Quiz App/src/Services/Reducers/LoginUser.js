import {
  updateAnswers,
  updatePoints,
  updateTime,
  updateUser,
  userDetails,
} from "../Constants";

const initialPayload = {
  points: 0,
  submittedAnswers: [],
  time: { min: 0, sec: 0 },
  admin: false,
};

export default (state = initialPayload, action) => {
  switch (action.type) {
    case userDetails:
      return { ...state, ...action.payload };
    case updatePoints:
      if (action.payload > state.points)
        return { ...state, points: action.payload };
      else return { ...state };
    case updateAnswers:
      return { ...state, submittedAnswers: action.payload };
    case updateTime:
      return { ...state, time: action.payload };
    case updateUser:
      return { ...action.payload };
    default:
      return state;
  }
};