import React from 'react';
import { PiSidebarSimple } from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Smallsidemenu() {
  return (
    <div>
      <Sheet >
        <SheetTrigger><PiSidebarSimple /></SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] bg-primary_bg text-color1  dark:bg-color1 dark:text-primary_bg" side="left">
          <SheetHeader>
            <SheetTitle className="">Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default Smallsidemenu