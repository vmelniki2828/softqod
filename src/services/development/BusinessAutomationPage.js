import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaChartLine,
  FaCog,
  FaBuilding,
  FaBrain,
  FaClipboardCheck,
  FaRegLightbulb,
  FaChartBar,
  FaCoins,
  FaBolt,
  FaPlus,
} from 'react-icons/fa';
import Modal from '../../components/Modal';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../../config/emailjs';

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

// Добавляем компоненты секции FAQ
const fadeInScale = keyframes`
  0% { transform: scale(0.9); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
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
  
  @media (max-width: 992px) {
    padding-top: 80px;
  }
  
  @media (max-width: 576px) {
    padding-top: 60px;
  }
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
  
  @media (max-width: 992px) {
    padding: 1.5rem;
    min-height: 90vh;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
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

  @media (max-width: 992px) {
    font-size: 3.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
    margin-bottom: 1rem;
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
    
    @media (max-width: 576px) {
      width: 60px;
      height: 2px;
    }
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

  @media (max-width: 992px) {
    font-size: 1.3rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const PhoneContainer = styled(motion.div)`
  width: 300px;
  height: 500px;
  position: relative;
  perspective: 1000px;
  margin: 0 auto;

  @media (max-width: 992px) {
    width: 260px;
    height: 450px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 400px;
  }
  
  @media (max-width: 576px) {
    width: 180px;
    height: 350px;
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
      rgba(94, 234, 212, 0.05) 0%,
      transparent 50%
    );
    z-index: 0;
  }
`;

const PhoneScreen = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
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

// const OrbitingDot = styled(motion.div)`
//   position: absolute;
//   width: 20px;
//   height: 20px;
//   background: linear-gradient(135deg, #60a5fa 0%, #5eead4 100%);
//   border-radius: 50%;
//   top: ${props => props.top}%;
//   left: ${props => props.left}%;
//   box-shadow: 0 0 20px rgba(94, 234, 212, 0.5);
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
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    margin: 3rem auto 0;
    gap: 1rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    margin: 2rem auto 0;
    padding: 0 1rem;
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

  @media (max-width: 576px) {
    padding: 1rem;
    gap: 0.75rem;
  }

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
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const HeroBenefitContent = styled.div`
  flex: 1;
`;

const HeroBenefitTitle = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.5rem;
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 0.25rem;
  }
`;

const HeroBenefitDescription = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.4;
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const InfoSection = styled(motion.section)`
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 992px) {
    padding: 6rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 4rem 1rem;
  }

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
  
  @media (max-width: 992px) {
    padding: 2.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    margin: 0 1rem;
  }
`;

const InfoTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

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

const InfoSummary = styled(motion.p)`
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

const BenefitsSection = styled(motion.section)`
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  
  @media (max-width: 992px) {
    padding: 6rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 4rem 1rem;
  }

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
  
  @media (max-width: 576px) {
    margin: 0 1rem;
  }
`;

const BenefitsTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;
    
    @media (max-width: 576px) {
      width: 80px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const BenefitCardContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 576px) {
    gap: 1rem;
    margin-bottom: 2rem;
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
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
  isolation: isolate;
  
  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    gap: 1rem;
    margin-top: 2rem;
    border-radius: 16px;
    backdrop-filter: none;
    background: rgba(16, 24, 39, 0.8);
  }
  
  @media (max-width: 576px) {
    padding: 2rem 1.5rem;
    gap: 0.8rem;
    margin-top: 1.5rem;
    border-radius: 12px;
    backdrop-filter: none;
    background: rgba(16, 24, 39, 0.9);
  }

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
    pointer-events: none;
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
    pointer-events: none;
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
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const FaqCtaButton = styled.button`
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(90deg, #06b6d4, #3b82f6);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(94, 234, 212, 0.2);
  transition: all 0.3s ease;
  position: relative;
  z-index: 9999;
  display: block;
  margin: 0 auto;
  
  /* Мобильные оптимизации */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  touch-action: manipulation;
  pointer-events: auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(94, 234, 212, 0.4);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 4px 10px rgba(94, 234, 212, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    width: 100%;
    max-width: 320px;
    
    /* Убираем hover на мобильных */
    &:hover {
      transform: none;
      box-shadow: 0 8px 20px rgba(94, 234, 212, 0.2);
    }
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    max-width: 280px;
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

// CTA Button Component
const CtaButton = styled(motion.button)`
  padding: 1.3rem 3rem;
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
  
  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 1.1rem;
  }
  
  @media (max-width: 576px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

// Benefit Components
const BenefitIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(59, 130, 246, 0.8) 100%
  );
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 2rem;
  box-shadow: 0 10px 20px rgba(94, 234, 212, 0.3);
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }
`;

const BenefitCardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const BenefitsDecoration = styled.div`
  position: absolute;
  top: 20%;
  right: -150px;
  width: 300px;
  height: 300px;
  border: 2px dashed rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: ${rotate} 20s linear infinite;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    width: 150px;
    height: 150px;
    border: 1px solid rgba(94, 234, 212, 0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${rotate} 15s linear infinite reverse;
  }

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: var(--accent-color);
    border-radius: 50%;
    top: 10%;
    right: 20%;
    animation: ${pulse} 2s infinite ease-in-out;
  }
`;

// Workflow Section Components
const WorkflowSection = styled(motion.section)`
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  
  @media (max-width: 992px) {
    padding: 6rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 4rem 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 30% 20%,
        rgba(94, 234, 212, 0.08) 0%,
        transparent 25%
      ),
      radial-gradient(
        circle at 70% 80%,
        rgba(59, 130, 246, 0.08) 0%,
        transparent 25%
      );
    z-index: 1;
  }
`;

const ServicesWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom right, var(--bg-primary) 49%, transparent 51%);
  z-index: 2;
`;

const WorkflowContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
  
  @media (max-width: 992px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const WorkflowTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;
    
    @media (max-width: 576px) {
      width: 80px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const WorkflowContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.5rem;
  }
`;

const WorkflowIntro = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const WorkflowStepsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    gap: 2rem;
    margin: 2rem 0;
  }
  
  @media (max-width: 576px) {
    gap: 1.5rem;
    margin: 1.5rem 0;
  }
`;

const WorkflowStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  background: rgba(16, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    gap: 1rem;
    flex-direction: column;
    text-align: center;
  }

  &:hover {
    border-color: rgba(94, 234, 212, 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`;

const WorkflowStepNumber = styled.div`
  width: 60px;
  height: 60px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 10px 20px rgba(94, 234, 212, 0.3);
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const WorkflowStepIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const WorkflowStepCircle = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(94, 234, 212, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--accent-color);
  
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const WorkflowStepContent = styled.div`
  flex: 1;
`;

const WorkflowStepTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`;

const WorkflowStepDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const WorkflowSummary = styled(motion.p)`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8;
  color: var(--text-primary);
  text-align: center;
  max-width: 800px;
  margin: 3rem auto 0;
  padding: 2rem;
  background: rgba(94, 234, 212, 0.05);
  border-radius: 16px;
  border-left: 4px solid var(--accent-color);
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 2rem auto 0;
    padding: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin: 1.5rem auto 0;
    padding: 1rem;
  }
`;

const ServicesBgDecoration = styled.div`
  position: absolute;
  bottom: 10%;
  left: -100px;
  width: 200px;
  height: 200px;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: ${rotate} 25s linear infinite;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid rgba(94, 234, 212, 0.1);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${rotate} 20s linear infinite reverse;
  }
`;

const ServicesBgGlow = styled.div`
  position: absolute;
  top: 30%;
  right: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.05) 0%,
    transparent 70%
  );
  border-radius: 50%;
  animation: ${floatVertical} 12s infinite ease-in-out;
  z-index: 0;
