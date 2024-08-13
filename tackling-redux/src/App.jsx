import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/homepage'
import RootLayout from './layouts/Root-Layout/rootlayout'
import Cart from './Pages/cart'
import Products from './Pages/products'
import { Provider } from 'react-redux'
import store from './store/store'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="Products" element={<Products />} />
      <Route path="cart" element={< Cart />} />
    </Route>
  )
)


function App() {

  return (
    <Provider store={store}>
      < RouterProvider router={router} />
    </Provider>
  )
}

export default App
