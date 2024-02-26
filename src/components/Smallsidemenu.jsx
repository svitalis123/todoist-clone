import React, {useState} from 'react';
import { PiSidebarSimple } from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoNotificationsOutline } from "react-icons/io5";
import {Button} from '@/components/ui/button';
import { IoIosAddCircle } from "react-icons/io";
import { FaInbox } from "react-icons/fa6";
import Projects from "./Projects";
import {Thetask, Thedispatch} from '@/components/LevelContext';


function Smallsidemenu({settitle}) {
  const [tasker, settasker] = useState(false);
  const [content, setcontent] = useState({title: '', des: '', editeddes: ''})
  const [isOpen, setisOpen] = useState(false);
  let tasks = Thetask();
  let filteredtask = tasks.projects.filter((project) => project.title === 'inbox');
  const dispatch = Thedispatch();
  let taskadder;
  tasker ? 
    taskadder=(
      <div className="rounded-md border-color1 p-3 flex flex-col gap-2 max-w-[400px] bg-inherit border-2">
        <input className="text-color1" type="text" placeholder="Task name" onChange={(e) => setcontent({...content, title: e.target.value})} />
        <input className="text-color1" type="text" placeholder="Description" onChange ={(e) => setcontent({...content, des: e.target.value})} />
        <div className="flex justify-end p-3 gap-3 max-w-[150px] mx-auto">
          <Button onClick={() => settasker(false)} className="bg-grey" >
            Cancel
          </Button>
          <SheetClose>
            <Button className="bg-tomato" onClick={() => {dispatch({type: "ADD_TASK", payload:{id: filteredtask[0]?.todos.length ,project: "inbox", title: content.title, des: content.des}}); settasker(false); settitle("inbox") }}>
              Add Task
            </Button>
          </SheetClose>
        </div>  
      </div>
    ) : taskadder = (
      <div onClick={() => settasker(true)} className="flex">
        <Button  className="pl-[0px] md:pl-[1rem]">
          <IoIosAddCircle  className="text-[2rem]" />
          <span className="text-[18px] font-semibold pl-2">
            Add task
          </span>
        </Button>
      </div>
    )
  return (
    <div>
      <Sheet >
        <SheetTrigger><PiSidebarSimple /></SheetTrigger>
        <SheetContent className="w-[200px] sm:w-[540px] bg-primary_bg text-color1  dark:bg-color1 dark:text-primary_bg" side="left">
          <SheetHeader>
            <div className="flex gap-2 justify-end w-[90%] pt-4">
              <IoNotificationsOutline />
              <PiSidebarSimple />
            </div>
            <div>
              {taskadder}
            </div>
            <ul className="py-4">
              <SheetClose>
                <li className="flex gap-2 place-items-center px-4 text-[18px] cursor-pointer" onClick={() => settitle("inbox")}>
                  <FaInbox className="text-[24px] h-[24px] w-[24px]"  />
                  <span>
                      Inbox
                  </span>
                </li>
              </SheetClose>              
            </ul>
            <div>
              <Projects settitle={settitle} client:load />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default Smallsidemenu