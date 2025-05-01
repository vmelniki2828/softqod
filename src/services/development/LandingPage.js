import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMobile,
  FaRocket,
  FaChartLine,
  FaWifi,
  FaCog,
  FaShieldAlt,
  FaBell,
  FaCoins,
  FaPencilRuler,
  FaTools,
  FaBolt,
  FaBrain,
  FaPlus,
  FaShoppingCart,
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

const shine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
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
        rgba(94, 234, 212, 0.15) 0%,
        transparent 25%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(59, 130, 246, 0.15) 0%,
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
  font-size: 4.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  color: transparent;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    #5eead4,
    var(--accent-color)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 8s linear infinite;
  position: relative;
  z-index: 1;
  letter-spacing: -0.5px;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 1390px;
  margin-left: auto;
  margin-right: auto;

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
      rgba(94, 234, 212, 0.1) 0%,
      rgba(59, 130, 246, 0.1) 100%
    );
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

const OrbitingDot = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #60a5fa 0%, #5eead4 100%);
  border-radius: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  box-shadow: 0 0 20px rgba(94, 234, 212, 0.5);
  z-index: 10;
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
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
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
    background: radial-gradient(
        circle at 70% 20%,
        rgba(94, 234, 212, 0.1) 0%,
        transparent 30%
      ),
      radial-gradient(
        circle at 30% 70%,
        rgba(59, 130, 246, 0.1) 0%,
        transparent 30%
      );
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
  background: linear-gradient(
    180deg,
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
    background: linear-gradient(
      135deg,
      rgba(94, 234, 212, 0.05) 0%,
      transparent 50%
    );
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
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(59, 130, 246, 0.8) 100%
  );
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
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 100%
    );
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
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(59, 130, 246, 0.9)
  );
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
`;

const PWABenefitsDecoration = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(94, 234, 212, 0.1) 0%,
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
      rgba(59, 130, 246, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    filter: blur(40px);
  }
`;

// Добавляем стили для секции услуг
const PWAServicesSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
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
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.05) 0%,
      transparent 70%
    );
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
  background: linear-gradient(
    90deg,
    rgba(94, 234, 212, 0.1),
    rgba(59, 130, 246, 0.1)
  );
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
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(59, 130, 246, 0.9)
  );
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
  background: radial-gradient(
      circle at 20% 30%,
      rgba(94, 234, 212, 0.03) 0%,
      transparent 25%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(59, 130, 246, 0.03) 0%,
      transparent 25%
    );
  z-index: 0;
