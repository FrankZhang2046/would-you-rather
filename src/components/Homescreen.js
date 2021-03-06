import React from 'react';
import '../styles/Homescreen.scss';
import { connect } from "react-redux";
import Question from './Question';

class Homescreen extends React.Component {
    state= {
        display: 'unAnswered',
    }

    toggleDisplay = e => {
        this.setState({display: e.target.textContent});
    }

    render(){
        const {questions} = this.props;

        return(
            <div className="homescreen">
                <div className="homescreen__title">
                    <p className="homescreen__title--unanswered"name="unanswered" onClick={this.toggleDisplay} style={this.state.display === "unAnswered" ? {'background':'yellow'} : null} >unAnswered</p>
                    <p className="homescreen__title--answered" name="answered" onClick={this.toggleDisplay}style={this.state.display === "answered" ? {'background':'yellow'} : null}>answered</p>
                </div>
                <div className="homescreen__display">
                        {
                            this.props[this.state.display]
                            .sort(
                                (a, b) => questions[b].timestamp - questions[a].timestamp
                            )
                            .map(
                                question => <Question key={question} id={question} status={this.state.display}/>
                            )
                        }
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {questions, authedUser} = state;
    let answered = [];
    let unAnswered = [];
    answered = Object.keys(questions).filter(
        question => questions[question].optionOne.votes.includes(authedUser) || questions[question].optionTwo.votes.includes(authedUser)
    );

    unAnswered = Object.keys(questions).filter(
        question => questions[question].optionOne.votes.includes(authedUser) === false && questions[question].optionTwo.votes.includes(authedUser) === false
    );

    return {
        authedUser,
        answered,
        questions,
        unAnswered,
    }
}

export default connect(mapStateToProps)(Homescreen);