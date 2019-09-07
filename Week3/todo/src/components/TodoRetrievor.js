import React, { Component } from "react";
import "./../style/TodoRetrievor.css"

class TodoRetrievor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      todoList: [{
        name: "고양이",
        todo: "야옹하기",
        done: false
      }, {
        name: "강아지",
        todo: "멍멍하기",
        done: true
      }]
    }

    // 이것도 아직 이해가 어려우시겠지만 꼭 하셔아합니다 :)
    this.btnClicked = this.btnClicked.bind(this)
    this.removeBtnClicked = this.removeBtnClicked.bind(this)
    this.inputChanged = this.inputChanged.bind(this)
    
  }

  btnClicked() {
    // 나중에 여기를 서버와 연결해서, 서버한테 OOO TODO 정보 줘~
    // 라고 말하고
    // 서버가 response로 보낸 응답을
    // 다시 state에 넣어서 아래서 렌더링을 자동으로 될 수 있게 한다

    console.log(this.state)
  }

  removeBtnClicked(event) {
    alert("삭제 하시겠습니까?")
  }

  inputChanged(event) {
    this.setState({
      name: event.target.value
    })
  }


  render() {
    // 나중일이지만 저희가 원하는건 <등록> 버튼을 누르는 순간
    // 우리가 input에 입력한 데이터가 서버로 전송되길 원한다
    return (
      <React.Fragment>
        <input className="retrievor-input"
          value={this.state.name}
          onChange={this.inputChanged}
        />
        <button
          className="retrievor-button"
          onClick={this.btnClicked}
        >검색</button>

        <div>
          {this.state.todoList.map((todo, i) => {
            let check = ""
            if (todo.done) {
              check = "✓"
            }

            return (
              <div className="todo-wrapper" key={i}>
                <div className="todo-list">
                  {`${todo.name} 님이 해야 할 일은 ${todo.todo} 입니다! ${check}`}
                </div>
                <button className="todo-remove-button"
                  onClick={this.removeBtnClicked}>삭제</button>
              </div>
            );

          })}
        </div>
      </React.Fragment>
    );
  }

}

export default TodoRetrievor;