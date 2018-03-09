import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserList extends Component {
    render(){
        return (
            <ul>{
                this.props.users.map(user => {
                    return (
                        <li>{user.name}</li>
                    )
                })   
            }</ul>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UserList;