`;

const ServicesBgGlow = styled.div`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 300px;
  background: radial-gradient(
    ellipse,
    rgba(94, 234, 212, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(50px);
  z-index: 0;
`;

// Добавляем стили для секции "Почему мы"
const PWAWhyUsSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 1) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(94, 234, 212, 0.05) 0%,
        transparent 20%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(59, 130, 246, 0.05) 0%,
        transparent 20%
      );
    top: 0;
    left: 0;
    z-index: 0;
  }
`;

// Основной компонент
const LandingPage = () => {
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
        duration: Math.random() * 3 + 1,
      });
    }
    setStars(generatedStars);

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
      icon: <FaChartLine />,
      title: 'Більше клієнтів',
      description:
        'Завдяки PWA доступ до вашого продукту стає простішим, що збільшує охоплення аудиторії.',
    },
    {
      icon: <FaMobile />,
      title: 'Краще юзер-експірієнс',
      description:
        'Швидкість, зручність та інтуїтивний інтерфейс забезпечують найкращий досвід користувача.',
    },
    {
      icon: <FaRocket />,
      title: 'Швидший шлях до прибутку',
      description:
        'Економія на розробці нативних додатків та швидше введення продукту на ринок.',
    },
    {
      icon: <FaWifi />,
      title: 'Офлайн-режим',
      description:
        "PWA доступні навіть за відсутності інтернет-з'єднання завдяки кешуванню.",
    },
    {
      icon: <FaCog />,
      title: 'Автоматичні оновлення',
      description:
        'Користувачі завжди отримують найновішу версію без необхідності ручного оновлення.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Підвищена безпека',
      description:
        "HTTPS-з'єднання та додаткові рівні захисту для користувача та його даних.",
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

  const phoneVariants = {
    initial: { rotateY: 0 },
    animate: {
      rotateY: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  // Новый блок-аргументация эффективности Landing Page
  const lpEffectData = [
    {
      icon: '🎯',
      title: 'Фокус на результат',
      desc: 'Лендінг веде користувача до однієї цільової дії, що підвищує конверсію та зменшує відволікання.',
    },
    {
      icon: '⚡',
      title: 'Швидкість запуску',
      desc: 'Односторінкові сайти створюються та запускаються швидше, що дозволяє оперативно реагувати на ринок.',
    },
    {
      icon: '📱',
      title: 'Адаптивність',
      desc: 'Лендінги ідеально виглядають на будь-яких пристроях, забезпечуючи зручність для всіх користувачів.',
    },
    {
      icon: '🔍',
      title: 'SEO та аналітика',
      desc: 'Сучасні лендінги оптимізовані для пошукових систем і легко інтегруються з аналітикою.',
    },
    {
      icon: '💡',
      title: 'Яскравий дизайн',
      desc: 'Кожен лендінг — це унікальний стиль, що запам`ятовується та підкреслює ваш бренд.',
    },
    {
      icon: '💬',
      title: 'Взаємодія з клієнтом',
      desc: 'Форми, чати, інтеграції — все для швидкого контакту з потенційним клієнтом.',
    },
  ];

  const conversionData = [
    {
      icon: "🎯",
      title: "Чітка структура",
      text: "Кожен блок логічно пов'язаний з наступним, ведучи відвідувача до цільової дії"
    },
    {
      icon: "💎",
      title: "Візуальні акценти",
      text: "Ключові елементи виділені так, щоб привертати увагу та підштовхувати до конверсії"
    },
    {
      icon: "⚡",
      title: "Швидкість роботи",
      text: "Оптимізована швидкість завантаження утримує відвідувачів на сайті"
    },
    {
      icon: "📱",
      title: "Адаптивність",
      text: "Ідеальне відображення на всіх пристроях збільшує конверсію з мобільного трафіку"
    },
    {
      icon: "🎨",
      title: "Продуманий дизайн",
      text: "Сучасна естетика викликає довіру та підвищує конверсію"
    },
    {
      icon: "📊",
      title: "Аналітика та A/B",
      text: "Постійне тестування та оптимізація для максимальної ефективності"
    }
  ];

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
          Створюємо односторінкові сайти, що приносять прибуток вашому бізнесу
        </Title>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Розробляємо ефективні landing page, які конвертують відвідувачів у
          клієнтів. Сучасний дизайн, швидкість завантаження та оптимізація для
          пошукових систем.
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
                    rotateZ: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <FaChartLine />
                </IconCircle>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  Landing Page
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  Конверсія та результат
                </motion.p>
              </PhoneContent>

              <PhoneApps>
                <AppIcon whileHover={{ scale: 1.2 }}>
                  <FaChartLine />
                </AppIcon>
                <AppIcon whileHover={{ scale: 1.2 }}>
                  <FaPencilRuler />
                </AppIcon>
                <AppIcon whileHover={{ scale: 1.2 }}>
                  <FaBolt />
                </AppIcon>
              </PhoneApps>
            </PhoneScreen>
          </Phone>
        </PhoneContainer>

        <HeroBenefitsList
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <HeroBenefitItem whileHover={{ scale: 1.02 }}>
            <HeroBenefitIcon>
              <FaChartLine />
            </HeroBenefitIcon>
            <HeroBenefitContent>
              <HeroBenefitTitle>Висока конверсія</HeroBenefitTitle>
              <HeroBenefitDescription>
                Створюємо сторінки, що перетворюють відвідувачів на клієнтів
                завдяки правильній структурі та закликам до дії.
              </HeroBenefitDescription>
            </HeroBenefitContent>
          </HeroBenefitItem>

          <HeroBenefitItem whileHover={{ scale: 1.02 }}>
            <HeroBenefitIcon>
              <FaPencilRuler />
            </HeroBenefitIcon>
            <HeroBenefitContent>
              <HeroBenefitTitle>Унікальний дизайн</HeroBenefitTitle>
              <HeroBenefitDescription>
                Розробляємо індивідуальний дизайн, що відображає особливості
                вашого бренду та привертає увагу клієнтів.
              </HeroBenefitDescription>
            </HeroBenefitContent>
          </HeroBenefitItem>

          <HeroBenefitItem whileHover={{ scale: 1.02 }}>
            <HeroBenefitIcon>
              <FaBolt />
            </HeroBenefitIcon>
            <HeroBenefitContent>
              <HeroBenefitTitle>Швидкий запуск</HeroBenefitTitle>
              <HeroBenefitDescription>
                Створюємо та запускаємо ефективні лендінги в найкоротші терміни,
                щоб ви могли почати залучати клієнтів вже зараз.
              </HeroBenefitDescription>
            </HeroBenefitContent>
          </HeroBenefitItem>
        </HeroBenefitsList>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
          }}
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
            position: 'relative',
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

        <PWAInfoContainer>
          <PWAInfoTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Що таке Landing Page та які його основні функції
          </PWAInfoTitle>

          <PWAInfoContent>
            <PWAInfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Landing Page (або односторінковий сайт) — це вебсторінка, створена
              для досягнення конкретної маркетингової цілі: продажу товару,
              збору заявок чи презентації послуги. Вона концентрує увагу
              користувача на головному — вашій пропозиції.
            </PWAInfoText>

            <PWAFeaturesList>
              {[
                'Чітка структура та зрозумілий користувацький шлях',
                'Ефективні елементи захоплення уваги та заклики до дії',
                'Адаптивний дизайн для всіх пристроїв',
                'Швидке завантаження та оптимізована продуктивність',
                'Інтеграція з системами аналітики та CRM',
                "Форми захоплення лідів та зворотного зв'язку",
              ].map((feature, index) => (
                <PWAFeatureItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
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
              Ефективний лендінг — це не просто гарна сторінка, а потужний
              інструмент продажів, який перетворює відвідувачів у клієнтів та
              приносить реальний прибуток вашому бізнесу.
            </PWASummary>
          </PWAInfoContent>
        </PWAInfoContainer>
      </PWAInfoSection>
      <LandingVsMultiSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LandingVsContainer>
          <LandingVsTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Чим лендінг відрізняється від багатосторінкового сайту
          </LandingVsTitle>
          
          <LandingVsQuote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <QuoteIcon>💡</QuoteIcon>
            Головна відмінність лендінгу — фокус. На відміну від багатосторінкових сайтів, 
            які розпорошують увагу між десятками сторінок, лендінг веде користувача по логічному 
            шляху до однієї цільової дії. Це збільшує шанси, що відвідувач стане вашим клієнтом.
          </LandingVsQuote>
          
          <LandingVsGrid>
            <VsCol
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <VsColTitle>
                <VsColIcon>🎯</VsColIcon>
                Лендінг
              </VsColTitle>
              <VsList>
                <VsListItem>
                  Одна сторінка — один чіткий шлях для користувача
                </VsListItem>
                <VsListItem>
                  Всі елементи ведуть до цільової дії
                </VsListItem>
                <VsListItem>
                  Висока конверсія завдяки фокусу на результат
                </VsListItem>
                <VsListItem>
                  Швидкий запуск та легке тестування
                </VsListItem>
                <VsListItem>
                  Ідеально для реклами та швидких продажів
                </VsListItem>
              </VsList>
            </VsCol>
            
            <VsCol
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <VsColTitle>
                <VsColIcon>📄</VsColIcon>
                Багатосторінковий сайт
              </VsColTitle>
              <VsList>
                <VsListItem>
                  Розгалужена структура з багатьма сторінками
                </VsListItem>
                <VsListItem>
                  Розширений функціонал та можливості
                </VsListItem>
                <VsListItem>
                  Складніша навігація та довший шлях до цілі
                </VsListItem>
                <VsListItem>
                  Підходить для великих проектів та каталогів
                </VsListItem>
                <VsListItem>
                  Потребує більше часу на розробку та підтримку
                </VsListItem>
              </VsList>
            </VsCol>
          </LandingVsGrid>
        </LandingVsContainer>
      </LandingVsMultiSection>
      <LPEffectSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LPEffectContainer>
          <LPEffectTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Чому Landing Page — це найефективніший інструмент для залучення
            клієнтів?
          </LPEffectTitle>
          <LPEffectCards>
            {lpEffectData.map((item, idx) => (
              <LPEffectCard key={item.title}>
                <LPEffectIcon>{item.icon}</LPEffectIcon>
                <LPEffectCardTitle>{item.title}</LPEffectCardTitle>
                <LPEffectCardDesc>{item.desc}</LPEffectCardDesc>
              </LPEffectCard>
            ))}
          </LPEffectCards>
        </LPEffectContainer>
      </LPEffectSection>
      {/* --- Уникальный текстовый блок: Как мы создаём лендінг --- */}{' '}
      <LandingHowSection>
        {' '}
        <LandingHowPattern />{' '}
        <LandingHowContent>
          {' '}
          <LandingHowAccentLine />{' '}
          <LandingHowTitle>
            {' '}
            <span role="img" aria-label="idea">
              🚀
            </span>{' '}
            Як ми створюємо лендінг, що перетворює відвідувачів у покупців{' '}
          </LandingHowTitle>{' '}
          <LandingHowText>
            {' '}
            Щоб створити <b>ефективний лендинг</b>, ми починаємо з глибокого
            аналізу: вивчаємо ринок, конкурентів і чітко визначаємо цільову
            аудиторію. Це дозволяє побудувати не просто красивий сайт, а
 такий,
            що <span className="how-accent">говорить мовою клієнта</span> й
            відповідає на його потреби.
            <br />
            <br /> Далі переходимо до структури — створюємо логічний сценарій
            взаємодії користувача зі сторінкою. Формуємо прототип, де визначаємо
            ключові блоки, їх послідовність та розташування елементів, що ведуть
            до цільової дії.
            <br />
            <br /> Дизайн сайту розробляється під конкретну нішу —{' '}
            <span className="how-accent">сучасний, стильний</span>, з акцентами
            на головне. Після цього ми зверстаємо сайт і адаптуємо його під усі
            пристрої: смартфони, планшети, ноутбуки. Ваш лендінг буде виглядати{' '}
            <b>бездоганно</b> незалежно від роздільної здатності екрана.
            <br />
            <br /> Перед запуском ми підключаємо інструменти аналітики (Google
            Analytics, Facebook Pixel тощо), перевіряємо працездатність усіх
            елементів та тестуємо швидкість завантаження. І лише після цього
            сайт запускається в онлайн.
            <br />
            <br />{' '}
            <span className="how-quote">
              "Після запуску ми не залишаємо вас наодинці — допомагаємо з
              оптимізацією, аналізуємо поведінку користувачів і вносимо зміни
              для покращення конверсії."
            </span>{' '}
          </LandingHowText>{' '}
        </LandingHowContent>{' '}
      </LandingHowSection>
      {/* --- Блок: Що потрібно для створення односторінкового сайту, який продає? --- */}
      <LPWhatNeedSection>
        <LPWhatNeedContent>
          <LPWhatNeedAccentLine />
          <div style={{ width: '100%' }}>
            <LPWhatNeedTitle>
              <span role="img" aria-label="target">
                🎯
              </span>{' '}
              Що потрібно для створення односторінкового сайту, який продає?
            </LPWhatNeedTitle>
            <LPWhatNeedCards>
              <LPWhatNeedCard
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #5eead4aa' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <LPWhatNeedCardIcon>
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: 'easeInOut',
                    }}
                    role="img"
                    aria-label="structure"
                  >
                    📐
                  </motion.span>
                </LPWhatNeedCardIcon>
                <LPWhatNeedCardTitle>
                  Чітка структура та сильне УТП
                </LPWhatNeedCardTitle>
                <LPWhatNeedCardText>
                  Успішний лендинг починається зі сценарію, що веде користувача
                  до конкретної дії: залишити заявку, здійснити покупку або
                  записатися на консультацію. Унікальна торгова пропозиція (УТП)
                  повинна одразу захоплювати увагу, бути зрозумілою та цінною
                  для вашого клієнта.
                </LPWhatNeedCardText>
              </LPWhatNeedCard>
              <LPWhatNeedCard
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #0ea5e9aa' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                <LPWhatNeedCardIcon>
                  <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.7,
                      ease: 'easeInOut',
                    }}
                    role="img"
                    aria-label="trust"
                  >
                    🤝
                  </motion.span>
                </LPWhatNeedCardIcon>
                <LPWhatNeedCardTitle>
                  Тригери довіри та правильний заклик до дії
                </LPWhatNeedCardTitle>
                <LPWhatNeedCardText>
                  Щоб користувач не сумнівався, важливо додати елементи довіри:
                  реальні відгуки, кейси, фото, сертифікати, гарантії. Це
                  суттєво підвищує рівень впевненості. А завершальним кроком має
                  стати сильний заклик до дії (CTA): яскрава кнопка з чітким
                  посилом, що мотивує натиснути.
                  <br />
                  <br />
                  Також важливо не перенавантажувати сторінку — мінімум зайвих
                  елементів, максимум фокус на цілі. А ще — технічна
                  оптимізація: швидке завантаження, адаптивність, зручна
                  навігація на будь-якому пристрої.
                </LPWhatNeedCardText>
              </LPWhatNeedCard>
            </LPWhatNeedCards>
          </div>
        </LPWhatNeedContent>
      </LPWhatNeedSection>

      {/* --- Уникальный блок сравнения: Индивидуальный vs Шаблонный Landing Page --- */}
      <LPUniqueCompareSection>
        <LPUniqueCompareContent>
          <LPUniqueCompareTitle>
            <span role="img" aria-label="rocket">🚀</span> Отримайте ефективний Landing Page під ключ — швидко та вигідно
          </LPUniqueCompareTitle>
          <LPUniqueCompareSplit>
            <LPUniqueCompareCol
              whileHover={{ scale: 1.04, rotate: -2 }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <LPUniqueCompareColTitle>Індивідуальний лендінг</LPUniqueCompareColTitle>
              <LPUniqueCompareColDesc>
                <span role="img" aria-label="star">🌟</span> Максимум унікальності, глибоке занурення в нішу, дизайн під ваш бренд, кастомна структура, wow-ефекти, повний цикл розробки.
              </LPUniqueCompareColDesc>
            </LPUniqueCompareCol>
            <LPUniqueCompareVs>VS</LPUniqueCompareVs>
            <LPUniqueCompareCol
              whileHover={{ scale: 1.04, rotate: 2 }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <LPUniqueCompareColTitle>Шаблонний лендінг</LPUniqueCompareColTitle>
              <LPUniqueCompareColDesc>
                <span role="img" aria-label="bolt">⚡</span> Швидкий старт, оптимізація під бюджет, адаптація під ваші задачі, сучасний вигляд, базова кастомізація.
              </LPUniqueCompareColDesc>
            </LPUniqueCompareCol>
          </LPUniqueCompareSplit>
          <LPUniqueCompareText>
            Чому варто замовити лендінг у професіоналів
          </LPUniqueCompareText>
          <LPUniqueCompareDesc>
            Самостійно створити лендінг — можна. Але створити той, що дійсно продає, — справа для команди з досвідом. Ми знаємо, як вивести клієнта на цільову дію, як структурувати контент, де поставити кнопку й що написати в заголовку. Ваш сайт — це обличчя бізнесу, і воно має працювати на вас.
            <br /><br />
            Ми пропонуємо як повністю індивідуальну розробку, так і адаптацію шаблонів під ваш бізнес. Обидва варіанти мають свої переваги — все залежить від бюджету, задач і термінів. У будь-якому випадку ви отримаєте сучасний, адаптивний та конверсійний лендінг.
          </LPUniqueCompareDesc>
          <LPUniqueCompareListTitle>Що ви отримаєте:</LPUniqueCompareListTitle>
          <LPUniqueCompareList>
            {[
              'Повноцінний лендінг під ключ — від дослідження ринку до запуску',
              'Унікальний дизайн, який передає стиль вашого бренду',
              'Логічну структуру, що веде користувача до дії',
              'Адаптивну верстку для мобільних, планшетів і ПК',
              'Максимально швидке завантаження сторінки',
              'Інтеграцію аналітики (Google Analytics, Pixel та інші)',
              'Копірайтинг, який продає — тексти, заголовки, CTA',
              'Контактні форми, чати, кнопки — все для збору лідів',
              'Базову SEO-оптимізацію — для старту просування',
              'Підготовку до реклами — ми подбаємо про конверсії',
              'Підтримку та можливість доопрацювань після запуску',
            ].map((item, idx) => (
              <LPUniqueCompareListItem
                key={item}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.07 }}
                whileHover={{ scale: 1.04, background: 'rgba(94,234,212,0.08)' }}
              >
                <LPUniqueCompareListIcon>✔️</LPUniqueCompareListIcon>
                {item}
              </LPUniqueCompareListItem>
            ))}
          </LPUniqueCompareList>
          <LPUniqueCompareListTitle>Наші фішки:</LPUniqueCompareListTitle>
          <LPUniqueCompareFeatures>
            {[
              { icon: '🔎', text: 'Занурення в нішу — ми не просто робимо сайт, ми вникаємо у ваш бізнес' },
              { icon: '✍️', text: 'Без води в текстах — тільки конкретика, що чіпляє' },
              { icon: '🎯', text: 'Заточено під конверсію — UX, CTA, тригери довіри — усе на місці' },
              { icon: '✨', text: 'Мікроанімація та wow-ефекти — підсилюють враження, не відволікають' },
              { icon: '🧪', text: 'A/B готовність — закладаємо основу для тестування та покращення' },
              { icon: '⏱️', text: 'Чіткі терміни — швидко, без поспіху і втрати якості' },
              { icon: '🤝', text: 'Людський підхід — підтримка, прозора комунікація, без технічної мови' },
            ].map((item, idx) => (
              <LPUniqueCompareFeature
                key={item.text}
                whileHover={{ scale: 1.08, boxShadow: '0 4px 24px #5eead4aa' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 + idx * 0.07 }}
              >
                <LPUniqueCompareFeatureIcon>{item.icon}</LPUniqueCompareFeatureIcon>
                <LPUniqueCompareFeatureText>{item.text}</LPUniqueCompareFeatureText>
              </LPUniqueCompareFeature>
            ))}
          </LPUniqueCompareFeatures>
        </LPUniqueCompareContent>
      </LPUniqueCompareSection>
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
              Замовте ефективний лендінг для вашого бізнесу
            </CtaTitle>

            <CtaText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Бажаєте отримати сучасний односторінковий сайт, який буде
              приносити реальні заявки та продажі? Ми створимо для вас продаючий
              лендінг з унікальним дизайном та високою конверсією.
            </CtaText>

            <CtaHighlight
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Розробляємо лендінги, що приносять результат
            </CtaHighlight>

            <CtaSubtext
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Залиште заявку — і ми зв'яжемося з вами для обговорення вашого
              проєкту, розрахунку вартості та термінів розробки.
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
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                Отримати консультацію
              </CtaButton>
            </CtaForm>

            <CtaFooterText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Зробіть перший крок до збільшення продажів — замовте професійний
              лендінг прямо зараз
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
                question: 'Що таке Landing Page і для чого він потрібен?',
                answer:
                  'Landing Page — це односторінковий сайт, який фокусується на одній дії: отримати заявку, дзвінок або продаж. Ми створюємо кастомні лендінги з унікальною структурою, дизайном і контентом, що підлаштовані під конкретну цільову аудиторію.',
              },
              {
                question:
                  'Чим односторінковий сайт відрізняється від звичайного сайту?',
                answer:
                  'Звичайний сайт містить багато сторінок і розділів, а лендінг — це фокусований інструмент продажів. У ньому все підпорядковано одній дії, без зайвих відволікань. Кастомна розробка дозволяє зробити лендінг максимально точним і ефективним.',
              },
              {
                question: 'Які види лендінгів існують?',
                answer:
                  'Ми створюємо різні типи кастомних лендінгів: Продуктові — для продажу конкретного товару чи послуги, Промо-сторінки — для акцій, запусків, подій, Лендінги-візитки — для експертів, фрілансерів, бізнесу, Лід-генераційні — для збору заявок та контактів.',
              },
              {
                question: 'Скільки часу потрібно для створення Landing Page?',
                answer:
                  'В середньому — від 7 до 14 робочих днів. Все залежить від складності задач, обсягу контенту та необхідного функціоналу. Кастомна розробка займає трохи більше часу, але результат повністю унікальний.',
              },
              {
                question: 'Чи можна редагувати лендінг після запуску?',
                answer:
                  'Так, ми закладаємо можливість подальших змін і оновлень. Ви зможете звертатися до нас для редагування або отримати доступ до адміністративної частини, якщо вона передбачена.',
              },
              {
                question: 'Як лендінг допомагає підвищити конверсію?',
                answer:
                  'Наші кастомні лендінги створюються на основі аналізу ЦА, психології поведінки користувача та маркетингових тригерів. Завдяки правильній структурі, сильним заголовкам, УТП і елементам довіри ми допомагаємо перетворити відвідувача на клієнта.',
              },
              {
                question: 'На якій платформі ви розробляєте лендінги?',
                answer:
                  'Ми не використовуємо конструктори (типу Tilda чи Wix). Кожен сайт створюється з нуля — вручну, на чистому коді (HTML, CSS, JS, іноді CMS за потреби). Це дає максимальну свободу в реалізації дизайну, високу швидкість роботи сайту та повний контроль над усім функціоналом.',
              },
              {
                question: 'Які послуги входять у створення Landing Page?',
                answer:
                  'Повний цикл кастомної розробки включає: Аналіз вашого бізнесу та ЦА, Розробку структури та прототипу, Унікальний дизайн і адаптивну верстку, Написання текстів під продаж, Підключення аналітики, Тестування функціоналу, Запуск і підтримку після публікації.',
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
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
              }}
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
  background: linear-gradient(
    180deg,
    rgba(16, 24, 39, 1) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
`;

const CtaWaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    to bottom right,
    rgba(16, 24, 39, 1) 49%,
    transparent 51%
  );
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
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.08) 0%,
      transparent 70%
    );
    top: -100px;
    right: -200px;
  }

  &.circle-2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.08) 0%,
      transparent 70%
    );
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
    background: linear-gradient(
      90deg,
      var(--accent-color),
      rgba(59, 130, 246, 0.8)
    );
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
  background: linear-gradient(
    90deg,
    rgba(94, 234, 212, 0.1),
    rgba(59, 130, 246, 0.1)
  );
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
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(59, 130, 246, 0.9)
  );
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
    background: linear-gradient(
      90deg,
      var(--accent-color),
      rgba(59, 130, 246, 0.8)
    );
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
  background: radial-gradient(
    circle,
    rgba(94, 234, 212, 0.06) 0%,
    transparent 70%
  );
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
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
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
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(94, 234, 212, 0.1) 50%
  );
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
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(59, 130, 246, 0.9)
  );
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
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.2) 0%,
      transparent 60%
    );
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
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
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
    background: conic-gradient(
      from 0deg,
      transparent,
      rgba(94, 234, 212, 0.3),
      transparent
    );
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

  &::before,
  &::after {
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
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.03) 0%,
      transparent 70%
    );
    filter: blur(50px);
    animation: ${circleFloat} 8s ease-in-out infinite;
  }

  &::after {
    bottom: 10%;
    right: -100px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.03) 0%,
      transparent 70%
    );
    filter: blur(50px);
    animation: ${circleFloat} 8s ease-in-out infinite 4s;
  }
`;

// Стили для блока FAQ
const PWAFaqSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.9) 100%
  );
  overflow: hidden;
  z-index: 0;

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
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.1) 0%,
      transparent 70%
    );
    border-radius: 50%;
    top: 30%;
    left: 20%;
    animation: ${pulse} 3s infinite ease-in-out;
  }
