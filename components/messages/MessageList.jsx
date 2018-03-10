import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageList extends Component {
    render(){
        let messages = this.props.activeChannel.messages;
        return (
            <ul>{
                messages.map(message => {
                    return(
                        <li>
                            {message}
                        </li>
                    );
                })    
            }</ul>
        );
    }
}

MessageList.propTypes = {
    activeChannel: PropTypes.object.isRequired,
};

export default MessageList;