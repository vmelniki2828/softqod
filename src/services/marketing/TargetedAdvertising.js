import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaBullseye, FaFacebook, FaInstagram, FaTiktok, FaLinkedin, FaUsers, FaRedo, FaUserFriends, FaEye, FaMousePointer, FaCheckCircle, FaChartLine, FaSearch, FaPlus } from 'react-icons/fa';

const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const floatUpDown = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const HeroWrapper = styled.section`
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  margin-top: 100px;
`;

const GlowingCircle = styled.div`
  position: absolute;
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), ${props => props.opacity || '0.3'}) 0%,
    transparent 70%
  );
  filter: blur(60px);
  z-index: 0;
  animation: ${breatheAnimation} ${props => props.duration || '10s'} infinite
    ease-in-out;
`;

const TiltedLine = styled.div`
  position: absolute;
  width: ${props => props.width || '100px'};
  height: 1px;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.5),
    transparent
  );
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: 0;
`;

const Dot = styled.div`
  width: 2px;
  height: 2px;
  background-color: rgba(
    var(--accent-color-rgb),
    ${props => props.opacity || '0.5'}
  );
  border-radius: 50%;
`;

const DotGrid = styled.div`
  position: absolute;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  transform: rotate(${props => props.rotate || '0deg'});
  opacity: 0.7;
  z-index: 0;
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const HeroSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroLeft = styled.div`
  @media (max-width: 1024px) {
    text-align: center;
    order: 1;
  }
`;

const HeroRight = styled.div`
  position: relative;

  @media (max-width: 1024px) {
    order: 0;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AnimatedTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const HighlightedSpan = styled.span`
  position: relative;
  color: var(--accent-color);
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(var(--accent-color-rgb), 0.15);
    z-index: -1;
    border-radius: 4px;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 560px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 7px 20px rgba(var(--accent-color-rgb), 0.3);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    transform: skewX(-25deg);
    transition: all 0.75s ease;
  }

  &:hover::before {
    animation: ${shimmer} 1s ease-out;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid rgba(var(--accent-color-rgb), 0.3);
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.05);
    border-color: var(--accent-color);
    transform: translateY(-2px);
  }
`;

const KeyPoints = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2.5rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  max-width: 260px;
`;

const KeyPointIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const KeyPointText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const TargetingVisualization = styled.div`
  position: relative;
  width: 100%;
  height: 450px;
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const TargetingCardContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  transform-style: preserve-3d;
  animation: ${floatUpDown} 6s ease-in-out infinite;
`;

const HeroTargetingCard = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15),
      0 0 15px rgba(var(--accent-color-rgb), 0.3);
    z-index: 10;
  }

  &.facebook {
    top: 5%;
    left: 5%;
    background: linear-gradient(45deg, #1877f2 0%, #4267b2 100%);
  }

  &.instagram {
    top: 0%;
    right: 10%;
    background: linear-gradient(45deg, #e4405f 0%, #ff6b6b 100%);
  }

  &.tiktok {
    bottom: 15%;
    left: 0%;
    background: linear-gradient(45deg, #000000 0%, #ff0050 100%);
  }

  &.linkedin {
    top: 35%;
    right: 0%;
    background: linear-gradient(45deg, #0077b5 0%, #00a0dc 100%);
  }

  &.google {
    bottom: 5%;
    right: 15%;
    background: linear-gradient(45deg, #4285f4 0%, #34a853 100%);
  }
`;

const HeroCardIcon = styled.div`
  font-size: 2.5rem;
  color: white;
`;

const HeroCardName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

const TargetingBadge = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.4);
`;

const TargetingNumber = styled.div`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
`;

const TargetingText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0.5rem;
`;

const FloatingIcons = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: rgba(var(--accent-color-rgb), 0.6);
  font-size: 1.2rem;
  animation: ${floatUpDown} ${props => props.duration || '5s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};

  &.targeting {
    top: 10%;
    left: 30%;
  }

  &.conversion {
    bottom: 20%;
    right: 30%;
  }

  &.analytics {
    top: 60%;
    left: 10%;
  }

  &.optimization {
    top: 30%;
    right: 5%;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 30px;
  padding: 3rem;
  max-width: 500px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  cursor: default;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalClose = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
  transition: color 0.3s ease;

  &:hover {
    color: #333;
  }
`;

const ModalIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 3rem;
  color: white;

  &.facebook {
    background: linear-gradient(45deg, #1877f2 0%, #4267b2 100%);
  }

  &.instagram {
    background: linear-gradient(45deg, #e4405f 0%, #ff6b6b 100%);
  }

  &.tiktok {
    background: linear-gradient(45deg, #000000 0%, #ff0050 100%);
  }

  &.linkedin {
    background: linear-gradient(45deg, #0077b5 0%, #00a0dc 100%);
  }

  &.google {
    background: linear-gradient(45deg, #4285f4 0%, #34a853 100%);
  }
`;

const ModalTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ModalDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
`;

const ModalFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ModalFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #555;

  &::before {
    content: '✓';
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: var(--accent-color);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
  }
`;

const WhatIsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 1;
  }
`;

const WhatIsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const WhatIsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const WhatIsContent = styled.div`
  position: relative;
`;

const WhatIsTitle = styled(motion.h2)`
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 2.5rem;
  color: var(--text-primary);
  position: relative;
  line-height: 1.1;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 6px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 3px;
  }
`;

const WhatIsDescription = styled(motion.div)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);

  p {
    margin-bottom: 2rem;
    position: relative;
    padding-left: 2rem;
    transition: all 0.3s ease;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.7rem;
      width: 4px;
      height: 4px;
      background: var(--accent-color);
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    &:hover {
      color: var(--text-primary);
      transform: translateX(10px);

      &::before {
        width: 12px;
        height: 4px;
        border-radius: 2px;
        background: linear-gradient(90deg, var(--accent-color), transparent);
      }
    }
  }
`;

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(var(--accent-color-rgb), 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.3);

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }
`;

const WhatIsStatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const WhatIsStatLabel = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const WhatIsVisual = styled(motion.div)`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    height: 500px;
  }
`;

const TargetingGraphic = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 500px;
`;

const CentralHub = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  text-align: center;
  box-shadow: 0 0 40px rgba(var(--accent-color-rgb), 0.4);
  z-index: 5;
`;

const HubTitle = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const HubSubtitle = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
`;

const OrbitRing = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(var(--accent-color-rgb), ${props => props.opacity || 0.2});
  border-radius: 50%;
  border-style: dashed;
`;

const PlatformNode = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
  }

  &.facebook { color: #1877f2; }
  &.instagram { color: #e4405f; }
  &.tiktok { color: #000; }
  &.linkedin { color: #0077b5; }
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  color: rgba(var(--accent-color-rgb), 0.4);
  font-size: 1.5rem;
  z-index: 2;
`;

