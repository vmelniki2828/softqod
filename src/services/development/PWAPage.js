import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMobile, FaRocket, FaChartLine, FaWifi, FaCog, FaShieldAlt, FaBell, FaCoins, FaPencilRuler, FaTools, FaBolt, FaBrain, FaPlus } from 'react-icons/fa';

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
  0% { box-shadow: 0 0 5px rgba(94, 234, 212, 0.3); }
  50% { box-shadow: 0 0 20px rgba(94, 234, 212, 0.6), 0 0 30px rgba(59, 130, 246, 0.3); }
  100% { box-shadow: 0 0 5px rgba(94, 234, 212, 0.3); }
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

const pulseRing = keyframes`
  0% { transform: scale(0.8); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(0.8); opacity: 0.8; }
`;

const circleFloat = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

const spinGlow = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
`;

const fadeInScale = keyframes`
  0% { opacity: 0; transform: scale(0.95); }
  100% { opacity: 1; transform: scale(1); }
`;

const shimmerEffect = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
`;

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
    background: radial-gradient(circle at 20% 30%, rgba(94, 234, 212, 0.15) 0%, transparent 25%),
                radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 25%);
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
  background: linear-gradient(90deg, var(--accent-color), #5eead4, var(--accent-color));
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

const PhoneContainer = styled(motion.div)`
  width: 300px;
  height: 500px;
  position: relative;
  perspective: 1000px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    width: 220px;
    height: 400px;
  }
`;

const Phone = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  border-radius: 36px;
  box-shadow: 0 0 50px rgba(94, 234, 212, 0.3);
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
    background: linear-gradient(135deg, rgba(94, 234, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
    z-index: 1;
  }
`;

const PhoneScreen = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  background: var(--accent-color);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const PhoneContent = styled(motion.div)`
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

const PhoneApps = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const AppIcon = styled(motion.div)`
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
    border-color: rgba(94, 234, 212, 0.3);
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
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
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

const PWAInfoSection = styled(motion.section)`
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
    background: radial-gradient(circle at 70% 20%, rgba(94, 234, 212, 0.1) 0%, transparent 30%),
                radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 30%);
    z-index: 1;
  }
`;

const PWAInfoContainer = styled.div`
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

const PWAInfoTitle = styled(motion.h2)`
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

const PWAInfoContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--text-primary);
`;

const PWAInfoText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
`;

const PWAFeaturesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const PWAFeatureItem = styled(motion.li)`
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

const PWASummary = styled(motion.p)`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8;
  margin: 2.5rem 0;
  color: var(--text-primary);
  border-left: 4px solid var(--accent-color);
  padding: 1.5rem 2rem;
    background: rgba(255, 255, 255, 0.05);
  border-radius: 0 12px 12px 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, transparent 70%);
  opacity: 0.1;
  z-index: 0;
`;

// Стилизация новой секции
const PWABenefitsSection = styled(motion.section)`
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

const PWABenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const PWABenefitsTitle = styled(motion.h2)`
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

const PWABenefitCardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PWABenefitCard = styled(motion.div)`
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
    background: linear-gradient(135deg, rgba(94, 234, 212, 0.05) 0%, transparent 50%);
    z-index: 0;
  }
`;

const PWABenefitIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const PWABenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--accent-color) 0%, rgba(59, 130, 246, 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: white;
  box-shadow: 0 8px 20px rgba(94, 234, 212, 0.3);
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

const PWABenefitNumber = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.08);
  font-family: sans-serif;
`;

const PWABenefitContent = styled.div`
  position: relative;
  z-index: 1;
`;

const PWABenefitCardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const PWABenefitCardDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const PWACtaButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--accent-color), rgba(59, 130, 246, 0.9));
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
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
`;

const PWABenefitsDecoration = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(94, 234, 212, 0.1) 0%, transparent 70%);
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
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(40px);
  }
`;

// Добавляем стили для секции услуг
const PWAServicesSection = styled(motion.section)`
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

const PWAServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const PWAServicesTitle = styled(motion.h2)`
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

const PWAServicesContent = styled.div`
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
    background: radial-gradient(circle, rgba(94, 234, 212, 0.05) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    border-radius: 50%;
    z-index: 0;
  }
`;

const PWAServicesIntro = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
`;
  
