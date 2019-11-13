import React from 'react';


function withArchive(Component) {
    class withArchive extends React.Component {
        constructor (props) {
            super(props);
            this.state = {
                archivedItems: [],
            };
            this.onArchive = this.onArchive.bind(this);
        }
        onArchive (id) {
            const {archivedItems} = this.state;
            // console.log("-- onArchive")
            // console.log(id);
            // console.log(archivedItems);
            this.setState({archivedItems: [...archivedItems, id]});
        }
        render () {
            const {list} = this.props;
            const {archivedItems} = this.state;
            const filteredList = list.filter(byArchived(archivedItems));
            console.log(filteredList);
            return (
                <Component
                    list = {filteredList}
                    onArchive = {this.onArchive}
                />
            );
        }
    }
    return withArchive;
}

function List({list, onArchive}) {
    return (
        <ul>
            {list.map(item => <li key={item.id}>
                    <span>
                        {item.name}
                    </span>
                    <span>
                        <button
                            type="button"
                            onClick={()=>onArchive(item.id)}
                        >
                            Archive
                        </button>
                    </span>
                </li>)}
        </ul>
    );
}

const ListWithArchive = withArchive(List);

export function AppWithHOC ({list}) {
    console.log (list);
    return (
        <>
            <h1>High Order Component</h1>
            <ListWithArchive list = {list} />
        </>
    );
}

function byArchived(archivedItems) {
    return function(item) {
        return !archivedItems.includes(item.id);
    }
}
