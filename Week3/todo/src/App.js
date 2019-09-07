import React from 'react';
import TodoCreator from "./components/TodoCreator"
import TodoRetrievor from "./components/TodoRetrievor"
import "./style/App.css"

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="todo-creator-div">
          <TodoCreator />
          
        </div>
        <div className="todo-retrievor-div">
          <TodoRetrievor />
        </div>
      </div>
    );
  }
}


export default App;
