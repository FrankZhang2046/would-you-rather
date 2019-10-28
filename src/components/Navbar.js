import React from 'react';
import '../styles/Navbar.scss';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = props => {
    return(
        <nav className="navbar">
            <Link to='/' className="navbar__homeTab">Home</Link>
            <Link to='/questions/new' className="navbar__newQuestion">New Question</Link>
            <Link to='/leaderboard' className="navbar__leaderboard">Leaderboard</Link>
            <Link className="navbar__username">{
                props.loggedIn !== undefined ? props.loggedIn.name : 'username'
            }
            </Link>
            <Link className="navbar__logout">Logout</Link>
            
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