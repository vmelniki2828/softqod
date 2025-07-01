import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../components/Modal';
import {
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaPaintBrush,
  FaTabletAlt,
  FaLayerGroup,
  FaSearch,
  FaChartLine,
  FaClock,
  FaUserFriends,
  FaMouse,
  FaRegEye,
  FaChartBar,
  FaTasks,
  FaSitemap,
  FaPalette,
  FaCheck,
  FaUser,
  FaPlus
} from 'react-icons/fa';

// Page container
const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Hero section
const HeroSection = styled.section`
  text-align: center;
  padding: 6rem 0;
  background: linear-gradient(
    125deg,
    var(--accent-color) 0%,
    var(--accent-color-dark) 100%
  );
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
    background: radial-gradient(
        circle at 20% 80%,
        rgba(255, 255, 255, 0.1) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(255, 255, 255, 0.08) 0%,
        transparent 40%
      );
    z-index: 0;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 0 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 992px) {
    text-align: center;
    align-items: center;
    order: 2;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  span {
    position: relative;
    display: inline-block;
    color: var(--accent-color-light);
    -webkit-text-fill-color: currentColor;
    text-fill-color: currentColor;
    margin: 0 0.2rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--accent-color-light);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.7;
  margin-bottom: 2.3rem;
  opacity: 0.9;
  max-width: 500px;

  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(motion.button)`
  background: var(--accent-color);
  color: white;
  border: none;
  padding: 0.9rem 1.9rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    background: #ff7b00;
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(255, 123, 0, 0.4);
  }

  svg {
    font-size: 1.2rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const HeroFeatures = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeroFeatureIcon = styled.div`
  color: var(--accent-color-light);
  font-size: 1.2rem;
  display: flex;
`;

const FeatureText = styled.p`
  font-size: 1rem;
  font-weight: 500;
`;

// Animation effects for UX/UI Design preview
const uiElementFloat = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const breathe = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Animations for FAQ
const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const faqPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const shimmerEffect = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

// UX/UI Design preview components
const UxUiPreview = styled(motion.div)`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;

  @media (max-width: 992px) {
    order: 1;
    height: 350px;
  }
`;

const UxUiGlow = styled(motion.div)`
  position: absolute;
  width: 150%;
  height: 150%;
  top: -25%;
  left: -25%;
  background: radial-gradient(
    circle at center,
    rgba(var(--accent-color-rgb), 0.5) 0%,
    transparent 70%
  );
  filter: blur(60px);
  opacity: 0.3;
  z-index: -1;
`;

const UxUiContainer = styled(motion.div)`
  position: relative;
  width: 320px;
  height: 380px;
  transform-style: preserve-3d;
  z-index: 2;
`;

const UxUiElement = styled(motion.div)`
  position: absolute;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
  border-radius: 16px;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const UxUiPhone = styled(UxUiElement)`
  width: 70px;
  height: 150px;
  top: 50px;
  left: 30px;
  z-index: 1;
  animation: ${uiElementFloat} 6s infinite ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 3px;
    background: #333;
    border-radius: 3px;
  }
`;

const UxUiTablet = styled(UxUiElement)`
  width: 140px;
  height: 180px;
  top: 20px;
  right: 40px;
  z-index: 2;
  animation: ${uiElementFloat} 8s infinite ease-in-out reverse;

  &::before {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: #333;
    border-radius: 3px;
  }
`;

const UxUiLaptop = styled(UxUiElement)`
  width: 220px;
  height: 140px;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: ${uiElementFloat} 7s infinite ease-in-out;

  &::before {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 100%;
    height: 25px;
    background: #d0d0d0;
    border-radius: 0 0 8px 8px;
    transform: perspective(300px) rotateX(30deg);
    transform-origin: top;
  }
`;

const ScreenContent = styled.div`
  width: 100%;
  height: 100%;
  background: #21252b;
  padding: 8px;
  display: flex;
  flex-direction: column;
`;

const WireframeHeader = styled.div`
  height: 16px;
  margin-bottom: 8px;
  display: flex;
  gap: 8px;
  align-items: center;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--accent-color);
  }

  .bar {
    height: 5px;
    flex-grow: 1;
    background: rgba(var(--accent-color-rgb), 0.3);
    border-radius: 3px;
  }
`;

const WireframeContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  .element {
    height: 8px;
    background: rgba(var(--accent-color-rgb), 0.2);
    border-radius: 4px;
    animation: ${breathe} 3s infinite ease-in-out;
  }

  .wide {
    width: 100%;
  }

  .medium {
    width: 70%;
  }

  .small {
    width: 40%;
  }
`;

const DesignElement = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  z-index: 4;
`;

const ColorPalette = styled(DesignElement)`
  width: 80px;
  height: 35px;
  top: 0;
  right: 20px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  animation: ${uiElementFloat} 5s infinite ease-in-out;

  .color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  .color-1 {
    background: var(--accent-color);
  }
  .color-2 {
    background: #5e60ce;
  }
  .color-3 {
    background: #64dfdf;
  }
`;

const UxWidget = styled(DesignElement)`
  width: 70px;
  height: 70px;
  bottom: 10px;
  right: 10px;
  flex-direction: column;
  gap: 5px;
  animation: ${uiElementFloat} 6s infinite ease-in-out reverse;

  .icon {
    color: var(--accent-color);
    font-size: 24px;
  }

  .label {
    font-size: 10px;
    color: #333;
    font-weight: bold;
  }
`;

const Cursor = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  z-index: 10;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5px;
    height: 5px;
    background: var(--accent-color);
    border-radius: 50%;
  }
`;

