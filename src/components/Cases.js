import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CasesSection = styled.section`
  padding: 6rem 2rem;
  background: #111111;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const CaseCard = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: #1a1a1a;
  border: 1px solid #333;
  
  &:hover {
    border-color: #ffffff;
  }
`;

const CaseImage = styled.div`
  width: 100%;
  height: 250px;
  background: #222;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%);
    z-index: 1;
  }
`;

const CaseContent = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const CaseTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const CaseDescription = styled.p`
  color: #888888;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CaseLink = styled(motion.a)`
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    color: #888888;
  }
`;

const cases = [
  {
    title: 'E-commerce платформа',
    description: 'Разработка современной платформы электронной коммерции с интеграцией платежных систем и аналитикой.',
    image: '#1a1a1a'
  },
  {
    title: 'Корпоративный портал',
    description: 'Создание корпоративного портала для крупной компании с системой управления документами.',
    image: '#222222'
  },
  {
    title: 'AI-ассистент',
    description: 'Разработка интеллектуального ассистента для автоматизации бизнес-процессов.',
    image: '#333333'
  }
];

const Cases = () => {
  return (
    <CasesSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Наши кейсы
        </SectionTitle>
        <CasesGrid>
          {cases.map((case_, index) => (
            <CaseCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <CaseImage style={{ background: case_.image }} />
              <CaseContent>
                <CaseTitle>{case_.title}</CaseTitle>
                <CaseDescription>{case_.description}</CaseDescription>
                <CaseLink
                  href="#"
                  whileHover={{ x: 5 }}
                >
                  Подробнее →
                </CaseLink>
              </CaseContent>
            </CaseCard>
          ))}
        </CasesGrid>
      </Container>
    </CasesSection>
  );
};

export default Cases; 