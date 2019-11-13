import React from 'react';

function SearchLiftUp({ query, onChange, children }) {
    return (
        <div>
            {children}
            <input
                type="text"
                value={query}
                onChange={onChange}
            />
        </div>
    );
}

export class SearchableListLiftDown extends React.Component {
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
                <h1>Lift the state down</h1>
                <SearchLiftUp
                    query = {query}
                    onChange = { this.onChange }
                >
                    Search List:
                </SearchLiftUp>
                <ListLiftDown list = {(list || []).filter(byQuery(query))}/>
            </div>
        );
    }
}
function List({list, onArchive}) {
    return (
        <ul>
            {list.map(item => <li id={item.id}>
                    <span>
                        {item.name}
                    </span>
                    <span>
                        <button
                            type="button"
                            onClick={onArchive(item.id)}
                        >
                            Archive
                        </button>
                    </span>
                </li>)}
        </ul>
    );
}

class ListLiftDown extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            archivedItems: [],
        };
        this.onArchive = this.onArchive.bind(this);
    }
    onArchive(id){
        const {archivedItems} = this.state;
        this.setState({archivedItems: [...archivedItems, id]});
    }
    render () {
        const {list} = this.props;
        const {archivedItems} = this.state;
        const filteredList = list.filter(byArchived(archivedItems));
        return (
            <ul>
                {filteredList.map(item =>
                    <li key={item.id}>
                        <span>
                            {item.name}
                        </span>
                        <span>
                            <button
                                type = "button"
                                onClick={() => { return this.onArchive(item.id);}}
                            >
                                Archive Item
                            </button>
                        </span>
                    </li>
                )}
            </ul>
        );
    }
}
function byQuery(query) {
    return function (item) {
        return !query || item.name.toLowerCase().includes(query.toLowerCase());
    }
}

function byArchived(archivedItems) {
    return function(item) {
        return !archivedItems.includes(item.id);
    }
}

