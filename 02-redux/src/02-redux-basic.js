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