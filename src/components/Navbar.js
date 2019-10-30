import React from 'react';
import '../styles/Navbar.scss';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = props => {
    return(
        <nav className="navbar">
            <Link to='/' className="navbar__homeTab">Home</Link>
            <Link to='/add' className="navbar__newQuestion">New Question</Link>
            <Link to='/leaderboard' className="navbar__leaderboard">Leaderboard</Link>
            <p className="navbar__username">{
                props.loggedIn !== undefined ? props.loggedIn.name : 'username'
            }
            </p>
            <Link to='#' className="navbar__logout">Logout</Link>
            
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