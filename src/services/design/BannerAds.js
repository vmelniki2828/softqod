import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaArrowRight,
  FaLightbulb,
  FaPalette,
  FaChartLine,
  FaRobot,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaClock,
  FaUsers,
  FaMobile,
  FaDesktop,
  FaRocket,
  FaCoins,
  FaBrain,
  FaBolt,
  FaShoppingCart,
  FaPlus,
  FaPencilRuler,
  FaMobileAlt,
  FaSyncAlt,
  FaGraduationCap,
  FaGamepad,
  FaFilter,
  FaListAlt,
  FaMoneyBillWave,
  FaExpand,
  FaTv,
  FaStore,
  FaChessKnight,
  FaClipboardCheck,
  FaPaintBrush,
  FaIndustry,
  FaSitemap,
  FaHandshake,
  FaBuilding,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(
    125deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  border-radius: 20px;
  margin-bottom: 4rem;
  color: white;
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
        circle at 20% 80%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 40%
      );
    z-index: 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 0 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4.2rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  span {
    position: relative;
    display: inline-block;
    color: var(--accent-color-light);
    -webkit-text-fill-color: currentColor;
    text-fill-color: currentColor;
    margin: 0 0.2rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--accent-color-light);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 500px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    background: #ff7b00;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(255, 123, 0, 0.4);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroBanner = styled(motion.div)`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  @media (max-width: 992px) {
    order: 1;
    height: 350px;
  }
`;

const BannerContainer = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 320px;
  transform-style: preserve-3d;
`;

const Banner3D = styled(motion.div)`
  width: 300px;
  height: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotateY(5deg) rotateX(5deg);
  transform-style: preserve-3d;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px;
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.2),
    -20px -20px 60px rgba(255, 255, 255, 0.1);
  overflow: hidden;
  perspective: 1000px;
`;

const BannerElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BannerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BannerLogo = styled.div`
  width: 40px;
  height: 40px;
  background: var(--accent-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const BannerTagline = styled.div`
  padding: 4px 12px;
  background: rgba(0, 0, 0, 0.1);
  color: #333;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
`;

const BannerContent = styled.div`
  text-align: center;
`;

const BannerTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const BannerText = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const BannerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BannerPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;

  span {
    font-size: 0.9rem;
    font-weight: normal;
    opacity: 0.7;
    text-decoration: line-through;
  }
`;

const BannerCta = styled.button`
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.8rem;
  cursor: pointer;
`;

const BannerGlow = styled(motion.div)`
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(
    circle at center,
    rgba(var(--accent-color-rgb), 0.5) 0%,
    transparent 70%
  );
  filter: blur(60px);
  opacity: 0.3;
  z-index: -1;
`;

const FloatingObject = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.8rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const FloatingBar = styled(motion.div)`
  position: absolute;
  height: 10px;
  border-radius: 5px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const FloatingDot = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const HeroFeatures = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeroFeatureIcon = styled.div`
  color: var(--accent-color-light);
  font-size: 1.2rem;
  display: flex;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  position: relative;
  line-height: 1.6;
`;

const FeatureCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--accent-color);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 10px;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.3;
  }
`;

const SliderSection = styled.section`
  margin: 6rem 0;
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    margin: 4rem 0;
    padding: 2.5rem;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    margin: 3rem 0;
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    margin: 2rem 0;
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const FeaturesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const FeaturesSecondGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const SliderTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

const SliderIntro = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 3rem;
  color: var(--text-secondary);

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(var(--accent-color-rgb), 0.3);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
    width: 85%;
    border-radius: 14px;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 90%;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: 95%;
    border-radius: 10px;
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  opacity: 0.9;
  filter: drop-shadow(0 0 8px rgba(var(--accent-color-rgb), 0.3));

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 1.7rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  margin: 3rem 0;

  @media (max-width: 1024px) {
    height: 350px;
    margin: 2.5rem 0;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin: 2rem 0;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    height: 280px;
    margin: 1.5rem 0;
    border-radius: 10px;
  }
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
`;

const Slide = styled(motion.div)`
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const SliderControls = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem auto;
  z-index: 10;

  @media (max-width: 768px) {
    gap: 1rem;
    margin: 1.5rem auto;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    margin: 1rem auto;
  }
`;

const SliderButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--text-primary);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: var(--accent-color);
    color: white;
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(var(--accent-color-rgb), 0.3);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
  }
`;

const ProcessSection = styled.section`
  margin: 6rem 0;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    margin: 4rem 0;
    padding: 3rem 1rem;
  }

  @media (max-width: 768px) {
    margin: 3rem 0;
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    margin: 2rem 0;
    padding: 1.5rem 0.5rem;
  }
`;

const ProcessTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2.5rem;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;

    &::after {
      width: 50px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const ProcessTimeline = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--accent-color);
    opacity: 0.3;
  }

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0.5rem;
    gap: 2rem;

    &::before {
      left: 2rem;
      transform: none;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem 0.5rem;
    gap: 1.5rem;

    &::before {
      left: 1.5rem;
    }
  }
`;

