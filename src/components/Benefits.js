import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLightbulb, FaClock, FaUsers, FaHandshake } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const BenefitsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
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

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;

    &::after {
      width: 80px;
      height: 2px;
      bottom: -8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;

    &::after {
      width: 60px;
    }
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const Number = styled(motion.div)`
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, var(--accent-color), #6aadff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 0.8rem;
  }
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

  @media (max-width: 1024px) {
    padding: 2rem;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    padding: 1.8rem;
    border-radius: 15px;

    &:hover {
      transform: translateY(-3px);
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;

    &:hover {
      transform: translateY(-2px);
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

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;

    &::after {
      width: 40px;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;

    &::after {
      width: 35px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;

    &::after {
      width: 30px;
    }
  }
`;

const BenefitDescription = styled(motion.p)`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-top: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 0.6rem;
  }
`;

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <FaLightbulb />,
      title: t('mainPage.benefits.firstItem.title'),
      description: t('mainPage.benefits.firstItem.description'),
      stats: '100+',
      statsLabel: t('mainPage.benefits.firstItem.statsLabel'),
    },
    {
      icon: <FaClock />,
      title: t('mainPage.benefits.secondItem.title'),
      description: t('mainPage.benefits.secondItem.description'),
      stats: '2x',
      statsLabel: t('mainPage.benefits.secondItem.statsLabel'),
    },
    {
      icon: <FaUsers />,
      title: t('mainPage.benefits.thirdItem.title'),
      description: t('mainPage.benefits.thirdItem.description'),
      stats: '50+',
      statsLabel: t('mainPage.benefits.thirdItem.statsLabel'),
    },
    {
      icon: <FaHandshake />,
      title: t('mainPage.benefits.forthItem.title'),
      description: t('mainPage.benefits.forthItem.description'),
      stats: '24/7',
      statsLabel: t('mainPage.benefits.forthItem.statsLabel'),
    },
  ];

  return (
    <BenefitsSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('mainPage.benefits.title')}
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
                {benefit.stats}
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
