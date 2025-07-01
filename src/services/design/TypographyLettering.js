import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaFont,
  FaPencilAlt,
  FaPalette,
  FaRegEye,
  FaCheck,
  FaPlus,
  FaLayerGroup,
  FaCommentAlt,
  FaIdCard,
  FaHeart,
  FaLongArrowAltRight,
  FaSearch,
  FaChartBar,
  FaMobileAlt,
  FaPrint,
  FaDesktop,
  FaLink,
  FaFingerprint,
  FaAlignLeft,
  FaEyeSlash,
  FaBrain,
  FaFileAlt,
  FaArrowDown,
} from 'react-icons/fa';
import { MdTextFields } from 'react-icons/md';
import Modal from '../../components/Modal';

// Анимации
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const rotate = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

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

// Animation effects for Typography preview
const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const pulseAnimation = keyframes`
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
`;

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Typography preview components
const TypographyPreview = styled(motion.div)`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;

  @media (max-width: 992px) {
    order: 1;
    height: 350px;
  }
`;

const TypographyGlow = styled(motion.div)`
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

const TypographyContainer = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 350px;
  transform-style: preserve-3d;
  z-index: 2;
`;

const CharacterWrapper = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  font-size: 3.5rem;
  font-weight: 800;
  color: white;
  animation: ${pulseAnimation} 3s infinite ease-in-out;

  &.char-1 {
    top: 20px;
    left: 20px;
    animation-delay: 0s;
    animation: ${floatAnimation} 6s infinite ease-in-out;
  }

  &.char-2 {
    top: 0;
    left: 130px;
    animation-delay: 0.5s;
    font-family: 'Courier New', monospace;
    animation: ${floatAnimation} 7s infinite ease-in-out;
  }

  &.char-3 {
    top: 20px;
    right: 20px;
    animation-delay: 1s;
    font-family: 'Times New Roman', serif;
    animation: ${floatAnimation} 5s infinite ease-in-out reverse;
  }

  &.symbol-1 {
    top: 130px;
    left: 0;
    animation-delay: 1.5s;
    font-size: 4rem;
    transform: rotate(15deg);
    animation: ${floatAnimation} 8s infinite ease-in-out;
  }

  &.symbol-2 {
    bottom: 50px;
    left: 30px;
    animation-delay: 2s;
    font-size: 3rem;
    transform: rotate(-10deg);
    animation: ${floatAnimation} 6s infinite ease-in-out reverse;
  }

  &.symbol-3 {
    bottom: 30px;
    right: 40px;
    animation-delay: 2.5s;
    font-size: 5rem;
    transform: rotate(5deg);
    animation: ${floatAnimation} 9s infinite ease-in-out;
  }
`;

const FontSwatch = styled(motion.div)`
  position: absolute;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  &.swatch-1 {
    top: 120px;
    left: 130px;
    width: 140px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: #333;
    animation: ${floatAnimation} 7s infinite ease-in-out;
  }

  &.swatch-2 {
    bottom: 80px;
    left: 100px;
    width: 180px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${floatAnimation} 8s infinite ease-in-out reverse;

    .primary {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--accent-color);
      margin-bottom: 4px;
    }

    .secondary {
      font-size: 0.9rem;
      color: #666;
    }
  }
`;

const LetteringElement = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 5;
  overflow: hidden;

  &.element-1 {
    top: 180px;
    right: 20px;
    animation: ${rotateAnimation} 20s infinite linear;

    .inner {
      width: 100%;
      height: 100%;
      background: conic-gradient(
        var(--accent-color),
        var(--accent-color-light),
        var(--accent-color-dark),
        var(--accent-color)
      );
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      font-size: 1.2rem;
      font-weight: 900;
      color: white;
      position: relative;
      z-index: 1;
    }
  }
`;

