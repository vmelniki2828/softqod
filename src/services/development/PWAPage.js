import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaMobile, 
  FaRocket, 
  FaCode,
  FaBrain,
  FaLock,
  FaCogs,
  FaServer,
  FaCheck,
  FaTools,
  FaProjectDiagram,
} from 'react-icons/fa';

const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--text-primary);
`;

const MainHero = styled(motion.section)`
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  margin-bottom: 4rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
    opacity: 0.1;
    z-index: 0;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: 4rem;
  color: var(--accent-color);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const MainSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 2rem;
  position: relative;
  z-index: 1;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const FloatingIcons = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: var(--accent-color);
  opacity: 0.3;
  font-size: 2rem;
`;

const CreationPath = styled(motion.div)`
  background: linear-gradient(135deg, rgba(11, 30, 43, 0.8) 0%, rgba(6, 20, 27, 0.9) 100%);
  padding: 4rem 2rem;
  border-radius: 30px;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
    opacity: 0.05;
    z-index: 0;
  }
`;

const PathContainer = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PathLine = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent-color) 0%, transparent 100%);
  transform: translateY(-50%);
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, var(--accent-color) 100%);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { opacity: 0.3; }
    50% { opacity: 1; }
    100% { opacity: 0.3; }
  }
`;

const PathSteps = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  position: relative;
  z-index: 2;
  margin-top: 4rem;
  gap: 2rem;
`;

const PathStep = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 2.5rem 2rem;
  border-radius: 20px;
  width: 23%;
  min-height: 320px;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%);
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  z-index: 3;
  box-shadow: 0 0 20px rgba(74, 144, 226, 0.5);
`;

const StepIcon = styled.div`
  font-size: 2.8rem;
  color: var(--accent-color);
  margin: 1.5rem 0;
  text-align: center;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-align: center;
  width: 100%;
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1rem;
  width: 100%;
`;

const StepFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const StepFeature = styled(motion.li)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.8rem;
  color: var(--text-secondary);
  padding: 0.6rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
  }

  svg {
    color: var(--accent-color);
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const AISection = styled.section`
  background: var(--bg-primary);
  padding: 3rem;
  border-radius: 20px;
  margin-top: 3rem;
`;

const AITitle = styled.h2`
  font-size: 2.5rem;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const AIBenefits = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const AIBenefit = styled.div`
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 15px;
  border: 1px solid var(--border-color);
`;

const InteractiveDemo = styled(motion.div)`
  background: linear-gradient(135deg, rgba(11, 30, 43, 0.8) 0%, rgba(6, 20, 27, 0.9) 100%);
  padding: 4rem 3rem;
  border-radius: 30px;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
    opacity: 0.05;
    z-index: 0;
  }
`;

const DemoTitle = styled.h3`
  font-size: 2.5rem;
  background: linear-gradient(120deg, var(--accent-color), #64B5F6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2.5rem;
  text-align: center;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, var(--accent-color), transparent);
    border-radius: 2px;
  }
`;

const DemoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const DemoText = styled.div`
  color: var(--text-secondary);
  
  h4 {
    font-size: 1.8rem;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    background: linear-gradient(120deg, #FFFFFF, #B0BEC5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: var(--text-secondary);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateX(10px);
      background: rgba(255, 255, 255, 0.1);
    }

    &::before {
      content: '→';
      color: var(--accent-color);
      font-size: 1.2rem;
    }
  }
`;

const DemoVisual = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 3rem;
  border-radius: 20px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;

  svg {
    font-size: 5rem;
    color: var(--accent-color);
    filter: drop-shadow(0 0 20px rgba(74, 144, 226, 0.5));
  }

  p {
    font-size: 1.4rem;
    color: var(--text-primary);
    text-align: center;
    margin: 0;
  }

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 0%,
      rgba(74, 144, 226, 0.1) 50%,
      transparent 100%
    );
    animation: shine 4s infinite linear;
  }

  @keyframes shine {
    0% {
      transform: translateX(-50%) translateY(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) rotate(360deg);
    }
  }
`;

