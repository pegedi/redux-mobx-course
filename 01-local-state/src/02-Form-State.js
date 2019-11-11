import React from 'react';

export class SearchWithRef extends React.Component {
    constructor (props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit (event){
        const value = this.input.value; //or {value} = this.input;
        console.log(value);
        this.props.onSearch(value);
        event.preventDefault();
    }
    render() {
        return (
            <>
                <h1>Form State with Ref</h1>
                <form onSubmit = {this.onSubmit}>
                    <input
                        ref={node => this.input = node}
                        type = "text"
                    />
                    <button type="submit">
                        Search
                    </button>
                </form>
            </>
        );
    }
}

export class Search extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            query : '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(event) {
        const value = event.target.value;
        this.setState({query: value});
    }
    onSubmit (event) {
        const {query} = this.state;
        this.props.onSearch(query);
        event.preventDefault();
    }
    render () {
        return (
            <><h1>Search with Local state</h1>
            <form onSubmit={this.onSubmit}>
                <input
                    onChange = {this.onChange}
                    type = 'text'
                />
                <button
                    type = 'submit'
                >
                    Search
                </button>
            </form>
            </>
        );
    }
}