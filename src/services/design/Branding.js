import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaPaintBrush,
  FaLayerGroup,
  FaFolderOpen,
  FaRegEye,
  FaPalette,
  FaPlus,
  FaFingerprint,
  FaSwatchbook,
  FaFont,
  FaCube,
  FaPencilAlt,
  FaTag,
  FaRegLightbulb,
  FaHeart,
  FaFileAlt,
} from 'react-icons/fa';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const pulseFaq = keyframes`
  0% { opacity: 0.6; width: 60px; }
  50% { opacity: 1; width: 80px; }
  100% { opacity: 0.6; width: 60px; }
`;

const shimmerEffect = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

// Add the missing floatVertical animation
const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0); }
`;

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
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  position: relative;

  span {
    position: relative;
    display: inline-block;
    color: white;
    z-index: 1;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background: rgba(255, 255, 255, 0.3);
      z-index: -1;
      border-radius: 4px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 500px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: white;
  color: var(--accent-color);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
    color: white;
    box-shadow: 0 15px 35px rgba(var(--accent-color-rgb), 0.4);
    transform: translateY(-2px);
  }

  svg {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroFeatures = styled(motion.div)`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeroFeatureIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
`;

const FeatureText = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
`;

// Брендинг визуальное представление
const BrandingPreview = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;

  @media (max-width: 992px) {
    order: 1;
    min-height: 350px;
  }
`;

const BrandingGlow = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 30%,
    transparent 70%
  );
  filter: blur(20px);
  z-index: 0;
`;

const BrandingContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BrandElementWrapper = styled.div`
  position: absolute;
  backdrop-filter: blur(5px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  &.logo {
    width: 120px;
    height: 120px;
    background: rgba(255, 255, 255, 0.2);
    top: 10%;
    left: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: white;
    font-weight: 900;
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: ${pulse} 4s infinite ease-in-out;
  }

  &.color-palette {
    width: 180px;
    height: 60px;
    background: rgba(255, 255, 255, 0.15);
    bottom: 25%;
    left: 10%;
    display: flex;
    overflow: hidden;

    .color {
      flex: 1;
      height: 100%;

      &.c1 {
        background: #ff7e5f;
      }
      &.c2 {
        background: #feb47b;
      }
      &.c3 {
        background: #ffcb8b;
      }
      &.c4 {
        background: #f6f6f2;
      }
    }
  }

  &.typography {
    width: 150px;
    height: 80px;
    background: rgba(255, 255, 255, 0.15);
    top: 30%;
    right: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;

    .font-title {
      font-size: 1.2rem;
      font-weight: 700;
      color: white;
      letter-spacing: 1px;
    }

    .font-text {
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.8);
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  &.pattern {
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.15);
    bottom: 15%;
    right: 25%;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 5px,
        rgba(255, 255, 255, 0.1) 5px,
        rgba(255, 255, 255, 0.1) 10px
      );
    }
  }
`;

const ConnectingLine = styled.div`
  position: absolute;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: white;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  &.line1 {
    width: 100px;
    top: 35%;
    left: 32%;
    transform: rotate(30deg);
  }

  &.line2 {
    width: 120px;
    top: 60%;
    left: 28%;
    transform: rotate(-30deg);
  }

  &.line3 {
    width: 130px;
    top: 40%;
    right: 25%;
    transform: rotate(-45deg);
  }

  &.line4 {
    width: 110px;
    top: 65%;
    right: 28%;
    transform: rotate(35deg);
  }
`;

// Секция о фирменном стиле
const BrandStyleSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(20, 27, 43, 0.98) 100%
  );
  overflow: hidden;
  border-radius: 20px;

  @media (max-width: 992px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const BrandStyleWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(
    to bottom right,
    transparent 49%,
    rgba(20, 27, 43, 0.2) 51%
  );
  z-index: 0;
`;

const BrandStyleContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const BrandStyleHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;

  @media (max-width: 992px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

const BrandStyleTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }

  @media (max-width: 992px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 1.5rem;

    &::after {
      width: 80px;
      height: 4px;
      bottom: -12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const BrandStyleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2.5rem;
  }
`;

const BrandStyleBackgroundCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  z-index: 0;

  &.circle1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 70%
    );
    top: 10%;
    right: -200px;
  }

  &.circle2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(94, 96, 206, 0.04) 0%,
      transparent 70%
    );
    bottom: 5%;
    left: -200px;
  }
`;

const BrandStyleElementsSection = styled.div`
  position: relative;
  z-index: 2;
`;

const ElementsSectionTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: var(--accent-color);
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 5px;
    background: var(--accent-color);
    border-radius: 3px;
  }

  @media (max-width: 992px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
    padding-left: 1.2rem;

    &::before {
      width: 4px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
    padding-left: 1rem;

    &::before {
      width: 3px;
    }
  }
`;

const ElementsDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 3rem;

  @media (max-width: 992px) {
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const BrandElements = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const hoverScale = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const BrandElement = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 1rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);

  &:hover {
    border-color: rgba(var(--accent-color-rgb), 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.05);
    animation: ${hoverScale} 3s infinite ease-in-out;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
    gap: 0.8rem;
    border-radius: 12px;

    &::before {
      height: 3px;
    }
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 0.6rem;
    border-radius: 8px;
  }
`;

const BrandElementWide = styled(BrandElement)`
  grid-column: 1 / span 2;
  
  @media (max-width: 576px) {
    grid-column: 1;
  }
`;

const ElementIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.5rem;
  flex-shrink: 0;
  transition: all 0.3s ease;

  ${BrandElement}:hover & {
    background: rgba(var(--accent-color-rgb), 0.2);
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    border-radius: 8px;
  }
`;

const ElementContent = styled.div`
  flex: 1;
`;

const ElementTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  ${BrandElement}:hover & {
    color: var(--accent-color);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;

const ElementDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const BrandStyleImpactSection = styled.div`
  position: relative;
  z-index: 2;
`;

const ImpactGraphic = styled.div`
  position: relative;
  margin-bottom: 3rem;
  height: 300px;

  @media (max-width: 992px) {
    height: 250px;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 768px) {
    height: 220px;
    margin-bottom: 2rem;
  }

  @media (max-width: 576px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 180px;
    margin-bottom: 1.5rem;
  }
`;

const impactPulse = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const ImpactCenter = styled.div`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  box-shadow: 0 5px 20px rgba(var(--accent-color-rgb), 0.4);
  z-index: 2;
  animation: ${impactPulse} 4s infinite ease-in-out;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    font-size: 2rem;
  }
`;

const ImpactRing = styled.div`
  position: absolute;
  border-radius: 50%;
  border: 2px dashed rgba(var(--accent-color-rgb), 0.3);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &.ring1 {
    width: 200px;
    height: 200px;
    animation: ${rotate} 40s infinite linear;
  }

  &.ring2 {
    width: 300px;
    height: 300px;
    animation: ${rotate} 60s infinite linear reverse;
  }

  @media (max-width: 768px) {
    &.ring1 {
      width: 160px;
      height: 160px;
    }

    &.ring2 {
      width: 240px;
      height: 240px;
    }
  }

  @media (max-width: 480px) {
    &.ring1 {
      width: 140px;
      height: 140px;
    }

    &.ring2 {
      width: 200px;
      height: 200px;
    }
  }
`;

const ImpactItem = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.3);
    box-shadow: 0 8px 25px rgba(var(--accent-color-rgb), 0.2);
  }

  &.item1 {
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  &.item2 {
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
  }

  &.item3 {
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }

  &.item4 {
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    width: 75px;
    height: 75px;
    padding: 0.4rem;

    &.item2 {
      left: 8%;
    }

    &.item4 {
      right: 8%;
    }
  }

  @media (max-width: 480px) {
    width: 65px;
    height: 65px;
    padding: 0.3rem;

    &.item2 {
      left: 10%;
    }

    &.item4 {
      right: 10%;
    }
  }
`;

const ImpactItemIcon = styled.div`
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 0.3rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ImpactItemText = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    line-height: 1.1;
  }
