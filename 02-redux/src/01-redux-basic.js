import {createStore} from 'redux';

const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';

function reducer (state, action){
    switch (action.type) {
        case TODO_ADD : {
            return applyAddTodo(state, action);
        }
        case TODO_TOGGLE : {
            return applyToggleTodo(state, action);
        }
        default : return state;
    }

}
function applyAddTodo(state, action){
    return state.concat(Object.assign({}, action.todo, {completed: false}));
}
function applyToggleTodo(state, action){
    return state.map(todo => todo.id === action.todo.id 
            ? Object.assign({}, todo, {completed: !todo.complated}) 
            : todo);
}

function doAddTodo (id, name){
    return {
        type: TODO_ADD, 
        todo: {id: id, name: name}
    }
}

function doToggleTodo(id){
    return {type: TODO_TOGGLE,
            todo: { id: id }}
}
export function proba() {
    const store = createStore(reducer, []);
    const unsubscribe = store.subscribe(() => console.log(store.getState()));
    store.dispatch(doAddTodo('0', 'learn redux'));
    store.dispatch(doAddTodo('1', 'learn mobx'));

    store.dispatch(doToggleTodo('0'));

    

    unsubscribe();

}

