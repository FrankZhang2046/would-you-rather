import React from 'react';
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import User from './User';

class Login extends React.Component{
    changeAuthedUser(userId){
        const {dispatch} = this.props;
        dispatch(setAuthedUser(userId))
    }

    render(){
        const {userIds} = this.props;

        return(
            <div className="login">
                {userIds.map(user => <User id={user} key={user} display={'login'} click={this.changeAuthedUser.bind(this)}/>)}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {users} = state;
    let userIds = [];
    Object.keys(users).map(user => userIds.push(users[user].id))
    
    return {
        userIds,
    }
}

export default connect(mapStateToProps)(Login);