import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import UserSection from './users/UserSection.jsx';
import PropTypes from 'prop-types';
import MessageSection from './messages/MessageSection.jsx';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            users: [],
            activeChannel: {
                messages: []
            },
            activeUser: {},
        };
    }

    addChannel(name){
        let {channels} = this.state;
        channels.push({id: channels.length, name: name, messages: []});
        this.setState({channels});
        //TODO: Send to API
    }

    addUser(name){
        let {users} = this.state;
        users.push({id: users.length, name: name});
        this.setState({users: users});
    }

    setChannel(activeChannel){
        this.setState({activeChannel: activeChannel});
        //TODO: Get Channel Messages
    }

    setUser(activeUser){
        this.setState({activeUser: activeUser});
    }

    render(){
        return (
            <div className="app">
                <div className="nav">
                    <ChannelSection 
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                    <UserSection 
                        {...this.state}
                        addUser={this.addUser.bind(this)}
                        setUser={this.setUser.bind(this)}
                    />
                </div>
                <MessageSection 
                    {...this.state}
                />
            </div>
        )
    }
}

export default App