import { LogoIcon } from "../icons/logoIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YouTubeIcon } from "../icons/YouTubeIcon";
import { Sidebaritem } from "./Sidebaritem";
export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 ">
        
        <div className="flex text-2xl gap-2 pt-4 ">
            <div className="flex justify-center items-center pl-4 text-purple-600">
            <LogoIcon/> 
            </div>
             Brainly</div>
        
        <div className="pt-8 pl-6 ">
            <Sidebaritem text="Twitter" icon= {<TwitterIcon/>} />


            <Sidebaritem text="YouTube" icon= {<YouTubeIcon/>} />

        </div>

    </div>
}