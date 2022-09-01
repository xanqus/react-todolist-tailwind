import axios from "axios";
import React, { useState } from "react";

const TodoInput = ({ todos, setTodos, nextId }) => {
  const [content, setContent] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = await axios({
      url: "http://localhost:8083/todos",
      method: "POST",
      data: { content },
    });
    setTodos(data.data);
    nextId.current++;
    setContent("");
  };

  return (
    <div className="form-control w-full">
      <form onSubmit={onSubmit}>
        <label className="label">
          <span className="label-text-alt">할 일을 추가해주세요!</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xl"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default TodoInput;
