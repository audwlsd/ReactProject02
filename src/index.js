import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './components/Counter';
import reducers from './reducers';
import './index.css';
import * as serviceWorker from './serviceWorker';


const store = createStore(reducers);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();






module.hot.accept();