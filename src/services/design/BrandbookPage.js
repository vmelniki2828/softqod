import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaSwatchbook,
  FaArrowRight,
  FaChevronRight,
  FaCheck,
  FaUsers,
  FaFont,
  FaLightbulb,
  FaRocket,
  FaCubes,
  FaBuilding,
  FaTools,
  FaBrain,
  FaComments,
  FaImage,
  FaPhotoVideo,
  FaObjectGroup,
  FaTimes,
} from 'react-icons/fa';
import { HiOutlineTemplate } from 'react-icons/hi';
import { MdOutlineFormatColorFill, MdGridOn } from 'react-icons/md';
import { TbPhotoCheck, TbPhotoX } from 'react-icons/tb';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(
    125deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  border-radius: 20px;
  margin-bottom: 4rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 40%
      );
    z-index: 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 0 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.2rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  span {
    position: relative;
    display: inline-block;
    color: var(--accent-color-light);
    -webkit-text-fill-color: currentColor;
    text-fill-color: currentColor;
    margin: 0 0.2rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--accent-color-light);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 500px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    background: #ff7b00;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(255, 123, 0, 0.4);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled(motion.button)`
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.5);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
    transform: translateY(-2px);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroFeatures = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeroFeatureIcon = styled.div`
  color: var(--accent-color-light);
  font-size: 1.2rem;
  display: flex;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

// Анимация для элементов брендбука
const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const BrandbookPreview = styled(motion.div)`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  @media (max-width: 992px) {
    order: 1;
    height: 350px;
  }
`;

const BrandbookContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 400px;
  transform-style: preserve-3d;
  z-index: 2;
`;

const BrandbookCover = styled(motion.div)`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 2;
`;

const BrandbookTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color-dark);
  margin-bottom: 1rem;
  text-align: center;
`;

const BrandbookLogo = styled.div`
  width: 100px;
  height: 100px;
  background: var(--accent-color);
  border-radius: 50%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`;

const PageElement = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const ColorPalette = styled(PageElement)`
  width: 120px;
  height: 150px;
  top: -30px;
  right: -50px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: ${float} 6s infinite ease-in-out;
`;

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${props => props.color};
`;

const ColorRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const TypographyElement = styled(PageElement)`
  width: 150px;
  height: 100px;
  bottom: 30px;
  left: -70px;
  flex-direction: column;
  animation: ${float} 7s infinite ease-in-out;
  animation-delay: 1s;
`;

const FontSample = styled.div`
  font-family: ${props => props.fontFamily || 'inherit'};
  font-size: ${props => props.fontSize || '12px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  color: #333;
  margin: 5px 0;
`;

const LogoVariation = styled(PageElement)`
  width: 100px;
  height: 60px;
  top: 50px;
  left: -40px;
  animation: ${float} 8s infinite ease-in-out;
  animation-delay: 0.5s;
`;

const BrandbookGlow = styled(motion.div)`
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(
    circle at center,
    rgba(var(--accent-color-rgb), 0.5) 0%,
    transparent 70%
  );
  filter: blur(60px);
  opacity: 0.3;
  z-index: -1;
`;

// Добавляем новые компоненты для блока "Що таке брендбук"
const AboutBrandbookSection = styled.section`
  margin: 8rem 0;
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const AboutBackgroundDecoration = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.3;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      transparent 70%
    );
    filter: blur(60px);
    opacity: 0.4;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--accent-color-dark) 0%,
      transparent 70%
    );
    filter: blur(80px);
    opacity: 0.3;
  }
`;

const GridPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
  background-size: 30px 30px;
  z-index: -1;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const SparkleAnimation = keyframes`
  0% { transform: translateY(0) rotate(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(-20px) rotate(45deg); opacity: 0; }
`;

const Sparkle = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  background: var(--accent-color);
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
  opacity: 0;
  animation: ${SparkleAnimation} 2s infinite;
  animation-delay: ${props => props.delay || '0s'};
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
`;

const BrandbookDescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`;

// Полностью заменяем анимацию и стиль книги на более простую версию
const SimpleBookContainer = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 300px;
  margin: 0 auto 5rem;
  perspective: 800px;
