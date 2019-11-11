import React from 'react';

class Search extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            query: '',
        }

        this.onChange = this.onChange.bind(this);
    }
    onChange(event) {
        const value = event.target;
        this.setState({query: value});
    }
    render () {
        return (
         <div></div>
        )
    }

}
