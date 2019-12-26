import {createStore, combineReducers} from 'redux';

const TODO_ADD = 'TODO_ADD';
const TODO_TOGGLE = 'TODO_TOGGLE';
const FILTER_SET = 'FILTER_SET';

const rootReducer = combineReducers({
    todoState: todoReducer,
    filterState: filterReducer,
});

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
    return state.concat(todo);
}
function applyToggleTodo(state, action) {
    const todos = state.map(todo => todo.id === action.todo.id ?
            Object.assign({}, todo, {completed: !todo.completed}) :
            todo);
    return todos;
}

function filterReducer(state='SHOW ALL', action) {
    switch (action.type) {
        case TODO_TOGGLE: {
            return 'Helloka - both reducers pick the action.type';
        }
        case FILTER_SET: {
            return applySetFilter(state, action);
        }

        default: {
            return state;
        }
    }
}
/**
 * # Heading Level 1
 * ## Header 2.
 * Function to set _filter_ state
 *
 * or ___filter___ state
 *
 *
 */
function applySetFilter(state, action){
    return action.filter;
}

function doSetFilter(filter){
    return {
        type: FILTER_SET,
        filter,
    }
}
function doAddTodo(id, name){
    return {
        type: TODO_ADD,
        todo: {id, name} ,
    }
}
function doToggleTodo(id){
    return {
        type: TODO_TOGGLE,
        todo: {id},
    }
}
export function reduxBasic02(){

    const store = createStore(rootReducer);
    console.log('initial state:');
    console.log(store.getState());
    const unsubscribe = store.subscribe(() => {
        console.log('Store updated, current state:');
        console.log(store.getState());
    })

    store.dispatch(doAddTodo('0', 'learn redux'));
    store.dispatch(doAddTodo('1', 'learn mobx'));
    store.dispatch(doToggleTodo('0'));
    store.dispatch(doSetFilter('COMPLETED'));

    unsubscribe();

}