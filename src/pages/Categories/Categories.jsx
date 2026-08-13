import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// استيراد الصور المحلية
import perfumeImg from '../../assets/images/perfume.jpg';
import pantsImg from '../../assets/images/pants.jpg';
import dressImg from '../../assets/images/dresses.jpg';
import accessoriesImg from '../../assets/images/accessories.jpg';
import watchesImg from '../../assets/images/watches.jpg';
import bagsImg from '../../assets/images/bags.jpg';

function Categories() {
  const scrollRef = useRef(null);

  // قراءة اللغة الحالية والتجاوب الفوري مع تغييرها من الناف بار
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

  // اتجاه حركة الأسهم يتناسب مع اللغة (عربي يمين/يسار معكوس)
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: lang === 'ar' ? 320 : -320,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: lang === 'ar' ? -320 : 320,
        behavior: 'smooth'
      });
    }
  };

  // قائمة الفئات مع ربط كل قسم بـ slug دقيق للبحث (يتطابق مع الـ tags في صفحة المنتجات)
  const categoriesList = [
    { 
      id: 1, 
      name: lang === 'ar' ? 'عطور مميزة' : 'Signature Perfumes', 
      slug: 'perfume', 
      img: perfumeImg 
    },
    { 
      id: 2, 
      name: lang === 'ar' ? 'بنطلونات نسائية' : 'Women’s Pants', 
      slug: 'trousers', 
      img: pantsImg 
    },
    { 
      id: 3, 
      name: lang === 'ar' ? 'فساتين أنيقة' : 'Elegant Dresses', 
      slug: 'dress', 
      img: dressImg 
    },
    { 
      id: 4, 
      name: lang === 'ar' ? 'إكسسوارات عصرية' : 'Chic Accessories', 
      slug: 'bracelet', 
      img: accessoriesImg 
    },
    { 
      id: 5, 
      name: lang === 'ar' ? 'ساعات فاخرة' : 'Luxury Watches', 
      slug: 'watch', 
      img: watchesImg 
    },
    { 
      id: 6, 
      name: lang === 'ar' ? 'حقائب ومحافظ' : 'Handbags & Purses', 
      slug: 'bag', 
      img: bagsImg 
    },
  ];

  return (
    <section 
      id="categories-section" 
      className="container py-4" 
      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', textAlign: lang === 'ar' ? 'right' : 'left' }}
    >
      {/* Title */}
      <div className="categories-title text-center mb-4">
        <h2 className="fw-bold display-6">
          {lang === 'ar' ? 'أقسام المتجر' : 'Shop by Category'}
        </h2>
        <p className="text-muted">
          {lang === 'ar' ? 'استكشف تشكيلاتنا المصممة خصيصاً لتناسب نمط حياتك' : 'Explore our curated collections designed for your lifestyle'}
        </p>
      </div>

      {/* Images + Arrows Wrapper */}
      <div className="categories-wrapper position-relative d-flex align-items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="category-arrow btn btn-light shadow-sm rounded-circle position-absolute start-0"
          style={{ zIndex: 2, transform: 'translateX(-50%)' }}
          aria-label="Previous categories"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>

        {/* Categories Slider */}
        <div
          ref={scrollRef}
          className="categories-slider-container d-flex gap-3 overflow-hidden w-100 px-2"
          style={{ scrollBehavior: 'smooth', whiteSpace: 'nowrap' }}
        >
          {categoriesList.map((cat) => (
            <div key={cat.id} className="category-slider-item" style={{ minWidth: '250px', flex: '0 0 auto' }}>
              {/* الانتقال لصفحة المنتجات مع إرسال الـ slug في الـ Query Parameter */}
              <Link to={`/products?search=${cat.slug}`} className="text-decoration-none">
                <div className="category-card card border-0 shadow-sm overflow-hidden" style={{ borderRadius: '16px' }}>
                  <div className="category-image-container bg-light d-flex align-items-center justify-content-center" style={{ height: '220px', overflow: 'hidden' }}>
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }} 
                    />
                  </div>
                  <div className="category-name text-center bg-white p-3">
                    <h6 className="fw-bold text-dark mb-0">{cat.name}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="category-arrow btn btn-light shadow-sm rounded-circle position-absolute end-0"
          style={{ zIndex: 2, transform: 'translateX(50%)' }}
          aria-label="Next categories"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0L10.293 8l-5.647 5.646a.5.5 0 0 1-.708.708l6-6a.5.5 0 0 1 0-.708l-6-6a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Categories;