// Main component
const UxUiDesign = () => {
  // FAQ state
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // FAQ data
  const faqData = [
    {
      question: '1. У чому різниця між UX і UI дизайном?',
      answer: 'UX (User Experience) відповідає за логіку, структуру і зручність використання інтерфейсу. UI (User Interface) — за візуальне оформлення: кольори, шрифти, стилі, кнопки. Обидва напрями працюють разом для досягнення ідеального користувацького досвіду.'
    },
    {
      question: '2. Чи обов\'язково робити UX-дослідження?',
      answer: 'Так. Без аналізу поведінки користувачів і цілей проєкту дизайн може вийти естетичним, але неефективним. UX-дослідження — основа функціональності.'
    },
    {
      question: '3. Скільки триває розробка UX/UI дизайну?',
      answer: 'У середньому від 2 до 6 тижнів, залежно від обсягу проєкту. Якщо потрібно швидше — розглядаємо варіант поетапної роботи або прискореного запуску MVP.'
    },
    {
      question: '4. Чи адаптуєте ви дизайн під мобільні пристрої?',
      answer: 'Так, мобільна адаптація — стандартна частина кожного проєкту. Ми створюємо responsive-дизайн для усіх ключових типів пристроїв.'
    },
    {
      question: '5. Ви працюєте з готовим сайтом чи тільки з нуля?',
      answer: 'Можемо провести UX-аудит вже існуючого ресурсу, запропонувати редизайн або працювати з чистого аркуша. Усе залежить від ваших цілей.'
    },
    {
      question: '6. Який результат я отримаю після завершення проєкту?',
      answer: 'Ви отримаєте готові дизайн-макети у Figma (або іншому зручному форматі), гайдлайн для розробників і за потреби — консультацію під час впровадження.'
    },
    {
      question: '7. Що потрібно, щоб розпочати співпрацю?',
      answer: 'Надішліть короткий опис вашого проєкту або зв\'яжіться з нами для брифінгу. Ми уточнимо задачі, запропонуємо підхід і розрахуємо вартість.'
    }
  ];

  // Function to toggle FAQ
  const toggleFaq = index => {
    setExpandedFaqs(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <PageContainer>
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              UX/UI дизайн для <span>бізнесу</span> — створюємо зручні та
              ефективні цифрові інтерфейси
            </HeroTitle>

            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              UX/UI дизайн — це не просто естетичне оформлення, а стратегічний
              інструмент, який перетворює відвідувачів на клієнтів. Ми створюємо
              інтерфейси, які підвищують конверсію, зручність користування та
              лояльність клієнтів.
            </HeroDescription>

            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={openModal}
              >
                Замовити UX/UI дизайн <FaArrowRight />
              </PrimaryButton>
            </HeroButtons>

            <HeroFeatures
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FeatureItem>
                <HeroFeatureIcon>
                  <FaRegEye />
                </HeroFeatureIcon>
                <FeatureText>Інтуїтивність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaUsers />
                </HeroFeatureIcon>
                <FeatureText>Орієнтація на користувача</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaChartLine />
                </HeroFeatureIcon>
                <FeatureText>Ефективність</FeatureText>
              </FeatureItem>
            </HeroFeatures>
          </HeroContent>

          <UxUiPreview
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <UxUiGlow
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.8, 1.1, 0.8],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <UxUiContainer
              animate={{
                y: [0, -15, 0],
                rotateY: [5, -5, 5],
                rotateX: [5, 2, 5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <UxUiPhone>
                <ScreenContent>
                  <WireframeHeader>
                    <div className="dot"></div>
                    <div className="bar"></div>
                  </WireframeHeader>
                  <WireframeContent>
                    <div className="element wide"></div>
                    <div className="element medium"></div>
                    <div className="element small"></div>
                    <div className="element wide"></div>
                  </WireframeContent>
                </ScreenContent>
              </UxUiPhone>

              <UxUiTablet>
                <ScreenContent>
                  <WireframeHeader>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="bar"></div>
                  </WireframeHeader>
                  <WireframeContent>
                    <div className="element wide"></div>
                    <div className="element medium"></div>
                    <div className="element wide"></div>
                    <div className="element small"></div>
                  </WireframeContent>
                </ScreenContent>
              </UxUiTablet>

              <UxUiLaptop>
                <ScreenContent>
                  <WireframeHeader>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="bar"></div>
                  </WireframeHeader>
                  <WireframeContent>
                    <div className="element wide"></div>
                    <div className="element medium"></div>
                    <div className="element small"></div>
                    <div className="element wide"></div>
                    <div className="element medium"></div>
                  </WireframeContent>
                </ScreenContent>
              </UxUiLaptop>

              <ColorPalette>
                <div className="color color-1"></div>
                <div className="color color-2"></div>
                <div className="color color-3"></div>
              </ColorPalette>

              <UxWidget>
                <div className="icon">
                  <FaMouse />
                </div>
                <div className="label">UX/UI</div>
              </UxWidget>

              <Cursor
                animate={{
                  x: [50, 150, 200, 100, 50],
                  y: [100, 200, 150, 50, 100],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </UxUiContainer>
          </UxUiPreview>
        </HeroContainer>
      </HeroSection>

      {/* Philosophy Section */}
      <PhilosophySection>
        <PhilosophyContainer>
          <PhilosophyTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            Продуманий дизайн, який працює на результат
          </PhilosophyTitle>

          <PhilosophyContent>
            <DesignProcessContainer
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <ProcessPhase>
                <PhaseIndicator className="active">
                  <PhaseIcon>
                    <FaSearch />
                  </PhaseIcon>
                  <PhaseNumber>01</PhaseNumber>
                </PhaseIndicator>
                <PhaseLine />
                <PhaseContent>
                  <PhaseTitle>Дослідження</PhaseTitle>
                  <PhaseDescription>
                    Аналіз потреб користувачів, конкурентів та бізнес-вимог.
                    Виявлення проблем та можливостей для покращення взаємодії.
                  </PhaseDescription>
                </PhaseContent>
              </ProcessPhase>

              <ProcessPhase>
                <PhaseIndicator>
                  <PhaseIcon>
                    <FaClock />
                  </PhaseIcon>
                  <PhaseNumber>02</PhaseNumber>
                </PhaseIndicator>
                <PhaseLine />
                <PhaseContent>
                  <PhaseTitle>Проектування</PhaseTitle>
                  <PhaseDescription>
                    Створення інформаційної архітектури, користувацьких
                    сценаріїв та прототипів різної деталізації.
                  </PhaseDescription>
                </PhaseContent>
              </ProcessPhase>

              <ProcessPhase>
                <PhaseIndicator>
                  <PhaseIcon>
                    <FaPaintBrush />
                  </PhaseIcon>
                  <PhaseNumber>03</PhaseNumber>
                </PhaseIndicator>
                <PhaseLine />
                <PhaseContent>
                  <PhaseTitle>Дизайн</PhaseTitle>
                  <PhaseDescription>
                    Розробка візуального стилю, UI компонентів та детальне
                    опрацювання всіх екранів з увагою до деталей.
                  </PhaseDescription>
                </PhaseContent>
              </ProcessPhase>

              <ProcessPhase>
                <PhaseIndicator>
                  <PhaseIcon>
                    <FaUserFriends />
                  </PhaseIcon>
                  <PhaseNumber>04</PhaseNumber>
                </PhaseIndicator>
                <PhaseLine className="last" />
                <PhaseContent>
                  <PhaseTitle>Тестування</PhaseTitle>
                  <PhaseDescription>
                    Юзабіліті-тестування, аналіз поведінкових метрик та
                    ітеративне вдосконалення на основі реальних даних.
                  </PhaseDescription>
                </PhaseContent>
              </ProcessPhase>
            </DesignProcessContainer>

            <PhilosophyTextContainer
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <PhilosophyTagline>
                <TaglineLine />
                <TaglineText>Наш підхід</TaglineText>
              </PhilosophyTagline>

              <PhilosophyParagraph>
                Наша команда{' '}
                <HighlightText>
                  створює не просто гарні інтерфейси
                </HighlightText>
                , а цілісні екосистеми цифрової взаємодії, які враховують
                психологію користувачів, бізнес-цілі та технічні можливості.
              </PhilosophyParagraph>

              <PhilosophyParagraph>
                Ми використовуємо{' '}
                <HighlightText>data-driven підхід</HighlightText>, збираючи та
                аналізуючи дані на кожному етапі дизайн-процесу. Це дозволяє
                приймати обґрунтовані рішення та створювати інтерфейси, які не
                тільки естетично привабливі, але й максимально ефективні.
              </PhilosophyParagraph>

              <AdvantagesList>
                <AdvantageItem>
                  <AdvantageIcon>
                    <FaRegEye />
                  </AdvantageIcon>
                  <AdvantageText>
                    Підвищення конверсії і залученості
                  </AdvantageText>
                </AdvantageItem>

                <AdvantageItem>
                  <AdvantageIcon>
                    <FaChartLine />
                  </AdvantageIcon>
                  <AdvantageText>Зниження відтоку користувачів</AdvantageText>
                </AdvantageItem>

                <AdvantageItem>
                  <AdvantageIcon>
                    <FaRocket />
                  </AdvantageIcon>
                  <AdvantageText>
                    Прискорення досягнення бізнес-цілей
                  </AdvantageText>
                </AdvantageItem>
              </AdvantagesList>

              <PhilosophyNote>
                <NoteIcon>
                  <FaLightbulb />
                </NoteIcon>
                <NoteText>
                  Результат — <b>цифровий продукт</b>, який інтуїтивно
                  зрозумілий, естетично привабливий, технічно досконалий і,
                  головне, ефективно вирішує бізнес-завдання.
                </NoteText>
              </PhilosophyNote>
            </PhilosophyTextContainer>
          </PhilosophyContent>

          <PhilosophyGraphic>
            <GraphicCircle className="circle1" />
            <GraphicCircle className="circle2" />
            <GraphicCircle className="circle3" />
            <GraphicDot className="dot1" />
            <GraphicDot className="dot2" />
            <GraphicDot className="dot3" />
            <GraphicDot className="dot4" />
            <GraphicLine className="line1" />
            <GraphicLine className="line2" />
            <GraphicLine className="line3" />
          </PhilosophyGraphic>
        </PhilosophyContainer>
      </PhilosophySection>

      {/* Approach Section */}
      <ApproachSection />
      
      {/* Business Benefits Section */}
      <BusinessBenefitsSection>
        <BusinessBenefitsContainer>
          <BenefitsHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <BenefitsHeadingGlow />
            <BenefitsTitle>Що дає UX/UI дизайн для вашого бізнесу</BenefitsTitle>
            <BenefitsSubtitle>
              Замовляючи UX/UI дизайн у нас, ви отримуєте не просто красиву картинку — 
              а повноцінний інструмент для зростання бізнесу.
            </BenefitsSubtitle>
          </BenefitsHeading>
          
          <BenefitsCardsContainer>
            <BenefitsRow>
              <BenefitCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <BenefitCardInner>
                  <BenefitIconWrapper className="intuitive">
                    <BenefitIcon>
                      <FaUserFriends />
                    </BenefitIcon>
                  </BenefitIconWrapper>
                  <BenefitCardContent>
                    <BenefitCardTitle>Зрозумілий інтерфейс для користувачів</BenefitCardTitle>
                    <BenefitCardText>Мінімум зайвого — максимум зручності. Кожен елемент має логіку та сенс.</BenefitCardText>
                  </BenefitCardContent>
                  <BenefitCardNumber>01</BenefitCardNumber>
                  <BenefitCardGlow className="glow-1" />
                </BenefitCardInner>
              </BenefitCard>
              
              <BenefitCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <BenefitCardInner>
                  <BenefitIconWrapper className="adaptive">
                    <BenefitIcon>
                      <FaTabletAlt />
                    </BenefitIcon>
                  </BenefitIconWrapper>
                  <BenefitCardContent>
                    <BenefitCardTitle>Адаптивність і кросбраузерність</BenefitCardTitle>
                    <BenefitCardText>Інтерфейс коректно працює на смартфонах, планшетах і будь-яких розширеннях екрана.</BenefitCardText>
                  </BenefitCardContent>
                  <BenefitCardNumber>02</BenefitCardNumber>
                  <BenefitCardGlow className="glow-2" />
                </BenefitCardInner>
              </BenefitCard>
              
              <BenefitCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <BenefitCardInner>
                  <BenefitIconWrapper className="conversion">
                    <BenefitIcon>
                      <FaChartLine />
                    </BenefitIcon>
                  </BenefitIconWrapper>
                  <BenefitCardContent>
                    <BenefitCardTitle>Підвищення конверсії</BenefitCardTitle>
                    <BenefitCardText>Інтуїтивна навігація та грамотна UX-структура сприяють досягненню цільових дій.</BenefitCardText>
                  </BenefitCardContent>
                  <BenefitCardNumber>03</BenefitCardNumber>
                  <BenefitCardGlow className="glow-3" />
                </BenefitCardInner>
              </BenefitCard>
            </BenefitsRow>
            
            <BenefitsRow className="center-row">
              <BenefitCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <BenefitCardInner>
                  <BenefitIconWrapper className="style">
                    <BenefitIcon>
                      <FaPaintBrush />
                    </BenefitIcon>
                  </BenefitIconWrapper>
                  <BenefitCardContent>
                    <BenefitCardTitle>Унікальний візуальний стиль</BenefitCardTitle>
                    <BenefitCardText>Дизайн, що відображає характер вашого бренду та виділяє вас на фоні конкурентів.</BenefitCardText>
                  </BenefitCardContent>
                  <BenefitCardNumber>04</BenefitCardNumber>
                  <BenefitCardGlow className="glow-4" />
                </BenefitCardInner>
              </BenefitCard>
              
              <BenefitCard 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <BenefitCardInner>
                  <BenefitIconWrapper className="system">
                    <BenefitIcon>
                      <FaLayerGroup />
                    </BenefitIcon>
                  </BenefitIconWrapper>
                  <BenefitCardContent>
                    <BenefitCardTitle>Дизайн-система та гайдлайни</BenefitCardTitle>
                    <BenefitCardText>Повна документація, що спрощує подальшу розробку, масштабування і підтримку.</BenefitCardText>
                  </BenefitCardContent>
                  <BenefitCardNumber>05</BenefitCardNumber>
                  <BenefitCardGlow className="glow-5" />
                </BenefitCardInner>
              </BenefitCard>
            </BenefitsRow>
          </BenefitsCardsContainer>
          
          <BenefitsCta
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <BenefitsCtaText>
              Мета UX/UI — не лише естетика, а й бізнес-результат, виражений у цифрах.
            </BenefitsCtaText>
            <BenefitsCtaButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Замовити UX/UI дизайн
            </BenefitsCtaButton>
          </BenefitsCta>
          
          <BenefitsBackground>
            <BenefitsBgCircle className="circle-1" />
            <BenefitsBgCircle className="circle-2" />
            <BenefitsBgDot className="dot-1" />
            <BenefitsBgDot className="dot-2" />
            <BenefitsBgDot className="dot-3" />
            <BenefitsBgLine className="line-1" />
            <BenefitsBgLine className="line-2" />
          </BenefitsBackground>
        </BusinessBenefitsContainer>
      </BusinessBenefitsSection>

      {/* Solutions Examples Section */}
      <SolutionsSection>
        <SolutionsContainer>
          <SolutionsHeader>
            <SolutionsTitle>
              Приклади рішень у UX/UI дизайні — типові задачі, які ми закриваємо
            </SolutionsTitle>
            <SolutionsSubtitle>
              Ми створюємо дизайн для різних ніш і форматів бізнесу. Ось які задачі найчастіше вирішуємо:
            </SolutionsSubtitle>
          </SolutionsHeader>
          
          <SolutionsGrid>
            <SolutionCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <SolutionCardInner>
                <SolutionType>UX/UI для корпоративних сайтів</SolutionType>
                <SolutionFeatures>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Чітка структура</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Сильні візуальні акценти</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Зрозуміла навігація для різних цільових груп</SolutionFeatureText>
                  </SolutionFeature>
                </SolutionFeatures>
                <SolutionResult>
                  <ResultLabel>Результат:</ResultLabel>
                  <ResultText>репутація бренду + довіра з першого кліку</ResultText>
                </SolutionResult>
                <SolutionIllustration className="corporate">
                  <IllustrationImage></IllustrationImage>
                  <IllustrationElements>
                    <IllustElement className="header"></IllustElement>
                    <IllustElement className="hero"></IllustElement>
                    <IllustElement className="content-1"></IllustElement>
                    <IllustElement className="content-2"></IllustElement>
                    <IllustElement className="cta"></IllustElement>
                  </IllustrationElements>
                </SolutionIllustration>
              </SolutionCardInner>
            </SolutionCard>
            
            <SolutionCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <SolutionCardInner>
                <SolutionType>UX/UI для інтернет-магазинів</SolutionType>
                <SolutionFeatures>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Зручний каталог</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Оптимізований чек-аут</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Мобільна адаптація з фокусом на швидкість</SolutionFeatureText>
                  </SolutionFeature>
                </SolutionFeatures>
                <SolutionResult>
                  <ResultLabel>Результат:</ResultLabel>
                  <ResultText>зростання конверсії та зменшення покинутого кошика</ResultText>
                </SolutionResult>
                <SolutionIllustration className="ecommerce">
                  <IllustrationImage></IllustrationImage>
                  <IllustrationElements>
                    <IllustElement className="product-grid"></IllustElement>
                    <IllustElement className="product-card"></IllustElement>
                    <IllustElement className="product-detail"></IllustElement>
                    <IllustElement className="cart"></IllustElement>
                    <IllustElement className="checkout"></IllustElement>
                  </IllustrationElements>
                </SolutionIllustration>
              </SolutionCardInner>
            </SolutionCard>
            
            <SolutionCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <SolutionCardInner>
                <SolutionType>UX/UI для стартапів та MVP</SolutionType>
                <SolutionFeatures>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Швидкий прототип для тестування</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Мінімалістичний UI з логікою MVP</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Можливість масштабування</SolutionFeatureText>
                  </SolutionFeature>
                </SolutionFeatures>
                <SolutionResult>
                  <ResultLabel>Результат:</ResultLabel>
                  <ResultText>швидкий вихід на ринок із якісним першим враженням</ResultText>
                </SolutionResult>
                <SolutionIllustration className="startup">
                  <IllustrationImage></IllustrationImage>
                  <IllustrationElements>
                    <IllustElement className="wireframe"></IllustElement>
                    <IllustElement className="prototype"></IllustElement>
                    <IllustElement className="ui-components"></IllustElement>
                    <IllustElement className="feedback"></IllustElement>
                  </IllustrationElements>
                </SolutionIllustration>
              </SolutionCardInner>
            </SolutionCard>
            
            <SolutionCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <SolutionCardInner>
                <SolutionType>UX/UI для мобільних застосунків</SolutionType>
                <SolutionFeatures>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Іконки, жести, мікроанімація</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>UX-моделі під iOS/Android</SolutionFeatureText>
                  </SolutionFeature>
                  <SolutionFeature>
                    <SolutionFeatureIcon><FaCheck /></SolutionFeatureIcon>
                    <SolutionFeatureText>Тестування сценаріїв користувачів</SolutionFeatureText>
                  </SolutionFeature>
                </SolutionFeatures>
                <SolutionResult>
                  <ResultLabel>Результат:</ResultLabel>
                  <ResultText>залученість користувачів та позитивний досвід</ResultText>
                </SolutionResult>
                <SolutionIllustration className="mobile">
                  <IllustrationImage></IllustrationImage>
                  <IllustrationElements>
                    <IllustElement className="phone"></IllustElement>
                    <IllustElement className="screens"></IllustElement>
                    <IllustElement className="gestures"></IllustElement>
                    <IllustElement className="components"></IllustElement>
                  </IllustrationElements>
                </SolutionIllustration>
              </SolutionCardInner>
            </SolutionCard>
          </SolutionsGrid>
          
          <SolutionsCta>
            <SolutionsCtaText>
              Отримайте UX/UI рішення, яке підходить саме вашому бізнесу
            </SolutionsCtaText>
            <SolutionsCtaButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              Обговорити проєкт
            </SolutionsCtaButton>
          </SolutionsCta>
        </SolutionsContainer>
      </SolutionsSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <TestimonialsContainer>
          <TestimonialsHeader>
            <TestimonialsTitle>
              Що кажуть клієнти про наш UX/UI дизайн
            </TestimonialsTitle>
            <TestimonialsDescription>
              Ми працюємо з бізнесами, яким важливий не просто красивий інтерфейс, а результат. 
              Ось що нам пишуть після запуску:
            </TestimonialsDescription>
          </TestimonialsHeader>
          
          <TestimonialsSlider>
            <Testimonial
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <TestimonialInner>
                <TestimonialQuoteMark>❝</TestimonialQuoteMark>
                <TestimonialContent>
                  <TestimonialText>
                    Після редизайну сайту час перебування користувачів зріс у 1,5 раза. 
                    Дизайн виглядає сучасно, але найголовніше — все логічно і працює як треба.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <FaUser />
                  </TestimonialAvatar>
                  <TestimonialAuthorInfo>
                    <TestimonialAuthorName>Засновник IT-компанії</TestimonialAuthorName>
                    <TestimonialMeter>
                      <TestimonialMeterFill style={{width: '90%'}} />
                    </TestimonialMeter>
                  </TestimonialAuthorInfo>
                </TestimonialAuthor>
                <TestimonialDecoration className="circle" />
                <TestimonialDecoration className="line" />
                <TestimonialDecoration className="dot-1" />
                <TestimonialDecoration className="dot-2" />
              </TestimonialInner>
            </Testimonial>

            <Testimonial
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <TestimonialInner>
                <TestimonialQuoteMark>❝</TestimonialQuoteMark>
                <TestimonialContent>
                  <TestimonialText>
                    Було приємно працювати: швидко зрозуміли, чого ми хочемо, і запропонували 
                    рішення, про які ми самі не подумали. Новий дизайн реально спростив 
                    клієнтам шлях до заявки.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <FaUser />
                  </TestimonialAvatar>
                  <TestimonialAuthorInfo>
                    <TestimonialAuthorName>Керівник відділу маркетингу у сфері послуг</TestimonialAuthorName>
                    <TestimonialMeter>
                      <TestimonialMeterFill style={{width: '95%'}} />
                    </TestimonialMeter>
                  </TestimonialAuthorInfo>
                </TestimonialAuthor>
                <TestimonialDecoration className="circle" />
                <TestimonialDecoration className="line" />
                <TestimonialDecoration className="dot-1" />
                <TestimonialDecoration className="dot-2" />
              </TestimonialInner>
            </Testimonial>

            <Testimonial
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <TestimonialInner>
                <TestimonialQuoteMark>❝</TestimonialQuoteMark>
                <TestimonialContent>
                  <TestimonialText>
                    Ми отримали не просто макети, а повну дизайн-систему. Команда чітко 
                    дотримувалась дедлайнів і дала технічну підтримку після передачі проєкту.
                  </TestimonialText>
                </TestimonialContent>
                <TestimonialAuthor>
                  <TestimonialAvatar>
                    <FaUser />
                  </TestimonialAvatar>
                  <TestimonialAuthorInfo>
                    <TestimonialAuthorName>СЕО eCommerce-бренду</TestimonialAuthorName>
                    <TestimonialMeter>
                      <TestimonialMeterFill style={{width: '85%'}} />
                    </TestimonialMeter>
                  </TestimonialAuthorInfo>
                </TestimonialAuthor>
                <TestimonialDecoration className="circle" />
                <TestimonialDecoration className="line" />
                <TestimonialDecoration className="dot-1" />
                <TestimonialDecoration className="dot-2" />
              </TestimonialInner>
            </Testimonial>
          </TestimonialsSlider>
          
          <TestimonialsBackground>
            <TestimonialsBgWave className="wave-1" />
            <TestimonialsBgWave className="wave-2" />
            <TestimonialsBgDot className="bg-dot-1" />
            <TestimonialsBgDot className="bg-dot-2" />
            <TestimonialsBgDot className="bg-dot-3" />
          </TestimonialsBackground>
          
          <TestimonialsCta>
            <TestimonialsCtaButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              Приєднатися до клієнтів <FaArrowRight />
            </TestimonialsCtaButton>
          </TestimonialsCta>
        </TestimonialsContainer>
      </TestimonialsSection>

      {/* FAQ Section */}
      <FaqSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <FaqWaveTop />
        
        <FaqContainer>
          <FaqGlowCircle className="circle-1" />
          <FaqGlowCircle className="circle-2" />

          <FaqTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </FaqTitle>

          <FaqList
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1, ease: "easeOut" }}
              >
                <AnimatePresence>
                  <FaqItemContent
                    layout
                    initial={{ borderRadius: 16 }}
                    key={`faq-${index}`}
                    transition={{
                      layout: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }
                    }}
                  >
                    <FaqQuestion
                      layout
                      onClick={() => toggleFaq(index)}
                      whileHover={{ color: 'var(--accent-color)', scale: 1.01, transition: { duration: 0.3, ease: "easeOut" } }}
                    >
                      <FaqQuestionText>{faq.question}</FaqQuestionText>
                      <FaqToggle
                        animate={{
                          rotate: expandedFaqs.includes(index) ? 45 : 0,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <FaPlus />
                      </FaqToggle>
                    </FaqQuestion>

                    <AnimatePresence>
                      {expandedFaqs.includes(index) && (
                        <FaqAnswer
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ 
                            opacity: 1, 
                            height: "auto"
                          }}
                          exit={{ 
                            opacity: 0, 
                            height: 0
                          }}
                          transition={{ 
                            duration: 0.4,
                            ease: [0.04, 0.62, 0.23, 0.98]
                          }}
                        >
                          <div style={{ opacity: expandedFaqs.includes(index) ? 1 : 0, transition: 'opacity 0.3s ease', transitionDelay: '0.15s' }}>
                            {faq.answer}
                          </div>
                        </FaqAnswer>
                      )}
                    </AnimatePresence>
                  </FaqItemContent>
                </AnimatePresence>
              </FaqItem>
            ))}
          </FaqList>
          
          <FaqCta>
            <FaqCtaText>
              Маєте додаткові запитання щодо UX/UI дизайну?
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              Зв'язатися з нами <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </PageContainer>
  );
};

