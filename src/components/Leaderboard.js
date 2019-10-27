import React from 'react';
import { connect } from "react-redux";
import User from './User';

class Leaderboard extends React.Component{
    render(){
        return (
            <div>
                {this.props.userIds.map(
                    user => (
                        <User id={user}/>
                    )
                )}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {users} = state;
    let userIds = [];
    Object.keys(users).map(
        user=>{
           return userIds.push(users[user].id)
        }
    )

    return {
        userIds,
    }
}

export default connect(mapStateToProps)(Leaderboard);