import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render(){
        let message = this.props.message;
        let date = new Date(message.time);
        return(
            <li>
                <p>
                    <strong>{message.user}</strong>
                    <em>{date.toTimeString()}</em>
                    <br/>
                    <span>{message.body}</span>
                </p>
            </li>
        );
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
};

export default Message