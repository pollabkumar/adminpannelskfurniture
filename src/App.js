import React from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Users from './pages/Users';
import ProductCategory from './pages/ProductCategory'
import Products from './pages/Products'
import Order from './pages/Order'
import CategoryForm from './pages/CategoryForm'
import AddProductform from './pages/AddProductform'
import ChangePassword from './pages/ChangePassword'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main d-flex'>
        <div className='sidebarwrapper'>
          <Sidebar />
        </div>

        <div className='content'>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/productcategory" element={<ProductCategory />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order />} />
            <Route path="/categoryform" element={<CategoryForm  />} />
            <Route path="/productform" element={<AddProductform  />} />
            <Route path="/changepassword" element={<ChangePassword  />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
