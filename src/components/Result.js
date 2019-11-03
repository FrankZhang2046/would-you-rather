import React from 'react';
import { connect } from "react-redux";

const Result = props => {
    const {question} = props;

    return(
        <div className="result__container">Results: 
            <div className="result__optionOne">
                {question.optionOne.text}
            </div>
            <div className="result__optionTwo">
                {question.optionTwo.text}
            </div>
            <div className="result__optionTwo"></div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const question = state.questions[ownProps.id];

    return {
        question,
    }
}

export default connect(mapStateToProps)(Result);