`;

const LandingVsMultiSection = styled(motion.section)`
  position: relative;
  padding: 6rem 2rem;
  background: var(--bg-primary);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(94, 234, 212, 0.2), transparent);
  }
`;

const LandingVsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const LandingVsTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #fff 0%, #94A3B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #5eead4, var(--accent-color));
    border-radius: 2px;
  }
`;

const LandingVsQuote = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #E2E8F0;
  background: rgba(94, 234, 212, 0.08);
  border-radius: 24px;
  padding: 2rem;
  margin-bottom: 4rem;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(94, 234, 212, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(94, 234, 212, 0.1),
      transparent
    );
    transform: translateX(-100%);
    animation: ${shine} 3s infinite;
  }
`;

const QuoteIcon = styled.span`
  font-size: 2.2rem;
  color: #5eead4;
  margin-right: 0.7rem;
  flex-shrink: 0;
  filter: drop-shadow(0 0 10px rgba(94, 234, 212, 0.5));
  animation: ${float} 3s ease-in-out infinite;
`;

const LandingVsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 2rem;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const VsCol = styled(motion.div)`
  background: rgba(15, 23, 42, 0.6);
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(94, 234, 212, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(94, 234, 212, 0.3);
    box-shadow: 0 20px 40px rgba(94, 234, 212, 0.1);
  }
