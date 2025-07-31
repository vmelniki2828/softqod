import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaArrowRight,
  FaChartLine,
  FaBullseye,
  FaCheck,
  FaRegChartBar,
  FaRocket,
  FaUsers,
  FaHandshake,
  FaShoppingCart,
  FaKeyboard,
  FaEdit,
  FaCogs,
  FaChartBar,
  FaAd,
  FaChartPie,
  FaTags,
  FaEye,
  FaLightbulb,
  FaSearch,
  FaSearchDollar,
  FaTag,
  FaGoogle,
  FaFacebookF,
  FaComments,
  FaBullhorn,
  FaMoneyBillWave,
  FaBolt,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Animations
const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
`;

const shimmerEffect = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

// Hero Section Components
const HeroWrapper = styled.section`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
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

// Преимущества контекстной рекламы
const AdvantagesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const AdvantageItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-primary);
`;

const AdvantageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.15);
  color: var(--accent-color);
  margin-right: 1rem;
  flex-shrink: 0;
`;

// PPC platforms
const PlatformsContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 450px;
  perspective: 1000px;
`;

const PlatformCard = styled(motion.div)`
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

  &.google {
    top: 15%;
    left: 15%;
    background: linear-gradient(
      45deg,
      #4285f4 0%,
      #34a853 33%,
      #fbbc05 66%,
      #ea4335 100%
    );
  }

  &.facebook {
    top: 5%;
    right: 20%;
    background: #1877f2;
  }

  &.yandex {
    bottom: 25%;
    left: 8%;
    background: linear-gradient(45deg, #fc3f1d 0%, #ff5c38 100%);
  }

  &.remarketing {
    top: 40%;
    right: 10%;
    background: linear-gradient(45deg, #7638fa 0%, #a388f7 100%);
  }

  &.shopping {
    bottom: 10%;
    right: 25%;
    background: linear-gradient(45deg, #0ea5e9 0%, #38bdf8 100%);
  }
`;

const PlatformIcon = styled.div`
  font-size: 2.5rem;
  color: white;
`;

const PlatformName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

// Info Section - What is Contextual Advertising
const InfoSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const InfoTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const InfoContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    gap: 2.5rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    margin-top: 1rem;
  }
`;

const InfoText = styled.div`
  @media (max-width: 1024px) {
    order: 1;
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const InfoDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const InfoHighlight = styled.div`
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-left: 4px solid var(--accent-color);
  border-radius: 0 8px 8px 0;

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
    font-style: italic;
  }

  strong {
    color: var(--accent-color);
  }
`;

const InfoVisualization = styled.div`
  position: relative;
  height: 450px;

  @media (max-width: 1024px) {
    height: 400px;
    order: 0;
  }
`;

const SearchBarMockup = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 60px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 3;
`;

const SearchIcon = styled.div`
  font-size: 1.2rem;
  color: #5f6368;
  margin-right: 15px;
`;

const SearchText = styled.div`
  font-size: 1.1rem;
  color: #202124;
  font-weight: 400;
`;

const SearchResultsMockup = styled(motion.div)`
  position: absolute;
  top: 25%;
  left: 5%;
  width: 90%;
  height: 65%;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  padding: 20px;
  overflow: hidden;
  z-index: 2;
`;

const SearchAd = styled(motion.div)`
  padding: 12px 15px;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;

  &::before {
    content: 'Ad';
    position: absolute;
    top: 12px;
    right: 15px;
    font-size: 0.7rem;
    color: rgba(var(--accent-color-rgb), 0.7);
    background: rgba(var(--accent-color-rgb), 0.1);
    padding: 2px 6px;
    border-radius: 4px;
  }
`;

const AdTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 5px;
`;

const AdUrl = styled.div`
  font-size: 0.8rem;
  color: #34a853;
  margin-bottom: 5px;
`;

const AdDescription = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
`;

const SearchResult = styled(motion.div)`
  padding: 12px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 15px;
`;

const ResultTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #8ab4f8;
  margin-bottom: 5px;
`;

const ResultUrl = styled.div`
  font-size: 0.8rem;
  color: #34a853;
  margin-bottom: 5px;
`;

const ResultDescription = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
`;

const KeyPointsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const KeyPointIcon = styled.div`
  width: 44px;
  height: 44px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const KeyPointContent = styled.div``;

const KeyPointTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const KeyPointText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const ContextualAdvertising = () => {
  const platformRef = useRef(null);

  const { t } = useTranslation();
  const searchAdsAdvantages = t('contextualAdvertisingPage.searchAdsAdvantages', { returnObjects: true });
  const displayAdsAdvantages = t('contextualAdvertisingPage.displayAdsAdvantages', { returnObjects: true });
  const videoAdsTypes = t('contextualAdvertisingPage.videoAdsTypes', { returnObjects: true });
  const shoppingAdsAdvantages = t('contextualAdvertisingPage.shoppingAdsAdvantages', { returnObjects: true });
  const remarketingAdvantages = t('contextualAdvertisingPage.remarketingAdvantages', { returnObjects: true });
  const stage1Bullets = t('contextualAdvertisingPage.stage1Bullets', { returnObjects: true });
  const stage2Bullets = t('contextualAdvertisingPage.stage2Bullets', { returnObjects: true });
  const stage3Bullets = t('contextualAdvertisingPage.stage3Bullets', { returnObjects: true });
  const stage4Bullets = t('contextualAdvertisingPage.stage4Bullets', { returnObjects: true });
  const stage5Bullets = t('contextualAdvertisingPage.stage5Bullets', { returnObjects: true });
  const stage6Bullets = t('contextualAdvertisingPage.stage6Bullets', { returnObjects: true });
  const stage7Bullets = t('contextualAdvertisingPage.stage7Bullets', { returnObjects: true });
  const toolGoogleAdsFeatures = t('contextualAdvertisingPage.toolGoogleAdsFeatures', { returnObjects: true });
  const toolAnalyticsFeatures = t('contextualAdvertisingPage.toolAnalyticsFeatures', { returnObjects: true });
  const toolTagManagerFeatures = t('contextualAdvertisingPage.toolTagManagerFeatures', { returnObjects: true });
  const toolKeywordPlannerFeatures = t('contextualAdvertisingPage.toolKeywordPlannerFeatures', { returnObjects: true });
  const toolSeoToolsFeatures = t('contextualAdvertisingPage.toolSeoToolsFeatures', { returnObjects: true });
  const toolUxToolsFeatures = t('contextualAdvertisingPage.toolUxToolsFeatures', { returnObjects: true });
  const businessSmbAdvantages = t('contextualAdvertisingPage.businessSmbAdvantages', { returnObjects: true });
  const businessSmbStats = t('contextualAdvertisingPage.businessSmbStats', { returnObjects: true });
  const businessEcommerceAdvantages = t('contextualAdvertisingPage.businessEcommerceAdvantages', { returnObjects: true });
  const businessEcommerceStats = t('contextualAdvertisingPage.businessEcommerceStats', { returnObjects: true });
  const businessServicesAdvantages = t('contextualAdvertisingPage.businessServicesAdvantages', { returnObjects: true });
  const businessServicesStats = t('contextualAdvertisingPage.businessServicesStats', { returnObjects: true });
  const businessB2bAdvantages = t('contextualAdvertisingPage.businessB2bAdvantages', { returnObjects: true });
  const businessB2bStats = t('contextualAdvertisingPage.businessB2bStats', { returnObjects: true });
  const businessStartupsAdvantages = t('contextualAdvertisingPage.businessStartupsAdvantages', { returnObjects: true });
  const businessStartupsStats = t('contextualAdvertisingPage.businessStartupsStats', { returnObjects: true });
  const approachStage1Tags = t('contextualAdvertisingPage.approachStage1Tags', { returnObjects: true });
  const approachStage2Tags = t('contextualAdvertisingPage.approachStage2Tags', { returnObjects: true });
  const approachStage3Tags = t('contextualAdvertisingPage.approachStage3Tags', { returnObjects: true });
  const approachStage4Tags = t('contextualAdvertisingPage.approachStage4Tags', { returnObjects: true });

  // Add useState hook inside the component
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Advantages data
  const advantages = [
    {
      icon: <FaSearchDollar />,
      text: t('contextualAdvertisingPage.advantage1'),
    },
    {
      icon: <FaRegChartBar />,
      text: t('contextualAdvertisingPage.advantage2'),
    },
    {
      icon: <FaTag />,
      text: t('contextualAdvertisingPage.advantage3'),
    },
    {
      icon: <FaRocket />,
      text: t('contextualAdvertisingPage.advantage4'),
    },
  ];

  // Business types data for the interactive tabs
  const businessData = [
    {
      id: 'smb',
      name: t('contextualAdvertisingPage.businessSmbName'),
      icon: <FaHandshake />,
      color: '#4285F4',
      description:
      t('contextualAdvertisingPage.businessSmbDescription'),
      advantages: businessSmbAdvantages,
      stats: businessSmbStats,
    },
    {
      id: 'ecommerce',
      name: t('contextualAdvertisingPage.businessEcommerceName'),
      icon: <FaShoppingCart />,
      color: '#EA4335',
      description:
      t('contextualAdvertisingPage.businessEcommerceDescription'),      
      advantages: businessEcommerceAdvantages,
      stats: businessEcommerceStats,
    },
    {
      id: 'services',
      name: t('contextualAdvertisingPage.businessServicesName'),
      icon: <FaRegChartBar />,
      color: '#673AB7',
      description:
      t('contextualAdvertisingPage.businessServicesDescription'),      
      advantages: businessServicesAdvantages,
      stats: businessServicesStats,
    },
    {
      id: 'b2b',
      name: t('contextualAdvertisingPage.businessB2bName'),
      icon: <FaUsers />,
      color: '#009688',
      description:
      t('contextualAdvertisingPage.businessB2bDescription'),      
      advantages: businessB2bAdvantages,
      stats: businessB2bStats,
    },
    {
      id: 'startups',
      name: t('contextualAdvertisingPage.businessStartupsName'),
      icon: <FaRocket />,
      color: '#FF5722',
      description:
      t('contextualAdvertisingPage.businessStartupsDescription'),     
      advantages: businessStartupsAdvantages,
      stats: businessStartupsStats,
    },
  ];

  // FAQ data
  const faqData = [
    {
      question:
      t('contextualAdvertisingPage.faqData.question1'),  
      answer:
      t('contextualAdvertisingPage.faqData.answer1'),  
    },
    {
      question: t('contextualAdvertisingPage.faqData.question2'), 
      answer:
      t('contextualAdvertisingPage.faqData.answer2'),
    },
    {
      question: t('contextualAdvertisingPage.faqData.question3'), 
      answer:
      t('contextualAdvertisingPage.faqData.answer3'),
    },
    {
      question: t('contextualAdvertisingPage.faqData.question4'), 
      answer:
      t('contextualAdvertisingPage.faqData.answer4'),
    },
    {
      question:
      t('contextualAdvertisingPage.faqData.question5'), 
      answer:
      t('contextualAdvertisingPage.faqData.answer5'),
    },
  ];

  useEffect(() => {
    const handleMouseMove = e => {
      if (!platformRef.current) return;

      const rect = platformRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 30;
      const moveY = (y - centerY) / 30;

      platformRef.current.style.transform = `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };

    const handleMouseLeave = () => {
      if (!platformRef.current) return;
      platformRef.current.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    const container = platformRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 36; i++) {
      if (Math.random() > 0.3) {
        dots.push(<Dot key={i} opacity={Math.random() * 0.5 + 0.2} />);
      } else {
        dots.push(<div key={i} />);
      }
    }
    return dots;
  };

  // Toggle FAQ function
  const toggleFaq = index => {
    setExpandedFaqs(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <PageContainer>
      <HeroWrapper>
        <GlowingCircle
          size="400px"
          top="-100px"
          right="-100px"
          opacity="0.5"
          duration="15s"
        />
        <GlowingCircle
          size="350px"
          bottom="-50px"
          left="-50px"
          opacity="0.4"
          duration="12s"
        />

        <TiltedLine top="30%" left="5%" width="120px" rotate="45deg" />
        <TiltedLine bottom="25%" right="15%" width="80px" rotate="-30deg" />

        <DotGrid top="15%" right="10%" rotate="15deg">
          {renderDots()}
        </DotGrid>
        <DotGrid bottom="10%" left="5%" rotate="-10deg">
          {renderDots()}
        </DotGrid>

        <HeroInner>
          <HeroSplit>
            <HeroLeft>
              <AnimatedTitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                {t('contextualAdvertisingPage.heroTitle')}
              </AnimatedTitle>

              <HeroDescription
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                {t('contextualAdvertisingPage.heroDescription')}
              </HeroDescription>

              <AdvantagesList
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {advantages.map((advantage, index) => (
                  <AdvantageItem
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <AdvantageIcon>{advantage.icon}</AdvantageIcon>
                    {advantage.text}
                  </AdvantageItem>
                ))}
              </AdvantagesList>

              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <PrimaryButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openModal}
                >
                  {t('contextualAdvertisingPage.orderButton')} <FaArrowRight />
                </PrimaryButton>
              </ButtonGroup>
            </HeroLeft>

            <HeroRight>
              <PlatformsContainer ref={platformRef}>
                <PlatformCard
                  className="google"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaGoogle />
                  </PlatformIcon>
                  <PlatformName>Google Ads</PlatformName>
                </PlatformCard>

                <PlatformCard
                  className="facebook"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaFacebookF />
                  </PlatformIcon>
                  <PlatformName>Facebook Ads</PlatformName>
                </PlatformCard>

                <PlatformCard
                  className="remarketing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaUsers />
                  </PlatformIcon>
                  <PlatformName>
                    {t('contextualAdvertisingPage.iconAdvantage5')}
                  </PlatformName>
                </PlatformCard>

                <PlatformCard
                  className="shopping"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaShoppingCart />
                  </PlatformIcon>
                  <PlatformName>Shopping Ads</PlatformName>
                </PlatformCard>
              </PlatformsContainer>
            </HeroRight>
          </HeroSplit>
        </HeroInner>
      </HeroWrapper>

      <InfoSection>
        <InfoContainer>
          <InfoTitle>{t('contextualAdvertisingPage.infoTitle')}</InfoTitle>

          <InfoContentGrid>
            <InfoText>
              <InfoDescription>
                {t('contextualAdvertisingPage.infoDescription')}
              </InfoDescription>

              <InfoDescription>
                {t('contextualAdvertisingPage.infoDescription1')}
              </InfoDescription>
              <InfoHighlight>
                <p>
                {t('contextualAdvertisingPage.infoDescription2')}
                </p>
              </InfoHighlight>

              <InfoDescription>
              {t('contextualAdvertisingPage.infoDescription3')}
              </InfoDescription>

              <KeyPointsList>
                <KeyPoint>
                  <KeyPointIcon>
                    <FaSearch />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>{t('contextualAdvertisingPage.itemInfoTitle1')}</KeyPointTitle>
                    <KeyPointText>
                    {t('contextualAdvertisingPage.itemInfoDes1')}
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>

                <KeyPoint>
                  <KeyPointIcon>
                    <FaComments />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>{t('contextualAdvertisingPage.itemInfoTitle2')}</KeyPointTitle>
                    <KeyPointText>
                    {t('contextualAdvertisingPage.itemInfoDes2')}
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>

                <KeyPoint>
                  <KeyPointIcon>
                    <FaUsers />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>{t('contextualAdvertisingPage.itemInfoTitle3')}</KeyPointTitle>
                    <KeyPointText>
                    {t('contextualAdvertisingPage.itemInfoDes3')}
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>

                <KeyPoint>
                  <KeyPointIcon>
                    <FaShoppingCart />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>{t('contextualAdvertisingPage.itemInfoTitle4')}</KeyPointTitle>
                    <KeyPointText>
                      {t('contextualAdvertisingPage.itemInfoDes4')}
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>
              </KeyPointsList>
            </InfoText>

            <InfoVisualization>
              <SearchBarMockup
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SearchIcon>
                  <FaSearch />
                </SearchIcon>
                <SearchText>{t('contextualAdvertisingPage.iconSearchText')}</SearchText>
              </SearchBarMockup>

              <SearchResultsMockup
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SearchAd
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <AdTitle>{t('contextualAdvertisingPage.iconSearchTitle1')}</AdTitle>
                  <AdUrl>www.runnersstore.ua/sale</AdUrl>
                  <AdDescription>
                  {t('contextualAdvertisingPage.iconSearchDes1')}
                  </AdDescription>
                </SearchAd>

                <SearchAd
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <AdTitle>
                  {t('contextualAdvertisingPage.iconSearchTitle2')}
                  </AdTitle>
                  <AdUrl>www.sportshop.ua/running</AdUrl>
                  <AdDescription>
                  {t('contextualAdvertisingPage.iconSearchDes2')}
                  </AdDescription>
                </SearchAd>

                <SearchResult
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <ResultTitle>
                    Як вибрати кросівки для бігу: поради експертів
                  </ResultTitle>
                  <ResultUrl>www.runningblog.ua/how-to-choose</ResultUrl>
                  <ResultDescription>
                    Дізнайтеся, як правильно обрати кросівки для бігу залежно
                    від типу стопи, стилю бігу та поверхні...
                  </ResultDescription>
                </SearchResult>

                <SearchResult
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <ResultTitle>
                    ТОП-10 кросівок для бігу у 2023 році
                  </ResultTitle>
                  <ResultUrl>www.runnersclub.ua/reviews</ResultUrl>
                  <ResultDescription>
                    Рейтинг найкращих бігових кросівок за співвідношенням
                    ціна/якість. Відгуки спортсменів...
                  </ResultDescription>
                </SearchResult>
              </SearchResultsMockup>
            </InfoVisualization>
          </InfoContentGrid>
        </InfoContainer>
      </InfoSection>

      {/* Types of Contextual Advertising Section */}
      <TypesSection>
        <ImplBackgroundGradient />
        <ImplBackgroundGrid />

        <TypesContainer>
          <TypesTitle>{t('contextualAdvertisingPage.typesTitle')}</TypesTitle>

          <TypesDescription>
          {t('contextualAdvertisingPage.typesDescription')}
          </TypesDescription>

          <TypesGrid>
            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TypeIconContainer className="search">
                <FaSearch />
              </TypeIconContainer>
              <TypeName>
              {t('contextualAdvertisingPage.searchAdsTitle')} <TypeNameEn>(Search Ads)</TypeNameEn>
              </TypeName>
              <TypeDescription>
                {t('contextualAdvertisingPage.searchAdsDescription')}
              </TypeDescription>

              <TypeAdvantagesList>
                <AdvantageTitle>{t('contextualAdvertisingPage.searchAdsText')}</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {searchAdsAdvantages[0]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {searchAdsAdvantages[1]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {searchAdsAdvantages[2]}
                </TypeAdvantageItem>
              </TypeAdvantagesList>

              <TypeUseCase>
              {t('contextualAdvertisingPage.searchAdsUseCase')}
              </TypeUseCase>
            </TypeCard>

            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TypeIconContainer className="display">
                <FaRegChartBar />
              </TypeIconContainer>
              <TypeName>
              {t('contextualAdvertisingPage.displayAdsTitle')} <TypeNameEn>(Display Ads)</TypeNameEn>
              </TypeName>
              <TypeDescription>
              {t('contextualAdvertisingPage.displayAdsDescription')}
              </TypeDescription>

              <TypeAdvantagesList>
                <AdvantageTitle>{t('contextualAdvertisingPage.searchAdsText')}</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {displayAdsAdvantages[0]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {displayAdsAdvantages[1]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {displayAdsAdvantages[2]}
                </TypeAdvantageItem>
              </TypeAdvantagesList>

              <TypeUseCase>
              {t('contextualAdvertisingPage.displayAdsUseCase')}
              </TypeUseCase>
            </TypeCard>

            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TypeIconContainer className="video">
                <FaBullhorn />
              </TypeIconContainer>
              <TypeName>
              {t('contextualAdvertisingPage.videoAdsTitle')} <TypeNameEn>(YouTube Ads)</TypeNameEn>
              </TypeName>
              <TypeDescription>
              {t('contextualAdvertisingPage.videoAdsDescription')}
              </TypeDescription>

              <TypeAdvantagesList>
                <AdvantageTitle>{t('contextualAdvertisingPage.videoAdsText')}</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {videoAdsTypes[0]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {videoAdsTypes[1]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {videoAdsTypes[2]}
                </TypeAdvantageItem>
              </TypeAdvantagesList>

              <TypeUseCase>
              {t('contextualAdvertisingPage.videoAdsUseCase')}
              </TypeUseCase>
            </TypeCard>

            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TypeIconContainer className="shopping">
                <FaShoppingCart />
              </TypeIconContainer>
              <TypeName>
              {t('contextualAdvertisingPage.shoppingAdsTitle')} <TypeNameEn>(Google Shopping)</TypeNameEn>
              </TypeName>
              <TypeDescription>
              {t('contextualAdvertisingPage.shoppingAdsDescription')}
              </TypeDescription>

              <TypeAdvantagesList>
                <AdvantageTitle>{t('contextualAdvertisingPage.searchAdsText')}</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {shoppingAdsAdvantages[0]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {shoppingAdsAdvantages[1]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {shoppingAdsAdvantages[2]}
                </TypeAdvantageItem>
              </TypeAdvantagesList>

              <TypeUseCase>
              {t('contextualAdvertisingPage.shoppingAdsUseCase')}
              </TypeUseCase>
            </TypeCard>

            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TypeIconContainer className="remarketing">
                <FaUsers />
              </TypeIconContainer>
              <TypeName>{t('contextualAdvertisingPage.remarketingTitle')}</TypeName>
              <TypeDescription>
              {t('contextualAdvertisingPage.remarketingDescription')}
              </TypeDescription>

              <TypeAdvantagesList>
                <AdvantageTitle>{t('contextualAdvertisingPage.searchAdsText')}</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {remarketingAdvantages[0]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {remarketingAdvantages[1]}
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  {remarketingAdvantages[2]}
                </TypeAdvantageItem>
              </TypeAdvantagesList>

              <TypeUseCase>
              {t('contextualAdvertisingPage.remarketingUseCase')}
              </TypeUseCase>
            </TypeCard>
          </TypesGrid>
        </TypesContainer>
      </TypesSection>

      {/* Stages of Launching Contextual Advertising Section */}
      <StagesSection>
        <ImplBackgroundGradient />
        <ImplBackgroundGrid />

        <StagesContainer>
          <StagesTitle>{t('contextualAdvertisingPage.stagesTitle')}</StagesTitle>

          <StagesDescription>
          {t('contextualAdvertisingPage.stagesDescription')}
          </StagesDescription>

          <StagesTimeline>
            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StageNumber>01</StageNumber>
              <StageContent>
                <StageTitle> {t('contextualAdvertisingPage.stage1Title')}</StageTitle>
                <StageDescription>
                {t('contextualAdvertisingPage.stage1Description')}
                </StageDescription>
                <StageIconContainer>
                  <FaSearch />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage1Bullets[0]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage1Bullets[1]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage1Bullets[2]}</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StageNumber>02</StageNumber>
              <StageContent>
                <StageTitle>{t('contextualAdvertisingPage.stage2Title')}</StageTitle>
                <StageDescription>
                {t('contextualAdvertisingPage.stage2Description')}
                </StageDescription>
                <StageIconContainer>
                  <FaChartLine />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage2Bullets[0]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>
                    {stage2Bullets[1]}
                    </span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage2Bullets[2]}</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StageNumber>03</StageNumber>
              <StageContent>
                <StageTitle>{t('contextualAdvertisingPage.stage3Title')}</StageTitle>
                <StageDescription>
                {t('contextualAdvertisingPage.stage3Description')}
                </StageDescription>
                <StageIconContainer>
                  <FaKeyboard />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage3Bullets[0]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage3Bullets[1]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage3Bullets[2]}</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StageNumber>04</StageNumber>
              <StageContent>
                <StageTitle>{t('contextualAdvertisingPage.stage4Title')}</StageTitle>
                <StageDescription>
                {t('contextualAdvertisingPage.stage4Description')}
                </StageDescription>
                <StageIconContainer>
                  <FaEdit />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span><span>{stage4Bullets[0]}</span></span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span><span>{stage4Bullets[1]}</span></span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span><span>{stage4Bullets[2]}</span></span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StageNumber>05</StageNumber>
              <StageContent>
                <StageTitle>{t('contextualAdvertisingPage.stage5Title')}</StageTitle>
                <StageDescription>
                {t('contextualAdvertisingPage.stage5Description')}
                </StageDescription>
                <StageIconContainer>
                  <FaCogs />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage5Bullets[0]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage5Bullets[1]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage5Bullets[2]}</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <StageNumber>06</StageNumber>
              <StageContent>
                <StageTitle>{t('contextualAdvertisingPage.stage6Title')}</StageTitle>
                <StageDescription>
                {t('contextualAdvertisingPage.stage6Description')}
                </StageDescription>
                <StageIconContainer>
                  <FaRocket />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage6Bullets[0]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage6Bullets[1]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage6Bullets[2]}</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>

            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <StageNumber>07</StageNumber>
              <StageContent>
                <StageTitle>{t('contextualAdvertisingPage.stage7Title')}</StageTitle>
                <StageDescription>
                {t('contextualAdvertisingPage.stage7Description')}
                </StageDescription>
                <StageIconContainer>
                  <FaChartBar />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage7Bullets[0]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage7Bullets[1]}</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>{stage7Bullets[2]}</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
          </StagesTimeline>

          <StagesCallout>
            <CalloutContent>
              <CalloutTitle>
              {t('contextualAdvertisingPage.stagesCalloutTitle')}
              </CalloutTitle>
              <CalloutDescription>
              {t('contextualAdvertisingPage.stagesCalloutDescription')}
              </CalloutDescription>
              <CalloutButton onClick={openModal}>
              {t('contextualAdvertisingPage.stagesCalloutButton')}
                <FaArrowRight />
              </CalloutButton>
            </CalloutContent>
            <CalloutBackground />
          </StagesCallout>
        </StagesContainer>
      </StagesSection>

      {/* Tools for Contextual Advertising Section */}
      <ToolsSection>
        <BackgroundGradient />

        <ToolsContainer>
          <ToolsTitle>{t('contextualAdvertisingPage.toolsTitle')}</ToolsTitle>

          <ToolsDescription>
          {t('contextualAdvertisingPage.toolsDescription')}
          </ToolsDescription>

          <ToolsGrid>
            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <ToolIconContainer className="google-ads">
                <FaAd />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Google Ads</ToolName>
                <ToolDescription>
                {t('contextualAdvertisingPage.toolGoogleAdsDescription')}
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolGoogleAdsFeatures[0]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolGoogleAdsFeatures[1]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolGoogleAdsFeatures[2]}</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <ToolIconContainer className="analytics">
                <FaChartPie />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Google Analytics</ToolName>
                <ToolDescription>
                {t('contextualAdvertisingPage.toolAnalyticsDescription')}
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolAnalyticsFeatures[0]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolAnalyticsFeatures[1]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolAnalyticsFeatures[2]}</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <ToolIconContainer className="tag-manager">
                <FaTags />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Google Tag Manager</ToolName>
                <ToolDescription>
                {t('contextualAdvertisingPage.toolTagManagerDescription')}
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolTagManagerFeatures[0]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolTagManagerFeatures[1]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolTagManagerFeatures[2]}</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <ToolIconContainer className="keyword-planner">
                <FaSearch />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Keyword Planner</ToolName>
                <ToolDescription>
                {t('contextualAdvertisingPage.toolKeywordPlannerDescription')}
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolKeywordPlannerFeatures[0]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolKeywordPlannerFeatures[1]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolKeywordPlannerFeatures[2]}</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <ToolIconContainer className="seo-tools">
                <FaChartLine />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>SEMrush, Ahrefs, Serpstat</ToolName>
                <ToolDescription>
                {t('contextualAdvertisingPage.toolSeoToolsDescription')}
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolSeoToolsFeatures[0]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolSeoToolsFeatures[1]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolSeoToolsFeatures[2]}</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>

            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              }}
            >
              <ToolIconContainer className="ux-tools">
                <FaEye />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Hotjar або Clarity</ToolName>
                <ToolDescription>
                 {t('contextualAdvertisingPage.toolUxToolsDescription')}
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolUxToolsFeatures[0]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolUxToolsFeatures[1]}</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>{toolUxToolsFeatures[2]}</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>
          </ToolsGrid>

          <ToolsFooter>
            <ToolsNote>
              <NoteIcon>
                <FaLightbulb />
              </NoteIcon>
              <NoteText>
              {t('contextualAdvertisingPage.toolsNote')}
              </NoteText>
            </ToolsNote>
          </ToolsFooter>
        </ToolsContainer>
      </ToolsSection>

      {/* KPI Section */}
      <KpiSection>
        <KpiBackgroundGlow />

        <KpiContainer>
          <KpiTitle>{t('contextualAdvertisingPage.kpiTitle')}</KpiTitle>

          <KpiDescription>
            {t('contextualAdvertisingPage.kpiDescription')}
          </KpiDescription>

          <KpiGrid>
            <KpiCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              $accentColor="#4285F4"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(66, 133, 244, 0.1)">
                  <FaChartLine />
                </KpiIcon>
                <KpiMetricName>CTR</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>{t('contextualAdvertisingPage.kpiCtrSubtitle')}</KpiSubtitle>
              <KpiContent>
              {t('contextualAdvertisingPage.kpiText')}
              </KpiContent>
              <KpiExample $bgColor="rgba(66, 133, 244, 0.05)">
                <KpiExampleTitle>{t('contextualAdvertisingPage.kpiCtrSubtitle')}</KpiExampleTitle>
                <KpiExampleContent>
                {t('contextualAdvertisingPage.kpiCtrExample')}
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>

            <KpiCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              $accentColor="#34A853"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(52, 168, 83, 0.1)">
                  <FaTag />
                </KpiIcon>
                <KpiMetricName>CPC</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>{t('contextualAdvertisingPage.kpiCpcSubtitle')}</KpiSubtitle>
              <KpiContent>
              {t('contextualAdvertisingPage.kpiCpcContent')}
              </KpiContent>
              <KpiExample $bgColor="rgba(52, 168, 83, 0.05)">
                <KpiExampleTitle>{t('contextualAdvertisingPage.kpiText')}</KpiExampleTitle>
                <KpiExampleContent>
                {t('contextualAdvertisingPage.kpiCpcExample')}
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>

            <KpiCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              $accentColor="#FBBC05"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(251, 188, 5, 0.1)">
                  <FaShoppingCart />
                </KpiIcon>
                <KpiMetricName>CPA</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>
              {t('contextualAdvertisingPage.kpiCpaSubtitle')}
              </KpiSubtitle>
              <KpiContent>
              {t('contextualAdvertisingPage.kpiCpaContent')}
              </KpiContent>
              <KpiExample $bgColor="rgba(251, 188, 5, 0.05)">
                <KpiExampleTitle>{t('contextualAdvertisingPage.kpiText')}</KpiExampleTitle>
                <KpiExampleContent>
                {t('contextualAdvertisingPage.kpiCpaExample')}
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>

            <KpiCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              $accentColor="#EA4335"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(234, 67, 53, 0.1)">
                  <FaChartPie />
                </KpiIcon>
                <KpiMetricName>ROAS</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>{t('contextualAdvertisingPage.kpiRoasSubtitle')}</KpiSubtitle>
              <KpiContent>
              {t('contextualAdvertisingPage.kpiRoasContent')}
              </KpiContent>
              <KpiExample $bgColor="rgba(234, 67, 53, 0.05)">
                <KpiExampleTitle>{t('contextualAdvertisingPage.kpiText')}</KpiExampleTitle>
                <KpiExampleContent>
                {t('contextualAdvertisingPage.kpiRoasExample')}
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>

            <KpiCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              $accentColor="#9C27B0"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(156, 39, 176, 0.1)">
                  <FaBullseye />
                </KpiIcon>
                <KpiMetricName>{t('contextualAdvertisingPage.kpiConversionsName')}</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>{t('contextualAdvertisingPage.kpiConversionsSubtitle')}</KpiSubtitle>
              <KpiContent>
              {t('contextualAdvertisingPage.kpiConversionsContent')}
              </KpiContent>
              <KpiExample $bgColor="rgba(156, 39, 176, 0.05)">
                <KpiExampleTitle>{t('contextualAdvertisingPage.kpiText')}</KpiExampleTitle>
                <KpiExampleContent>
                {t('contextualAdvertisingPage.kpiConversionsExample')}
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>

            <KpiCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              $accentColor="#1E88E5"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(30, 136, 229, 0.1)">
                  <FaUsers />
                </KpiIcon>
                <KpiMetricName>{t('contextualAdvertisingPage.kpiQualityName')}</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>{t('contextualAdvertisingPage.kpiQualitySubtitle')}</KpiSubtitle>
              <KpiContent>
              {t('contextualAdvertisingPage.kpiQualityContent')}
              </KpiContent>
              <KpiExample $bgColor="rgba(30, 136, 229, 0.05)">
                <KpiExampleTitle>{t('contextualAdvertisingPage.kpiText')}</KpiExampleTitle>
                <KpiExampleContent>
                {t('contextualAdvertisingPage.kpiQualityExample')}
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>
          </KpiGrid>

          <KpiAction>
            <KpiActionText>
            {t('contextualAdvertisingPage.kpiActionText')}
            </KpiActionText>
            <KpiActionButton
              whileHover={{
                y: -5,
                boxShadow: '0 10px 25px rgba(var(--accent-color-rgb), 0.4)',
              }}
              onClick={openModal}
            >
              {t('contextualAdvertisingPage.kpiActionButton')}
              <FaArrowRight />
            </KpiActionButton>
          </KpiAction>
        </KpiContainer>
      </KpiSection>

      {/* Who is contextual advertising for Section */}
      <SuitableForSection>
        <SuitableForContainer>
          <SuitableForTitle>{t('contextualAdvertisingPage.suitableForTitle')}</SuitableForTitle>

          <SuitableForDescription>
          {t('contextualAdvertisingPage.suitableForDescription')}
          </SuitableForDescription>

          <BusinessTypes>
            <BusinessTabsContainer>
              <BusinessTabs>
                {businessData.map((business, index) => (
                  <BusinessTab
                    key={business.id}
                    className={activeTab === index ? 'active' : ''}
                    onClick={() => setActiveTab(index)}
                    $color={business.color}
                  >
                    <BusinessTabIcon>{business.icon}</BusinessTabIcon>
                    <BusinessTabName>{business.name}</BusinessTabName>
                  </BusinessTab>
                ))}
              </BusinessTabs>
            </BusinessTabsContainer>

            <BusinessContent>
              <AnimatePresence mode="wait">
                <BusinessInfo
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <BusinessInfoHeader $color={businessData[activeTab].color}>
                    <BusinessInfoTitle>
                      {businessData[activeTab].name}
                    </BusinessInfoTitle>
                    <BusinessInfoIcon>
                      {businessData[activeTab].icon}
                    </BusinessInfoIcon>
                  </BusinessInfoHeader>

                  <BusinessInfoText>
                    {businessData[activeTab].description}
                  </BusinessInfoText>

                  <BusinessAdvantagesTitle>{t('contextualAdvertisingPage.businessTextItem')}</BusinessAdvantagesTitle>
                  <BusinessAdvantagesList>
                    {businessData[activeTab].advantages.map(
                      (advantage, index) => (
                        <BusinessAdvantageItem
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <BusinessAdvantageIcon
                            $color={businessData[activeTab].color}
                          >
                            <FaCheck />
                          </BusinessAdvantageIcon>
                          {advantage}
                        </BusinessAdvantageItem>
                      )
                    )}
                  </BusinessAdvantagesList>

                  <BusinessStatsContainer>
                    <BusinessStatItem $color={businessData[activeTab].color}>
                      <BusinessStatIcon>
                        {businessData[activeTab].stats[0].icon}
                      </BusinessStatIcon>
                      <BusinessStatContent>
                        <BusinessStatValue>
                          {businessData[activeTab].stats[0].value}
                        </BusinessStatValue>
                        <BusinessStatLabel>
                          {businessData[activeTab].stats[0].label}
                        </BusinessStatLabel>
                      </BusinessStatContent>
                    </BusinessStatItem>
                    <BusinessStatItem $color={businessData[activeTab].color}>
                      <BusinessStatIcon>
                        {businessData[activeTab].stats[1].icon}
                      </BusinessStatIcon>
                      <BusinessStatContent>
                        <BusinessStatValue>
                          {businessData[activeTab].stats[1].value}
                        </BusinessStatValue>
                        <BusinessStatLabel>
                          {businessData[activeTab].stats[1].label}
                        </BusinessStatLabel>
                      </BusinessStatContent>
                    </BusinessStatItem>
                  </BusinessStatsContainer>

                </BusinessInfo>
              </AnimatePresence>
            </BusinessContent>
          </BusinessTypes>

          <SuitableForContactCta>
            <SuitableForCtaContent>
              <SuitableForCtaTitle>
              {t('contextualAdvertisingPage.suitableForCtaTitle')}
              </SuitableForCtaTitle>
              <SuitableForCtaText>
              {t('contextualAdvertisingPage.suitableForCtaText')}
              </SuitableForCtaText>
              <SuitableForCtaButton onClick={openModal}>
              {t('contextualAdvertisingPage.suitableForCtaButton')}
              </SuitableForCtaButton>
            </SuitableForCtaContent>
          </SuitableForContactCta>
        </SuitableForContainer>
      </SuitableForSection>

      {/* Our Approach Section */}
      <ApproachSection>
        <ApproachContainer>
          <ApproachTitle>{t('contextualAdvertisingPage.approachTitle')}</ApproachTitle>

          <ApproachIntro>
          {t('contextualAdvertisingPage.approachIntro')}
          </ApproachIntro>

          <ApproachTimeline>
            <ApproachStage
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>01</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={false} />
              <ApproachStageContent>
                <ApproachStageTitle>{t('contextualAdvertisingPage.approachStage1Title')}</ApproachStageTitle>
                <ApproachStageDescription>
                {t('contextualAdvertisingPage.approachStage1Description')}
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>{approachStage1Tags[0]}</ApproachTag>
                  <ApproachTag>{approachStage1Tags[1]}</ApproachTag>
                  <ApproachTag>{approachStage1Tags[2]}</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaSearchDollar />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>

            <ApproachStage
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>02</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={false} />
              <ApproachStageContent>
                <ApproachStageTitle>{t('contextualAdvertisingPage.approachStage2Title')}</ApproachStageTitle>
                <ApproachStageDescription>
                {t('contextualAdvertisingPage.approachStage2Description')}
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>{approachStage2Tags[0]}</ApproachTag>
                  <ApproachTag>{approachStage2Tags[1]}</ApproachTag>
                  <ApproachTag>{approachStage2Tags[2]}</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaChartLine />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>

            <ApproachStage
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>03</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={false} />
              <ApproachStageContent>
                <ApproachStageTitle>
                {t('contextualAdvertisingPage.approachStage3Title')}
                </ApproachStageTitle>
                <ApproachStageDescription>
                {t('contextualAdvertisingPage.approachStage3Description')}
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>{approachStage3Tags[0]}</ApproachTag>
                  <ApproachTag>{approachStage3Tags[1]}</ApproachTag>
                  <ApproachTag>{approachStage3Tags[2]}</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaChartBar />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>

            <ApproachStage
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>04</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={true} />
              <ApproachStageContent>
                <ApproachStageTitle>
                {t('contextualAdvertisingPage.approachStage4Title')}
                </ApproachStageTitle>
                <ApproachStageDescription>
                {t('contextualAdvertisingPage.approachStage4Description')}
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>{approachStage4Tags[0]}</ApproachTag>
                  <ApproachTag>{approachStage4Tags[1]}</ApproachTag>
                  <ApproachTag>{approachStage4Tags[2]}</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaChartPie />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>
          </ApproachTimeline>

          <ResultsSection>
            <ResultsTitle>{t('contextualAdvertisingPage.resultsTitle')}</ResultsTitle>

            <ResultsIntro>
            {t('contextualAdvertisingPage.resultsIntro')}
            </ResultsIntro>

            <ResultsGrid>
              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaUsers />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>{t('contextualAdvertisingPage.result1Title')}</ResultItemTitle>
                <ResultItemDescription>
                {t('contextualAdvertisingPage.result1Description')}
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>93%</ResultMetricValue>
                  <ResultMetricLabel>{t('contextualAdvertisingPage.result1Description.result1Metric.label')}</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>

              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaChartLine />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>{t('contextualAdvertisingPage.result2Title')}</ResultItemTitle>
                <ResultItemDescription>
                {t('contextualAdvertisingPage.result2Description')}
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>+45%</ResultMetricValue>
                  <ResultMetricLabel>
                  {t('contextualAdvertisingPage.result1Description.result2Metric.label')}
                  </ResultMetricLabel>
                </ResultMetric>
              </ResultCard>

              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaBullhorn />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>
                {t('contextualAdvertisingPage.result3Title')}
                </ResultItemTitle>
                <ResultItemDescription>
                {t('contextualAdvertisingPage.result3Description')}
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>3.5x</ResultMetricValue>
                  <ResultMetricLabel>
                  {t('contextualAdvertisingPage.result1Description.result3Metric.label')}
                  </ResultMetricLabel>
                </ResultMetric>
              </ResultCard>

              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaMoneyBillWave />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>{t('contextualAdvertisingPage.result4Title')}</ResultItemTitle>
                <ResultItemDescription>
                {t('contextualAdvertisingPage.result4Description')}
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>100%</ResultMetricValue>
                  <ResultMetricLabel>{t('contextualAdvertisingPage.result1Description.result4Metric.label')}</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>

              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaChartPie />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>{t('contextualAdvertisingPage.result5Title')}</ResultItemTitle>
                <ResultItemDescription>
                {t('contextualAdvertisingPage.result5Description')}
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>24/7</ResultMetricValue>
                  <ResultMetricLabel>{t('contextualAdvertisingPage.result1Description.result5Metric.label')}</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>

              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
                }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaBolt />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>{t('contextualAdvertisingPage.result6Title')}</ResultItemTitle>
                <ResultItemDescription>
                {t('contextualAdvertisingPage.result6Description')}
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>~24 год</ResultMetricValue>
                  <ResultMetricLabel>{t('contextualAdvertisingPage.result1Description.result6Metric.label')}</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>
            </ResultsGrid>

            <ResultsNote>
              <ResultsNoteHighlight>
              {t('contextualAdvertisingPage.resultsNoteHighlight')}
              </ResultsNoteHighlight>
              <ResultsAction
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px rgba(var(--accent-color-rgb), 0.4)',
                }}
                onClick={openModal}
              >
                {t('contextualAdvertisingPage.resultsActionButton')}
                <FaArrowRight />
              </ResultsAction>
            </ResultsNote>
          </ResultsSection>
        </ApproachContainer>
      </ApproachSection>

      {/* FAQ Section */}
      <FaqSection>
        <FaqWaveTop />

        <FaqContainer>
          <FaqGlowCircle className="circle-1" />
          <FaqGlowCircle className="circle-2" />

          <FaqTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </FaqTitle>

          <FaqList
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <FaqItemContent
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                  }}
                  layout
                >
                  <FaqQuestion layout onClick={() => toggleFaq(index)}>
                    <FaqQuestionText>{faq.question}</FaqQuestionText>
                    <FaqToggle
                      animate={{
                        rotate: expandedFaqs.includes(index) ? 45 : 0,
                        backgroundColor: expandedFaqs.includes(index)
                          ? 'rgba(var(--accent-color-rgb), 0.3)'
                          : 'rgba(var(--accent-color-rgb), 0.1)',
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    />
                  </FaqQuestion>

                  {expandedFaqs.includes(index) && (
                    <FaqAnswer
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      layout
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaqCtaText>
            {t('contextualAdvertisingPage.faqCtaText')}
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              onClick={openModal}
            >
              {t('contextualAdvertisingPage.faqCtaButton')}
              <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

// KPI Section Styled Components
const KpiSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(var(--bg-primary-rgb), 0.97) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const KpiBackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(66, 133, 244, 0.07) 0%,
      transparent 70%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(52, 168, 83, 0.07) 0%,
      transparent 70%
    );
  z-index: 0;
`;

const KpiContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const KpiTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const KpiDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const KpiCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$accentColor || 'var(--accent-color)'};
    border-radius: 4px 4px 0 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props =>
      props.$accentColor
        ? `rgba(${hexToRgb(props.$accentColor)}, 0.2)`
        : 'rgba(var(--accent-color-rgb), 0.2)'};
  }
`;

const KpiHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const KpiIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: ${props =>
    props.$bgColor || 'rgba(var(--accent-color-rgb), 0.1)'};
  color: ${props => props.$color || 'var(--accent-color)'};
`;

const KpiMetricName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const KpiSubtitle = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const KpiContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const KpiExample = styled.div`
  padding: 1.2rem;
  background: ${props => props.$bgColor || 'rgba(255, 255, 255, 0.03)'};
  border-radius: 8px;
`;

const KpiExampleTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const KpiExampleContent = styled.p`
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.5;
`;

const KpiAction = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.02) 100%
  );
  border-radius: 16px;
`;

const KpiActionText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const KpiActionButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

// Helper function to convert hex to rgb
const hexToRgb = hex => {
  // Remove # if present
  hex = hex.replace('#', '');

  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return RGB format
  return `${r}, ${g}, ${b}`;
};

// Add new styled components for Types Section
const TypesSection = styled.section`
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.95) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const ImplBackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(var(--accent-color-rgb), 0.07) 0%,
      transparent 70%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(var(--accent-color-rgb), 0.07) 0%,
      transparent 70%
    );
  z-index: 0;
`;

const ImplBackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
      rgba(var(--accent-color-rgb), 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(var(--accent-color-rgb), 0.03) 1px,
      transparent 1px
    );
  background-size: 40px 40px;
  background-position: center center;
  z-index: 0;
  opacity: 0.7;
  pointer-events: none;
`;

const TypesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const TypesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const TypesDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const TypeCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.2);

    &::before {
      opacity: 0.1;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.05;
    z-index: 0;
    transition: opacity 0.3s ease;
  }

  &:nth-child(5) {
    grid-column: span 2;

    @media (max-width: 1024px) {
      grid-column: span 1;
    }
  }
`;

const TypeIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;

  &.search {
    background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
    color: white;
  }

  &.display {
    background: linear-gradient(135deg, #ea4335 0%, #fbbc05 100%);
    color: white;
  }

  &.video {
    background: linear-gradient(135deg, #ff0000 0%, #ff5e3a 100%);
    color: white;
  }

  &.shopping {
    background: linear-gradient(135deg, #34a853 0%, #4285f4 100%);
    color: white;
  }

  &.remarketing {
    background: linear-gradient(135deg, #9c27b0 0%, #673ab7 100%);
    color: white;
  }
`;

const TypeName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
`;

const TypeNameEn = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-left: 0.5rem;
`;

const TypeDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const TypeAdvantagesList = styled.div`
  margin: 1.5rem 0;
  position: relative;
  z-index: 1;
`;

const AdvantageTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const TypeAdvantageItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 1rem;
  color: var(--text-secondary);
`;

const TypeAdvantageIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const TypeUseCase = styled.div`
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--text-primary);
  font-weight: 500;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
`;

// Styles for Stages Section
const StagesSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(var(--bg-primary-rgb), 0.98) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const StagesContainer = styled.div`
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

const StagesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const StagesDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const StagesTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--accent-color-rgb), 0.3) 15%,
      rgba(var(--accent-color-rgb), 0.3) 85%,
      transparent
    );
    z-index: 0;
    transform: translateX(-50%);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    &::before {
      left: 30px;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;

    &::before {
      left: 25px;
    }
  }

  @media (max-width: 480px) {
    gap: 1rem;

    &::before {
      left: 20px;
    }
  }
`;

const StageCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  display: flex;

  &:nth-child(odd) {
    margin-right: 1.5rem;

    @media (max-width: 1024px) {
      margin-right: 0;
      margin-left: 4rem;
    }

    @media (max-width: 768px) {
      margin-left: 3rem;
    }

    @media (max-width: 480px) {
      margin-left: 2.5rem;
    }
  }

  &:nth-child(even) {
    margin-left: 1.5rem;

    @media (max-width: 1024px) {
      margin-left: 4rem;
    }

    @media (max-width: 768px) {
      margin-left: 3rem;
    }

    @media (max-width: 480px) {
      margin-left: 2.5rem;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const StageNumber = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  position: absolute;
  top: 1.5rem;
  left: -30px;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(var(--accent-color-rgb), 0.3);

  @media (max-width: 1024px) {
    left: -2rem;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
    left: -1.5rem;
    top: 1rem;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.1rem;
    left: -1.25rem;
    top: 0.8rem;
  }

  ${StageCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(var(--accent-color-rgb), 0.4);
  }
`;

const StageContent = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1.5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem 1rem 1.5rem;
  }
`;

const StageTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  padding-right: 50px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-right: 35px;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding-right: 30px;
    margin-bottom: 0.6rem;
  }
`;

const StageDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }
`;

const StageIconContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.1rem;
    top: 1rem;
    right: 1rem;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
    top: 0.8rem;
    right: 0.8rem;
  }

  ${StageCard}:hover & {
    transform: rotate(10deg);
    background: rgba(var(--accent-color-rgb), 0.15);
  }
`;

const StageBulletPoints = styled.div`
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1rem;
  }
`;

const StageBullet = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
  color: var(--text-secondary);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }
`;

const StageBulletIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  font-size: 0.7rem;
  margin-right: 0.8rem;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
    font-size: 0.65rem;
    margin-right: 0.7rem;
  }

  @media (max-width: 480px) {
    width: 16px;
    height: 16px;
    font-size: 0.6rem;
    margin-right: 0.6rem;
  }
`;

const StagesCallout = styled.div`
  margin-top: 5rem;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
`;

const CalloutContent = styled.div`
  position: relative;
  padding: 3rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CalloutTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const CalloutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-bottom: 2rem;
`;

const CalloutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: white;
  color: var(--accent-color);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.9);
    color: #1a73e8; /* Deeper blue for better contrast */

    svg {
      transform: translateX(5px);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

const CalloutBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--accent-color) 0%, #4285f4 100%);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='white' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")
      center center;
    opacity: 0.3;
  }
`;

// Styles for Tools Section
const ToolsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 10% 10%,
      rgba(var(--accent-color-rgb), 0.03) 0%,
      transparent 60%
    ),
    radial-gradient(
      circle at 90% 90%,
      rgba(var(--accent-color-rgb), 0.03) 0%,
      transparent 60%
    );
  z-index: 0;
`;

const ToolsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ToolsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ToolsDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ToolCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ToolIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;

  &.google-ads {
    background: linear-gradient(135deg, #4285f4 0%, #34a853 100%);
    color: white;
  }

  &.analytics {
    background: linear-gradient(135deg, #f4b400 0%, #ea4335 100%);
    color: white;
  }

  &.tag-manager {
    background: linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%);
    color: white;
  }

  &.keyword-planner {
    background: linear-gradient(135deg, #039be5 0%, #01579b 100%);
    color: white;
  }

  &.seo-tools {
    background: linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%);
    color: white;
  }

  &.ux-tools {
    background: linear-gradient(135deg, #f57c00 0%, #e65100 100%);
    color: white;
  }
`;

const ToolIconRing = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: spin 15s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ToolContent = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
`;

const ToolName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ToolDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ToolFeatures = styled.div`
  margin-top: 1.5rem;
`;

const ToolFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  color: var(--text-secondary);

  &:last-child {
    margin-bottom: 0;
  }
`;

const ToolFeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  font-size: 0.8rem;
  margin-right: 0.8rem;
  flex-shrink: 0;
`;

const ToolsFooter = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const ToolsNote = styled.div`
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const NoteIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
`;

const NoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-primary);
  margin: 0;
`;

// Suitable For Section Styled Components
const SuitableForSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SuitableForContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SuitableForTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const SuitableForDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const BusinessTypes = styled.div`
  margin-bottom: 5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
`;

const BusinessTabsContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BusinessTabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  min-width: max-content;
`;

const BusinessTab = styled.button`
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.02);
  }

  &.active {
    color: ${props => props.$color || 'var(--accent-color)'};

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${props => props.$color || 'var(--accent-color)'};
      border-radius: 3px 3px 0 0;
    }
  }

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const BusinessTabIcon = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BusinessTabName = styled.span``;

const BusinessContent = styled.div`
  padding: 3rem;
  position: relative;
  min-height: 670px;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const BusinessInfo = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const BusinessInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
`;

const BusinessInfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BusinessInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props =>
    props.$color
      ? `rgba(${hexToRgb(props.$color)}, 0.1)`
      : 'rgba(var(--accent-color-rgb), 0.1)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.$color || 'var(--accent-color)'};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const BusinessInfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BusinessAdvantagesTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const BusinessAdvantagesList = styled.div`
  margin-bottom: 2.5rem;
`;

const BusinessAdvantageItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: var(--text-secondary);

  &:last-child {
    margin-bottom: 0;
  }
`;

const BusinessAdvantageIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props =>
    props.$color
      ? `rgba(${hexToRgb(props.$color)}, 0.1)`
      : 'rgba(var(--accent-color-rgb), 0.1)'};
  color: ${props => props.$color || 'var(--accent-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const BusinessStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BusinessStatItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-left: 3px solid ${props => props.$color || 'var(--accent-color)'};
`;

const BusinessStatIcon = styled.div`
  font-size: 2rem;
`;

const BusinessStatContent = styled.div``;

const BusinessStatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
`;

const BusinessStatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const SuitableForContactCta = styled.div`
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.2) 0%,
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  border-radius: 20px;
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
    background-image: radial-gradient(
        circle at 20% 20%,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 30%
      ),
      radial-gradient(
        circle at 80% 80%,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 30%
      );
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SuitableForCtaContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const SuitableForCtaTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SuitableForCtaText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SuitableForCtaButton = styled.button`
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  }
`;

// Styled Components for Approach Section
const ApproachSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const ApproachContainer = styled.div`
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

const ApproachTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

const ApproachIntro = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
`;

const ApproachTimeline = styled.div`
  position: relative;
  margin: 0 auto 5rem;
  max-width: 900px;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const ApproachStage = styled(motion.div)`
  position: relative;
  display: flex;
  margin-bottom: 2.5rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const ApproachStageNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      rgba(var(--accent-color-rgb), 0.7) 100%
    );
    opacity: 0.2;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
  }
`;

const ApproachStageNumberInner = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent-color);

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ApproachStageLine = styled.div`
  position: absolute;
  top: 60px;
  left: 30px;
  width: 1px;
  height: ${props => (props.$isLast ? '0' : 'calc(100% - 30px)')};
  background: linear-gradient(
    to bottom,
    rgba(var(--accent-color-rgb), 0.3),
    rgba(var(--accent-color-rgb), 0.1)
  );
  z-index: 1;

  @media (max-width: 768px) {
    top: 50px;
    left: 25px;
  }

  @media (max-width: 480px) {
    top: 45px;
    left: 22.5px;
  }
`;

const ApproachStageContent = styled.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-left: 2rem;
  flex: 1;
  position: relative;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-left: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-left: 1rem;
  }
`;

const ApproachStageTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-right: 50px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding-right: 35px;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    padding-right: 30px;
    margin-bottom: 0.6rem;
  }
`;

const ApproachStageDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.8rem;
  }
`;

const ApproachStageTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const ApproachTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(var(--accent-color-rgb), 0.07);
  border-radius: 30px;
  font-size: 0.85rem;
  color: var(--accent-color);
  font-weight: 500;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
  }
`;

const ApproachStageIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 1.1rem;
    top: 1rem;
    right: 1rem;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
    top: 0.8rem;
    right: 0.8rem;
  }
`;

const ResultsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(var(--bg-primary-rgb), 0.97) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const ResultsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ResultsIntro = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResultCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$accentColor || 'var(--accent-color)'};
    border-radius: 4px 4px 0 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props =>
      props.$accentColor
        ? `rgba(${hexToRgb(props.$accentColor)}, 0.2)`
        : 'rgba(var(--accent-color-rgb), 0.2)'};
  }
`;

const ResultIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ResultIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
`;

const ResultIconGlow = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: spin 15s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ResultItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ResultItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ResultMetric = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ResultMetricValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`;

const ResultMetricLabel = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ResultsNote = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  border-radius: 16px;
`;

const ResultsNoteHighlight = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const ResultsAction = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

// FAQ Section Styled Components
const pulseFaq = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

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

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
      left: -150px;
    }

    @media (max-width: 480px) {
      width: 250px;
      height: 250px;
      left: -125px;
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
      width: 280px;
      height: 280px;
      right: -120px;
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

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;

    &::after {
      left: 1.5rem;
      right: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem 1rem;

    &::after {
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

  ${FaqQuestion}:hover & {
    color: var(--accent-color);
    transform: translateZ(10px);
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
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

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: currentColor;
  }

  &::before {
    width: 12px;
    height: 2px;
  }

  &::after {
    width: 2px;
    height: 12px;
  }

  @media (max-width: 768px) {
    width: 24px;
    height: 24px;
    margin-left: 0.8rem;

    &::before {
      width: 10px;
      height: 2px;
    }

    &::after {
      width: 2px;
      height: 10px;
    }
  }

  @media (max-width: 480px) {
    width: 22px;
    height: 22px;
    margin-left: 0.6rem;

    &::before {
      width: 9px;
      height: 2px;
    }

    &::after {
      width: 2px;
      height: 9px;
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
  }

  @media (max-width: 480px) {
    padding: 0 1rem 1.2rem;
    font-size: 0.95rem;

    &::before {
      left: 1rem;
      right: 1rem;
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
    padding: 2rem;
    gap: 1.2rem;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    gap: 1rem;
    border-radius: 12px;
  }
`;

const FaqCtaText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const FaqCtaButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

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
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(var(--accent-color-rgb), 0.4);

    &::before {
      left: 100%;
    }

    svg {
      transform: translateX(5px);
    }
  }

  &:active {
    transform: translateY(-1px);
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
    gap: 0.7rem;

    svg {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    gap: 0.6rem;

    svg {
      font-size: 0.95rem;
    }
  }
`;
export default ContextualAdvertising;
