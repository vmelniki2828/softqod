import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaSwatchbook,
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaCubes,
  FaBuilding,
  FaTools,
  FaBrain,
  FaUserEdit,
  FaAward,
  FaLayerGroup,
  FaClock,
  FaHeadset,
  FaFlag,
  FaSyncAlt,
  FaStoreAlt,
  FaPalette,
  FaLaptopCode,
  FaPlus,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Animation keyframes
const floatVertical = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

const shimmerEffect = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const PageContainer = styled.div`
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

const ComponentsIntro = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
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

// Новая секция "Як ми створюємо брендбук — етапи роботи"
const ProcessSection = styled.section`
  padding: 8rem 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const ProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ProcessIntro = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
`;

// Анимация линии процесса
const lineDrawing = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0.7);
    transform: scale(1);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--accent-color-rgb), 0);
    transform: scale(1.05);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0);
    transform: scale(1);
  }
`;

const StepsWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 900px;
`;

const StepConnector = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  path {
    stroke: var(--accent-color);
    stroke-width: 3;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    fill: none;

    &.animate {
      animation: ${lineDrawing} 2s forwards ease-in-out;
    }
  }
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 5rem;
  }
`;

const Step = styled(motion.div)`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 1.5rem;
  }

  &:nth-child(even) {
    margin-left: 4rem;

    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

const StepNumberContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepNumber = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: white;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
  position: relative;
  z-index: 2;

  &.pulse {
    animation: ${pulseAnimation} 2s infinite;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
`;

const StepIcon = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  z-index: 3;

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
    top: -5px;
    right: -5px;
  }
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProcessNoteBox = styled(motion.div)`
  margin-top: 6rem;
  padding: 2.5rem;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1),
    rgba(0, 0, 0, 0.05)
  );
  position: relative;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
  }

  svg {
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.8rem;
    color: white;
    z-index: 1;
  }
`;

const ProcessNoteText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
`;

// Восстанавливаем компоненты для секции FinalBrandbookSection
const FinalBrandbookSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  position: relative;
  overflow: hidden;
`;

const BrandbookShowcaseContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ShowcaseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ShowcasePoint = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`;

const PointNumber = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  background: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  box-shadow: 0 8px 15px rgba(var(--accent-color-rgb), 0.3);
`;

const PointContent = styled.div``;

const PointTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const PointDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const documentScroll = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const BrandbookPreviewContainer = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
  height: 600px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 85%,
      rgba(0, 0, 0, 0.2) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;

const BrandbookScroller = styled.div`
  position: relative;
  width: 100%;
  height: 1200px;
  animation: ${documentScroll} 30s linear infinite;
  transform-origin: center top;
  will-change: transform;

  &:hover {
    animation-play-state: paused;
  }

  @media (max-width: 768px) {
    animation-duration: 40s;
  }
`;

const BrandbookPage1 = styled.div`
  width: 100%;
  height: 600px;
  background: white;
  padding: 2rem;
  color: #333;
`;

const BrandbookPage2 = styled.div`
  width: 100%;
  height: 600px;
  background: white;
  padding: 2rem;
  color: #333;
`;

const BrandbookPage3 = styled.div`
  width: 100%;
  height: 600px;
  background: white;
  padding: 2rem;
  color: #333;
`;

const PageTitle = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #333;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background: var(--accent-color);
  }
`;

const PageSubtitle = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
`;

const LogoShowcase = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

const LogoVariants = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const LogoVariant = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &.primary {
    background: var(--accent-color);
    color: white;
  }

  &.inverse {
    background: #333;
    color: white;
  }

  &.light {
    background: white;
    color: var(--accent-color);
    border: 1px solid #eee;
  }
`;

const ColorShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
`;

const ColorBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  .color-preview {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: 5px;
    color: ${props => props.textColor || 'white'};
    font-weight: 600;
  }

  .color-code {
    width: 100%;
    height: 30px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    color: #666;
  }
`;

const FontShowcase = styled.div`
  margin: 2rem 0;
`;

const FontFamily = styled.div`
  margin-bottom: 1.5rem;
`;

const FontName = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const BrandFontSample = styled.div`
  font-family: ${props => props.family || 'inherit'};
  font-weight: ${props => props.weight || 'normal'};
  font-size: ${props => props.size || '1rem'};
  color: #333;
`;

const MockupShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
`;

const Mockup = styled.div`
  width: 150px;
  height: 150px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  .mockup-title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 0.8rem;
    text-align: center;
  }
`;

const HideOnMobile = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

const ShowOnMobile = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
    margin-top: 2rem;
    text-align: center;
  }
`;

const AdvantagesSection = styled.section`
  padding: 8rem 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const AdvantagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const AdvantagesIntro = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const AdvantagesDescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 2rem auto 4rem;
  max-width: 800px;
  text-align: center;
`;

// Анимации для карточек преимуществ
const cardHoverAnimation = keyframes`
  0% { box-shadow: 0 0 0 rgba(var(--accent-color-rgb), 0); }
  50% { box-shadow: 0 0 30px rgba(var(--accent-color-rgb), 0.3); }
  100% { box-shadow: 0 0 0 rgba(var(--accent-color-rgb), 0); }
