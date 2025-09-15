import './App.css';
import { Button } from "./components/ui/Button";
import { PlusIcon } from './components/ui/icons/PlusIcon';
import { ShareIcon } from './components/ui/icons/ShereIcon';

function App() {
  return (
    <>
    
        <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"lg"}/>} 
        size={"lg"} title={"Share"}
        endIcon={<ShareIcon size={"lg"}/>} 
        ></Button>


        <Button 
        variant={"secondary"}
        startIcon={<PlusIcon size={"lg"}/>} 
        size={"lg"} title={"Share"}
        endIcon={<ShareIcon size={"lg"}/>} 
        ></Button>

        <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"sm"}/>} 
        size={"sm"} title={"Share"}
        endIcon={<ShareIcon size={"sm"}/>} 
        ></Button>

  
  
  



    </>
  )
}

export default App
