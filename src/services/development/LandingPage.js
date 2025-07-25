import React, { useEffect, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMobile,
  FaRocket,
  FaChartLine,
  FaCog,
  FaShieldAlt,
  FaCoins,
  FaPencilRuler,
  FaTools,
  FaBolt,
  FaBrain,
  FaPlus,
  FaShoppingCart,
  FaCheck,
  FaBriefcase,
  FaGraduationCap,
  FaEye,
  FaLightbulb,
  FaHeart,
  FaHandPointer,
  FaArrowRight,
  FaSearch,
  FaCode,
} from 'react-icons/fa';
import Modal from '../../components/Modal';
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

  @media (max-width: 1024px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
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
  padding: 1rem;

  @media (max-width: 1024px) {
    min-height: 90vh;
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 2rem;
  }

  @media (max-width: 576px) {
    min-height: 70vh;
    padding: 2.8rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem;
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
  max-width: 1390px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    letter-spacing: -0.3px;
  }

  @media (max-width: 576px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    letter-spacing: -0.2px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    letter-spacing: 0;
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

    @media (max-width: 768px) {
      width: 80px;
      height: 2px;
      bottom: -8px;
    }

    @media (max-width: 576px) {
      width: 60px;
      height: 2px;
      bottom: -6px;
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

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    max-width: 700px;
    margin: 0 auto 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
    margin: 0 auto 2rem;
    max-width: 600px;
    line-height: 1.6;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
    padding: 0 0.8rem;
    margin: 0 auto 1.5rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 0.5rem;
    margin: 0 auto 1.2rem;
    line-height: 1.4;
  }
`;

const PhoneContainer = styled(motion.div)`
  width: 280px;
  height: 400px;
  position: relative;
  perspective: 1000px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 260px;
    height: 380px;
  }

  @media (max-width: 768px) {
    width: 240px;
    height: 360px;
    margin: 2rem auto;
  }

  @media (max-width: 576px) {
    width: 220px;
    height: 340px;
    margin: 1.5rem auto;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 320px;
    margin: 1rem auto;
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

  @media (max-width: 768px) {
    border-radius: 32px;
    box-shadow: 0 0 40px rgba(94, 234, 212, 0.4);
  }

  @media (max-width: 480px) {
    border-radius: 28px;
    box-shadow: 0 0 30px rgba(94, 234, 212, 0.5);
  }

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

    @media (max-width: 768px) {
      top: 15px;
      height: 20px;
      width: 35%;
    }

    @media (max-width: 480px) {
      top: 12px;
      height: 18px;
      width: 30%;
    }
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
  top: 45px;
  left: 15px;
  right: 15px;
  bottom: 30px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    top: 35px;
    left: 12px;
    right: 12px;
    bottom: 25px;
    border-radius: 18px;
  }

  @media (max-width: 576px) {
    top: 32px;
    left: 10px;
    right: 10px;
    bottom: 22px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    top: 28px;
    left: 8px;
    right: 8px;
    bottom: 20px;
    border-radius: 14px;
  }
`;

const PhoneStatusBar = styled.div`
  width: 100%;
  height: 24px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  font-size: 0.7rem;
  font-weight: 600;
  color: white;
  flex-shrink: 0;

  &::before {
    content: '9:41';
  }

  &::after {
    content: '100%';
  }

  @media (max-width: 768px) {
    height: 20px;
    padding: 0 10px;
    font-size: 0.65rem;
  }

  @media (max-width: 480px) {
    height: 18px;
    padding: 0 8px;
    font-size: 0.6rem;
  }
`;

const PhoneContent = styled(motion.div)`
  flex: 1;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  text-align: center;
  min-height: 0;
  position: relative;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin: 0.8rem 0 0.3rem 0;
    line-height: 1.3;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 0.8rem;

    h3 {
      font-size: 1rem;
      margin: 0.6rem 0 0.3rem 0;
    }

    p {
      font-size: 0.85rem;
    }
  }

  @media (max-width: 576px) {
    padding: 1rem 0.6rem;

    h3 {
      font-size: 0.9rem;
      margin: 0.5rem 0 0.2rem 0;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem 0.5rem;

    h3 {
      font-size: 0.85rem;
      margin: 0.4rem 0 0.2rem 0;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

const IconCircle = styled(motion.div)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    width: 48px;
    height: 48px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    font-size: 1.1rem;
  }
`;

const PhoneApps = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  width: 100%;
  max-width: 180px;
  margin: 1rem auto 12px;
  padding: 0 1rem;
  justify-items: center;

  @media (max-width: 768px) {
    gap: 0.6rem;
    max-width: 150px;
    margin: 0.8rem auto 5px;
    padding: 0 0.8rem;
  }

  @media (max-width: 576px) {
    gap: 0.5rem;
    max-width: 130px;
    margin: 0.6rem auto 5px;
    padding: 0 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.4rem;
    max-width: 110px;
    margin: 0.5rem auto 5px;
    padding: 0 0.4rem;
  }
`;

const AppIcon = styled(motion.div)`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${props =>
    props.color || 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    font-size: 0.8rem;
  }

  @media (max-width: 576px) {
    width: 24px;
    height: 24px;
    border-radius: 5px;
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    border-radius: 4px;
    font-size: 0.65rem;
  }
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 4rem auto 0;
  max-width: 1200px;
  z-index: 1;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.3rem;
    margin: 3rem auto 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin: 2.5rem auto 0;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    gap: 1rem;
    margin: 2rem auto 0;
    padding: 0 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin: 1.5rem auto 0;
    padding: 0 0.5rem;
  }
`;

const HeroBenefitItem = styled(motion.div)`
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.3rem;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 12px;
    gap: 0.8rem;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 10px;
    gap: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    border-radius: 8px;
    gap: 0.6rem;
  }

  &:hover {
    border-color: rgba(94, 234, 212, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);

    @media (max-width: 768px) {
      transform: translateY(-3px);
    }
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

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
`;

const HeroBenefitContent = styled.div`
  flex: 1;
`;

const HeroBenefitTitle = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
  }
`;

const HeroBenefitDescription = styled.p`
  color: #9ca3af;
  font-size: 0.9rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.3;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

const PWAInfoSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.9) 100%
  );
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    background: linear-gradient(135deg, var(--bg-primary) 0%, transparent 70%);
    opacity: 0.5;
    z-index: 1;

    @media (max-width: 768px) {
      height: 100px;
    }

    @media (max-width: 480px) {
      height: 80px;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 200px;
    clip-path: polygon(100% 100%, 0 100%, 100% 0);
    background: linear-gradient(
      -45deg,
      rgba(94, 234, 212, 0.1) 0%,
      transparent 70%
    );
    z-index: 1;

    @media (max-width: 768px) {
      height: 150px;
    }

    @media (max-width: 480px) {
      height: 100px;
    }
  }
`;

const PWAInfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 3rem;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    gap: 2rem;
    padding: 0 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
`;

const PWAInfoTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
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

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 3px;
      bottom: -12px;
    }

    @media (max-width: 576px) {
      width: 80px;
      height: 2px;
      bottom: -10px;
    }
  }
