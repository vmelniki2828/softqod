import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaPaintBrush, FaChartLine, FaRobot, FaHeadset, FaDesktop, FaMobile, FaServer, FaDatabase, FaPalette, FaPencilRuler, FaVideo, FaBullhorn, FaSearch, FaChartBar, FaUsers } from 'react-icons/fa';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(2, 16, 36, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(193, 232, 255, 0.1);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: 800;
  color: #C1E8FF;
  background: linear-gradient(45deg, #5483B3, #7DA0CA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 3.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(motion.div)`
  position: relative;
`;

const NavLink = styled(motion.a)`
  color: #C1E8FF;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem 0;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #5483B3, #7DA0CA);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateX(0);
  background: #052659;
  border: 1px solid rgba(193, 232, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  min-width: 280px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-top: 0.5rem;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 2rem;
    transform: translateX(0);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #052659;
  }
`;

const DropdownItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem;
  color: #7DA0CA;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(193, 232, 255, 0.1);
    color: #C1E8FF;
  }
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5483B3;
  font-size: 1rem;
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: #C1E8FF;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 250px;
    background: #052659;
    padding: 2rem;
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
  }
`;

const MobileNavLink = styled(motion.a)`
  color: #C1E8FF;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(193, 232, 255, 0.1);
`;

const developmentServices = [
    { icon: <FaDesktop />, title: 'Веб-разработка', href: '#web-dev' },
    { icon: <FaMobile />, title: 'Мобильная разработка', href: '#mobile-dev' },
    { icon: <FaServer />, title: 'Backend разработка', href: '#backend-dev' },
    { icon: <FaDatabase />, title: 'Базы данных', href: '#database' },
];

const designServices = [
    { icon: <FaPalette />, title: 'UI/UX дизайн', href: '#ui-ux' },
    { icon: <FaPencilRuler />, title: 'Графический дизайн', href: '#graphic' },
    { icon: <FaVideo />, title: 'Моушн дизайн', href: '#motion' },
];

const marketingServices = [
    { icon: <FaBullhorn />, title: 'Digital маркетинг', href: '#digital' },
    { icon: <FaSearch />, title: 'SEO оптимизация', href: '#seo' },
    { icon: <FaChartBar />, title: 'Аналитика', href: '#analytics' },
    { icon: <FaUsers />, title: 'SMM', href: '#smm' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <HeaderContainer
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <HeaderContent>
                <Logo
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    softqod
                </Logo>

                <Nav>
                    <NavItem
                        onMouseEnter={() => setActiveDropdown('development')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <NavLink
                            href="#development"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Разработка
                        </NavLink>
                        <AnimatePresence>
                            {activeDropdown === 'development' && (
                                <DropdownMenu
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {developmentServices.map((service, index) => (
                                        <DropdownItem
                                            key={index}
                                            href={service.href}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <IconWrapper>{service.icon}</IconWrapper>
                                            {service.title}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            )}
                        </AnimatePresence>
                    </NavItem>

                    <NavItem
                        onMouseEnter={() => setActiveDropdown('design')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <NavLink
                            href="#design"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Дизайн
                        </NavLink>
                        <AnimatePresence>
                            {activeDropdown === 'design' && (
                                <DropdownMenu
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {designServices.map((service, index) => (
                                        <DropdownItem
                                            key={index}
                                            href={service.href}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <IconWrapper>{service.icon}</IconWrapper>
                                            {service.title}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            )}
                        </AnimatePresence>
                    </NavItem>

                    <NavItem
                        onMouseEnter={() => setActiveDropdown('marketing')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <NavLink
                            href="#marketing"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Маркетинг
                        </NavLink>
                        <AnimatePresence>
                            {activeDropdown === 'marketing' && (
                                <DropdownMenu
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {marketingServices.map((service, index) => (
                                        <DropdownItem
                                            key={index}
                                            href={service.href}
                                            whileHover={{ x: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <IconWrapper>{service.icon}</IconWrapper>
                                            {service.title}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            )}
                        </AnimatePresence>
                    </NavItem>
                </Nav>

                <MobileMenuButton
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </MobileMenuButton>
            </HeaderContent>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <MobileMenu
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        exit={{ x: 300 }}
                        transition={{ type: "spring", damping: 20 }}
                    >
                        <MobileNavLink
                            href="#development"
                            whileHover={{ x: 10 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Разработка
                        </MobileNavLink>
                        <MobileNavLink
                            href="#design"
                            whileHover={{ x: 10 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Дизайн
                        </MobileNavLink>
                        <MobileNavLink
                            href="#marketing"
                            whileHover={{ x: 10 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Маркетинг
                        </MobileNavLink>
                    </MobileMenu>
                )}
            </AnimatePresence>
        </HeaderContainer>
    );
};

export default Header; 