const TargetedHero = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const socialMediaData = {
    facebook: {
      name: 'Facebook',
      icon: <FaFacebook />,
      description: 'Найбільша соціальна мережа з потужними інструментами таргетингу та широкими можливостями для реклами.',
      features: [
        'Детальний демографічний таргетинг',
        'Ретаргетинг на основі дій користувачів',
        'Look-alike аудиторії',
        'Різноманітні формати реклами',
        'Інтеграція з Instagram'
      ]
    },
    instagram: {
      name: 'Instagram',
      icon: <FaInstagram />,
      description: 'Візуальна платформа, ідеальна для брендів, що працюють з B2C аудиторією та молодіжним сегментом.',
      features: [
        'Високий рівень залученості',
        'Stories та Reels реклама',
        'Шопінг-функції',
        'Інфлюенсер-маркетинг',
        'Візуальний контент'
      ]
    },
    tiktok: {
      name: 'TikTok',
      icon: <FaTiktok />,
      description: 'Найшвидше зростаюча платформа з унікальними можливостями для креативної реклами та охоплення Gen Z.',
      features: [
        'Алгоритмічне просування',
        'Вірусний потенціал',
        'Молода аудиторія',
        'Креативні формати',
        'Високий CTR'
      ]
    },
    linkedin: {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      description: 'Професійна мережа, найкраща для B2B маркетингу та досягнення ділової аудиторії.',
      features: [
        'B2B таргетинг',
        'Професійні дані',
        'Lead Generation Forms',
        'Sponsored Content',
        'Message Ads'
      ]
    },
    google: {
      name: 'Google Ads',
      icon: <FaSearch />,
      description: 'Найпотужніша рекламна платформа з широкими можливостями таргетингу та охоплення.',
      features: [
        'Пошукова реклама',
        'Медійна мережа',
        'YouTube реклама',
        'Ремаркетинг',
        'Смарт-кампанії'
      ]
    }
  };

  const openModal = (platform) => {
    setSelectedCard(platform);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <HeroWrapper>
      {/* Background Effects */}
      <GlowingCircle size="400px" top="10%" left="-10%" opacity="0.3" duration="8s" />
      <GlowingCircle size="300px" bottom="15%" right="-5%" opacity="0.2" duration="12s" />
      
      <TiltedLine width="150px" top="20%" right="10%" rotate="45deg" />
      <TiltedLine width="100px" bottom="30%" left="5%" rotate="-30deg" />
      
      <DotGrid top="15%" right="15%" rotate="15deg">
        {[...Array(12)].map((_, i) => (
          <Dot key={i} opacity={Math.random() * 0.5 + 0.3} />
        ))}
      </DotGrid>

      <HeroInner>
        <HeroSplit>
          <HeroLeft>
            <AnimatedTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Таргетована реклама що{' '}
              <HighlightedSpan>конвертує</HighlightedSpan>
            </AnimatedTitle>

            <HeroDescription
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Створюємо рекламні кампанії, які точно потрапляють у вашу цільову аудиторію. 
              Використовуємо передові алгоритми та дані для максимізації ROI та збільшення конверсій.
            </HeroDescription>

            <ButtonGroup
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Запустити рекламу
                <FaArrowRight />
              </PrimaryButton>
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Консультація
                <FaMousePointer />
              </SecondaryButton>
            </ButtonGroup>

            <KeyPoints>
              <KeyPoint>
                <KeyPointIcon>
                  <FaBullseye />
                </KeyPointIcon>
                <KeyPointText>Точне попадання в аудиторію</KeyPointText>
              </KeyPoint>
              <KeyPoint>
                <KeyPointIcon>
                  <FaChartLine />
                </KeyPointIcon>
                <KeyPointText>Підвищення конверсій до 350%</KeyPointText>
              </KeyPoint>
              <KeyPoint>
                <KeyPointIcon>
                  <FaCheckCircle />
                </KeyPointIcon>
                <KeyPointText>Гарантований результат</KeyPointText>
              </KeyPoint>
            </KeyPoints>
          </HeroLeft>

          <HeroRight>
            <TargetingVisualization>
              <TargetingCardContainer>
                {/* Central ROI Badge */}
                <TargetingBadge
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <TargetingNumber>350%</TargetingNumber>
                  <TargetingText>ROI</TargetingText>
                </TargetingBadge>

                {/* Social Media Cards */}
                <HeroTargetingCard
                  className="facebook"
                  onClick={() => openModal('facebook')}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  whileHover={{ scale: 1.1, cursor: 'pointer' }}
                >
                  <HeroCardIcon>
                    <FaFacebook />
                  </HeroCardIcon>
                  <HeroCardName>Facebook</HeroCardName>
                </HeroTargetingCard>

                <HeroTargetingCard
                  className="instagram"
                  onClick={() => openModal('instagram')}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.1, cursor: 'pointer' }}
                >
                  <HeroCardIcon>
                    <FaInstagram />
                  </HeroCardIcon>
                  <HeroCardName>Instagram</HeroCardName>
                </HeroTargetingCard>

                <HeroTargetingCard
                  className="tiktok"
                  onClick={() => openModal('tiktok')}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.1, cursor: 'pointer' }}
                >
                  <HeroCardIcon>
                    <FaTiktok />
                  </HeroCardIcon>
                  <HeroCardName>TikTok</HeroCardName>
                </HeroTargetingCard>

                <HeroTargetingCard
                  className="linkedin"
                  onClick={() => openModal('linkedin')}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  whileHover={{ scale: 1.1, cursor: 'pointer' }}
                >
                  <HeroCardIcon>
                    <FaLinkedin />
                  </HeroCardIcon>
                  <HeroCardName>LinkedIn</HeroCardName>
                </HeroTargetingCard>

                <HeroTargetingCard
                  className="google"
                  onClick={() => openModal('google')}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  whileHover={{ scale: 1.1, cursor: 'pointer' }}
                >
                  <HeroCardIcon>
                    <FaSearch />
                  </HeroCardIcon>
                  <HeroCardName>Google</HeroCardName>
                </HeroTargetingCard>

                {/* Floating Icons */}
                <FloatingIcons>
                  <FloatingIcon className="targeting" duration="5s" delay="0s">
                    <FaBullseye />
                  </FloatingIcon>
                  <FloatingIcon className="conversion" duration="6s" delay="2s">
                    <FaChartLine />
                  </FloatingIcon>
                  <FloatingIcon className="analytics" duration="4s" delay="1s">
                    <FaEye />
                  </FloatingIcon>
                  <FloatingIcon className="optimization" duration="7s" delay="3s">
                    <FaUsers />
                  </FloatingIcon>
                </FloatingIcons>
              </TargetingCardContainer>
            </TargetingVisualization>
          </HeroRight>
        </HeroSplit>
      </HeroInner>

      {/* Modal Window */}
      {selectedCard && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <ModalContent
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalClose onClick={closeModal}>×</ModalClose>
            <ModalIcon className={selectedCard}>
              {socialMediaData[selectedCard].icon}
            </ModalIcon>
            <ModalTitle>{socialMediaData[selectedCard].name}</ModalTitle>
            <ModalDescription>
              {socialMediaData[selectedCard].description}
            </ModalDescription>
            <ModalFeatures>
              {socialMediaData[selectedCard].features.map((feature, index) => (
                <ModalFeature key={index}>{feature}</ModalFeature>
              ))}
            </ModalFeatures>
          </ModalContent>
        </ModalOverlay>
      )}
    </HeroWrapper>
  );
};

