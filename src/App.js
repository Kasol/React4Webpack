import React from 'react';
// import { version, Button } from 'antd';
// import version from 'antd/lib/version';
// import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';



class App extends React.Component {
    render() {
      return (
        <div className="App">
          <DatePicker />
          <p>Please fork this codesandbox to reproduce your issue.</p>
          <p>请 fork 这个链接来重现你碰到的问题。</p>
        </div>
      );
    }
}
export default App;
