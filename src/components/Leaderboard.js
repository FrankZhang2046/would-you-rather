import React from 'react';
import '../styles/Leaderboard.scss';
import { connect } from "react-redux";
import User from './User';

class Leaderboard extends React.Component{
    render(){
        return (
            <div className="leaderboard">
                {this.props.userIds.map(
                    user => (
                        <User key={user.id} id={user.id} score={user.score} display='leaderboard'/>
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
            const score = Object.keys(users[user].answers).length + Object.keys(users[user].questions).length;
           return userIds.push({id: users[user].id, score})
        }
    )

    return {
        userIds: userIds.sort((a, b) => b.score - a.score)
    }
}

export default connect(mapStateToProps)(Leaderboard);