`;

const iconFloatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

const numberAppearAnimation = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 0.1; transform: scale(1); }
`;

const AdvantageRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AdvantageCard = styled(motion.div)`
  position: relative;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem 2rem;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    animation: ${cardHoverAnimation} 2s infinite;

    .card-icon {
      animation: ${iconFloatAnimation} 2s ease-in-out infinite;
    }

    .card-number {
      animation: ${numberAppearAnimation} 1s forwards;
    }

    .border-top,
    .border-bottom {
      transform: scaleX(1);
    }

    .border-left,
    .border-right {
      transform: scaleY(1);
    }
  }

  .border-top,
  .border-bottom {
    position: absolute;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
    width: 100%;
    transform: scaleX(0);
    transition: transform 0.6s ease;
  }

  .border-left,
  .border-right {
    position: absolute;
    width: 2px;
    background: linear-gradient(
      180deg,
      transparent,
      var(--accent-color),
      transparent
    );
    height: 100%;
    transform: scaleY(0);
    transition: transform 0.6s ease;
  }

  .border-top {
    top: 0;
    left: 0;
    transform-origin: left;
  }

  .border-bottom {
    bottom: 0;
    right: 0;
    transform-origin: right;
  }

  .border-left {
    left: 0;
    bottom: 0;
    transform-origin: bottom;
  }

  .border-right {
    right: 0;
    top: 0;
    transform-origin: top;
  }
`;

const AdvantageIconWrapper = styled.div`
  margin-bottom: 2rem;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.2);
  transition: all 0.3s ease;
`;

const AdvantageNumber = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  font-size: 9rem;
  font-weight: 900;
  color: var(--accent-color);
  opacity: 0;
  z-index: 0;
  transition: opacity 0.3s ease;
`;

const AdvantageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
`;

const AdvantageDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
`;

const ConclusionBox = styled(motion.div)`
  margin-top: 4rem;
  text-align: center;
  position: relative;
  padding: 2rem 3rem;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.02) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    background: var(--accent-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.4rem;
    color: white;
  }
`;

const ConclusionText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  font-weight: 500;
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto;
`;

// Анимации для шахматного фона
const fadeInOut = keyframes`
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.07; }
`;

const AdvantagesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  .chess-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        45deg,
        rgba(var(--accent-color-rgb), 0.05) 25%,
        transparent 25%,
        transparent 75%,
        rgba(var(--accent-color-rgb), 0.05) 75%
      ),
      linear-gradient(
        45deg,
        rgba(var(--accent-color-rgb), 0.05) 25%,
        transparent 25%,
        transparent 75%,
        rgba(var(--accent-color-rgb), 0.05) 75%
      );
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
    animation: ${fadeInOut} 8s infinite;
  }

  .gradient-1 {
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 70%
    );
    filter: blur(50px);
    opacity: 0.5;
  }

  .gradient-2 {
    position: absolute;
    bottom: -200px;
    left: -200px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-dark-rgb), 0.1) 0%,
      transparent 70%
    );
    filter: blur(60px);
    opacity: 0.5;
  }
`;

// Новая секция "Для кого підходить брендбук"
const AudienceSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.97) 100%
  );
  position: relative;
  overflow: hidden;
`;

const AudienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const AudienceIntro = styled(motion.div)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 5rem;
`;

const AudienceDescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 2rem auto 3rem;
  max-width: 800px;
  text-align: center;
`;

// Карточки типов аудитории с эффектом 3D и интерактивностью
const flipCard = keyframes`
  0% {
    transform: rotateY(180deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  gap: 2rem;
  margin: 5rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const cardGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(var(--accent-color-rgb), 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(var(--accent-color-rgb), 0.5);
  }
`;

const Card = styled(motion.div)`
  position: relative;
  height: 400px;
  perspective: 1000px;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  border-radius: 16px;

  &:hover {
    transform: rotateY(10deg) scale(1.02);
    animation: ${cardGlow} 2s infinite;
  }
`;

const cardReveal = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${flipCard} 0.8s ease-out forwards;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0;
`;

const CardIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.2);
  position: relative;
  z-index: 2;
`;

const CardTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 2;
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  position: relative;
  z-index: 2;
`;

const CardFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 2;

  li {
    position: relative;
    padding-left: 1.5rem;
    margin-bottom: 0.8rem;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--text-secondary);
    opacity: 0;
    animation: ${cardReveal} 0.5s forwards;

    &:nth-child(1) {
      animation-delay: 0.3s;
    }

    &:nth-child(2) {
      animation-delay: 0.5s;
    }

    &:nth-child(3) {
      animation-delay: 0.7s;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent-color);
    }
  }
`;

const CardPattern = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background-image: ${props => props.pattern || 'none'};
  background-size: cover;
  opacity: 0.1;
  z-index: 1;
`;

const CardBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(var(--accent-color-rgb), 0.2);
  color: var(--accent-color-light);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  z-index: 3;
`;

