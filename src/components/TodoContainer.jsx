import React from "react";
import SingleTodo from "./SingleTodo";
import { useSelector } from "react-redux";
import Header from "./Header";
import Form from "./Form";
function TodoConatiner() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="w-2/3 m-auto my-28 border-2 rounded-md px-5 py-5 bg-gray-700">
       <Header/>
    <Form buttonName = "Add To-Do"/>
      <ul>  
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <SingleTodo text={todo.text} id = {todo.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoConatiner;
