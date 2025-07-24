import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaDatabase,
  FaChartLine,
  FaCogs,
  FaProjectDiagram,
  FaTools,
  FaExchangeAlt,
  FaChartBar,
  FaUserCog,
  FaFileInvoice,
  FaLaptopCode,
  FaUsers,
  FaSyncAlt,
  FaClipboardCheck,
  FaPlus,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

// Анимации
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(74, 144, 226, 0.3); }
  50% { box-shadow: 0 0 20px rgba(74, 144, 226, 0.6), 0 0 30px rgba(41, 98, 255, 0.3); }
  100% { box-shadow: 0 0 5px rgba(74, 144, 226, 0.3); }
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
`;

const fadeInScale = keyframes`
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
`;

const shimmerEffect = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// const pulseRing = keyframes`
//   0% { transform: scale(0.8); opacity: 0.8; }
//   50% { transform: scale(1.1); opacity: 0.4; }
//   100% { transform: scale(0.8); opacity: 0.8; }
// `;

// const circleFloat = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-15px); }
//   100% { transform: translateY(0); }
// `;

// const spinGlow = keyframes`
//   0% { transform: translate(-50%, -50%) rotate(0deg); }
//   100% { transform: translate(-50%, -50%) rotate(360deg); }
// `;

// const fadeInScale = keyframes`
//   0% { opacity: 0; transform: scale(0.95); }
//   100% { opacity: 1; transform: scale(1); }
// `;

// const shimmerEffect = keyframes`
//   0% { background-position: -100% 0; }
//   100% { background-position: 100% 0; }
// `;

// Стилизованные компоненты
const Container = styled.div`
  min-height: 100vh;
  background: var(--bg-primary);
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 7rem;

  @media (max-width: 768px) {
    padding: 7rem 1rem;
    min-height: 90vh;
  }

  @media (max-width: 576px) {
    padding: 7rem 0.5rem;
    min-height: 85vh;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(74, 144, 226, 0.15) 0%,
        transparent 25%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(41, 98, 255, 0.15) 0%,
        transparent 25%
      );
  }
`;

const StarField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    transparent 0%,
    var(--bg-primary) 100%
  );
  z-index: -1;
`;

const Star = styled.div`
  position: absolute;
  background: white;
  border-radius: 50%;
  opacity: ${props => props.opacity};
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation: ${pulse} ${props => props.duration}s infinite ease-in-out;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #4a90e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 3px;

    @media (max-width: 576px) {
      width: 80px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.4rem;
  color: #9ca3af;
  max-width: 800px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
    max-width: 90%;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const SystemContainer = styled(motion.div)`
  width: 320px;
  height: 480px;
  position: relative;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 260px;
    height: 400px;
  }

  @media (max-width: 576px) {
    width: 240px;
    height: 360px;
  }
`;

const SystemBox = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 36px;
  box-shadow: 0 0 50px rgba(74, 144, 226, 0.3);
  background: linear-gradient(
    135deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  animation: ${glow} 4s infinite ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 25px;
    background: var(--bg-primary);
    border-radius: 20px;
    z-index: 2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(74, 144, 226, 0.1) 0%,
      rgba(41, 98, 255, 0.1) 100%
    );
    z-index: 1;
  }
`;

const SystemInterface = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  background: var(--accent-color);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const SystemContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 1rem;
  text-align: center;
`;

const IconCircle = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const SystemModules = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const ModuleIcon = styled(motion.div)`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const OrbitingCircle = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 200%;
  left: -50%;
  top: -50%;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: ${rotate} 20s linear infinite;
  z-index: 0;
`;

const OrbitingCircleInner = styled(motion.div)`
  position: absolute;
  width: 140%;
  height: 140%;
  left: -20%;
  top: -20%;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  animation: ${rotate} 15s linear infinite reverse;
  z-index: 0;
`;

