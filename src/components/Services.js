import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaRocket,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaClock,
  FaHandshake,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ServicesSection = styled.section`
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

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  perspective: 1000px;

  @media (max-width: 1024px) {
    height: 550px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 450px;
    perspective: none;
  }

  @media (max-width: 480px) {
    min-height: 400px;
  }
`;

const SliderWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    height: auto;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

const ServiceTitle = styled(motion.h3)`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  position: relative;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-color);
    background: linear-gradient(145deg, var(--bg-secondary), var(--bg-primary));

    ${ServiceTitle}::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--accent-color);
      transform: scaleX(1);
      transition: transform 0.3s ease;
    }
  }

  ${ServiceTitle}::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
    padding: 2rem;
    gap: 1.2rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
    border-radius: 15px;
    gap: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    border-radius: 12px;
    gap: 0.8rem;
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  display: inline-block;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 0.6rem;
    text-align: center;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const ServiceDescription = styled(motion.p)`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
`;

const ServiceBenefits = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 1024px) {
    gap: 0.8rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const BenefitItem = styled(motion.li)`
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  background: rgba(74, 144, 226, 0.05);
  transition: all 0.3s ease;

  &::before {
    content: '✓';
    color: var(--accent-color);
    font-weight: bold;
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  &:hover {
    background: rgba(74, 144, 226, 0.15);
    transform: translateX(5px);
  }

  @media (max-width: 1024px) {
    font-size: 0.95rem;
    gap: 0.6rem;
    padding: 0.4rem;

    &::before {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 0.5rem;
    padding: 0.4rem 0.6rem;
    justify-content: flex-start;
    text-align: left;

    &:hover {
      transform: translateX(3px);
    }

    &::before {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.3rem 0.5rem;
    border-radius: 6px;

    &::before {
      font-size: 0.9rem;
    }
  }
`;

const NavigationButton = styled(motion.button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
    box-shadow: 0 5px 20px rgba(74, 144, 226, 0.3);
  }

  &.prev {
    left: 70px;
  }

  &.next {
    right: 70px;
  }

  @media (max-width: 1024px) {
    width: 45px;
    height: 45px;

    &.prev {
      left: 5px;
    }

    &.next {
      right: 5px;
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 20px;
    transform: none;

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    top: 15px;

    &.prev {
      left: 5px;
    }

    &.next {
      right: 5px;
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    margin-top: 1rem;
  }
`;

const Dot = styled(motion.button)`
  width: 12px;
  height: 30px;
  border-radius: 50%;
  background: var(--border-color);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background: var(--accent-color);
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 30px;
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 30px;
  }
`;

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaRocket />,
      title: t('mainPage.services.firstItem.title'),
      description: t('mainPage.services.firstItem.description'),
      benefits: [
        t('mainPage.services.firstItem.benefitsFirstItem'),
        t('mainPage.services.firstItem.benefitsSecondItem'),
        t('mainPage.services.firstItem.benefitsThirdItem'),
        t('mainPage.services.firstItem.benefitsForthItem'),
      ],
    },
    {
      icon: <FaChartLine />,
      title: t('mainPage.services.secondItem.title'),
      description: t('mainPage.services.secondItem.description'),
      benefits: [
        t('mainPage.services.secondItem.benefitsFirstItem'),
        t('mainPage.services.secondItem.benefitsSecondItem'),
        t('mainPage.services.secondItem.benefitsThirdItem'),
        t('mainPage.services.secondItem.benefitsForthItem'),
      ],
    },
    {
      icon: <FaUsers />,
      title: t('mainPage.services.thirdItem.title'),
      description: t('mainPage.services.thirdItem.description'),
      benefits: [
        t('mainPage.services.thirdItem.benefitsFirstItem'),
        t('mainPage.services.thirdItem.benefitsSecondItem'),
        t('mainPage.services.thirdItem.benefitsThirdItem'),
        t('mainPage.services.thirdItem.benefitsForthItem'),
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: t('mainPage.services.forthItem.title'),
      description: t('mainPage.services.forthItem.description'),
      benefits: [
        t('mainPage.services.forthItem.benefitsFirstItem'),
        t('mainPage.services.forthItem.benefitsSecondItem'),
        t('mainPage.services.forthItem.benefitsThirdItem'),
        t('mainPage.services.forthItem.benefitsForthItem'),
      ],
    },
    {
      icon: <FaClock />,
      title: t('mainPage.services.fifthItem.title'),
      description:
      t('mainPage.services.fifthItem.description'),
      benefits: [
        t('mainPage.services.fifthItem.benefitsFirstItem'),
        t('mainPage.services.fifthItem.benefitsSecondItem'),
        t('mainPage.services.fifthItem.benefitsThirdItem'),
        t('mainPage.services.fifthItem.benefitsForthItem'),
      ],
    },
    {
      icon: <FaHandshake />,
      title: t('mainPage.services.sixthItem.title'),
      description:
      t('mainPage.services.sixthItem.description'),
      benefits: [
        t('mainPage.services.sixthItem.benefitsFirstItem'),
        t('mainPage.services.sixthItem.benefitsSecondItem'),
        t('mainPage.services.sixthItem.benefitsThirdItem'),
        t('mainPage.services.sixthItem.benefitsForthItem'),
      ],
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, services.length]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + services.length) % services.length
    );
  };

  const goToSlide = index => {
    setCurrentIndex(index);
  };

  return (
    <ServicesSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('mainPage.services.title')}
        </SectionTitle>

        <SliderContainer
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <NavigationButton
            className="prev"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </NavigationButton>

          <NavigationButton
            className="next"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </NavigationButton>

          <AnimatePresence mode="wait">
            <SliderWrapper
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ServiceCard>
                <IconWrapper
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {services[currentIndex].icon}
                </IconWrapper>

                <ServiceTitle
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {services[currentIndex].title}
                </ServiceTitle>

                <ServiceDescription
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {services[currentIndex].description}
                </ServiceDescription>

                <ServiceBenefits
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {services[currentIndex].benefits.map((benefit, idx) => (
                    <BenefitItem
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + idx * 0.1 }}
                    >
                      {benefit}
                    </BenefitItem>
                  ))}
                </ServiceBenefits>
              </ServiceCard>
            </SliderWrapper>
          </AnimatePresence>
        </SliderContainer>

        <DotsContainer>
          {services.map((_, index) => (
            <Dot
              key={index}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </DotsContainer>
      </Container>
    </ServicesSection>
  );
};

export default Services;
