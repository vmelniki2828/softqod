import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaDesktop, FaMobile, FaServer, FaDatabase, FaPalette, FaPencilRuler, FaVideo, FaBullhorn, FaSearch, FaChartBar, FaUsers } from 'react-icons/fa';

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

const MobileMenuButton = styled(motion.button)`
  background: none;
  border: none;
  color: #C1E8FF;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const FullScreenOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #021024, #052659);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  overflow-y: auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #C1E8FF;
  min-width: 250px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #7DA0CA;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ColumnItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  cursor: pointer;
  color: #C1E8FF;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #7DA0CA;
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.5rem;
  }
`;

const ItemIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #5483B3;
  transition: color 0.3s ease;

  ${ColumnItem}:hover & {
    color: #7DA0CA;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: #C1E8FF;
  font-size: 2.5rem;
  cursor: pointer;

  &:hover {
    color: #7DA0CA;
  }
`;

// const IconWrapper = styled.div`
//   width: 24px;
//   height: 24px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: #5483B3;
//   font-size: 1rem;
// `;

// const developmentServices = [
//     { icon: <FaDesktop />, title: 'Веб-разработка', href: '#web-dev' },
//     { icon: <FaMobile />, title: 'Мобильная разработка', href: '#mobile-dev' },
//     { icon: <FaServer />, title: 'Backend разработка', href: '#backend-dev' },
//     { icon: <FaDatabase />, title: 'Базы данных', href: '#database' },
// ];

// const designServices = [
//     { icon: <FaPalette />, title: 'UI/UX дизайн', href: '#ui-ux' },
//     { icon: <FaPencilRuler />, title: 'Графический дизайн', href: '#graphic' },
//     { icon: <FaVideo />, title: 'Моушн дизайн', href: '#motion' },
// ];

// const marketingServices = [
//     { icon: <FaBullhorn />, title: 'Digital маркетинг', href: '#digital' },
//     { icon: <FaSearch />, title: 'SEO оптимизация', href: '#seo' },
//     { icon: <FaChartBar />, title: 'Аналитика', href: '#analytics' },
//     { icon: <FaUsers />, title: 'SMM', href: '#smm' },
// ];

const Header = () => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Removed unused logic
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOverlayOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOverlayOpen]);

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

                <MobileMenuButton
                    onClick={() => setIsOverlayOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaBars />
                </MobileMenuButton>
            </HeaderContent>

            <FullScreenOverlay
                initial={{ x: '100%' }}
                animate={isOverlayOpen ? { x: 0 } : { x: '100%' }}
                transition={{ type: 'spring', stiffness: 70, damping: 20 }}
            >
                <CloseButton
                    onClick={() => setIsOverlayOpen(false)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                >
                    <FaTimes />
                </CloseButton>
                <ColumnsContainer>
                    <Column>
                        <ColumnTitle>Разработка</ColumnTitle>
                        {[
                            { icon: <FaDesktop />, title: 'PWA (Progressive Web Apps)' },
                            { icon: <FaServer />, title: 'API разработка' },
                            { icon: <FaChartBar />, title: 'Big Data и аналитика' },
                            { icon: <FaMobile />, title: 'Автоматизация и оптимизация бизнес-процессов' },
                            { icon: <FaDatabase />, title: 'Разработка электронных журналов и систем учёта' },
                            { icon: <FaDesktop />, title: 'Платформы для онлайн-образования' },
                            { icon: <FaServer />, title: 'Системы документооборота' },
                            { icon: <FaChartBar />, title: 'ERP и CRM системы' },
                            { icon: <FaDesktop />, title: 'Корпоративные сайты' },
                            { icon: <FaMobile />, title: 'Интернет-магазины' },
                            { icon: <FaServer />, title: 'Одностраничные сайты (landing page)' },
                            { icon: <FaDatabase />, title: 'Мобильные приложения' },
                            { icon: <FaUsers />, title: 'ИИ' },
                        ].map((item, index) => (
                            <ColumnItem
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <ItemIcon>{item.icon}</ItemIcon>
                                {item.title}
                            </ColumnItem>
                        ))}
                    </Column>
                    <Column>
                        <ColumnTitle>Дизайн</ColumnTitle>
                        {[
                            { icon: <FaPalette />, title: 'Рекламные Банера' },
                            { icon: <FaVideo />, title: 'Моушен дизайн' },
                            { icon: <FaPencilRuler />, title: 'Бренд Бук' },
                            { icon: <FaDesktop />, title: 'Веб дизайн' },
                            { icon: <FaPalette />, title: 'UX/UI дизайн' },
                            { icon: <FaPencilRuler />, title: 'Иллюстрации и иконографика' },
                            { icon: <FaVideo />, title: '3D моделирование и визуализация' },
                            { icon: <FaChartBar />, title: 'Инфографика' },
                            { icon: <FaPalette />, title: 'Пакетный дизайн' },
                            { icon: <FaPencilRuler />, title: 'Типографика и леттеринг' },
                            { icon: <FaVideo />, title: 'Социальные медиа дизайн' },
                            { icon: <FaChartBar />, title: 'Анимация и видео дизайн' },
                            { icon: <FaPalette />, title: 'Разработка фирменного стиля' },
                            { icon: <FaPencilRuler />, title: 'Ретушь и обработка фотографий' },
                        ].map((item, index) => (
                            <ColumnItem
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <ItemIcon>{item.icon}</ItemIcon>
                                {item.title}
                            </ColumnItem>
                        ))}
                    </Column>
                    <Column>
                        <ColumnTitle>Маркетинг</ColumnTitle>
                        {[
                            { icon: <FaBullhorn />, title: 'Банерная реклама на сайтах' },
                            { icon: <FaUsers />, title: 'SMM' },
                            { icon: <FaChartBar />, title: 'Контекстная реклама' },
                            { icon: <FaSearch />, title: 'Seo Оптимизация' },
                            { icon: <FaBullhorn />, title: 'Таргетированная реклама' },
                            { icon: <FaChartBar />, title: 'Маркетинговая стратегия' },
                            { icon: <FaSearch />, title: 'Маркетинговый аудит' },
                            { icon: <FaBullhorn />, title: 'Е-mail рассылки' },
                            { icon: <FaChartBar />, title: 'Анализ конкурентов' },
                            { icon: <FaSearch />, title: 'Веб аналитика' },
                            { icon: <FaUsers />, title: 'Контент план' },
                        ].map((item, index) => (
                            <ColumnItem
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <ItemIcon>{item.icon}</ItemIcon>
                                {item.title}
                            </ColumnItem>
                        ))}
                    </Column>
                </ColumnsContainer>
            </FullScreenOverlay>
        </HeaderContainer>
    );
};

export default Header;