const WhatIsTargeted = () => {
  return (
    <WhatIsSection>
      <WhatIsContainer>
        <WhatIsGrid>
          <WhatIsContent>
            <WhatIsTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Що таке таргетована реклама
            </WhatIsTitle>
            <WhatIsDescription
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p>
                Таргетована реклама — це формат онлайн-реклами, який дозволяє показувати оголошення лише певній аудиторії, визначеній за конкретними параметрами: вік, стать, геолокація, інтереси, поведінка, статус у воронці продажів тощо.
              </p>
              <p>
                На відміну від класичної реклами, де охоплюється широкий загал, таргетинг дозволяє сконцентрувати бюджет на тих, хто з великою ймовірністю зацікавлений у товарі чи послузі.
              </p>
              <p>
                Таргетинг найчастіше використовується в соцмережах (Facebook, Instagram, TikTok, LinkedIn), а також у контекстно-медійній мережі Google.
              </p>
            </WhatIsDescription>
            
            <StatsGrid
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <StatCard
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <WhatIsStatNumber>75%</WhatIsStatNumber>
                <WhatIsStatLabel>Точність попадання</WhatIsStatLabel>
              </StatCard>
              <StatCard
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <WhatIsStatNumber>50%</WhatIsStatNumber>
                <WhatIsStatLabel>Економія бюджету</WhatIsStatLabel>
              </StatCard>
              <StatCard
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <WhatIsStatNumber>3x</WhatIsStatNumber>
                <WhatIsStatLabel>Швидше результат</WhatIsStatLabel>
              </StatCard>
            </StatsGrid>
          </WhatIsContent>

          <WhatIsVisual>
            <TargetingGraphic>
              {/* Orbit rings */}
              <OrbitRing 
                size={300} 
                opacity={0.3}
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <OrbitRing 
                size={400} 
                opacity={0.2}
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />

              {/* Central hub */}
              <CentralHub
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <HubTitle>Ваш бізнес</HubTitle>
                <HubSubtitle>в центрі уваги</HubSubtitle>
              </CentralHub>

              {/* Platform nodes */}
              <PlatformNode
                className="facebook"
                style={{ top: '10%', left: '10%' }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <FaFacebook />
              </PlatformNode>

              <PlatformNode
                className="instagram"
                style={{ top: '15%', right: '10%' }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <FaInstagram />
              </PlatformNode>

              <PlatformNode
                className="tiktok"
                style={{ bottom: '20%', left: '5%' }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <FaTiktok />
              </PlatformNode>

              <PlatformNode
                className="linkedin"
                style={{ bottom: '15%', right: '8%' }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <FaLinkedin />
              </PlatformNode>

              {/* Floating elements */}
              <FloatingElement
                style={{ top: '25%', left: '50%' }}
                animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaBullseye />
              </FloatingElement>

              <FloatingElement
                style={{ bottom: '30%', right: '45%' }}
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FaChartLine />
              </FloatingElement>

              <FloatingElement
                style={{ top: '45%', left: '20%' }}
                animate={{ y: [0, -8, 0], opacity: [0.5, 0.9, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <FaEye />
              </FloatingElement>
            </TargetingGraphic>
          </WhatIsVisual>
        </WhatIsGrid>
      </WhatIsContainer>
    </WhatIsSection>
  );
};

const TargetingTypesSection = styled.section`
  padding: 8rem 0;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(var(--accent-color-rgb), 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(var(--accent-color-rgb), 0.08) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(var(--accent-color-rgb), 0.03) 0%, transparent 50%);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(90deg, transparent 1px, rgba(var(--accent-color-rgb), 0.03) 1px),
                      linear-gradient(rgba(var(--accent-color-rgb), 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    opacity: 0.5;
    z-index: 0;
  }
`;

const TargetingTypesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const TargetingTypesHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
`;

const TargetingTypesTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  letter-spacing: -0.02em;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.3));
    border-radius: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 1px;
  }
`;

const TargetingTypesSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto 3rem;
`;

const TargetingStatsRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }
`;

const QuickStat = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(var(--accent-color-rgb), 0.08);
  border-radius: 50px;
  border: 1px solid rgba(var(--accent-color-rgb), 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.3);
  }
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const StatText = styled.div`
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1rem;
`;

const TargetingTypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TypesCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.3);

    &::before {
      opacity: 1;
      transform: translateX(100%);
    }

    .card-icon {
      transform: scale(1.1) rotate(5deg);
    }

    .card-number {
      transform: scale(1.05);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(var(--accent-color-rgb), 0.05), 
      transparent
    );
    opacity: 0;
    transition: all 0.6s ease;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    opacity: 0.6;
    transition: opacity 0.3s ease;
  }
`;

const TypesCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const TypesCardIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(var(--accent-color-rgb), 0.25);
`;

const TypesCardTitleWrapper = styled.div`
  flex: 1;
`;

const TypesCardNumber = styled.div`
  font-size: 0.85rem;
  color: var(--accent-color);
  font-weight: 700;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
`;

const TypesCardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
`;

const TypesCardDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const TypesCardExample = styled.div`
  background: rgba(var(--accent-color-rgb), 0.08);
  border: 1px solid rgba(var(--accent-color-rgb), 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  border-left: 4px solid var(--accent-color);
`;

const TypesCardFeatures = styled.div`
  margin-top: 1.5rem;
  position: relative;
  z-index: 2;
`;

const FeatureTag = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.3);
    transform: translateY(-2px);
  }

  &::before {
    content: '✓';
    color: var(--accent-color);
    margin-right: 0.5rem;
    font-weight: 600;
  }
`;

const TargetingTypes = () => {
  return (
    <TargetingTypesSection>
      <TargetingTypesContainer>
        <TargetingTypesHeader>
          <TargetingTypesTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Види таргетингу
          </TargetingTypesTitle>
          
          <TargetingTypesSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Таргетинг буває різних типів, і правильне комбінування кількох з них дозволяє досягти максимальної ефективності рекламної кампанії.
          </TargetingTypesSubtitle>

          <TargetingStatsRow
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <QuickStat
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatIcon><FaBullseye /></StatIcon>
              <StatText>Точність 90%+</StatText>
            </QuickStat>
            <QuickStat
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatIcon><FaChartLine /></StatIcon>
              <StatText>ROI до 400%</StatText>
            </QuickStat>
            <QuickStat
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatIcon><FaUsers /></StatIcon>
              <StatText>5M+ аудиторій</StatText>
            </QuickStat>
          </TargetingStatsRow>
        </TargetingTypesHeader>

        <TargetingTypesGrid>
          <TypesCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <TypesCardHeader>
              <TypesCardIcon className="card-icon">
                <FaUsers />
              </TypesCardIcon>
              <TypesCardTitleWrapper>
                <TypesCardNumber className="card-number">01 / Демографічний</TypesCardNumber>
                <TypesCardTitle>Аудиторний таргетинг</TypesCardTitle>
              </TypesCardTitleWrapper>
            </TypesCardHeader>
            
            <TypesCardDescription>
              Цей тип таргетингу базується на характеристиках користувачів: вік, стать, місце проживання, мова, інтереси, поведінка, статус у стосунках, освіта, посада та інші демографічні або поведінкові фактори.
            </TypesCardDescription>
            
            <TypesCardExample>
              <strong>Приклад:</strong> Якщо ви продаєте дитячі іграшки, ми можемо налаштувати показ реклами жінкам віком 25–35 років, які мають дітей, цікавляться батьківством і регулярно купують товари для дітей.
            </TypesCardExample>

            <TypesCardFeatures>
              <FeatureTag>Демографія</FeatureTag>
              <FeatureTag>Інтереси</FeatureTag>
              <FeatureTag>Поведінка</FeatureTag>
              <FeatureTag>Геолокація</FeatureTag>
            </TypesCardFeatures>
          </TypesCard>

          <TypesCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <TypesCardHeader>
              <TypesCardIcon className="card-icon">
                <FaRedo />
              </TypesCardIcon>
              <TypesCardTitleWrapper>
                <TypesCardNumber className="card-number">02 / Повернення</TypesCardNumber>
                <TypesCardTitle>Ретаргетинг</TypesCardTitle>
              </TypesCardTitleWrapper>
            </TypesCardHeader>
            
            <TypesCardDescription>
              Це показ реклами тим користувачам, які вже взаємодіяли з вашим бізнесом: заходили на сайт, переглядали товари, додавали у кошик, але не зробили покупку. Ретаргетинг «наздоганяє» таких користувачів із релевантною пропозицією.
            </TypesCardDescription>
            
            <TypesCardExample>
              <strong>Ефективність:</strong> Особливо результативний для інтернет-магазинів, сервісів бронювання, онлайн-курсів та інших бізнесів з довшим циклом ухвалення рішень. Конверсія може зрости до 10 разів.
            </TypesCardExample>

            <TypesCardFeatures>
              <FeatureTag>Пікселі відстеження</FeatureTag>
              <FeatureTag>Динамічні оголошення</FeatureTag>
              <FeatureTag>Кросс-платформа</FeatureTag>
              <FeatureTag>Персоналізація</FeatureTag>
            </TypesCardFeatures>
          </TypesCard>

          <TypesCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <TypesCardHeader>
              <TypesCardIcon className="card-icon">
                <FaUserFriends />
              </TypesCardIcon>
              <TypesCardTitleWrapper>
                <TypesCardNumber className="card-number">03 / Схожість</TypesCardNumber>
                <TypesCardTitle>Look-alike аудиторії</TypesCardTitle>
              </TypesCardTitleWrapper>
            </TypesCardHeader>
            
            <TypesCardDescription>
              Look-alike (схожі) аудиторії створюються на основі вже існуючих клієнтів або відвідувачів сайту. Алгоритми рекламних платформ аналізують поведінку вашої цільової аудиторії й знаходять користувачів з подібними характеристиками.
            </TypesCardDescription>
            
            <TypesCardExample>
              <strong>Перевага:</strong> Цей підхід дозволяє охопити нову аудиторію без втрати якості лідів. Алгоритми машинного навчання знаходять найбільш перспективних потенційних клієнтів.
            </TypesCardExample>

            <TypesCardFeatures>
              <FeatureTag>AI алгоритми</FeatureTag>
              <FeatureTag>Машинне навчання</FeatureTag>
              <FeatureTag>Масштабування</FeatureTag>
              <FeatureTag>Автооптимізація</FeatureTag>
            </TypesCardFeatures>
          </TypesCard>
        </TargetingTypesGrid>
      </TargetingTypesContainer>
    </TargetingTypesSection>
  );
};

const LaunchStepsSection = styled.section`
  padding: 8rem 0;
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
      radial-gradient(circle at 25% 25%, rgba(var(--accent-color-rgb), 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(var(--accent-color-rgb), 0.08) 0%, transparent 50%);
    z-index: 0;
  }
`;

const LaunchStepsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const LaunchStepsHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const LaunchStepsTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const LaunchStepsSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const ProcessTimeline = styled.div`
  position: relative;
  margin-top: 4rem;
`;

const TimelineProgress = styled(motion.div)`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, 
    var(--accent-color) 0%, 
    rgba(var(--accent-color-rgb), 0.6) 50%, 
    rgba(var(--accent-color-rgb), 0.2) 100%
  );
  border-radius: 2px;
  z-index: 1;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StepCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  min-height: 380px;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.4);

    &::before {
      opacity: 1;
      transform: translateY(0);
    }

    .step-icon {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 15px 40px rgba(var(--accent-color-rgb), 0.4);
    }

    .step-number {
      transform: scale(1.1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.3));
    opacity: 0.7;
    transform: translateY(-6px);
    transition: all 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(var(--accent-color-rgb), 0.05) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background: linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(var(--accent-color-rgb), 0.3);
`;

const StepIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border: 2px solid rgba(var(--accent-color-rgb), 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 2rem;
  transition: all 0.3s ease;
`;

const StepContent = styled.div`
  position: relative;
  z-index: 2;
`;

const StepTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const StepFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const StepFeature = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.15);
    transform: translateY(-1px);
  }

  &::before {
    content: '✓';
    font-size: 0.7rem;
  }
`;

const ResultsPreview = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(var(--accent-color-rgb), 0.1) 0%, 
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 0;
  }
`;

const ResultsTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '📈';
    margin-right: 1rem;
  }
`;

const ResultsStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const ResultStat = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.3);
  }
`;

const ResultNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const ResultLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const LaunchSteps = () => {
  const steps = [
    {
      number: 1,
      icon: <FaSearch />,
      title: "Аналіз бізнесу та аудиторії",
      description: "Ми вивчаємо особливості вашого продукту, конкурентне середовище та портрет потенційного клієнта для точного формулювання стратегії.",
      features: ["Дослідження ринку", "Портрет аудиторії", "Конкурентний аналіз", "SWOT-аналіз"]
    },
    {
      number: 2,
      icon: <FaBullseye />,
      title: "Постановка цілей кампанії",
      description: "Залежно від потреб бізнесу визначаємо основну мету: продажі, трафік, генерація лідів, підписки чи впізнаваність бренду.",
      features: ["KPI метрики", "Бюджет планування", "ROI прогноз", "Таймлайн"]
    },
    {
      number: 3,
      icon: <FaEye />,
      title: "Розробка креативів",
      description: "Створюємо ефективні візуали, заголовки та тексти, які відповідають інтересам аудиторії та підштовхують до дії.",
      features: ["Дизайн макетів", "Копірайтинг", "A/B тестування", "Брендинг"]
    },
    {
      number: 4,
      icon: <FaUsers />,
      title: "Налаштування кампаній",
      description: "Проводимо точне налаштування таргетингу, формуємо аудиторії та запускаємо тестові оголошення з контролем бюджету.",
      features: ["Таргетинг Setup", "Аудиторії", "Бюджет контроль", "Тестування"]
    },
    {
      number: 5,
      icon: <FaChartLine />,
      title: "Запуск і моніторинг",
      description: "Після запуску щодня відстежуємо ефективність, аналізуємо показники та вносимо оперативні зміни для покращення результату.",
      features: ["24/7 моніторинг", "Аналітика", "Оперативні зміни", "Звітність"]
    },
    {
      number: 6,
      icon: <FaRedo />,
      title: "Оптимізація та масштабування",
      description: "Після отримання результатів оптимізуємо ставки, аудиторії, формати оголошень і масштабуємо кампанію для кращих результатів.",
      features: ["Bid оптимізація", "Масштабування", "Нові формати", "ROI максимізація"]
    }
  ];

  return (
    <LaunchStepsSection>
      <LaunchStepsContainer>
        <LaunchStepsHeader>
          <LaunchStepsTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Етапи запуску таргетованої реклами
          </LaunchStepsTitle>
          
          <LaunchStepsSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Щоб таргетована реклама приносила очікувані результати, важливо дотримуватися чіткої структури запуску кампанії. Ми працюємо за перевіреним алгоритмом, який охоплює всі ключові етапи.
          </LaunchStepsSubtitle>
        </LaunchStepsHeader>

        <ProcessTimeline>
          <TimelineProgress
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </ProcessTimeline>

        <StepsGrid>
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <StepHeader>
                <StepNumber className="step-number">
                  {step.number}
                </StepNumber>
                <StepIcon className="step-icon">
                  {step.icon}
                </StepIcon>
              </StepHeader>
              
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
                
                <StepFeatures>
                  {step.features.map((feature, idx) => (
                    <StepFeature key={idx}>{feature}</StepFeature>
                  ))}
                </StepFeatures>
              </StepContent>
            </StepCard>
          ))}
        </StepsGrid>

        <ResultsPreview
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ResultsTitle>Результати нашого підходу</ResultsTitle>
          
          <ResultsStats>
            <ResultStat
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ResultNumber>85%</ResultNumber>
              <ResultLabel>Успішних кампаній</ResultLabel>
            </ResultStat>
            <ResultStat
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ResultNumber>4.2x</ResultNumber>
              <ResultLabel>Середній ROI</ResultLabel>
            </ResultStat>
            <ResultStat
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ResultNumber>-40%</ResultNumber>
              <ResultLabel>Зниження CPA</ResultLabel>
            </ResultStat>
            <ResultStat
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ResultNumber>7 днів</ResultNumber>
              <ResultLabel>До перших результатів</ResultLabel>
            </ResultStat>
          </ResultsStats>
        </ResultsPreview>
      </LaunchStepsContainer>
    </LaunchStepsSection>
  );
};

const AnalyticsToolsSection = styled.section`
  padding: 8rem 0;
  background: var(--bg-primary);
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
      conic-gradient(from 0deg at 20% 30%, rgba(var(--accent-color-rgb), 0.1) 0deg, transparent 60deg),
      conic-gradient(from 180deg at 80% 70%, rgba(var(--accent-color-rgb), 0.08) 0deg, transparent 90deg),
      radial-gradient(circle at 50% 50%, rgba(var(--accent-color-rgb), 0.02) 0%, transparent 70%);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, transparent 24%, rgba(var(--accent-color-rgb), 0.02) 25%, rgba(var(--accent-color-rgb), 0.02) 26%, transparent 27%, transparent 74%, rgba(var(--accent-color-rgb), 0.02) 75%, rgba(var(--accent-color-rgb), 0.02) 76%, transparent 77%, transparent),
      linear-gradient(-45deg, transparent 24%, rgba(var(--accent-color-rgb), 0.02) 25%, rgba(var(--accent-color-rgb), 0.02) 26%, transparent 27%, transparent 74%, rgba(var(--accent-color-rgb), 0.02) 75%, rgba(var(--accent-color-rgb), 0.02) 76%, transparent 77%, transparent);
    background-size: 60px 60px;
    opacity: 0.3;
    z-index: 0;
  }
`;

const AnalyticsToolsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const AnalyticsHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const AnalyticsTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const AnalyticsSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 3rem;
`;

const ToolsShowcase = styled(motion.div)`
  background: rgba(var(--accent-color-rgb), 0.03);
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${shimmer} 3s ease-in-out infinite;
    z-index: 1;
  }
`;

const ShowcaseText = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '⚡';
    margin-right: 1rem;
  }
