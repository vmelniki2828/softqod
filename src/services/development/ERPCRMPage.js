import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaDatabase, 
  FaChartLine, 
  FaCogs,
  FaProjectDiagram,
  FaCheck,
  FaTools,
  FaExchangeAlt,
  FaChartBar,
  FaUserCog,
  FaFileInvoice,
  FaWarehouse,
  FaShoppingCart,
  FaMoneyBillWave,
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
    background: url('https://images.unsplash.com/photo-1551289061-6097d62404d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
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
    background: url('https://images.unsplash.com/photo-1551289061-6097d62404d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') center/cover;
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

const SystemsSection = styled.section`
  background: var(--bg-primary);
  padding: 3rem;
  border-radius: 20px;
  margin-top: 3rem;
`;

const SystemsTitle = styled.h2`
  font-size: 2.5rem;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 2rem;
`;

const SystemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SystemCard = styled(motion.div)`
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

const SystemIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
`;

const SystemTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const SystemDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
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

const ERPCRMPage = () => {
  return (
    <PageContainer>
      <MainHero
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MainTitle>ERP и CRM системы</MainTitle>
        <MainSubtitle>
          Комплексные решения для управления бизнесом и взаимоотношениями с клиентами
        </MainSubtitle>
      </MainHero>

      <CreationPath>
        <PathContainer>
          <PathLine
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <PathSteps>
            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <StepNumber>1</StepNumber>
              <StepIcon><FaProjectDiagram /></StepIcon>
              <StepTitle>Анализ и Планирование</StepTitle>
              <StepDescription>
                Глубокий анализ бизнес-процессов и разработка стратегии внедрения
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Аудит текущих процессов
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Определение требований
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Разработка концепции
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <StepNumber>2</StepNumber>
              <StepIcon><FaCogs /></StepIcon>
              <StepTitle>Разработка</StepTitle>
              <StepDescription>
                Создание и настройка системы под ваши бизнес-процессы
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Настройка модулей
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Интеграция с существующими системами
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Разработка кастомных решений
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <StepNumber>3</StepNumber>
              <StepIcon><FaTools /></StepIcon>
              <StepTitle>Внедрение</StepTitle>
              <StepDescription>
                Поэтапное внедрение и обучение персонала
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Обучение сотрудников
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Тестирование системы
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Запуск в эксплуатацию
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <StepNumber>4</StepNumber>
              <StepIcon><FaChartLine /></StepIcon>
              <StepTitle>Поддержка</StepTitle>
              <StepDescription>
                Постоянная поддержка и развитие системы
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Техническая поддержка
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Обновление системы
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Анализ эффективности
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
            <FaDatabase />
          </FeatureIcon>
          <FeatureTitle>Централизованное управление данными</FeatureTitle>
          <FeatureDescription>
            Единая база данных для всех подразделений компании, обеспечивающая согласованность и актуальность информации
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FeatureIcon>
            <FaChartBar />
          </FeatureIcon>
          <FeatureTitle>Аналитика и отчетность</FeatureTitle>
          <FeatureDescription>
            Глубокая аналитика и автоматическая генерация отчетов для принятия управленческих решений
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FeatureIcon>
            <FaExchangeAlt />
          </FeatureIcon>
          <FeatureTitle>Интеграция с другими системами</FeatureTitle>
          <FeatureDescription>
            Возможность интеграции с существующими системами и внешними сервисами
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>

      <SystemsSection>
        <SystemsTitle>Основные модули систем</SystemsTitle>
        <SystemsGrid>
          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaUserCog /></SystemIcon>
            <SystemTitle>Управление персоналом</SystemTitle>
            <SystemDescription>
              Учет рабочего времени, кадровый учет, расчет заработной платы
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaFileInvoice /></SystemIcon>
            <SystemTitle>Финансы и бухгалтерия</SystemTitle>
            <SystemDescription>
              Управление финансами, учет, планирование и контроль бюджета
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaWarehouse /></SystemIcon>
            <SystemTitle>Управление запасами</SystemTitle>
            <SystemDescription>
              Контроль и оптимизация складских запасов, логистика
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaShoppingCart /></SystemIcon>
            <SystemTitle>Продажи и маркетинг</SystemTitle>
            <SystemDescription>
              Управление продажами, маркетинговыми кампаниями и клиентской базой
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaMoneyBillWave /></SystemIcon>
            <SystemTitle>Управление проектами</SystemTitle>
            <SystemDescription>
              Планирование, контроль и управление проектами компании
            </SystemDescription>
          </SystemCard>
        </SystemsGrid>
      </SystemsSection>

      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Начать внедрение ERP/CRM системы
      </CTAButton>
    </PageContainer>
  );
};

export default ERPCRMPage; 