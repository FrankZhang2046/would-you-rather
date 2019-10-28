import React from 'react';
import { connect } from "react-redux";

const Homescreen = props => {
    return(
        <div className="homescreen">
            This is the homescren
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {questions} = state;

    return {
        questions,
    }
}

export default connect(mapStateToProps)(Homescreen);