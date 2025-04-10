import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BenefitsSection = styled.section`
  padding: 6rem 2rem;
  background: #06141B;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #CCD0CF;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: #11212D;
  border-radius: 10px;
  border: 1px solid #4A5C6A;
  
  &:hover {
    border-color: #CCD0CF;
  }
`;

const Number = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #CCD0CF;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #CCD0CF, #9BA8AB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BenefitTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #CCD0CF;
`;

const BenefitDescription = styled.p`
  color: #9BA8AB;
  line-height: 1.6;
`;

const benefits = [
  {
    number: '10+',
    title: 'Лет опыта',
    description: 'Более 10 лет успешной работы в сфере IT-разработки'
  },
  {
    number: '100+',
    title: 'Проектов',
    description: 'Успешно реализованных проектов для клиентов'
  },
  {
    number: '50+',
    title: 'Специалистов',
    description: 'Профессиональная команда экспертов'
  },
  {
    number: '24/7',
    title: 'Поддержка',
    description: 'Круглосуточная техническая поддержка'
  }
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
              whileHover={{ scale: 1.02 }}
            >
              <Number>{benefit.number}</Number>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitItem>
          ))}
        </BenefitsGrid>
      </Container>
    </BenefitsSection>
  );
};

export default Benefits;