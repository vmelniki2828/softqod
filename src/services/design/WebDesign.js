import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaTabletAlt,
  FaDesktop,
  FaLayerGroup,
  FaSearch,
  FaChartLine,
  FaClock,
  FaMagic,
  FaBullseye,
  FaUserFriends,
  FaStar,
  FaRegThumbsUp,
  FaSearchDollar,
  FaArrowUp,
  FaTrophy,
  FaRegClock,
  FaBolt,
  FaTools,
  FaPercent,
  FaCheckCircle,
  FaShoppingCart,
  FaPlus,
} from 'react-icons/fa';

// Page container
const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Hero section
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
  font-size: 4rem;
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
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2.3rem;
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
  padding: 0.9rem 1.9rem;
  font-size: 1.05rem;
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

// Animation effects for WebDesign preview
const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const ripple = keyframes`
  0% { transform: scale(0.8); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
`;

// WebDesign preview components
const BrandbookPreview = styled(motion.div)`
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

const BrandbookGlow = styled(motion.div)`
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

const WebDesignContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 400px;
  transform-style: preserve-3d;
  z-index: 2;
`;

const WebDesignCover = styled(motion.div)`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  border-radius: 8px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 2;
`;

const WebDesignTitle = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-color-dark);
  margin-bottom: 1rem;
  text-align: center;
`;

const WebDesignLogo = styled.div`
  width: 100px;
  height: 100px;
  background: var(--accent-color);
  border-radius: 50%;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`;

const PageElement = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DeviceElement = styled(PageElement)`
  width: 120px;
  height: 80px;
  top: -30px;
  right: -50px;
  background: white;
  animation: ${float} 6s infinite ease-in-out;
`;

const MobileElement = styled(PageElement)`
  width: 70px;
  height: 120px;
  bottom: 0;
  left: -40px;
  animation: ${float} 7s infinite ease-in-out;
`;

const TabletElement = styled(PageElement)`
  width: 100px;
  height: 80px;
  right: -20px;
  bottom: 50px;
  animation: ${float} 8s infinite ease-in-out reverse;
`;

// What is Web Design section
const AboutSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.97) 100%
  );
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutContent = styled.div`
  order: 1;

  @media (max-width: 992px) {
    order: 2;
  }
`;

const AboutTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: var(--text-primary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 6rem;
    height: 0.4rem;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 4px;
  }
`;

const AboutDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const Highlight = styled.span`
  color: var(--accent-color-light);
  font-weight: 600;
  position: relative;
  padding: 0 0.2rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light),
      var(--accent-color)
    );
    background-size: 200% auto;
    animation: ${shimmer} 3s linear infinite;
    border-radius: 4px;
    opacity: 0.5;
  }
`;

const FunctionsList = styled(motion.div)`
  margin-top: 3rem;
`;

const FunctionCard = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const FunctionIconContainer = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.3rem;
  position: relative;
  flex-shrink: 0;
  box-shadow: 0 8px 16px rgba(var(--accent-color-rgb), 0.25);

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    border: 2px solid var(--accent-color);
    animation: ${ripple} 2s infinite;
    animation-delay: ${props => props.delay || '0s'};
  }
`;

const FunctionContent = styled.div``;

const FunctionTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const FunctionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const VisualContainer = styled(motion.div)`
  position: relative;
  height: 500px;
  width: 100%;
  order: 2;
  perspective: 1200px;

  @media (max-width: 992px) {
    order: 1;
    height: 400px;
  }
`;

const floatDevice = keyframes`
  0% { transform: rotateX(10deg) rotateY(0deg); }
  50% { transform: rotateX(5deg) rotateY(10deg); }
  100% { transform: rotateX(10deg) rotateY(0deg); }
`;

const dotMove = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(30px); }
`;

const DeviceFrame = styled(motion.div)`
  position: absolute;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  background: #21252b;
  transform-style: preserve-3d;

  &.desktop {
    width: 75%;
    height: 65%;
    top: 10%;
    left: 5%;
    padding: 1.5rem;
    border-radius: 1rem;
    animation: ${floatDevice} 12s infinite ease-in-out;
    z-index: 3;

    &::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 1rem;
      background: #383e4a;
      top: 0.5rem;
      left: 45%;
      border-radius: 4px;
    }
  }

  &.tablet {
    width: 35%;
    height: 45%;
    top: 40%;
    right: 5%;
    padding: 0.8rem;
    z-index: 2;
    animation: ${floatDevice} 14s infinite ease-in-out reverse;
    animation-delay: 1s;

    &::before {
      content: '';
      position: absolute;
      width: 0.8rem;
      height: 0.8rem;
      background: #383e4a;
      bottom: 0.3rem;
      left: calc(50% - 0.4rem);
      border-radius: 50%;
    }
  }

  &.mobile {
    width: 18%;
    height: 35%;
    top: 15%;
    right: 15%;
    padding: 0.5rem;
    z-index: 1;
    animation: ${floatDevice} 10s infinite ease-in-out;
    animation-delay: 2s;

    &::before {
      content: '';
      position: absolute;
      width: 40%;
      height: 0.3rem;
      background: #383e4a;
      top: 0.25rem;
      left: 30%;
      border-radius: 4px;
    }
  }
