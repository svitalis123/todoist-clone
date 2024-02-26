import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { FaPlus } from "react-icons/fa6";
import { Thetask, Thedispatch } from '@/components/LevelContext';
import { CiHashtag } from "react-icons/ci";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  SheetClose,
} from "@/components/ui/sheet";

function Projects({settitle}) {
  const [title, setTitle] = useState('');
  let tasks = Thetask();
  const dispatch = Thedispatch();
  let filteredtask = {
    projects: tasks.projects.filter(task => task.title !== 'inbox')
  };
  return (
    <div>
      <Collapsible
      >
        <CollapsibleTrigger className='pl-0 md:pl-4 flex justify-between w-full'>
            <span>Projects</span>
            <div className="flex gap-3">
              <Dialog >
                <DialogTrigger> <FaPlus className="h-4 w-4"/></DialogTrigger>
                <DialogContent className="bg-inherit text-inherit">
                  <DialogHeader>
                    <DialogTitle>Add Title</DialogTitle>
                    <input className="text-color1" type="text" onChange={(e) => setTitle(e.target.value)} />
                    <DialogClose asChild>
                      <Button onClick={() => {dispatch({type:"ADD_PROJECT", payload:{title: title}})}}>Create Project</Button>
                    </DialogClose>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </div>            
          </CollapsibleTrigger>
        <CollapsibleContent>
          <ul>
            {
              filteredtask.projects.map((project) => (
                <>
                <li key={project.title} className="flex gap-2 place-items-center px-4 text-[18px] cursor-pointer" onClick={() => settitle(project.title)}>
                  <CiHashtag className="text-[24px]" />
                  <span className="capitalize">
                    {project.title}
                  </span>
                </li>
                </>
              )) 
            }
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default Projects