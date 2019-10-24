import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import { createStore } from "redux";
import reducer from './reducers';
import middleware from './middleware';
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
