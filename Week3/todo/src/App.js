import React from 'react';
import TodoCreator from "./components/TodoCreator"
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
      </div>
    );
  }
}


export default App;