`;

const ShowcaseDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  position: relative;
  z-index: 2;
  line-height: 1.6;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ToolCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  min-height: 300px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.3);

    &::before {
      opacity: 1;
      transform: scale(1.1);
    }

    .tool-icon {
      transform: scale(1.15) rotate(5deg);
    }

    .tool-badge {
      transform: scale(1.05);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(var(--accent-color-rgb), 0.08) 0%, transparent 70%);
    border-radius: 50%;
    opacity: 0.5;
    transition: all 0.4s ease;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.3), transparent);
    opacity: 0.8;
  }
`;

const ToolHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const ToolIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${props => props.gradient || 'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
`;

const ToolInfo = styled.div`
  flex: 1;
`;

const ToolBadge = styled.div`
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: inline-block;
  transition: all 0.3s ease;
`;

const ToolName = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0;
  line-height: 1.3;
`;

const ToolContent = styled.div`
  position: relative;
  z-index: 2;
`;

const ToolDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ToolFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
`;

const ToolFeature = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(var(--accent-color-rgb), 0.08);
  color: var(--text-primary);
  border-radius: 25px;
  font-size: 0.85rem;
  font-weight: 500;
  border: 1px solid rgba(var(--accent-color-rgb), 0.15);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.12);
    transform: translateY(-1px);
  }

  &::before {
    content: '🎯';
    font-size: 0.8rem;
  }
`;

const ToolStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ToolStat = styled.div`
  text-align: center;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const AnalyticsStatNumber = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.2rem;
`;

const AnalyticsStatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const IntegrationFlow = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(var(--accent-color-rgb), 0.08) 0%, 
    rgba(var(--accent-color-rgb), 0.03) 100%
  );
  border: 1px solid rgba(var(--accent-color-rgb), 0.15);
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  margin-top: 4rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M30 30c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    z-index: 0;
  }
`;

const IntegrationTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '🔗';
    margin-right: 1rem;
  }
`;

const IntegrationDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  line-height: 1.7;
`;

const IntegrationBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const BenefitCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(var(--accent-color-rgb), 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.3);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const BenefitTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
`;