`;

const ImpactDescription = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 8px;
  }
`;

const ImpactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;

  @media (max-width: 768px) {
    margin: 1.5rem 0 0;
  }

  @media (max-width: 480px) {
    margin: 1rem 0 0;
  }
`;

const ImpactListItem = styled.li`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-bottom: 1rem;
  }
`;

const ImpactListIcon = styled.div`
  width: 30px;
  height: 30px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    font-size: 0.8rem;
  }
`;

const ImpactListText = styled.div`
  flex: 1;
`;

const ImpactListTitle = styled.h4`
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;

const ImpactListDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

// Стили для секции услуг фирменного стиля
const BrandingServicesSection = styled.section`
  padding: 10rem 0;
  position: relative;
  background: linear-gradient(
    to top,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.95) 100%
  );
  overflow: hidden;
  margin-top: 4rem;
  border-radius: 20px;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const ServicesTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  position: relative;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

const ServiceCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: all 0.5s ease;

  &:nth-child(1) {
    animation: ${floatAnimation} 6s infinite ease-in-out;
  }
  &:nth-child(2) {
    animation: ${floatAnimation} 7s infinite ease-in-out 0.5s;
  }
  &:nth-child(3) {
    animation: ${floatAnimation} 8s infinite ease-in-out 1s;
  }
  &:nth-child(4) {
    animation: ${floatAnimation} 9s infinite ease-in-out 1.5s;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      rgba(var(--accent-color-rgb), 0.05) 50%,
      rgba(var(--accent-color-rgb), 0.02) 100%
    );
    z-index: -1;
    opacity: 0.5;
    transition: opacity 0.5s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.2);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
  }
`;

const ServiceIconContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
`;

const ServiceIconBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  background-size: 200% 200%;
  animation: ${gradientMove} 5s ease infinite;
  opacity: 0.8;
  transform: rotate(0deg);
  transition: all 0.5s ease;

  ${ServiceCard}:hover & {
    transform: rotate(10deg) scale(1.1);
    opacity: 1;
  }
`;

const ServiceIcon = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 18px;
  background: rgba(20, 27, 43, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  color: var(--accent-color);
  transform: rotate(0deg);
  transition: all 0.5s ease;

  ${ServiceCard}:hover & {
    transform: rotate(-5deg) scale(0.9);
    color: white;
    background: transparent;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    color: var(--accent-color);
    transform: translateX(5px);
  }
`;

const ServiceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  flex-grow: 1;
`;

const ServiceBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const shineEffect = keyframes`
  0% { transform: translateX(-100%) rotate(30deg); }
  100% { transform: translateX(300%) rotate(30deg); }
`;

const ServiceVisual = styled.div`
  position: relative;
  margin-top: auto;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: translateX(-100%) rotate(30deg);

    ${ServiceCard}:hover & {
      animation: ${shineEffect} 1.5s ease-in-out;
    }
  }
`;

const LogoVisual = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-main {
    width: 60px;
    height: 60px;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-color-light) 100%
    );
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 900;
    font-size: 1.5rem;
  }

  .logo-versions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .logo-version {
      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      font-size: 0.7rem;

      &.inverse {
        background: rgba(255, 255, 255, 0.8);
        color: var(--accent-color);
      }
    }
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    .text-line {
      width: 80px;
      height: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;

      &:nth-child(2) {
        width: 60px;
      }
    }
  }
`;

const ColorPaletteVisual = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .color-swatch {
    width: 40px;
    height: 60px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 15px;
      background: rgba(0, 0, 0, 0.1);
    }

    &.color1 {
      background: #ff7e5f;
    }
    &.color2 {
      background: #feb47b;
    }
    &.color3 {
      background: #7cd1c0;
    }
    &.color4 {
      background: #5d5d5d;
    }
    &.color5 {
      background: #f6f6f2;
    }
  }
`;

const TypographyVisual = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.8rem;

  .type-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .type-label {
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.5);
      width: 40px;
      text-align: right;
    }

    .type-sample {
      height: 12px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 6px;
      flex-grow: 1;

      &.heading {
        height: 18px;
        background: rgba(var(--accent-color-rgb), 0.4);
      }

      &.subheading {
        height: 14px;
        background: rgba(var(--accent-color-rgb), 0.3);
      }

      &.body {
        height: 10px;
      }

      &.caption {
        height: 8px;
      }
    }
  }
`;

const GuidelineVisual = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  gap: 1rem;

  .guideline-book {
    width: 70px;
    height: 90px;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-color-light) 100%
    );
    border-radius: 6px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '';
      position: absolute;
      top: 10px;
      bottom: 10px;
      left: 10px;
      right: 10px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }

    .book-title {
      color: white;
      font-weight: 700;
      font-size: 0.6rem;
      transform: rotate(-90deg);
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  .guideline-pages {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    justify-content: center;

    .page {
      width: 120px;
      height: 18px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;

      &.page-title {
        width: 80px;
        height: 12px;
        background: rgba(var(--accent-color-rgb), 0.3);
      }
    }
  }
`;

const ServicesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const CircleDecoration = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;

  &.circle1 {
    width: 300px;
    height: 300px;
    border: 2px solid var(--accent-color);
    top: -100px;
    left: -100px;
  }

  &.circle2 {
    width: 500px;
    height: 500px;
    border: 2px dashed var(--accent-color-light);
    bottom: -200px;
    right: -200px;
  }
`;

const LightSpot = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    transparent 70%
  );
  filter: blur(50px);

  &.spot1 {
    top: 20%;
    left: 10%;
  }

  &.spot2 {
    bottom: 10%;
    right: 5%;
  }
`;

// New section for our approach to creating identity
const ApproachSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(16, 24, 39, 0.95) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  margin-top: 4rem;
  border-radius: 20px;
`;

const ApproachContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ApproachHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
`;

const ApproachTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const ApproachStepsContainer = styled.div`
  display: flex;
  gap: 4rem;
  position: relative;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

const ApproachStepCard = styled(motion.div)`
  flex: 1;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to right,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transform: rotate(45deg);
    transition: all 0.5s ease;
    opacity: 0;
  }

  &:hover::before {
    animation: ${shimmerAnimation} 1.5s ease-in-out;
    opacity: 1;
  }

  &:nth-child(1) {
    transform-origin: center right;
  }

  &:nth-child(2) {
    transform-origin: center left;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -30px;
  left: 30px;
  font-size: 8rem;
  font-weight: 900;
  color: rgba(var(--accent-color-rgb), 0.07);
  line-height: 1;
  z-index: 0;
`;

const StepTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const StepDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const ProcessVisualizer = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResearchVisual = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  .research-element {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10px;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-10px);
    }

    .element-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      background: rgba(var(--accent-color-rgb), 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--accent-color);
      margin-bottom: 10px;
      transition: all 0.3s ease;
    }

    .element-bar {
      width: 70%;
      height: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      margin-bottom: 5px;
      overflow: hidden;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        background: var(--accent-color);
        border-radius: 4px;
      }

      &.bar1::after {
        width: 75%;
      }
      &.bar2::after {
        width: 45%;
      }
      &.bar3::after {
        width: 90%;
      }
      &.bar4::after {
        width: 60%;
      }
    }

    .element-label {
      font-size: 0.75rem;
      color: var(--text-secondary);
      text-align: center;
    }

    &:hover .element-icon {
      background: rgba(var(--accent-color-rgb), 0.2);
      transform: scale(1.1);
    }
  }

  .research-notes {
    position: absolute;
    width: 120px;
    height: 70px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .note-line {
      height: 6px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;

      &:nth-child(2) {
        width: 70%;
      }
    }
  }
`;

const ConceptVisual = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;

  .concept-center {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-color-light) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
    box-shadow: 0 0 20px rgba(var(--accent-color-rgb), 0.3);
    position: relative;
    z-index: 2;
    animation: ${pulse} 3s infinite ease-in-out;
  }

  .concept-orbits {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .orbit {
    position: absolute;
    border: 1px dashed rgba(var(--accent-color-rgb), 0.3);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &.orbit1 {
      width: 150px;
      height: 150px;
      animation: ${rotate} 20s linear infinite;
    }

    &.orbit2 {
      width: 220px;
      height: 220px;
      animation: ${rotate} 30s linear infinite reverse;
    }
  }

  .concept-element {
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--accent-color);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 15px rgba(var(--accent-color-rgb), 0.3);
    }

    &.element1 {
      top: 20%;
      left: 30%;
    }

    &.element2 {
      top: 70%;
      left: 25%;
    }

    &.element3 {
      top: 30%;
      right: 25%;
    }

    &.element4 {
      top: 65%;
      right: 30%;
    }
  }

  .connecting-line {
    position: absolute;
    background: rgba(var(--accent-color-rgb), 0.2);
    height: 2px;
    z-index: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent-color);
      top: 50%;
      transform: translateY(-50%);
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }

    &.line1 {
      width: 60px;
      top: 35%;
      left: 35%;
      transform: rotate(-30deg);
    }

    &.line2 {
      width: 70px;
      bottom: 35%;
      left: 32%;
      transform: rotate(45deg);
    }

    &.line3 {
      width: 65px;
      top: 40%;
      right: 33%;
      transform: rotate(30deg);
    }

    &.line4 {
      width: 60px;
      bottom: 40%;
      right: 35%;
      transform: rotate(-45deg);
    }
  }
`;

const ApproachBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
`;

const ApproachCircle = styled.div`
  position: absolute;
  border-radius: 50%;

  &.circle1 {
    width: 400px;
    height: 400px;
    border: 2px solid rgba(var(--accent-color-rgb), 0.05);
    top: -150px;
    right: -100px;
  }

  &.circle2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.03) 0%,
      transparent 70%
    );
    bottom: -100px;
    left: -50px;
  }
`;

// Business Benefits Section
const BenefitsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.98) 100%
  );
  overflow: hidden;
  margin-top: 4rem;
  border-radius: 20px;
`;

const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const BenefitsHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
`;

const BenefitsTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const BenefitsIntro = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const gradientBorder = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light),
      var(--accent-color)
    );
    background-size: 200% 200%;
    animation: ${gradientBorder} 4s linear infinite;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const BenefitIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-color-light) 100%
    );
    opacity: 0.9;
    transition: all 0.3s ease;
  }

  svg {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  ${BenefitCard}:hover &::before {
    opacity: 1;
  }

  ${BenefitCard}:hover & svg {
    transform: scale(1.2);
  }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(var(--accent-color-rgb), 0.3); }
  50% { box-shadow: 0 0 20px rgba(var(--accent-color-rgb), 0.6); }
  100% { box-shadow: 0 0 5px rgba(var(--accent-color-rgb), 0.3); }
`;

const BenefitIconGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 16px;
  animation: ${glowAnimation} 3s infinite ease-in-out;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${BenefitCard}:hover & {
    opacity: 1;
  }
`;

const BenefitTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  transition: all 0.3s ease;

  ${BenefitCard}:hover & {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
`;

const BenefitDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const BenefitVisual = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  opacity: 0.2;
  transition: all 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
    color: var(--accent-color);
  }

  ${BenefitCard}:hover & {
    opacity: 0.3;
    transform: scale(1.1);
  }
`;

const BenefitsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const BenefitDecorationCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.03) 0%,
    transparent 70%
  );

  &.circle1 {
    width: 500px;
    height: 500px;
    top: 10%;
    left: -200px;
  }

  &.circle2 {
    width: 400px;
    height: 400px;
    bottom: 10%;
    right: -150px;
  }
`;

const BenefitDecorationLine = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.1),
    transparent
  );

  &.line1 {
    width: 80%;
    top: 25%;
    left: 10%;
  }

  &.line2 {
    width: 60%;
    bottom: 35%;
    right: 5%;
  }
`;

// Inspiration Section
const InspirationSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(16, 24, 39, 0.98) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  margin-top: 4rem;
  border-radius: 20px;
`;

const InspirationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const InspirationHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
`;

const InspirationTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const InspirationContent = styled.div`
  display: flex;
  gap: 5rem;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const InspirationText = styled.div`
  flex: 1;
  position: relative;
`;

const sparkleAnimation = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: scale(1) rotate(45deg); opacity: 0; }
`;

const InspirationParagraph = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 4px;
    height: calc(100% - 1rem);
    background: linear-gradient(to bottom, var(--accent-color), transparent);
    border-radius: 2px;
  }

  &:hover::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    top: 0;
    left: -5px;
    background: var(--accent-color);
    opacity: 0;
    border-radius: 50%;
    animation: ${sparkleAnimation} 1.5s ease-out;
  }
`;

const highlight = keyframes`
  0% { background-position: -100% 0; }
  100% { background-position: 200% 0; }
`;

const InspirationHighlight = styled.span`
  position: relative;
  color: var(--accent-color);
  font-weight: 700;
  background: linear-gradient(
    90deg,
    var(--text-secondary) 0%,
    var(--accent-color) 50%,
    var(--text-secondary) 100%
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover {
    animation: ${highlight} 2s linear infinite;
  }
`;

const InspirationVisual = styled.div`
  flex: 1;
  position: relative;
  height: 450px;

  @media (max-width: 992px) {
    width: 100%;
    height: 400px;
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`;

const bulbGlow = keyframes`
  0% { box-shadow: 0 0 15px rgba(var(--accent-color-rgb), 0.3); }
  50% { box-shadow: 0 0 30px rgba(var(--accent-color-rgb), 0.7); }
  100% { box-shadow: 0 0 15px rgba(var(--accent-color-rgb), 0.3); }
`;

const InspirationBulb = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.8) 0%,
    rgba(var(--accent-color-rgb), 0.4) 70%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;
  color: white;
  z-index: 2;
  animation: ${bulbGlow} 4s infinite ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px 5px 0 0;
  }
`;

const lightRay = keyframes`
  0% { opacity: 0.5; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1); }
  100% { opacity: 0.5; transform: scale(0.8); }
`;

const InspirationLight = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.2) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(20px);
  z-index: 1;
  animation: ${lightRay} 4s infinite ease-in-out;
`;

const floatUp = keyframes`
  0% { transform: translateY(0); opacity: 0.7; }
  100% { transform: translateY(-20px); opacity: 0; }
`;

const InspirationIdea = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--accent-color);
  animation: ${floatUp} 3s infinite ease-out;

  &.idea1 {
    top: 35%;
    left: 20%;
    animation-delay: 0s;
  }

  &.idea2 {
    top: 40%;
    left: 40%;
    animation-delay: 0.5s;
  }

  &.idea3 {
    top: 30%;
    right: 25%;
    animation-delay: 1s;
  }

  &.idea4 {
    top: 50%;
    right: 15%;
    animation-delay: 1.5s;
  }

  &.idea5 {
    top: 60%;
    left: 30%;
    animation-delay: 2s;
  }
`;

const InspirationBrandShape = styled(motion.div)`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 180px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  font-weight: 900;
  color: white;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 12px;
  }
`;

const waveAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const InspirationShapeGlow = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 20px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transform: translateX(-100%);
    animation: ${waveAnimation} 3s infinite ease-in-out;
  }
