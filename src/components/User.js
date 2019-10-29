import React from "react";
import "../styles/User.scss";
import { connect } from "react-redux";

class User extends React.Component {
  render() {
    const { name, avatarURL, answers, questions} = this.props.user;
    const {score} = this.props
    const answeredScore = Object.keys(answers).length;
    const createdScore = Object.keys(questions).length;

    return (
      <div className="user">
        <img src={avatarURL} alt="user-portrait" className="user__portrait" />
        <div className="user__text">
          <p className="user__text--name">{name}</p>
          <p className="user__text--answered">Answered: {answeredScore}</p>
          <p className="user__text--created">Created: {createdScore}</p>
          <p>Score: {score}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state;
  const { id, score } = ownProps;
  const user = users[id];

  return {
    user: user,
    score,
  };
};

export default connect(mapStateToProps)(User);