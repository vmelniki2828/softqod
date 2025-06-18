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
    background: 
      radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 40%);
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
  box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.2), -20px -20px 60px rgba(255, 255, 255, 0.1);
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
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const SliderSection = styled.section`
  margin: 6rem 0;
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 24px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const SliderTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
`;

const SliderIntro = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 3rem;
  color: var(--text-secondary);
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
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  opacity: 0.9;
  filter: drop-shadow(0 0 8px rgba(var(--accent-color-rgb), 0.3));
`;

const ServiceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: var(--text-secondary);
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 20px;
  margin: 3rem 0;
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
`;

const ProcessSection = styled.section`
  margin: 6rem 0;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
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
`;

const ProcessNumber = styled.div`
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 0.8rem;
  font-weight: 700;
  opacity: 0.9;
  letter-spacing: 3px;
`;

const ProcessText = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
`;

const ProcessDetails = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
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
`;

const ProcessDetailText = styled.span`
  font-size: 1rem;
  font-weight: 600;
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
`;

const AdvantagesTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
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
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
`;

const AdvantageTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
`;

const AdvantageDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
  flex: 1;
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
`;

const TargetTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 150px;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
    margin: 1rem auto 0;
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
`;

const TabContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
`;

const TabContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const HexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  position: relative;
  margin: 0 auto;
  max-width: 1200px;
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
`;

const HexTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const HexDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  flex: 1;
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

  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const features = [
    {
      icon: <FaRocket />,
      title: 'Швидкість розробки',
      description:
        'Генерація декількох варіантів банерів займає лічені хвилини.',
    },
    {
      icon: <FaCoins />,
      title: 'Економія бюджету',
      description: 'Менше витрат на ручну роботу дизайнерів і копірайтерів.',
    },
    {
      icon: <FaChartLine />,
      title: 'Оптимізація під A/B-тестування',
      description: 'ШІ може створити десятки варіацій під різні сегменти ЦА.',
    },
    {
      icon: <FaUsers />,
      title: 'Персоналізація',
      description:
        'Адаптація під мову, геолокацію, інтереси та поведінку користувача.',
    },
    {
      icon: <FaBrain />,
      title: 'Унікальність',
      description:
        'Візуали та тексти генеруються заново, з урахуванням вашого стилю та бренду.',
    },
  ];

  const services = [
    {
      icon: <FaPalette />,
      title: 'Статичні банери',
      description:
        'Підходять для Google Ads, Facebook, Instagram, мобільних застосунків та сайтів. Генеруються у різних форматах і розмірах з урахуванням вимог платформи.',
    },
    {
      icon: <FaBolt />,
      title: 'Анімовані банери (GIF та HTML5)',
      description:
        'Створюємо динамічні креативи, які привертають увагу і підвищують клікабельність.',
    },
    {
      icon: <FaShoppingCart />,
      title: 'Банери для ремаркетингу та програматик-реклами',
      description:
        'Розробка адаптивних креативів для показу аудиторії, яка вже контактувала з вашим брендом.',
    },
    {
      icon: <FaPlus />,
      title: 'Масова генерація варіантів',
      description:
        'ШІ здатен створити десятки і навіть сотні варіацій одного банера для тестування або масштабування рекламних кампаній.',
    },
    {
      icon: <FaRobot />,
      title: 'Генерація текстів і зображень',
      description:
        'Ми поєднуємо текстові моделі ШІ (наприклад, ChatGPT) з візуальними (DALL·E, Midjourney, Stable Diffusion), щоб створювати креативи повністю з нуля.',
    },
  ];

  const processSteps = [
    {
      icon: <FaUsers />,
      number: '01',
      title: 'Обговорення завдання',
      description:
        'На першому етапі ми уточнюємо цілі кампанії, тип платформи (Google, Meta, TikTok, мобільні додатки тощо), формат банера, побажання до стилістики та текстів. Якщо є брендбук — ми врахуємо кольори, логотип, шрифти.',
      details: [
        { icon: <FaChartLine />, text: 'Визначення цілей' },
        { icon: <FaUsers />, text: 'Аналіз аудиторії' },
        { icon: <FaLightbulb />, text: 'Створення концепції' },
      ],
    },
    {
      icon: <FaRobot />,
      number: '02',
      title: 'Генерація концептів',
      description:
        'Ми використовуємо інструменти генеративного ШІ для створення перших варіантів: зображення (за потреби — з ілюстраціями, персонажами або предметами); текст (з урахуванням платформи й ЦА); анімація або динамічні ефекти — якщо це потрібно. У середньому генерується 5–10 варіантів, з яких ви обираєте найкращі.',
      details: [
        { icon: <FaRobot />, text: 'Генерація зображень' },
        { icon: <FaPalette />, text: 'Варіанти дизайну' },
        { icon: <FaCheck />, text: 'Перший відбір' },
      ],
    },
    {
      icon: <FaPalette />,
      number: '03',
      title: 'Ручна доопрацювання',
      description:
        'Обрані банери ми адаптуємо вручну: коригуємо елементи дизайну, вирівнюємо, додаємо легкість і візуальний баланс. За потреби вносимо правки після вашого фідбеку.',
      details: [
        { icon: <FaDesktop />, text: 'Фінальний дизайн' },
        { icon: <FaPencilRuler />, text: 'Корекція елементів' },
        { icon: <FaCheck />, text: 'Узгодження правок' },
      ],
    },
    {
      icon: <FaMobile />,
      number: '04',
      title: 'Оптимізація під платформи',
      description:
        'Після затвердження фінального дизайну, ми створюємо банери у всіх необхідних розмірах і форматах: 300×250, 728×90, 160×600 – для дисплейних мереж; 1080×1080, 1080×1920 – для соціальних мереж; HTML5, GIF – для анімованої реклами.',
      details: [
        { icon: <FaDesktop />, text: 'Веб-формати' },
        { icon: <FaMobile />, text: 'Мобільні формати' },
        { icon: <FaBolt />, text: 'Анімовані версії' },
      ],
    },
    {
      icon: <FaRocket />,
      number: '05',
      title: 'Передача фінальних файлів',
      description:
        'Усі готові банери ви отримуєте у зручному вигляді (архів, Google Drive, посилання). Також за запитом надаємо рекомендації щодо їх розміщення або допомагаємо з завантаженням у рекламні кабінети.',
      details: [
        { icon: <FaChartLine />, text: 'Пакет файлів' },
        { icon: <FaClock />, text: 'Своєчасна доставка' },
        { icon: <FaCheck />, text: 'Підтримка розміщення' },
      ],
    },
  ];

  const bannerExamples = [
    {
      id: 1,
      type: 'ecommerce',
      title: 'Знижка -50% на літню колекцію',
      description:
        'Банер з яскравим фоном і чітким відображенням продукту. Простий і привабливий дизайн для збільшення конверсії.',
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=E-Commerce+Banner',
      tags: ['Google Ads', 'Instagram', 'Знижка'],
    },
    {
      id: 2,
      type: 'ecommerce',
      title: 'Нова колекція сумок 2023',
      description:
        'Банер для бренду аксесуарів з акцентом на новинки сезону та ексклюзивні пропозиції.',
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=New+Collection',
      tags: ['Facebook', 'Сезонна колекція', 'Fashion'],
    },
    {
      id: 3,
      type: 'mobile',
      title: 'Мобільний додаток – Знижка 30%',
      description:
        'Яскравий банер для промо-кампанії мобільного додатку з акцентом на обмежену пропозицію.',
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Mobile+App+Banner',
      tags: ['TikTok', 'Instagram Stories', 'Анімація'],
    },
    {
      id: 4,
      type: 'mobile',
      title: 'Нова гра – Доступно в AppStore',
      description:
        'Вертикальний банер для мобільної гри з яскравими елементами і чітким CTA.',
      image:
        'https://via.placeholder.com/600x600/1a1a2e/FFFFFF?text=Mobile+Game',
      tags: ['App Store', 'Google Play', 'Вертикальний формат'],
    },
    {
      id: 5,
      type: 'retargeting',
      title: 'Ви забули щось у кошику!',
      description:
        'Персоналізований банер для ретаргетингу користувачів, які не завершили покупку.',
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Retargeting+Banner',
      tags: ['Ретаргетинг', 'Персоналізація', 'Кошик'],
    },
    {
      id: 6,
      type: 'education',
      title: 'Курс з маркетингу – Старт 15 вересня',
      description:
        'Інформативний банер для освітнього проекту з фокусом на переваги курсу та дату початку.',
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Education+Course',
      tags: ['Навчання', 'Онлайн-курс', 'Маркетинг'],
    },
    {
      id: 7,
      type: 'niche',
      title: 'Ексклюзивна пропозиція для геймерів',
      description:
        'Тематичний банер для ігрового сервісу з використанням відповідної стилістики та кольорової гами.',
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Gaming+Banner',
      tags: ['Ігри', 'Пропозиція', 'B2C'],
    },
    {
      id: 8,
      type: 'niche',
      title: 'Фінансовий сервіс для бізнесу',
      description:
        'Професійний банер для B2B фінансового продукту з акцентом на безпеку та надійність.',
      image:
        'https://via.placeholder.com/600x300/1a1a2e/FFFFFF?text=Finance+Service',
      tags: ['Фінанси', 'B2B', 'Безпека'],
    },
  ];

  const filters = [
    { id: 'all', name: 'Всі типи', icon: <FaFilter /> },
    { id: 'ecommerce', name: 'E-commerce', icon: <FaShoppingCart /> },
    { id: 'mobile', name: 'Мобільна реклама', icon: <FaMobileAlt /> },
    { id: 'retargeting', name: 'Ретаргетинг', icon: <FaSyncAlt /> },
    { id: 'education', name: 'Освітні продукти', icon: <FaGraduationCap /> },
    { id: 'niche', name: 'Нішеві проекти', icon: <FaGamepad /> },
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
      title: 'Швидкість виконання',
      description:
        'Замість кількох днів на підготовку макетів — перші варіанти банерів ви можете отримати вже через кілька годин. Алгоритми працюють швидко й паралельно, що особливо корисно для термінових кампаній.',
    },
    {
      id: 2,
      number: '02',
      icon: <FaListAlt />,
      title: 'Більше варіантів на вибір',
      description:
        'ШІ дозволяє одразу згенерувати десятки унікальних креативів. Це дає змогу швидше знайти ідеальний стиль, протестувати кілька версій (A/B-тестування) та обрати найефективніший варіант.',
    },
    {
      id: 3,
      number: '03',
      icon: <FaBrain />,
      title: 'Креативність + аналітика',
      description:
        'AI бере до уваги тренди, візуальні патерни та переваги аудиторії. Завдяки цьому створюються банери, які не просто красиві, а ще й працюють на результат: високий CTR, більше конверсій, краще залучення.',
    },
    {
      id: 4,
      number: '04',
      icon: <FaMoneyBillWave />,
      title: 'Економія бюджету',
      description:
        'Ручна робота дизайнерів — дорога. Застосування генеративного ШІ суттєво знижує витрати на виробництво банерів, особливо якщо вам потрібна велика кількість форматів.',
    },
    {
      id: 5,
      number: '05',
      icon: <FaExpand />,
      title: 'Масштабування',
      description:
        'Потрібні банери 10+ форматів? Або серія з 30 варіацій під різні оффери? Для ШІ це не проблема. Ви зможете масштабувати рекламу в кілька кліків.',
    },
    {
      id: 6,
      number: '06',
      icon: <FaTv />,
      title: 'Адаптація під платформи',
      description:
        'ШІ «розуміє», які банери краще працюють у Facebook, які — в Google Ads, а які — в TikTok. Тому банери одразу оптимізуються під специфіку кожного каналу.',
    },
  ];

  const targetAudience = [
    {
      id: 1,
      icon: <FaStore />,
      title: 'Інтернет-магазинам та e-commerce',
      description:
        'Яскраві банери для акцій, розпродажів, новинок. Швидка генерація сотень банерів для різних товарних категорій.',
    },
    {
      id: 2,
      icon: <FaMobileAlt />,
      title: 'Розробникам мобільних застосунків',
      description:
        'Креативи для просування в TikTok, Meta та Google Ads. Висока конверсія завдяки підходу, заснованому на ШІ та тестуванні.',
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      title: 'Онлайн-курсам та освітнім платформам',
      description:
        'Професійні банери для реклами вебінарів, курсів та програм навчання з акцентом на ваші конкурентні переваги.',
    },
    {
      id: 4,
      icon: <FaGamepad />,
      title: 'Гемблінг-проєктам та розважальним сервісам',
      description:
        'Залучення уваги яскравими візуалами з дотриманням законодавчих обмежень та особливостей ніші.',
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: 'B2B-компаніям',
      description:
        'Презентація послуг, подій, програм або генерація лідів. Банери, що відповідають вашому корпоративному стилю.',
    },
    {
      id: 6,
      icon: <FaChessKnight />,
      title: 'Маркетологам та агентствам',
      description:
        'Масштабне та швидке виробництво банерів під проєкти клієнтів. Нові ідеї та підходи для збільшення конверсії.',
    },
  ];

  const whyChooseUs = [
    {
      id: 1,
      icon: <FaClock />,
      title: 'Швидкість',
      description:
        'Перші варіанти креативів уже за кілька годин. Цілу кампанію можемо підготувати за 1-2 дні.',
    },
    {
      id: 2,
      icon: <FaPaintBrush />,
      title: 'Якість + ШІ',
      description:
        'Поєднуємо автоматизовану генерацію з ручним доопрацюванням для досягнення ідеального результату.',
    },
    {
      id: 3,
      icon: <FaIndustry />,
      title: 'Досвід у різних нішах',
      description:
        'Від освіти й e-commerce до казино та фінансів — ми знаємо специфіку та особливості кожної галузі.',
    },
    {
      id: 4,
      icon: <FaSitemap />,
      title: 'Повна адаптація',
      description:
        'Банери для Meta, Google, TikTok, банерних мереж, мобільних додатків з урахуванням вимог кожної платформи.',
    },
    {
      id: 5,
      icon: <FaClipboardCheck />,
      title: 'Прозорий процес',
      description:
        'Без зайвої бюрократії й затримок. Ви завжди в курсі прогресу та можете вносити коригування.',
    },
    {
      id: 6,
      icon: <FaHandshake />,
      title: 'Оптимальні ціни',
      description:
        'Вигідніше, ніж повноцінна команда дизайнерів, і якісніше, ніж дешеві фріланс-рішення.',
    },
  ];

  // Данные FAQ
  const faqData = [
    {
      question: '1. Чим банери, створені за допомогою ШІ, кращі за звичайні?',
      answer:
        'Вони генеруються швидше, адаптуються до цільової аудиторії та мають вищу конверсію завдяки аналітиці й тестуванню.',
    },
    {
      question:
        '2. Чи можна зробити банери під конкретні розміри та платформи?',
      answer:
        'Так, ми генеруємо банери для будь-яких форматів: Google Ads, Facebook, Instagram, сайти тощо.',
    },
    {
      question: '3. Чи буде банер унікальним?',
      answer:
        'Так. ШІ створює оригінальний візуал і текст під кожен запит, враховуючи бренд і стиль.',
    },
    {
      question: '4. Чи потрібні технічні знання, щоб замовити банер?',
      answer: 'Ні. Ви просто надаєте коротке ТЗ, а ми беремо на себе все інше.',
    },
    {
      question: '5. Чи можна додати свій логотип або кольори бренду?',
      answer:
        'Звісно. ШІ адаптує банер до вашого брендбуку – кольори, шрифти, стиль.',
    },
    {
      question: '6. Скільки часу займає створення банеру з ШІ?',
      answer:
        'Від 1 до 24 годин, залежно від складності й кількості варіантів.',
    },
    {
      question: '7. Чи можна протестувати кілька варіантів банерів?',
      answer:
        'Так, ми пропонуємо A/B варіанти, щоб ви могли вибрати найефективніший.',
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
              Рекламні банери з <span>ШІ</span> – швидко, точно, ефективно
            </HeroTitle>
            
            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Підвищіть ефективність вашого маркетингу з рекламними банерами, 
              створеними за допомогою штучного інтелекту. Економія часу, 
              персоналізація та висока конверсія.
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
                Замовити банер <FaArrowRight />
              </PrimaryButton>
            </HeroButtons>
            
            <HeroFeatures
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FeatureItem>
                <HeroFeatureIcon><FaClock /></HeroFeatureIcon>
                <FeatureText>Швидко</FeatureText>
              </FeatureItem>
              
              <FeatureItem>
                <HeroFeatureIcon><FaCheck /></HeroFeatureIcon>
                <FeatureText>Якісно</FeatureText>
              </FeatureItem>
              
              <FeatureItem>
                <HeroFeatureIcon><FaChartLine /></HeroFeatureIcon>
                <FeatureText>Ефективно</FeatureText>
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
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <BannerContainer
              animate={{ 
                y: [0, -15, 0], 
                rotateY: [5, -5, 5],
                rotateX: [5, 2, 5]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Banner3D>
                <BannerElements>
                  <BannerHeader>
                    <BannerLogo>AI</BannerLogo>
                    <BannerTagline>Спеціальна пропозиція</BannerTagline>
                  </BannerHeader>
                  
                  <BannerContent>
                    <HeroBannerTitle>Літня знижка 50%</HeroBannerTitle>
                    <BannerText>На всі види рекламних банерів для вашого бізнесу</BannerText>
                  </BannerContent>
                  
                  <BannerFooter>
                    <BannerPrice><span>₴2000</span> ₴1000</BannerPrice>
                    <BannerCta onClick={openModal}>Замовити</BannerCta>
                  </BannerFooter>
                </BannerElements>
              </Banner3D>
              
              <FloatingObject
                style={{ top: '-10%', right: '0%' }}
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaPalette />
              </FloatingObject>
              
              <FloatingObject
                style={{ bottom: '5%', left: '5%' }}
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaRobot />
              </FloatingObject>
              
              <FloatingBar
                style={{ width: '80px', top: '20%', left: '-15%' }}
                animate={{ rotate: [0, 5, 0], x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <FloatingBar
                style={{ width: '60px', bottom: '30%', right: '-10%' }}
                animate={{ rotate: [0, -5, 0], x: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <FloatingDot
                style={{ top: '40%', left: '-5%' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <FloatingDot
                style={{ bottom: '10%', right: '20%' }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </BannerContainer>
          </HeroBanner>
        </HeroContainer>
      </HeroSection>

      <SliderTitle style={{ marginTop: '4rem', marginBottom: '2rem' }}>
        Чому варто використовувати ШІ для створення банерів
      </SliderTitle>
      <Subtitle
        style={{
          textAlign: 'center',
          maxWidth: '1000px',
          margin: '0 auto 3rem',
        }}
      >
        Сучасні інструменти на основі ШІ змінюють правила гри в дизайні реклами.
        Ось кілька причин, чому наші клієнти обирають саме цей підхід:
      </Subtitle>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
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
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
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
        </div>
      </div>

      <SliderSection>
        <SliderTitle>Що ми пропонуємо</SliderTitle>
        <SliderIntro>
          Ми спеціалізуємося на створенні рекламних банерів з використанням
          інструментів штучного інтелекту. Це дозволяє швидко генерувати якісні
          візуали, адаптовані до різних платформ і завдань. Наші послуги
          охоплюють повний спектр банерної реклами:
        </SliderIntro>

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
          Кожен банер проходить ручну перевірку та доопрацювання дизайнером для
          досягнення високої якості.
        </SliderIntro>
      </SliderSection>

      <ProcessSection>
        <ProcessTitle>Як працює процес</ProcessTitle>
        <SliderIntro style={{ marginBottom: '4rem' }}>
          Ми зробили процес створення рекламних банерів з ШІ максимально
          простим, прозорим і зручним для замовника. Уся робота займає від
          кількох годин до кількох днів — залежно від складності та обсягу.
        </SliderIntro>
        <ProcessTimeline>
          {processSteps.map((step, index) => (
            <ProcessStep key={index}>
              <ProcessIcon>{step.icon}</ProcessIcon>
              <ProcessNumber>Крок {step.number}</ProcessNumber>
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
        <ExamplesTitle>
          Приклади рекламних банерів, створених з ШІ
        </ExamplesTitle>
        <ExamplesDescription>
          Штучний інтелект відкриває нові можливості у створенні рекламних
          банерів. Завдяки сучасним генеративним моделям, ми створюємо візуали,
          які ідеально відповідають цілям бізнесу та потребам аудиторії.
          Гнучкість, масштабованість і висока якість — ключові переваги нашого
          підходу.
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
          <AdditionalInfoTitle>Додаткова інформація</AdditionalInfoTitle>
          <AdditionalInfoText>
            Ми надаємо приклади банерів у форматі PNG, JPEG, GIF або HTML5. За
            потреби — підготуємо банер-сет під Google Ads, Meta Ads або будь-яку
            DSP-платформу.
          </AdditionalInfoText>
          <AdditionalInfoText>
            Крім того, для кожного замовлення ми можемо запропонувати декілька
            варіантів дизайну — щоб ви могли обрати той, що працює найкраще. Усе
            це — без значного підвищення ціни, адже генерація відбувається
            автоматизовано.
          </AdditionalInfoText>
        </AdditionalInfo>
      </ExamplesSection>

      <AdvantagesSection>
        <AdvantagesTitle>
          Переваги використання ШІ в створенні банерів
        </AdvantagesTitle>
        <AdvantagesDescription>
          Використання штучного інтелекту в дизайні рекламних банерів — це не
          просто модний тренд, а практичне рішення, що дає конкретні переваги
          бізнесу. Нижче — ключові причини, чому все більше компаній обирають
          саме AI-дизайн:
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
        <TargetTitle>
          Для кого підходить ця послуга та чому обирають нас
        </TargetTitle>
        <TargetDescription>
          Послуга створення рекламних банерів з використанням ШІ — це ефективне
          рішення для будь-якого бізнесу, який прагне швидко та вигідно
          просуватися в інтернеті. І незалежно від ніші, ми знаємо, як дати вам
          результат.
        </TargetDescription>

        <TabContainer>
          <TabsHeader>
            <TabButton
              active={activeTab === 'forWhom'}
              onClick={() => setActiveTab('forWhom')}
            >
              Кому буде корисно
            </TabButton>
            <TabButton
              active={activeTab === 'whyUs'}
              onClick={() => setActiveTab('whyUs')}
            >
              Чому обирають нас
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

      <AdvantagesSection>
        <AdvantagesTitle>
          Переваги використання ШІ в створенні банерів
        </AdvantagesTitle>
        <AdvantagesDescription>
          Використання штучного інтелекту в дизайні рекламних банерів — це не
          просто модний тренд, а практичне рішення, що дає конкретні переваги
          бізнесу. Нижче — ключові причини, чому все більше компаній обирають
          саме AI-дизайн:
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

      {/* Добавляю новый финальный блок с призывом к действию */}
      <FinalCTASection>
        <FinalCTATitle>
          Замовляйте сучасні рекламні банери вже сьогодні
        </FinalCTATitle>
        <FinalCTAText>
          Світ цифрового маркетингу змінюється, і банери, створені за допомогою
          ШІ, — це не просто тренд, а ефективний інструмент просування. Вони
          привертають увагу, передають меседж, стимулюють кліки — і все це з
          мінімальними витратами часу та бюджету.
        </FinalCTAText>

        <ChecklistContainer>
          <ChecklistTitle>Якщо вам потрібно:</ChecklistTitle>
          <ChecklistItems>
            <ChecklistItem>привернути нових клієнтів</ChecklistItem>
            <ChecklistItem>
              запустити рекламну кампанію якомога швидше
            </ChecklistItem>
            <ChecklistItem>оновити креативи під нову пропозицію</ChecklistItem>
            <ChecklistItem>
              підготувати адаптивні банери для різних платформ
            </ChecklistItem>
          </ChecklistItems>
        </ChecklistContainer>

        <FinalCTAText>
          Замовляйте рекламні банери з використанням ШІ прямо зараз — і
          отримайте сучасний дизайн, що працює на результат.
        </FinalCTAText>

        <FinalNote>
          Зв'яжіться з нами для консультації або залиште заявку — відповімо
          протягом 1 робочого дня.
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
      
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

export default BannerAds; 

