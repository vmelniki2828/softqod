import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaTimes,
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
  FaCode,
  FaChevronDown,
} from 'react-icons/fa';
// import BurgerMenu from './BurgerMenu';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

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

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  opacity: ${props => (props.isHidden ? 0 : 1)};
  pointer-events: ${props => (props.isHidden ? 'none' : 'auto')};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: var(--bg-secondary);
  border-left: 1px solid var(--border-color);
  z-index: 1000;
  overflow-y: auto;
  padding: 2rem 1rem;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 480px) {
    width: 280px;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const MobileMenuTitle = styled.h3`
  color: var(--text-primary);
  font-size: 1.2rem;
  margin: 0;
`;

const CloseButton = styled(motion.button)`
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  min-height: 36px;

  &:hover {
    background: var(--accent-color);
    color: var(--bg-primary);
    border-color: var(--accent-color);
    transform: scale(1.05);
  }
`;

const MobileNavSection = styled.div`
  margin-bottom: 2rem;
`;

const MobileNavTitle = styled.h4`
  color: var(--accent-color);
  font-size: 1rem;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const MobileNavItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  padding: 0.75rem 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  font-size: 0.95rem;

  svg {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    color: var(--accent-color);
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

// const DesktopMenuButton = styled(motion.button)`
//   display: none;
//   background: none;
//   border: none;
//   color: var(--text-primary);
//   font-size: 1.5rem;
//   cursor: pointer;
//   padding: 0.5rem;
//   position: absolute;
//   right: 2rem;

//   @media (min-width: 769px) {
//     display: block;
//   }
// `;

const LanguageSwitcherContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LanguageButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: var(--accent-color);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }
`;

const LanguageDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  overflow: hidden;
  z-index: 1000;
  min-width: 150px;

  @media (max-width: 768px) {
    min-width: 120px;
  }
`;

