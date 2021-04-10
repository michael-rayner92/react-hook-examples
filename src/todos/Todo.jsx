import PropTypes from "prop-types";
import { ACTIONS } from "./Todos";

const Todo = ({ todo, dispatch }) => {
  return (
    <li style={{ backgroundColor: todo.complete ? "#00a98f" : "#27a1c5" }}>
      <span>{todo.name}</span>
      <div className="btns">
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: todo.id })
          }
        >
          Toggle
        </button>
        <button
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: todo.id })
          }
        >
          Delete
        </button>
      </div>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Todo;
