import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import {
  FaShoppingCart,
  FaStore,
  FaSearch,
  FaMobile,
  FaChartLine,
  FaTags,
  FaHeadset,
  FaRocket,
  FaCode,
  FaCog,
  FaLink,
  FaShieldAlt,
  FaExpand,
  FaSitemap,
  FaPencilRuler,
  FaClock,
  FaPlus,
} from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
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

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(94, 234, 212, 0.3); }
  50% { box-shadow: 0 0 20px rgba(94, 234, 212, 0.6), 0 0 30px rgba(59, 130, 246, 0.3); }
  100% { box-shadow: 0 0 5px rgba(94, 234, 212, 0.3); }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulseRing = keyframes`
  0% { transform: scale(0.8); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.4; }
  100% { transform: scale(0.8); opacity: 0.8; }
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const shimmerEffect = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
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

  @media (max-width: 1024px) {
    padding-top: 80px;
  }

  @media (max-width: 768px) {
    padding-top: 70px;
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

  @media (max-width: 1024px) {
    min-height: 90vh;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    min-height: 80vh;
    padding: 1rem;
  }

  @media (max-width: 576px) {
    min-height: 70vh;
    padding: 0.8rem;
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

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
    letter-spacing: -0.3px;
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
    }

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
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
    padding: 0 0.8rem;
    margin: 0 auto 1.5rem;
    line-height: 1.6;
  }
`;

const PhoneContainer = styled(motion.div)`
  width: 300px;
  height: 500px;
  position: relative;
  perspective: 1000px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 280px;
    height: 460px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 480px;
    margin: 2rem auto;
  }

  @media (max-width: 576px) {
    width: 260px;
    height: 440px;
    margin: 1.5rem auto;
  }

  @media (max-width: 480px) {
    width: 240px;
    height: 400px;
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

  @media (max-width: 768px) {
    border-radius: 32px;
    box-shadow: 0 0 40px rgba(94, 234, 212, 0.4);
    
    &::before {
      top: 15px;
      height: 20px;
      width: 35%;
    }
  }

  @media (max-width: 480px) {
    border-radius: 28px;
    box-shadow: 0 0 30px rgba(94, 234, 212, 0.5);
    
    &::before {
      top: 12px;
      height: 18px;
      width: 30%;
    }
  }
`;

const PhoneScreen = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;

  @media (max-width: 768px) {
    top: 8%;
    left: 4%;
    width: 92%;
    height: 84%;
    border-radius: 18px;
  }

  @media (max-width: 480px) {
    top: 7%;
    left: 3.5%;
    width: 93%;
    height: 86%;
    border-radius: 16px;
  }
`;

const StoreHeader = styled.div`
  background: var(--accent-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 0.8rem;
  }
`;

const StoreLogo = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    
    svg {
      margin-right: 6px;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    
    svg {
      margin-right: 4px;
      font-size: 0.9rem;
    }
  }
`;

const StoreSearch = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
    color: white;
  }

  &::after {
    content: 'Пошук...';
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    border-radius: 16px;
    
    &::after {
      font-size: 0.75rem;
    }
    
    svg {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    border-radius: 14px;
    
    &::after {
      font-size: 0.7rem;
    }
    
    svg {
      font-size: 0.8rem;
      margin-right: 3px;
    }
  }
`;

const StoreContent = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem;
  padding: 1rem;
  background: #f8fafc;
  overflow-y: auto;

  @media (max-width: 768px) {
    gap: 0.7rem;
    padding: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    padding: 0.6rem;
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f5f9;

  @media (max-width: 768px) {
    padding: 0.7rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    border-radius: 8px;
  }
`;

const ProductImage = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 8px;
  background: #f1f5f9;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: var(--accent-color);
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 0.6rem;
    
    svg {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
    margin-bottom: 0.5rem;
    border-radius: 6px;
    
    svg {
      font-size: 1.1rem;
    }
  }
`;

const ProductTitle = styled.div`
  color: #0f172a;
  font-weight: 500;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    margin-bottom: 0.2rem;
    line-height: 1.1;
  }
`;

const ProductPrice = styled.div`
  color: var(--accent-color);
  font-weight: bold;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const StoreFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  background: #f1f5f9;
  border-top: 1px solid #e2e8f0;

  @media (max-width: 768px) {
    padding: 0.7rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const FooterItem = styled.div`
  color: #64748b;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    margin-bottom: 4px;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    
    svg {
      font-size: 1.1rem;
      margin-bottom: 3px;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    
    svg {
      font-size: 1rem;
      margin-bottom: 2px;
    }
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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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

const EcommerceWhyUsSection = styled(motion.section)`
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

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
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
    padding: 1.1rem 2.8rem;
    font-size: 1.15rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
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
  }