const TechStack = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const TechItem = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid var(--border-color);
`;

const TechIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const CTAButton = styled(motion.button)`
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 2rem auto;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const PathTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
`;

const PWAPage = () => {
  const floatingIcons = [
    { icon: <FaCode />, x: '10%', y: '20%' },
    { icon: <FaRobot />, x: '80%', y: '30%' },
    { icon: <FaMobile />, x: '30%', y: '70%' },
    { icon: <FaRocket />, x: '70%', y: '60%' },
    { icon: <FaBrain />, x: '50%', y: '40%' },
    { icon: <FaCogs />, x: '20%', y: '50%' },
  ];

  return (
    <PageContainer>
      <MainHero>
        <FloatingIcons>
          {floatingIcons.map((icon, index) => (
            <FloatingIcon
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: [0.3, 0.5, 0.3],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{ left: icon.x, top: icon.y }}
            >
              {icon.icon}
            </FloatingIcon>
          ))}
        </FloatingIcons>
        <MainTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          PWA Разработка с ИИ
        </MainTitle>
        <MainSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Создаем прогрессивные веб-приложения нового поколения с использованием искусственного интеллекта
        </MainSubtitle>
      </MainHero>

      <CreationPath>
        <PathTitle>Путь создания PWA</PathTitle>
        <PathContainer>
          <PathLine
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          <PathSteps>
            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StepNumber>1</StepNumber>
              <StepIcon><FaProjectDiagram /></StepIcon>
              <StepTitle>Анализ и Планирование</StepTitle>
              <StepDescription>
                Глубокий анализ требований и создание оптимальной архитектуры
              </StepDescription>
              <StepFeatures>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> ИИ-анализ целевой аудитории
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Оптимизация UX/UI
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Планирование масштабирования
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StepNumber>2</StepNumber>
              <StepIcon><FaCode /></StepIcon>
              <StepTitle>Разработка</StepTitle>
              <StepDescription>
                Современные технологии и автоматизация процессов
              </StepDescription>
              <StepFeatures>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> ИИ-генерация кода
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Автоматическая оптимизация
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Интеграция сервисов
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StepNumber>3</StepNumber>
              <StepIcon><FaTools /></StepIcon>
              <StepTitle>Тестирование</StepTitle>
              <StepDescription>
                Комплексная проверка и оптимизация
              </StepDescription>
              <StepFeatures>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> ИИ-тестирование
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Анализ производительности
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Безопасность
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <StepNumber>4</StepNumber>
              <StepIcon><FaRocket /></StepIcon>
              <StepTitle>Запуск и Поддержка</StepTitle>
              <StepDescription>
                Мониторинг и постоянное улучшение
              </StepDescription>
              <StepFeatures>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Аналитика в реальном времени
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Автоматические обновления
                </StepFeature>
                <StepFeature whileHover={{ x: 5 }}>
                  <FaCheck /> Техническая поддержка
                </StepFeature>
              </StepFeatures>
            </PathStep>
          </PathSteps>
        </PathContainer>
      </CreationPath>

      <FeaturesGrid>
        <FeatureCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FeatureIcon>
            <FaRobot />
          </FeatureIcon>
          <FeatureTitle>ИИ-Оптимизация</FeatureTitle>
          <FeatureDescription>
            Автоматическая оптимизация производительности и пользовательского опыта с помощью ИИ
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FeatureIcon>
            <FaMobile />
          </FeatureIcon>
          <FeatureTitle>Адаптивный Дизайн</FeatureTitle>
          <FeatureDescription>
            ИИ-анализ поведения пользователей для создания идеального адаптивного интерфейса
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FeatureIcon>
            <FaRocket />
          </FeatureIcon>
          <FeatureTitle>Быстрая Загрузка</FeatureTitle>
          <FeatureDescription>
            Умное кэширование и предзагрузка контента с использованием ИИ-алгоритмов
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>

      <InteractiveDemo>
        <DemoTitle>Демонстрация ИИ-оптимизации</DemoTitle>
        <DemoContent>
          <DemoText>
            <h4>Как работает ИИ в PWA?</h4>
            <p>
              Наш искусственный интеллект непрерывно анализирует поведение пользователей 
              и автоматически оптимизирует каждый аспект приложения для максимальной 
              производительности и удобства использования.
            </p>
            <ul>
              <li>Интеллектуальная загрузка контента</li>
              <li>Предиктивное кэширование данных</li>
              <li>Адаптивная оптимизация интерфейса</li>
              <li>Анализ производительности в реальном времени</li>
            </ul>
          </DemoText>
          <DemoVisual
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <FaBrain />
            <p>ИИ в действии</p>
          </DemoVisual>
        </DemoContent>
      </InteractiveDemo>

      <TechStack>
        <TechItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TechIcon><FaCode /></TechIcon>
          <h4>React</h4>
          <p>Современный UI фреймворк</p>
        </TechItem>
        <TechItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TechIcon><FaServer /></TechIcon>
          <h4>Node.js</h4>
          <p>Мощный бэкенд</p>
        </TechItem>
        <TechItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TechIcon><FaLock /></TechIcon>
          <h4>Безопасность</h4>
          <p>Защита данных</p>
        </TechItem>
        <TechItem
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TechIcon><FaCogs /></TechIcon>
          <h4>ИИ-Интеграция</h4>
          <p>Умные алгоритмы</p>
        </TechItem>
      </TechStack>

      <AISection>
        <AITitle>Преимущества ИИ в PWA</AITitle>
        <AIBenefits>
          <AIBenefit>
            <h3>Умная Аналитика</h3>
            <p>ИИ анализирует поведение пользователей и предлагает улучшения в реальном времени</p>
          </AIBenefit>
          <AIBenefit>
            <h3>Персонализация</h3>
            <p>Адаптивный контент и интерфейс под каждого пользователя</p>
          </AIBenefit>
          <AIBenefit>
            <h3>Безопасность</h3>
            <p>ИИ-системы защиты от атак и утечек данных</p>
          </AIBenefit>
        </AIBenefits>
      </AISection>

      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Начать разработку PWA с ИИ
      </CTAButton>
    </PageContainer>
  );
};

export default PWAPage; 