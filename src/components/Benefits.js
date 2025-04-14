import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BenefitsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Number = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  background: linear-gradient(
    45deg,
    var(--accent-color),
    #6AADFF
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;
`;

const BenefitItem = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--accent-color), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-color);
    
    &::before {
      opacity: 0.1;
    }
    
    ${Number} {
      transform: scale(1.1);
    }
  }
`;

const BenefitTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const BenefitDescription = styled(motion.p)`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

const benefits = [
  {
    number: '10+',
    title: 'Лет опыта',
    description: 'Более 10 лет успешной работы в сфере IT-разработки',
  },
  {
    number: '100+',
    title: 'Проектов',
    description: 'Успешно реализованных проектов для клиентов',
  },
  {
    number: '50+',
    title: 'Специалистов',
    description: 'Профессиональная команда экспертов',
  },
  {
    number: '24/7',
    title: 'Поддержка',
    description: 'Круглосуточная техническая поддержка',
  },
];

const Benefits = () => {
  return (
    <BenefitsSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Почему мы?
        </SectionTitle>
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Number
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                {benefit.number}
              </Number>
              <BenefitTitle
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                {benefit.title}
              </BenefitTitle>
              <BenefitDescription
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
              >
                {benefit.description}
              </BenefitDescription>
            </BenefitItem>
          ))}
        </BenefitsGrid>
      </Container>
    </BenefitsSection>
  );
};

export default Benefits;