const NoteBox = styled(motion.div)`
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 2rem;
  border-radius: 16px;
  border-left: 4px solid var(--accent-color);
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    color: var(--text-primary);
    font-weight: 500;
    margin: 0;
    font-style: italic;
  }
`;

const AudienceSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  .pattern {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2V6h4V4H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.3;
  }

  .gradient {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 70%
    );
    filter: blur(120px);
  }
`;

const patternStartup = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 50 L50 80 L80 50 L50 20 Z' stroke='%23ff5500' stroke-width='2' fill='none' /%3E%3C/svg%3E")`;

const patternRebrand = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='30' stroke='%23ff5500' stroke-width='2' fill='none' /%3E%3C/svg%3E")`;

const patternSme = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='20' y1='20' x2='80' y2='80' stroke='%23ff5500' stroke-width='2' /%3E%3Cline x1='20' y1='80' x2='80' y2='20' stroke='%23ff5500' stroke-width='2' /%3E%3C/svg%3E")`;

const patternCreative = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='50,20 80,50 50,80 20,50' stroke='%23ff5500' stroke-width='2' fill='none' /%3E%3C/svg%3E")`;

const patternRemote = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='25' y='25' width='50' height='50' stroke='%23ff5500' stroke-width='2' fill='none' /%3E%3C/svg%3E")`;

