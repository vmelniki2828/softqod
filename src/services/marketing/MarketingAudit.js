import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaArrowRight,
  FaChartLine,
  FaSearch,
  FaUsers,
  FaChartBar,
  FaChartPie,
  FaEye,
  FaLightbulb,
  FaBullhorn,
  FaShareAlt,
  FaPlus,
  FaClipboardList,
  FaBullseye,
  FaFunnelDollar,
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

const KeyPoints = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const LegacyKeyPoint = styled.div`
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

const LegacyKeyPointIcon = styled.div`
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

const LegacyKeyPointText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

// Marketing Audit Visualization Components
const AuditVisualization = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const AuditCardContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
  animation: ${floatUpDown} 6s ease-in-out infinite;
`;

const AuditCard = styled(motion.div)`
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
  cursor: pointer;
  transition: all 0.3s ease;

  &.strategy {
    top: 50px;
    left: 50px;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      rgba(var(--accent-color-rgb), 0.05) 100%
    );
  }

  &.competitors {
    top: 100px;
    right: 80px;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.1) 0%,
      rgba(59, 130, 246, 0.05) 100%
    );
  }

  &.analytics {
    bottom: 150px;
    left: 100px;
    background: linear-gradient(
      135deg,
      rgba(16, 185, 129, 0.1) 0%,
      rgba(16, 185, 129, 0.05) 100%
    );
  }

  &.channels {
    bottom: 100px;
    right: 50px;
    background: linear-gradient(
      135deg,
      rgba(245, 158, 11, 0.1) 0%,
      rgba(245, 158, 11, 0.05) 100%
    );
  }

  &.conversion {
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(
      135deg,
      rgba(168, 85, 247, 0.1) 0%,
      rgba(168, 85, 247, 0.05) 100%
    );
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const CardIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
  opacity: 0.9;
`;

const CardName = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  line-height: 1.3;
`;

const AuditBadge = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(var(--accent-color-rgb), 0.8) 100%
  );
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  box-shadow: 0 8px 25px rgba(var(--accent-color-rgb), 0.3);
`;

const BadgeNumber = styled.div`
  font-size: 1.2rem;
  font-weight: 800;
  line-height: 1;
`;

const BadgeText = styled.div`
  font-size: 0.7rem;
  opacity: 0.9;
  line-height: 1;
`;

const FloatingIcons = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1rem;
  animation: ${floatAnimation} ${props => props.duration || '3s'} ease-in-out
    infinite;
  animation-delay: ${props => props.delay || '0s'};

  &.chart {
    top: 30px;
    left: 30px;
  }

  &.target {
    top: 80px;
    right: 40px;
  }

  &.funnel {
    bottom: 100px;
    left: 20px;
  }

  &.checklist {
    bottom: 60px;
    right: 30px;
  }
`;

// What is Marketing Audit Section
const WhatIsSection = styled.section`
  padding: 6rem 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 20% 30%,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 50%
    );
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 30% 70%,
      rgba(var(--accent-color-rgb), 0.03) 0%,
      transparent 70%
    );
    animation: ${floatAnimation} 20s ease-in-out infinite;
    z-index: 0;
  }
`;

const WhatIsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const WhatIsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const WhatIsTitle = styled(motion.h2)`
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const WhatIsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const WhatIsContent = styled.div`
  position: relative;
`;

const WhatIsDefinition = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      var(--accent-color) 0%,
      rgba(var(--accent-color-rgb), 0.3) 100%
    );
  }
`;

const DefinitionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightText = styled.span`
  color: var(--accent-color);
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(var(--accent-color-rgb), 0.3);
    border-radius: 1px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const BenefitCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--accent-color-rgb), 0.3),
      transparent
    );
  }
`;

const BenefitIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const BenefitDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const WhatIsVisual = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const AuditProcessCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.2) 0%,
      transparent 30%,
      transparent 70%,
      rgba(59, 130, 246, 0.2) 100%
    );
    z-index: -1;
    border-radius: 16px;
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const ProcessIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    var(--accent-color),
    rgba(var(--accent-color-rgb), 0.8)
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProcessStep = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }
`;

const StepNumber = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.15);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 600;
  flex-shrink: 0;
`;

const StepText = styled.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

// When Need Audit Section
const WhenNeedSection = styled.section`
  padding: 6rem 0;
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
        circle at 30% 20%,
        rgba(var(--secondary-color-rgb), 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(var(--accent-color-rgb), 0.03) 0%,
        transparent 50%
      );
    z-index: 0;
  }
`;

const WhenNeedContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const WhenNeedHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const WhenNeedTitle = styled(motion.h2)`
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const WhenNeedSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const SituationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const SituationsGridBottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: none;
  }
`;

const SituationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(var(--accent-color-rgb), 0.3);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props =>
      props.gradient ||
      'linear-gradient(90deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.5))'};
    border-radius: 20px 20px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100px;
    height: 100px;
    background: ${props =>
      props.gradientBg ||
      'radial-gradient(circle, rgba(var(--accent-color-rgb), 0.05) 0%, transparent 70%)'};
    border-radius: 50%;
    transition: all 0.6s ease;
  }

  &:hover::after {
    top: -30%;
    right: -30%;
    width: 150px;
    height: 150px;
  }
`;

const SituationHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SituationIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: ${props =>
    props.bgGradient ||
    'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  box-shadow: 0 8px 25px rgba(var(--accent-color-rgb), 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: ${props =>
      props.bgGradient ||
      'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
    border-radius: 18px;
    z-index: -1;
    opacity: 0.3;
    filter: blur(8px);
  }
`;

const SituationContent = styled.div`
  flex: 1;
`;

const SituationTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  line-height: 1.3;
`;

const SituationDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const HighlightPhrase = styled.span`
  color: var(--accent-color);
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: rgba(var(--accent-color-rgb), 0.3);
    border-radius: 1px;
  }
`;

const ConclusionCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 30%,
      transparent 70%,
      rgba(245, 158, 11, 0.08) 100%
    );
    z-index: -1;
  }
`;

// What Includes Section
const WhatIncludesSection = styled.section`
  padding: 6rem 0;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.02) 0%,
    rgba(var(--secondary-color-rgb), 0.02) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at 40% 60%,
      rgba(var(--accent-color-rgb), 0.03) 0%,
      transparent 70%
    );
    animation: ${floatAnimation} 25s ease-in-out infinite;
    z-index: 0;
  }
`;

const WhatIncludesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const WhatIncludesHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const WhatIncludesTitle = styled(motion.h2)`
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const WhatIncludesSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.7;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const TabButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  background: ${props =>
    props.active
      ? 'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'
      : 'rgba(255, 255, 255, 0.03)'};
  color: ${props => (props.active ? 'white' : 'var(--text-secondary)')};
  border: 1px solid
    ${props =>
      props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props =>
      props.active
        ? 'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.9))'
        : 'rgba(255, 255, 255, 0.05)'};
    border-color: ${props =>
      props.active
        ? 'var(--accent-color)'
        : 'rgba(var(--accent-color-rgb), 0.3)'};
    transform: translateY(-2px);
  }

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
    transition: left 0.5s ease;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const TabContentContainer = styled.div`
  min-height: 600px;
  position: relative;
`;

const TabContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: ${props => (props.active ? 1 : 0)};
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  transform: ${props => (props.active ? 'translateY(0)' : 'translateY(20px)')};
  transition: all 0.4s ease;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContentMain = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props =>
      props.gradient ||
      'linear-gradient(90deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.5))'};
    border-radius: 20px 20px 0 0;
  }
`;

const ContentIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${props =>
    props.bgGradient ||
    'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  animation: ${floatAnimation} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${props =>
      props.bgGradient ||
      'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
    border-radius: 21px;
    z-index: -1;
    opacity: 0.3;
    filter: blur(10px);
  }
`;

const ContentTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ContentDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ContentFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    transform: translateX(5px);
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 60%;
    background: ${props => props.accent || 'var(--accent-color)'};
    border-radius: 0 2px 2px 0;
  }
`;

const FeatureTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  padding-left: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  padding-left: 1rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const MetricItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.05);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const MetricName = styled.div`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
`;

const MetricValue = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent-color);
`;

// How We Audit Section
const HowWeAuditSection = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent 0deg,
      rgba(var(--accent-color-rgb), 0.02) 90deg,
      transparent 180deg,
      rgba(var(--secondary-color-rgb), 0.02) 270deg,
      transparent 360deg
    );
    animation: ${shimmer} 30s linear infinite;
    z-index: 0;
  }
`;

const HowWeAuditContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const HowWeAuditHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const HowWeAuditTitle = styled(motion.h2)`
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const HowWeAuditSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 750px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ProcessContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProcessTimeline = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(
    180deg,
    var(--accent-color) 0%,
    rgba(245, 158, 11, 0.8) 50%,
    rgba(16, 185, 129, 0.6) 100%
  );
  transform: translateX(-50%);
  border-radius: 2px;

  @media (max-width: 768px) {
    left: 30px;
    transform: none;
  }
`;

const AuditProcessStep = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 4rem;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: row;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 3rem;
  }
`;

const AuditStepNumber = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color),
    rgba(var(--accent-color-rgb), 0.8)
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 3;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.4);

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: linear-gradient(
      135deg,
      var(--accent-color),
      rgba(var(--accent-color-rgb), 0.6)
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.3;
    filter: blur(10px);
    animation: ${breatheAnimation} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    left: 30px;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const StepContent = styled.div`
  width: 45%;
  padding: 2rem 3rem;

  @media (max-width: 768px) {
    width: calc(100% - 100px);
    margin-left: 100px;
    padding: 1.5rem 2rem;
  }
`;

const StepCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(var(--accent-color-rgb), 0.3);
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props =>
      props.gradient ||
      'linear-gradient(90deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.5))'};
    border-radius: 20px 20px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100px;
    height: 100px;
    background: ${props =>
      props.gradientBg ||
      'radial-gradient(circle, rgba(var(--accent-color-rgb), 0.1) 0%, transparent 70%)'};
    border-radius: 50%;
    transition: all 0.6s ease;
  }

  &:hover::after {
    top: -30%;
    right: -30%;
    width: 150px;
    height: 150px;
  }
`;

const StepIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: ${props =>
    props.bgGradient ||
    'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  animation: ${floatAnimation} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${props =>
      props.bgGradient ||
      'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
    border-radius: 19px;
    z-index: -1;
    opacity: 0.3;
    filter: blur(8px);
  }
`;

const StepTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const StepFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const StepFeature = styled.span`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.3);
    color: var(--accent-color);
  }
`;

const ProcessSummary = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 30%,
      transparent 70%,
      rgba(16, 185, 129, 0.08) 100%
    );
    z-index: -1;
  }
`;

const SummaryIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    var(--accent-color),
    rgba(16, 185, 129, 0.8)
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin: 0 auto 2rem;
  position: relative;
  animation: ${floatAnimation} 4s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(
      135deg,
      var(--accent-color),
      rgba(16, 185, 129, 0.8)
    );
    border-radius: 23px;
    z-index: -1;
    opacity: 0.4;
    filter: blur(12px);
  }
`;

const SummaryTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const SummaryText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

// Tools Section
const ToolsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(var(--primary-color-rgb), 0.01) 0%,
    rgba(var(--accent-color-rgb), 0.02) 50%,
    rgba(var(--secondary-color-rgb), 0.01) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 20%,
        rgba(var(--accent-color-rgb), 0.05) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(var(--secondary-color-rgb), 0.05) 0%,
        transparent 50%
      );
    z-index: 0;
  }
`;

const ToolsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ToolsHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const ToolsTitle = styled(motion.h2)`
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ToolsSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgb(var(--text-color-rgb), 0.8);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ToolCard = styled(motion.div)`
  background: rgba(var(--card-background-rgb), 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.15);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${props => props.gradient};
    border-radius: 24px 24px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: ${props =>
      `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${props.glowColor} 60deg, transparent 120deg)`};
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 0;
    animation: ${shimmer} 8s linear infinite;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(var(--shadow-color-rgb), 0.25),
      0 0 0 1px ${props => props.borderColor},
      0 0 40px ${props => props.shadowColor};

    &::after {
      opacity: 0.03;
    }

    .tool-icon {
      transform: scale(1.15) rotate(10deg);
      box-shadow: 0 15px 30px ${props => props.shadowColor};
    }

    .tool-name {
      color: ${props => props.accentColor};
    }
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

const ToolIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 25px ${props => props.shadowColor};
`;

const ToolName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(var(--primary-color-rgb));
  margin-bottom: 1rem;
  text-align: center;
  transition: color 0.3s ease;
`;

const ToolDescription = styled.p`
  font-size: 1rem;
  color: rgb(var(--text-color-rgb), 0.75);
  line-height: 1.6;
  text-align: center;
  margin-bottom: 2rem;
`;

const ToolFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ToolFeature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(var(--accent-color-rgb), 0.03);
  border-radius: 12px;
  border-left: 3px solid ${props => props.color};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.06);
    transform: translateX(5px);
  }
`;

const ToolFeatureIcon = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${props => props.color};
  margin-top: 8px;
  flex-shrink: 0;
  box-shadow: 0 0 10px ${props => props.color};
`;

const FeatureText = styled.div`
  flex: 1;
`;

const FeatureName = styled.span`
  font-weight: 600;
  color: rgb(var(--primary-color-rgb));
  font-size: 0.95rem;
  display: block;
  margin-bottom: 0.25rem;
`;

const ToolFeatureDescription = styled.span`
  font-size: 0.85rem;
  color: rgb(var(--text-color-rgb), 0.7);
  line-height: 1.4;
`;

const ToolsConclusion = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.08) 0%,
    rgba(var(--secondary-color-rgb), 0.08) 100%
  );
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);
  border-radius: 30px;
  padding: 4rem 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(
      45deg,
      rgb(var(--accent-color-rgb)),
      rgb(var(--secondary-color-rgb)),
      rgb(var(--accent-color-rgb))
    );
    border-radius: 32px;
    z-index: 0;
    opacity: 0.1;
    animation: ${shimmer} 3s ease-in-out infinite;
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

const ToolsConclusionIcon = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgb(var(--accent-color-rgb)),
    rgb(var(--secondary-color-rgb))
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2.5rem;
  font-size: 2.5rem;
  color: white;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  box-shadow: 0 15px 35px rgba(var(--accent-color-rgb), 0.4),
    0 0 50px rgba(var(--accent-color-rgb), 0.2);
`;

const ToolsConclusionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: rgb(var(--primary-color-rgb));
  margin-bottom: 1.5rem;
`;

const ToolsConclusionText = styled.p`
  font-size: 1.2rem;
  color: rgb(var(--text-color-rgb), 0.8);
  line-height: 1.7;
  max-width: 650px;
  margin: 0 auto;
`;

// What You'll Get Section
const WhatYoullGetSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(var(--primary-color-rgb), 0.02) 0%,
    rgba(var(--accent-color-rgb), 0.03) 50%,
    rgba(var(--secondary-color-rgb), 0.02) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 25% 25%,
        rgba(var(--accent-color-rgb), 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 75% 75%,
        rgba(var(--secondary-color-rgb), 0.06) 0%,
        transparent 50%
      );
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: conic-gradient(
      from 180deg at 50% 50%,
      transparent 0deg,
      rgba(var(--accent-color-rgb), 0.01) 60deg,
      transparent 120deg,
      rgba(var(--secondary-color-rgb), 0.01) 180deg,
      transparent 240deg,
      rgba(var(--accent-color-rgb), 0.01) 300deg,
      transparent 360deg
    );
    animation: ${shimmer} 40s linear infinite;
    z-index: 0;
  }
`;

const WhatYoullGetContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const WhatYoullGetHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const WhatYoullGetTitle = styled(motion.h2)`
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const WhatYoullGetSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: rgb(var(--text-color-rgb), 0.8);
  line-height: 1.7;
  max-width: 800px;
  margin: 0 auto;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ResultCard = styled(motion.div)`
  background: rgba(var(--card-background-rgb), 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(var(--border-color-rgb), 0.15);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => props.gradient};
    border-radius: 24px 24px 0 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: ${props =>
      `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${props.glowColor} 45deg, transparent 90deg)`};
    opacity: 0;
    transition: all 0.4s ease;
    z-index: 0;
    animation: ${shimmer} 6s linear infinite;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 30px 60px rgba(var(--shadow-color-rgb), 0.3),
      0 0 0 1px ${props => props.borderColor},
      0 0 50px ${props => props.shadowColor};

    &::after {
      opacity: 0.04;
    }

    .result-icon {
      transform: scale(1.2) rotate(15deg);
      box-shadow: 0 20px 40px ${props => props.shadowColor};
    }

    .result-title {
      color: ${props => props.accentColor};
    }

    .result-features {
      transform: translateX(8px);
    }
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

const ResultIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2.5rem;
  font-size: 2.5rem;
  color: white;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 15px 35px ${props => props.shadowColor};
`;

const ResultTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: rgb(var(--primary-color-rgb));
  margin-bottom: 1.5rem;
  text-align: center;
  transition: color 0.3s ease;
  line-height: 1.3;
`;

const ResultDescription = styled.p`
  font-size: 1.1rem;
  color: rgb(var(--text-color-rgb), 0.8);
  line-height: 1.7;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const ResultFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  transition: transform 0.3s ease;
`;

const ResultFeature = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.2rem;
  background: rgba(var(--accent-color-rgb), 0.04);
  border-radius: 16px;
  border-left: 4px solid ${props => props.color};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.08);
    transform: translateX(8px);
    border-left-width: 6px;
  }
`;

const ResultFeatureIcon = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.color};
  margin-top: 8px;
  flex-shrink: 0;
  box-shadow: 0 0 15px ${props => props.color};
  animation: ${breatheAnimation} 3s ease-in-out infinite;
`;

const ResultFeatureText = styled.div`
  flex: 1;
`;

const ResultFeatureName = styled.span`
  font-weight: 700;
  color: rgb(var(--primary-color-rgb));
  font-size: 1.05rem;
  display: block;
  margin-bottom: 0.5rem;
`;

const ResultFeatureDesc = styled.span`
  font-size: 0.95rem;
  color: rgb(var(--text-color-rgb), 0.75);
  line-height: 1.5;
`;

const FinalConclusion = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--secondary-color-rgb), 0.1) 100%
  );
  border: 1px solid rgba(var(--accent-color-rgb), 0.25);
  border-radius: 40px;
  padding: 5rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(
      45deg,
      rgb(var(--accent-color-rgb)),
      rgb(var(--secondary-color-rgb)),
      rgb(var(--accent-color-rgb)),
      rgb(var(--secondary-color-rgb))
    );
    border-radius: 43px;
    z-index: 0;
    opacity: 0.15;
    animation: ${shimmer} 4s ease-in-out infinite;
  }

  * {
    position: relative;
    z-index: 1;
  }
`;

const ResultsConclusionIconGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const ResultsConclusionIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  animation: ${floatAnimation} ${props => props.delay}s ease-in-out infinite;
  box-shadow: 0 20px 45px ${props => props.shadowColor},
    0 0 60px ${props => props.glowColor};

  &:hover {
    transform: scale(1.15);
  }
`;

const ResultsConclusionTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  color: rgb(var(--primary-color-rgb));
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const ResultsConclusionText = styled.p`
  font-size: 1.4rem;
  color: rgb(var(--text-color-rgb), 0.85);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
`;

// Advantages Section
const AdvantagesSection = styled.section`
  padding: 10rem 0;
  background: linear-gradient(
    135deg,
    rgba(var(--primary-color-rgb), 0.02) 0%,
    rgba(var(--accent-color-rgb), 0.03) 50%,
    rgba(var(--secondary-color-rgb), 0.02) 100%
  );
  position: relative;
  overflow: hidden;
`;

const AdvantagesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(var(--secondary-color-rgb), 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 50% 50%,
      rgba(var(--primary-color-rgb), 0.03) 0%,
      transparent 70%
    );
  animation: ${floatAnimation} 40s ease-in-out infinite;
  z-index: 0;
`;

const AdvantagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const AdvantagesHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const AdvantagesTitle = styled(motion.h2)`
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
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const AdvantagesSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.8;
  font-weight: 500;
`;

const AdvantagesTimeline = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: 6rem;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(
      to bottom,
      var(--accent-color),
      rgba(var(--accent-color-rgb), 0.5),
      var(--accent-color)
    );
    border-radius: 2px;
    transform: translateX(-50%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    &::before {
      left: 30px;
    }
  }
`;

const AdvantageItem = styled(motion.div)`
  display: flex;
  align-items: center;
  position: relative;

  ${props =>
    props.isEven
      ? `
    flex-direction: row;
  `
      : `
    flex-direction: row-reverse;
  `}

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const AdvantageConnector = styled.div`
  position: absolute;
  top: 50%;
  ${props => (props.isEven ? 'right: 50%;' : 'left: 50%;')}
  width: 60px;
  height: 4px;
  background: linear-gradient(
    ${props => (props.isEven ? '90deg' : '-90deg')},
    var(--accent-color),
    rgba(var(--accent-color-rgb), 0.3)
  );
  transform: translateY(-50%);
  z-index: 1;

  @media (max-width: 768px) {
    left: 30px;
    right: auto;
    width: 40px;
  }
`;

const AdvantageNumber = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color),
    rgba(var(--accent-color-rgb), 0.8)
  );
  border: 4px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: white;
  z-index: 2;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.3),
    0 0 40px rgba(var(--accent-color-rgb), 0.2);

  @media (max-width: 768px) {
    left: 30px;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const AdvantageCard = styled(motion.div)`
  width: calc(50% - 60px);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.background};
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    border-color: rgba(var(--accent-color-rgb), 0.3);
    box-shadow: 0 25px 70px ${props => props.shadowColor},
      0 0 100px rgba(var(--accent-color-rgb), 0.1);
  }

  @media (max-width: 768px) {
    width: calc(100% - 80px);
    margin-left: 80px;
  }
`;

const AdvantageIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  margin-bottom: 2rem;
  position: relative;
  animation: ${floatAnimation} 4s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: ${props => props.color};
    border-radius: 23px;
    z-index: -1;
    opacity: 0.4;
    filter: blur(12px);
  }
`;

const AdvantageContent = styled.div`
  flex: 1;
`;

const AdvantageTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const WhenConclusionIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    var(--accent-color),
    rgba(245, 158, 11, 0.8)
  );
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  margin: 0 auto 2rem;
  position: relative;
  animation: ${floatAnimation} 4s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    background: linear-gradient(
      135deg,
      var(--accent-color),
      rgba(245, 158, 11, 0.8)
    );
    border-radius: 23px;
    z-index: -1;
    opacity: 0.4;
    filter: blur(12px);
  }
`;

const WhenConclusionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const WhenConclusionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const AdvantageDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const AdvantageKeyPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const KeyPointIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const KeyPointText = styled.span`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const AdvantageGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 50%,
    ${props => props.color} 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
  z-index: -2;

  ${AdvantageCard}:hover & {
    opacity: 0.3;
  }
`;

const AdvantagesFooter = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 50%,
      rgba(var(--secondary-color-rgb), 0.05) 100%
    );
    z-index: -1;
  }
`;

const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const FooterIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  animation: ${floatAnimation} ${props => props.delay}s ease-in-out infinite;
  box-shadow: 0 20px 50px ${props => props.shadowColor},
    0 0 80px rgba(var(--accent-color-rgb), 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) translateY(-5px);
  }
`;

const FooterTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 2rem;
  line-height: 1.3;
