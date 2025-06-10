import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaTimes,
  FaLaptopCode,
  FaCogs,
  FaDatabase,
  FaStore,
  FaGlobe,
  FaMobile,
  FaPalette,
  FaPaintBrush,
  FaBook,
  FaDesktop,
  FaFont,
  FaPencilRuler,
  FaBullhorn,
  FaUsers,
  FaChartBar,
  FaSearch,
  FaCode,
  FaChartLine,
  FaBookOpen,
  FaGraduationCap,
  FaFileAlt,
  FaBuilding,
  FaRobot,
  FaImage,
  FaVideo,
  FaCube,
  FaChartPie,
  FaBox,
  FaCamera,
  FaInstagram,
  FaEnvelope,
  FaChartArea,
  FaClipboardList,
} from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const FullScreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--bg-primary);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  overflow: hidden;
  visibility: hidden;

  &.active {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }
`;

const CloseButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: var(--bg-secondary);
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  opacity: 1;
  transition: all 0.2s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.9;
    background: var(--accent-color);
    color: var(--bg-primary);
    box-shadow: 0 5px 20px rgba(74, 144, 226, 0.3);
  }
`;

const OverlayContent = styled(motion.div)`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 2rem;
`;

const MenuBlock = styled(motion.div)`
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const MenuBlockHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const MenuBlockIcon = styled.div`
  width: 40px;
  height: 40px;
  background: var(--bg-primary);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.25rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const MenuBlockTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.25rem;
  margin: 0;
`;

const MenuBlockContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  overflow: hidden;
`;

const MenuBlockLink = styled(Link)`
  color: var(--text-secondary);
  text-decoration: none;
  padding: 0.75rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  min-height: 60px;
  font-size: 0.95rem;

  &:hover {
    background: var(--accent-color);
    color: var(--bg-primary);
    transform: translateY(-2px);
    border-color: var(--accent-color);
    box-shadow: 0 5px 15px rgba(74, 144, 226, 0.2);
  }
`;

const MenuBlockIconSmall = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 0.5rem;
  flex-shrink: 0;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);

  svg {
    width: 16px;
    height: 16px;
  }
