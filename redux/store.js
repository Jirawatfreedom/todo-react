import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import {logger, createLogger} from 'redux-logger';
let finalCreateStore = createLogger(
    applyMiddleware(logger)
)(createStore)
export default function configureStore(initialState = { todos: [] }){
    return createStore(reducer, initialState)
}