const ProcessStep = styled.div`
  position: relative;
  width: 48%;
  padding: 2.5rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-5px);
  }

  &:nth-child(odd) {
    margin-left: auto;
    text-align: left;
    margin-top: -4rem;
  }

  &:nth-child(even) {
    margin-right: auto;
    text-align: right;
    margin-top: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: var(--accent-color);
    border-radius: 50%;
    z-index: 1;
    transform: translateY(-50%);
  }

  &:nth-child(odd)::before {
    left: -10px;
  }

  &:nth-child(even)::before {
    right: -10px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30px;
    height: 2px;
    background: var(--accent-color);
    transform: translateY(-50%);
  }

  &:nth-child(odd)::after {
    left: -30px;
  }

  &:nth-child(even)::after {
    right: -30px;
  }

  @media (max-width: 1024px) {
    width: 45%;
    padding: 2rem;
    border-radius: 16px;

    &:nth-child(odd) {
      margin-top: -3rem;
    }

    &:nth-child(even) {
      margin-top: 2rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 4rem !important;
    margin-right: 0 !important;
    text-align: left !important;
    padding: 1.5rem;
    border-radius: 12px;

    &:nth-child(odd) {
      margin-top: 0;
    }

    &:nth-child(even) {
      margin-top: 0;
    }

    &::before {
      left: -2rem !important;
      right: auto !important;
      width: 16px;
      height: 16px;
    }

    &::after {
      left: -2.5rem !important;
      right: auto !important;
      width: 25px;
    }
  }

  @media (max-width: 480px) {
    margin-left: 3rem !important;
    padding: 1.2rem;

    &::before {
      left: -1.5rem !important;
      width: 14px;
      height: 14px;
    }

    &::after {
      left: -2rem !important;
      width: 20px;
    }
  }
`;

const ProcessIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    width: 70px;
    height: 70px;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    width: 50px;
    height: 50px;
    margin-bottom: 0.8rem;
  }
`;

const ProcessNumber = styled.div`
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 0.8rem;
  font-weight: 700;
  opacity: 0.9;
  letter-spacing: 3px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    letter-spacing: 1px;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;
  }
`;

const ProcessText = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }
`;

const ProcessDetails = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 1024px) {
    margin-top: 1.8rem;
    padding-top: 1.8rem;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.2rem;
    padding-top: 1.2rem;
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const ProcessDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0.9;
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-3px);
  }

  @media (max-width: 1024px) {
    padding: 1.2rem;
    gap: 0.6rem;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.5rem;
    font-size: 0.95rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
    gap: 0.4rem;
    font-size: 0.9rem;
    border-radius: 8px;
  }
`;

const ProcessDetailIcon = styled.div`
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    width: 45px;
    height: 45px;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    width: 35px;
    height: 35px;
    margin-bottom: 0.4rem;
  }
`;

const ProcessDetailText = styled.span`
  font-size: 1rem;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ExamplesSection = styled.section`
  margin: 6rem 0;
  padding: 4rem 0;
  position: relative;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  border-radius: 20px;
`;

const ExamplesTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ExamplesDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 3rem;
  color: var(--text-secondary);
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const FilterButton = styled.button`
  background: ${props =>
    props.active ? 'var(--accent-color)' : 'rgba(255,255,255,0.05)'};
  color: ${props => (props.active ? '#fff' : 'var(--text-primary)')};
  border: 1px solid
    ${props => (props.active ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)')};
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: ${props =>
      props.active ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'};
    transform: translateY(-2px);
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const BannerCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.3);
  }
`;

const BannerImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;
  background-color: #111;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  }
`;

const BannerInfo = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BannerType = styled.div`
  background: rgba(var(--accent-color-rgb), 0.2);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  align-self: flex-start;
`;

const BannerDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  flex: 1;
`;

const BannerTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const BannerTag = styled.span`
  background: rgba(255, 255, 255, 0.05);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 4rem;
  font-size: 1.2rem;
  color: var(--text-secondary);
  grid-column: 1 / -1;
`;

const AdditionalInfo = styled.div`
  max-width: 1000px;
  margin: 4rem auto 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const AdditionalInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const AdditionalInfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const AdvantagesSection = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  border-radius: 30px;
  margin: 6rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 75% 25%,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 50%
    );
    z-index: 0;
  }

  @media (max-width: 1024px) {
    padding: 4rem 0;
    margin: 4rem 0;
    border-radius: 24px;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
    margin: 3rem 0;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
    margin: 2rem 0;
    border-radius: 16px;
  }
`;

const AdvantagesTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;

const AdvantagesDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
`;

const AdvantageCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  padding: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  height: 100%;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: var(--accent-color);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover::before {
    width: 100%;
    opacity: 0.05;
  }

  @media (max-width: 1024px) {
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 10px;
  }
`;

const AdvantageIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent-color);
    border-radius: 20px;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
    z-index: -1;
  }

  ${AdvantageCard}:hover & {
    color: white;

    &::after {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 1024px) {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    border-radius: 16px;

    &::after {
      border-radius: 16px;
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.6rem;
    margin-bottom: 1rem;
    border-radius: 12px;

    &::after {
      border-radius: 12px;
    }
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    border-radius: 10px;

    &::after {
      border-radius: 10px;
    }
  }
`;

const AdvantageNumber = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 4rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  z-index: 0;
  transition: all 0.3s ease;

  ${AdvantageCard}:hover & {
    color: rgba(var(--accent-color-rgb), 0.05);
    transform: scale(1.2);
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    top: 1.2rem;
    right: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    top: 1rem;
    right: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    top: 0.8rem;
    right: 0.8rem;
  }
`;

const AdvantageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const AdvantageDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
  flex: 1;

  @media (max-width: 1024px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const TargetSection = styled.section`
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(145deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1));
  border-radius: 30px;
  margin: 6rem 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.03)' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")
      repeat;
    z-index: 0;
  }

  @media (max-width: 1024px) {
    padding: 4rem 0;
    margin: 4rem 0;
    border-radius: 24px;
  }

  @media (max-width: 768px) {
    padding: 3rem 0;
    margin: 3rem 0;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
    margin: 2rem 0;
    border-radius: 16px;
  }
`;

const TargetTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  }
`;

const TargetDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 4rem;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7;
    margin: 0 auto 3rem;
    max-width: 700px;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 auto 2.5rem;
    max-width: 600px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0 auto 2rem;
    max-width: none;
    padding: 0 0.5rem;
  }
`;

const TabContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    max-width: 1000px;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    max-width: none;
    padding: 0 0.5rem;
  }
`;

const TabsHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    margin-bottom: 2.5rem;
    gap: 0.8rem;
    border-radius: 12px;
    padding: 0.4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    gap: 0.5rem;
    border-radius: 10px;
    padding: 0.3rem;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    border-radius: 8px;
    padding: 0.2rem;
    max-width: 300px;
  }
`;

const TabButton = styled.button`
  background: ${props =>
    props.active ? 'var(--accent-color)' : 'transparent'};
  color: ${props => (props.active ? 'white' : 'var(--text-primary)')};
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props =>
      props.active ? 'var(--accent-color)' : 'rgba(255, 255, 255, 0.05)'};
  }

  @media (max-width: 1024px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    border-radius: 6px;
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 5px;
  }
`;

const TabContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 1024px) {
    gap: 1.8rem;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.2rem;
  }
`;

const HexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.8rem;
    max-width: 1000px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: 700px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    max-width: none;
  }
`;