const BenefitText = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const AnalyticsTools = () => {
  const tools = [
    {
      badge: "META",
      name: "Meta Ads Manager",
      icon: <FaFacebook />,
      gradient: "linear-gradient(135deg, #1877f2 0%, #4267b2 100%)",
      description: "Центральний інструмент для запуску реклами в Facebook, Instagram і Messenger. Дає змогу налаштовувати аудиторії, цілі, формати та проводити A/B-тестування.",
      features: ["Таргетинг аудиторій", "A/B тестування", "Ретаргетинг", "Автоматизація"],
      stats: [
        { number: "3B+", label: "Користувачів" },
        { number: "95%", label: "Точність" }
      ]
    },
    {
      badge: "TIKTOK",
      name: "TikTok Ads Manager",
      icon: <FaTiktok />,
      gradient: "linear-gradient(135deg, #000000 0%, #ff0050 100%)",
      description: "Платформа для таргетингу на молодіжну аудиторію. Можливість створювати нативні відеооголошення та запускати рекламу через інфлюенсерів.",
      features: ["Відео креативи", "Інфлюенсер реклама", "Gen Z аудиторія", "Вірусний контент"],
      stats: [
        { number: "1B+", label: "Активних" },
        { number: "89%", label: "Залучення" }
      ]
    },
    {
      badge: "GOOGLE",
      name: "Google Ads & Analytics",
      icon: <FaSearch />,
      gradient: "linear-gradient(135deg, #4285f4 0%, #34a853 100%)",
      description: "Потужний набір для візуальної реклами, YouTube кампаній та детальної аналітики поведінки користувачів на сайті після переходу з реклами.",
      features: ["YouTube реклама", "Медійна мережа", "GA4 аналітика", "Конверсії"],
      stats: [
        { number: "8.5B", label: "Запитів/день" },
        { number: "92%", label: "Охоплення" }
      ]
    },
    {
      badge: "TRACKING",
      name: "Pixel & UTM системи",
      icon: <FaChartLine />,
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      description: "Трекінгові інструменти та UTM-мітки для точного відстеження взаємодії користувачів, налаштування ретаргетингу та аналізу ефективності каналів.",
      features: ["Meta Pixel", "Google Tag Manager", "UTM трекінг", "CRM інтеграція"],
      stats: [
        { number: "99.9%", label: "Точність" },
        { number: "Real-time", label: "Дані" }
      ]
    }
  ];

  return (
    <AnalyticsToolsSection>
      <AnalyticsToolsContainer>
        <AnalyticsHeader>
          <AnalyticsTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Інструменти для аналітики й налаштувань
          </AnalyticsTitle>
          
          <AnalyticsSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Для професійного запуску та управління таргетованою рекламою ми використовуємо перевірені платформи й аналітичні інструменти, які дозволяють досягати максимальної ефективності.
          </AnalyticsSubtitle>

          <ToolsShowcase
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ShowcaseText>Професійний tech-stack для максимальних результатів</ShowcaseText>
            <ShowcaseDescription>
              Завдяки цьому набору інструментів ми не тільки запускаємо рекламу, а й повноцінно керуємо результатом, орієнтуючись на цифри, а не інтуїцію.
            </ShowcaseDescription>
          </ToolsShowcase>
        </AnalyticsHeader>

        <ToolsGrid>
          {tools.map((tool, index) => (
            <ToolCard
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ToolHeader>
                <ToolIcon className="tool-icon" gradient={tool.gradient}>
                  {tool.icon}
                </ToolIcon>
                <ToolInfo>
                  <ToolBadge className="tool-badge">{tool.badge}</ToolBadge>
                  <ToolName>{tool.name}</ToolName>
                </ToolInfo>
              </ToolHeader>
              
              <ToolContent>
                <ToolDescription>{tool.description}</ToolDescription>
                
                <ToolFeatures>
                  {tool.features.map((feature, idx) => (
                    <ToolFeature key={idx}>{feature}</ToolFeature>
                  ))}
                </ToolFeatures>

                <ToolStats>
                  {tool.stats.map((stat, idx) => (
                    <ToolStat key={idx}>
                      <AnalyticsStatNumber>{stat.number}</AnalyticsStatNumber>
                      <AnalyticsStatLabel>{stat.label}</AnalyticsStatLabel>
                    </ToolStat>
                  ))}
                </ToolStats>
              </ToolContent>
            </ToolCard>
          ))}
        </ToolsGrid>

        <IntegrationFlow
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <IntegrationTitle>Повна інтеграція та синхронізація</IntegrationTitle>
          <IntegrationDescription>
            Всі інструменти працюють в єдиній екосистемі, забезпечуючи точне відстеження, оптимізацію та масштабування ваших рекламних кампаній.
          </IntegrationDescription>
          
          <IntegrationBenefits>
            <BenefitCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BenefitIcon>📊</BenefitIcon>
              <BenefitTitle>Unified Dashboard</BenefitTitle>
              <BenefitText>Всі метрики в одному місці для швидкого аналізу та прийняття рішень</BenefitText>
            </BenefitCard>
            <BenefitCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BenefitIcon>⚡</BenefitIcon>
              <BenefitTitle>Real-time оптимізація</BenefitTitle>
              <BenefitText>Автоматичне коригування кампаній на основі актуальних даних</BenefitText>
            </BenefitCard>
            <BenefitCard
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BenefitIcon>🎯</BenefitIcon>
              <BenefitTitle>Точний attribution</BenefitTitle>
              <BenefitText>Повне розуміння customer journey від кліка до конверсії</BenefitText>
            </BenefitCard>
          </IntegrationBenefits>
        </IntegrationFlow>
      </AnalyticsToolsContainer>
    </AnalyticsToolsSection>
  );
};

const MetricsSection = styled.section`
  padding: 8rem 0;
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
      radial-gradient(circle at 25% 25%, rgba(var(--accent-color-rgb), 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(var(--accent-color-rgb), 0.08) 0%, transparent 50%),
      radial-gradient(circle at 50% 0%, rgba(var(--accent-color-rgb), 0.05) 0%, transparent 40%);
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(var(--accent-color-rgb), 0.02) 2px, rgba(var(--accent-color-rgb), 0.02) 4px),
      repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(var(--accent-color-rgb), 0.02) 2px, rgba(var(--accent-color-rgb), 0.02) 4px);
    opacity: 0.5;
    z-index: 0;
  }
`;

const MetricsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const MetricsHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const MetricsTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  letter-spacing: -0.02em;

  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const MetricsSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 3rem;
`;

const MetricsHighlight = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(var(--accent-color-rgb), 0.1) 0%, 
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${shimmer} 4s ease-in-out infinite;
    z-index: 1;
  }
`;

const HighlightTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;

  &::before {
    content: '🎯';
    margin-right: 1rem;
  }
`;

const HighlightText = styled.p`
  font-size: 1.15rem;
  color: var(--text-secondary);
  line-height: 1.7;
  position: relative;
  z-index: 2;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  .metric-card:nth-child(7) {
    grid-column: 2 / 3;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    
    .metric-card:nth-child(7) {
      grid-column: 1 / -1;
      max-width: 500px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    
    .metric-card:nth-child(7) {
      grid-column: 1;
      max-width: none;
      margin: 0;
    }
  }
`;

const MetricCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  cursor: pointer;
  min-height: 320px;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.4);

    &::before {
      opacity: 1;
      transform: scale(1.1);
    }

    .metric-icon {
      transform: scale(1.2) rotate(10deg);
    }

    .metric-value {
      transform: scale(1.1);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: ${props => props.gradient || `radial-gradient(circle, rgba(var(--accent-color-rgb), 0.1) 0%, transparent 70%)`};
    border-radius: 50%;
    opacity: 0.7;
    transition: all 0.4s ease;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${props => props.topColor || `linear-gradient(90deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.3))`};
    opacity: 0.8;
  }
`;

