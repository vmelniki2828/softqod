import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight,
  FaChartLine,
  FaSearch,
  FaCheck,
  FaRocket,
  FaUsers,
  FaGlobe,
  FaMobileAlt,
  FaLink,
  FaEdit,
  FaCogs,
  FaChartBar,
  FaSearchPlus,
  FaChartPie,
  FaTags,
  FaEye,
  FaLightbulb,
  FaSearchLocation,
  FaRegFileAlt,
  FaCode,
  FaGoogle,
  FaComments,
  FaBullhorn,
  FaUniversalAccess,
  FaBolt,
  FaExternalLinkAlt,
  FaBuilding,
  FaStoreAlt,
  FaMapMarkerAlt,
  FaStar,
  FaMapMarkedAlt,
  FaRandom,
  FaRobot,
  FaBan,
  FaFileAlt,
  FaImage,
  FaShareAlt,
  FaPlus,
} from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Animations
const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Добавляем keyframes для плавного движения вверх-вниз
const floatUpDown = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

// Добавляем необходимые анимации
const floatVertical = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
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

const pulseFaq = keyframes`
  0%, 100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
`;

// Hero Section Components
const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  margin-top: 100px;
`;

const GlowingCircle = styled.div`
  position: absolute;
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), ${props => props.opacity || '0.3'}) 0%,
    transparent 70%
  );
  filter: blur(60px);
  z-index: 0;
  animation: ${breatheAnimation} ${props => props.duration || '10s'} infinite
    ease-in-out;
`;

const TiltedLine = styled.div`
  position: absolute;
  width: ${props => props.width || '100px'};
  height: 1px;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.5),
    transparent
  );
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: 0;
`;

const Dot = styled.div`
  width: 2px;
  height: 2px;
  background-color: rgba(
    var(--accent-color-rgb),
    ${props => props.opacity || '0.5'}
  );
  border-radius: 50%;
`;

const DotGrid = styled.div`
  position: absolute;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  transform: rotate(${props => props.rotate || '0deg'});
  opacity: 0.7;
  z-index: 0;
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
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
`;

const HeroLeft = styled.div`
  @media (max-width: 1024px) {
    text-align: center;
    order: 1;
  }
`;

const HeroRight = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    order: 0;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AnimatedTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const HighlightedSpan = styled.span`
  position: relative;
  color: var(--accent-color);
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(var(--accent-color-rgb), 0.15);
    z-index: -1;
    border-radius: 4px;
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
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
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
`;

const SecondaryButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid rgba(var(--accent-color-rgb), 0.3);
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.05);
    border-color: var(--accent-color);
    transform: translateY(-2px);
  }
`;

const KeyPoints = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-width: 260px;
`;

const KeyPointIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const KeyPointText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

// SEO Visualization Components
const SeoVisualization = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const SeoCardContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
  animation: ${floatUpDown} 6s ease-in-out infinite;
`;

const SeoCard = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15),
      0 0 15px rgba(var(--accent-color-rgb), 0.3);
    z-index: 10;
  }

  &.onpage {
    top: 15%;
    left: 15%;
    background: linear-gradient(45deg, #2e7d32 0%, #4caf50 100%);
  }

  &.offpage {
    top: 5%;
    right: 20%;
    background: linear-gradient(45deg, #0277bd 0%, #29b6f6 100%);
  }

  &.technical {
    bottom: 25%;
    left: 8%;
    background: linear-gradient(45deg, #6a1b9a 0%, #9c27b0 100%);
  }

  &.analytics {
    top: 40%;
    right: 10%;
    background: linear-gradient(45deg, #e65100 0%, #ff9800 100%);
  }

  &.local {
    bottom: 10%;
    right: 25%;
    background: linear-gradient(45deg, #c62828 0%, #ef5350 100%);
  }
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  color: white;
`;

const CardName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const SearchPositionBadge = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.4);
`;

const PositionNumber = styled.div`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
`;

const PositionText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const FloatingIcons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const FloatingIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(var(--accent-color-rgb), 0.1);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  animation: ${floatAnimation} ${props => props.duration || '5s'} infinite
    ease-in-out;
  animation-delay: ${props => props.delay || '0s'};

  &.code {
    top: 10%;
    left: -10%;
  }

  &.mobile {
    top: 70%;
    left: -15%;
  }

  &.globe {
    top: 20%;
    right: -10%;
  }

  &.chart {
    top: 80%;
    right: -8%;
  }
`;

// Компоненты для раздела "Что такое SEO-оптимизация"
const InfoSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;

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

const SeoDefinitionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const SeoDefinitionText = styled.div`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.7;
`;

const SeoDefinitionParagraph = styled.p`
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 5px;
    height: calc(100% - 1rem);
    background: linear-gradient(
      to bottom,
      var(--accent-color) 0%,
      rgba(var(--accent-color-rgb), 0.2) 100%
    );
    border-radius: 3px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const SeoVisual = styled.div`
  position: relative;
`;

const SeoEngineCircle = styled(motion.div)`
  position: relative;
  width: 320px;
  height: 320px;
  margin: 0 auto;
  background: rgba(var(--accent-color-rgb), 0.03);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(var(--accent-color-rgb), 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border-radius: 50%;
    border: 1px dashed rgba(var(--accent-color-rgb), 0.1);
    z-index: -1;
  }
`;

const SeoIconCenter = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(var(--accent-color-rgb), 0.7) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.3);
`;

const SeoIconOrbit = styled(motion.div)`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.8rem;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.1);

  &.technical {
    top: 10%;
    left: 10%;
  }

  &.content {
    top: 15%;
    right: 10%;
  }

  &.links {
    bottom: 15%;
    right: 15%;
  }

  &.local {
    bottom: 10%;
    left: 15%;
  }
`;

const SeoHighlight = styled.span`
  color: var(--accent-color);
  font-weight: 600;
`;

const SeoAdvantagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SeoAdvantageCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const SeoAdvantageIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const SeoAdvantageTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const SeoAdvantageDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

// Компоненты для раздела "Основные направления SEO"
const DirectionsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    0deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;
`;

const DirectionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const DirectionsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
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

const DirectionsDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const DirectionsTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DirectionTab = styled.button`
  padding: 1rem 1.5rem;
  background: ${props =>
    props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${props => (props.active ? 'white' : 'var(--text-primary)')};
  border: 1px solid
    ${props =>
      props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    background: ${props =>
      props.active
        ? 'var(--accent-color)'
        : 'rgba(var(--accent-color-rgb), 0.1)'};
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.2rem;
    color: ${props => (props.active ? 'white' : 'var(--accent-color)')};
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const DirectionContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 3rem;
`;

const DirectionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const DirectionDetails = styled.div`
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const DirectionTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: var(--accent-color);
  }
`;

const DirectionText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const DirectionFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const DirectionFeature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`;

const DirectionFeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

const DirectionFeatureText = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const DirectionVisual = styled.div`
  position: relative;
  background: ${props =>
    props.gradient || 'linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 300px;
  }
`;

const DirectionIconMain = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
`;

const DirectionPattern = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.1;
  background-image: ${props =>
    props.pattern ||
    'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)'};
  background-size: 20px 20px;
`;

// Компоненты для раздела "Этапы работы с SEO"
const StagesSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );
  overflow: hidden;
`;

const StagesCurve = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 0;
    width: 100%;
    height: 100px;
    border-radius: 0 0 50% 50%;
    background: linear-gradient(
      to bottom,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      rgba(var(--accent-color-rgb), 0.01) 100%
    );
  }
`;

const StagesDecoration = styled.div`
  position: absolute;
  ${props => props.position || 'top: 10%; right: 5%;'};
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  opacity: 0.05;
  background: ${props =>
    props.pattern ||
    'radial-gradient(circle, var(--accent-color) 1px, transparent 1px)'};
  background-size: ${props => props.bgSize || '20px 20px'};
  border-radius: ${props => props.radius || '0'};
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: 0;
`;

const StagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const StagesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
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

const StagesDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const StagesTimeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    background: linear-gradient(
      to bottom,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      rgba(var(--accent-color-rgb), 0.8) 50%,
      rgba(var(--accent-color-rgb), 0.1) 100%
    );

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const StageCard = styled(motion.div)`
  display: flex;
  margin-bottom: 5rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(odd) {
    justify-content: flex-start;

    @media (min-width: 769px) {
      padding-right: calc(50% + 30px);
    }
  }

  &:nth-child(even) {
    justify-content: flex-end;

    @media (min-width: 769px) {
      padding-left: calc(50% + 30px);
    }
  }

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50%;
    width: 2px;
    height: calc(100% - 50px + 5rem);
    background: linear-gradient(
      to bottom,
      rgba(var(--accent-color-rgb), 0.6) 0%,
      rgba(var(--accent-color-rgb), 0.1) 100%
    );
    transform: translateX(-50%);
    z-index: 1;

    @media (max-width: 768px) {
      left: 30px;
    }
  }

  &:hover .stage-number {
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 0 0 8px rgba(var(--accent-color-rgb), 0.15),
      0 5px 15px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    padding-left: 60px !important;
    justify-content: flex-start !important;
  }
`;

const StageNumber = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 6px rgba(var(--accent-color-rgb), 0.1);
  transition: all 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: rgba(var(--accent-color-rgb), 0.1);
    z-index: -1;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.5s ease;
  }

  @media (max-width: 768px) {
    left: 30px;
  }
`;

const StageContent = styled.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  max-width: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 50%,
      rgba(var(--accent-color-rgb), 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  &:hover {
    border-color: rgba(var(--accent-color-rgb), 0.2);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StageIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const StageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const StageText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const StageBullets = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

const StageBullet = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  background: rgba(255, 255, 255, 0.03);
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--accent-color);
    font-size: 0.8rem;
  }
`;

const StagePulse = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-color);
  z-index: 1;
  top: calc(100% + 2.5rem - 8px);
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.7;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--accent-color);
    opacity: 0.6;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &::before {
    animation: pulse 2s infinite;
  }

  &::after {
    animation: pulse 2s infinite 0.5s;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    70% {
      transform: scale(2.5);
      opacity: 0;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  @media (max-width: 768px) {
    left: 30px;
  }

  ${StageCard}:last-child & {
    display: none;
  }
`;

// Новые компоненты для слайдера
const ToolsSliderSection = styled(motion.section)`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );
  overflow: hidden;
`;

const ToolsSliderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ToolsSliderTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
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

const ToolsSliderDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const SliderButton = styled.button`
  background: ${props =>
    props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.03)'};
  color: ${props => (props.active ? 'white' : 'var(--text-secondary)')};
  border: 1px solid
    ${props =>
      props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.1)'};
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props =>
      props.active
        ? 'var(--accent-color)'
        : 'rgba(var(--accent-color-rgb), 0.1)'};
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.2rem;
    color: ${props => (props.active ? 'white' : 'var(--accent-color)')};
  }
`;

const SliderContent = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  perspective: 1000px;
`;

const ToolSlide = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: ${props => props.color || 'var(--accent-color)'};
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ToolSlideHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const ToolSlideIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: rgba(
    ${props => props.colorRgb || 'var(--accent-color-rgb)'},
    0.1
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color || 'var(--accent-color)'};
  font-size: 2.5rem;
  position: relative;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    border-radius: 16px;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(${props => props.colorRgb || 'var(--accent-color-rgb)'}, 0.3) 0%,
      transparent 70%
    );
    filter: blur(15px);
    opacity: 0.6;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
`;

const ToolSlideInfo = styled.div`
  flex: 1;
`;

const ToolSlideName = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ToolSlideTagline = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ToolSlideContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ToolSlideDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ToolSlideFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
  margin-bottom: 2rem;
`;

const ToolSlideFeature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 1rem;
  color: var(--text-secondary);

  svg {
    color: ${props => props.color || 'var(--accent-color)'};
    margin-top: 0.2rem;
    flex-shrink: 0;
  }
`;

const ToolSlideLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: auto;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.2);
    transform: translateY(-3px);
  }

  svg {
    font-size: 1rem;
  }
