import React from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdModeEditOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

const TodoListItem = ({ todo }) => {
  const { id, content, checked } = todo;
  return (
    <tr>
      <th>{id}</th>
      <td>{content}</td>
      <td>
        <div>{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}</div>
      </td>
      <td className="edit">
        <div>
          <MdModeEditOutline />
        </div>
      </td>
      <td className="remove">
        <div>
          <MdRemoveCircleOutline />
        </div>
      </td>
    </tr>
  );
};

export default TodoListItem;
