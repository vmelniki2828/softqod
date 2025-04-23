import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
    FaArrowRight, 
    FaChartLine, 
    FaRobot,
    FaPalette,
    FaBullseye,
    FaBrain,
    FaChevronLeft,
    FaChevronRight,
    FaRegLightbulb,
    FaRegChartBar,
} from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const HeroSection = styled(motion.section)`
  text-align: center;
  padding: 12rem 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(var(--accent-color-rgb), 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(var(--accent-color-rgb), 0.15) 0%, transparent 50%),
    linear-gradient(135deg, 
      rgba(var(--accent-color-rgb), 0.1) 0%,
      rgba(var(--accent-color-rgb), 0.05) 100%
    );
  border-radius: 30px;
  margin-bottom: 6rem;
  position: relative;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(var(--accent-color-rgb), 0.2) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(var(--accent-color-rgb), 0.2) 0%, transparent 50%);
    z-index: 0;
    animation: pulse 8s infinite alternate;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: shine 8s infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.5; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.05); }
    100% { opacity: 1; transform: scale(1); }
  }

  @keyframes shine {
    0% { transform: translateX(-100%); }
    50% { transform: translateX(100%); }
    100% { transform: translateX(100%); }
  }
`;

const Title = styled(motion.h1)`
  font-size: 5rem;
  margin-bottom: 2rem;
  font-weight: 800;
  position: relative;
  z-index: 1;
  background: linear-gradient(45deg, 
    var(--text-primary) 0%,
    var(--accent-color) 50%,
    var(--text-primary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  letter-spacing: -2px;
  line-height: 1.1;
  transform: skew(-5deg);
  display: inline-block;
  padding: 0 2rem;
  border-left: 6px solid var(--accent-color);
  border-right: 6px solid var(--accent-color);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: rgba(var(--accent-color-rgb), 0.1);
    z-index: -1;
    transform: skew(5deg);
    border-radius: 10px;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  position: relative;
  z-index: 1;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 6rem 0;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(20px);
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, 
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1);

    &::before {
      transform: translateX(100%);
    }

    &::after {
      opacity: 1;
    }
  }
`;

const FeatureIcon = styled.div`
  font-size: 3.5rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, 
      rgba(var(--accent-color-rgb), 0.2) 0%,
      transparent 70%
    );
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(circle, 
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.1) rotate(10deg);
    box-shadow: 
      0 0 30px rgba(var(--accent-color-rgb), 0.3),
      inset 0 0 30px rgba(var(--accent-color-rgb), 0.1);

    &::before {
      transform: scale(1.5);
    }

    &::after {
      opacity: 1;
    }
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-weight: 700;
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const SliderSection = styled.section`
  margin: 8rem 0;
  position: relative;
  transform: skewY(-3deg);
  background: linear-gradient(135deg, 
    rgba(var(--accent-color-rgb), 0.05) 0%,
    rgba(var(--accent-color-rgb), 0.1) 100%
  );
  padding: 6rem 0;
  clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  & > * {
    transform: skewY(3deg);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: shine 8s infinite;
  }
`;

const SliderTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    box-shadow: 0 0 20px var(--accent-color);
  }
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const Slider = styled.div`
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
`;

const Slide = styled(motion.div)`
  min-width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.2),
    inset 0 0 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(0,0,0,0.4) 0%,
      transparent 100%
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, 
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 70%
    );
    z-index: 2;
  }
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
  padding: 3rem;
  background: linear-gradient(to top, 
    rgba(0,0,0,0.9) 0%,
    rgba(0,0,0,0.7) 50%,
    transparent 100%
  );
  color: white;
`;

const SlideTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

const SlideDescription = styled.p`
  font-size: 1.4rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  display: flex;
  gap: 1.5rem;
  z-index: 10;
`;

const SliderButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: var(--accent-color);
    transform: scale(1.1);
  }
`;

const ProcessSection = styled.section`
  margin: 8rem 0;
  padding: 8rem 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(var(--accent-color-rgb), 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(var(--accent-color-rgb), 0.1) 0%, transparent 50%),
    linear-gradient(135deg, 
      rgba(var(--accent-color-rgb), 0.05) 0%,
      rgba(var(--accent-color-rgb), 0.02) 100%
    );
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  transform: skewY(3deg);
  clip-path: polygon(0 0, 100% 5%, 100% 100%, 0 95%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  & > * {
    transform: skewY(-3deg);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      transparent 0%,
      rgba(255, 255, 255, 0.05) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: shine 8s infinite;
  }
`;

const ProcessTitle = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    box-shadow: 0 0 20px var(--accent-color);
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ProcessStep = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  perspective: 1000px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.05) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.03);
    transform: translateY(-10px) rotateX(5deg);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.1);

    &::before {
      transform: translateX(100%);
    }
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
    transform: scale(1.1) rotate(10deg);
    box-shadow: 
      0 0 30px rgba(var(--accent-color-rgb), 0.3),
      inset 0 0 30px rgba(var(--accent-color-rgb), 0.1);
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
  margin-bottom: 1.5rem;
`;

const CTAButton = styled(motion.button)`
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 1.8rem 3.5rem;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 4rem auto;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
  position: relative;
  overflow: hidden;
  z-index: 1;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
      transparent 0%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: radial-gradient(circle at 50% 50%, 
      rgba(var(--accent-color-rgb), 0.2) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -2;
  }

  &:hover {
    background: var(--accent-color-dark);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.4);

    &::before {
      transform: translateX(100%);
    }

    &::after {
      opacity: 1;
    }
  }
`;

const AIBannerMarketing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <FaBrain />,
      title: "Искусственный интеллект",
      description: "Используем передовые алгоритмы ИИ для анализа поведения пользователей и создания персонализированных баннеров, которые максимально эффективно привлекают внимание целевой аудитории."
    },
    {
      icon: <FaChartLine />,
      title: "Аналитика и оптимизация",
      description: "Постоянный мониторинг эффективности баннеров с помощью AI-аналитики. Автоматическая оптимизация контента и дизайна для достижения максимальной конверсии."
    },
    {
      icon: <FaPalette />,
      title: "Креативный дизайн",
      description: "Создаем уникальные и запоминающиеся баннеры с помощью генеративного ИИ. Каждый дизайн тщательно проработан и адаптирован под специфику вашего бренда."
    },
    {
      icon: <FaBullseye />,
      title: "Точное таргетирование",
      description: "Используем AI для точного определения целевой аудитории и создания персонализированных баннеров, которые резонируют с интересами и потребностями пользователей."
    }
  ];

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Адаптивные баннеры",
      description: "Современные решения, которые идеально отображаются на любых устройствах и платформах"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Интерактивные элементы",
      description: "Баннеры с интерактивными элементами, повышающими вовлеченность пользователей"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Динамический контент",
      description: "Баннеры, которые автоматически адаптируются под интересы и поведение пользователей"
    }
  ];

  const processSteps = [
    {
      icon: <FaRegLightbulb />,
      number: "01",
      title: "Анализ и стратегия",
      description: "Проводим глубокий анализ вашего бренда, целевой аудитории и конкурентов. Разрабатываем стратегию баннерной рекламы с использованием AI-аналитики."
    },
    {
      icon: <FaPalette />,
      number: "02",
      title: "Дизайн и креатив",
      description: "Создаем уникальные дизайны баннеров с помощью генеративного ИИ. Каждый элемент тщательно проработан для максимальной эффективности."
    },
    {
      icon: <FaRobot />,
      number: "03",
      title: "AI-оптимизация",
      description: "Используем искусственный интеллект для автоматической оптимизации баннеров. Анализируем поведение пользователей и адаптируем контент."
    },
    {
      icon: <FaRegChartBar />,
      number: "04",
      title: "Запуск и аналитика",
      description: "Запускаем кампанию и постоянно мониторим эффективность. Используем AI для анализа данных и автоматической корректировки стратегии."
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
      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Баннерная реклама с ИИ
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Создаем умные баннеры, которые привлекают внимание и увеличивают конверсию.
          Используем искусственный интеллект для анализа поведения пользователей
          и создания персонализированного контента.
        </Subtitle>
      </HeroSection>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
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
        <ProcessGrid>
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProcessIcon>{step.icon}</ProcessIcon>
              <ProcessNumber>{step.number}</ProcessNumber>
              <FeatureTitle>{step.title}</FeatureTitle>
              <ProcessText>{step.description}</ProcessText>
            </ProcessStep>
          ))}
        </ProcessGrid>
      </ProcessSection>

      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Заказать баннерную рекламу
        <FaArrowRight />
      </CTAButton>
    </PageContainer>
  );
};

export default AIBannerMarketing; 