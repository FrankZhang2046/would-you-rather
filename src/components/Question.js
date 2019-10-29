import React from "react";
import "../styles/Question.scss";
import { connect } from "react-redux";

const Question = props => {
  const { author, question } = props;

  return (
    <div className="question">
      <div className="question__author">{author.name} asks</div>
      <div className="question__content">
        <img
          src={author.avatarURL}
          alt="avatarUrl"
          className="question__author--avatar"
        />
        <div className="question__text">
          <div className="question__text--title">Would you rather...</div>
          <div className="question__text--option">
            {question.optionOne.text}
          </div>
          <div className="question__text--conjunction">or</div>
          <div className="question__text--option">
            {question.optionTwo.text}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const question = state.questions[ownProps.id];
  const author = state.users[question.author];

  return {
    question,
    author
  };
};

export default connect(mapStateToProps)(Question);
