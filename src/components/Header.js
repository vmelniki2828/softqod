import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaDesktop,
  FaMobile,
  FaDatabase,
  FaPalette,
  FaPencilRuler,
  FaBullhorn,
  FaSearch,
  FaChartBar,
  FaUsers,
  FaStore,
  FaGlobe,
  FaCogs,
  FaLaptopCode,
  FaPaintBrush,
  FaFont,
  FaBook,
} from 'react-icons/fa';
import BurgerMenu from './BurgerMenu';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(11, 30, 43, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-color);
  height: 80px;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--logo-color);
  text-shadow: 0 0 10px rgba(74, 144, 226, 0.3);
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: absolute;
  left: 2rem;

  &:hover {
    color: var(--accent-color);
    text-shadow: 0 0 15px rgba(74, 144, 226, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    position: static;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.5rem 0;
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.75rem 1.25rem;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  position: relative;
  z-index: 1;

  &:hover {
    color: var(--accent-color);
  }

  &.active {
    color: var(--accent-color);
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--accent-color);
    }
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1rem;
  min-width: 300px;
  z-index: 1000;
  margin-top: -0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  font-size: 0.95rem;

  svg {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
  }

  &:hover {
    background: var(--bg-primary);
    color: var(--accent-color);
    transform: translateX(5px);
  }

  &.active {
    background: var(--bg-primary);
    color: var(--accent-color);
  }

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
  }
`;

const DesktopMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 2rem;

  @media (min-width: 769px) {
    display: block;
  }
`;



const HeaderNavigation = () => {
  const location = useLocation();
  const [activeBlock, setActiveBlock] = useState(null);

  return (
    <Nav>
      <NavItem
        onMouseEnter={() => setActiveBlock('development')}
        onMouseLeave={() => setActiveBlock(null)}
      >
        <NavLink className={location.pathname.startsWith('/services/development') ? 'active' : ''}>
          Разработка
        </NavLink>
        {activeBlock === 'development' && (
          <DropdownMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownItem to="/services/development/pwa">
              <FaLaptopCode />
              PWA (Progressive Web Apps)
            </DropdownItem>
            <DropdownItem to="/services/development/automation">
              <FaCogs />
              Автоматизация и оптимизация бизнес-процессов
            </DropdownItem>
            <DropdownItem to="/services/development/erp">
              <FaDatabase />
              ERP и CRM системы
            </DropdownItem>
            <DropdownItem to="/services/development/ecommerce">
              <FaStore />
              Интернет-магазины
            </DropdownItem>
            <DropdownItem to="/services/development/landing">
              <FaGlobe />
              Одностраничные сайты (landing page)
            </DropdownItem>
            <DropdownItem to="/services/development/mobile">
              <FaMobile />
              Мобильные приложения
            </DropdownItem>
          </DropdownMenu>
        )}
      </NavItem>
      <NavItem
        onMouseEnter={() => setActiveBlock('design')}
        onMouseLeave={() => setActiveBlock(null)}
      >
        <NavLink className={location.pathname.startsWith('/services/design') ? 'active' : ''}>
          Дизайн
        </NavLink>
        {activeBlock === 'design' && (
          <DropdownMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownItem to="/services/design/banners">
              <FaPaintBrush />
              Рекламные Банера
            </DropdownItem>
            <DropdownItem to="/design/brandbook">
              <FaBook />
              Бренд Бук
            </DropdownItem>
            <DropdownItem to="/design/web">
              <FaDesktop />
              Веб Дизайн
            </DropdownItem>
            <DropdownItem to="/design/ui-ux">
              <FaPalette />
              UX/UI дизайн
            </DropdownItem>
            <DropdownItem to="/design/typography">
              <FaFont />
              Типографика и леттеринг
            </DropdownItem>
            <DropdownItem to="/design/branding">
              <FaPencilRuler />
              Разработка фирменного стиля
            </DropdownItem>
          </DropdownMenu>
        )}
      </NavItem>
      <NavItem
        onMouseEnter={() => setActiveBlock('marketing')}
        onMouseLeave={() => setActiveBlock(null)}
      >
        <NavLink className={location.pathname.startsWith('/services/marketing') ? 'active' : ''}>
          Маркетинг
        </NavLink>
        {activeBlock === 'marketing' && (
          <DropdownMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownItem to="/services/marketing/banners">
              <FaBullhorn />
              Банерная реклама на сайтах
            </DropdownItem>
            <DropdownItem to="/marketing/smm">
              <FaUsers />
              SMM
            </DropdownItem>
            <DropdownItem to="/marketing/context-ads">
              <FaChartBar />
              Контекстная реклама
            </DropdownItem>
            <DropdownItem to="/marketing/seo">
              <FaSearch />
              Seo Оптимизация
            </DropdownItem>
            <DropdownItem to="/marketing/target-ads">
              <FaBullhorn />
              Таргетированная реклама
            </DropdownItem>
            <DropdownItem to="/marketing/audit">
              <FaChartBar />
              Маркетинговый аудит
            </DropdownItem>
          </DropdownMenu>
        )}
      </NavItem>
    </Nav>
  );
};

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  
  // Обработчик закрытия меню
  const handleCloseMenu = () => {
    setIsOverlayOpen(false);
    // Явно сбрасываем стиль overflow с небольшой задержкой
    setTimeout(() => {
      document.body.style.overflow = '';
    }, 50);
  };

  // Обработчик открытия меню
  const handleOpenMenu = () => {
    setIsOverlayOpen(true);
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      
      // Управление стилем overflow для body при открытии/закрытии меню
      if (isOverlayOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        // Вместо немедленного сброса, даем анимации немного времени на завершение
        setTimeout(() => {
          document.body.style.overflow = '';
        }, 50);
      }
      
      if (window.scrollY > 50) {
        header.style.background = 'rgba(6, 20, 27, 0.95)';
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      } else {
        header.style.background = 'rgba(11, 30, 43, 0.85)';
        header.style.boxShadow = 'none';
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Гарантируем, что overflow сбрасывается при размонтировании
      document.body.style.overflow = '';
    };
  }, [isOverlayOpen]);

  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderContent>
        <Logo whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            softqod
          </Link>
        </Logo>

        <HeaderNavigation />

        <DesktopMenuButton
          onClick={handleOpenMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars />
        </DesktopMenuButton>
      </HeaderContent>

      <BurgerMenu
        isOpen={isOverlayOpen}
        onClose={handleCloseMenu}
      />
    </HeaderContainer>
  );
};

export default Header;
