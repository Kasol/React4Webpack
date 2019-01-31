import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.scss';
import DatePicker from 'antd/lib/date-picker';
import Button from 'antd/lib/button';
import Sidebar from './sidebar';
import Top from './top';
import Main from './main';
const mountNode  = document.getElementById('root');
ReactDOM.render(
    <div className="container"> 
            <Top content="Hello World"></Top>
        <div className="wrap">
            <Sidebar ></Sidebar>
            <Main></Main>
        </div>
    </div>,
    mountNode
);