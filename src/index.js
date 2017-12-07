import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import VideoPage from './components/VideoPage';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, Switch} from 'react-router-dom';
import store, { browserHistory } from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/movie/:id" component={VideoPage}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();