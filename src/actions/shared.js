import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = 'williamgibson';

export const handleInitialData = () => dispatch => {
    Promise.all([_getUsers(), _getQuestions()])
        .then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(setAuthedUser(AUTHED_ID));
        }
        )
    
    // return _getUsers()
    //     .then(users=>{
    //         dispatch(receiveUsers(users));
    //         dispatch(setAuthedUser(AUTHED_ID));
    //     })
}