`;

const WhyUsTitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 6rem;
  position: relative;
  text-align: center;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 3.2rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 4px;

    @media (max-width: 768px) {
      width: 120px;
      height: 3px;
      bottom: -15px;
    }

    @media (max-width: 576px) {
      width: 100px;
      height: 2px;
      bottom: -10px;
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
    max-width: 700px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 100%;
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

  @media (max-width: 576px) {
    gap: 1.2rem;
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

  @media (max-width: 576px) {
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
    font-size: 2.2rem;
    width: 65px;
    height: 65px;
    margin-bottom: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    width: 55px;
    height: 55px;
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

  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
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

    @media (max-width: 768px) {
      width: 35px;
      bottom: -8px;
    }

    @media (max-width: 576px) {
      width: 30px;
      bottom: -6px;
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
    margin-top: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-top: 0.7rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 0.6rem;
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

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }

  ${WhyUsCard}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

const WhyUsAction = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  @media (max-width: 576px) {
    margin-top: 2rem;
  }
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
    padding: 1rem 3rem;
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 2.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
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

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }

    @media (max-width: 576px) {
      width: 200px;
      height: 200px;
    }
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

    @media (max-width: 768px) {
      left: -75px;
    }

    @media (max-width: 576px) {
      left: -50px;
    }
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

    @media (max-width: 768px) {
      right: -75px;
    }

    @media (max-width: 576px) {
      right: -50px;
    }
  }
`;

const EcommerceFeaturesSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(
    180deg,
    rgba(16, 24, 39, 1) 0%,
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
`;

const FeaturesWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: rgba(16, 24, 39, 1);
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  z-index: 1;
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const FeaturesGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;

  &.circle-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.07) 0%,
      transparent 70%
    );
    top: -100px;
    left: -200px;

    @media (max-width: 768px) {
      width: 350px;
      height: 350px;
      top: -75px;
      left: -150px;
    }

    @media (max-width: 576px) {
      width: 250px;
      height: 250px;
      top: -50px;
      left: -100px;
    }
  }

  &.circle-2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.07) 0%,
      transparent 70%
    );
    bottom: -200px;
    right: -200px;

    @media (max-width: 768px) {
      width: 400px;
      height: 400px;
      bottom: -150px;
      right: -150px;
    }

    @media (max-width: 576px) {
      width: 300px;
      height: 300px;
      bottom: -100px;
      right: -100px;
    }
  }
`;

const FeaturesTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
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

const FeaturesIntro = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 4rem;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FeaturesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(16, 24, 39, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  display: flex;
  gap: 1.5rem;

  &:hover {
    border-color: rgba(94, 234, 212, 0.2);
  }
`;

const FeatureIconContainer = styled.div`
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
  flex-shrink: 0;
  box-shadow: 0 8px 20px rgba(94, 234, 212, 0.2);
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const FeaturesAction = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const FeaturesButton = styled(motion.button)`
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

const FeaturesDecoration = styled.div`
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
    z-index: 0;
  }

  &::before {
    width: 150px;
    height: 150px;
    border: 2px dashed rgba(94, 234, 212, 0.1);
    top: 15%;
    right: 10%;
    animation: ${rotate} 30s linear infinite;
  }

  &::after {
    width: 80px;
    height: 80px;
    border: 1px solid rgba(94, 234, 212, 0.05);
    bottom: 25%;
    left: 5%;
    animation: ${rotate} 20s linear infinite reverse;
  }
`;

const EcommerceStagesSection = styled(motion.section)`
  position: relative;
  padding: 10rem 2rem;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    var(--bg-secondary) 100%
  );
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 8rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 6rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 4rem 0.8rem;
  }
`;

const EcommercePricingSection = styled(motion.section)`
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

    @media (max-width: 576px) {
      height: 80px;
    }
  }
`;

const PricingWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: var(--bg-secondary);
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%);
  z-index: 1;
`;

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 0 0.5rem;
  }
`;

const PricingTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
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

const PricingContent = styled.div`
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

const PricingCard = styled(motion.div)`
  background: rgba(16, 24, 39, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 2.5rem;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 14px;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 12px;
  }

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

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
      top: -150px;
      right: -150px;
    }

    @media (max-width: 576px) {
      width: 200px;
      height: 200px;
      top: -100px;
      right: -100px;
    }
  }
`;