`;

const VsColTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const VsColIcon = styled.span`
  font-size: 2rem;
  filter: drop-shadow(0 0 8px rgba(94, 234, 212, 0.4));
`;

const VsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const VsListItem = styled.li`
  font-size: 1.1rem;
  color: #E2E8F0;
  padding-left: 2rem;
  position: relative;
  line-height: 1.6;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 8px;
    height: 8px;
    background: #5eead4;
    border-radius: 50%;
    box-shadow: 0 0 12px rgba(94, 234, 212, 0.6);
  }
  
  &:hover::before {
    animation: ${pulse} 2s infinite;
  }
`;

// Conversion styled-components
const ConversionSection = styled(motion.section)`
  position: relative;
  padding: 7rem 2rem;
  background: linear-gradient(135deg, var(--bg-primary) 0%, #0f1729 100%);
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(94, 234, 212, 0.15) 0%, transparent 70%);
    pointer-events: none;
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.5; }
    50% { opacity: 0.8; }
    100% { opacity: 0.5; }
  }
`;

const ConversionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const ConversionTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(135deg, #fff 0%, #5eead4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(94, 234, 212, 0.3));
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, transparent, #5eead4, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const ConversionQuote = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(94, 234, 212, 0.2);
  border-radius: 24px;
  padding: 2.5rem;
  margin: 0 auto 4rem auto;
  max-width: 900px;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(94, 234, 212, 0.1);
    border-color: #5eead4;
  }
  
  &::before, &::after {
    content: '"';
    position: absolute;
    font-size: 4rem;
    color: #5eead4;
    opacity: 0.5;
    transition: all 0.3s ease;
  }

  &:hover::before, &:hover::after {
    color: #fff;
    text-shadow: 0 0 15px #5eead4;
  }

  &::before {
    top: 1rem;
    left: 1.5rem;
  }

  &::after {
    bottom: 0;
    right: 1.5rem;
  }
`;

