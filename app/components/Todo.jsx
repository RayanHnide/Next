"use client"

import { useEffect,useState } from "react"

export default  function Todo () {
    const[ todo,setTodo] = useState({})
    useEffect(()=>{
       
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTodo(json))
      
  
    },[])

    return(
        <>
        
        <button onClick={()=>{
          console.log(todo.title);
        }}>
          test
        </button>

                <h1 style={{background:'red'}}>
               
                {todo.title}
                </h1>



         
        </>
    )
}