const TypographyLettering = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FAQ state
  const [expandedFaqs, setExpandedFaqs] = useState([]);

  // Modal functions
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // FAQ data
  const faqData = [
    {
      question:
        '1. Чи можна використовувати один шрифт для всіх носіїв бренду?',
      answer:
        'Ні, зазвичай створюється типографічна система з кількох шрифтів — основного, акцентного та допоміжного. Вони виконують різні функції: заголовки, тіла текстів, підписи тощо. Це забезпечує гнучкість і зберігає єдність стилю.',
    },
    {
      question: '2. Чи потрібно купувати ліцензії на шрифти?',
      answer:
        'Так, якщо ви використовуєте комерційні шрифти. Ми завжди підбираємо шрифти з урахуванням прав на використання — з відкритих бібліотек або з чіткою ліцензією. Безкоштовні шрифти — не завжди якісні або унікальні.',
    },
    {
      question:
        '3. У чому перевага кастомного летерингу порівняно з логотипом на основі шрифту?',
      answer:
        'Кастомний летеринг створюється з нуля і враховує форму, ритм і унікальність назви бренду. Це забезпечує абсолютну ексклюзивність. Шрифтова основа — це швидше, але не завжди достатньо відмінно від конкурентів.',
    },
    {
      question:
        "4. Чи можу я отримати шрифт у форматі для встановлення на комп'ютер?",
      answer:
        'Так, якщо розробляється кастомний шрифт або обрана типографіка включає завантажувані файли. Ви отримаєте файли у форматах OTF/TTF/WOFF + інструкції з установлення та використання.',
    },
    {
      question:
        '5. Чи можна замовити лише летеринг без повного фірмового стилю?',
      answer:
        'Звісно. Летеринг — це окрема послуга. Він може бути використаний як акцент на упаковці, постері, мерчі або навіть у соціальних мережах. Ми адаптуємо результат під ваші задачі.',
    },
    {
      question: '6. Скільки часу займає створення типографіки або летерингу?',
      answer:
        'У середньому — від 5 до 15 робочих днів, залежно від складності. Простий підбір типографіки — швидше. Унікальний летеринг або система зі шрифтами для різних носіїв — потребують більше часу для дослідження й опрацювання деталей.',
    },
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
              Типографіка і <span>летеринг</span> — унікальний стиль вашого
              бренду
            </HeroTitle>

            <HeroDescription
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Типографіка й летеринг — це не просто оформлення тексту. Це
              потужний інструмент комунікації, що формує перше враження про
              бренд. Вдалий вибір шрифтів та індивідуальне написання слів здатні
              підкреслити характер компанії, передати її цінності та викликати
              довіру.
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
                Замовити розробку <FaArrowRight />
              </PrimaryButton>
            </HeroButtons>

            <HeroFeatures
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FeatureItem>
                <HeroFeatureIcon>
                  <FaFont />
                </HeroFeatureIcon>
                <FeatureText>Унікальність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaRegEye />
                </HeroFeatureIcon>
                <FeatureText>Виразність</FeatureText>
              </FeatureItem>

              <FeatureItem>
                <HeroFeatureIcon>
                  <FaPalette />
                </HeroFeatureIcon>
                <FeatureText>Індивідуальність</FeatureText>
              </FeatureItem>
            </HeroFeatures>
          </HeroContent>

          <TypographyPreview
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypographyGlow
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

            <TypographyContainer
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
              <CharacterWrapper className="char-1">A</CharacterWrapper>
              <CharacterWrapper className="char-2">B</CharacterWrapper>
              <CharacterWrapper className="char-3">Ф</CharacterWrapper>
              <CharacterWrapper className="symbol-1">&</CharacterWrapper>
              <CharacterWrapper className="symbol-2">@</CharacterWrapper>
              <CharacterWrapper className="symbol-3">₴</CharacterWrapper>

              <FontSwatch className="swatch-1">Helvetica</FontSwatch>

              <FontSwatch className="swatch-2">
                <div className="primary">Georgia</div>
                <div className="secondary">Times New Roman</div>
              </FontSwatch>

              <LetteringElement className="element-1">
                <div className="inner">
                  <div className="text">SQ</div>
                </div>
              </LetteringElement>
            </TypographyContainer>
          </TypographyPreview>
        </HeroContainer>
      </HeroSection>

      {/* Typography Importance Section */}
      <TypographyImportanceSection>
        <GradientOverlay />
        <FloatingCharacters>
          <FloatingChar className="char-a">A</FloatingChar>
          <FloatingChar className="char-b">B</FloatingChar>
          <FloatingChar className="char-c">C</FloatingChar>
          <FloatingChar className="char-d">D</FloatingChar>
          <FloatingChar className="char-e">E</FloatingChar>
          <FloatingChar className="char-f">F</FloatingChar>
        </FloatingCharacters>

        <ImportanceContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionHeading>
              <SectionHeadingGlow />
              Значення типографіки для брендингу
            </SectionHeading>
          </motion.div>

          <TypographyExplainer>
            <DefinitionBlock
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SubHeading>
                <SubHeadingIcon>
                  <FaFont />
                </SubHeadingIcon>
                <SubHeadingText>Що таке типографіка?</SubHeadingText>
              </SubHeading>

              <DefinitionText>
                Типографіка — це мистецтво та техніка розміщення, вибору та
                оформлення тексту для передачі ідей та створення враження. Це
                те, як текст
                <HighlightText>
                  виглядає, відчувається та сприймається
                </HighlightText>
                , і це невід'ємна частина дизайну та комунікації.
              </DefinitionText>

              <DefinitionText>
                Хороша типографія створює ієрархію, встановлює тон, настрій та
                атмосферу, а також створює
                <HighlightText> відомий бренд-образ</HighlightText> для вашої
                компанії, щоб бути легко впізнаваною для аудиторії.
              </DefinitionText>

              <FontExamplesWrapper
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <FontConnector />
                <FontExample className="serif">A</FontExample>
                <FontExample className="sans-serif">A</FontExample>
                <FontExample className="display">A</FontExample>
                <FontExample className="script">A</FontExample>
              </FontExamplesWrapper>
            </DefinitionBlock>

            <InfluenceBlock
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <SubHeading>
                <SubHeadingIcon>
                  <FaPalette />
                </SubHeadingIcon>
                <SubHeadingText>Вплив на бренд</SubHeadingText>
              </SubHeading>

              <InfluenceText>
                Правильно підібрана типографіка робить більше, ніж просто
                передає інформацію. Вона формує сприйняття вашого бренду та може
                впливати на
                <HighlightText>прийняття рішень вашими клієнтами</HighlightText>
                .
              </InfluenceText>

              <InfluenceList>
                <InfluenceItem
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <InfluenceIcon>
                    <FaCommentAlt />
                  </InfluenceIcon>
                  <InfluenceItemText>
                    Формує невербальну комунікацію вашого бренду
                  </InfluenceItemText>
                </InfluenceItem>

                <InfluenceItem
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <InfluenceIcon>
                    <FaIdCard />
                  </InfluenceIcon>
                  <InfluenceItemText>
                    Створює та зміцнює ідентичність бренду
                  </InfluenceItemText>
                </InfluenceItem>

                <InfluenceItem
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <InfluenceIcon>
                    <FaLayerGroup />
                  </InfluenceIcon>
                  <InfluenceItemText>
                    Вибудовує інформаційну ієрархію та покращує читабельність
                  </InfluenceItemText>
                </InfluenceItem>

                <InfluenceItem
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <InfluenceIcon>
                    <FaHeart />
                  </InfluenceIcon>
                  <InfluenceItemText>
                    Викликає емоційний відгук у аудиторії
                  </InfluenceItemText>
                </InfluenceItem>
              </InfluenceList>

              <InfluenceConclusion>
                Вибір типографіки - це стратегічне рішення, яке має відображати
                цінності та позиціонування вашого бренду, резонувати з цільовою
                аудиторією та виділяти вас серед конкурентів.
              </InfluenceConclusion>
            </InfluenceBlock>
          </TypographyExplainer>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BrandExamples>
              <BrandExample
                className="tech"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <BrandExampleTitle className="tech">TECHIFY</BrandExampleTitle>
                <BrandExampleTag>Технологічний</BrandExampleTag>
              </BrandExample>

              <BrandExample
                className="creative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <BrandExampleTitle className="creative">
                  Creative
                </BrandExampleTitle>
                <BrandExampleTag>Креативний</BrandExampleTag>
              </BrandExample>

              <BrandExample
                className="luxury"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <BrandExampleTitle className="luxury">
                  LUXURIO
                </BrandExampleTitle>
                <BrandExampleTag>Преміальний</BrandExampleTag>
              </BrandExample>

              <BrandExample
                className="friendly"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <BrandExampleTitle className="friendly">
                  Friendly
                </BrandExampleTitle>
                <BrandExampleTag>Доброзичливий</BrandExampleTag>
              </BrandExample>
            </BrandExamples>
          </motion.div>
        </ImportanceContainer>
      </TypographyImportanceSection>

      {/* Lettering Art Section */}
      <LetteringArtSection>
        <LetteringArtBackground>
          <LetteringBgElement className="line-1" />
          <LetteringBgElement className="line-2" />
          <LetteringBgElement className="dot-1" />
          <LetteringBgElement className="dot-2" />
          <LetteringBgElement className="dot-3" />
          <LetteringBgGlow className="glow-1" />
          <LetteringBgGlow className="glow-2" />
        </LetteringArtBackground>

        <LetteringArtContainer>
          <LetteringArtHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <LetteringArtTitle>
              Летеринг як мистецтво індивідуального стилю
            </LetteringArtTitle>
          </LetteringArtHeader>

          <LetteringComparison>
            <LetteringComparisonColumn
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <LetteringSubheading>
                <LetteringSubheadingIcon>
                  <MdTextFields />
                </LetteringSubheadingIcon>
                <LetteringSubheadingText>
                  Чим летеринг відрізняється від шрифтів
                </LetteringSubheadingText>
              </LetteringSubheading>

              <LetteringText>
                Шрифт — це готовий набір символів. Летеринг — це індивідуально
                намальовані літери. Він не повторюється, створюється під
                конкретне слово, проєкт чи логотип. Це{' '}
                <HighlightText>
                  максимально персоналізований елемент
                </HighlightText>
                , який неможливо скопіювати чи підробити.
              </LetteringText>

              <LetteringText>
                Летеринг доречний, коли потрібен унікальний акцент — у назві
                бренду, логотипі, упаковці, афіші. Він додає характеру та живої
                емоції, якої не дає стандартний шрифт.
              </LetteringText>

              <LetteringFeatures>
                <LetteringFeature
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <LetteringFeatureIcon>
                    <FaPalette />
                  </LetteringFeatureIcon>
                  <LetteringFeatureText>Унікальність</LetteringFeatureText>
                </LetteringFeature>

                <LetteringFeature
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <LetteringFeatureIcon>
                    <FaHeart />
                  </LetteringFeatureIcon>
                  <LetteringFeatureText>Емоційність</LetteringFeatureText>
                </LetteringFeature>

                <LetteringFeature
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <LetteringFeatureIcon>
                    <FaRegEye />
                  </LetteringFeatureIcon>
                  <LetteringFeatureText>Оригінальність</LetteringFeatureText>
                </LetteringFeature>
              </LetteringFeatures>
            </LetteringComparisonColumn>

            <LetteringVisualization
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <LetteringVisualContainer>
                <LetteringVisualHeader>
                  <LetteringVisualTitle>Шрифт vs Летеринг</LetteringVisualTitle>
                  <LetteringVisualSubtitle>
                    Візуальне порівняння
                  </LetteringVisualSubtitle>
                </LetteringVisualHeader>

                <LetteringExample>
                  <LetteringExampleLabel>Шрифт</LetteringExampleLabel>
                  <LetteringExampleFont>Бренд</LetteringExampleFont>
                  <LetteringExampleNote>Ідентичні символи</LetteringExampleNote>
                </LetteringExample>

                <LetteringVersusIcon>VS</LetteringVersusIcon>

                <LetteringExample className="hand-drawn">
                  <LetteringExampleLabel>Летеринг</LetteringExampleLabel>
                  <LetteringExampleDrawn>Бренд</LetteringExampleDrawn>
                  <LetteringExampleNote>
                    Унікальні, намальовані символи
                  </LetteringExampleNote>
                </LetteringExample>

                <LetteringUseCases>
                  <LetteringUseCaseTitle>Застосування:</LetteringUseCaseTitle>
                  <LetteringUseCaseList>
                    <LetteringUseCaseItem>
                      <LetteringUseCaseIcon />
                      <LetteringUseCaseText>
                        Логотипи та заголовки
                      </LetteringUseCaseText>
                    </LetteringUseCaseItem>
                    <LetteringUseCaseItem>
                      <LetteringUseCaseIcon />
                      <LetteringUseCaseText>
                        Упаковка та етикетки
                      </LetteringUseCaseText>
                    </LetteringUseCaseItem>
                    <LetteringUseCaseItem>
                      <LetteringUseCaseIcon />
                      <LetteringUseCaseText>
                        Плакати та вивіски
                      </LetteringUseCaseText>
                    </LetteringUseCaseItem>
                    <LetteringUseCaseItem>
                      <LetteringUseCaseIcon />
                      <LetteringUseCaseText>
                        Обкладинки книг
                      </LetteringUseCaseText>
                    </LetteringUseCaseItem>
                  </LetteringUseCaseList>
                </LetteringUseCases>

                <LetteringVisualDecoration className="wave" />
                <LetteringVisualDecoration className="dots" />
              </LetteringVisualContainer>
            </LetteringVisualization>
          </LetteringComparison>

          <LetteringShowcase>
            <LetteringShowcaseHeader
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <LetteringShowcaseHeaderLine />
              <LetteringShowcaseHeaderText>
                Приклади летерингу
              </LetteringShowcaseHeaderText>
              <LetteringShowcaseHeaderLine />
            </LetteringShowcaseHeader>

            <LetteringShowcaseGrid>
              <LetteringShowcaseItem
                className="item-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <LetteringShowcaseItemInner>Luxury</LetteringShowcaseItemInner>
              </LetteringShowcaseItem>

              <LetteringShowcaseItem
                className="item-2"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <LetteringShowcaseItemInner>
                  Creative
                </LetteringShowcaseItemInner>
              </LetteringShowcaseItem>

              <LetteringShowcaseItem
                className="item-3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <LetteringShowcaseItemInner>Modern</LetteringShowcaseItemInner>
              </LetteringShowcaseItem>
            </LetteringShowcaseGrid>
          </LetteringShowcase>

          <LetteringCta
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <LetteringCtaText>
              Бажаєте розробити унікальний летеринг для вашого проєкту?
            </LetteringCtaText>
            <LetteringCtaButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
            >
              Замовити летеринг <FaLongArrowAltRight />
            </LetteringCtaButton>
          </LetteringCta>
        </LetteringArtContainer>
      </LetteringArtSection>

      {/* Approach Section */}
      <ApproachMethodologySection>
        <ApproachBackground>
          <MethodologyDecorCircle className="circle-1" />
          <MethodologyDecorCircle className="circle-2" />
          <MethodologyDecorLine className="line-1" />
          <MethodologyDecorLine className="line-2" />
          <MethodologyDecorDot className="dot-1" />
          <MethodologyDecorDot className="dot-2" />
          <MethodologyDecorDot className="dot-3" />
        </ApproachBackground>

        <MethodologyContainer>
          <MethodologyHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <MethodologyTitle>
              Наш підхід до типографіки та летерингу
            </MethodologyTitle>
            <MethodologyUnderline />
          </MethodologyHeader>

          <MethodologySteps>
            <MethodologyStep>
              <MethodologyStepHeader>
                <MethodologyStepNumber>01</MethodologyStepNumber>
                <MethodologyStepTitle>
                  Аналіз бренду та цільової аудиторії
                </MethodologyStepTitle>
              </MethodologyStepHeader>

              <MethodologyStepContent>
                <MethodologyStepIcon>
                  <AnalysisIcon>
                    <FaSearch />
                  </AnalysisIcon>
                </MethodologyStepIcon>

                <MethodologyStepText>
                  Перш ніж створювати типографічну систему або летеринг, ми
                  вивчаємо бренд: його позиціонування, цінності, цільову
                  аудиторію, візуальні рішення конкурентів. Це дозволяє
                  працювати в контексті та створювати{' '}
                  <HighlightText>доречні, а не випадкові</HighlightText>{' '}
                  елементи.
                </MethodologyStepText>

                <AnalysisPoints>
                  <AnalysisPoint>
                    <AnalysisPointIcon>
                      <FaUsers />
                    </AnalysisPointIcon>
                    <AnalysisPointText>Аналіз аудиторії</AnalysisPointText>
                  </AnalysisPoint>

                  <AnalysisPoint>
                    <AnalysisPointIcon>
                      <FaChartBar />
                    </AnalysisPointIcon>
                    <AnalysisPointText>Аналіз конкурентів</AnalysisPointText>
                  </AnalysisPoint>

                  <AnalysisPoint>
                    <AnalysisPointIcon>
                      <FaFont />
                    </AnalysisPointIcon>
                    <AnalysisPointText>Підбір шрифтових пар</AnalysisPointText>
                  </AnalysisPoint>
                </AnalysisPoints>
              </MethodologyStepContent>
            </MethodologyStep>

            <MethodologyStep>
              <MethodologyStepHeader>
                <MethodologyStepNumber>02</MethodologyStepNumber>
                <MethodologyStepTitle>
                  Підбір стилю: класика, мінімалізм, експеримент
                </MethodologyStepTitle>
              </MethodologyStepHeader>

              <MethodologyStepContent>
                <MethodologyStepIcon>
                  <StyleSelectionIcon>
                    <FaPalette />
                  </StyleSelectionIcon>
                </MethodologyStepIcon>

                <MethodologyStepText>
                  Залежно від завдань ми обираємо стилістику: гротески чи
                  антиква, мінімалізм чи вибагливий дизайн. Класичні рішення
                  додають солідності, експериментальні — виділяють серед
                  конкурентів.
                </MethodologyStepText>

                <StyleOptions>
                  <StyleOption>
                    <StyleOptionTitle>Класика</StyleOptionTitle>
                    <StyleOptionDivider />
                    <StyleOptionDescription>
                      для брендів з акцентом на надійність та престиж
                    </StyleOptionDescription>
                    <StyleOptionSample className="classic">A</StyleOptionSample>
                  </StyleOption>

                  <StyleOption>
                    <StyleOptionTitle>Мінімалізм</StyleOptionTitle>
                    <StyleOptionDivider />
                    <StyleOptionDescription>
                      для сучасних технологічних брендів
                    </StyleOptionDescription>
                    <StyleOptionSample className="minimal">A</StyleOptionSample>
                  </StyleOption>

                  <StyleOption>
                    <StyleOptionTitle>Експеримент</StyleOptionTitle>
                    <StyleOptionDivider />
                    <StyleOptionDescription>
                      для креативних індустрій та брендів, які хочуть вийти за
                      рамки
                    </StyleOptionDescription>
                    <StyleOptionSample className="experimental">
                      A
                    </StyleOptionSample>
                  </StyleOption>
                </StyleOptions>

                <MethodologyStepText className="note">
                  Стиль визначається не модою, а ціллю: яку реакцію має
                  викликати візуальне рішення.
                </MethodologyStepText>
              </MethodologyStepContent>
            </MethodologyStep>
          </MethodologySteps>

          <MethodologyStepCenter>
            <MethodologyStepHeader>
              <MethodologyStepNumber>03</MethodologyStepNumber>
              <MethodologyStepTitle>
                Узгодження з загальним дизайном бренду
              </MethodologyStepTitle>
            </MethodologyStepHeader>

            <MethodologyStepContent>
              <MethodologyStepIcon>
                <IntegrationIcon>
                  <FaLink />
                </IntegrationIcon>
              </MethodologyStepIcon>

              <MethodologyStepText>
                Типографіка та летеринг не існують ізольовано. Вони вплітаються
                в айдентику — логотип, кольори, макети. Ми добиваємося
                <HighlightText> повної візуальної цілісності</HighlightText>.
                Все виглядає злагоджено, логічно і стильно на всіх носіях — від
                веб-сайту до офлайнових матеріалів.
              </MethodologyStepText>

              <IntegrationPoints>
                <IntegrationDevice
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <IntegrationDeviceScreen>
                    <IntegrationDeviceHeader />
                    <IntegrationDeviceContent>
                      <IntegrationDeviceTitle />
                      <IntegrationDeviceText />
                      <IntegrationDeviceText />
                    </IntegrationDeviceContent>
                  </IntegrationDeviceScreen>
                  <IntegrationDeviceLabel>Веб</IntegrationDeviceLabel>
                </IntegrationDevice>

                <IntegrationDevice
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <IntegrationDeviceScreen className="print">
                    <IntegrationPrintElement className="logo" />
                    <IntegrationPrintElement className="heading" />
                    <IntegrationPrintElement className="text" />
                    <IntegrationPrintElement className="text" />
                  </IntegrationDeviceScreen>
                  <IntegrationDeviceLabel>Поліграфія</IntegrationDeviceLabel>
                </IntegrationDevice>

                <IntegrationDevice
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <IntegrationDeviceScreen className="mobile">
                    <IntegrationDeviceHeader className="mobile" />
                    <IntegrationDeviceContent className="mobile">
                      <IntegrationDeviceTitle className="mobile" />
                      <IntegrationDeviceText className="mobile" />
                      <IntegrationDeviceText className="mobile" />
                    </IntegrationDeviceContent>
                  </IntegrationDeviceScreen>
                  <IntegrationDeviceLabel>Мобільний</IntegrationDeviceLabel>
                </IntegrationDevice>
              </IntegrationPoints>
            </MethodologyStepContent>

            <MethodologyStepVisual>
              <IntegrationVisual>
                <IntegrationCenterPiece>
                  <IntegrationCenterIcon>
                    <FaFont />
                  </IntegrationCenterIcon>
                </IntegrationCenterPiece>
                <IntegrationOuterCircle />
                <IntegrationConnection className="connection-1" />
                <IntegrationConnection className="connection-2" />
                <IntegrationConnection className="connection-3" />
                <IntegrationNode className="node-1">
                  <FaDesktop />
                </IntegrationNode>
                <IntegrationNode className="node-2">
                  <FaMobileAlt />
                </IntegrationNode>
                <IntegrationNode className="node-3">
                  <FaPrint />
                </IntegrationNode>
              </IntegrationVisual>
            </MethodologyStepVisual>
          </MethodologyStepCenter>

          {/* Добавляю новый блок преимуществ */}
          <BenefitsSection>
            <BenefitsSectionBackground>
              <BenefitsBgGradient className="gradient-1" />
              <BenefitsBgGradient className="gradient-2" />
              <BenefitsBgElement className="line-1" />
              <BenefitsBgElement className="line-2" />
              <BenefitsBgElement className="dot-1" />
              <BenefitsBgElement className="dot-2" />
              <BenefitsBgElement className="dot-3" />
              <BenefitsBgText>A</BenefitsBgText>
              <BenefitsBgText className="text-2">Б</BenefitsBgText>
              <BenefitsBgText className="text-3">S</BenefitsBgText>
            </BenefitsSectionBackground>

            <BenefitsContainer>
              <BenefitsHeader
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <BenefitsTitle>
                  Переваги професійної типографіки та летерингу
                </BenefitsTitle>
                <BenefitsTitleAccent />
              </BenefitsHeader>

              <BenefitsGrid>
                <BenefitCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <BenefitCardInner>
                    <BenefitIconContainer className="recognition">
                      <BenefitIcon>
                        <FaRegEye />
                      </BenefitIcon>
                    </BenefitIconContainer>

                    <BenefitCardContent>
                      <BenefitCardTitle>
                        Підвищення впізнаваності
                      </BenefitCardTitle>
                      <BenefitCardText>
                        Унікальна типографіка робить бренд пізнаваним навіть без
                        логотипа. Вона створює візуальні асоціації, які
                        закріплюються в пам'яті.
                        <HighlightText>
                          {' '}
                          Один шрифт — і користувач згадує вас.
                        </HighlightText>
                      </BenefitCardText>
                    </BenefitCardContent>

                    <BenefitIllustration className="recognition">
                      <BenefitIllustrationItem className="logo-hidden">
                        <BenefitIllustrationLabel>
                          Логотип
                        </BenefitIllustrationLabel>
                        <FaEyeSlash />
                      </BenefitIllustrationItem>
                      <BenefitIllustrationDivider>+</BenefitIllustrationDivider>
                      <BenefitIllustrationItem className="typography">
                        <BenefitIllustrationLabel>
                          Типографіка
                        </BenefitIllustrationLabel>
                        <BenefitIllustrationTypo>Aa</BenefitIllustrationTypo>
                      </BenefitIllustrationItem>
                      <BenefitIllustrationDivider>=</BenefitIllustrationDivider>
                      <BenefitIllustrationItem className="recognition">
                        <BenefitIllustrationLabel>
                          Впізнаваність
                        </BenefitIllustrationLabel>
                        <FaBrain />
                      </BenefitIllustrationItem>
                    </BenefitIllustration>

                    <BenefitCardNumber>01</BenefitCardNumber>
                    <BenefitCardGlow className="glow-1" />
                  </BenefitCardInner>
                </BenefitCard>

                <BenefitCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <BenefitCardInner>
                    <BenefitIconContainer className="uniqueness">
                      <BenefitIcon>
                        <FaFingerprint />
                      </BenefitIcon>
                    </BenefitIconContainer>

                    <BenefitCardContent>
                      <BenefitCardTitle>Унікальність бренду</BenefitCardTitle>
                      <BenefitCardText>
                        Ми створюємо нетипові рішення — летеринг або кастомну
                        типографіку, яких немає у шаблонних генераторах.
                        <HighlightText>
                          {' '}
                          Ваш бренд отримує власну візуальну мову.
                        </HighlightText>
                      </BenefitCardText>
                    </BenefitCardContent>

                    <BenefitIllustration className="uniqueness">
                      <BenefitIllustrationCompare>
                        <BenefitIllustrationCompareItem className="template">
                          <BenefitIllustrationLabel>
                            Шаблон
                          </BenefitIllustrationLabel>
                          <BenefitIllustrationTemplate>
                            Aa
                          </BenefitIllustrationTemplate>
                        </BenefitIllustrationCompareItem>
                        <BenefitIllustrationCompareVs>
                          vs
                        </BenefitIllustrationCompareVs>
                        <BenefitIllustrationCompareItem className="custom">
                          <BenefitIllustrationLabel>
                            Кастом
                          </BenefitIllustrationLabel>
                          <BenefitIllustrationCustom>
                            Aa
                          </BenefitIllustrationCustom>
                        </BenefitIllustrationCompareItem>
                      </BenefitIllustrationCompare>
                    </BenefitIllustration>

                    <BenefitCardNumber>02</BenefitCardNumber>
                    <BenefitCardGlow className="glow-2" />
                  </BenefitCardInner>
                </BenefitCard>

                <BenefitCard
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <BenefitCardInner>
                    <BenefitIconContainer className="readability">
                      <BenefitIcon>
                        <FaAlignLeft />
                      </BenefitIcon>
                    </BenefitIconContainer>

                    <BenefitCardContent>
                      <BenefitCardTitle>
                        Краще візуальне сприйняття
                      </BenefitCardTitle>
                      <BenefitCardText>
                        Якісна типографіка підвищує читабельність, структурує
                        контент, направляє увагу.
                        <HighlightText>
                          {' '}
                          Це особливо критично в інтерфейсах, презентаціях,
                          рекламі.
                        </HighlightText>
                      </BenefitCardText>
                    </BenefitCardContent>

                    <BenefitIllustration className="readability">
                      <BenefitReadabilityExample>
                        <BenefitReadabilityBefore>
                          <BenefitIllustrationLabel>
                            До
                          </BenefitIllustrationLabel>
                          <BenefitReadabilityBeforeContent>
                            <BenefitReadabilityLine className="line-1" />
                            <BenefitReadabilityLine className="line-2" />
                            <BenefitReadabilityLine className="line-3" />
                            <BenefitReadabilityLine className="line-4" />
                          </BenefitReadabilityBeforeContent>
                        </BenefitReadabilityBefore>
                        <BenefitReadabilityAfter>
                          <BenefitIllustrationLabel>
                            Після
                          </BenefitIllustrationLabel>
                          <BenefitReadabilityAfterContent>
                            <BenefitReadabilityTitle />
                            <BenefitReadabilitySubtitle />
                            <BenefitReadabilityLine className="line-1" />
                            <BenefitReadabilityLine className="line-2" />
                          </BenefitReadabilityAfterContent>
                        </BenefitReadabilityAfter>
                      </BenefitReadabilityExample>
                    </BenefitIllustration>

                    <BenefitCardNumber>03</BenefitCardNumber>
                    <BenefitCardGlow className="glow-3" />
                  </BenefitCardInner>
                </BenefitCard>
              </BenefitsGrid>
            </BenefitsContainer>
          </BenefitsSection>
        </MethodologyContainer>
      </ApproachMethodologySection>

      {/* Workflow Section - How we work */}
      <WorkflowSection>
        <WorkflowContainer>
          <WorkflowHeader>
            <WorkflowHeadingAccent>Процес</WorkflowHeadingAccent>
            <WorkflowTitle>
              Як ми працюємо — приклад підходу до кожного проєкту
            </WorkflowTitle>
            <WorkflowDescription>
              Кожен бренд — це окрема історія, тому ми не використовуємо
              шаблони. Наш підхід — це поєднання аналітики, дизайнерської
              експертизи та уваги до деталей. Ми не просто підбираємо шрифти —
              ми формуємо типографічну систему, яка працює на ідентичність
              бренду.
            </WorkflowDescription>
          </WorkflowHeader>

          <WorkflowProcess>
            <WorkflowStep $delay="0.1s">
              <StepNumber $active={true}>
                <div className="number">1</div>
              </StepNumber>
              <StepContent>
                <StepTitle>
                  <div className="icon">
                    <FaSearch />
                  </div>
                  Брифінг та початкове занурення
                </StepTitle>
                <StepDescription>
                  Починаємо з глибокого розуміння вашого бізнесу: хто ви, чим
                  відрізняєтесь, яка ваша аудиторія, у якому стилі ви хочете з
                  нею спілкуватися. Ми вивчаємо продукти, послуги, місію бренду,
                  вже наявні візуальні елементи.
                </StepDescription>
                <StepVisual className="briefing">
                  <div className="tag">
                    <span className="dot"></span>Місія бренду
                  </div>
                  <div className="tag">
                    <span className="dot"></span>Цільова аудиторія
                  </div>
                  <div className="tag">
                    <span className="dot"></span>Стиль комунікації
                  </div>
                  <div className="tag">
                    <span className="dot"></span>Візуальні елементи
                  </div>
                  <div className="tag">
                    <span className="dot"></span>Продукти/послуги
                  </div>
                </StepVisual>
                <StepAccent>01</StepAccent>
              </StepContent>
            </WorkflowStep>

            <WorkflowStep $delay="0.2s">
              <StepNumber>
                <div className="number">2</div>
              </StepNumber>
              <StepContent>
                <StepTitle>
                  <div className="icon">
                    <FaChartBar />
                  </div>
                  Аналіз ринку та конкурентів
                </StepTitle>
                <StepDescription>
                  Досліджуємо середовище, в якому працює ваш бренд. Вивчаємо
                  візуальні рішення конкурентів, шрифтові тренди у вашій ніші,
                  аналізуємо типові підходи, щоб уникнути повторів та створити
                  відмінність.
                </StepDescription>
                <StepVisual className="market">
                  <div className="competitor">Конкурент А</div>
                  <div className="competitor">Конкурент Б</div>
                  <div className="competitor">Конкурент В</div>
                </StepVisual>
                <StepAccent>02</StepAccent>
              </StepContent>
            </WorkflowStep>

            <WorkflowStep $delay="0.3s">
              <StepNumber>
                <div className="number">3</div>
              </StepNumber>
              <StepContent>
                <StepTitle>
                  <div className="icon">
                    <FaLightbulb />
                  </div>
                  Розробка концепції
                </StepTitle>
                <StepDescription>
                  На цьому етапі ми пропонуємо декілька напрямків: типографічні
                  пари, стильові референси, варіанти летерингу. Якщо потрібно —
                  створюємо начерки рукописних рішень, які підкреслюють
                  індивідуальність.
                </StepDescription>
                <StepVisual className="concept">
                  <div className="font-sample">Aa</div>
                  <div className="font-sample">Bb</div>
                  <div className="font-sample">Cc</div>
                  <div className="font-sample">Dd</div>
                </StepVisual>
                <StepAccent>03</StepAccent>
              </StepContent>
            </WorkflowStep>

            <WorkflowStep $delay="0.4s">
              <StepNumber>
                <div className="number">4</div>
              </StepNumber>
              <StepContent>
                <StepTitle>
                  <div className="icon">
                    <FaDesktop />
                  </div>
                  Дизайн і тестування
                </StepTitle>
                <StepDescription>
                  Створюємо фінальну версію типографіки або летерингу,
                  перевіряємо, як вона виглядає в реальних сценаріях: у
                  логотипі, на сайті, в макетах, у соціальних мережах.
                  Враховуємо адаптивність, читабельність на різних носіях.
                </StepDescription>
                <StepVisual className="testing">
                  <div className="device">
                    <FaDesktop />
                  </div>
                  <div className="device">
                    <FaMobileAlt />
                  </div>
                  <div className="device">
                    <FaPrint />
                  </div>
                </StepVisual>
                <StepAccent>04</StepAccent>
              </StepContent>
            </WorkflowStep>

            <WorkflowStep $delay="0.5s">
              <StepNumber>
                <div className="number">5</div>
              </StepNumber>
              <StepContent>
                <StepTitle>
                  <div className="icon">
                    <FaLayerGroup />
                  </div>
                  Узгодження і підготовка фінальних матеріалів
                </StepTitle>
                <StepDescription>
                  Після затвердження ми передаємо всі необхідні файли — у
                  форматах для друку та цифрового використання. За запитом —
                  готуємо міні-гайдлайн або інструкції з правильного
                  використання шрифтів чи летерингу.
                </StepDescription>
                <StepVisual className="delivery">
                  <div className="file">
                    <div className="icon">
                      <FaFont />
                    </div>
                    <div className="label">.OTF</div>
                  </div>
                  <div className="file">
                    <div className="icon">
                      <FaPencilAlt />
                    </div>
                    <div className="label">.AI</div>
                  </div>
                  <div className="file">
                    <div className="icon">
                      <FaLayerGroup />
                    </div>
                    <div className="label">Гайдлайн</div>
                  </div>
                </StepVisual>
                <StepAccent>05</StepAccent>
              </StepContent>
            </WorkflowStep>
          </WorkflowProcess>

          <WorkflowBackground>
            <WorkflowCircle className="circle1" />
            <WorkflowCircle className="circle2" />
            <WorkflowGrid>
              {[...Array(19)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="grid-line-h"
                  style={{ gridRow: i + 1 }}
                />
              ))}
              {[...Array(19)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="grid-line-v"
                  style={{ gridColumn: i + 1 }}
                />
              ))}
            </WorkflowGrid>
          </WorkflowBackground>
        </WorkflowContainer>
      </WorkflowSection>

      {/* Order Process Section - How to Order */}
      <OrderProcessSection>
        <OrderProcessContainer>
          <OrderProcessHeader>
            <OrderProcessTitle>Як замовити послугу</OrderProcessTitle>
            <OrderProcessSubtitle>Етапи співпраці</OrderProcessSubtitle>
            <OrderProcessDescription>
              Ми зробили процес максимально зручним для клієнта — без зайвої
              бюрократії, але з повним контролем якості на кожному етапі.
            </OrderProcessDescription>
          </OrderProcessHeader>

          <OrderProcessSteps>
            <ProcessStepContainer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ProcessStepNumber>
                <div className="number">1</div>
                <div className="indicator">
                  <FaPencilAlt />
                </div>
              </ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>
                  <div className="icon">
                    <FaPencilAlt />
                  </div>
                  Заявка
                </ProcessStepTitle>
                <ProcessStepDescription>
                  Залишаєте запит через форму на сайті або надсилаєте листа з
                  коротким описом задачі. Ми відповідаємо протягом одного
                  робочого дня.
                </ProcessStepDescription>
                <ProcessStepDecoration>01</ProcessStepDecoration>
              </ProcessStepContent>
              <ProcessStepArrow>
                <FaArrowDown />
              </ProcessStepArrow>
            </ProcessStepContainer>

            <ProcessStepContainer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ProcessStepNumber>
                <div className="number">2</div>
                <div className="indicator">
                  <FaCommentAlt />
                </div>
              </ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>
                  <div className="icon">
                    <FaCommentAlt />
                  </div>
                  Обговорення задачі
                </ProcessStepTitle>
                <ProcessStepDescription>
                  Ми ставимо уточнювальні запитання, обговорюємо очікування,
                  стиль, обсяг роботи. За потреби — надсилаємо короткий бриф для
                  заповнення.
                </ProcessStepDescription>
                <ProcessStepDecoration>02</ProcessStepDecoration>
              </ProcessStepContent>
              <ProcessStepArrow>
                <FaArrowDown />
              </ProcessStepArrow>
            </ProcessStepContainer>

            <ProcessStepContainer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ProcessStepNumber>
                <div className="number">3</div>
                <div className="indicator">
                  <FaFileAlt />
                </div>
              </ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>
                  <div className="icon">
                    <FaFileAlt />
                  </div>
                  Комерційна пропозиція
                </ProcessStepTitle>
                <ProcessStepDescription>
                  Формуємо чітку пропозицію із вартістю, термінами та обсягом.
                  Ви розумієте, що саме отримаєте, скільки це коштує і коли буде
                  готово.
                </ProcessStepDescription>
                <ProcessStepDecoration>03</ProcessStepDecoration>
              </ProcessStepContent>
              <ProcessStepArrow>
                <FaArrowDown />
              </ProcessStepArrow>
            </ProcessStepContainer>

            <ProcessStepContainer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <ProcessStepNumber>
                <div className="number">4</div>
                <div className="indicator">
                  <FaRocket />
                </div>
              </ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>
                  <div className="icon">
                    <FaRocket />
                  </div>
                  Початок роботи
                </ProcessStepTitle>
                <ProcessStepDescription>
                  Після узгодження умов ми підписуємо договір або підтвердження
                  про старт. Починається етап розробки: дослідження, концепції,
                  ескізи.
                </ProcessStepDescription>
                <ProcessStepDecoration>04</ProcessStepDecoration>
              </ProcessStepContent>
              <ProcessStepArrow>
                <FaArrowDown />
              </ProcessStepArrow>
            </ProcessStepContainer>

            <ProcessStepContainer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ProcessStepNumber>
                <div className="number">5</div>
                <div className="indicator">
                  <FaRegEye />
                </div>
              </ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>
                  <div className="icon">
                    <FaRegEye />
                  </div>
                  Проміжне погодження
                </ProcessStepTitle>
                <ProcessStepDescription>
                  На етапі чорнових рішень ми показуємо проміжні варіанти, щоб
                  узгодити напрямок і внести правки до фіналізації. Ви залучені
                  до процесу.
                </ProcessStepDescription>
                <ProcessStepDecoration>05</ProcessStepDecoration>
              </ProcessStepContent>
              <ProcessStepArrow>
                <FaArrowDown />
              </ProcessStepArrow>
            </ProcessStepContainer>

            <ProcessStepContainer
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <ProcessStepNumber>
                <div className="number">6</div>
                <div className="indicator">
                  <FaCheck />
                </div>
              </ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>
                  <div className="icon">
                    <FaCheck />
                  </div>
                  Завершення та передача результату
                </ProcessStepTitle>
                <ProcessStepDescription>
                  Ви отримуєте всі файли у зручних форматах, а також пояснення
                  щодо їх використання. Після завершення — залишаєтесь із
                  візуальним активом, що працює на бренд.
                </ProcessStepDescription>
                <ProcessStepDecoration>06</ProcessStepDecoration>
              </ProcessStepContent>
            </ProcessStepContainer>
          </OrderProcessSteps>

          <OrderProcessBackground>
            <OrderProcessBgLines className="line-1" />
            <OrderProcessBgLines className="line-2" />
            <OrderProcessBgLines className="line-3" />
            <OrderProcessBgDot className="dot-1" />
            <OrderProcessBgDot className="dot-2" />
            <OrderProcessBgDot className="dot-3" />
          </OrderProcessBackground>
        </OrderProcessContainer>
      </OrderProcessSection>

      {/* FAQ Section */}
      <FaqSection>
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
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <FaqItemContent
                  layout
                  initial={{ borderRadius: 16 }}
                  key={`faq-${index}`}
                  transition={{
                    layout: {
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    },
                  }}
                >
                  <FaqQuestion
                    layout
                    onClick={() => toggleFaq(index)}
                    whileHover={{ color: 'var(--accent-color)' }}
                  >
                    <FaqQuestionText>{faq.question}</FaqQuestionText>
                    <FaqToggle
                      animate={{
                        rotate: expandedFaqs.includes(index) ? 45 : 0,
                        backgroundColor: expandedFaqs.includes(index)
                          ? 'rgba(var(--accent-color-rgb), 0.15)'
                          : 'rgba(var(--accent-color-rgb), 0.05)',
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <FaPlus />
                    </FaqToggle>
                  </FaqQuestion>

                  <AnimatePresence>
                    {expandedFaqs.includes(index) && (
                      <FaqAnswer
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          type: 'spring',
                          damping: 40,
                          stiffness: 60,
                          mass: 1,
                          opacity: { duration: 0.5, ease: 'easeInOut' },
                          height: { duration: 0.4, ease: 'easeInOut' },
                        }}
                      >
                        {faq.answer}
                      </FaqAnswer>
                    )}
                  </AnimatePresence>
                </FaqItemContent>
              </FaqItem>
            ))}
          </FaqList>

          <FaqCta
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FaqCtaText>
              Маєте додаткові запитання щодо типографіки або летерингу?
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
            >
              Зв'язатися з нами <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
      {/* Additional sections will follow here */}
    </PageContainer>
  );
};