const ConversionQuoteText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #e0f2fe;
  text-align: center;
  margin: 0;
  position: relative;
  z-index: 1;
`;

const ConversionGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ConversionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-5px) scale(1.02);
    border: 1px solid #5eead4;
    background: rgba(94, 234, 212, 0.05);
    box-shadow: 0 10px 30px rgba(94, 234, 212, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #5eead4, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
                rgba(94, 234, 212, 0.15), transparent 100px);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const ConversionCardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #5eead4;
  filter: drop-shadow(0 0 10px rgba(94, 234, 212, 0.3));
  transition: all 0.3s ease;

  ${ConversionCard}:hover & {
    transform: scale(1.1);
    filter: drop-shadow(0 0 20px rgba(94, 234, 212, 0.5));
  }
`;

const ConversionCardTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
  transition: color 0.3s ease;

  ${ConversionCard}:hover & {
    color: #5eead4;
  }
`;

const ConversionCardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #94a3b8;
  transition: color 0.3s ease;

  ${ConversionCard}:hover & {
    color: #e0f2fe;
  }
`;

const ConversionCTA = styled(motion.button)`
  display: block;
  margin: 4rem auto 0;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #5eead4 0%, var(--accent-color) 100%);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(94, 234, 212, 0.2);
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
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(94, 234, 212, 0.3);
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

// Новый современный дизайн для секции про конверсію
const ConversionGlowSection = styled(motion.section)`
  padding: 7rem 2rem 6rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  z-index: 1;
