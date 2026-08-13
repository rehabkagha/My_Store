import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import toast from 'react-hot-toast';

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';
import product4 from '../../assets/images/product4.jpg';
import product5 from '../../assets/images/product5.jpg';
import product6 from '../../assets/images/product6.jpg';
import product7 from '../../assets/images/product7.jpg';
import product8 from '../../assets/images/product8.jpg';
import product9 from '../../assets/images/product9.jpg';
import product10 from '../../assets/images/product10.jpg';
import product11 from '../../assets/images/product11.jpg';
import product12 from '../../assets/images/product12.jpg';
import product13 from '../../assets/images/product13.jpg';
import product14 from '../../assets/images/product14.jpg';
import product15 from '../../assets/images/product15.jpg';
import product16 from '../../assets/images/product16.jpg';
import product17 from '../../assets/images/product17.jpg';
import product18 from '../../assets/images/product18.jpg';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, cartItems } = useCart();

  const [isOpen, setIsOpen] = useState(false);

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

  const formatDigits = (str) => {
    if (!str) return str;
    const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    let converted = String(str);
    
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

  const imagesMap = {
    "1": product1, "2": product2, "3": product3, "4": product4,
    "5": product5, "6": product6, "7": product7, "8": product8,
    "9": product9, "10": product10, "11": product11, "12": product12,
    "13": product13, "14": product14, "15": product15, "16": product16,
    "17": product17, "18": product18,
  };

  const passedProduct = location.state?.product;
  const foundInCart = cartItems.find((item) => String(item.id) === String(id));

  const product = passedProduct || foundInCart || {
    id: id,
    name: lang === 'ar' ? `منتج مميز ${formatDigits(id)}` : `Featured Product ${formatDigits(id)}`,
    price: `$${formatDigits(id * 17)}`,
    description: lang === 'ar' 
      ? "عطر راقي ومميز يمنحك شعوراً بالانتعاش والجاذبية طوال اليوم." 
      : "An elegant and distinct fragrance that gives you a sense of freshness and appeal all day long.",
    colors: ["#1e1b4b", "#db2777", "#475569"],
    image: imagesMap[id] || product1
  };

  const colorsList = product?.colors || ["#1e1b4b", "#db2777", "#475569"];
  const [selectedColor, setSelectedColor] = useState(colorsList[0]);

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor });
    toast.success(lang === 'ar' ? 'تم الإضافة إلى السلة بنجاح!' : 'Added to cart successfully!', {
      style: { background: '#1e1b4b', color: '#fff' },
    });
  };

  return (
    <div className="container py-5" style={{ marginTop: '40px', direction: 'ltr', textAlign: 'left' }}>
      <button 
        className="btn btn-outline-secondary mb-4" 
        onClick={() => navigate(-1)}
      >
        {lang === 'ar' ? '← العودة للمنتجات' : '← Back to Products'}
      </button>

      <div className="row g-5 align-items-center">
        {/* صورة المنتج مع إمكانية الضغط لتكبيرها */}
        <div className="col-md-6">
          <img 
            src={product?.image || product1} 
            alt={product?.name} 
            className="img-fluid rounded shadow" 
            title={lang === 'ar' ? "اضغط للتكبير" : "Click to zoom"}
            style={{ 
              width: '100%', 
              maxHeight: '450px', 
              objectFit: 'contain', 
              backgroundColor: '#f8f9fa',
              cursor: 'zoom-in' 
            }}
            onClick={() => setIsOpen(true)}
          />
        </div>

        {/* تفاصيل المنتج والخيارات */}
        <div className="col-md-6">
          <h2 className="fw-bold text-dark">{product?.name}</h2>
          <h3 className="text-pink fw-bold my-3" style={{ color: '#db2777' }}>{product?.price}</h3>
          <p className="text-muted mb-4">{product?.description}</p>

          {/* اختيار الألوان */}
          <div className="mb-4">
            <h6 className="fw-bold mb-2">{lang === 'ar' ? 'الألوان المتاحة:' : 'Available Colors:'}</h6>
            <div className="d-flex gap-2">
              {colorsList.map((color, index) => (
                <div 
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    backgroundColor: color,
                    cursor: 'pointer',
                    border: selectedColor === color ? '3px solid #000' : '2px solid #ddd',
                    transition: '0.2s'
                  }}
                />
              ))}
            </div>
          </div>

          {/* زر الإضافة للسلة */}
          <button 
            className="btn btn-lg text-white fw-bold w-100" 
            style={{ background: '#db2777', borderRadius: '8px' }}
            onClick={handleAddToCart}
          >
            {lang === 'ar' ? 'إضافة إلى السلة' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* نافذة عرض الصورة المكبرة (Lightbox Modal) */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            cursor: 'zoom-out'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'transparent',
                border: 'none',
                color: '#fff',
                fontSize: '28px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              &times;
            </button>
            <img 
              src={product?.image || product1} 
              alt="Zoomed Product" 
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 5px 25px rgba(0,0,0,0.5)',
                backgroundColor: '#fff'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;