export default TypographyLettering;

// Typography Importance Section Styles
const TypographyImportanceSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(20, 27, 43, 0.98) 100%
  );
  overflow: hidden;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      circle at 20% 30%,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 50%
    );
  z-index: 0;
`;

const floatingAnim = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
  50% { transform: translateY(-30px) rotate(5deg); opacity: 0.2; }
  100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
`;

const FloatingCharacters = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const FloatingChar = styled.div`
  position: absolute;
  font-size: 8rem;
  font-weight: 800;
  color: rgba(var(--accent-color-rgb), 0.1);
  animation: ${floatingAnim} 15s infinite ease-in-out;

  &.char-a {
    top: 15%;
    left: 5%;
    animation-delay: 0s;
    font-family: 'Times New Roman', serif;
  }

  &.char-b {
    top: 40%;
    right: 8%;
    animation-delay: 3s;
    font-family: Arial, sans-serif;
  }

  &.char-c {
    bottom: 25%;
    left: 10%;
    animation-delay: 6s;
    font-family: 'Courier New', monospace;
  }

  &.char-d {
    top: 10%;
    right: 20%;
    animation-delay: 1s;
    font-family: 'Georgia', serif;
  }

  &.char-e {
    bottom: 10%;
    right: 25%;
    animation-delay: 4s;
    font-family: 'Arial', sans-serif;
  }

  &.char-f {
    top: 60%;
    left: 20%;
    animation-delay: 7s;
    font-family: 'Trebuchet MS', sans-serif;
  }
`;

const ImportanceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const SectionHeading = styled(motion.h2)`
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

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const SectionHeadingGlow = styled.div`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.15) 0%,
    transparent 70%
  );
  filter: blur(50px);
  opacity: 0.5;
  z-index: -1;
  pointer-events: none;
`;

const TypographyExplainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const DefinitionBlock = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`;

const InfluenceBlock = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
`;

const SubHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.8rem;
`;

const SubHeadingIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.3rem;
`;

const SubHeadingText = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const DefinitionText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;
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

const FontExamplesWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 3rem;
`;

const FontExample = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.2) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  position: relative;
  z-index: 2;

  &.serif {
    font-family: 'Times New Roman', serif;
    font-weight: 500;
  }

  &.sans-serif {
    font-family: 'Arial', sans-serif;
    font-weight: 700;
  }

  &.display {
    font-family: 'Impact', sans-serif;
    font-weight: 400;
  }

  &.script {
    font-family: 'Brush Script MT', cursive;
    font-weight: 400;
  }
`;

const FontConnector = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(var(--accent-color-rgb), 0.2),
    rgba(var(--accent-color-rgb), 0.3),
    rgba(var(--accent-color-rgb), 0.2)
  );
  z-index: 1;
`;

const InfluenceText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const InfluenceList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const InfluenceItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
`;

const InfluenceIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const InfluenceItemText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const InfluenceConclusion = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const BrandExamples = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BrandExample = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.tech {
    background: linear-gradient(
      135deg,
      rgba(0, 132, 255, 0.05) 0%,
      rgba(0, 132, 255, 0.1) 100%
    );
    border-color: rgba(0, 132, 255, 0.1);
  }

  &.creative {
    background: linear-gradient(
      135deg,
      rgba(255, 103, 77, 0.05) 0%,
      rgba(255, 103, 77, 0.1) 100%
    );
    border-color: rgba(255, 103, 77, 0.1);
  }

  &.luxury {
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.05) 0%,
      rgba(212, 175, 55, 0.1) 100%
    );
    border-color: rgba(212, 175, 55, 0.1);
  }

  &.friendly {
    background: linear-gradient(
      135deg,
      rgba(50, 205, 50, 0.05) 0%,
      rgba(50, 205, 50, 0.1) 100%
    );
    border-color: rgba(50, 205, 50, 0.1);
  }
`;

