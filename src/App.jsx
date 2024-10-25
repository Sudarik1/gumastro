
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import PagesLayout from './layouts/PagesLayout'
import Main from "./pages/Main"
import BirthdayMap from './pages/BirthdayMap'
import Prediction from './pages/Prediction'
import Relationship from './pages/Relationship'
import Karma from './pages/Karma'
import Medical from './pages/Medical'
import Election from './pages/Election'
import Relocate from './pages/Relocate'
import Harary from './pages/Harary'
import Profession from './pages/Profession'
import Rectification from './pages/Rectification'
import Poetry from './pages/Poetry'
import Notes from './pages/Notes'
import Astroleger from './pages/Astrologer'
import GuestRoom from './pages/GuestRoom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <PagesLayout /> } >
      <Route path='/' element={ <Main /> } />
      <Route path='/birthdayMap' element={ <BirthdayMap /> } />
      <Route path='/predictionAstrology' element={ <Prediction /> } />
      <Route path='/relationshipAstrology' element={ <Relationship /> } />
      <Route path='/karma' element={ <Karma /> } />
      <Route path='/medical' element={ <Medical /> } />
      <Route path='/election' element={ <Election /> } />
      <Route path='/relocate' element={ <Relocate /> } />
      <Route path='/harary' element={ <Harary /> } />
      <Route path='/profession' element={ <Profession /> } />
      <Route path='/rectification' element={ <Rectification /> } />
      <Route path='/poetry' element={ <Poetry /> } />
      <Route path='/notes' element={ <Notes /> } />
      <Route path='/astroleger' element={ <Astroleger /> } />
      <Route path='/guestRoom' element={ <GuestRoom /> } />
    </Route> 
  )
)

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App