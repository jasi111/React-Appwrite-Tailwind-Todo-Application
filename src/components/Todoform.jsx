import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {databases} from "../appwrite.config/appwrite.config";

function TodoForm() {
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const promise = databases.createDocument("63d227f75ef9f71be4d1", uuidv4(), {
            todo,
        })
      // "63d227f75ef9f71be4d1" is the collection id copied from appwrite database
    // passing todo details which is stored inside state

    // then promise showing the results
    console.log(promise);

    promise.then(
      // success
            function(response){
                console.log(response);
                
            },
              // failure
            function(error){
                console.log(error);
            }
        );
        
        e.target.reset();
      
    }


  return (
    <div className="max-w-7xl mx-auto mt-10">
      <form
        action=""
    onSubmit={handleSubmit}
        className="flex justify-center mb-10"
      >
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Todo"
          className="border p-2 w-2/3 rounded-md"
          onChange={(e) => {
            setTodo(e.target.value)
          }}
        />
        <button
          className="bg-purple-500 p-2 text-white ml-2 rounded-md"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  )
}

export default TodoForm