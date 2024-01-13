import cx from "classnames";
import { Component } from "react";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enteredTodo: "",
      todos: [],
      completedTodos: [],
    };
  }
  setEnteredTodo = (e) => {
    this.setState({ enteredTodo: e.target.value });
  };
  addTodo = () => {
    if (
      this.state.enteredTodo &&
      !this.state.todos.includes(this.state.enteredTodo)
    ) {
      let newItem = { item: this.state.enteredTodo, key: Date.now() };
      this.setState({
        todos: [...this.state.todos, newItem],
        enteredTodo: "",
      });
    }
  };
  toggleStatus = (todo) => {
    if (this.state.completedTodos.includes(todo)) {
      const otherCompletedTodos = this.state.completedTodos.filter(
        (otherTodo) => otherTodo != todo
      );
      this.setState({
        completedTodos: otherCompletedTodos,
      });
    } else {
      this.setState({
        completedTodos: [...this.state.completedTodos, todo],
      });
    }
  };

  render() {
    let text =
      this.state.todos.length -
      this.state.completedTodos.length +
      " remaining out of " +
      this.state.todos.length +
      " tasks";
    return (
      <>
        <div>
          <input
            value={this.state.enteredTodo}
            onChange={(e) => this.setEnteredTodo(e)}
          />
          <button onClick={this.addTodo}>Add</button>
          <div className="task-counter">{text}</div>
          <ul>
            {this.state.todos.map((todo) => {
              return (
                <li
                  key={todo.key}
                  onClick={(e) => this.toggleStatus(todo)}
                  className={
                    this.state.completedTodos.includes(todo) ? "is-done" : ""
                  }
                >
                  {todo.item}
                </li>
              );
            })}
          </ul>
        </div>
        <style>{`
                    .is-done {
                        text-decoration: line-through;
                    }
                `}</style>
      </>
    );
  }
}
