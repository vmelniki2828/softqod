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
  FaShieldAlt,
  FaLaptopCode,
  FaUsers,
  FaSyncAlt,
  FaClipboardCheck,
  FaPlus
} from 'react-icons/fa';

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

const shimmer = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0); }
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
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  padding-top: 100px;
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 2rem;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.15) 0%, transparent 25%),
                radial-gradient(circle at 80% 70%, rgba(41, 98, 255, 0.15) 0%, transparent 25%);
  }
`;

const StarField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%);
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
  font-size: 4.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  color: transparent;
  background: linear-gradient(90deg, var(--accent-color), #4a90e2, var(--accent-color));
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 8s linear infinite;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 3px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 800px;
  text-align: center;
  margin: 0 auto 3rem;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
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
`;

const SystemBox = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 36px;
  box-shadow: 0 0 50px rgba(74, 144, 226, 0.3);
  background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
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
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, rgba(41, 98, 255, 0.1) 100%);
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
`;

const HeroBenefitContent = styled.div`
  flex: 1;
`;

const HeroBenefitTitle = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.5rem;
`;

const HeroBenefitDescription = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.4;
`;

// Информационная секция
const InfoSection = styled(motion.section)`
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -80px;
    left: 0;
    right: 0;
    height: 160px;
    background: linear-gradient(to bottom, transparent, var(--bg-secondary));
    z-index: 2;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    transform: scaleX(2);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 20%, rgba(74, 144, 226, 0.1) 0%, transparent 30%),
                radial-gradient(circle at 30% 70%, rgba(41, 98, 255, 0.1) 0%, transparent 30%);
    z-index: 1;
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
  color: var(--accent-color);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;
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
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, transparent, var(--bg-primary));
    z-index: 1;
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
  color: var(--accent-color);
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;
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
    background: linear-gradient(135deg, rgba(74, 144, 226, 0.05) 0%, transparent 50%);
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
  background: linear-gradient(135deg, var(--accent-color) 0%, rgba(41, 98, 255, 0.8) 100%);
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
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
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

// const CtaButton = styled(motion.button)`
//   padding: 1.2rem 3rem;
//   font-size: 1.2rem;
//   font-weight: 600;
//   background: linear-gradient(90deg, var(--accent-color), rgba(41, 98, 255, 0.9));
//   color: white;
//   border: none;
//   border-radius: 12px;
//   cursor: pointer;
//   display: block;
//   margin: 0 auto;
//   box-shadow: 0 8px 20px rgba(74, 144, 226, 0.2);
//   transition: all 0.3s ease;
//   position: relative;
//   overflow: hidden;

//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//   width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
//     transition: all 0.6s ease;
//   }
  
//   &:hover::before {
//     left: 100%;
//   }
// `;

