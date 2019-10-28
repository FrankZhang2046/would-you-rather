import React from 'react';
import { connect } from "react-redux";

class NewQuestion extends React.Component{
    render(){
        return(
            <div className="newQuestion">
                <p className="newQuestion__title">Create New Question</p>
                <p className="newQuestion__subtitle">Complete the question:</p>
                <p className="newQuestion__prompt">Would you rather ...</p>
                <form className="newQuestion__form">
                    <input type="text"/>
                    <p>or</p>
                    <input type="text"/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default connect()(NewQuestion);