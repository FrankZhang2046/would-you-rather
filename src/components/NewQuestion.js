import React from 'react';
import { handleSaveQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class NewQuestion extends React.Component{
    state = {
        newQuestionCreated: false,
        optionOneText: '',
        optionTwoText: '',
    }

    handleChange = e => {
        e.preventDefault();
        switch (e.target.name){
            case 'optionOne':
                this.setState({optionOneText: e.target.value});
                break;
            case 'optionTwo':
                this.setState({optionTwoText: e.target.value});
                break;
            default:
                break;
        }
    }

    hanldeSubmission = e => {
        const {dispatch, authedUser} = this.props;
        e.preventDefault();
        const optionOneText = this.state.optionOneText;
        const optionTwoText = this.state.optionTwoText;

        dispatch(handleSaveQuestion(optionOneText, optionTwoText, authedUser));

        this.setState({optionOneText: '', optionTwoText: '', newQuestionCreated: true});
    }

    render(){
        if(this.state.newQuestionCreated === true){
            return <Redirect to='/' />
        }
        else 
        return(
            <div className="newQuestion">
                <p className="newQuestion__title">Create New Question</p>
                <p className="newQuestion__subtitle">Complete the question:</p>
                <p className="newQuestion__prompt">Would you rather ...</p>
                <form className="newQuestion__form" onSubmit={this.hanldeSubmission}>
                    <input type="text" name="optionOne" onChange={this.handleChange} value={this.state.optionOneText} placeholder='option one text'/>
                    <p>or</p>
                    <input name='optionTwo' type="text" placeholder='option two text' onChange={this.handleChange} value={this.state.optionTwoText}/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    

    return {
        authedUser: state.authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion);