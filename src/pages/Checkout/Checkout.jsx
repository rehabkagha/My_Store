import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Checkout() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // حالة اللغة (عربي / إنجليزي) مع التجاوب الفوري مع الناف بار
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

  // دالة لتحويل الأرقام الإنجليزية إلى أرقام عربية (مثال: 5 تتحول إلى ٥)
  const toArabicDigits = (num) => {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return num.toString().replace(/\d/g, (digit) => arabicNumbers[digit]);
  };
  
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    city: '', 
    address: '',
    paymentMethod: 'cod',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    instapayAccount: ''
  });

  const totalPrice = cartItems.reduce((total, item) => {
    const priceNum = parseFloat(item.price.toString().replace('$', '')) || 0;
    return total + (priceNum * item.quantity);
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.city || !formData.address) {
      toast.error(lang === 'ar' ? 'يرجى ملء جميع حقول الشحن المطلوبة.' : 'Please fill in all required shipping fields.');
      return;
    }

    if (formData.paymentMethod === 'card' && (!formData.cardNumber || !formData.cardExpiry || !formData.cardCvc)) {
      toast.error(lang === 'ar' ? 'يرجى إدخال تفاصيل البطاقة كاملة.' : 'Please enter your complete card details.');
      return;
    }

    if (formData.paymentMethod === 'instapay' && !formData.instapayAccount) {
      toast.error(lang === 'ar' ? 'يرجى إدخال اسم مستخدم إنستا باي أو رقم الهواتف.' : 'Please enter your InstaPay username or phone number.');
      return;
    }

    toast.success(lang === 'ar' ? 'تم تقديم الطلب بنجاح! شكرا لتسوقك معنا.' : 'Order placed successfully! Thank you for shopping with us.');
    clearCart();
    navigate('/');
  };

  return (
    <div 
      style={{ 
        background: '#f8fafc', 
        minHeight: '100vh', 
        paddingTop: '100px', 
        paddingBottom: '60px',
        direction: 'ltr',
        textAlign: 'left'
      }}
    >
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        <div className="mb-4">
          <h2 className="fw-bold" style={{ color: '#1e1b4b', fontSize: '2rem', letterSpacing: '-0.5px' }}>
            {lang === 'ar' ? 'إتمام الطلب' : 'Checkout'}
          </h2>
          <p className="text-muted small">
            {lang === 'ar' ? 'أكمل بيانات الشحن والدفع الخاصة بك لتأكيد الطلب.' : 'Complete your shipping and payment details to place the order.'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            
            {/* العمود الأيسر: بيانات الشحن والدفع */}
            <div className="col-lg-8">
              
              {/* كارت بيانات الشحن والتواصل */}
              <div className="p-4 border-0 shadow-sm rounded-4 bg-white mb-4">
                <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1e1b4b', fontSize: '1.1rem' }}>
                   {lang === 'ar' ? '١. معلومات الشحن والتواصل' : '1. Shipping & Contact Information'}
                </h5>
                
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-muted">
                      {lang === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    </label>
                    <input 
                      name="name" 
                      placeholder={lang === 'ar' ? 'الاسم' : 'Name'} 
                      className="form-control bg-light border-0 py-2.5" 
                      style={{ fontSize: '0.9rem' }}
                      required 
                      onChange={(e) => setFormData({...formData, name: e.target.value})} 
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-muted">
                      {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input 
                      type="email"
                      name="email" 
                      placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email'} 
                      className="form-control bg-light border-0 py-2.5" 
                      style={{ fontSize: '0.9rem' }}
                      required 
                      onChange={(e) => setFormData({...formData, email: e.target.value})} 
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-muted">
                      {lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </label>
                    <input 
                      type="tel"
                      name="phone" 
                      placeholder={lang === 'ar' ? 'رقم الهاتف' : 'Phone'} 
                      className="form-control bg-light border-0 py-2.5" 
                      style={{ fontSize: '0.9rem' }}
                      required 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label small fw-semibold text-muted">
                      {lang === 'ar' ? 'المدينة' : 'City'}
                    </label>
                    <input 
                      name="city" 
                      placeholder={lang === 'ar' ? 'المدينة' : 'City'} 
                      className="form-control bg-light border-0 py-2.5" 
                      style={{ fontSize: '0.9rem' }}
                      required 
                      onChange={(e) => setFormData({...formData, city: e.target.value})} 
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted">
                      {lang === 'ar' ? 'العنوان بالتفصيل' : 'Detailed Address'}
                    </label>
                    <textarea 
                      name="address" 
                      rows="2"
                      placeholder={lang === 'ar' ? 'العنوان' : 'Address'} 
                      className="form-control bg-light border-0 p-3" 
                      style={{ fontSize: '0.9rem' }}
                      required 
                      onChange={(e) => setFormData({...formData, address: e.target.value})} 
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* كارت طرق الدفع */}
              <div className="p-4 border-0 shadow-sm rounded-4 bg-white">
                <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1e1b4b', fontSize: '1.1rem' }}>
                   {lang === 'ar' ? '٢. اختر طريقة الدفع' : '2. Select Payment Method'}
                </h5>

                {/* 1. الدفع عند الاستلام */}
                <div className={`form-check p-3 border rounded-3 mb-3 bg-light d-flex align-items-center ${formData.paymentMethod === 'cod' ? 'border-primary bg-white shadow-sm' : ''}`}>
                  <input 
                    className="form-check-input mt-0 me-2" 
                    type="radio" 
                    name="paymentMethod" 
                    id="cod" 
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})} 
                  />
                  <label className="form-check-label fw-semibold text-dark small mb-0 w-100" htmlFor="cod" style={{ cursor: 'pointer' }}>
                    {lang === 'ar' ? 'الدفع عند الاستلام (COD)' : 'Cash on Delivery (COD)'}  
                    <span className="text-muted fw-normal ms-1">
                      {lang === 'ar' ? '- ادفع نقداً عند الاستلام' : '- Pay cash upon receipt'}
                    </span>
                  </label>
                </div>

                {/* 2. بطاقة الائتمان */}
                <div className={`form-check p-3 border rounded-3 mb-3 bg-light d-flex flex-column ${formData.paymentMethod === 'card' ? 'border-primary bg-white shadow-sm' : ''}`}>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center w-100">
                      <input 
                        className="form-check-input mt-0 me-2" 
                        type="radio" 
                        name="paymentMethod" 
                        id="card" 
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})} 
                      />
                      <label className="form-check-label fw-semibold text-dark small mb-0 w-100" htmlFor="card" style={{ cursor: 'pointer' }}>
                        {lang === 'ar' ? 'بطاقة ائتمان أو خصم 💳' : 'Credit or Debit Card 💳'}
                      </label>
                    </div>
                    <span className="text-muted small fw-semibold" style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>Visa / Master</span>
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <div className="mt-3 pt-3 border-top row g-2">
                      <div className="col-12">
                        <label className="form-label text-muted" style={{ fontSize: '11px' }}>
                          {lang === 'ar' ? 'رقم البطاقة' : 'Card Number'}
                        </label>
                        <input 
                          type="text" 
                          placeholder={lang === 'ar' ? 'رقم البطاقة' : 'Card Number'} 
                          maxLength="19"
                          className="form-control bg-light border-0 py-2" 
                          style={{ fontSize: '0.85rem' }}
                          onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted" style={{ fontSize: '11px' }}>
                          {lang === 'ar' ? 'تاريخ الانتهاء' : 'Expiry Date'}
                        </label>
                        <input 
                          type="text" 
                          placeholder="MM/YY" 
                          maxLength="5"
                          className="form-control bg-light border-0 py-2" 
                          style={{ fontSize: '0.85rem' }}
                          onChange={(e) => setFormData({...formData, cardExpiry: e.target.value})}
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label text-muted" style={{ fontSize: '11px' }}>CVV</label>
                        <input 
                          type="password" 
                          placeholder="CVV" 
                          maxLength="4"
                          className="form-control bg-light border-0 py-2" 
                          style={{ fontSize: '0.85rem' }}
                          onChange={(e) => setFormData({...formData, cardCvc: e.target.value})}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. إنستا باي */}
                <div className={`form-check p-3 border rounded-3 bg-light d-flex flex-column ${formData.paymentMethod === 'instapay' ? 'border-primary bg-white shadow-sm' : ''}`}>
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="d-flex align-items-center w-100">
                      <input 
                        className="form-check-input mt-0 me-2" 
                        type="radio" 
                        name="paymentMethod" 
                        id="instapay" 
                        value="instapay"
                        checked={formData.paymentMethod === 'instapay'}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})} 
                      />
                      <label className="form-check-label fw-semibold text-dark small mb-0 w-100" htmlFor="instapay" style={{ cursor: 'pointer' }}>
                        {lang === 'ar' ? 'إنستا باي 📱' : 'InstaPay 📱'} 
                        <span className="text-muted fw-normal ms-1">
                          {lang === 'ar' ? '- تحويل بنكي فوري' : '- Instant Bank Transfer'}
                        </span>
                      </label>
                    </div>
                    <span className="badge bg-success text-white" style={{ fontSize: '10px' }}>
                      {lang === 'ar' ? 'فوري' : 'Instant'}
                    </span>
                  </div>

                  {formData.paymentMethod === 'instapay' && (
                    <div className="mt-3 pt-3 border-top">
                      <label className="form-label text-muted" style={{ fontSize: '11px' }}>
                        {lang === 'ar' ? 'اسم مستخدم إنستا باي أو رقم الهاتف (IPA)' : 'InstaPay Username or Phone Number (IPA)'}
                      </label>
                      <input 
                        type="text" 
                        placeholder={lang === 'ar' ? 'حساب إنستا باي' : 'InstaPay Account'} 
                        className="form-control bg-light border-0 py-2" 
                        style={{ fontSize: '0.85rem' }}
                        onChange={(e) => setFormData({...formData, instapayAccount: e.target.value})}
                      />
                      <small className="text-muted mt-1 d-block" style={{ fontSize: '10px' }}>
                        {lang === 'ar' ? 'سيتم إرسال طلب دفع آمن إلى حساب إنستا باي الخاص بك.' : 'A secure payment request will be sent to your InstaPay account.'}
                      </small>
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* العمود الأيمن: ملخص الطلب */}
            <div className="col-lg-4">
              <div className="p-4 border-0 shadow-sm rounded-4 bg-white sticky-top" style={{ top: '100px' }}>
                <h5 className="fw-bold mb-3 pb-2 border-bottom" style={{ color: '#1e1b4b', fontSize: '1.1rem' }}>
                  {lang === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
                </h5>
                
                <div className="d-flex justify-content-between mb-2 text-muted small">
                  <span>{lang === 'ar' ? 'إجمالي المنتجات:' : 'Items Total:'}</span>
                  <span className="fw-bold text-dark">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-3 text-muted small">
                  <span>{lang === 'ar' ? 'رسوم الشحن:' : 'Shipping Fee:'}</span>
                  <span className="text-success fw-bold">
                    {lang === 'ar' ? 'مجاني' : 'Free'}
                  </span>
                </div>
                
                <hr className="text-muted opacity-25" />
                
                <div className="d-flex justify-content-between mb-4 align-items-center">
                  <span className="fw-bold text-dark">{lang === 'ar' ? 'المبلغ الإجمالي:' : 'Total Amount:'}</span>
                  <span className="fs-4 fw-bold" style={{ color: '#db2777' }}>${totalPrice.toFixed(2)}</span>
                </div>
                
                <button 
                  type="submit"
                  className="btn w-100 py-2.5 text-white fw-bold shadow-sm mb-2 rounded-pill" 
                  style={{ background: '#db2777', border: 'none', fontSize: '0.95rem' }}
                >
                  {lang === 'ar' ? 'تأكيد الطلب' : 'Confirm Order'} 
                </button>

                <button 
                  type="button"
                  onClick={() => navigate('/cart')}
                  className="btn btn-outline-secondary w-100 py-2 fw-bold shadow-sm rounded-pill small" 
                >
                  {lang === 'ar' ? 'العودة إلى السلة' : 'Back to Cart'}
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;