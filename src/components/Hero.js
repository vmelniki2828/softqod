import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 0 0 0;
  background: var(--bg-primary);
  overflow: hidden;
`;

const GradientBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, var(--accent-color) 0%, transparent 50%);
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
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 0;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  max-width: 600px;
  
  @media (max-width: 968px) {
    margin: 0 auto;
    padding-top: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  color: var(--text-primary);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 600px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 968px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--bg-primary);
  background: var(--accent-color);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--text-primary);
    color: var(--bg-primary);
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
  background: transparent;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--bg-secondary);
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const StatLabel = styled.div`
  color: var(--text-primary);
  font-size: 1rem;
`;

const AnimatedShape = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, var(--bg-secondary), var(--accent-color));
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  position: relative;
  margin-left: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid var(--border-color);
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
  return (
    <HeroSection>
      <GradientBackground
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingCircle
        size={300}
        color="#4A5C6A"
        initial={{ x: -100, y: -100 }}
        animate={{
          x: [-100, 100, -100],
          y: [-100, 100, -100],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingCircle
        size={200}
        color="#9BA8AB"
        initial={{ x: 100, y: 100 }}
        animate={{
          x: [100, -100, 100],
          y: [100, -100, 100],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Container>
        <Content>
          <TextContent>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Создаем цифровые решения для вашего бизнеса
            </Title>
            <Subtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Мы помогаем компаниям развиваться в цифровой среде с помощью современных технологий и креативных решений. Наша команда экспертов создает инновационные проекты, которые приносят реальные результаты.
            </Subtitle>
            <ButtonGroup>
              <PrimaryButton
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Обсудить проект
              </PrimaryButton>
              <SecondaryButton
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Наши услуги
              </SecondaryButton>
            </ButtonGroup>
            <StatsContainer
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <StatItem>
                <StatNumber>10+</StatNumber>
                <StatLabel>Лет опыта</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>100+</StatNumber>
                <StatLabel>Успешных проектов</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>50+</StatNumber>
                <StatLabel>Экспертов</StatLabel>
              </StatItem>
            </StatsContainer>
          </TextContent>
          <AnimatedShape
            initial={{ rotate: 0 }}
            animate={{
              rotate: 360,
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </Content>
      </Container>
    </HeroSection>
  );
};

export default Hero;