
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'


function App() {
  return (
    <>
      <div className="flex p-2">
        <Button variant='secondary' size="sm" title='Share Brain' startIcon={<ShareIcon/>}/>
        <Button variant='primary' size='sm' title='Add Content' startIcon={<PlusIcon/>}/>
        


      </div>
      <div>
        <Card/>
      </div>
      </>
  )
}

export default App