// const OrbitingDot = styled(motion.div)`
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   background: linear-gradient(135deg, #4a90e2 0%, #2962ff 100%);
//   border-radius: 50%;
//   top: ${props => props.top}%;
//   left: ${props => props.left}%;
//   box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
//   z-index: 10;
// `;

const HeroBenefitsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 4rem auto 0;
  max-width: 1200px;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 2.5rem;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    margin-top: 2rem;
    padding: 0;
  }
`;

const HeroBenefitItem = styled(motion.div)`
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(74, 144, 226, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 576px) {
    padding: 1.2rem;
    gap: 0.8rem;
  }
`;

const HeroBenefitIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 0 20px rgba(41, 98, 255, 0.5);
  flex-shrink: 0;

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const HeroBenefitTitle = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const HeroBenefitDescription = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.4;

  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const HeroBenefitContent = styled.div`
  flex: 1;
`;

// Информационная секция
const InfoSection = styled(motion.section)`
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(74, 144, 226, 0.1) 0%,
      transparent 70%
    );
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 1rem;
  }
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  background: rgba(16, 24, 39, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
`;

const InfoTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #ffffff 0%, #4a90e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const InfoContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--text-primary);
`;

const InfoText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const FeaturesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const FeatureItem = styled(motion.li)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  padding: 1rem 1rem 1rem 2.5rem;
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(10px);
  }

  &::before {
    content: '—';
    position: absolute;
    left: 1rem;
    color: var(--accent-color);
    font-weight: bold;
  }
`;

// const InfoSummary = styled(motion.p)`
//   font-size: 1.4rem;
//   font-weight: 500;
//   line-height: 1.8;
//   margin: 2.5rem 0;
//   color: var(--text-primary);
//   border-left: 4px solid var(--accent-color);
//   padding: 1.5rem 2rem;
//   background: rgba(255, 255, 255, 0.05);
//   border-radius: 0 12px 12px 0;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
// `;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, transparent 70%);
  opacity: 0.1;
  z-index: 0;
`;

// Секция преимуществ
const BenefitsSection = styled(motion.section)`
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 30% 70%,
      rgba(41, 98, 255, 0.15) 0%,
      transparent 50%
    );
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 1rem;
  }
`;

const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const BenefitsTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #ffffff 0%, #4a90e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const BenefitCardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: rgba(16, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      135deg,
      rgba(74, 144, 226, 0.05) 0%,
      transparent 50%
    );
    z-index: 0;
  }
`;

const BenefitIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(41, 98, 255, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 8px 20px rgba(74, 144, 226, 0.3);
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 100%
    );
    border-radius: inherit;
    z-index: -1;
  }
`;

// const BenefitNumber = styled.span`
//   font-size: 3rem;
//   font-weight: 800;
//   color: rgba(255, 255, 255, 0.08);
//   font-family: sans-serif;
// `;

const BenefitContent = styled.div`
  position: relative;
  z-index: 1;
`;

const BenefitCardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const BenefitCardDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const BenefitsDecoration = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(74, 144, 226, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -30%;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(41, 98, 255, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(40px);
  }
`;

// Секция услуг
const ServicesSection = styled(motion.section)`
  position: relative;
  background: linear-gradient(
    45deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  padding: 8rem 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at 70% 30%,
      rgba(74, 144, 226, 0.1) 0%,
      transparent 60%
    );
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 1rem;
  }
`;

const ServicesWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: var(--bg-secondary);
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%);
  z-index: 1;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #ffffff 0%, #4a90e2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
  }
`;

const ServicesContent = styled.div`
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(74, 144, 226, 0.05) 0%,
      transparent 70%
    );
    top: -200px;
    right: -200px;
    border-radius: 50%;
    z-index: 0;
  }
`;

const ServicesHeading = styled(motion.h3)`
  font-size: 2.5rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
`;

const ServiceText = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex: 1;
`;

const ServiceActions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  position: relative;
  z-index: 1;
`;

const ServiceButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(41, 98, 255, 0.9)
  );
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
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

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
  }