`;

const InspirationConnection = styled.div`
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 150px;
  background: linear-gradient(
    to bottom,
    rgba(var(--accent-color-rgb), 0.3),
    rgba(var(--accent-color-rgb), 0.8)
  );
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--accent-color);
    transform: translateX(-50%);
  }

  &::before {
    top: -6px;
  }

  &::after {
    bottom: -6px;
  }
`;

const InspirationArrow = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-right: 3px solid rgba(var(--accent-color-rgb), 0.8);
  border-bottom: 3px solid rgba(var(--accent-color-rgb), 0.8);
  transform: rotate(45deg);
  bottom: 10px;
  left: 50%;
  margin-left: -6px;
`;

const InspirationBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const InspirationDecorationCircle = styled.div`
  position: absolute;
  border-radius: 50%;

  &.circle1 {
    width: 500px;
    height: 500px;
    border: 1px dashed rgba(var(--accent-color-rgb), 0.1);
    top: -200px;
    left: -100px;
  }

  &.circle2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.02) 0%,
      transparent 70%
    );
    bottom: 10%;
    right: -100px;
  }
`;

const lineDrawing = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;

const InspirationLines = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;

  path {
    fill: none;
    stroke: rgba(var(--accent-color-rgb), 0.05);
    stroke-width: 1;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: ${lineDrawing} 8s linear forwards;
  }
`;

// Order Process Section
const OrderProcessSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.95) 100%
  );
  overflow: hidden;
  margin-top: 4rem;
  border-radius: 20px;

  @media (max-width: 992px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    margin-top: 3rem;
    border-radius: 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
    margin-top: 2rem;
  }
`;

const OrderProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const OrderProcessHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;

  @media (max-width: 992px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

const OrderProcessTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }

  @media (max-width: 992px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 0.8rem;

    &::after {
      width: 80px;
      height: 4px;
      bottom: -12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;

    &::after {
      width: 60px;
      height: 3px;
      bottom: -10px;
    }
  }
`;

const OrderProcessSubtitle = styled(motion.h3)`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-top: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

const OrderProcessDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const StepsContainer = styled.div`
  position: relative;
  margin-top: 6rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(
      to bottom,
      var(--accent-color) 0%,
      rgba(var(--accent-color-rgb), 0.3) 100%
    );
    transform: translateX(-1px);
    z-index: 1;
  }

  @media (max-width: 992px) {
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;

    &::before {
      left: 30px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 2rem;

    &::before {
      left: 25px;
    }
  }
`;

const timelineIndicator = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0.5); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(var(--accent-color-rgb), 0); }
  100% { transform: scale(1); }
`;

const StepItem = styled(motion.div)`
  display: flex;
  margin-bottom: 5rem;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(odd) {
    flex-direction: row-reverse;

    ${({ step }) =>
      step % 2 === 1 &&
      `
      @media (min-width: 769px) {
        .step-content {
          align-items: flex-end;
          text-align: right;
          padding-right: 4rem;
        }
        
        .step-number {
          right: -30px;
        }
      }
    `}
  }

  &:nth-child(even) {
    .step-content {
      align-items: flex-start;
      text-align: left;
      padding-left: 4rem;
    }

    .step-number {
      left: -30px;
    }
  }

  @media (max-width: 992px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: row !important;
    padding-left: 70px;
    margin-bottom: 3rem;

    .step-content {
      align-items: flex-start !important;
      text-align: left !important;
      padding-left: 2.5rem !important;
      padding-right: 0 !important;
    }

    .step-number {
      left: 20px !important;
      right: auto !important;
    }
  }

  @media (max-width: 480px) {
    padding-left: 65px;
    margin-bottom: 2.5rem;

    .step-content {
      padding-left: 2rem !important;
    }

    .step-number {
      left: 15px !important;
    }
  }
`;

const StepContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;

  .step-number {
    position: absolute;
    top: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-color-light) 100%
    );
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
    z-index: 3;
    animation: ${timelineIndicator} 2s infinite;
    animation-play-state: paused;
  }

  ${StepItem}:hover .step-number {
    animation-play-state: running;
  }

  @media (max-width: 768px) {
    .step-number {
      width: 50px;
      height: 50px;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 480px) {
    .step-number {
      width: 45px;
      height: 45px;
      font-size: 1.1rem;
    }
  }
`;

const OrderStepTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  ${StepItem}:hover & {
    color: var(--accent-color);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

const OrderStepDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const StepCardContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const StepCard = styled.div`
  width: 250px;
  height: 160px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      rgba(var(--accent-color-rgb), 0) 100%
    );
    opacity: 0.5;
    transition: opacity 0.5s ease;
  }

  ${StepItem}:hover & {
    transform: perspective(1000px) rotateY(10deg);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.1);

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 992px) {
    width: 200px;
    height: 130px;
  }
`;

const StepIconContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: var(--accent-color);
  transition: all 0.5s ease;

  ${StepItem}:hover & {
    transform: scale(1.1);
    background: rgba(var(--accent-color-rgb), 0.2);
  }

  @media (max-width: 992px) {
    width: 70px;
    height: 70px;
    font-size: 2rem;
  }
`;

const OrderCtaContainer = styled.div`
  margin-top: 5rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }

  @media (max-width: 480px) {
    margin-top: 2rem;
  }
`;

const OrderCta = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: skewX(-20deg) translateX(-150%);
    transition: all 0.5s ease;
  }

  &:hover {
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.4);
    transform: translateY(-3px);

    &::before {
      transform: skewX(-20deg) translateX(300%);
    }

    svg {
      transform: translateX(5px);
    }
  }

  svg {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    gap: 0.8rem;

    svg {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    gap: 0.6rem;

    svg {
      font-size: 1rem;
    }
  }
`;

const OrderProcessBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const OrderProcessCircle = styled.div`
  position: absolute;
  border-radius: 50%;

  &.circle1 {
    width: 400px;
    height: 400px;
    border: 1px dashed rgba(var(--accent-color-rgb), 0.1);
    top: 20%;
    right: -150px;
  }

  &.circle2 {
    width: 300px;
    height: 300px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.02) 0%,
      transparent 70%
    );
    bottom: 15%;
    left: -100px;
  }
`;

const OrderProcessLine = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.1),
    transparent
  );

  &.line1 {
    width: 90%;
    top: 35%;
    left: 5%;
  }

  &.line2 {
    width: 70%;
    bottom: 30%;
    right: 5%;
    transform: rotate(-2deg);
  }
