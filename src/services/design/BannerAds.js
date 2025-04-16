import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
    FaArrowRight, 
    FaLightbulb, 
    FaPalette, 
    FaChartLine, 
    FaRobot,
    FaChevronLeft,
    FaChevronRight,
    FaCheck,
    FaClock,
    FaUsers,
    FaMobile,
    FaDesktop,
    FaGlobe
} from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(135deg, var(--accent-color) 0%, var(--accent-color-dark) 100%);
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
    background: url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80') center/cover;
    opacity: 0.1;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  font-weight: 800;
  position: relative;
`;

const Subtitle = styled.p`
  font-size: 1.4rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  position: relative;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--accent-color);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1.1rem;
`;

const SliderSection = styled.section`
  margin: 6rem 0;
  position: relative;
`;

const SliderTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--text-primary);
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 20px;
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
`;

const Slide = styled(motion.div)`
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
`;

const SlideTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SlideDescription = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 10;
`;

const SliderButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color);
  }
`;

const ProcessSection = styled.section`
  margin: 6rem 0;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
`;

const ProcessTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
  }
`;

const ProcessTimeline = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: var(--accent-color);
    opacity: 0.3;
  }
`;

const ProcessStep = styled.div`
  position: relative;
  width: 48%;
  padding: 2.5rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-5px);
  }

  &:nth-child(odd) {
    margin-left: auto;
    text-align: left;
    margin-top: -4rem;
  }

  &:nth-child(even) {
    margin-right: auto;
    text-align: right;
    margin-top: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: var(--accent-color);
    border-radius: 50%;
    z-index: 1;
    transform: translateY(-50%);
  }

  &:nth-child(odd)::before {
    left: -10px;
  }

  &:nth-child(even)::before {
    right: -10px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30px;
    height: 2px;
    background: var(--accent-color);
    transform: translateY(-50%);
  }

  &:nth-child(odd)::after {
    left: -30px;
  }

  &:nth-child(even)::after {
    right: -30px;
  }
`;

const ProcessIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProcessNumber = styled.div`
  font-size: 1.5rem;
  color: var(--accent-color);
  margin-bottom: 0.8rem;
  font-weight: 700;
  opacity: 0.9;
  letter-spacing: 3px;
`;

const ProcessText = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
  opacity: 0.9;
  margin-bottom: 2rem;
`;

const ProcessDetails = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const ProcessDetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  font-size: 1rem;
  color: var(--text-secondary);
  opacity: 0.9;
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-3px);
  }
`;

const ProcessDetailIcon = styled.div`
  color: var(--accent-color);
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProcessDetailText = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const CTAButton = styled(motion.button)`
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 3rem auto;
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent-color-dark);
    transform: translateY(-2px);
  }
