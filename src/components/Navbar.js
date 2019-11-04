import React from 'react';
import '../styles/Navbar.scss';
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    logOut = () => {
        const {dispatch} = this.props;
        dispatch(setAuthedUser(null))
    }

    render(){
        return(
            <nav className="navbar">
                <Link to='/' className="navbar__homeTab">Home</Link>
                <Link to='/add' className="navbar__newQuestion">New Question</Link>
                <Link to='/leaderboard' className="navbar__leaderboard">Leaderboard</Link>
                <p className="navbar__username">{
                    this.props.loggedIn !== undefined ? this.props.loggedIn.name : 'username'
                }
                </p>
                <Link to='#' className="navbar__logout" onClick={this.logOut}>Logout</Link>
                
            </nav>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {authedUser, users} = state;

    return {
        loggedIn: users[authedUser],
    }
}

export default connect(mapStateToProps)(Navbar);