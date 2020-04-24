import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './components/App'
import './style/index.scss';
import {ConnectedRouter} from 'connected-react-router'
import configureStore, {history} from './api/configureStore'
// import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
// registerServiceWorker();
