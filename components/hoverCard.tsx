import React from 'react'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github } from 'lucide-react';
import Link from 'next/link';


export const Hover = () => {
  return (
    <div className="w-[300px]">
      <HoverCard>
        <HoverCardTrigger><span className=' font-thin'>Created By @mc_dev1</span></HoverCardTrigger>
        <HoverCardContent className='w-80'>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/matuc-dev.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">MATU</h4>
            <p className=" text-sm font-thin">
            I started web development in December.
            </p>
            <div className="flex items-center pt-2">
                <Link href={"https://github.com/matuc-dev"}>
                <span className="flex items-center gap-1 justify-center text-xs text-muted-foreground">
                  <Github size={13}/>GitHub
                </span>
                </Link>
            </div>
          </div>
        </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
