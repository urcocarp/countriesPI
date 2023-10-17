import {createStore, applyMiddleware,compose} from 'redux';
import rootReducer from './Reducer'
import  ThunkMiddleware from 'redux-thunk';

const composeEnhacer= window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose

const store = createStore(rootReducer,
    composeEnhacer(applyMiddleware(ThunkMiddleware))
    )


export default store;