import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Child({onAction, onChange}){
  return (
    <div>
     <button onClick={onAction}>Click Me</button>
     <button onClick={onChange}>Reset</button>
    </div>
  )

}

class CountingParent extends Component{
  state ={
    actionCount:0
  };
  handleAction = action=>{
    console.log("Child did", action);
    this.setState({
    actionCount: this.state.actionCount +1
    });
  }
  handleReset =action=>{
    this.setState({
      actionCount:0
    });

  }
  reset(){
    this.state.actionCount=0
  }
  render(){
    return(
      <div>
        <Child onAction={this.handleAction} onChange={this.handleReset}/>
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }

}
const Page = ()=>(
  <div>
  <CountingParent/>
  <CountingParent/>
  <CountingParent/>
  </div>
);

ReactDOM.render(<Page />, document.getElementById('root'));
