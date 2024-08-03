
import './App.css';
import './assets/css/style.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import AllProducts from './components/AllProducts';
import Cart from './components/Cart';
import Layout from './components/admin/Layout';
import AdminLogin from './components/admin/AdminLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products';
import AddProduct from './components/admin/AddProduct';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/allproducts' element={<AllProducts />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/adminlogin' element={<AdminLogin />} />

          <Route path='/admin' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='/admin/products' element={<Products />} />
            <Route path='/admin/addproduct' element={<AddProduct />} />
            <Route path='/admin/addproduct/:id' element={<AddProduct />} />
          </Route>
            <Route path='/Checkout' element={<Checkout/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
