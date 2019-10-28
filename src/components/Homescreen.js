import React from 'react';
import { connect } from "react-redux";

const Homescreen = props => {
    return(
        <div className="homescreen">
            
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