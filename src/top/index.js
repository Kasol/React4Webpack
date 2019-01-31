import React from 'react';
import './index.scss';
import Button from 'antd/lib/button';
import Clock from './clock';
class Top extends React.Component {
    constructor(){
        super();
        this.state = {
            type: 'top',
            content: 'kasol',
            age:27,
            setContent:function(){
                this.setState({
                    content:'xxq'
                });
            }
        };
    }
    render() {
        return (
            <div className="top">
                <Clock></Clock>
                <Button onClick={this.state.setContent} type="primary">{ this.state.content }</Button>
            </div>
        );
    }
}
export default Top;
