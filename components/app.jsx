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
            connected: false
        };
    }

    componentDidMount(){
        let ws = this.ws = new WebSocket('ws://echo.websocket.org');
        ws.onmessage = this.message.bind(this);
        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);

    }

    message(e){
        const event = JSON.parse(e.data);
        if(event.name === 'channel add'){
            this.newChannel(event.data);
        }
    }

    open(){
        this.setState({connected: true});
    }

    close(){
        this.setState({connected: false});
    }

    newChannel(channel){
        let {channels} = this.state;
        channels.push(channel);
        this.setState({channels});
    }

    addChannel(name){
        let {channels} = this.state;
        let msg = {
            name: 'channel add',
            data: {
              id: channels.length,
                name
            }
        };

        this.ws.send(JSON.stringify(msg));
    }

    addUser(name){
        let {users} = this.state;
        users.push({id: users.length, name: name});
        this.setState({users: users});
    }

    addMessage(message){
        if(this.state.activeUser.name == undefined || this.state.activeChannel.name == undefined){
            alert("You must select Channel and User");
            return false;
        } else {
            let messages = this.state.activeChannel.messages;
            messages.push({id: messages.length, body: message, user: this.state.activeUser.name, time: Date.now()});
            this.setState({messages: messages});
            return true;
        }
        
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
                    addMessage={this.addMessage.bind(this)}
                />
            </div>
        )
    }
}

export default App