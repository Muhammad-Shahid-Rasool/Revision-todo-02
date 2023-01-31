import React from 'react'

const Todoinput = ({todo,sttodo,addtodo}) => {
  return (
    <div>Todoinput
        <input type="text" name='todo' value={todo}  placeholder="Enter the Value"
        onChange={(e)=>{sttodo(e.target.value)}}/>

<button className="add-button" onClick={addtodo}>
        Add
      </button>

    </div>
  )
}

export default Todoinput