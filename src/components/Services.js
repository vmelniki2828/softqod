import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaChartLine, FaRobot, FaHeadset } from 'react-icons/fa';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #333;
  
  &:hover {
    transform: translateY(-10px);
    border-color: #ffffff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ServiceDescription = styled.p`
  color: #888888;
  line-height: 1.6;
`;

const services = [
  {
    icon: <FaCode />,
    title: 'Веб-разработка',
    description: 'Создание современных и функциональных веб-сайтов с использованием передовых технологий.'
  },
  {
    icon: <FaPaintBrush />,
    title: 'UI/UX Дизайн',
    description: 'Разработка интуитивно понятных и привлекательных интерфейсов для вашего продукта.'
  },
  {
    icon: <FaChartLine />,
    title: 'Продвижение',
    description: 'Комплексное продвижение вашего бизнеса в цифровой среде.'
  },
  {
    icon: <FaRobot />,
    title: 'AI-решения',
    description: 'Интеграция искусственного интеллекта для оптимизации бизнес-процессов.'
  },
  {
    icon: <FaHeadset />,
    title: 'Поддержка',
    description: 'Комплексное сопровождение и техническая поддержка вашего проекта.'
  }
];

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Наши услуги
        </SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <IconWrapper>{service.icon}</IconWrapper>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 