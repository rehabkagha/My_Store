import React, { useState, useEffect } from 'react';
import './About.css';
import heroBg from '../../assets/images/hero1.jpg';

function About() {
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

  return (
    <div className="about-page-container" style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', textAlign: lang === 'ar' ? 'right' : 'left' }}>
      
      {/* Hero Header Section */}
      <div 
        className="about-hero-section text-center text-white py-5 mb-5 position-relative overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="about-overlay"></div>
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <span className="badge bg-light text-dark px-3 py-2 rounded-pill mb-3 fw-semibold shadow-sm">
            {lang === 'ar' ? 'مرحباً بك في متجري' : 'Welcome To My Store'}
          </span>
          <h1 className="fw-bold display-3 mb-3 text-white">
            {lang === 'ar' ? 'قصتنا وتاريخنا' : 'About Our Story'}
          </h1>
          <p className="lead mx-auto text-light" style={{ maxWidth: '650px', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            {lang === 'ar' 
              ? 'نعيد صياغة تجربتك في التسوق عبر الإنترنت من خلال أزياء راقية، عطور مميزة، وأناقة لا تضاهى.' 
              : 'Redefining your online shopping experience with premium fashion, signature fragrances, and unmatched elegance.'}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container py-3">
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6">
            <h2 className="fw-bold mb-4 text-dark display-6">
              {lang === 'ar' ? 'نصنع أسلوبك الفريد منذ اليوم الأول' : 'Crafting Your Unique Style Since Day One'}
            </h2>
            <p className="text-muted mb-3" style={{ lineHeight: '1.8' }}>
              {lang === 'ar' 
                ? 'في متجرنا، نؤمن بأن التسوق هو أكثر بكثير من مجرد اقتناء منتجات؛ إنه تعبير حقيقي عن شخصيتك. تأسست مجموعاتنا بشغف كبير تجاه أحدث الصيحات والقطع الخالدة لضمان ظهورك بأفضل حلة دائماً.' 
                : 'At My Store, we believe that shopping is more than just acquiring items—it’s an expression of who you are. Founded with a passion for modern trends and timeless classics, we handpick every collection to ensure you look and feel your absolute best.'}
            </p>
            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
              {lang === 'ar' 
                ? 'سواء كنتِ تبحثين عن عطور مميزة، بنطلونات عصرية، فساتين سهرة أنيقة، أو إكسسوارات خاطفة للأنظار، هدفنا هو جلب الفخامة المباشرة حتى باب منزلك.' 
                : 'Whether you are searching for signature perfumes, trendy trousers, elegant evening dresses, or statement accessories, our goal is to bring high-end luxury directly to your doorstep.'}
            </p>
            <div className={`d-flex gap-4 pt-2 ${lang === 'ar' ? 'flex-row-reverse justify-content-end' : ''}`}>
              <div>
                <h3 className="fw-bold text-primary mb-1">100%</h3>
                <p className="text-muted small mb-0">{lang === 'ar' ? 'جودة مضمونة' : 'Quality Assured'}</p>
              </div>
              <div className={`${lang === 'ar' ? 'border-end pe-4' : 'border-start ps-4'}`}>
                <h3 className="fw-bold text-primary mb-1">24/7</h3>
                <p className="text-muted small mb-0">{lang === 'ar' ? 'دعم العملاء' : 'Customer Support'}</p>
              </div>
              <div className={`${lang === 'ar' ? 'border-end pe-4' : 'border-start ps-4'}`}>
                <h3 className="fw-bold text-primary mb-1">{lang === 'ar' ? 'سريع' : 'Fast'}</h3>
                <p className="text-muted small mb-0">{lang === 'ar' ? 'توصيل آمن' : 'Secure Delivery'}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-5 rounded-4 shadow-sm bg-white border position-relative overflow-hidden text-center" style={{ minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.02) 0%, rgba(30, 27, 75, 0.08) 100%)' }}></div>
              <div className="display-4 mb-3">💎</div>
              <h3 className="fw-bold text-dark mb-3 position-relative">{lang === 'ar' ? 'قيمنا الأساسية' : 'Our Core Values'}</h3>
              <p className="text-muted position-relative mb-0" style={{ maxWidth: '400px' }}>
                {lang === 'ar' 
                  ? 'النزاهة، التصاميم التي تواكب الموضة، عقلية العميل أولاً، ومعايير الجودة التي لا تقبل التنازل في كل منتج نقدمه.' 
                  : 'Integrity, trend-setting designs, customer-first mindset, and uncompromising quality standards in every product we offer.'}
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Cards */}
        <div className="text-center my-5 pt-4">
          <h2 className="fw-bold mb-2">{lang === 'ar' ? 'لماذا تتسوق معنا؟' : 'Why Shop With Us?'}</h2>
          <p className="text-muted">{lang === 'ar' ? 'إليك ما يجعلنا مميزين عن البقية' : 'Here is what makes us stand out from the rest'}</p>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100 rounded-4 feature-card">
              <div className="mb-3 text-primary fs-3">✨</div>
              <h5 className="fw-bold mb-2">{lang === 'ar' ? 'تشكيلات مختارة' : 'Curated Collections'}</h5>
              <p className="text-muted small mb-0">
                {lang === 'ar' ? 'كل قطعة في متجرنا يتم اختيارها بعنايةلتتناسب مع أحدث معايير الموضة ونمط الحياة العالمي.' : 'Every item in our store is selected carefully to match modern global fashion and lifestyle standards.'}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100 rounded-4 feature-card">
              <div className="mb-3 text-primary fs-3">🛡️</div>
              <h5 className="fw-bold mb-2">{lang === 'ar' ? 'تسوق آمن وسهل' : 'Secure & Easy Shopping'}</h5>
              <p className="text-muted small mb-0">
                {lang === 'ar' ? 'تصفح سلس، وعمليات دفع آمنة، وتجربة سلة تسوق مرنة من البداية وحتى النهاية.' : 'Smooth navigation, safe checkout processes, and a seamless shopping cart experience from start to finish.'}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm p-4 h-100 rounded-4 feature-card">
              <div className="mb-3 text-primary fs-3">🚚</div>
              <h5 className="fw-bold mb-2">{lang === 'ar' ? 'توصيل سريع وموثوق' : 'Fast & Reliable Delivery'}</h5>
              <p className="text-muted small mb-0">
                {lang === 'ar' ? 'نقوم بمعالجة وشحن منتجاتك المفضلة بسرعة لكي تصل إليك بأمان تام حتى باب منزلك.' : 'We process and ship your favorite items quickly so they arrive safely right at your doorstep.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;