const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const MetricIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 18px;
  background: ${props => props.bgGradient || 'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 20px;
    padding: 2px;
    background: ${props => props.bgGradient || 'linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8))'};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const MetricInfo = styled.div`
  flex: 1;
`;

const MetricName = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
`;

const MetricAbbr = styled.div`
  background: rgba(var(--accent-color-rgb), 0.15);
  color: var(--accent-color);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
`;

const MetricContent = styled.div`
  position: relative;
  z-index: 2;
`;

const MetricDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const MetricValue = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(var(--accent-color-rgb), 0.3);
  }
`;

const ValueNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const ValueLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
`;

const MetricExample = styled.div`
  background: rgba(var(--accent-color-rgb), 0.08);
  border: 1px solid rgba(var(--accent-color-rgb), 0.15);
  border-radius: 12px;
  padding: 1rem;
  font-size: 0.9rem;
  color: var(--text-primary);
  border-left: 4px solid var(--accent-color);
  margin-top: 1rem;
`;

const MetricsEfficiency = () => {
  const metrics = [
    {
      name: "Click-Through Rate",
      abbr: "CTR",
      icon: "👆",
      bgGradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
      topColor: "linear-gradient(90deg, #3b82f6, rgba(59, 130, 246, 0.3))",
      gradient: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
      description: "Показник клікабельності — відсоток людей, які побачили рекламу й клікнули на неї. Чим вищий CTR, тим цікавіше оголошення для аудиторії.",
      value: "2.5%",
      valueLabel: "Середній показник",
      example: "Приклад: 100,000 показів → 2,500 кліків = CTR 2.5%"
    },
    {
      name: "Cost Per Click",
      abbr: "CPC",
      icon: "💰",
      bgGradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      topColor: "linear-gradient(90deg, #10b981, rgba(16, 185, 129, 0.3))",
      gradient: "radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)",
      description: "Ціна за клік — скільки коштує кожен перехід за рекламним оголошенням. Дає змогу оцінити ефективність креативу й налаштувань аудиторії.",
      value: "₴25",
      valueLabel: "За клік",
      example: "Бюджет ₴5,000 ÷ 200 кліків = CPC ₴25"
    },
    {
      name: "Cost Per Mille",
      abbr: "CPM",
      icon: "👁️",
      bgGradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      topColor: "linear-gradient(90deg, #8b5cf6, rgba(139, 92, 246, 0.3))",
      gradient: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
      description: "Ціна за 1000 показів. Використовується, коли мета — впізнаваність або охоплення. Дає розуміння вартості демонстрації бренду аудиторії.",
      value: "₴150",
      valueLabel: "За 1000 показів",
      example: "₴1,500 бюджет → 10,000 показів = CPM ₴150"
    },
    {
      name: "Cost Per Action",
      abbr: "CPA",
      icon: "🎯",
      bgGradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      topColor: "linear-gradient(90deg, #f59e0b, rgba(245, 158, 11, 0.3))",
      gradient: "radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
      description: "Ціна за цільову дію — покупку, заповнення форми, дзвінок. Один з головних показників для оцінки ROI рекламної кампанії.",
      value: "₴500",
      valueLabel: "За конверсію",
      example: "₴10,000 бюджет → 20 покупок = CPA ₴500"
    },
    {
      name: "Return On Ad Spend",
      abbr: "ROAS",
      icon: "📈",
      bgGradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
      topColor: "linear-gradient(90deg, #ef4444, rgba(239, 68, 68, 0.3))",
      gradient: "radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
      description: "Рентабельність витрат на рекламу. Вказує, скільки прибутку ви отримали з кожної вкладеної гривні.",
      value: "5:1",
      valueLabel: "Прибуток:Витрати",
      example: "₴1,000 витрат → ₴5,000 доходу = ROAS 5:1"
    },
    {
      name: "Conversion Rate",
      abbr: "CR",
      icon: "⚡",
      bgGradient: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      topColor: "linear-gradient(90deg, #06b6d4, rgba(6, 182, 212, 0.3))",
      gradient: "radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)",
      description: "Відсоток користувачів, які виконали потрібну дію після кліку на рекламу. Це може бути покупка, реєстрація або звернення.",
      value: "12%",
      valueLabel: "Конверсія",
      example: "1,000 відвідувачів → 120 конверсій = CR 12%"
    },
    {
      name: "Leads & Sales",
      abbr: "RESULT",
      icon: "🏆",
      bgGradient: "linear-gradient(135deg, #84cc16 0%, #65a30d 100%)",
      topColor: "linear-gradient(90deg, #84cc16, rgba(132, 204, 22, 0.3))",
      gradient: "radial-gradient(circle, rgba(132, 204, 22, 0.1) 0%, transparent 70%)",
      description: "Фінальний і найважливіший показник — скільки цільових дій принесла кампанія. Ми завжди орієнтуємось на досягнення конкретних бізнес-результатів.",
      value: "150",
      valueLabel: "Лідів/місяць",
      example: "Результат: 150 якісних лідів за місяць кампанії"
    }
  ];

  return (
    <MetricsSection>
      <MetricsContainer>
        <MetricsHeader>
          <MetricsTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Основні метрики ефективності
          </MetricsTitle>
          
          <MetricsSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Щоб таргетована реклама приносила реальні бізнес-результати, важливо постійно аналізувати її ефективність за ключовими показниками.
          </MetricsSubtitle>

          <MetricsHighlight
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <HighlightTitle>Data-driven підхід до оптимізації</HighlightTitle>
            <HighlightText>
              Ми працюємо виключно з цифрами та фактами, постійно аналізуючи метрики для досягнення максимального ROI ваших рекламних кампаній.
            </HighlightText>
          </MetricsHighlight>
        </MetricsHeader>

        <MetricsGrid>
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.abbr}
              className="metric-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              gradient={metric.gradient}
              topColor={metric.topColor}
            >
              <MetricHeader>
                <MetricIcon className="metric-icon" bgGradient={metric.bgGradient}>
                  {metric.icon}
                </MetricIcon>
                <MetricInfo>
                  <MetricName>{metric.name}</MetricName>
                  <MetricAbbr>{metric.abbr}</MetricAbbr>
                </MetricInfo>
              </MetricHeader>
              
              <MetricContent>
                <MetricDescription>{metric.description}</MetricDescription>
                
                <MetricValue
                  className="metric-value"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ValueNumber>{metric.value}</ValueNumber>
                  <ValueLabel>{metric.valueLabel}</ValueLabel>
                </MetricValue>

                <MetricExample>{metric.example}</MetricExample>
              </MetricContent>
            </MetricCard>
          ))}
        </MetricsGrid>
      </MetricsContainer>
    </MetricsSection>
  );
};

const BusinessTypesSection = styled.section`
  background: transparent;
  position: relative;
  overflow: hidden;
`;

const BusinessTypesContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const BusinessTypesHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const BusinessTypesTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  letter-spacing: -0.02em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const BusinessTypesSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 950px;
  margin: 0 auto 3rem;
`;

// Мозаїчний макет для різних типів бізнесу
const BusinessMosaic = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(8, 120px);
  gap: 1.5rem;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(12, 100px);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    gap: 2rem;
  }
`;

// E-commerce - широка картка зверху
const EcommerceCard = styled(motion.div)`
  grid-column: 1 / 9;
  grid-row: 1 / 3;
  background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%);
  border-radius: 24px;
  padding: 2.5rem;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &::before {
    content: '🛒';
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 8rem;
    opacity: 0.1;
    transform: rotate(15deg);
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 1024px) {
    grid-column: 1 / 7;
    grid-row: 1 / 3;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    min-height: 250px;
  }
`;

const EcommerceTitle = styled.h3`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  &::before {
    content: '01. ';
    opacity: 0.7;
  }
`;

const EcommerceDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const EcommerceTags = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const EcommerceTag = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

// Education - вертикальна картка праворуч
const EducationCard = styled(motion.div)`
  grid-column: 9 / 13;
  grid-row: 1 / 4;
  background: linear-gradient(180deg, #10b981 0%, #059669 100%);
  border-radius: 24px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    content: '🎓';
    position: absolute;
    bottom: -30px;
    right: -30px;
    font-size: 6rem;
    opacity: 0.15;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(16, 185, 129, 0.3);
  }

  @media (max-width: 1024px) {
    grid-column: 1 / 4;
    grid-row: 3 / 6;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    min-height: 300px;
  }
`;

const EducationNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  opacity: 0.3;
  line-height: 1;
`;

const EducationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1rem 0;
`;

const EducationFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const EducationFeature = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  
  &::before {
    content: '→ ';
    margin-right: 0.5rem;
  }
`;

// Services - компактна картка
const ServicesCard = styled(motion.div)`
  grid-column: 1 / 5;
  grid-row: 3 / 5;
  background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;

  &::after {
    content: '💼';
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 3rem;
    opacity: 0.3;
  }

  &:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.4);
  }

  @media (max-width: 1024px) {
    grid-column: 4 / 7;
    grid-row: 3 / 5;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    min-height: 200px;
  }
`;

const ServicesTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  &::before {
    content: '03';
    display: block;
    font-size: 0.8rem;
    opacity: 0.6;
    margin-bottom: 0.2rem;
  }
`;

const ServicesDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.9;
`;

// Events - горизонтальна картка
const EventsCard = styled(motion.div)`
  grid-column: 5 / 9;
  grid-row: 3 / 5;
  background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  &::before {
    content: '🎪';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    opacity: 0.1;
    z-index: 0;
  }

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 15px 30px rgba(245, 158, 11, 0.4);
  }

  @media (max-width: 1024px) {
    grid-column: 1 / 7;
    grid-row: 5 / 7;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    min-height: 180px;
  }
`;

const EventsContent = styled.div`
  position: relative;
  z-index: 2;
`;

const EventsNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  opacity: 0.8;
  line-height: 1;
`;

const EventsTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const EventsText = styled.p`
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
`;

// B2B - квадратна картка
const B2BCard = styled(motion.div)`
  grid-column: 9 / 13;
  grid-row: 4 / 7;
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
    animation: ${shimmer} 4s ease-in-out infinite;
  }

  &:hover {
    transform: rotate(-5deg) scale(1.05);
    box-shadow: 0 25px 50px rgba(239, 68, 68, 0.4);
  }

  @media (max-width: 1024px) {
    grid-column: 1 / 4;
    grid-row: 7 / 9;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    min-height: 220px;
  }
`;

const B2BIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const B2BTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  &::before {
    content: '05 ';
    opacity: 0.6;
  }
`;

const B2BFeatures = styled.div`
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.4;
`;

// Local - широка низька картка
const LocalCard = styled(motion.div)`
  grid-column: 1 / 7;
  grid-row: 5 / 7;
  background: linear-gradient(45deg, #06b6d4 0%, #0891b2 100%);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::before {
    content: '📍';
    position: absolute;
    top: 50%;
    right: 2rem;
    transform: translateY(-50%);
    font-size: 5rem;
    opacity: 0.2;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(6, 182, 212, 0.3);
  }

  @media (max-width: 1024px) {
    grid-column: 4 / 7;
    grid-row: 7 / 9;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: auto;
    min-height: 200px;
  }
`;

const LocalContent = styled.div`
  position: relative;
  z-index: 2;
`;

const LocalNumber = styled.div`
  font-size: 1rem;
  opacity: 0.7;
  margin-bottom: 0.5rem;
  
  &::before {
    content: '06. ЛОКАЛЬНИЙ БІЗНЕС';
  }
`;

const LocalTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
`;

const LocalDescription = styled.p`
  font-size: 1rem;
  opacity: 0.9;
  line-height: 1.5;
  max-width: 300px;
