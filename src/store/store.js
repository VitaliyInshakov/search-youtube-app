import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import ReduxPromise from 'redux-promise';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'react-router-redux';

export const browserHistory = createBrowserHistory();
const middleware = routerMiddleware(browserHistory);

const store = createStore(reducer, applyMiddleware(ReduxPromise, middleware));

export default store;