import React, { Component } from 'react';
//import Rect from './Rect'

class ReactApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter:0,
            msg:'count start!'
        };
        this.doAction = this.doAction.bind(this);
    }

    doAction(e) {
        this.setState(
            (state) => (
                {
                    counter: state.counter + 1,
                    msg: 'count: ' + state.counter
                }
            )
        );
    }

    render() {
        return <div>
            <h1>React</h1>
            <p>{this.state.msg}</p>
            <button onClick={this.doAction}>Click</button>
        </div>;
    }
}

export default ReactApp;