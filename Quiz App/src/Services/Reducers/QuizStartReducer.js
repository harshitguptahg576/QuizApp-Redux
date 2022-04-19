import { register, startQuiz, updatePoints } from "../Constants";

const initialPayload={ 
    userName: "Unknown",
    quizData:[],
    points:0
}

export default (state = initialPayload, action) => {
  switch (action.type) {
    case register:
      return {
          ...state,
        userName: action.payload,
      };
    case startQuiz:
      return {
          ...state , quizData:action.payload
      };
    default:
      return state;
  }
};
