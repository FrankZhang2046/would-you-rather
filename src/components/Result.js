import React from 'react';
import { connect } from "react-redux";

const Result = props => {
    const {question, authedUser} = props;
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
            <div className="result__optionTwo" style={voted === 'optionTwo' ? {'background': 'red'} : null}>
                {question.optionTwo.text}
            </div>
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