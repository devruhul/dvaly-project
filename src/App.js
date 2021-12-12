import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import ViewProducts from './components/Dashboard/ViewProducts/ViewProducts'
import ManageProducts from './components/Dashboard/ManageProducts/ManageProducts'
import Shop from './components/Shop/Shop'
import Product from './components/Shop/Product'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='view-products' element={<ViewProducts />} />
          <Route path='manage-products' element={<ManageProducts />} />
        </Route>
        <Route path='shop' element={<Shop />} />
        <Route path='product/:id' element={<Product />} />
      </Routes>
    </>
  )
}

export default App
