import React, {Component} from 'react';
class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    render () {
        return (
            <div>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}
export default Counter;
