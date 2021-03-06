import React from 'react';
import { connect } from "react-redux";

const Result = props => {
    const {question, authedUser} = props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    let voted;

    if (question && question.optionOne.votes.includes(authedUser)) {
        voted = 'optionOne';
    }
    else if (question.optionTwo.votes.includes(authedUser)){
        voted = 'optionTwo';
    }

    return(
        <div className="result__container">Results: 
            <div className="result__optionOne" style={voted === 'optionOne' ? {'background': 'red'} : null}>
                {question.optionOne.text}
            </div>
            <div className="result__optionOne--stats">{optionOneVotes} out of {totalVotes} {Math.round((optionOneVotes / totalVotes) * 100)}%</div>
            <div className="result__optionTwo" style={voted === 'optionTwo' ? {'background': 'red'} : null}>
                {question.optionTwo.text}
            </div>
            <div className="result__optionTwo--stats">{optionTwoVotes} out of {totalVotes} {Math.round((optionTwoVotes / totalVotes) * 100)}%</div>
            <div className="result__optionTwo"></div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.id];
    const {authedUser} = state;

    return {
        question,
        authedUser,
    }
}

export default connect(mapStateToProps)(Result);