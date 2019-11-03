import React from 'react';
import { connect } from "react-redux";
import User from './User';

class Login extends React.Component{

    render(){
        const {userIds} = this.props;

        return(
            <div className="login">
                {userIds.map(user => <User id={user} key={user} />)}
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