`;

const DeviceScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background: linear-gradient(
    135deg,
    var(--accent-color-dark) 0%,
    #2a2d36 100%
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const DeviceHeader = styled.div`
  height: 2.5rem;
  background: rgba(var(--accent-color-rgb), 0.2);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;

  .dot-container {
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;

    &.red {
      background: #ff5f57;
    }
    &.yellow {
      background: #febc2e;
    }
    &.green {
      background: #28c840;
    }
  }

  .address-bar {
    flex: 1;
    margin: 0 1rem;
    height: 1.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.7rem;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

const DeviceContent = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .menu-dot {
      width: 1.5rem;
      height: 0.25rem;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 1rem;
    }
  }

  .hero {
    height: 40%;
    background: rgba(var(--accent-color-rgb), 0.3);
    border-radius: 0.5rem;
    overflow: hidden;
    position: relative;

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 2rem;

      .title-bar {
        width: 30%;
        height: 0.5rem;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
      }

      .subtitle-bar {
        width: 50%;
        height: 0.25rem;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 0.25rem;
      }
    }

    .dots {
      position: absolute;
      bottom: 0.5rem;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 0.3rem;

      .dot {
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);

        &.active {
          background: rgba(255, 255, 255, 0.9);
          animation: ${dotMove} 4s infinite ease-in-out;
        }
      }
    }
  }

  .content {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    .card {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0.5rem;
      padding: 0.5rem;

      .card-icon {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 0.25rem;
        background: var(--accent-color);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
        color: white;
      }

      .card-line {
        height: 0.25rem;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 0.15rem;
        margin-bottom: 0.25rem;

        &.wide {
          width: 100%;
        }

        &.narrow {
          width: 60%;
        }
      }
    }
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.15;
  background: radial-gradient(
    circle,
    var(--accent-color-light) 0%,
    var(--accent-color) 100%
  );

  &.top-right {
    width: 500px;
    height: 500px;
    top: -250px;
    right: -250px;
  }

  &.bottom-left {
    width: 400px;
    height: 400px;
    bottom: -200px;
    left: -200px;
  }
`;

// Why Web Design is Important section
const ImportanceSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: var(--bg-primary);
  overflow: hidden;
`;

const ImportanceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ImportanceTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: var(--text-primary);
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 0.4rem;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 4px;
  }
`;

const IntroText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const statsHover = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    animation: ${statsHover} 2s infinite ease-in-out;

    .stat-value {
      color: var(--accent-color-light);
    }

    .stat-icon {
      background: var(--accent-color);
      color: white;
      transform: scale(1.1) rotate(10deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(var(--accent-color-rgb), 0.08) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const StatIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.5rem;
  color: var(--accent-color);
  transition: all 0.3s ease;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const StatDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
  opacity: 0.8;
`;

const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const progressAnimation = keyframes`
  0% { width: 0; opacity: 0; }
  100% { width: 100%; opacity: 1; }
`;

const BenefitsList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  position: relative;
`;

const BenefitIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
`;

const BenefitProgress = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  width: 1px;
  height: calc(100% + 1rem);
  background: rgba(var(--accent-color-rgb), 0.5);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -2px;
    width: 5px;
    height: 0;
    background: var(--accent-color);
    border-radius: 5px;
    animation: ${progressAnimation} 1.5s forwards;
    animation-delay: ${props => props.delay || '0s'};
  }
`;

const BenefitContent = styled.div`
  padding-bottom: 0.5rem;
`;

const BenefitTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const BenefitText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const MockWebsiteContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 70%;
  position: relative;
  background: #21252b;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const MockHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  background: var(--accent-color);
  display: flex;
  align-items: center;
  padding: 0 5%;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;

  .logo {
    margin-right: auto;
  }

  .nav {
    display: flex;
    gap: 1rem;

    .nav-item {
      width: 2rem;
      height: 0.8rem;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 0.4rem;
    }
  }
`;

const userFlow = keyframes`
  0% { transform: scale(0) translate(0, 0); opacity: 0; }
  20% { transform: scale(1) translate(0, 0); opacity: 1; }
  40% { transform: scale(1) translate(30%, 20%); opacity: 1; }
  60% { transform: scale(1) translate(60%, 40%); opacity: 1; }
  80% { transform: scale(1) translate(30%, 60%); opacity: 1; }
  90% { transform: scale(1) translate(70%, 70%); opacity: 1; }
  100% { transform: scale(1) translate(70%, 70%); opacity: 0; }
`;

const MockUserCursor = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  top: 30%;
  left: 10%;
  z-index: 20;
  animation: ${userFlow} 10s infinite ease-in-out;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    background: var(--accent-color);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const MockHero = styled.div`
  position: absolute;
  top: 10%;
  left: 0;
  width: 100%;
  height: 40%;
  background: #2a2d36;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;

  .title {
    width: 40%;
    height: 2rem;
    background: rgba(var(--accent-color-rgb), 0.7);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    width: 60%;
    height: 1rem;
    background: rgba(var(--accent-color-rgb), 0.4);
    border-radius: 0.5rem;
    margin-bottom: 2rem;
  }

  .cta {
    width: 10rem;
    height: 2.5rem;
    background: var(--accent-color);
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(var(--accent-color-rgb), 0.3);

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(var(--accent-color-rgb), 0.5);
    }
  }
`;

const fadeInUp = keyframes`
  0% { transform: translateY(20px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const MockContent = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 50%;
  padding: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  .card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0;
    animation: ${fadeInUp} 0.5s forwards;
    animation-delay: ${props => props.delay || '0s'};

    .icon {
      width: 3rem;
      height: 3rem;
      background: rgba(var(--accent-color-rgb), 0.2);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      color: var(--accent-color);
      font-size: 1.5rem;
    }

    .title {
      width: 80%;
      height: 0.8rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.4rem;
      margin-bottom: 0.8rem;
    }

    .text {
      width: 100%;
      height: 0.6rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 0.3rem;
      margin-bottom: 0.5rem;

      &:last-child {
        width: 70%;
      }
    }
  }
`;

const MockAnimationOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(33, 37, 43, 1) 0%,
    rgba(33, 37, 43, 0) 20%,
    rgba(33, 37, 43, 0) 80%,
    rgba(33, 37, 43, 1) 100%
  );
  pointer-events: none;
  z-index: 10;
`;

// Services section
const ServicesSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(18, 26, 41, 0.98) 100%
  );
  position: relative;
  overflow: hidden;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ServicesTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 0.4rem;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 4px;
  }
`;

const ServicesDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  gap: 2.5rem;

  /* First row: 3 cards */
  .row-1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  /* Second row: 2 cards */
  .row-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle at center,
      rgba(var(--accent-color-rgb), 0.15) 0%,
      transparent 70%
    );
    border-radius: 50%;
    top: -100px;
    right: -100px;
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.2);

    &::before {
      opacity: 1;
    }

    .service-icon {
      background: var(--accent-color);
      color: white;
      transform: rotate(10deg) scale(1.1);
      box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.4);

      svg {
        animation: ${rotate} 10s linear infinite;
      }

      &::after {
        animation: ${pulse} 2s infinite;
      }
    }

    .decoration-dot {
      transform: scale(1.2);
      opacity: 0.8;
    }

    .service-title {
      color: var(--accent-color-light);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 12px;
    border: 2px solid var(--accent-color);
    opacity: 0.2;
    transform: scale(1.1);
  }