const BenefitsDecoration = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%);
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
    background: radial-gradient(circle, rgba(41, 98, 255, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
  }
`;

// Секция услуг
const ServicesSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
  overflow: hidden;
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

const ServicesTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;
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
    background: radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    border-radius: 50%;
    z-index: 0;
  }
`;

// const ServicesIntro = styled(motion.p)`
//   font-size: 1.3rem;
//   line-height: 1.8;
//   color: var(--text-secondary);
//   margin-bottom: 3rem;
//   position: relative;
//   z-index: 1;
// `;
  
const ServicesHeading = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

// const ServicesList = styled(motion.ul)`
//   list-style: none;
//   padding: 0;
//   margin: 0 0 3rem 0;
//   position: relative;
//   z-index: 1;
// `;

// const ServiceItem = styled(motion.li)`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 1.5rem;
//   padding: 1rem;
//   border-radius: 12px;
//   background: rgba(255, 255, 255, 0.03);
//   transition: all 0.3s ease;

//   &:hover {
//     background: rgba(255, 255, 255, 0.07);
//     transform: translateX(10px);
//   }
// `;

// const ServiceIcon = styled.div`
//   margin-right: 1rem;
//   position: relative;
// `;

// const ServiceCircle = styled.div`
//   width: 24px;
//   height: 24px;
//   border-radius: 50%;
//   background: linear-gradient(135deg, var(--accent-color) 0%, #2962ff 100%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
  
//   &::before {
//     content: '';
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//     background: rgba(255, 255, 255, 0.9);
//   }
// `;

const ServiceText = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex: 1;
`;

// const ServiceSummary = styled(motion.p)`
//   font-size: 1.5rem;
//   font-weight: 500;
//   line-height: 1.7;
//   color: var(--text-primary);
//   padding: 2rem;
//   background: linear-gradient(90deg, rgba(74, 144, 226, 0.1), rgba(41, 98, 255, 0.1));
//   border-radius: 12px;
//   margin: 2rem 0 3rem;
//   position: relative;
//   z-index: 1;

//   &::before {
//     content: '"';
//     position: absolute;
//     top: 10px;
//     left: 15px;
//     font-size: 4rem;
//     color: rgba(74, 144, 226, 0.2);
//     font-family: serif;
//   }
  
//   &::after {
//     content: '"';
//     position: absolute;
//     bottom: 10px;
//     right: 15px;
//     font-size: 4rem;
//     color: rgba(74, 144, 226, 0.2);
//     font-family: serif;
//   }
// `;

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
  background: linear-gradient(90deg, var(--accent-color), rgba(41, 98, 255, 0.9));
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

// Секция FAQ
const FaqSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(16, 24, 39, 0.9) 100%);
  overflow: hidden;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at top right, rgba(74, 144, 226, 0.08) 0%, transparent 70%);
    z-index: -1;
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
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const FaqGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  
  &.circle-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(74, 144, 226, 0.05) 0%, transparent 70%);
    top: 10%;
    left: -200px;
    animation: ${floatVertical} 15s infinite ease-in-out;
  }
  
  &.circle-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(41, 98, 255, 0.05) 0%, transparent 70%);
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
  text-shadow: 0 2px 10px rgba(74, 144, 226, 0.2);
  
  &::before {
    content: 'FAQ';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;
    color: rgba(74, 144, 226, 0.03);
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
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 4px;
    animation: ${pulse} 2s infinite ease-in-out;
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
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 15px rgba(74, 144, 226, 0.1);
    border-color: rgba(74, 144, 226, 0.1);
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
    background: linear-gradient(to bottom, var(--accent-color), rgba(41, 98, 255, 0.5));
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
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
  background: rgba(74, 144, 226, 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(74, 144, 226, 0.1);
    box-shadow: 0 0 10px rgba(74, 144, 226, 0.2);
  }
`;

const FaqAnswer = styled.div`
  padding: 0 15px 15px;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  
  ${props => props.isOpen && `
    opacity: 1;
    max-height: 1000px;
    padding-top: 15px;
  `}
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
  margin-top: 3rem;
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
    background: linear-gradient(90deg, var(--accent-color), rgba(59, 130, 246, 0.8));
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(94, 234, 212, 0.05) 0%, transparent 50%);
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
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--accent-color), rgba(59, 130, 246, 0.9));
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
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
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
    background: linear-gradient(90deg, rgba(59, 130, 246, 0.5), var(--accent-color));
    filter: blur(5px);
    opacity: 0.5;
  }
