import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.state = { todoItems:  [
      {title: 'Đi đổ xăng', isComplete: true},
      {title: 'Mua bim bim'},
      {title: 'Bring her back'}
    ]}; 
  }

  onItemClicked(item, index) {
    return () => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      todoItems[index].isComplete = !isComplete;

      this.setState({
        TodoItem: todoItems
      });
    }
  }
  render() {
    if(this.state.todoItems.length > 0){
      return (
        <div className="App">
            {
              this.todoItems.map((item, index)=> 
                  <TodoItem  
                  key = {index} item={item}
                  onClick = {this.onItemClicked(item, index)}
                  />)
            }
        </div>
      );
    } else{
      return (
        <div className="App"> Nothing Here</div>
      );
    }
    
  }

}

export default App;
