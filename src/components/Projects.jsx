import React, { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons"
import { CiCalendarDate } from 'react-icons/ci';

function Projects() {
  const [isOpen, setIsOpen] = React.useState(true)
  return (
    <div>
      <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      >
        <CollapsibleTrigger className='pl-4 flex justify-between w-full'>
            <span>Projects</span>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        <CollapsibleContent>
          <ul>
            <li class="flex gap-2 place-items-center px-4 text-[18px] cursor-pointer">
              <CiCalendarDate className="text-[24px]" />
              <span>
                Today
              </span>
            </li>
            <li class="flex gap-2 place-items-center px-4 text-[18px] cursor-pointer">
              <CiCalendarDate className="text-[24px]" />
              <span>
                Tomorrow
              </span>
            </li>
            <li class="flex gap-2 place-items-center px-4 text-[18px]">
              <CiCalendarDate className="text-[24px] cursor-pointer" />
              <span>
                After
              </span>
            </li>
            <li class="flex gap-2 place-items-center px-4 text-[18px] cursor-pointer">
              <CiCalendarDate className="text-[24px]" />
              <span>
                Later
              </span>
            </li>
          </ul>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default Projects