import React from 'react';
import Hero from '../../components/Hero/Hero'; 
import FeaturedProducts from '../../components/Products/Products'; 
import CategoriesSection from '../Categories/Categories.jsx'; 
import Contact from '../Contact/Contact'; 

function Home() {
  return (
    <div>
      <Hero />
      
      {/* قسم المنتجات */}
      <div id="products-section" style={{ background: '#fff', padding: '20px 0' }}>
        <FeaturedProducts />
      </div>
      
      {/* قسم الفئات */}
      <div id="categories-section" style={{ background: '#f9f9f9', padding: '20px 0' }}>
        <CategoriesSection />
      </div>

      {/* جزء الـ Contact في آخر الهوم مع خلفية فخمة تليق بالموقع */}
      <div 
        id="contact-section" 
        style={{ 
          background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)', 
          padding: '60px 0',
          marginTop: '20px',
          borderRadius: '30px 30px 0 0' // حواف دائرية من فوق شكلها مودرن وجديد
        }}
      >
        <Contact />
      </div>
    </div>
  );
}

export default Home;