// Philosophy Section Styles
const PhilosophySection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(20, 27, 43, 0.98) 100%
  );
  overflow: hidden;
`;

const PhilosophyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const PhilosophyTitle = styled(motion.h2)`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 4rem;
  color: var(--text-primary);
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const PhilosophyContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const PhilosophyTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
    order: 1;
  }
`;

const PhilosophyTagline = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TaglineLine = styled.div`
  width: 2.5rem;
  height: 2px;
  background: var(--accent-color);
`;

const TaglineText = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--accent-color);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PhilosophyParagraph = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const HighlightText = styled.span`
  color: var(--accent-color-light);
  font-weight: 600;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    opacity: 0.3;
  }
`;

const AdvantagesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2.5rem 0;
`;

const AdvantageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AdvantageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  border-radius: 12px;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const AdvantageText = styled.p`
  font-size: 1.05rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const PhilosophyNote = styled.div`
  display: flex;
  gap: 1.5rem;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-left: 3px solid var(--accent-color);
  padding: 1.5rem;
  border-radius: 0 12px 12px 0;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const NoteIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
  flex-shrink: 0;
`;

const NoteText = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const DesignProcessContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;

  @media (max-width: 992px) {
    order: 2;
  }
`;


const pulseKeyframe = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(var(--accent-color-rgb), 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0); }
`;

const ProcessPhase = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.5rem 0;
  position: relative;

  &:hover {
    .phase-indicator {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.4);
    }
  }
`;