`;

const DecorationDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-color);
  opacity: 0.2;
  transition: all 0.5s ease;

  &.top-right {
    top: 20px;
    right: 20px;
  }

  &.middle-right {
    top: 50%;
    right: 15px;
  }

  &.bottom-right {
    bottom: 20px;
    right: 30px;
  }

  &.bottom-left {
    bottom: 15px;
    left: 20px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
`;

const ServiceText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex-grow: 1;
`;

const ServiceFeatures = styled.ul`
  margin-top: 1.5rem;
  list-style: none;
  padding: 0;
`;

const ServiceFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
  font-size: 0.95rem;

  svg {
    color: var(--accent-color);
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

const linesDrawing = keyframes`
  0% {
    opacity: 0;
    stroke-dashoffset: 100;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
`;

const ServiceIllustration = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.05;
  transition: opacity 0.3s ease;

  svg {
    width: 100%;
    height: 100%;

    path {
      stroke: var(--accent-color);
      stroke-width: 1;
      fill: none;
      stroke-dasharray: 100;
      stroke-dashoffset: 100;
      animation: ${linesDrawing} 3s forwards;
      animation-delay: ${props => props.delay || '0s'};
    }
  }
`;

// Benefits section
const AdvantagesSection = styled.section`
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    rgba(18, 26, 41, 0.97) 0%,
    var(--bg-primary) 100%
  );
  position: relative;
  overflow: hidden;
`;

const AdvantagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const BenefitsHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const AdvantagesTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 0.4rem;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 4px;
  }
`;

const glowAnimation = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.5; }
  50% { transform: translate(-15px, 10px) scale(1.1); opacity: 0.7; }
  100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
`;

const BenefitsGlow = styled.div`
  position: absolute;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(var(--accent-color-rgb), 0.3) 0%,
    transparent 70%
  );
  filter: blur(50px);
  z-index: -1;
  animation: ${glowAnimation} 15s infinite ease-in-out;

  &.top-left {
    top: -100px;
    left: -100px;
    animation-delay: 0s;
  }

  &.top-right {
    top: -80px;
    right: -80px;
    width: 200px;
    height: 200px;
    animation-delay: 5s;
  }

  &.bottom-left {
    bottom: -120px;
    left: -150px;
    width: 300px;
    height: 300px;
    animation-delay: 10s;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const shimmerAnimation = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const BenefitCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 3rem;
  height: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    background-size: 200% 100%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    &::before {
      animation: ${shimmerAnimation} 2s infinite;
      opacity: 1;
    }

    .benefit-icon {
      animation: ${floatAnimation} 3s infinite ease-in-out;
      color: var(--accent-color-light);
      background: rgba(var(--accent-color-rgb), 0.15);
    }

    .benefit-number {
      color: var(--accent-color-light);
    }
  }
`;

const BenefitIconWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BenefitIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  font-size: 2rem;
  color: var(--text-primary);
  transition: all 0.3s ease;
`;

const BenefitNumber = styled.span`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
  color: rgba(255, 255, 255, 0.03);
  transition: color 0.3s ease;
`;

const AdvantageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const BenefitDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex-grow: 1;
`;

const BenefitTag = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 1.5rem;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color-light);
  font-size: 0.9rem;
  width: fit-content;
`;

// CTA section
const ButtonGlow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 70%
  );
  filter: blur(20px);
  opacity: 0.5;
  z-index: 2;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const orbitAnimation = keyframes`
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0.3;
  }
  25% {
    transform: translateX(100px) translateY(-50px);
    opacity: 0.5;
  }
  50% {
    transform: translateX(0) translateY(-100px);
    opacity: 0.3;
  }
  75% {
    transform: translateX(-100px) translateY(-50px);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0) translateY(0);
    opacity: 0.3;
  }
`;

const gridAnimation = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(-20px) translateY(-20px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;

const CTASection = styled.section`
  position: relative;
  padding: 120px 0;
  overflow: hidden;
  z-index: 1;
`;

const CTAContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CTAContent = styled.div`
  position: relative;
  width: 50%;
  z-index: 3;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

const CTATitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
  position: relative;

  .highlight {
    color: transparent;
    background: linear-gradient(90deg, var(--accent-color) 0%, #8a4dff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, var(--accent-color) 0%, #8a4dff 100%);
      border-radius: 1.5px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 90%;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    max-width: 100%;
  }
`;

const CTAButton = styled(motion.button)`
  position: relative;
  padding: 1rem 2rem;
  background: linear-gradient(90deg, var(--accent-color) 0%, #8a4dff 100%);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const OrbitalCircle = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background: var(--accent-color);
  filter: blur(2px);
  opacity: 0.5;
  z-index: 1;
  top: ${props => props.top};
  left: ${props => props.left};
  animation: ${orbitAnimation} 15s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  z-index: 0;
  opacity: 0.3;
  animation: ${gridAnimation} 10s ease-in-out infinite;
`;

const CTAImageContainer = styled(motion.div)`
  position: relative;
  width: 450px;
  height: 320px;
  margin-top: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

const deviceFloatAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const CTADeviceDesktop = styled.div`
  position: absolute;
  width: 300px;
  height: 200px;
  background: #21252b;
  border-radius: 10px;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  z-index: 3;
  animation: ${deviceFloatAnimation} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 20%,
      transparent 80%,
      rgba(var(--accent-color-rgb), 0.1) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 4px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }
`;

const CTADeviceTablet = styled.div`
  position: absolute;
  width: 120px;
  height: 170px;
  background: #21252b;
  border-radius: 8px;
  bottom: 20px;
  left: 40px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 2;
  animation: ${deviceFloatAnimation} 7s ease-in-out infinite reverse;

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }
`;

const CTADeviceMobile = styled.div`
  position: absolute;
  width: 80px;
  height: 140px;
  background: #21252b;
  border-radius: 10px;
  bottom: 50px;
  right: 40px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 2;
  animation: ${deviceFloatAnimation} 5s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 15px;
    height: 3px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
  }
`;

const screenAnimation = keyframes`
  0% { transform: translateY(0); }
  20% { transform: translateY(-100%); }
  40% { transform: translateY(-200%); }
  60% { transform: translateY(-300%); }
  80% { transform: translateY(-400%); }
  100% { transform: translateY(0); }
`;

const CTADeviceScreen = styled.div`
  position: relative;
  width: 100%;
  height: 500%;
  animation: ${screenAnimation} 20s infinite cubic-bezier(0.65, 0, 0.35, 1);

  .screen {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10%;
  }

  .bar {
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
    margin-bottom: 10%;
  }

  .wide {
    width: 80%;
  }

  .medium {
    width: 60%;
  }

  .narrow {
    width: 40%;
  }

  .dot-container {
    display: flex;
    gap: 5px;
    margin-top: 10%;

    .dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);

      &.active {
        background: var(--accent-color);
      }
    }
  }
`;

// FAQ Section
const shimmerEffect = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const pulseFaq = keyframes`
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
    animation: ${floatVertical} 15s infinite ease-in-out;
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
  box-shadow: 0 8px 20px rgba(var(--accent-color-rgb), 0.2);
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

// Main component
const WebDesign = () => {
  // State for FAQ section
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // FAQ data
  const faqData = [
    {
      question: '1. Що таке веб-дизайн і чому він важливий для бренду?',
      answer:
        'Веб-дизайн — це процес створення зовнішнього вигляду та функціональності сайту. Він формує перше враження про бренд, впливає на довіру користувачів і спонукає до взаємодії з вашим продуктом або послугою.',
    },
    {
      question: '2. Які елементи формують унікальний цифровий образ бренду?',
      answer:
        'Це фірмові кольори, типографіка, логотип, ілюстрації, стиль інтерфейсу, структура сайту та загальна візуальна мова, яка підкреслює індивідуальність вашого бренду.',
    },
    {
      question:
        '3. У чому різниця між шаблонним та індивідуальним веб-дизайном?',
      answer:
        'Шаблонний дизайн — це готові рішення з обмеженими можливостями налаштування. Індивідуальний веб-дизайн створюється з нуля під потреби конкретного бізнесу, забезпечуючи максимальну відповідність бренду та унікальність.',
    },
    {
      question: '4. Як веб-дизайн впливає на поведінку користувачів?',
      answer:
        'Добре продуманий дизайн полегшує навігацію, прискорює прийняття рішень, підвищує час перебування на сайті та знижує рівень відмов, що прямо впливає на конверсії.',
    },
    {
      question: '5. Скільки часу займає створення унікального веб-дизайну?',
      answer:
        'Залежно від складності проєкту, розробка унікального дизайну може тривати від 2 до 8 тижнів. На це впливає кількість сторінок, функціонал, участь замовника в процесі.',
    },
    {
      question:
        '6. Чи враховується мобільна адаптація під час створення дизайну?',
      answer:
        "Так, адаптивний дизайн є обов'язковим стандартом. Сайт має бути зручним і функціональним на всіх пристроях — смартфонах, планшетах та ПК.",
    },
    {
      question:
        '7. Як підтримувати цілісність цифрового образу бренду після запуску сайту?',
      answer:
        'Важливо дотримуватися гайдлайну бренду, використовувати єдину стилістику в усіх цифрових каналах, оновлювати контент відповідно до tone of voice бренду та регулярно проводити аудит UX/UI.',
    },
  ];

  // Toggle FAQ function
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
              Веб-дизайн: створення <span>унікального</span> цифрового образу
            </HeroTitle>

            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Професійний веб-дизайн — це не просто красива картинка, а
              ефективний інструмент комунікації. Якісний дизайн формує перше
              враження, підвищує довіру та безпосередньо впливає на
              результативність сайту.
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
                Замовити дизайн <FaArrowRight />
              </PrimaryButton>
            </HeroButtons>

            <HeroFeatures
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FeatureItem>
                <HeroFeatureIcon>
                  <FaDesktop />
                </HeroFeatureIcon>
                <FeatureText>Адаптивність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaPaintBrush />
                </HeroFeatureIcon>
                <FeatureText>Креативність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaChartLine />
                </HeroFeatureIcon>
                <FeatureText>Конверсійність</FeatureText>
              </FeatureItem>
            </HeroFeatures>
          </HeroContent>

          <BrandbookPreview
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <BrandbookGlow
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
            <WebDesignContainer
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
              <WebDesignCover>
                <WebDesignTitle>WEB DESIGN</WebDesignTitle>
                <WebDesignLogo>
                  <FaDesktop />
                </WebDesignLogo>
                <div
                  style={{
                    textAlign: 'center',
                    color: '#333',
                    marginTop: '1rem',
                  }}
                >
                  <p style={{ fontWeight: 'bold' }}>COMPANY</p>
                  <p style={{ fontSize: '0.9rem' }}>Digital presence</p>
                </div>
              </WebDesignCover>

              <DeviceElement>
                <FaDesktop
                  style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}
                />
              </DeviceElement>

              <MobileElement>
                <FaMobileAlt
                  style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}
                />
              </MobileElement>

              <TabletElement>
                <FaTabletAlt
                  style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}
                />
              </TabletElement>
            </WebDesignContainer>
          </BrandbookPreview>
        </HeroContainer>
      </HeroSection>

      {/* What is Web Design section */}
      <AboutSection>
        <BackgroundCircle className="top-right" />
        <BackgroundCircle className="bottom-left" />

        <AboutContainer>
          <AboutTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            Що таке веб-дизайн?
          </AboutTitle>

          <AboutGrid>
            <AboutContent>
              <AboutDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Веб-дизайн — це процес створення зовнішнього вигляду та
                інтерфейсу сайту, що поєднує в собі{' '}
                <Highlight>візуальну привабливість</Highlight> і{' '}
                <Highlight>зручність для користувача</Highlight>. Його головна
                мета — зробити взаємодію з ресурсом простою, приємною та
                ефективною.
              </AboutDescription>

              <AboutDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Сучасний веб-дизайн виконує кілька ключових функцій: підвищує
                впізнаваність бренду, формує довіру до компанії та забезпечує
                позитивний користувацький досвід (UX). Актуальні тенденції
                включають адаптивність (підлаштування під різні пристрої),
                мінімалізм у дизайні, а також використання анімацій та
                інтерактивних елементів для залучення уваги.
              </AboutDescription>

              <FunctionsList
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <FunctionCard
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <FunctionIconContainer delay="0s">
                    <FaMagic />
                  </FunctionIconContainer>
                  <FunctionContent>
                    <FunctionTitle>Брендинг та впізнаваність</FunctionTitle>
                    <FunctionText>
                      Якісний веб-дизайн підкреслює унікальність вашого бренду,
                      відображає його цінності та виділяє серед конкурентів.
                    </FunctionText>
                  </FunctionContent>
                </FunctionCard>

                <FunctionCard
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <FunctionIconContainer delay="0.5s">
                    <FaUserFriends />
                  </FunctionIconContainer>
                  <FunctionContent>
                    <FunctionTitle>Користувацький досвід (UX)</FunctionTitle>
                    <FunctionText>
                      Зручність навігації, інтуїтивно зрозумілий інтерфейс та
                      логічна структура забезпечують комфортну взаємодію
                      відвідувачів із сайтом.
                    </FunctionText>
                  </FunctionContent>
                </FunctionCard>

                <FunctionCard
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <FunctionIconContainer delay="1s">
                    <FaBullseye />
                  </FunctionIconContainer>
                  <FunctionContent>
                    <FunctionTitle>Досягнення бізнес-цілей</FunctionTitle>
                    <FunctionText>
                      Ефективний дизайн спрямовує користувачів до цільових дій:
                      замовлень, заповнення форм, підписок, дзвінків та інших
                      конверсійних дій.
                    </FunctionText>
                  </FunctionContent>
                </FunctionCard>
              </FunctionsList>
            </AboutContent>

            <VisualContainer
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <DeviceFrame className="desktop">
                <DeviceScreen>
                  <DeviceHeader>
                    <div className="dot-container">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                    <div className="address-bar">
                      <FaSearch /> yourwebsite.com
                    </div>
                  </DeviceHeader>
                  <DeviceContent>
                    <div className="menu">
                      <div className="menu-dot"></div>
                      <div className="menu-dot"></div>
                      <div className="menu-dot"></div>
                      <div className="menu-dot"></div>
                      <div className="menu-dot"></div>
                    </div>
                    <div className="hero">
                      <div className="hero-overlay">
                        <div className="title-bar"></div>
                        <div className="subtitle-bar"></div>
                      </div>
                      <div className="dots">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                      </div>
                    </div>
                    <div className="content">
                      <div className="card">
                        <div className="card-icon">
                          <FaPaintBrush />
                        </div>
                        <div className="card-line wide"></div>
                        <div className="card-line narrow"></div>
                      </div>
                      <div className="card">
                        <div className="card-icon">
                          <FaCode />
                        </div>
                        <div className="card-line wide"></div>
                        <div className="card-line narrow"></div>
                      </div>
                      <div className="card">
                        <div className="card-icon">
                          <FaRocket />
                        </div>
                        <div className="card-line wide"></div>
                        <div className="card-line narrow"></div>
                      </div>
                    </div>
                  </DeviceContent>
                </DeviceScreen>
              </DeviceFrame>

              <DeviceFrame className="tablet">
                <DeviceScreen>
                  <DeviceHeader>
                    <div className="dot-container">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                  </DeviceHeader>
                  <DeviceContent>
                    <div className="menu">
                      <div className="menu-dot"></div>
                      <div className="menu-dot"></div>
                      <div className="menu-dot"></div>
                    </div>
                    <div className="hero">
                      <div className="hero-overlay">
                        <div className="title-bar"></div>
                        <div className="subtitle-bar"></div>
                      </div>
                    </div>
                  </DeviceContent>
                </DeviceScreen>
              </DeviceFrame>

              <DeviceFrame className="mobile">
                <DeviceScreen>
                  <DeviceHeader>
                    <div className="dot-container">
                      <div className="dot red"></div>
                    </div>
                  </DeviceHeader>
                  <DeviceContent>
                    <div className="hero">
                      <div className="hero-overlay">
                        <div className="title-bar"></div>
                      </div>
                    </div>
                  </DeviceContent>
                </DeviceScreen>
              </DeviceFrame>
            </VisualContainer>
          </AboutGrid>
        </AboutContainer>
      </AboutSection>

      {/* Why Web Design is Important section */}
      <ImportanceSection>
        <BackgroundCircle className="top-right" />
        <BackgroundCircle className="bottom-left" />

        <ImportanceContainer>
          <ImportanceTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            Чому веб-дизайн важливий для вашого бізнесу?
          </ImportanceTitle>

          <IntroText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Сайт — це часто перше, з чим стикається потенційний клієнт. Якісний
            дизайн формує довіру і перетворює відвідувачів на клієнтів.
          </IntroText>

          <StatsContainer>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatIcon className="stat-icon">
                <FaRegClock />
              </StatIcon>
              <StatValue className="stat-value">0.05</StatValue>
              <StatLabel>секунди</StatLabel>
              <StatDescription>
                Час, за який формується перше враження про сайт та компанію
              </StatDescription>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StatIcon className="stat-icon">
                <FaArrowUp />
              </StatIcon>
              <StatValue className="stat-value">38%</StatValue>
              <StatLabel>користувачів</StatLabel>
              <StatDescription>
                Залишають сайт, якщо дизайн непривабливий або застарілий
              </StatDescription>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <StatIcon className="stat-icon">
                <FaPercent />
              </StatIcon>
              <StatValue className="stat-value">+75%</StatValue>
              <StatLabel>до конверсії</StatLabel>
              <StatDescription>
                Додає якісний дизайн з продуманим користувацьким досвідом
              </StatDescription>
            </StatCard>
          </StatsContainer>

          <BenefitsContainer>
            <BenefitsList>
              <BenefitItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <BenefitIconContainer>
                  <FaRegThumbsUp />
                </BenefitIconContainer>
                <BenefitProgress delay="0.3s" />
                <BenefitContent>
                  <BenefitTitle>Перше враження</BenefitTitle>
                  <BenefitText>
                    Якщо дизайн виглядає застарілим або незручним, користувач
                    швидко залишить сторінку. Якісний веб-дизайн формує
                    позитивне перше враження та підвищує рівень довіри до
                    компанії.
                  </BenefitText>
                </BenefitContent>
              </BenefitItem>

              <BenefitItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <BenefitIconContainer>
                  <FaBolt />
                </BenefitIconContainer>
                <BenefitProgress delay="0.5s" />
                <BenefitContent>
                  <BenefitTitle>Користувацький досвід</BenefitTitle>
                  <BenefitText>
                    Зручна навігація, логічна структура та швидке завантаження
                    сторінок напряму впливають на поведінку користувачів і
                    конверсію. Інтуїтивний інтерфейс утримує увагу та підштовхує
                    до цільових дій.
                  </BenefitText>
                </BenefitContent>
              </BenefitItem>

              <BenefitItem
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{ marginBottom: 0 }}
              >
                <BenefitIconContainer>
                  <FaSearchDollar />
                </BenefitIconContainer>
                <BenefitContent>
                  <BenefitTitle>SEO-просування</BenefitTitle>
                  <BenefitText>
                    Пошукові системи враховують показники взаємодії з сайтом:
                    час перебування, глибину перегляду, мобільну оптимізацію.
                    Сучасний дизайн — це ще й внесок у SEO-просування та
                    органічну видимість.
                  </BenefitText>
                </BenefitContent>
              </BenefitItem>
            </BenefitsList>

            <ImageContainer
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <MockWebsiteContainer>
                <MockUserCursor />
                <MockHeader>
                  <div className="logo">Your Brand</div>
                  <div className="nav">
                    <div className="nav-item"></div>
                    <div className="nav-item"></div>
                    <div className="nav-item"></div>
                    <div className="nav-item"></div>
                  </div>
                </MockHeader>
                <MockHero>
                  <div className="title"></div>
                  <div className="subtitle"></div>
                  <div className="cta">Замовити</div>
                </MockHero>
                <MockContent>
                  <div className="card" style={{ animationDelay: '1s' }}>
                    <div className="icon">
                      <FaMagic />
                    </div>
                    <div className="title"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                  </div>
                  <div className="card" style={{ animationDelay: '1.3s' }}>
                    <div className="icon">
                      <FaTools />
                    </div>
                    <div className="title"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                  </div>
                  <div className="card" style={{ animationDelay: '1.6s' }}>
                    <div className="icon">
                      <FaTrophy />
                    </div>
                    <div className="title"></div>
                    <div className="text"></div>
                    <div className="text"></div>
                  </div>
                </MockContent>
                <MockAnimationOverlay />
              </MockWebsiteContainer>
            </ImageContainer>
          </BenefitsContainer>
        </ImportanceContainer>
      </ImportanceSection>

      {/* Our Web Design Services section */}
      <ServicesSection>
        <BackgroundCircle className="top-right" />
        <BackgroundCircle className="bottom-left" />

        <ServicesContainer>
          <ServicesTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            Наші послуги у сфері веб-дизайну
          </ServicesTitle>

          <ServicesDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ми пропонуємо повний спектр послуг з дизайну сайтів — від створення
            концепції до повної реалізації проєкту, враховуючи всі сучасні
            тенденції та вимоги.
          </ServicesDescription>

          <ServicesGrid>
            <div className="row-1">
              <ServiceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <DecorationDot className="top-right" />
                <DecorationDot className="middle-right" />
                <DecorationDot className="bottom-right" />
                <DecorationDot className="bottom-left" />

                <ServiceIcon className="service-icon">
                  <FaPaintBrush />
                </ServiceIcon>

                <ServiceTitle className="service-title">
                  Створення дизайну сайту з нуля
                </ServiceTitle>

                <ServiceText>
                  Ми розробляємо індивідуальний дизайн, який відображає цінності
                  вашого бренду. Починаємо з концепції, формуємо структуру
                  (Wireframes) і створюємо візуальний стиль, який гармонійно
                  поєднує естетику з функціональністю.
                </ServiceText>

                <ServiceFeatures>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Розробка концепції та прототипів
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Створення унікального візуального стилю
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> UX/UI проектування всіх елементів
                    інтерфейсу
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Підготовка макетів для розробників
                  </ServiceFeatureItem>
                </ServiceFeatures>

                <ServiceIllustration delay="0.3s">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,20 L80,20 L80,80 L20,80 Z" />
                    <path d="M20,30 L80,30" />
                    <path d="M30,20 L30,80" />
                    <path d="M50,30 L50,80" />
                    <path d="M20,50 L80,50" />
                  </svg>
                </ServiceIllustration>
              </ServiceCard>

              <ServiceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <DecorationDot className="top-right" />
                <DecorationDot className="middle-right" />
                <DecorationDot className="bottom-right" />
                <DecorationDot className="bottom-left" />

                <ServiceIcon className="service-icon">
                  <FaMagic />
                </ServiceIcon>

                <ServiceTitle className="service-title">
                  Рестайлінг існуючих сайтів
                </ServiceTitle>

                <ServiceText>
                  Ваш сайт виглядає застаріло або не приносить результатів? Ми
                  оновимо дизайн відповідно до сучасних вимог, поліпшимо
                  структуру, зробимо інтерфейс більш зручним і привабливим для
                  користувача.
                </ServiceText>

                <ServiceFeatures>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Аналіз недоліків поточного дизайну
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Оновлення візуального стилю
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Поліпшення структури та навігації
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Оптимізація конверсійних шляхів
                  </ServiceFeatureItem>
                </ServiceFeatures>

                <ServiceIllustration delay="0.5s">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,30 L10,70 L45,70 L45,30 Z" />
                    <path d="M55,30 L55,70 L90,70 L90,30 Z" />
                    <path d="M10,40 L45,40" />
                    <path d="M55,40 L90,40" />
                    <path d="M20,50 L35,50" />
                    <path d="M65,50 L80,50" />
                    <path d="M20,60 L35,60" />
                    <path d="M65,60 L80,60" />
                  </svg>
                </ServiceIllustration>
              </ServiceCard>

              <ServiceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <DecorationDot className="top-right" />
                <DecorationDot className="middle-right" />
                <DecorationDot className="bottom-right" />
                <DecorationDot className="bottom-left" />

                <ServiceIcon className="service-icon">
                  <FaMobileAlt />
                </ServiceIcon>

                <ServiceTitle className="service-title">
                  Адаптивний дизайн
                </ServiceTitle>

                <ServiceText>
                  Створюємо інтерфейси, які коректно відображаються на
                  смартфонах, планшетах і десктопах. Це гарантує зручність
                  користування з будь-якого пристрою та позитивно впливає на
                  поведенкові фактори.
                </ServiceText>

                <ServiceFeatures>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Оптимізація для всіх типів пристроїв
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Гнучкі макети та елементи інтерфейсу
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Адаптація контенту для різних роздільних
                    здатностей
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Тестування на всіх популярних пристроях
                  </ServiceFeatureItem>
                </ServiceFeatures>

                <ServiceIllustration delay="0.7s">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,10 L60,10 L60,70 L10,70 Z" />
                    <path d="M70,30 L90,30 L90,90 L70,90 Z" />
                    <path d="M10,20 L60,20" />
                    <path d="M10,30 L60,30" />
                    <path d="M70,40 L90,40" />
                    <path d="M70,50 L90,50" />
                    <path d="M20,40 L50,40" />
                    <path d="M20,50 L50,50" />
                    <path d="M20,60 L50,60" />
                  </svg>
                </ServiceIllustration>
              </ServiceCard>
            </div>

            <div className="row-2">
              <ServiceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <DecorationDot className="top-right" />
                <DecorationDot className="middle-right" />
                <DecorationDot className="bottom-right" />
                <DecorationDot className="bottom-left" />

                <ServiceIcon className="service-icon">
                  <FaShoppingCart />
                </ServiceIcon>

                <ServiceTitle className="service-title">
                  Дизайн для eCommerce
                </ServiceTitle>

                <ServiceText>
                  Розробляємо UX/UI-дизайн для інтернет-магазинів з урахуванням
                  поведінки покупців. Оптимізуємо шлях користувача до покупки,
                  щоб збільшити конверсію та середній чек.
                </ServiceText>

                <ServiceFeatures>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Проектування зручних каталогів та фільтрів
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Розробка карток товарів, що конвертують
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Оптимізація процесу оформлення замовлення
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Інтеграція з платіжними системами
                  </ServiceFeatureItem>
                </ServiceFeatures>

                <ServiceIllustration delay="0.9s">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10,20 L30,20 L35,40 L80,40 L75,70 L25,70 Z" />
                    <path d="M35,40 L35,70" />
                    <path d="M50,40 L50,70" />
                    <path d="M65,40 L65,70" />
                    <path d="M75,50 L25,50" />
                    <path d="M75,60 L25,60" />
                    <path d="M45,30 A10,10 0 1,0 45,10 A10,10 0 1,0 45,30 Z" />
                  </svg>
                </ServiceIllustration>
              </ServiceCard>

              <ServiceCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <DecorationDot className="top-right" />
                <DecorationDot className="middle-right" />
                <DecorationDot className="bottom-right" />
                <DecorationDot className="bottom-left" />

                <ServiceIcon className="service-icon">
                  <FaLayerGroup />
                </ServiceIcon>

                <ServiceTitle className="service-title">
                  Додаткові послуги
                </ServiceTitle>

                <ServiceText>
                  Пропонуємо дизайн лендінгів, блогів, корпоративних сайтів, а
                  також підготовку графічних елементів: банерів, іконок,
                  презентацій. Працюємо з готовими CMS або в парі з
                  розробниками.
                </ServiceText>

                <ServiceFeatures>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Дизайн банерів та рекламних матеріалів
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Створення іконок та графічних елементів
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> Дизайн інтерфейсів для CMS
                  </ServiceFeatureItem>
                  <ServiceFeatureItem>
                    <FaCheckCircle /> UX-аудит існуючих проектів
                  </ServiceFeatureItem>
                </ServiceFeatures>

                <ServiceIllustration delay="1.1s">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20,20 L40,20 L40,40 L20,40 Z" />
                    <path d="M50,20 L70,20 L70,40 L50,40 Z" />
                    <path d="M20,50 L40,50 L40,70 L20,70 Z" />
                    <path d="M50,50 L70,50 L70,70 L50,70 Z" />
                    <path d="M80,20 L90,20 L90,70 L80,70 Z" />
                    <path d="M10,80 L90,80" />
                  </svg>
                </ServiceIllustration>
              </ServiceCard>
            </div>
          </ServicesGrid>
        </ServicesContainer>
      </ServicesSection>

      {/* Benefits of Working With Us section */}
      <AdvantagesSection>
        <BenefitsGlow className="top-left" />
        <BenefitsGlow className="top-right" />
        <BenefitsGlow className="bottom-left" />

        <AdvantagesContainer>
          <BenefitsHeader>
            <AdvantagesTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
            >
              Переваги співпраці з нами
            </AdvantagesTitle>
          </BenefitsHeader>

          <BenefitsGrid>
            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <BenefitIconWrapper>
                <BenefitIcon className="benefit-icon">
                  <FaUsers />
                </BenefitIcon>
                <BenefitNumber className="benefit-number">01</BenefitNumber>
              </BenefitIconWrapper>
              <AdvantageTitle>Досвідчена команда</AdvantageTitle>
              <BenefitDescription>
                Наші дизайнери мають практичний досвід у створенні проєктів для
                різних ніш — від малого бізнесу до eCommerce-платформ.
              </BenefitDescription>
              <BenefitTag>
                <FaLightbulb />
                Експертність
              </BenefitTag>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BenefitIconWrapper>
                <BenefitIcon className="benefit-icon">
                  <FaTools />
                </BenefitIcon>
                <BenefitNumber className="benefit-number">02</BenefitNumber>
              </BenefitIconWrapper>
              <AdvantageTitle>Сучасні інструменти та технології</AdvantageTitle>
              <BenefitDescription>
                Ми працюємо з Figma, Adobe XD, Sketch, дотримуємося найновіших
                стандартів веб-дизайну та UI/UX.
              </BenefitDescription>
              <BenefitTag>
                <FaRocket />
                Інновації
              </BenefitTag>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <BenefitIconWrapper>
                <BenefitIcon className="benefit-icon">
                  <FaUserFriends />
                </BenefitIcon>
                <BenefitNumber className="benefit-number">03</BenefitNumber>
              </BenefitIconWrapper>
              <AdvantageTitle>Індивідуальний підхід</AdvantageTitle>
              <BenefitDescription>
                Кожен проєкт — унікальний. Ми враховуємо цілі бізнесу, специфіку
                ринку та вподобання цільової аудиторії.
              </BenefitDescription>
              <BenefitTag>
                <FaBullseye />
                Клієнтоорієнтованість
              </BenefitTag>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BenefitIconWrapper>
                <BenefitIcon className="benefit-icon">
                  <FaStar />
                </BenefitIcon>
                <BenefitNumber className="benefit-number">04</BenefitNumber>
              </BenefitIconWrapper>
              <AdvantageTitle>Гарантія унікального дизайну</AdvantageTitle>
              <BenefitDescription>
                Жодних шаблонів — лише оригінальні рішення, створені спеціально
                під ваш бренд.
              </BenefitDescription>
              <BenefitTag>
                <FaPaintBrush />
                Оригінальність
              </BenefitTag>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <BenefitIconWrapper>
                <BenefitIcon className="benefit-icon">
                  <FaDesktop />
                </BenefitIcon>
                <BenefitNumber className="benefit-number">05</BenefitNumber>
              </BenefitIconWrapper>
              <AdvantageTitle>Відповідність UX/UI стандартам</AdvantageTitle>
              <BenefitDescription>
                Дизайн не лише привабливий, а й зручний. Ми тестуємо прототипи
                та оптимізуємо інтерфейс для максимальної ефективності.
              </BenefitDescription>
              <BenefitTag>
                <FaChartLine />
                Ефективність
              </BenefitTag>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <BenefitIconWrapper>
                <BenefitIcon className="benefit-icon">
                  <FaRegClock />
                </BenefitIcon>
                <BenefitNumber className="benefit-number">06</BenefitNumber>
              </BenefitIconWrapper>
              <AdvantageTitle>Своєчасна доставка</AdvantageTitle>
              <BenefitDescription>
                Дотримуємося узгоджених термінів та забезпечуємо плавний процес
                роботи. Ви завжди знаєте, на якому етапі знаходиться ваш проєкт.
              </BenefitDescription>
              <BenefitTag>
                <FaClock />
                Пунктуальність
              </BenefitTag>
            </BenefitCard>
          </BenefitsGrid>
        </AdvantagesContainer>
      </AdvantagesSection>

      {/* Call to Action Section */}
      <CTASection>
        <OrbitalCircle size="80px" top="15%" left="10%" delay={0} />
        <OrbitalCircle size="120px" top="60%" left="85%" delay={1} />
        <OrbitalCircle size="50px" top="80%" left="15%" delay={2} />
        <GridBackground />

        <CTAContainer>
          <CTAContent>
            <CTATitle>
              Замовте <span className="highlight">веб-дизайн</span>, який
              приносить результати
            </CTATitle>
            <CTADescription>
              Професійний веб-дизайн — це не просто витрата, а інвестиція у
              зростання вашого бізнесу. Добре спроектований сайт приваблює
              більше відвідувачів, конвертує більше лідів і допомагає вашому
              бізнесу виділитися серед конкурентів у цифровому просторі.
            </CTADescription>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={openModal}
            >
              Замовити безкоштовну консультацію
              <ButtonGlow />
            </CTAButton>
          </CTAContent>

          <CTAImageContainer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <CTADeviceDesktop>
              <CTADeviceScreen>
                <div className="screen">
                  <div className="bar wide"></div>
                  <div className="bar medium"></div>
                  <div className="bar narrow"></div>
                  <div className="dot-container">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="screen">
                  <div className="bar medium"></div>
                  <div className="bar wide"></div>
                  <div className="bar narrow"></div>
                  <div className="dot-container">
                    <div className="dot"></div>
                    <div className="dot active"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="screen">
                  <div className="bar narrow"></div>
                  <div className="bar medium"></div>
                  <div className="bar wide"></div>
                  <div className="dot-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot active"></div>
                  </div>
                </div>
                <div className="screen">
                  <div className="bar wide"></div>
                  <div className="bar narrow"></div>
                  <div className="bar medium"></div>
                  <div className="dot-container">
                    <div className="dot"></div>
                    <div className="dot active"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="screen">
                  <div className="bar medium"></div>
                  <div className="bar medium"></div>
                  <div className="bar wide"></div>
                  <div className="dot-container">
                    <div className="dot active"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
              </CTADeviceScreen>
            </CTADeviceDesktop>
            <CTADeviceTablet>
              <CTADeviceScreen>
                <div className="screen">
                  <div className="bar wide"></div>
                  <div className="bar narrow"></div>
                </div>
                <div className="screen">
                  <div className="bar medium"></div>
                  <div className="bar wide"></div>
                </div>
                <div className="screen">
                  <div className="bar narrow"></div>
                  <div className="bar medium"></div>
                </div>
                <div className="screen">
                  <div className="bar wide"></div>
                  <div className="bar narrow"></div>
                </div>
                <div className="screen">
                  <div className="bar medium"></div>
                  <div className="bar medium"></div>
                </div>
              </CTADeviceScreen>
            </CTADeviceTablet>
            <CTADeviceMobile>
              <CTADeviceScreen>
                <div className="screen">
                  <div className="bar wide"></div>
                </div>
                <div className="screen">
                  <div className="bar medium"></div>
                </div>
                <div className="screen">
                  <div className="bar narrow"></div>
                </div>
                <div className="screen">
                  <div className="bar wide"></div>
                </div>
                <div className="screen">
                  <div className="bar medium"></div>
                </div>
              </CTADeviceScreen>
            </CTADeviceMobile>
          </CTAImageContainer>
        </CTAContainer>
      </CTASection>

      {/* FAQ Section */}
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
      </FaqSection>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Замовити веб-дизайн"
        subtitle="Залиште заявку і ми зв'яжемося з вами для обговорення деталей проєкту"
      />
    </PageContainer>
  );
};

export default WebDesign;
