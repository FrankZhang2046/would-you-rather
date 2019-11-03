import React from 'react';
import { connect } from "react-redux";

class Login extends React.Component{
    render(){
        return(
            <div className="login">
                this is the login page
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps)(Login);