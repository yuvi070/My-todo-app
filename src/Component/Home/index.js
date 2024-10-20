import { Component } from "react";
import Header from "../Header";
import { v4 as uuidv4 } from "uuid";
import "./index.css";

class Home extends Component {
  state = {
    todoList: [],
  };

  componentDidMount() {
    const existData = localStorage.getItem("myData");
    this.setState({ todoList: existData });
  }

  render() {
    const { todoList } = this.state;
    const myArray = ["Workout", "Study"];
    const stringifiedArray = JSON.stringify(myArray);
    localStorage.setItem("myData", stringifiedArray);
    return (
      <div className="home-main">
        <div className="body">
          <Header />
          <div>
            <form className="add-task-container">
              <input
                type="text"
                className="input-element"
                placeholder="Add Task"
              />
              <button type="submit" className="add-task-button">
                Add
              </button>
            </form>
          </div>
          <h1>Tasks:</h1>
          <ul className="todo-list-container">
            <li>
              <div className="todo-item">
                <p>Workout</p>
                <button type="button">
                  <input type="checkbox" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;

// required object keys are id(uuid),name,isCompleted,timeOfCreation,
