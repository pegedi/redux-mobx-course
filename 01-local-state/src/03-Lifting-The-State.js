import React from 'react';

function SearchLiftUp({ query, onChange, children }) {
return (
<div>
{children} <input
type="text"
value={query}
onChange={onChange}
/>
</div>
);
}

function ListLiftUp ({list}) {
    return (
        <ul>
            {list.map(item => <li key = {item.id}>{item.name}</li>)}
        </ul>
    );
}

export class SearchableListLiftUp extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            query: ''
        };
        this.onChange = this.onChange.bind(this);
    }
    onChange (event){
        const value = event.target.value;

        this.setState({query: value});

        console.log(event.target.value + " és " + value);
        console.log(this.state.query);
    }
    render () {
        const {list} = this.props;
        const {query} = this.state;
        return (
            <div>
                <h1>Lift the state up</h1>
                <SearchLiftUp
                    query = {query}
                    onChange = { this.onChange }
                >
                    Search List:
                </SearchLiftUp>
                <ListLiftUp list = {(list || []).filter(byQuery(query))}/>
            </div>
    );
    }

}
function byQuery(query) {
    return function (item) {
        return !query || item.name.toLowerCase().includes(query.toLowerCase());
    }
}

