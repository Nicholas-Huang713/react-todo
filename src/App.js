import React, {Component} from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      isClicked: false,
      toDo: ""
    }
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name] : value });
  }

  addToList = (event) => {
    const {toDo, todoList} = this.state;
    event.preventDefault();
    const list = todoList;
    todoList.push(toDo);
    this.setState({
      todoList: list
    })
  }

  render() {
    const {isClicked, todoList} = this.state;
    return (
    <div className="App">
      
      <h1>ToDo App</h1> 
      {
        isClicked ? 
        <button onClick={() => this.setState({isClicked: !isClicked})}>Close Form</button>
        :
        <button onClick={() => this.setState({isClicked: !isClicked})}>New Todo</button>
      }
      
      {
        isClicked && 
        <NewTodo addToList={this.addToList} handleChange={this.handleChange}/>
      }
      <hr/>
      <ul>
        {todoList.map((item) => {
          return (
            <li>{item} - <input type="checkbox" /> </li>
          )
          
        })
        }
      </ul>
    </div>
    );
  }
  
}

export default App;
