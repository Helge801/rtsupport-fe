import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Message from './Message.jsx';

class MessageList extends Component {
    render(){
        let messages = this.props.activeChannel.messages;
        return (
            <ul>{
                messages.map(message => {
                    return(
                        <Message 
                            message={message}
                            key={message.id}
                        />
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