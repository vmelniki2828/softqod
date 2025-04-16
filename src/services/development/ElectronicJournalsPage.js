import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaCode,
  FaCheck,
  FaTools,
  FaProjectDiagram,
  FaBook,
  FaCalendarAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaClipboardList,
  FaChartBar,
  FaTable,
  FaUserFriends,
  FaBellSlash,
  FaTasks,
  FaFileExport,
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

const ElectronicJournalsPage = () => {
  return (
    <PageContainer>
      <MainHero
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <MainTitle>Электронные журналы и системы учёта</MainTitle>
        <MainSubtitle>
          Современные решения для автоматизации образовательного процесса и учета
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
                Изучение требований и проектирование системы
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Анализ текущих процессов
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Определение функционала
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Создание технического задания
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <StepNumber>2</StepNumber>
              <StepIcon><FaCode /></StepIcon>
              <StepTitle>Разработка</StepTitle>
              <StepDescription>
                Создание и тестирование системы
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Программирование модулей
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Настройка безопасности
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Интеграция с другими системами
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
              <StepTitle>Тестирование</StepTitle>
              <StepDescription>
                Проверка функциональности и удобства
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Функциональное тестирование
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Тестирование безопасности
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Проверка удобства использования
                </StepFeature>
              </StepFeatures>
            </PathStep>

            <PathStep
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <StepNumber>4</StepNumber>
              <StepIcon><FaRocket /></StepIcon>
              <StepTitle>Внедрение</StepTitle>
              <StepDescription>
                Запуск и обучение пользователей
              </StepDescription>
              <StepFeatures>
                <StepFeature>
                  <FaCheck /> Развертывание системы
                </StepFeature>
                <StepFeature>
                  <FaCheck /> Обучение персонала
                </StepFeature>
                <StepFeature>
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
            <FaBook />
          </FeatureIcon>
          <FeatureTitle>Электронные журналы</FeatureTitle>
          <FeatureDescription>
            Автоматизация ведения журналов успеваемости и посещаемости
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FeatureIcon>
            <FaUserGraduate />
          </FeatureIcon>
          <FeatureTitle>Учет успеваемости</FeatureTitle>
          <FeatureDescription>
            Система оценки знаний и отслеживания прогресса учащихся
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FeatureIcon>
            <FaCalendarAlt />
          </FeatureIcon>
          <FeatureTitle>Расписание</FeatureTitle>
          <FeatureDescription>
            Управление расписанием занятий и мероприятиями
          </FeatureDescription>
        </FeatureCard>
      </FeaturesGrid>

      <SystemsSection>
        <SystemsTitle>Основные возможности</SystemsTitle>
        <SystemsGrid>
          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaClipboardList /></SystemIcon>
            <SystemTitle>Ведение журналов</SystemTitle>
            <SystemDescription>
              Электронное ведение журналов успеваемости и посещаемости
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaChartBar /></SystemIcon>
            <SystemTitle>Аналитика</SystemTitle>
            <SystemDescription>
              Статистика и аналитика успеваемости и посещаемости
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaTable /></SystemIcon>
            <SystemTitle>Отчетность</SystemTitle>
            <SystemDescription>
              Автоматическая генерация отчетов и ведомостей
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaUserFriends /></SystemIcon>
            <SystemTitle>Коммуникация</SystemTitle>
            <SystemDescription>
              Общение между учителями, учениками и родителями
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaBellSlash /></SystemIcon>
            <SystemTitle>Уведомления</SystemTitle>
            <SystemDescription>
              Автоматические уведомления о важных событиях
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaTasks /></SystemIcon>
            <SystemTitle>Задания</SystemTitle>
            <SystemDescription>
              Распределение и проверка домашних заданий
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaFileExport /></SystemIcon>
            <SystemTitle>Экспорт данных</SystemTitle>
            <SystemDescription>
              Выгрузка данных в различные форматы
            </SystemDescription>
          </SystemCard>

          <SystemCard
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SystemIcon><FaChalkboardTeacher /></SystemIcon>
            <SystemTitle>Портфолио</SystemTitle>
            <SystemDescription>
              Создание и ведение портфолио учащихся
            </SystemDescription>
          </SystemCard>
        </SystemsGrid>
      </SystemsSection>

      <CTAButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Начать проект
      </CTAButton>
    </PageContainer>
  );
};

export default ElectronicJournalsPage; 