const BrandExampleTitle = styled.h4`
  font-size: 2rem;
  font-weight: 700;

  &.tech {
    font-family: 'Arial', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #0084ff;
  }

  &.creative {
    font-family: 'Brush Script MT', cursive;
    color: #ff674d;
  }

  &.luxury {
    font-family: 'Times New Roman', serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #d4af37;
  }

  &.friendly {
    font-family: 'Comic Sans MS', cursive;
    color: #32cd32;
  }
`;

const BrandExampleTag = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
`;

// Lettering Art Section Styles
const LetteringArtSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(20, 27, 43, 0.98) 100%
  );
  overflow: hidden;

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

const LetteringArtBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const LetteringBgElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  &.line-1,
  &.line-2 {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
  }

  &.line-1 {
    top: 0;
  }

  &.line-2 {
    bottom: 0;
  }

  &.dot-1,
  &.dot-2,
  &.dot-3 {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  &.dot-1 {
    top: 20%;
    left: 20%;
  }

  &.dot-2 {
    top: 70%;
    left: 80%;
  }

  &.dot-3 {
    top: 50%;
    left: 50%;
  }
`;

const LetteringBgGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;

  &.glow-1,
  &.glow-2 {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 70%
    );
    filter: blur(50px);
    opacity: 0.5;
  }

  &.glow-1 {
    top: 0;
    left: 0;
  }

  &.glow-2 {
    top: 0;
    left: 0;
  }