const PricingText = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 1.15rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
    line-height: 1.5;
  }
`;

const PricingFactorsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;

  @media (max-width: 1024px) {
    gap: 1.5rem;
    margin: 2.5rem 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    margin: 2rem 0;
  }

  @media (max-width: 576px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`;

const PricingFactor = styled(motion.div)`
  background: rgba(16, 24, 39, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.2rem;
    border-radius: 14px;
  }

  @media (max-width: 576px) {
    padding: 1rem;
    border-radius: 12px;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(94, 234, 212, 0.2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      transform: translateY(-5px);
    }
  }
`;

const PricingFactorIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
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
  margin-bottom: 1rem;
  box-shadow: 0 8px 15px rgba(94, 234, 212, 0.2);

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

const PricingFactorTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const PricingFactorDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const PricingCTA = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (max-width: 576px) {
    margin-top: 1.5rem;
  }
`;

const PriceDependenciesSection = styled(motion.div)`
  margin: 3rem 0;
  background: rgba(16, 24, 39, 0.4);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 1.5rem;
    border-radius: 14px;
  }

  @media (max-width: 576px) {
    margin: 1.5rem 0;
    padding: 1.2rem;
    border-radius: 12px;
  }

  &:hover {
    border-color: rgba(94, 234, 212, 0.2);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.05) 0%,
      transparent 70%
    );
    bottom: -150px;
    left: -150px;
    border-radius: 50%;
    z-index: 0;

    @media (max-width: 768px) {
      width: 200px;
      height: 200px;
      bottom: -100px;
      left: -100px;
    }

    @media (max-width: 576px) {
      width: 150px;
      height: 150px;
      bottom: -75px;
      left: -75px;
    }
  }
`;

const PriceDependenciesTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 2px;

    @media (max-width: 768px) {
      width: 60px;
      height: 2px;
      bottom: -6px;
    }

    @media (max-width: 576px) {
      width: 50px;
      height: 2px;
      bottom: -5px;
    }
  }
`;

const PriceDependenciesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  z-index: 1;
`;

const PriceDependencyItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 0.8rem;
    line-height: 1.4;
  }

  &::before {
    content: '•';
    color: var(--accent-color);
    font-weight: bold;
    margin-right: 1rem;
    margin-top: 0.2rem;
    flex-shrink: 0;

    @media (max-width: 576px) {
      margin-right: 0.8rem;
    }
  }
`;

