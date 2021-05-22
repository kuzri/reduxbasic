import React, { Component } from 'react';
import Counter from '../components/Counter';
import CounterContainer from './CounterContainer';

class App extends Component {
    render() {
        return (
            <CounterContainer/>
        );
    }
}

export default App;