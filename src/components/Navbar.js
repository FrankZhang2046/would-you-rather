import React from 'react';
import '../styles/Navbar.scss';
import { connect } from "react-redux";

const Navbar = props => {
    return(
        <nav className="navbar">
            <p className="navbar__homeTab">Home</p>
            <p className="navbar__newQuestion">New Question</p>
            <p className="navbar__leaderboard">Leaderboard</p>
            <p className="navbar__username">{
                props.loggedIn !== undefined ? props.loggedIn.name : 'username'
            }
            </p>
            <p className="navbar__logout">Logout</p>
            
        </nav>
    )
}

const mapStateToProps = (state, ownProps) => {
    const {authedUser, users} = state;

    return {
        loggedIn: users[authedUser],
    }
}

export default connect(mapStateToProps)(Navbar);