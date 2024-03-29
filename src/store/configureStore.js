import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import projectsReducer from '../reducers/projects';
import thunk from 'redux-thunk';

//store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            projects: projectsReducer,
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}

