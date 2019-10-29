import React from 'react';
import '../styles/Homescreen.scss';
import { connect } from "react-redux";

class Homescreen extends React.Component {
    state={
        display: '',
    }

    render(){
        return(
            <div className="homescreen">
                <div className="homescreen__title">
                    <p className="homescreen__title--unanswered">UNANSWERED</p>
                    <p className="homescreen__title--answered">ANSWERED</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {questions} = state;
    let answered = [];
    let unAnswered = [];
    answered = Object.keys(questions).filter(
        question => questions[question].optionOne.votes.length > 0 || questions[question].optionTwo.votes.length > 0
    );

    unAnswered = Object.keys(questions).filter(
        question => questions[question].optionOne.votes.length === 0 && questions[question].optionTwo.votes.length === 0
    );

    return {
        answered,
        questions,
        unAnswered,
    }
}

export default connect(mapStateToProps)(Homescreen);