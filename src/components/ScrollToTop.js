import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ behavior = 'instant' }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Прокручиваем вверх при смене маршрута
    if (behavior === 'smooth') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Плавная прокрутка
      });
    } else {
      // Мгновенная прокрутка - более быстрая для навигации между страницами
      window.scrollTo(0, 0);
    }
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop; 