const ServicesHeading = styled(motion.h3)`
    font-size: 1.8rem;
  font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const ServicesList = styled(motion.ul)`
    list-style: none;
    padding: 0;
  margin: 0 0 3rem 0;
  position: relative;
  z-index: 1;
`;

const ServiceItem = styled(motion.li)`
    display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
    padding: 1rem;
    border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
    transition: all 0.3s ease;

    &:hover {
    background: rgba(255, 255, 255, 0.07);
      transform: translateX(10px);
  }
`;

const ServiceIcon = styled.div`
  margin-right: 1rem;
  position: relative;
`;

const ServiceCircle = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, #3b82f6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
  }
`;

const ServiceText = styled.p`
  font-size: 1.15rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex: 1;
`;

const PWAServiceSummary = styled(motion.p)`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.7;
    color: var(--text-primary);
  padding: 2rem;
  background: linear-gradient(90deg, rgba(94, 234, 212, 0.1), rgba(59, 130, 246, 0.1));
  border-radius: 12px;
  margin: 2rem 0 3rem;
  position: relative;
  z-index: 1;

  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 4rem;
    color: rgba(94, 234, 212, 0.2);
    font-family: serif;
  }
  
  &::after {
    content: '"';
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 4rem;
    color: rgba(94, 234, 212, 0.2);
    font-family: serif;
  }
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
  background: linear-gradient(90deg, var(--accent-color), rgba(59, 130, 246, 0.9));
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(94, 234, 212, 0.3);
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

const ServiceLink = styled(motion.a)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const ServicesBgDecoration = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(94, 234, 212, 0.03) 0%, transparent 25%),
    radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.03) 0%, transparent 25%);
  z-index: 0;
`;

const ServicesBgGlow = styled.div`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(94, 234, 212, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(50px);
  z-index: 0;
`;

// Добавляем стили для секции "Почему мы"
const PWAWhyUsSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, var(--bg-primary) 0%, rgba(16, 24, 39, 1) 100%);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(94, 234, 212, 0.05) 0%, transparent 20%),
      radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.05) 0%, transparent 20%);
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

