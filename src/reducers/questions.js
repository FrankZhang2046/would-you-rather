import { RECEIVE_QUESTIONS } from "../actions/questions";

const questions = (state={}, action) => {
    switch (action.type){
        case RECEIVE_QUESTIONS:
            return action.questions;
        default:
            return state;
    }
}

export default questions;