`;

const PWAInfoContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const PWAInfoText = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const PWAFeaturesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const PWAFeatureItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--text-secondary);

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  &::before {
    content: '✓';
    color: var(--accent-color);
    font-weight: bold;
    margin-right: 1rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      margin-right: 0.8rem;
      font-size: 1.1rem;
    }

    @media (max-width: 576px) {
      margin-right: 0.6rem;
      font-size: 1rem;
    }
  }
`;

const PWASummary = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 500;
  padding: 1.5rem;
  background: rgba(16, 24, 39, 0.6);
  border-radius: 12px;
  border-left: 4px solid var(--accent-color);

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 1.2rem;
    border-radius: 10px;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding: 1rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.8rem;
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }

  &.shape-1 {
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.1) 0%,
      transparent 70%
    );
    top: 20%;
    left: -200px;

    @media (max-width: 768px) {
      left: -150px;
    }

    @media (max-width: 480px) {
      left: -100px;
    }
  }

  &.shape-2 {
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.1) 0%,
      transparent 70%
    );
    bottom: 10%;
    right: -200px;

    @media (max-width: 768px) {
      right: -150px;
    }

    @media (max-width: 480px) {
      right: -100px;
    }
  }
`;

// Основной компонент
const LandingPage = () => {
  const [stars, setStars] = useState([]);
  const [backgroundShapes, setBackgroundShapes] = useState([]);
  // Добавляем состояние для аккордеона FAQ
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();
  const whatIsLandingPage = t('LandingPage.whatIsLandingPage.features', {
    returnObjects: true,
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleMouseMove = useCallback((e, element) => {
    const rect = element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / element.clientWidth) * 100;
    const y = ((e.clientY - rect.top) / element.clientHeight) * 100;
    element.style.setProperty('--mouse-x', `${x}%`);
    element.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.creation-step-card');

    const addMouseEvent = card => {
      card.addEventListener('mousemove', e => handleMouseMove(e, card));
    };

    cards.forEach(addMouseEvent);

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', e => handleMouseMove(e, card));
      });
    };
  }, [handleMouseMove]);

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
          {t('LandingPage.hero.title')}
        </Title>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('LandingPage.hero.subtitle')}
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
              <PhoneStatusBar />
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
                  {t('LandingPage.hero.phoneContent.subtitle')}
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
              <HeroBenefitTitle>
                {t('LandingPage.hero.benefits.title1')}
              </HeroBenefitTitle>
              <HeroBenefitDescription>
                {t('LandingPage.hero.benefits.description1')}
              </HeroBenefitDescription>
            </HeroBenefitContent>
          </HeroBenefitItem>

          <HeroBenefitItem whileHover={{ scale: 1.02 }}>
            <HeroBenefitIcon>
              <FaPencilRuler />
            </HeroBenefitIcon>
            <HeroBenefitContent>
              <HeroBenefitTitle>
                {t('LandingPage.hero.benefits.title2')}
              </HeroBenefitTitle>
              <HeroBenefitDescription>
                {t('LandingPage.hero.benefits.description2')}
              </HeroBenefitDescription>
            </HeroBenefitContent>
          </HeroBenefitItem>

          <HeroBenefitItem whileHover={{ scale: 1.02 }}>
            <HeroBenefitIcon>
              <FaBolt />
            </HeroBenefitIcon>
            <HeroBenefitContent>
              <HeroBenefitTitle>
                {t('LandingPage.hero.benefits.title3')}
              </HeroBenefitTitle>
              <HeroBenefitDescription>
                {t('LandingPage.hero.benefits.description3')}
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
          onClick={openModal}
        >
          {t('LandingPage.hero.buttonText')}
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
            {t('LandingPage.whatIsLandingPage.title')}
          </PWAInfoTitle>

          <PWAInfoContent>
            <PWAInfoText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('LandingPage.whatIsLandingPage.description')}
            </PWAInfoText>

            <PWAFeaturesList>
              {whatIsLandingPage.map((feature, index) => (
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
              {t('LandingPage.whatIsLandingPage.summary')}
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
            {t('LandingPage.landingVsMultiPage.title')}
          </LandingVsTitle>

          <LandingVsQuote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <QuoteIcon>💡</QuoteIcon>
            {t('LandingPage.landingVsMultiPage.quote')}
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
                {t('LandingPage.landingVsMultiPage.landing.title')}
              </VsColTitle>
              <VsList>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.landing.features.item1')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.landing.features.item2')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.landing.features.item3')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.landing.features.item4')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.landing.features.item5')}
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
                {t('LandingPage.landingVsMultiPage.multiPage.title')}
              </VsColTitle>
              <VsList>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.multiPage.features.item1')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.multiPage.features.item2')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.multiPage.features.item3')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.multiPage.features.item4')}
                </VsListItem>
                <VsListItem>
                  {t('LandingPage.landingVsMultiPage.multiPage.features.item5')}
                </VsListItem>
              </VsList>
            </VsCol>
          </LandingVsGrid>
        </LandingVsContainer>
      </LandingVsMultiSection>
      <LPConversionBenefitsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <ConversionBenefitsContainer>
          <ConversionBenefitsTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('LandingPage.conversionBenefits.title')}
          </ConversionBenefitsTitle>

          <ConversionBenefitsDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('LandingPage.conversionBenefits.description')}
          </ConversionBenefitsDescription>

          <ConversionBenefitsSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('LandingPage.conversionBenefits.subtitle')}
          </ConversionBenefitsSubtitle>

          <ConversionBenefitsList>
            {[
              {
                icon: <FaPencilRuler />,
                text: t('LandingPage.conversionBenefits.advantages.item1'),
              },
              {
                icon: <FaChartLine />,
                text: t('LandingPage.conversionBenefits.advantages.item2'),
              },
              {
                icon: <FaBolt />,
                text: t('LandingPage.conversionBenefits.advantages.item3'),
              },
              {
                icon: <FaTools />,
                text: t('LandingPage.conversionBenefits.advantages.item4'),
              },
              {
                icon: <FaChartLine />,
                text: t('LandingPage.conversionBenefits.advantages.item5'),
              },
            ].map((advantage, index) => (
              <ConversionBenefitsItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 8px 20px rgba(94, 234, 212, 0.1)',
                }}
              >
                <ConversionBenefitsIcon>
                  {advantage.icon}
                </ConversionBenefitsIcon>
                <ConversionBenefitsText>
                  {advantage.text}
                </ConversionBenefitsText>
              </ConversionBenefitsItem>
            ))}
          </ConversionBenefitsList>

          <ConversionBenefitsButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(94, 234, 212, 0.2)',
            }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
          >
            {t('LandingPage.conversionBenefits.buttonText')}
          </ConversionBenefitsButton>
        </ConversionBenefitsContainer>

        <ConversionBenefitsBgCircle className="circle-left" />
        <ConversionBenefitsBgCircle className="circle-right" />
      </LPConversionBenefitsSection>
      <LPWhyEffectiveSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LPWhyEffectiveContainer>
          <LPWhyEffectiveTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('LandingPage.whyEffective.title')}
          </LPWhyEffectiveTitle>

          <LPWhyEffectiveSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('LandingPage.whyEffective.subtitle')}
          </LPWhyEffectiveSubtitle>

          <LPWhyEffectiveDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('LandingPage.whyEffective.description')}
          </LPWhyEffectiveDescription>

          <LPWhyEffectiveDecoration />
        </LPWhyEffectiveContainer>

        <LPWhyEffectiveBgCircle className="circle-left" />
        <LPWhyEffectiveBgCircle className="circle-right" />
      </LPWhyEffectiveSection>
      <LPBusinessBenefitSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LPBusinessBenefitContainer>
          <LPBusinessBenefitSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {t('LandingPage.businessBenefits.subtitle')}
          </LPBusinessBenefitSubtitle>

          <LPBusinessBenefitText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('LandingPage.businessBenefits.intro')}
          </LPBusinessBenefitText>

          <LPBusinessBenefitList>
            {[
              {
                icon: <FaBriefcase />,
                title: t('LandingPage.businessBenefits.categories.title1'),
                text: t('LandingPage.businessBenefits.categories.description1'),
                color: '#5eead4',
              },
              {
                icon: <FaGraduationCap />,
                title: t('LandingPage.businessBenefits.categories.title2'),
                text: t('LandingPage.businessBenefits.categories.description2'),
                color: '#60a5fa',
              },
              {
                icon: <FaShoppingCart />,
                title: t('LandingPage.businessBenefits.categories.title3'),
                text: t('LandingPage.businessBenefits.categories.description3'),
                color: '#f472b6',
              },
              {
                icon: <FaRocket />,
                title: t('LandingPage.businessBenefits.categories.title4'),
                text: t('LandingPage.businessBenefits.categories.description4'),
                color: '#818cf8',
              },
            ].map((item, index) => (
              <LPBusinessBenefitItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 25px rgba(${item.color
                    .replace('#', '')
                    .match(/.{2}/g)
                    .map(hex => parseInt(hex, 16))
                    .join(', ')}, 0.2)`,
                }}
                color={item.color}
              >
                <LPBusinessBenefitIconWrapper color={item.color}>
                  {item.icon}
                </LPBusinessBenefitIconWrapper>
                <LPBusinessBenefitItemContent>
                  <LPBusinessBenefitItemTitle>
                    {item.title}
                  </LPBusinessBenefitItemTitle>
                  <LPBusinessBenefitItemText>
                    {item.text}
                  </LPBusinessBenefitItemText>
                </LPBusinessBenefitItemContent>
              </LPBusinessBenefitItem>
            ))}
          </LPBusinessBenefitList>

          <LPBusinessBenefitSummary
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t('LandingPage.businessBenefits.summary')}
          </LPBusinessBenefitSummary>

          <LPBusinessBenefitDecoration />
        </LPBusinessBenefitContainer>
      </LPBusinessBenefitSection>
      <LPEffectivenessSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LPEffectivenessDivider />
        <Container>
          <Title
            as="h2"
            style={{
              color: 'var(--accent-color)',
              WebkitTextFillColor: 'var(--accent-color)',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            {t('LandingPage.effectiveness.title')}
          </Title>

          <LPEffectivenessBanner
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <LPEffectivenessBannerIcon>🚀</LPEffectivenessBannerIcon>
            <LPEffectivenessBannerText>
              {t('LandingPage.whyEffective.subtitle')}
            </LPEffectivenessBannerText>
          </LPEffectivenessBanner>

          <LPEffectivenessText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('LandingPage.whyEffective.description')}
          </LPEffectivenessText>

          <LPEffectivenessGraphic
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <LPEffectivenessConversionFlow>
              {[
                {
                  title: t('LandingPage.businessBenefits.categories.title1'),
                  icon: <FaEye />,
                  color: '#5eead4',
                },
                {
                  title: t('LandingPage.businessBenefits.categories.title2'),
                  icon: <FaLightbulb />,
                  color: '#60a5fa',
                },
                {
                  title: t('LandingPage.businessBenefits.categories.title3'),
                  icon: <FaHeart />,
                  color: '#f472b6',
                },
                {
                  title: t('LandingPage.businessBenefits.categories.title4'),
                  icon: <FaHandPointer />,
                  color: '#818cf8',
                },
              ].map((step, index) => (
                <LPEffectivenessConversionStep
                  key={index}
                  whileHover={{
                    y: -10,
                    boxShadow: `0 15px 30px rgba(${step.color
                      .replace('#', '')
                      .match(/.{2}/g)
                      .map(hex => parseInt(hex, 16))
                      .join(', ')}, 0.2)`,
                  }}
                  color={step.color}
                >
                  <LPEffectivenessStepNumber color={step.color}>
                    {step.number}
                  </LPEffectivenessStepNumber>
                  <LPEffectivenessStepTitle>
                    {step.title}
                  </LPEffectivenessStepTitle>
                  <LPEffectivenessStepIcon color={step.color}>
                    {step.icon}
                  </LPEffectivenessStepIcon>
                  {index < 3 && <LPEffectivenessStepConnector />}
                </LPEffectivenessConversionStep>
              ))}
            </LPEffectivenessConversionFlow>
          </LPEffectivenessGraphic>

          <LPEffectivenessStatsTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('LandingPage.effectiveness.statsTitle')}
          </LPEffectivenessStatsTitle>

          <LPEffectivenessStats>
            {[
              {
                value: '+75%',
                label: t('LandingPage.effectiveness.stats.label1'),
                icon: <FaChartLine />,
                color: '#5eead4',
              },
              {
                value: '-50%',
                label: t('LandingPage.effectiveness.stats.label2'),
                icon: <FaCoins />,
                color: '#60a5fa',
              },
              {
                value: 'x3',
                label: t('LandingPage.effectiveness.stats.label3'),
                icon: <FaRocket />,
                color: '#f472b6',
              },
            ].map((stat, index) => (
              <LPEffectivenessStatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 15px 30number: "04",px rgba(${stat.color
                    .replace('#', '')
                    .match(/.{2}/g)
                    .map(hex => parseInt(hex, 16))
                    .join(', ')}, 0.2)`,
                }}
                color={stat.color}
              >
                <LPEffectivenessStatValue color={stat.color}>
                  {stat.value}
                </LPEffectivenessStatValue>
                <LPEffectivenessStatLabel>
                  {stat.label}
                </LPEffectivenessStatLabel>
                <LPEffectivenessStatIcon color={stat.color}>
                  {stat.icon}
                </LPEffectivenessStatIcon>
                <LPEffectivenessStatShine />
              </LPEffectivenessStatCard>
            ))}
          </LPEffectivenessStats>

          <LPEffectivenessAdvantages
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <LPEffectivenessAdvantagesTitle>
              {t('LandingPage.effectiveness.advantagesTitle')}
            </LPEffectivenessAdvantagesTitle>

            <LPEffectivenessAdvantagesList>
              {[
                {
                  text: t('LandingPage.effectiveness.advantages.item1'),
                },
                {
                  text: t('LandingPage.effectiveness.advantages.item2'),
                },
                {
                  text: t('LandingPage.effectiveness.advantages.item3'),
                },
                {
                  text: t('LandingPage.effectiveness.advantages.item4'),
                },
              ].map((item, index) => (
                <LPEffectivenessAdvantagesItem
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <LPEffectivenessAdvantagesCheck>
                    <FaCheck />
                  </LPEffectivenessAdvantagesCheck>
                  <LPEffectivenessAdvantagesText
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  />
                </LPEffectivenessAdvantagesItem>
              ))}
            </LPEffectivenessAdvantagesList>
          </LPEffectivenessAdvantages>

          <LPEffectivenessQuote
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{
              boxShadow: '0 20px 40px rgba(94, 234, 212, 0.2)',
              scale: 1.02,
            }}
          >
            <LPEffectivenessQuoteIcon>💡</LPEffectivenessQuoteIcon>
            <LPEffectivenessQuoteText>
              {t('LandingPage.effectiveness.quote')}
            </LPEffectivenessQuoteText>
          </LPEffectivenessQuote>

          <LPEffectivenessCTA
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 15px 30px rgba(94, 234, 212, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
            onClick={openModal}
          >
            {t('LandingPage.effectiveness.buttonText')}
            <LPEffectivenessCTAArrow>
              <FaArrowRight />
            </LPEffectivenessCTAArrow>
          </LPEffectivenessCTA>
        </Container>
      </LPEffectivenessSection>
      <LPCreationSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <LPCreationDivider />
        <LPCreationBackground>
          <LPCreationPattern />
        </LPCreationBackground>
        <LPCreationContainer>
          <LPCreationTitle
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('LandingPage.creation.title')}
          </LPCreationTitle>{' '}
          <LPCreationContent>
            {' '}
            <LPCreationSteps>
              {' '}
              {[
                {
                  icon: <FaSearch />,
                  title: t('LandingPage.creation.steps.title1'),
                  text: t('LandingPage.creation.steps.description1'),
                },
                {
                  icon: <FaPencilRuler />,
                  title: t('LandingPage.creation.steps.title2'),
                  text: t('LandingPage.creation.steps.description2'),
                },
                {
                  icon: <FaCode />,
                  title: t('LandingPage.creation.steps.title3'),
                  text: t('LandingPage.creation.steps.description3'),
                },
                {
                  icon: <FaRocket />,
                  title: t('LandingPage.creation.steps.title4'),
                  text: t('LandingPage.creation.steps.description4'),
                },
              ].map((step, index) => (
                <LPCreationStep
                  key={index}
                  className="creation-step-card"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {' '}
                  <LPCreationStepHeader>
                    {' '}
                    <LPCreationStepNumber>
                      {(index + 1).toString().padStart(2, '0')}
                    </LPCreationStepNumber>{' '}
                    <LPCreationStepIcon className="step-icon">
                      {step.icon}
                    </LPCreationStepIcon>{' '}
                  </LPCreationStepHeader>{' '}
                  <LPCreationStepTitle>{step.title}</LPCreationStepTitle>{' '}
                  <LPCreationStepText>{step.text}</LPCreationStepText>{' '}
                </LPCreationStep>
              ))}{' '}
            </LPCreationSteps>{' '}
            <LPCreationVisual
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {' '}
              <LPCreationCards
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {' '}
                {[
                  {
                    icon: '🎯',
                    title: t('LandingPage.creation.features.title1'),
                    text: t('LandingPage.creation.features.description1'),
                  },
                  {
                    icon: '💡',
                    title: t('LandingPage.creation.features.title2'),
                    text: t('LandingPage.creation.features.description2'),
                  },
                  {
                    icon: '⚡',
                    title: t('LandingPage.creation.features.title3'),
                    text: t('LandingPage.creation.features.description3'),
                  },
                  {
                    icon: '📱',
                    title: t('LandingPage.creation.features.title4'),
                    text: t('LandingPage.creation.features.description4'),
                  },
                ].map((card, index) => (
                  <LPCreationCard
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    {' '}
                    <LPCreationCardIcon>{card.icon}</LPCreationCardIcon>{' '}
                    <LPCreationCardTitle>{card.title}</LPCreationCardTitle>{' '}
                    <LPCreationCardText>{card.text}</LPCreationCardText>{' '}
                  </LPCreationCard>
                ))}{' '}
              </LPCreationCards>{' '}
            </LPCreationVisual>{' '}
          </LPCreationContent>{' '}
        </LPCreationContainer>{' '}
      </LPCreationSection>
      <LPRequirementsSection />
      <LPOfferSection />
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
              {t('LandingPage.cta.title')}
            </CtaTitle>

            <CtaText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('LandingPage.cta.description')}
            </CtaText>

            <CtaHighlight
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('LandingPage.cta.highlight')}
            </CtaHighlight>

            <CtaSubtext
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('LandingPage.cta.subtext')}
            </CtaSubtext>

            <CtaForm
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <CtaInputWrapper>
                <CtaInput
                  type="text"
                  placeholder={t('LandingPage.cta.form.name')}
                />
                <CtaInputBg />
              </CtaInputWrapper>

              <CtaInputWrapper>
                <CtaInput
                  type="tel"
                  placeholder={t('LandingPage.cta.form.phone')}
                />
                <CtaInputBg />
              </CtaInputWrapper>

              <CtaInputWrapper>
                <CtaInput
                  type="email"
                  placeholder={t('LandingPage.cta.form.email')}
                />
                <CtaInputBg />
              </CtaInputWrapper>

              <CtaButton
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
                }}
                whileTap={{ scale: 0.98 }}
              >
                {t('LandingPage.cta.form.button')}
              </CtaButton>
            </CtaForm>

            <CtaFooterText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              {t('LandingPage.cta.footer')}
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
                question: t('LandingPage.faq.questions.question1'),
                answer: t('LandingPage.faq.questions.answer1'),
              },
              {
                question: t('LandingPage.faq.questions.question2'),
                answer: t('LandingPage.faq.questions.answer2'),
              },
              {
                question: t('LandingPage.faq.questions.question3'),
                answer: t('LandingPage.faq.questions.answer3'),
              },
              {
                question: t('LandingPage.faq.questions.question4'),
                answer: t('LandingPage.faq.questions.answer4'),
              },
              {
                question: t('LandingPage.faq.questions.question5'),
                answer: t('LandingPage.faq.questions.answer5'),
              },
              {
                question: t('LandingPage.faq.questions.question6'),
                answer: t('LandingPage.faq.questions.answer6'),
              },
              {
                question: t('LandingPage.faq.questions.question7'),
                answer: t('LandingPage.faq.questions.answer7'),
              },
              {
                question: t('LandingPage.faq.questions.question8'),
                answer: t('LandingPage.faq.questions.answer8'),
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
            <FaqCtaText>{t('LandingPage.faq.ctaText')}</FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              {t('LandingPage.faq.ctaButton')}
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>

        <FaqDecoration />
      </PWAFaqSection>

      {/* Modal Window */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
};

// Добавляем стили для новой секции
const PWACtaSection = styled(motion.section)`
  padding: 8rem 2rem;
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

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0.5rem;
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

  @media (max-width: 768px) {
    margin: 0 1rem;
    max-width: calc(100% - 2rem);
  }

  @media (max-width: 480px) {
    margin: 0 0.5rem;
    max-width: calc(100% - 1rem);
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

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
      left: -150px;
    }

    @media (max-width: 480px) {
      width: 200px;
      height: 200px;
      left: -100px;
    }
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

    @media (max-width: 768px) {
      width: 350px;
      height: 350px;
      right: -150px;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      right: -100px;
    }
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

  @media (max-width: 1024px) {
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

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
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

    @media (max-width: 1024px) {
      font-size: 4rem;
      top: -25px;
    }

    @media (max-width: 768px) {
      font-size: 3rem;
      top: -20px;
      letter-spacing: 3px;
    }

    @media (max-width: 576px) {
      font-size: 2.5rem;
      top: -15px;
      letter-spacing: 2px;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      top: -12px;
      letter-spacing: 1px;
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

    @media (max-width: 768px) {
      width: 70px;
      height: 3px;
      bottom: -12px;
    }

    @media (max-width: 576px) {
      width: 60px;
      height: 3px;
      bottom: -10px;
    }

    @media (max-width: 480px) {
      width: 50px;
      height: 2px;
      bottom: -8px;
    }
  }
`;

const FaqList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    gap: 1.3rem;
    margin-bottom: 3.5rem;
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 576px) {
    gap: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
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

  @media (max-width: 1024px) {
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  @media (max-width: 576px) {
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    border-radius: 8px;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 15px rgba(94, 234, 212, 0.1);
    border-color: rgba(94, 234, 212, 0.1);
    transform: translateY(-3px);

    @media (max-width: 768px) {
      transform: translateY(-2px);
    }

    @media (max-width: 480px) {
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

  @media (max-width: 1024px) {
    padding: 1.6rem 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 1.4rem 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1.2rem 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
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

    @media (max-width: 480px) {
      width: 3px;
    }
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
      left: 1.2rem;
      right: 1.2rem;
    }

    @media (max-width: 480px) {
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

  @media (max-width: 1024px) {
    font-size: 1.15rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    font-size: 1.05rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.2;
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

  @media (max-width: 768px) {
    width: 26px;
    height: 26px;
    margin-left: 0.8rem;
  }

  @media (max-width: 576px) {
    width: 24px;
    height: 24px;
    margin-left: 0.6rem;
  }

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    margin-left: 0.5rem;
    font-size: 0.9rem;
  }

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

  @media (max-width: 1024px) {
    padding: 0 1.8rem 1.6rem;
    font-size: 1.05rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.4rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 576px) {
    padding: 0 1.2rem 1.2rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    padding: 0 1rem 1rem;
    font-size: 0.9rem;
    line-height: 1.4;
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
      left: 1.2rem;
      right: 1.2rem;
    }

    @media (max-width: 480px) {
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
      padding-left: 1.2rem;
      margin-top: 0.6rem;
      margin-bottom: 0.6rem;
    }

    @media (max-width: 480px) {
      padding-left: 1rem;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
    }
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;

    @media (max-width: 480px) {
      margin-bottom: 0.4rem;
    }

    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;

      @media (max-width: 480px) {
        left: -0.8rem;
      }
    }
  }

  p {
    margin-bottom: 0.8rem;

    @media (max-width: 480px) {
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

    @media (max-width: 480px) {
      padding: 0.1rem 0.3rem;
      margin: 0 0.1rem;
      border-radius: 3px;
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

  @media (max-width: 1024px) {
    padding: 2.5rem;
    gap: 1.3rem;
    margin-top: 2.5rem;
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    gap: 1.2rem;
    margin-top: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
    gap: 1rem;
    margin-top: 1.5rem;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 0.8rem;
    margin-top: 1.2rem;
    border-radius: 12px;
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

    @media (max-width: 480px) {
      height: 3px;
    }
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

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
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

  @media (max-width: 1024px) {
    padding: 1.1rem 2.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    border-radius: 40px;
  }

  @media (max-width: 576px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
    border-radius: 35px;
    width: 100%;
    max-width: 250px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    border-radius: 30px;
    max-width: 220px;
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

    @media (max-width: 480px) {
      height: 6px;
      bottom: -1px;
    }
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

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    bottom: -100px;
    right: 5%;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
    bottom: -75px;
    right: 0%;
  }

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

    @media (max-width: 768px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 480px) {
      width: 75px;
      height: 75px;
    }
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

    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 480px) {
      width: 25px;
      height: 25px;
    }
  }
`;

const LandingVsMultiSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, transparent, var(--bg-secondary));
    z-index: 1;

    @media (max-width: 768px) {
      height: 100px;
    }

    @media (max-width: 480px) {
      height: 80px;
    }
  }
`;

const LandingVsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 2.5rem;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
    margin: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin: 0 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 10px;
    margin: 0 0.5rem;
  }
`;

const LandingVsTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 100px;
      height: 3px;
      bottom: -12px;
    }

    @media (max-width: 576px) {
      width: 80px;
      height: 2px;
      bottom: -10px;
    }
  }
