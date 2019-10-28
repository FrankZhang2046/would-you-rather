import { RECEIVE_QUESTIONS, SAVE_QUESTION } from "../actions/questions";

const questions = (state={}, action) => {
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return action.questions;
        case SAVE_QUESTION:
            const {question} = action;
            return {
                ...state,
                [question.id]: question,
            }

        default:
            return state;
    }
}

export default questions;