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
    FaClipboardList 
} from 'react-icons/fa';

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

  &.active {
    opacity: 1;
    pointer-events: auto;
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

  &:hover {
    opacity: 0.8;
    background: var(--accent-color);
    color: var(--bg-primary);
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

  &:hover {
    border-color: var(--accent-color);
    transform: translateY(-2px);
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

const MenuBlockLink = styled(motion.a)`
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
  }
`;

const MenuBlockIconSmall = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.1rem;
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 0.5rem;
  flex-shrink: 0;
`;

const BurgerMenu = ({ isOpen, onClose }) => {
    const [activeBlock, setActiveBlock] = useState(null);

    useEffect(() => {
        if (!isOpen) {
            setActiveBlock(null);
        }
    }, [isOpen]);

    return (
        <FullScreenOverlay className={isOpen ? 'active' : ''}>
            <CloseButton
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
            >
                <FaTimes />
            </CloseButton>
            <OverlayContent>
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
                            opacity: activeBlock === 'development' ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <MenuBlockLink href="#pwa">
                            <MenuBlockIconSmall><FaLaptopCode /></MenuBlockIconSmall>
                            PWA (Progressive Web Apps)
                        </MenuBlockLink>
                        <MenuBlockLink href="#api">
                            <MenuBlockIconSmall><FaCode /></MenuBlockIconSmall>
                            API разработка
                        </MenuBlockLink>
                        <MenuBlockLink href="#bigdata">
                            <MenuBlockIconSmall><FaChartLine /></MenuBlockIconSmall>
                            Big Data и аналитика
                        </MenuBlockLink>
                        <MenuBlockLink href="#automation">
                            <MenuBlockIconSmall><FaCogs /></MenuBlockIconSmall>
                            Автоматизация и оптимизация бизнес-процессов
                        </MenuBlockLink>
                        <MenuBlockLink href="#journals">
                            <MenuBlockIconSmall><FaBookOpen /></MenuBlockIconSmall>
                            Разработка электронных журналов и систем учёта
                        </MenuBlockLink>
                        <MenuBlockLink href="#education">
                            <MenuBlockIconSmall><FaGraduationCap /></MenuBlockIconSmall>
                            Платформы для онлайн-образования
                        </MenuBlockLink>
                        <MenuBlockLink href="#document-flow">
                            <MenuBlockIconSmall><FaFileAlt /></MenuBlockIconSmall>
                            Системы документооборота
                        </MenuBlockLink>
                        <MenuBlockLink href="#erp">
                            <MenuBlockIconSmall><FaDatabase /></MenuBlockIconSmall>
                            ERP и CRM системы
                        </MenuBlockLink>
                        <MenuBlockLink href="#corporate">
                            <MenuBlockIconSmall><FaBuilding /></MenuBlockIconSmall>
                            Корпоративные сайты
                        </MenuBlockLink>
                        <MenuBlockLink href="#ecommerce">
                            <MenuBlockIconSmall><FaStore /></MenuBlockIconSmall>
                            Интернет-магазины
                        </MenuBlockLink>
                        <MenuBlockLink href="#landing">
                            <MenuBlockIconSmall><FaGlobe /></MenuBlockIconSmall>
                            Одностраничные сайты (landing page)
                        </MenuBlockLink>
                        <MenuBlockLink href="#mobile">
                            <MenuBlockIconSmall><FaMobile /></MenuBlockIconSmall>
                            Мобильные приложения
                        </MenuBlockLink>
                        <MenuBlockLink href="#ai">
                            <MenuBlockIconSmall><FaRobot /></MenuBlockIconSmall>
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
                            opacity: activeBlock === 'design' ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <MenuBlockLink href="#banners">
                            <MenuBlockIconSmall><FaPaintBrush /></MenuBlockIconSmall>
                            Рекламные Банера
                        </MenuBlockLink>
                        <MenuBlockLink href="#motion">
                            <MenuBlockIconSmall><FaVideo /></MenuBlockIconSmall>
                            Моушен дизайн
                        </MenuBlockLink>
                        <MenuBlockLink href="#brandbook">
                            <MenuBlockIconSmall><FaBook /></MenuBlockIconSmall>
                            Бренд Бук
                        </MenuBlockLink>
                        <MenuBlockLink href="#web-design">
                            <MenuBlockIconSmall><FaDesktop /></MenuBlockIconSmall>
                            Веб дизайн
                        </MenuBlockLink>
                        <MenuBlockLink href="#ui-ux">
                            <MenuBlockIconSmall><FaPalette /></MenuBlockIconSmall>
                            UX/UI дизайн
                        </MenuBlockLink>
                        <MenuBlockLink href="#illustrations">
                            <MenuBlockIconSmall><FaPaintBrush /></MenuBlockIconSmall>
                            Иллюстрации и иконографика
                        </MenuBlockLink>
                        <MenuBlockLink href="#3d">
                            <MenuBlockIconSmall><FaCube /></MenuBlockIconSmall>
                            3D моделирование и визуализация
                        </MenuBlockLink>
                        <MenuBlockLink href="#infographics">
                            <MenuBlockIconSmall><FaChartPie /></MenuBlockIconSmall>
                            Инфографика
                        </MenuBlockLink>
                        <MenuBlockLink href="#package">
                            <MenuBlockIconSmall><FaBox /></MenuBlockIconSmall>
                            Пакетный дизайн
                        </MenuBlockLink>
                        <MenuBlockLink href="#typography">
                            <MenuBlockIconSmall><FaFont /></MenuBlockIconSmall>
                            Типографика и леттеринг
                        </MenuBlockLink>
                        <MenuBlockLink href="#social">
                            <MenuBlockIconSmall><FaInstagram /></MenuBlockIconSmall>
                            Социальные медиа дизайн
                        </MenuBlockLink>
                        <MenuBlockLink href="#animation">
                            <MenuBlockIconSmall><FaVideo /></MenuBlockIconSmall>
                            Анимация и видео дизайн
                        </MenuBlockLink>
                        <MenuBlockLink href="#branding">
                            <MenuBlockIconSmall><FaPencilRuler /></MenuBlockIconSmall>
                            Разработка фирменного стиля
                        </MenuBlockLink>
                        <MenuBlockLink href="#retouch">
                            <MenuBlockIconSmall><FaCamera /></MenuBlockIconSmall>
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
                            opacity: activeBlock === 'marketing' ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <MenuBlockLink href="#banner-ads">
                            <MenuBlockIconSmall><FaImage /></MenuBlockIconSmall>
                            Банерная реклама на сайтах
                        </MenuBlockLink>
                        <MenuBlockLink href="#smm">
                            <MenuBlockIconSmall><FaUsers /></MenuBlockIconSmall>
                            SMM
                        </MenuBlockLink>
                        <MenuBlockLink href="#context-ads">
                            <MenuBlockIconSmall><FaChartBar /></MenuBlockIconSmall>
                            Контекстная реклама
                        </MenuBlockLink>
                        <MenuBlockLink href="#seo">
                            <MenuBlockIconSmall><FaSearch /></MenuBlockIconSmall>
                            Seo Оптимизация
                        </MenuBlockLink>
                        <MenuBlockLink href="#target-ads">
                            <MenuBlockIconSmall><FaBullhorn /></MenuBlockIconSmall>
                            Таргетированная реклама
                        </MenuBlockLink>
                        <MenuBlockLink href="#marketing-strategy">
                            <MenuBlockIconSmall><FaChartLine /></MenuBlockIconSmall>
                            Маркетинговая стратегия
                        </MenuBlockLink>
                        <MenuBlockLink href="#marketing-audit">
                            <MenuBlockIconSmall><FaChartBar /></MenuBlockIconSmall>
                            Маркетинговый аудит
                        </MenuBlockLink>
                        <MenuBlockLink href="#email">
                            <MenuBlockIconSmall><FaEnvelope /></MenuBlockIconSmall>
                            E-mail рассылки
                        </MenuBlockLink>
                        <MenuBlockLink href="#competitors">
                            <MenuBlockIconSmall><FaSearch /></MenuBlockIconSmall>
                            Анализ конкурентов
                        </MenuBlockLink>
                        <MenuBlockLink href="#web-analytics">
                            <MenuBlockIconSmall><FaChartArea /></MenuBlockIconSmall>
                            Веб аналитика
                        </MenuBlockLink>
                        <MenuBlockLink href="#content-plan">
                            <MenuBlockIconSmall><FaClipboardList /></MenuBlockIconSmall>
                            Контент план
                        </MenuBlockLink>
                    </MenuBlockContent>
                </MenuBlock>
            </OverlayContent>
        </FullScreenOverlay>
    );
};

export default BurgerMenu; 