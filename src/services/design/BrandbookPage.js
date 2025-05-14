import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBook, FaSwatchbook, FaFileAlt, FaArrowRight } from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
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

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 4.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  
  span {
    position: relative;
    display: inline-block;
    color: var(--accent-color-light);
    
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
`;

const Description = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ActionButton = styled(motion.button)`
  background: white;
  color: var(--accent-color-dark);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const FeatureCards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color-light);
  margin-bottom: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  line-height: 1.6;
`;

const BrandbookPage = () => {
  return (
    <PageContainer>
      <HeroSection>
        <ContentContainer>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Створення <span>брендбуку</span> для вашого бізнесу
          </Title>
          
          <Description
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Професійний брендбук - це основа вашого фірмового стилю та візуальної комунікації.
            Ми розробляємо чіткі правила використання елементів вашого бренду для єдиної та впізнаваної присутності на ринку.
          </Description>
          
          <ActionButton
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Замовити брендбук <FaArrowRight />
          </ActionButton>
          
          <FeatureCards
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <FeatureCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon><FaSwatchbook /></FeatureIcon>
              <FeatureTitle>Фірмовий стиль</FeatureTitle>
              <FeatureDescription>Логотип, кольорова палітра, шрифти та графічні елементи, які формують цілісний образ вашого бренду.</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon><FaFileAlt /></FeatureIcon>
              <FeatureTitle>Правила використання</FeatureTitle>
              <FeatureDescription>Детальні інструкції щодо коректного використання елементів бренду на різних носіях та платформах.</FeatureDescription>
            </FeatureCard>
            
            <FeatureCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <FeatureIcon><FaBook /></FeatureIcon>
              <FeatureTitle>Готові шаблони</FeatureTitle>
              <FeatureDescription>Шаблони для основних маркетингових матеріалів - від візиток до банерів та презентацій.</FeatureDescription>
            </FeatureCard>
          </FeatureCards>
        </ContentContainer>
      </HeroSection>
    </PageContainer>
  );
};

export default BrandbookPage;