`;

// WhyUs Section Components
const WhyUsSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 1) 100%
  );
  overflow: hidden;
  
  @media (max-width: 992px) {
    padding: 6rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 4rem 1rem;
  }

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
  
  @media (max-width: 992px) {
    padding: 0 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const WhyUsTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;
    
    @media (max-width: 576px) {
      width: 80px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const WhyUsIntro = styled(motion.p)`
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  max-width: 800px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const BenefitsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 576px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const BenefitItem = styled(motion.div)`
  background: rgba(16, 24, 39, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
  height: 100%;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 16px;
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

const BenefitCardGlow = styled.div`
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

  ${BenefitItem}:hover & {
    opacity: 1;
    transform: scale(1);
  }
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
  transform: scale(0.8);

  ${BenefitItem}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

const ResultsSummary = styled(motion.div)`
  background: rgba(16, 24, 39, 0.4);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 4rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin-bottom: 3rem;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const ResultsTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const ResultsText = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const ResultsHighlight = styled.span`
  color: var(--accent-color);
  font-weight: 600;
  background: linear-gradient(90deg, rgba(94, 234, 212, 0.1), rgba(59, 130, 246, 0.1));
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
`;

const WhyUsAction = styled(motion.div)`
  text-align: center;
  
  @media (max-width: 576px) {
    margin-top: 1rem;
  }
`;

const PulsingButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(59, 130, 246, 0.9) 100%
  );
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(94, 234, 212, 0.3);
  
  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }

  .glow-effect {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.6s ease;
  }

  &:hover .glow-effect {
    left: 100%;
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
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.05) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: ${floatVertical} 8s infinite ease-in-out;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 30%;
    right: -15%;
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.05) 0%,
      transparent 70%
    );
    border-radius: 50%;
    animation: ${floatVertical} 10s infinite ease-in-out reverse;
  }
  
  @media (max-width: 992px) {
    &::before {
      width: 200px;
      height: 200px;
    }
    
    &::after {
      width: 250px;
      height: 250px;
    }
  }
  
  @media (max-width: 576px) {
    &::before {
      width: 150px;
      height: 150px;
      left: -20%;
    }
    
    &::after {
      width: 180px;
      height: 180px;
      right: -25%;
    }
  }
`;

// CTA Section Components
const CtaSection = styled(motion.section)`
  position: relative;
  padding: 120px 0;
  background: linear-gradient(
    135deg,
    var(--bg-secondary) 0%,
    #1e1b2e 40%,
    #2a1f3d 100%
  );
  overflow: hidden;
  border-top: 1px solid rgba(147, 51, 234, 0.2);
  
  @media (max-width: 992px) {
    padding: 80px 0;
  }
  
  @media (max-width: 576px) {
    padding: 60px 0;
  }
`;

const CtaWaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom right, var(--bg-primary) 49%, transparent 51%);
  z-index: 1;
`;

const CtaContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 992px) {
    max-width: 700px;
    padding: 0 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;

const CtaGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(94, 234, 212, 0.1) 0%,
    transparent 70%
  );
  animation: ${glow} 4s infinite alternate;
  
  &.circle-1 {
    width: 400px;
    height: 400px;
    top: 10%;
    left: -10%;
  }
  
  &.circle-2 {
    width: 300px;
    height: 300px;
    bottom: 10%;
    right: -10%;
    animation-delay: 2s;
  }
  
  @media (max-width: 992px) {
    &.circle-1 {
      width: 300px;
      height: 300px;
    }
    
    &.circle-2 {
      width: 250px;
      height: 250px;
    }
  }
  
  @media (max-width: 576px) {
    &.circle-1 {
      width: 200px;
      height: 200px;
      top: 5%;
    }
    
    &.circle-2 {
      width: 150px;
      height: 150px;
      bottom: 5%;
    }
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
  
  @media (max-width: 576px) {
    padding: 2rem 1rem;
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
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
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
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
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
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin: 2rem 0;
    padding: 1.2rem;
  }
`;

const CtaForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  margin: 0 auto 2.5rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 576px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
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
    transition: color 0.3s ease;
  }
  
  &:focus::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  @media (max-width: 576px) {
    padding: 1rem 1.2rem;
    font-size: 1rem;
  }
`;

const FormCtaButton = styled(motion.button)`
  padding: 1.3rem 2rem;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(59, 130, 246, 0.9) 100%
  );
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
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
  
  @media (max-width: 576px) {
    padding: 1.1rem 1.5rem;
    font-size: 1.1rem;
  }
`;

const CtaFooterText = styled(motion.p)`
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0.8;
  text-align: center;
  margin-top: 2.5rem;
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-top: 2rem;
  }
`;

const CtaDecoration = styled.div`
  position: absolute;
  top: 50%;
  right: -200px;
  width: 300px;
  height: 300px;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(94, 234, 212, 0.05) 50%,
    transparent 70%
  );
  border-radius: 50%;
  transform: translateY(-50%);
  animation: ${floatVertical} 6s infinite ease-in-out;
  
  @media (max-width: 992px) {
    right: -150px;
    width: 250px;
    height: 250px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Error and Success Messages
const ErrorMessage = styled(motion.div)`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #fca5a5;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  padding: 1rem;
  color: #86efac;
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
`;

const BusinessAutomationPage = () => {
  // Add modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // Business Automation form states
  const [automationFormData, setAutomationFormData] = useState({
    from_name: '',
    phone: '',
    from_email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const [stars, setStars] = useState([]);
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
  }, []);

  const benefitsData = [
    {
      icon: <FaChartLine />,
      title: 'Збільшення ефективності',
      description:
        'Автоматизація рутинних процесів дозволяє співробітникам зосередитись на важливих завданнях.',
    },
    {
      icon: <FaChartBar />,
      title: 'Підвищення прибутку',
      description:
        'Оптимізація бізнес-процесів веде до зменшення витрат та зростання доходів.',
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Контроль якості',
      description:
        'Автоматизація зменшує кількість помилок та покращує якість продукції або послуг.',
    },
  ];

  // Функция для переключения состояния аккордеона
  const toggleFaq = index => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(item => item !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  // Business Automation form functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAutomationFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Скидаємо помилку при зміні полів
    if (error) {
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Валідація обов'язкових полів
    const requiredFields = ['from_name', 'from_email'];
    const emptyFields = requiredFields.filter(field => !automationFormData[field].trim());
    
    if (emptyFields.length > 0) {
      setError('Будь ласка, заповніть всі обов\'язкові поля (Ім\'я, Email)');
      return;
    }
    
    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(automationFormData.from_email)) {
      setError('Будь ласка, введіть коректний email адрес');
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      // Створюємо повідомлення для форми автоматизації
      const templateParams = {
        from_name: automationFormData.from_name,
        from_email: automationFormData.from_email,
        phone: automationFormData.phone || 'Не вказано',
        service: 'Автоматизація та оптимізація бізнес-процесів',
        message: `Заявка на консультацію з автоматизації бізнес-процесів від ${automationFormData.from_name}. Телефон: ${automationFormData.phone || 'Не вказано'}`
      };

      // Відправка через EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.USER_ID
      );
      
      console.log('Business Automation form sent successfully:', result);
      setIsSubmitted(true);
      
      // Логування для аналітики
      console.log('Business Automation lead generated:', {
        name: automationFormData.from_name,
        email: automationFormData.from_email,
        phone: automationFormData.phone,
        timestamp: new Date().toISOString(),
        service: 'Автоматизація та оптимізація бізнес-процесів'
      });
      
      // Очищуємо форму після успішної відправки
      setTimeout(() => {
        setAutomationFormData({
          from_name: '',
          phone: '',
          from_email: ''
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (err) {
      console.error('Business Automation form sending failed:', err);
      setError('Помилка відправки повідомлення. Спробуйте ще раз або зв\'яжіться з нами безпосередньо.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMobileClick = (e) => {
    console.log('Button clicked!', e.type, e.target);
    e.preventDefault();
    e.stopPropagation();
    openModal();
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
          Автоматизація та оптимізація бізнес-процесів
        </Title>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          В сучасних умовах бізнес не може дозволити собі неефективність. Кожна
          зайва дія, затримка або помилка обходяться дорого. Ми пропонуємо
          послугу автоматизації та оптимізації бізнес-процесів, яка дозволяє
          компаніям працювати швидше, витрачати менше ресурсів і забезпечувати
          стабільне зростання прибутку.
        </Subtitle>

        <PhoneContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Phone
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            initial={{ opacity: 0 }}
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
                  <FaCog />
                </IconCircle>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  Бізнес Автоматизація
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  Ефективність і контроль
                </motion.p>
              </PhoneContent>

              <PhoneApps>
                <AppIcon whileHover={{ scale: 1.2 }}>
                  <FaChartLine />
                </AppIcon>
                <AppIcon whileHover={{ scale: 1.2 }}>
                  <FaBuilding />
                </AppIcon>
                <AppIcon whileHover={{ scale: 1.2 }}>
                  <FaBrain />
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
          {benefitsData.map((benefit, index) => (
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}
        >
          <CtaButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleMobileClick}
          >
            Дізнатися більше
          </CtaButton>
        </motion.div>
      </HeroSection>

      <InfoSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <InfoContainer>
          <InfoTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Наші рішення для вашого бізнесу
          </InfoTitle>

          <InfoContent>
            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ми пропонуємо не стандартні пакети, а індивідуальні рішення,
              розроблені спеціально під ваш бізнес. Перед стартом роботи ми
              аналізуємо структуру компанії, визначаємо сильні та слабкі сторони
              процесів, а також оцінюємо потенціал для автоматизації.
            </InfoText>

            <InfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Комплексна автоматизація включає побудову систем управління
              завданнями, документообігом, продажами, взаємодією з клієнтами
              (CRM) та постачальниками. Ми інтегруємо інструменти, які спрощують
              облік, зменшують кількість ручної роботи та мінімізують ризик
              помилок. В результаті ви отримуєте не просто окремі автоматизовані
              процеси, а єдину узгоджену екосистему, яка допомагає вашій команді
              досягати цілей швидше.
            </InfoText>

            <InfoSummary
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Що важливо, ми не залишаємо клієнта після впровадження: наші
              фахівці супроводжують процес адаптації, оновлюють рішення
              відповідно до змін у бізнесі та технологіях.
            </InfoSummary>

            <FeaturesList>
              {[
                'Аналіз бізнес-процесів та потреб компанії',
                'Розробка індивідуальної стратегії автоматизації',
                'Впровадження CRM та систем документообігу',
                'Створення єдиної екосистеми для управління бізнесом',
                'Навчання персоналу та технічна підтримка',
              ].map((feature, index) => (
                <FeatureItem
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  whileHover={{ x: 10 }}
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
            Переваги автоматизації та оптимізації бізнес-процесів
          </BenefitsTitle>

          <InfoText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: '2rem' }}
          >
            Чому зараз саме час інвестувати в автоматизацію? Тому що це вже не
            конкурентна перевага, а необхідність для виживання та розвитку на
            ринку.
          </InfoText>

          <BenefitCardContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: 'Економія ресурсів',
                description:
                  'Автоматизовані процеси дозволяють істотно скоротити витрати на операційний персонал, зменшити час виконання задач і оптимізувати використання технічних ресурсів.',
                icon: <FaChartLine />,
              },
              {
                title: 'Підвищення прибутковості',
                description:
                  'Оптимізація процесів призводить до більшої продуктивності співробітників без необхідності збільшувати чисельність персоналу. Ваш бізнес отримує можливість обслуговувати більше клієнтів і виконувати більше замовлень без додаткових витрат.',
                icon: <FaChartBar />,
              },
              {
                title: 'Зниження кількості помилок і ризиків',
                description:
                  "Ручна обробка даних завжди пов'язана з ризиком неточностей. Автоматизація дозволяє мінімізувати людський фактор, що критично важливо для фінансових операцій, обліку товарів, ведення проектної документації.",
                icon: <FaClipboardCheck />,
              },
              {
                title: 'Кращий контроль і прозорість',
                description:
                  'Автоматизовані процеси забезпечують кращий контроль і прозорість бізнесу. Керівники в реальному часі бачать стан справ, що дозволяє оперативно ухвалювати управлінські рішення.',
                icon: <FaRegLightbulb />,
              },
            ].map((benefit, index) => (
              <BenefitCard
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
                  borderColor: 'rgba(94, 234, 212, 0.4)',
                }}
              >
                <BenefitIconWrapper>{benefit.icon}</BenefitIconWrapper>
                <BenefitContent>
                  <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                  <BenefitCardDescription>
                    {benefit.description}
                  </BenefitCardDescription>
                </BenefitContent>
              </BenefitCard>
            ))}
          </BenefitCardContainer>

          <CtaButton
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 25px rgba(94, 234, 212, 0.5)',
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={handleMobileClick}
          >
            Почати оптимізацію бізнесу
          </CtaButton>
        </BenefitsContainer>

        <BenefitsDecoration />
      </BenefitsSection>

      <WorkflowSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ServicesWave />

        <WorkflowContainer>
          <WorkflowTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Як ми працюємо
          </WorkflowTitle>

          <WorkflowContent>
            <WorkflowIntro
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Наша співпраця починається з безкоштовної консультації, на якій ми
              обговорюємо завдання вашого бізнесу та визначаємо потенційні
              напрями для оптимізації.
            </WorkflowIntro>

            <WorkflowStepsList
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  title: 'Аудит бізнес-процесів',
                  description:
                    'Ми проводимо глибокий аудит процесів. Це включає аналіз існуючих бізнес-операцій, виявлення вузьких місць, дублювань функцій та надмірних витрат ресурсів.',
                  icon: <FaClipboardCheck />,
                },
                {
                  title: 'Розробка індивідуального рішення',
                  description:
                    'На основі аудиту розробляється індивідуальне рішення. Ми підбираємо оптимальні інструменти — від CRM та ERP-систем до спеціалізованих програм для виробництва, логістики чи бухгалтерського обліку.',
                  icon: <FaBrain />,
                },
                {
                  title: 'Впровадження та навчання',
                  description:
                    'Етап впровадження передбачає налаштування систем, інтеграцію між собою та тестування рішень в умовах реального бізнесу. Ми також навчаємо персонал користуватися новими інструментами для досягнення максимальної ефективності.',
                  icon: <FaCog />,
                },
                {
                  title: 'Підтримка та розвиток',
                  description:
                    'Після запуску ми забезпечуємо постійну підтримку та розвиток — оновлюємо рішення, додаємо нові функції у відповідь на потреби компанії, консультуємо і допомагаємо вашому бізнесу залишатися на крок попереду конкурентів.',
                  icon: <FaRocket />,
                },
              ].map((step, index) => (
                <WorkflowStep
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <WorkflowStepNumber>{index + 1}</WorkflowStepNumber>
                  <WorkflowStepIcon>
                    <WorkflowStepCircle>{step.icon}</WorkflowStepCircle>
                  </WorkflowStepIcon>
                  <WorkflowStepContent>
                    <WorkflowStepTitle>{step.title}</WorkflowStepTitle>
                    <WorkflowStepDescription>
                      {step.description}
                    </WorkflowStepDescription>
                  </WorkflowStepContent>
                </WorkflowStep>
              ))}
            </WorkflowStepsList>

            <WorkflowSummary
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ми не просто впроваджуємо технології — ми створюємо комплексні
              рішення, які реально підвищують ефективність вашого бізнесу.
            </WorkflowSummary>
          </WorkflowContent>

          <ServicesBgDecoration />
        </WorkflowContainer>

        <ServicesBgGlow />
      </WorkflowSection>

      <WhyUsSection
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
            Що ви отримаєте, обравши нас
          </WhyUsTitle>

          <WhyUsIntro
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Замовляючи послугу автоматизації бізнес-процесів у нас, ви
            інвестуєте не просто в технології, а у свій результат. Основні
            вигоди для наших клієнтів:
          </WhyUsIntro>

          <BenefitsList
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: 'Скорочення витрат на 20–40%',
                description:
                  'Оптимізація ресурсів та мінімізація надлишкових операцій дозволяє суттєво знизити операційні витрати бізнесу.',
                icon: <FaCoins />,
              },
              {
                title: 'Прискорення бізнес-операцій у 1,5–2 рази',
                description:
                  'Автоматизовані процеси виконуються швидше та ефективніше, що підвищує продуктивність всієї компанії.',
                icon: <FaBolt />,
              },
              {
                title: 'Підвищення точності обліку та звітності',
                description:
                  'Мінімізація людського фактору забезпечує вищу точність даних та надійність прийняття рішень.',
                icon: <FaChartBar />,
              },
              {
                title: 'Підвищення лояльності клієнтів',
                description:
                  'Швидше та якісніше обслуговування клієнтів завдяки оптимізованим процесам та налагодженим комунікаціям.',
                icon: <FaRegLightbulb />,
              },
              {
                title: 'Більша прозорість і контроль',
                description:
                  'Повний огляд всіх етапів діяльності компанії в реальному часі для оперативного управління.',
                icon: <FaClipboardCheck />,
              },
            ].map((benefit, index) => (
              <BenefitItem
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  rotateY: 5,
                  rotateX: -5,
                }}
              >
                <BenefitCardGlow />
                <BenefitIconWrapper>{benefit.icon}</BenefitIconWrapper>
                <BenefitCardTitle>{benefit.title}</BenefitCardTitle>
                <BenefitCardDescription>
                  {benefit.description}
                </BenefitCardDescription>
                <CardAccent />
              </BenefitItem>
            ))}
          </BenefitsList>

          <ResultsSummary
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <ResultsTitle>Підтверджені результати наших клієнтів:</ResultsTitle>
            <ResultsText>
              Виробничі компанії, які скористались нашими рішеннями, збільшили
              оборот на <ResultsHighlight>30%</ResultsHighlight> без суттєвого
              зростання витрат, а логістичні оператори змогли скоротити час
              обробки замовлень на <ResultsHighlight>40%</ResultsHighlight>.
            </ResultsText>
            <ResultsText style={{ marginTop: '1.5rem' }}>
              Ми орієнтовані не на гучні обіцянки, а на реальні зміни у вашому
              бізнесі.
            </ResultsText>
          </ResultsSummary>

          <WhyUsAction
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <PulsingButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleMobileClick}
            >
              <span className="glow-effect"></span>
              Розпочати автоматизацію
            </PulsingButton>
          </WhyUsAction>
        </WhyUsContainer>

        <WhyUsBackgroundShapes />
      </WhyUsSection>

      <CtaSection
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
              Замовте автоматизацію бізнес-процесів уже сьогодні!
            </CtaTitle>

            <CtaText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Не відкладайте оптимізацію на потім — саме зараз у вас є
              можливість вивести бізнес на новий рівень. Залиште заявку на
              консультацію, і ми запропонуємо рішення, яке працюватиме саме для
              вас.
            </CtaText>

            <CtaHighlight
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Натисніть кнопку "Замовити консультацію", щоб отримати
              персоналізовану стратегію розвитку вашого бізнесу через
              автоматизацію.
            </CtaHighlight>

            <CtaForm
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              onSubmit={handleSubmit}
            >
              {/* Повідомлення про помилку */}
              {error && (
                <ErrorMessage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {error}
                </ErrorMessage>
              )}

              {/* Повідомлення про успішну відправку */}
              {isSubmitted && (
                <SuccessMessage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Дякуємо! Ваша заявка надіслана. Ми зв'яжемося з вами найближчим часом.
                </SuccessMessage>
              )}

              <CtaInputWrapper>
                <CtaInput 
                  type="text" 
                  placeholder="Ваше ім'я *" 
                  name="from_name"
                  value={automationFormData.from_name}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                <CtaInputBg />
              </CtaInputWrapper>

              <CtaInputWrapper>
                <CtaInput 
                  type="tel" 
                  placeholder="Телефон" 
                  name="phone"
                  value={automationFormData.phone}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                />
                <CtaInputBg />
              </CtaInputWrapper>

              <CtaInputWrapper>
                <CtaInput 
                  type="email" 
                  placeholder="Email *" 
                  name="from_email"
                  value={automationFormData.from_email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  required
                />
                <CtaInputBg />
              </CtaInputWrapper>

              <FormCtaButton
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? {
                  scale: 1.03,
                  boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
                } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                style={{
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Відправляємо...' : 'Замовити консультацію'}
              </FormCtaButton>
            </CtaForm>

            <CtaFooterText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Один крок до ефективного та прибуткового бізнесу. Почніть
              отримувати більше від своїх процесів уже сьогодні!
            </CtaFooterText>
          </CtaContent>

          <CtaDecoration />
        </CtaContainer>
      </CtaSection>

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
                question: 'Що включає послуга автоматизації бізнес-процесів?',
                answer:
                  'Послуга охоплює аналіз існуючих процесів, розробку індивідуальних рішень, впровадження програмного забезпечення, навчання співробітників і подальшу технічну підтримку.',
              },
              {
                question: 'Для яких бізнесів підходить автоматизація?',
                answer:
                  'Автоматизація підходить компаніям будь-якого розміру — від малого бізнесу до великих підприємств у сферах виробництва, логістики, торгівлі, послуг та IT.',
              },
              {
                question: 'Які результати можна очікувати після впровадження?',
                answer:
                  'Зазвичай бізнес отримує економію часу та ресурсів, зменшення кількості помилок, підвищення продуктивності та прозорість управління.',
              },
              {
                question: 'Скільки часу займає процес автоматизації?',
                answer:
                  'Тривалість залежить від складності проекту. Середній термін впровадження — від 4 до 12 тижнів.',
              },
              {
                question:
                  'Чи потрібно змінювати всю ІТ-інфраструктуру для автоматизації?',
                answer:
                  'Ні, ми інтегруємо нові рішення з існуючими системами. Повна заміна необхідна лише у випадку, якщо поточні рішення суттєво застарілі.',
              },
              {
                question: 'Скільки коштує автоматизація бізнес-процесів?',
                answer:
                  'Вартість визначається індивідуально після аудиту процесів. Вона залежить від масштабу автоматизації, кількості інтеграцій та специфіки бізнесу.',
              },
              {
                question:
                  'Що робити, якщо після впровадження зміняться вимоги бізнесу?',
                answer:
                  'Ми забезпечуємо гнучкість рішень і готові оновлювати та розширювати функціонал відповідно до змін потреб компанії.',
              },
            ].map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
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
                </FaqItemContent>
              </FaqItem>
            ))}
          </FaqList>

          <FaqCta
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <FaqCtaText>
              Маєте додаткові запитання щодо автоматизації бізнес-процесів?
            </FaqCtaText>
            <FaqCtaButton
              onClick={handleMobileClick}
              onTouchStart={handleMobileClick}
              type="button"
            >
              Зв'язатися з експертом
            </FaqCtaButton>
          </FaqCta>

          <FaqDecoration />
        </FaqContainer>
      </FaqSection>

      {/* Modal Window */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
};

// Контейнер и варианты анимации
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

// Стили для блока FAQ
const FaqSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.9) 100%
  );
  overflow: hidden;
  z-index: 0;
  
  @media (max-width: 992px) {
    padding: 6rem 1.5rem;
  }
  
  @media (max-width: 768px) {
    padding: 5rem 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 4rem 1rem;
  }

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

export default BusinessAutomationPage;