`;

const ConversionGlowBg = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(94, 234, 212, 0.18) 0%,
    transparent 70%
  );
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
`;

const ConversionGlass = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: rgba(16, 24, 39, 0.7);
  border-radius: 32px;
  box-shadow: 0 8px 40px rgba(59, 130, 246, 0.13);
  padding: 3.5rem 2rem 3rem 2rem;
  position: relative;
  z-index: 2;
  overflow: hidden;
  backdrop-filter: blur(12px);
`;

const ConversionGlowTitle = styled(motion.h3)`
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--accent-color);
  margin-bottom: 2.2rem;
  text-align: center;
  letter-spacing: -1px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  &::after {
    content: '';
    display: block;
    margin: 1.2rem auto 0 auto;
    width: 80px;
    height: 4px;
    border-radius: 2px;
    background: linear-gradient(90deg, #5eead4, var(--accent-color));
    position: absolute;
    left: 50%;
    bottom: -18px;
    transform: translateX(-50%);
  }
`;

const ConversionGlowIcon = styled.span`
  font-size: 2.5rem;
  color: #5eead4;
  filter: drop-shadow(0 0 8px #5eead4aa);
`;

const ConversionGlowCallout = styled(motion.div)`
  font-size: 1.22rem;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(94, 234, 212, 0.13),
    rgba(59, 130, 246, 0.1)
  );
  border-left: 6px solid #5eead4;
  border-radius: 0 18px 18px 0;
  padding: 1.5rem 2rem;
  margin-bottom: 3.5rem;
  box-shadow: 0 4px 24px rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

const ConversionGlowList = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 2.5rem 0 2.5rem 0;
  @media (max-width: 900px) {
    gap: 1.2rem;
  }
`;

const ConversionGlowCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.09);
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(94, 234, 212, 0.1);
  padding: 2.1rem 1.5rem 1.7rem 1.5rem;
  min-width: 220px;
  max-width: 270px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  border: 2px solid transparent;
  transition: box-shadow 0.3s, border 0.3s;
  &:hover {
    box-shadow: 0 8px 32px rgba(94, 234, 212, 0.18);
    border: 2px solid #5eead4;
    background: rgba(94, 234, 212, 0.13);
  }
`;

const ConversionGlowCardIcon = styled.div`
  font-size: 2.1rem;
  color: #5eead4;
  margin-bottom: 1.1rem;
  filter: drop-shadow(0 0 8px #5eead4aa);
`;

const ConversionGlowCardTitle = styled.h4`
  font-size: 1.15rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.7rem;
  text-align: center;
`;

const ConversionGlowCardDesc = styled.p`
  color: #e0f2fe;
  font-size: 1.01rem;
  text-align: center;
`;

const ConversionGlowCTA = styled(motion.button)`
  margin: 2.5rem auto 0 auto;
  display: block;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #5eead4, var(--accent-color));
  color: #fff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(94, 234, 212, 0.18);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &:hover {
    background: linear-gradient(90deg, var(--accent-color), #5eead4);
    box-shadow: 0 12px 32px rgba(94, 234, 212, 0.25);
    filter: brightness(1.08);
  }
`;

// Уникальный блок про эффективность лендингов
const LPMainSection = styled(motion.section)`
  position: relative;
  padding: 7rem 2rem 6rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  z-index: 1;
`;

const LPMainTitle = styled(motion.h2)`
  font-size: 2.6rem;
  font-weight: 900;
  color: var(--accent-color);
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: -1px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  background: none;
  box-shadow: none;
  &::after {
    content: '';
    display: block;
    margin: 1.2rem auto 0 auto;
    width: 90px;
    height: 5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #5eead4, var(--accent-color));
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
  }
`;

const LPMainTitleIcon = styled.span`
  font-size: 2.7rem;
  color: #5eead4;
  filter: drop-shadow(0 0 8px #5eead4aa);
`;

const LPSubBlock = styled(motion.div)`
  margin: 3.5rem 0 2.5rem 0;
  padding: 0 0 2.5rem 0;
  background: none;
  border-radius: 0;
  box-shadow: none;
  position: relative;
  z-index: 1;
`;

const LPSubTitle = styled(motion.h3)`
  font-size: 1.6rem;
  font-weight: 800;
  color: #0ea5e9;
  margin: 0 auto 1.2rem auto;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  max-width: 700px;
  text-align: center;
  justify-content: center;
`;

const LPSubIcon = styled.span`
  font-size: 2rem;
  color: #5eead4;
`;

const LPText = styled.p`
  font-size: 1.18rem;
  color: #334155;
  margin: 0 auto 1.5rem auto;
  max-width: 650px;
  line-height: 1.85;
  text-align: center;
`;

const LPList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto 1.5rem auto;
  max-width: 540px;
  text-align: left;
`;

const LPListItem = styled.li`
  font-size: 1.08rem;
  color: #0ea5e9;
  margin-bottom: 0.9rem;
  padding-left: 2rem;
  position: relative;
  &:before {
    content: '•';
    color: #5eead4;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0.1rem;
  }
`;

const LPExamplesGrid = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const LPExampleCard = styled(motion.div)`
  background: none;
  border-radius: 0;
  box-shadow: none;
  padding: 1.5rem 1rem 1.2rem 1rem;
  min-width: 220px;
  max-width: 300px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  border: none;
`;

const LPExampleIcon = styled.div`
  font-size: 2.1rem;
  color: #0ea5e9;
  margin-bottom: 1.1rem;
`;

const LPExampleTitle = styled.h4`
  font-size: 1.13rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const LPExampleDesc = styled.p`
  color: #334155;
  font-size: 1.01rem;
  text-align: center;
  margin: 0;
`;

// Новый анимированный блок про эффективность лендингов
const LPAnimatedSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem 7rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  z-index: 1;
`;

const LPAnimatedBg = styled(motion.div)`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(94, 234, 212, 0.13) 0%,
    transparent 70%
  );
  filter: blur(80px);
  z-index: 0;
  pointer-events: none;