const PhaseIndicator = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: ${props =>
    props.className === 'active'
      ? 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-color-light) 100%)'
      : 'rgba(255, 255, 255, 0.05)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  transition: all 0.3s ease;
  z-index: 2;

  &.active {
    animation: ${pulseKeyframe} 2s infinite;
  }
`;

const PhaseIcon = styled.div`
  font-size: 1.2rem;
  color: white;
  position: absolute;
  z-index: 2;
`;

const PhaseNumber = styled.span`
  font-size: 2rem;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.06);
`;

const PhaseLine = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  width: 2px;
  height: 100%;
  background: rgba(var(--accent-color-rgb), 0.2);
  transform: translateX(-50%);
  z-index: 1;

  &.last {
    height: 50%;
  }
`;

const PhaseContent = styled.div`
  padding-top: 0.5rem;
`;

const PhaseTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.7rem;
`;

const PhaseDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const PhilosophyGraphic = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const circlePulse = keyframes`
  0% { transform: scale(0.95); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(0.95); opacity: 0.5; }
`;

const dotFloat = keyframes`
  0% { transform: translate(0, 0); }
  33% { transform: translate(15px, 15px); }
  66% { transform: translate(-15px, 15px); }
  100% { transform: translate(0, 0); }
`;

const lineAnimate = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
`;

const GraphicCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(30px);
  z-index: -1;
  background: rgba(var(--accent-color-rgb), 0.15);
  animation: ${circlePulse} 7s infinite ease-in-out;

  &.circle1 {
    width: 400px;
    height: 400px;
    top: 20%;
    right: -200px;
    animation-delay: 0s;
  }

  &.circle2 {
    width: 300px;
    height: 300px;
    bottom: 10%;
    left: -100px;
    animation-delay: 2s;
  }

  &.circle3 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 40%;
    animation-delay: 4s;
  }
`;

const GraphicDot = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-color);
  z-index: -1;
  animation: ${dotFloat} 8s infinite ease-in-out;

  &.dot1 {
    top: 25%;
    right: 20%;
    animation-delay: 0s;
  }

  &.dot2 {
    bottom: 30%;
    right: 30%;
    animation-delay: 2s;
  }

  &.dot3 {
    top: 60%;
    left: 15%;
    animation-delay: 4s;
  }

  &.dot4 {
    top: 20%;
    left: 30%;
    animation-delay: 6s;
  }
`;

const GraphicLine = styled.div`
  position: absolute;
  z-index: -1;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.2),
    transparent
  );
  height: 1px;
  animation: ${lineAnimate} 4s infinite ease-in-out;

  &.line1 {
    width: 80%;
    top: 35%;
    left: 10%;
    animation-delay: 0s;
  }

  &.line2 {
    width: 60%;
    top: 55%;
    left: 20%;
    animation-delay: 1.5s;
  }

  &.line3 {
    width: 40%;
    top: 75%;
    left: 30%;
    animation-delay: 3s;
  }
`;

const ApproachSection = () => {
  return (
    <ApproachSectionContainer>
      <ApproachContainer>
        <ApproachHeader>
          <ApproachTitle>
            Підхід до UX/UI дизайну — функціональність, логіка, естетика
          </ApproachTitle>
          <ApproachDescription>
            Наш підхід до UX/UI дизайну базується на найкращих світових
            практиках створення інтерфейсів, що однаково добре працюють як для
            користувачів, так і для бізнесу. Ми пропонуємо рішення, обґрунтовані
            реальними даними та дослідженнями.
          </ApproachDescription>
        </ApproachHeader>

        <ApproachContent />
      </ApproachContainer>
    </ApproachSectionContainer>
  );
};


const ApproachSectionContainer = styled.section`
  padding: 8rem 0;
  position: relative;
`;

const ApproachContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ApproachHeader = styled.div`
  margin-bottom: 4rem;
  text-align: center;
`;

const ApproachTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  color: var(--text-primary);
`;

const ApproachDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const ApproachContent = () => {
  return (
    <ApproachStages>
      <ApproachStage
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <ApproachStageIconContainer className="research">
          <FaSearch />
        </ApproachStageIconContainer>
        <ApproachStageTitle>
          Дослідження користувачів і конкурентів
        </ApproachStageTitle>
        <ApproachStageDescription>
          Аналізуємо поведінку цільової аудиторії та конкурентне середовище, щоб
          розробити ефективні UX/UI рішення.
        </ApproachStageDescription>
        <ApproachStageTags>
          <ApproachStageTag>Інтерв'ю</ApproachStageTag>
          <ApproachStageTag>Аналіз даних</ApproachStageTag>
          <ApproachStageTag>Профілювання користувачів</ApproachStageTag>
        </ApproachStageTags>
        <ApproachStageIllustration className="research">
          <div className="research-circle"></div>
          <div className="research-item research-item-1">
            <div className="research-icon">
              <FaUser />
            </div>
            <span className="research-label">Аудиторія</span>
          </div>
          <div className="research-item research-item-2">
            <div className="research-icon">
              <FaChartBar />
            </div>
            <span className="research-label">Аналітика</span>
          </div>
          <div className="research-item research-item-3">
            <div className="research-icon">
              <FaUsers />
            </div>
            <span className="research-label">Конкуренти</span>
          </div>
          <div className="research-item research-item-4">
            <div className="research-icon">
              <FaTasks />
            </div>
            <span className="research-label">Сценарії</span>
          </div>
          <div className="research-connection research-connection-1"></div>
          <div className="research-connection research-connection-2"></div>
          <div className="research-connection research-connection-3"></div>
        </ApproachStageIllustration>
      </ApproachStage>

      <ApproachStage
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <ApproachStageIconContainer className="architecture">
          <FaSitemap />
        </ApproachStageIconContainer>
        <ApproachStageTitle>
          UX-архітектура та прототипування
        </ApproachStageTitle>
        <ApproachStageDescription>
          Проектуємо логічні структури та сценарії взаємодії для створення
          інтуїтивно зрозумілої навігації та зручного інтерфейсу.
        </ApproachStageDescription>
        <ApproachStageTags>
          <ApproachStageTag>Користувацькі потоки</ApproachStageTag>
          <ApproachStageTag>Вайрфрейми</ApproachStageTag>
          <ApproachStageTag>Прототипи</ApproachStageTag>
        </ApproachStageTags>
        <ApproachStageIllustration className="architecture">
          <div className="wireframe wireframe-1">
            <div className="w-header"></div>
            <div className="w-content">
              <div className="w-item w-item-1"></div>
              <div className="w-item w-item-2"></div>
              <div className="w-item w-item-3"></div>
              <div className="w-item w-item-4"></div>
            </div>
          </div>
          <div className="wireframe wireframe-2">
            <div className="w-header"></div>
            <div className="w-content">
              <div className="w-item w-item-1"></div>
              <div className="w-item w-item-2"></div>
              <div className="w-item w-item-3"></div>
            </div>
          </div>
          <div className="wireframe wireframe-3">
            <div className="w-header"></div>
            <div className="w-content">
              <div className="w-item w-item-1"></div>
              <div className="w-item w-item-2"></div>
              <div className="w-item w-item-3"></div>
              <div className="w-item w-item-4"></div>
            </div>
          </div>
          <div className="connection connection-1"></div>
          <div className="connection connection-2"></div>
        </ApproachStageIllustration>
      </ApproachStage>

      <ApproachStage
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ApproachStageIconContainer className="design">
          <FaPalette />
        </ApproachStageIconContainer>
        <ApproachStageTitle>UI-дизайн у стилі бренду</ApproachStageTitle>
        <ApproachStageDescription>
          Розробляємо візуальні елементи відповідно до вашої фірмової айдентики,
          забезпечуючи доступність та узгодженість користувацького досвіду.
        </ApproachStageDescription>
        <ApproachStageTags>
          <ApproachStageTag>Візуальний дизайн</ApproachStageTag>
          <ApproachStageTag>Доступність</ApproachStageTag>
          <ApproachStageTag>Компоненти</ApproachStageTag>
        </ApproachStageTags>
        <ApproachStageIllustration className="design">
          <div className="color-palette">
            <div className="color color-1"></div>
            <div className="color color-2"></div>
            <div className="color color-3"></div>
            <div className="color color-4"></div>
          </div>
          <div className="typography">
            <div className="type-item type-large"></div>
            <div className="type-item type-medium"></div>
            <div className="type-item type-small"></div>
          </div>
          <div className="components">
            <div className="component"></div>
            <div className="component"></div>
            <div className="component"></div>
            <div className="component"></div>
          </div>
        </ApproachStageIllustration>
      </ApproachStage>

      <ApproachStage
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <ApproachStageIconContainer className="testing">
          <FaCheck />
        </ApproachStageIconContainer>
        <ApproachStageTitle>
          Тестування, UX-оптимізація та передача в розробку
        </ApproachStageTitle>
        <ApproachStageDescription>
          Тестуємо наші рішення з реальними користувачами, оптимізуємо їх для
          безперебійного досвіду та готуємо файли для фронтенд-команди.
        </ApproachStageDescription>
        <ApproachStageTags>
          <ApproachStageTag>Юзабіліті-тестування</ApproachStageTag>
          <ApproachStageTag>Оптимізація</ApproachStageTag>
          <ApproachStageTag>Документація</ApproachStageTag>
        </ApproachStageTags>
        <ApproachStageIllustration className="testing">
          <div className="device-container">
            <div className="device device-desktop">
              <div className="device-screen">
                <div className="device-ui"></div>
              </div>
            </div>
            <div className="device device-tablet">
              <div className="device-screen">
                <div className="device-ui"></div>
              </div>
            </div>
            <div className="device device-mobile">
              <div className="device-screen">
                <div className="device-ui"></div>
              </div>
            </div>
          </div>
          <div className="code-block">
            <div className="code-line"></div>
            <div className="code-line"></div>
            <div className="code-line"></div>
          </div>
        </ApproachStageIllustration>
      </ApproachStage>
    </ApproachStages>
  );
};

const ApproachStages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ApproachStage = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ApproachStageTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: var(--text-primary);
`;

const ApproachStageDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const ApproachStageTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ApproachStageIconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  z-index: 2;

  &.research {
    background: linear-gradient(135deg, #ff7b00 0%, #ff9e00 100%);
    box-shadow: 0 10px 20px rgba(255, 123, 0, 0.3);
  }

  &.architecture {
    background: linear-gradient(135deg, #00b2ff 0%, #00d2ff 100%);
    box-shadow: 0 10px 20px rgba(0, 178, 255, 0.3);
  }

  &.design {
    background: linear-gradient(135deg, #9d00ff 0%, #c000ff 100%);
    box-shadow: 0 10px 20px rgba(157, 0, 255, 0.3);
  }

  &.testing {
    background: linear-gradient(135deg, #00d084 0%, #00e6a1 100%);
    box-shadow: 0 10px 20px rgba(0, 208, 132, 0.3);
  }
`;

const ApproachStageTag = styled.span`
  font-size: 0.8rem;
  padding: 0.3rem 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  color: var(--accent-color-light);
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
`;

const ApproachStageIllustration = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  margin-top: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;

  &.research {
    .research-circle {
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px dashed rgba(255, 123, 0, 0.3);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .research-item {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      .research-icon {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ff7b00;
        font-size: 1rem;
      }

      .research-label {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
      }

      &.research-item-1 {
        top: 20%;
        left: 20%;
      }

      &.research-item-2 {
        top: 20%;
        right: 20%;
      }

      &.research-item-3 {
        bottom: 20%;
        right: 20%;
      }

      &.research-item-4 {
        bottom: 20%;
        left: 20%;
      }
    }

    .research-connection {
      position: absolute;
      background: linear-gradient(90deg, transparent, #ff7b00, transparent);
      height: 1px;

      &.research-connection-1 {
        width: 60%;
        top: 35%;
        left: 20%;
        transform: rotate(45deg);
      }

      &.research-connection-2 {
        width: 60%;
        top: 65%;
        left: 20%;
        transform: rotate(-45deg);
      }

      &.research-connection-3 {
        width: 60%;
        top: 50%;
        left: 20%;
        transform: rotate(90deg);
      }
    }
  }

  &.architecture {
    .wireframe {
      position: absolute;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      overflow: hidden;

      .w-header {
        height: 10px;
        background: rgba(0, 178, 255, 0.3);
        margin-bottom: 5px;
      }

      .w-content {
        padding: 5px;
        display: flex;
        flex-direction: column;
        gap: 5px;

        .w-item {
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;

          &.w-item-1 {
            width: 90%;
          }

          &.w-item-2 {
            width: 70%;
          }

          &.w-item-3 {
            width: 80%;
          }

          &.w-item-4 {
            width: 60%;
          }
        }
      }

      &.wireframe-1 {
        width: 30%;
        height: 40%;
        top: 30%;
        left: 15%;
        transform: rotate(-5deg);
      }

      &.wireframe-2 {
        width: 25%;
        height: 30%;
        top: 20%;
        left: 55%;
        transform: rotate(3deg);
      }

      &.wireframe-3 {
        width: 35%;
        height: 45%;
        bottom: 15%;
        right: 15%;
        transform: rotate(5deg);
      }
    }

    .connection {
      position: absolute;
      height: 2px;
      background: rgba(0, 178, 255, 0.3);

      &.connection-1 {
        width: 15%;
        top: 35%;
        left: 45%;
        transform: rotate(20deg);
      }

      &.connection-2 {
        width: 20%;
        bottom: 40%;
        left: 40%;
        transform: rotate(-30deg);
      }
    }
  }

  &.design {
    .color-palette {
      position: absolute;
      display: flex;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      gap: 10px;

      .color {
        width: 25px;
        height: 25px;
        border-radius: 50%;

        &.color-1 {
          background: #ff7b00;
        }

        &.color-2 {
          background: #00b2ff;
        }

        &.color-3 {
          background: #9d00ff;
        }

        &.color-4 {
          background: #00d084;
        }
      }
    }

    .typography {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 8px;
      top: 40%;
      left: 50%;
      transform: translateX(-50%);

      .type-item {
        height: 10px;
        background: rgba(157, 0, 255, 0.3);
        border-radius: 5px;

        &.type-large {
          width: 150px;
        }

        &.type-medium {
          width: 100px;
        }

        &.type-small {
          width: 70px;
        }
      }
    }

    .components {
      position: absolute;
      display: flex;
      gap: 10px;
      bottom: 20%;
      left: 50%;
      transform: translateX(-50%);

      .component {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(157, 0, 255, 0.3);
      }
    }
  }

  &.testing {
    .device-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 60%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      .device {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        overflow: hidden;

        .device-screen {
          background: rgba(0, 208, 132, 0.1);
          height: 80%;
          margin: 10% 5%;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;

          .device-ui {
            width: 70%;
            height: 70%;
            border-radius: 4px;
            background: rgba(0, 208, 132, 0.2);
          }
        }

        &.device-desktop {
          width: 50%;
          height: 100%;
        }

        &.device-tablet {
          width: 20%;
          height: 80%;
        }

        &.device-mobile {
          width: 15%;
          height: 70%;
        }
      }
    }

    .code-block {
      position: absolute;
      bottom: 10%;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .code-line {
        height: 4px;
        background: rgba(0, 208, 132, 0.2);
        border-radius: 2px;

        &:nth-child(1) {
          width: 100%;
        }

        &:nth-child(2) {
          width: 80%;
        }

        &:nth-child(3) {
          width: 60%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

// Business Benefits Section Styles
const glowAnimation = keyframes`
  0% { opacity: 0.3; transform: scale(0.95); }
  50% { opacity: 0.6; transform: scale(1.05); }
  100% { opacity: 0.3; transform: scale(0.95); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const BusinessBenefitsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(16, 24, 39, 0.97) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
`;

const BusinessBenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const BenefitsHeading = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 1;
`;

const BenefitsHeadingGlow = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.15) 0%,
    transparent 70%
  );
  filter: blur(50px);
  opacity: 0.8;
  z-index: -1;
  animation: ${glowAnimation} 8s infinite ease-in-out;
`;

const BenefitsTitle = styled.h2`
  font-size: 3.4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const BenefitsSubtitle = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 750px;
  margin: 2rem auto 0;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BenefitsCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 5rem;
`;

const BenefitsRow = styled.div`
  display: flex;
  gap: 2.5rem;
  
  &.center-row {
    justify-content: center;
    max-width: 850px;
    margin: 0 auto;
  }
  
  @media (max-width: 992px) {
    flex-wrap: wrap;
    justify-content: center;
    
    &.center-row {
      max-width: 100%;
    }
  }
`;

const BenefitCard = styled(motion.div)`
  flex: 1;
  min-width: 280px;
  max-width: 380px;
  
  @media (max-width: 992px) {
    flex: 0 0 calc(50% - 1.25rem);
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 450px;
  }
`;

const BenefitCardInner = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 2.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const BenefitCardGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  filter: blur(40px);
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: -1;
  
  &.glow-1 {
    background: radial-gradient(circle at center, rgba(255, 123, 0, 0.15) 0%, transparent 70%);
  }
  
  &.glow-2 {
    background: radial-gradient(circle at center, rgba(0, 178, 255, 0.15) 0%, transparent 70%);
  }
  
  &.glow-3 {
    background: radial-gradient(circle at center, rgba(0, 208, 132, 0.15) 0%, transparent 70%);
  }
  
  &.glow-4 {
    background: radial-gradient(circle at center, rgba(238, 108, 77, 0.15) 0%, transparent 70%);
  }
  
  &.glow-5 {
    background: radial-gradient(circle at center, rgba(157, 0, 255, 0.15) 0%, transparent 70%);
  }
  
  ${BenefitCardInner}:hover & {
    opacity: 1;
  }
`;

const BenefitIconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.8rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  
  &.intuitive {
    background: linear-gradient(135deg, rgba(255, 123, 0, 0.1) 0%, rgba(255, 123, 0, 0.3) 100%);
    
    ${BenefitCardInner}:hover & {
      background: linear-gradient(135deg, rgba(255, 123, 0, 0.8) 0%, rgba(255, 123, 0, 1) 100%);
    }
  }
  
  &.adaptive {
    background: linear-gradient(135deg, rgba(0, 178, 255, 0.1) 0%, rgba(0, 178, 255, 0.3) 100%);
    
    ${BenefitCardInner}:hover & {
      background: linear-gradient(135deg, rgba(0, 178, 255, 0.8) 0%, rgba(0, 178, 255, 1) 100%);
    }
  }
  
  &.conversion {
    background: linear-gradient(135deg, rgba(0, 208, 132, 0.1) 0%, rgba(0, 208, 132, 0.3) 100%);
    
    ${BenefitCardInner}:hover & {
      background: linear-gradient(135deg, rgba(0, 208, 132, 0.8) 0%, rgba(0, 208, 132, 1) 100%);
    }
  }
  
  &.style {
    background: linear-gradient(135deg, rgba(238, 108, 77, 0.1) 0%, rgba(238, 108, 77, 0.3) 100%);
    
    ${BenefitCardInner}:hover & {
      background: linear-gradient(135deg, rgba(238, 108, 77, 0.8) 0%, rgba(238, 108, 77, 1) 100%);
    }
  }
  
  &.system {
    background: linear-gradient(135deg, rgba(157, 0, 255, 0.1) 0%, rgba(157, 0, 255, 0.3) 100%);
    
    ${BenefitCardInner}:hover & {
      background: linear-gradient(135deg, rgba(157, 0, 255, 0.8) 0%, rgba(157, 0, 255, 1) 100%);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    background: transparent;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    z-index: -1;
    transition: all 0.3s ease;
  }
  
  ${BenefitCardInner}:hover &::after {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const BenefitIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
  transition: all 0.3s ease;
  
  ${BenefitCardInner}:hover & {
    color: white;
    transform: scale(1.1);
  }
`;

const BenefitCardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const BenefitCardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  transition: color 0.3s ease;
  
  ${BenefitCardInner}:hover & {
    color: var(--accent-color-light);
  }
`;

const BenefitCardText = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const BenefitCardNumber = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  font-size: 5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  transition: all 0.4s ease;
  line-height: 1;
  
  ${BenefitCardInner}:hover & {
    transform: scale(1.2) translateY(-5px);
    color: rgba(var(--accent-color-rgb), 0.07);
  }
`;

const BenefitsCta = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 3.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light),
      var(--accent-color)
    );
    background-size: 200% 100%;
    animation: ${shimmer} 5s infinite linear;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1.5rem;
  }
`;

const BenefitsCtaText = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  max-width: 750px;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BenefitsCtaButton = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.5);
  }
`;

const BenefitsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
`;

const BenefitsBgCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  
  &.circle-1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.06) 0%,
      transparent 70%
    );
    top: 10%;
    left: -200px;
    animation: ${floatAnimation} 25s infinite ease-in-out;
  }
  
  &.circle-2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(94, 96, 206, 0.04) 0%,
      transparent 70%
    );
    bottom: 5%;
    right: -200px;
    animation: ${floatAnimation} 30s infinite ease-in-out reverse;
  }
