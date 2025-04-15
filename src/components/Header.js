import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
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

const NavLink = styled(motion.a)`
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

const DropdownItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.75rem 1rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  font-size: 0.95rem;

  &:hover {
    background: var(--bg-primary);
    color: var(--accent-color);
    transform: translateX(5px);
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

// const FullScreenOverlay = styled(motion.div)`
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 100vw;
//   height: 100vh;
//   background: var(--bg-primary);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   z-index: 2000;
//   overflow-y: auto;
//   padding: 2rem;
//   opacity: 0;
//   pointer-events: none;
//   transition: opacity 0.3s ease;

//   &.active {
//     opacity: 1;
//     pointer-events: auto;
//   }

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `;

// const OverlayContent = styled(motion.div)`
//   width: 100%;
//   max-width: 1200px;
//   display: flex;
//   flex-direction: column;
//   gap: 2rem;
// `;

// const OverlaySection = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
// `;

// const OverlayTitle = styled.h3`
//   font-size: 2rem;
//   color: var(--accent-color);
//   margin-bottom: 1rem;
// `;

// const OverlayLink = styled(motion.a)`
//   color: var(--text-primary);
//   text-decoration: none;
//   font-size: 1.2rem;
//   padding: 0.5rem;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   gap: 1rem;

//   &:hover {
//     color: var(--accent-color);
//     transform: translateX(10px);
//   }
// `;

// const CloseButton = styled(motion.button)`
//   position: absolute;
//   top: 2rem;
//   right: 2rem;
//   background: none;
//   border: none;
//   color: var(--text-primary);
//   font-size: 2rem;
//   cursor: pointer;
//   transition: all 0.3s ease;

//   &:hover {
//     color: var(--accent-color);
//     transform: rotate(90deg);
//   }
// `;

// const IconWrapper = styled.div`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--accent-color);
//   font-size: 1.1rem;

//   @media (max-width: 768px) {
//     font-size: 1rem;
//   }
// `;

// const MenuBlock = styled(motion.div)`
//   background: var(--bg-secondary);
//   border: 1px solid var(--border-color);
//   border-radius: 12px;
//   padding: 1.5rem;
//   width: 100%;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;

//   &:hover {
//     border-color: var(--accent-color);
//     transform: translateY(-5px);
//   }
// `;

// const MenuBlockHeader = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   margin-bottom: 1rem;
// `;

// const MenuBlockIcon = styled.div`
//   width: 48px;
//   height: 48px;
//   background: var(--bg-primary);
//   border-radius: 12px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--accent-color);
//   font-size: 1.5rem;
// `;

// const MenuBlockTitle = styled.h3`
//   color: var(--text-primary);
//   font-size: 1.5rem;
//   margin: 0;
// `;

// const MenuBlockContent = styled(motion.div)`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;
//   padding-top: 1rem;
//   border-top: 1px solid var(--border-color);
// `;

// const MenuBlockLink = styled(motion.a)`
//   color: var(--text-secondary);
//   text-decoration: none;
//   padding: 0.5rem;
//   border-radius: 8px;
//   transition: all 0.3s ease;
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;

//   &:hover {
//     background: var(--bg-primary);
//     color: var(--accent-color);
//     transform: translateX(5px);
//   }
// `;

// const MenuBlockIconSmall = styled.div`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--accent-color);
// `;

const HeaderNavigation = () => {
  const [activeBlock, setActiveBlock] = useState(null);

  return (
    <Nav>
      <NavItem
        onMouseEnter={() => setActiveBlock('development')}
        onMouseLeave={() => setActiveBlock(null)}
      >
        <NavLink href="#development">Разработка</NavLink>
        {activeBlock === 'development' && (
          <DropdownMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownItem href="/services/development/pwa">
              <FaLaptopCode />
              PWA (Progressive Web Apps)
            </DropdownItem>
            <DropdownItem href="#automation">
              <FaCogs />
              Автоматизация и оптимизация бизнес-процессов
            </DropdownItem>
            <DropdownItem href="#erp">
              <FaDatabase />
              ERP и CRM системы
            </DropdownItem>
            <DropdownItem href="#ecommerce">
              <FaStore />
              Интернет-магазины
            </DropdownItem>
            <DropdownItem href="#landing">
              <FaGlobe />
              Одностраничные сайты (landing page)
            </DropdownItem>
            <DropdownItem href="#mobile">
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
        <NavLink href="#design">Дизайн</NavLink>
        {activeBlock === 'design' && (
          <DropdownMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownItem href="#banners">
              <FaPaintBrush />
              Рекламные Банера
            </DropdownItem>
            <DropdownItem href="#brandbook">
              <FaBook />
              Бренд Бук
            </DropdownItem>
            <DropdownItem href="#web-design">
              <FaDesktop />
              Веб Дизайн
            </DropdownItem>
            <DropdownItem href="#ui-ux">
              <FaPalette />
              UX/UI дизайн
            </DropdownItem>
            <DropdownItem href="#typography">
              <FaFont />
              Типографика и леттеринг
            </DropdownItem>
            <DropdownItem href="#branding">
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
        <NavLink href="#marketing">Маркетинг</NavLink>
        {activeBlock === 'marketing' && (
          <DropdownMenu
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <DropdownItem href="#banner-ads">
              <FaBullhorn />
              Банерная реклама на сайтах
            </DropdownItem>
            <DropdownItem href="#smm">
              <FaUsers />
              SMM
            </DropdownItem>
            <DropdownItem href="#context-ads">
              <FaChartBar />
              Контекстная реклама
            </DropdownItem>
            <DropdownItem href="#seo">
              <FaSearch />
              Seo Оптимизация
            </DropdownItem>
            <DropdownItem href="#target-ads">
              <FaBullhorn />
              Таргетированная реклама
            </DropdownItem>
            <DropdownItem href="#marketing-audit">
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
          softqod
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
