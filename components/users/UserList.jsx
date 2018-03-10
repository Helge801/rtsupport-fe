import React, {Component} from 'react';
import PropTypes from 'prop-types';
import User from './User.jsx';

class UserList extends Component {
    render(){
        return (
            <ul>{
                this.props.users.map(user => {
                    return (
                        <User 
                            user={user}
                            key={user.id}
                            {...this.props}
                        />
                    )
                })   
            }</ul>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired,
    activeUser: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired
}

export default UserList;