`;

const LandingVsQuote = styled(motion.div)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  background: rgba(94, 234, 212, 0.05);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 3rem;
  position: relative;
  border: 1px solid rgba(94, 234, 212, 0.1);

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 1.8rem;
    margin-bottom: 2.5rem;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 12px;
  }

  @media (max-width: 576px) {
    font-size: 0.95rem;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 1rem;
    margin-bottom: 1.2rem;
    border-radius: 8px;
  }

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
      rgba(94, 234, 212, 0.05),
      transparent
    );
    opacity: 0.5;
  }
`;

const QuoteIcon = styled.span`
  font-size: 2.2rem;
  color: var(--accent-color);
  margin-right: 0.7rem;
  flex-shrink: 0;
  filter: drop-shadow(0 0 10px rgba(94, 234, 212, 0.3));

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-right: 0.4rem;
  }
`;

const LandingVsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const VsCol = styled(motion.div)`
  background: rgba(16, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.8rem;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 576px) {
    padding: 1.2rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 8px;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(94, 234, 212, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      transform: translateY(-3px);
    }

    @media (max-width: 480px) {
      transform: translateY(-2px);
    }
  }
`;

const VsColTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
    gap: 0.6rem;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    gap: 0.4rem;
  }
`;

const VsColIcon = styled.span`
  font-size: 2rem;
  color: var(--accent-color);
  filter: drop-shadow(0 0 8px rgba(94, 234, 212, 0.4));

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 576px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const VsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 576px) {
    gap: 0.7rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const VsListItem = styled.li`
  font-size: 1.1rem;
  color: var(--text-secondary);
  padding-left: 2rem;
  position: relative;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1rem;
    padding-left: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding-left: 1.6rem;
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    padding-left: 1.4rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding-left: 1.2rem;
    line-height: 1.3;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 8px;
    height: 8px;
    background: var(--accent-color);
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(94, 234, 212, 0.5);

    @media (max-width: 768px) {
      width: 6px;
      height: 6px;
      top: 0.4rem;
    }

    @media (max-width: 480px) {
      width: 5px;
      height: 5px;
      top: 0.35rem;
    }
  }

  &:hover::before {
    animation: ${pulse} 2s infinite;
  }
`;

// Добавляем стили для нового блока
const LPConversionBenefitsSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0.5rem;
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
      rgba(94, 234, 212, 0.2),
      transparent
    );
    z-index: 1;
  }