`;

const LetteringArtContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

const LetteringArtHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const LetteringArtTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const LetteringComparison = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const LetteringComparisonColumn = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const LetteringSubheading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.8rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const LetteringSubheadingIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.3rem;
`;

const LetteringSubheadingText = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const LetteringText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

const LetteringFeatures = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 3rem;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;

const LetteringFeature = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    border-radius: 8px;
  }
`;

const LetteringFeatureIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const LetteringFeatureText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const LetteringVisualization = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    order: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 16px;
  }
`;

const LetteringVisualContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LetteringVisualHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const LetteringVisualTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const LetteringVisualSubtitle = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
`;

const LetteringExample = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;

  &.hand-drawn {
    margin-top: 2rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const LetteringVersusIcon = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
  margin: 1rem 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 50px;
    height: 1px;
    background: rgba(var(--accent-color-rgb), 0.3);
  }

  &::before {
    right: calc(100% + 10px);
  }

  &::after {
    left: calc(100% + 10px);
  }
`;

const LetteringExampleLabel = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const LetteringExampleFont = styled.div`
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--accent-color);
  font-family: 'Arial', sans-serif;
  letter-spacing: 1px;
`;

const LetteringExampleDrawn = styled.div`
  font-size: 3.8rem;
  font-weight: 700;
  color: var(--accent-color);
  font-family: 'Brush Script MT', cursive;
  transform: rotate(-5deg);
  text-shadow: 2px 2px 4px rgba(var(--accent-color-rgb), 0.2);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    opacity: 0.3;
    transform: rotate(2deg);
  }
`;

const LetteringExampleNote = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 0.5rem;
`;

const LetteringUseCases = styled.div`
  margin-top: 3rem;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;

const LetteringUseCaseTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
`;

const LetteringUseCaseList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LetteringUseCaseItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const LetteringUseCaseIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const LetteringUseCaseText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
  }
`;

const LetteringVisualDecoration = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  &.wave {
    top: 0;
    left: 0;
    background: linear-gradient(
      to right,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 50%
    );
  }

  &.dots {
    top: 0;
    left: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(var(--accent-color-rgb), 0.1) 20%,
      transparent 20%
    );
  }
`;

const LetteringShowcase = styled.div`
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const LetteringShowcaseHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const LetteringShowcaseHeaderLine = styled.div`
  width: 80px;
  height: 4px;
  background: var(--accent-color);
  margin: 0 auto;
`;

const LetteringShowcaseHeaderText = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
`;

const LetteringShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const LetteringShowcaseItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &.item-1 {
    background: linear-gradient(
      135deg,
      rgba(0, 132, 255, 0.05) 0%,
      rgba(0, 132, 255, 0.1) 100%
    );
    border-color: rgba(0, 132, 255, 0.1);
  }

  &.item-2 {
    background: linear-gradient(
      135deg,
      rgba(255, 103, 77, 0.05) 0%,
      rgba(255, 103, 77, 0.1) 100%
    );
    border-color: rgba(255, 103, 77, 0.1);
  }

  &.item-3 {
    background: linear-gradient(
      135deg,
      rgba(212, 175, 55, 0.05) 0%,
      rgba(212, 175, 55, 0.1) 100%
    );
    border-color: rgba(212, 175, 55, 0.1);
  }
`;

const LetteringShowcaseItemInner = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const LetteringCta = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.2) 100%
  );
  border-radius: 24px;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(var(--accent-color-rgb), 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 70%
    );
    filter: blur(30px);
    opacity: 0.5;
    z-index: -1;
  }
`;

const LetteringCtaText = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LetteringCtaButton = styled(motion.button)`
  background: linear-gradient(
    90deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.4);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 30px rgba(var(--accent-color-rgb), 0.6);
  }

  svg {
    font-size: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

// Approach Section Styles
const ApproachMethodologySection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    var(--bg-primary) 0%,
    rgba(20, 27, 43, 0.98) 100%
  );
  overflow: hidden;

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

const ApproachBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const MethodologyDecorCircle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  &.circle-1,
  &.circle-2 {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(var(--accent-color-rgb), 0.1) 0%,
      transparent 70%
    );
    filter: blur(50px);
    opacity: 0.5;
  }

  &.circle-1 {
    top: 0;
  }

  &.circle-2 {
    top: 0;
  }
`;

const MethodologyDecorLine = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  &.line-1,
  &.line-2 {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
  }

  &.line-1 {
    top: 0;
  }

  &.line-2 {
    bottom: 0;
  }
`;

const MethodologyDecorDot = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;

  &.dot-1,
  &.dot-2,
  &.dot-3 {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
  }

  &.dot-1 {
    top: 20%;
    left: 20%;
  }

  &.dot-2 {
    top: 70%;
    left: 80%;
  }

  &.dot-3 {
    top: 50%;
    left: 50%;
  }
`;

const MethodologyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 900px;
    padding: 0 1.5rem;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

const MethodologyHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const MethodologyTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 2.8rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const MethodologyUnderline = styled.div`
  width: 80px;
  height: 4px;
  background: var(--accent-color);
  margin: 0 auto;
`;

const MethodologySteps = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const MethodologyStep = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const MethodologyStepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MethodologyStepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.8rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

const MethodologyStepTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const MethodologyStepText = styled.p`
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const AnalysisPoints = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;

const AnalysisPoint = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const AnalysisPointIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

const AnalysisPointText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const StyleOptions = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 3rem;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;

const StyleOption = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    border-radius: 8px;
  }
`;

const StyleOptionTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

const StyleOptionDivider = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
`;

const StyleOptionDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const StyleOptionSample = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.2) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  position: relative;
  z-index: 2;
`;

const MethodologyStepVisual = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntegrationVisual = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  margin: 0 auto;
  transform: translateY(-10px);

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const IntegrationCenterPiece = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--accent-color) 0%,
    var(--accent-color-light) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
  animation: ${pulse} 3s infinite ease-in-out;
`;

const IntegrationCenterIcon = styled.div`
  font-size: 1.8rem;
  color: white;
`;

const IntegrationOuterCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 2px dashed rgba(var(--accent-color-rgb), 0.3);
  z-index: 1;
  animation: ${rotate} 30s infinite linear;
`;

const IntegrationConnection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90px;
  height: 2px;
  background: rgba(var(--accent-color-rgb), 0.3);
  z-index: 2;

  &.connection-1 {
    transform: translate(0, -50%) rotate(0deg);
  }

  &.connection-2 {
    transform: translate(-100%, -50%) rotate(120deg);
  }

  &.connection-3 {
    transform: translate(-100%, -50%) rotate(240deg);
  }
`;

const IntegrationNode = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(var(--accent-color-rgb), 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.4rem;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.1);
    color: var(--accent-color-light);
    box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.2);
  }

  &.node-1 {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &.node-2 {
    bottom: 30px;
    right: 10px;
  }

  &.node-3 {
    bottom: 30px;
    left: 10px;
  }
`;

const IntegrationPoints = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const IntegrationDevice = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const IntegrationDeviceScreen = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  width: 120px;
  height: 80px;
  padding: 8px;

  &.print {
    background: rgba(255, 255, 255, 0.03);
    border: 1px dashed rgba(255, 255, 255, 0.1);
  }

  &.mobile {
    width: 60px;
    height: 100px;
    border-radius: 12px;
  }
`;

const IntegrationDeviceHeader = styled.div`
  height: 8px;
  background: rgba(var(--accent-color-rgb), 0.2);
  border-radius: 4px;
  margin-bottom: 8px;

  &.mobile {
    height: 6px;
  }
`;

const IntegrationDeviceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  &.mobile {
    gap: 4px;
  }
`;

const IntegrationDeviceTitle = styled.div`
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  width: 80%;

  &.mobile {
    height: 6px;
  }
`;

const IntegrationDeviceText = styled.div`
  height: 6px;
  background: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  width: 100%;

  &.mobile {
    height: 4px;
  }
`;

const IntegrationPrintElement = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-bottom: 8px;

  &.logo {
    height: 15px;
    width: 40px;
    margin: 0 auto 10px;
  }

  &.heading {
    height: 8px;
    width: 90%;
    margin: 0 auto 8px;
  }

  &.text {
    height: 6px;
    width: 100%;
    margin-bottom: 6px;
  }
`;

const IntegrationDeviceLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-top: 5px;
`;

const AnalysisIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.3rem;
`;

const StyleSelectionIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.3rem;
`;

const IntegrationIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgba(var(--accent-color-rgb), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.3rem;
`;

// Добавляю определение стиля MethodologyStepCenter
const MethodologyStepNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: rgba(var(--accent-color-rgb), 0.2);
  line-height: 1;
  margin-right: 1rem;
`;

const MethodologyStepCenter = styled.div`
  grid-column: 1 / span 2;
  max-width: 800px;
  margin: 3rem auto 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 992px) {
    grid-column: 1;
    margin: 2rem auto 0;
  }
`;

const MethodologyStepIcon = styled.div`
  margin-bottom: 1.5rem;
`;

// Добавляю стили для нового блока
const BenefitsSection = styled.section`
  padding: 8rem 0 4rem;
  position: relative;
  overflow: hidden;
`;

const BenefitsSectionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

const BenefitsBgGradient = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  z-index: 0;
  opacity: 0.15;

  &.gradient-1 {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.2) 0%,
      transparent 70%
    );
    top: -200px;
    right: -200px;
    animation: ${float} 20s infinite ease-in-out;
  }

  &.gradient-2 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.15) 0%,
      transparent 70%
    );
    bottom: -100px;
    left: -100px;
    animation: ${float} 25s infinite ease-in-out reverse;
  }
`;

const BenefitsBgElement = styled.div`
  position: absolute;
  z-index: 0;

  &.line-1,
  &.line-2 {
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--accent-color-rgb), 0.05),
      transparent
    );
  }

  &.line-1 {
    top: 30%;
    transform: rotate(5deg);
  }

  &.line-2 {
    bottom: 20%;
    transform: rotate(-5deg);
  }

  &.dot-1,
  &.dot-2,
  &.dot-3 {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(var(--accent-color-rgb), 0.1);
  }

  &.dot-1 {
    top: 20%;
    left: 10%;
    animation: ${float} 15s infinite ease-in-out;
  }

  &.dot-2 {
    top: 70%;
    right: 15%;
    animation: ${float} 18s infinite ease-in-out;
  }

  &.dot-3 {
    top: 40%;
    left: 50%;
    animation: ${float} 20s infinite ease-in-out reverse;
  }
`;

const BenefitsBgText = styled.div`
  position: absolute;
  font-size: 20rem;
  font-weight: 900;
  color: rgba(var(--accent-color-rgb), 0.02);
  z-index: 0;

  &:first-child {
    top: 5%;
    left: 10%;
  }

  &.text-2 {
    bottom: 10%;
    right: 10%;
  }

  &.text-3 {
    top: 40%;
    right: 30%;
    transform: rotate(10deg);
  }
`;

const BenefitsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const BenefitsHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
`;

const BenefitsTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const BenefitsTitleAccent = styled.div`
  width: 120px;
  height: 4px;
  background: linear-gradient(
    90deg,
    var(--accent-color),
    var(--accent-color-light)
  );
  margin: 0 auto;
  border-radius: 2px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  height: 100%;
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
  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
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
    background: radial-gradient(
      circle at center,
      rgba(255, 123, 0, 0.15) 0%,
      transparent 70%
    );
  }

  &.glow-2 {
    background: radial-gradient(
      circle at center,
      rgba(0, 178, 255, 0.15) 0%,
      transparent 70%
    );
  }

  &.glow-3 {
    background: radial-gradient(
      circle at center,
      rgba(0, 208, 132, 0.15) 0%,
      transparent 70%
    );
  }

  ${BenefitCardInner}:hover & {
    opacity: 1;
  }
`;

const BenefitIconContainer = styled.div`
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

  &.recognition {
    background: linear-gradient(
      135deg,
      rgba(255, 123, 0, 0.1) 0%,
      rgba(255, 123, 0, 0.3) 100%
    );

    ${BenefitCardInner}:hover & {
      background: linear-gradient(
        135deg,
        rgba(255, 123, 0, 0.8) 0%,
        rgba(255, 123, 0, 1) 100%
      );
    }
  }

  &.uniqueness {
    background: linear-gradient(
      135deg,
      rgba(0, 178, 255, 0.1) 0%,
      rgba(0, 178, 255, 0.3) 100%
    );

    ${BenefitCardInner}:hover & {
      background: linear-gradient(
        135deg,
        rgba(0, 178, 255, 0.8) 0%,
        rgba(0, 178, 255, 1) 100%
      );
    }
  }

  &.readability {
    background: linear-gradient(
      135deg,
      rgba(0, 208, 132, 0.1) 0%,
      rgba(0, 208, 132, 0.3) 100%
    );

    ${BenefitCardInner}:hover & {
      background: linear-gradient(
        135deg,
        rgba(0, 208, 132, 0.8) 0%,
        rgba(0, 208, 132, 1) 100%
      );
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
  margin-bottom: 2rem;
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

const BenefitIllustration = styled.div`
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const BenefitIllustrationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 0.8rem;
  width: 80px;
  height: 80px;

  &.logo-hidden {
    color: rgba(255, 255, 255, 0.3);
    font-size: 1.8rem;
  }

  &.typography {
    color: var(--accent-color);
  }

  &.recognition {
    color: rgba(255, 123, 0, 0.8);
    font-size: 1.8rem;
  }
`;

const BenefitIllustrationLabel = styled.div`
  font-size: 0.7rem;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
`;

const BenefitIllustrationDivider = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.2);
  align-self: center;
`;

const BenefitIllustrationTypo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  font-family: 'Georgia', serif;
`;

const BenefitIllustrationCompare = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BenefitIllustrationCompareItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  width: 40%;

  &.template {
    opacity: 0.5;
  }

  &.custom {
    background: rgba(0, 178, 255, 0.05);
    border: 1px solid rgba(0, 178, 255, 0.1);
  }
`;

const BenefitIllustrationTemplate = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Arial', sans-serif;
  color: rgba(255, 255, 255, 0.5);
`;

const BenefitIllustrationCustom = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Brush Script MT', cursive;
  color: rgba(0, 178, 255, 0.8);
  transform: rotate(-5deg);
`;

const BenefitIllustrationCompareVs = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
  text-transform: uppercase;
  padding: 0.3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BenefitReadabilityExample = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const BenefitReadabilityBefore = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  padding: 0.8rem;
`;

const BenefitReadabilityAfter = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  background: rgba(0, 208, 132, 0.05);
  border: 1px solid rgba(0, 208, 132, 0.1);
  border-radius: 10px;
  padding: 0.8rem;
`;

const BenefitReadabilityBeforeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const BenefitReadabilityAfterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const BenefitReadabilityLine = styled.div`
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;

  &.line-1 {
    width: 100%;
  }

  &.line-2 {
    width: 90%;
  }

  &.line-3 {
    width: 95%;
  }

  &.line-4 {
    width: 85%;
  }
`;

const BenefitReadabilityTitle = styled.div`
  height: 8px;
  width: 70%;
  background: rgba(0, 208, 132, 0.3);
  border-radius: 4px;
  margin-bottom: 0.5rem;
`;

const BenefitReadabilitySubtitle = styled.div`
  height: 6px;
  width: 50%;
  background: rgba(0, 208, 132, 0.2);
  border-radius: 3px;
  margin-bottom: 0.5rem;
`;

// Workflow Section - How we work
const WorkflowSection = styled.section`
  padding: 8rem 0;
  position: relative;
  background: linear-gradient(
    to bottom,
    rgba(16, 24, 39, 0.98) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
`;

const WorkflowContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const WorkflowHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  position: relative;
`;

const WorkflowHeadingAccent = styled.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12rem;
  font-weight: 900;
  opacity: 0.03;
  white-space: nowrap;
  color: var(--accent-color);
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 8rem;
  }
`;

const WorkflowTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;

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

const WorkflowDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 2rem auto 0;
  color: var(--text-secondary);
`;

const WorkflowProcess = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  margin-top: 4rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--accent-color-rgb), 0.2),
      rgba(var(--accent-color-rgb), 0.4),
      rgba(var(--accent-color-rgb), 0.2),
      transparent
    );
    transform: translateX(-50%);
    z-index: 1;
  }

  @media (max-width: 992px) {
    &::before {
      left: 50px;
    }
  }

  @media (max-width: 576px) {
    &::before {
      left: 35px;
    }
  }