// После блока "Для кого підходить брендбук" добавить новую секцию
const FinalCTASection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  position: relative;
  overflow: hidden;
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
  position: relative;
  z-index: 2;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTABackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  .circle-1 {
    position: absolute;
    top: -150px;
    right: -150px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.08) 0%,
      transparent 60%
    );
    filter: blur(80px);
  }

  .circle-2 {
    position: absolute;
    bottom: -200px;
    left: -100px;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-dark-rgb), 0.06) 0%,
      transparent 70%
    );
    filter: blur(60px);
  }

  .lines {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 40px 40px;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-primary);
  text-align: center;
  position: relative;
  line-height: 1.2;

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

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTADescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 3rem auto 4rem;
  max-width: 800px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const highlightText = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const BenefitsList = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto 4rem;
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: var(--accent-color);
    border-radius: 50%;
  }

  span {
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(
        90deg,
        var(--accent-color) 0%,
        var(--accent-color-light) 50%,
        var(--accent-color) 100%
      );
      background-size: 200% auto;
      animation: ${highlightText} 3s linear infinite;
      opacity: 0.5;
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FinalCTAButton = styled(motion.button)`
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  color: white;
  border: none;
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: all 0.5s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(var(--accent-color-rgb), 0.4);

    &::before {
      left: 100%;
    }
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
  }
`;

const CTANote = styled(motion.div)`
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0.8;
  text-align: center;
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// Копируем стили для FAQ из BannerAds.js

const FaqSection = styled(motion.section)`
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
  background: linear-gradient(
    to top left,
    transparent 49%,
    var(--bg-primary) 51%
  );
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
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
    animation: ${pulse} 2s infinite ease-in-out;
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
    margin-bottom: 2rem;
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
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 15px rgba(94, 234, 212, 0.1);
    border-color: rgba(94, 234, 212, 0.1);
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
  background: rgba(94, 234, 212, 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(94, 234, 212, 0.1);
    box-shadow: 0 0 10px rgba(94, 234, 212, 0.2);
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
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
      rgba(94, 234, 212, 0.1),
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
      margin-bottom: 0.4rem;
    }

    p {
      margin-bottom: 0.6rem;
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
      rgba(59, 130, 246, 0.8)
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
      rgba(94, 234, 212, 0.05) 0%,
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
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(59, 130, 246, 0.9)
  );
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(94, 234, 212, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(
      90deg,
      rgba(59, 130, 246, 0.5),
      var(--accent-color)
    );
    filter: blur(5px);
    opacity: 0.5;
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

const BrandbookPage = () => {
  // Добавляем состояние для управления FAQ
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Данные FAQ с новым контентом
  const faqData = [
    {
      question: t('BrandbookPage.faq.q1'),
      answer: t('BrandbookPage.faq.a1'),
    },
    {
      question: t('BrandbookPage.faq.q2'),
      answer: t('BrandbookPage.faq.a2'),
    },
    {
      question: t('BrandbookPage.faq.q3'),
      answer: t('BrandbookPage.faq.a3'),
    },
    {
      question: t('BrandbookPage.faq.q4'),
      answer: t('BrandbookPage.faq.a4'),
    },
    {
      question: t('BrandbookPage.faq.q5'),
      answer: t('BrandbookPage.faq.a5'),
    },
    {
      question: t('BrandbookPage.faq.q6'),
      answer: t('BrandbookPage.faq.a6'),
    },
    {
      question: t('BrandbookPage.faq.q7'),
      answer: t('BrandbookPage.faq.a7'),
    },
  ];

  // Функция для переключения FAQ
  const toggleFaq = index => {
    setExpandedFaqs(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

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
              {t('BrandbookPage.hero.title')}
            </HeroTitle>

            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('BrandbookPage.hero.subtitle')}
            </HeroDescription>

            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
              >
                {t('BrandbookPage.hero.buttonText')} <FaArrowRight />
              </PrimaryButton>
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
                <FeatureText>
                  {t('BrandbookPage.hero.features.uniqueness')}
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaUsers />
                </HeroFeatureIcon>
                <FeatureText>
                  {t('BrandbookPage.hero.features.recognition')}
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaRocket />
                </HeroFeatureIcon>
                <FeatureText>
                  {t('BrandbookPage.hero.features.effectiveness')}
                </FeatureText>
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
                  <p style={{ fontWeight: 'bold' }}>
                    {t('BrandbookPage.hero.phoneText')}
                  </p>
                  <p style={{ fontSize: '0.9rem' }}>
                    {t('BrandbookPage.hero.phoneText2')}
                  </p>
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
            {t('BrandbookPage.whatIs.title')}
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
            {t('BrandbookPage.whatIs.description')}
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
                <BookSubtitle>
                  {t('BrandbookPage.whatIs.subtitle')}
                </BookSubtitle>
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
              <FeatureTitle>
                {' '}
                {t('BrandbookPage.whatIs.features.systematic.title')}
              </FeatureTitle>
              <FeatureDescription>
                {t('BrandbookPage.whatIs.features.systematic.description')}
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
              <FeatureTitle>
                {t('BrandbookPage.whatIs.features.professional.title')}
              </FeatureTitle>
              <FeatureDescription>
                {t('BrandbookPage.whatIs.features.professional.description')}
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
              <FeatureTitle>
                {t('BrandbookPage.whatIs.features.recognition.title')}
              </FeatureTitle>
              <FeatureDescription>
                {t('BrandbookPage.whatIs.features.recognition.description')}
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
              <FeatureTitle>
                {t('BrandbookPage.whatIs.features.convenience.title')}
              </FeatureTitle>
              <FeatureDescription>
                {t('BrandbookPage.whatIs.features.convenience.description')}
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
              {t('BrandbookPage.whatIs.footerTitle')}
            </WarningTitle>
            <WarningText>{t('BrandbookPage.whatIs.footerText')}</WarningText>
          </WarningBox>
        </AboutContainer>
      </AboutBrandbookSection>

      {/* Новая секция "Як виглядає готовий брендбук" */}
      <FinalBrandbookSection>
        <SectionCircle className="top-right" />
        <SectionCircle className="bottom-left" />

        <BrandbookShowcaseContainer>
          <ComponentsIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle>{t('BrandbookPage.howItLooks.title')}</SectionTitle>
            <BrandbookDescription>
              {t('BrandbookPage.howItLooks.subTitle')}
            </BrandbookDescription>
          </ComponentsIntro>

          <ShowcaseGrid>
            <ShowcaseContent>
              <ShowcasePoint
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <PointNumber>1</PointNumber>
                <PointContent>
                  <PointTitle>
                    {t('BrandbookPage.howItLooks.sections.titlePage.title')}
                  </PointTitle>
                  <PointDescription>
                    {t(
                      'BrandbookPage.howItLooks.sections.titlePage.description'
                    )}
                  </PointDescription>
                </PointContent>
              </ShowcasePoint>

              <ShowcasePoint
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <PointNumber>2</PointNumber>
                <PointContent>
                  <PointTitle>
                    {t(
                      'BrandbookPage.howItLooks.sections.visualElements.title'
                    )}
                  </PointTitle>
                  <PointDescription>
                    {t(
                      'BrandbookPage.howItLooks.sections.visualElements.description'
                    )}
                  </PointDescription>
                </PointContent>
              </ShowcasePoint>

              <ShowcasePoint
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <PointNumber>3</PointNumber>
                <PointContent>
                  <PointTitle>
                    {t('BrandbookPage.howItLooks.sections.usageExamples.title')}
                  </PointTitle>
                  <PointDescription>
                    {t(
                      'BrandbookPage.howItLooks.sections.usageExamples.description'
                    )}
                  </PointDescription>
                </PointContent>
              </ShowcasePoint>

              <ShowcasePoint
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <PointNumber>4</PointNumber>
                <PointContent>
                  <PointTitle>
                    {t('BrandbookPage.howItLooks.sections.realScenarios.title')}
                  </PointTitle>
                  <PointDescription>
                    {t(
                      'BrandbookPage.howItLooks.sections.realScenarios.description'
                    )}
                  </PointDescription>
                </PointContent>
              </ShowcasePoint>

              <ShowOnMobile></ShowOnMobile>
            </ShowcaseContent>

            <HideOnMobile>
              <BrandbookPreviewContainer
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{
                  boxShadow: '0 35px 60px rgba(0, 0, 0, 0.3)',
                }}
              >
                <BrandbookScroller>
                  <BrandbookPage1>
                    <PageTitle>BRANDBOOK</PageTitle>
                    <PageSubtitle>
                      {t('BrandbookPage.howItLooks.mockup.brandStyle')}
                    </PageSubtitle>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                      <div
                        style={{
                          width: '150px',
                          height: '150px',
                          background: 'var(--accent-color)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto',
                          fontSize: '5rem',
                          fontWeight: 'bold',
                          color: 'white',
                        }}
                      >
                        B
                      </div>
                      <div
                        style={{
                          marginTop: '2rem',
                          fontSize: '1.2rem',
                          color: '#666',
                        }}
                      >
                        {t('BrandbookPage.howItLooks.mockup.versionText')} 1.0 •
                        2023
                      </div>
                    </div>
                  </BrandbookPage1>

                  <BrandbookPage2>
                    <PageTitle>
                      {t('BrandbookPage.howItLooks.mockup.logo.title')}
                    </PageTitle>
                    <PageSubtitle>
                      {t('BrandbookPage.howItLooks.mockup.logo.subtitle')}
                    </PageSubtitle>

                    <LogoShowcase>
                      <div
                        style={{
                          width: '200px',
                          height: '200px',
                          background: 'var(--accent-color)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '8px',
                          fontSize: '6rem',
                          fontWeight: 'bold',
                          color: 'white',
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        B
                      </div>
                    </LogoShowcase>

                    <div
                      style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginTop: '1.5rem',
                      }}
                    >
                      {t('BrandbookPage.howItLooks.mockup.textItem1')}
                    </div>

                    <LogoVariants>
                      <LogoVariant className="primary">B</LogoVariant>
                      <LogoVariant className="inverse">B</LogoVariant>
                      <LogoVariant className="light">B</LogoVariant>
                      <div
                        style={{
                          width: '80px',
                          height: '80px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          border: '2px solid var(--accent-color)',
                          borderRadius: '8px',
                          color: 'var(--accent-color)',
                        }}
                      >
                        BRAND
                      </div>
                    </LogoVariants>
                  </BrandbookPage2>

                  <BrandbookPage3>
                    <PageTitle>
                      {t('BrandbookPage.howItLooks.mockup.colors.title')}
                    </PageTitle>
                    <PageSubtitle>
                      {t('BrandbookPage.howItLooks.mockup.colors.subtitle')}
                    </PageSubtitle>

                    <ColorShowcase>
                      <ColorBox>
                        <div
                          className="color-preview"
                          style={{ background: 'var(--accent-color)' }}
                        >
                          Primary
                        </div>
                        <div className="color-code">#FF5500</div>
                      </ColorBox>

                      <ColorBox>
                        <div
                          className="color-preview"
                          style={{ background: 'var(--accent-color-dark)' }}
                        >
                          Secondary
                        </div>
                        <div className="color-code">#CC4400</div>
                      </ColorBox>

                      <ColorBox textColor="#333">
                        <div
                          className="color-preview"
                          style={{ background: '#F8F9FA' }}
                        >
                          Light
                        </div>
                        <div className="color-code">#F8F9FA</div>
                      </ColorBox>

                      <ColorBox>
                        <div
                          className="color-preview"
                          style={{ background: '#212529' }}
                        >
                          Dark
                        </div>
                        <div className="color-code">#212529</div>
                      </ColorBox>
                    </ColorShowcase>

                    <FontShowcase>
                      <FontFamily>
                        <FontName>
                          {t(
                            'BrandbookPage.howItLooks.mockup.colors.montserrat'
                          )}
                        </FontName>
                        <BrandFontSample
                          family="Montserrat, sans-serif"
                          weight="800"
                          size="2rem"
                        >
                          Aa Bb Cc Dd 1234
                        </BrandFontSample>
                      </FontFamily>

                      <FontFamily>
                        <FontName>
                          {t('BrandbookPage.howItLooks.mockup.fonts.openSans')}
                        </FontName>
                        <BrandFontSample
                          family="Open Sans, sans-serif"
                          size="1.2rem"
                        >
                          Aa Bb Cc Dd 1234
                        </BrandFontSample>
                      </FontFamily>
                    </FontShowcase>

                    <div
                      style={{
                        fontSize: '1rem',
                        color: '#666',
                        marginTop: '1.5rem',
                      }}
                    >
                      {t('BrandbookPage.howItLooks.mockup.textItem2')}
                    </div>

                    <MockupShowcase>
                      <Mockup style={{ background: 'var(--accent-color)' }}>
                        <div style={{ color: 'white', textAlign: 'center' }}>
                          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                            B
                          </div>
                          <div
                            style={{ fontSize: '0.7rem', marginTop: '0.5rem' }}
                          >
                            BRAND
                          </div>
                        </div>
                        <div className="mockup-title">
                          {t(
                            'BrandbookPage.howItLooks.mockup.examples.businessCard'
                          )}
                        </div>
                      </Mockup>

                      <Mockup
                        style={{
                          background: 'white',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          padding: '10px',
                        }}
                      >
                        <div
                          style={{
                            background: 'var(--accent-color)',
                            padding: '5px',
                            borderRadius: '4px',
                            color: 'white',
                            fontSize: '0.7rem',
                            textAlign: 'center',
                          }}
                        >
                          BRAND
                        </div>

                        <div
                          style={{
                            height: '20px',
                            background: '#eee',
                            marginTop: '5px',
                            width: '100%',
                          }}
                        ></div>

                        <div
                          style={{
                            height: '10px',
                            background: '#eee',
                            marginTop: '5px',
                            width: '70%',
                          }}
                        ></div>

                        <div className="mockup-title">
                          {t(
                            'BrandbookPage.howItLooks.mockup.examples.website'
                          )}
                        </div>
                      </Mockup>

                      <Mockup
                        style={{
                          background:
                            'linear-gradient(45deg, var(--accent-color), var(--accent-color-dark))',
                          padding: '10px',
                        }}
                      >
                        <div
                          style={{
                            background: 'rgba(255,255,255,0.8)',
                            borderRadius: '50%',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                            color: 'var(--accent-color)',
                          }}
                        >
                          B
                        </div>
                        <div className="mockup-title">
                          {t('BrandbookPage.howItLooks.mockup.examples.banner')}
                        </div>
                      </Mockup>
                    </MockupShowcase>
                  </BrandbookPage3>
                </BrandbookScroller>
              </BrandbookPreviewContainer>
            </HideOnMobile>
          </ShowcaseGrid>
        </BrandbookShowcaseContainer>
      </FinalBrandbookSection>

      {/* Новая секция "Як ми створюємо брендбук — етапи роботи" */}
      <ProcessSection>
        <SectionCircle className="top-right" />
        <SectionCircle className="bottom-left" />

        <ProcessContainer>
          <ProcessIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle>{t('BrandbookPage.process.title')}</SectionTitle>
            <BrandbookDescription>
              {t('BrandbookPage.process.subTitle')}
            </BrandbookDescription>
          </ProcessIntro>

          <StepsWrapper>
            <StepConnector>
              <path
                d="M100,50 C150,150 250,150 300,250 C350,350 450,350 500,450 C550,550 650,550 700,650 C750,750 850,750 900,850"
                className="animate"
              />
            </StepConnector>

            <StepsContainer>
              <Step
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                <StepNumberContainer>
                  <StepNumber className="pulse">1</StepNumber>
                  <StepIcon>
                    <FaUsers />
                  </StepIcon>
                </StepNumberContainer>

                <StepContent>
                  <StepTitle>
                    {t('BrandbookPage.process.steps.step1.title')}
                  </StepTitle>
                  <StepDescription>
                    {t('BrandbookPage.process.steps.step1.description')}
                  </StepDescription>
                </StepContent>
              </Step>

              <Step
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <StepNumberContainer>
                  <StepNumber>2</StepNumber>
                  <StepIcon>
                    <FaLightbulb />
                  </StepIcon>
                </StepNumberContainer>

                <StepContent>
                  <StepTitle>
                    {t('BrandbookPage.process.steps.step2.title')}
                  </StepTitle>
                  <StepDescription>
                    {t('BrandbookPage.process.steps.step2.description')}
                  </StepDescription>
                </StepContent>
              </Step>

              <Step
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <StepNumberContainer>
                  <StepNumber>3</StepNumber>
                  <StepIcon>
                    <FaCubes />
                  </StepIcon>
                </StepNumberContainer>

                <StepContent>
                  <StepTitle>
                    {t('BrandbookPage.process.steps.step3.title')}
                  </StepTitle>
                  <StepDescription>
                    {t('BrandbookPage.process.steps.step3.description')}
                  </StepDescription>
                </StepContent>
              </Step>

              <Step
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <StepNumberContainer>
                  <StepNumber>4</StepNumber>
                  <StepIcon>
                    <FaSwatchbook />
                  </StepIcon>
                </StepNumberContainer>

                <StepContent>
                  <StepTitle>
                    {t('BrandbookPage.process.steps.step4.title')}
                  </StepTitle>
                  <StepDescription>
                    {t('BrandbookPage.process.steps.step4.description')}
                  </StepDescription>
                </StepContent>
              </Step>

              <Step
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <StepNumberContainer>
                  <StepNumber>5</StepNumber>
                  <StepIcon>
                    <FaRocket />
                  </StepIcon>
                </StepNumberContainer>

                <StepContent>
                  <StepTitle>
                    {t('BrandbookPage.process.steps.step5.title')}
                  </StepTitle>
                  <StepDescription>
                    {t('BrandbookPage.process.steps.step5.description')}
                  </StepDescription>
                </StepContent>
              </Step>
            </StepsContainer>
          </StepsWrapper>

          <ProcessNoteBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <FaBuilding />
            <ProcessNoteText>
              {t('BrandbookPage.process.footerText')}
            </ProcessNoteText>
          </ProcessNoteBox>
        </ProcessContainer>
      </ProcessSection>

      {/* Новый блок "Чому варто замовити брендбук саме у нас" */}
      <AdvantagesSection>
        <AdvantagesBackground>
          <div className="chess-pattern"></div>
          <div className="gradient-1"></div>
          <div className="gradient-2"></div>
        </AdvantagesBackground>

        <AdvantagesContainer>
          <AdvantagesIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle>{t('BrandbookPage.whyUs.title')}</SectionTitle>
            <AdvantagesDescription
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('BrandbookPage.whyUs.subTitle')}
            </AdvantagesDescription>
          </AdvantagesIntro>

          <div>
            <AdvantageRow
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <AdvantageCard
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>

                <AdvantageNumber className="card-number">1</AdvantageNumber>
                <AdvantageIconWrapper className="card-icon">
                  <FaUserEdit />
                </AdvantageIconWrapper>
                <AdvantageTitle>
                  {t('BrandbookPage.whyUs.advantages.individual.title')}
                </AdvantageTitle>
                <AdvantageDescription>
                  {t('BrandbookPage.whyUs.advantages.individual.description')}
                </AdvantageDescription>
              </AdvantageCard>

              <AdvantageCard
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>

                <AdvantageNumber className="card-number">2</AdvantageNumber>
                <AdvantageIconWrapper className="card-icon">
                  <FaAward />
                </AdvantageIconWrapper>
                <AdvantageTitle>
                  {t('BrandbookPage.whyUs.advantages.experience.title')}
                </AdvantageTitle>
                <AdvantageDescription>
                  {t('BrandbookPage.whyUs.advantages.experience.description')}
                </AdvantageDescription>
              </AdvantageCard>

              <AdvantageCard
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>

                <AdvantageNumber className="card-number">3</AdvantageNumber>
                <AdvantageIconWrapper className="card-icon">
                  <FaLayerGroup />
                </AdvantageIconWrapper>
                <AdvantageTitle>
                  {t('BrandbookPage.whyUs.advantages.comprehensive.title')}
                </AdvantageTitle>
                <AdvantageDescription>
                  {t(
                    'BrandbookPage.whyUs.advantages.comprehensive.description'
                  )}
                </AdvantageDescription>
              </AdvantageCard>
            </AdvantageRow>

            <AdvantageRow
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{ justifyContent: 'center' }}
            >
              <AdvantageCard
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>

                <AdvantageNumber className="card-number">4</AdvantageNumber>
                <AdvantageIconWrapper className="card-icon">
                  <FaClock />
                </AdvantageIconWrapper>
                <AdvantageTitle>
                  {t('BrandbookPage.whyUs.advantages.deadlines.title')}
                </AdvantageTitle>
                <AdvantageDescription>
                  {t('BrandbookPage.whyUs.advantages.deadlines.description')}
                </AdvantageDescription>
              </AdvantageCard>

              <AdvantageCard
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <div className="border-top"></div>
                <div className="border-right"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>

                <AdvantageNumber className="card-number">5</AdvantageNumber>
                <AdvantageIconWrapper className="card-icon">
                  <FaHeadset />
                </AdvantageIconWrapper>
                <AdvantageTitle>
                  {t('BrandbookPage.whyUs.advantages.support.title')}
                </AdvantageTitle>
                <AdvantageDescription>
                  {t('BrandbookPage.whyUs.advantages.support.description')}
                </AdvantageDescription>
              </AdvantageCard>
            </AdvantageRow>
          </div>

          <ConclusionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <FaFlag />
            <ConclusionText>
              {t('BrandbookPage.whyUs.footerText')}
            </ConclusionText>
          </ConclusionBox>
        </AdvantagesContainer>
      </AdvantagesSection>

      {/* Новый блок "Для кого підходить брендбук" */}
      <AudienceSection>
        <AudienceSectionBackground>
          <div className="pattern"></div>
          <div className="gradient"></div>
        </AudienceSectionBackground>

        <AudienceContainer>
          <AudienceIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <SectionTitle>{t('BrandbookPage.target.title')}</SectionTitle>
            <AudienceDescription
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {t('BrandbookPage.target.subTitle')}
            </AudienceDescription>
          </AudienceIntro>

          <CardGrid>
            <Card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <CardInner>
                <CardFace delay="0.1s">
                  <CardBadge>
                    {t('BrandbookPage.target.categories.startups.badge')}
                  </CardBadge>
                  <CardIconContainer>
                    <FaRocket />
                  </CardIconContainer>
                  <CardTitle>
                    {t('BrandbookPage.target.categories.startups.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('BrandbookPage.target.categories.startups.des')}
                  </CardDescription>
                  <CardFeatureList>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.startups.benefits.item1'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.startups.benefits.item2'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.startups.benefits.item3'
                      )}
                    </li>
                  </CardFeatureList>
                  <CardPattern pattern={patternStartup} />
                </CardFace>
              </CardInner>
            </Card>

            <Card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <CardInner>
                <CardFace delay="0.2s">
                  <CardIconContainer>
                    <FaSyncAlt />
                  </CardIconContainer>
                  <CardTitle>
                    {t('BrandbookPage.target.categories.rebranding.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('BrandbookPage.target.categories.rebranding.des')}
                  </CardDescription>
                  <CardFeatureList>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.rebranding.benefits.item1'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.rebranding.benefits.item2'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.rebranding.benefits.item3'
                      )}
                    </li>
                  </CardFeatureList>
                  <CardPattern pattern={patternRebrand} />
                </CardFace>
              </CardInner>
            </Card>

            <Card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardInner>
                <CardFace delay="0.3s">
                  <CardIconContainer>
                    <FaStoreAlt />
                  </CardIconContainer>
                  <CardTitle>
                    {t('BrandbookPage.target.categories.smb.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('BrandbookPage.target.categories.smb.des')}
                  </CardDescription>
                  <CardFeatureList>
                    <li>
                      {t('BrandbookPage.target.categories.smb.benefits.item1')}
                    </li>
                    <li>
                      {t('BrandbookPage.target.categories.smb.benefits.item2')}
                    </li>
                    <li>
                      {t('BrandbookPage.target.categories.smb.benefits.item3')}
                    </li>
                  </CardFeatureList>
                  <CardPattern pattern={patternSme} />
                </CardFace>
              </CardInner>
            </Card>

            <Card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <CardInner>
                <CardFace delay="0.4s">
                  <CardIconContainer>
                    <FaPalette />
                  </CardIconContainer>
                  <CardTitle>
                    {t('BrandbookPage.target.categories.education.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('BrandbookPage.target.categories.education.des')}
                  </CardDescription>
                  <CardFeatureList>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.education.benefits.item1'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.education.benefits.item2'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.education.benefits.item3'
                      )}
                    </li>
                  </CardFeatureList>
                  <CardPattern pattern={patternCreative} />
                </CardFace>
              </CardInner>
            </Card>

            <Card
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <CardInner>
                <CardFace delay="0.5s">
                  <CardIconContainer>
                    <FaLaptopCode />
                  </CardIconContainer>
                  <CardTitle>
                    {t('BrandbookPage.target.categories.remote.title')}
                  </CardTitle>
                  <CardDescription>
                    {t('BrandbookPage.target.categories.remote.des')}
                  </CardDescription>
                  <CardFeatureList>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.remote.benefits.item1'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.remote.benefits.item2'
                      )}
                    </li>
                    <li>
                      {t(
                        'BrandbookPage.target.categories.remote.benefits.item3'
                      )}
                    </li>
                  </CardFeatureList>
                  <CardPattern pattern={patternRemote} />
                </CardFace>
              </CardInner>
            </Card>
          </CardGrid>

          <NoteBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <p>{t('BrandbookPage.target.footerText')}</p>
          </NoteBox>
        </AudienceContainer>
      </AudienceSection>

      {/* Новый блок "Замовте брендбук уже сьогодні" */}
      <FinalCTASection>
        <CTABackgroundElements>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="lines"></div>
        </CTABackgroundElements>

        <CTAContainer>
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            {t('BrandbookPage.cta.title')}
          </CTATitle>

          <CTADescription
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('BrandbookPage.cta.description')}
          </CTADescription>

          <BenefitsList
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <BenefitItem>{t('BrandbookPage.cta.subtitle1')}</BenefitItem>

            <BenefitItem>
              <span>{t('BrandbookPage.cta.subtitle2')}</span>;
            </BenefitItem>

            <BenefitItem>{t('BrandbookPage.cta.subtitle3')}</BenefitItem>
          </BenefitsList>

          <FinalCTAButton
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
          >
            {t('BrandbookPage.cta.buttonText')} <FaArrowRight />
          </FinalCTAButton>

          <CTANote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {t('BrandbookPage.cta.additionalText')}
          </CTANote>
        </CTAContainer>
      </FinalCTASection>

      {/* Добавляем блок FAQ перед FinalCTASection */}
      <FaqSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaqWaveTop />

        <FaqContainer>
          <FaqGlowCircle className="circle-1" />
          <FaqGlowCircle className="circle-2" />

          <FaqTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </FaqTitle>

          <FaqList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <AnimatePresence>
                  <FaqItemContent
                    layout
                    initial={{ borderRadius: 16 }}
                    key={`faq-${index}`}
                    transition={{
                      layout: { duration: 0.4, ease: 'easeOut' },
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
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaPlus />
                      </FaqToggle>
                    </FaqQuestion>

                    <AnimatePresence>
                      {expandedFaqs.includes(index) && (
                        <FaqAnswer
                          initial={{
                            opacity: 0,
                            height: 0,
                            overflow: 'hidden',
                          }}
                          animate={{
                            opacity: 1,
                            height: 'auto',
                            overflow: 'visible',
                          }}
                          exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                          transition={{
                            type: 'spring',
                            damping: 25,
                            stiffness: 120,
                            duration: 0.6,
                            opacity: { duration: 0.35 },
                          }}
                        >
                          {faq.answer}
                        </FaqAnswer>
                      )}
                    </AnimatePresence>
                  </FaqItemContent>
                </AnimatePresence>
              </FaqItem>
            ))}
          </FaqList>

          <FaqCta
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FaqCtaText>{t('BrandbookPage.faq.ctaText')}</FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              {t('BrandbookPage.faq.ctaButton')}
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default BrandbookPage;
