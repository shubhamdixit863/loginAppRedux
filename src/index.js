import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import store from "./store";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

ReactDOM.render(
<Provider store={store}>

<App />
</Provider>,
document.getElementById('root')
);
