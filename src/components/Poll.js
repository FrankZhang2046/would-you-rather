import React from "react";
import "../styles/Poll.scss";
import { handleSaveQuestionAnswer } from "../actions/questions";
import { connect } from "react-redux";

class Poll extends React.Component {
  state = {
    selectedOption: ""
  };

  handleSubmit = e => {
      e.preventDefault();
      const { question, dispatch, authedUser } = this.props;
      dispatch(handleSaveQuestionAnswer(authedUser, question.id, this.state.selectedOption))
  }

  handleChange = e => {
    this.setState({ selectedOption: e.target.value });
};

  render() {
    const { author, question } = this.props;
    if (author !== undefined) {
      return (
        <div className="poll">
          <div className="poll__title">{author.name} asks:</div>
          <div className="poll__content">
            <img
              className="poll__content--avatar"
              src={author.avatarURL}
              alt="author-avatar"
            />
            <form className="poll__voting" onSubmit={this.handleSubmit}>
              <label htmlFor="optionOne">
                <input
                  type="radio"
                  name="optionOne"
                  id="optionOne"
                  value="optionOne"
                  onChange={this.handleChange}
                  checked={this.state.selectedOption === "optionOne"}
                />
                {question.optionOne.text}
              </label>
              <label htmlFor="optionTwo">
                <input
                  type="radio"
                  name="optionTwo"
                  id="optionTwo"
                  value="optionTwo"
                  onChange={this.handleChange}
                  checked={this.state.selectedOption === "optionTwo"}
                />
                {question.optionTwo.text}
              </label>
              <button type="submit" >SUBMIT</button>
            </form>
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
  if (question !== undefined) {
    author = state.users[question.author];
  }

  return {
    question,
    author,
    authedUser,
  };
};

export default connect(mapStateToProps)(Poll);