`;

const BookCover = styled(motion.div)`
  width: 200px;
  height: 300px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
  position: relative;
  padding: 2rem;
`;

const BookLogo = styled.div`
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const BookContent = styled.div`
  text-align: center;
  color: white;
`;

const BookTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const BookSubtitle = styled.div`
  font-size: 1rem;
  opacity: 0.8;
`;

const BookEdge = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.2);

  &.right {
    width: 15px;
    height: 300px;
    right: -15px;
    top: 0;
    transform: skewY(-45deg);
    transform-origin: 0 0;
  }

  &.bottom {
    width: 200px;
    height: 15px;
    bottom: -15px;
    left: 0;
    transform: skewX(-45deg);
    transform-origin: 100% 0;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const shineEffect = keyframes`
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const FeatureCardContainer = styled(motion.div)`
  padding: 2.5rem 2rem;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shineEffect} 4s linear infinite;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;

  svg {
    filter: drop-shadow(0 0 5px rgba(var(--accent-color-rgb), 0.5));
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const FeatureDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const WarningBox = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1),
    rgba(0, 0, 0, 0.1)
  );
  border-radius: 16px;
  padding: 2.5rem;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: var(--accent-color);
  }
`;

const WarningTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.7rem;

  svg {
    color: var(--accent-color);
  }
`;

const WarningText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

// Добавляем новые компоненты для блока "Що входить до брендбуку"
const ComponentsSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.95) 100%
  );
  position: relative;
  overflow: hidden;
`;

const SectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.05;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const ComponentsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ComponentsIntro = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
`;

const ComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Анимация для карточек
const glowPulse = keyframes`
  0% { box-shadow: 0 0 0 rgba(var(--accent-color-rgb), 0); }
  50% { box-shadow: 0 0 20px rgba(var(--accent-color-rgb), 0.3); }
  100% { box-shadow: 0 0 0 rgba(var(--accent-color-rgb), 0); }
`;

const ComponentCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    animation: ${glowPulse} 2s infinite;
  }
`;

const ComponentCardHeader = styled.div`
  background: linear-gradient(
    90deg,
    rgba(var(--accent-color-rgb), 0.2) 0%,
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ComponentIcon = styled.div`
  width: 50px;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  background: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 5px 15px rgba(var(--accent-color-rgb), 0.3);
`;

const ComponentTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--text-primary);
  margin: 0;
`;

const ComponentCardBody = styled.div`
  padding: 1.5rem;
  flex: 1;
`;

const ComponentDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ComponentExample = styled.div`
  margin-top: 1.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    width: 30px;
    height: 2px;
    background: var(--accent-color);
  }
`;

const ExampleTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  opacity: 0.7;
`;

const ExampleContent = styled.div`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

// Визуализация компонентов брендбука
const LogoPreviews = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  .logo {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    border-radius: 8px;

    &.light {
      background: white;
      color: var(--accent-color);
    }

    &.dark {
      background: #333;
      color: white;
    }

    &.color {
      background: var(--accent-color);
      color: white;
    }
  }
`;

const ColorSwatch = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  .swatch {
    width: 30px;
    height: 30px;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &.primary {
      background: var(--accent-color);
    }

    &.secondary {
      background: var(--accent-color-dark);
    }

    &.light {
      background: #e9ecef;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }

    &.dark {
      background: #212529;
    }

    &.muted {
      background: #6c757d;
    }
  }
`;

const FontPreview = styled.div`
  margin-top: 1rem;

  .heading {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .body {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9rem;
  }
`;

const IconGrid = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;

  .icon-item {
    width: 28px;
    height: 28px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: var(--accent-color);
  }
`;

const TemplatePreview = styled.div`
  margin-top: 1rem;

  .template-box {
    height: 60px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    color: var(--text-secondary);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background: linear-gradient(90deg, var(--accent-color), transparent);
    }
  }
`;

const DosDonts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 1rem;

  .box {
    padding: 0.5rem;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &.do {
      background: rgba(0, 200, 83, 0.1);
      color: #00c853;
    }

    &.dont {
      background: rgba(244, 67, 54, 0.1);
      color: #f44336;
    }
  }
`;

const ComponentsNote = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1),
    rgba(0, 0, 0, 0.1)
  );
  border-radius: 16px;
  padding: 2rem;
  margin-top: 4rem;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
  }
`;

const SectionCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: 0;

  &.top-right {
    top: -150px;
    right: -150px;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 60%
    );
    filter: blur(50px);
  }

  &.bottom-left {
    bottom: -200px;
    left: -200px;
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-dark-rgb), 0.08) 0%,
      transparent 70%
    );
    filter: blur(70px);
  }