`;

const BusinessTypes = () => {
  return (
    <BusinessTypesSection>
      <BusinessTypesContainer>
        <BusinessTypesHeader>
          <BusinessTypesTitle
            initial={{ opacity: 0, yComparisonLabel: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Для яких бізнесів підходить таргетована реклама
          </BusinessTypesTitle>
          
          <BusinessTypesSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Таргетована реклама — універсальний інструмент, який можна адаптувати під будь-який тип бізнесу. Кожен напрямок має свої особливості та переваги.
          </BusinessTypesSubtitle>
        </BusinessTypesHeader>

        <BusinessMosaic>
          <EcommerceCard
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <EcommerceTitle>Інтернет-магазини</EcommerceTitle>
            <EcommerceDescription>
              Реклама допомагає залучати нових покупців, повертати тих, хто не завершив покупку, і стимулювати повторні продажі через ретаргетинг та динамічну рекламу.
            </EcommerceDescription>
            <EcommerceTags>
              <EcommerceTag>Ретаргетинг</EcommerceTag>
              <EcommerceTag>Look-alike</EcommerceTag>
              <EcommerceTag>Динамічна реклама</EcommerceTag>
            </EcommerceTags>
          </EcommerceCard>

          <EducationCard
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <EducationNumber>02</EducationNumber>
            <EducationTitle>Освітні проєкти</EducationTitle>
            <EducationFeatures>
              <EducationFeature>Фільтрація за інтересами</EducationFeature>
              <EducationFeature>Професійний таргетинг</EducationFeature>
              <EducationFeature>Lead Generation</EducationFeature>
              <EducationFeature>Вебінар-воронки</EducationFeature>
            </EducationFeatures>
          </EducationCard>

          <ServicesCard
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServicesTitle>Сфера послуг</ServicesTitle>
            <ServicesDescription>
              Таргетинг дозволяє "ловити" потенційного клієнта у потрібний момент — коли він шукає майстра, лікаря або консультанта.
            </ServicesDescription>
          </ServicesCard>

          <EventsCard
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <EventsContent>
              <EventsNumber>04</EventsNumber>
              <EventsTitle>Івенти та заходи</EventsTitle>
              <EventsText>
                Продаж квитків на концерти, конференції, фестивалі через локальний та інтерес-орієнтований таргетинг.
              </EventsText>
            </EventsContent>
          </EventsCard>

          <B2BCard
            initial={{ opacity: 0, rotate: 10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <B2BIcon>🏢</B2BIcon>
            <B2BTitle>B2B-компанії</B2BTitle>
            <B2BFeatures>
              LinkedIn таргетинг • Decision makers • Account-based маркетинг
            </B2BFeatures>
          </B2BCard>

          <LocalCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <LocalContent>
              <LocalNumber />
              <LocalTitle>Поруч з вами</LocalTitle>
              <LocalDescription>
                Кав'ярні, салони краси, клініки, спортзали — геотаргетинг для тих, хто поруч.
              </LocalDescription>
            </LocalContent>
          </LocalCard>
        </BusinessMosaic>

      </BusinessTypesContainer>
    </BusinessTypesSection>
  );
};

// Блок сильних сторін - інфографічний стиль
const StrengthsSection = styled.section`
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const StrengthsContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const StrengthsIntro = styled.div`
  text-align: center;
  margin-bottom: 6rem;
  position: relative;
`;

const StrengthsTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  letter-spacing: -0.02em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const StrengthsSubtitle = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 950px;
  margin: 0 auto 3rem;
`;

// Інфографічний timeline
const StrengthsTimeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: linear-gradient(to bottom, 
      var(--accent-color) 0%, 
      rgba(var(--accent-color-rgb), 0.5) 50%, 
      var(--accent-color) 100%
    );
    border-radius: 2px;
    z-index: 1;

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 8rem;
  position: relative;

  &:nth-child(even) {
    flex-direction: row-reverse;
    
    .timeline-content {
      text-align: right;
      padding-right: 4rem;
      padding-left: 0;
    }

    .timeline-connector {
      right: auto;
      left: 50%;
      transform: translateX(-50%) scaleX(-1);
    }

    @media (max-width: 768px) {
      flex-direction: row;
      
      .timeline-content {
        text-align: left;
        padding-left: 4rem;
        padding-right: 0;
      }

      .timeline-connector {
        left: 30px;
        right: auto;
        transform: none;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-bottom: 6rem;
  }
`;

const TimelineConnector = styled.div`
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translateY(-50%);
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-color), transparent);
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    right: -5px;
    top: -3px;
    width: 0;
    height: 0;
    border-left: 8px solid var(--accent-color);
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }

  @media (max-width: 768px) {
    left: 30px;
    right: auto;
    width: 80px;
  }
`;

const TimelineNumber = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 900;
  color: white;
  z-index: 3;
  box-shadow: 0 15px 35px rgba(var(--accent-color-rgb), 0.4);
  border: 4px solid var(--bg-primary);

  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, var(--accent-color), transparent, var(--accent-color));
    z-index: -1;
    animation: ${floatUpDown} 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    left: 30px;
    transform: translate(-50%, -50%);
  }
`;

const TimelineContent = styled.div`
  flex: 1;
  padding-left: 4rem;
  max-width: 500px;

  @media (max-width: 768px) {
    padding-left: 6rem;
    max-width: none;
  }
`;

const TimelineIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 1rem;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 20px;
  border: 2px solid rgba(var(--accent-color-rgb), 0.2);
  transition: all 0.3s ease;

  ${TimelineItem}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: rgba(var(--accent-color-rgb), 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.4);
  }
`;

const TimelineTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const TimelineDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
`;

const TimelineFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TimelineFeature = styled.span`
  background: rgba(var(--accent-color-rgb), 0.08);
  color: var(--accent-color);
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.15);
    transform: translateY(-2px);
  }

  &::before {
    content: '✓ ';
    margin-right: 0.3rem;
  }
`;

const OurStrengths = () => {
  const strengths = [
    {
      icon: "🔍",
      title: "Глибока аналітика перед запуском",
      description: "Ми завжди починаємо з аналізу ринку, конкурентів і цільової аудиторії. Це дозволяє створювати дійсно релевантні оголошення, а не стріляти наосліп.",
      features: ["Аналіз конкурентів", "Дослідження аудиторії", "Ринкова аналітика", "Персони покупців"]
    },
    {
      icon: "🎯",
      title: "Індивідуальна стратегія для кожного клієнта",
      description: "Ніяких шаблонів. Ми створюємо рекламну кампанію, яка враховує особливості саме вашого продукту, бізнес-моделі та цілей.",
      features: ["Персональний підхід", "Унікальна стратегія", "Врахування специфіки", "Гнучкий план"]
    },
    {
      icon: "🎨",
      title: "Сильні креативи",
      description: "У команді — копірайтери та дизайнери, які знають, як привернути увагу, викликати інтерес і стимулювати дію.",
      features: ["Професійний дизайн", "Цепкі тексти", "A/B тестування", "Оптимізація CTR"]
    },
    {
      icon: "⚡",
      title: "Постійний контроль та оптимізація",
      description: "Ми щодня моніторимо кампанії, аналізуємо ефективність, змінюємо аудиторії, бюджети й креативи.",
      features: ["Щоденний моніторинг", "Швидка реакція", "Оптимізація бюджету", "Масштабування"]
    },
    {
      icon: "📊",
      title: "Прозорість і звітність",
      description: "Регулярна звітність із чіткими метриками — ви завжди бачите, на що витрачається бюджет та які результати отримує ваш бізнес.",
      features: ["Детальні звіти", "Прозорі метрики", "Регулярні зустрічі", "Доступ до кабінетів"]
    },
    {
      icon: "🚀",
      title: "Орієнтація на результат",
      description: "Наша мета — не кількість кліків, а ваш прибуток. Ми завжди дивимось на бізнес очима власника та досягаємо ROI.",
      features: ["Фокус на прибуток", "Бізнес-мислення", "Вимірювані KPI", "Гарантія результату"]
    }
  ];

  return (
    <StrengthsSection>
      <StrengthsContainer>
        <StrengthsIntro>
          <StrengthsTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Наші сильні сторони
          </StrengthsTitle>
          
          <StrengthsSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ми не просто запускаємо таргетовану рекламу — ми беремо на себе повну відповідальність за результат. Завдяки досвіду, системному підходу та глибокому розумінню бізнес-процесів, ми допомагаємо клієнтам досягати конкретних цілей.
          </StrengthsSubtitle>
        </StrengthsIntro>

        <StrengthsTimeline>
          {strengths.map((strength, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TimelineNumber>{index + 1}</TimelineNumber>
              <TimelineConnector className="timeline-connector" />
              
              <TimelineContent className="timeline-content">
                <TimelineIcon>{strength.icon}</TimelineIcon>
                <TimelineTitle>{strength.title}</TimelineTitle>
                <TimelineDescription>{strength.description}</TimelineDescription>
                <TimelineFeatures>
                  {strength.features.map((feature, idx) => (
                    <TimelineFeature key={idx}>{feature}</TimelineFeature>
                  ))}
                </TimelineFeatures>
              </TimelineContent>
            </TimelineItem>
          ))}
        </StrengthsTimeline>

      </StrengthsContainer>
    </StrengthsSection>
  );
};

// Блок результатів - унікальний дизайн з числами та анімаціями
const ResultsAchievedSection = styled.section`
  background: linear-gradient(180deg, 
    var(--bg-primary) 0%,
    rgba(var(--accent-color-rgb), 0.02) 50%,
    var(--bg-primary) 100%
  );
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${props => props.theme?.accentColor?.replace('#', '') || '6366f1'}' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.4;
  }
