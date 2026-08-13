import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, ShoppingCart, Globe } from 'lucide-react'; 
import "./Navbar.css";

function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState('');
  
  // بنجيب اللغة المخزنة أو نبدأ بالعربي كافتراضي بناءً على طلبك
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'ar';
  });

  useEffect(() => {
    const term = searchParams.get('search') || '';
    setSearchQuery(term);
  }, [searchParams]);

  // تحديث اللغة وحفظها في الـ localStorage وإرسال حدث لباقي الصفحات (مثل Contact)
  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setCurrentLang(newLang);
    localStorage.setItem('app_lang', newLang);
    window.dispatchEvent(new Event('languageChange'));
  };

  const totalItems = (cartItems || []).reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    } else {
      navigate('/products');
    }
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId) => {
    const performScroll = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(performScroll, 300);
    } else {
      performScroll();
    }
  };

  return (
    <nav className="navbar">
      
      <a href="/" onClick={handleHomeClick} style={{ textDecoration: 'none' }}>
        <div className="logo">
          My <span>Store</span>
        </div>
      </a>

      <ul className="nav-links">
        <li>
          <a href="/" onClick={handleHomeClick} className={location.pathname === '/' ? 'active-link' : ''}>
            {currentLang === 'ar' ? 'الرئيسية' : 'Home'}
          </a>
        </li>
        <li>
          <span onClick={() => handleScrollToSection('products-section')}>
            {currentLang === 'ar' ? 'المنتجات' : 'Products'}
          </span>
        </li>
        <li>
          <span onClick={() => handleScrollToSection('categories-section')}>
            {currentLang === 'ar' ? 'الأقسام' : 'Categories'}
          </span>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>
            {currentLang === 'ar' ? 'من نحن' : 'About'}
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>
            {currentLang === 'ar' ? 'اتصل بنا' : 'Contact'}
          </Link>
        </li>
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        
        {/* شريط البحث */}
        <form onSubmit={handleSearchSubmit} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="text"
            placeholder={currentLang === 'ar' ? 'ابحث عن المنتجات...' : 'Search products...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              padding: '10px 15px 10px 40px',
              color: '#fff',
              fontSize: '14px',
              outline: 'none',
              width: '200px',
              transition: 'all 0.4s ease'
            }}
            onFocus={(e) => {
              e.target.style.width = '280px';
              e.target.style.background = 'rgba(255, 255, 255, 0.12)';
              e.target.style.borderColor = '#db2777';
            }}
            onBlur={(e) => { 
              if(!searchQuery) {
                e.target.style.width = '200px';
                e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }
            }}
          />
          <button type="submit" style={{ position: 'absolute', left: '12px', background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255, 255, 255, 0.5)', padding: 0 }}>
            <Search size={18} strokeWidth={2.5} />
          </button>
        </form>

        {/* زر تغيير اللغة */}
        <div className="language-selector-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '25px', padding: '6px 12px', gap: '8px' }}>
          <Globe size={18} color="#db2777" />
          <select 
            value={currentLang} 
            onChange={handleLanguageChange}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#fff',
              fontSize: '14px',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            <option value="ar" style={{ background: '#080f28', color: '#fff' }}>العربية</option>
            <option value="en" style={{ background: '#080f28', color: '#fff' }}>English</option>
          </select>
        </div>

        {/* أيقونة السلة */}
        <div 
          className="cart-icon-wrapper"
          onClick={() => navigate('/cart')} 
          style={{ position: 'relative', cursor: 'pointer', color: '#fff' }}
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span style={{
              position: 'absolute', top: '-8px', right: '-8px', background: '#db2777', color: '#fff',
              fontSize: '10px', width: '16px', height: '16px', borderRadius: '50%', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontWeight: 'bold'
            }}>
              {totalItems}
            </span>
          )}
        </div>

        {/* زر تسجيل الدخول */}
        <button 
          className="login-btn"
          onClick={() => navigate('/login')}
        >
          {currentLang === 'ar' ? 'تسجيل الدخول' : 'Login'}
        </button>
      </div>
    </nav>
  );
}

Navbar.displayName = 'Navbar';
export default Navbar;