import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import { 
    FaArrowRight, 
    FaChartLine, 
    FaBullseye,
    FaRegChartBar,
  FaRocket,
  FaChartBar,
  FaEye,
  FaAd,
  FaRegComments,
  FaUsers,
  FaMousePointer,
  FaLightbulb,
  FaSearchDollar,
  FaSyncAlt,
  FaClipboardCheck,
  FaQuoteRight,
  FaComment,
  FaBriefcase,
  FaCalendarAlt,
  FaGlobeEurope,
  FaShoppingCart,
  FaHeartbeat,
  FaUtensils,
  FaEllipsisH,
  FaComments,
  FaHeadset,
  FaQuoteLeft,
  FaSearch,
  FaPlane,
  FaGraduationCap,
  FaHandshake,
  FaChartPie,
  FaPlus,
  FaGoogle,
  FaFacebook,
  FaRobot,
  FaCogs,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Новые анимации для секции героя
const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

// Компоненты для нового дизайна героя
const HeroWrapper = styled.section`
  position: relative;
  min-height: 90vh;
  margin-bottom: 6rem;
  overflow: hidden;
  background: var(--bg-primary);
`;

const HeroInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 6rem 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const HeroSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0 0.5rem;
  }
`;

const HeroLeft = styled.div`
  @media (max-width: 1024px) {
  text-align: center;
    order: 1;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 80px 0.5rem;
  }
`;

const HeroRight = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 1024px) {
    order: 0;
    max-width: 500px;
    margin: 0 auto;
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 350px;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
    max-width: 350px;
  }

  @media (max-width: 400px) {
    height: 250px;
    max-width: 300px;
  }
`;

const GlowingCircle = styled.div`
  position: absolute;
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.4) 0%,
    rgba(var(--accent-color-rgb), 0.1) 40%,
    transparent 70%
  );
  filter: blur(${props => props.blur || '60px'});
  opacity: ${props => props.opacity || '0.6'};
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  transform: translate(
    ${props => props.translateX || '0'},
    ${props => props.translateY || '0'}
  );
  animation: ${breatheAnimation} ${props => props.duration || '8s'} ease-in-out
    infinite;
  z-index: 0;
`;

const TiltedLine = styled.div`
  position: absolute;
  width: ${props => props.width || '150px'};
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(var(--accent-color-rgb), 0.6) 50%,
    transparent 100%
  );
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const DotGrid = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 10px;
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: 1;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Dot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: rgba(
    var(--accent-color-rgb),
    ${props => props.opacity || '0.4'}
  );
`;

const AnimatedTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.2;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 4.5vw, 3rem);
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    margin-bottom: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: clamp(1.6rem, 3.5vw, 2rem);
    margin-bottom: 0.6rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 560px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    max-width: 400px;
    padding: 0 0.5rem;
  }

  @media (max-width: 400px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    max-width: 350px;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.8rem;
  }

  @media (max-width: 400px) {
    gap: 0.6rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 7px 20px rgba(var(--accent-color-rgb), 0.3);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    transform: skewX(-25deg);
    transition: all 0.75s ease;
  }

  &:hover::before {
    animation: ${shimmer} 1s ease-out;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 400px) {
    padding: 0.7rem 1rem;
    font-size: 0.85rem;
  }
`;

const StatsRow = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0;

  @media (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const StatColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const StatText = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

// Блок "Що таке банерна реклама"
const InfoSection = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const InfoTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const InfoDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const BannerAnatomy = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-bottom: 5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.5) 50%,
      transparent 100%
    );
  }
`;

const BannerTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BannerTypeCard = styled(motion.div)`
    background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const BannerTypeName = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
`;

const BannerTypeSize = styled.div`
  font-size: 0.9rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  opacity: 0.9;
  font-weight: 500;
`;

const BannerTypeDesc = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
  flex-grow: 1;
`;

const BannerTypeImage = styled.div`
  height: 120px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 8px;
  margin-bottom: 1rem;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: rgba(var(--accent-color-rgb), 0.7);
`;

const BannerTypeImageLeaderboard = styled(BannerTypeImage)`
  width: 80%;
  height: 170px;
  margin: 0 auto 1rem;
`;

const BannerTypeImageBillboard = styled(BannerTypeImage)`
  width: 80%;
  height: 170px;
  margin: 0 auto 1rem;
`;

const BannerTypeImageSkyscraper = styled(BannerTypeImage)`
  width: 80%;
  height: 170px;
  margin: 0 auto 1rem;
`;

const BannerTypeImageRectangle = styled(BannerTypeImage)`
  width: 80%;
  height: 170px;
  margin: 0 auto 1rem;
`;

const BannerWorkScheme = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BannerSchemeLeft = styled.div`
  position: relative;
`;

const BannerSchemeRight = styled.div`
  position: relative;
`;

const SchemeTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const SchemeDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const SchemeIllustration = styled(motion.div)`
  position: relative;
  height: 350px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const InfoBenefitIcon = styled.div`
  width: 44px;
  height: 44px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const BenefitContent = styled.div``;

const InfoBenefitTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const InfoBenefitText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const SchemeStep = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border-left: 3px solid var(--accent-color);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
  }
`;

const SchemeStepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent-color);
  opacity: 0.8;
`;

const SchemeStepContent = styled.div``;

const SchemeStepTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: var(--text-primary);
`;

const SchemeStepText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const InteractiveElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.2rem;

  &.icon-1 {
    top: 15%;
    left: 10%;
  }

  &.icon-2 {
    top: 40%;
    right: 15%;
  }

  &.icon-3 {
    bottom: 20%;
    left: 25%;
  }

  &.icon-4 {
    bottom: 35%;
    right: 10%;
  }
`;

const BrowserMockup = styled(motion.div)`
  width: 70%;
  height: 70%;
  position: absolute;
  top: 15%;
  left: 15%;
  background: #1e1e2a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const BrowserHeader = styled.div`
  height: 32px;
  background: #131320;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const BrowserControls = styled.div`
  display: flex;
  gap: 6px;
`;

const BrowserCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const BrowserContent = styled.div`
  height: calc(100% - 32px);
  position: relative;
  overflow: hidden;
`;

const BrowserBanner = styled(motion.div)`
  position: absolute;
  background: rgba(var(--accent-color-rgb), 0.2);
  border: 1px solid rgba(var(--accent-color-rgb), 0.4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 0.7rem;
  font-weight: 600;
`;

const BrowserBannerLeaderboard = styled(BrowserBanner)`
  width: 80%;
  height: 10%;
  top: 5%;
  left: 10%;
`;

const BrowserBannerSidebar = styled(BrowserBanner)`
  width: 20%;
  height: 50%;
  top: 20%;
  right: 5%;
`;

const BrowserBannerRectangle = styled(BrowserBanner)`
  width: 30%;
  height: 25%;
  bottom: 15%;
  left: 10%;
`;

// Добавляем новые стили для секции размещения баннеров
const PlacementSection = styled.section`
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(var(--bg-primary-rgb), 0.98) 0%,
    var(--bg-primary) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const PlacementContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const PlacementTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const PlacementDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

// Анимация для визуальных элементов секции
const shine = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
`;

// Карточки для размещения баннеров
const PlacementCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-top: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PlacementCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.2);

    &::before {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(
      90deg,
      rgba(var(--accent-color-rgb), 0.7),
      rgba(var(--accent-color-rgb), 0.4),
      rgba(var(--accent-color-rgb), 0.7)
    );
    background-size: 200% 100%;
    animation: ${shine} 3s infinite linear;
    opacity: 0.5;
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }
`;

const PlacementCardTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const PlacementCardDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const AdvantagesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AdvantageItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-primary);
`;

const AdvantageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.15);
  color: var(--accent-color);
  margin-right: 1rem;
  flex-shrink: 0;
`;

// Стили для секции реализации баннерных кампаний
const ImplementationSection = styled.section`
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.95) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const ImplBackgroundGradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(var(--accent-color-rgb), 0.07) 0%,
      transparent 70%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(var(--accent-color-rgb), 0.07) 0%,
      transparent 70%
    );
  z-index: 0;
`;

const ImplBackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      rgba(var(--accent-color-rgb), 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(var(--accent-color-rgb), 0.03) 1px,
      transparent 1px
    );
  background-size: 40px 40px;
  background-position: center center;
  z-index: 0;
  opacity: 0.7;
  pointer-events: none;
