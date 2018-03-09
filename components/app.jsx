import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';
import PropTypes from 'prop-types';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            activeChannel: {}
        };
    }

    addChannel(name){
        let {channels} = this.state;
        channels.push({id: channels.length, name});
        this.setState({channels});
        //TODO: Send to API
    }

    setChannel(activeChannel){
        console.log(activeChannel);
        console.log(this.state);
        this.setState({activeChannel: activeChannel});
        //TODO: Get Channel Messages
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
                </div>
            </div>
        )
    }
}

export default App