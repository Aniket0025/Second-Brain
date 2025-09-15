import { Button } from "./Button";
import { CrossIcon } from "./CrossIcon";
import { Input } from "./Input";



interface CreateContentProps {
    open?:boolean ;
    onClose?: ()=> void
}


export function  CreateContentModel({open, onClose}: CreateContentProps) {


        
    return <div >
            {open && <div className="w-screen h-screen bg-red-200 fixed top-0 left-0 opacity-60 flex justify-center">
                
                <div className="flex flex-col justify-center">
                <span className="bg-white opacity-100 p-4 rounded">

                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">

                            <CrossIcon/>

                            </div>
                    </div>
                    <div>

                        <Input placeholder={"titile"}/>
                        <Input placeholder={"link"}/>
                    </div >
                    <div className="flex justify-center">
                    <Button variant="primary" text="Submit"/>
                    </div>
                </span>

                </div>

                </div>}
    </div>

}