`;

const ConversionBenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 2.5rem;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
    margin: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin: 0 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 10px;
    margin: 0 0.5rem;
  }
`;

const ConversionBenefitsTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2rem;
  position: relative;
  text-align: center;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 100px;
      height: 3px;
      bottom: -12px;
    }

    @media (max-width: 576px) {
      width: 80px;
      height: 2px;
      bottom: -10px;
    }
  }
`;

const ConversionBenefitsDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin: 2.5rem 0;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin: 2rem 0;
    max-width: 800px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 1.8rem 0;
    max-width: 100%;
  }

  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin: 1.5rem 0;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin: 1.2rem 0;
    line-height: 1.4;
  }
`;

const ConversionBenefitsSubtitle = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 3rem 0 2rem;
  text-align: center;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin: 2.5rem 0 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin: 2rem 0 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;
    margin: 1.8rem 0 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 1.5rem 0 1rem;
  }
`;

const ConversionBenefitsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin: 2rem 0;

  @media (max-width: 1024px) {
    gap: 1.3rem;
    margin: 1.8rem 0;
  }

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 576px) {
    gap: 1rem;
    margin: 1.2rem 0;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin: 1rem 0;
  }
`;

const ConversionBenefitsItem = styled(motion.div)`
  background: rgba(16, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: calc(50% - 0.75rem);
  max-width: 500px;

  @media (max-width: 1024px) {
    padding: 1.3rem;
    border-radius: 14px;
    gap: 0.8rem;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 12px;
    gap: 0.7rem;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 10px;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    border-radius: 8px;
    gap: 0.5rem;
    flex-direction: column;
    text-align: center;
  }

  &:hover {
    border-color: rgba(94, 234, 212, 0.3);
    transform: translateY(-5px);

    @media (max-width: 768px) {
      transform: translateY(-3px);
    }

    @media (max-width: 480px) {
      transform: translateY(-2px);
    }
  }
`;

const ConversionBenefitsIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  box-shadow: 0 0 20px rgba(94, 234, 212, 0.4);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
  }
`;

const ConversionBenefitsText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.3;
  }
`;

const ConversionBenefitsButton = styled(motion.button)`
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
  margin: 3rem auto 0;
  box-shadow: 0 8px 20px rgba(94, 234, 212, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 1.1rem 2.5rem;
    font-size: 1.1rem;
    margin: 2.5rem auto 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1rem;
    margin: 2rem auto 0;
    border-radius: 10px;
  }

  @media (max-width: 576px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.95rem;
    margin: 1.8rem auto 0;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    margin: 1.5rem auto 0;
    width: 100%;
    max-width: 250px;
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
    transition: all 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ConversionBenefitsBgCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;

  &.circle-left {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.08) 0%,
      transparent 70%
    );
    top: 10%;
    left: -200px;

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
      left: -150px;
    }

    @media (max-width: 480px) {
      width: 200px;
      height: 200px;
      left: -100px;
    }
  }

  &.circle-right {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.08) 0%,
      transparent 70%
    );
    bottom: 5%;
    right: -200px;

    @media (max-width: 768px) {
      width: 350px;
      height: 350px;
      right: -150px;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      right: -100px;
    }
  }
`;

const LPWhyEffectiveSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0.5rem;
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
      rgba(94, 234, 212, 0.2),
      transparent
    );
    z-index: 1;
  }
