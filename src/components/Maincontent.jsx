import React, {useState} from 'react'
import {Thetask, Thedispatch} from '@/components/LevelContext';
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";

function maincontent({title}) {
  const [tasker, settasker] = useState(false);
  const [content, setcontent] = useState({title: '', des: '', editeddes: ''})
  let tasks = Thetask();
  const dispatch = Thedispatch();
  let filteredtask = tasks.projects.filter((project) => project.title === title)
  let taskadder;
  tasker ? 
    taskadder=(
      <div className="rounded-md border-color1 p-3 flex flex-col gap-2 max-w-[400px] bg-inherit border-2">
        <input className="text-color1" type="text" placeholder="Task name" onChange={(e) => setcontent({...content, title: e.target.value})} />
        <input className="text-color1" type="text" placeholder="Description" onChange ={(e) => setcontent({...content, des: e.target.value})} />
        <div className="flex justify-end p-3 gap-3">
          <Button onClick={() => settasker(false)} className="bg-grey" >
            Cancel
          </Button>
          <Button className="bg-tomato" onClick={() => {dispatch({type: "ADD_TASK", payload:{id: tasks.projects.id ,project: title, title: content.title, des: content.des}}); settasker(false) }}>
            Add Task
          </Button>
        </div>  
      </div>
    ) : taskadder = (
      <Button onClick={() => settasker(true)} className="flex gap-2 align-middle">
        <FaPlus className="w-4 h-4" />
        Add task
      </Button>
    )
  

  return (
    <main className="bg-inherit text-color1  dark:bg-color1 dark:text-primary_bg max-w-[800px] mx-auto w-[90%] p-4">
      
      {
        filteredtask && filteredtask.length !== 0 ?
        filteredtask.map((project) => (
          <article key={project.title}>
            <h2 className="capitalize">{project.title} </h2>
            {
              project.todos.map((todo) => (
                <Task key={todo.id} title={title} todo={todo} />
              ))
            }
            {taskadder}

          </article>
        )) : <h2 className="text-[#fff]">Click on inbox or the dropdown of projects and click on a project</h2>
      }
    </main>
  )
}

export default maincontent


function Task({todo, title}) {
  const [edittask, setedittask] = useState(false);
  const dispatch = Thedispatch();
  let taskwork;
  edittask ? taskwork = (
    <div className="py-2">
      {
          <div >
            <input type="text" className="text-color1" value={todo.des} onChange={(e) => dispatch({type: "EDIT_TASK", payload:{project:title, todo:{...todo, des:e.target.value} }}) } />
            <Button onClick={() => {setedittask(false)}} >
              save
            </Button>
          </div>
      }
    </div>
  
) : taskwork = (
    <div className="py-1">
        <div key={todo.id} className="flex gap-2 place-items-center">
          <input type="checkbox" checked={todo.done} onChange={(e) => dispatch({type: "EDIT_check", payload:{project:title, todo:{...todo, done:e.target.checked}}})} />
          {todo.des}
          <Button onClick={() => setedittask(true)}>
            <LuPencilLine />
          </Button>
          <Button className="pr-0 mr-0" onClick={() => dispatch({type: "DELETE_TASK", payload:{project:title, id:todo.id}})}>
            <MdDelete />
          </Button>
        </div>
     </div>
)

return (
  <div>
    {taskwork}
  </div>
)
}