import React, {Component} from 'react';

export class App extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <>
                <Counter />
                <hr/>
                <CounterContainer />
            </>

        );
    }
}

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0,
        };
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }

    onIncrement() {
        this.setState({counter: this.state.counter + 1});
    }

    onDecrement() {
        this.setState({counter: this.state.counter - 1});
    }

    render () {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button type="button" onClick = {this.onIncrement}>Increment</button>
                <button type="button" onClick = {this.onDecrement}>Decrement</button>
            </div>
        );
    }
}

class CounterContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    onIncrement () {
        this.setState ({counter: this.state.counter + 1});
    }
    onDecrement () {
        this.setState ({counter: this.state.counter - 1});
    }
    render () {
        return (
            <CounterPresenter
                counter = {this.state.counter}
                onIncrement = {this.onIncrement}
                onDecrement = {this.onDecrement}
            />
        );
    }
}
function CounterPresenter (props) {
    return (
        <div>
          <p>{props.counter}</p>
          <button type="button" onClick = {props.onIncrement}>Increment</button>
          <button type="button" onClick = {props.onDecrement}>Decrement</button>
        </div>
    );
}
export default Counter;
