import axios from "axios";
import React, { useState } from "react";
import { BACKEND_URL } from "../config";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  setTodos,
  active,
  setActive,
  selectedTodo,
  setSelectedTodo,
}) => {
  const [content, setContent] = useState("");

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
            <TodoListItem
              key={index}
              todo={todo}
              setTodos={setTodos}
              index={index}
              setActive={setActive}
              setContent={setContent}
              setSelectedTodo={setSelectedTodo}
            />
          ))}
        </tbody>
      </table>

      <input
        type="checkbox"
        id="my-modal-5"
        className="modal-toggle"
        checked={active}
        onChange={() => {}}
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div
            className="flex justify-center items-center w-7 p-1 ml-auto cursor-pointer"
            onClick={() => {
              setActive(false);
            }}
          >
            ✕
          </div>
          <div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                // js 방식으로 수정
                /*setTodos((todos) =>
                  todos.map((todo, index) =>
                    selectedTodo.id === todo.id ? { ...todo, content } : todo
                  )
                );*/
                const data = await axios({
                  url: `${BACKEND_URL}/todos/edit/${selectedTodo.id}`,
                  method: "PATCH",
                  data: {
                    content,
                  },
                });

                setTodos(data.data);
                setContent("");
                setActive(false);
              }}
            >
              <div>수정할 내용을 입력해주세요</div>
              <input
                type="text"
                className="border rounded-md border-gray-500 w-60"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