`;

const stepAppear = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const pulseDot = keyframes`
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0.7); }
  70% { transform: scale(1.2); box-shadow: 0 0 0 10px rgba(var(--accent-color-rgb), 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(var(--accent-color-rgb), 0); }
`;

const WorkflowStep = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  position: relative;
  z-index: 2;
  animation: ${stepAppear} 0.6s ease-out forwards;
  animation-delay: ${props => props.$delay || '0s'};
  opacity: 0;

  &:nth-child(even) {
    direction: rtl;
  }

  @media (max-width: 992px) {
    grid-template-columns: 100px 1fr;
    direction: ltr !important;
    gap: 1.5rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 70px 1fr;
    gap: 1rem;
  }
`;

const StepNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--accent-color-light) 100%
    );
    color: white;
    margin-bottom: 1rem;
    position: relative;
    z-index: 3;

    &::before {
      content: '';
      position: absolute;
      width: 86px;
      height: 86px;
      border-radius: 50%;
      border: 2px dashed rgba(var(--accent-color-rgb), 0.3);
      animation: ${props => (props.$active ? pulseDot : 'none')} 2s infinite;
    }
  }

  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--accent-color);
    margin-top: 1rem;
    box-shadow: 0 0 0 5px rgba(var(--accent-color-rgb), 0.2);
  }

  @media (max-width: 992px) {
    .number {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;

      &::before {
        width: 74px;
        height: 74px;
      }
    }
  }

  @media (max-width: 576px) {
    .number {
      width: 50px;
      height: 50px;
      font-size: 1.3rem;

      &::before {
        width: 62px;
        height: 62px;
      }
    }
  }
`;

const StepContent = styled.div`
  direction: ltr;
  text-align: left;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    transform: translateY(-5px);
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(var(--accent-color-rgb), 0.1);
    color: var(--accent-color);
    font-size: 1.2rem;
    flex-shrink: 0;
  }

  @media (max-width: 576px) {
    font-size: 1.3rem;

    .icon {
      width: 36px;
      height: 36px;
      font-size: 1rem;
    }
  }
`;

const StepDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const StepAccent = styled.div`
  position: absolute;
  bottom: -30px;
  right: -30px;
  font-size: 8rem;
  font-weight: 900;
  color: rgba(var(--accent-color-rgb), 0.03);
  pointer-events: none;

  @media (max-width: 576px) {
    font-size: 6rem;
    bottom: -20px;
    right: -20px;
  }
`;

const StepVisual = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  overflow: hidden;

  &.briefing {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;

    .tag {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 30px;
      font-size: 0.9rem;
      color: var(--text-secondary);
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }

      &:nth-child(1) .dot {
        background: #ff7e5f;
      }
      &:nth-child(2) .dot {
        background: #feb47b;
      }
      &:nth-child(3) .dot {
        background: #7ba7fe;
      }
      &:nth-child(4) .dot {
        background: #b47bfe;
      }
      &:nth-child(5) .dot {
        background: #7bfeba;
      }
    }
  }

  &.market {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;

    .competitor {
      aspect-ratio: 1/1;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
      }

      &:nth-child(1)::before {
        background: #ff7e5f;
      }
      &:nth-child(2)::before {
        background: #feb47b;
      }
      &:nth-child(3)::before {
        background: #7ba7fe;
      }
    }
  }

  &.concept {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding-bottom: 0.5rem;

    .font-sample {
      min-width: 150px;
      height: 80px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;

      &:nth-child(1) {
        font-family: 'Times New Roman', serif;
      }
      &:nth-child(2) {
        font-family: 'Arial', sans-serif;
      }
      &:nth-child(3) {
        font-family: 'Courier New', monospace;
      }
      &:nth-child(4) {
        font-style: italic;
      }
    }
  }

  &.testing {
    display: flex;
    gap: 0.8rem;

    .device {
      flex: 1;
      height: 80px;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.03);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: var(--accent-color);
    }
  }

  &.delivery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.8rem;

    .file {
      aspect-ratio: 1/1;
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.03);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      .icon {
        font-size: 1.5rem;
        color: var(--accent-color);
      }

      .label {
        font-size: 0.8rem;
        color: var(--text-secondary);
      }
    }
  }

  @media (max-width: 576px) {
    &.concept .font-sample {
      min-width: 120px;
      height: 60px;
    }

    &.testing .device {
      height: 60px;
    }
  }
`;

const WorkflowBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const WorkflowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);

  &.circle1 {
    width: 500px;
    height: 500px;
    background: radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.06) 0%,
      transparent 70%
    );
    top: 10%;
    right: -200px;
  }

  &.circle2 {
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(94, 96, 206, 0.04) 0%,
      transparent 70%
    );
    bottom: 5%;
    left: -200px;
  }
`;

const WorkflowGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
  opacity: 0.03;
  z-index: 0;
  pointer-events: none;

  .grid-line-h {
    height: 1px;
    background: var(--text-secondary);
    width: 100%;
    grid-column: 1 / -1;
  }

  .grid-line-v {
    width: 1px;
    background: var(--text-secondary);
    height: 100%;
    grid-row: 1 / -1;
  }
`;

// Order Process Section Styles
const OrderProcessSection = styled.section`
  padding: 8rem 0;
  position: relative;
  overflow: hidden;
`;

const OrderProcessContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const OrderProcessHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

const OrderProcessTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;

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

const OrderProcessSubtitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const OrderProcessDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 800px;
  margin: 2rem auto 0;
  color: var(--text-secondary);
`;

const glowPulse = keyframes`
  0% { opacity: 0.1; }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; }
`;

const StepIndicatorPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const OrderProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 5rem 0;
  position: relative;
`;

const ProcessStepContainer = styled(motion.div)`
  display: flex;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  min-height: 180px;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(var(--accent-color-rgb), 0.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

const ProcessStepNumber = styled.div`
  width: 120px;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.2) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 80px;
  }

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle at center,
      rgba(var(--accent-color-rgb), 0.2) 0%,
      transparent 70%
    );
    animation: ${glowPulse} 3s infinite ease-in-out;
  }

  .number {
    font-size: 4.5rem;
    font-weight: 900;
    color: rgba(var(--accent-color-rgb), 0.5);
    line-height: 1;
    position: relative;
    z-index: 1;
  }

  .indicator {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--accent-color);
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    box-shadow: 0 5px 15px rgba(var(--accent-color-rgb), 0.4);
    animation: ${StepIndicatorPulse} 2s infinite ease-in-out;
    opacity: 0.9;
    z-index: 2;
  }
`;

const ProcessStepContent = styled.div`
  flex-grow: 1;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProcessStepTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  .icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(var(--accent-color-rgb), 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-color);
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const ProcessStepDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const ProcessStepDecoration = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.02);
  z-index: 0;
  pointer-events: none;
`;

const floatArrow = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0); }
`;

const ProcessStepArrow = styled.div`
  position: absolute;
  right: 20px;
  font-size: 1.5rem;
  color: rgba(var(--accent-color-rgb), 0.2);
  animation: ${floatArrow} 2s infinite ease-in-out;

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const OrderProcessBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const OrderProcessBgLines = styled.div`
  position: absolute;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.1),
    transparent
  );

  &.line-1 {
    width: 80%;
    top: 20%;
    left: 10%;
    transform: rotate(-2deg);
  }

  &.line-2 {
    width: 60%;
    top: 50%;
    right: 5%;
    transform: rotate(2deg);
  }

  &.line-3 {
    width: 70%;
    bottom: 30%;
    left: 15%;
    transform: rotate(1deg);
  }
`;

const OrderProcessBgDot = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.2);

  &.dot-1 {
    top: 15%;
    left: 5%;
  }

  &.dot-2 {
    top: 60%;
    right: 8%;
  }

  &.dot-3 {
    bottom: 10%;
    left: 30%;
  }
`;

// Animations for FAQ
const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const shimmerEffect = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

// FAQ Section Styles
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
    animation: ${pulse} 2s infinite ease-in-out;
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
      margin-bottom: 0.3rem;

      &::before {
        left: -0.8rem;
      }
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
