import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import DatePicker from 'antd/lib/date-picker';
const mountNode  = document.getElementById('root');
ReactDOM.render(
    <div className="container"> 
        <DatePicker content="Hello World"></DatePicker>
    </div>,
    mountNode
);