`;

const LPAnimatedTitle = styled(motion.h2)`
  font-size: 2.7rem;
  font-weight: 900;
  color: var(--accent-color);
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: -1px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;
  &::after {
    content: '';
    display: block;
    margin: 1.2rem auto 0 auto;
    width: 90px;
    height: 5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #5eead4, var(--accent-color));
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
  }
`;

const LPAnimatedSub = styled(motion.h3)`
  font-size: 1.5rem;
  font-weight: 800;
  color: #0ea5e9;
  margin: 0 auto 1.2rem auto;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  max-width: 700px;
  text-align: center;
  justify-content: center;
`;

const LPAnimatedText = styled(motion.p)`
  font-size: 1.18rem;
  color: #334155;
  margin: 0 auto 1.5rem auto;
  max-width: 650px;
  line-height: 1.85;
  text-align: center;
`;

const LPAnimatedList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0 auto 1.5rem auto;
  max-width: 540px;
  text-align: left;
`;

const LPAnimatedListItem = styled(motion.li)`
  font-size: 1.08rem;
  color: #0ea5e9;
  margin-bottom: 0.9rem;
  padding-left: 2rem;
  position: relative;
  &:before {
    content: '•';
    color: #5eead4;
    font-size: 1.2rem;
    position: absolute;
    left: 0;
    top: 0.1rem;
  }
`;

const LPAnimatedExamplesGrid = styled(motion.div)`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const LPAnimatedExampleCard = styled(motion.div)`
  background: none;
  border-radius: 0;
  box-shadow: none;
  padding: 1.5rem 1rem 1.2rem 1rem;
  min-width: 220px;
  max-width: 300px;
  flex: 1 1 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  border: none;
`;

const LPAnimatedExampleIcon = styled.div`
  font-size: 2.1rem;
  color: #0ea5e9;
  margin-bottom: 1.1rem;
`;

const LPAnimatedExampleTitle = styled.h4`
  font-size: 1.13rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const LPAnimatedExampleDesc = styled.p`
  color: #334155;
  font-size: 1.01rem;
  text-align: center;
  margin: 0;
`;

// Новый блок-аргументация эффективности Landing Page
const LPEffectSection = styled(motion.section)`
  position: relative;
  padding: 7rem 2rem 6rem 2rem;
  overflow: hidden;
  z-index: 1;
`;

const LPEffectContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const LPEffectTitle = styled(motion.h2)`
  font-size: 2.7rem;
  font-weight: 900;
  color: var(--accent-color);
  margin-bottom: 3.2rem;
  text-align: center;
  letter-spacing: -1px;
  position: relative;
  z-index: 2;
  &::after {
    content: '';
    display: block;
    margin: 1.2rem auto 0 auto;
    width: 90px;
    height: 5px;
    border-radius: 2px;
    background: linear-gradient(90deg, #5eead4, var(--accent-color));
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
  }
`;

const LPEffectCards = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.2rem;
  margin-bottom: 2.5rem;
`;

const LPEffectCard = styled(motion.div)`
  background: rgba(16, 24, 39, 0.8);
  border-radius: 20px;
  padding: 2.2rem 1.7rem 2rem 1.7rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: all 0.3s ease;
  min-width: 260px;
  max-width: 320px;
  box-shadow: 0 4px 24px rgba(59, 130, 246, 0.07);
  text-align: center;
  &:hover {
    box-shadow: 0 8px 32px rgba(94, 234, 212, 0.13);
    border: 1px solid #5eead4;
    background: rgba(16, 24, 39, 0.92);
  }
`;

const LPEffectIcon = styled.div`
  font-size: 2.3rem;
  color: #5eead4;
  margin-bottom: 1.1rem;
`;

const LPEffectCardTitle = styled.h3`
  font-size: 1.18rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.7rem;
`;

const LPEffectCardDesc = styled.p`
  color: #e0f2fe;
  font-size: 1.01rem;
`;

const LPEffectCta = styled(motion.button)`
  margin: 2.5rem auto 0 auto;
  display: block;
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #5eead4, var(--accent-color));
  color: #fff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 8px 25px rgba(94, 234, 212, 0.18);
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &:hover {
    background: linear-gradient(90deg, var(--accent-color), #5eead4);
    box-shadow: 0 12px 32px rgba(94, 234, 212, 0.25);
    filter: brightness(1.08);
  }
`;

// --- Стили для уникального текстового блока ---
const LandingHowSection = styled.section`
  position: relative;
  margin: 6rem 0 0 0;
  padding: 0;
  background: #0f172a;
  min-height: 420px;
  box-shadow: 0 8px 40px rgba(59, 130, 246, 0.08);
  border-radius: 36px;
  overflow: hidden;
`;
const LandingHowPattern = styled.div`
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    135deg,
    rgba(94, 234, 212, 0.04) 0 2px,
    transparent 2px 40px
  );
  pointer-events: none;
`;
const LandingHowContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
  padding: 4.5rem 2.5rem 4.5rem 2.5rem;
  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem 1rem;
  }
`;
const LandingHowAccentLine = styled.div`
  width: 8px;
  min-width: 8px;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(180deg, #5eead4 0%, #0ea5e9 100%);
  box-shadow: 0 0 24px #5eead4aa;
`;
const LandingHowTitle = styled.h2`
  font-size: 2.3rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 2.2rem;
  line-height: 1.2;
  letter-spacing: -1px;
  text-shadow: 0 2px 10px #0ea5e9aa;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`;
const LandingHowText = styled.div`
  font-size: 1.18rem;
  color: #e0e7ef;
  line-height: 1.85;
  max-width: 800px;
  font-weight: 500;
  .how-accent {
    color: #5eead4;
    font-weight: 700;
    letter-spacing: 0.5px;
  }
  .how-quote {
    display: block;
    margin: 2.5rem 0 0 0;
    font-size: 1.15rem;
    color: #0ea5e9;
    font-style: italic;
    background: rgba(94, 234, 212, 0.07);
    border-left: 5px solid #5eead4;
    padding: 1.1rem 1.5rem;
    border-radius: 0 18px 18px 0;
    box-shadow: 0 2px 12px #5eead422;
  }
  b {
    color: #fff;
    font-weight: 800;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
    padding: 0;
  }
`;

// --- Стили для steps-листа ---
const LandingHowSteps = styled.div`
  display: flex;
  gap: 2.2rem;
  margin: 2.5rem 0 2.5rem 0;
  justify-content: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.2rem;
    margin: 2rem 0 2rem 0;
  }
`;
const LandingHowStepItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  box-shadow: 0 2px 12px #5eead422;
  padding: 1.7rem 1.3rem 1.3rem 1.3rem;
  min-width: 170px;
  max-width: 210px;
  flex: 1 1 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid transparent;
  transition: box-shadow 0.3s, border 0.3s;
  cursor: pointer;
  &:hover {
    border: 2px solid #5eead4;
    background: rgba(94, 234, 212, 0.13);
  }
