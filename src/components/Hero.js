import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { useTranslation } from 'react-i18next';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: var(--bg-primary);
  overflow: hidden;
  padding: 2rem;

  @media (max-width: 768px) {
    min-height: 90vh;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    min-height: 85vh;
    padding: 1rem 0.5rem;
  }
`;

const GradientBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 50% 50%,
    var(--accent-color) 0%,
    transparent 40%
  );
  opacity: 0.15;
  z-index: 1;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.color};
  opacity: 0.1;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    order: 2;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary);
  margin: 0;

  span {
    background: linear-gradient(45deg, var(--accent-color), #6aadff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.4;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, var(--accent-color), #6aadff);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  align-self: flex-start;
  box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(74, 144, 226, 0.4);
  }

  @media (max-width: 768px) {
    align-self: center;
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.95rem;
    border-radius: 40px;

    &:hover {
      transform: translateY(-2px);
    }
  }
`;

const VisualSection = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;

  @media (max-width: 480px) {
    text-align: center;
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
  }
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const AnimatedShape = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: linear-gradient(145deg, var(--bg-secondary), var(--accent-color));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  position: relative;
  margin-left: auto;
  box-shadow: 0 0 50px rgba(74, 144, 226, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid var(--accent-color);
    border-radius: inherit;
    opacity: 0.3;
  }

  @media (max-width: 968px) {
    width: 280px;
    height: 280px;
    margin: 0 auto;
  }
`;

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeroSection>
      <GradientBackground
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <FloatingCircle
        size={300}
        color="#4A90E2"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [-100, 100, -100],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <FloatingCircle
        size={200}
        color="#4A5C6A"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: [100, -100, 100],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <Container>
        <Content>
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('mainPage.hero.mainText')}
          </Title>
          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('mainPage.hero.text')}
          </Description>
          <CTAButton
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
          >
            {t('mainPage.hero.buttonText')}
          </CTAButton>
          <StatsSection
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <StatItem>
              <StatNumber>10+</StatNumber>
              <StatLabel> {t('mainPage.hero.firstListItem')}</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>100+</StatNumber>
              <StatLabel> {t('mainPage.hero.firstListSecond')}</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50+</StatNumber>
              <StatLabel> {t('mainPage.hero.firstListThird')}</StatLabel>
            </StatItem>
          </StatsSection>
        </Content>
        <VisualSection>
          <AnimatedShape
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360,
              borderRadius: [
                '30% 70% 70% 30% / 30% 30% 70% 70%',
                '70% 30% 30% 70% / 70% 70% 30% 30%',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </VisualSection>
      </Container>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Обговорити проєкт"
        subtitle="Розкажіть про ваш проєкт і ми зв'яжемося з вами найближчим часом"
      />
    </HeroSection>
  );
};

export default Hero;
