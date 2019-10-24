import React from 'react';

const Navbar = props => {
    return(
        <nav className="navbar">
            <p className="navbar__homeTab">Home</p>
            <p className="navbar__newQuestion">New Question</p>
            <p className="navbar__leaderboard">Leaderboard</p>
            <p className="navbar__username">Username</p>
            <p className="navbar__logout">Logout</p>
        </nav>
    )
}

export default Navbar;