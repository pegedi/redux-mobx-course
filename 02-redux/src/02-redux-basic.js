import {createStore} from 'redux';

const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const FILTER_SET = 'FILTER_SET';
const store = createStore(rootReducer);

function todoReducer (state=[], action){
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
//nested state Object!!!
function applyAddTodo(state, action){
    const todo = Object.assign({}, action.todo, {completed: false});
    const todos = state.todos.concat(todo);
    return Object.assign({}, state, {todos });
}
function applyToggleTodo(state, action) {
    const todos = state.todos.map(todo => todo.id === action.todo.id ?
                                            Object.assign({}, todo, {completed: !todo.completed}) :
                                            todo);
    return Object.assign({}, state, {todos});
}

function filterReducer(state='SHAW ALL', action) {
    switch (action.type) {
        case FILTER_SET: {
            applySetFilter(state, action);
        }
        default: {
            return state;
        }
    }
}

export function reduxBasic02(){

    const store = createStore(reducer, []);
}