// Основной компонент
const PWAPage = () => {
  const [stars, setStars] = useState([]);
  const [backgroundShapes, setBackgroundShapes] = useState([]);
  // Добавляем состояние для аккордеона FAQ
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  
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
      icon: <FaChartLine />,
      title: "Більше клієнтів",
      description: "Завдяки PWA доступ до вашого продукту стає простішим, що збільшує охоплення аудиторії."
    },
    {
      icon: <FaMobile />,
      title: "Краще юзер-експірієнс",
      description: "Швидкість, зручність та інтуїтивний інтерфейс забезпечують найкращий досвід користувача."
    },
    {
      icon: <FaRocket />,
      title: "Швидший шлях до прибутку",
      description: "Економія на розробці нативних додатків та швидше введення продукту на ринок."
    },
    {
      icon: <FaWifi />,
      title: "Офлайн-режим",
      description: "PWA доступні навіть за відсутності інтернет-з'єднання завдяки кешуванню."
    },
    {
      icon: <FaCog />,
      title: "Автоматичні оновлення",
      description: "Користувачі завжди отримують найновішу версію без необхідності ручного оновлення."
    },
    {
      icon: <FaShieldAlt />,
      title: "Підвищена безпека",
      description: "HTTPS-з'єднання та додаткові рівні захисту для користувача та його даних."
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
          PWA: Майбутнє веб-додатків
        </Title>
        
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Прогресивні веб-додатки (PWA) — це поєднання найкращих якостей сайтів і мобільних застосунків.
          Вони працюють швидко, надійно й можуть встановлюватися на смартфон без походу в App Store чи Google Play.
        </Subtitle>
        
        <PhoneContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Phone
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <OrbitingCircle />
            <OrbitingCircleInner />
            
            <PhoneScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <PhoneContent>
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
                  <FaRocket />
                </IconCircle>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  PWA App
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  Швидкість та надійність
                </motion.p>
              </PhoneContent>
              
              <PhoneApps>
                <AppIcon whileHover={{ scale: 1.2 }}><FaChartLine /></AppIcon>
                <AppIcon whileHover={{ scale: 1.2 }}><FaMobile /></AppIcon>
                <AppIcon whileHover={{ scale: 1.2 }}><FaRocket /></AppIcon>
              </PhoneApps>
            </PhoneScreen>
          </Phone>
        </PhoneContainer>
        
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
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)' }}
          whileTap={{ scale: 0.95 }}
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
          Дізнатися більше
        </motion.button>
      </HeroSection>
      
      <PWAInfoSection
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
        
        <PWAInfoContainer>
          <PWAInfoTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Що таке PWA (Progressive Web Apps)?
          </PWAInfoTitle>
          
          <PWAInfoContent>
            <PWAInfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PWA — це сучасний формат веб-додатків, який поєднує переваги сайтів і мобільних застосунків. 
              Вони працюють прямо в браузері, але при цьому можуть:
            </PWAInfoText>
            
            <PWAFeaturesList>
              {[
                'запускатися офлайн',
                'надсилати push-сповіщення',
                'встановлюватися на головний екран смартфона',
                'працювати швидко навіть при поганому інтернеті'
              ].map((feature, index) => (
                <PWAFeatureItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.15) }}
                  whileHover={{ x: 10 }}
                >
                  {feature}
                </PWAFeatureItem>
              ))}
            </PWAFeaturesList>
            
            <PWASummary
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Простіше кажучи — це сайт, який поводиться як застосунок.
              Користувач не помічає різниці, а бізнес отримує максимум охоплення без витрат на розробку окремих мобільних платформ.
            </PWASummary>
          </PWAInfoContent>
        </PWAInfoContainer>
      </PWAInfoSection>
      
      <PWABenefitsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PWABenefitsContainer>
          <PWABenefitsTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Переваги PWA для бізнесу
          </PWABenefitsTitle>
          
          <PWABenefitCardContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <FaMobile />,
                number: "01",
                title: "Універсальність",
                description: "PWA працює на будь-якому пристрої — Android, iOS, Windows. Один додаток охоплює всю аудиторію без додаткових витрат на кілька платформ."
              },
              {
                icon: <FaRocket />,
                number: "02",
                title: "Встановлення без App Store",
                description: "Користувачі можуть додати додаток на головний екран у два кліки — без реєстрацій, маркетів і оновлень."
              },
              {
                icon: <FaWifi />,
                number: "03",
                title: "Робота офлайн",
                description: "Навіть без інтернету ваші клієнти зможуть переглядати важливі сторінки, оформлювати замовлення чи залишати заявки."
              },
              {
                icon: <FaChartLine />,
                number: "04",
                title: "Вища швидкість завантаження",
                description: "PWA кешує дані і працює в рази швидше, ніж звичайний сайт. А швидкість = краща конверсія."
              },
              {
                icon: <FaBell />,
                number: "05",
                title: "Push-сповіщення",
                description: "Нагадуйте про акції, новинки чи брошені кошики напряму на екран смартфона — як у мобільних застосунках."
              },
              {
                icon: <FaCoins />,
                number: "06",
                title: "Менше витрат на розробку",
                description: "Не потрібно створювати й підтримувати окремі застосунки для iOS та Android — одна PWA покриває все."
              }
            ].map((benefit, index) => (
              <PWABenefitCard
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(94, 234, 212, 0.4)'
                }}
              >
                <PWABenefitIconWrapper>
                  <PWABenefitIcon>{benefit.icon}</PWABenefitIcon>
                  <PWABenefitNumber>{benefit.number}</PWABenefitNumber>
                </PWABenefitIconWrapper>
                <PWABenefitContent>
                  <PWABenefitCardTitle>{benefit.title}</PWABenefitCardTitle>
                  <PWABenefitCardDescription>{benefit.description}</PWABenefitCardDescription>
                </PWABenefitContent>
              </PWABenefitCard>
            ))}
          </PWABenefitCardContainer>
          
          <PWACtaButton
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 25px rgba(94, 234, 212, 0.5)' 
            }}
            whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Замовити PWA-розробку
          </PWACtaButton>
        </PWABenefitsContainer>
        
        <PWABenefitsDecoration />
      </PWABenefitsSection>
      
      <PWAServicesSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
        <ServicesWave />
        
        <PWAServicesContainer>
          <PWAServicesTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Наші послуги з розробки PWA
          </PWAServicesTitle>
          
          <PWAServicesContent>
            <PWAServicesIntro
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Ми створюємо прогресивні веб-додатки під ключ — від ідеї до запуску. 
              Вся розробка повністю кастомна, без шаблонів і конструкторів. 
              Ви отримаєте унікальний продукт, який ідеально відповідає вашим бізнес-цілям.
            </PWAServicesIntro>
            
            <ServicesHeading
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Що входить у наші послуги:
            </ServicesHeading>
            
            <ServicesList
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                "Аналіз ніші, конкурентів та потреб користувачів",
                "Прототипування та розробка логічної структури", 
                "UI/UX-дизайн, адаптивність під різні пристрої",
                "Верстка та програмування з використанням сучасних технологій (JS, HTML5, Service Workers тощо)",
                "Інтеграція офлайн-функціоналу, push-сповіщень, кешування",
                "SEO-оптимізація, аналітика, тестування",
                "Техпідтримка та розвиток проєкту після запуску"
              ].map((service, index) => (
                <ServiceItem
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <ServiceIcon>
                    <ServiceCircle />
                  </ServiceIcon>
                  <ServiceText>{service}</ServiceText>
                </ServiceItem>
              ))}
            </ServicesList>
            
            <PWAServiceSummary
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ми не просто робимо "додаток у браузері" — ми створюємо інструмент, який реально працює на результат.
            </PWAServiceSummary>
            
            <ServiceActions
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <ServiceButton
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 25px rgba(94, 234, 212, 0.5)' 
                }}
                whileTap={{ scale: 0.98 }}
              >
                Замовити консультацію
              </ServiceButton>
              
              <ServiceLink
                whileHover={{ 
                  color: 'var(--accent-color)',
                  textDecoration: 'underline'
                }}
              >
                Переглянути портфоліо
              </ServiceLink>
            </ServiceActions>
          </PWAServicesContent>
          
          <ServicesBgDecoration />
        </PWAServicesContainer>
        
        <ServicesBgGlow />
      </PWAServicesSection>
      
      <PWAWhyUsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <WhyUsDiagonal />
        
        <WhyUsContainer>
          <WhyUsTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Чому варто обрати нас?
          </WhyUsTitle>
          
          <WhyUsCardsContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <FaPencilRuler />,
                title: "Кастомна розробка під ваш бізнес",
                description: "Ми не працюємо з шаблонами. Кожен PWA — це унікальний продукт, створений з урахуванням вашої ніші, цілей і клієнтів."
              },
              {
                icon: <FaTools />,
                title: "Повний цикл — від ідеї до запуску",
                description: "Ви отримаєте повноцінний веб-додаток з усіма необхідними функціями. Ми беремо на себе весь процес — аналіз, дизайн, код, тестування, SEO."
              },
              {
                icon: <FaBolt />,
                title: "Швидкість, якість, результат",
                description: "Ми створюємо швидкі, стабільні й оптимізовані PWA, які відповідають останнім стандартам вебу та реально приносять результат."
              },
              {
                icon: <FaBrain />,
                title: "Досвід і експертиза",
                description: "Наша команда має глибоку технічну експертизу та розуміє, як бізнесу потрібні не просто технології, а рішення, що працюють."
              }
            ].map((item, index) => (
              <WhyUsCard
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ 
                  y: -15,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  rotateY: 5,
                  rotateX: -5
                }}
              >
                <WhyUsCardGlow />
                <WhyUsIconWrapper>
                  {item.icon}
                </WhyUsIconWrapper>
                <WhyUsCardTitle>{item.title}</WhyUsCardTitle>
                <WhyUsCardDescription>{item.description}</WhyUsCardDescription>
                <CardAccent />
              </WhyUsCard>
            ))}
          </WhyUsCardsContainer>
          
          <WhyUsAction
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PulsingButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="glow-effect"></span>
              Почати проєкт
            </PulsingButton>
          </WhyUsAction>
        </WhyUsContainer>
        
        <WhyUsBackgroundShapes />
      </PWAWhyUsSection>
      
      <PWACtaSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <CtaWaveTop />
        
        <CtaContainer>
          <CtaGlowCircle className="circle-1" />
          <CtaGlowCircle className="circle-2" />
          
          <CtaContent>
            <CtaTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Замовте PWA для вашого бізнесу вже сьогодні!
            </CtaTitle>
            
            <CtaText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Хочете швидкий, зручний та ефективний веб-додаток, який працює на всіх пристроях 
              і реально приносить клієнтів? Ми створимо для вас саме такий PWA — індивідуальний, 
              сучасний і готовий до росту.
            </CtaText>
            
            <CtaHighlight
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Працюємо швидко, чітко та з результатом.
            </CtaHighlight>
            
            <CtaSubtext
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Залишайте заявку — і ми зв'яжемось із вами для обговорення деталей, 
              прорахунку вартості та термінів.
            </CtaSubtext>
            
            <CtaForm
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <CtaInputWrapper>
                <CtaInput type="text" placeholder="Ваше ім'я" />
                <CtaInputBg />
              </CtaInputWrapper>
              
              <CtaInputWrapper>
                <CtaInput type="tel" placeholder="Телефон" />
                <CtaInputBg />
              </CtaInputWrapper>
              
              <CtaInputWrapper>
                <CtaInput type="email" placeholder="Email" />
                <CtaInputBg />
              </CtaInputWrapper>
              
              <CtaButton
                whileHover={{ scale: 1.03, boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)' }}
                whileTap={{ scale: 0.98 }}
              >
                Залишити заявку
              </CtaButton>
            </CtaForm>
            
            <CtaFooterText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Залишити заявку або отримати консультацію — один крок до потужного цифрового інструменту для вашого бізнесу.
            </CtaFooterText>
          </CtaContent>
          
          <CtaDecoration />
        </CtaContainer>
      </PWACtaSection>
      
      <PWAFaqSection
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
                question: "Що таке Progressive Web App (PWA)?",
                answer: "PWA — це веб-додаток, який виглядає й працює як мобільний застосунок. Його можна відкрити в браузері, встановити на смартфон, працювати з ним офлайн та отримувати push-сповіщення — без потреби завантаження з App Store або Google Play."
              },
              {
                question: "Чим PWA кращий за мобільний додаток?",
                answer: "PWA не потребує окремої розробки для iOS та Android, що економить бюджет. Його простіше просувати, швидше запускати і легше оновлювати. А ще користувачі можуть взаємодіяти з ним одразу — без установки."
              },
              {
                question: "Чи працює PWA без інтернету?",
                answer: "Так, PWA підтримує офлайн-режим. Завдяки кешуванню, користувач може переглядати контент або виконувати дії навіть без підключення до мережі."
              },
              {
                question: "Чи можна встановити PWA на iOS та Android?",
                answer: "Так. PWA можна додати на головний екран смартфона як звичайний застосунок. Працює на Android, iOS, Windows та інших системах із сучасним браузером."
              },
              {
                question: "Як PWA впливає на швидкість сайту та SEO?",
                answer: "PWA завантажується швидше завдяки кешуванню і оптимізації. Це позитивно впливає на користувацький досвід і поведінкові фактори, що, у свою чергу, покращує SEO."
              },
              {
                question: "Скільки коштує розробка PWA?",
                answer: "Ціна залежить від складності функціоналу та обсягу роботи. Ми працюємо індивідуально: аналізуємо потреби клієнта, після чого формуємо чітку комерційну пропозицію."
              },
              {
                question: "Чи можна інтегрувати оплату в PWA?",
                answer: "Так, ми можемо реалізувати платіжні системи (наприклад, картки, Apple Pay, Google Pay тощо) в рамках PWA — так само, як у звичайному застосунку чи сайті."
              },
              {
                question: "Як додати PWA на головний екран смартфона?",
                answer: "При відкритті PWA у браузері користувач побачить спливаюче вікно з пропозицією встановити додаток. У два кліки він з'являється на головному екрані — без маркетів, пошуку чи реєстрацій."
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
                        >
                          {index === 0 && (
                            <>
                              PWA — це веб-додаток, який виглядає й працює як <span className="highlight">мобільний застосунок</span>. Його можна відкрити в браузері, <span className="highlight">встановити на смартфон</span>, працювати з ним <span className="highlight">офлайн</span> та отримувати <span className="highlight">push-сповіщення</span> — без потреби завантаження з App Store або Google Play.
                            </>
                          )}
                          {index === 1 && (
                            <>
                              PWA не потребує <span className="highlight">окремої розробки для iOS та Android</span>, що <strong>економить бюджет</strong>. Його простіше просувати, швидше запускати і легше оновлювати. А ще користувачі можуть взаємодіяти з ним одразу — <span className="highlight">без установки</span>.
                            </>
                          )}
                          {index === 2 && (
                            <>
                              Так, PWA підтримує <span className="highlight">офлайн-режим</span>. Завдяки кешуванню, користувач може переглядати контент або виконувати дії навіть <strong>без підключення до мережі</strong>.
                            </>
                          )}
                          {index === 3 && (
                            <>
                              Так. PWA можна додати на <span className="highlight">головний екран смартфона</span> як звичайний застосунок. Працює на <span className="highlight">Android, iOS, Windows</span> та інших системах із сучасним браузером.
                            </>
                          )}
                          {index === 4 && (
                            <>
                              PWA завантажується <strong>швидше</strong> завдяки кешуванню і оптимізації. Це позитивно впливає на <span className="highlight">користувацький досвід</span> і поведінкові фактори, що, у свою чергу, <span className="highlight">покращує SEO</span>.
                            </>
                          )}
                          {index === 5 && (
                            <>
                              Ціна залежить від складності функціоналу та обсягу роботи. Ми працюємо <span className="highlight">індивідуально</span>: аналізуємо потреби клієнта, після чого формуємо чітку комерційну пропозицію.
                            </>
                          )}
                          {index === 6 && (
                            <>
                              Так, ми можемо реалізувати <span className="highlight">платіжні системи</span> (наприклад, картки, <span className="highlight">Apple Pay, Google Pay</span> тощо) в рамках PWA — так само, як у звичайному застосунку чи сайті.
                            </>
                          )}
                          {index === 7 && (
                            <>
                              При відкритті PWA у браузері користувач побачить <span className="highlight">спливаюче вікно</span> з пропозицією встановити додаток. У <strong>два кліки</strong> він з'являється на головному екрані — без маркетів, пошуку чи реєстрацій.
                            </>
                          )}
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
            >
              Напишіть нам
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
        
        <FaqDecoration />
      </PWAFaqSection>
      
    </Container>
  );
};

