import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'

import './App.css'
import FragmentComp from './Components/Fragment'
import ListWithoutKeys from './Components/listwokeys'
import RootLayout from './layouts/RootLayout'
import NestedLayout from './layouts/NestedLayout'
import Profile from './Components/Portals'
import Error404 from './Components/404'
import Table from './Components/table'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<RootLayout/>}>
      <Route index element={<FragmentComp />} />
      <Route path="list" element={<ListWithoutKeys />} />
      <Route path="nested" element={<NestedLayout/>}>
        <Route path="profile" element={<Profile/>} />
        <Route path="test" />
      </Route>
      <Route path="table" element={<Table/>}/>

      <Route path="*" element={< Error404 />} />

    </Route>
  
  )
)

function App() {

  return (
    < RouterProvider router={router} />
  )

}

export default App
