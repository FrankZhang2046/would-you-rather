import React from 'react';
import '../styles/Homescreen.scss';
import { connect } from "react-redux";

class Homescreen extends React.Component {
    state={
        display: 'answered',
    }

    toggleDisplay = e => {
        this.setState({display: e.target.textContent});
    }

    render(){
        return(
            <div className="homescreen">
                <div className="homescreen__title">
                    <p className="homescreen__title--unanswered"name="unanswered" onClick={this.toggleDisplay}>unAnswered</p>
                    <p className="homescreen__title--answered" name="answered" onClick={this.toggleDisplay}>answered</p>
                </div>
                <div className="homescreen__display">
                        {
                            this.props[this.state.display].map(
                                question => <li>{this.props.questions[question].optionOne.text + ' ' + this.props.questions[question].optionTwo.text}</li>
                            )
                        }
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {questions ,authedUser} = state;
    let answered = [];
    let unAnswered = [];
    answered = Object.keys(questions).filter(
        question => questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser)
    );

    unAnswered = Object.keys(questions).filter(
        question => questions[question].optionOne.votes.includes(authedUser) === false || questions[question].optionTwo.votes.includes(authedUser) === false
    );

    return {
        authedUser,
        answered,
        questions,
        unAnswered,
    }
}

export default connect(mapStateToProps)(Homescreen);