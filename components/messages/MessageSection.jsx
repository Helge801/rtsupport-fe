import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import PropTypes from 'prop-types';
import MessageForm from './MessageForm.jsx';

class MessageSection extends Component {
    render(){
        let activeChannel = this.props.activeChannel;
        return (
            <div className="messages-container pannel panel-primary">
                <div className="panel-heading">
                    <strong>
                        {activeChannel.name || "No Channel Selected"}
                    </strong>
                </div>
                <div className="panel-body messages">
                    <MessageList 
                        {...this.props}
                    />
                    <MessageForm 
                        {...this.props}
                    />
                </div>
            </div>
        );
    }
}

MessageSection.protoTypes = {
    activeChannel: PropTypes.object.isRequired,
    addMessage: PropTypes.func.isRequired
};

export default MessageSection