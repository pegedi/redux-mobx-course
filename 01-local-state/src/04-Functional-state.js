import React from 'react';

export class CounterContainerWithFunctional extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
    }
    onIncrement () {
        const diff = 1;
        this.setState (prevstate => {return {counter: prevstate.counter + diff}});
    }
    onDecrement () {
        this.setState (prevstate => ({counter: prevstate.counter - 1}));
    }
    render () {
        return (
            <>
                <h1>With Stateless function and functional state</h1>
                <CounterPresenter
                    counter = {this.state.counter}
                    onIncrement = {this.onIncrement}
                    onDecrement = {this.onDecrement}
                />
            </>
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