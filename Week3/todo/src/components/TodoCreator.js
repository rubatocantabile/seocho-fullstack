import React, { Component } from "react";
import "./../style/TodoCreator.css"

class TodoCreator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      todo: ""
    }

    // 요거는 일단은 이해가 어렵지만 꼭 해주세요!
    this.btnClicked = this.btnClicked.bind(this)
    this.nameInputChanged = this.nameInputChanged.bind(this)
    this.todoInputChanged = this.todoInputChanged.bind(this)
  }

  btnClicked() {
    // 나중에 여기서 this.state에 있는 정보를 가져와 서버에 전달하도록 한다!ㅌ
    console.log(this.state)
  }

  nameInputChanged(event) {
    this.setState({
      name: event.target.value
    })
  }

  todoInputChanged(event) {
    this.setState({
      todo: event.target.value
    })
  }

  render() {
    // 나중일이지만 저희가 원하는건 <등록> 버튼을 누르는 순간
    // 우리가 input에 입력한 데이터가 서버로 전송되길 원한다
    return (
      <React.Fragment>
        <input className="creator-input"
          name="name" value={this.state.name}
          onChange={this.nameInputChanged} placeholder="이름을 입력하세요"/>

        <input className="creator-input"
          name="todo" value={this.state.todo}
          onChange={this.todoInputChanged} placeholder="할 일을 입력하세요"/>

        <button className="creator-button"
          onClick={this.btnClicked}>등록</button>
      </React.Fragment>
    );
  }

}

export default TodoCreator;