`;

const BurgerMenu = ({ isOpen, onClose }) => {
  const [activeBlock, setActiveBlock] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) {
      setActiveBlock(null);
      setIsAnimating(true);

      setTimeout(() => {
        document.body.style.overflow = '';
        setIsAnimating(false);
      }, 300);
    } else {
      const handleEscClose = () => {
        setIsAnimating(true);

        onClose();

        setTimeout(() => {
          document.body.style.overflow = '';
          setIsAnimating(false);
        }, 300);
      };

      const handleEscKey = e => {
        if (e.key === 'Escape') {
          handleEscClose();
        }
      };

      window.addEventListener('keydown', handleEscKey);

      return () => {
        window.removeEventListener('keydown', handleEscKey);
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleClose = () => {
    setIsAnimating(true);

    onClose();

    setTimeout(() => {
      document.body.style.overflow = '';
      setIsAnimating(false);
    }, 300);
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleLinkClick = (e, to) => {
    e.preventDefault();
    handleClose();
    setTimeout(() => {
      navigate(to);
    }, 300);
  };

  return (
    <FullScreenOverlay
      className={isOpen ? 'active' : isAnimating ? 'inactive' : ''}
      onClick={handleOverlayClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <CloseButton onClick={handleClose} whileTap={{ scale: 0.9 }}>
        <FaTimes />
      </CloseButton>
      <OverlayContent onClick={e => e.stopPropagation()}>
        <MenuBlock
          onMouseEnter={() => setActiveBlock('development')}
          onMouseLeave={() => setActiveBlock(null)}
        >
          <MenuBlockHeader>
            <MenuBlockIcon>
              <FaLaptopCode />
            </MenuBlockIcon>
            <MenuBlockTitle>Разработка</MenuBlockTitle>
          </MenuBlockHeader>
          <MenuBlockContent
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeBlock === 'development' ? 'auto' : 0,
              opacity: activeBlock === 'development' ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <MenuBlockLink
              to="/services/development/pwa"
              onClick={e => handleLinkClick(e, '/services/development/pwa')}
            >
              <MenuBlockIconSmall>
                <FaLaptopCode />
              </MenuBlockIconSmall>
              PWA (Progressive Web Apps)
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/API"
              onClick={e => handleLinkClick(e, '/services/development/API')}
            >
              <MenuBlockIconSmall>
                <FaCode />
              </MenuBlockIconSmall>
              API разработка
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/bigdata"
              onClick={e => handleLinkClick(e, '/services/development/bigdata')}
            >
              <MenuBlockIconSmall>
                <FaChartLine />
              </MenuBlockIconSmall>
              Big Data и аналитика
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/automation"
              onClick={e =>
                handleLinkClick(e, '/services/development/automation')
              }
            >
              <MenuBlockIconSmall>
                <FaCogs />
              </MenuBlockIconSmall>
              Автоматизация и оптимизация бизнес-процессов
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/journals"
              onClick={e =>
                handleLinkClick(e, '/services/development/journals')
              }
            >
              <MenuBlockIconSmall>
                <FaBookOpen />
              </MenuBlockIconSmall>
              Разработка электронных журналов и систем учёта
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/education"
              onClick={e =>
                handleLinkClick(e, '/services/development/education')
              }
            >
              <MenuBlockIconSmall>
                <FaGraduationCap />
              </MenuBlockIconSmall>
              Платформы для онлайн-образования
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/document"
              onClick={e =>
                handleLinkClick(e, '/services/development/document')
              }
            >
              <MenuBlockIconSmall>
                <FaFileAlt />
              </MenuBlockIconSmall>
              Системы документооборота
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/erp"
              onClick={e => handleLinkClick(e, '/services/development/erp')}
            >
              <MenuBlockIconSmall>
                <FaDatabase />
              </MenuBlockIconSmall>
              ERP и CRM системы
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/corporate"
              onClick={e =>
                handleLinkClick(e, '/services/development/corporate')
              }
            >
              <MenuBlockIconSmall>
                <FaBuilding />
              </MenuBlockIconSmall>
              Корпоративные сайты
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/ecommerce"
              onClick={e =>
                handleLinkClick(e, '/services/development/ecommerce')
              }
            >
              <MenuBlockIconSmall>
                <FaStore />
              </MenuBlockIconSmall>
              Интернет-магазины
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/landing"
              onClick={e => handleLinkClick(e, '/services/development/landing')}
            >
              <MenuBlockIconSmall>
                <FaGlobe />
              </MenuBlockIconSmall>
              Одностраничные сайты (landing page)
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/mobile"
              onClick={e => handleLinkClick(e, '/services/development/mobile')}
            >
              <MenuBlockIconSmall>
                <FaMobile />
              </MenuBlockIconSmall>
              Мобильные приложения
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/development/AI"
              onClick={e => handleLinkClick(e, '/services/development/AI')}
            >
              <MenuBlockIconSmall>
                <FaRobot />
              </MenuBlockIconSmall>
              ИИ
            </MenuBlockLink>
          </MenuBlockContent>
        </MenuBlock>

        <MenuBlock
          onMouseEnter={() => setActiveBlock('design')}
          onMouseLeave={() => setActiveBlock(null)}
        >
          <MenuBlockHeader>
            <MenuBlockIcon>
              <FaPalette />
            </MenuBlockIcon>
            <MenuBlockTitle>Дизайн</MenuBlockTitle>
          </MenuBlockHeader>
          <MenuBlockContent
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeBlock === 'design' ? 'auto' : 0,
              opacity: activeBlock === 'design' ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <MenuBlockLink
              to="/services/design/bannerads"
              onClick={e => handleLinkClick(e, '/services/design/bannerads')}
            >
              <MenuBlockIconSmall>
                <FaPaintBrush />
              </MenuBlockIconSmall>
              Рекламные Банера
            </MenuBlockLink>
            <MenuBlockLink
              href="#motion"
              onClick={e => handleLinkClick(e, '#motion')}
            >
              <MenuBlockIconSmall>
                <FaVideo />
              </MenuBlockIconSmall>
              Моушен дизайн
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/design/brandbook"
              onClick={e => handleLinkClick(e, '/services/design/brandbook')}
            >
              <MenuBlockIconSmall>
                <FaBook />
              </MenuBlockIconSmall>
              Бренд Бук
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/design/webdesign"
              onClick={e => handleLinkClick(e, '/services/design/webdesign')}
            >
              <MenuBlockIconSmall>
                <FaDesktop />
              </MenuBlockIconSmall>
              Веб дизайн
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/design/uxuidesign"
              onClick={e => handleLinkClick(e, '/services/design/uxuidesign')}
            >
              <MenuBlockIconSmall>
                <FaPalette />
              </MenuBlockIconSmall>
              UX/UI дизайн
            </MenuBlockLink>
            <MenuBlockLink
              href="#illustrations"
              onClick={e => handleLinkClick(e, '#illustrations')}
            >
              <MenuBlockIconSmall>
                <FaPaintBrush />
              </MenuBlockIconSmall>
              Иллюстрации и иконографика
            </MenuBlockLink>
            <MenuBlockLink href="#3d" onClick={e => handleLinkClick(e, '#3d')}>
              <MenuBlockIconSmall>
                <FaCube />
              </MenuBlockIconSmall>
              3D моделирование и визуализация
            </MenuBlockLink>
            <MenuBlockLink
              href="#infographics"
              onClick={e => handleLinkClick(e, '#infographics')}
            >
              <MenuBlockIconSmall>
                <FaChartPie />
              </MenuBlockIconSmall>
              Инфографика
            </MenuBlockLink>
            <MenuBlockLink
              href="#package"
              onClick={e => handleLinkClick(e, '#package')}
            >
              <MenuBlockIconSmall>
                <FaBox />
              </MenuBlockIconSmall>
              Пакетный дизайн
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/design/typography_lettering"
              onClick={e =>
                handleLinkClick(e, '/services/design/typography_lettering')
              }
            >
              <MenuBlockIconSmall>
                <FaFont />
              </MenuBlockIconSmall>
              Типографика и леттеринг
            </MenuBlockLink>
            <MenuBlockLink
              href="#social"
              onClick={e => handleLinkClick(e, '#social')}
            >
              <MenuBlockIconSmall>
                <FaInstagram />
              </MenuBlockIconSmall>
              Социальные медиа дизайн
            </MenuBlockLink>
            <MenuBlockLink
              href="#animation"
              onClick={e => handleLinkClick(e, '#animation')}
            >
              <MenuBlockIconSmall>
                <FaVideo />
              </MenuBlockIconSmall>
              Анимация и видео дизайн
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/design/branding"
              onClick={e => handleLinkClick(e, '/services/design/branding')}
            >
              <MenuBlockIconSmall>
                <FaPencilRuler />
              </MenuBlockIconSmall>
              Разработка фирменного стиля
            </MenuBlockLink>
            <MenuBlockLink
              href="#retouch"
              onClick={e => handleLinkClick(e, '#retouch')}
            >
              <MenuBlockIconSmall>
                <FaCamera />
              </MenuBlockIconSmall>
              Ретушь и обработка фотографий
            </MenuBlockLink>
          </MenuBlockContent>
        </MenuBlock>

        <MenuBlock
          onMouseEnter={() => setActiveBlock('marketing')}
          onMouseLeave={() => setActiveBlock(null)}
        >
          <MenuBlockHeader>
            <MenuBlockIcon>
              <FaBullhorn />
            </MenuBlockIcon>
            <MenuBlockTitle>Маркетинг</MenuBlockTitle>
          </MenuBlockHeader>
          <MenuBlockContent
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: activeBlock === 'marketing' ? 'auto' : 0,
              opacity: activeBlock === 'marketing' ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <MenuBlockLink
              to="/services/marketing/banners"
              onClick={e => handleLinkClick(e, '/services/marketing/banners')}
            >
              <MenuBlockIconSmall>
                <FaImage />
              </MenuBlockIconSmall>
              Банерная реклама на сайтах
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/marketing/smm"
              onClick={e => handleLinkClick(e, '/services/marketing/smm')}
            >
              <MenuBlockIconSmall>
                <FaUsers />
              </MenuBlockIconSmall>
              SMM
            </MenuBlockLink>
            <MenuBlockLink
              to="/services/marketing/context-ads"
              onClick={e => handleLinkClick(e, '/services/marketing/context-ads')}
            >
              <MenuBlockIconSmall>
                <FaChartBar />
              </MenuBlockIconSmall>
              Контекстная реклама
            </MenuBlockLink>
            <MenuBlockLink
              href="#seo"
              onClick={e => handleLinkClick(e, '#seo')}
            >
              <MenuBlockIconSmall>
                <FaSearch />
              </MenuBlockIconSmall>
              Seo Оптимизация
            </MenuBlockLink>
            <MenuBlockLink
              href="#target-ads"
              onClick={e => handleLinkClick(e, '#target-ads')}
            >
              <MenuBlockIconSmall>
                <FaBullhorn />
              </MenuBlockIconSmall>
              Таргетированная реклама
            </MenuBlockLink>
            <MenuBlockLink
              href="#marketing-strategy"
              onClick={e => handleLinkClick(e, '#marketing-strategy')}
            >
              <MenuBlockIconSmall>
                <FaChartLine />
              </MenuBlockIconSmall>
              Маркетинговая стратегия
            </MenuBlockLink>
            <MenuBlockLink
              href="#marketing-audit"
              onClick={e => handleLinkClick(e, '#marketing-audit')}
            >
              <MenuBlockIconSmall>
                <FaChartBar />
              </MenuBlockIconSmall>
              Маркетинговый аудит
            </MenuBlockLink>
            <MenuBlockLink
              href="#email"
              onClick={e => handleLinkClick(e, '#email')}
            >
              <MenuBlockIconSmall>
                <FaEnvelope />
              </MenuBlockIconSmall>
              E-mail рассылки
            </MenuBlockLink>
            <MenuBlockLink
              href="#competitors"
              onClick={e => handleLinkClick(e, '#competitors')}
            >
              <MenuBlockIconSmall>
                <FaSearch />
              </MenuBlockIconSmall>
              Анализ конкурентов
            </MenuBlockLink>
            <MenuBlockLink
              href="#web-analytics"
              onClick={e => handleLinkClick(e, '#web-analytics')}
            >
              <MenuBlockIconSmall>
                <FaChartArea />
              </MenuBlockIconSmall>
              Веб аналитика
            </MenuBlockLink>
            <MenuBlockLink
              href="#content-plan"
              onClick={e => handleLinkClick(e, '#content-plan')}
            >
              <MenuBlockIconSmall>
                <FaClipboardList />
              </MenuBlockIconSmall>
              Контент план
            </MenuBlockLink>
          </MenuBlockContent>
        </MenuBlock>
      </OverlayContent>
    </FullScreenOverlay>
  );
};

export default BurgerMenu;
