import type { ReactElement } from "react";

interface SideBarProps {
    text:string;
    icon:ReactElement
}

export function Sidebaritem({text,icon}:SideBarProps){
    return <div className="flex text-gray-800 py-2 hover:bg-gray-200 rounded max-w-48 pl-4">
        <div className="pr-2 cursor-pointer">
        {icon}
        </div>


        <div className="pr-1-2">
        {text}

        </div>
    </div>
}