`;

const LPWhyEffectiveContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 4rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
`;

const LPWhyEffectiveTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 3rem;
  position: relative;
  text-align: center;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LPWhyEffectiveSubtitle = styled(motion.h3)`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 2.5rem 0 1.5rem;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin: 2rem 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin: 1.5rem 0 0.8rem;
  }
`;

const LPWhyEffectiveDescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  background: rgba(94, 234, 212, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(94, 234, 212, 0.1);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 1rem;
    border-radius: 8px;
    line-height: 1.6;
  }
`;

const LPWhyEffectiveDecoration = styled.div`
  position: absolute;
  bottom: -20px;
  right: 30px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(94, 234, 212, 0.1) 0%,
    transparent 70%
  );
  z-index: 0;
`;

const LPWhyEffectiveBgCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;

  &.circle-left {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.08) 0%,
      transparent 70%
    );
    top: 10%;
    left: -200px;

    @media (max-width: 768px) {
      width: 250px;
      height: 250px;
      left: -125px;
    }

    @media (max-width: 480px) {
      width: 150px;
      height: 150px;
      left: -75px;
    }
  }

  &.circle-right {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.08) 0%,
      transparent 70%
    );
    bottom: 5%;
    right: -200px;

    @media (max-width: 768px) {
      width: 350px;
      height: 350px;
      right: -150px;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      right: -100px;
    }
  }
`;

const LPBusinessBenefitSection = styled(motion.section)`
  position: relative;
  padding: 6rem 2rem;
  background: var(--bg-primary);
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
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
      rgba(94, 234, 212, 0.1),
      transparent
    );
    z-index: 1;
  }
`;

const LPBusinessBenefitContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: rgba(16, 24, 39, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    padding: 2rem;
    margin: 0 1rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    margin: 0 0.5rem;
    border-radius: 16px;
  }
`;

const LPBusinessBenefitSubtitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 70px;
      height: 2px;
      bottom: -8px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 2px;
      bottom: -6px;
    }
  }
`;

const LPBusinessBenefitText = styled(motion.p)`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin: 2rem 0 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 1.5rem 0 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 1.5rem 0 1rem;
  }
`;

const LPBusinessBenefitList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin: 1.2rem 0;
  }
`;

const LPBusinessBenefitItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(16, 24, 39, 0.8);
  border-radius: 16px;
  padding: 1.8rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.2rem;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
    border-radius: 12px;
    flex-direction: column;
    text-align: center;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${props => props.color || 'var(--accent-color)'};
    opacity: 0.7;

    @media (max-width: 480px) {
      height: 3px;
    }
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: radial-gradient(
      circle,
      rgba(
          ${props =>
            props.color
              ? props.color
                  .replace('#', '')
                  .match(/.{2}/g)
                  .map(hex => parseInt(hex, 16))
                  .join(', ')
              : '94, 234, 212'},
          0.08
        )
        0%,
      transparent 70%
    );
    border-radius: 50%;

    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  }
`;

const LPBusinessBenefitIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(16, 24, 39, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  color: ${props => props.color || 'var(--accent-color)'};
  box-shadow: 0 0 20px
    rgba(
      ${props =>
        props.color
          ? props.color
              .replace('#', '')
              .match(/.{2}/g)
              .map(hex => parseInt(hex, 16))
              .join(', ')
          : '94, 234, 212'},
      0.3
    );
  flex-shrink: 0;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }

  &:before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    border: 1px dashed ${props => props.color || 'var(--accent-color)'};
    opacity: 0.4;
    animation: rotate 20s linear infinite;

    @media (max-width: 480px) {
      inset: -3px;
    }
  }
`;

const LPBusinessBenefitItemContent = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const LPBusinessBenefitItemTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
`;

const LPBusinessBenefitItemText = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }
`;

const LPBusinessBenefitSummary = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-primary);
  margin: 2rem 0 0;
  text-align: center;
  background: rgba(94, 234, 212, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 3px solid var(--accent-color);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 1.2rem;
    margin: 1.5rem 0 0;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    padding: 1rem;
    margin: 1.2rem 0 0;
    border-radius: 8px;
  }
`;

const LPBusinessBenefitDecoration = styled.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px dashed rgba(94, 234, 212, 0.2);
  opacity: 0.5;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    bottom: -20px;
    right: -20px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    bottom: -15px;
    right: -15px;
  }
`;

const LPEffectivenessBanner = styled(motion.div)`
  background: rgba(94, 234, 212, 0.1);
  border: 1px solid rgba(94, 234, 212, 0.3);
  border-radius: 24px;
  padding: 1.5rem 2rem;
  margin-bottom: 3rem;
  max-width: 900px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  margin: 0 auto;

  &:hover {
    background: rgba(94, 234, 212, 0.15);
    box-shadow: 0 10px 30px rgba(94, 234, 212, 0.15);
  }

  @media (max-width: 1024px) {
    padding: 1.2rem 1.5rem;
    gap: 1.2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    gap: 1rem;
    margin-bottom: 2rem;
    border-radius: 16px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (max-width: 576px) {
    padding: 0.8rem 1rem;
    gap: 0.8rem;
    margin-bottom: 1.5rem;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
    gap: 0.6rem;
    margin-bottom: 1rem;
    border-radius: 12px;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const LPEffectivenessBannerIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const LPEffectivenessBannerText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: #f1f5f9;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const LPEffectivenessText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #94a3b8;
  text-align: center;
  max-width: 900px;
  margin: 60px auto;
`;

const LPEffectivenessGraphic = styled(motion.div)`
  width: 100%;
  margin-bottom: 5rem;
`;

const LPEffectivenessConversionFlow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LPEffectivenessConversionStep = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid
    ${props => (props.color ? `${props.color}33` : 'rgba(255, 255, 255, 0.1)')};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 220px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const LPEffectivenessStepNumber = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.2rem;
  font-weight: 800;
  color: ${props => props.color || '#5eead4'};
`;

const LPEffectivenessStepTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const LPEffectivenessStepIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.color || '#5eead4'};
  margin-top: 1rem;
  filter: drop-shadow(
    0 0 10px
      ${props => (props.color ? `${props.color}66` : 'rgba(94, 234, 212, 0.4)')}
  );
`;

const LPEffectivenessStepConnector = styled.div`
  position: absolute;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #5eead4, #0ea5e9);
  right: -60px;
  top: 50%;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #0ea5e9;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const LPEffectivenessStatsTitle = styled(motion.h3)`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #fff;
`;

const LPEffectivenessStats = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;
`;

const LPEffectivenessStatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  width: 280px;
  border: 1px solid
    ${props => (props.color ? `${props.color}33` : 'rgba(255, 255, 255, 0.1)')};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
`;

const LPEffectivenessStatValue = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${props => props.color || '#5eead4'};
  margin-bottom: 1rem;
  filter: drop-shadow(
    0 0 10px
      ${props => (props.color ? `${props.color}66` : 'rgba(94, 234, 212, 0.4)')}
  );
`;

const LPEffectivenessStatLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 500;
  color: #f1f5f9;
`;

const LPEffectivenessStatIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.2rem;
  color: ${props => props.color || '#5eead4'};
  opacity: 0.5;
`;

const LPEffectivenessStatShine = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: skewX(-15deg);
  animation: shine 6s infinite linear;

  @keyframes shine {
    0% {
      left: -100%;
    }
    20%,
    100% {
      left: 100%;
    }
  }
`;

const LPEffectivenessAdvantages = styled(motion.div)`
  width: 100%;
  max-width: 900px;
  margin: 60px auto;
`;

const LPEffectivenessAdvantagesTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
`;

const LPEffectivenessAdvantagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const LPEffectivenessAdvantagesItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const LPEffectivenessAdvantagesCheck = styled.div`
  color: #5eead4;
  font-size: 1.2rem;
  flex-shrink: 0;
  margin-top: 0.2rem;
`;

const LPEffectivenessAdvantagesText = styled.div`
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.5;

  strong {
    color: #f1f5f9;
    font-weight: 600;
  }
`;

const LPEffectivenessQuote = styled(motion.div)`
  background: rgba(94, 234, 212, 0.08);
  border: 1px solid rgba(94, 234, 212, 0.2);
  border-radius: 24px;
  padding: 2rem;
  margin: 0 auto 4rem auto;
  max-width: 900px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
`;

const LPEffectivenessQuoteIcon = styled.div`
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const LPEffectivenessQuoteText = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  color: #f1f5f9;
  margin: 0;
  line-height: 1.7;
`;

const LPEffectivenessCTA = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0f172a;
  background: linear-gradient(135deg, #5eead4 0%, #0ea5e9 100%);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(94, 234, 212, 0.3);
  transition: all 0.3s ease;

  margin: 60px auto;
`;

const LPEffectivenessCTAArrow = styled.span`
  font-size: 1.1rem;
`;

const LPCreationDivider = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(94, 234, 212, 0.1),
    transparent
  );
  z-index: 1;
`;

const LPCreationBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
`;

const LPCreationPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.1) 1px,
    transparent 1px
  );
  background-size: 30px 30px;
  background-position: 0 0;
  z-index: 0;
  opacity: 0.3;
`;

const LPCreationSection = styled(motion.section)`
  position: relative;
  padding: 6rem 2rem;
  background: var(--bg-primary);
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const LPCreationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 0 0.5rem;
  }
`;

const LPCreationTitle = styled(motion.h2)`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  color: var(--accent-color);
  -webkit-text-fill-color: var(--accent-color);
  filter: drop-shadow(0 2px 4px rgba(94, 234, 212, 0.3));
  position: relative;
  line-height: 1.3;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 2.8rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.8rem;
    letter-spacing: -0.3px;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0;
    line-height: 1.2;
  }
`;

const LPCreationContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const LPCreationSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const LPCreationStep = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.8rem;
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 14px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(94, 234, 212, 0.1),
      rgba(14, 165, 233, 0.1)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateX(10px);
    border-color: rgba(94, 234, 212, 0.2);
    box-shadow: 0 10px 30px rgba(94, 234, 212, 0.1);

    @media (max-width: 768px) {
      transform: translateX(5px);
    }

    @media (max-width: 480px) {
      transform: translateY(-3px);
    }

    &::before {
      opacity: 1;
    }

    .step-icon {
      transform: scale(1.1);
      color: #5eead4;
    }
  }
`;

const LPCreationStepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    text-align: center;
  }
`;

const LPCreationStepNumber = styled.span`
  font-size: 3rem;
  font-weight: 800;
  font-family: 'SF Mono', monospace;
  background: linear-gradient(135deg, #5eead4, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const LPCreationStepIcon = styled.div`
  font-size: 2rem;
  color: #94a3b8;
  transition: all 0.3s ease;
  filter: drop-shadow(0 0 10px rgba(94, 234, 212, 0.2));

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const LPCreationStepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
    text-align: center;
  }
