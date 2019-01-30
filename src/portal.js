import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
// import { Button, Input } from '@alifd/next';
// import "antd/dist/antd.css";
// import '@alifd/next/dist/next.css';

import DatePicker from 'antd/lib/date-picker';
// import Version from 'antd/lib/version';
import Button from 'antd/lib/button';
const mountNode = document.getElementById('root');
ReactDOM.render(
        <div className="App">
          <DatePicker />
          <Button type="primary">123</Button>
          <p>Please fork this codesandbox to reproduce your issue.</p>
          <p>请 fork 这个链接来重现你碰到的问题。</p>
        </div>  
    , mountNode);