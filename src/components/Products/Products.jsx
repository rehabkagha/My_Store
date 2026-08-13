import React, { useState, useEffect } from "react";
import { useCart } from '../../context/CartContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast'; 
import { ShoppingCart, Star } from 'lucide-react'; 
import "./Products.css";

// استيراد الصور (من 1 إلى 52)
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
import product19 from '../../assets/images/product19.jpg';
import product20 from '../../assets/images/product20.jpg';
import product21 from '../../assets/images/product21.jpg';
import product22 from '../../assets/images/product22.jpg';
import product23 from '../../assets/images/product23.jpg';
import product24 from '../../assets/images/product24.jpg';
import product25 from '../../assets/images/product25.jpg';
import product26 from '../../assets/images/product26.jpg';
import product27 from '../../assets/images/product27.jpg';
import product28 from '../../assets/images/product28.jpg';
import product29 from '../../assets/images/product29.jpg';
import product30 from '../../assets/images/product30.jpg';
import product31 from '../../assets/images/product31.jpg';
import product32 from '../../assets/images/product32.jpg';
import product33 from '../../assets/images/product33.jpg';
import product34 from '../../assets/images/product34.jpg';
import product35 from '../../assets/images/product35.jpg';
import product36 from '../../assets/images/product36.jpg';
import product37 from '../../assets/images/product37.jpg';
import product38 from '../../assets/images/product38.jpg';
import product39 from '../../assets/images/product39.jpg';
import product40 from '../../assets/images/product40.jpg';
import product41 from '../../assets/images/product41.jpg';
import product42 from '../../assets/images/product42.jpg';
import product43 from '../../assets/images/product43.jpg';
import product44 from '../../assets/images/product44.jpg';
import product45 from '../../assets/images/product45.jpg';
import product46 from '../../assets/images/product46.jpg';
import product47 from '../../assets/images/product47.jpg';
import product48 from '../../assets/images/product48.jpg';
import product49 from '../../assets/images/product49.jpg';
import product50 from '../../assets/images/product50.jpg';
import product51 from '../../assets/images/product51.jpg';
import product52 from '../../assets/images/product52.jpg';

