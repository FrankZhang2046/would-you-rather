import React from "react";
import "../styles/Poll.scss";
import { connect } from "react-redux";

class Poll extends React.Component {
    state = {};

    handleChange = e => {
        // e.preventDefault();
        console.log(e.target.value);
    }

    handleSubmission = formEvent => {
        formEvent.preventDefault();
        
    }

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
            <form className="poll__voting" onSubmit={this.handleSubmission}>
              <p className="poll__voting--title">Would you rather ...</p>
              <label htmlFor="optionOne" className="poll__voting--optionOne-label"><input
                onChange={this.handleChange}
                type="radio"
                name="optionOne"
                id="optionOne"
                value={question.optionOne.text}
              />
              {question.optionOne.text}</label>
              <label htmlFor="" className="poll__voting--optionTwo-label">
              <input
                onChange={this.handleChange}
                type="radio"
                name="optionTwo"
                id="optionTwo"
                value={question.optionTwo.text}
              />
              {question.optionTwo.text}</label>
              <button type="submit" className="poll__voting--submit">
                SUBMIT
              </button>
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
  let author;
  if (question !== undefined) {
    author = state.users[question.author];
  }

  return {
    question,
    author
  };
};

export default connect(mapStateToProps)(Poll);