`;

const BrandbookPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Брендбук для вашого бізнесу — візуальна <span>ідентичність</span>,
              яка працює
            </HeroTitle>

            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              У сучасному конкурентному середовищі компаніям недостатньо просто
              мати логотип. Потрібно мати цілісну, зрозумілу систему візуальної
              ідентичності. Брендбук — це інструмент, який гарантує стабільність
              бренду у всіх точках контакту з аудиторією.
            </HeroDescription>

            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Замовити брендбук <FaArrowRight />
              </PrimaryButton>

              <SecondaryButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Приклади робіт <FaChevronRight />
              </SecondaryButton>
            </HeroButtons>

            <HeroFeatures
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FeatureItem>
                <HeroFeatureIcon>
                  <FaLightbulb />
                </HeroFeatureIcon>
                <FeatureText>Унікальність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaUsers />
                </HeroFeatureIcon>
                <FeatureText>Впізнаваність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaRocket />
                </HeroFeatureIcon>
                <FeatureText>Ефективність</FeatureText>
              </FeatureItem>
            </HeroFeatures>
          </HeroContent>

          <BrandbookPreview
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <BrandbookGlow
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1.1, 0.8],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <BrandbookContainer
              animate={{
                y: [0, -15, 0],
                rotateY: [5, -5, 5],
                rotateX: [5, 2, 5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <BrandbookCover>
                <BrandbookTitle>BRANDBOOK</BrandbookTitle>
                <BrandbookLogo>
                  <FaSwatchbook />
                </BrandbookLogo>
                <div
                  style={{
                    textAlign: 'center',
                    color: '#333',
                    marginTop: '1rem',
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>КОМПАНІЯ</p>
                  <p style={{ fontSize: '0.9rem' }}>Фірмовий стиль</p>
                </div>
              </BrandbookCover>

              <ColorPalette>
                <ColorRow>
                  <ColorCircle color="#FF5733" />
                  <ColorCircle color="#33A8FF" />
                </ColorRow>
                <ColorRow>
                  <ColorCircle color="#33FF57" />
                  <ColorCircle color="#D133FF" />
                </ColorRow>
                <ColorRow>
                  <ColorCircle color="#FFD133" />
                  <ColorCircle color="#333333" />
                </ColorRow>
              </ColorPalette>

              <TypographyElement>
                <FontSample
                  fontFamily="Arial"
                  fontSize="18px"
                  fontWeight="bold"
                >
                  Header
                </FontSample>
                <FontSample fontFamily="Georgia" fontSize="14px">
                  Subheader
                </FontSample>
                <FontSample fontFamily="Verdana" fontSize="12px">
                  Body text
                </FontSample>
              </TypographyElement>

              <LogoVariation>
                <FaSwatchbook
                  style={{ fontSize: '2rem', color: 'var(--accent-color)' }}
                />
              </LogoVariation>
            </BrandbookContainer>
          </BrandbookPreview>
        </HeroContainer>
      </HeroSection>

      {/* Новый блок "Що таке брендбук і навіщо він потрібен" */}
      <AboutBrandbookSection>
        <AboutBackgroundDecoration>
          <GridPattern />
        </AboutBackgroundDecoration>

        <AboutContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            Що таке брендбук і навіщо він потрібен
            <Sparkle top="-15px" left="25%" delay="0s" />
            <Sparkle top="10px" left="65%" delay="0.5s" />
            <Sparkle top="30px" left="45%" delay="1s" />
          </SectionTitle>

          <BrandbookDescription
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Брендбук — це документ, який містить всі правила візуального та
            вербального оформлення бренду. Його основна мета — забезпечити
            єдиний стиль компанії незалежно від того, хто створює контент:
            дизайнер, маркетолог чи підрядник.
          </BrandbookDescription>

          <SimpleBookContainer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            animate={{
              y: [0, -10, 0],
              transition: {
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              },
            }}
          >
            <BookCover
              animate={{ rotateY: [-2, 2, -2] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <BookLogo>
                <FaSwatchbook />
              </BookLogo>
              <BookContent>
                <BookTitle>BRAND BOOK</BookTitle>
                <BookSubtitle>Повне керівництво</BookSubtitle>
              </BookContent>
              <BookEdge className="right" />
              <BookEdge className="bottom" />
            </BookCover>
          </SimpleBookContainer>

          <CardsContainer>
            <FeatureCardContainer
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <FeatureIcon>
                <FaCubes />
              </FeatureIcon>
              <FeatureTitle>Системність</FeatureTitle>
              <FeatureDescription>
                Усі елементи бренду використовуються послідовно, без
                випадковостей. Логотип, кольори, шрифти та графічні елементи
                становлять єдине ціле.
              </FeatureDescription>
            </FeatureCardContainer>

            <FeatureCardContainer
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <FeatureIcon>
                <FaBuilding />
              </FeatureIcon>
              <FeatureTitle>Професійність</FeatureTitle>
              <FeatureDescription>
                Ваш бренд виглядає серйозно й надійно на всіх платформах.
                Клієнти та партнери сприймають компанію як стабільну та
                професійну.
              </FeatureDescription>
            </FeatureCardContainer>

            <FeatureCardContainer
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <FeatureIcon>
                <FaUsers />
              </FeatureIcon>
              <FeatureTitle>Впізнаваність</FeatureTitle>
              <FeatureDescription>
                Клієнт швидше запам'ятовує і довіряє бренду зі стабільною
                айдентикою. Регулярність візуальних елементів підвищує
                лояльність і довіру.
              </FeatureDescription>
            </FeatureCardContainer>

            <FeatureCardContainer
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <FeatureIcon>
                <FaTools />
              </FeatureIcon>
              <FeatureTitle>Зручність для команди</FeatureTitle>
              <FeatureDescription>
                Замість тисячі пояснень ви просто надсилаєте брендбук. Економія
                часу та зусиль при роботі з підрядниками та новими
                співробітниками.
              </FeatureDescription>
            </FeatureCardContainer>
          </CardsContainer>

          <WarningBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <WarningTitle>
              <FaBrain />
              Без брендбуку бренд втрачає цілісність
            </WarningTitle>
            <WarningText>
              Без брендбуку бренд легко «розпадається»: кольори, шрифти та
              меседжі втрачають логіку, а враження від компанії — чіткість. Це
              як оркестр без диригента — кожен грає свою мелодію, але гармонії
              не виникає.
            </WarningText>
          </WarningBox>
        </AboutContainer>
      </AboutBrandbookSection>

      {/* Новый блок "Що входить до брендбуку" */}
      <ComponentsSection>
        <SectionBackground />
        <SectionCircle className="top-right" />
        <SectionCircle className="bottom-left" />

        <ComponentsContainer>
          <ComponentsIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle>Що входить до брендбуку</SectionTitle>
            <BrandbookDescription>
              Повноцінний брендбук охоплює всі ключові елементи, які формують
              візуальний стиль і голос бренду. Це не просто набір картинок — це
              чітка інструкція, як має виглядати й звучати ваш бізнес у
              будь-якому контексті.
            </BrandbookDescription>
          </ComponentsIntro>

          <ComponentsGrid>
            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <FaImage />
                </ComponentIcon>
                <ComponentTitle>Логотип</ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Варіанти використання, мінімальні відступи, заборонені
                  комбінації, застосування на різному фоні.
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <LogoPreviews>
                      <div className="logo light">B</div>
                      <div className="logo dark">B</div>
                      <div className="logo color">B</div>
                    </LogoPreviews>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>

            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <MdOutlineFormatColorFill />
                </ComponentIcon>
                <ComponentTitle>Кольорова палітра</ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Основні й додаткові кольори з точними кодами для друку й
                  цифрового використання.
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <ColorSwatch>
                      <div className="swatch primary" title="Primary"></div>
                      <div className="swatch secondary" title="Secondary"></div>
                      <div className="swatch dark" title="Dark"></div>
                      <div className="swatch muted" title="Muted"></div>
                      <div className="swatch light" title="Light"></div>
                    </ColorSwatch>
                    <div
                      style={{
                        fontSize: '0.8rem',
                        marginTop: '0.5rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Primary / Secondary / Dark / Muted / Light
                    </div>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>

            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <FaFont />
                </ComponentIcon>
                <ComponentTitle>Типографіка</ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Основні й акцентні шрифти, правила їхнього застосування,
                  розміри, інтерліньяж.
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <FontPreview>
                      <div className="heading">Montserrat Bold</div>
                      <div className="body">Open Sans Regular</div>
                    </FontPreview>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>

            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <MdGridOn />
                </ComponentIcon>
                <ComponentTitle>Іконки та графічні елементи</ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Стиль, пропорції, приклади використання графічних елементів.
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <IconGrid>
                      <div className="icon-item">
                        <FaLightbulb />
                      </div>
                      <div className="icon-item">
                        <FaRocket />
                      </div>
                      <div className="icon-item">
                        <FaUsers />
                      </div>
                      <div className="icon-item">
                        <FaCubes />
                      </div>
                      <div className="icon-item">
                        <FaTools />
                      </div>
                      <div className="icon-item">
                        <FaBrain />
                      </div>
                    </IconGrid>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>

            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <HiOutlineTemplate />
                </ComponentIcon>
                <ComponentTitle>Візуальні шаблони</ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Приклади оформлення презентацій, візиток, упаковки, банерів,
                  постів у соцмережах.
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <TemplatePreview>
                      <div className="template-box">Візитка</div>
                    </TemplatePreview>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>

            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <FaPhotoVideo />
                </ComponentIcon>
                <ComponentTitle>Гайд по фотографії</ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Стиль зображень, які можна використовувати для комунікації
                  бренду (якщо доречно).
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <IconGrid>
                      <div className="icon-item">
                        <TbPhotoCheck />
                      </div>
                      <div className="icon-item">
                        <TbPhotoX />
                      </div>
                    </IconGrid>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>

            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <FaComments />
                </ComponentIcon>
                <ComponentTitle>Тональність комунікації</ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Якою мовою говорить бренд: формально, дружньо, експертно чи
                  провокаційно.
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <FontPreview>
                      <div className="body">
                        "Ми допомагаємо клієнтам досягати більшого"
                      </div>
                    </FontPreview>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>

            <ComponentCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <ComponentCardHeader>
                <ComponentIcon>
                  <FaObjectGroup />
                </ComponentIcon>
                <ComponentTitle>
                  Правильне та неправильне застосування
                </ComponentTitle>
              </ComponentCardHeader>
              <ComponentCardBody>
                <ComponentDescription>
                  Щоб уникнути візуальних помилок у майбутньому.
                </ComponentDescription>
                <ComponentExample>
                  <ExampleTitle>Приклад</ExampleTitle>
                  <ExampleContent>
                    <DosDonts>
                      <div className="box do">
                        <FaCheck /> ✓ Так
                      </div>
                      <div className="box dont">
                        <FaTimes /> ✗ Ні
                      </div>
                    </DosDonts>
                  </ExampleContent>
                </ComponentExample>
              </ComponentCardBody>
            </ComponentCard>
          </ComponentsGrid>

          <ComponentsNote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <p
              style={{
                fontSize: '1.2rem',
                marginBottom: '1rem',
                color: 'var(--text-primary)',
              }}
            >
              Ми адаптуємо структуру брендбуку під потреби вашого бізнесу
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Для стартапу може бути достатньо базової версії, для великої
              компанії — розширений документ з детальними інструкціями.
            </p>
          </ComponentsNote>
        </ComponentsContainer>
      </ComponentsSection>
    </PageContainer>
  );
};

export default BrandbookPage;
