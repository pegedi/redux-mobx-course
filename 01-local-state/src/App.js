import React, {Component} from 'react';
import {SearchWithRef, Search} from './02-Form-State';
import {SearchableListLiftUp, SearchableListLiftDown} from './03-Lifting-The-State.js';
import {CounterContainerWithFunctional} from './04-Functional-state';
import {AppWithHOC} from './05-High-Order-Components';

export class App extends Component {
   
    render () {
        const someList = [ {id:1, name:"something"},
                    {id:2, name:"somebody"},
                    {id:3, name:"somewhere"},
                    {id:4, name:"sometimes"},
                    {id:5, name:"somewhat"},
                    {id:6, name:"somersby"}];
        return (
            <>
                <Counter />
                <hr/>
                <CounterContainer />
                <hr/>
                <SearchWithRef
                    onSearch = {query => alert(query)}
                />
                <hr/>
                <Search
                    onSearch = {query => alert(query)}
                />
                <hr/>
                <SearchableListLiftUp list={someList} />
                <hr/>
                <SearchableListLiftDown list={someList} />
                <hr/>
                <CounterContainerWithFunctional />
                <hr/>
                <AppWithHOC list = {someList} />

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
                <h1>With Local State</h1>
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
            <>
                <h1>With Stateless function</h1>
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
export default Counter;
