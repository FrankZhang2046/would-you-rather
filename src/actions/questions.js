import { _saveQuestion } from "../utils/_DATA";

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
            console.log(formattedQuestion);
            dispatch(saveQuestion(formattedQuestion));
        })
}