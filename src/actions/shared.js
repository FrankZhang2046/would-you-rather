import { _getUsers } from "../utils/_DATA";
import { receiveUsers } from "./users";

export const handleInitialData = () => dispatch => {
    return _getUsers()
        .then(users=>{
            dispatch(receiveUsers(users))
        })
}