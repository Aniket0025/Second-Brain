
import { useState } from 'react'
import '../App.css'
import { Button } from '../components/Button'
import { Card } from "../components/Card"
import { CreateContentModel } from "../components/CreateContentModel"
import { Sidebar } from '../components/Sidebar'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'

function Dashboard() {

  const [modelopen, setModelOpen] = useState(false);


  return (
    <div>
        <div><Sidebar/></div>
      <div className='p-4 ml-72 min-h-screen bg-gray-100'>
      <CreateContentModel open={modelopen} onClose={() => {
        setModelOpen(false)
      }}/>

      <div className='flex justify-end gap-4'>
      <Button onClick={()=> {
        setModelOpen(true)
      }} variant='primary' text='add Content' startIcon={<PlusIcon/>}></Button>
      <Button variant='secondary' text='Share Brain' startIcon={<ShareIcon/>}></Button>
      </div>

      <div className='flex gap-4'>

      <Card type="twitter" link='https://x.com/SynapHack/status/1966428935492960418?t=QmtuUAkbOyM5ZIX9VN3Q0w&s=09' title='First tweet'/>


      <Card type='youtube' link='https://youtu.be/1A_GBcMRYJw?si=AEbahNcWB7WuKw5F' title='YT video'/>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
