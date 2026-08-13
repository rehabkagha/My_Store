import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

// =========================
// Hero Images
// =========================

import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';
import hero3 from '../../assets/images/hero3.jpg';
import hero4 from '../../assets/images/hero4.jpg';

function Hero() {
  const navigate = useNavigate();

  // قراءة اللغة الحالية والتجاوب الفوري مع زر الناف بار
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

  // =========================
  // Hero Slider
  // =========================

  const images = [
    hero1,
    hero2,
    hero3,
    hero4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // =========================
  // Automatic Hero Slider
  // =========================

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  // =========================
  // Button Handlers
  // =========================
  const handleShopNow = () => {
    navigate('/products');
  };

  const handleExploreCollection = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/products');
    }
  };

  return (
    <div
      className="hero-page-wrapper"
      style={{ overflowX: 'hidden', direction: lang === 'ar' ? 'rtl' : 'ltr', textAlign: lang === 'ar' ? 'right' : 'left' }}
    >

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section
        className="hero-section"
        style={{ backgroundColor: '#111827' }} // توحيد لون الخلفية للقسم بالكامل
      >
        <div className="container-fluid h-100 p-0" style={{ height: '100%' }}>
          <div className={`row h-100 align-items-center m-0 ${lang === 'ar' ? 'flex-row-reverse' : ''}`} style={{ height: '100%' }}>

            {/* =========================
                LEFT/RIGHT TEXT SIDE
            ========================= */}

            <div 
              className="hero-text-side"
              style={{
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: lang === 'ar' ? 'center' : 'center', 
                textAlign: 'center',  
                height: '100%',
                padding: '0 40px',
                backgroundColor: '#111827' // ضمان لون موحد تماماً لجانب النصوص
              }}
            >

              <h1 className="hero-title">
                {lang === 'ar' ?  'My Store' : 'My Store'}
              </h1>

              <p className="hero-description" style={{ maxWidth: '450px' }}>
                {lang === 'ar' 
                  ? 'اكتشفي الأناقة في كل تفصيل. ارتقي بخزانتك مع تشكيلتنا المختارة من التصاميم الراقية المصممة خصيصاً لك.' 
                  : 'Discover elegance in every detail. Elevate your wardrobe with our curated collection of premium designs, tailored just for you.'}
              </p>

              <div className="hero-buttons" style={{ justifyContent: 'center' }}>

                <button 
                  className="btn-shop"
                  onClick={handleShopNow}
                >
                  {lang === 'ar' ? 'تسوق الآن' : 'Shop Now'}
                </button>

                <button 
                  className="btn-export"
                  onClick={handleExploreCollection}
                >
                  {lang === 'ar' ? 'استكشف التشكيلة' : 'Explore Collection'}
                </button>

              </div>

            </div>

            {/* =========================
                RIGHT/LEFT SIDE - HERO SLIDER
            ========================= */}

            <div className="col-lg-6 hero-img-side" style={{ width: '50%', height: '100%', position: 'relative', backgroundColor: '#111827' }}>

              {images.map((img, index) => (

                <div
                  key={index}
                  className={`hero-slide-img ${
                    index === currentIndex
                      ? 'active'
                      : ''
                  }`}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundColor: '#111827'     /* مطابقة لون الخلفية المحيطة بالصورة ليكون نفس لون خلفية الموقع تماماً بدون أي اختلاف */
                  }}
                />

              ))}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Hero;