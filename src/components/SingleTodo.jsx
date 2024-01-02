import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { removeTodo } from '../shop/todoSlice';
function SingleTodo({text , id}) {
    const [updateForm , setUpdateForm] = useState("hidden");
    const [normalTodo , setNormalTodo] = useState("")
    const [updateText , setUpdateText] = useState(text);
    const dispatch = useDispatch();
    const removeTodos= () => {
        dispatch(removeTodo(id))
    }
    const updateTodo = () => {
      setNormalTodo("hidden");
      setUpdateForm("");

    }
    const updateHandler = (e) => {
      setNormalTodo("");
      setUpdateForm("hidden");
      e.preventDefault()
    }
  return (
    <>
    <div className={`border-2 w-full ${normalTodo} my-2 mb-1 h-12 rounded-lg flex `}>
        <input type="text" readOnly
        value={updateText === "" ? text : updateText}
        className='font-mono w-9/12 outline-none bg-blue-50 rounded rounded-r-none text-lg px-3  border-2 border-r-none h-full' />
        <button onClick={updateTodo}
        className='w-2/12 outline-none hover:bg-green-700 bg-green-500 h-full  text-xl  mb-3 text-slate-50 font-mono
          '>
            Update Task
        </button>
        <button 
        onClick={removeTodos}
        className='w-1/12 outline-none hover:bg-red-600 hover:text-white bg-red-500 h-full border-l-none text-4xl  rounded-md mb-3 text-slate-50 font-mono
        rounded-l-none '>X</button>
    </div>
    <div className={`${updateForm} delay-1000 animate-pulse my-2`}>
    <form 
    onSubmit={updateHandler}
    className='lg:border-2 lg:flex lg:rounded-md lg:border-slate-200 lg:h-12'>
        <input type="text"
        className='lg:w-10/12 lg:h-full lg:px-3 lg:text-lg lg:outline-none lg:border-r-none lg:rounded-r-none lg:bg-blue-50 lg:rounded lg:text-black font-mono'
        value = {updateText}
        onChange = {(e)=>{setUpdateText(e.target.value)}}
        
        placeholder='Enter your Task here'
         />
         <button type='submit'
         className='lg:bg-blue-600 lg:w-2/12 lg:text-white lg:font-bold lg:text-2xl lg:border-l-none lg:rounded-l-none lg:hover:bg-blue-700
          lg:border-blue-950 lg:rounded  font-mono '
         >Save</button>
    </form>
    </div>
    </>
  )
}

export default SingleTodo