`;

const BannerAds = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <FaLightbulb />,
      title: "Креативные решения",
      description: "Уникальные идеи для ваших рекламных баннеров, созданные с помощью ИИ. Мы используем передовые алгоритмы для генерации креативных концепций."
    },
    {
      icon: <FaPalette />,
      title: "Современный дизайн",
      description: "Стильные и привлекательные визуальные решения для любого бизнеса. Наши дизайнеры создают баннеры, которые выделяются на фоне конкурентов."
    },
    {
      icon: <FaChartLine />,
      title: "Высокая конверсия",
      description: "Баннеры, которые действительно привлекают внимание и увеличивают продажи. Мы анализируем поведение пользователей для создания максимально эффективных решений."
    },
    {
      icon: <FaRobot />,
      title: "Искусственный интеллект",
      description: "Использование передовых технологий ИИ для создания уникальных дизайнов. Наши алгоритмы помогают оптимизировать каждый элемент баннера."
    }
  ];

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Рекламный баннер для интернет-магазина",
      description: "Современный дизайн с акцентом на продукт и призыв к действию"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Баннер для социальных сетей",
      description: "Яркий и запоминающийся дизайн для привлечения внимания в ленте"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Рекламный баннер для мобильного приложения",
      description: "Адаптивный дизайн, оптимизированный для мобильных устройств"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Баннер для email-рассылки",
      description: "Профессиональный дизайн для повышения открываемости писем"
    }
  ];

  const processSteps = [
    {
      icon: <FaUsers />,
      number: "01",
      title: "Анализ целевой аудитории",
      description: "Проводим глубокий анализ вашей целевой аудитории, изучаем её предпочтения и поведение.",
      details: [
        { icon: <FaChartLine />, text: "Анализ демографии" },
        { icon: <FaUsers />, text: "Изучение поведения" },
        { icon: <FaLightbulb />, text: "Определение потребностей" }
      ]
    },
    {
      icon: <FaLightbulb />,
      number: "02",
      title: "Генерация идей",
      description: "Используем передовые алгоритмы ИИ для создания уникальных концепций.",
      details: [
        { icon: <FaRobot />, text: "Генерация вариантов" },
        { icon: <FaPalette />, text: "Подбор цветовых схем" },
        { icon: <FaCheck />, text: "Проверка концепций" }
      ]
    },
    {
      icon: <FaPalette />,
      number: "03",
      title: "Разработка дизайна",
      description: "Создаем современные и привлекательные визуальные решения.",
      details: [
        { icon: <FaDesktop />, text: "Адаптивный дизайн" },
        { icon: <FaMobile />, text: "Мобильная версия" },
        { icon: <FaGlobe />, text: "Кросс-платформенность" }
      ]
    },
    {
      icon: <FaCheck />,
      number: "04",
      title: "Тестирование и оптимизация",
      description: "Проводим A/B тестирование и анализируем эффективность.",
      details: [
        { icon: <FaChartLine />, text: "Анализ метрик" },
        { icon: <FaClock />, text: "Оптимизация скорости" },
        { icon: <FaCheck />, text: "Финальная проверка" }
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <PageContainer>
      <HeroSection>
        <Title>Рекламные Баннеры с ИИ</Title>
        <Subtitle>
          Создаем уникальные и эффективные рекламные баннеры с использованием искусственного интеллекта.
          Ваш бренд будет заметен и запомнится надолго. Мы используем передовые технологии для создания
          баннеров, которые действительно работают.
        </Subtitle>
      </HeroSection>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>

      <SliderSection>
        <SliderTitle>Наши работы</SliderTitle>
        <SliderContainer>
          <Slider style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <Slide key={index}>
                <SlideImage src={slide.image} alt={slide.title} />
                <SlideContent>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideDescription>{slide.description}</SlideDescription>
                </SlideContent>
              </Slide>
            ))}
          </Slider>
          <SliderControls>
            <SliderButton onClick={prevSlide}>
              <FaChevronLeft />
            </SliderButton>
            <SliderButton onClick={nextSlide}>
              <FaChevronRight />
            </SliderButton>
          </SliderControls>
        </SliderContainer>
      </SliderSection>

      <ProcessSection>
        <ProcessTitle>Процесс создания</ProcessTitle>
        <ProcessTimeline>
          {processSteps.map((step, index) => (
            <ProcessStep key={index}>
              <ProcessIcon>{step.icon}</ProcessIcon>
              <ProcessNumber>{step.number}</ProcessNumber>
              <FeatureTitle>{step.title}</FeatureTitle>
              <ProcessText>{step.description}</ProcessText>
              <ProcessDetails>
                {step.details.map((detail, detailIndex) => (
                  <ProcessDetailItem key={detailIndex}>
                    <ProcessDetailIcon>{detail.icon}</ProcessDetailIcon>
                    <ProcessDetailText>{detail.text}</ProcessDetailText>
                  </ProcessDetailItem>
                ))}
              </ProcessDetails>
            </ProcessStep>
          ))}
        </ProcessTimeline>
      </ProcessSection>

      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Заказать баннер
        <FaArrowRight />
      </CTAButton>
    </PageContainer>
  );
};

export default BannerAds; 