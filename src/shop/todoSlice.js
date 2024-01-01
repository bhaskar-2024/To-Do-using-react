import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    
  ]
  
};
console.log(initialState.todos)
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state , action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos = [...state.todos, todo];
      console.log(state.todos)
    },
    removeTodo : (state , action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload )
    }
  },
});

export const {addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer