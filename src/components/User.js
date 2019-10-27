import React from 'react';
import { connect } from "react-redux";

class User extends React.Component{
    render(){
        const imageUrl = this.props.user.avatarURL;
        const {name} = this.props.user;

        return(
            <div>
                <img src={imageUrl} alt=""/>
                <p>{name}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {users} = state;
    const {id} = ownProps;
    const user = users[id];

    return {
        user: user,
    }
}

export default connect(mapStateToProps)(User);