const LanguageOption = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--accent-color);
  }

  &.active {
    background: rgba(94, 234, 212, 0.1);
    color: var(--accent-color);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const LanguageFlag = styled.span`
  font-size: 1.2rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
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
        <NavLink
          className={
            location.pathname.startsWith('/services/development')
              ? 'active'
              : ''
          }
        >
          {t('header.nav.firstItem')}
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
              {t('header.navItem.developmentFirstItem')}
            </DropdownItem>
            <DropdownItem to="/services/development/erp">
              <FaDatabase />
              ERP та CRM системи
            </DropdownItem>
            <DropdownItem to="/services/development/ecommerce">
              <FaStore />
              E-commerce
            </DropdownItem>
            <DropdownItem to="/services/development/landing">
              <FaGlobe />
              Landing page
            </DropdownItem>
            <DropdownItem to="/services/development/mobile">
              <FaMobile />
              {t('header.navItem.developmentSecondItem')}
            </DropdownItem>
          </DropdownMenu>
        )}
      </NavItem>
      <NavItem
        onMouseEnter={() => setActiveBlock('design')}
        onMouseLeave={() => setActiveBlock(null)}
      >
        <NavLink
          className={
            location.pathname.startsWith('/services/design') ? 'active' : ''
          }
        >
          {t('header.nav.secondItem')}
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
              {t('header.navItem.designFirstItem')}
            </DropdownItem>
            <DropdownItem to="/services/design/brandbook">
              <FaBook />
              {t('header.navItem.designSecondItem')}
            </DropdownItem>
            <DropdownItem to="/services/design/webdesign">
              <FaDesktop />
              {t('header.navItem.designThirdItem')}
            </DropdownItem>
            <DropdownItem to="/services/design/uxuidesign">
              <FaPalette />
              {t('header.navItem.designForthItem')}
            </DropdownItem>
            <DropdownItem to="/services/design/typography_lettering">
              <FaFont />
              {t('header.navItem.designFifthItem')}
            </DropdownItem>
            <DropdownItem to="/services/design/branding">
              <FaPencilRuler />
              {t('header.navItem.designSixthItem')}
            </DropdownItem>
          </DropdownMenu>
        )}
      </NavItem>
      <NavItem
        onMouseEnter={() => setActiveBlock('marketing')}
        onMouseLeave={() => setActiveBlock(null)}
      >
        <NavLink
          className={
            location.pathname.startsWith('/services/marketing') ? 'active' : ''
          }
        >
          {t('header.nav.thirdItem')}
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
              {t('header.navItem.marketingFirstItem')}
            </DropdownItem>
            <DropdownItem to="/services/marketing/smm">
              <FaUsers />
              SMM
            </DropdownItem>
            <DropdownItem to="/services/marketing/context-ads">
              <FaChartBar />
              {t('header.navItem.marketingSecondItem')}
            </DropdownItem>
            <DropdownItem to="/services/marketing/seo">
              <FaSearch />
              {t('header.navItem.marketingThirdItem')}
            </DropdownItem>
            <DropdownItem to="/services/marketing/target">
              <FaBullhorn />
              {t('header.navItem.marketingForthItem')}
            </DropdownItem>
            <DropdownItem to="/services/marketing/audit">
              <FaChartBar />
              {t('header.navItem.marketingFifthItem')}
            </DropdownItem>
          </DropdownMenu>
        )}
      </NavItem>
    </Nav>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [language, setLanguage] = useState('uk');
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: 'uk', name: 'Українська', flag: '🇺🇦' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  const handleLanguageChange = langCode => {
    setLanguage(langCode);
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');

      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
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
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginLeft: 'auto',
          }}
        >
          <LanguageSwitcherContainer>
            <LanguageButton
              onClick={toggleDropdown}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaGlobe />
              <span>{currentLanguage?.flag}</span>
              <span>{currentLanguage?.code.toUpperCase()}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </LanguageButton>

            <AnimatePresence>
              {isOpen && (
                <LanguageDropdown
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {languages.map(lang => (
                    <LanguageOption
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={language === lang.code ? 'active' : ''}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <LanguageFlag>{lang.flag}</LanguageFlag>
                      <span>{lang.name}</span>
                    </LanguageOption>
                  ))}
                </LanguageDropdown>
              )}
            </AnimatePresence>
          </LanguageSwitcherContainer>

          <MobileMenuButton
            onClick={handleMenuToggle}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            isHidden={isMenuOpen}
          >
            <FaBars />
          </MobileMenuButton>
        </div>
      </HeaderContent>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleCloseMenu}
            />
            <MobileMenu
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <MobileMenuHeader>
                <MobileMenuTitle>Меню</MobileMenuTitle>
                <CloseButton
                  onClick={handleCloseMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </CloseButton>
              </MobileMenuHeader>

              <MobileNavSection>
                <MobileNavTitle>
                  <FaCode />
                  {t('header.nav.firstItem')}
                </MobileNavTitle>
                <MobileNavItem
                  to="/services/development/pwa"
                  className={
                    location.pathname === '/services/development/pwa'
                      ? 'active'
                      : ''
                  }
                >
                  <FaLaptopCode />
                  PWA (Progressive Web Apps)
                </MobileNavItem>
                <MobileNavItem
                  to="/services/development/automation"
                  className={
                    location.pathname === '/services/development/automation'
                      ? 'active'
                      : ''
                  }
                >
                  <FaCogs />
                  {t('header.navItem.developmentFirstItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/development/erp"
                  className={
                    location.pathname === '/services/development/erp'
                      ? 'active'
                      : ''
                  }
                >
                  <FaDatabase />
                  ERP та CRM системи
                </MobileNavItem>
                <MobileNavItem
                  to="/services/development/ecommerce"
                  className={
                    location.pathname === '/services/development/ecommerce'
                      ? 'active'
                      : ''
                  }
                >
                  <FaStore />
                  E-commerce
                </MobileNavItem>
                <MobileNavItem
                  to="/services/development/landing"
                  className={
                    location.pathname === '/services/development/landing'
                      ? 'active'
                      : ''
                  }
                >
                  <FaGlobe />
                  Landing page
                </MobileNavItem>
                <MobileNavItem
                  to="/services/development/mobile"
                  className={
                    location.pathname === '/services/development/mobile'
                      ? 'active'
                      : ''
                  }
                >
                  <FaMobile />
                  {t('header.navItem.developmentSecondItem')}
                </MobileNavItem>
              </MobileNavSection>

              <MobileNavSection>
                <MobileNavTitle>
                  <FaPaintBrush />
                  {t('header.nav.secondItem')}
                </MobileNavTitle>
                <MobileNavItem
                  to="/services/design/banners"
                  className={
                    location.pathname === '/services/design/banners'
                      ? 'active'
                      : ''
                  }
                >
                  <FaPaintBrush />
                  {t('header.navItem.designFirstItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/design/brandbook"
                  className={
                    location.pathname === '/services/design/brandbook'
                      ? 'active'
                      : ''
                  }
                >
                  <FaBook />
                  {t('header.navItem.designSecondItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/design/webdesign"
                  className={
                    location.pathname === '/services/design/webdesign'
                      ? 'active'
                      : ''
                  }
                >
                  <FaDesktop />
                  {t('header.navItem.designThirdItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/design/uxuidesign"
                  className={
                    location.pathname === '/services/design/uxuidesign'
                      ? 'active'
                      : ''
                  }
                >
                  <FaPalette />
                  {t('header.navItem.designForthItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/design/typography_lettering"
                  className={
                    location.pathname ===
                    '/services/design/typography_lettering'
                      ? 'active'
                      : ''
                  }
                >
                  <FaFont />
                  {t('header.navItem.designFifthItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/design/branding"
                  className={
                    location.pathname === '/services/design/branding'
                      ? 'active'
                      : ''
                  }
                >
                  <FaPencilRuler />
                  {t('header.navItem.designSixthItem')}
                </MobileNavItem>
              </MobileNavSection>

              <MobileNavSection>
                <MobileNavTitle>
                  <FaBullhorn />
                  {t('header.nav.thirdItem')}
                </MobileNavTitle>
                <MobileNavItem
                  to="/services/marketing/banners"
                  className={
                    location.pathname === '/services/marketing/banners'
                      ? 'active'
                      : ''
                  }
                >
                  <FaBullhorn />
                  {t('header.navItem.marketingFirstItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/marketing/smm"
                  className={
                    location.pathname === '/services/marketing/smm'
                      ? 'active'
                      : ''
                  }
                >
                  <FaUsers />
                  SMM
                </MobileNavItem>
                <MobileNavItem
                  to="/services/marketing/context-ads"
                  className={
                    location.pathname === '/services/marketing/context-ads'
                      ? 'active'
                      : ''
                  }
                >
                  <FaChartBar />
                  {t('header.navItem.marketingSecondItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/marketing/seo"
                  className={
                    location.pathname === '/services/marketing/seo'
                      ? 'active'
                      : ''
                  }
                >
                  <FaSearch />
                  {t('header.navItem.marketingThirdItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/marketing/target"
                  className={
                    location.pathname === '/services/marketing/target'
                      ? 'active'
                      : ''
                  }
                >
                  <FaBullhorn />
                  {t('header.navItem.marketingForthItem')}
                </MobileNavItem>
                <MobileNavItem
                  to="/services/marketing/audit"
                  className={
                    location.pathname === '/services/marketing/audit'
                      ? 'active'
                      : ''
                  }
                >
                  <FaChartBar />
                  {t('header.navItem.marketingFifthItem')}
                </MobileNavItem>
              </MobileNavSection>
            </MobileMenu>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
