import React from "react";
import "../styles/Poll.scss";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { connect } from "react-redux";
import Form from './Form';
import Result from './Result';

class Poll extends React.Component {
  state = {
    selectedOption: "",
  };

  handleSubmit = e => {
      e.preventDefault();
      const { question, dispatch, authedUser } = this.props;
      console.log(question, authedUser);
      dispatch(handleSaveQuestionAnswer(authedUser, question.id, this.state.selectedOption))
  }

  handleChange = e => {
    this.setState({ selectedOption: e.target.value });
};

  render() {
    const { author, question, answered } = this.props;
    if (author !== undefined) {
      return (
        <div className="poll">
          <div className="poll__title">{answered === true ? `Asked by ${author.name}` : `${author.name} asks: `}</div>
          <div className="poll__content">
            <img
              className="poll__content--avatar"
              src={author.avatarURL}
              alt="author-avatar"
            />
            {answered === true ? 
                <Result id={question.id}/>
                :
                <Form question={question} submit={this.handleSubmit} change={this.handleChange} selectedOption={this.state.selectedOption}/>}
          </div>
        </div>
      );
    } else return null;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { question_id } = ownProps.match.params;
  const question = state.questions[question_id];
  const {authedUser} = state;
  let author;
  let answered;

  if (question !== undefined && authedUser !== undefined) {
    author = state.users[question.author];

    if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)) {
        answered = true;
    } else {
        answered = false;
    }
  }
  

  return {
    question,
    author,
    authedUser,
    answered,
  };
};

export default connect(mapStateToProps)(Poll);
