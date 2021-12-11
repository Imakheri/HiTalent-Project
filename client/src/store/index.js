import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from '../reducer/auth';
import rootReducer from '../reducer';
import shoppingReducer from '../reducer/shoppingReducer'
// const composeEnhancers =
//     ( typeof window !== 'undefined' && window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ ) || compose;

const reducers = combineReducers ({
    auth: authReducer,
    index : rootReducer,
    cart: shoppingReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
