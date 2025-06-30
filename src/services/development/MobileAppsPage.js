import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaMobile,
  FaRocket,
  FaCheck,
  FaApple,
  FaAndroid,
  FaStore,
  FaSearch,
  FaPencilRuler,
  FaCode,
  FaBug,
  FaPlus,
} from 'react-icons/fa';
import Modal from '../../components/Modal';

// Анимации
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmer = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
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

// Стилизованные компоненты
const PageContainer = styled.div`
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
  margin: 3rem auto;

  @media (max-width: 768px) {
    width: 220px;
    height: 400px;
    margin: 2rem auto;
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

const PhoneAppIcon = styled(motion.div)`
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

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.3rem;
    margin: 3rem auto 0;
    max-width: 900px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2.5rem auto 0;
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 2rem auto 0;
    padding: 0 0.5rem;
    gap: 0.8rem;
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

  @media (max-width: 768px) {
    padding: 1.3rem;
    border-radius: 12px;
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
    gap: 0.6rem;
    flex-direction: column;
    text-align: center;
  }

  &:hover {
    border-color: rgba(94, 234, 212, 0.3);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);

    @media (max-width: 480px) {
      transform: translateY(-2px);
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

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const HeroBenefitContent = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    flex: none;
  }
`;

const HeroBenefitTitle = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
    line-height: 1.3;
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

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.2;
  }
`;

const CTAButton = styled(motion.button)`
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
  box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);

  @media (max-width: 1024px) {
    padding: 0.9rem 2.2rem;
    font-size: 1.1rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    margin-top: 2rem;
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.95rem;
    margin-top: 1.5rem;
    border-radius: 8px;
    width: 100%;
    max-width: 250px;
  }
`;

const BusinessSection = styled(motion.section)`
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    var(--bg-primary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;
  box-shadow: inset 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
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

    @media (max-width: 768px) {
      top: -60px;
      height: 120px;
    }

    @media (max-width: 480px) {
      top: -40px;
      height: 80px;
    }
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

const BusinessContainer = styled.div`
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

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 2.5rem;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 1rem;
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    margin: 0 0.5rem;
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const BusinessTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
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

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      bottom: -10px;
      height: 3px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 2px;
      bottom: -8px;
    }
  }
`;

const BusinessContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const BusinessText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--text-secondary);

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const BusinessHighlight = styled(motion.p)`
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

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    line-height: 1.7;
    margin: 2rem 0;
    padding: 1.3rem 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.6;
    margin: 1.8rem 0;
    padding: 1.2rem 1.5rem;
    border-radius: 0 10px 10px 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.5;
    margin: 1.5rem 0;
    padding: 1rem 1.2rem;
    border-radius: 0 8px 8px 0;
    border-left-width: 3px;
  }
`;

const BackgroundShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, transparent 70%);
  opacity: 0.1;
  z-index: 0;
`;

// Стили для секции типов приложений
const AppsSection = styled(motion.section)`
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

const AppsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const AppsTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
    border-radius: 4px;
  }
`;

const AppsDescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const AppsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AppCard = styled(motion.div)`
  background: rgba(16, 24, 39, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      rgba(59, 130, 246, 0.8)
    );
    opacity: 0.7;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(94, 234, 212, 0.3);
  }
`;

const AppIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(59, 130, 246, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(94, 234, 212, 0.3);

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    font-size: 1.6rem;
    border-radius: 12px;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
`;

const AppCardTitle = styled(motion.h3)`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    line-height: 1.3;
  }
`;

const AppCardDescription = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);

  @media (max-width: 1024px) {
    font-size: 1.05rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.4;
  }
`;

const MobileStagesSection = styled(motion.section)`
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const MobileWhyUsSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-secondary) 0%,
    rgba(16, 24, 39, 1) 100%
  );
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
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
  background: linear-gradient(135deg, var(--bg-secondary) 0%, transparent 70%);
  opacity: 0.5;
  z-index: 1;
`;

const WhyUsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 0 0.5rem;
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

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    line-height: 1.2;
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
      width: 80px;
      height: 3px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 2px;
    }
  }
`;

const WhyUsSubtitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  max-width: 800px;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    padding: 0 0.5rem;
    line-height: 1.5;
  }
`;

const WhyUsCardsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const WhyUsCard = styled(motion.div)`
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

  @media (max-width: 1024px) {
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    padding: 1.8rem;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
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
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
    border-radius: 14px;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1rem;
  }

  ${WhyUsCard}:hover & {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px dashed rgba(94, 234, 212, 0.3);
    animation: ${pulse} 3s infinite ease-in-out 1.5s;

    @media (max-width: 768px) {
      border-radius: 14px;
    }

    @media (max-width: 480px) {
      border-radius: 12px;
    }
  }
`;

const WhyUsCardTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 1.2rem;
  font-weight: 600;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
    line-height: 1.3;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 2px;
    background: var(--accent-color);
    border-radius: 2px;

    @media (max-width: 480px) {
      width: 30px;
      bottom: -5px;
    }
  }
`;

const WhyUsCardDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-top: 1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 0.8rem;
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

  @media (max-width: 1024px) {
    padding: 1.1rem 3rem;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 30px;
  }

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
  }
`;

const PricingSection = styled(motion.section)`
  background: linear-gradient(
    180deg,
    rgba(16, 24, 39, 1) 0%,
    var(--bg-primary) 100%
  );
  position: relative;
  padding: 8rem 2rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 6rem 1.5rem;
  }

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
    width: 100%;
    height: 150px;
    background: linear-gradient(to top, transparent, rgba(16, 24, 39, 1));
    z-index: 1;

    @media (max-width: 768px) {
      height: 100px;
    }

    @media (max-width: 480px) {
      height: 80px;
    }
  }
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  background: rgba(16, 24, 39, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 2.5rem;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 2rem;
    border-radius: 16px;
    margin: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin: 0 0.5rem;
  }
`;

const PricingTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2.5rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    display: block;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
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

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
    }

    @media (max-width: 480px) {
      width: 60px;
      height: 3px;
    }
  }
`;

const PricingContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const PricingText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;

const PricingFactorsList = styled(motion.div)`
  margin: 2rem 0 3rem;

  @media (max-width: 768px) {
    margin: 1.5rem 0 2rem;
  }

  @media (max-width: 480px) {
    margin: 1rem 0 1.5rem;
  }
`;

const PricingFactorsTitle = styled(motion.h3)`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const FactorItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border-radius: 12px;
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 0.8rem;
    margin-bottom: 0.8rem;
    flex-direction: column;
    text-align: center;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.06);
    transform: translateX(10px);

    @media (max-width: 768px) {
      transform: translateX(5px);
    }

    @media (max-width: 480px) {
      transform: translateY(-2px);
    }
  }
`;

const FactorIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    rgba(59, 130, 246, 0.8) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(94, 234, 212, 0.2);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    border-radius: 8px;
  }
`;

const FactorContent = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const FactorTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

const FactorDescription = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const PricingCTA = styled(motion.div)`
  background: rgba(16, 24, 39, 0.6);
  border-radius: 16px;
  padding: 2rem;
  margin-top: 2rem;
  border: 1px solid rgba(94, 234, 212, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1rem;
  }
`;

const PricingCTAText = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const PricingButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(
    45deg,
    var(--accent-color),
    rgba(59, 130, 246, 0.9)
  );
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(94, 234, 212, 0.4);

  @media (max-width: 1024px) {
    padding: 1.1rem 2.8rem;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 0.95rem;
    border-radius: 30px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(94, 234, 212, 0.5);

    @media (max-width: 768px) {
      transform: translateY(-1px);
    }
  }
`;

const PricingBgDecoration = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    opacity: 0.1;
  }

  &::before {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      var(--accent-color) 0%,
      transparent 70%
    );
    top: -200px;
    right: -200px;
    filter: blur(80px);
  }

  &::after {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.8) 0%,
      transparent 70%
    );
    bottom: -100px;
    left: -100px;
    filter: blur(60px);
  }
`;

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
    animation: ${pulse} 15s infinite ease-in-out;
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
    animation: ${pulse} 18s infinite ease-in-out reverse;
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

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align: left;
    margin-bottom: 0.5rem;
  }

  ${FaqQuestion}:hover & {
    color: var(--accent-color);
    transform: translateZ(10px);

    @media (max-width: 768px) {
      transform: translateZ(5px);
    }
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
    width: 24px;
    height: 24px;
    margin-left: 0.5rem;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    margin-left: 0;
    margin-top: 0.2rem;
    align-self: flex-start;
  }

  &:hover {
    background: rgba(94, 234, 212, 0.1);
    box-shadow: 0 0 10px rgba(94, 234, 212, 0.2);

    @media (max-width: 768px) {
      box-shadow: 0 0 8px rgba(94, 234, 212, 0.2);
    }

    @media (max-width: 480px) {
      box-shadow: 0 0 5px rgba(94, 234, 212, 0.2);
    }
  }
