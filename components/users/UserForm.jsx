import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {

    onSubmit(e){
        e.preventDefault();
        this.props.addUser(this.refs.user.value);
        this.refs.user.value = '';
    }

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input 
                        className="from-control"
                        placeholder="Set Your Name"
                        type="text"
                        ref="user"
                    />
                </div>
            </form>
        );
    }
}

UserForm.propTypes = {
    addUser: PropTypes.func.isRequired
}

export default UserForm
