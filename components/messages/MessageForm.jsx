import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {

    onSubmit(e){
        e.preventDefault();
        if(this.props.addMessage(this.refs.message.value)){
            this.refs.message.value = '';
        }
    }

    render(){
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input 
                        className="from-control fat_boy"
                        placeholder="Message"
                        type="text"
                        ref="message"
                    />
                </div>
            </form>
        );
    }
}

MessageForm.propTypes = {
    addMessage: PropTypes.func.isRequired
};

export default MessageForm