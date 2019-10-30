import React from 'react';
import '../styles/Poll.scss';
import { connect } from "react-redux";

const Poll = props => {
    const {author, question} = props;

    if (author !== undefined)
    {return (
        <div className="poll">
            <div className="poll__title">{author.name} asks:</div>
            <div className="poll__content">
                <img className="poll__content--avatar" src={author.avatarURL} alt="author-avatar"/>
            </div>
        </div>
    )}
    else return null;
}

const mapStateToProps = (state, ownProps) => {
    const {question_id} = ownProps.match.params;
    const question = state.questions[question_id];
    let author;
    if(question !== undefined ) {
        author = state.users[question.author]
    }

    return {
        question,
        author,
    }
}

export default connect(mapStateToProps)(Poll);