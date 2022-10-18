import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdModeEditOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import axios from "axios";
import { BACKEND_URL } from "../config";

const TodoListItem = ({
  todo,
  setTodos,
  index,
  setActive,
  setSelectedTodo,
  setContent,
}) => {
  const { id, content, checked } = todo;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{content}</td>
      <td>
        <div
          onClick={async () => {
            // setTodos((todos) =>
            //   todos.map((todo, index) =>
            //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
            //   )
            // );
            const data = await axios({
              url: `${BACKEND_URL}/todos/${id}`,
              method: "PATCH",
            });
            setTodos(data.data);
          }}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
      </td>
      <td className="edit">
        <label
          htmlFor="my-modal-5"
          className="modal-button cursor-pointer"
          onClick={() => {
            setSelectedTodo(todo);
            setContent(content);
            setActive(true);
          }}
        >
          <MdModeEditOutline />
        </label>
      </td>
      <td className="remove">
        <div
          onClick={async () => {
            // setTodos((todos) => todos.filter((todo) => todo.id !== id));
            const data = await axios({
              url: `${BACKEND_URL}/todos/${id}`,
              method: "DELETE",
            });
            setTodos(data.data);
          }}
        >
          <MdRemoveCircleOutline />
        </div>
      </td>
    </tr>
  );
};

export default TodoListItem;
