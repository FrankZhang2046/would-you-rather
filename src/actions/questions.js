import { _saveQuestion, _getUsers } from "../utils/_DATA";
import { receiveUsers } from "./users";
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION = 'SAVE_QUESTION';

export const receiveQuestions = questions => {
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

const saveQuestion = question => {
    return {
        type: SAVE_QUESTION,
        question,
    }
}

export const handleSaveQuestion = (optionOneText, optionTwoText, author) => dispatch => {
    const question = {
        optionOneText,
        optionTwoText,
        author,
    }

    return _saveQuestion(question)
        .then(formattedQuestion => {
            dispatch(saveQuestion(formattedQuestion));
            _getUsers()
                .then(users => dispatch(receiveUsers(users)));
        })
}