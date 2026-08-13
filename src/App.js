import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products'; // التعديل هنا: من components وليس pages
import ProductDetails from './pages/ProductDetails/ProductDetails'; 
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout'; 
import Login from './components/Login/Login'; 
import Register from './components/Login/Register'; 
import Home from './pages/Home/Home'; 
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <CartProvider>
      <Toaster 
        position="bottom-right" 
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e1b4b',
            color: '#fff',
            borderRadius: '10px',
            padding: '12px 20px',
          },
        }}
      />
      <Router>
        <Navbar />
        <Routes>
          {/* المسار الرئيسي */}
          <Route path="/" element={<Home />} />
          
          {/* مسار صفحة المنتجات والبحث */}
          <Route path="/products" element={<Products />} />
          
          {/* مسار تفاصيل المنتج بناءً على الـ ID */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* مسارات تسجيل الدخول وإنشاء الحساب */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;