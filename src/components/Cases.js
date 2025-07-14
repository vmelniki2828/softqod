import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CasesSection = styled.section`
  padding: 6rem 2rem;
  background: var(--bg-primary);

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 576px) {
    padding: 3rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const CasesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    gap: 1rem;
  }
`;

const CaseCard = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);

  &:hover {
    border-color: var(--accent-color);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
  }
`;

const CaseImage = styled.div`
  width: 100%;
  height: 250px;
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
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(45, 45, 45, 0.8) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 576px) {
    height: 180px;
  }
`;

const CaseContent = styled.div`
  padding: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const CaseTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

const CaseDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 1.2rem;
    line-height: 1.5;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const CaseLink = styled(motion.a)`
  color: var(--accent-color);
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const Cases = () => {
  const { t } = useTranslation();

  const cases = [
    {
      title: t('mainPage.сases.firstItem.title'),
      description: t('mainPage.сases.firstItem.description'),
      image: 'var(--bg-secondary)',
    },
    {
      title: t('mainPage.сases.secondItem.title'),
      description: t('mainPage.сases.secondItem.description'),
      image: 'var(--accent-color)',
    },
    {
      title: t('mainPage.сases.thirdItem.title'),
      description: t('mainPage.сases.thirdItem.description'),
      image: 'var(--text-secondary)',
    },
  ];

  return (
    <CasesSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('mainPage.сases.title')}
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
                <CaseLink href="#" whileHover={{ x: 5 }}>
                  {t('mainPage.сases.buttonText')} →
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