`;

// FAQ Section Styles
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
  background: linear-gradient(to top left, transparent 49%, var(--bg-primary) 51%);
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
    animation: ${pulseFaq} 2s infinite ease-in-out;
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
    margin-bottom: 2.5rem;
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
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2),
      0 0 15px rgba(var(--accent-color-rgb), 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.1);
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

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    transition: all 0.3s ease;
    flex: 1;
    margin: 0;
    transform: translateZ(5px);
  }

  &:hover h3 {
    color: var(--accent-color);
    transform: translateZ(10px);
  }

  svg {
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
    padding: 6px;
    transform: ${props => props['data-open'] === 'true' ? 'rotate(45deg)' : 'rotate(0deg)'};
    background-color: ${props => 
      props['data-open'] === 'true' 
        ? 'rgba(var(--accent-color-rgb), 0.15)' 
        : 'rgba(var(--accent-color-rgb), 0.05)'
    };
  }

  &:hover svg {
    background: rgba(var(--accent-color-rgb), 0.1);
    box-shadow: 0 0 10px rgba(var(--accent-color-rgb), 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    &::after {
      left: 1.5rem;
      right: 1.5rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    align-items: flex-start;

    &::after {
      left: 1.2rem;
      right: 1.2rem;
    }

    h3 {
      font-size: 1rem;
      line-height: 1.4;
      margin-right: 0.5rem;
    }

    svg {
      width: 24px;
      height: 24px;
      margin-left: 0.5rem;
      margin-top: 0.2rem;
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
      margin-bottom: 0.3rem;

      &::before {
        left: -0.8rem;
      }
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
      var(--accent-color-light)
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
  padding: 1rem 2rem;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.5);
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
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

const Branding = () => {
  // Add modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Add FAQ state
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  // FAQ data specific to branding
  const faqData = [
    {
      question: '1. Яка різниця між логотипом і фірмовим стилем?',
      answer:
        'Логотип — це лише один елемент. Фірмовий стиль включає повний візуальний комплект: кольори, шрифти, візуальні правила, іконки, оформлення соцмереж і т. д.',
    },
    {
      question: '2. Чи можна замовити лише частину фірмового стилю?',
      answer:
        'Так, ми можемо адаптувати послугу під ваш запит — наприклад, розробити лише логотип або оновити палітру й типографіку для вже існуючого бренду.',
    },
    {
      question: '3. Чи отримаю я брендбук?',
      answer:
        'Так, у базовий пакет входить гайдлайн з основними правилами використання стилю. За потреби ми можемо створити повноцінний брендбук з розширеними прикладами.',
    },
    {
      question: '4. Скільки часу триває розробка фірмового стилю?',
      answer:
        'В середньому — від 2 до 4 тижнів, залежно від обсягу робіт і швидкості погодження. Ми погоджуємо дедлайни ще до старту.',
    },
    {
      question: '5. Чи можу я внести правки до запропонованого дизайну?',
      answer:
        'Так, передбачено 1–2 раунди коригувань у межах затвердженої концепції. Ми враховуємо ваші побажання, зберігаючи професійну якість.',
    },
    {
      question: '6. У яких форматах я отримаю фінальні матеріали?',
      answer:
        'Ми передаємо логотип і елементи стилю у форматах для друку (.ai, .pdf) і для digital (.png, .svg, .jpg). Шрифти — з ліцензіями або рекомендаціями.',
    },
  ];

  // Function to toggle FAQ
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
              Розробка фірмового стилю — <span>візуальна ДНК</span> вашого
              бізнесу
            </HeroTitle>

            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Айдентика — це не просто логотип чи кольори. Це візуальна мова,
              яка доносить ваш характер, цінності та настрій до аудиторії. Ми
              створюємо фірмовий стиль, що працює на вас — кожен елемент
              підсилює впізнаваність і відрізняє бренд серед конкурентів.
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
                Замовити розробку <FaArrowRight />
              </PrimaryButton>
            </HeroButtons>

            <HeroFeatures
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FeatureItem>
                <HeroFeatureIcon>
                  <FaFingerprint />
                </HeroFeatureIcon>
                <FeatureText>Унікальність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaRegEye />
                </HeroFeatureIcon>
                <FeatureText>Впізнаваність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaSwatchbook />
                </HeroFeatureIcon>
                <FeatureText>Системність</FeatureText>
              </FeatureItem>
            </HeroFeatures>
          </HeroContent>

          <BrandingPreview
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <BrandingGlow
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

            <BrandingContainer
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
              <BrandElementWrapper className="logo">SQ</BrandElementWrapper>
              <BrandElementWrapper className="color-palette">
                <div className="color c1"></div>
                <div className="color c2"></div>
                <div className="color c3"></div>
                <div className="color c4"></div>
              </BrandElementWrapper>
              <BrandElementWrapper className="typography">
                <div className="font-title">Montserrat</div>
                <div className="font-text">Roboto</div>
              </BrandElementWrapper>
              <BrandElementWrapper className="pattern"></BrandElementWrapper>

              <ConnectingLine className="line1" />
              <ConnectingLine className="line2" />
              <ConnectingLine className="line3" />
              <ConnectingLine className="line4" />
            </BrandingContainer>
          </BrandingPreview>
        </HeroContainer>
      </HeroSection>

      {/* Секция о фирменном стиле */}
      <BrandStyleSection>
        <BrandStyleWave />
        <BrandStyleBackgroundCircle className="circle1" />
        <BrandStyleBackgroundCircle className="circle2" />

        <BrandStyleContainer>
          <BrandStyleHeader>
            <BrandStyleTitle
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Що таке фірмовий стиль і навіщо він потрібен
            </BrandStyleTitle>
          </BrandStyleHeader>

          <BrandStyleGrid>
            <BrandStyleElementsSection>
              <ElementsSectionTitle
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Основні елементи айдентики
              </ElementsSectionTitle>

              <ElementsDescription
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Фірмовий стиль — це комплекс візуальних рішень, які формують
                цілісне сприйняття бренду. До нього входять:
              </ElementsDescription>

              <BrandElements>
                <BrandElement
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ElementIcon>
                    <FaFingerprint />
                  </ElementIcon>
                  <ElementContent>
                    <ElementTitle>Логотип та його варіації</ElementTitle>
                    <ElementDescription>
                      Унікальний графічний символ для миттєвої ідентифікації
                      бренду
                    </ElementDescription>
                  </ElementContent>
                </BrandElement>

                <BrandElement
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <ElementIcon>
                    <FaPalette />
                  </ElementIcon>
                  <ElementContent>
                    <ElementTitle>Колірна палітра</ElementTitle>
                    <ElementDescription>
                      Характерні кольори, що викликають потрібні емоції та
                      асоціації
                    </ElementDescription>
                  </ElementContent>
                </BrandElement>

                <BrandElement
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <ElementIcon>
                    <FaFont />
                  </ElementIcon>
                  <ElementContent>
                    <ElementTitle>Шрифти й типографічна сітка</ElementTitle>
                    <ElementDescription>
                      Стильове оформлення текстів для узгодженої комунікації
                    </ElementDescription>
                  </ElementContent>
                </BrandElement>

                <BrandElement
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <ElementIcon>
                    <FaPencilAlt />
                  </ElementIcon>
                  <ElementContent>
                    <ElementTitle>Іконки, патерни, ілюстрації</ElementTitle>
                    <ElementDescription>
                      Графічні елементи, що доповнюють загальну концепцію
                    </ElementDescription>
                  </ElementContent>
                </BrandElement>

                <BrandElementWide
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <ElementIcon>
                    <FaSwatchbook />
                  </ElementIcon>
                  <ElementContent>
                    <ElementTitle>Гайдлайн або брендбук</ElementTitle>
                    <ElementDescription>
                      Повний документ зі стандартами використання всіх елементів
                      бренду для різних носіїв — від візиток до digital-кампаній
                    </ElementDescription>
                  </ElementContent>
                </BrandElementWide>
              </BrandElements>
            </BrandStyleElementsSection>

            <BrandStyleImpactSection>
              <ElementsSectionTitle
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Як стиль впливає на імідж компанії
              </ElementsSectionTitle>

              <ElementsDescription
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Фірмовий стиль — це перше враження, яке формується ще до
                знайомства з продуктом. Якісний стиль:
              </ElementsDescription>

              <ImpactGraphic
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <ImpactCenter>
                  <FaSwatchbook />
                </ImpactCenter>

                <ImpactRing className="ring1" />
                <ImpactRing className="ring2" />

                <ImpactItem className="item1">
                  <ImpactItemIcon>
                    <FaLightbulb />
                  </ImpactItemIcon>
                  <ImpactItemText>Цінності компанії</ImpactItemText>
                </ImpactItem>

                <ImpactItem className="item2">
                  <ImpactItemIcon>
                    <FaUsers />
                  </ImpactItemIcon>
                  <ImpactItemText>Довіра клієнтів</ImpactItemText>
                </ImpactItem>

                <ImpactItem className="item3">
                  <ImpactItemIcon>
                    <FaHeart />
                  </ImpactItemIcon>
                  <ImpactItemText>Емоційний зв'язок</ImpactItemText>
                </ImpactItem>

                <ImpactItem className="item4">
                  <ImpactItemIcon>
                    <FaRegEye />
                  </ImpactItemIcon>
                  <ImpactItemText>Впізнаваність</ImpactItemText>
                </ImpactItem>
              </ImpactGraphic>

              <ImpactDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <ImpactList>
                  <ImpactListItem>
                    <ImpactListIcon>
                      <FaLightbulb />
                    </ImpactListIcon>
                    <ImpactListText>
                      <ImpactListTitle>
                        Підкреслює цінності компанії
                      </ImpactListTitle>
                      <ImpactListDescription>
                        Візуальна мова передає філософію бренду та підкреслює
                        його ключові цінності для аудиторії.
                      </ImpactListDescription>
                    </ImpactListText>
                  </ImpactListItem>

                  <ImpactListItem>
                    <ImpactListIcon>
                      <FaUsers />
                    </ImpactListIcon>
                    <ImpactListText>
                      <ImpactListTitle>
                        Формує довіру й професійний імідж
                      </ImpactListTitle>
                      <ImpactListDescription>
                        Якісний дизайн демонструє увагу до деталей і
                        професіоналізм компанії на всіх рівнях взаємодії.
                      </ImpactListDescription>
                    </ImpactListText>
                  </ImpactListItem>

                  <ImpactListItem>
                    <ImpactListIcon>
                      <FaHeart />
                    </ImpactListIcon>
                    <ImpactListText>
                      <ImpactListTitle>
                        Створює емоційний зв'язок із клієнтом
                      </ImpactListTitle>
                      <ImpactListDescription>
                        Гармонійний візуальний стиль викликає потрібні емоції та
                        будує міцний зв'язок з аудиторією.
                      </ImpactListDescription>
                    </ImpactListText>
                  </ImpactListItem>

                  <ImpactListItem>
                    <ImpactListIcon>
                      <FaRegEye />
                    </ImpactListIcon>
                    <ImpactListText>
                      <ImpactListTitle>
                        Сприяє впізнаванню в офлайн та онлайн середовищі
                      </ImpactListTitle>
                      <ImpactListDescription>
                        Єдиний стиль забезпечує миттєве впізнавання бренду
                        незалежно від каналу комунікації.
                      </ImpactListDescription>
                    </ImpactListText>
                  </ImpactListItem>
                </ImpactList>
              </ImpactDescription>
            </BrandStyleImpactSection>
          </BrandStyleGrid>
        </BrandStyleContainer>
      </BrandStyleSection>

      {/* Секция услуг фирменного стиля */}
      <BrandingServicesSection>
        <ServicesBackground>
          <CircleDecoration className="circle1" />
          <CircleDecoration className="circle2" />
          <LightSpot className="spot1" />
          <LightSpot className="spot2" />
        </ServicesBackground>

        <ServicesContainer>
          <ServicesHeader>
            <ServicesTitle
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Що входить до послуги розробки фірмового стилю
            </ServicesTitle>
          </ServicesHeader>

          <ServicesGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ServiceBadge>Основа бренду</ServiceBadge>
              <ServiceIconContainer>
                <ServiceIconBg />
                <ServiceIcon>
                  <FaFingerprint />
                </ServiceIcon>
              </ServiceIconContainer>

              <ServiceTitle>Логотип</ServiceTitle>
              <ServiceDescription>
                Створюємо оригінальний знак, який передає сутність бренду.
                Пропонуємо кілька концептів, адаптуємо логотип для різних
                форматів — від мобільного додатку до білборду.
              </ServiceDescription>

              <ServiceVisual>
                <LogoVisual>
                  <div className="logo-main">SQ</div>
                  <div className="logo-versions">
                    <div className="logo-version">SQ</div>
                    <div className="logo-version inverse">SQ</div>
                  </div>
                  <div className="logo-text">
                    <div className="text-line"></div>
                    <div className="text-line"></div>
                  </div>
                </LogoVisual>
              </ServiceVisual>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ServiceBadge>Емоційний вплив</ServiceBadge>
              <ServiceIconContainer>
                <ServiceIconBg />
                <ServiceIcon>
                  <FaPalette />
                </ServiceIcon>
              </ServiceIconContainer>

              <ServiceTitle>Колірна палітра</ServiceTitle>
              <ServiceDescription>
                Підбираємо кольори, які відповідають емоційному тону бренду,
                враховуємо психологію кольору, контрастність і практичність
                використання на різних фонах.
              </ServiceDescription>

              <ServiceVisual>
                <ColorPaletteVisual>
                  <div className="color-swatch color1"></div>
                  <div className="color-swatch color2"></div>
                  <div className="color-swatch color3"></div>
                  <div className="color-swatch color4"></div>
                  <div className="color-swatch color5"></div>
                </ColorPaletteVisual>
              </ServiceVisual>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ServiceBadge>Текстова комунікація</ServiceBadge>
              <ServiceIconContainer>
                <ServiceIconBg />
                <ServiceIcon>
                  <FaFont />
                </ServiceIcon>
              </ServiceIconContainer>

              <ServiceTitle>Шрифти та типографіка</ServiceTitle>
              <ServiceDescription>
                Формуємо типографічну систему: основні та акцентні шрифти, стилі
                заголовків, розміри та міжрядкові інтервали. Забезпечуємо
                зручність читання й послідовність у візуальних комунікаціях.
              </ServiceDescription>

              <ServiceVisual>
                <TypographyVisual>
                  <div className="type-line">
                    <div className="type-label">H1</div>
                    <div className="type-sample heading"></div>
                  </div>
                  <div className="type-line">
                    <div className="type-label">H2</div>
                    <div className="type-sample subheading"></div>
                  </div>
                  <div className="type-line">
                    <div className="type-label">Body</div>
                    <div className="type-sample body"></div>
                  </div>
                  <div className="type-line">
                    <div className="type-label">Caption</div>
                    <div className="type-sample caption"></div>
                  </div>
                </TypographyVisual>
              </ServiceVisual>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ServiceBadge>Стандарти використання</ServiceBadge>
              <ServiceIconContainer>
                <ServiceIconBg />
                <ServiceIcon>
                  <FaSwatchbook />
                </ServiceIcon>
              </ServiceIconContainer>

              <ServiceTitle>Гайдлайн (брендбук)</ServiceTitle>
              <ServiceDescription>
                Готуємо документ з чіткими правилами використання всіх елементів
                стилю. Це забезпечує цілісність візуального образу незалежно від
                того, хто займається дизайном у майбутньому.
              </ServiceDescription>

              <ServiceVisual>
                <GuidelineVisual>
                  <div className="guideline-book">
                    <div className="book-title">Brandbook</div>
                  </div>
                  <div className="guideline-pages">
                    <div className="page page-title"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                  </div>
                </GuidelineVisual>
              </ServiceVisual>
            </ServiceCard>
          </ServicesGrid>
        </ServicesContainer>
      </BrandingServicesSection>

      {/* New Approach Section */}
      <ApproachSection>
        <ApproachBackground>
          <ApproachCircle className="circle1" />
          <ApproachCircle className="circle2" />
        </ApproachBackground>

        <ApproachContainer>
          <ApproachHeader>
            <ApproachTitle
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Наш підхід до створення айдентики
            </ApproachTitle>
          </ApproachHeader>

          <ApproachStepsContainer>
            <ApproachStepCard
              initial={{ opacity: 0, rotateY: -10, x: -50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(var(--accent-color-rgb), 0.2)',
              }}
            >
              <StepNumber>01</StepNumber>
              <StepTitle>Брифінг і дослідження ринку</StepTitle>
              <StepDescription>
                Починаємо з діалогу. Вивчаємо бренд, його аудиторію, цінності,
                конкурентів. Аналізуємо ринок, визначаємо позиціонування. Це
                формує основу для дизайну, який не просто гарний, а стратегічно
                влучний.
              </StepDescription>

              <ProcessVisualizer>
                <ResearchVisual>
                  <div className="research-element">
                    <div className="element-icon">
                      <FaUsers />
                    </div>
                    <div className="element-bar bar1"></div>
                    <div className="element-label">Аудиторія</div>
                  </div>

                  <div className="research-element">
                    <div className="element-icon">
                      <FaLightbulb />
                    </div>
                    <div className="element-bar bar2"></div>
                    <div className="element-label">Цінності</div>
                  </div>

                  <div className="research-element">
                    <div className="element-icon">
                      <FaLayerGroup />
                    </div>
                    <div className="element-bar bar3"></div>
                    <div className="element-label">Конкуренти</div>
                  </div>

                  <div className="research-element">
                    <div className="element-icon">
                      <FaTag />
                    </div>
                    <div className="element-bar bar4"></div>
                    <div className="element-label">Позиціонування</div>
                  </div>

                  <div className="research-notes">
                    <div className="note-line"></div>
                    <div className="note-line"></div>
                    <div className="note-line"></div>
                  </div>
                </ResearchVisual>
              </ProcessVisualizer>
            </ApproachStepCard>

            <ApproachStepCard
              initial={{ opacity: 0, rotateY: 10, x: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                borderColor: 'rgba(var(--accent-color-rgb), 0.2)',
              }}
            >
              <StepNumber>02</StepNumber>
              <StepTitle>Концепція та ідея</StepTitle>
              <StepDescription>
                Ми не малюємо навмання. Усі елементи стилю підпорядковані ідеї —
                візуальній метафорі бренду. Це може бути форма, символ, характер
                руху, асоціативний ряд. У результаті народжується айдентика, що
                говорить без слів.
              </StepDescription>

              <ProcessVisualizer>
                <ConceptVisual>
                  <div className="concept-center">
                    <FaRegLightbulb />
                  </div>

                  <div className="concept-orbits">
                    <div className="orbit orbit1"></div>
                    <div className="orbit orbit2"></div>

                    <div className="connecting-line line1"></div>
                    <div className="connecting-line line2"></div>
                    <div className="connecting-line line3"></div>
                    <div className="connecting-line line4"></div>

                    <div className="concept-element element1">
                      <FaCube />
                    </div>
                    <div className="concept-element element2">
                      <FaPalette />
                    </div>
                    <div className="concept-element element3">
                      <FaFont />
                    </div>
                    <div className="concept-element element4">
                      <FaPencilAlt />
                    </div>
                  </div>
                </ConceptVisual>
              </ProcessVisualizer>
            </ApproachStepCard>
          </ApproachStepsContainer>
        </ApproachContainer>
      </ApproachSection>

      {/* Business Benefits Section */}
      <BenefitsSection>
        <BenefitsBackground>
          <BenefitDecorationCircle className="circle1" />
          <BenefitDecorationCircle className="circle2" />
          <BenefitDecorationLine className="line1" />
          <BenefitDecorationLine className="line2" />
        </BenefitsBackground>

        <BenefitsContainer>
          <BenefitsHeader>
            <BenefitsTitle
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Переваги для бізнесу
            </BenefitsTitle>

            <BenefitsIntro
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Сильна візуальна айдентика — це більше, ніж естетика. Це
              інструмент стратегічного впливу на сприйняття, продажі та
              лояльність. Фірмовий стиль виконує чіткі бізнес-завдання, і ось як
              саме:
            </BenefitsIntro>
          </BenefitsHeader>

          <BenefitsGrid>
            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <BenefitIcon>
                <BenefitIconGlow />
                <FaRegEye />
              </BenefitIcon>
              <BenefitTitle>Впізнаваність на ринку</BenefitTitle>
              <BenefitDescription>
                Коли в усіх точках контакту — від сайту до упаковки — бренд
                виглядає послідовно, він запам'ятовується значно швидше. Це
                економить ресурси на рекламу: достатньо кількох дотиків, щоб
                аудиторія впізнала ваш стиль. Візуальна сталість створює ефект
                знайомства, який перетворюється на довіру.
              </BenefitDescription>
              <BenefitVisual>
                <FaUsers />
              </BenefitVisual>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <BenefitIcon>
                <BenefitIconGlow />
                <FaRocket />
              </BenefitIcon>
              <BenefitTitle>Конкурентна перевага</BenefitTitle>
              <BenefitDescription>
                У більшості ніш візуальна айдентика або слабка, або хаотична. Ви
                виграєте вже тим, що виглядаєте краще. Ваш бренд виділяється у
                стрічці соцмереж, виглядає впевнено на презентації, професійно
                на виставці. Потенційні клієнти сприймають вас як сильного
                гравця — навіть до знайомства з продуктом.
              </BenefitDescription>
              <BenefitVisual>
                <FaLayerGroup />
              </BenefitVisual>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <BenefitIcon>
                <BenefitIconGlow />
                <FaSwatchbook />
              </BenefitIcon>
              <BenefitTitle>Системність у комунікації</BenefitTitle>
              <BenefitDescription>
                З фірмовим стилем ви отримуєте набір правил, які полегшують
                дизайн будь-яких матеріалів. Більше не потрібно щоразу
                вигадувати з нуля — просто дотримуйтесь гайду. Це економія часу,
                коштів і нервів.
              </BenefitDescription>
              <BenefitVisual>
                <FaFolderOpen />
              </BenefitVisual>
            </BenefitCard>

            <BenefitCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <BenefitIcon>
                <BenefitIconGlow />
                <FaPlus />
              </BenefitIcon>
              <BenefitTitle>Масштабованість бізнесу</BenefitTitle>
              <BenefitDescription>
                Чітка айдентика дозволяє легко запускати нові продукти,
                франшизи, філії або рекламні кампанії. Стиль гнучкий — але не
                втрачає зв'язку з основним брендом. Це основа для зростання.
              </BenefitDescription>
              <BenefitVisual>
                <FaPlus />
              </BenefitVisual>
            </BenefitCard>
          </BenefitsGrid>
        </BenefitsContainer>
      </BenefitsSection>

      {/* Inspiration Section */}
      <InspirationSection>
        <InspirationBackground>
          <InspirationDecorationCircle className="circle1" />
          <InspirationDecorationCircle className="circle2" />
          <InspirationLines>
            <path d="M0,100 Q200,50 400,200 T800,300" />
            <path d="M100,0 Q150,200 300,300 T500,400" />
            <path d="M800,100 Q600,150 400,250 T200,400" />
          </InspirationLines>
        </InspirationBackground>

        <InspirationContainer>
          <InspirationHeader>
            <InspirationTitle
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Наше натхнення — ваш успішний бренд
            </InspirationTitle>
          </InspirationHeader>

          <InspirationContent>
            <InspirationText>
              <InspirationParagraph
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Кожен наш проєкт — це не про красиву картинку. Це про{' '}
                <InspirationHighlight>суть</InspirationHighlight>, яку ми бачимо
                у вашому бізнесі. Ми не копіюємо тренди — ми створюємо рішення,
                які працюють саме для вас.
              </InspirationParagraph>

              <InspirationParagraph
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ми надихаємось не чужими кейсами, а вашою{' '}
                <InspirationHighlight>унікальною історією</InspirationHighlight>
                , продуктом, амбіціями. Звідси й народжуються айдентики, що
                резонують з аудиторією, викликають емоції, викристалізовують
                характер бренду.
              </InspirationParagraph>

              <InspirationParagraph
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ваша <InspirationHighlight>довіра</InspirationHighlight> — наша
                відповідальність. Саме тому ми не робимо шаблонів, не працюємо
                поверхнево і завжди пропонуємо більше, ніж очікуєте.
              </InspirationParagraph>
            </InspirationText>

            <InspirationVisual>
              <InspirationLight />
              <InspirationBulb
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: 'spring' }}
              >
                <FaRegLightbulb />
              </InspirationBulb>

              <InspirationIdea className="idea1">
                <FaLightbulb />
              </InspirationIdea>
              <InspirationIdea className="idea2">
                <FaPencilAlt />
              </InspirationIdea>
              <InspirationIdea className="idea3">
                <FaPalette />
              </InspirationIdea>
              <InspirationIdea className="idea4">
                <FaCube />
              </InspirationIdea>
              <InspirationIdea className="idea5">
                <FaFont />
              </InspirationIdea>

              <InspirationConnection>
                <InspirationArrow />
              </InspirationConnection>

              <InspirationBrandShape
                initial={{ scale: 0, opacity: 0, rotate: -10 }}
                whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, type: 'spring' }}
                whileHover={{
                  scale: 1.05,
                  rotate: 5,
                  boxShadow: '0 15px 40px rgba(var(--accent-color-rgb), 0.4)',
                }}
              >
                <InspirationShapeGlow />
                SQ
              </InspirationBrandShape>
            </InspirationVisual>
          </InspirationContent>
        </InspirationContainer>
      </InspirationSection>

      {/* Order Process Section */}
      <OrderProcessSection>
        <OrderProcessBackground>
          <OrderProcessCircle className="circle1" />
          <OrderProcessCircle className="circle2" />
          <OrderProcessLine className="line1" />
          <OrderProcessLine className="line2" />
        </OrderProcessBackground>

        <OrderProcessContainer>
          <OrderProcessHeader>
            <OrderProcessTitle
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Як замовити фірмовий стиль
            </OrderProcessTitle>

            <OrderProcessSubtitle
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Покрокова інструкція
            </OrderProcessSubtitle>

            <OrderProcessDescription
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Ми гарантуємо підтримку на кожному етапі та відкриту комунікацію.
            </OrderProcessDescription>
          </OrderProcessHeader>

          <StepsContainer>
            <StepItem
              step={1}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <StepContent className="step-content">
                <div className="step-number">1</div>
                <OrderStepTitle>Заявка</OrderStepTitle>
                <OrderStepDescription>
                  Ви звертаєтесь до нас з коротким описом запиту.
                </OrderStepDescription>
              </StepContent>

              <StepCardContainer>
                <StepCard>
                  <StepIconContainer>
                    <FaPencilAlt />
                  </StepIconContainer>
                </StepCard>
              </StepCardContainer>
            </StepItem>

            <StepItem
              step={2}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <StepContent className="step-content">
                <div className="step-number">2</div>
                <OrderStepTitle>Брифінг</OrderStepTitle>
                <OrderStepDescription>
                  Заповнюєте анкету або проходите онлайн-зустріч для уточнення
                  деталей.
                </OrderStepDescription>
              </StepContent>

              <StepCardContainer>
                <StepCard>
                  <StepIconContainer>
                    <FaUsers />
                  </StepIconContainer>
                </StepCard>
              </StepCardContainer>
            </StepItem>

            <StepItem
              step={3}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StepContent className="step-content">
                <div className="step-number">3</div>
                <OrderStepTitle>Пропозиція</OrderStepTitle>
                <OrderStepDescription>
                  Ми надсилаємо комерційну пропозицію з термінами, ціною і
                  складом послуги.
                </OrderStepDescription>
              </StepContent>

              <StepCardContainer>
                <StepCard>
                  <StepIconContainer>
                    <FaFileAlt />
                  </StepIconContainer>
                </StepCard>
              </StepCardContainer>
            </StepItem>

            <StepItem
              step={4}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <StepContent className="step-content">
                <div className="step-number">4</div>
                <OrderStepTitle>Початок роботи</OrderStepTitle>
                <OrderStepDescription>
                  Після погодження та оплати стартує етап дослідження і
                  концепції.
                </OrderStepDescription>
              </StepContent>

              <StepCardContainer>
                <StepCard>
                  <StepIconContainer>
                    <FaRocket />
                  </StepIconContainer>
                </StepCard>
              </StepCardContainer>
            </StepItem>

            <StepItem
              step={5}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <StepContent className="step-content">
                <div className="step-number">5</div>
                <OrderStepTitle>Дизайн і презентація</OrderStepTitle>
                <OrderStepDescription>
                  Показуємо рішення, обговорюємо і коригуємо.
                </OrderStepDescription>
              </StepContent>

              <StepCardContainer>
                <StepCard>
                  <StepIconContainer>
                    <FaPaintBrush />
                  </StepIconContainer>
                </StepCard>
              </StepCardContainer>
            </StepItem>

            <StepItem
              step={6}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <StepContent className="step-content">
                <div className="step-number">6</div>
                <OrderStepTitle>Передача файлів і гайдлайну</OrderStepTitle>
                <OrderStepDescription>
                  Фіналізуємо всі матеріали й передаємо вам зручним способом.
                </OrderStepDescription>
              </StepContent>

              <StepCardContainer>
                <StepCard>
                  <StepIconContainer>
                    <FaFolderOpen />
                  </StepIconContainer>
                </StepCard>
              </StepCardContainer>
            </StepItem>
          </StepsContainer>

          <OrderCtaContainer>
            <OrderCta
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Замовити фірмовий стиль <FaArrowRight />
            </OrderCta>
          </OrderCtaContainer>
        </OrderProcessContainer>
      </OrderProcessSection>

      {/* FAQ Секция */}
      <FaqSection>
        <FaqWaveTop />
        <FaqGlowCircle className="circle-1" />
        <FaqGlowCircle className="circle-2" />

        <FaqContainer>
          <FaqTitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </FaqTitle>

          <FaqList
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <FaqItemContent
                  layout
                  initial={{ borderRadius: 16 }}
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
                    data-open={expandedFaqs.includes(index)}
                    whileHover={{ color: 'var(--accent-color)' }}
                  >
                    <h3>{faq.question}</h3>
                    <FaPlus />
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
              </FaqItem>
            ))}
          </FaqList>

          <FaqCta
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FaqCtaText>
              Маєте додаткові запитання щодо фірмового стилю?
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Зв'язатися з нами <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>

      {/* Дополнительные секции будут добавлены здесь */}
      
      {/* Modal Window */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default Branding;
