import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaRobot, 
  FaChartLine, 
  FaCogs, 
  FaDatabase,
  FaBrain,
  FaProjectDiagram,
  FaCheck,
  FaTools,
  FaClock,
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

const BenefitsSection = styled(motion.section)`
  background: linear-gradient(135deg, rgba(11, 30, 43, 0.8) 0%, rgba(6, 20, 27, 0.9) 100%);
  padding: 4rem 2rem;
  border-radius: 30px;
  margin: 4rem 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const BenefitCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const TechnologiesSection = styled(motion.section)`
  padding: 4rem 2rem;
  margin: 4rem 0;
`;

const TechnologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TechnologyCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(11, 30, 43, 0.8) 0%, rgba(6, 20, 27, 0.9) 100%);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ExamplesSection = styled(motion.section)`
  background: linear-gradient(135deg, rgba(11, 30, 43, 0.8) 0%, rgba(6, 20, 27, 0.9) 100%);
  padding: 4rem 2rem;
  border-radius: 30px;
  margin: 4rem 0;
`;

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ExampleCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 2rem;
  text-align: center;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-align: center;
  max-width: 800px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const BusinessAutomationPage = () => {
  return (
    <PageContainer>
      <MainHero
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MainTitle>Автоматизация и оптимизация бизнес-процессов</MainTitle>
        <MainSubtitle>
          Повышаем эффективность вашего бизнеса с помощью современных технологий автоматизации и оптимизации процессов
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
              <StepIcon><FaRobot /></StepIcon>
              <StepTitle>Анализ процессов</StepTitle>
              <StepDescription>
                Глубокий анализ существующих бизнес-процессов для выявления точек оптимизации
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Аудит текущих процессов
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Выявление узких мест
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Определение KPI
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
              <StepTitle>Разработка решений</StepTitle>
              <StepDescription>
                Создание индивидуальных решений для автоматизации и оптимизации
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Проектирование новых процессов
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Разработка автоматизированных систем
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Интеграция с существующими системами
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <StepNumber>3</StepNumber>
              <StepIcon><FaChartLine /></StepIcon>
              <StepTitle>Внедрение</StepTitle>
              <StepDescription>
                Поэтапное внедрение новых процессов и систем
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Обучение персонала
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Тестирование решений
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Мониторинг эффективности
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <StepNumber>4</StepNumber>
              <StepIcon><FaDatabase /></StepIcon>
              <StepTitle>Поддержка и развитие</StepTitle>
              <StepDescription>
                Постоянная поддержка и улучшение автоматизированных систем
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Техническая поддержка
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Анализ эффективности
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Масштабирование решений
                </StepFeature>
              </StepFeatures>
            </PathStep>
          </PathSteps>
        </PathContainer>
      </CreationPath>

      <BenefitsSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Преимущества автоматизации</SectionTitle>
        <SectionSubtitle>
          Внедрение автоматизации бизнес-процессов приносит значительные преимущества для вашей компании
        </SectionSubtitle>
        <BenefitsGrid>
          <BenefitCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StepIcon><FaClock /></StepIcon>
            <StepTitle>Экономия времени</StepTitle>
            <StepDescription>
              Сокращение времени на выполнение рутинных операций до 80%, что позволяет сотрудникам сосредоточиться на стратегических задачах
            </StepDescription>
          </BenefitCard>
          <BenefitCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StepIcon><FaChartLine /></StepIcon>
            <StepTitle>Повышение эффективности</StepTitle>
            <StepDescription>
              Увеличение производительности труда и снижение количества ошибок благодаря автоматизации рутинных процессов
            </StepDescription>
          </BenefitCard>
          <BenefitCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <StepIcon><FaTools /></StepIcon>
            <StepTitle>Снижение затрат</StepTitle>
            <StepDescription>
              Оптимизация расходов на персонал и ресурсы за счет автоматизации процессов и уменьшения количества ручного труда
            </StepDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      <TechnologiesSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Технологии автоматизации</SectionTitle>
        <SectionSubtitle>
          Мы используем современные технологии для создания эффективных решений
        </SectionSubtitle>
        <TechnologiesGrid>
          <TechnologyCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StepIcon><FaRobot /></StepIcon>
            <StepTitle>RPA (Robotic Process Automation)</StepTitle>
            <StepDescription>
              Автоматизация рутинных задач с помощью программных роботов
            </StepDescription>
          </TechnologyCard>
          <TechnologyCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StepIcon><FaBrain /></StepIcon>
            <StepTitle>Искусственный интеллект</StepTitle>
            <StepDescription>
              Использование машинного обучения для анализа данных и принятия решений
            </StepDescription>
          </TechnologyCard>
          <TechnologyCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <StepIcon><FaProjectDiagram /></StepIcon>
            <StepTitle>BPM системы</StepTitle>
            <StepDescription>
              Управление бизнес-процессами и их автоматизация
            </StepDescription>
          </TechnologyCard>
        </TechnologiesGrid>
      </TechnologiesSection>

      <ExamplesSection
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SectionTitle>Примеры автоматизации</SectionTitle>
        <SectionSubtitle>
          Реальные кейсы автоматизации бизнес-процессов
        </SectionSubtitle>
        <ExamplesGrid>
          <ExampleCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StepTitle>Автоматизация документооборота</StepTitle>
            <StepDescription>
              Создание системы электронного документооборота с автоматической маршрутизацией и согласованием документов
            </StepDescription>
            <StepFeatures>
              <StepFeature>
                <FaCheck /> Сокращение времени обработки документов на 70%
              </StepFeature>
              <StepFeature>
                <FaCheck /> Устранение потерь документов
              </StepFeature>
              <StepFeature>
                <FaCheck /> Автоматическое создание отчетов
              </StepFeature>
            </StepFeatures>
          </ExampleCard>
          <ExampleCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StepTitle>Автоматизация продаж</StepTitle>
            <StepDescription>
              Внедрение CRM-системы с автоматизацией процессов продаж и обслуживания клиентов
            </StepDescription>
            <StepFeatures>
              <StepFeature>
                <FaCheck /> Увеличение конверсии на 40%
              </StepFeature>
              <StepFeature>
                <FaCheck /> Автоматизация email-рассылок
              </StepFeature>
              <StepFeature>
                <FaCheck /> Интеграция с мессенджерами
              </StepFeature>
            </StepFeatures>
          </ExampleCard>
          <ExampleCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <StepTitle>Автоматизация производства</StepTitle>
            <StepDescription>
              Внедрение MES-системы для управления производственными процессами
            </StepDescription>
            <StepFeatures>
              <StepFeature>
                <FaCheck /> Снижение простоев на 30%
              </StepFeature>
              <StepFeature>
                <FaCheck /> Оптимизация загрузки оборудования
              </StepFeature>
              <StepFeature>
                <FaCheck /> Автоматический контроль качества
              </StepFeature>
            </StepFeatures>
          </ExampleCard>
        </ExamplesGrid>
      </ExamplesSection>
    </PageContainer>
  );
};

export default BusinessAutomationPage; 