`;

const ERPCRMPage = () => {
  const [stars, setStars] = useState([]);
  // const [orbitingDots, setOrbitingDots] = useState([]);
  const [backgroundShapes, setBackgroundShapes] = useState([]);
  // Состояние для аккордеона FAQ
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  
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
        duration: Math.random() * 3 + 1
      });
    }
    setStars(generatedStars);
    
    // Генерация вращающихся точек
    const dots = [];
    for (let i = 0; i < 5; i++) {
      dots.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100
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
        delay: Math.random() * 5
      });
    }
    setBackgroundShapes(shapes);
  }, []);
  
  // Функция для переключения состояния аккордеона
  const toggleFaq = (index) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(item => item !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };
  
  const benefitsData = [
    {
      icon: <FaDatabase />,
      title: "Централизованное управление",
      description: "Все данные и процессы компании в единой системе, доступной для всех отделов"
    },
    {
      icon: <FaChartLine />,
      title: "Повышение эффективности",
      description: "Автоматизация рутинных задач и оптимизация бизнес-процессов"
    },
    {
      icon: <FaUsers />,
      title: "Улучшение клиентского сервиса",
      description: "Полная история взаимодействия с клиентами и быстрый доступ к данным"
    },
    {
      icon: <FaChartBar />,
      title: "Аналитика в реальном времени",
      description: "Мониторинг ключевых показателей и генерация отчетов для принятия решений"
    },
    {
      icon: <FaShieldAlt />,
      title: "Надежная защита данных",
      description: "Многоуровневая система безопасности и контроля доступа к информации"
    },
    {
      icon: <FaExchangeAlt />,
      title: "Гибкая интеграция",
      description: "Возможность подключения к существующим системам и сторонним сервисам"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
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
          ERP и CRM системы
        </Title>
        
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Комплексные решения для управления бизнесом и взаимоотношениями с клиентами.
          Оптимизируйте процессы, автоматизируйте рутину и увеличивайте прибыль.
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
                    rotateZ: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
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
                  Управление и аналитика
                </motion.p>
              </SystemContent>
              
              <SystemModules>
                <ModuleIcon whileHover={{ scale: 1.2 }}><FaUserCog /></ModuleIcon>
                <ModuleIcon whileHover={{ scale: 1.2 }}><FaChartBar /></ModuleIcon>
                <ModuleIcon whileHover={{ scale: 1.2 }}><FaFileInvoice /></ModuleIcon>
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
            <HeroBenefitItem
              key={index}
              whileHover={{ scale: 1.02 }}
            >
              <HeroBenefitIcon>
                {benefit.icon}
              </HeroBenefitIcon>
              <HeroBenefitContent>
                <HeroBenefitTitle>{benefit.title}</HeroBenefitTitle>
                <HeroBenefitDescription>{benefit.description}</HeroBenefitDescription>
              </HeroBenefitContent>
            </HeroBenefitItem>
          ))}
        </HeroBenefitsList>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(41, 98, 255, 0.7)' }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            background: 'var(--accent-color)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            marginTop: '3rem',
            zIndex: 1,
            position: 'relative'
          }}
        >
          Узнать больше
        </motion.button>
      </HeroSection>
      
      <InfoSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {backgroundShapes.map((shape) => (
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
              ease: "linear"
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
            Що таке ERP та CRM системи?
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
                fontWeight: '600' 
              }}
            >
              ERP: управління ресурсами компанії
            </motion.h3>
            
            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ marginBottom: '0.5rem' }}
            >
              ERP (Enterprise Resource Planning) — це система комплексного управління всіма ресурсами підприємства: фінансами, виробництвом, закупівлями, складом, персоналом.
              Мета ERP — створити єдиний інформаційний простір, що дозволяє керівництву бачити повну картину бізнес-процесів і оперативно приймати рішення.
            </InfoText>
            
            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: '600' }}
            >
              Основні можливості ERP систем:
            </InfoText>
            
            <FeaturesList style={{ marginBottom: '1rem' }}>
              {[
                'Автоматизація обліку та управління фінансами',
                'Управління постачаннями та запасами',
                'Планування виробництва',
                'Управління персоналом',
                'Аналітика та звітність в реальному часі'
              ].map((feature, index) => (
                <FeatureItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
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
                fontWeight: '600' 
              }}
            >
              CRM: управління відносинами з клієнтами
            </motion.h3>
            
            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ marginBottom: '0.5rem' }}
            >
              CRM (Customer Relationship Management) — це система для організації ефективної взаємодії з клієнтами.
              Вона допомагає відстежувати історію контактів, покращувати якість обслуговування, управляти продажами та маркетингом.
            </InfoText>
            
            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              style={{ marginTop: '0.5rem', marginBottom: '0.5rem', fontWeight: '600' }}
            >
              Функції CRM систем:
            </InfoText>
            
            <FeaturesList>
              {[
                'Ведення клієнтської бази',
                'Управління лідами та угодами',
                'Автоматизація продажів',
                'Аналіз ефективності роботи відділу продажу',
                'Маркетингові кампанії та комунікація'
              ].map((feature, index) => (
                <FeatureItem
                  key={index + 5}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + (index * 0.15) }}
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
            Які проблеми вирішують ERP та CRM системи?
          </BenefitsTitle>
          
          <InfoText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '2rem' }}
          >
            ERP та CRM системи допомагають вирішити ключові завдання, що заважають компаніям рости, розвиватися та ефективно працювати. Вони усувають хаос у бізнес-процесах, дозволяють зосередитися на розвитку компанії та підвищенні прибутковості.
          </InfoText>
          
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ 
              fontSize: '1.8rem', 
              color: 'var(--accent-color)', 
              marginBottom: '1rem',
              fontWeight: '600' 
            }}
          >
            Основні проблеми, які вирішує ERP система:
          </motion.h3>
          
          <BenefitCardContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Відсутність єдиної бази даних",
                description: "Інформація про фінанси, закупівлі, складські залишки та виробництво розкидана по різних системах або ведеться вручну. ERP об'єднує всі дані в єдину базу, забезпечуючи прозорість і доступність інформації для керівництва.",
                icon: <FaDatabase />
              },
              {
                title: "Неузгодженість між відділами",
                description: "Відсутність взаємодії між підрозділами призводить до помилок, затримок і фінансових втрат. ERP системи синхронізують роботу всіх відділів у реальному часі.",
                icon: <FaProjectDiagram />
              },
              {
                title: "Низька швидкість прийняття рішень",
                description: "Через нестачу актуальної аналітики керівники змушені ухвалювати рішення \"наосліп\". ERP надає аналітичні звіти в один клік, що дозволяє швидко реагувати на зміни на ринку.",
                icon: <FaChartLine />
              },
              {
                title: "Труднощі в плануванні ресурсів",
                description: "Виробничі збої, нестача матеріалів або перевитрати бюджету — наслідки відсутності планування. ERP автоматизує ці процеси, допомагаючи більш точно прогнозувати потреби.",
                icon: <FaCogs />
              }
            ].map((benefit, index) => (
              <BenefitCard
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)'
                }}
              >
                <BenefitIconWrapper>
                  <BenefitIcon>{benefit.icon}</BenefitIcon>
                </BenefitIconWrapper>
                <BenefitContent>
                  <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                  <BenefitCardDescription>{benefit.description}</BenefitCardDescription>
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
              fontWeight: '600' 
            }}
          >
            Основні проблеми, які вирішує CRM система:
          </motion.h3>
          
          <BenefitCardContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Втрата клієнтів через неякісне обслуговування",
                description: "Без CRM важко зберігати історію взаємодії з клієнтом, відстежувати його потреби та пропонувати актуальні рішення. CRM фіксує всі контакти, завдання та угоди, підвищуючи рівень обслуговування.",
                icon: <FaUsers />
              },
              {
                title: "Неефективний продаж і маркетинг",
                description: "Без структурованої роботи з лідами компанія втрачає потенційні доходи. CRM допомагає автоматизувати воронку продажів, управляти лідами, аналізувати конверсію та підвищувати ефективність маркетингових кампаній.",
                icon: <FaChartBar />
              },
              {
                title: "Незрозуміла ефективність менеджерів",
                description: "Коли відсутня централізована система обліку діяльності менеджерів з продажу, складно оцінити їхню продуктивність. CRM дозволяє бачити кількість дзвінків, листів, зустрічей та фактичні результати кожного співробітника.",
                icon: <FaUserCog />
              },
              {
                title: "Відсутність системного підходу до розвитку клієнтської бази",
                description: "CRM формує повноцінний профіль клієнта, допомагаючи краще розуміти його потреби і пропонувати відповідні товари або послуги, що збільшує обсяг повторних продажів.",
                icon: <FaExchangeAlt />
              }
            ].map((benefit, index) => (
              <BenefitCard
                key={index + 4}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)'
                }}
              >
                <BenefitIconWrapper>
                  <BenefitIcon>{benefit.icon}</BenefitIcon>
                </BenefitIconWrapper>
                <BenefitContent>
                  <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                  <BenefitCardDescription>{benefit.description}</BenefitCardDescription>
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
          <ServicesTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Наші рішення для вашого бізнесу
          </ServicesTitle>
          
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
                Впровадження ERP систем
              </ServicesHeading>
              
              <ServiceText style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Ми підбираємо і налаштовуємо ERP системи під ваші завдання: від управління фінансами до автоматизації виробництва.
                Працюємо як із готовими рішеннями, так і з індивідуальними розробками.
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
                Впровадження CRM систем
              </ServicesHeading>
              
              <ServiceText style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Допомагаємо налаштувати ефективну роботу з клієнтами: автоматизація продажів, облік угод, 
                створення клієнтських баз, аналітика маркетингових кампаній.
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
                Інтеграція ERP та CRM
              </ServicesHeading>
              
              <ServiceText style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Об'єднуємо ERP та CRM системи для створення єдиного цифрового середовища, 
                де бізнес-процеси та взаємодія з клієнтами працюють як єдиний механізм.
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
                Індивідуальні рішення
              </ServicesHeading>
              
              <ServiceText style={{ fontSize: '1.2rem' }}>
                Розробляємо системи під конкретні потреби бізнесу: особливості логістики, 
                виробничі процеси, нестандартні схеми продажів тощо.
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
                Консалтинг з цифрової трансформації
              </ServicesHeading>
              
              <ServiceText style={{ fontSize: '1.2rem' }}>
                Допомагаємо бізнесу визначити оптимальну стратегію автоматизації та цифровізації.
                Проводимо аудит існуючих процесів, розробляємо дорожню карту впровадження ERP/CRM
                та супроводжуємо на всіх етапах цифрової трансформації.
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
                  boxShadow: '0 0 25px rgba(74, 144, 226, 0.5)' 
                }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
              >
                Замовити консультацію
              </ServiceButton>
            
            </ServiceActions>

          </ServicesContent>
        </ServicesContainer>
        <ServicesWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,160C960,160,1056,160,1152,160C1248,160,1344,160,1440,160L1440,320L0,320Z"></path>
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
          background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '150px',
            background: 'linear-gradient(to top, transparent, var(--bg-secondary))',
            zIndex: 1
          }}
        ></div>
        
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
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
              textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            Переваги співпраці з нами
          </motion.h2>
          
          <motion.ul
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            animate="visible"
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem',
              width: '100%'
            }}
          >
            {[
              {
                icon: <FaTools />,
                title: "Досвід у різних галузях",
                description: "Від роздрібної торгівлі до виробництва та сервісу"
              },
              {
                icon: <FaUserCog />,
                title: "Індивідуальний підхід",
                description: "Підбираємо рішення під конкретні цілі компанії"
              },
              {
                icon: <FaClipboardCheck />,
                title: "Комплексний підхід",
                description: "Аналіз, впровадження, навчання, підтримка"
              },
            ].map((advantage, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
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
                  gap: '1rem'
                }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, var(--accent-color) 0%, rgba(41, 98, 255, 0.8) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(74, 144, 226, 0.3)',
                    marginBottom: '1rem'
                  }}
                >
                  {advantage.icon}
                </div>
                
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {advantage.title}
                </h3>
                
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)'
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
              flexWrap: 'wrap'
            }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.6
                }
              }
            }}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <FaChartLine />,
                title: "Гарантія результату",
                description: "Підвищення ефективності бізнесу після впровадження"
              },
              {
                icon: <FaSyncAlt />,
                title: "Супровід і розвиток системи",
                description: "Адаптація до змін у бізнесі"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { 
                    y: 0, 
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" }
                  }
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
                  maxWidth: '450px'
                }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(74, 144, 226, 0.4)'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '14px',
                    background: 'linear-gradient(135deg, var(--accent-color) 0%, rgba(41, 98, 255, 0.8) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    color: 'white',
                    boxShadow: '0 8px 20px rgba(74, 144, 226, 0.3)',
                    marginBottom: '1rem'
                  }}
                >
                  {advantage.icon}
                </div>
                
                <h3
                  style={{
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)'
                  }}
                >
                  {advantage.title}
                </h3>
                
                <p
                  style={{
                    fontSize: '1.05rem',
                    lineHeight: 1.7,
                    color: 'var(--text-secondary)'
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
          background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
          overflow: 'hidden'
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
            background: 'radial-gradient(circle, rgba(74, 144, 226, 0.1) 0%, transparent 70%)',
            filter: 'blur(60px)'
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
            background: 'radial-gradient(circle, rgba(41, 98, 255, 0.1) 0%, transparent 70%)',
            filter: 'blur(50px)'
          }}
        />
        
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '4rem',
              fontWeight: 800,
              color: 'var(--accent-color)',
              marginBottom: '6rem',
              position: 'relative',
              textAlign: 'center',
              textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)'
            }}
          >
            Етапи нашої роботи
            <motion.div 
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '150px',
                height: '4px',
                background: 'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                borderRadius: '4px'
              }}
              animate={{
                width: ['0%', '150px'],
                opacity: [0, 1]
              }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.3
                }
              }
            }}
            initial="hidden"
            animate="visible"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            {[
              {
                icon: <FaClipboardCheck />,
                title: "Аналіз потреб бізнесу",
                description: "Вивчаємо особливості діяльності компанії, проблемні зони та очікувані результати."
              },
              {
                icon: <FaCogs />,
                title: "Вибір оптимального рішення",
                description: "Пропонуємо рішення — готові продукти або індивідуальну розробку."
              },
              {
                icon: <FaLaptopCode />,
                title: "Впровадження системи",
                description: "Налаштовуємо, адаптуємо та інтегруємо систему в існуючі процеси компанії."
              },
              {
                icon: <FaUsers />,
                title: "Тестування та навчання персоналу",
                description: "Перевіряємо роботу системи на практиці, навчаємо співробітників роботі з новими інструментами."
              },
              {
                icon: <FaSyncAlt />,
                title: "Підтримка та розвиток",
                description: "Забезпечуємо технічну підтримку та модернізацію системи відповідно до змін вашого бізнесу."
              }
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: { 
                      x: 0, 
                      opacity: 1,
                      transition: { duration: 0.8, ease: "easeOut" }
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    padding: '2rem',
                    width: '1000px',
                    height: '180px',
                    background: 'rgba(16, 24, 39, 0.2)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3 },
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(74, 144, 226, 0.2)'
                  }}
                >
                  {/* Номер этапа */}
                  <motion.div
                    style={{
                      width: '100px',
                      height: '100px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                      fontWeight: '900',
                      color: 'rgba(74, 144, 226, 0.8)',
                      textShadow: '0 2px 10px rgba(74, 144, 226, 0.4)',
                      flexShrink: 0
                    }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  {/* Иконка */}
                  <motion.div
                    style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, var(--accent-color) 0%, rgba(41, 98, 255, 0.8) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      color: 'white',
                      boxShadow: '0 10px 30px rgba(74, 144, 226, 0.4)',
                      position: 'relative',
                      flexShrink: 0
                    }}
                    whileHover={{
                      boxShadow: '0 15px 40px rgba(74, 144, 226, 0.6)',
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Пульсирующий круг вокруг иконки */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '50%',
                        border: '2px solid rgba(74, 144, 226, 0.5)'
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {step.icon}
                  </motion.div>
                  
                  {/* Текстовый блок */}
                  <motion.div
                    style={{
                      background: 'rgba(10, 15, 25, 0.85)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      padding: '1.5rem 2rem',
                      border: '1px solid rgba(74, 144, 226, 0.3)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                      width: 'calc(100% - 250px)',
                      height: '160px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        marginBottom: '0.8rem',
                        color: '#FFFFFF',
                        textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {step.title}
                    </h3>
                    
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.5,
                        color: '#FFFFFF',
                        overflow: 'hidden',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
                
                {/* Вертикальная линия между блоками */}
                {index < 4 && (
                  <motion.div 
                    style={{
                      width: '4px',
                      height: '5rem',
                      background: 'linear-gradient(to bottom, var(--accent-color), rgba(41, 98, 255, 0.1))',
                      borderRadius: '4px'
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: '5rem' }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>
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
                question: "Чем отличается ERP от CRM системы?",
                answer: "ERP система управляет всеми внутренними процессами компании (финансы, производство, логистика и т.д.), а CRM фокусируется на взаимоотношениях с клиентами, продажах и маркетинге. Во многих случаях эти системы интегрируются для создания комплексного решения."
              },
              {
                question: "Сколько времени занимает внедрение ERP/CRM?",
                answer: "Сроки внедрения зависят от масштаба бизнеса и сложности процессов. Для малого бизнеса это может занять от 1 до 3 месяцев, для среднего — от 3 до 6 месяцев, для крупного — от 6 месяцев до года."
              },
              {
                question: "Можно ли интегрировать ERP/CRM с нашими существующими программами?",
                answer: "Да, современные системы имеют открытый API и возможности интеграции с бухгалтерскими программами, сайтами, маркетплейсами, системами аналитики и многими другими решениями."
              },
              {
                question: "Какой бюджет потребуется на внедрение?",
                answer: "Стоимость зависит от выбранного решения (готовый продукт или разработка с нуля), количества пользователей, необходимых модулей и сложности интеграций. Мы составляем детальный расчет после анализа потребностей бизнеса."
              },
              {
                question: "Как выбрать подходящую систему для бизнеса?",
                answer: "Выбор зависит от размера компании, отрасли, бюджета и специфических требований. Мы проводим аудит бизнес-процессов и на его основе рекомендуем оптимальное решение — готовое или индивидуальное."
              },
              {
                question: "Нужно ли специальное оборудование для ERP/CRM?",
                answer: "Большинство современных систем работают в облаке и не требуют установки сложного оборудования. Для локальных решений может потребоваться собственный сервер."
              }
            ].map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
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
                        animate={{ rotate: expandedFaqs.includes(index) ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaPlus />
                      </FaqToggle>
                    </FaqQuestion>
                    
                    <AnimatePresence>
                      {expandedFaqs.includes(index) && (
                        <FaqAnswer
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
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
            <FaqCtaText>Не знайшли відповідь на своє питання?</FaqCtaText>
            <FaqCtaButton
              whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)' }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Напишіть нам
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