`;

const BenefitsBgDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.3);
  filter: blur(1px);
  
  &.dot-1 {
    top: 20%;
    left: 25%;
    animation: ${floatAnimation} 15s infinite ease-in-out;
  }
  
  &.dot-2 {
    top: 65%;
    left: 75%;
    animation: ${floatAnimation} 18s infinite ease-in-out;
  }
  
  &.dot-3 {
    top: 40%;
    right: 15%;
    animation: ${floatAnimation} 12s infinite ease-in-out reverse;
  }
`;

const BenefitsBgLine = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.07),
    transparent
  );
  
  &.line-1 {
    width: 90%;
    top: 30%;
    left: 5%;
    transform: rotate(5deg);
  }
  
  &.line-2 {
    width: 70%;
    bottom: 25%;
    right: 5%;
    transform: rotate(-8deg);
  }
`;

// Styles for Solutions Section
const SolutionsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.98) 100%
  );
  overflow: hidden;
`;

const SolutionsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const SolutionsHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const SolutionsTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const SolutionsSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 750px;
  margin: 2rem auto 0;
  color: var(--text-secondary);
`;

const SolutionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const SolutionCard = styled(motion.div)`
  height: 100%;
`;

const SolutionCardInner = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 2.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const SolutionType = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  padding-bottom: 0.8rem;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const SolutionFeatures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const SolutionFeature = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const SolutionFeatureIcon = styled.div`
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  margin-top: 2px;
`;

const SolutionFeatureText = styled.p`
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

const SolutionResult = styled.div`
  padding: 1.2rem 1.5rem;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  margin-top: auto;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 4px;
    background: var(--accent-color-light);
    border-radius: 2px 0 0 2px;
  }
`;

const ResultLabel = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 0.3rem;
`;

const ResultText = styled.p`
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  
  span {
    color: var(--accent-color);
    font-weight: 700;
  }
`;

const SolutionIllustration = styled.div`
  position: relative;
  height: 180px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  overflow: hidden;
  
  &.corporate {
    background: linear-gradient(135deg, rgba(0, 46, 114, 0.4) 0%, rgba(0, 32, 84, 0.2) 100%);
  }
  
  &.ecommerce {
    background: linear-gradient(135deg, rgba(123, 0, 255, 0.4) 0%, rgba(91, 0, 187, 0.2) 100%);
  }
  
  &.startup {
    background: linear-gradient(135deg, rgba(0, 196, 112, 0.4) 0%, rgba(0, 148, 85, 0.2) 100%);
  }
  
  &.mobile {
    background: linear-gradient(135deg, rgba(0, 138, 255, 0.4) 0%, rgba(0, 97, 180, 0.2) 100%);
  }
`;

const IllustrationImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.15;
  background-size: cover;
  background-position: center;
  mix-blend-mode: luminosity;
`;

const IllustrationElements = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
`;

const illustPulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

const IllustElement = styled.div`
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  animation: ${illustPulse} 3s infinite ease-in-out;
  
  /* Corporate website elements */
  &.header {
    top: 15px;
    left: 15px;
    right: 15px;
    height: 15px;
    animation-delay: 0s;
  }
  
  &.hero {
    top: 40px;
    left: 15px;
    right: 15px;
    height: 50px;
    animation-delay: 0.2s;
  }
  
  &.content-1 {
    top: 100px;
    left: 15px;
    width: 60%;
    height: 25px;
    animation-delay: 0.4s;
  }
  
  &.content-2 {
    top: 100px;
    right: 15px;
    width: 30%;
    height: 65px;
    animation-delay: 0.6s;
  }
  
  &.cta {
    bottom: 15px;
    left: 15px;
    width: 120px;
    height: 20px;
    animation-delay: 0.8s;
  }
  
  /* E-commerce elements */
  &.product-grid {
    top: 15px;
    left: 15px;
    right: 15px;
    height: 15px;
    animation-delay: 0s;
  }
  
  &.product-card {
    top: 40px;
    left: 15px;
    width: 40%;
    height: 80px;
    animation-delay: 0.2s;
  }
  
  &.product-detail {
    top: 40px;
    right: 15px;
    width: 45%;
    height: 40px;
    animation-delay: 0.4s;
  }
  
  &.cart {
    bottom: 15px;
    right: 15px;
    width: 45%;
    height: 30px;
    animation-delay: 0.6s;
  }
  
  &.checkout {
    bottom: 55px;
    right: 15px;
    width: 25%;
    height: 15px;
    animation-delay: 0.8s;
  }
  
  /* Startup elements */
  &.wireframe {
    top: 15px;
    left: 15px;
    width: 45%;
    height: 70px;
    animation-delay: 0s;
  }
  
  &.prototype {
    top: 15px;
    right: 15px;
    width: 40%;
    height: 35px;
    animation-delay: 0.2s;
  }
  
  &.ui-components {
    bottom: 15px;
    left: 15px;
    width: 35%;
    height: 35px;
    animation-delay: 0.4s;
  }
  
  &.feedback {
    bottom: 60px;
    right: 15px;
    width: 40%;
    height: 60px;
    animation-delay: 0.6s;
  }
  
  /* Mobile app elements */
  &.phone {
    top: 15px;
    left: 15px;
    width: 60px;
    height: 120px;
    border-radius: 10px;
    animation-delay: 0s;
  }
  
  &.screens {
    top: 15px;
    left: 90px;
    width: 60px;
    height: 60px;
    animation-delay: 0.2s;
  }
  
  &.gestures {
    bottom: 15px;
    left: 90px;
    width: 60px;
    height: 40px;
    animation-delay: 0.4s;
  }
  
  &.components {
    top: 15px;
    right: 15px;
    width: 80px;
    height: 120px;
    animation-delay: 0.6s;
  }
`;

const SolutionsCta = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SolutionsCtaText = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  max-width: 750px;
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const SolutionsCtaButton = styled(motion.button)`
  padding: 1.2rem 2.5rem;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.5);
  }
`;

// Styles for Testimonials Section
const TestimonialsSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
  margin-top: 4rem; // Добавляю дополнительный отступ сверху
`;

const TestimonialsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const TestimonialsHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const TestimonialsTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light)
    );
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

const TestimonialsDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 750px;
  margin: 2rem auto 0;
  color: var(--text-secondary);