const HexItem = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 20px 20px 0 0;
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    &::before {
      opacity: 1;
      background: linear-gradient(
        90deg,
        var(--accent-color),
        var(--accent-color-dark)
      );
    }
  }

  @media (max-width: 1024px) {
    padding: 2.2rem;
    border-radius: 16px;

    &::before {
      border-radius: 16px 16px 0 0;
    }

    &:hover {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 14px;

    &::before {
      border-radius: 14px 14px 0 0;
      height: 3px;
    }

    &:hover {
      transform: translateY(-6px);
    }
  }

  @media (max-width: 480px) {
    padding: 1.8rem;
    border-radius: 12px;

    &::before {
      border-radius: 12px 12px 0 0;
      height: 3px;
    }

    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const HexIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  display: inline-block;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    background: rgba(var(--accent-color-rgb), 0.1);
    border-radius: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.3s ease;
  }

  ${HexItem}:hover &::after {
    transform: translate(-50%, -50%) rotate(45deg);
    background: rgba(var(--accent-color-rgb), 0.2);
  }

  @media (max-width: 1024px) {
    font-size: 2.3rem;
    margin-bottom: 1.3rem;

    &::after {
      width: 45px;
      height: 45px;
      border-radius: 10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.1rem;
    margin-bottom: 1.2rem;

    &::after {
      width: 42px;
      height: 42px;
      border-radius: 8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1rem;

    &::after {
      width: 40px;
      height: 40px;
      border-radius: 8px;
    }
  }
`;

const HexTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
`;

const HexDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex: 1;

  @media (max-width: 1024px) {
    font-size: 1.05rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

// Новые стили для финального блока CTA
const FinalCTASection = styled.section`
  margin: 6rem 0 4rem;
  padding: 4rem;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.2),
    rgba(0, 0, 0, 0.3)
  );
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at 70% 30%,
      rgba(var(--accent-color-rgb), 0.3),
      transparent 60%
    );
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 17.0001H5C3.89543 17.0001 3 16.1046 3 15.0001V5.00006C3 3.89549 3.89543 3.00006 5 3.00006H19C20.1046 3.00006 21 3.89549 21 5.00006V13.0001M13 17.0001L21 17.0001M13 17.0001V21.0001M21 17.0001V21.0001M13 21.0001H21' stroke='rgba(255, 255, 255, 0.2)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
      repeat;
    opacity: 0.1;
    z-index: 0;
  }
`;

const FinalCTATitle = styled.h2`
  font-size: 3rem;
  color: var(--text-primary);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const FinalCTAText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;
  text-align: center;
`;

const ChecklistContainer = styled.div`
  max-width: 700px;
  margin: 0 auto 3rem;
  background: rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 20px;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 20px 20px 0 0;
  }
`;

const ChecklistTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const ChecklistItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ChecklistItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding-left: 0.5rem;
  font-size: 1.1rem;
  color: var(--text-secondary);

  &::before {
    content: '–';
    color: var(--accent-color);
    font-weight: bold;
  }
`;

const FinalNote = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-secondary);
  text-align: center;
  max-width: 700px;
  margin: 2rem auto;
  font-style: italic;
  position: relative;
  z-index: 1;

  &::before,
  &::after {
    content: '"';
    color: var(--accent-color);
    font-size: 2rem;
    font-style: normal;
  }
`;

// Новые стили для блока FAQ
const shimmerEffect = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
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

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
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

  @media (max-width: 1024px) {
    max-width: 800px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    max-width: none;
    padding: 0 1rem;
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

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 2.5rem;

    &::before {
      font-size: 4rem;
      top: -25px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;

    &::before {
      font-size: 3.5rem;
      top: -20px;
    }

    &::after {
      width: 60px;
      height: 3px;
      bottom: -12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;

    &::before {
      font-size: 2.5rem;
      top: -15px;
    }

    &::after {
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

  @media (max-width: 480px) {
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

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 15px rgba(94, 234, 212, 0.1);
    border-color: rgba(94, 234, 212, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    border-radius: 10px;

    &:hover {
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

  @media (max-width: 768px) {
    padding: 1.5rem;

    &::after {
      left: 1.5rem;
      right: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    align-items: flex-start;

    &::after {
      left: 1.2rem;
      right: 1.2rem;
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

  ${FaqQuestion}:hover & {
    color: var(--accent-color);
    transform: translateZ(10px);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
    margin-right: 0.5rem;
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

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
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

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    font-size: 1rem;

    &::before {
      left: 1.5rem;
      right: 1.5rem;
    }

    ul {
      padding-left: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1.2rem 1.2rem;
    font-size: 0.95rem;
    line-height: 1.6;

    &::before {
      left: 1.2rem;
      right: 1.2rem;
    }

    ul {
      padding-left: 1rem;
    }

    li {
      margin-bottom: 0.4rem;
    }

    p {
      margin-bottom: 0.6rem;
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

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    border-radius: 15px;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
    gap: 1rem;
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

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.4;
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

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 25px;
    width: 100%;
    max-width: 250px;
  }
`;

const HeroBannerTitle = styled.h3`
  color: #333;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BannerAds = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeTab, setActiveTab] = useState('forWhom');
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { t } = useTranslation();

  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const features = [
    {
      icon: <FaRocket />,
      title: t('BannerAdsPage.benefits.speed.title'),
      description: t('BannerAdsPage.benefits.speed.description'),
    },
    {
      icon: <FaCoins />,
      title: t('BannerAdsPage.benefits.budget.title'),
      description: t('BannerAdsPage.benefits.budget.description'),
    },
    {
      icon: <FaChartLine />,
      title: t('BannerAdsPage.benefits.optimization.title'),
      description: t('BannerAdsPage.benefits.optimization.description'),
    },
    {
      icon: <FaUsers />,
      title: t('BannerAdsPage.benefits.personalization.title'),
      description: t('BannerAdsPage.benefits.personalization.description'),
    },
    {
      icon: <FaBrain />,
      title: t('BannerAdsPage.benefits.uniqueness.title'),
      description: t('BannerAdsPage.benefits.uniqueness.description'),
    },
  ];

  const services = [
    {
      icon: <FaPalette />,
      title: t('BannerAdsPage.services.static.title'),
      description: t('BannerAdsPage.services.static.description'),
    },
    {
      icon: <FaBolt />,
      title: t('BannerAdsPage.services.animated.title'),
      description: t('BannerAdsPage.services.animated.description'),
    },
    {
      icon: <FaShoppingCart />,
      title: t('BannerAdsPage.services.remarketing.title'),
      description: t('BannerAdsPage.services.remarketing.description'),
    },
    {
      icon: <FaPlus />,
      title: t('BannerAdsPage.services.massGeneration.title'),
      description: t('BannerAdsPage.services.massGeneration.description'),
    },
    {
      icon: <FaRobot />,
      title: t('BannerAdsPage.services.textGeneration.title'),
      description: t('BannerAdsPage.services.textGeneration.description'),
    },
  ];

  const processSteps = [
    {
      icon: <FaUsers />,
      number: '01',
      title: t('BannerAdsPage.process.step1.title'),
      description: t('BannerAdsPage.process.step1.description'),
      details: [
        { icon: <FaChartLine />, text: t('BannerAdsPage.process.step1.item1') },
        { icon: <FaUsers />, text: t('BannerAdsPage.process.step1.item2') },
        { icon: <FaLightbulb />, text: t('BannerAdsPage.process.step1.item3') },
      ],
    },
    {
      icon: <FaRobot />,
      number: '02',
      title: t('BannerAdsPage.process.step2.title'),
      description: t('BannerAdsPage.process.step2.description'),
      details: [
        { icon: <FaRobot />, text: t('BannerAdsPage.process.step2.item1') },
        { icon: <FaPalette />, text: t('BannerAdsPage.process.step2.item2') },
        { icon: <FaCheck />, text: t('BannerAdsPage.process.step2.item3') },
      ],
    },
    {
      icon: <FaPalette />,
      number: '03',
      title: t('BannerAdsPage.process.step3.title'),
      description: t('BannerAdsPage.process.step3.description'),
      details: [
        { icon: <FaDesktop />, text: t('BannerAdsPage.process.step3.item1') },
        {
          icon: <FaPencilRuler />,
          text: t('BannerAdsPage.process.step3.item2'),
        },
        { icon: <FaCheck />, text: t('BannerAdsPage.process.step3.item3') },
      ],
    },
    {
      icon: <FaMobile />,
      number: '04',
      title: t('BannerAdsPage.process.step4.title'),
      description: t('BannerAdsPage.process.step4.description'),
      details: [
        { icon: <FaDesktop />, text: t('BannerAdsPage.process.step4.item1') },
        { icon: <FaMobile />, text: t('BannerAdsPage.process.step4.item2') },
        { icon: <FaBolt />, text: t('BannerAdsPage.process.step4.item3') },
      ],
    },
    {
      icon: <FaRocket />,
      number: '05',
      title: t('BannerAdsPage.process.step5.title'),
      description: t('BannerAdsPage.process.step5.description'),
      details: [
        { icon: <FaChartLine />, text: t('BannerAdsPage.process.step5.item1') },
        { icon: <FaClock />, text: t('BannerAdsPage.process.step5.item2') },
        { icon: <FaCheck />, text: t('BannerAdsPage.process.step5.item3') },
      ],
    },
  ];

  const bannerExamples = [
    {
      id: 1,
      type: 'ecommerce',
      title: t('BannerAdsPage.examples.examples.item1.title'),
      description: t('BannerAdsPage.examples.examples.item1.description'),
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=E-Commerce+Banner',
      tags: [
        'Google Ads',
        'Instagram',
        t('BannerAdsPage.examples.examples.item1.tags1'),
      ],
    },
    {
      id: 2,
      type: 'ecommerce',
      title: t('BannerAdsPage.examples.examples.item2.title'),
      description: t('BannerAdsPage.examples.examples.item2.description'),
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=New+Collection',
      tags: [
        'Facebook',
        t('BannerAdsPage.examples.examples.item2.tags1'),
        'Fashion',
      ],
    },
    {
      id: 3,
      type: 'mobile',
      title: t('BannerAdsPage.examples.examples.item3.title'),
      description: t('BannerAdsPage.examples.examples.item3.description'),
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Mobile+App+Banner',
      tags: [
        'TikTok',
        'Instagram Stories',
        t('BannerAdsPage.examples.examples.item3.tags1'),
      ],
    },
    {
      id: 4,
      type: 'mobile',
      title: t('BannerAdsPage.examples.examples.item4.title'),
      description: t('BannerAdsPage.examples.examples.item4.description'),
      image:
        'https://via.placeholder.com/600x600/1a1a2e/FFFFFF?text=Mobile+Game',
      tags: [
        'App Store',
        'Google Play',
        t('BannerAdsPage.examples.examples.item4.tags1'),
      ],
    },
    {
      id: 5,
      type: 'retargeting',
      title: t('BannerAdsPage.examples.examples.item5.title'),
      description: t('BannerAdsPage.examples.examples.item5.description'),
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Retargeting+Banner',
      tags: [
        t('BannerAdsPage.examples.examples.item5.tags1'),
        t('BannerAdsPage.examples.examples.item5.tags2'),
        t('BannerAdsPage.examples.examples.item5.tags3'),
      ],
    },
    {
      id: 6,
      type: 'education',
      title: t('BannerAdsPage.examples.examples.item6.title'),
      description: t('BannerAdsPage.examples.examples.item6.description'),
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Education+Course',
      tags: [
        t('BannerAdsPage.examples.examples.item6.tags1'),
        t('BannerAdsPage.examples.examples.item6.tags2'),
        t('BannerAdsPage.examples.examples.item6.tags3'),
      ],
    },
    {
      id: 7,
      type: 'niche',
      title: t('BannerAdsPage.examples.examples.item7.title'),
      description: t('BannerAdsPage.examples.examples.item7.description'),
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Gaming+Banner',
      tags: [
        t('BannerAdsPage.examples.examples.item7.tags1'),
        t('BannerAdsPage.examples.examples.item7.tags2'),
        'B2C',
      ],
    },
    {
      id: 8,
      type: 'niche',
      title: t('BannerAdsPage.examples.examples.item8.title'),
      description: t('BannerAdsPage.examples.examples.item8.description'),
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Finance+Service',
      tags: [
        t('BannerAdsPage.examples.examples.item8.tags1'),
        'B2B',
        t('BannerAdsPage.examples.examples.item8.tags2'),
      ],
    },
  ];

  const filters = [
    {
      id: 'all',
      name: t('BannerAdsPage.examples.filters.all'),
      icon: <FaFilter />,
    },
    { id: 'ecommerce', name: 'E-commerce', icon: <FaShoppingCart /> },
    {
      id: 'mobile',
      name: t('BannerAdsPage.examples.filters.mobile'),
      icon: <FaMobileAlt />,
    },
    {
      id: 'retargeting',
      name: t('BannerAdsPage.examples.filters.retargeting'),
      icon: <FaSyncAlt />,
    },
    {
      id: 'education',
      name: t('BannerAdsPage.examples.filters.education'),
      icon: <FaGraduationCap />,
    },
    {
      id: 'niche',
      name: t('BannerAdsPage.examples.filters.niche'),
      icon: <FaGamepad />,
    },
  ];

  const filteredBanners =
    activeFilter === 'all'
      ? bannerExamples
      : bannerExamples.filter(banner => banner.type === activeFilter);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + services.length) % services.length);
  };

  const advantages = [
    {
      id: 1,
      number: '01',
      icon: <FaClock />,
      title: t('BannerAdsPage.advantages.speed.title'),
      description: t('BannerAdsPage.advantages.speed.description'),
    },
    {
      id: 2,
      number: '02',
      icon: <FaListAlt />,
      title: t('BannerAdsPage.advantages.variety.title'),
      description: t('BannerAdsPage.advantages.variety.description'),
    },
    {
      id: 3,
      number: '03',
      icon: <FaBrain />,
      title: t('BannerAdsPage.advantages.creativity.title'),
      description: t('BannerAdsPage.advantages.creativity.description'),
    },
    {
      id: 4,
      number: '04',
      icon: <FaMoneyBillWave />,
      title: t('BannerAdsPage.advantages.budget.title'),
      description: t('BannerAdsPage.advantages.budget.description'),
    },
    {
      id: 5,
      number: '05',
      icon: <FaExpand />,
      title: t('BannerAdsPage.advantages.scaling.title'),
      description: t('BannerAdsPage.advantages.scaling.description'),
    },
    {
      id: 6,
      number: '06',
      icon: <FaTv />,
      title: t('BannerAdsPage.advantages.adaptation.title'),
      description: t('BannerAdsPage.advantages.adaptation.description'),
    },
  ];

  const targetAudience = [
    {
      id: 1,
      icon: <FaStore />,
      title: t('BannerAdsPage.target.ecommerce.title'),
      description: t('BannerAdsPage.target.ecommerce.description'),
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: t('BannerAdsPage.target.mobile.title'),
      description: t('BannerAdsPage.target.mobile.description'),
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      title: t('BannerAdsPage.target.education.title'),
      description: t('BannerAdsPage.target.education.description'),
    },
    {
      id: 4,
      icon: <FaGamepad />,
      title: t('BannerAdsPage.target.gaming.title'),
      description: t('BannerAdsPage.target.gaming.description'),
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: t('BannerAdsPage.target.b2b.title'),
      description: t('BannerAdsPage.target.b2b.description'),
    },
    {
      id: 6,
      icon: <FaChessKnight />,
      title: t('BannerAdsPage.target.agencies.title'),
      description: t('BannerAdsPage.target.agencies.description'),
    },
  ];

  const whyChooseUs = [
    {
      id: 1,
      icon: <FaClock />,
      title: t('BannerAdsPage.whyUs.speed.title'),
      description: t('BannerAdsPage.whyUs.speed.description'),
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: t('BannerAdsPage.whyUs.quality.title'),
      description: t('BannerAdsPage.whyUs.quality.description'),
    },
    {
      id: 3,
      icon: <FaIndustry />,
      title: t('BannerAdsPage.whyUs.experience.title'),
      description: t('BannerAdsPage.whyUs.experience.description'),
    },
    {
      id: 4,
      icon: <FaSitemap />,
      title: t('BannerAdsPage.whyUs.adaptation.title'),
      description: t('BannerAdsPage.whyUs.adaptation.description'),
    },
    {
      id: 5,
      icon: <FaClipboardCheck />,
      title: t('BannerAdsPage.whyUs.transparency.title'),
      description: t('BannerAdsPage.whyUs.transparency.description'),
    },
    {
      id: 6,
      icon: <FaHandshake />,
      title: t('BannerAdsPage.whyUs.pricing.title'),
      description: t('BannerAdsPage.whyUs.pricing.description'),
    },
  ];

  // Данные FAQ
  const faqData = [
    {
      question: t('BannerAdsPage.faq.q1'),
      answer:
      t('BannerAdsPage.faq.a1'),
    },
    {
      question:
      t('BannerAdsPage.faq.q2'),
      answer:
      t('BannerAdsPage.faq.a2'),
    },
    {
      question: t('BannerAdsPage.faq.q3'),
      answer:
      t('BannerAdsPage.faq.a3'),
    },
    {
      question: t('BannerAdsPage.faq.q4'),
      answer:  t('BannerAdsPage.faq.a4'),
    },
    {
      question: t('BannerAdsPage.faq.q5'),
      answer:
      t('BannerAdsPage.faq.a5'),
    },
    {
      question: t('BannerAdsPage.faq.q6'),
      answer:
      t('BannerAdsPage.faq.a6'),
    },
    {
      question: t('BannerAdsPage.faq.q7'),
      answer:
      t('BannerAdsPage.faq.a7'),
    },
  ];

  // Функция для переключения FAQ
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
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t('BannerAdsPage.hero.title')}
            </HeroTitle>

            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t('BannerAdsPage.hero.subtitle')}
            </HeroDescription>

            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
              >
                {t('BannerAdsPage.hero.buttonText')} <FaArrowRight />
              </PrimaryButton>
            </HeroButtons>

            <HeroFeatures
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FeatureItem>
                <HeroFeatureIcon>
                  <FaClock />
                </HeroFeatureIcon>
                <FeatureText>
                  {t('BannerAdsPage.hero.features.fast')}{' '}
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaCheck />
                </HeroFeatureIcon>
                <FeatureText>
                  {t('BannerAdsPage.hero.features.quality')}
                </FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaChartLine />
                </HeroFeatureIcon>
                <FeatureText>
                  {t('BannerAdsPage.hero.features.effective')}
                </FeatureText>
              </FeatureItem>
            </HeroFeatures>
          </HeroContent>

          <HeroBanner
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <BannerGlow
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1.1, 0.8],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <BannerContainer
              animate={{
                y: [0, -15, 0],
                rotateY: [5, -5, 5],
                rotateX: [5, 2, 5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Banner3D>
                <BannerElements>
                  <BannerHeader>
                    <BannerLogo>AI</BannerLogo>
                    <BannerTagline>
                      {t('BannerAdsPage.imgText.text1')}
                    </BannerTagline>
                  </BannerHeader>

                  <BannerContent>
                    <HeroBannerTitle>
                      {t('BannerAdsPage.imgText.text2')}
                    </HeroBannerTitle>
                    <BannerText>{t('BannerAdsPage.imgText.text3')}</BannerText>
                  </BannerContent>

                  <BannerFooter>
                    <BannerPrice>
                      <span>₴2000</span> ₴1000
                    </BannerPrice>
                    <BannerCta onClick={openModal}>
                      {t('BannerAdsPage.imgText.text4')}
                    </BannerCta>
                  </BannerFooter>
                </BannerElements>
              </Banner3D>

              <FloatingObject
                style={{ top: '-10%', right: '0%' }}
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FaPalette />
              </FloatingObject>

              <FloatingObject
                style={{ bottom: '5%', left: '5%' }}
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <FaRobot />
              </FloatingObject>

              <FloatingBar
                style={{ width: '80px', top: '20%', left: '-15%' }}
                animate={{ rotate: [0, 5, 0], x: [0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <FloatingBar
                style={{ width: '60px', bottom: '30%', right: '-10%' }}
                animate={{ rotate: [0, -5, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <FloatingDot
                style={{ top: '40%', left: '-5%' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <FloatingDot
                style={{ bottom: '10%', right: '20%' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </BannerContainer>
          </HeroBanner>
        </HeroContainer>
      </HeroSection>

      <SliderTitle style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        {t('BannerAdsPage.benefits.title')}
      </SliderTitle>
      <Subtitle
        style={{
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto 3rem',
        }}
      >
        {t('BannerAdsPage.benefits.subTitle')}
      </Subtitle>

      <FeaturesContainer>
        <FeaturesGrid>
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>

        <FeaturesSecondGrid>
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 3) * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesSecondGrid>
      </FeaturesContainer>

      <SliderSection>
        <SliderTitle>{t('BannerAdsPage.services.title')}</SliderTitle>
        <SliderIntro>{t('BannerAdsPage.services.subTitle')}</SliderIntro>

        <SliderContainer>
          <Slider style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {services.map((service, index) => (
              <Slide key={index}>
                <ServiceCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ServiceIcon>{service.icon}</ServiceIcon>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                </ServiceCard>
              </Slide>
            ))}
          </Slider>
        </SliderContainer>

        <SliderControls>
          <SliderButton onClick={prevSlide}>
            <FaChevronLeft />
          </SliderButton>
          <SliderButton onClick={nextSlide}>
            <FaChevronRight />
          </SliderButton>
        </SliderControls>

        <SliderIntro style={{ marginTop: '2rem', fontStyle: 'italic' }}>
          {t('BannerAdsPage.services.footerText')}
        </SliderIntro>
      </SliderSection>

      <ProcessSection>
        <ProcessTitle>{t('BannerAdsPage.process.title')}</ProcessTitle>
        <SliderIntro style={{ marginBottom: '4rem' }}>
          {t('BannerAdsPage.process.subTitle')}
        </SliderIntro>
        <ProcessTimeline>
          {processSteps.map((step, index) => (
            <ProcessStep key={index}>
              <ProcessIcon>{step.icon}</ProcessIcon>
              <ProcessNumber>
                {t('BannerAdsPage.process.text')} {step.number}
              </ProcessNumber>
              <FeatureTitle>{step.title}</FeatureTitle>
              <ProcessText>{step.description}</ProcessText>
              <ProcessDetails>
                {step.details.map((detail, detailIndex) => (
                  <ProcessDetailItem key={detailIndex}>
                    <ProcessDetailIcon>{detail.icon}</ProcessDetailIcon>
                    <ProcessDetailText>{detail.text}</ProcessDetailText>
                  </ProcessDetailItem>
                ))}
              </ProcessDetails>
            </ProcessStep>
          ))}
        </ProcessTimeline>
      </ProcessSection>

      <ExamplesSection>
        <ExamplesTitle>{t('BannerAdsPage.examples.title')}</ExamplesTitle>
        <ExamplesDescription>
          {t('BannerAdsPage.examples.subTitle')}
        </ExamplesDescription>

        <FilterContainer>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.icon} {filter.name}
            </FilterButton>
          ))}
        </FilterContainer>

        <GalleryGrid>
          <AnimatePresence>
            {filteredBanners.length > 0 ? (
              filteredBanners.map(banner => (
                <BannerCard
                  key={banner.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <BannerImage src={banner.image} />
                  <BannerInfo>
                    <BannerType>
                      {filters.find(f => f.id === banner.type)?.name ||
                        banner.type}
                    </BannerType>
                    <BannerTitle>{banner.title}</BannerTitle>
                    <BannerDescription>{banner.description}</BannerDescription>
                    <BannerTags>
                      {banner.tags.map((tag, index) => (
                        <BannerTag key={index}>{tag}</BannerTag>
                      ))}
                    </BannerTags>
                  </BannerInfo>
                </BannerCard>
              ))
            ) : (
              <NoResultsMessage>
                Не знайдено банерів даного типу
              </NoResultsMessage>
            )}
          </AnimatePresence>
        </GalleryGrid>

        <AdditionalInfo>
          <AdditionalInfoTitle>
            {t('BannerAdsPage.examples.footerTitle')}
          </AdditionalInfoTitle>
          <AdditionalInfoText>
            {t('BannerAdsPage.examples.footerText1')}
          </AdditionalInfoText>
          <AdditionalInfoText>
            {t('BannerAdsPage.examples.footerText2')}
          </AdditionalInfoText>
        </AdditionalInfo>
      </ExamplesSection>

      <AdvantagesSection>
        <AdvantagesTitle>{t('BannerAdsPage.advantages.title')}</AdvantagesTitle>
        <AdvantagesDescription>
          {t('BannerAdsPage.advantages.subTitle')}
        </AdvantagesDescription>

        <AdvantagesGrid>
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            >
              <AdvantageNumber>{advantage.number}</AdvantageNumber>
              <AdvantageIcon>{advantage.icon}</AdvantageIcon>
              <AdvantageTitle>{advantage.title}</AdvantageTitle>
              <AdvantageDescription>
                {advantage.description}
              </AdvantageDescription>
            </AdvantageCard>
          ))}
        </AdvantagesGrid>
      </AdvantagesSection>

      <TargetSection>
        <TargetTitle>{t('BannerAdsPage.target.title')}</TargetTitle>
        <TargetDescription>{t('BannerAdsPage.target.text')}</TargetDescription>

        <TabContainer>
          <TabsHeader>
            <TabButton
              active={activeTab === 'forWhom'}
              onClick={() => setActiveTab('forWhom')}
            >
              {t('BannerAdsPage.target.subTitle1')}
            </TabButton>
            <TabButton
              active={activeTab === 'whyUs'}
              onClick={() => setActiveTab('whyUs')}
            >
              {t('BannerAdsPage.target.subTitle2')}
            </TabButton>
          </TabsHeader>

          <AnimatePresence mode="wait">
            {activeTab === 'forWhom' && (
              <TabContent
                key="forWhom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HexGrid>
                  {targetAudience.map((item, index) => (
                    <HexItem
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <HexIcon>{item.icon}</HexIcon>
                      <HexTitle>{item.title}</HexTitle>
                      <HexDescription>{item.description}</HexDescription>
                    </HexItem>
                  ))}
                </HexGrid>
              </TabContent>
            )}

            {activeTab === 'whyUs' && (
              <TabContent
                key="whyUs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <HexGrid>
                  {whyChooseUs.map((item, index) => (
                    <HexItem
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true, margin: '-100px' }}
                    >
                      <HexIcon>{item.icon}</HexIcon>
                      <HexTitle>{item.title}</HexTitle>
                      <HexDescription>{item.description}</HexDescription>
                    </HexItem>
                  ))}
                </HexGrid>
              </TabContent>
            )}
          </AnimatePresence>
        </TabContainer>
      </TargetSection>

      {/* Добавляю новый финальный блок с призывом к действию */}
      <FinalCTASection>
        <FinalCTATitle>{t('BannerAdsPage.checklist.title')}</FinalCTATitle>
        <FinalCTAText>{t('BannerAdsPage.checklist.subTitle')}</FinalCTAText>

        <ChecklistContainer>
          <ChecklistTitle>{t('BannerAdsPage.checklist.text')}</ChecklistTitle>
          <ChecklistItems>
            <ChecklistItem>
              {t('BannerAdsPage.checklist.items.item1')}
            </ChecklistItem>
            <ChecklistItem>
              {t('BannerAdsPage.checklist.items.item2')}
            </ChecklistItem>
            <ChecklistItem>
              {t('BannerAdsPage.checklist.items.item3')}
            </ChecklistItem>
            <ChecklistItem>
              {t('BannerAdsPage.checklist.items.item4')}
            </ChecklistItem>
          </ChecklistItems>
        </ChecklistContainer>

        <FinalCTAText>
        {t('BannerAdsPage.checklist.footerText')}
        </FinalCTAText>

        <FinalNote>
        {t('BannerAdsPage.checklist.footerSub')}
        </FinalNote>
      </FinalCTASection>

      <div style={{ height: '6rem' }}></div>

      {/* Блок FAQ в самом конце */}
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
            {faqData.map((faq, index) => (
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
            <FaqCtaText>{t('BannerAdsPage.faq.ctaText')}</FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(94, 234, 212, 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              {t('BannerAdsPage.faq.ctaButton')}
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default BannerAds;