const EcommerceFaqSection = styled(motion.section)`
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

  @media (max-width: 1024px) {
    max-width: 800px;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 576px) {
    padding: 0 0.5rem;
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

    @media (max-width: 576px) {
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

    @media (max-width: 576px) {
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
      letter-spacing: 4px;
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
      width: 60px;
      height: 3px;
      bottom: -12px;
    }

    @media (max-width: 576px) {
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

  @media (max-width: 576px) {
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

  @media (max-width: 768px) {
    border-radius: 12px;
  }

  @media (max-width: 576px) {
    border-radius: 10px;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 15px rgba(94, 234, 212, 0.1);
    border-color: rgba(94, 234, 212, 0.1);
    transform: translateY(-3px);

    @media (max-width: 768px) {
      transform: translateY(-2px);
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

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: 0.8rem;
  }

  @media (max-width: 576px) {
    width: 20px;
    height: 20px;
    margin-left: 0.6rem;
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
      padding-left: 1.2rem;
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

const EcommercePage = () => {
  const [stars, setStars] = useState([]);
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
  }, []);

  const benefitsData = [
    {
      icon: <FaStore />,
      title: 'Індивідуальний дизайн',
      description:
        'Унікальний дизайн магазину під вашу нішу та цільову аудиторію.',
    },
    {
      icon: <FaMobile />,
      title: 'Мобільна адаптація',
      description:
        "Ідеальне відображення на всіх пристроях — від смартфонів до комп'ютерів.",
    },
    {
      icon: <FaSearch />,
      title: 'SEO-оптимізація',
      description:
        'Вбудована SEO-підготовка для високих позицій у пошукових системах.',
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
          Розробка інтернет-магазинів під ключ
        </Title>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Створюємо інтернет-магазини, які продають. Від проєктування до запуску
          — повний цикл розробки під ваш бізнес. Ми враховуємо специфіку ніші,
          цілі, поведінку покупців і вимоги до SEO-просування. Гарантуємо
          технічну надійність, зручний інтерфейс та готовність до маркетингу з
          першого дня.
        </Subtitle>

        <PhoneContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <Phone
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 1.1 },
              rotateY: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <OrbitingCircle />
            <OrbitingCircleInner />

            <PhoneScreen
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <StoreHeader>
                <StoreLogo>
                  <FaStore /> YourStore
                </StoreLogo>
                <StoreSearch>
                  <FaSearch />
                </StoreSearch>
              </StoreHeader>

              <StoreContent>
                <ProductCard
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <ProductImage>
                    <FaTags />
                  </ProductImage>
                  <ProductTitle>Футболка чоловіча</ProductTitle>
                  <ProductPrice>1 200 грн</ProductPrice>
                </ProductCard>

                <ProductCard
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <ProductImage>
                    <FaTags />
                  </ProductImage>
                  <ProductTitle>Худі з капюшоном</ProductTitle>
                  <ProductPrice>1 750 грн</ProductPrice>
                </ProductCard>

                <ProductCard
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <ProductImage>
                    <FaTags />
                  </ProductImage>
                  <ProductTitle>Шорти спортивні</ProductTitle>
                  <ProductPrice>950 грн</ProductPrice>
                </ProductCard>

                <ProductCard
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <ProductImage>
                    <FaTags />
                  </ProductImage>
                  <ProductTitle>Шапка зимова</ProductTitle>
                  <ProductPrice>550 грн</ProductPrice>
                </ProductCard>
              </StoreContent>

              <StoreFooter>
                <FooterItem>
                  <FaShoppingCart />
                  Кошик
                </FooterItem>
                <FooterItem>
                  <FaHeadset />
                  Підтримка
                </FooterItem>
                <FooterItem>
                  <FaChartLine />
                  Акції
                </FooterItem>
              </StoreFooter>
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

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
          }}
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
            position: 'relative',
          }}
        >
          Замовити розробку
        </motion.button>
      </HeroSection>

      <EcommerceWhyUsSection
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
            Чому варто замовити інтернет-магазин у нас
          </WhyUsTitle>

          <WhyUsSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Гарантуємо зростання продажів та зручність для користувачів
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
                <FaRocket />
              </WhyUsIconWrapper>
              <WhyUsCardTitle>
                Гарантуємо зростання продажів та зручність для користувачів
              </WhyUsCardTitle>
              <WhyUsCardDescription>
                Ми проєктуємо інтерфейс на основі логіки користувача. Зручна
                навігація, швидке завантаження, проста корзина і оформлення
                замовлення — усе це скорочує шлях до покупки та підвищує
                конверсію.
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
                <FaStore />
              </WhyUsIconWrapper>
              <WhyUsCardTitle>
                Досвід у eCommerce та індивідуальні рішення
              </WhyUsCardTitle>
              <WhyUsCardDescription>
                За нашими плечима — десятки реалізованих проєктів у різних
                галузях: одяг, електроніка, товари для дому, B2B-рішення. Ми не
                працюємо за шаблонами — кожен магазин розробляємо індивідуально,
                з урахуванням продукту, цільової аудиторії та бізнес-цілей
                клієнта.
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
                <FaSearch />
              </WhyUsIconWrapper>
              <WhyUsCardTitle>SEO-оптимізація вже «з коробки»</WhyUsCardTitle>
              <WhyUsCardDescription>
                Ми впроваджуємо правильну структуру URL, оптимізовані мета-теги,
                мікророзмітку Schema.org та налаштовуємо швидке завантаження
                сторінок. Це формує міцну SEO-базу для швидкого виходу в топ та
                подальшого просування.
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
              <span className="glow-effect"></span>
              Обговорити проєкт
            </PulsingButton>
          </WhyUsAction>
        </WhyUsContainer>

        <WhyUsBackgroundShapes />
      </EcommerceWhyUsSection>

      <EcommerceFeaturesSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FeaturesWave />

        <FeaturesContainer>
          <FeaturesGlowCircle className="circle-1" />
          <FeaturesGlowCircle className="circle-2" />

          <FeaturesTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Що ви отримаєте з інтернет-магазином від нас
          </FeaturesTitle>

          <FeaturesIntro
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ми створюємо не просто сайт з кошиком, а повноцінну
            eCommerce-платформу, готову до продажів, просування та
            масштабування. Усе необхідне для запуску вже включено:
          </FeaturesIntro>

          <FeaturesGrid
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <FeatureCard
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FeatureIconContainer>
                <FaMobile />
              </FeatureIconContainer>
              <FeatureContent>
                <FeatureTitle>Адаптивний сучасний дизайн</FeatureTitle>
                <FeatureDescription>
                  Ваш інтернет-магазин буде однаково зручним на смартфонах,
                  планшетах і комп'ютерах. Користувач швидко знайде товар і
                  оформить замовлення без зайвих кроків.
                </FeatureDescription>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FeatureIconContainer>
                <FaCog />
              </FeatureIconContainer>
              <FeatureContent>
                <FeatureTitle>Зручна система керування</FeatureTitle>
                <FeatureDescription>
                  Ви зможете самостійно додавати й редагувати товари, керувати
                  замовленнями, цінами, акціями та сторінками — без потреби
                  звертатися до розробника.
                </FeatureDescription>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FeatureIconContainer>
                <FaLink />
              </FeatureIconContainer>
              <FeatureContent>
                <FeatureTitle>Інтеграції під ключ</FeatureTitle>
                <FeatureDescription>
                  Підключаємо платіжні системи (LiqPay, Stripe, Fondy), служби
                  доставки (Нова пошта, Укрпошта), CRM, аналітику,
                  e-mail-маркетинг, трекінг подій і рекламу — все для
                  автоматизації процесів.
                </FeatureDescription>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FeatureIconContainer>
                <FaSearch />
              </FeatureIconContainer>
              <FeatureContent>
                <FeatureTitle>SEO та аналітика з першого дня</FeatureTitle>
                <FeatureDescription>
                  Грамотна структура URL, мета-теги, мікророзмітка (Schema.org),
                  швидке завантаження сторінок — усе це вже налаштовано.
                  Додатково інтегруємо Google Analytics, GA4, Google Tag
                  Manager, налаштовуємо події та цілі.
                </FeatureDescription>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FeatureIconContainer>
                <FaShieldAlt />
              </FeatureIconContainer>
              <FeatureContent>
                <FeatureTitle>Безпека та продуктивність</FeatureTitle>
                <FeatureDescription>
                  SSL-сертифікат, захист від ботів, регулярні оновлення CMS,
                  капча, оптимізація коду та зображень — усе для стабільної та
                  швидкої роботи магазину.
                </FeatureDescription>
              </FeatureContent>
            </FeatureCard>

            <FeatureCard
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
              }}
            >
              <FeatureIconContainer>
                <FaExpand />
              </FeatureIconContainer>
              <FeatureContent>
                <FeatureTitle>Можливість масштабування</FeatureTitle>
                <FeatureDescription>
                  Інтернет-магазин легко розширити: додати нові категорії,
                  змінити валюту, запустити акції або інтегрувати з
                  маркетплейсами. Ми проєктуємо платформу з урахуванням вашого
                  росту.
                </FeatureDescription>
              </FeatureContent>
            </FeatureCard>
          </FeaturesGrid>

          <FeaturesAction
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <FeaturesButton
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(94, 234, 212, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Замовити консультацію
            </FeaturesButton>
          </FeaturesAction>
        </FeaturesContainer>

        <FeaturesDecoration />
      </EcommerceFeaturesSection>

      <EcommerceStagesSection
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: window.innerWidth <= 768 ? '2.5rem' : window.innerWidth <= 1024 ? '3.2rem' : '4rem',
              fontWeight: 800,
              color: 'var(--accent-color)',
              marginBottom: window.innerWidth <= 768 ? '3rem' : '6rem',
              position: 'relative',
              textAlign: 'center',
              textShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            }}
          >
            Етапи створення інтернет-магазину
            <motion.div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: window.innerWidth <= 768 ? '100px' : '150px',
                height: '4px',
                background:
                  'linear-gradient(90deg, transparent, var(--accent-color), transparent)',
                borderRadius: '4px',
              }}
              animate={{
                width: ['0%', window.innerWidth <= 768 ? '100px' : '150px'],
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
              fontSize: window.innerWidth <= 768 ? '1.1rem' : '1.3rem',
              maxWidth: window.innerWidth <= 768 ? '90%' : '1000px',
              textAlign: 'center',
              margin: window.innerWidth <= 768 ? '0 auto 2rem' : '0 auto 4rem',
              color: 'var(--text-secondary)',
              padding: window.innerWidth <= 768 ? '0 1rem' : '0',
            }}
          >
            Ми працюємо поетапно, прозоро й системно — щоб ви розуміли, на якому
            етапі знаходиться проєкт і що отримаєте в результаті:
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
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {[
              {
                icon: <FaSearch />,
                title: 'Аналіз ніші та цільової аудиторії',
                description:
                  'Вивчаємо ринок, конкурентів і поведінку ваших потенційних покупців. Формуємо структуру сайту, визначаємо ключовий функціонал і точки зростання.',
              },
              {
                icon: <FaSitemap />,
                title: 'Прототипування та структура каталогу',
                description:
                  'Створюємо логічну схему сторінок, меню, фільтрів, карток товарів. Розробляємо зручну архітектуру, яка спрощує навігацію та сприяє SEO.',
              },
              {
                icon: <FaPencilRuler />,
                title: 'Дизайн і розробка функціоналу',
                description:
                  'Створюємо індивідуальний дизайн з урахуванням UX/UI, адаптуємо під мобільні пристрої. Реалізуємо кошик, оплату, доставку, реєстрацію, особистий кабінет тощо.',
              },
              {
                icon: <FaRocket />,
                title: 'Тестування, запуск і підтримка',
                description:
                  'Перевіряємо сайт на помилки, швидкість, адаптивність і коректність усіх інтеграцій. Після запуску — супроводжуємо, оновлюємо, консультуємо.',
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
                    alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center',
                    justifyContent: window.innerWidth <= 768 ? 'flex-start' : 'space-between',
                    flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
                    gap: window.innerWidth <= 768 ? '1.5rem' : '2rem',
                    padding: window.innerWidth <= 768 ? '1.5rem' : '2rem',
                    width: window.innerWidth <= 768 ? '95%' : window.innerWidth <= 1024 ? '90%' : '1000px',
                    maxWidth: window.innerWidth <= 768 ? '400px' : 'none',
                    height: window.innerWidth <= 768 ? 'auto' : '180px',
                    minHeight: window.innerWidth <= 768 ? '300px' : '180px',
                    background: 'rgba(16, 24, 39, 0.2)',
                    backdropFilter: 'blur(5px)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    margin: window.innerWidth <= 768 ? '0 auto' : '0',
                  }}
                  whileHover={{
                    scale: window.innerWidth <= 768 ? 1.01 : 1.02,
                    transition: { duration: 0.3 },
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(94, 234, 212, 0.2)',
                  }}
                >
                  {/* Верхняя строка на мобильном: номер и иконка */}
                  {window.innerWidth <= 768 && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      marginBottom: '1rem'
                    }}>
                      {/* Номер этапа */}
                      <motion.div
                        style={{
                          width: '60px',
                          height: '60px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '2.5rem',
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
                          width: '80px',
                          height: '80px',
                          borderRadius: '50%',
                          background:
                            'linear-gradient(135deg, var(--accent-color) 0%, rgba(59, 130, 246, 0.8) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.8rem',
                          color: 'white',
                          boxShadow: '0 10px 30px rgba(94, 234, 212, 0.4)',
                          position: 'relative',
                          flexShrink: 0,
                        }}
                        whileHover={{
                          boxShadow: '0 15px 40px rgba(94, 234, 212, 0.6)',
                          scale: 1.05,
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
                  )}

                  {/* Десктопная версия номера */}
                  {window.innerWidth > 768 && (
                    <motion.div
                      style={{
                        width: window.innerWidth <= 1024 ? '80px' : '100px',
                        height: window.innerWidth <= 1024 ? '80px' : '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: window.innerWidth <= 1024 ? '3rem' : '4rem',
                        fontWeight: '900',
                        color: 'rgba(94, 234, 212, 0.8)',
                        textShadow: '0 2px 10px rgba(94, 234, 212, 0.4)',
                        flexShrink: 0,
                      }}
                    >
                      {index + 1}
                    </motion.div>
                  )}

                  {/* Десктопная версия иконки */}
                  {window.innerWidth > 768 && (
                    <motion.div
                      style={{
                        width: window.innerWidth <= 1024 ? '100px' : '120px',
                        height: window.innerWidth <= 1024 ? '100px' : '120px',
                        borderRadius: '50%',
                        background:
                          'linear-gradient(135deg, var(--accent-color) 0%, rgba(59, 130, 246, 0.8) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: window.innerWidth <= 1024 ? '2rem' : '2.5rem',
                        color: 'white',
                        boxShadow: '0 10px 30px rgba(94, 234, 212, 0.4)',
                        position: 'relative',
                        flexShrink: 0,
                      }}
                      whileHover={{
                        boxShadow: '0 15px 40px rgba(94, 234, 212, 0.6)',
                        scale: 1.05,
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
                  )}

                  {/* Текстовый блок */}
                  <motion.div
                    style={{
                      background: 'rgba(10, 15, 25, 0.85)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      padding: window.innerWidth <= 768 ? '1rem 1.5rem' : '1.5rem 2rem',
                      border: '1px solid rgba(94, 234, 212, 0.3)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
                      width: window.innerWidth <= 768 ? '100%' : window.innerWidth <= 1024 ? 'calc(100% - 200px)' : 'calc(100% - 250px)',
                      height: window.innerWidth <= 768 ? 'auto' : '160px',
                      minHeight: window.innerWidth <= 768 ? '120px' : '160px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: window.innerWidth <= 768 ? '1.2rem' : window.innerWidth <= 1024 ? '1.3rem' : '1.5rem',
                        fontWeight: 700,
                        marginBottom: window.innerWidth <= 768 ? '0.5rem' : '0.8rem',
                        color: '#FFFFFF',
                        textShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
                        lineHeight: window.innerWidth <= 768 ? '1.3' : '1.4',
                      }}
                    >
                      {step.title}
                    </h3>

                    <p
                      style={{
                        fontSize: window.innerWidth <= 768 ? '0.9rem' : '1rem',
                        lineHeight: window.innerWidth <= 768 ? 1.4 : 1.5,
                        color: '#FFFFFF',
                        overflow: 'hidden',
                        textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)',
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>

                {/* Вертикальная линия между блоками */}
                {index < 3 && (
                  <motion.div
                    style={{
                      width: '4px',
                      height: window.innerWidth <= 768 ? '3rem' : '5rem',
                      background:
                        'linear-gradient(to bottom, var(--accent-color), rgba(59, 130, 246, 0.1))',
                      borderRadius: '4px',
                      margin: window.innerWidth <= 768 ? '0 auto' : '0',
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: window.innerWidth <= 768 ? '3rem' : '5rem' }}
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
              scale: 1.05,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            style={{
              padding: window.innerWidth <= 768 ? '0.8rem 2rem' : '1rem 2.5rem',
              fontSize: window.innerWidth <= 768 ? '1rem' : '1.2rem',
              fontWeight: 'bold',
              background: 'var(--accent-color)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              margin: window.innerWidth <= 768 ? '3rem auto 0' : '5rem auto 0',
              zIndex: 1,
              position: 'relative',
              display: 'block',
            }}
          >
            Замовити розробку
          </motion.button>
        </div>
      </EcommerceStagesSection>

      <EcommercePricingSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PricingWave />

        <PricingContainer>
          <PricingTitle
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Вартість і терміни розробки інтернет-магазину
          </PricingTitle>

          <PricingContent>
            <PricingCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <PricingText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Ціна створення інтернет-магазину залежить від складності
                функціоналу, кількості сторінок, інтеграцій та індивідуального
                дизайну. Ми не використовуємо шаблонних рішень, тому кожен
                проєкт — унікальний.
              </PricingText>

              <PricingFactorsContainer
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
                  display: 'grid',
                  gridTemplateColumns: windowWidth <= 768 ? '1fr' : 'repeat(2, 1fr)',
                  gap: windowWidth <= 480 ? '1rem' : windowWidth <= 768 ? '1.2rem' : '2rem',
                }}
              >
                <PricingFactor variants={itemVariants}>
                  <PricingFactorIcon>
                    <FaCode />
                  </PricingFactorIcon>
                  <PricingFactorTitle>
                    Складність функціоналу
                  </PricingFactorTitle>
                  <PricingFactorDescription>
                    Кількість та складність функцій: фільтри товарів, особистий
                    кабінет, порівняння, збереження кошика, мультивалютність.
                  </PricingFactorDescription>
                </PricingFactor>

                <PricingFactor variants={itemVariants}>
                  <PricingFactorIcon>
                    <FaLink />
                  </PricingFactorIcon>
                  <PricingFactorTitle>Інтеграції</PricingFactorTitle>
                  <PricingFactorDescription>
                    Підключення платіжних систем, служб доставки, CRM, ERP,
                    систем аналітики, сервісів розсилки.
                  </PricingFactorDescription>
                </PricingFactor>

                <PricingFactor variants={itemVariants}>
                  <PricingFactorIcon>
                    <FaPencilRuler />
                  </PricingFactorIcon>
                  <PricingFactorTitle>Дизайн</PricingFactorTitle>
                  <PricingFactorDescription>
                    Від базового стильного оформлення до повністю кастомного
                    дизайну з анімаціями та індивідуальною графікою.
                  </PricingFactorDescription>
                </PricingFactor>

                <PricingFactor variants={itemVariants}>
                  <PricingFactorIcon>
                    <FaClock />
                  </PricingFactorIcon>
                  <PricingFactorTitle>Терміни розробки</PricingFactorTitle>
                  <PricingFactorDescription>
                    В середньому проєкт займає від 4 до 12 тижнів, залежно від
                    складності та кількості сторінок.
                  </PricingFactorDescription>
                </PricingFactor>
              </PricingFactorsContainer>

              <PriceDependenciesSection
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <PriceDependenciesTitle>
                  Від чого залежить ціна
                </PriceDependenciesTitle>
                <PriceDependenciesList>
                  <PriceDependencyItem
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    Обсяг каталогу товарів та складність фільтрації.
                  </PriceDependencyItem>
                  <PriceDependencyItem
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Необхідні інтеграції: платіжні системи, доставка, CRM,
                    склад.
                  </PriceDependencyItem>
                  <PriceDependencyItem
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    Наявність особистого кабінету, бонусної системи,
                    мультивалютності тощо.
                  </PriceDependencyItem>
                  <PriceDependencyItem
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    Індивідуальний або типовий дизайн.
                  </PriceDependencyItem>
                  <PriceDependencyItem
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    Потрібна чи ні подальша технічна підтримка.
                  </PriceDependencyItem>
                </PriceDependenciesList>
              </PriceDependenciesSection>

              <PricingText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                style={{ fontWeight: '500', color: 'var(--text-primary)' }}
              >
                Для визначення точної вартості та термінів проводимо детальний
                аналіз проєкту. Ми допоможемо вам визначитися з оптимальним
                набором функцій для успішного старту, а потім масштабувати
                бізнес.
              </PricingText>

              <PricingCTA
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.7)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                  style={{
                    padding: '1rem 2.5rem',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    background: 'var(--accent-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    zIndex: 1,
                    position: 'relative',
                  }}
                >
                  Отримати безкоштовну консультацію
                </motion.button>
              </PricingCTA>
            </PricingCard>
          </PricingContent>
        </PricingContainer>
      </EcommercePricingSection>

      <EcommerceFaqSection
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
                question: 'Скільки коштує розробка інтернет-магазину?',
                answer:
                  'Вартість залежить від кількості функцій та складності проекту. Ми розробляємо інтернет-магазини індивідуально під ваші потреби, тому точну ціну можна визначити після оцінки вимог і специфікацій.',
              },
              {
                question: 'Скільки часу займає розробка інтернет-магазину?',
                answer:
                  'Терміни варіюються в залежності від складності проєкту. Мінімальний термін — від 3 тижнів, але зазвичай на розробку потрібно 4-6 тижнів. У цей час входять дизайн, розробка функціоналу, тестування і запуск.',
              },
              {
                question: 'Чи надається підтримка після запуску?',
                answer:
                  'Так, ми надаємо технічну підтримку після запуску інтернет-магазину. Ви можете звертатися за допомогою щодо технічних питань, оновлень або додаткових налаштувань.',
              },
              {
                question: 'Чи потрібно замовляти домен і хостинг самостійно?',
                answer:
                  'Ми можемо допомогти з вибором домену та хостингу або налаштувати їх для вас. Усі питання з хостингом і доменом ми обговорюємо на етапі підготовки проєкту.',
              },
              {
                question:
                  'Чи можна інтегрувати магазин з маркетплейсами та соцмережами?',
                answer:
                  'Так, ми інтегруємо інтернет-магазин з маркетплейсами (Prom, Rozetka) та соціальними мережами (Facebook, Instagram) для продажу та реклами.',
              },
              {
                question: 'Чи підходять ваші магазини для мобільних пристроїв?',
                answer:
                  "Так, ми створюємо адаптивний дизайн, який дозволяє інтернет-магазину коректно відображатися на всіх типах пристроїв — смартфонах, планшетах та комп'ютерах.",
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
              onClick={openModal}
            >
              Напишіть нам
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </EcommerceFaqSection>
      
      {/* Modal Window */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default EcommercePage;
