import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import User from './User';

class Login extends React.Component{
    state={loggedIn: false}

    changeAuthedUser= userId =>{
        const {dispatch} = this.props;
        dispatch(setAuthedUser(userId));
        this.setState({loggedIn: true});
    }

    render(){
        const {userIds} = this.props;

        return(
            <div className="login">
                {this.state.loggedIn ? <Redirect to='/'/> : null}
                <div className="login__prompt">Please click on a profile to log in</div>
                {userIds.map(user => <User id={user} key={user} display={'login'} click={this.changeAuthedUser}/>)}
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