`;
const LandingHowStepIcon = styled.div`
  font-size: 2.2rem;
  color: #5eead4;
  margin-bottom: 0.7rem;
`;
const LandingHowStepTitle = styled.h4`
  font-size: 1.08rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.4rem;
`;
const LandingHowStepDesc = styled.p`
  color: #e0e7ef;
  font-size: 0.98rem;
  margin: 0;
`;

// --- Стили для блока LPWhatNeedSection ---
const LPWhatNeedSection = styled.section`
  position: relative;
  padding: 0;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  min-height: 340px;
  overflow: hidden;
`;
const LPWhatNeedContent = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2.5rem;
  padding: 4rem 2.5rem 4rem 2.5rem;
  position: relative;
  z-index: 2;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem 1rem;
  }
`;
const LPWhatNeedAccentLine = styled.div`
  width: 8px;
  min-width: 8px;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(180deg, #5eead4 0%, #0ea5e9 100%);
  box-shadow: 0 0 24px #5eead4aa;
`;
const LPWhatNeedTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 2.2rem;
  line-height: 1.2;
  letter-spacing: -1px;
  text-align: center;
  text-shadow: 0 2px 10px #0ea5e9aa;
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;
const LPWhatNeedSubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 800;
  color: #5eead4;
  margin-bottom: 1.1rem;
  margin-top: 1.7rem;
  line-height: 1.3;
  @media (max-width: 600px) {
    font-size: 1.05rem;
    margin-top: 1.1rem;
  }
`;
const LPWhatNeedText = styled.p`
  font-size: 1.08rem;
  color: #f1f5f9;
  line-height: 1.8;
  margin-bottom: 0.7rem;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 0.98rem;
  }
`;

// --- Стили для иллюстрации и анимации ---
const LPWhatNeedIllustration = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  margin-left: 2.5rem;
  @media (max-width: 900px) {
    margin: 2.5rem 0 0 0;
    min-width: 0;
    width: 100%;
  }
`;

// --- Современные карточки для LPWhatNeedSection ---
const LPWhatNeedCards = styled.div`
  gap: 2.5rem;
  margin-top: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
const LPWhatNeedCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(18px);
  border-radius: 28px;
  box-shadow: 0 4px 24px rgba(59, 130, 246, 0.1);
  border: 1.5px solid rgba(94, 234, 212, 0.13);
  padding: 2.2rem 2rem 2rem 2rem;
  flex: 1 1 0;
  min-width: 260px;
  max-width: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  transition: box-shadow 0.3s, border 0.3s, background 0.3s;
  z-index: 1;

  height: 582px;
`;
const LPWhatNeedCardIcon = styled.div`
  font-size: 2.7rem;
  margin-bottom: 1.2rem;
  color: #5eead4;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(94, 234, 212, 0.08);
  border-radius: 18px;
  width: 64px;
  height: 64px;
  box-shadow: 0 2px 12px #5eead422;
`;
const LPWhatNeedCardTitle = styled.h3`
  font-size: 1.22rem;
  font-weight: 800;
  color: #5eead4;
  margin-bottom: 1.1rem;
  margin-top: 0.2rem;
  line-height: 1.3;
`;
const LPWhatNeedCardText = styled.p`
  font-size: 1.08rem;
  color: #f1f5f9;
  line-height: 1.8;
  margin-bottom: 0.7rem;
  font-weight: 500;
`;

// --- Уникальный блок сравнения ---
const LPUniqueCompareSection = styled.section`
  position: relative;
  padding: 6rem 0;
  min-height: 400px;
  overflow: hidden;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #5eead4, transparent);
  }
`;

const LPUniqueCompareBg = styled.div`
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(94, 234, 212, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(14, 165, 233, 0.08) 0%, transparent 50%),
    repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0px 2px, transparent 2px 40px);
  pointer-events: none;
  z-index: 0;
`;

const LPUniqueCompareContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LPUniqueCompareTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 4rem;
  text-align: center;
  letter-spacing: -1px;
  line-height: 1.3;
  background: linear-gradient(135deg, #fff 0%, #5eead4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(14, 165, 233, 0.3);
  
  span {
    font-size: 1.2em;
    margin-right: 0.5rem;
    display: inline-block;
    vertical-align: middle;
  }
`;

const LPUniqueCompareSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  width: 100%;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LPUniqueCompareVs = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: #5eead4;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(94, 234, 212, 0.1);
    z-index: -1;
    animation: pulse 2s infinite ease-in-out;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LPUniqueCompareCol = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(94, 234, 212, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  backdrop-filter: blur(12px);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(94, 234, 212, 0.3);
    box-shadow: 0 20px 40px rgba(94, 234, 212, 0.1);
  }
`;

const LPUniqueCompareColTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #5eead4;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background: #5eead4;
    border-radius: 50%;
  }
`;

const LPUniqueCompareColDesc = styled.p`
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.8;
  
  span {
    font-size: 1.4em;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

const LPUniqueCompareText = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 3rem 0 2rem;
  text-align: center;
  background: linear-gradient(135deg, #5eead4 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LPUniqueCompareDesc = styled.p`
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.8;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 3rem;
`;

const LPUniqueCompareListTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin: 2rem 0 1.5rem;
  text-align: center;
`;

const LPUniqueCompareList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  width: 100%;
  margin-bottom: 3rem;
`;

const LPUniqueCompareListItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: rgba(30, 41, 59, 0.3);
  border: 1px solid rgba(94, 234, 212, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(94, 234, 212, 0.08);
    border-color: rgba(94, 234, 212, 0.2);
    transform: translateX(5px);
  }
`;

const LPUniqueCompareListIcon = styled.span`
  font-size: 1.2rem;
  color: #5eead4;
  flex-shrink: 0;
`;

const LPUniqueCompareFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  margin-top: 2rem;
`;

const LPUniqueCompareFeature = styled(motion.div)`
  background: rgba(30, 41, 59, 0.4);
  border: 1px solid rgba(94, 234, 212, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(94, 234, 212, 0.2);
    transform: translateY(-5px);
  }
`;

const LPUniqueCompareFeatureIcon = styled.span`
  font-size: 2rem;
  line-height: 1;
`;

const LPUniqueCompareFeatureText = styled.p`
  font-size: 1rem;
  color: #94a3b8;
  line-height: 1.6;
`;

export default LandingPage;
