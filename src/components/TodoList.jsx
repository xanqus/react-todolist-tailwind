import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>할 일</th>
            <th>완료 상태</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <TodoListItem key={index} todo={todo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
