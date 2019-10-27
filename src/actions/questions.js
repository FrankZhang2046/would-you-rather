export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

export const receiveQuestions = questions => {
    return{
        type: RECEIVE_QUESTIONS,
        questions,
    }
}