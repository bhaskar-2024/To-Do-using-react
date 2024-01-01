import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../shop/todoSlice';
function SingleTodo({text , id}) {

    const dispatch = useDispatch();
    const removeTodos= () => {
        dispatch(removeTodo(id))
    }
  return (
    <>
    <div className='border-2 w-full  my-2 mb-1 h-12 rounded-lg flex '>
        <input type="text" readOnly
        value={text}
        className='font-mono w-9/12 outline-none bg-blue-50 rounded rounded-r-none text-lg px-3  border-2 border-r-none h-full' />
        <button className='w-2/12 outline-none bg-green-500 h-full  text-xl  mb-3 text-slate-50 font-mono
          '>
            Update Task
        </button>
        <button 
        onClick={removeTodos}
        className='w-1/12 outline-none bg-red-500 h-full border-l-none text-4xl  rounded-md mb-3 text-slate-50 font-mono
        rounded-l-none '>X</button>
    </div>
    </>
  )
}

export default SingleTodo