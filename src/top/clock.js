import React from 'react';
class Clock extends React.Component {
    constructor(){
        super();
        this.state = {
            date:Date()
        };
    }
    componentDidMount() {
        this.timeHook = setInterval(()=>{
            this.setState({
                date:Date()
            });
        },1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timeHook);
    }
    
    render() {
      return (
        <div className="clock">
            <span> { this.state.date }</span>
        </div>
      );
    }
}

export default Clock;
