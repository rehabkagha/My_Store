import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Cart.css';

function Cart() {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'ar';
  });

  useEffect(() => {
    const handleLangChange = () => {
      setLang(localStorage.getItem('app_lang') || 'ar');
    };
    window.addEventListener('languageChange', handleLangChange);
    return () => window.removeEventListener('languageChange', handleLangChange);
  }, []);

  // دالة تحويل الأرقام تلقائياً بناءً على اللغة
  const formatDigits = (num) => {
    const strNum = num.toString();
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    let converted = strNum;

    if (lang === 'ar') {
      for (let i = 0; i < 10; i++) {
        converted = converted.replace(new RegExp(englishDigits[i], 'g'), arabicDigits[i]);
      }
    } else {
      for (let i = 0; i < 10; i++) {
        converted = converted.replace(new RegExp(arabicDigits[i], 'g'), englishDigits[i]);
      }
    }
    return converted;
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNum = parseFloat(item.price.toString().replace('$', '')) || 0;
    return total + (priceNum * item.quantity);
  }, 0);

  const handleClearAll = () => {
    clearCart();
    toast.success(lang === 'ar' ? 'تم تفريغ السلة بنجاح!' : 'Cart cleared successfully!', {
      style: { background: '#1e1b4b', color: '#fff' },
    });
  };

  return (
    <div 
      className="cart-page-container py-5" 
      style={{ 
        marginTop: '70px', 
        direction: 'ltr',
        textAlign: 'left'
      }}
    >
      <div className="container">
        
        <h2 className="cart-header-title fw-bold mb-4">
          {lang === 'ar' ? 'سلة التسوق' : 'Shopping Cart'}
        </h2>

        {cartItems.length === 0 ? (
          <div className="empty-cart-message text-center py-5">
            <p className="mb-3 text-muted">
              {lang === 'ar' ? 'سلة التسوق الخاصة بك فارغة.' : 'Your shopping cart is empty.'}
            </p>
            <button 
              className="btn text-white fw-bold px-4 py-2 shadow-sm" 
              style={{ background: '#db2777', borderRadius: '8px' }}
              onClick={() => navigate('/')}
            >
              {lang === 'ar' ? 'ابدأ التسوق' : 'Start Shopping'}
            </button>
          </div>
        ) : (
          <div className="row g-4">
            
            {/* قائمة المنتجات */}
            <div className="col-lg-8">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-card mb-3 p-3 shadow-sm border-0 rounded bg-white">
                  <div className="d-flex align-items-center justify-content-between w-100 flex-wrap gap-3">
                    
                    {/* القسم الأيسر: الصورة واسم المنتج والسعر */}
                    <div className="d-flex align-items-center gap-3">
                      <Link to={`/product/${item.id}`} state={{ product: item }}>
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="cart-item-img bg-light border" 
                          style={{ width: '85px', height: '85px', objectFit: 'contain', borderRadius: '8px', cursor: 'pointer', padding: '4px' }} 
                        />
                      </Link>

                      <div className="item-details" style={{ textAlign: 'left' }}>
                        <h5 className="mb-1">
                          <Link to={`/product/${item.id}`} state={{ product: item }} className="text-decoration-none text-dark fw-bold">
                            {item.name}
                          </Link>
                        </h5>
                        <span className="item-price fw-bold" style={{ color: '#db2777' }}>{item.price}</span>
                      </div>
                    </div>

                    {/* القسم الأيمن: أزرار التحكم وزر الإزالة مثبت في أقصى اليمين وثابت تماماً */}
                    <div className="d-flex align-items-center gap-3" style={{ marginLeft: 'auto' }}>
                      <div className="quantity-controls d-flex align-items-center border rounded px-2 py-1 bg-light">
                        <button className="quantity-btn border-0 bg-transparent fw-bold px-2" onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span className="quantity-number mx-2 fw-bold" style={{ minWidth: '20px', textAlign: 'center' }}>
                          {formatDigits(item.quantity)}
                        </span>
                        <button className="quantity-btn border-0 bg-transparent fw-bold px-2" onClick={() => addToCart(item)}>+</button>
                      </div>

                      <button 
                        className="remove-btn btn btn-sm btn-light text-danger fw-bold border"
                        style={{ borderRadius: '6px' }}
                        onClick={() => {
                          removeFromCart(item.id);
                          toast.error(lang === 'ar' ? 'تم إزالة المنتج من السلة' : 'Item removed from cart');
                        }}
                      >
                        {lang === 'ar' ? 'إزالة' : 'Remove'}
                      </button>
                    </div>

                  </div>
                </div>
              ))}

              {/* أزرار التحكم السفلية (إفراغ السلة + زر الرجوع للهوم) */}
              <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-2">
                <button 
                  className="btn btn-outline-danger btn-sm fw-bold px-3 py-2 shadow-sm"
                  style={{ borderRadius: '8px' }}
                  onClick={handleClearAll}
                >
                  🗑️ {lang === 'ar' ? 'إفراغ السلة' : 'Clear Cart'}
                </button>

                <button 
                  className="btn btn-outline-secondary btn-sm fw-bold px-3 py-2 shadow-sm d-flex align-items-center gap-2"
                  style={{ borderRadius: '8px' }}
                  onClick={() => navigate('/')} 
                >
                  {lang === 'ar' ? 'الرجوع للرئيسية' : 'Back to Home'} →
                </button>
              </div>
            </div>

            {/* ملخص الطلب */}
            <div className="col-lg-4">
              <div className="order-summary-box p-4 shadow-sm border-0 rounded bg-light" style={{ textAlign: 'left' }}>
                <h4 className="summary-title fw-bold mb-3">
                  {lang === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
                </h4>
                <hr className="text-muted" />
                
                <div className="summary-row d-flex justify-content-between mb-2 text-muted">
                  <span>{lang === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span className="fw-bold text-dark">${formatDigits(totalPrice.toFixed(2))}</span>
                </div>
                
                <div className="summary-row d-flex justify-content-between mb-3 text-muted">
                  <span>{lang === 'ar' ? 'الشحن' : 'Shipping'}</span>
                  <span className="fw-bold text-success">{lang === 'ar' ? 'مجاني' : 'Free'}</span>
                </div>

                <hr className="text-muted" />

                <div className="summary-row d-flex justify-content-between align-items-center mb-4">
                  <span className="fw-bold text-dark fs-5">{lang === 'ar' ? 'الإجمالي' : 'Total'}</span>
                  <span className="summary-total-price fw-bold text-dark fs-5">${formatDigits(totalPrice.toFixed(2))}</span>
                </div>

                {/* زرار إتمام الشراء */}
                <button 
                  className="checkout-btn btn text-white fw-bold w-100 py-3 shadow-sm mb-2"
                  style={{ background: '#db2777', borderRadius: '8px' }}
                  onClick={() => navigate('/checkout')}
                >
                  {lang === 'ar' ? 'إتمام الشراء' : 'Proceed to Checkout'}
                </button>

                {/* زرار مواصلة التسوق */}
                <button 
                  className="btn btn-outline-dark fw-bold w-100 py-3 shadow-sm" 
                  style={{ borderRadius: '8px', border: '2px solid #333' }}
                  onClick={() => navigate('/')}
                >
                  {lang === 'ar' ? 'مواصلة التسوق' : 'Continue Shopping'}
                </button>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;