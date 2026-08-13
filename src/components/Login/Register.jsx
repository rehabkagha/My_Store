import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  return (
    <div 
      className="login-page-wrapper"
      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', textAlign: lang === 'ar' ? 'right' : 'left' }}
    >
      <div className="login-card" style={{ maxWidth: '450px' }}>
        <div className="login-header">
          <h2>{lang === 'ar' ? 'إنشاء حساب جديد' : 'Create Account'}</h2>
          <p>{lang === 'ar' ? 'الرجاء ملء البيانات للانضمام إلى متجر الأزياء الخاص بنا' : 'Please fill in the details to join our fashion store'}</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          
          {/* حقل الاسم الأول والاسم الأخير */}
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className="input-group-custom" style={{ flex: 1 }}>
              <input 
                type="text" 
                placeholder={lang === 'ar' ? 'الاسم الأول' : 'First Name'} 
                required 
              />
              <span className="input-icon" style={lang === 'ar' ? { left: '15px', right: 'auto' } : {}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </span>
            </div>

            <div className="input-group-custom" style={{ flex: 1 }}>
              <input 
                type="text" 
                placeholder={lang === 'ar' ? 'اسم العائلة' : 'Last Name'} 
                required 
              />
              <span className="input-icon" style={lang === 'ar' ? { left: '15px', right: 'auto' } : {}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
              </span>
            </div>
          </div>

          {/* حقل البريد الإلكتروني */}
          <div className="input-group-custom">
            <input 
              type="email" 
              placeholder={lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'} 
              required 
            />
            <span className="input-icon" style={lang === 'ar' ? { left: '15px', right: 'auto' } : {}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
            </span>
          </div>

          {/* حقل رقم الهاتف */}
          <div className="input-group-custom">
            <input 
              type="tel" 
              placeholder={lang === 'ar' ? 'رقم الهاتف' : 'Phone Number'} 
              required 
              style={{ textAlign: lang === 'ar' ? 'right' : 'left', paddingRight: lang === 'ar' ? '40px' : '15px', paddingLeft: lang === 'ar' ? '15px' : '40px' }}
            />
            <span className="input-icon" style={lang === 'ar' ? { left: '15px', right: 'auto' } : {}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 6.868 6.868c.6.21 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.748 1.748 0 0 1-1.657-.959L5.45 6.455a1.748 1.748 0 0 1-.959-1.657l.547-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
              </svg>
            </span>
          </div>

          {/* حقل كلمة المرور */}
          <div className="input-group-custom">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder={lang === 'ar' ? 'كلمة المرور' : 'Password'} 
              required 
            />
            <span 
              className="input-icon password-toggle" 
              onClick={() => setShowPassword(!showPassword)}
              style={{ cursor: 'pointer', ...(lang === 'ar' ? { right: 'auto', left: '15px' } : {}) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
            </span>
          </div>

          {/* حقل تأكيد كلمة المرور */}
          <div className="input-group-custom">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder={lang === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm Password'} 
              required 
            />
            <span 
              className="input-icon password-toggle" 
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              style={{ cursor: 'pointer', ...(lang === 'ar' ? { right: 'auto', left: '15px' } : {}) }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
            </span>
          </div>

          {/* زر التسجيل */}
          <button type="submit" className="login-submit-btn" style={{ marginTop: '10px' }}>
            {lang === 'ar' ? 'إنشاء الحساب' : 'Sign Up'}
          </button>

          {/* خط فاصل */}
          <div className="social-divider" style={{ textAlign: 'center', margin: '12px 0', fontSize: '13px', color: '#ccc' }}>
            <span>{lang === 'ar' ? 'أو التسجيل عبر' : 'or sign up with'}</span>
          </div>

          {/* أزرار السوشيال ميديا */}
          <div className="social-icons-group" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '12px' }}>
            
            {/* Google */}
            <button type="button" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.34 7.22 24 12 24z"/>
                <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.39l4.08-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.18 2.66 1.19 6.61l4.08 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
              </svg>
            </button>

            {/* Facebook */}
            <button type="button" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#1877F2" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </button>

            {/* Twitter / X */}
            <button type="button" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#FFFFFF" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.933l-3.86-5.01-4.41 5.01H.27l5.747-6.575L0 .75h5.074l3.49 4.693L12.6.75zm-.866 13.02h1.366L4.323 2.14H2.865l8.869 11.63z"/>
              </svg>
            </button>

          </div>

          {/* العودة لصفحة تسجيل الدخول */}
          <div className="signup-link" style={{ textAlign: 'center' }}>
            {lang === 'ar' ? 'لديك حساب بالفعل؟' : 'Already have an account?'} <Link to="/login">{lang === 'ar' ? 'تسجيل الدخول' : 'Login'}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;