`;

const SliderArrows = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SliderArrow = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.2rem;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
    color: var(--accent-color);
    transform: translateY(-3px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const SliderDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props =>
    props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.2)'};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props =>
      props.active
        ? 'var(--accent-color)'
        : 'rgba(var(--accent-color-rgb), 0.5)'};
  }
`;

// Компоненты для раздела "Метрики ефективності SEO"
const MetricsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;
`;

const MetricsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const MetricsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
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

const MetricsDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.accentColor || 'var(--accent-color)'};
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
`;

const MetricHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const MetricIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: linear-gradient(
    135deg,
    ${props => props.gradientStart || 'rgba(var(--accent-color-rgb), 0.2)'},
    ${props => props.gradientEnd || 'rgba(var(--accent-color-rgb), 0.05)'}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.iconColor || 'var(--accent-color)'};
  font-size: 1.8rem;
  flex-shrink: 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: inherit;
    filter: blur(12px);
    opacity: 0.5;
    z-index: -1;
  }
`;

const MetricInfo = styled.div`
  flex: 1;
`;

const MetricNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${props => props.color || 'var(--text-primary)'};
  margin-bottom: 0.2rem;
`;

const MetricName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const MetricText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex-grow: 1;
`;

const MetricChart = styled(motion.div)`
  width: 100%;
  height: 90px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding-bottom: 15px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  position: relative;
`;

const ChartBar = styled(motion.div)`
  flex: 1;
  background: linear-gradient(
    to top,
    ${props => props.barColor || 'rgba(var(--accent-color-rgb), 0.7)'},
    ${props => props.barColor || 'rgba(var(--accent-color-rgb), 0.3)'}
  );
  border-radius: 4px 4px 0 0;
  height: ${props => props.height || '20px'};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${props =>
      props.barColor || 'rgba(var(--accent-color-rgb), 0.7)'};
    border-radius: 4px 4px 0 0;
    opacity: 0.6;
  }
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.7;
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
`;

const MetricFooter = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MetricTrend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props =>
    props.trend === 'up'
      ? '#4caf50'
      : props.trend === 'down'
      ? '#f44336'
      : 'var(--text-secondary)'};
`;

const MetricButton = styled.button`
  background: transparent;
  border: 1px solid rgba(var(--accent-color-rgb), 0.3);
  color: var(--text-primary);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
    border-color: var(--accent-color);
  }
`;

// Компоненты для раздела "Для яких проєктів підходить SEO"
const ProjectsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    0deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );
  overflow: hidden;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
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

const ProjectsDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props =>
      props.gradient ||
      'linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.05) 0%, rgba(var(--accent-color-rgb), 0.01) 100%)'};
    opacity: 0.9;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);

    &::before {
      opacity: 1;
    }

    .card-icon {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    }

    .card-content {
      border-color: rgba(255, 255, 255, 0.1);
    }

    .project-benefits {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectIconContainer = styled.div`
  position: relative;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: linear-gradient(
      to top,
      ${props => props.overlayColor || 'rgba(0, 0, 0, 0.3)'},
      transparent
    );
    opacity: 0.7;
  }
`;

const ProjectIconBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props =>
    props.pattern ||
    'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)'};
  background-size: ${props => props.patternSize || '20px 20px'};
  background-position: center;
  opacity: 0.4;
`;

const ProjectIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.bg || 'var(--accent-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  z-index: 2;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  &.card-icon {
    transform: translateY(0);
  }

  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    border-radius: 50%;
    background: inherit;
    filter: blur(20px);
    opacity: 0.5;
    z-index: -1;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  transition: border-color 0.3s ease;

  &.card-content {
    border-color: rgba(255, 255, 255, 0.05);
  }
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const ProjectBenefits = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
  opacity: 0.7;
  transform: translateY(10px);
  transition: all 0.3s ease;

  &.project-benefits {
    opacity: 0.7;
    transform: translateY(10px);
  }
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  margin-bottom: 0.8rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const BenefitIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.bg || 'rgba(var(--accent-color-rgb), 0.2)'};
  color: ${props => props.color || 'var(--accent-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
`;

const BenefitText = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const ProjectsNote = styled.div`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    gap: 1.5rem;
  }
`;

const ProjectsNoteIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const ProjectsNoteText = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex: 1;
`;

const ProjectsBottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-top: 2.5rem;
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Компоненты для раздела "Наші підходи до просування"
const ApproachesSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;
`;

const ApproachesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ApproachesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--text-primary);
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

const ApproachesDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const ApproachesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ApproachCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
  padding: 2.5rem 2rem;
  height: 100%;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

    .approach-number {
      color: var(--accent-color);
      transform: translateY(-5px);
      text-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
    }

    .approach-icon {
      transform: translateY(-5px) scale(1.1);
      box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.2);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${props => props.gradientColor || 'var(--accent-color)'};
    opacity: 0.7;
  }
`;

const ApproachNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 900;
  color: rgba(var(--accent-color-rgb), 0.15);
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  line-height: 1;
`;

const ApproachHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ApproachIconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${props => props.bgColor || 'rgba(var(--accent-color-rgb), 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.iconColor || 'var(--accent-color)'};
  font-size: 1.5rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  flex-shrink: 0;
`;

const ApproachContent = styled.div`
  flex: 1;
`;

const ApproachTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const ApproachText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex-grow: 1;
`;

const ApproachesCallout = styled(motion.div)`
  margin-top: 4rem;
  padding: 2.5rem;
  background: rgba(var(--accent-color-rgb), 0.03);
  border-radius: 20px;
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 70%
    );
    z-index: -1;
  }
`;

const ApproachesCalloutTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ApproachesCalloutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 2rem;
`;

// Добавление стилей для кнопки
const CenteredButton = styled(PrimaryButton)`
  margin: 0 auto;
  display: flex;
`;

const ResultsSection = styled(motion.section)`
  padding: 5rem 0;
  background: linear-gradient(
    180deg,
    rgba(var(--background-rgb), 1) 0%,
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
`;

const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ResultsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ResultsDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  color: var(--text-secondary);
`;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const ResultCard = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  background: rgba(var(--card-background-rgb), 0.5);
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:nth-child(odd) {
    flex-direction: row;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(var(--accent-color-rgb), 0.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      rgba(var(--accent-color-rgb), 0.8) 0%,
      rgba(var(--accent-color-rgb), 0.4) 100%
    );
  }

  @media (max-width: 900px) {
    flex-direction: column !important;
    padding: 2rem;
  }
`;

const ResultNumber = styled.div`
  font-size: 7rem;
  font-weight: 800;
  line-height: 1;
  margin-right: 1.5rem;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(var(--accent-color-rgb), 0.3);
  flex-shrink: 0;

  &:nth-child(1) {
    color: rgba(var(--accent-color-rgb), 0.05);
  }

  @media (max-width: 900px) {
    font-size: 5rem;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`;

const ResultContent = styled.div`
  flex: 1;
`;

const ResultTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 24px;
    background: var(--accent-color);
    border-radius: 4px;
  }
`;

const ResultDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const ResultVisual = styled.div`
  flex-basis: 250px;
  flex-shrink: 0;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  &:nth-child(odd) {
    margin-left: 2rem;
  }

  &:nth-child(even) {
    margin-right: 2rem;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 1.5rem 0 0 0 !important;
  }

  @media (max-width: 640px) {
    height: 160px;
  }
`;

const ResultNote = styled.div`
  background: rgba(var(--accent-color-rgb), 0.05);
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;
  position: relative;

  &::before {
    content: '"';
    position: absolute;
    top: -15px;
    left: 20px;
    font-size: 60px;
    font-family: serif;
    color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const ResultNoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  font-style: italic;
`;

const GrowthChart = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${ResultVisual}:hover & {
    transform: scale(1.1);
  }
`;

const BrandVisibilityVisual = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${ResultVisual}:hover & {
    transform: scale(1.1);
  }
`;

const ConversionsVisual = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${ResultVisual}:hover & {
    transform: scale(1.1);
  }
`;

const AdReductionVisual = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${ResultVisual}:hover & {
    transform: scale(1.1);
  }
`;

const LongTermVisual = styled.div`
  width: 100%;
  height: 100%;
  background: url('https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80');
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;

  ${ResultVisual}:hover & {
    transform: scale(1.1);
  }
`;

// Стилизованные компоненты для секции FAQ
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
  margin-top: 4rem;

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
      rgba(var(--accent-color-rgb), 0.05) 0%,
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
      rgba(var(--accent-color-rgb), 0.05) 0%,
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
  text-shadow: 0 2px 10px rgba(var(--accent-color-rgb), 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;
    color: rgba(var(--accent-color-rgb), 0.03);
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
`;

const FaqList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
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

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
    box-shadow: 0 0 10px rgba(var(--accent-color-rgb), 0.2);
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
`;

const FaqCtaText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
`;

const SeoOptimization = () => {
  const seoCardContainerRef = useRef(null);
  const [activeDirection, setActiveDirection] = useState('technical');
  const [activeTool, setActiveTool] = useState(0);
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const seoTools = [
    {
      id: 'gsc',
      name: 'Google Search Console',
      icon: <FaGoogle />,
      color: '#4285F4',
      colorRgb: '66, 133, 244',
      tagline:
        'Основний сервіс для моніторингу індексації та технічних помилок',
      description:
        'Офіційний інструмент від Google, який дозволяє контролювати, як пошукова система бачить ваш сайт. Надає цінні дані про кліки, покази, CTR та позиції в пошуковій видачі.',
      features: [
        'Моніторинг індексації сторінок',
        'Виявлення технічних помилок',
        'Аналіз ключових запитів',
        'Перевірка мобільної версії',
      ],
      link: 'https://search.google.com/search-console',
    },
    {
      id: 'ga',
      name: 'Google Analytics / GA4',
      icon: <FaChartPie />,
      color: '#E49D25',
      colorRgb: '228, 157, 37',
      tagline: 'Джерело даних про поведінку користувачів та конверсії',
      description:
        'Потужна аналітична платформа для відстеження трафіку, поведінки користувачів, джерел переходів та конверсій. Дозволяє створювати сегменти, аналізувати воронки та вимірювати ROI.',
      features: [
        'Аналіз трафіку за джерелами',
        'Відстеження поведінки користувачів',
        'Вимірювання конверсій',
        'Персоналізовані звіти',
      ],
      link: 'https://analytics.google.com/',
    },
    {
      id: 'ahrefs',
      name: 'Ahrefs / Semrush / Serpstat',
      icon: <FaChartLine />,
      color: '#2C3E94',
      colorRgb: '44, 62, 148',
      tagline:
        'Платформи для комплексного SEO-аналізу та конкурентної розвідки',
      description:
        'Професійні інструменти для всебічного SEO-аналізу: дослідження ключових слів, аудит зворотних посилань, відстеження позицій, аналіз конкурентів та контенту.',
      features: [
        'Дослідження ключових слів',
        'Аналіз зворотних посилань',
        'Відстеження позицій сайту',
        'Моніторинг конкурентів',
      ],
      link: 'https://ahrefs.com/',
    },
    {
      id: 'screaming',
      name: 'Screaming Frog SEO Spider',
      icon: <FaSpider />,
      color: '#3CB04E',
      colorRgb: '60, 176, 78',
      tagline: 'Сканер сайту для виявлення технічних помилок',
      description:
        'Десктопний краулер для глибокого технічного аудиту. Сканує сайт подібно пошуковому роботу, виявляючи проблеми з мета-тегами, структурою, редиректами, битими посиланнями та іншими технічними аспектами.',
      features: [
        'Виявлення дублікатів контенту',
        'Аналіз структури сайту',
        'Перевірка редиректів та статус-кодів',
        'Пошук битих посилань',
      ],
      link: 'https://www.screamingfrog.co.uk/seo-spider/',
    },
    {
      id: 'pagespeed',
      name: 'PageSpeed Insights / GTmetrix',
      icon: <FaBolt />,
      color: '#E8710A',
      colorRgb: '232, 113, 10',
      tagline: 'Сервіси для оцінки швидкості завантаження сторінок',
      description:
        'Інструменти для аналізу швидкості завантаження сторінок, виявлення факторів, що уповільнюють сайт, та отримання конкретних рекомендацій щодо оптимізації швидкості.',
      features: [
        'Вимірювання швидкості завантаження',
        'Оцінка Core Web Vitals',
        'Рекомендації з оптимізації',
        'Порівняння з конкурентами',
      ],
      link: 'https://pagespeed.web.dev/',
    },
    {
      id: 'surfer',
      name: 'SurferSEO / NeuronWriter',
      icon: <FaLightbulb />,
      color: '#9C27B0',
      colorRgb: '156, 39, 176',
      tagline: 'Сервіси для SEO-аналізу та оптимізації контенту',
      description:
        'Інтелектуальні інструменти для створення контенту, оптимізованого під пошукові системи. Аналізують топові результати і дають рекомендації щодо структури, щільності ключів та додаткових термінів.',
      features: [
        'Аналіз конкурентного контенту',
        'Оптимізація структури тексту',
        'Рекомендації щодо ключових слів',
        'Оцінка якості контенту',
      ],
      link: 'https://surferseo.com/',
    },
  ];

  const nextTool = () => {
    setActiveTool(prev => (prev + 1) % seoTools.length);
  };

  const prevTool = () => {
    setActiveTool(prev => (prev - 1 + seoTools.length) % seoTools.length);
  };

  const goToTool = index => {
    setActiveTool(index);
  };

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

  // FAQ data
  const faqData = [
    {
      question: '1. Скільки часу потрібно, щоб побачити результати від SEO?',
      answer:
        'Перші зміни можуть бути помітні вже через 1–2 місяці після старту. Однак стабільне зростання позицій і трафіку зазвичай відбувається через 3–6 місяців активної роботи, залежно від конкурентності ніші та стану сайту.',
    },
    {
      question: '2. Чи потрібен SEO, якщо вже запущена контекстна реклама?',
      answer:
        'Так. Контекстна реклама дає миттєвий трафік, але тільки поки ви платите. SEO будує довгострокову присутність у пошуку, знижуючи вартість залучення клієнтів у майбутньому.',
    },
    {
      question: '3. Чи можна просувати новий сайт без історії?',
      answer:
        'Так, але потрібно більше часу та зусиль. Для "молодих" доменів ми зазвичай починаємо з базової технічної оптимізації, контенту та поступового нарощування посилань.',
    },
    {
      question: '4. Який бюджет потрібно для SEO-просування?',
      answer:
        'Бюджет залежить від масштабів проєкту, конкурентності запитів і цілей. У середньому для малого бізнесу мінімальний щомісячний бюджет стартує від 500–800$.',
    },
    {
      question: '5. Чи можна гарантувати топ-1 у Google?',
      answer:
        'Ні. Жоден відповідальний SEO-фахівець не дає таких гарантій. Алгоритми Google постійно змінюються, і позиції залежать від багатьох факторів. Ми гарантуємо системну роботу, яка дає реальний результат.',
    },
  ];

  // Toggle FAQ function
  const toggleFaq = index => {
    setExpandedFaqs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                SEO-оптимізація з{' '}
                <HighlightedSpan>видимими результатами</HighlightedSpan>
              </AnimatedTitle>
              <HeroDescription
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Комплексний підхід до оптимізації сайту, який підвищує видимість
                у пошукових системах, збільшує органічний трафік та конверсії.
                Ми поєднуємо технічне SEO, контент-маркетинг та зовнішню
                оптимізацію для досягнення стабільних результатів.
              </HeroDescription>
              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <PrimaryButton whileHover={{ y: -5 }}>
                  Замовити аудит сайту
                  <FaArrowRight />
                </PrimaryButton>
                <SecondaryButton whileHover={{ y: -5 }}>
                  Наші послуги
                </SecondaryButton>
              </ButtonGroup>
              <KeyPoints>
                <KeyPoint>
                  <KeyPointIcon>
                    <FaSearch />
                  </KeyPointIcon>
                  <KeyPointText>Зростання позицій у пошуку</KeyPointText>
                </KeyPoint>
                <KeyPoint>
                  <KeyPointIcon>
                    <FaUsers />
                  </KeyPointIcon>
                  <KeyPointText>Збільшення цільового трафіку</KeyPointText>
                </KeyPoint>
                <KeyPoint>
                  <KeyPointIcon>
                    <FaChartLine />
                  </KeyPointIcon>
                  <KeyPointText>Зростання конверсій і продажів</KeyPointText>
                </KeyPoint>
              </KeyPoints>
            </HeroLeft>
            <HeroRight>
              <SeoVisualization>
                <SeoCardContainer ref={seoCardContainerRef}>
                  <SeoCard
                    className="onpage"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaEdit />
                    </CardIcon>
                    <CardName>On-Page SEO</CardName>
                  </SeoCard>

                  <SeoCard
                    className="offpage"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaLink />
                    </CardIcon>
                    <CardName>Off-Page SEO</CardName>
                  </SeoCard>

                  <SeoCard
                    className="technical"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaCode />
                    </CardIcon>
                    <CardName>Технічне SEO</CardName>
                  </SeoCard>

                  <SeoCard
                    className="analytics"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaChartBar />
                    </CardIcon>
                    <CardName>Аналітика</CardName>
                  </SeoCard>

                  <SeoCard
                    className="local"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaSearchLocation />
                    </CardIcon>
                    <CardName>Локальне SEO</CardName>
                  </SeoCard>

                  <SearchPositionBadge
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: 0.9,
                    }}
                  >
                    <PositionNumber>TOP</PositionNumber>
                    <PositionText>Google</PositionText>
                  </SearchPositionBadge>
                </SeoCardContainer>

                <FloatingIcons>
                  <FloatingIcon className="code" duration="6s">
                    <FaCode />
                  </FloatingIcon>
                  <FloatingIcon className="mobile" duration="5s" delay="1s">
                    <FaMobileAlt />
                  </FloatingIcon>
                  <FloatingIcon className="globe" duration="7s" delay="0.5s">
                    <FaGlobe />
                  </FloatingIcon>
                  <FloatingIcon className="chart" duration="5.5s" delay="2s">
                    <FaChartBar />
                  </FloatingIcon>
                </FloatingIcons>
              </SeoVisualization>
            </HeroRight>
          </HeroSplit>
        </HeroInner>
      </HeroWrapper>

      <InfoSection>
        <InfoContainer>
          <InfoTitle>Що таке SEO-оптимізація</InfoTitle>

          <SeoDefinitionGrid>
            <SeoDefinitionText>
              <SeoDefinitionParagraph>
                <SeoHighlight>SEO (Search Engine Optimization)</SeoHighlight> —
                це комплекс заходів, спрямованих на покращення видимості сайту в
                пошукових системах, таких як Google. Основна мета — вивести
                сторінки сайту на перші позиції за релевантними запитами
                користувачів.
              </SeoDefinitionParagraph>

              <SeoDefinitionParagraph>
                На відміну від платної реклами, SEO дає{' '}
                <SeoHighlight>довготривалий ефект</SeoHighlight>: що краще
                оптимізований сайт, то більше безкоштовного органічного трафіку
                він отримує. Це дозволяє знижувати витрати на залучення клієнтів
                у довгостроковій перспективі.
              </SeoDefinitionParagraph>

              <SeoDefinitionParagraph>
                SEO охоплює технічну якість сайту, контент, зовнішні посилання,
                поведінкові фактори, локальну присутність та інші аспекти, які
                впливають на ранжування. Правильна SEO-стратегія дозволяє не
                просто "бути в топі", а{' '}
                <SeoHighlight>залучати саме ту аудиторію</SeoHighlight>, яка
                готова до взаємодії з вашим брендом.
              </SeoDefinitionParagraph>
            </SeoDefinitionText>

            <SeoVisual>
              <SeoEngineCircle
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <SeoIconCenter
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <FaSearch />
                </SeoIconCenter>

                <SeoIconOrbit
                  className="technical"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <FaCode />
                </SeoIconOrbit>

                <SeoIconOrbit
                  className="content"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <FaEdit />
                </SeoIconOrbit>

                <SeoIconOrbit
                  className="links"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <FaLink />
                </SeoIconOrbit>

                <SeoIconOrbit
                  className="local"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <FaSearchLocation />
                </SeoIconOrbit>
              </SeoEngineCircle>
            </SeoVisual>
          </SeoDefinitionGrid>

          <SeoAdvantagesList>
            <SeoAdvantageCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SeoAdvantageIcon>
                <FaChartLine />
              </SeoAdvantageIcon>
              <SeoAdvantageTitle>Довготривалий результат</SeoAdvantageTitle>
              <SeoAdvantageDescription>
                Налаштована SEO-оптимізація працює на вас роками, на відміну від
                контекстної реклами, що припиняється з відключенням бюджету.
              </SeoAdvantageDescription>
            </SeoAdvantageCard>

            <SeoAdvantageCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SeoAdvantageIcon>
                <FaUsers />
              </SeoAdvantageIcon>
              <SeoAdvantageTitle>Цільова аудиторія</SeoAdvantageTitle>
              <SeoAdvantageDescription>
                Залучення відвідувачів, які активно шукають ваші послуги та
                готові до взаємодії з вашим брендом.
              </SeoAdvantageDescription>
            </SeoAdvantageCard>

            <SeoAdvantageCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <SeoAdvantageIcon>
                <FaUniversalAccess />
              </SeoAdvantageIcon>
              <SeoAdvantageTitle>Довіра користувачів</SeoAdvantageTitle>
              <SeoAdvantageDescription>
                Більшість користувачів більше довіряють органічним результатам
                пошуку, ніж рекламним оголошенням.
              </SeoAdvantageDescription>
            </SeoAdvantageCard>
          </SeoAdvantagesList>
        </InfoContainer>
      </InfoSection>

      <DirectionsSection>
        <DirectionsContainer>
          <DirectionsTitle>Основні напрямки SEO</DirectionsTitle>
          <DirectionsDescription>
            SEO-оптимізація складається з кількох ключових напрямків, кожен з
            яких впливає на видимість сайту в пошукових системах. Гармонійне
            поєднання цих напрямків дозволяє досягати стабільного органічного
            трафіку та зростання позицій.
          </DirectionsDescription>

          <DirectionsTabs>
            <DirectionTab
              active={activeDirection === 'technical'}
              onClick={() => setActiveDirection('technical')}
            >
              <FaCogs /> Технічна оптимізація
            </DirectionTab>
            <DirectionTab
              active={activeDirection === 'onpage'}
              onClick={() => setActiveDirection('onpage')}
            >
              <FaEdit /> Внутрішня оптимізація
            </DirectionTab>
            <DirectionTab
              active={activeDirection === 'offpage'}
              onClick={() => setActiveDirection('offpage')}
            >
              <FaLink /> Зовнішня оптимізація
            </DirectionTab>
            <DirectionTab
              active={activeDirection === 'local'}
              onClick={() => setActiveDirection('local')}
            >
              <FaSearchLocation /> Локальне SEO
            </DirectionTab>
          </DirectionsTabs>

          <DirectionContent>
            {activeDirection === 'technical' && (
              <DirectionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -30 }}
              >
                <DirectionDetails>
                  <DirectionTitle>
                    <FaCogs />
                    Технічна оптимізація
                  </DirectionTitle>
                  <DirectionText>
                    Це фундамент SEO. Вона включає швидкість завантаження сайту,
                    адаптивність для мобільних пристроїв, коректну індексацію
                    сторінок, налаштування файлів robots.txt і sitemap.xml,
                    усунення дублів та битих посилань. Якщо технічна база
                    неякісна — просувати сайт буде складно.
                  </DirectionText>
                  <DirectionFeatures>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaBolt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Швидкість завантаження сторінок
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaMobileAlt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Адаптивність для мобільних пристроїв
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaRobot />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Налаштування robots.txt і sitemap.xml
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaBan />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Усунення дублів та битих посилань
                      </DirectionFeatureText>
                    </DirectionFeature>
                  </DirectionFeatures>
                </DirectionDetails>
                <DirectionVisual gradient="linear-gradient(135deg, #6a1b9a 0%, #9c27b0 100%)">
                  <DirectionIconMain>
                    <FaCogs />
                  </DirectionIconMain>
                  <DirectionPattern pattern="repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 4px)" />
                </DirectionVisual>
              </DirectionCard>
            )}

            {activeDirection === 'onpage' && (
              <DirectionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -30 }}
              >
                <DirectionDetails>
                  <DirectionTitle>
                    <FaEdit />
                    Внутрішня оптимізація (On-Page SEO)
                  </DirectionTitle>
                  <DirectionText>
                    Цей напрямок охоплює роботу з контентом та структурою
                    сторінок. Важливо правильно прописати мета-теги (title,
                    description), заголовки (H1-H6), оптимізувати зображення,
                    використовувати ключові слова у текстах, покращити внутрішню
                    перелінковку. Контент має бути релевантним, унікальним та
                    корисним для користувача.
                  </DirectionText>
                  <DirectionFeatures>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaTags />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Оптимізація мета-тегів та заголовків
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaFileAlt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Створення якісного контенту з ключовими словами
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaImage />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Оптимізація зображень та мультимедіа
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaRandom />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Побудова внутрішньої перелінковки
                      </DirectionFeatureText>
                    </DirectionFeature>
                  </DirectionFeatures>
                </DirectionDetails>
                <DirectionVisual gradient="linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)">
                  <DirectionIconMain>
                    <FaEdit />
                  </DirectionIconMain>
                  <DirectionPattern pattern="repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 8px)" />
                </DirectionVisual>
              </DirectionCard>
            )}

            {activeDirection === 'offpage' && (
              <DirectionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -30 }}
              >
                <DirectionDetails>
                  <DirectionTitle>
                    <FaLink />
                    Зовнішня оптимізація (Off-Page SEO)
                  </DirectionTitle>
                  <DirectionText>
                    Вона включає побудову якісного профілю зворотних посилань.
                    Посилання з авторитетних ресурсів підвищують довіру
                    пошукових систем до сайту. Важливо також працювати над
                    згадками бренду, відгуками та репутацією в мережі.
                  </DirectionText>
                  <DirectionFeatures>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaExternalLinkAlt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Побудова профілю зворотних посилань
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaBuilding />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Співпраця з авторитетними ресурсами галузі
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaComments />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Робота з відгуками та згадками бренду
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaShareAlt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Підвищення репутації в соціальних мережах
                      </DirectionFeatureText>
                    </DirectionFeature>
                  </DirectionFeatures>
                </DirectionDetails>
                <DirectionVisual gradient="linear-gradient(135deg, #0277bd 0%, #29b6f6 100%)">
                  <DirectionIconMain>
                    <FaLink />
                  </DirectionIconMain>
                  <DirectionPattern pattern="radial-gradient(circle, rgba(255,255,255,0.1) 2px, transparent 2px)" />
                </DirectionVisual>
              </DirectionCard>
            )}

            {activeDirection === 'local' && (
              <DirectionCard
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: -30 }}
              >
                <DirectionDetails>
                  <DirectionTitle>
                    <FaSearchLocation />
                    Локальне SEO
                  </DirectionTitle>
                  <DirectionText>
                    Актуальне для бізнесів, які надають послуги в певному
                    регіоні. Оптимізація включає створення та ведення профілю в
                    Google Business, роботу з локальними ключовими словами,
                    відгуками та геолокаційною релевантністю.
                  </DirectionText>
                  <DirectionFeatures>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaStoreAlt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Створення та оптимізація Google Business профілю
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaMapMarkerAlt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Геолокаційна релевантність і локальні ключі
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaStar />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Управління локальними відгуками
                      </DirectionFeatureText>
                    </DirectionFeature>
                    <DirectionFeature>
                      <DirectionFeatureIcon>
                        <FaMapMarkedAlt />
                      </DirectionFeatureIcon>
                      <DirectionFeatureText>
                        Наявність в локальних довідниках і картах
                      </DirectionFeatureText>
                    </DirectionFeature>
                  </DirectionFeatures>
                </DirectionDetails>
                <DirectionVisual gradient="linear-gradient(135deg, #c62828 0%, #ef5350 100%)">
                  <DirectionIconMain>
                    <FaSearchLocation />
                  </DirectionIconMain>
                  <DirectionPattern pattern="repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)" />
                </DirectionVisual>
              </DirectionCard>
            )}
          </DirectionContent>
        </DirectionsContainer>
      </DirectionsSection>

      <StagesSection>
        <StagesCurve />
        <StagesDecoration
          position="top: 5%; right: 5%;"
          pattern="radial-gradient(circle, var(--accent-color) 1px, transparent 1px)"
          bgSize="20px 20px"
          size="200px"
          rotate="15deg"
        />
        <StagesDecoration
          position="bottom: 10%; left: 5%;"
          pattern="linear-gradient(45deg, var(--accent-color) 1px, transparent 1px), linear-gradient(-45deg, var(--accent-color) 1px, transparent 1px)"
          bgSize="30px 30px"
          size="250px"
          rotate="-10deg"
        />
        <StagesDecoration
          position="top: 40%; left: 0;"
          pattern="linear-gradient(90deg, var(--accent-color) 1px, transparent 1px)"
          bgSize="15px 15px"
          size="150px"
          rotate="30deg"
        />
        <StagesContainer>
          <StagesTitle>Етапи роботи з SEO</StagesTitle>
          <StagesDescription>
            Ефективне SEO неможливе без чітко визначених етапів. Кожен з них
            важливий для досягнення стабільного результату та поступового
            зростання органічного трафіку.
          </StagesDescription>

          <StagesTimeline>
            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StageNumber>1</StageNumber>
              <StageContent>
                <StageIcon>
                  <FaSearchPlus />
                </StageIcon>
                <StageTitle>Аудит сайту</StageTitle>
                <StageText>
                  Починаємо з повного технічного та контентного аналізу.
                  Виявляємо помилки, недоліки структури, проблеми індексації,
                  дублікати, слабкі місця в контенті та зовнішніх посиланнях.
                </StageText>
                <StageBullets>
                  <StageBullet>
                    <FaCheck /> Технічний аналіз
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Контентний аудит
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Аналіз індексації
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Перевірка посилань
                  </StageBullet>
                </StageBullets>
              </StageContent>
              <StagePulse />
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StageNumber>2</StageNumber>
              <StageContent>
                <StageIcon>
                  <FaChartLine />
                </StageIcon>
                <StageTitle>Формування SEO-стратегії</StageTitle>
                <StageText>
                  На основі аудиту розробляємо план просування. Визначаємо
                  цільові сторінки, семантичне ядро (ключові запити), пріоритети
                  оптимізації та зовнішніх активностей.
                </StageText>
                <StageBullets>
                  <StageBullet>
                    <FaCheck /> План просування
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Семантичне ядро
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Цільові сторінки
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Пріоритети оптимізації
                  </StageBullet>
                </StageBullets>
              </StageContent>
              <StagePulse />
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StageNumber>3</StageNumber>
              <StageContent>
                <StageIcon>
                  <FaCogs />
                </StageIcon>
                <StageTitle>Технічна та внутрішня оптимізація</StageTitle>
                <StageText>
                  Проводимо роботи над структурою сайту, швидкістю завантаження,
                  адаптивністю. Вносимо зміни у мета-теги, заголовки, тексти,
                  внутрішню перелінковку, зображення.
                </StageText>
                <StageBullets>
                  <StageBullet>
                    <FaCheck /> Оптимізація структури
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Швидкість завантаження
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Метатеги і заголовки
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Внутрішня перелінковка
                  </StageBullet>
                </StageBullets>
              </StageContent>
              <StagePulse />
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StageNumber>4</StageNumber>
              <StageContent>
                <StageIcon>
                  <FaFileAlt />
                </StageIcon>
                <StageTitle>
                  Контент-маркетинг і розширення семантики
                </StageTitle>
                <StageText>
                  Створюємо нові сторінки, публікуємо SEO-статті, оновлюємо
                  існуючий контент. Поступово охоплюємо ширше коло запитів,
                  розширюючи органічний трафік.
                </StageText>
                <StageBullets>
                  <StageBullet>
                    <FaCheck /> Створення нових сторінок
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> SEO-статті
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Оновлення контенту
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Розширення семантики
                  </StageBullet>
                </StageBullets>
              </StageContent>
              <StagePulse />
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StageNumber>5</StageNumber>
              <StageContent>
                <StageIcon>
                  <FaLink />
                </StageIcon>
                <StageTitle>Лінкбілдінг і репутаційний менеджмент</StageTitle>
                <StageText>
                  Налагоджуємо отримання якісних зовнішніх посилань, публікуємо
                  матеріали на авторитетних платформах, працюємо з відгуками та
                  згадками про бренд.
                </StageText>
                <StageBullets>
                  <StageBullet>
                    <FaCheck /> Зовнішні посилання
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Гостьові публікації
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Управління відгуками
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Моніторинг згадок
                  </StageBullet>
                </StageBullets>
              </StageContent>
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <StageNumber>6</StageNumber>
              <StageContent>
                <StageIcon>
                  <FaChartBar />
                </StageIcon>
                <StageTitle>Моніторинг і аналітика</StageTitle>
                <StageText>
                  Постійно відстежуємо позиції, трафік, поведінку користувачів,
                  ефективність ключових слів. На основі даних — адаптуємо
                  стратегію та план дій.
                </StageText>
                <StageBullets>
                  <StageBullet>
                    <FaCheck /> Моніторинг позицій
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Аналіз трафіку
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Оцінка поведінки користувачів
                  </StageBullet>
                  <StageBullet>
                    <FaCheck /> Адаптація стратегії
                  </StageBullet>
                </StageBullets>
              </StageContent>
            </StageCard>
          </StagesTimeline>
        </StagesContainer>
      </StagesSection>

      <ToolsSliderSection>
        <ToolsSliderContainer>
          <ToolsSliderTitle>Інструменти SEO-фахівця</ToolsSliderTitle>
          <ToolsSliderDescription>
            Успішна SEO-оптимізація неможлива без професійних інструментів, які
            допомагають проводити аналіз, контролювати зміни та вимірювати
            результат.
          </ToolsSliderDescription>

          <SliderNavigation>
            {seoTools.map((tool, index) => (
              <SliderButton
                key={tool.id}
                active={activeTool === index}
                onClick={() => goToTool(index)}
              >
                {tool.icon} {tool.name.split('/')[0]}
              </SliderButton>
            ))}
          </SliderNavigation>

          <SliderContent>
            <AnimatePresence initial={false} mode="wait">
              {seoTools.map(
                (tool, index) =>
                  activeTool === index && (
                    <ToolSlide
                      key={tool.id}
                      color={tool.color}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    >
                      <ToolSlideHeader>
                        <ToolSlideIconWrapper
                          color={tool.color}
                          colorRgb={tool.colorRgb}
                        >
                          {tool.icon}
                        </ToolSlideIconWrapper>
                        <ToolSlideInfo>
                          <ToolSlideName>{tool.name}</ToolSlideName>
                          <ToolSlideTagline>{tool.tagline}</ToolSlideTagline>
                        </ToolSlideInfo>
                      </ToolSlideHeader>

                      <ToolSlideContent>
                        <ToolSlideDescription>
                          {tool.description}
                        </ToolSlideDescription>

                        <ToolSlideFeatures>
                          {tool.features.map((feature, idx) => (
                            <ToolSlideFeature key={idx} color={tool.color}>
                              <FaCheck />
                              <span>{feature}</span>
                            </ToolSlideFeature>
                          ))}
                        </ToolSlideFeatures>

                        <ToolSlideLink
                          href={tool.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: tool.color }}
                        >
                          <FaExternalLinkAlt /> Перейти на офіційний сайт
                        </ToolSlideLink>
                      </ToolSlideContent>
                    </ToolSlide>
                  )
              )}
            </AnimatePresence>
          </SliderContent>

          <SliderArrows>
            <SliderArrow onClick={prevTool} title="Попередній інструмент">
              &#8592;
            </SliderArrow>
            <SliderArrow onClick={nextTool} title="Наступний інструмент">
              &#8594;
            </SliderArrow>
          </SliderArrows>

          <SliderDots>
            {seoTools.map((_, index) => (
              <SliderDot
                key={index}
                active={activeTool === index}
                onClick={() => goToTool(index)}
              />
            ))}
          </SliderDots>
        </ToolsSliderContainer>
      </ToolsSliderSection>

      {/* Новая секция метрик */}
      <MetricsSection>
        <MetricsContainer>
          <MetricsTitle>Метрики ефективності SEO</MetricsTitle>
          <MetricsDescription>
            SEO — це про аналітику та вимірюваний результат. Щоб оцінити успіх
            оптимізації, необхідно регулярно відстежувати ключові метрики. Ось
            найважливіші з них:
          </MetricsDescription>

          <MetricsGrid>
            <MetricCard
              accentColor="#4CAF50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MetricHeader>
                <MetricIconWrapper
                  gradientStart="rgba(76, 175, 80, 0.2)"
                  gradientEnd="rgba(76, 175, 80, 0.05)"
                  iconColor="#4CAF50"
                >
                  <FaUsers />
                </MetricIconWrapper>
                <MetricInfo>
                  <MetricNumber color="#4CAF50">01</MetricNumber>
                  <MetricName>Органічний трафік</MetricName>
                </MetricInfo>
              </MetricHeader>
              <MetricText>
                Кількість відвідувачів, які переходять на сайт з пошукових
                систем. Зростання трафіку свідчить про покращення видимості
                сайту.
              </MetricText>

              <MetricChart>
                {[15, 25, 20, 35, 40, 45, 60].map((height, index) => (
                  <ChartBar
                    key={index}
                    barColor="rgba(76, 175, 80, 0.6)"
                    height={`${height}%`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
                <ChartLegend>
                  <span>Тиждень 1</span>
                  <span>Тиждень 7</span>
                </ChartLegend>
              </MetricChart>

              <MetricFooter>
                <MetricTrend trend="up">
                  +32% <FaArrowRight />
                </MetricTrend>
                <MetricButton>Детальніше</MetricButton>
              </MetricFooter>
            </MetricCard>

            <MetricCard
              accentColor="#2196F3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MetricHeader>
                <MetricIconWrapper
                  gradientStart="rgba(33, 150, 243, 0.2)"
                  gradientEnd="rgba(33, 150, 243, 0.05)"
                  iconColor="#2196F3"
                >
                  <FaChartLine />
                </MetricIconWrapper>
                <MetricInfo>
                  <MetricNumber color="#2196F3">02</MetricNumber>
                  <MetricName>Позиції за ключовими словами</MetricName>
                </MetricInfo>
              </MetricHeader>
              <MetricText>
                Відображають, на яких місцях у Google знаходяться ваші сторінки
                за цільовими запитами. Прогрес у позиціях — один із головних
                показників ефективної SEO-стратегії.
              </MetricText>

              <MetricChart>
                {[50, 45, 40, 35, 25, 20, 15].map((height, index) => (
                  <ChartBar
                    key={index}
                    barColor="rgba(33, 150, 243, 0.6)"
                    height={`${height}%`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
                <ChartLegend>
                  <span>Тиждень 1</span>
                  <span>Тиждень 7</span>
                </ChartLegend>
              </MetricChart>

              <MetricFooter>
                <MetricTrend trend="up">
                  +22 позиції <FaArrowRight />
                </MetricTrend>
                <MetricButton>Детальніше</MetricButton>
              </MetricFooter>
            </MetricCard>

            <MetricCard
              accentColor="#9C27B0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MetricHeader>
                <MetricIconWrapper
                  gradientStart="rgba(156, 39, 176, 0.2)"
                  gradientEnd="rgba(156, 39, 176, 0.05)"
                  iconColor="#9C27B0"
                >
                  <FaChartBar />
                </MetricIconWrapper>
                <MetricInfo>
                  <MetricNumber color="#9C27B0">03</MetricNumber>
                  <MetricName>Конверсії з органіки</MetricName>
                </MetricInfo>
              </MetricHeader>
              <MetricText>
                Важливо не лише отримувати трафік, а й щоб користувачі
                виконували цільові дії: покупки, заявки, дзвінки тощо.
              </MetricText>

              <MetricChart>
                {[10, 15, 25, 20, 35, 30, 45].map((height, index) => (
                  <ChartBar
                    key={index}
                    barColor="rgba(156, 39, 176, 0.6)"
                    height={`${height}%`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
                <ChartLegend>
                  <span>Тиждень 1</span>
                  <span>Тиждень 7</span>
                </ChartLegend>
              </MetricChart>

              <MetricFooter>
                <MetricTrend trend="up">
                  +17% <FaArrowRight />
                </MetricTrend>
                <MetricButton>Детальніше</MetricButton>
              </MetricFooter>
            </MetricCard>

            <MetricCard
              accentColor="#FF9800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MetricHeader>
                <MetricIconWrapper
                  gradientStart="rgba(255, 152, 0, 0.2)"
                  gradientEnd="rgba(255, 152, 0, 0.05)"
                  iconColor="#FF9800"
                >
                  <FaEye />
                </MetricIconWrapper>
                <MetricInfo>
                  <MetricNumber color="#FF9800">04</MetricNumber>
                  <MetricName>Час перебування та відмови</MetricName>
                </MetricInfo>
              </MetricHeader>
              <MetricText>
                Ці поведінкові метрики сигналізують про якість контенту та
                зручність навігації. Якщо користувачі швидко покидають сайт —
                варто переглянути UX або контент.
              </MetricText>

              <MetricChart>
                {[40, 38, 35, 30, 25, 20, 18].map((height, index) => (
                  <ChartBar
                    key={index}
                    barColor="rgba(255, 152, 0, 0.6)"
                    height={`${height}%`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
                <ChartLegend>
                  <span>Тиждень 1</span>
                  <span>Тиждень 7</span>
                </ChartLegend>
              </MetricChart>

              <MetricFooter>
                <MetricTrend trend="down">
                  -22% відмов <FaArrowRight />
                </MetricTrend>
                <MetricButton>Детальніше</MetricButton>
              </MetricFooter>
            </MetricCard>

            <MetricCard
              accentColor="#E91E63"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MetricHeader>
                <MetricIconWrapper
                  gradientStart="rgba(233, 30, 99, 0.2)"
                  gradientEnd="rgba(233, 30, 99, 0.05)"
                  iconColor="#E91E63"
                >
                  <FaLink />
                </MetricIconWrapper>
                <MetricInfo>
                  <MetricNumber color="#E91E63">05</MetricNumber>
                  <MetricName>Зворотні посилання</MetricName>
                </MetricInfo>
              </MetricHeader>
              <MetricText>
                Пошукові системи оцінюють авторитет сайту за кількістю та
                релевантністю посилань з інших ресурсів. Це критичний фактор у
                зовнішній оптимізації.
              </MetricText>

              <MetricChart>
                {[15, 20, 25, 30, 40, 50, 65].map((height, index) => (
                  <ChartBar
                    key={index}
                    barColor="rgba(233, 30, 99, 0.6)"
                    height={`${height}%`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
                <ChartLegend>
                  <span>Тиждень 1</span>
                  <span>Тиждень 7</span>
                </ChartLegend>
              </MetricChart>

              <MetricFooter>
                <MetricTrend trend="up">
                  +43 посилання <FaArrowRight />
                </MetricTrend>
                <MetricButton>Детальніше</MetricButton>
              </MetricFooter>
            </MetricCard>

            <MetricCard
              accentColor="#3F51B5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <MetricHeader>
                <MetricIconWrapper
                  gradientStart="rgba(63, 81, 181, 0.2)"
                  gradientEnd="rgba(63, 81, 181, 0.05)"
                  iconColor="#3F51B5"
                >
                  <FaRegFileAlt />
                </MetricIconWrapper>
                <MetricInfo>
                  <MetricNumber color="#3F51B5">06</MetricNumber>
                  <MetricName>Індексовані сторінки</MetricName>
                </MetricInfo>
              </MetricHeader>
              <MetricText>
                Кількість сторінок, які доступні в пошуку. Важливо, щоб всі
                важливі розділи сайту були індексовані, а неякісні або дублікати
                — виключені.
              </MetricText>

              <MetricChart>
                {[25, 30, 35, 45, 60, 70, 85].map((height, index) => (
                  <ChartBar
                    key={index}
                    barColor="rgba(63, 81, 181, 0.6)"
                    height={`${height}%`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                ))}
                <ChartLegend>
                  <span>Тиждень 1</span>
                  <span>Тиждень 7</span>
                </ChartLegend>
              </MetricChart>

              <MetricFooter>
                <MetricTrend trend="up">
                  +95 сторінок <FaArrowRight />
                </MetricTrend>
                <MetricButton>Детальніше</MetricButton>
              </MetricFooter>
            </MetricCard>
          </MetricsGrid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <MetricsDescription style={{ maxWidth: '700px', margin: '0 auto' }}>
              Моніторинг цих метрик дозволяє не тільки оцінити прогрес, а й
              своєчасно виявляти проблеми та коригувати стратегію просування.
            </MetricsDescription>

            <PrimaryButton
              whileHover={{ y: -5 }}
              style={{ margin: '2rem auto 0' }}
            >
              Замовити аналітичний аудит
              <FaArrowRight />
            </PrimaryButton>
          </motion.div>
        </MetricsContainer>
      </MetricsSection>

      {/* Новая секция проектов */}
      <ProjectsSection>
        <ProjectsContainer>
          <ProjectsTitle>Для яких проєктів підходить SEO</ProjectsTitle>
          <ProjectsDescription>
            SEO-оптимізація — універсальний інструмент просування, але особливо
            ефективна вона для проєктів із середньо- та довгостроковою
            стратегією росту.
          </ProjectsDescription>

          <ProjectsGrid>
            <ProjectCard
              gradient="linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.02) 100%)"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectIconContainer overlayColor="rgba(76, 175, 80, 0.3)">
                <ProjectIconBackground
                  pattern="repeating-linear-gradient(0deg, rgba(76, 175, 80, 0.1) 0px, rgba(76, 175, 80, 0.1) 1px, transparent 1px, transparent 8px)"
                  patternSize="16px 16px"
                />
                <ProjectIcon
                  className="card-icon"
                  bg="linear-gradient(135deg, #4CAF50 0%, #2E7D32 100%)"
                >
                  <FaStoreAlt />
                </ProjectIcon>
              </ProjectIconContainer>
              <ProjectContent className="card-content">
                <ProjectName>Інтернет-магазини (eCommerce)</ProjectName>
                <ProjectDescription>
                  Каталоги з великою кількістю товарів і категорій ідеально
                  підходять для SEO. Вони отримують стабільний потік покупців за
                  широким пулом запитів.
                </ProjectDescription>
                <ProjectBenefits className="project-benefits">
                  <BenefitItem>
                    <BenefitIcon bg="rgba(76, 175, 80, 0.2)" color="#4CAF50">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>
                      Органічний трафік по всьому асортименту
                    </BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(76, 175, 80, 0.2)" color="#4CAF50">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>
                      Охоплення від загальних до нішевих запитів
                    </BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(76, 175, 80, 0.2)" color="#4CAF50">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>
                      Зниження вартості залучення клієнта
                    </BenefitText>
                  </BenefitItem>
                </ProjectBenefits>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard
              gradient="linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.02) 100%)"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectIconContainer overlayColor="rgba(33, 150, 243, 0.3)">
                <ProjectIconBackground
                  pattern="repeating-linear-gradient(45deg, rgba(33, 150, 243, 0.1) 0px, rgba(33, 150, 243, 0.1) 2px, transparent 2px, transparent 8px)"
                  patternSize="20px 20px"
                />
                <ProjectIcon
                  className="card-icon"
                  bg="linear-gradient(135deg, #2196F3 0%, #0D47A1 100%)"
                >
                  <FaBuilding />
                </ProjectIcon>
              </ProjectIconContainer>
              <ProjectContent className="card-content">
                <ProjectName>B2B і корпоративні сайти</ProjectName>
                <ProjectDescription>
                  SEO дозволяє знаходити потенційних клієнтів, які шукають
                  спеціалізовані послуги або продукти. Це ефективно для
                  генерації якісних лідів у складних нішах.
                </ProjectDescription>
                <ProjectBenefits className="project-benefits">
                  <BenefitItem>
                    <BenefitIcon bg="rgba(33, 150, 243, 0.2)" color="#2196F3">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Висока релевантність трафіку</BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(33, 150, 243, 0.2)" color="#2196F3">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Зростання авторитетності в галузі</BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(33, 150, 243, 0.2)" color="#2196F3">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Якісні ліди з високим LTV</BenefitText>
                  </BenefitItem>
                </ProjectBenefits>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard
              gradient="linear-gradient(135deg, rgba(233, 30, 99, 0.1) 0%, rgba(233, 30, 99, 0.02) 100%)"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectIconContainer overlayColor="rgba(233, 30, 99, 0.3)">
                <ProjectIconBackground
                  pattern="radial-gradient(circle, rgba(233, 30, 99, 0.1) 1px, transparent 1px)"
                  patternSize="14px 14px"
                />
                <ProjectIcon
                  className="card-icon"
                  bg="linear-gradient(135deg, #E91E63 0%, #880E4F 100%)"
                >
                  <FaMapMarkedAlt />
                </ProjectIcon>
              </ProjectIconContainer>
              <ProjectContent className="card-content">
                <ProjectName>Локальний бізнес</ProjectName>
                <ProjectDescription>
                  Магазини, салони, медичні центри, ресторани можуть значно
                  підвищити відвідуваність завдяки локальному SEO — особливо
                  через пошук "поруч зі мною" та Google Maps.
                </ProjectDescription>
                <ProjectBenefits className="project-benefits">
                  <BenefitItem>
                    <BenefitIcon bg="rgba(233, 30, 99, 0.2)" color="#E91E63">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Залучення клієнтів за геолокацією</BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(233, 30, 99, 0.2)" color="#E91E63">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Присутність в локальному 3-pack</BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(233, 30, 99, 0.2)" color="#E91E63">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>
                      Перевага над конкурентами в районі
                    </BenefitText>
                  </BenefitItem>
                </ProjectBenefits>
              </ProjectContent>
            </ProjectCard>
          </ProjectsGrid>

          <ProjectsBottomRow>
            <ProjectCard
              gradient="linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(156, 39, 176, 0.02) 100%)"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectIconContainer overlayColor="rgba(156, 39, 176, 0.3)">
                <ProjectIconBackground
                  pattern="repeating-linear-gradient(90deg, rgba(156, 39, 176, 0.1) 0px, rgba(156, 39, 176, 0.1) 1px, transparent 1px, transparent 10px)"
                  patternSize="15px 15px"
                />
                <ProjectIcon
                  className="card-icon"
                  bg="linear-gradient(135deg, #9C27B0 0%, #4A148C 100%)"
                >
                  <FaFileAlt />
                </ProjectIcon>
              </ProjectIconContainer>
              <ProjectContent className="card-content">
                <ProjectName>Освітні платформи та блоги</ProjectName>
                <ProjectDescription>
                  Якісний контент і правильна оптимізація допомагають залучати
                  тисячі відвідувачів із пошуку, формуючи лояльну аудиторію.
                </ProjectDescription>
                <ProjectBenefits className="project-benefits">
                  <BenefitItem>
                    <BenefitIcon bg="rgba(156, 39, 176, 0.2)" color="#9C27B0">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Довгострокове зростання трафіку</BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(156, 39, 176, 0.2)" color="#9C27B0">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Формування бренд-експертизи</BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(156, 39, 176, 0.2)" color="#9C27B0">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Масштабованість через різні теми</BenefitText>
                  </BenefitItem>
                </ProjectBenefits>
              </ProjectContent>
            </ProjectCard>

            <ProjectCard
              gradient="linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.02) 100%)"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectIconContainer overlayColor="rgba(255, 152, 0, 0.3)">
                <ProjectIconBackground
                  pattern="linear-gradient(0deg, rgba(255, 152, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 152, 0, 0.1) 1px, transparent 1px)"
                  patternSize="15px 15px"
                />
                <ProjectIcon
                  className="card-icon"
                  bg="linear-gradient(135deg, #FF9800 0%, #E65100 100%)"
                >
                  <FaRocket />
                </ProjectIcon>
              </ProjectIconContainer>
              <ProjectContent className="card-content">
                <ProjectName>Стартапи та нові проєкти</ProjectName>
                <ProjectDescription>
                  Для нових брендів SEO — можливість зайняти місце в ніші без
                  великих витрат на рекламу. Головне — грамотно вибудувати
                  структуру з самого початку.
                </ProjectDescription>
                <ProjectBenefits className="project-benefits">
                  <BenefitItem>
                    <BenefitIcon bg="rgba(255, 152, 0, 0.2)" color="#FF9800">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>Зниження витрат на рекламу</BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(255, 152, 0, 0.2)" color="#FF9800">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>
                      Зростання разом із сезонністю ніші
                    </BenefitText>
                  </BenefitItem>
                  <BenefitItem>
                    <BenefitIcon bg="rgba(255, 152, 0, 0.2)" color="#FF9800">
                      <FaCheck />
                    </BenefitIcon>
                    <BenefitText>
                      Правильний старт з SEO-дружньою архітектурою
                    </BenefitText>
                  </BenefitItem>
                </ProjectBenefits>
              </ProjectContent>
            </ProjectCard>
          </ProjectsBottomRow>

          <ProjectsNote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProjectsNoteIcon>
              <FaBullhorn />
            </ProjectsNoteIcon>
            <ProjectsNoteText>
              Водночас SEO менш ефективне для тимчасових кампаній або
              одноразових акцій, де швидкість результату критична — там краще
              підходить контекстна реклама. Якщо вам потрібен швидкий результат
              — розгляньте комбінацію SEO і контекстної реклами для отримання як
              короткострокових, так і довгострокових результатів.
            </ProjectsNoteText>
          </ProjectsNote>
        </ProjectsContainer>
      </ProjectsSection>

      <ApproachesSection>
        <ApproachesContainer>
          <ApproachesTitle>Наші підходи до просування</ApproachesTitle>
          <ApproachesDescription>
            Ми розуміємо, що кожен бізнес унікальний, тому наш підхід до SEO —
            індивідуальний, гнучкий і максимально прозорий.
          </ApproachesDescription>

          <ApproachesGrid>
            <ApproachCard
              gradientColor="linear-gradient(90deg, #4CAF50, #8BC34A)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ApproachNumber className="approach-number">1</ApproachNumber>
              <ApproachHeader>
                <ApproachIconWrapper
                  className="approach-icon"
                  bgColor="rgba(76, 175, 80, 0.1)"
                  iconColor="#4CAF50"
                >
                  <FaSearchPlus />
                </ApproachIconWrapper>
                <ApproachContent>
                  <ApproachTitle>
                    Глибокий аналіз ніші та конкурентів
                  </ApproachTitle>
                </ApproachContent>
              </ApproachHeader>
              <ApproachText>
                Перед стартом ми детально вивчаємо ваш ринок, конкурентів,
                запити користувачів і тренди пошуку. Це дозволяє сформувати
                реалістичну стратегію, яка дійсно працює.
              </ApproachText>
            </ApproachCard>

            <ApproachCard
              gradientColor="linear-gradient(90deg, #2196F3, #03A9F4)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ApproachNumber className="approach-number">2</ApproachNumber>
              <ApproachHeader>
                <ApproachIconWrapper
                  className="approach-icon"
                  bgColor="rgba(33, 150, 243, 0.1)"
                  iconColor="#2196F3"
                >
                  <FaChartLine />
                </ApproachIconWrapper>
                <ApproachContent>
                  <ApproachTitle>
                    Пріоритезація робіт за впливом на результат
                  </ApproachTitle>
                </ApproachContent>
              </ApproachHeader>
              <ApproachText>
                Ми не розпорошуємо ресурси. Спочатку вирішуємо критичні технічні
                проблеми, паралельно запускаючи оптимізацію ключових сторінок.
                Це дає швидші результати.
              </ApproachText>
            </ApproachCard>

            <ApproachCard
              gradientColor="linear-gradient(90deg, #9C27B0, #673AB7)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ApproachNumber className="approach-number">3</ApproachNumber>
              <ApproachHeader>
                <ApproachIconWrapper
                  className="approach-icon"
                  bgColor="rgba(156, 39, 176, 0.1)"
                  iconColor="#9C27B0"
                >
                  <FaFileAlt />
                </ApproachIconWrapper>
                <ApproachContent>
                  <ApproachTitle>Орієнтація на якісний контент</ApproachTitle>
                </ApproachContent>
              </ApproachHeader>
              <ApproachText>
                Просування без сильного контенту — неефективне. Ми створюємо
                унікальні тексти, оптимізовані під пошукові запити, але з
                фокусом на цінність для користувача.
              </ApproachText>
            </ApproachCard>

            <ApproachCard
              gradientColor="linear-gradient(90deg, #FF9800, #FF5722)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ApproachNumber className="approach-number">4</ApproachNumber>
              <ApproachHeader>
                <ApproachIconWrapper
                  className="approach-icon"
                  bgColor="rgba(255, 152, 0, 0.1)"
                  iconColor="#FF9800"
                >
                  <FaLink />
                </ApproachIconWrapper>
                <ApproachContent>
                  <ApproachTitle>Білий лінкбілдінг</ApproachTitle>
                </ApproachContent>
              </ApproachHeader>
              <ApproachText>
                Будуємо посилання лише з авторитетних та релевантних ресурсів.
                Не використовуємо "сірих" схем, які можуть зашкодити вашому
                сайту в довгостроковій перспективі.
              </ApproachText>
            </ApproachCard>

            <ApproachCard
              gradientColor="linear-gradient(90deg, #F44336, #E91E63)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ApproachNumber className="approach-number">5</ApproachNumber>
              <ApproachHeader>
                <ApproachIconWrapper
                  className="approach-icon"
                  bgColor="rgba(244, 67, 54, 0.1)"
                  iconColor="#F44336"
                >
                  <FaChartBar />
                </ApproachIconWrapper>
                <ApproachContent>
                  <ApproachTitle>Постійна аналітика та адаптація</ApproachTitle>
                </ApproachContent>
              </ApproachHeader>
              <ApproachText>
                SEO — це не одноразова послуга, а безперервний процес. Ми
                щомісяця аналізуємо результати, переглядаємо стратегію та даємо
                вам повну картину змін.
              </ApproachText>
            </ApproachCard>

            <ApproachCard
              gradientColor="linear-gradient(90deg, #3F51B5, #2196F3)"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ApproachNumber className="approach-number">6</ApproachNumber>
              <ApproachHeader>
                <ApproachIconWrapper
                  className="approach-icon"
                  bgColor="rgba(63, 81, 181, 0.1)"
                  iconColor="#3F51B5"
                >
                  <FaRocket />
                </ApproachIconWrapper>
                <ApproachContent>
                  <ApproachTitle>Співпраця на довгій дистанції</ApproachTitle>
                </ApproachContent>
              </ApproachHeader>
              <ApproachText>
                Наша мета — не просто "вивести в топ", а побудувати систему
                стабільного залучення трафіку, яка працюватиме роками.
              </ApproachText>
            </ApproachCard>
          </ApproachesGrid>

          <ApproachesCallout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ApproachesCalloutTitle>
              Готові до зростання органічного трафіку?
            </ApproachesCalloutTitle>
            <ApproachesCalloutText>
              Замовте безкоштовну консультацію, на якій ми проаналізуємо ваш
              сайт і запропонуємо конкретні кроки для покращення його видимості
              в пошуку.
            </ApproachesCalloutText>
            <CenteredButton whileHover={{ y: -5 }}>
              Замовити консультацію
              <FaArrowRight />
            </CenteredButton>
          </ApproachesCallout>
        </ApproachesContainer>
      </ApproachesSection>

      <ResultsSection>
        <ResultsContainer>
          <ResultsTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Результати, які ми досягаємо
          </ResultsTitle>
          <ResultsDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Ми зосереджуємось на конкретних бізнес-результатах, а не лише на
            зростанні позицій у пошуковій видачі. Ось що отримують наші клієнти
            в результаті SEO-оптимізації:
          </ResultsDescription>

          <ResultsWrapper>
            <ResultCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ResultNumber>1</ResultNumber>
              <ResultContent>
                <ResultTitle>
                  Збільшення органічного трафіку на 2–5 разів
                </ResultTitle>
                <ResultDescription>
                  Завдяки технічному вдосконаленню сайту, релевантному контенту
                  та розширенню семантики ми суттєво підвищуємо кількість
                  відвідувачів з пошуку.
                </ResultDescription>
              </ResultContent>
              <ResultVisual>
                <GrowthChart />
              </ResultVisual>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ResultNumber>2</ResultNumber>
              <ResultContent>
                <ResultTitle>Покращення видимості бренду в Google</ResultTitle>
                <ResultDescription>
                  Ваш сайт починає з'являтися за більшою кількістю запитів,
                  включаючи інформаційні, комерційні та брендовані. Це підвищує
                  впізнаваність і довіру.
                </ResultDescription>
              </ResultContent>
              <ResultVisual>
                <BrandVisibilityVisual />
              </ResultVisual>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ResultNumber>3</ResultNumber>
              <ResultContent>
                <ResultTitle>Стабільне зростання лідів і продажів</ResultTitle>
                <ResultDescription>
                  Якісний трафік приводить зацікавлених користувачів, які
                  частіше залишають заявки, замовляють послуги або купують
                  товари.
                </ResultDescription>
              </ResultContent>
              <ResultVisual>
                <ConversionsVisual />
              </ResultVisual>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ResultNumber>4</ResultNumber>
              <ResultContent>
                <ResultTitle>
                  Зменшення залежності від платної реклами
                </ResultTitle>
                <ResultDescription>
                  Сильна SEO-стратегія дозволяє отримувати трафік без постійних
                  витрат на рекламу. Це дає бізнесу більше фінансової
                  стабільності.
                </ResultDescription>
              </ResultContent>
              <ResultVisual>
                <AdReductionVisual />
              </ResultVisual>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ResultNumber>5</ResultNumber>
              <ResultContent>
                <ResultTitle>Побудова довгострокової переваги</ResultTitle>
                <ResultDescription>
                  SEO працює на перспективу. Навіть після завершення активних
                  робіт результати зберігаються та продовжують приносити
                  цінність.
                </ResultDescription>
              </ResultContent>
              <ResultVisual>
                <LongTermVisual />
              </ResultVisual>
            </ResultCard>

            <ResultNote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ResultNoteText>
                Ми не обіцяємо "топ-1 за тиждень", але гарантуємо системний,
                стійкий і прогнозований ріст — саме те, що потрібно серйозному
                бізнесу.
              </ResultNoteText>
            </ResultNote>
          </ResultsWrapper>
        </ResultsContainer>
      </ResultsSection>

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
              Маєте додаткові запитання щодо SEO-оптимізації?
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Зв'язатися з нами <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>

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
        </HeroWrapper>
      </PageContainer>
    </PageContainer>
  );
};

// Spider icon component for Screaming Frog
const FaSpider = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M450.75 112.5c0 15.5-12.5 28-28 28s-28-12.5-28-28 12.5-28 28-28 28 12.5 28 28zM89.25 112.5c0 15.5-12.5 28-28 28s-28-12.5-28-28 12.5-28 28-28 28 12.5 28 28zM296 353c8 4 19.5 7 31 7 38 0 69-26 69-59 0-27-25-46-67-57l-9-2c-42-8-71-26-71-57 0-23 20-43 50-48-7-1-14-2-22-2h-13c-36 7-59 29-59 59 0 34 31 52 64 59l3 1c47 10 80 24 80 56 0 19-14 35-37 42-2 1-4 1-6 1h-8c-3 0-7-1-10-1l5 1zM239 224c0 41-17 69-44 84-16-7-31-16-45-28 21-14 33-35 33-57 0-24-15-46-44-56-5-2-12-4-18-5l-5-1c-1 0-1 0-1-1h1l-1-1c-16-2-23-7-23-15 0-9 9-15 26-16 1 0 1 0 1-1 4 0 8 1 12 1 3 0 6 0 9-1-9-9-20-16-32-20-25 2-44 13-44 36 0 25 29 34 50 37l5 1c17 3 36 8 36 25 0 14-15 27-36 27-20 0-33-11-33-27 0-4 1-8 3-12-10 9-18 20-24 32-12-24-18-52-18-81 0-65 33-122 83-155 21 14 38 32 51 54-12 4-22 9-30 16-4-8-11-15-19-20 5 9 7 19 7 30zm88-94c-22-14-47-24-75-27 25 2 55 8 75 27zm-168 21c8 5 14 12 18 20-8-7-18-12-30-16 6-10 12-20 19-27l-7 6c-21 17-38 37-51 60 26-26 58-44 94-51-15-1-30 2-43 8zm121 97c-3-47-32-87-73-106 54 22 92 75 92 137 0 29-8 56-23 79-7-26-22-48-42-65 13-15 20-29 21-45zm-62 79c-6 4-12 8-19 11 7-3 14-6 19-11zm-129 18c9 4 19 7 30 9-9-2-19-5-30-9zm-32-16c6 7 12 13 19 19-7-6-13-12-19-19zm210 50c-17 6-35 10-54 10-40 0-76-15-104-40 29 24 65 39 105 39 19 0 37-4 53-9zM398 144l18 6-5-19c30 9 43 42 26 69l-9 14 16 4c0 38-20 73-52 92l-15 9 18 2c-25 32-64 52-107 52-6 0-12 0-17-1l-19-2 13 13c-43 0-81-17-110-46l-9-9v13c-45-24-75-71-75-125v-15l-13 9c-2-46 21-88 59-111l17-11-19-4c32-24 71-37 114-37h3l15 1-12-10c36 0 69 11 97 30l11 8-3-13c45 8 79 45 84 92z" />
  </svg>
);

export default SeoOptimization;