`;

const ImplementationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ImplementationTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &:after {
    content: '';
  position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ImplementationDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

const pulseFaq = keyframes`
  0% { opacity: 0.6; width: 60px; }
  50% { opacity: 1; width: 80px; }
  100% { opacity: 0.6; width: 60px; }
`;

const shimmerEffect = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

// Стилизованные компоненты для секции FAQ
const FaqSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.9) 100%
  );
  overflow: hidden;
  z-index: 0;
  margin: 0;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at top right,
      rgba(94, 234, 212, 0.08) 0%,
      transparent 70%
    );
    z-index: -1;
  }

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const FaqWaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to top left, transparent 49%, var(--bg-primary) 51%);
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    max-width: 800px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    max-width: none;
    padding: 0 1rem;
  }
`;

const FaqGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;

  &.circle-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.05) 0%,
      transparent 70%
    );
    top: 10%;
    left: -200px;
    animation: ${floatVertical} 15s infinite ease-in-out;
  }

  &.circle-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.05) 0%,
      transparent 70%
    );
    bottom: 5%;
    right: -200px;
    animation: ${floatVertical} 18s infinite ease-in-out reverse;
  }
`;

const FaqTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  text-shadow: 0 2px 10px rgba(94, 234, 212, 0.2);

  &::before {
    content: 'F.A.Q';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;
    color: rgba(94, 234, 212, 0.03);
    font-weight: 900;
    letter-spacing: 5px;
    z-index: -1;
    white-space: nowrap;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
    border-radius: 4px;
    animation: ${pulseFaq} 2s infinite ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 2.5rem;

    &::before {
      font-size: 4rem;
      top: -25px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;

    &::before {
      font-size: 3.5rem;
      top: -20px;
    }

    &::after {
      width: 60px;
      height: 3px;
      bottom: -12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;

    &::before {
      font-size: 2.5rem;
      top: -15px;
    }

    &::after {
      width: 50px;
      height: 2px;
      bottom: -10px;
    }
  }
`;

const FaqList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const FaqItem = styled(motion.div)`
  overflow: hidden;
  border-radius: 16px;
  background: rgba(16, 24, 39, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2),
      0 0 15px rgba(var(--accent-color-rgb), 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    border-radius: 10px;

    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const FaqItemContent = styled(motion.div)`
  overflow: hidden;
`;

const FaqQuestion = styled(motion.div)`
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      var(--accent-color),
      rgba(59, 130, 246, 0.5)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 0 3px 3px 0;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    &::after {
      left: 1.5rem;
      right: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    align-items: flex-start;

    &::after {
      left: 1.2rem;
      right: 1.2rem;
    }
  }
`;

const FaqQuestionText = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
  flex: 1;
  margin: 0;
  transform: translateZ(5px);

  ${FaqQuestion}:hover & {
  color: var(--accent-color);
    transform: translateZ(10px);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
    margin-right: 0.5rem;
  }
`;

const FaqToggle = styled(motion.div)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  margin-left: 1rem;
  flex-shrink: 0;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;
  padding: 6px;
  transform: ${props => props['data-open'] === 'true' ? 'rotate(45deg)' : 'rotate(0deg)'};
  background-color: ${props => 
    props['data-open'] === 'true' 
      ? 'rgba(var(--accent-color-rgb), 0.15)' 
      : 'rgba(var(--accent-color-rgb), 0.05)'
  };

  ${FaqQuestion}:hover & {
    background: rgba(var(--accent-color-rgb), 0.1);
    box-shadow: 0 0 10px rgba(var(--accent-color-rgb), 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin-left: 0.5rem;
    margin-top: 0.2rem;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const FaqAnswer = styled(motion.div)`
  padding: 0 2rem 1.8rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }

  strong {
  color: var(--accent-color);
    font-weight: 600;
  }

  ul {
    margin-top: 0.8rem;
  margin-bottom: 0.8rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;

    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;
    }
  }

  p {
    margin-bottom: 0.8rem;
  }

  .highlight {
    background: linear-gradient(
      90deg,
      rgba(var(--accent-color-rgb), 0.1),
      rgba(59, 130, 246, 0.1)
    );
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin: 0 0.2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.05),
        transparent
      );
      background-size: 200% 100%;
      animation: ${shimmerEffect} 2s infinite;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    font-size: 1rem;

    &::before {
      left: 1.5rem;
      right: 1.5rem;
    }

    ul {
      padding-left: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1.2rem 1.2rem;
    font-size: 0.95rem;
    line-height: 1.6;

    &::before {
      left: 1.2rem;
      right: 1.2rem;
    }

    ul {
      padding-left: 1rem;
    }

    li {
      margin-bottom: 0.3rem;

      &::before {
        left: -0.8rem;
      }
    }
  }
`;

const FaqCta = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: rgba(16, 24, 39, 0.4);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 50%
    );
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    border-radius: 15px;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
    gap: 1rem;
  }
`;

const FaqCtaText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.4;
  }
`;

const FaqCtaButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.5);
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 25px;
    width: 100%;
    max-width: 250px;
  }
`;

const AIPlatformsContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 450px;
  perspective: 1000px;
`;