// Добавляем стили для новой секции
const PWACtaSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(180deg, rgba(16, 24, 39, 1) 0%, var(--bg-primary) 100%);
  overflow: hidden;
`;

const CtaWaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom right, rgba(16, 24, 39, 1) 49%, transparent 51%);
  z-index: 1;
`;

const CtaContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CtaGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  
  &.circle-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(94, 234, 212, 0.08) 0%, transparent 70%);
    top: -100px;
    right: -200px;
  }
  
  &.circle-2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
    bottom: -200px;
    left: -200px;
  }
`;

const CtaContent = styled.div`
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  
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
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const CtaTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CtaText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const CtaHighlight = styled(motion.div)`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.5;
  color: var(--text-primary);
  text-align: center;
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: linear-gradient(90deg, rgba(94, 234, 212, 0.1), rgba(59, 130, 246, 0.1));
  border-radius: 12px;
`;

const CtaSubtext = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  text-align: center;
`;

const CtaForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CtaInputWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

const CtaInputBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.03);
  z-index: -1;
  transition: all 0.3s ease;
  
  ${CtaInputWrapper}:hover & {
    background: rgba(255, 255, 255, 0.06);
  }
  
  ${CtaInputWrapper}:focus-within & {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 2px rgba(94, 234, 212, 0.3);
  }
`;

const CtaInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 1.1rem;
  z-index: 1;
  position: relative;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

const CtaButton = styled(motion.button)`
  padding: 1.3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--accent-color), rgba(59, 130, 246, 0.9));
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 1rem;
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
`;

const CtaFooterText = styled(motion.p)`
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0.8;
  text-align: center;
  margin-top: 2.5rem;
`;

const CtaDecoration = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(94, 234, 212, 0.1);
  border-radius: 50%;
  top: -100px;
  right: -100px;
  
  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    border: 1px dashed rgba(94, 234, 212, 0.1);
    border-radius: 50%;
    top: -50px;
    left: -50px;
    z-index: 0;
    animation: ${rotate} 30s linear infinite;
  }
`;

// Добавляем компоненты для секции "Чому варто обрати нас?"
const WhyUsDiagonal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150px;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  background: linear-gradient(135deg, var(--bg-primary) 0%, transparent 70%);
  opacity: 0.5;
  z-index: 1;
`;

const WhyUsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const WhyUsTitle = styled(motion.h2)`
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

const WhyUsCardsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1.5rem 0.5rem;
  
  @media (max-width: 768px) {
    padding-bottom: 2rem;
    gap: 1.5rem;
  }
`;

const WhyUsCard = styled(motion.div)`
  background: rgba(16, 24, 39, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
  text-align: center;
  transform-style: preserve-3d;
  perspective: 1000px;
  width: calc(25% - 1.5rem);
  min-width: 250px;
  max-width: 300px;
  
  @media (max-width: 1200px) {
    width: calc(33.333% - 1.5rem);
  }
  
  @media (max-width: 992px) {
    width: calc(50% - 1.5rem);
  }
  
  @media (max-width: 576px) {
    width: 100%;
    max-width: 350px;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--accent-color), rgba(59, 130, 246, 0.8));
    z-index: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to top, rgba(94, 234, 212, 0.03), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const WhyUsCardGlow = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(circle, rgba(94, 234, 212, 0.06) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.5s ease;
  z-index: -1;
  transform: scale(0.8);
  
  ${WhyUsCard}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

const WhyUsIconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  position: relative;
  animation: ${pulse} 3s infinite ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transform: translateZ(20px);
  transition: transform 0.3s ease;
  
  ${WhyUsCard}:hover & {
    transform: translateZ(30px) scale(1.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px dashed rgba(94, 234, 212, 0.3);
    animation: ${pulse} 3s infinite ease-in-out 1.5s;
  }
`;

const WhyUsCardTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 1.2rem;
  font-weight: 600;
  position: relative;
  transform: translateZ(10px);
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const WhyUsCardDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-top: 1rem;
  transform: translateZ(5px);
`;

const CardAccent = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border-radius: 0 0 20px 0;
  background: linear-gradient(135deg, transparent 50%, rgba(94, 234, 212, 0.1) 50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: scale(0);
  
  ${WhyUsCard}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

const WhyUsAction = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const PulsingButton = styled(motion.button)`
  padding: 1.2rem 3.5rem;
  font-size: 1.3rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--accent-color), rgba(59, 130, 246, 0.9));
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 8px 25px rgba(94, 234, 212, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 60%);
    z-index: -1;
    animation: ${pulseRing} 4s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: all 0.6s ease;
  }
  
  &:hover::after {
    left: 100%;
  }
  
  .glow-effect {
    position: absolute;
    width: 150px;
    height: 150px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: conic-gradient(from 0deg, transparent, rgba(94, 234, 212, 0.3), transparent);
    border-radius: 50%;
    animation: ${spinGlow} 3s linear infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover .glow-effect {
    opacity: 1;
  }
`;

const WhyUsBackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    z-index: 0;
  }
  
  &::before {
    top: 20%;
    left: -100px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%);
    filter: blur(50px);
    animation: ${circleFloat} 8s ease-in-out infinite;
  }
  
  &::after {
    bottom: 10%;
    right: -100px;
    background: radial-gradient(circle, rgba(94, 234, 212, 0.03) 0%, transparent 70%);
    filter: blur(50px);
    animation: ${circleFloat} 8s ease-in-out infinite 4s;
  }
`;

// Стили для блока FAQ
const PWAFaqSection = styled(motion.section)`
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
    background: radial-gradient(ellipse at top right, rgba(94, 234, 212, 0.08) 0%, transparent 70%);
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
    background: radial-gradient(circle, rgba(94, 234, 212, 0.05) 0%, transparent 70%);
    top: 10%;
    left: -200px;
    animation: ${floatVertical} 15s infinite ease-in-out;
  }
  
  &.circle-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
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
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, var(--accent-color), rgba(59, 130, 246, 0.5));
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
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
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
    background: linear-gradient(90deg, rgba(94, 234, 212, 0.1), rgba(59, 130, 246, 0.1));
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
      background: linear-gradient(90deg, 
        transparent, rgba(255, 255, 255, 0.05), transparent
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

const FaqDecoration = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 1px dashed rgba(94, 234, 212, 0.1);
  border-radius: 50%;
  bottom: -150px;
  right: 10%;
  animation: ${rotate} 30s linear infinite;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border: 2px solid rgba(94, 234, 212, 0.05);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background: radial-gradient(circle, rgba(94, 234, 212, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    top: 30%;
    left: 20%;
    animation: ${pulse} 3s infinite ease-in-out;
  }
`;

export default PWAPage; 