import { PiSidebarSimple } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import {Button} from '@/components/ui/button';
import { IoIosAddCircle } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import Projects from "./Projects";
import {Thetask, Thedispatch} from '@/components/LevelContext';

import React, {useState} from 'react'

function sidemenu({settitle}) {
  const [tasker, settasker] = useState(false);
  const [content, setcontent] = useState({title: '', des: '', editeddes: ''})
  let tasks = Thetask();
  const dispatch = Thedispatch();
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
          <Button className="bg-tomato" onClick={() => {dispatch({type: "ADD_TASK", payload:{id: tasks.projects.id ,project: "inbox", title: content.title, des: content.des}}); settasker(false) }}>
            Add Task
          </Button>
        </div>  
      </div>
    ) : taskadder = (
      <div onClick={() => settasker(true)}>
        <Button  >
          <IoIosAddCircle  className="text-[2rem]" />
          <span className="text-[18px] font-semibold pl-2">
            Add task
          </span>
        </Button>
      </div>
    )
  
  return (
    <menu className="bg-color_3 text-color1  dark:bg-color1 dark:text-primary_bg">
      <div className="flex gap-2 justify-end w-[90%] pt-4">
        <IoNotificationsOutline />
        <PiSidebarSimple />
      </div>
      <div>
        {taskadder}
      </div>
      <ul className="py-4">
        <li className="flex gap-2 place-items-center px-4 text-[18px] cursor-pointer" onClick={() => settitle("inbox")}>
          <FaInbox className="text-[24px] h-[24px] w-[24px]"  />
          <span>
              Inbox
          </span>
        </li>
      </ul>
      <div>
        <Projects settitle={settitle} client:load />
      </div>
    </menu>
  )
}

export default sidemenu