`;

// Секция FAQ
const FaqSection = styled(motion.section)`
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  padding: 8rem 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 80% 20%,
      rgba(94, 234, 212, 0.1) 0%,
      transparent 50%
    );
    z-index: 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 1rem;
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
  z-index: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 0;
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

  @media (max-width: 992px) {
    font-size: 3rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

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

    @media (max-width: 768px) {
      font-size: 4rem;
      top: -25px;
    }

    @media (max-width: 576px) {
      font-size: 3rem;
      top: -20px;
    }
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

    @media (max-width: 576px) {
      width: 60px;
      height: 3px;
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
    gap: 1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 576px) {
    gap: 0.8rem;
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

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  @media (max-width: 576px) {
    border-radius: 8px;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 15px rgba(94, 234, 212, 0.1);
    border-color: rgba(94, 234, 212, 0.1);
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

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1.2rem 1rem;
  }

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

    @media (max-width: 768px) {
      left: 1.5rem;
      right: 1.5rem;
    }

    @media (max-width: 576px) {
      left: 1rem;
      right: 1rem;
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

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }

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
  background: rgba(94, 234, 212, 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(94, 234, 212, 0.1);
    box-shadow: 0 0 10px rgba(94, 234, 212, 0.2);
  }
`;

const FaqAnswer = styled(motion.div)`
  padding: 0 2rem 1.8rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  overflow: hidden;
  position: relative;
  animation: ${fadeInScale} 0.4s ease forwards;

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 576px) {
    padding: 0 1rem 1.2rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }

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

    @media (max-width: 768px) {
      left: 1.5rem;
      right: 1.5rem;
    }

    @media (max-width: 576px) {
      left: 1rem;
      right: 1rem;
    }
  }

  strong {
    color: var(--accent-color);
    font-weight: 600;
  }

  ul {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;

    @media (max-width: 576px) {
      padding-left: 1rem;
    }
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;

    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;

      @media (max-width: 576px) {
        left: -0.8rem;
      }
    }
  }

  p {
    margin-bottom: 0.8rem;

    @media (max-width: 576px) {
      margin-bottom: 0.6rem;
    }
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

    @media (max-width: 576px) {
      padding: 0.1rem 0.3rem;
      margin: 0 0.1rem;
    }

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

const HeroButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 3rem;
  z-index: 1;
  position: relative;

  @media (max-width: 768px) {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
    margin-top: 2rem;
  }

  @media (max-width: 576px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    margin-top: 1.5rem;
    width: 100%;
    max-width: 300px;
  }
`;

const FaqCta = styled(motion.div)`
  background: rgba(16, 24, 39, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 3rem;
  text-align: center;
  border: 1px solid rgba(94, 234, 212, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 576px) {
    padding: 1.2rem;
    border-radius: 12px;
  }
`;

const FaqCtaText = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const FaqCtaButton = styled(motion.button)`
  background: linear-gradient(135deg, #5eead4, #06b6d4);
  color: #0f172a;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(94, 234, 212, 0.3);
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.85rem;
    width: 100%;
  }
`;

// ... existing code ...

// Add responsive styles for "Етапи нашої роботи" section in JSX

// ... existing code ...

// Add styled components for work stages section
const WorkStageCard = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  width: 1000px;
  height: 180px;
  background: rgba(16, 24, 39, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 90%;
    max-width: 800px;
    height: auto;
    min-height: 160px;
    padding: 1.8rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem;
    width: 95%;
    height: auto;
    text-align: center;
  }

  @media (max-width: 576px) {
    padding: 1.2rem;
    gap: 1rem;
    width: 100%;
    margin: 0 1rem;
  }

  &:hover {
    scale: 1.02;
    transition: all 0.3s ease;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(74, 144, 226, 0.2);
  }
`;

const WorkStageNumber = styled(motion.div)`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 900;
  color: rgba(74, 144, 226, 0.8);
  text-shadow: 0 2px 10px rgba(74, 144, 226, 0.4);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }
`;

const WorkStageIcon = styled(motion.div)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(41, 98, 255, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.4);
  position: relative;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
    font-size: 1.8rem;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(74, 144, 226, 0.6);
    scale: 1.05;
    transition: all 0.3s ease;
  }
`;

const WorkStageContent = styled(motion.div)`
  background: rgba(10, 15, 25, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem 2rem;
  border: 1px solid rgba(74, 144, 226, 0.3);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  width: calc(100% - 250px);
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: calc(100% - 200px);
    height: auto;
    min-height: 120px;
    padding: 1.3rem 1.8rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 1.2rem;
    border-radius: 16px;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 12px;
  }
`;

const WorkStageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: #ffffff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const WorkStageDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #ffffff;
  overflow: hidden;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;

const WorkStageConnector = styled(motion.div)`
  width: 4px;
  height: 5rem;
  background: linear-gradient(
    to bottom,
    var(--accent-color),
    rgba(41, 98, 255, 0.1)
  );
  border-radius: 2px;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 3rem;
    width: 3px;
  }

  @media (max-width: 576px) {
    height: 2rem;
    width: 2px;
  }