function Products() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

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

  const [products, setProducts] = useState([
    { id: 1, nameEn: "Casual White Tee & Denim Skirt", nameAr: "تيشيرت أبيض كاجوال مع جيبة جينز", price: "$17", image: product1, rating: 5, tags: "summer casual denim skirt white جيبه تيشرت" },
    { id: 2, nameEn: "Denim Jacket & Pleated Skirt Set", nameAr: "طقم جاكيت جينز مع جيبة بليسيه", price: "$34", image: product2, rating: 5, tags: "denim jacket skirt set casual جاكيت جيبه طقم" },
    { id: 3, nameEn: "Elegant White Top & Denim Midi Skirt", nameAr: "توب أبيض أنيق مع جيبة جينز ميدي", price: "$51", image: product3, rating: 5, tags: "elegant white top denim skirt توب جيبه" },
    { id: 4, nameEn: "Light Blue Shirt & Denim Skirt", nameAr: "قميص أزرق فاتح مع جيبة جينز", price: "$68", image: product4, rating: 5, tags: "shirt light blue denim skirt قميص جيبه" },
    { id: 5, nameEn: "Pink Oversized Shirt & Denim Skirt", nameAr: "قميص وردي واسع مع جيبة جينز", price: "$85", image: product5, rating: 5, tags: "pink oversized shirt denim قميص جيبه وردي" },
    { id: 6, nameEn: "Maroon Blouse & Denim Skirt", nameAr: "بلوزة نبيتي مع جيبة جينز", price: "$102", image: product6, rating: 5, tags: "maroon blouse denim skirt بلوزة جيبه" },
    { id: 7, nameEn: "Black Summer Evening Dress", nameAr: "فستان سهرة صيفي أسود", price: "$119", image: product7, rating: 5, tags: "summer dress evening black فستان سهرة أسود" },
    { id: 8, nameEn: "Denim Jacket & Dark Pleated Skirt", nameAr: "جاكيت جينز مع جيبة بليسيه غامقة", price: "$136", image: product8, rating: 5, tags: "denim jacket skirt dark جاكيت جيبه" },
    { id: 9, nameEn: "Formal Maroon Blouse & White Trousers", nameAr: "بلوزة فورمال نبيتي مع بنطلون أبيض", price: "$153", image: product9, rating: 5, tags: "formal maroon blouse trousers بنطلون بلوزة فورمال" },
    { id: 10, nameEn: "Sage Green Shirt & White Trousers", nameAr: "قميص أخضر ميرمية مع بنطلون أبيض", price: "$170", image: product10, rating: 5, tags: "sage green shirt white trousers قميص بنطلون" },
    { id: 11, nameEn: "Beige Loungewear Jogger Set", nameAr: "طقم بيجامة بيج مريح", price: "$17", image: product11, rating: 5, tags: "loungewear set jogger beige بيجامة طقم" },
    { id: 12, nameEn: "Elegant Linen Co-ord Set", nameAr: "طقم كتان صيفي أنيق", price: "$34", image: product12, rating: 5, tags: "elegant linen set summer طقم كتان صيفي" },
    { id: 13, nameEn: "Sleeveless Dark Summer Dress", nameAr: "فستان صيفي غامق بدون أكمام", price: "$51", image: product13, rating: 5, tags: "summer dress sleeveless فستان صيفي بدون أكمام" },
    { id: 14, nameEn: "Olive Green Summer Midi Dress", nameAr: "فستان ميدي صيفي أخضر زيتوني", price: "$68", image: product14, rating: 5, tags: "summer dress olive green فستان أخضر صيفي" },
    { id: 15, nameEn: "Sage Green Casual Summer Dress", nameAr: "فستان صيفي كاجوال أخضر ميرمية", price: "$85", image: product15, rating: 5, tags: "summer dress sage green فستان صيفي" },
    { id: 16, nameEn: "Chic Olive Green Jumpsuit", nameAr: "جمبسوت أخضر زيتوني أنيق", price: "$102", image: product16, rating: 5, tags: "jumpsuit chic olive green جمبسوت" },
    { id: 17, nameEn: "Classic Pink Jumpsuit", nameAr: "جمبسوت وردي كلاسيكي", price: "$119", image: product17, rating: 5, tags: "jumpsuit pink classic جمبسوت وردي" },
    { id: 18, nameEn: "Flowy Pastel Summer Dress", nameAr: "فستان صيفي واسع بألوان باستر", price: "$136", image: product18, rating: 5, tags: "flowy pastel dress summer فستان صيفي واسع" },
    
    // المنتجات المحدثة من 19 إلى 52 بناءً على الصور الجديدة
    { id: 19, nameEn: "Silver Classic Wrist Watch", nameAr: "ساعة يد كلاسيكية فضية أنيقة", price: "$45", image: product19, rating: 5, tags: "watch silver watch clock ساعة فضية" },
    { id: 20, nameEn: "Red Floral Bracelet", nameAr: "إسورة مزخرفة بوردات حمراء", price: "$50", image: product20, rating: 5, tags: "bracelet red floral flowers اسورة ورود" },
    { id: 21, nameEn: "Minimalist White & Gold Rings Set", nameAr: "مجموعة خواتم عصرية باللونين الأبيض والذهبي", price: "$55", image: product21, rating: 5, tags: "rings gold white accessories خواتم" },
    { id: 22, nameEn: "Chic Resin Bangle Bracelets", nameAr: "أساور ريزين عصرية أنيقة", price: "$60", image: product22, rating: 5, tags: "bangles bracelets resin أساور ريزين" },
    { id: 23, nameEn: "Pastel Flower Statement Bracelet", nameAr: "إسورة عريضة مرصعة بزهور باستيل ملونة", price: "$65", image: product23, rating: 5, tags: "bracelet flowers pastel اسورة زهور" },
    { id: 24, nameEn: "Floral Long Chain Necklace", nameAr: "سلسلة طويلة بتصميم زهور رقيقة", price: "$70", image: product24, rating: 5, tags: "necklace floral chain سلسلة طويلة" },
    { id: 25, nameEn: "Quilted White Mini Wallet", nameAr: "محفظة صغيرة مبطنة باللون الأبيض مع فيونكة", price: "$75", image: product25, rating: 5, tags: "wallet white mini quilted محفظة بيضاء" },
    { id: 26, nameEn: "Golden Floral Cuff Bracelet", nameAr: "إسورة كف ذهبية بتصميم زهور بارزة", price: "$80", image: product26, rating: 5, tags: "cuff bracelet gold floral اسورة ذهبية" },
    { id: 27, nameEn: "Printed Small Card Holder", nameAr: "حافظة كروت صغيرة بنقوش رقيقة", price: "$85", image: product27, rating: 5, tags: "card holder wallet حافظة كروت" },
    { id: 28, nameEn: "Elegant Glass Perfume Bottle", nameAr: "زجاجة عطر زجاجية بتصميم راقي", price: "$90", image: product28, rating: 5, tags: "perfume bottle glass عطر زجاجي" },
    { id: 29, nameEn: "Luxury Designer Fragrance", nameAr: "عطر فاخر بتصميم عصري مميز", price: "$95", image: product29, rating: 5, tags: "perfume luxury fragrance عطر فاخر" },
    { id: 30, nameEn: "Classic Beige Shoulder Bag", nameAr: "حقيبة كتف بيج كلاسيكية مع حزام عريض", price: "$100", image: product30, rating: 5, tags: "bag shoulder beige حقيبة بيج" },
    { id: 31, nameEn: "Golden Summer Floral Perfume", nameAr: "عطر صيفي برائحة الزهور ومنعشة", price: "$40", image: product31, rating: 5, tags: "perfume summer floral عطر صيفي" },
    { id: 32, nameEn: "Bow-Design Pink Perfume", nameAr: "عطر وردي بتصميم زجاجة على شكل فيونكة", price: "$45", image: product32, rating: 5, tags: "perfume pink bow عطر فيونكة" },
    { id: 33, nameEn: "Scented Pink Body Splash", nameAr: "سبلاش للجسم برائحة وردية منعشة", price: "$50", image: product33, rating: 5, tags: "body splash pink perfume سبلاش وردي" },
    { id: 34, nameEn: "Signature Rose Perfume", nameAr: "عطر برائحة الروز الجذاب", price: "$55", image: product34, rating: 5, tags: "perfume rose عطر الروز" },
    { id: 35, nameEn: "Minimalist Black Handbag", nameAr: "حقيبة يد سوداء بتصميم بسيط وأنيق", price: "$60", image: product35, rating: 5, tags: "bag black handbag حقيبة سوداء" },
    { id: 36, nameEn: "Blooming Pink Floral Perfume", nameAr: "عطر نسائي مزين بوردات وردية طبيعية", price: "$65", image: product36, rating: 5, tags: "perfume floral pink عطر نسائي" },
    { id: 37, nameEn: "Men's Classic Dark Perfume", nameAr: "عطر رجالي كلاسيكي داكن وفخم", price: "$70", image: product37, rating: 5, tags: "perfume men dark عطر رجالي" },
    { id: 38, nameEn: "Slim Gold Leather Watch", nameAr: "ساعة يد نسائية رفيعة بسير جلدي بني وأطار ذهبي", price: "$75", image: product38, rating: 5, tags: "watch gold leather slim ساعة نسائية" },
    { id: 39, nameEn: "Rose Gold Metal Strap Watch", nameAr: "ساعة يد أنيقة بسير معدني بلون روز جولد", price: "$80", image: product39, rating: 5, tags: "watch rose gold metal ساعة روز جولد" },
    { id: 40, nameEn: "Delicate Pink Dial Watch", nameAr: "ساعة نسائية بمينا وردي وسير مرصع", price: "$85", image: product40, rating: 5, tags: "watch pink dial delicate ساعة وردية" },
    { id: 41, nameEn: "Chain-Link Elegant Gold Watch", nameAr: "ساعة ذهبية بتصميم سلسلة مترابطة فاخرة", price: "$90", image: product41, rating: 5, tags: "watch chain link gold ساعة ذهبية" },
    { id: 42, nameEn: "Bow-Accented Romantic Perfume", nameAr: "عطر رومانسي مزين بفيونكة رقيقة", price: "$95", image: product42, rating: 5, tags: "perfume bow romantic عطر رومانسي" },
    { id: 43, nameEn: "Classic Leather Strap Watch", nameAr: "ساعة كلاسيكية بسير جلدي بيج وإطار ذهبي وردي", price: "$100", image: product43, rating: 5, tags: "watch leather strap classic ساعة جلد" },
    { id: 44, nameEn: "Slim Golden Metal Watch", nameAr: "ساعة ذهبية رفيعة بتصميم كلاسيكي ناعم", price: "$105", image: product44, rating: 5, tags: "watch slim gold ساعة ذهبية رفيعة" },
    { id: 45, nameEn: "Vintage Gold Oval Watch", nameAr: "ساعة كلاسيكية بتصميم بيضاوي عتيق", price: "$110", image: product45, rating: 5, tags: "watch vintage gold oval ساعة عتيقة" },
    { id: 46, nameEn: "Classic Silver Expansion Watch", nameAr: "ساعة فضية عملية بسير مرن مريح", price: "$115", image: product46, rating: 5, tags: "watch silver expansion ساعة فضية مرنة" },
    { id: 47, nameEn: "Chic Beige Crossbody Bag", nameAr: "حقيبة كروس بيج أنيقة بحمالة سلسلة", price: "$120", image: product47, rating: 5, tags: "bag crossbody beige حقيبة كروس" },
    { id: 48, nameEn: "Brown Leather Vintage Watch", nameAr: "ساعة عتيقة بسير جلدي بني دافئ", price: "$125", image: product48, rating: 5, tags: "watch brown leather vintage ساعة بنية" },
    { id: 49, nameEn: "Compact Olive Crossbody Bag", nameAr: "حقيبة كروس زيتوني صغيرة عملية", price: "$130", image: product49, rating: 5, tags: "bag olive crossbody حقيبة زيتوني" },
    { id: 50, nameEn: "Elegant Saddle Bag with Silk Scarf", nameAr: "حقيبة سرج أنيقة مزينة بإسكارف حريري", price: "$135", image: product50, rating: 5, tags: "bag saddle scarf حقيبة سرج" },
    { id: 51, nameEn: "Minimalist Dark Brown Hobo Bag", nameAr: "حقيبة هوبو بني داكن بتصميم بسيط", price: "$140", image: product51, rating: 5, tags: "bag hobo brown حقيبة هوبو" },
    { id: 52, nameEn: "Black Butterfly Statement Wallet", nameAr: "محفظة سوداء أنيقة مزينة بفراشة ذهبية", price: "$145", image: product52, rating: 5, tags: "wallet black butterfly محفظة سوداء" },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // تحديث النتائج فوراً عند تغير كلمة البحث في الرابط
  useEffect(() => {
    const term = searchQuery.toLowerCase().trim();
    if (term === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(p => 
        p.nameEn.toLowerCase().includes(term) || 
        p.nameAr.toLowerCase().includes(term) || 
        p.tags.toLowerCase().includes(term)
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  // دالة تقييم النجوم
  const handleRating = (productId, newRating) => {
    setProducts(products.map(prod => {
      if (prod.id === productId) {
        return { ...prod, rating: newRating };
      }
      return prod;
    }));
  };

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      name: lang === 'ar' ? product.nameAr : product.nameEn
    });
    toast.success(lang === 'ar' ? 'تم الإضافة إلى السلة بنجاح!' : 'Added to cart successfully!', {
      style: { background: '#1e1b4b', color: '#fff' },
    });
  };

  return (
    <section 
      id="products-section" 
      className="products-section py-5"
      style={{ direction: lang === 'ar' ? 'rtl' : 'ltr', textAlign: lang === 'ar' ? 'right' : 'left' }}
    >
      <div className="container-fluid px-4">
        <h2 className="text-center fw-bold mb-2 products-title">
          {searchQuery 
            ? (lang === 'ar' ? `نتائج البحث عن "${searchQuery}"` : `Results for "${searchQuery}"`) 
            : (lang === 'ar' ? 'المنتجات المميزة' : 'Featured Products')}
        </h2>
        <p className="text-center text-muted mb-5">
          {lang === 'ar' ? 'التشكيلة الصيفية - أحدث التصاميم العصرية' : 'Summer Collection New Modern Design'}
        </p>
        
        <div className="row g-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="card product-card h-100 p-2 border-0 shadow-sm">
                  
                  <div 
                    className="product-img-wrapper"
                    style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px' }}
                    onClick={() => navigate(`/product/${product.id}`, { state: { product: { ...product, name: lang === 'ar' ? product.nameAr : product.nameEn } } })}
                  >
                    <img 
                      src={product.image} 
                      alt={lang === 'ar' ? product.nameAr : product.nameEn} 
                      className="card-img-top product-img"
                      style={{ transition: 'transform 0.3s ease', objectFit: 'contain', height: '220px', width: '100%', backgroundColor: '#f8f9fa' }}
                    />
                  </div>

                  <div className="card-body px-2 pt-3 pb-2 d-flex flex-column justify-content-between">
                    <div>
                      <span className="store-badge d-block mb-1" style={{ fontSize: '11px', color: '#db2777' }}>
                        {lang === 'ar' ? 'متجري' : 'My Store'}
                      </span>
                      <h5 
                        className="product-name fw-bold" 
                        style={{ cursor: 'pointer', fontSize: '16px' }}
                        onClick={() => navigate(`/product/${product.id}`, { state: { product: { ...product, name: lang === 'ar' ? product.nameAr : product.nameEn } } })}
                      >
                        {lang === 'ar' ? product.nameAr : product.nameEn}
                      </h5>
                      
                      <div className={`rating-stars mb-2 d-flex gap-1 ${lang === 'ar' ? 'justify-content-start' : ''}`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star}
                            size={14}
                            fill={star <= product.rating ? "#eab308" : "transparent"}
                            color={star <= product.rating ? "#eab308" : "#d1d5db"}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleRating(product.id, star)}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="product-price fw-bold">{product.price}</span>
                      <button 
                        className="cart-icon-btn" 
                        onClick={() => handleAddToCart(product)}
                        style={{ 
                          cursor: 'pointer', border: 'none', background: '#fce7f3', 
                          padding: '8px', borderRadius: '50%', color: '#db2777',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center w-100 py-5">
              <p className="text-muted fs-5">
                {lang === 'ar' ? 'لا توجد منتجات تطابق بحثك.' : 'No products match your search.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;