import React from "react";
import "../styles/Poll.scss";
import { connect } from "react-redux";

class Poll extends React.Component {
  state = {
    selectedOption: ""
  };

  handleSubmit = e => {
      e.preventDefault();
      console.log(this.state.selectedOption);
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
              <label htmlFor="option1">
                <input
                  type="radio"
                  name="option1"
                  id="option1"
                  value="option1"
                  onChange={this.handleChange}
                  checked={this.state.selectedOption === "option1"}
                />
                {question.optionOne.text}
              </label>
              <label htmlFor="optionTwo">
                <input
                  type="radio"
                  name="option2"
                  id="option2"
                  value="option2"
                  onChange={this.handleChange}
                  checked={this.state.selectedOption === "option2"}
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