`;

const ResultsContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ResultsHeader = styled.div`
  text-align: center;
  margin-bottom: 8rem;
  position: relative;
`;

const ResultsMainTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--text-primary);
  position: relative;
  letter-spacing: -0.02em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const ResultsIntro = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 950px;
  margin: 0 auto 3rem;
`;

// Головні числа у вигляді дашборду
const ResultsDashboard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 8rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const DashboardCard = styled(motion.div)`
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 32px;
  padding: 3rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent, 
      rgba(var(--accent-color-rgb), 0.1), 
      transparent
    );
    transition: left 0.8s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(var(--accent-color-rgb), 0.3);
    box-shadow: 0 30px 60px rgba(var(--accent-color-rgb), 0.2);
  }
`;

const DashboardNumber = styled.div`
  font-size: 4rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.7));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  line-height: 1;
`;

const DashboardLabel = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const DashboardDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

// Детальні результати у вигляді таблиці показників
const ResultsBreakdown = styled.div`
  background: linear-gradient(135deg, 
    rgba(var(--accent-color-rgb), 0.05) 0%,
    rgba(var(--accent-color-rgb), 0.02) 100%
  );
  border-radius: 40px;
  padding: 5rem;
  margin-bottom: 6rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(var(--accent-color-rgb), 0.03) 0%, transparent 70%);
    animation: ${shimmer} 8s ease-in-out infinite;
  }
`;

const BreakdownTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
  z-index: 2;
  
  &::before {
    content: '📊';
    display: block;
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const ResultsMetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ResultsMetricItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const ResultsMetricIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: linear-gradient(135deg, var(--accent-color), rgba(var(--accent-color-rgb), 0.8));
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
  flex-shrink: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 23px;
    background: linear-gradient(45deg, var(--accent-color), transparent, var(--accent-color));
    z-index: -1;
    animation: ${floatUpDown} 3s ease-in-out infinite;
  }
`;

const ResultsMetricContent = styled.div`
  flex: 1;
`;

const ResultsMetricNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  line-height: 1;
`;

const ResultsMetricTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
`;

const ResultsMetricDescription = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ResultsAchieved = () => {
  const dashboardMetrics = [
    {
      number: "2-5x",
      label: "Збільшення продажів",
      description: "Масштабування без підвищення вартості залучення"
    },
    {
      number: "30-70%",
      label: "Нижча вартість ліда",
      description: "За рахунок оптимізації та тестування"
    },
    {
      number: "400%+",
      label: "ROAS",
      description: "При правильному налаштуванні кампаній"
    }
  ];

  const detailedMetrics = [
    {
      icon: "🎯",
      number: "15%",
      title: "Конверсія з реклами",
      description: "Особливо в нішах з чіткою потребою — медицина, послуги, освітні продукти. Ми знаємо, як працювати з «гарячими» аудиторіями."
    },
    {
      icon: "🚀",
      number: "300+",
      title: "Успішних запусків",
      description: "За час нашої роботи ми запустили понад 300 рекламних кампаній у різних нішах. Наш досвід дозволяє швидко адаптуватися."
    },
    {
      icon: "💎",
      number: "80%",
      title: "Клієнтів повертаються",
      description: "Ми вибудовуємо довгострокові партнерства, оскільки працюємо прозоро й завжди націлені на результат."
    },
    {
      icon: "📈",
      number: "4.2x",
      title: "Середній ROI",
      description: "Наші клієнти отримують у 4+ рази більше доходу, ніж витрачають на рекламу завдяки продуманій воронці продажів."
    }
  ];

  return (
    <ResultsAchievedSection>
      <ResultsContainer>
        <ResultsHeader>
          <ResultsMainTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Результати, яких досягаємо
          </ResultsMainTitle>
          
          <ResultsIntro
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ми вимірюємо ефективність не лайками й охопленнями, а конкретними бізнес-показниками: кількістю заявок, продажами, вартістю ліда, рентабельністю реклами. Ось типові результати наших кампаній:
          </ResultsIntro>
        </ResultsHeader>

        <ResultsDashboard>
          {dashboardMetrics.map((metric, index) => (
            <DashboardCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <DashboardNumber>{metric.number}</DashboardNumber>
              <DashboardLabel>{metric.label}</DashboardLabel>
              <DashboardDescription>{metric.description}</DashboardDescription>
            </DashboardCard>
          ))}
        </ResultsDashboard>

        <ResultsBreakdown>
          <BreakdownTitle>Детальна аналітика результатів</BreakdownTitle>
          
          <ResultsMetricsGrid>
            {detailedMetrics.map((metric, index) => (
              <ResultsMetricItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <ResultsMetricIcon>{metric.icon}</ResultsMetricIcon>
                <ResultsMetricContent>
                  <ResultsMetricNumber>{metric.number}</ResultsMetricNumber>
                  <ResultsMetricTitle>{metric.title}</ResultsMetricTitle>
                  <ResultsMetricDescription>{metric.description}</ResultsMetricDescription>
                </ResultsMetricContent>
              </ResultsMetricItem>
            ))}
          </ResultsMetricsGrid>
        </ResultsBreakdown>
      </ResultsContainer>
    </ResultsAchievedSection>
  );
};

// FAQ Section Styles
const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
`;

const pulseFaq = keyframes`
  0% { opacity: 0.6; width: 60px; }
  50% { opacity: 1; width: 90px; }
  100% { opacity: 0.6; width: 60px; }
`;

const shimmerEffect = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

// FAQ компоненти
const FaqSection = styled.section`
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
  margin-top: 4rem;

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
`;

const FaqCtaText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
`;

const TargetedFaq = () => {
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  
  const faqData = [
    {
      question: "1. Скільки часу потрібно, щоб побачити перші результати від таргетованої реклами?",
      answer: "Перші кліки й охоплення з'являються вже в день запуску. Проте на отримання стабільних результатів у вигляді лідів чи продажів зазвичай потрібно 3–7 днів — саме стільки триває тестування аудиторій та креативів."
    },
    {
      question: "2. Чи можна обійтись без сайту — наприклад, рекламувати тільки Instagram-акаунт?",
      answer: "Так, можна запускати рекламу на акаунт у соцмережах або навіть у Direct. Особливо це актуально для малого бізнесу, б'юті-сфери, локальних послуг. Головне — мати чітке позиціонування й візуально привабливу сторінку."
    },
    {
      question: "3. Скільки потрібно інвестувати в рекламу, щоб отримати результат?",
      answer: "Рекомендований мінімальний бюджет — від 300–500 $ на місяць. Цього достатньо для тестування гіпотез і запуску першої ефективної зв'язки «аудиторія + креатив». Чим складніша ніша — тим більший бюджет може знадобитися для отримання даних і масштабування."
    },
    {
      question: "4. У чому різниця між таргетингом і просуванням через інфлюенсерів?",
      answer: "Таргетинг дозволяє точніше контролювати аудиторію, бюджет і результат. Реклама у блогерів — це переважно про впізнаваність, а не про гарантовані заявки. Часто найкращі результати дає комбінація обох інструментів."
    },
    {
      question: "5. Що буде після завершення кампанії? Реклама зупиниться?",
      answer: "Ми зберігаємо всі напрацьовані аудиторії, креативи та аналітику. Це дозволяє швидко перезапустити рекламу у майбутньому або використовувати результати для інших маркетингових каналів. Також за запитом можемо передати доступи й навчити вашу команду підтримувати кампанії самостійно."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };

  return (
    <FaqSection>
      <FaqWaveTop />

      <FaqContainer>
        <FaqGlowCircle className="circle-1" />
        <FaqGlowCircle className="circle-2" />

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
            Маєте додаткові запитання щодо таргетованої реклами?
          </FaqCtaText>
          <FaqCtaButton
            whileHover={{
              scale: 1.03,
              boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Зв'язатися з нами <FaArrowRight />
          </FaqCtaButton>
        </FaqCta>
      </FaqContainer>
    </FaqSection>
  );
};

const TargetedAdvertising = () => {
  return (
    <>
      <TargetedHero />
      <WhatIsTargeted />
      <TargetingTypes />
      <LaunchSteps />
      <AnalyticsTools />
      <MetricsEfficiency />
      <BusinessTypes />
      <OurStrengths />
      <ResultsAchieved />
      <TargetedFaq />
    </>
  );
};

export default TargetedAdvertising;
