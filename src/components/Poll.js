import React from 'react';
import { connect } from "react-redux";

const Poll = props => {
    const {question_id} = props.match.params;

    return (
        <div className="poll">
            {question_id}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps)(Poll);