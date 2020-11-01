import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            {todo.todoText}

            <button onClick={() => props.deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => props.editTodo(todo)}>Edit</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array,
};
