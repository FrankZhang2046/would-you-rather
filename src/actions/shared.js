import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

export const handleInitialData = () => dispatch => {
    Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
        }
        )
}