import './App.css'
import { MainRoutes } from './AppRoutes'
// import { UseMyContext } from './learnings/useContextLearn/UseMyContext'
import { LayoutComponent } from './learnings/useChildrenLearn/LayoutComponent'
import { MainMenu } from './shared/layout/MainMenu'

function App() {
  const getStorageStr = localStorage.getItem('player')
  console.info(getStorageStr)

  if (getStorageStr) {
    const player = JSON.parse(getStorageStr) as {surname: string}
    console.info(player)
  } else {
    localStorage.setItem('player', JSON.stringify({surname: 'legolas'}))
  }


  return (
    <>
      <MainMenu></MainMenu>
      {/* {<UseMyContext></UseMyContext>} */}
      <LayoutComponent>
        <MainRoutes></MainRoutes>
      </LayoutComponent>
      
    </>
  )
}

export default App