`;

const LPCreationStepText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #94a3b8;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    text-align: center;
  }
`;

const LPCreationVisual = styled.div`
  position: relative;
  padding: 2rem;

  @media (max-width: 1024px) {
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(94, 234, 212, 0.1),
      transparent 70%
    );
    border-radius: 30px;
    filter: blur(30px);

    @media (max-width: 768px) {
      border-radius: 20px;
      filter: blur(20px);
    }

    @media (max-width: 480px) {
      border-radius: 15px;
      filter: blur(15px);
    }
  }
`;

const LPCreationCards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const LPCreationCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 1.8rem;
    border-radius: 18px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 14px;
    text-align: center;
  }

  &:nth-child(even) {
    transform: translateY(2rem);

    @media (max-width: 768px) {
      transform: translateY(0);
    }
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(94, 234, 212, 0.1),
      rgba(14, 165, 233, 0.1)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const LPCreationCardIcon = styled.div`
  font-size: 2.5rem;
  color: #5eead4;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(94, 234, 212, 0.3));

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const LPCreationCardTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
`;

const LPCreationCardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #94a3b8;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const RequirementsCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const RequirementsTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const RequirementsText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #94a3b8;
`;

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding-right: 40px;
  padding-left: 40px;
  margin-top: 3rem;
`;

const OfferContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 4rem 2rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const OfferBlock = styled.div`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const BlockTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--accent-color), #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
`;

const OfferList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const OfferItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.1rem;
  color: #94a3b8;
  line-height: 1.6;
`;

const OfferIcon = styled.div`
  color: var(--accent-color);
  font-size: 1.5rem;
  margin-top: 0.2rem;
`;

const LPOfferDivider = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(94, 234, 212, 0.1),
    transparent
  );
  z-index: 1;
`;

const LPOfferSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <LPOfferDivider />
      <Container>
        <Title
          as="h2"
          style={{
            color: 'var(--accent-color)',
            WebkitTextFillColor: 'var(--accent-color)',
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          {t('LandingPage.offer.title')}
        </Title>
        <OfferCard
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <RequirementsTitle style={{ color: 'var(--text-primary)' }}>
            {t('LandingPage.offer.subtitle')}
          </RequirementsTitle>
          <RequirementsText>
            {t('LandingPage.offer.description')}
          </RequirementsText>
          <RequirementsText style={{ marginTop: '1.5rem' }}>
            {t('LandingPage.offer.additionalDescription')}
          </RequirementsText>
        </OfferCard>

        <OfferContainer>
          <OfferBlock>
            <BlockTitle>{t('LandingPage.offer.whatYouGet.title')}</BlockTitle>
            <OfferList>
              <OfferItem>
                <OfferIcon>
                  <FaRocket />
                </OfferIcon>
                <span>{t('LandingPage.offer.whatYouGet.items.item1')}</span>
              </OfferItem>
              <OfferItem>
                <OfferIcon>
                  <FaChartLine />
                </OfferIcon>
                <span>{t('LandingPage.offer.whatYouGet.items.item2')}</span>
              </OfferItem>
              <OfferItem>
                <OfferIcon>
                  <FaMobile />
                </OfferIcon>
                <span>{t('LandingPage.offer.whatYouGet.items.item3')}</span>
              </OfferItem>
              <OfferItem>
                <OfferIcon>
                  <FaBolt />
                </OfferIcon>
                <span>{t('LandingPage.offer.whatYouGet.items.item4')}</span>
              </OfferItem>
            </OfferList>
          </OfferBlock>

          <OfferBlock>
            <BlockTitle>{t('LandingPage.offer.ourFeatures.title')}</BlockTitle>
            <OfferList>
              <OfferItem>
                <OfferIcon>
                  <FaBrain />
                </OfferIcon>
                <span>{t('LandingPage.offer.ourFeatures.items.item1')}</span>
              </OfferItem>
              <OfferItem>
                <OfferIcon>
                  <FaCog />
                </OfferIcon>
                <span>{t('LandingPage.offer.ourFeatures.items.item2')}</span>
              </OfferItem>
              <OfferItem>
                <OfferIcon>
                  <FaShieldAlt />
                </OfferIcon>
                <span>{t('LandingPage.offer.ourFeatures.items.item3')}</span>
              </OfferItem>
              <OfferItem>
                <OfferIcon>
                  <FaTools />
                </OfferIcon>
                <span>{t('LandingPage.offer.ourFeatures.items.item4')}</span>
              </OfferItem>
            </OfferList>
          </OfferBlock>
        </OfferContainer>
      </Container>
    </Section>
  );
};

const OfferCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 4rem;
  margin-right: 40px;
  margin-left: 40px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      rgba(94, 234, 212, 0.05),
      rgba(14, 165, 233, 0.05)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

const LPRequirementsDivider = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(94, 234, 212, 0.1),
    transparent
  );
  z-index: 1;
`;

const LPRequirementsSection = () => {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Section>
      <LPRequirementsDivider />
      <Container>
        <Title
          as="h2"
          style={{
            color: 'var(--accent-color)',
            WebkitTextFillColor: 'var(--accent-color)',
            marginBottom: '3rem',
            textAlign: 'center',
          }}
        >
          {t('LandingPage.requirements.title')}
        </Title>
        <RequirementsGrid>
          <RequirementsCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <RequirementsTitle>
              {t('LandingPage.requirements.cards.title1')}
            </RequirementsTitle>
            <RequirementsText>
              {t('LandingPage.requirements.cards.description1')}
            </RequirementsText>
          </RequirementsCard>

          <RequirementsCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <RequirementsTitle>
              {t('LandingPage.requirements.cards.title2')}
            </RequirementsTitle>
            <RequirementsText>
              {t('LandingPage.requirements.cards.description2')}
            </RequirementsText>
          </RequirementsCard>

          <RequirementsCard
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <RequirementsTitle>
              {t('LandingPage.requirements.cards.title3')}
            </RequirementsTitle>
            <RequirementsText>
              {t('LandingPage.requirements.cards.description3')}
            </RequirementsText>
          </RequirementsCard>
        </RequirementsGrid>
      </Container>
    </Section>
  );
};

const LPEffectivenessDivider = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(94, 234, 212, 0.1),
    transparent
  );
  z-index: 1;
`;

const LPEffectivenessSection = styled(motion.section)`
  position: relative;
  background: var(--bg-primary);
  overflow: hidden;
  z-index: 1;
`;

export default LandingPage;
