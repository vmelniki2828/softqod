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

const ServicesSection = styled.section`
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

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  perspective: 1000px;
`;

const SliderWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceTitle = styled(motion.h3)`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
`;

const ServiceCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 20px;
  width: 100%;
  max-width: 800px;
  position: relative;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
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
`;

const IconWrapper = styled(motion.div)`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  display: inline-block;
`;

const ServiceDescription = styled(motion.p)`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const ServiceBenefits = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
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
  }

  &:hover {
    background: rgba(74, 144, 226, 0.1);
    transform: translateX(5px);
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

  &:hover {
    background: var(--accent-color);
    color: white;
    border-color: var(--accent-color);
  }

  &.prev {
    left: -70px;
  }

  &.next {
    right: -70px;
  }

  @media (max-width: 768px) {
    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Dot = styled(motion.button)`
  width: 1px;
  height: 1px;
  background: var(--border-color);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &.active {
    background: var(--accent-color);
    transform: scale(1.2);
  }
`;

const services = [
  {
    icon: <FaRocket />,
    title: 'Скорость и эффективность',
    description:
      'Мы понимаем, что время - это деньги. Наши решения помогут вам быстрее достичь целей и получить результат.',
    benefits: [
      'Быстрый старт проекта',
      'Оптимизированные процессы',
      'Сокращение времени на разработку',
      'Мгновенная обратная связь',
    ],
  },
  {
    icon: <FaChartLine />,
    title: 'Рост бизнеса',
    description:
      'Наши решения направлены на увеличение прибыли и расширение вашего бизнеса.',
    benefits: [
      'Увеличение конверсии',
      'Расширение клиентской базы',
      'Повышение лояльности клиентов',
      'Оптимизация затрат',
    ],
  },
  {
    icon: <FaUsers />,
    title: 'Клиентоориентированность',
    description:
      'Ваши клиенты - наш приоритет. Мы создаем решения, которые делают их счастливыми.',
    benefits: [
      'Улучшение пользовательского опыта',
      'Персонализированные решения',
      'Постоянная поддержка',
      'Быстрое решение проблем',
    ],
  },
  {
    icon: <FaShieldAlt />,
    title: 'Надежность и безопасность',
    description: 'Мы гарантируем стабильную работу и защиту ваших данных.',
    benefits: [
      'Защита от кибератак',
      'Резервное копирование данных',
      'Стабильная работа 24/7',
      'Соблюдение стандартов безопасности',
    ],
  },
  {
    icon: <FaClock />,
    title: 'Долгосрочные решения',
    description:
      'Мы создаем решения, которые будут работать и развиваться вместе с вашим бизнесом.',
    benefits: [
      'Масштабируемость решений',
      'Долгосрочная поддержка',
      'Регулярные обновления',
      'Адаптация под новые требования',
    ],
  },
  {
    icon: <FaHandshake />,
    title: 'Партнерство',
    description:
      'Мы становимся частью вашей команды и работаем на общий успех.',
    benefits: [
      'Прозрачное сотрудничество',
      'Гибкие условия работы',
      'Экспертная поддержка',
      'Совместное развитие',
    ],
  },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

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
          Ценности наших услуг
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