`;

const TestimonialsSlider = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  z-index: 3; // Увеличиваю z-index, чтобы карточки были поверх декоративных элементов
  
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Testimonial = styled(motion.div)`
  height: 100%;
  position: relative;
`;

const TestimonialInner = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 5rem 2.5rem 2.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const testimonialFloat = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(5px, 5px) rotate(5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const TestimonialDecoration = styled.div`
  position: absolute;
  z-index: -1;
  
  &.circle {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.03) 0%,
      transparent 70%
    );
    top: -30px;
    right: -30px;
    filter: blur(5px);
  }
  
  &.line {
    width: 100px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--accent-color-rgb), 0.2),
      transparent
    );
    bottom: 80px;
    left: -20px;
    transform: rotate(45deg);
  }
  
  &.dot-1 {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(var(--accent-color-rgb), 0.2);
    bottom: 40px;
    right: 40px;
    animation: ${testimonialFloat} 8s infinite ease-in-out;
  }
  
  &.dot-2 {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: rgba(var(--accent-color-rgb), 0.15);
    top: 60px;
    left: 30px;
    animation: ${testimonialFloat} 6s infinite ease-in-out reverse;
  }
`;

const TestimonialQuoteMark = styled.div`
  position: absolute;
  top: 20px;
  left: 25px;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  color: rgba(var(--accent-color-rgb), 0.1);
`;

const TestimonialContent = styled.div`
  margin-bottom: 1.5rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.3) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const TestimonialAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TestimonialAuthorName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
`;

const TestimonialMeter = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const TestimonialMeterFill = styled.div`
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    var(--accent-color-light)
  );
  border-radius: 2px;
`;

const waveAnimation = keyframes`
  0% { transform: translateX(0) translateZ(0) scaleY(1); }
  50% { transform: translateX(-25%) translateZ(0) scaleY(0.8); }
  100% { transform: translateX(-50%) translateZ(0) scaleY(1); }
`;

const floatDot = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(15px, -15px); }
  100% { transform: translate(0, 0); }
`;

const TestimonialsBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; // Уменьшаю z-index фона, чтобы контент был над ним
  overflow: hidden;
  pointer-events: none; // Добавляю pointer-events: none, чтобы фон не мешал взаимодействию
`;

const TestimonialsBgWave = styled.div`
  position: absolute;
  width: 200%;
  height: 300px;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-color-rgb), 0.03) 0%,
    transparent 70%
  );
  opacity: 0.3;
  animation: ${waveAnimation} 20s infinite linear;
  
  &.wave-1 {
    bottom: -100px;
    border-radius: 100%;
  }
  
  &.wave-2 {
    bottom: -200px;
    border-radius: 100%;
    animation-duration: 25s;
    animation-direction: reverse;
    opacity: 0.2;
  }
`;

const TestimonialsBgDot = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  animation: ${floatDot} 15s infinite ease-in-out;
  
  &.bg-dot-1 {
    width: 15px;
    height: 15px;
    top: 15%;
    right: 20%;
    animation-delay: 0s;
  }
  
  &.bg-dot-2 {
    width: 20px;
    height: 20px;
    bottom: 30%;
    left: 15%;
    animation-delay: 5s;
  }
  
  &.bg-dot-3 {
    width: 10px;
    height: 10px;
    top: 60%;
    right: 30%;
    animation-delay: 10s;
  }
`;

const TestimonialsCta = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const TestimonialsCtaButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.2rem;
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.5);
  }
  
  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

// Styles for FAQ Section
const FaqSection = styled(motion.section)`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(16, 24, 39, 0.9) 100%
  );
  overflow: hidden;
  z-index: 0;
  margin: 0;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      ellipse at top right,
      rgba(94, 234, 212, 0.08) 0%,
      transparent 70%
    );
    z-index: -1;
  }

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const FaqWaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to top left, transparent 49%, var(--bg-primary) 51%);
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 2rem;

  @media (max-width: 1024px) {
    max-width: 800px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 700px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    max-width: none;
    padding: 0 1rem;
  }
`;

const FaqGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;

  &.circle-1 {
    width: 400px;
    height: 400px;
    background: radial-gradient(
      circle,
      rgba(94, 234, 212, 0.05) 0%,
      transparent 70%
    );
    top: 10%;
    left: -200px;
    animation: ${floatVertical} 15s infinite ease-in-out;
  }

  &.circle-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.05) 0%,
      transparent 70%
    );
    bottom: 5%;
    right: -200px;
    animation: ${floatVertical} 18s infinite ease-in-out reverse;
  }
`;

const FaqTitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  text-shadow: 0 2px 10px rgba(94, 234, 212, 0.2);

  &::before {
    content: 'F.A.Q';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;
    color: rgba(94, 234, 212, 0.03);
    font-weight: 900;
    letter-spacing: 5px;
    z-index: -1;
    white-space: nowrap;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--accent-color),
      transparent
    );
    border-radius: 4px;
    animation: ${faqPulse} 2s infinite ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-bottom: 2.5rem;

    &::before {
      font-size: 4rem;
      top: -25px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;

    &::before {
      font-size: 3.5rem;
      top: -20px;
    }

    &::after {
      width: 60px;
      height: 3px;
      bottom: -12px;
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;

    &::before {
      font-size: 2.5rem;
      top: -15px;
    }

    &::after {
      width: 50px;
      height: 2px;
      bottom: -10px;
    }
  }
`;

const FaqList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const FaqItem = styled(motion.div)`
  overflow: hidden;
  border-radius: 16px;
  background: rgba(16, 24, 39, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2), 0 0 15px rgba(94, 234, 212, 0.1);
    border-color: rgba(94, 234, 212, 0.1);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 480px) {
    border-radius: 10px;

    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const FaqItemContent = styled(motion.div)`
  overflow: hidden;
`;

const FaqQuestion = styled(motion.div)`
  padding: 1.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      var(--accent-color),
      rgba(59, 130, 246, 0.5)
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 0 3px 3px 0;
  }

  &:hover::before {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    &::after {
      left: 1.5rem;
      right: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    align-items: flex-start;

    &::after {
      left: 1.2rem;
      right: 1.2rem;
    }
  }
`;

const FaqQuestionText = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  transition: all 0.3s ease;
  flex: 1;
  transform: translateZ(5px);

  ${FaqQuestion}:hover & {
    color: var(--accent-color);
    transform: translateZ(10px);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
    margin-right: 0.5rem;
  }
`;

const FaqToggle = styled(motion.div)`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  margin-left: 1rem;
  flex-shrink: 0;
  background: rgba(94, 234, 212, 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(94, 234, 212, 0.1);
    box-shadow: 0 0 10px rgba(94, 234, 212, 0.2);
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    margin-left: 0.5rem;
    margin-top: 0.2rem;
  }
`;

const FaqAnswer = styled(motion.div)`
  padding: 0 2rem 1.8rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }

  strong {
    color: var(--accent-color);
    font-weight: 600;
  }

  ul {
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;

    &::before {
      content: '•';
      color: var(--accent-color);
      position: absolute;
      left: -1rem;
    }
  }

  p {
    margin-bottom: 0.8rem;
  }

  .highlight {
    background: linear-gradient(
      90deg,
      rgba(94, 234, 212, 0.1),
      rgba(59, 130, 246, 0.1)
    );
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    margin: 0 0.2rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.05),
        transparent
      );
      background-size: 200% 100%;
      animation: ${shimmerEffect} 2s infinite;
    }
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
    font-size: 1rem;

    &::before {
      left: 1.5rem;
      right: 1.5rem;
    }

    ul {
      padding-left: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0 1.2rem 1.2rem;
    font-size: 0.95rem;
    line-height: 1.6;

    &::before {
      left: 1.2rem;
      right: 1.2rem;
    }

    ul {
      padding-left: 1rem;
    }

    li {
      margin-bottom: 0.4rem;
    }

    p {
      margin-bottom: 0.6rem;
    }
  }
`;

const FaqCta = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background: rgba(16, 24, 39, 0.4);
  backdrop-filter: blur(15px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      rgba(59, 130, 246, 0.8)
    );
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(94, 234, 212, 0.05) 0%,
      transparent 50%
    );
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    border-radius: 15px;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
    gap: 1rem;
  }
`;

const FaqCtaText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    line-height: 1.4;
  }
`;

const FaqCtaButton = styled(motion.button)`
  padding: 1.2rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    rgba(59, 130, 246, 0.9)
  );
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(94, 234, 212, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: all 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 8px;
    background: linear-gradient(
      90deg,
      rgba(59, 130, 246, 0.5),
      var(--accent-color)
    );
    filter: blur(5px);
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    padding: 0.9rem 2rem;
    font-size: 1rem;
    border-radius: 25px;
    width: 100%;
    max-width: 250px;
  }
`;

export default UxUiDesign;
