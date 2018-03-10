import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserForm from './UserForm.jsx';
import UserList from './UserList.jsx';

class UserSection extends Component {
    render(){
        return (
            <div className="support pannel panel-primary">
                <div className="panel-heading">
                    <strong>
                        Users
                    </strong>
                </div>
                <div className="panel-body channels">
                    <UserList 
                        {...this.props}
                    />
                    <UserForm 
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}

UserSection.propTypes = {
    addUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
    activeUser: PropTypes.object.isRequired
}

export default UserSection;