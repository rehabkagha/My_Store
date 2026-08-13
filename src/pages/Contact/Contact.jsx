import React, { useState, useEffect } from 'react';
import './Contact.css';
import heroBg from '../../assets/images/hero1.jpg';

function Contact({ isHome = false }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  
  // قراءة اللغة الحالية من الـ localStorage وتحديثها تلقائياً عند تغييرها من الناف بار
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className={isHome ? "contact-home-wrapper" : "contact-page-container"} style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', textAlign: lang === 'ar' ? 'right' : 'left' }}>
      
      {/* Hero Header Section */}
      {!isHome && (
        <div 
          className="contact-hero-section text-center text-white position-relative overflow-hidden"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="contact-overlay"></div>
          <div className="container position-relative py-4" style={{ zIndex: 2 }}>
            <span className="contact-badge px-3 py-1 rounded-pill mb-2 d-inline-block fw-medium">
              {lang === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
            </span>
            <h1 className="fw-bold display-5 mb-2 text-white">
              {lang === 'ar' ? 'يسعدنا سماع صوتك' : 'We’d Love To Hear From You'}
            </h1>
            <p className="text-light opacity-85 mx-auto mb-0" style={{ maxWidth: '550px', fontSize: '0.95rem' }}>
              {lang === 'ar' 
                ? 'لديك استفسار حول مجموعاتنا أو بحاجة إلى مساعدة؟ فريق الدعم لدينا متواجد دائماً من أجلك.' 
                : 'Have a question about our collections or need assistance? Our support team is always here for you.'}
            </p>
          </div>
        </div>
      )}

      {/* Main Content Section */}
      <div className={`container ${isHome ? 'py-4' : 'py-5 my-2'}`}>
        
        {isHome && (
          <div className="text-center mb-5">
            <span style={{ background: 'rgba(219, 39, 119, 0.1)', color: '#db2777', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
              {lang === 'ar' ? 'تواصل معنا' : 'Get In Touch'}
            </span>
            <h2 className="fw-bold mt-2" style={{ color: '#1e1b4b', fontSize: '2rem' }}>
              {lang === 'ar' ? 'يسعدنا سماع صوتك' : 'We’d Love To Hear From You'}
            </h2>
          </div>
        )}

        <div className="row g-5 align-items-start justify-content-center">
          
          {/* معلومات التواصل */}
          <div className="col-lg-5 ps-lg-4">
            <div className={`contact-info-wrapper ${lang === 'ar' ? 'pe-lg-3' : 'ps-lg-3'}`}>
              <h3 className="fw-bold mb-3 text-dark fs-4">
                {lang === 'ar' ? 'لنبدأ محادثة' : 'Let’s Start a Conversation'}
              </h3>
              <p className="text-muted mb-4" style={{ lineHeight: '1.7', fontSize: '0.95rem' }}>
                {lang === 'ar' 
                  ? 'نحن نحرص على تقديم أفضل تجربة تسوق. تواصل معنا عبر أي من القنوات أدناه أو املأ النموذج.' 
                  : 'We are dedicated to delivering the best shopping experience. Reach out to us through any of the channels below or fill out the form.'}
              </p>

              {/* Location Icon */}
              <div className="contact-info-item d-flex align-items-center mb-4">
                <div className={`contact-icon-box ${lang === 'ar' ? 'ms-3' : 'me-3'} bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#dc3545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark fs-6">{lang === 'ar' ? 'موقعنا' : 'Our Location'}</h6>
                  <p className="text-muted small mb-0">{lang === 'ar' ? 'البدرشين، الجيزة، مصر' : 'El-Badrashin, Giza, Egypt'}</p>
                </div>
              </div>

              {/* Email Icon */}
              <div className="contact-info-item d-flex align-items-center mb-4">
                <div className={`contact-icon-box ${lang === 'ar' ? 'ms-3' : 'me-3'} bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                    <path fill="#4285F4" d="M386.4 162.5l-51.2 39.5-79.3 61.2-79.3-61.2-51.2-39.5C104.9 162.5 96 177.3 96 195.4V342.3c0 20.3 16.5 36.8 36.8 36.8h42.7V256l103.7 80 103.7-80v123.1h42.7c20.3 0 36.8-16.5 36.8-36.8V195.4c0-18.1-8.9-32.9-26.6-32.9z"/>
                    <path fill="#34A853" d="M383.2 379.1H416c20.3 0 36.8-16.5 36.8-36.8V195.4c0-7.8-2.6-15-7-20.9l-58.6 45.2z"/>
                    <path fill="#FBBC05" d="M96 195.4c0-5.9 2.4-11.5 6.6-15.7l58.6 45.2-65.2 50.3c-4.4-6-7-13.3-7-21.2v-58.6z"/>
                    <path fill="#EA4335" d="M161.2 225.9L96 175.7c-4.4 6-7 13.3-7 21.2V342.3c0 20.3 16.5 36.8 36.8 36.8h32.4V256l-37-30.1z"/>
                    <path fill="#C5221F" d="M320 256v122.7h42.7c20.3 0 36.8-16.5 36.8-36.8V256L320 256z"/>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark fs-6">{lang === 'ar' ? 'راسلنا عبر البريد' : 'Email Us'}</h6>
                  <p className="text-muted small mb-0">support@mystore.com</p>
                </div>
              </div>

              {/* Call Us Icon */}
              <div className="contact-info-item d-flex align-items-center">
                <div className={`contact-icon-box ${lang === 'ar' ? 'ms-3' : 'me-3'} bg-white shadow-sm rounded-circle d-flex align-items-center justify-content-center`} style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#198754" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark fs-6">{lang === 'ar' ? 'اتصل بنا' : 'Call Us'}</h6>
                  <p className="text-muted small mb-0">+20 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>

          {/* نموذج الإرسال (Form) */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm p-4 p-md-5 rounded-4 bg-white">
              <h3 className="fw-bold mb-4 text-dark fs-4">
                {lang === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h3>
              
              {submitted && (
                <div className="alert alert-success rounded-3 mb-4 py-2 small" role="alert">
                  {lang === 'ar' ? '✨ شكراً لك! تم إرسال رسالتك بنجاح.' : '✨ Thank you! Your message has been sent successfully.'}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold text-secondary small">
                    {lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                  </label>
                  <input 
                    type="text" 
                    className="form-control bg-light border-0 py-2.5 px-3" 
                    id="name" 
                    name="name"
                    placeholder={lang === 'ar' ? 'أدخل اسمك' : 'Enter your name'}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ fontSize: '0.9rem', textAlign: lang === 'ar' ? 'right' : 'left' }}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold text-secondary small">
                    {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input 
                    type="email" 
                    className="form-control bg-light border-0 py-2.5 px-3" 
                    id="email" 
                    name="email"
                    placeholder={lang === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ fontSize: '0.9rem', textAlign: lang === 'ar' ? 'right' : 'left' }}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold text-secondary small">
                    {lang === 'ar' ? 'الرسالة' : 'Message'}
                  </label>
                  <textarea 
                    className="form-control bg-light border-0 p-3" 
                    id="message" 
                    name="message"
                    rows="4"
                    placeholder={lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ fontSize: '0.9rem', textAlign: lang === 'ar' ? 'right' : 'left' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark w-100 py-3 fw-bold rounded-pill shadow-sm" style={{ backgroundColor: '#1e1b4b', border: 'none', fontSize: '0.95rem' }}>
                  {lang === 'ar' ? 'إرسال الرسالة' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;