const AIPlatformCard = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15),
      0 0 15px rgba(var(--accent-color-rgb), 0.3);
    z-index: 10;
  }

  &.google-ads {
    top: 20%;
    left: 20%;
    background: linear-gradient(
      45deg,
      #4285f4 0%,
      #34a853 25%,
      #fbbc05 50%,
      #ea4335 75%,
      #9c27b0 100%
    );
  }

  &.facebook-ads {
    top: 10%;
    right: 15%;
    background: #1877f2;
  }

  &.ai-creative {
    bottom: 15%;
    left: 10%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }

  &.programmatic {
    top: 30%;
    right: 5%;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }

  &.analytics {
    bottom: 30%;
    right: 20%;
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }

  &.automation {
    bottom: 5%;
    left: 35%;
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
`;

const AIPlatformIcon = styled.div`
  font-size: 2.5rem;
  color: white;
`;

const AIBannerMarketing = () => {
  const bannerRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Add FAQ state
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  // FAQ data
  const faqData = [
    {
      question: t('aiBannerMarketingPage.faqData.question1'),
      answer:
      t('aiBannerMarketingPage.faqData.answer1'),
    },
    {
      question:  t('aiBannerMarketingPage.faqData.question2'),
      answer:
      t('aiBannerMarketingPage.faqData.answer2'),
    },
    {
      question:  t('aiBannerMarketingPage.faqData.question3'),
      answer:
      t('aiBannerMarketingPage.faqData.answer3'),
    },
    {
      question: t('aiBannerMarketingPage.faqData.question4'),
      answer:
      t('aiBannerMarketingPage.faqData.answer4'),
    },
    {
      question:  t('aiBannerMarketingPage.faqData.question5'),
      answer:
      t('aiBannerMarketingPage.faqData.answer5'),
    },
    {
      question:  t('aiBannerMarketingPage.faqData.question6'),
      answer:
      t('aiBannerMarketingPage.faqData.answer6'),
    },
  ];

  // Toggle FAQ function
  const toggleFaq = index => {
    setExpandedFaqs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  useEffect(() => {
    const handleMouseMove = e => {
      if (!bannerRef.current) return;

      const rect = bannerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 40;
      const moveY = (y - centerY) / 40;

      bannerRef.current.style.transform = `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };

    const handleMouseLeave = () => {
      if (!bannerRef.current) return;
      bannerRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    const banner = bannerRef.current;
    if (banner) {
      banner.addEventListener('mousemove', handleMouseMove);
      banner.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (banner) {
        banner.removeEventListener('mousemove', handleMouseMove);
        banner.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 36; i++) {
      if (Math.random() > 0.3) {
        dots.push(<Dot key={i} opacity={Math.random() * 0.5 + 0.2} />);
      } else {
        dots.push(<div key={i} />);
      }
    }
    return dots;
  };

  const bannerTypes = [
    {
      name: 'Leaderboard',
      size: '728×90',
      description:
        t('aiBannerMarketingPage.formatLeaderboardDesc'),
    },
    {
      name: 'Medium Rectangle',
      size: '300×250',
      description:
      t('aiBannerMarketingPage.formatRectangleDesc'),
    },
    {
      name: 'Wide Skyscraper',
      size: '160×600',
      description:
      t('aiBannerMarketingPage.formatSkyscraperDesc'),
    },
    {
      name: 'Billboard',
      size: '970×250',
      description:
      t('aiBannerMarketingPage.formatBillboardDesc'),
    },
  ];

  const benefits = [
    {
      icon: <FaChartLine />,
      title: t('aiBannerMarketingPage.benefit1Title'),
      text: t('aiBannerMarketingPage.benefit1Text'),
    },
    {
      icon: <FaEye />,
      title: t('aiBannerMarketingPage.benefit2Title'),
      text: t('aiBannerMarketingPage.benefit2Text'),
    },
    {
      icon: <FaBullseye />,
      title: t('aiBannerMarketingPage.benefit3Title'),
      text: t('aiBannerMarketingPage.benefit3Text'),
    },
    {
      icon: <FaRegComments />,
      title: t('aiBannerMarketingPage.benefit4Title'),
      text: t('aiBannerMarketingPage.benefit4Text'),
    },
    {
      icon: <FaChartBar />,
      title: t('aiBannerMarketingPage.benefit5Title'),
      text: t('aiBannerMarketingPage.benefit5Text'),
    },
  ];

  const schemeSteps = [
    {
      number: '01',
      title: t('aiBannerMarketingPage.step1Title'),
      text: t('aiBannerMarketingPage.step1Text'),
    },
    {
      number: '02',
      title: t('aiBannerMarketingPage.step2Title'),
      text: t('aiBannerMarketingPage.step2Text'),
    },
    {
      number: '03',
      title: t('aiBannerMarketingPage.step3Title'),
      text: t('aiBannerMarketingPage.step3Text'),
    },
    {
      number: '04',
      title: t('aiBannerMarketingPage.step4Title'),
      text: t('aiBannerMarketingPage.step4Text'),
    },
  ];

  // Новые данные для секции размещения
  const placementTypes = [
    {
      id: 'thematic',
      title: t('aiBannerMarketingPage.thematicSitesTitle'),
      description:
      t('aiBannerMarketingPage.thematicSitesDescription'),
      advantages: [
        t('aiBannerMarketingPage.thematicSitesAdv1'),
        t('aiBannerMarketingPage.thematicSitesAdv2'),
        t('aiBannerMarketingPage.thematicSitesAdv3'),
      ],
      icon: <FaBullseye />,
    },
    {
      id: 'news',
      title: t('aiBannerMarketingPage.newsPortalsTitle'),
      description:
      t('aiBannerMarketingPage.newsPortalsDescription'),
      advantages: [
        t('aiBannerMarketingPage.newsPortalsAdv1'),
        t('aiBannerMarketingPage.newsPortalsAdv2'),
        t('aiBannerMarketingPage.newsPortalsAdv3'),
      ],
      icon: <FaRegComments />,
    },
    {
      id: 'traffic',
      title: t('aiBannerMarketingPage.highTrafficTitle'),
      description:
      t('aiBannerMarketingPage.highTrafficDescription'),
      advantages: [
        t('aiBannerMarketingPage.highTrafficAdv1'),
        t('aiBannerMarketingPage.highTrafficAdv2'),
        t('aiBannerMarketingPage.highTrafficAdv3'),
      ],
      icon: <FaUsers />,
    },
  ];

  return (
    <PageContainer>
      <HeroWrapper>
        <GlowingCircle
          size="400px"
          top="-100px"
          right="-100px"
          opacity="0.5"
          duration="15s"
        />
        <GlowingCircle
          size="350px"
          bottom="-50px"
          left="-50px"
          opacity="0.4"
          duration="12s"
        />

        <TiltedLine top="30%" left="5%" width="120px" rotate="45deg" />
        <TiltedLine bottom="25%" right="15%" width="80px" rotate="-30deg" />

        <DotGrid top="15%" right="10%" rotate="15deg">
          {renderDots()}
        </DotGrid>
        <DotGrid bottom="10%" left="5%" rotate="-10deg">
          {renderDots()}
        </DotGrid>

        <HeroInner>
          <HeroSplit>
            <HeroLeft>
              <AnimatedTitle
                initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {t('aiBannerMarketingPage.heroTitle')}
              </AnimatedTitle>

              <HeroDescription
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {t('aiBannerMarketingPage.heroDescription')}
              </HeroDescription>

              <StatsRow
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StatColumn>
                  <StatNumber>+180%</StatNumber>
                  <StatText>{t('aiBannerMarketingPage.stat1Label')}</StatText>
                </StatColumn>

                <StatColumn>
                  <StatNumber>+65%</StatNumber>
                  <StatText>{t('aiBannerMarketingPage.stat2Label')}</StatText>
                </StatColumn>

                <StatColumn>
                  <StatNumber>-40%</StatNumber>
                  <StatText>{t('aiBannerMarketingPage.stat3Label')}</StatText>
                </StatColumn>
              </StatsRow>

              <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <PrimaryButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={openModal}
                >
                  {t('aiBannerMarketingPage.orderButton')}
                  <FaArrowRight />
                </PrimaryButton>
              </ButtonGroup>
            </HeroLeft>

            <HeroRight>
              <AIPlatformsContainer>
                <AIPlatformCard
                  className="google-ads"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <AIPlatformIcon>
                    <FaGoogle />
                  </AIPlatformIcon>
                </AIPlatformCard>

                <AIPlatformCard
                  className="facebook-ads"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ y: -10 }}
                >
                  <AIPlatformIcon>
                    <FaFacebook />
                  </AIPlatformIcon>
                </AIPlatformCard>

                <AIPlatformCard
                  className="ai-creative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <AIPlatformIcon>
                    <FaRobot />
                  </AIPlatformIcon>
                </AIPlatformCard>

                <AIPlatformCard
                  className="programmatic"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ y: -10 }}
                >
                  <AIPlatformIcon>
                    <FaChartLine />
                  </AIPlatformIcon>
                </AIPlatformCard>

                <AIPlatformCard
                  className="analytics"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  whileHover={{ y: -10 }}
                >
                  <AIPlatformIcon>
                    <FaChartBar />
                  </AIPlatformIcon>
                </AIPlatformCard>

                <AIPlatformCard
                  className="automation"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ y: -10 }}
                >
                  <AIPlatformIcon>
                    <FaCogs />
                  </AIPlatformIcon>
                </AIPlatformCard>
              </AIPlatformsContainer>
            </HeroRight>
          </HeroSplit>
        </HeroInner>
      </HeroWrapper>

      <InfoSection>
        <InfoContainer>
          <InfoTitle>{t('aiBannerMarketingPage.infoTitle')}</InfoTitle>
          <InfoDescription>
          {t('aiBannerMarketingPage.infoDescription')}
          </InfoDescription>

          <BannerAnatomy
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SchemeTitle>{t('aiBannerMarketingPage.formatsTitle')}</SchemeTitle>
            <SchemeDescription>
            {t('aiBannerMarketingPage.formatsDescription')}
            </SchemeDescription>

            <BannerTypesGrid>
              {bannerTypes.map((type, index) => (
                <BannerTypeCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
                  {type.name === 'Leaderboard' && (
                    <BannerTypeImageLeaderboard>
                      728×90
                    </BannerTypeImageLeaderboard>
                  )}
                  {type.name === 'Medium Rectangle' && (
                    <BannerTypeImageRectangle>300×250</BannerTypeImageRectangle>
                  )}
                  {type.name === 'Wide Skyscraper' && (
                    <BannerTypeImageSkyscraper>
                      160×600
                    </BannerTypeImageSkyscraper>
                  )}
                  {type.name === 'Billboard' && (
                    <BannerTypeImageBillboard>970×250</BannerTypeImageBillboard>
                  )}
                  <div>
                    <BannerTypeName>{type.name}</BannerTypeName>
                    <BannerTypeSize>{type.size}</BannerTypeSize>
                  </div>
                  <BannerTypeDesc>{type.description}</BannerTypeDesc>
                </BannerTypeCard>
              ))}
            </BannerTypesGrid>

            <BannerWorkScheme>
              <BannerSchemeLeft>
                <SchemeTitle>{t('aiBannerMarketingPage.howItWorksTitle')}</SchemeTitle>
                <SchemeDescription>
                {t('aiBannerMarketingPage.howItWorksDescription')}
                </SchemeDescription>

                {schemeSteps.map((step, index) => (
                  <SchemeStep
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <SchemeStepNumber>{step.number}</SchemeStepNumber>
                    <SchemeStepContent>
                      <SchemeStepTitle>{step.title}</SchemeStepTitle>
                      <SchemeStepText>{step.text}</SchemeStepText>
                    </SchemeStepContent>
                  </SchemeStep>
                ))}
              </BannerSchemeLeft>

              <BannerSchemeRight>
                <SchemeIllustration
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <BrowserMockup
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.8,
                      duration: 0.5,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      repeatDelay: 5,
                    }}
                  >
                    <BrowserHeader>
                      <BrowserControls>
                        <BrowserCircle color="#FF5F57" />
                        <BrowserCircle color="#FEBC2E" />
                        <BrowserCircle color="#28C840" />
                      </BrowserControls>
                    </BrowserHeader>
                    <BrowserContent>
                      <BrowserBannerLeaderboard
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      >
                        Leaderboard 728×90
                      </BrowserBannerLeaderboard>

                      <BrowserBannerSidebar
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          x: [0, 2, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          delay: 0.5,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      >
                        Wide Skyscraper 160×600
                      </BrowserBannerSidebar>

                      <BrowserBannerRectangle
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          y: [0, 2, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: 1,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      >
                        Medium Rectangle 300×250
                      </BrowserBannerRectangle>
                    </BrowserContent>
                  </BrowserMockup>

                  <InteractiveElements>
                    <FloatingIcon
                      className="icon-1"
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      <FaEye />
                    </FloatingIcon>

                    <FloatingIcon
                      className="icon-2"
                      animate={{
                        y: [0, 10, 0],
                        rotate: [0, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        delay: 0.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      <FaMousePointer />
                    </FloatingIcon>

                    <FloatingIcon
                      className="icon-3"
                      animate={{
                        y: [0, -8, 0],
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      <FaAd />
                    </FloatingIcon>

                    <FloatingIcon
                      className="icon-4"
                      animate={{
                        y: [0, 8, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3.8,
                        delay: 1.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      <FaChartBar />
                    </FloatingIcon>
                  </InteractiveElements>
                </SchemeIllustration>
              </BannerSchemeRight>
            </BannerWorkScheme>

            <SchemeTitle>{t('aiBannerMarketingPage.businessBenefitsTitle')}</SchemeTitle>
            <BenefitsList>
              {benefits.map((benefit, index) => (
                <BenefitItem
              key={index}
                  initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <InfoBenefitIcon>{benefit.icon}</InfoBenefitIcon>
                  <BenefitContent>
                    <InfoBenefitTitle>{benefit.title}</InfoBenefitTitle>
                    <InfoBenefitText>{benefit.text}</InfoBenefitText>
                  </BenefitContent>
                </BenefitItem>
              ))}
            </BenefitsList>
          </BannerAnatomy>
        </InfoContainer>
      </InfoSection>

      {/* Новая секция про размещение баннеров */}
      <PlacementSection>
        <PlacementContainer>
          <PlacementTitle>{t('aiBannerMarketingPage.placementTitle')}</PlacementTitle>
          <PlacementDescription>
          {t('aiBannerMarketingPage.placementDescription')}
          </PlacementDescription>

          <PlacementCardsContainer>
            {placementTypes.map((type, index) => (
              <PlacementCard
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <PlacementCardTitle>{type.title}</PlacementCardTitle>
                <PlacementCardDescription>
                  {type.description}
                </PlacementCardDescription>
                <AdvantagesList>
                  {type.advantages.map((advantage, i) => (
                    <AdvantageItem
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                    >
                      <AdvantageIcon>✓</AdvantageIcon>
                      {advantage}
                    </AdvantageItem>
                  ))}
                </AdvantagesList>
              </PlacementCard>
            ))}
          </PlacementCardsContainer>
        </PlacementContainer>
      </PlacementSection>

      {/* Секция реализации баннерных кампаний */}
      <ImplementationSection>
        <ImplBackgroundGradient />
        <ImplBackgroundGrid />

        <ImplementationContainer>
          <ImplementationTitle>
          {t('aiBannerMarketingPage.implementationTitle')}
          </ImplementationTitle>

          <ImplementationDescription>
          {t('aiBannerMarketingPage.implementationDescription')}
          </ImplementationDescription>

          <div className="process-timeline">
            <div className="timeline-line"></div>

            <div className="timeline-node active">
              <div className="node-number">01</div>
              <div className="node-content">
                <h3>{t('aiBannerMarketingPage.step01Title')}</h3>
                <p>
                {t('aiBannerMarketingPage.step01Text')}
                </p>
                <ul className="node-list">
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step01List1')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step01List2')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step01List3')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-number">02</div>
              <div className="node-content">
                <h3>{t('aiBannerMarketingPage.step02Title')}</h3>
                <p>
                {t('aiBannerMarketingPage.step02Text')}
                </p>
                <ul className="node-list">
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step02List1')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step02List2')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step02List3')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-number">03</div>
              <div className="node-content">
                <h3>{t('aiBannerMarketingPage.step03Title')}</h3>
                <p>
                {t('aiBannerMarketingPage.step03Text')}
                </p>
                <ul className="node-list">
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step03List1')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step03List2')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step03List3')}
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-node">
              <div className="node-number">04</div>
              <div className="node-content">
                <h3>{t('aiBannerMarketingPage.step04Title')}</h3>
                <p>
                {t('aiBannerMarketingPage.step04Title')}
                </p>
                <ul className="node-list">
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step04List1')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step04List2')}
                  </li>
                  <li>
                    <span className="check-icon">✓</span>
                    {t('aiBannerMarketingPage.step04List3')}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="results-showcase">
            <div className="result-card">
              <div className="result-icon">
                <FaChartLine />
              </div>
              <div className="result-value">+78%</div>
              <div className="result-label">{t('aiBannerMarketingPage.result1Label')}</div>
            </div>

            <div className="result-card">
              <div className="result-icon">
                <FaUsers />
              </div>
              <div className="result-value">5.2M</div>
              <div className="result-label">{t('aiBannerMarketingPage.result2Label')}</div>
            </div>

            <div className="result-card">
              <div className="result-icon">
                <FaRocket />
              </div>
              <div className="result-value">3.8x</div>
              <div className="result-label">{t('aiBannerMarketingPage.result3Label')}</div>
            </div>
          </div>

          <div className="cta-container">
            <h3 className="cta-title">
            {t('aiBannerMarketingPage.ctaTitle')}
            </h3>
            <p className="cta-description">
            {t('aiBannerMarketingPage.ctaDescription')}
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary" onClick={openModal}>
                <FaComment />
                <span>{t('aiBannerMarketingPage.ctaButton')}</span>
              </button>
            </div>
          </div>
        </ImplementationContainer>

        <style jsx>{`
          .process-timeline {
            position: relative;
            margin: 5rem 0;
            padding: 2rem 0;
          }

          .timeline-line {
            position: absolute;
            left: 50px;
            top: 0;
            bottom: 0;
            width: 3px;
            background: linear-gradient(
              to bottom,
              var(--accent-color) 0%,
              rgba(var(--accent-color-rgb), 0.3) 100%
            );
            z-index: 1;
          }

          .timeline-node {
            display: flex;
            margin-bottom: 5rem;
            position: relative;
            z-index: 2;
          }

          .timeline-node:last-child {
            margin-bottom: 0;
          }

          .node-number {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: rgba(var(--accent-color-rgb), 0.1);
            border: 2px solid var(--accent-color);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--accent-color);
            margin-right: 2rem;
            flex-shrink: 0;
            position: relative;
            z-index: 2;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }

          .timeline-node.active .node-number {
            background: rgba(var(--accent-color-rgb), 0.2);
            box-shadow: 0 0 15px rgba(var(--accent-color-rgb), 0.3);
          }

          .node-content {
            flex: 1;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 2rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.05);
            transition: all 0.3s ease;
          }

          .timeline-node:hover .node-content {
            transform: translateX(10px);
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(var(--accent-color-rgb), 0.3);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          }

          .node-content h3 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
          }

          .node-content p {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-secondary);
            margin-bottom: 1.5rem;
          }

          .node-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .node-list li {
            display: flex;
            align-items: center;
            margin-bottom: 0.8rem;
            font-size: 0.95rem;
            color: var(--text-secondary);
          }

          .check-icon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: rgba(var(--accent-color-rgb), 0.15);
            color: var(--accent-color);
            margin-right: 0.8rem;
            flex-shrink: 0;
            font-size: 0.8rem;
          }

          .results-showcase {
            display: flex;
            justify-content: space-between;
            margin: 5rem 0;
            gap: 2rem;
          }

          .result-card {
            flex: 1;
            background: linear-gradient(
              135deg,
              rgba(var(--accent-color-rgb), 0.2) 0%,
              rgba(var(--accent-color-rgb), 0.05) 100%
            );
            border-radius: 20px;
            padding: 2.5rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(var(--accent-color-rgb), 0.1);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
          }

          .result-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            border-color: rgba(var(--accent-color-rgb), 0.3);
          }

          .result-card::before {
            content: '';
            position: absolute;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(var(--accent-color-rgb), 0.3) 0%,
              transparent 70%
            );
            top: -75px;
            right: -75px;
            opacity: 0.5;
          }

          .result-icon {
            font-size: 2.5rem;
            color: var(--accent-color);
            margin-bottom: 1rem;
          }

          .result-value {
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
            background: linear-gradient(
              135deg,
              var(--text-primary) 0%,
              var(--accent-color) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .result-label {
            font-size: 1rem;
            color: var(--text-secondary);
          }

          .cta-container {
            background: linear-gradient(
              135deg,
              rgba(var(--accent-color-rgb), 0.15) 0%,
              rgba(var(--accent-color-rgb), 0.05) 100%
            );
            border-radius: 20px;
            padding: 3rem;
            text-align: center;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(var(--accent-color-rgb), 0.1);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          }

          .cta-container::before,
          .cta-container::after {
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              rgba(var(--accent-color-rgb), 0.2) 0%,
              transparent 70%
            );
          }

          .cta-container::before {
            top: -100px;
            left: -100px;
          }

          .cta-container::after {
            bottom: -100px;
            right: -100px;
          }

          .cta-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: var(--text-primary);
          }

          .cta-description {
            font-size: 1.1rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
          }

          .cta-button {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
          }

          .cta-button.primary {
            background: var(--accent-color);
            color: white;
            border: none;
            box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
          }

          .cta-button.primary:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.4);
          }

          .cta-button.secondary {
            background: transparent;
            color: var(--text-primary);
            border: 1px solid rgba(var(--accent-color-rgb), 0.5);
          }

          .cta-button.secondary:hover {
            background: rgba(var(--accent-color-rgb), 0.05);
            transform: translateY(-5px);
          }

          @media (max-width: 768px) {
            .timeline-line {
              left: 25px;
            }

            .timeline-node {
              flex-direction: column;
            }

            .node-number {
              width: 50px;
              height: 50px;
              font-size: 1.2rem;
              margin-bottom: 1rem;
              margin-left: auto;
              margin-right: auto;
            }

            .results-showcase {
              flex-direction: column;
            }

            .cta-buttons {
              flex-direction: column;
            }

            .cta-title {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </ImplementationSection>

      {/* Секция аналитики и результатов */}
      <section className="analytics-section">
        <div className="analytics-container">
          <h2 className="analytics-title">{t('aiBannerMarketingPage.analyticsTitle')}</h2>

          <p className="analytics-description">
          {t('aiBannerMarketingPage.analyticsDescription')}
          </p>

          <div className="analytics-cards">
            <div className="analytics-card">
              <div className="card-icon">
                <FaChartBar />
              </div>
              <h3>{t('aiBannerMarketingPage.metricsTitle')}</h3>
              <div className="metrics-list">
                <div className="metric-item">
                  <span className="metric-name">CTR (Click-Through Rate)</span>
                  <p className="metric-desc">
                  {t('aiBannerMarketingPage.metricCTR')}
                  </p>
                </div>

                <div className="metric-item">
                  <span className="metric-name">CPM (Cost Per Mille)</span>
                  <p className="metric-desc">
                    {t('aiBannerMarketingPage.metricCPM')}
                  </p>
                </div>

                <div className="metric-item">
                  <span className="metric-name">CPC (Cost Per Click)</span>
                  <p className="metric-desc">
                  {t('aiBannerMarketingPage.metricCPC')}
                  </p>
                </div>

                <div className="metric-item">
                  <span className="metric-name">CR (Conversion Rate)</span>
                  <p className="metric-desc">
                  {t('aiBannerMarketingPage.metricCR')}
                  </p>
                </div>
              </div>
            </div>

            <div className="analytics-card">
              <div className="card-icon">
                <FaChartLine />
              </div>
              <h3>{t('aiBannerMarketingPage.whatYouGetTitle')}</h3>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-header">
                    <span className="benefit-icon">
                      <FaRegChartBar />
                    </span>
                    <span className="benefit-title">{t('aiBannerMarketingPage.regularReports')}</span>
                  </div>
                  <p>
                  {t('aiBannerMarketingPage.regularReportsDesc')}
                  </p>
                </div>

                <div className="benefit-item">
                  <div className="benefit-header">
                    <span className="benefit-icon">
                      <FaSearchDollar />
                    </span>
                    <span className="benefit-title">{t('aiBannerMarketingPage.roiAnalysis')}</span>
                  </div>
                  <p>
                  {t('aiBannerMarketingPage.roiAnalysisDesc')}
                  </p>
                </div>

                <div className="benefit-item">
                  <div className="benefit-header">
                    <span className="benefit-icon">
                      <FaUsers />
                    </span>
                    <span className="benefit-title">{t('aiBannerMarketingPage.audienceData')}</span>
                  </div>
                  <p>
                  {t('aiBannerMarketingPage.audienceDataDesc')}
                  </p>
                </div>

                <div className="benefit-item">
                  <div className="benefit-header">
                    <span className="benefit-icon">
                      <FaSyncAlt />
                    </span>
                    <span className="benefit-title">
                    {t('aiBannerMarketingPage.realtimeOptimization')}
                    </span>
                  </div>
                  <p>
                  {t('aiBannerMarketingPage.realtimeOptimizationDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="analytics-card wide">
              <div className="card-icon">
                <FaClipboardCheck />
              </div>
              <h3>{t('aiBannerMarketingPage.processTitle')}</h3>

              <div className="process-steps">
                <div className="process-row">
                  <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                      <h4>{t('aiBannerMarketingPage.processStep1')}</h4>
                      <p>
                      {t('aiBannerMarketingPage.processStep1Desc')}
                      </p>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                      <h4>{t('aiBannerMarketingPage.processStep2')}</h4>
                      <p>
                      {t('aiBannerMarketingPage.processStep2Desc')}
                      </p>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                      <h4>{t('aiBannerMarketingPage.processStep3')}</h4>
                      <p>
                      {t('aiBannerMarketingPage.processStep3Desc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="process-row second">
                  <div className="process-step">
                    <div className="step-number">04</div>
                    <div className="step-content">
                      <h4>{t('aiBannerMarketingPage.processStep4')}</h4>
                      <p>
                      {t('aiBannerMarketingPage.processStep4Desc')}
                      </p>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-number">05</div>
                    <div className="step-content">
                      <h4>{t('aiBannerMarketingPage.processStep5')}</h4>
                      <p>
                      {t('aiBannerMarketingPage.processStep5Desc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="analytics-quote">
            <div className="quote-icon">
              <FaQuoteRight />
            </div>
            <blockquote>
            {t('aiBannerMarketingPage.analyticsQuote')}
            </blockquote>
            <div className="quote-author">{t('aiBannerMarketingPage.analyticsQuoteAuthor')}</div>
          </div>

          <div className="analytics-cta">
            <p>
            {t('aiBannerMarketingPage.analyticsCta')}
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary" onClick={openModal}>
                <FaComment />
                <span>{t('aiBannerMarketingPage.analyticsCtaButton')}</span>
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .analytics-section {
            padding: 7rem 0;
            background: linear-gradient(
              180deg,
              rgba(var(--bg-primary-rgb), 0.98) 0%,
              var(--bg-primary) 100%
            );
            position: relative;
            overflow: hidden;
          }

          .analytics-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(var(--accent-color-rgb), 0.4) 50%,
              transparent 100%
            );
          }

          .analytics-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
          }

          .analytics-title {
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: 2.5rem;
            text-align: center;
            background: linear-gradient(
              135deg,
              var(--text-primary) 0%,
              var(--accent-color) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
          }

          .analytics-title:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 2px;
          }

          .analytics-description {
            font-size: 1.2rem;
            line-height: 1.7;
            color: var(--text-secondary);
            max-width: 900px;
            margin: 0 auto 4rem;
            text-align: center;
            position: relative;
          }

          .analytics-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            margin-bottom: 4rem;
          }

          .analytics-card {
            background: rgba(30, 30, 40, 0.7);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 2.5rem;
            position: relative;
            overflow: hidden;
            box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
          }

          .analytics-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
            border-color: rgba(var(--accent-color-rgb), 0.3);
          }

          .analytics-card.wide {
            grid-column: span 2;
            margin-top: 1rem;
          }

          .card-icon {
            font-size: 2.2rem;
            color: var(--accent-color);
            margin-bottom: 1.5rem;
            opacity: 0.9;
          }

          .analytics-card h3 {
            font-size: 1.6rem;
            font-weight: 700;
            margin-bottom: 1.8rem;
            color: var(--text-primary);
            position: relative;
          }

          .analytics-card h3:after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 0;
            width: 40px;
            height: 3px;
            background: var(--accent-color);
            border-radius: 2px;
          }

          .metrics-list {
            display: grid;
            gap: 1.5rem;
          }

          .metric-item {
            position: relative;
          }

          .metric-name {
            display: block;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
          }

          .metric-desc {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-secondary);
          }

          .benefits-list {
            display: grid;
            gap: 1.8rem;
          }

          .benefit-item {
            position: relative;
          }

          .benefit-header {
            display: flex;
            align-items: center;
            margin-bottom: 0.8rem;
          }

          .benefit-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            background: rgba(var(--accent-color-rgb), 0.15);
            border-radius: 50%;
            color: var(--accent-color);
            font-size: 1rem;
            margin-right: 1rem;
          }

          .benefit-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
          }

          .benefit-item p {
            font-size: 1rem;
            line-height: 1.6;
            color: var(--text-secondary);
            padding-left: calc(36px + 1rem);
          }

          .process-steps {
            display: flex;
            flex-direction: column;
            margin-top: 2rem;
            gap: 3rem;
          }

          .process-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
          }

          .process-row.second {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
            max-width: 66%;
            margin: 0 auto;
          }

          .process-step {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: all 0.3s ease;
          }

          .process-step:hover {
            transform: translateY(-5px);
          }

          .step-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            background: rgba(var(--accent-color-rgb), 0.15);
            border: 2px solid var(--accent-color);
            border-radius: 50%;
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--accent-color);
            margin-bottom: 1.2rem;
            position: relative;
            z-index: 2;
            transition: all 0.3s ease;
          }

          .process-step:hover .step-number {
            background: rgba(var(--accent-color-rgb), 0.3);
            box-shadow: 0 0 15px rgba(var(--accent-color-rgb), 0.5);
          }

          .step-content h4 {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.8rem;
            transition: all 0.3s ease;
          }

          .process-step:hover .step-content h4 {
            color: var(--accent-color);
          }

          .analytics-quote {
            background: rgba(var(--accent-color-rgb), 0.1);
            border-left: 4px solid var(--accent-color);
            padding: 2.5rem;
            border-radius: 0 16px 16px 0;
            margin: 4rem 0;
            position: relative;
          }

          .quote-icon {
            position: absolute;
            top: 2rem;
            left: 2.5rem;
            font-size: 2rem;
            color: rgba(var(--accent-color-rgb), 0.3);
          }

          .analytics-quote blockquote {
            font-size: 1.3rem;
            line-height: 1.6;
            font-style: italic;
            color: var(--text-primary);
            margin: 0;
            padding: 0 0 0 3.5rem;
            position: relative;
          }

          .quote-author {
            margin-top: 1.5rem;
            padding-left: 3.5rem;
            font-weight: 600;
            color: var(--accent-color);
            font-size: 1.1rem;
          }

          .analytics-cta {
            text-align: center;
            margin-top: 4rem;
          }

          .analytics-cta p {
            font-size: 1.3rem;
            color: var(--text-primary);
            margin-bottom: 2rem;
          }

          .cta-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
          }

          .cta-btn {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 1rem 2rem;
            border-radius: 8px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            border: none;
          }

          .cta-btn.primary {
            background: var(--accent-color);
            color: white;
          }

          .cta-btn.secondary {
            background: transparent;
            border: 1px solid rgba(var(--accent-color-rgb), 0.5);
            color: var(--text-primary);
          }

          .cta-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          }

          .cta-btn.primary:hover {
            background: rgba(var(--accent-color-rgb), 0.9);
          }

          .cta-btn.secondary:hover {
            background: rgba(var(--accent-color-rgb), 0.1);
          }

          @media (max-width: 1024px) {
            .analytics-cards {
              grid-template-columns: 1fr;
            }

            .analytics-card.wide {
              grid-column: span 1;
            }

            .process-steps {
              grid-template-columns: 1fr;
            }

            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }

            .cta-btn {
              width: 100%;
              justify-content: center;
            }
          }

          @media (max-width: 768px) {
            .analytics-section {
              padding: 5rem 0;
            }

            .analytics-container {
              padding: 0 1.5rem;
            }

            .analytics-title {
              font-size: 2.2rem;
              margin-bottom: 2rem;
            }

            .analytics-description {
              font-size: 1.1rem;
              margin-bottom: 3rem;
              padding: 0 1rem;
            }

            .analytics-cards {
              gap: 1.5rem;
              margin-bottom: 3rem;
            }

            .analytics-card {
              padding: 2rem;
            }

            .card-icon {
              font-size: 1.8rem;
              margin-bottom: 1.2rem;
            }

            .analytics-card h3 {
              font-size: 1.4rem;
              margin-bottom: 1.5rem;
            }

            .process-row {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .process-row.second {
              grid-template-columns: 1fr;
              max-width: 100%;
            }

            .process-steps {
              gap: 2rem;
            }

            .analytics-quote {
              padding: 2rem;
              margin: 3rem 0;
            }

            .analytics-quote blockquote {
              font-size: 1.2rem;
              padding-left: 3rem;
            }

            .quote-author {
              padding-left: 3rem;
            }

            .analytics-cta p {
              font-size: 1.2rem;
              padding: 0 1rem;
            }
  }

  @media (max-width: 576px) {
            .analytics-section {
              padding: 4rem 0;
            }

            .analytics-container {
              padding: 0 1rem;
            }

            .analytics-title {
              font-size: 1.8rem;
              margin-bottom: 1.5rem;
            }

            .analytics-description {
              font-size: 1rem;
              margin-bottom: 2.5rem;
              padding: 0 0.5rem;
            }

            .analytics-cards {
              gap: 1rem;
              margin-bottom: 2.5rem;
            }

            .analytics-card {
              padding: 1.5rem;
            }

            .card-icon {
              font-size: 1.6rem;
              margin-bottom: 1rem;
            }

            .analytics-card h3 {
              font-size: 1.3rem;
              margin-bottom: 1.2rem;
            }

            .metric-name {
              font-size: 1rem;
            }

            .metric-desc, .benefit-item p {
              font-size: 0.95rem;
            }

            .benefit-icon {
              width: 32px;
              height: 32px;
              font-size: 0.9rem;
              margin-right: 0.8rem;
            }

            .benefit-title {
              font-size: 1rem;
            }

            .benefit-item p {
              padding-left: calc(32px + 0.8rem);
            }

            .step-number {
              width: 40px;
              height: 40px;
              font-size: 1rem;
              margin-bottom: 1rem;
            }

            .step-content h4 {
              font-size: 1.1rem;
              margin-bottom: 0.6rem;
            }

            .step-content p {
              font-size: 0.95rem;
            }

            .analytics-quote {
              padding: 1.5rem;
              margin: 2.5rem 0;
            }

            .quote-icon {
              top: 1.5rem;
              left: 1.5rem;
              font-size: 1.6rem;
            }

            .analytics-quote blockquote {
              font-size: 1.1rem;
              padding-left: 2.5rem;
            }

            .quote-author {
              padding-left: 2.5rem;
              font-size: 1rem;
            }

            .analytics-cta p {
              font-size: 1.1rem;
              padding: 0 0.5rem;
              margin-bottom: 1.5rem;
            }

            .cta-btn {
              padding: 0.9rem 1.5rem;
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .analytics-section {
              padding: 3rem 0;
            }

            .analytics-container {
              padding: 0 0.75rem;
            }

            .analytics-title {
              font-size: 1.6rem;
              margin-bottom: 1.2rem;
            }

            .analytics-description {
              font-size: 0.95rem;
              margin-bottom: 2rem;
              padding: 0 0.25rem;
              line-height: 1.6;
            }

            .analytics-cards {
              gap: 0.8rem;
              margin-bottom: 2rem;
            }

            .analytics-card {
              padding: 1.2rem;
            }

            .card-icon {
              font-size: 1.4rem;
              margin-bottom: 0.8rem;
            }

            .analytics-card h3 {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }

            .metrics-list, .benefits-list {
              gap: 1rem;
            }

            .metric-name {
              font-size: 0.95rem;
              margin-bottom: 0.4rem;
            }

            .metric-desc, .benefit-item p {
              font-size: 0.9rem;
              line-height: 1.5;
            }

            .benefit-header {
              margin-bottom: 0.6rem;
            }

            .benefit-icon {
              width: 28px;
              height: 28px;
              font-size: 0.8rem;
              margin-right: 0.6rem;
            }

            .benefit-title {
              font-size: 0.95rem;
            }

            .benefit-item p {
              padding-left: calc(28px + 0.6rem);
            }

            .process-steps {
              gap: 1.5rem;
              margin-top: 1.5rem;
            }

            .step-number {
              width: 36px;
              height: 36px;
              font-size: 0.9rem;
              margin-bottom: 0.8rem;
            }

            .step-content h4 {
              font-size: 1rem;
              margin-bottom: 0.5rem;
            }

            .step-content p {
              font-size: 0.9rem;
              line-height: 1.5;
            }

            .analytics-quote {
              padding: 1.2rem;
              margin: 2rem 0;
            }

            .quote-icon {
              top: 1.2rem;
              left: 1.2rem;
              font-size: 1.4rem;
            }

            .analytics-quote blockquote {
              font-size: 1rem;
              padding-left: 2rem;
              line-height: 1.5;
            }

            .quote-author {
              padding-left: 2rem;
              font-size: 0.95rem;
              margin-top: 1.2rem;
            }

            .analytics-cta {
              margin-top: 3rem;
            }

            .analytics-cta p {
              font-size: 1rem;
              padding: 0 0.25rem;
              margin-bottom: 1.2rem;
              line-height: 1.5;
            }

            .cta-btn {
              padding: 0.8rem 1.2rem;
              font-size: 0.95rem;
    gap: 0.6rem;
            }
          }

          @media (max-width: 400px) {
            .analytics-section {
              padding: 2.5rem 0;
            }

            .analytics-container {
              padding: 0 0.5rem;
            }

            .analytics-title {
              font-size: 1.4rem;
              margin-bottom: 1rem;
            }

            .analytics-title:after {
              width: 60px;
              height: 3px;
            }

            .analytics-description {
              font-size: 0.9rem;
              margin-bottom: 1.8rem;
              padding: 0;
            }

            .analytics-cards {
              gap: 0.6rem;
              margin-bottom: 1.8rem;
            }

            .analytics-card {
              padding: 1rem;
            }

            .card-icon {
              font-size: 1.2rem;
              margin-bottom: 0.6rem;
            }

            .analytics-card h3 {
              font-size: 1.1rem;
              margin-bottom: 0.8rem;
            }

            .analytics-card h3:after {
              width: 30px;
              height: 2px;
            }

            .metrics-list, .benefits-list {
              gap: 0.8rem;
            }

            .metric-name {
              font-size: 0.9rem;
              margin-bottom: 0.3rem;
            }

            .metric-desc, .benefit-item p {
              font-size: 0.85rem;
              line-height: 1.4;
            }

            .benefit-icon {
              width: 24px;
              height: 24px;
              font-size: 0.7rem;
              margin-right: 0.5rem;
            }

            .benefit-title {
              font-size: 0.9rem;
            }

            .benefit-item p {
              padding-left: calc(24px + 0.5rem);
            }

            .step-number {
              width: 32px;
              height: 32px;
              font-size: 0.8rem;
              margin-bottom: 0.6rem;
            }

            .step-content h4 {
              font-size: 0.95rem;
              margin-bottom: 0.4rem;
            }

            .step-content p {
              font-size: 0.85rem;
            }

            .analytics-quote {
              padding: 1rem;
              margin: 1.5rem 0;
            }

            .quote-icon {
              top: 1rem;
              left: 1rem;
              font-size: 1.2rem;
            }

            .analytics-quote blockquote {
              font-size: 0.95rem;
              padding-left: 1.8rem;
            }

            .quote-author {
              padding-left: 1.8rem;
              font-size: 0.9rem;
              margin-top: 1rem;
            }

            .analytics-cta p {
              font-size: 0.95rem;
              margin-bottom: 1rem;
            }

            .cta-btn {
              padding: 0.7rem 1rem;
              font-size: 0.9rem;
              gap: 0.5rem;
            }
          }
        `}</style>
      </section>

      {/* Блок с преимуществами */}
      <section className="benefits-section">
        <div className="benefits-container">
          <h2 className="benefits-title">
            {t('aiBannerMarketingPage.benefitsTitle')}
          </h2>

          <p className="benefits-description">
          {t('aiBannerMarketingPage.benefitsDescription')}
          </p>

          <div className="benefits-cards">
            <div className="benefits-card">
              <div className="card-header">
                <div className="card-icon">
                  <div className="icon-bg">
                    <FaBriefcase />
                  </div>
                </div>
                <h3>{t('aiBannerMarketingPage.experienceTitle')}</h3>
              </div>

              <div className="card-content">
                <p>
                {t('aiBannerMarketingPage.experienceText')}
                </p>

                <div className="approach-list">
                  <h4>{t('aiBannerMarketingPage.approachTitle')}</h4>
                  <ul>
                    <li>
                      <div className="list-marker">
                        <FaSearch />
                      </div>
                      <div className="list-content">
                        <strong>{t('aiBannerMarketingPage.approach1')}</strong>
                        <p>
                        {t('aiBannerMarketingPage.approach1Desc')}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="list-marker">
                        <FaCalendarAlt />
                      </div>
                      <div className="list-content">
                        <strong>{t('aiBannerMarketingPage.approach2')}</strong>
                        <p>
                        {t('aiBannerMarketingPage.approach2Desc')}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="list-marker">
                        <FaGlobeEurope />
                      </div>
                      <div className="list-content">
                        <strong>
                        {t('aiBannerMarketingPage.approach3')}
                        </strong>
                        <p>
                        {t('aiBannerMarketingPage.approach3Desc')}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="industries-container">
                <div className="industries-row">
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaShoppingCart />
                    </div>
                    <span>E-commerce</span>
                  </div>
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaChartLine />
                    </div>
                    <span> {t('aiBannerMarketingPage.industries.item2')}</span>
                  </div>
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaPlane />
                    </div>
                    <span>{t('aiBannerMarketingPage.industries.item3')}</span>
                  </div>
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaGraduationCap />
                    </div>
                    <span>{t('aiBannerMarketingPage.industries.item4')}</span>
                  </div>
                </div>
                <div className="industries-row">
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaHandshake />
                    </div>
                    <span>B2B</span>
                  </div>
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaHeartbeat />
                    </div>
                    <span>{t('aiBannerMarketingPage.industries.item6')}</span>
                  </div>
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaUtensils />
                    </div>
                    <span>HoReCa</span>
                  </div>
                  <div className="industry-item">
                    <div className="industry-icon">
                      <FaEllipsisH />
                    </div>
                    <span>{t('aiBannerMarketingPage.industries.item8')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="benefits-card">
              <div className="card-header">
                <div className="card-icon">
                  <div className="icon-bg">
                    <FaChartPie />
                  </div>
                </div>
                <h3>{t('aiBannerMarketingPage.transparencyTitle')}</h3>
              </div>

              <div className="card-content">
                <p>
                {t('aiBannerMarketingPage.transparencyText')}
                </p>

                <div className="features-list">
                  <h4>{t('aiBannerMarketingPage.whatYouGet')}</h4>
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaChartBar />
                      </div>
                      <div className="feature-content">
                        <h5>{t('aiBannerMarketingPage.reportMetrics')}</h5>
                        <p>
                        {t('aiBannerMarketingPage.reportMetricsDesc')}
                        </p>
                      </div>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaComments />
                      </div>
                      <div className="feature-content">
                        <h5>{t('aiBannerMarketingPage.consult')}</h5>
                        <p>
                        {t('aiBannerMarketingPage.consultDesc')}
                        </p>
                      </div>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaHeadset />
                      </div>
                      <div className="feature-content">
                        <h5>{t('aiBannerMarketingPage.manager')}</h5>
                        <p>
                        {t('aiBannerMarketingPage.managerDesc')}
                        </p>
                      </div>
                    </div>

                    <div className="feature-item">
                      <div className="feature-icon">
                        <FaLightbulb />
                      </div>
                      <div className="feature-content">
                        <h5>{t('aiBannerMarketingPage.creativeIdeas')}</h5>
                        <p>
                        {t('aiBannerMarketingPage.creativeIdeasDesc')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="testimonial">
                <div className="testimonial-content">
                  <FaQuoteLeft className="quote-icon" />
                  <p>
                  {t('aiBannerMarketingPage.testimonialText')}
                  </p>
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar"></div>
                  <div className="author-info">
                    <h5>{t('aiBannerMarketingPage.testimonialAuthor')}</h5>
                    <p>{t('aiBannerMarketingPage.testimonialAuthorRole')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .benefits-section {
            padding: 8rem 0;
            background: linear-gradient(
              180deg,
              var(--bg-primary) 0%,
              rgba(var(--bg-primary-rgb), 0.95) 100%
            );
            position: relative;
            overflow: hidden;
          }

          .benefits-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(var(--accent-color-rgb), 0.4) 50%,
              transparent 100%
            );
          }

          .benefits-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            position: relative;
            z-index: 2;
          }

          .benefits-title {
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: 2.5rem;
            text-align: center;
            background: linear-gradient(
              135deg,
              var(--text-primary) 0%,
              var(--accent-color) 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
          }

          .benefits-title:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--accent-color);
            border-radius: 2px;
          }

          .benefits-description {
            font-size: 1.2rem;
            line-height: 1.7;
            color: var(--text-secondary);
            max-width: 900px;
            margin: 0 auto 4rem;
            text-align: center;
            position: relative;
          }

          .benefits-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem;
            margin-bottom: 4rem;
          }

          .benefits-card {
            background: rgba(30, 30, 40, 0.7);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
            display: flex;
    flex-direction: column;
          }

          .benefits-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px -15px rgba(0, 0, 0, 0.4);
            border-color: rgba(var(--accent-color-rgb), 0.3);
          }

          .card-header {
            padding: 2.5rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }

          .card-icon {
            flex-shrink: 0;
          }

          .icon-bg {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(
              135deg,
              rgba(var(--accent-color-rgb), 0.2) 0%,
              rgba(var(--accent-color-rgb), 0.4) 100%
            );
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            color: var(--accent-color);
          }

          .card-header h3 {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--text-primary);
            margin: 0;
          }

          .card-content {
            padding: 2.5rem;
            flex: 1;
          }

          .card-content > p {
            font-size: 1.1rem;
            line-height: 1.7;
            color: var(--text-secondary);
            margin-bottom: 2.5rem;
          }

          .approach-list h4,
          .features-list h4 {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 1.5rem;
          }

          .approach-list ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
          }

          .approach-list li {
            display: flex;
            gap: 1.2rem;
            align-items: flex-start;
          }

          .list-marker {
            width: 40px;
            height: 40px;
            background: rgba(var(--accent-color-rgb), 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
            font-size: 1.1rem;
            flex-shrink: 0;
          }

          .list-content {
            flex: 1;
          }

          .list-content strong {
            display: block;
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 0.5rem;
          }

          .list-content p {
            font-size: 1rem;
            color: var(--text-secondary);
            line-height: 1.5;
            margin: 0;
          }

          .industries-container {
            padding: 2rem 2.5rem;
            background: rgba(0, 0, 0, 0.2);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            margin-top: auto;
          }

          .industries-row {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 1.5rem;
          }

          .industries-row:last-child {
            margin-bottom: 0;
          }

          .industry-item {
            display: flex;
            flex-direction: column;
            align-items: center;
    gap: 0.8rem;
            flex: 1;
          }

          .industry-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: rgba(var(--accent-color-rgb), 0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
            font-size: 1.3rem;
          }

          .industry-item span {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-secondary);
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .feature-item {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
          }

          .feature-icon {
            width: 40px;
            height: 40px;
            background: rgba(var(--accent-color-rgb), 0.15);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--accent-color);
            font-size: 1.1rem;
            flex-shrink: 0;
          }

          .feature-content {
            flex: 1;
          }

          .feature-content h5 {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 0 0 0.5rem 0;
          }

          .feature-content p {
            font-size: 0.95rem;
            color: var(--text-secondary);
            line-height: 1.5;
            margin: 0;
          }

          .testimonial {
            padding: 2.5rem;
            background: rgba(var(--accent-color-rgb), 0.1);
            border-top: 1px solid rgba(var(--accent-color-rgb), 0.2);
            margin-top: auto;
          }

          .testimonial-content {
            position: relative;
            margin-bottom: 1.5rem;
          }

          .quote-icon {
            position: absolute;
            top: 0;
            left: 0;
            font-size: 1.5rem;
            color: rgba(var(--accent-color-rgb), 0.3);
          }

          .testimonial-content p {
            font-size: 1.05rem;
            line-height: 1.7;
            color: var(--text-primary);
            font-style: italic;
            padding-left: 2.5rem;
            margin: 0;
          }

          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 1rem;
          }

          .author-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #777;
            background-image: url('https://i.pravatar.cc/100');
            background-size: cover;
            background-position: center;
          }

          .author-info h5 {
            font-size: 1rem;
            font-weight: 600;
            color: var(--text-primary);
            margin: 0 0 0.3rem 0;
          }

          .author-info p {
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin: 0;
          }

          .benefits-action {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .action-btn {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1.2rem 2.5rem;
            background: var(--accent-color);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 1.2rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
          }

          .action-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.4);
            background: rgba(var(--accent-color-rgb), 0.9);
          }

          .action-caption {
            font-size: 1rem;
            color: var(--text-secondary);
          }

          @media (max-width: 1024px) {
            .benefits-cards {
              grid-template-columns: 1fr;
            }

            .features-grid {
              grid-template-columns: 1fr;
            }

            .industries-row {
              flex-wrap: wrap;
              justify-content: center;
            }

            .industry-item {
              width: calc(50% - 1rem);
              flex: none;
            }
          }

          @media (max-width: 768px) {
            .card-header {
              flex-direction: column;
              text-align: center;
              gap: 1rem;
            }

            .approach-list li {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 0.8rem;
            }

            .feature-item {
              flex-direction: column;
              align-items: center;
              text-align: center;
              gap: 0.8rem;
            }

            .testimonial-author {
              flex-direction: column;
              text-align: center;
            }
          }
        `}</style>
      </section>

      {/* FAQ Section */}
      <FaqSection>
        <FaqWaveTop />

        <FaqContainer>
          <FaqGlowCircle className="circle-1" />
          <FaqGlowCircle className="circle-2" />

          <FaqTitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </FaqTitle>

          <FaqList
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <FaqItemContent
                  layout
                  initial={{ borderRadius: 16 }}
                  transition={{
                    layout: {
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    },
                  }}
                >
                  <FaqQuestion
                    layout
                    onClick={() => toggleFaq(index)}
                    whileHover={{ color: 'var(--accent-color)' }}
                  >
                    <FaqQuestionText>{faq.question}</FaqQuestionText>
                    <FaqToggle
                      animate={{
                        rotate: expandedFaqs.includes(index) ? 45 : 0,
                        backgroundColor: expandedFaqs.includes(index)
                          ? 'rgba(var(--accent-color-rgb), 0.15)'
                          : 'rgba(var(--accent-color-rgb), 0.05)',
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <FaPlus />
                    </FaqToggle>
                  </FaqQuestion>

                  <AnimatePresence>
                    {expandedFaqs.includes(index) && (
                      <FaqAnswer
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          type: 'spring',
                          damping: 40,
                          stiffness: 60,
                          mass: 1,
                          opacity: { duration: 0.5, ease: 'easeInOut' },
                          height: { duration: 0.4, ease: 'easeInOut' },
                        }}
                      >
                        {faq.answer}
                      </FaqAnswer>
                    )}
                  </AnimatePresence>
                </FaqItemContent>
              </FaqItem>
            ))}
          </FaqList>

          <FaqCta
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FaqCtaText>
            {t('aiBannerMarketingPage.faqCta')}
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              {t('aiBannerMarketingPage.faqCtaButton')} <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default AIBannerMarketing; 
