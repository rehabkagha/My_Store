import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="login-card">
        <div className="login-header">
          <h2>{lang === 'ar' ? 'مرحباً بعودتك' : 'Welcome Back'}</h2>
          <p>{lang === 'ar' ? 'الرجاء تسجيل الدخول إلى حساب الأزياء الخاص بك' : 'Please login to your fashion account'}</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* حقل اسم المستخدم */}
          <div className="input-group-custom">
            <input 
              type="text" 
              placeholder={lang === 'ar' ? 'اسم المستخدم أو البريد الإلكتروني' : 'User Name or Email'} 
              required 
            />
            <span className={`input-icon ${lang === 'ar' ? 'left-icon' : ''}`} style={lang === 'ar' ? { left: '15px', right: 'auto' } : {}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 z"/>
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
              </svg>
            </span>
          </div>

          {/* زر تذكرني */}
          <div className="remember-me">
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" /> {lang === 'ar' ? 'تذكرني' : 'Remember me'}
            </label>
          </div>

          {/* زر الدخول */}
          <button type="submit" className="login-submit-btn">
            {lang === 'ar' ? 'تسجيل الدخول' : 'Login'}
          </button>

          {/* خط فاصل */}
          <div className="social-divider" style={{ textAlign: 'center', margin: '15px 0', fontSize: '13px', color: '#ccc' }}>
            <span>{lang === 'ar' ? 'أو المتابعة عبر' : 'or connect with'}</span>
          </div>

          {/* أزرار السوشيال ميديا */}
          <div className="social-icons-group" style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '15px' }}>
            
            {/* Google Icon */}
            <button type="button" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.13 0-5.78-2.11-6.73-4.96H1.19v3.15C3.18 21.34 7.22 24 12 24z"/>
                <path fill="#FBBC05" d="M5.27 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.39l4.08-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.22 0 3.18 2.66 1.19 6.61l4.08 3.15c.95-2.85 3.6-4.96 6.73-4.96z"/>
              </svg>
            </button>

            {/* Facebook Icon */}
            <button type="button" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#1877F2" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </button>

            {/* Twitter / X Icon */}
            <button type="button" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)', borderRadius: '50%', width: '42px', height: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFFFFF" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.933l-3.86-5.01-4.41 5.01H.27l5.747-6.575L0 .75h5.074l3.49 4.693L12.6.75zm-.866 13.02h1.366L4.323 2.14H2.865l8.869 11.63z"/>
              </svg>
            </button>

          </div>

          {/* رابط التسجيل */}
          <div className="signup-link" style={{ textAlign: 'center' }}>
            {lang === 'ar' ? 'ليس لديك حساب؟' : "Don't have an account?"} <Link to="/register">{lang === 'ar' ? 'إنشاء حساب' : 'Sign up'}</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;