`;

const WorkStagesTitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 6rem;
  position: relative;
  text-align: center;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 992px) {
    font-size: 3.5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
`;

const WorkStagesContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 576px) {
    gap: 2rem;
    padding: 0 0.5rem;
  }
`;

const ERPCRMPage = () => {
  const [stars, setStars] = useState([]);
  // const [orbitingDots, setOrbitingDots] = useState([]);
  const [backgroundShapes, setBackgroundShapes] = useState([]);
  // Состояние для аккордеона FAQ
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  const { t } = useTranslation();
  const erpFeatures = t('ErpCrmSystem.whatIsErpCrm.erpFeatures', {
    returnObjects: true,
  });
  const crmFeatures = t('ErpCrmSystem.whatIsErpCrm.crmFeatures', {
    returnObjects: true,
  });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    // Генерация звезд для фона
    const generatedStars = [];
    for (let i = 0; i < 100; i++) {
      generatedStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 3 + 1,
      });
    }
    setStars(generatedStars);

    // Генерация вращающихся точек
    const dots = [];
    for (let i = 0; i < 5; i++) {
      dots.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
      });
    }
    // setOrbitingDots(dots);

    // Генерация фоновых форм
    const shapes = [];
    for (let i = 0; i < 5; i++) {
      shapes.push({
        id: i,
        size: Math.random() * 200 + 100,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
      });
    }
    setBackgroundShapes(shapes);
  }, []);

  // Функция для переключения состояния аккордеона
  const toggleFaq = index => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(item => item !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  const benefitsData = [
    {
      icon: <FaDatabase />,
      title: t('ErpCrmSystem.hero.mianTextItem1'),
      description: t('ErpCrmSystem.hero.textItem1'),
    },
    {
      icon: <FaChartLine />,
      title: t('ErpCrmSystem.hero.mianTextItem2'),
      description: t('ErpCrmSystem.hero.textItem2'),
    },
    {
      icon: <FaUsers />,
      title: t('ErpCrmSystem.hero.mianTextItem3'),
      description: t('ErpCrmSystem.hero.textItem3'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // const systemVariants = {
  //   initial: { rotateY: 0 },
  //   animate: {
  //     rotateY: 360,
  //     transition: {
  //       duration: 20,
  //       repeat: Infinity,
  //       ease: "linear"
  //     }
  //   }
  // };

  return (
    <Container>
      <HeroSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Background />
        <StarField>
          {stars.map(star => (
            <Star
              key={star.id}
              size={star.size}
              opacity={star.opacity}
              top={star.top}
              left={star.left}
              duration={star.duration}
            />
          ))}
        </StarField>

        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {t('ErpCrmSystem.hero.mainText')}
        </Title>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('ErpCrmSystem.hero.text')}
        </Subtitle>

        <SystemContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <SystemBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <OrbitingCircle />
            <OrbitingCircleInner />

            <SystemInterface
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <SystemContent>
                <IconCircle
                  animate={{
                    scale: [1, 1.1, 1],
                    rotateZ: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FaDatabase />
                </IconCircle>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  ERP/CRM
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  {t('ErpCrmSystem.hero.animationText')}
                </motion.p>
              </SystemContent>

              <SystemModules>
                <ModuleIcon whileHover={{ scale: 1.2 }}>
                  <FaUserCog />
                </ModuleIcon>
                <ModuleIcon whileHover={{ scale: 1.2 }}>
                  <FaChartBar />
                </ModuleIcon>
                <ModuleIcon whileHover={{ scale: 1.2 }}>
                  <FaFileInvoice />
                </ModuleIcon>
              </SystemModules>
            </SystemInterface>
          </SystemBox>
        </SystemContainer>

        <HeroBenefitsList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {benefitsData.slice(0, 3).map((benefit, index) => (
            <HeroBenefitItem key={index} whileHover={{ scale: 1.02 }}>
              <HeroBenefitIcon>{benefit.icon}</HeroBenefitIcon>
              <HeroBenefitContent>
                <HeroBenefitTitle>{benefit.title}</HeroBenefitTitle>
                <HeroBenefitDescription>
                  {benefit.description}
                </HeroBenefitDescription>
              </HeroBenefitContent>
            </HeroBenefitItem>
          ))}
        </HeroBenefitsList>

        <HeroButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(41, 98, 255, 0.7)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
        >
          {t('ErpCrmSystem.hero.buttonText')}
        </HeroButton>
      </HeroSection>

      <InfoSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {backgroundShapes.map(shape => (
          <BackgroundShape
            key={shape.id}
            style={{
              width: shape.size,
              height: shape.size,
              top: `${shape.top}%`,
              left: `${shape.left}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
              rotate: [0, 360],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              delay: shape.delay,
              ease: 'linear',
            }}
          />
        ))}

        <InfoContainer>
          <InfoTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '0.75rem' }}
          >
            {t('ErpCrmSystem.whatIsErpCrm.title')}
          </InfoTitle>

          <InfoContent>
            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: '1.8rem',
                color: 'var(--accent-color)',
                marginBottom: '0.5rem',
                fontWeight: '600',
              }}
            >
              {t('ErpCrmSystem.whatIsErpCrm.erpTitle')}
            </motion.h3>

            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ marginBottom: '0.5rem' }}
            >
              {t('ErpCrmSystem.whatIsErpCrm.erpDescription')}
            </InfoText>

            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: '600',
              }}
            >
              {t('ErpCrmSystem.whatIsErpCrm.erpFeaturesTitle')}
            </InfoText>

            <FeaturesList style={{ marginBottom: '1rem' }}>
              {erpFeatures.map((feature, index) => (
                <FeatureItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  whileHover={{ x: 10 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>

            <motion.h3
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                fontSize: '1.8rem',
                color: 'var(--accent-color)',
                marginTop: '1rem',
                marginBottom: '0.5rem',
                fontWeight: '600',
              }}
            >
              {t('ErpCrmSystem.whatIsErpCrm.crmTitle')}
            </motion.h3>

            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ marginBottom: '0.5rem' }}
            >
              {t('ErpCrmSystem.whatIsErpCrm.crmDescription')}
            </InfoText>

            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              style={{
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                fontWeight: '600',
              }}
            >
              {t('ErpCrmSystem.whatIsErpCrm.crmFeaturesTitle')}
            </InfoText>

            <FeaturesList>
              {crmFeatures.map((feature, index) => (
                <FeatureItem
                  key={index + 5}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.15 }}
                  whileHover={{ x: 10 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
          </InfoContent>
        </InfoContainer>
      </InfoSection>

      <BenefitsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <BenefitsContainer>
          <BenefitsTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('ErpCrmSystem.problemsSolved.title')}
          </BenefitsTitle>

          <InfoText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '2rem' }}
          >
            {t('ErpCrmSystem.problemsSolved.description')}
          </InfoText>

          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '1.8rem',
              color: 'var(--accent-color)',
              marginBottom: '1rem',
              fontWeight: '600',
            }}
          >
            {t('ErpCrmSystem.problemsSolved.erpProblemsTitle')}
          </motion.h3>

          <BenefitCardContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: t('ErpCrmSystem.problemsSolved.erpProblems.title1'),
                description: t(
                  'ErpCrmSystem.problemsSolved.erpProblems.description1'
                ),
                icon: <FaDatabase />,
              },
              {
                title: t('ErpCrmSystem.problemsSolved.erpProblems.title2'),
                description: t(
                  'ErpCrmSystem.problemsSolved.erpProblems.description2'
                ),
                icon: <FaProjectDiagram />,
              },
              {
                title: t('ErpCrmSystem.problemsSolved.erpProblems.title3'),
                description: t(
                  'ErpCrmSystem.problemsSolved.erpProblems.description3'
                ),
                icon: <FaChartLine />,
              },
              {
                title: t('ErpCrmSystem.problemsSolved.erpProblems.title4'),
                description: t(
                  'ErpCrmSystem.problemsSolved.erpProblems.description4'
                ),
                icon: <FaCogs />,
              },
            ].map((benefit, index) => (
              <BenefitCard
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)',
                }}
              >
                <BenefitIconWrapper>
                  <BenefitIcon>{benefit.icon}</BenefitIcon>
                </BenefitIconWrapper>
                <BenefitContent>
                  <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                  <BenefitCardDescription>
                    {benefit.description}
                  </BenefitCardDescription>
                </BenefitContent>
              </BenefitCard>
            ))}
          </BenefitCardContainer>

          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              fontSize: '1.8rem',
              color: 'var(--accent-color)',
              marginTop: '2rem',
              marginBottom: '1rem',
              fontWeight: '600',
            }}
          >
            {t('ErpCrmSystem.problemsSolved.crmProblemsTitle')}
          </motion.h3>

          <BenefitCardContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: t('ErpCrmSystem.problemsSolved.crmProblems.title1'),
                description: t(
                  'ErpCrmSystem.problemsSolved.crmProblems.description1'
                ),
                icon: <FaUsers />,
              },
              {
                title: t('ErpCrmSystem.problemsSolved.crmProblems.title2'),
                description: t(
                  'ErpCrmSystem.problemsSolved.crmProblems.description2'
                ),
                icon: <FaChartBar />,
              },
              {
                title: t('ErpCrmSystem.problemsSolved.crmProblems.title3'),
                description: t(
                  'ErpCrmSystem.problemsSolved.crmProblems.description3'
                ),
                icon: <FaUserCog />,
              },
              {
                title: t('ErpCrmSystem.problemsSolved.crmProblems.title4'),
                description: t(
                  'ErpCrmSystem.problemsSolved.crmProblems.description4'
                ),
                icon: <FaExchangeAlt />,
              },
            ].map((benefit, index) => (
              <BenefitCard
                key={index + 4}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)',
                }}
              >
                <BenefitIconWrapper>
                  <BenefitIcon>{benefit.icon}</BenefitIcon>
                </BenefitIconWrapper>
                <BenefitContent>
                  <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                  <BenefitCardDescription>
                    {benefit.description}
                  </BenefitCardDescription>
                </BenefitContent>
              </BenefitCard>
            ))}
          </BenefitCardContainer>
        </BenefitsContainer>

        <BenefitsDecoration />
      </BenefitsSection>

      <ServicesSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ServicesWave />

        <ServicesContainer>
          <SectionTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('ErpCrmSystem.ourSolutions.title')}
          </SectionTitle>

          <ServicesContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              style={{ marginBottom: '3rem' }}
            >
              <ServicesHeading
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {t('ErpCrmSystem.ourSolutions.erpImplementation.title')}
              </ServicesHeading>

              <ServiceText style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                {t('ErpCrmSystem.ourSolutions.erpImplementation.description')}
              </ServiceText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ marginBottom: '3rem' }}
            >
              <ServicesHeading
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {t('ErpCrmSystem.ourSolutions.crmImplementation.title')}
              </ServicesHeading>

              <ServiceText style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                {t('ErpCrmSystem.ourSolutions.crmImplementation.description')}
              </ServiceText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{ marginBottom: '3rem' }}
            >
              <ServicesHeading
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                {t('ErpCrmSystem.ourSolutions.integration.title')}
              </ServicesHeading>

              <ServiceText style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                {t('ErpCrmSystem.ourSolutions.integration.description')}
              </ServiceText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <ServicesHeading
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                {t('ErpCrmSystem.ourSolutions.customSolutions.title')}
              </ServicesHeading>

              <ServiceText style={{ fontSize: '1.2rem' }}>
                {t('ErpCrmSystem.ourSolutions.customSolutions.description')}
              </ServiceText>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              style={{ marginBottom: '3rem' }}
            >
              <ServicesHeading
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.0 }}
              >
                {t('ErpCrmSystem.ourSolutions.consulting.title')}
              </ServicesHeading>

              <ServiceText style={{ fontSize: '1.2rem' }}>
                {t('ErpCrmSystem.ourSolutions.consulting.description')}
              </ServiceText>
            </motion.div>

            <ServiceActions
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <ServiceButton
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(74, 144, 226, 0.5)',
                }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
              >
                {t('ErpCrmSystem.ourSolutions.blockButton')}
              </ServiceButton>
            </ServiceActions>
          </ServicesContent>
        </ServicesContainer>
        <ServicesWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,160C960,160,1056,160,1152,160C1248,160,1344,160,1440,160L1440,320L0,320Z"
          ></path>
        </ServicesWave>
      </ServicesSection>

      {/* Блок с преимуществами сотрудничества */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          padding: '8rem 2rem',
          background:
            'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '150px',
            background:
              'linear-gradient(to top, transparent, var(--bg-secondary))',
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: '3rem',
              fontWeight: 700,
              color: 'var(--accent-color)',
              marginBottom: '4rem',
              position: 'relative',
              display: 'inline-block',
              textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            {t('ErpCrmSystem.advantages.title')}
          </motion.h2>

          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem',
              width: '100%',
            }}
          >
            {[
              {
                icon: <FaTools />,
                title: t('ErpCrmSystem.advantages.advantagesItems.title1'),
                description: t(
                  'ErpCrmSystem.advantages.advantagesItems.description1'
                ),
              },
              {
                icon: <FaUserCog />,
                title: t('ErpCrmSystem.advantages.advantagesItems.title2'),
                description: t(
                  'ErpCrmSystem.advantages.advantagesItems.description2'
                ),
              },
              {
                icon: <FaClipboardCheck />,
                title: t('ErpCrmSystem.advantages.advantagesItems.title3'),
                description: t(
                  'ErpCrmSystem.advantages.advantagesItems.description3'
                ),
              },
            ].map((advantage, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                }}
                style={{
                  background: 'rgba(16, 24, 39, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background:
                      'linear-gradient(135deg, var(--accent-color) 0%, rgba(41, 98, 255, 0.8) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(74, 144, 226, 0.3)',
                    marginBottom: '1rem',
                  }}
                >
                  {advantage.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {advantage.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {advantage.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Последние два элемента по центру */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '2rem',
              flexWrap: 'wrap',
            }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.6,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <FaChartLine />,
                title: t('ErpCrmSystem.advantages.advantagesItems.title4'),
                description: t(
                  'ErpCrmSystem.advantages.advantagesItems.description4'
                ),
              },
              {
                icon: <FaSyncAlt />,
                title: t('ErpCrmSystem.advantages.advantagesItems.title5'),
                description: t(
                  'ErpCrmSystem.advantages.advantagesItems.description5'
                ),
              },
            ].map((advantage, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: 'easeOut' },
                  },
                }}
                style={{
                  background: 'rgba(16, 24, 39, 0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  width: 'calc(33% - 1rem)',
                  minWidth: '350px',
                  maxWidth: '450px',
                }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background:
                      'linear-gradient(135deg, var(--accent-color) 0%, rgba(41, 98, 255, 0.8) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(74, 144, 226, 0.3)',
                    marginBottom: '1rem',
                  }}
                >
                  {advantage.icon}
                </div>

                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {advantage.title}
                </h3>

                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Блок с этапами работы */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          padding: '10rem 2rem',
          background:
            'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Декоративные элементы фона */}
        <div
          style={{
            position: 'absolute',
            top: '5%',
            right: '10%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '15%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(41, 98, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <WorkStagesTitle
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('ErpCrmSystem.workStages.title')}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150px',
                height: '4px',
                background:
                  'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                borderRadius: '4px',
              }}
              animate={{
                width: ['0%', '150px'],
                opacity: [0, 1],
              }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </WorkStagesTitle>

          <WorkStagesContainer
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <FaClipboardCheck />,
                title: t('ErpCrmSystem.workStages.stages.title1'),
                description: t('ErpCrmSystem.workStages.stages.description1'),
              },
              {
                icon: <FaCogs />,
                title: t('ErpCrmSystem.workStages.stages.title2'),
                description: t('ErpCrmSystem.workStages.stages.description2'),
              },
              {
                icon: <FaLaptopCode />,
                title: t('ErpCrmSystem.workStages.stages.title3'),
                description: t('ErpCrmSystem.workStages.stages.description3'),
              },
              {
                icon: <FaUsers />,
                title: t('ErpCrmSystem.workStages.stages.title4'),
                description: t('ErpCrmSystem.workStages.stages.description4'),
              },
              {
                icon: <FaSyncAlt />,
                title: t('ErpCrmSystem.workStages.stages.title5'),
                description: t('ErpCrmSystem.workStages.stages.description5'),
              },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <WorkStageCard
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.8, ease: 'easeOut' },
                    },
                  }}
                >
                  <WorkStageNumber>{index + 1}</WorkStageNumber>

                  <WorkStageIcon
                    whileHover={{
                      boxShadow: '0 15px 40px rgba(74, 144, 226, 0.6)',
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '50%',
                        border: '2px solid rgba(74, 144, 226, 0.5)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    {step.icon}
                  </WorkStageIcon>

                  <WorkStageContent>
                    <WorkStageTitle>{step.title}</WorkStageTitle>
                    <WorkStageDescription>
                      {step.description}
                    </WorkStageDescription>
                  </WorkStageContent>
                </WorkStageCard>

                {index < 4 && (
                  <WorkStageConnector
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  />
                )}
              </React.Fragment>
            ))}
          </WorkStagesContainer>
        </div>
      </motion.section>

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
            {[
              {
                question: t('ErpCrmSystem.faq.questions.question1'),
                answer: t('ErpCrmSystem.faq.questions.answer1'),
              },
              {
                question: t('ErpCrmSystem.faq.questions.question2'),
                answer: t('ErpCrmSystem.faq.questions.answer2'),
              },
              {
                question: t('ErpCrmSystem.faq.questions.question3'),
                answer: t('ErpCrmSystem.faq.questions.answer3'),
              },
              {
                question: t('ErpCrmSystem.faq.questions.question4'),
                answer: t('ErpCrmSystem.faq.questions.answer4'),
              },
              {
                question: t('ErpCrmSystem.faq.questions.question5'),
                answer: t('ErpCrmSystem.faq.questions.answer5'),
              },
              {
                question: t('ErpCrmSystem.faq.questions.question6'),
                answer: t('ErpCrmSystem.faq.questions.answer6'),
              },
            ].map((faq, index) => (
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
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          isOpen={expandedFaqs.includes(index)}
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
            <FaqCtaText>{t('ErpCrmSystem.faq.ctaText')}</FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              {t('ErpCrmSystem.faq.ctaButton')}
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>

      {/* Modal Window */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
};

export default ERPCRMPage;
