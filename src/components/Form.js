import React from 'react';

const Form = props => {
    const {question, change, submit, selectedOption} = props;

    return (
        <form className="poll__voting" onSubmit={submit} >
              <label htmlFor="optionOne">
                <input
                  type="radio"
                  name="optionOne"
                  id="optionOne"
                  value="optionOne"
                  onChange={change}
                  checked={selectedOption === "optionOne"}
                />
                {question.optionOne.text}
              </label>
              <label htmlFor="optionTwo">
                <input
                  type="radio"
                  name="optionTwo"
                  id="optionTwo"
                  value="optionTwo"
                  onChange={change}
                  checked={selectedOption === "optionTwo"}
                />
                {question.optionTwo.text}
              </label>
              <button type="submit" >SUBMIT</button>
            </form>
    )
}

export default Form;