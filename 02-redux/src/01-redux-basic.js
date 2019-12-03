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

export function proba() {
    const store = createStore(reducer, []);
    const unsubscribe = store.subscribe(() => console.log(store.getState()));
    store.dispatch({
        type: TODO_ADD, 
        todo: {id: '0', name: 'learn redux'}
    });
    store.dispatch({
        type: TODO_TOGGLE,
        todo: {id: '0'}
    });

    

    unsubscribe();

}

