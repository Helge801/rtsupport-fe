import React, {Component} from 'react';
import PropTypes from 'prop-types';

class User extends Component {

    onClick(e){
        e.preventDefault();
        this.props.setUser(this.props.user);
    }

    render(){
        const user = this.props.user;
        const status = user === this.props.activeUser ? 'active' : '';
        return(
            <li className={status}>
                <a onClick={this.onClick.bind(this)}>
                    {user.name}
                </a>
            </li>
        );
    }
}

User.propTypes = {
    user: PropTypes.object.isRequired,
    activeUser: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired
}

export default User