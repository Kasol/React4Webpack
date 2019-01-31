import React from 'react';
import './index.scss'
class Sidebar extends React.Component {
    constructor(){
        super();
        this.state = {
            menuNums : 5,
            menuColor: 'red',
        };
    }
    handClick(i){
        this.setState({
            liNames:Array(10).fill('I have been clicked')
        });
    }
    render() {
        return (
            <div className="sidebar">
                <ul>
                    <li onClick={ () => this.handClick(0) }>{ this.state.menuColor }</li>
                </ul>
            </div>
        );
    }
}
export default Sidebar;