`;

const FooterText = styled.p`
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 500;
`;

// Стилизованные компоненты для секции FAQ
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
    animation: ${floatAnimation} 15s infinite ease-in-out;
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
    animation: ${floatAnimation} 18s infinite ease-in-out reverse;
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

const MarketingAudit = () => {
  const auditCardContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const auditTabs = [
    {
      id: 0,
      name: 'Реклама',
      icon: '📊',
      title: 'Аналіз рекламних кампаній',
      description:
        'Ми перевіряємо ефективність усіх активних рекламних кампаній — у Google Ads, Meta Ads, YouTube, TikTok, інших медійних або програматик-платформах.',
      gradient: 'linear-gradient(90deg, #EF4444, rgba(239, 68, 68, 0.5))',
      bgGradient: 'linear-gradient(135deg, #EF4444, rgba(239, 68, 68, 0.8))',
      features: [
        {
          title: 'Налаштування таргетингу',
          description:
            'Аналізуємо точність та ефективність налаштувань аудиторії, креативів та ставок',
          accent: '#EF4444',
        },
        {
          title: 'Якість лідів та воронка',
          description:
            'Оцінюємо глибину воронки та якість залучених потенційних клієнтів',
          accent: '#F97316',
        },
      ],
      metrics: ['ROI', 'CPL', 'CPA', 'CTR', 'CPM', 'ROAS'],
    },
    {
      id: 1,
      name: 'SEO',
      icon: '🔍',
      title: 'SEO-аудит сайту',
      description:
        'SEO-аудит дозволяє оцінити технічний стан сайту, його видимість у пошукових системах та потенціал для органічного зростання.',
      gradient: 'linear-gradient(90deg, #3B82F6, rgba(59, 130, 246, 0.5))',
      bgGradient: 'linear-gradient(135deg, #3B82F6, rgba(59, 130, 246, 0.8))',
      features: [
        {
          title: 'Технічний аудит',
          description:
            'Індексація, швидкість завантаження, мобільна версія, помилки 404, редіректи',
          accent: '#3B82F6',
        },
        {
          title: 'Контент та структура',
          description:
            'Оптимізація заголовків, мета-тегів, ключових слів, внутрішніх посилань',
          accent: '#06B6D4',
        },
        {
          title: 'Зовнішні фактори',
          description:
            'Профіль зворотних посилань, авторитет домену, якість донорів',
          accent: '#8B5CF6',
        },
      ],
      metrics: ['DR', 'Траф.', 'Позиції', 'Індекс', 'Core Web', 'Mobile'],
    },
    {
      id: 2,
      name: 'Аналітика',
      icon: '📈',
      title: 'Аудит веб-аналітики',
      description:
        'Коректна веб-аналітика — основа будь-якого результативного маркетингу. Без точних даних неможливо ухвалювати обґрунтовані рішення.',
      gradient: 'linear-gradient(90deg, #10B981, rgba(16, 185, 129, 0.5))',
      bgGradient: 'linear-gradient(135deg, #10B981, rgba(16, 185, 129, 0.8))',
      features: [
        {
          title: 'Налаштування систем',
          description:
            'Google Analytics (GA4), Google Tag Manager, Facebook Pixel, Hotjar',
          accent: '#10B981',
        },
        {
          title: 'Збір подій та цілей',
          description:
            'Коректність фіксації ключових дій користувачів на сайті',
          accent: '#059669',
        },
        {
          title: 'Якість даних',
          description:
            'Виявлення дублювань, відхилень у звітах, втрат через технічні помилки',
          accent: '#0D9488',
        },
      ],
      metrics: ['GA4', 'GTM', 'FB Pixel', 'Goals', 'Events', 'Data'],
    },
    {
      id: 3,
      name: 'Воронка',
      icon: '🎯',
      title: 'Аудит воронки продажів',
      description:
        'Воронка продажів показує шлях клієнта — від першого дотику з брендом до покупки. Виявляємо точки відтоку та оптимізуємо конверсії.',
      gradient: 'linear-gradient(90deg, #F59E0B, rgba(245, 158, 11, 0.5))',
      bgGradient: 'linear-gradient(135deg, #F59E0B, rgba(245, 158, 11, 0.8))',
      features: [
        {
          title: 'Етапи взаємодії',
          description:
            'Залучення, перший контакт, ознайомлення, конверсія, повторні продажі',
          accent: '#F59E0B',
        },
        {
          title: 'Канали та джерела',
          description:
            'Які джерела трафіку залучають найякісніших лідів, де відбувається відтік',
          accent: '#D97706',
        },
        {
          title: 'Інтеграція CRM',
          description:
            'Злагодженість роботи CRM-систем, менеджерів та автоматизованих інструментів',
          accent: '#B45309',
        },
      ],
      metrics: ['CR%', 'AOV', 'LTV', 'CAC', 'Cycle', 'Pipeline'],
    },
    {
      id: 4,
      name: 'Бренд',
      icon: '🎨',
      title: 'Аналіз позиціювання та УТП',
      description:
        'Позиціювання бренду на ринку — це фундамент, від якого залежить сприйняття компанії та диференціація від конкурентів.',
      gradient: 'linear-gradient(90deg, #A855F7, rgba(168, 85, 247, 0.5))',
      bgGradient: 'linear-gradient(135deg, #A855F7, rgba(168, 85, 247, 0.8))',
      features: [
        {
          title: 'Унікальна торгова пропозиція',
          description:
            'Оцінка чіткості, зрозумілості та релевантності УТП цільовій аудиторії',
          accent: '#A855F7',
        },
        {
          title: 'Конкурентний аналіз',
          description:
            'Як ви виглядаєте на тлі конкурентів, переваги та недоліки позиціонування',
          accent: '#9333EA',
        },
        {
          title: 'Тон комунікації',
          description:
            'Відповідність стилю комунікації очікуванням клієнтів та потребам ЦА',
          accent: '#7C3AED',
        },
      ],
      metrics: ['УТП', 'NPS', 'Brand', 'Tone', 'Message', 'Diff'],
    },
    {
      id: 5,
      name: 'Контент',
      icon: '📝',
      title: 'Аналіз контенту та SMM',
      description:
        'Контент — це інструмент побудови довіри, залучення аудиторії та формування лояльності. Аналізуємо контент-стратегію та SMM.',
      gradient: 'linear-gradient(90deg, #EC4899, rgba(236, 72, 153, 0.5))',
      bgGradient: 'linear-gradient(135deg, #EC4899, rgba(236, 72, 153, 0.8))',
      features: [
        {
          title: 'Контент на сайті',
          description:
            'Якість текстів, відповідність пошуковим запитам, унікальність, структура',
          accent: '#EC4899',
        },
        {
          title: 'SMM-активність',
          description:
            'Частота публікацій, стиль спілкування, охоплення, engagement rate',
          accent: '#DB2777',
        },
        {
          title: 'Контент-план',
          description:
            'Послідовність, регулярність, відповідність бізнес-цілям та інтеграція',
          accent: '#BE185D',
        },
      ],
      metrics: ['Quality', 'Unique', 'ER%', 'Reach', 'Plan', 'Integration'],
    },
  ];

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

  const auditSteps = [
    {
      number: '01',
      icon: '🎯',
      title: 'Брифінг та постановка цілей',
      description:
        "Ми проводимо первинну зустріч або дзвінок, де з'ясовуємо поточну ситуацію, проблеми, які потребують вирішення, та очікувані результати аудиту.",
      features: [
        'Аналіз поточної ситуації',
        'Визначення проблем',
        'Постановка цілей',
        'Планування процесу',
      ],
      gradient: 'linear-gradient(90deg, #EF4444, rgba(239, 68, 68, 0.5))',
      bgGradient: 'linear-gradient(135deg, #EF4444, rgba(239, 68, 68, 0.8))',
      gradientBg:
        'radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)',
    },
    {
      number: '02',
      icon: '🔑',
      title: 'Збір доступів та даних',
      description:
        'Ви надаєте нам доступ до рекламних кабінетів, аналітики, CRM, сайтів і соціальних мереж — усе, що дозволяє нам зробити глибокий аналіз.',
      features: [
        'Google Ads & Meta Ads',
        'Google Analytics',
        'CRM системи',
        'Соціальні мережі',
      ],
      gradient: 'linear-gradient(90deg, #3B82F6, rgba(59, 130, 246, 0.5))',
      bgGradient: 'linear-gradient(135deg, #3B82F6, rgba(59, 130, 246, 0.8))',
      gradientBg:
        'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
    },
    {
      number: '03',
      icon: '🔍',
      title: 'Аналіз за напрямами',
      description:
        'Кожен елемент маркетингової системи оцінюється профільними фахівцями: SEO-експертом, PPC-спеціалістом, аналітиком, контент-маркетологом тощо.',
      features: ['SEO аудит', 'PPC аналіз', 'Контент-аудит', 'Веб-аналітика'],
      gradient: 'linear-gradient(90deg, #10B981, rgba(16, 185, 129, 0.5))',
      bgGradient: 'linear-gradient(135deg, #10B981, rgba(16, 185, 129, 0.8))',
      gradientBg:
        'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
    },
    {
      number: '04',
      icon: '📊',
      title: 'Підготовка детального звіту',
      description:
        'Ви отримуєте документ з усіма виявленими проблемами, їх впливом на ефективність та чіткими рекомендаціями.',
      features: [
        'Виявлені проблеми',
        'Вплив на ефективність',
        'Чіткі рекомендації',
        'План дій',
      ],
      gradient: 'linear-gradient(90deg, #F59E0B, rgba(245, 158, 11, 0.5))',
      bgGradient: 'linear-gradient(135deg, #F59E0B, rgba(245, 158, 11, 0.8))',
      gradientBg:
        'radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)',
    },
    {
      number: '05',
      icon: '🚀',
      title: 'Обговорення результатів',
      description:
        'Ми презентуємо висновки, пояснюємо пріоритети та надаємо план впровадження змін.',
      features: [
        'Презентація результатів',
        'Пояснення пріоритетів',
        'План впровадження',
        'Рекомендації експертів',
      ],
      gradient: 'linear-gradient(90deg, #A855F7, rgba(168, 85, 247, 0.5))',
      bgGradient: 'linear-gradient(135deg, #A855F7, rgba(168, 85, 247, 0.8))',
      gradientBg:
        'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
    },
  ];

  // Toggle FAQ function
  const toggleFaq = index => {
    setExpandedFaqs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // FAQ data
  const faqData = [
    {
      question: 'Чи потрібен маркетинговий аудит, якщо мої продажі стабільні?',
      answer:
        'Так, навіть при стабільних продажах аудит допомагає виявити нові можливості для росту, оптимізувати бюджет і підвищити ефективність маркетингових інвестицій.',
    },
    {
      question: 'Як часто варто проводити маркетинговий аудит?',
      answer:
        'Рекомендується проводити аудит мінімум раз на рік або при суттєвих змінах у ринковому середовищі, продуктах чи цілях компанії.',
    },
    {
      question: 'Чи впливає маркетинговий аудит на SEO-просування?',
      answer:
        'Так, аудит включає перевірку технічних аспектів сайту, контенту та зовнішніх факторів, що безпосередньо впливає на позиції в пошукових системах.',
    },
    {
      question: 'Чи можна провести аудит без доступу до рекламних кабінетів?',
      answer:
        'Для максимально точного аналізу важливий доступ до рекламних та аналітичних систем, однак базовий аудит позиціювання та сайту можна провести й без них.',
    },
    {
      question: 'Чи допомагає маркетинговий аудит підвищити лояльність клієнтів?',
      answer:
        'Так, аналіз контенту, SMM та воронки продажів допомагає покращити комунікацію з аудиторією і формувати довгострокові відносини з клієнтами.',
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Маркетинговий аудит з{' '}
                <HighlightedSpan>детальним планом</HighlightedSpan>
              </AnimatedTitle>
              <HeroDescription
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Комплексний аналіз маркетингової стратегії вашого бізнесу, який
                виявляє точки росту, оптимізує витрати та створює чіткий план
                дій для досягнення поставлених цілей. Отримайте максимум з
                кожної маркетингової гривні.
              </HeroDescription>
              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <PrimaryButton whileHover={{ y: -5 }} onClick={openModal}>
                  Замовити аудит
                  <FaArrowRight />
                </PrimaryButton>
              </ButtonGroup>
              <KeyPoints>
                <LegacyKeyPoint>
                  <LegacyKeyPointIcon>
                    <FaSearch />
                  </LegacyKeyPointIcon>
                  <LegacyKeyPointText>
                    Аналіз всіх маркетингових каналів
                  </LegacyKeyPointText>
                </LegacyKeyPoint>
                <LegacyKeyPoint>
                  <LegacyKeyPointIcon>
                    <FaChartLine />
                  </LegacyKeyPointIcon>
                  <LegacyKeyPointText>
                    Оптимізація маркетингових витрат
                  </LegacyKeyPointText>
                </LegacyKeyPoint>
                <LegacyKeyPoint>
                  <LegacyKeyPointIcon>
                    <FaBullseye />
                  </LegacyKeyPointIcon>
                  <LegacyKeyPointText>
                    Конкретний план покращень
                  </LegacyKeyPointText>
                </LegacyKeyPoint>
              </KeyPoints>
            </HeroLeft>
            <HeroRight>
              <AuditVisualization>
                <AuditCardContainer ref={auditCardContainerRef}>
                  <AuditCard
                    className="strategy"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaBullhorn />
                    </CardIcon>
                    <CardName>Стратегія</CardName>
                  </AuditCard>

                  <AuditCard
                    className="competitors"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaUsers />
                    </CardIcon>
                    <CardName>Конкуренти</CardName>
                  </AuditCard>

                  <AuditCard
                    className="analytics"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaChartBar />
                    </CardIcon>
                    <CardName>Аналітика</CardName>
                  </AuditCard>

                  <AuditCard
                    className="channels"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaShareAlt />
                    </CardIcon>
                    <CardName>Канали</CardName>
                  </AuditCard>

                  <AuditCard
                    className="conversion"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    whileHover={{ y: -10 }}
                  >
                    <CardIcon>
                      <FaFunnelDollar />
                    </CardIcon>
                    <CardName>Конверсії</CardName>
                  </AuditCard>

                  <AuditBadge
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: 0.9,
                    }}
                  >
                    <BadgeNumber>360°</BadgeNumber>
                    <BadgeText>АУДИТ</BadgeText>
                  </AuditBadge>
                </AuditCardContainer>

                <FloatingIcons>
                  <FloatingIcon className="chart" duration="6s">
                    <FaChartPie />
                  </FloatingIcon>
                  <FloatingIcon className="target" duration="5s" delay="1s">
                    <FaBullseye />
                  </FloatingIcon>
                  <FloatingIcon className="funnel" duration="7s" delay="0.5s">
                    <FaFunnelDollar />
                  </FloatingIcon>
                  <FloatingIcon
                    className="checklist"
                    duration="5.5s"
                    delay="2s"
                  >
                    <FaClipboardList />
                  </FloatingIcon>
                </FloatingIcons>
              </AuditVisualization>
            </HeroRight>
          </HeroSplit>
        </HeroInner>
      </HeroWrapper>

      <WhatIsSection>
        <WhatIsContainer>
          <WhatIsHeader>
            <WhatIsTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Що таке маркетинговий аудит
            </WhatIsTitle>
          </WhatIsHeader>

          <WhatIsGrid>
            <WhatIsContent>
              <WhatIsDefinition
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <DefinitionText>
                  <HighlightText>Маркетинговий аудит</HighlightText> — це
                  комплексна оцінка усіх складових маркетингової діяльності
                  компанії: від стратегії просування до ефективності каналів
                  комунікації. Його мета — виявити слабкі місця, приховані
                  резерви росту та побудувати оптимальну маркетингову модель.
                </DefinitionText>
                <DefinitionText>
                  Ця послуга є надзвичайно важливою як для{' '}
                  <HighlightText>малого бізнесу</HighlightText>, який тільки
                  формує свою ринкову позицію, так і для великих компаній, які
                  прагнуть оптимізувати витрати та підвищити рентабельність
                  маркетингових інвестицій.
                </DefinitionText>
              </WhatIsDefinition>

              <BenefitsGrid>
                <BenefitCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <BenefitIcon>
                    <FaEye />
                  </BenefitIcon>
                  <BenefitTitle>Об'єктивна оцінка</BenefitTitle>
                  <BenefitDescription>
                    Отримайте неупереджену картину поточного стану вашого бренду
                    на ринку
                  </BenefitDescription>
                </BenefitCard>

                <BenefitCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <BenefitIcon>
                    <FaChartLine />
                  </BenefitIcon>
                  <BenefitTitle>Аналіз ефективності</BenefitTitle>
                  <BenefitDescription>
                    Оцінка рекламних кампаній, сайтів, контенту, SEO та
                    соціальних мереж
                  </BenefitDescription>
                </BenefitCard>

                <BenefitCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <BenefitIcon>
                    <FaFunnelDollar />
                  </BenefitIcon>
                  <BenefitTitle>Воронка продажів</BenefitTitle>
                  <BenefitDescription>
                    Детальний аналіз шляху клієнта від першого контакту до
                    покупки
                  </BenefitDescription>
                </BenefitCard>
              </BenefitsGrid>
            </WhatIsContent>

            <WhatIsVisual>
              <AuditProcessCard
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ProcessTitle>
                  <ProcessIcon>
                    <FaClipboardList />
                  </ProcessIcon>
                  Етапи аудиту
                </ProcessTitle>
                <ProcessSteps>
                  <ProcessStep>
                    <StepNumber>1</StepNumber>
                    <StepText>Аналіз поточної маркетингової стратегії</StepText>
                  </ProcessStep>
                  <ProcessStep>
                    <StepNumber>2</StepNumber>
                    <StepText>Дослідження конкурентів та ринку</StepText>
                  </ProcessStep>
                  <ProcessStep>
                    <StepNumber>3</StepNumber>
                    <StepText>Оцінка ефективності всіх каналів</StepText>
                  </ProcessStep>
                  <ProcessStep>
                    <StepNumber>4</StepNumber>
                    <StepText>Аналіз воронки продажів та конверсій</StepText>
                  </ProcessStep>
                  <ProcessStep>
                    <StepNumber>5</StepNumber>
                    <StepText>Створення плану оптимізації</StepText>
                  </ProcessStep>
                </ProcessSteps>
              </AuditProcessCard>

              <AuditProcessCard
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ProcessTitle>
                  <ProcessIcon>
                    <FaBullseye />
                  </ProcessIcon>
                  Результат аудиту
                </ProcessTitle>
                <ProcessSteps>
                  <ProcessStep>
                    <StepNumber>📊</StepNumber>
                    <StepText>Детальний звіт з рекомендаціями</StepText>
                  </ProcessStep>
                  <ProcessStep>
                    <StepNumber>🎯</StepNumber>
                    <StepText>План дій на 3-6 місяців</StepText>
                  </ProcessStep>
                  <ProcessStep>
                    <StepNumber>💡</StepNumber>
                    <StepText>Ідеї для нових каналів просування</StepText>
                  </ProcessStep>
                  <ProcessStep>
                    <StepNumber>📈</StepNumber>
                    <StepText>Прогноз ROI від впровадження</StepText>
                  </ProcessStep>
                </ProcessSteps>
              </AuditProcessCard>
            </WhatIsVisual>
          </WhatIsGrid>
        </WhatIsContainer>
      </WhatIsSection>

      <WhenNeedSection>
        <WhenNeedContainer>
          <WhenNeedHeader>
            <WhenNeedTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Коли потрібен аудит
            </WhenNeedTitle>
            <WhenNeedSubtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Маркетинговий аудит необхідний у кількох ключових ситуаціях, коли
              від якісного аналізу залежить подальший розвиток бізнесу
            </WhenNeedSubtitle>
          </WhenNeedHeader>

          <SituationsGrid>
            <SituationCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              gradient="linear-gradient(90deg, #EF4444, rgba(239, 68, 68, 0.5))"
              gradientBg="radial-gradient(circle, rgba(239, 68, 68, 0.05) 0%, transparent 70%)"
              whileHover={{ y: -8 }}
            >
              <SituationHeader>
                <SituationIcon bgGradient="linear-gradient(135deg, #EF4444, rgba(239, 68, 68, 0.8))">
                  📉
                </SituationIcon>
                <SituationContent>
                  <SituationTitle>Падіння продажів</SituationTitle>
                  <SituationDescription>
                    Якщо ви помічаєте, що{' '}
                    <HighlightPhrase>доходи зменшуються</HighlightPhrase>, а
                    причина неочевидна — аудит допоможе виявити вузькі місця у
                    маркетинговій стратегії.
                  </SituationDescription>
                </SituationContent>
              </SituationHeader>
            </SituationCard>

            <SituationCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              gradient="linear-gradient(90deg, #3B82F6, rgba(59, 130, 246, 0.5))"
              gradientBg="radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)"
              whileHover={{ y: -8 }}
            >
              <SituationHeader>
                <SituationIcon bgGradient="linear-gradient(135deg, #3B82F6, rgba(59, 130, 246, 0.8))">
                  🚀
                </SituationIcon>
                <SituationContent>
                  <SituationTitle>Вихід на новий ринок</SituationTitle>
                  <SituationDescription>
                    Перед{' '}
                    <HighlightPhrase>масштабуванням бізнесу</HighlightPhrase>{' '}
                    важливо переконатися, що поточна маркетингова модель є
                    ефективною і має чітку точку росту.
                  </SituationDescription>
                </SituationContent>
              </SituationHeader>
            </SituationCard>

            <SituationCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              gradient="linear-gradient(90deg, #10B981, rgba(16, 185, 129, 0.5))"
              gradientBg="radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)"
              whileHover={{ y: -8 }}
            >
              <SituationHeader>
                <SituationIcon bgGradient="linear-gradient(135deg, #10B981, rgba(16, 185, 129, 0.8))">
                  🎯
                </SituationIcon>
                <SituationContent>
                  <SituationTitle>Зміна аудиторії чи ребрендинг</SituationTitle>
                  <SituationDescription>
                    Аудит дозволяє{' '}
                    <HighlightPhrase>перебудувати позиціювання</HighlightPhrase>
                    , комунікацію та канали взаємодії відповідно до нових цілей.
                  </SituationDescription>
                </SituationContent>
              </SituationHeader>
            </SituationCard>
          </SituationsGrid>

          <SituationsGridBottom>
            <SituationCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              gradient="linear-gradient(90deg, #F59E0B, rgba(245, 158, 11, 0.5))"
              gradientBg="radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, transparent 70%)"
              whileHover={{ y: -8 }}
            >
              <SituationHeader>
                <SituationIcon bgGradient="linear-gradient(135deg, #F59E0B, rgba(245, 158, 11, 0.8))">
                  📊
                </SituationIcon>
                <SituationContent>
                  <SituationTitle>Низька ефективність реклами</SituationTitle>
                  <SituationDescription>
                    Якщо реклама{' '}
                    <HighlightPhrase>
                      не приносить очікуваних результатів
                    </HighlightPhrase>{' '}
                    — потрібно проаналізувати налаштування, креативи та воронку
                    конверсій.
                  </SituationDescription>
                </SituationContent>
              </SituationHeader>
            </SituationCard>

            <SituationCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              gradient="linear-gradient(90deg, #A855F7, rgba(168, 85, 247, 0.5))"
              gradientBg="radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)"
              whileHover={{ y: -8 }}
            >
              <SituationHeader>
                <SituationIcon bgGradient="linear-gradient(135deg, #A855F7, rgba(168, 85, 247, 0.8))">
                  📅
                </SituationIcon>
                <SituationContent>
                  <SituationTitle>Періодичний контроль</SituationTitle>
                  <SituationDescription>
                    Маркетинговий аудит варто проводити{' '}
                    <HighlightPhrase>
                      регулярно — щонайменше раз на рік
                    </HighlightPhrase>{' '}
                    — для підтримки високої ефективності каналів просування.
                  </SituationDescription>
                </SituationContent>
              </SituationHeader>
            </SituationCard>
          </SituationsGridBottom>

          <ConclusionCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <WhenConclusionIcon>
              <FaLightbulb />
            </WhenConclusionIcon>
            <WhenConclusionTitle>
              Аудит — це інструмент прийняття рішень
            </WhenConclusionTitle>
            <WhenConclusionText>
              Це не просто діагностика, а повноцінний інструмент прийняття
              обґрунтованих рішень на основі цифр, даних та аналізу ринку.
              Отримайте чітке розуміння стану вашого маркетингу.
            </WhenConclusionText>
          </ConclusionCard>
        </WhenNeedContainer>
      </WhenNeedSection>

      <WhatIncludesSection>
        <WhatIncludesContainer>
          <WhatIncludesHeader>
            <WhatIncludesTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Що включає маркетинговий аудит
            </WhatIncludesTitle>
            <WhatIncludesSubtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Комплексний маркетинговий аудит охоплює всі ключові елементи
              просування, аналітики та взаємодії з цільовою аудиторією. Ми не
              просто перевіряємо окремі інструменти — ми оцінюємо, як працює вся
              система.
            </WhatIncludesSubtitle>
          </WhatIncludesHeader>

          <TabsContainer>
            {auditTabs.map((tab, index) => (
              <TabButton
                key={tab.id}
                active={activeTab === index}
                onClick={() => setActiveTab(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab.icon} {tab.name}
              </TabButton>
            ))}
          </TabsContainer>

          <TabContentContainer>
            {auditTabs.map((tab, index) => (
              <TabContent key={tab.id} active={activeTab === index}>
                <ContentGrid>
                  <ContentMain gradient={tab.gradient}>
                    <ContentIcon bgGradient={tab.bgGradient}>
                      {tab.icon}
                    </ContentIcon>
                    <ContentTitle>{tab.title}</ContentTitle>
                    <ContentDescription>{tab.description}</ContentDescription>

                    <MetricsGrid>
                      {tab.metrics.map((metric, idx) => (
                        <MetricItem key={idx}>
                          <MetricName>{metric}</MetricName>
                          <MetricValue>✓</MetricValue>
                        </MetricItem>
                      ))}
                    </MetricsGrid>
                  </ContentMain>

                  <ContentFeatures>
                    {tab.features.map((feature, idx) => (
                      <FeatureCard
                        key={idx}
                        accent={feature.accent}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>
                          {feature.description}
                        </FeatureDescription>
                      </FeatureCard>
                    ))}
                  </ContentFeatures>
                </ContentGrid>
              </TabContent>
            ))}
          </TabContentContainer>
        </WhatIncludesContainer>
      </WhatIncludesSection>

      <HowWeAuditSection>
        <HowWeAuditContainer>
          <HowWeAuditHeader>
            <HowWeAuditTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Як ми проводимо аудит
            </HowWeAuditTitle>
            <HowWeAuditSubtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ми дотримуємось чітко структурованого підходу, який дозволяє
              забезпечити глибоку, об'єктивну та практичну оцінку всіх аспектів
              маркетингу
            </HowWeAuditSubtitle>
          </HowWeAuditHeader>

          <ProcessContainer>
            <ProcessTimeline />

            {auditSteps.map((step, index) => (
              <AuditProcessStep
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <AuditStepNumber>{step.number}</AuditStepNumber>
                <StepContent>
                  <StepCard
                    gradient={step.gradient}
                    gradientBg={step.gradientBg}
                    whileHover={{ y: -5 }}
                  >
                    <StepIcon bgGradient={step.bgGradient}>
                      {step.icon}
                    </StepIcon>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                    <StepFeatures>
                      {step.features.map((feature, idx) => (
                        <StepFeature key={idx}>{feature}</StepFeature>
                      ))}
                    </StepFeatures>
                  </StepCard>
                </StepContent>
              </AuditProcessStep>
            ))}
          </ProcessContainer>

          <ProcessSummary
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SummaryIcon>
              <FaBullseye />
            </SummaryIcon>
            <SummaryTitle>
              Індивідуальний підхід до кожного клієнта
            </SummaryTitle>
            <SummaryText>
              Наш підхід — це не шаблонна перевірка, а адаптивна та глибока
              робота, орієнтована на конкретні бізнес-цілі клієнта. Ми
              забезпечуємо максимальну практичність та цінність кожної
              рекомендації.
            </SummaryText>
          </ProcessSummary>
        </HowWeAuditContainer>
      </HowWeAuditSection>

      <ToolsSection>
        <ToolsContainer>
          <ToolsHeader>
            <ToolsTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Інструменти, які ми використовуємо
            </ToolsTitle>
            <ToolsSubtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Для проведення маркетингового аудиту ми використовуємо перевірені
              та професійні інструменти, які дозволяють отримати точні,
              достовірні й глибокі дані
            </ToolsSubtitle>
          </ToolsHeader>

          <ToolsGrid>
            <ToolCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              gradient="linear-gradient(90deg, #4285f4, #34a853)"
              glowColor="rgba(66, 133, 244, 0.3)"
              shadowColor="rgba(66, 133, 244, 0.2)"
              borderColor="rgba(66, 133, 244, 0.3)"
              accentColor="#4285f4"
            >
              <ToolIcon
                className="tool-icon"
                background="linear-gradient(135deg, #4285f4, #34a853)"
                shadowColor="rgba(66, 133, 244, 0.3)"
              >
                📊
              </ToolIcon>
              <ToolName className="tool-name">Веб-аналітика</ToolName>
              <ToolDescription>
                Збір даних про поведінку користувачів, відстеження подій та
                аналіз конверсій
              </ToolDescription>
              <ToolFeatures>
                <ToolFeature color="#4285f4">
                  <ToolFeatureIcon color="#4285f4" />
                  <FeatureText>
                    <FeatureName>Google Analytics 4</FeatureName>
                    <ToolFeatureDescription>
                      відстеження користувачів і конверсій
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#34a853">
                  <ToolFeatureIcon color="#34a853" />
                  <FeatureText>
                    <FeatureName>Google Tag Manager</FeatureName>
                    <ToolFeatureDescription>
                      збір даних про події та джерела трафіку
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
              </ToolFeatures>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              gradient="linear-gradient(90deg, #0f9d58, #689f38)"
              glowColor="rgba(15, 157, 88, 0.3)"
              shadowColor="rgba(15, 157, 88, 0.2)"
              borderColor="rgba(15, 157, 88, 0.3)"
              accentColor="#0f9d58"
            >
              <ToolIcon
                className="tool-icon"
                background="linear-gradient(135deg, #0f9d58, #689f38)"
                shadowColor="rgba(15, 157, 88, 0.3)"
              >
                🔍
              </ToolIcon>
              <ToolName className="tool-name">SEO-аналіз</ToolName>
              <ToolDescription>
                Аналіз пошукової видимості, органічного трафіку та конкурентного
                профілю
              </ToolDescription>
              <ToolFeatures>
                <ToolFeature color="#0f9d58">
                  <ToolFeatureIcon color="#0f9d58" />
                  <FeatureText>
                    <FeatureName>Google Search Console</FeatureName>
                    <ToolFeatureDescription>
                      аналіз пошукової видимості та CTR
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#ff6900">
                  <ToolFeatureIcon color="#ff6900" />
                  <FeatureText>
                    <FeatureName>Ahrefs / SEMrush</FeatureName>
                    <ToolFeatureDescription>
                      аналіз зовнішніх посилань і конкурентів
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#689f38">
                  <ToolFeatureIcon color="#689f38" />
                  <FeatureText>
                    <FeatureName>Serpstat</FeatureName>
                    <ToolFeatureDescription>
                      аналіз ключових слів і рейтингу
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
              </ToolFeatures>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              gradient="linear-gradient(90deg, #43a047, #66bb6a)"
              glowColor="rgba(67, 160, 71, 0.3)"
              shadowColor="rgba(67, 160, 71, 0.2)"
              borderColor="rgba(67, 160, 71, 0.3)"
              accentColor="#43a047"
            >
              <ToolIcon
                className="tool-icon"
                background="linear-gradient(135deg, #43a047, #66bb6a)"
                shadowColor="rgba(67, 160, 71, 0.3)"
              >
                🛠️
              </ToolIcon>
              <ToolName className="tool-name">Технічний аудит</ToolName>
              <ToolDescription>
                Сканування структури сайту, виявлення помилок та технічних
                проблем
              </ToolDescription>
              <ToolFeatures>
                <ToolFeature color="#43a047">
                  <ToolFeatureIcon color="#43a047" />
                  <FeatureText>
                    <FeatureName>Screaming Frog</FeatureName>
                    <ToolFeatureDescription>
                      технічні сканери структури сайту
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#66bb6a">
                  <ToolFeatureIcon color="#66bb6a" />
                  <FeatureText>
                    <FeatureName>Sitebulb</FeatureName>
                    <ToolFeatureDescription>
                      аудит помилок, редіректів і швидкості
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
              </ToolFeatures>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              gradient="linear-gradient(90deg, #ff7043, #ff8a65)"
              glowColor="rgba(255, 112, 67, 0.3)"
              shadowColor="rgba(255, 112, 67, 0.2)"
              borderColor="rgba(255, 112, 67, 0.3)"
              accentColor="#ff7043"
            >
              <ToolIcon
                className="tool-icon"
                background="linear-gradient(135deg, #ff7043, #ff8a65)"
                shadowColor="rgba(255, 112, 67, 0.3)"
              >
                📱
              </ToolIcon>
              <ToolName className="tool-name">Рекламні платформи</ToolName>
              <ToolDescription>
                Глибока перевірка рекламних кампаній, аудиторій та креативів
              </ToolDescription>
              <ToolFeatures>
                <ToolFeature color="#ff7043">
                  <ToolFeatureIcon color="#ff7043" />
                  <FeatureText>
                    <FeatureName>Meta Ads Manager</FeatureName>
                    <ToolFeatureDescription>
                      Facebook/Instagram реклама
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#ff8a65">
                  <ToolFeatureIcon color="#ff8a65" />
                  <FeatureText>
                    <FeatureName>Google Ads</FeatureName>
                    <ToolFeatureDescription>
                      контекстна реклама та аналіз результатів
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#d84315">
                  <ToolFeatureIcon color="#d84315" />
                  <FeatureText>
                    <FeatureName>TikTok Ads</FeatureName>
                    <ToolFeatureDescription>
                      аналіз аудиторій і креативів
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
              </ToolFeatures>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              gradient="linear-gradient(90deg, #ab47bc, #ba68c8)"
              glowColor="rgba(171, 71, 188, 0.3)"
              shadowColor="rgba(171, 71, 188, 0.2)"
              borderColor="rgba(171, 71, 188, 0.3)"
              accentColor="#ab47bc"
            >
              <ToolIcon
                className="tool-icon"
                background="linear-gradient(135deg, #ab47bc, #ba68c8)"
                shadowColor="rgba(171, 71, 188, 0.3)"
              >
                🎯
              </ToolIcon>
              <ToolName className="tool-name">UX-аналітика</ToolName>
              <ToolDescription>
                Інструменти теплових карт і запису сесій для розуміння поведінки
              </ToolDescription>
              <ToolFeatures>
                <ToolFeature color="#ab47bc">
                  <ToolFeatureIcon color="#ab47bc" />
                  <FeatureText>
                    <FeatureName>Hotjar / Clarity</FeatureName>
                    <ToolFeatureDescription>
                      теплові карти користувачів
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#ba68c8">
                  <ToolFeatureIcon color="#ba68c8" />
                  <FeatureText>
                    <FeatureName>Plerdy</FeatureName>
                    <ToolFeatureDescription>
                      запис сесій і аналіз поведінки
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
              </ToolFeatures>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              gradient="linear-gradient(90deg, #5e35b1, #7e57c2)"
              glowColor="rgba(94, 53, 177, 0.3)"
              shadowColor="rgba(94, 53, 177, 0.2)"
              borderColor="rgba(94, 53, 177, 0.3)"
              accentColor="#5e35b1"
            >
              <ToolIcon
                className="tool-icon"
                background="linear-gradient(135deg, #5e35b1, #7e57c2)"
                shadowColor="rgba(94, 53, 177, 0.3)"
              >
                🏆
              </ToolIcon>
              <ToolName className="tool-name">Конкурентний аналіз</ToolName>
              <ToolDescription>
                Аналіз конкурентів, ринку та згадок про бренд у відкритих
                джерелах
              </ToolDescription>
              <ToolFeatures>
                <ToolFeature color="#5e35b1">
                  <ToolFeatureIcon color="#5e35b1" />
                  <FeatureText>
                    <FeatureName>Similarweb / SpyFu</FeatureName>
                    <ToolFeatureDescription>
                      аналіз ринку і конкурентів
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
                <ToolFeature color="#7e57c2">
                  <ToolFeatureIcon color="#7e57c2" />
                  <FeatureText>
                    <FeatureName>Brand24</FeatureName>
                    <ToolFeatureDescription>
                      моніторинг згадок у відкритих джерелах
                    </ToolFeatureDescription>
                  </FeatureText>
                </ToolFeature>
              </ToolFeatures>
            </ToolCard>
          </ToolsGrid>

          <ToolsConclusion
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ToolsConclusionIcon>🔬</ToolsConclusionIcon>
            <ToolsConclusionTitle>
              Комплексний підхід до аналізу
            </ToolsConclusionTitle>
            <ToolsConclusionText>
              Завдяки поєднанню цих платформ ми отримуємо комплексну картину
              того, що працює, а що потребує негайного втручання. Кожен
              інструмент доповнює інший, створюючи повну аналітичну екосистему
              для вашого бізнесу.
            </ToolsConclusionText>
          </ToolsConclusion>
        </ToolsContainer>
      </ToolsSection>

      {/* What You Get Section */}
      <WhatYoullGetSection>
        <WhatYoullGetContainer>
          <WhatYoullGetHeader>
            <WhatYoullGetTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Що ви отримаєте від аудиту
            </WhatYoullGetTitle>
            <WhatYoullGetSubtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Наш аудит допоможе вам зрозуміти, як ваш бізнес працює, які
              проблеми існують, та які шляхи для поліпшення.
            </WhatYoullGetSubtitle>
          </WhatYoullGetHeader>

          <ResultsGrid>
            <ResultCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              gradient="linear-gradient(90deg, #EF4444, rgba(239, 68, 68, 0.5))"
              glowColor="rgba(239, 68, 68, 0.2)"
              shadowColor="rgba(239, 68, 68, 0.1)"
              borderColor="rgba(239, 68, 68, 0.3)"
              accentColor="#EF4444"
            >
              <ResultIconContainer background="linear-gradient(135deg, #EF4444, rgba(239, 68, 68, 0.8))">
                📉
              </ResultIconContainer>
              <ResultTitle className="result-title">
                Аналіз поточної ситуації
              </ResultTitle>
              <ResultDescription>
                Ми проведемо детальний аналіз вашого бізнесу, щоб з'ясувати, які
                проблеми існують, та які шляхи для поліпшення.
              </ResultDescription>
              <ResultFeatures>
                <ResultFeature color="#EF4444">
                  <ResultFeatureIcon color="#EF4444" />
                  <ResultFeatureText>
                    <ResultFeatureName>Аналіз ринку</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми дослідимо ваш ринок, конкурентів та тренди, щоб
                      з'ясувати, які проблеми існують.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#F97316">
                  <ResultFeatureIcon color="#F97316" />
                  <ResultFeatureText>
                    <ResultFeatureName>Аналіз конкурентів</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших конкурентів, щоб з'ясувати їхні
                      переваги та недоліки.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#06B6D4">
                  <ResultFeatureIcon color="#06B6D4" />
                  <ResultFeatureText>
                    <ResultFeatureName>Аналіз сайтів</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших сайтів, щоб з'ясувати, які
                      проблеми існують та які шляхи для поліпшення.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
              </ResultFeatures>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              gradient="linear-gradient(90deg, #3B82F6, rgba(59, 130, 246, 0.5))"
              glowColor="rgba(59, 130, 246, 0.2)"
              shadowColor="rgba(59, 130, 246, 0.1)"
              borderColor="rgba(59, 130, 246, 0.3)"
              accentColor="#3B82F6"
            >
              <ResultIconContainer background="linear-gradient(135deg, #3B82F6, rgba(59, 130, 246, 0.8))">
                🚀
              </ResultIconContainer>
              <ResultTitle className="result-title">
                Оптимізація маркетингових витрат
              </ResultTitle>
              <ResultDescription>
                Ми проведемо аналіз ваших маркетингових каналів, щоб з'ясувати,
                які шляхи для зниження витрат та поліпшення ефективності.
              </ResultDescription>
              <ResultFeatures>
                <ResultFeature color="#3B82F6">
                  <ResultFeatureIcon color="#3B82F6" />
                  <ResultFeatureText>
                    <ResultFeatureName>
                      Аналіз рекламних кампаній
                    </ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших рекламних кампаній, щоб
                      з'ясувати, які шляхи для зниження витрат та поліпшення
                      ефективності.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#06B6D4">
                  <ResultFeatureIcon color="#06B6D4" />
                  <ResultFeatureText>
                    <ResultFeatureName>Оптимізація SEO</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз вашого SEO, щоб з'ясувати, які шляхи
                      для поліпшення видимості та трафіку.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#7C3AED">
                  <ResultFeatureIcon color="#7C3AED" />
                  <ResultFeatureText>
                    <ResultFeatureName>
                      Оптимізація соціальних мереж
                    </ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших соціальних мереж, щоб з'ясувати,
                      які шляхи для поліпшення взаємодії та впливу.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
              </ResultFeatures>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              gradient="linear-gradient(90deg, #10B981, rgba(16, 185, 129, 0.5))"
              glowColor="rgba(16, 185, 129, 0.2)"
              shadowColor="rgba(16, 185, 129, 0.1)"
              borderColor="rgba(16, 185, 129, 0.3)"
              accentColor="#10B981"
            >
              <ResultIconContainer background="linear-gradient(135deg, #10B981, rgba(16, 185, 129, 0.8))">
                🎯
              </ResultIconContainer>
              <ResultTitle className="result-title">
                Зміна аудиторії чи ребрендинг
              </ResultTitle>
              <ResultDescription>
                Ми проведемо аналіз вашої аудиторії та креативів, щоб з'ясувати,
                які шляхи для поліпшення взаємодії та впливу.
              </ResultDescription>
              <ResultFeatures>
                <ResultFeature color="#10B981">
                  <ResultFeatureIcon color="#10B981" />
                  <ResultFeatureText>
                    <ResultFeatureName>Аналіз аудиторії</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз вашої аудиторії, щоб з'ясувати, які
                      шляхи для поліпшення взаємодії та впливу.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#059669">
                  <ResultFeatureIcon color="#059669" />
                  <ResultFeatureText>
                    <ResultFeatureName>Аналіз креативів</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших креативів, щоб з'ясувати, які
                      шляхи для поліпшення взаємодії та впливу.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#8B5CF6">
                  <ResultFeatureIcon color="#8B5CF6" />
                  <ResultFeatureText>
                    <ResultFeatureName>Ребрендинг</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз вашого ребрендингу, щоб з'ясувати, які
                      шляхи для поліпшення бренду та впливу.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
              </ResultFeatures>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              gradient="linear-gradient(90deg, #F59E0B, rgba(245, 158, 11, 0.5))"
              glowColor="rgba(245, 158, 11, 0.2)"
              shadowColor="rgba(245, 158, 11, 0.1)"
              borderColor="rgba(245, 158, 11, 0.3)"
              accentColor="#F59E0B"
            >
              <ResultIconContainer background="linear-gradient(135deg, #F59E0B, rgba(245, 158, 11, 0.8))">
                📊
              </ResultIconContainer>
              <ResultTitle className="result-title">
                Низька ефективність реклами
              </ResultTitle>
              <ResultDescription>
                Ми проведемо аналіз ваших рекламних кампаній, щоб з'ясувати, які
                шляхи для поліпшення ефективності та збільшення конверсій.
              </ResultDescription>
              <ResultFeatures>
                <ResultFeature color="#F59E0B">
                  <ResultFeatureIcon color="#F59E0B" />
                  <ResultFeatureText>
                    <ResultFeatureName>
                      Аналіз рекламних кампаній
                    </ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших рекламних кампаній, щоб
                      з'ясувати, які шляхи для поліпшення ефективності та
                      збільшення конверсій.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#D97706">
                  <ResultFeatureIcon color="#D97706" />
                  <ResultFeatureText>
                    <ResultFeatureName>Аналіз креативів</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших креативів, щоб з'ясувати, які
                      шляхи для поліпшення ефективності та збільшення конверсій.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#7C3AED">
                  <ResultFeatureIcon color="#7C3AED" />
                  <ResultFeatureText>
                    <ResultFeatureName>
                      Оптимізація воронки конверсій
                    </ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз вашої воронки конверсій, щоб
                      з'ясувати, які шляхи для поліпшення ефективності та
                      збільшення конверсій.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
              </ResultFeatures>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              gradient="linear-gradient(90deg, #A855F7, rgba(168, 85, 247, 0.5))"
              glowColor="rgba(168, 85, 247, 0.2)"
              shadowColor="rgba(168, 85, 247, 0.1)"
              borderColor="rgba(168, 85, 247, 0.3)"
              accentColor="#A855F7"
            >
              <ResultIconContainer background="linear-gradient(135deg, #A855F7, rgba(168, 85, 247, 0.8))">
                📅
              </ResultIconContainer>
              <ResultTitle className="result-title">
                Періодичний контроль
              </ResultTitle>
              <ResultDescription>
                Ми проведемо регулярний аналіз вашого бізнесу, щоб з'ясувати,
                які шляхи для постійного поліпшення та росту.
              </ResultDescription>
              <ResultFeatures>
                <ResultFeature color="#A855F7">
                  <ResultFeatureIcon color="#A855F7" />
                  <ResultFeatureText>
                    <ResultFeatureName>
                      Аналіз ключових показників
                    </ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ключових показників вашого бізнесу,
                      щоб з'ясувати, які шляхи для поліпшення та росту.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#7C3AED">
                  <ResultFeatureIcon color="#7C3AED" />
                  <ResultFeatureText>
                    <ResultFeatureName>
                      Аналіз соціальних мереж
                    </ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших соціальних мереж, щоб з'ясувати,
                      які шляхи для поліпшення взаємодії та впливу.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#BE185D">
                  <ResultFeatureIcon color="#BE185D" />
                  <ResultFeatureText>
                    <ResultFeatureName>Аналіз контенту</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз вашого контенту, щоб з'ясувати, які
                      шляхи для поліпшення та росту.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
              </ResultFeatures>
            </ResultCard>

            <ResultCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              gradient="linear-gradient(90deg, #EC4899, rgba(236, 72, 153, 0.5))"
              glowColor="rgba(236, 72, 153, 0.2)"
              shadowColor="rgba(236, 72, 153, 0.1)"
              borderColor="rgba(236, 72, 153, 0.3)"
              accentColor="#EC4899"
            >
              <ResultIconContainer background="linear-gradient(135deg, #EC4899, rgba(236, 72, 153, 0.8))">
                📈
              </ResultIconContainer>
              <ResultTitle className="result-title">
                Збільшення конверсій
              </ResultTitle>
              <ResultDescription>
                Ми проведемо аналіз ваших рекламних кампаній, щоб з'ясувати, які
                шляхи для збільшення конверсій та поліпшення ефективності.
              </ResultDescription>
              <ResultFeatures>
                <ResultFeature color="#EC4899">
                  <ResultFeatureIcon color="#EC4899" />
                  <ResultFeatureText>
                    <ResultFeatureName>
                      Аналіз рекламних кампаній
                    </ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз ваших рекламних кампаній, щоб
                      з'ясувати, які шляхи для збільшення конверсій та
                      поліпшення ефективності.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#DB2777">
                  <ResultFeatureIcon color="#DB2777" />
                  <ResultFeatureText>
                    <ResultFeatureName>Оптимізація контенту</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз вашого контенту, щоб з'ясувати, які
                      шляхи для збільшення конверсій та поліпшення ефективності.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
                <ResultFeature color="#BE185D">
                  <ResultFeatureIcon color="#BE185D" />
                  <ResultFeatureText>
                    <ResultFeatureName>Оптимізація SMM</ResultFeatureName>
                    <ResultFeatureDesc>
                      Ми проведемо аналіз вашого SMM, щоб з'ясувати, які шляхи
                      для збільшення конверсій та поліпшення ефективності.
                    </ResultFeatureDesc>
                  </ResultFeatureText>
                </ResultFeature>
              </ResultFeatures>
            </ResultCard>
          </ResultsGrid>

          <FinalConclusion
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <ResultsConclusionIconGroup>
              <ResultsConclusionIcon
                background="linear-gradient(135deg, #EF4444, rgba(239, 68, 68, 0.8))"
                glowColor="rgba(239, 68, 68, 0.2)"
                shadowColor="rgba(239, 68, 68, 0.1)"
                delay="2"
              >
                📊
              </ResultsConclusionIcon>
              <ResultsConclusionIcon
                background="linear-gradient(135deg, #3B82F6, rgba(59, 130, 246, 0.8))"
                glowColor="rgba(59, 130, 246, 0.2)"
                shadowColor="rgba(59, 130, 246, 0.1)"
                delay="3"
              >
                🎯
              </ResultsConclusionIcon>
              <ResultsConclusionIcon
                background="linear-gradient(135deg, #10B981, rgba(16, 185, 129, 0.8))"
                glowColor="rgba(16, 185, 129, 0.2)"
                shadowColor="rgba(16, 185, 129, 0.1)"
                delay="4"
              >
                💰
              </ResultsConclusionIcon>
            </ResultsConclusionIconGroup>
            <ResultsConclusionTitle>
              Маркетинговий аудит — інвестиція у ваш успіх
            </ResultsConclusionTitle>
            <ResultsConclusionText>
              Таким чином, маркетинговий аудит — це інвестиція, яка дозволяє
              підвищити якість управління маркетингом і збільшити прибуток.
            </ResultsConclusionText>
          </FinalConclusion>
        </WhatYoullGetContainer>
      </WhatYoullGetSection>

      {/* Advantages Section */}
      <AdvantagesSection>
        <AdvantagesBackground />
        <AdvantagesContainer>
          <AdvantagesHeader>
            <AdvantagesTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Переваги нашого підходу
            </AdvantagesTitle>
            <AdvantagesSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Наша методологія базується на принципах комплексності,
              персоналізації та максимальної практичної користі для бізнесу
              клієнта
            </AdvantagesSubtitle>
          </AdvantagesHeader>

          <AdvantagesTimeline>
            <AdvantageItem isEven={false}>
              <AdvantageConnector isEven={false} />
              <AdvantageNumber>1</AdvantageNumber>
              <AdvantageCard
                background="linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(99, 102, 241, 0.05))"
                shadowColor="rgba(59, 130, 246, 0.2)"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <AdvantageIcon color="linear-gradient(135deg, #3b82f6, #6366f1)">
                  📊
                </AdvantageIcon>
                <AdvantageContent>
                  <AdvantageTitle>Глибинний аналіз даних</AdvantageTitle>
                  <AdvantageDescription>
                    Ми не обмежуємося поверхневим оглядом. Кожна цифра та
                    метрика аналізується в контексті загальної стратегії
                    бізнесу.
                  </AdvantageDescription>
                  <AdvantageKeyPoints>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>
                        Аналіз даних за останні 2 роки
                      </KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Порівняння з конкурентами</KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Прогнозування трендів</KeyPointText>
                    </KeyPoint>
                  </AdvantageKeyPoints>
                </AdvantageContent>
                <AdvantageGlow color="rgba(59, 130, 246, 0.3)" />
              </AdvantageCard>
            </AdvantageItem>

            <AdvantageItem isEven={true}>
              <AdvantageConnector isEven={true} />
              <AdvantageNumber>2</AdvantageNumber>
              <AdvantageCard
                background="linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.05))"
                shadowColor="rgba(34, 197, 94, 0.2)"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <AdvantageIcon color="linear-gradient(135deg, #22c55e, #10b981)">
                  🎯
                </AdvantageIcon>
                <AdvantageContent>
                  <AdvantageTitle>Персоналізований підхід</AdvantageTitle>
                  <AdvantageDescription>
                    Кожен аудит адаптується під специфіку вашої ніші, цільової
                    аудиторії та бізнес-цілей.
                  </AdvantageDescription>
                  <AdvantageKeyPoints>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Індивідуальна методологія</KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Врахування специфіки ніші</KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Адаптація під бізнес-модель</KeyPointText>
                    </KeyPoint>
                  </AdvantageKeyPoints>
                </AdvantageContent>
                <AdvantageGlow color="rgba(34, 197, 94, 0.3)" />
              </AdvantageCard>
            </AdvantageItem>

            <AdvantageItem isEven={false}>
              <AdvantageConnector isEven={false} />
              <AdvantageNumber>3</AdvantageNumber>
              <AdvantageCard
                background="linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(147, 51, 234, 0.05))"
                shadowColor="rgba(168, 85, 247, 0.2)"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <AdvantageIcon color="linear-gradient(135deg, #a855f7, #9333ea)">
                  🚀
                </AdvantageIcon>
                <AdvantageContent>
                  <AdvantageTitle>Практичні рекомендації</AdvantageTitle>
                  <AdvantageDescription>
                    Отримайте не просто список проблем, а детальний план дій з
                    пріоритетами та часовими рамками.
                  </AdvantageDescription>
                  <AdvantageKeyPoints>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Покрокові інструкції</KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Оцінка ресурсів та часу</KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Прогноз результатів</KeyPointText>
                    </KeyPoint>
                  </AdvantageKeyPoints>
                </AdvantageContent>
                <AdvantageGlow color="rgba(168, 85, 247, 0.3)" />
              </AdvantageCard>
            </AdvantageItem>

            <AdvantageItem isEven={true}>
              <AdvantageConnector isEven={true} />
              <AdvantageNumber>4</AdvantageNumber>
              <AdvantageCard
                background="linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))"
                shadowColor="rgba(251, 191, 36, 0.2)"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <AdvantageIcon color="linear-gradient(135deg, #fbbf24, #f59e0b)">
                  📈
                </AdvantageIcon>
                <AdvantageContent>
                  <AdvantageTitle>Супровід та підтримка</AdvantageTitle>
                  <AdvantageDescription>
                    Ми не залишаємо вас наодинці з рекомендаціями. Надаємо
                    підтримку на етапі впровадження змін.
                  </AdvantageDescription>
                  <AdvantageKeyPoints>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Консультації з впровадження</KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Відстеження прогресу</KeyPointText>
                    </KeyPoint>
                    <KeyPoint>
                      <KeyPointIcon>✓</KeyPointIcon>
                      <KeyPointText>Корекція стратегії</KeyPointText>
                    </KeyPoint>
                  </AdvantageKeyPoints>
                </AdvantageContent>
                <AdvantageGlow color="rgba(251, 191, 36, 0.3)" />
              </AdvantageCard>
            </AdvantageItem>
          </AdvantagesTimeline>

          <AdvantagesFooter>
            <FooterIconsContainer>
              <FooterIcon
                background="linear-gradient(135deg, #3b82f6, #6366f1)"
                shadowColor="rgba(59, 130, 246, 0.3)"
                delay="3"
              >
                💡
              </FooterIcon>
              <FooterIcon
                background="linear-gradient(135deg, #22c55e, #10b981)"
                shadowColor="rgba(34, 197, 94, 0.3)"
                delay="4"
              >
                ⚡
              </FooterIcon>
              <FooterIcon
                background="linear-gradient(135deg, #a855f7, #9333ea)"
                shadowColor="rgba(168, 85, 247, 0.3)"
                delay="5"
              >
                🏆
              </FooterIcon>
            </FooterIconsContainer>
            <FooterTitle>Результат, який перевершує очікування</FooterTitle>
            <FooterText>
              Наш аудит – це не просто аналіз поточного стану, а створення
              фундаменту для стрімкого зростання вашого бізнесу
            </FooterText>
          </AdvantagesFooter>
        </AdvantagesContainer>
      </AdvantagesSection>

      {/* FAQ Section */}
      <FaqSection>
        <FaqWaveTop />
        <FaqContainer>
          <FaqGlowCircle className="circle-1" />
          <FaqGlowCircle className="circle-2" />
          <FaqTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </FaqTitle>
          <FaqList>
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
                        <p>
                          {faq.answer}
                        </p>
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
              Маєте додаткові запитання щодо маркетингового аудиту?
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Зв'язатися з нами <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default MarketingAudit;