`;

const FaqAnswer = styled(motion.div)`
  padding: 0 2rem 1.8rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    padding: 0 1rem 1.2rem;
    font-size: 0.9rem;
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

    @media (max-width: 480px) {
      left: 1rem;
      right: 1rem;
    }
  }

  strong {
    color: var(--accent-color);
    font-weight: 600;
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

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
    margin-top: 2rem;
    gap: 1.2rem;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 1.5rem;
    gap: 1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
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
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    line-height: 1.4;
  }
`;

const FaqCtaButton = styled(motion.button)`
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
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 1.1rem 3rem;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 30px;
    width: 100%;
    max-width: 300px;
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
    z-index: -1;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 60%
    );
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(94, 234, 212, 0.4);

    @media (max-width: 768px) {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(94, 234, 212, 0.4);
    }

    @media (max-width: 480px) {
      transform: translateY(-1px);
      box-shadow: 0 8px 25px rgba(94, 234, 212, 0.4);
    }
  }

  &:hover::after {
    width: 200px;
    height: 200px;

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 100px;
    }
  }

  &:active {
    transform: translateY(1px);
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

// const floatVertical = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-20px); }
//   100% { transform: translateY(0); }
// `;

// const fadeInScale = keyframes`
//   0% { opacity: 0; transform: scale(0.95); }
//   100% { opacity: 1; transform: scale(1); }
// `;

// const shimmerEffect = keyframes`
//   0% { background-position: -100% 0; }
//   100% { background-position: 100% 0; }
// `;

const MobileAppsPage = () => {
  const [stars, setStars] = useState([]);
  const [backgroundShapes, setBackgroundShapes] = useState([]);
  // Добавляем состояние для аккордеона FAQ
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const benefitsData = [
    {
      icon: <FaMobile />,
      title: 'Нативна розробка',
      description:
        'Створюємо унікальні додатки з максимальною продуктивністю для iOS та Android.',
    },
    {
      icon: <FaRocket />,
      title: 'Крос-платформенні рішення',
      description:
        'Економія часу та бюджету з додатками, що працюють на всіх платформах.',
    },
    {
      icon: <FaCheck />,
      title: 'Підтримка та оновлення',
      description:
        'Забезпечуємо стабільну роботу та випускаємо нові версії з додатковим функціоналом.',
    },
  ];

  const phoneVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const appTypes = [
    {
      icon: <FaApple />,
      title: 'Нативні додатки для iOS та Android',
      description:
        'Нативна розробка дозволяє створювати максимально швидкі та стабільні додатки, що повністю використовують можливості операційних систем iOS та Android. Такі додатки відрізняються високою продуктивністю, якісною графікою та глибокою інтеграцією з пристроями користувача.',
    },
    {
      icon: <FaRocket />,
      title: 'Кросплатформенні додатки на Flutter та React Native',
      description:
        'Кросплатформенні рішення дають змогу розробити один додаток для двох платформ одночасно, що економить час та бюджет. Технології Flutter і React Native забезпечують високу швидкість роботи, гарну якість інтерфейсу та простоту масштабування проєкту.',
    },
    {
      icon: <FaMobile />,
      title: 'Прогресивні вебдодатки (PWA)',
      description:
        'Прогресивні вебдодатки поєднують переваги вебсайтів та нативних додатків. Вони працюють у браузері, не потребують встановлення, можуть працювати в офлайн-режимі та підтримують push-сповіщення. PWA — чудовий вибір для бізнесу, який хоче швидко запустити мобільний продукт із мінімальними витратами.',
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Функция для переключения состояния аккордеона
  const toggleFaq = index => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(item => item !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer>
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
          Розробка мобільних додатків на замовлення
        </Title>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Створення мобільного додатку — це ефективний інструмент для бізнесу,
          який допомагає залучати нових клієнтів, підвищувати лояльність та
          збільшувати продажі. У сучасному світі понад 70% інтернет-трафіку
          надходить саме з мобільних пристроїв, тому наявність власного
          мобільного додатку для iOS або Android стає важливою конкурентною
          перевагою.
        </Subtitle>

        <PhoneContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          variants={phoneVariants}
          whileInView="animate"
        >
          <Phone>
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
                  <FaMobile />
                </IconCircle>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  style={{ marginBottom: '0.5rem' }}
                >
                  Mobile App
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  iOS + Android
                </motion.p>
              </PhoneContent>

              <PhoneApps>
                <PhoneAppIcon whileHover={{ scale: 1.2 }}>
                  <FaApple />
                </PhoneAppIcon>
                <PhoneAppIcon whileHover={{ scale: 1.2 }}>
                  <FaAndroid />
                </PhoneAppIcon>
                <PhoneAppIcon whileHover={{ scale: 1.2 }}>
                  <FaStore />
                </PhoneAppIcon>
              </PhoneApps>
            </PhoneScreen>
          </Phone>
        </PhoneContainer>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Наша компанія пропонує професійні послуги з розробки мобільних
          додатків "під ключ" — від аналітики і проєктування до запуску та
          підтримки. Ми створюємо нативні додатки, кросплатформенні рішення та
          прогресивні вебдодатки (PWA), які працюють швидко, стабільно та
          безпечно.
        </Subtitle>

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

        <CTAButton
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal}
        >
          Замовити консультацію
        </CTAButton>
      </HeroSection>

      <BusinessSection
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

        <BusinessContainer>
          <BusinessTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Чому вашому бізнесу потрібно мобільний додаток
          </BusinessTitle>

          <BusinessContent>
            <BusinessText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Мобільний додаток відкриває для бізнесу нові можливості взаємодії
              з клієнтами та ринку просування. Він дозволяє бути на зв'язку з
              аудиторією 24/7, надсилати push-сповіщення про акції, новини та
              спеціальні пропозиції, а також збирати аналітику для покращення
              сервісу.
            </BusinessText>

            <BusinessText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Крім того, наявність мобільного додатку сприяє зміцненню бренду.
              Яскравий та зручний інтерфейс, бездоганна функціональність і
              швидка робота допомагають формувати позитивний імідж компанії.
              Бізнеси, що пропонують мобільний досвід, значно випереджають
              конкурентів за рівнем залученості клієнтів та обсягом продажів.
            </BusinessText>

            <BusinessHighlight
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Інвестуючи у розробку мобільного додатку, ви отримуєте потужний
              маркетинговий інструмент, який працює на ваш успіх кожного дня.
            </BusinessHighlight>
          </BusinessContent>
        </BusinessContainer>
      </BusinessSection>

      <AppsSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AppsContainer>
          <AppsTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Які мобільні додатки ми створюємо
          </AppsTitle>

          <AppsDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Наша команда розробляє мобільні рішення для бізнесу будь-якої
            складності — від стартапів до великих корпорацій. Ми створюємо
            додатки, що ідеально підходять для вашої цільової аудиторії та
            бізнес-цілей.
          </AppsDescription>

          <AppsGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {appTypes.map((app, index) => (
              <AppCard
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <AppIcon>{app.icon}</AppIcon>
                <AppCardTitle>{app.title}</AppCardTitle>
                <AppCardDescription>{app.description}</AppCardDescription>
              </AppCard>
            ))}
          </AppsGrid>
        </AppsContainer>
      </AppsSection>

      <MobileStagesSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
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
              'radial-gradient(circle, rgba(94, 234, 212, 0.1) 0%, transparent 70%)',
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
              'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
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
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              color: 'var(--accent-color)',
              marginBottom: 'clamp(3rem, 8vw, 6rem)',
              position: 'relative',
              textAlign: 'center',
              textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            Етапи розробки мобільного додатку
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'clamp(100px, 20vw, 150px)',
                height: '4px',
                background:
                  'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                borderRadius: '4px',
              }}
              animate={{
                width: ['0%', 'clamp(100px, 20vw, 150px)'],
                opacity: [0, 1],
              }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              maxWidth: 'clamp(300px, 90%, 1000px)',
              textAlign: 'center',
              margin: '0 auto clamp(2rem, 6vw, 4rem)',
              color: 'var(--text-secondary)',
              padding: '0 1rem',
            }}
          >
            Процес створення мобільного додатку складається з кількох важливих
            етапів, кожен з яких впливає на якість кінцевого продукту та його
            успіх серед користувачів.
          </motion.p>

          <motion.div
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
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              alignItems: 'center',
            }}
          >
            {[
              {
                icon: <FaSearch />,
                title: 'Аналіз та планування',
                description:
                  'Ми вивчаємо ваш бізнес, аудиторію, конкурентів і формулюємо чіткі вимоги до майбутнього додатку. Створюємо технічне завдання та обираємо оптимальні технології.',
              },
              {
                icon: <FaPencilRuler />,
                title: 'Дизайн UX/UI',
                description:
                  'Проєктуємо логічну структуру додатку, створюємо прототипи та дизайн, який забезпечує зручність використання й привабливий вигляд.',
              },
              {
                icon: <FaCode />,
                title: 'Розробка',
                description:
                  'Наші програмісти реалізують функціонал, інтегрують необхідні сервіси, забезпечують безпеку та оптимізацію продуктивності додатку.',
              },
              {
                icon: <FaBug />,
                title: 'Тестування',
                description:
                  'Проводимо комплексне тестування для виявлення та виправлення помилок. Гарантуємо стабільну роботу додатку на різних пристроях та версіях операційних систем.',
              },
              {
                icon: <FaRocket />,
                title: 'Запуск і підтримка',
                description:
                  'Публікуємо додаток у App Store та Google Play, надаємо технічну підтримку, розвиваємо та оновлюємо продукт відповідно до нових потреб бізнесу.',
              },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: { duration: 0.8, ease: 'easeOut' },
                    },
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                    gap: 'clamp(1rem, 3vw, 2rem)',
                    padding: 'clamp(1rem, 3vw, 2rem)',
                    width: 'clamp(300px, 95%, 1000px)',
                    minHeight: 'clamp(140px, 20vw, 180px)',
                    background: 'rgba(16, 24, 39, 0.2)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: 'clamp(12px, 3vw, 20px)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  }}
                  whileHover={{
                    scale: window.innerWidth <= 768 ? 1.01 : 1.02,
                    transition: { duration: 0.3 },
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(94, 234, 212, 0.2)',
                  }}
                >
                  {/* Контейнер для номера и иконки на мобильных */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'clamp(1rem, 3vw, 2rem)',
                    flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
                    ...(window.innerWidth <= 768 && { width: '100%', justifyContent: 'center' })
                  }}>
                    {/* Номер этапа */}
                    <motion.div
                      style={{
                        width: 'clamp(60px, 12vw, 100px)',
                        height: 'clamp(60px, 12vw, 100px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                        fontWeight: '900',
                        color: 'rgba(94, 234, 212, 0.8)',
                        textShadow: '0 2px 10px rgba(94, 234, 212, 0.4)',
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </motion.div>

                    {/* Иконка */}
                    <motion.div
                      style={{
                        width: 'clamp(80px, 15vw, 120px)',
                        height: 'clamp(80px, 15vw, 120px)',
                        borderRadius: '50%',
                        background:
                          'linear-gradient(135deg, var(--accent-color) 0%, rgba(59, 130, 246, 0.8) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(94, 234, 212, 0.4)',
                        position: 'relative',
                        flexShrink: 0,
                      }}
                      whileHover={{
                        boxShadow: '0 15px 40px rgba(94, 234, 212, 0.6)',
                        scale: window.innerWidth <= 768 ? 1.03 : 1.05,
                        transition: { duration: 0.3 },
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
                          border: '2px solid rgba(94, 234, 212, 0.5)',
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
                    </motion.div>
                  </div>

                  {/* Текстовый блок */}
                  <motion.div
                    style={{
                      background: 'rgba(10, 15, 25, 0.85)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: 'clamp(12px, 3vw, 20px)',
                      padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                      border: '1px solid rgba(94, 234, 212, 0.3)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                      width: window.innerWidth <= 768 ? '100%' : 'calc(100% - 250px)',
                      minHeight: 'clamp(120px, 18vw, 160px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      ...(window.innerWidth <= 768 && { marginTop: '1rem' })
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
                        fontWeight: 700,
                        marginBottom: 'clamp(0.5rem, 2vw, 0.8rem)',
                        color: '#FFFFFF',
                        textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
                        textAlign: window.innerWidth <= 480 ? 'center' : 'left',
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontSize: 'clamp(0.85rem, 2.2vw, 1rem)',
                        lineHeight: window.innerWidth <= 480 ? 1.4 : 1.5,
                        color: '#FFFFFF',
                        overflow: 'hidden',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                        textAlign: window.innerWidth <= 480 ? 'center' : 'left',
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
                      width: 'clamp(2px, 1vw, 4px)',
                      height: 'clamp(3rem, 8vw, 5rem)',
                      background:
                        'linear-gradient(to bottom, var(--accent-color), rgba(59, 130, 246, 0.1))',
                      borderRadius: '4px',
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: 'clamp(3rem, 8vw, 5rem)' }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                  />
                )}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={{
              scale: window.innerWidth <= 768 ? 1.02 : 1.05,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: 'clamp(0.8rem, 3vw, 1rem) clamp(1.5rem, 5vw, 2.5rem)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: 'bold',
              background: 'var(--accent-color)',
              color: 'white',
              border: 'none',
              borderRadius: 'clamp(8px, 2vw, 12px)',
              cursor: 'pointer',
              margin: 'clamp(3rem, 8vw, 5rem) auto 0',
              zIndex: 1,
              position: 'relative',
              display: 'block',
              width: window.innerWidth <= 480 ? '90%' : 'auto',
              maxWidth: window.innerWidth <= 480 ? '300px' : 'none',
            }}
            onClick={openModal}
          >
            Замовити розробку
          </motion.button>
        </div>
      </MobileStagesSection>

      <MobileWhyUsSection
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
            Переваги роботи з нашою командою
          </WhyUsTitle>

          <WhyUsSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Замовляючи розробку мобільного додатку у нас, ви отримуєте не просто
            виконавця, а надійного технологічного партнера, який зацікавлений у
            вашому успіху.
          </WhyUsSubtitle>

          <WhyUsCardsContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <WhyUsCard
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                rotateY: 5,
                rotateX: -5,
              }}
            >
              <WhyUsCardGlow />
              <WhyUsIconWrapper>
                <FaCode />
              </WhyUsIconWrapper>
              <WhyUsCardTitle>Досвідчена команда розробників</WhyUsCardTitle>
              <WhyUsCardDescription>
                Ми працюємо у сфері мобільної розробки багато років і маємо
                успішні кейси у різних нішах — від e-commerce і фінансів до
                освіти та медицини.
              </WhyUsCardDescription>
              <CardAccent />
            </WhyUsCard>

            <WhyUsCard
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                rotateY: 5,
                rotateX: -5,
              }}
            >
              <WhyUsCardGlow />
              <WhyUsIconWrapper>
                <FaPencilRuler />
              </WhyUsIconWrapper>
              <WhyUsCardTitle>
                Індивідуальний підхід до кожного проєкту
              </WhyUsCardTitle>
              <WhyUsCardDescription>
                Кожен бізнес унікальний, тому ми пропонуємо рішення, які
                враховують ваші цілі, потреби цільової аудиторії та бюджет.
              </WhyUsCardDescription>
              <CardAccent />
            </WhyUsCard>

            <WhyUsCard
              variants={itemVariants}
              whileHover={{
                y: -15,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                rotateY: 5,
                rotateX: -5,
              }}
            >
              <WhyUsCardGlow />
              <WhyUsIconWrapper>
                <FaRocket />
              </WhyUsIconWrapper>
              <WhyUsCardTitle>
                Гарантія якості та дотримання термінів
              </WhyUsCardTitle>
              <WhyUsCardDescription>
                Ми суворо контролюємо якість на кожному етапі розробки та завжди
                дотримуємося узгоджених термінів. Ваш проєкт буде реалізований
                вчасно та відповідатиме всім сучасним стандартам.
              </WhyUsCardDescription>
              <CardAccent />
            </WhyUsCard>
          </WhyUsCardsContainer>

          <WhyUsAction
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <PulsingButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Замовити розробку
            </PulsingButton>
          </WhyUsAction>
        </WhyUsContainer>

        <WhyUsBackgroundShapes />
      </MobileWhyUsSection>

      <PricingSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PricingBgDecoration />

        <PricingContainer>
          <PricingTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Вартість мобільного додатку
          </PricingTitle>

          <PricingContent>
            <PricingText
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ціна розробки мобільного додатку залежить від кількох факторів:
              складності функціоналу, вибору платформи, технологій та термінів
              реалізації. Ми пропонуємо гнучкі рішення, які дозволяють підібрати
              оптимальний варіант під ваш бюджет і потреби.
            </PricingText>

            <PricingFactorsTitle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Основні фактори, що впливають на вартість:
            </PricingFactorsTitle>

            <PricingFactorsList
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {[
                {
                  icon: <FaMobile />,
                  title: 'Тип додатку',
                  description: 'Нативний, кросплатформенний чи PWA.',
                },
                {
                  icon: <FaCode />,
                  title: 'Складність функціоналу',
                  description:
                    'Додаткові можливості, такі як інтеграція з платіжними системами, геолокація, відео/аудіо функції тощо.',
                },
                {
                  icon: <FaPencilRuler />,
                  title: 'Дизайн та UX/UI',
                  description:
                    'Унікальний дизайн може збільшити вартість, але він завжди сприяє кращому користувацькому досвіду.',
                },
                {
                  icon: <FaRocket />,
                  title: 'Термін реалізації',
                  description:
                    'Чим швидше потрібно завершити проєкт, тим більше можуть бути витрати на ресурси.',
                },
              ].map((factor, index) => (
                <FactorItem
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 15 }}
                >
                  <FactorIcon>{factor.icon}</FactorIcon>
                  <FactorContent>
                    <FactorTitle>{factor.title}</FactorTitle>
                    <FactorDescription>{factor.description}</FactorDescription>
                  </FactorContent>
                </FactorItem>
              ))}
            </PricingFactorsList>

            <PricingCTA
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <PricingCTAText>
                Для точного розрахунку вартості вашого мобільного додатку ми
                пропонуємо безкоштовну консультацію, під час якої ми визначимо
                обсяг робіт та створимо індивідуальну пропозицію.
              </PricingCTAText>

              <PricingButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
              >
                Отримати консультацію
              </PricingButton>
            </PricingCTA>
          </PricingContent>
        </PricingContainer>
      </PricingSection>

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
                question: 'Скільки часу займає розробка мобільного додатку?',
                answer:
                  'Час на розробку мобільного додатку залежить від складності проекту та функцій, які ви хочете реалізувати. Зазвичай, розробка займає від 2 до 6 місяців для стандартних додатків, але для складних рішень цей термін може бути довшим.',
              },
              {
                question:
                  'Чим відрізняється нативний додаток від кросплатформеного?',
                answer:
                  'Нативний додаток розробляється окремо для кожної операційної системи (iOS чи Android), що дозволяє досягти високої продуктивності та інтеграції з функціями пристроїв. Кросплатформенні додатки розробляються за допомогою технологій, які дозволяють використовувати один код для двох платформ, що економить час і бюджет, але може бути менш оптимальним за швидкістю та стабільністю.',
              },
              {
                question: 'Що таке прогресивний вебдодаток (PWA)?',
                answer:
                  'Прогресивний вебдодаток — це вебдодаток, який поєднує переваги вебсайтів і нативних додатків. PWA може працювати офлайн, отримувати push-сповіщення і запускатися на будь-якому пристрої без необхідності встановлення.',
              },
              {
                question:
                  'Які переваги має мобільний додаток для мого бізнесу?',
                answer:
                  'Мобільний додаток дозволяє вашому бізнесу бути доступним для клієнтів 24/7, сприяє збільшенню лояльності, покращує користувацький досвід і дозволяє проводити ефективні маркетингові кампанії. Додаток також допомагає зібрати аналітику для покращення сервісу та розширення бізнесу.',
              },
              {
                question:
                  'Які додаткові функції можна додати до мобільного додатку?',
                answer:
                  'До мобільного додатку можна додавати різноманітні функції, такі як геолокація, push-сповіщення, інтеграція з платіжними системами, чат-боти, соціальні мережі, офлайн-режим, підтримка мультимедіа (відео, фото) і багато інших, залежно від ваших потреб.',
              },
              {
                question:
                  'Як я можу отримати точну вартість розробки мобільного додатку?',
                answer:
                  'Для точного розрахунку вартості потрібно обговорити деталі проєкту: його складність, бажану платформу, функціонал та терміни. Ми пропонуємо безкоштовну консультацію, під час якої ми зберемо всю необхідну інформацію і надамо вам індивідуальну пропозицію.',
              },
            ].map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <FaqItemContent>
                  <FaqQuestion onClick={() => toggleFaq(index)}>
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
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FaqCtaText>Не знайшли відповідь на своє питання?</FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Напишіть нам
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>

        <FaqDecoration />
      </FaqSection>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default MobileAppsPage;
