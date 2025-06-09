import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, 
  FaChartLine, 
  FaUsers,
  FaComments,
  FaHeart,
  FaRegLightbulb,
  FaShare,
  FaRocket,
  FaBullhorn,
  FaCheckCircle,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaLinkedinIn,
  FaYoutube,
  FaHandshake,
  FaRegChartBar,
  FaSearch,
  FaPlus,
  FaRegEdit,
  FaShoppingCart,
  FaCheck
} from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Новые анимации для секции героя
const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

// Hero Section Components
const HeroWrapper = styled.section`
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
`;

const GlowingCircle = styled.div`
  position: absolute;
  width: ${props => props.size || '300px'};
  height: ${props => props.size || '300px'};
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), ${props => props.opacity || '0.3'}) 0%,
    transparent 70%
  );
  filter: blur(60px);
  z-index: 0;
  animation: ${breatheAnimation} ${props => props.duration || '10s'} infinite ease-in-out;
`;

const TiltedLine = styled.div`
  position: absolute;
  width: ${props => props.width || '100px'};
  height: 1px;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--accent-color-rgb), 0.5),
    transparent
  );
  transform: rotate(${props => props.rotate || '0deg'});
  z-index: 0;
`;

const Dot = styled.div`
  width: 2px;
  height: 2px;
  background-color: rgba(var(--accent-color-rgb), ${props => props.opacity || '0.5'});
  border-radius: 50%;
`;

const DotGrid = styled.div`
  position: absolute;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  transform: rotate(${props => props.rotate || '0deg'});
  opacity: 0.7;
  z-index: 0;
`;

const HeroInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const HeroSplit = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const HeroLeft = styled.div`
  @media (max-width: 1024px) {
    text-align: center;
    order: 1;
  }
`;

const HeroRight = styled.div`
  position: relative;
  
  @media (max-width: 1024px) {
    order: 0;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const AnimatedTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const HighlightedSpan = styled.span`
  position: relative;
  color: var(--accent-color);
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(var(--accent-color-rgb), 0.15);
    z-index: -1;
    border-radius: 4px;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 560px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 7px 20px rgba(var(--accent-color-rgb), 0.3);
    transform: translateY(-2px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -75%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 100%
    );
    transform: skewX(-25deg);
    transition: all 0.75s ease;
  }

  &:hover::before {
    animation: ${shimmer} 1s ease-out;
  }
`;

const SecondaryButton = styled(motion.button)`
  padding: 0.9rem 2rem;
  background: transparent;
  color: var(--text-primary);
  border: 1px solid rgba(var(--accent-color-rgb), 0.5);
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.05);
    transform: translateY(-2px);
  }
`;

const SocialPlatformsContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 450px;
  perspective: 1000px;
`;

const SocialPlatformCard = styled(motion.div)`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15),
      0 0 15px rgba(var(--accent-color-rgb), 0.3);
    z-index: 10;
  }

  &.instagram {
    top: 20%;
    left: 20%;
    background: linear-gradient(
      45deg, 
      #f09433 0%, 
      #e6683c 25%, 
      #dc2743 50%, 
      #cc2366 75%, 
      #bc1888 100%
    );
  }

  &.facebook {
    top: 10%;
    right: 15%;
    background: #1877f2;
  }

  &.twitter {
    bottom: 15%;
    left: 10%;
    background: #1da1f2;
  }

  &.tiktok {
    top: 30%;
    right: 5%;
    background: #000000;
  }

  &.linkedin {
    bottom: 30%;
    right: 20%;
    background: #0a66c2;
  }

  &.youtube {
    bottom: 5%;
    left: 35%;
    background: #ff0000;
  }
`;

const SocialIcon = styled.div`
  font-size: 2.5rem;
  color: white;
`;

// Преимущества SMM
const AdvantagesList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
`;

const AdvantageItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--text-primary);
`;

const AdvantageIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.15);
  color: var(--accent-color);
  margin-right: 1rem;
  flex-shrink: 0;
`;

const Smm = () => {
  const [activeTaskIndex, setActiveTaskIndex] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const platformRef = useRef(null);
  const tasksSliderRef = useRef(null);
  
  // Add FAQ state and data
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  
  // FAQ data with your provided content
  const faqData = [
    {
      question: "1. Чи можна просувати бізнес у соціальних мережах без відео?",
      answer: "Так, хоча відео — потужний інструмент залучення, ми адаптуємо контент-стратегію під ресурси клієнта. Можна використовувати графіку, каруселі, інфографіку, анімації чи інтерактивні опитування. Якщо згодом з'являється можливість створити відео — ми інтегруємо їх у контент-план."
    },
    {
      question: "2. Чи потрібна окрема стратегія для кожної соціальної мережі?",
      answer: "Так. Поведінка користувачів у Facebook, Instagram і TikTok — різна, як і формат контенту. Ми адаптуємо tone of voice, типи публікацій та візуальний стиль під особливості кожної платформи, щоб досягти максимального ефекту."
    },
    {
      question: "3. Скільки часу потрібно, щоб побачити результати SMM-просування?",
      answer: "Перші результати (зростання активності, охоплення, звернення) зазвичай помітні вже через 2–4 тижні. Повноцінне зміцнення бренду, стабільне зростання аудиторії та конверсії — через 2–3 місяці системної роботи."
    },
    {
      question: "4. Яка мінімальна кількість постів на тиждень рекомендується?",
      answer: "Оптимально — від 3 до 5 публікацій на тиждень. Це дозволяє підтримувати активність аудиторії без перенасичення. У деяких випадках достатньо 2 постів + щоденні сторіс, залежно від платформи й специфіки ніші."
    },
    {
      question: "5. Чи можна інтегрувати SMM з email-розсилками або сайтом?",
      answer: "Так. Ми налаштовуємо перехід з соціальних мереж на сайт, лендінг або email-підписку. Це допомагає побудувати багаторівневу комунікацію з клієнтом і підвищити довіру до бренду."
    },
    {
      question: "6. Чи варто використовувати інфлюенсерів у рамках SMM-кампанії?",
      answer: "Інфлюенс-маркетинг — ефективне доповнення до класичного SMM. Ми допомагаємо підібрати мікро- або макроінфлюенсерів відповідно до вашої ніші, аналізуємо їхню авдиторію й організовуємо співпрацю \"під ключ\"."
    }
  ];
  
  // Toggle FAQ function
  const toggleFaq = (index) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  // Рендер точек для декоративной сетки
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 36; i++) {
      if (Math.random() > 0.3) {
        dots.push(<Dot key={i} opacity={Math.random() * 0.5 + 0.2} />);
      } else {
        dots.push(<div key={i} />);
      }
    }
    return dots;
  };

  useEffect(() => {
    const handleMouseMove = e => {
      if (!platformRef.current) return;

      const rect = platformRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const moveX = (x - centerX) / 30;
      const moveY = (y - centerY) / 30;

      platformRef.current.style.transform = `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg)`;
    };

    const handleMouseLeave = () => {
      if (!platformRef.current) return;
      platformRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    const container = platformRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Преимущества SMM
  const advantages = [
    {
      icon: <FaUsers />,
      text: "Прямий зв'язок з вашою цільовою аудиторією"
    },
    {
      icon: <FaHeart />,
      text: "Формування лояльності та спільноти навколо бренду"
    },
    {
      icon: <FaShare />,
      text: "Вірусне поширення контенту через репости"
    },
    {
      icon: <FaChartLine />,
      text: "Детальна аналітика ефективності кампаній"
    }
  ];

  // Tasks data
  const tasks = [
    { 
      icon: <FaBullhorn />, 
      title: "Формування іміджу бренду", 
      description: "через ціннісний контент, візуальний стиль і tone of voice",
      color: "255, 107, 129"
    },
    { 
      icon: <FaRegChartBar />, 
      title: "Підвищення впізнаваності", 
      description: "за допомогою регулярної публікації, інтерактиву та таргетингу",
      color: "64, 223, 159"
    },
    { 
      icon: <FaUsers />, 
      title: "Побудова ком'юніті", 
      description: "створення лояльної бази підписників, які підтримують, коментують, купують",
      color: "77, 171, 247"
    },
    { 
      icon: <FaComments />, 
      title: "Комунікація з аудиторією", 
      description: "відповіді на запити, обробка відгуків, розв'язання ситуацій в режимі реального часу",
      color: "146, 92, 255"
    },
    { 
      icon: <FaRocket />, 
      title: "Просування продуктів чи послуг", 
      description: "через рекламні кампанії, колаборації, акції, лід-магніти",
      color: "255, 184, 48"
    }
  ];

  // Add function to handle slider navigation
  const navigateSlider = (direction) => {
    if (direction === 'next') {
      setActiveTaskIndex((prev) => (prev === tasks.length - 1 ? 0 : prev + 1));
    } else {
      setActiveTaskIndex((prev) => (prev === 0 ? tasks.length - 1 : prev - 1));
    }
  };

  return (
    <PageContainer>
      <HeroWrapper>
        <GlowingCircle
          size="400px"
          top="-100px"
          right="-100px"
          opacity="0.5"
          duration="15s"
        />
        <GlowingCircle
          size="350px"
          bottom="-50px"
          left="-50px"
          opacity="0.4"
          duration="12s"
        />

        <TiltedLine top="30%" left="5%" width="120px" rotate="45deg" />
        <TiltedLine bottom="25%" right="15%" width="80px" rotate="-30deg" />

        <DotGrid top="15%" right="10%" rotate="15deg">
          {renderDots()}
        </DotGrid>
        <DotGrid bottom="10%" left="5%" rotate="-10deg">
          {renderDots()}
        </DotGrid>

        <HeroInner>
          <HeroSplit>
            <HeroLeft>
              <AnimatedTitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                SMM-просування — <HighlightedSpan>ваш бренд</HighlightedSpan> у соціальних мережах
              </AnimatedTitle>

              <HeroDescription
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                SMM-просування — це стратегічний інструмент цифрового маркетингу, що дозволяє бізнесу будувати довготривалі відносини з клієнтами, формувати імідж бренду та стимулювати продажі через соціальні мережі. У світі, де увага споживача — найцінніший ресурс, SMM допомагає зайняти своє місце в інформаційному полі та трансформувати підписників у лояльну аудиторію.
              </HeroDescription>

              <AdvantagesList
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                {advantages.map((advantage, index) => (
                  <AdvantageItem
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <AdvantageIcon>{advantage.icon}</AdvantageIcon>
                    {advantage.text}
                  </AdvantageItem>
                ))}
              </AdvantagesList>

              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                <PrimaryButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Замовити SMM <FaArrowRight />
                </PrimaryButton>
                <SecondaryButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Наші кейси
                </SecondaryButton>
              </ButtonGroup>
            </HeroLeft>

            <HeroRight>
              <SocialPlatformsContainer ref={platformRef}>
                <SocialPlatformCard 
                  className="instagram"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{ y: -10 }}
                >
                  <SocialIcon>
                    <FaInstagram />
                  </SocialIcon>
                </SocialPlatformCard>
                
                <SocialPlatformCard 
                  className="facebook"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  whileHover={{ y: -10 }}
                >
                  <SocialIcon>
                    <FaFacebookF />
                  </SocialIcon>
                </SocialPlatformCard>
                
                <SocialPlatformCard 
                  className="twitter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <SocialIcon>
                    <FaTwitter />
                  </SocialIcon>
                </SocialPlatformCard>
                
                <SocialPlatformCard 
                  className="tiktok"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <SocialIcon>
                    <FaTiktok />
                  </SocialIcon>
                </SocialPlatformCard>
                
                <SocialPlatformCard 
                  className="linkedin"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  whileHover={{ y: -10 }}
                >
                  <SocialIcon>
                    <FaLinkedinIn />
                  </SocialIcon>
                </SocialPlatformCard>
                
                <SocialPlatformCard 
                  className="youtube"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  whileHover={{ y: -10 }}
                >
                  <SocialIcon>
                    <FaYoutube />
                  </SocialIcon>
                </SocialPlatformCard>
              </SocialPlatformsContainer>
            </HeroRight>
          </HeroSplit>
        </HeroInner>
      </HeroWrapper>

      {/* What is SMM Section */}
      <WhatIsSmmSection>
        <GlowingAccent top="10%" right="5%" size="250px" color="0, 150, 255" />
        <GlowingAccent bottom="10%" left="5%" size="200px" color="255, 100, 200" />
        
        <WhatIsSmmContainer>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AccentLine />
            Що таке SMM і чому це важливо
          </SectionHeader>
          
          <ContentGrid>
            <MainContent
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p>
                SMM (Social Media Marketing) — це комплекс дій для просування компанії в соціальних мережах: від створення контенту та управління спільнотами до запуску таргетованої реклами. SMM є не просто каналом комунікації — це джерело лояльності, зворотного зв'язку, прямого впливу на споживчу поведінку.
              </p>
              <p>
                Соціальні мережі щоденно використовують мільйони українців. Ігнорувати цей канал — означає втрачати потенційних клієнтів, які прямо зараз готові купувати, замовляти або ділитися враженнями.
              </p>
            </MainContent>
            
            <StatisticsWrapper
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StatsCard>
                <StatNumber>73<span>%</span></StatNumber>
                <StatDescription>користувачів інтернету активні в соцмережах</StatDescription>
              </StatsCard>
              <StatsCard>
                <StatNumber>2.4<span>год</span></StatNumber>
                <StatDescription>середній час в соцмережах щодня</StatDescription>
              </StatsCard>
              <StatsCard>
                <StatNumber>61<span>%</span></StatNumber>
                <StatDescription>приймають рішення про покупку після перегляду в соцмережах</StatDescription>
              </StatsCard>
            </StatisticsWrapper>
            
            <TasksHeader
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Основні завдання SMM
            </TasksHeader>
            
            <TasksSliderContainer 
              ref={tasksSliderRef}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <TasksSliderWrapper
                animate={{ x: `-${activeTaskIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {tasks.map((task, index) => (
                  <TaskSlide key={index} isActive={index === activeTaskIndex}>
                    <TaskSlideInner style={{ 
                      background: `linear-gradient(135deg, rgba(${task.color}, 0.1) 0%, rgba(${task.color}, 0.2) 100%)`,
                      borderColor: `rgba(${task.color}, 0.3)` 
                    }}>
                      <TaskIconWrapper style={{ color: `rgb(${task.color})` }}>
                        {task.icon}
                        <TaskIconBg style={{ background: `rgba(${task.color}, 0.15)` }} />
                      </TaskIconWrapper>
                      <TaskTitle>{task.title}</TaskTitle>
                      <TaskDescription>{task.description}</TaskDescription>
                    </TaskSlideInner>
                  </TaskSlide>
                ))}
              </TasksSliderWrapper>

              <SliderNavigation>
                <SliderButton 
                  onClick={() => navigateSlider('prev')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SliderButtonIcon direction="left" />
                </SliderButton>
                
                <SliderDots>
                  {tasks.map((_, index) => (
                    <SliderDot 
                      key={index} 
                      isActive={index === activeTaskIndex}
                      onClick={() => setActiveTaskIndex(index)}
                    />
                  ))}
                </SliderDots>
                
                <SliderButton 
                  onClick={() => navigateSlider('next')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SliderButtonIcon direction="right" />
                </SliderButton>
              </SliderNavigation>
            </TasksSliderContainer>
          </ContentGrid>
          
          <NetworksSlider
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {['Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Twitter', 'YouTube', 'Telegram'].map((network, index) => (
              <NetworkBadge key={index}>
                {network}
              </NetworkBadge>
            ))}
          </NetworksSlider>
        </WhatIsSmmContainer>
      </WhatIsSmmSection>

      {/* Our Services Section */}
      <ServicesSection>
        <ServicesBgPattern />
        <ServicesContainer>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AccentLine />
            Які послуги ми надаємо в межах SMM
          </SectionHeader>

          <ServicesIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ми пропонуємо повний цикл SMM-супроводу — від стратегії до результатів. Наші послуги охоплюють ключові напрямки, які дозволяють бренду не лише "бути в соцмережах", а системно розвиватися, залучати клієнтів і досягати бізнес-цілей. Ми адаптуємо підхід під специфіку ринку, конкурентів і аудиторію.
          </ServicesIntro>

          <ServicesTabs>
            <ServiceTabsList
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {['Розробка контент-стратегії', 'Ведення сторінок', 'Таргетована реклама'].map((tab, index) => (
                <ServiceTab 
                  key={index}
                  isActive={activeServiceTab === index}
                  onClick={() => setActiveServiceTab(index)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {tab}
                  {activeServiceTab === index && <ActiveTabIndicator layoutId="activeTab" />}
                </ServiceTab>
              ))}
            </ServiceTabsList>

            <ServicesContent>
              <AnimatePresence mode="wait">
                {activeServiceTab === 0 && (
                  <ServiceTabContent
                    key="content-strategy"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ServiceTabHeader>
                      <ServiceTabIcon><FaRegLightbulb /></ServiceTabIcon>
                      <h3>Розробка контент-стратегії</h3>
                    </ServiceTabHeader>
                    
                    <ServiceTabDescription>
                      Контент — це основа комунікації в SMM. Ми створюємо стратегії, які враховують сезонність, поведінкові патерни аудиторії, тренди платформи та позиціонування бренду. Контент-план готується на місяць уперед і включає візуали, тексти, хештеги, інтерактиви, сторіс, Reels чи Shorts — залежно від платформи.
                    </ServiceTabDescription>

                    <ServiceFeatures>
                      <ServiceFeatureItem>
                        <ServiceFeatureIcon><FaCheckCircle /></ServiceFeatureIcon>
                        <ServiceFeatureText>Визначення цілей і KPI</ServiceFeatureText>
                      </ServiceFeatureItem>
                      <ServiceFeatureItem>
                        <ServiceFeatureIcon><FaCheckCircle /></ServiceFeatureIcon>
                        <ServiceFeatureText>Побудова tone of voice</ServiceFeatureText>
                      </ServiceFeatureItem>
                      <ServiceFeatureItem>
                        <ServiceFeatureIcon><FaCheckCircle /></ServiceFeatureIcon>
                        <ServiceFeatureText>Контент-план по рубриках та форматах</ServiceFeatureText>
                      </ServiceFeatureItem>
                      <ServiceFeatureItem>
                        <ServiceFeatureIcon><FaCheckCircle /></ServiceFeatureIcon>
                        <ServiceFeatureText>Створення унікального креативу</ServiceFeatureText>
                      </ServiceFeatureItem>
                    </ServiceFeatures>

                    <ServiceIllustration>
                      <motion.div 
                        initial={{ rotate: -5 }}
                        animate={{ rotate: 5 }}
                        transition={{ yoyo: Infinity, duration: 6, ease: "easeInOut" }}
                      >
                        <ContentPlanMockup />
                      </motion.div>
                    </ServiceIllustration>
                  </ServiceTabContent>
                )}

                {activeServiceTab === 1 && (
                  <ServiceTabContent
                    key="page-management"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ServiceTabHeader>
                      <ServiceTabIcon><FaComments /></ServiceTabIcon>
                      <h3>Ведення сторінок (Instagram, Facebook, TikTok тощо)</h3>
                    </ServiceTabHeader>
                    
                    <ServiceTabDescription>
                      Ми беремо на себе повне адміністрування акаунтів: регулярні публікації, відповіді в коментарях, обробку запитів у Direct, моніторинг згадок. Для кожної платформи обираємо найефективніші формати — короткі відео, каруселі, меми, розіграші чи гайд-пости.
                    </ServiceTabDescription>

                    <ServicePlatforms>
                      <ServicePlatformItem>
                        <ServicePlatformIcon platform="instagram"><FaInstagram /></ServicePlatformIcon>
                        <ServicePlatformName>Instagram та Facebook (Meta)</ServicePlatformName>
                      </ServicePlatformItem>
                      <ServicePlatformItem>
                        <ServicePlatformIcon platform="tiktok"><FaTiktok /></ServicePlatformIcon>
                        <ServicePlatformName>TikTok — з урахуванням алгоритмів та вірусного потенціалу</ServicePlatformName>
                      </ServicePlatformItem>
                      <ServicePlatformItem>
                        <ServicePlatformIcon platform="other"><FaYoutube /></ServicePlatformIcon>
                        <ServicePlatformName>YouTube Shorts, Telegram, LinkedIn (опціонально)</ServicePlatformName>
                      </ServicePlatformItem>
                    </ServicePlatforms>

                    <ServiceIllustration>
                      <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: -10 }}
                        transition={{ yoyo: Infinity, duration: 2, ease: "easeInOut" }}
                      >
                        <SocialMediaMockup />
                      </motion.div>
                    </ServiceIllustration>
                  </ServiceTabContent>
                )}

                {activeServiceTab === 2 && (
                  <ServiceTabContent
                    key="targeted-ads"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ServiceTabHeader>
                      <ServiceTabIcon><FaBullhorn /></ServiceTabIcon>
                      <h3>Таргетована реклама в соціальних мережах</h3>
                    </ServiceTabHeader>
                    
                    <ServiceTabDescription>
                      Один з найсильніших інструментів у SMM — це платна реклама. Ми запускаємо таргетинг по інтересах, поведінці, геолокації, схожих аудиторіях або ремаркетингу. Для кожної кампанії створюємо кілька креативів і тестуємо, щоб отримати оптимальний результат за мінімальною вартістю.
                    </ServiceTabDescription>

                    <ServiceCampaignTypes>
                      <ServiceCampaignItem>
                        <ServiceCampaignCircle>01</ServiceCampaignCircle>
                        <ServiceCampaignText>Залучення підписників</ServiceCampaignText>
                      </ServiceCampaignItem>
                      <ServiceCampaignItem>
                        <ServiceCampaignCircle>02</ServiceCampaignCircle>
                        <ServiceCampaignText>Реклама постів або сторіс</ServiceCampaignText>
                      </ServiceCampaignItem>
                      <ServiceCampaignItem>
                        <ServiceCampaignCircle>03</ServiceCampaignCircle>
                        <ServiceCampaignText>Генерація лідів (лід-форми, переходи на сайт)</ServiceCampaignText>
                      </ServiceCampaignItem>
                      <ServiceCampaignItem>
                        <ServiceCampaignCircle>04</ServiceCampaignCircle>
                        <ServiceCampaignText>Динамічні кампанії для e-commerce</ServiceCampaignText>
                      </ServiceCampaignItem>
                    </ServiceCampaignTypes>

                    <ServiceIllustration>
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1.05 }}
                        transition={{ yoyo: Infinity, duration: 3, ease: "easeInOut" }}
                      >
                        <TargetingMockup />
                      </motion.div>
                    </ServiceIllustration>
                  </ServiceTabContent>
                )}
              </AnimatePresence>
            </ServicesContent>
          </ServicesTabs>
        </ServicesContainer>
      </ServicesSection>

      {/* Collaboration Process Section */}
      <CollaborationSection>
        <CollabWave />
        <CollabContainer>
          <SectionHeader
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AccentLine />
            Як відбувається співпраця
          </SectionHeader>

          <CollabIntro
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ми працюємо прозоро, системно й орієнтуємось на результат. Для кожного клієнта будуємо індивідуальний SMM-процес, адаптований під нішу, цілі та специфіку бізнесу. Кожен етап узгоджується і підтримується нашою командою — від старту до масштабування.
          </CollabIntro>

          <CollaborationTimeline>
            <ProcessStep
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <ProcessStepNumber>01</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Брифінг і аналіз ЦА</ProcessStepTitle>
                <ProcessStepDescription>
                  Починаємо з глибокого занурення у ваш бізнес: збираємо дані через бриф, аналізуємо конкурентів, визначаємо портрет цільової аудиторії. Вивчаємо її болі, інтереси, активність у соціальних мережах і адаптуємо підхід до комунікації відповідно до цих даних.
                </ProcessStepDescription>
                
                <ProcessStepList>
                  <ProcessStepListTitle>Що включає:</ProcessStepListTitle>
                  <ProcessStepListItem>
                    <ProcessStepListIcon><FaSearch /></ProcessStepListIcon>
                    Аналіз ринку, УТП, позиціонування
                  </ProcessStepListItem>
                  <ProcessStepListItem>
                    <ProcessStepListIcon><FaUsers /></ProcessStepListIcon>
                    Визначення платформи, де ЦА найактивніша
                  </ProcessStepListItem>
                  <ProcessStepListItem>
                    <ProcessStepListIcon><FaComments /></ProcessStepListIcon>
                    Побудова сценаріїв взаємодії (взаємний фоловінг, коментарі, реклама)
                  </ProcessStepListItem>
                </ProcessStepList>

                <ProcessStepIllustration>
                  <AudienceAnalysisGraphic />
                </ProcessStepIllustration>
              </ProcessStepContent>
            </ProcessStep>
            
            <ProcessConnector />
            
            <ProcessStep
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              isRight
            >
              <ProcessStepNumber>02</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Розробка стратегії</ProcessStepTitle>
                <ProcessStepDescription>
                  На основі зібраних даних формуємо стратегію присутності в соцмережах: визначаємо оптимальні платформи, контент-план, частоту публікацій, тональність і ключові повідомлення бренду.
                </ProcessStepDescription>
                
                <ProcessStepTactic>
                  <ProcessStepTacticIcon>
                    <FaRegLightbulb />
                  </ProcessStepTacticIcon>
                  <ProcessStepTacticText>
                    Ми надаємо документ з детальною стратегією, яка включає всі аспекти SMM-просування від візуального стилю до KPI
                  </ProcessStepTacticText>
                </ProcessStepTactic>
                
                <ProcessStepIllustration>
                  <StrategyGraphic />
                </ProcessStepIllustration>
              </ProcessStepContent>
            </ProcessStep>

            <ProcessConnector />
            
            <ProcessStep
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <ProcessStepNumber>03</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Запуск і реалізація</ProcessStepTitle>
                <ProcessStepDescription>
                  Створюємо та публікуємо контент згідно з узгодженим планом, налаштовуємо та запускаємо рекламні кампанії. Починаємо взаємодію з аудиторією та активно модеруємо коментарі та повідомлення.
                </ProcessStepDescription>
                
                <ProcessStepCards>
                  <ProcessStepCard>
                    <ProcessStepCardIcon><FaRegEdit /></ProcessStepCardIcon>
                    <ProcessStepCardTitle>Створення контенту</ProcessStepCardTitle>
                  </ProcessStepCard>
                  <ProcessStepCard>
                    <ProcessStepCardIcon><FaBullhorn /></ProcessStepCardIcon>
                    <ProcessStepCardTitle>Запуск реклами</ProcessStepCardTitle>
                  </ProcessStepCard>
                  <ProcessStepCard>
                    <ProcessStepCardIcon><FaUsers /></ProcessStepCardIcon>
                    <ProcessStepCardTitle>Комунікація</ProcessStepCardTitle>
                  </ProcessStepCard>
                </ProcessStepCards>
                
                <ProcessStepIllustration>
                  <ExecutionGraphic />
                </ProcessStepIllustration>
              </ProcessStepContent>
            </ProcessStep>

            <ProcessConnector />
            
            <ProcessStep
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              isRight
            >
              <ProcessStepNumber>04</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>Регулярна аналітика і корекція стратегії</ProcessStepTitle>
                <ProcessStepDescription>
                  Ми не "ведемо сторінки заради сторінок" — ми працюємо з даними. Щомісячно готуємо звітність по охопленнях, залученні, підписниках, збереженнях, кліках, коментарях. Аналізуємо, що працює, а що — ні, й коригуємо стратегію, аби не витрачати час і бюджет даремно.
                </ProcessStepDescription>
                
                <ProcessStepTools>
                  <ProcessStepToolsTitle>Інструменти аналітики:</ProcessStepToolsTitle>
                  <ProcessStepToolsGrid>
                    <ProcessStepTool>
                      <ProcessStepToolIcon>
                        <FaChartLine />
                      </ProcessStepToolIcon>
                      Meta Business Suite / TikTok Analytics
                    </ProcessStepTool>
                    <ProcessStepTool>
                      <ProcessStepToolIcon>
                        <FaRegChartBar />
                      </ProcessStepToolIcon>
                      Внутрішні CRM та трекінг-конверсій
                    </ProcessStepTool>
                    <ProcessStepTool>
                      <ProcessStepToolIcon>
                        <FaSearch />
                      </ProcessStepToolIcon>
                      Google Analytics (у разі переходів на сайт)
                    </ProcessStepTool>
                  </ProcessStepToolsGrid>
                </ProcessStepTools>
                
                <ProcessStepIllustration>
                  <AnalyticsGraphic>
                    <motion.div
                      initial={{ height: "20%" }}
                      whileInView={{ height: "70%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.div
                      initial={{ height: "30%" }}
                      whileInView={{ height: "90%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                    <motion.div
                      initial={{ height: "40%" }}
                      whileInView={{ height: "60%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                    <motion.div
                      initial={{ height: "25%" }}
                      whileInView={{ height: "80%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                  </AnalyticsGraphic>
                </ProcessStepIllustration>
              </ProcessStepContent>
            </ProcessStep>
          </CollaborationTimeline>
          
          <CollabCTA
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <CollabCTAText>Готові розпочати співпрацю з командою професіоналів?</CollabCTAText>
            <CollabCTAButtons>
              <PrimaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Замовити SMM <FaArrowRight />
              </PrimaryButton>
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Дізнатися більше
              </SecondaryButton>
            </CollabCTAButtons>
          </CollabCTA>
        </CollabContainer>
      </CollaborationSection>

      {/* Results Section */}
      <ResultsSection>
        <ResultsWrapper>
          <ResultsHeader>
            <ResultsDecorLine />
            <ResultsTitle>
              Результати від SMM-просування
            </ResultsTitle>
            <ResultsDescription>
              Робота в соціальних мережах має давати конкретний результат — не лише "лайки", 
              а й реальні показники зростання. SMM-просування формує довготривалий ефект: 
              зміцнює позиції бренду, створює ком'юніті та генерує ліди.
            </ResultsDescription>
          </ResultsHeader>

          <ResultsContent>
            <ResultsTimeline>
              <TimelineStep>
                <TimelineNumber>01</TimelineNumber>
                <TimelineConnector />
              </TimelineStep>
              <TimelineStep>
                <TimelineNumber>02</TimelineNumber>
                <TimelineConnector />
              </TimelineStep>
              <TimelineStep>
                <TimelineNumber>03</TimelineNumber>
              </TimelineStep>
            </ResultsTimeline>
            
            <ResultBoxes>
              <ResultBox 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                active={true}
              >
                <ResultBoxInner>
                  <ResultBoxHeader>
                    <ResultBoxTitle>Впізнаваність бренду</ResultBoxTitle>
                    <ResultBoxIcon><FaRegLightbulb /></ResultBoxIcon>
                  </ResultBoxHeader>
                  <ResultBoxDesc>
                    Завдяки регулярній публікації якісного контенту, присутності у стрічках підписників і запуску 
                    таргетованої реклами, бренд стає впізнаваним. Люди починають асоціювати вас з експертизою, 
                    надійністю або актуальністю — залежно від вибраного позиціонування.
                  </ResultBoxDesc>
                  <ResultMetrics>
                    <ResultMetric>
                      <ResultMetricValue primary>+127%</ResultMetricValue>
                      <ResultMetricLabel>Органічне охоплення</ResultMetricLabel>
                    </ResultMetric>
                    <ResultMetric>
                      <ResultMetricValue primary>+86%</ResultMetricValue>
                      <ResultMetricLabel>Впізнаваність бренду</ResultMetricLabel>
                    </ResultMetric>
                  </ResultMetrics>
                  <ResultBoxList>
                    <ResultBoxListTitle>Результати впізнаваності:</ResultBoxListTitle>
                    <ResultBoxListItem>
                      <CheckIcon><FaCheck /></CheckIcon>
                      <span>Зростання органічного трафіку на профіль</span>
                    </ResultBoxListItem>
                    <ResultBoxListItem>
                      <CheckIcon><FaCheck /></CheckIcon>
                      <span>Висока частота згадок або тегів</span>
                    </ResultBoxListItem>
                    <ResultBoxListItem>
                      <CheckIcon><FaCheck /></CheckIcon>
                      <span>Позитивні коментарі й відгуки</span>
                    </ResultBoxListItem>
                  </ResultBoxList>
                </ResultBoxInner>
              </ResultBox>
              
              <ResultBox 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <ResultBoxInner>
                  <ResultBoxHeader>
                    <ResultBoxTitle>Ріст підписників і залучення</ResultBoxTitle>
                    <ResultBoxIcon secondary><FaUsers /></ResultBoxIcon>
                  </ResultBoxHeader>
                  <ResultBoxDesc>
                    Активна сторінка з цікавим контентом приваблює нових підписників. Ми використовуємо 
                    методи природного залучення, а також платні інструменти — рекламу, взаємні згадки, 
                    співпраці з мікроінфлюенсерами.
                  </ResultBoxDesc>
                  <ResultChart>
                    <ResultChartBar height="20%" label="Січень" value="+210" />
                    <ResultChartBar height="45%" label="Лютий" value="+460" />
                    <ResultChartBar height="65%" label="Березень" value="+680" />
                    <ResultChartBar height="85%" label="Квітень" value="+890" />
                  </ResultChart>
                  <ResultBoxList>
                    <ResultBoxListTitle>Показники, на які орієнтуємось:</ResultBoxListTitle>
                    <ResultBoxListItem>
                      <CheckIcon secondary><FaCheck /></CheckIcon>
                      <span>Engagement Rate (ER)</span>
                    </ResultBoxListItem>
                    <ResultBoxListItem>
                      <CheckIcon secondary><FaCheck /></CheckIcon>
                      <span>Кількість підписок за місяць</span>
                    </ResultBoxListItem>
                    <ResultBoxListItem>
                      <CheckIcon secondary><FaCheck /></CheckIcon>
                      <span>Динаміка залучення від посту до посту</span>
                    </ResultBoxListItem>
                  </ResultBoxList>
                </ResultBoxInner>
              </ResultBox>
              
              <ResultBox 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ResultBoxInner>
                  <ResultBoxHeader>
                    <ResultBoxTitle>Генерація заявок і продажів</ResultBoxTitle>
                    <ResultBoxIcon tertiary><FaShoppingCart /></ResultBoxIcon>
                  </ResultBoxHeader>
                  <ResultBoxDesc>
                    SMM — це також прямий канал продажів, особливо для e-commerce, онлайн-послуг і локального 
                    бізнесу. Ми створюємо спеціальні пропозиції, заклики до дії та лід-магніти для конверсій.
                  </ResultBoxDesc>
                  <ResultProgressContainer>
                    <ResultProgressItem>
                      <ResultProgressLabel>Охоплення</ResultProgressLabel>
                      <ResultProgressBar>
                        <ResultProgressFill percent="100%" tertiary />
                      </ResultProgressBar>
                      <ResultProgressValue>12,680</ResultProgressValue>
                    </ResultProgressItem>
                    <ResultProgressItem>
                      <ResultProgressLabel>Переходи</ResultProgressLabel>
                      <ResultProgressBar>
                        <ResultProgressFill percent="58%" tertiary />
                      </ResultProgressBar>
                      <ResultProgressValue>7,354</ResultProgressValue>
                    </ResultProgressItem>
                    <ResultProgressItem>
                      <ResultProgressLabel>Заявки</ResultProgressLabel>
                      <ResultProgressBar>
                        <ResultProgressFill percent="32%" tertiary />
                      </ResultProgressBar>
                      <ResultProgressValue>4,057</ResultProgressValue>
                    </ResultProgressItem>
                    <ResultProgressItem>
                      <ResultProgressLabel>Продажі</ResultProgressLabel>
                      <ResultProgressBar>
                        <ResultProgressFill percent="18%" tertiary />
                      </ResultProgressBar>
                      <ResultProgressValue>2,282</ResultProgressValue>
                    </ResultProgressItem>
                  </ResultProgressContainer>
                  <ResultBoxList>
                    <ResultBoxListTitle>Інструменти конверсії:</ResultBoxListTitle>
                    <ResultBoxListItem>
                      <CheckIcon tertiary><FaCheck /></CheckIcon>
                      <span>Лід-форми у Facebook / Instagram</span>
                    </ResultBoxListItem>
                    <ResultBoxListItem>
                      <CheckIcon tertiary><FaCheck /></CheckIcon>
                      <span>Заявки через Direct або коментарі</span>
                    </ResultBoxListItem>
                    <ResultBoxListItem>
                      <CheckIcon tertiary><FaCheck /></CheckIcon>
                      <span>Перенаправлення на лендінг із точковим оффером</span>
                    </ResultBoxListItem>
                  </ResultBoxList>
                </ResultBoxInner>
              </ResultBox>
            </ResultBoxes>
          </ResultsContent>
          
          <ResultsQuote>
            <ResultsQuoteText>
              "Ефективний SMM — це не погоня за лайками, а системна робота, 
              що прямо впливає на KPI вашого бізнесу."
            </ResultsQuoteText>
          </ResultsQuote>
          
          <ResultsCTA>
            <ResultsCTATitle>Бажаєте схожих результатів?</ResultsCTATitle>
            <ResultsCTAButton 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Замовити SMM-стратегію <FaArrowRight />
            </ResultsCTAButton>
          </ResultsCTA>
        </ResultsWrapper>
      </ResultsSection>

      {/* Team Advantages Section - Completely New Design */}
      <TeamAdvantagesSection>
        <TeamAdvantagesContainer>
          <TeamAdvantagesHeader>
            <TeamAdvantagesTitle>
              Переваги роботи з нашою командою
            </TeamAdvantagesTitle>
            <TeamAdvantagesDescription>
              Ми — не просто виконавці, ми — партнери, які зацікавлені в результаті. 
              Для нас важливо не лише створити естетичний профіль, 
              а й забезпечити стратегічне зростання вашого бренду в соціальних мережах. 
              Наша команда складається з SMM-фахівців, дизайнерів, аналітиків і таргетологів, 
              які працюють як єдиний механізм.
            </TeamAdvantagesDescription>
          </TeamAdvantagesHeader>
          
          <HexagonGrid>
            <HexagonWrapper>
              <Hexagon primary>
                <HexagonContent>
                  <HexagonIcon>
                    <FaRocket />
                  </HexagonIcon>
                  <HexagonTitle>Інноваційні підходи</HexagonTitle>
                  <HexagonText>
                    Ми постійно тестуємо нові формати та AI-інструменти, аналізуємо тренди, 
                    щоб ваш бренд був попереду конкурентів.
                  </HexagonText>
                </HexagonContent>
              </Hexagon>
              <AdvantageFeatureList>
                <AdvantageFeatureTitle>Що ми впроваджуємо:</AdvantageFeatureTitle>
                <AdvantageFeature>
                  <AdvantageFeatureMarker primary>01</AdvantageFeatureMarker>
                  <span>Адаптація під алгоритми кожної соцмережі</span>
                </AdvantageFeature>
                <AdvantageFeature>
                  <AdvantageFeatureMarker primary>02</AdvantageFeatureMarker>
                  <span>Використання ChatGPT та AI-дизайну для генерації контенту</span>
                </AdvantageFeature>
                <AdvantageFeature>
                  <AdvantageFeatureMarker primary>03</AdvantageFeatureMarker>
                  <span>Мультимовний контент і гнучке тестування меседжів</span>
                </AdvantageFeature>
              </AdvantageFeatureList>
            </HexagonWrapper>
            
            <HexagonWrapper>
              <Hexagon secondary>
                <HexagonContent>
                  <HexagonIcon>
                    <FaHandshake />
                  </HexagonIcon>
                  <HexagonTitle>Досвід у різних сферах бізнесу</HexagonTitle>
                  <HexagonText>
                    Ми працювали з компаніями з таких галузей: освіта, медицина, e-commerce, 
                    інфобізнес, нерухомість, HoReCa, b2b.
                  </HexagonText>
                </HexagonContent>
              </Hexagon>
              <AdvantageFeatureList>
                <AdvantageFeatureTitle>Що це дає вам:</AdvantageFeatureTitle>
                <AdvantageFeature>
                  <AdvantageFeatureMarker secondary>01</AdvantageFeatureMarker>
                  <span>Мінімум часу на пояснення специфіки бізнесу</span>
                </AdvantageFeature>
                <AdvantageFeature>
                  <AdvantageFeatureMarker secondary>02</AdvantageFeatureMarker>
                  <span>Максимально швидкий запуск кампанії</span>
                </AdvantageFeature>
                <AdvantageFeature>
                  <AdvantageFeatureMarker secondary>03</AdvantageFeatureMarker>
                  <span>Експертні рішення, перевірені практикою</span>
                </AdvantageFeature>
              </AdvantageFeatureList>
            </HexagonWrapper>
            
            <HexagonWrapper>
              <Hexagon tertiary>
                <HexagonContent>
                  <HexagonIcon>
                    <FaChartLine />
                  </HexagonIcon>
                  <HexagonTitle>Прозора звітність</HexagonTitle>
                  <HexagonText>
                    Надаємо детальні звіти з конкретними KPI та метриками, які демонструють 
                    ефективність роботи.
                  </HexagonText>
                </HexagonContent>
              </Hexagon>
              <AdvantageFeatureList>
                <AdvantageFeatureTitle>Що ви отримуєте:</AdvantageFeatureTitle>
                <AdvantageFeature>
                  <AdvantageFeatureMarker tertiary>01</AdvantageFeatureMarker>
                  <span>Щотижневі дашборди з ключовими метриками</span>
                </AdvantageFeature>
                <AdvantageFeature>
                  <AdvantageFeatureMarker tertiary>02</AdvantageFeatureMarker>
                  <span>Щомісячний детальний аналіз і рекомендації</span>
                </AdvantageFeature>
                <AdvantageFeature>
                  <AdvantageFeatureMarker tertiary>03</AdvantageFeatureMarker>
                  <span>Аудити конкурентів та розрахунок ROI</span>
                </AdvantageFeature>
              </AdvantageFeatureList>
            </HexagonWrapper>
          </HexagonGrid>
          
          <TeamConnectBanner>
            <TeamConnectDecor />
            <TeamConnectContent>
              <TeamConnectHeading>Готові до співпраці з експертами?</TeamConnectHeading>
              <TeamConnectButton 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Зв'язатися з командою <FaArrowRight />
              </TeamConnectButton>
            </TeamConnectContent>
          </TeamConnectBanner>
        </TeamAdvantagesContainer>
      </TeamAdvantagesSection>
      
      {/* FAQ Section */}
      <FaqSection>
        <FaqWaveTop />

        <FaqContainer>
          <FaqGlowCircle className="circle-1" />
          <FaqGlowCircle className="circle-2" />

          <FaqTitle
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </FaqTitle>

          <FaqList
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <FaqItemContent
                  layout
                  initial={{ borderRadius: 16 }}
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <FaqCtaText>
              Маєте додаткові запитання щодо SMM?
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{
                scale: 1.03,
                boxShadow: '0 10px 30px rgba(var(--accent-color-rgb), 0.3)',
              }}
              whileTap={{ scale: 0.98 }}
            >
              Зв'язатися з нами <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>
      
    </PageContainer>
  );
};

export default Smm;

// What is SMM Section Styles
const WhatIsSmmSection = styled.section`
  position: relative;
  padding: 8rem 0;
  overflow: hidden;
`;

const GlowingAccent = styled.div`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(${props => props.color}, 0.2) 0%,
    transparent 70%
  );
  filter: blur(60px);
  top: ${props => props.top || 'auto'};
  right: ${props => props.right || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  left: ${props => props.left || 'auto'};
  z-index: -1;
`;

const WhatIsSmmContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 800;
  margin-bottom: 3rem;
  color: var(--text-primary);
  position: relative;
  text-align: center;
`;

const AccentLine = styled.div`
  width: 80px;
  height: 4px;
  background: var(--accent-color);
  border-radius: 2px;
  margin: 0 auto 1rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
`;

const MainContent = styled(motion.div)`
  color: var(--text-secondary);
  font-size: 1.15rem;
  line-height: 1.7;
  
  p {
    margin-bottom: 1.5rem;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
`;

const StatisticsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatsCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  
  span {
    font-size: 1.5rem;
    font-weight: 600;
    opacity: 0.8;
  }
`;

const StatDescription = styled.div`
  color: var(--text-secondary);
  font-size: 0.95rem;
`;

const TasksHeader = styled(motion.h3)`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 3rem 0 2rem;
  color: var(--text-primary);
  text-align: center;
`;

const TasksSliderContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  margin: 2rem 0 4rem;
  overflow: hidden;
`;

const TasksSliderWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
`;

const TaskSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  transition: all 0.5s ease;
  opacity: ${props => props.isActive ? 1 : 0.7};
  transform: scale(${props => props.isActive ? 1 : 0.9});
`;

const TaskSlideInner = styled.div`
  max-width: 600px;
  width: 100%;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 2rem;
  }
`;

const SliderNavigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
`;

const SliderButton = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const SliderButtonIcon = styled.span`
  width: 12px;
  height: 12px;
  border-top: 2px solid var(--accent-color);
  border-right: 2px solid var(--accent-color);
  transform: rotate(${props => props.direction === 'left' ? '225deg' : '45deg'});
`;

const SliderDots = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SliderDot = styled.div`
  width: ${props => props.isActive ? '30px' : '10px'};
  height: 10px;
  border-radius: 10px;
  background: ${props => props.isActive 
    ? 'var(--accent-color)' 
    : 'rgba(var(--accent-color-rgb), 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.isActive 
      ? 'var(--accent-color)' 
      : 'rgba(var(--accent-color-rgb), 0.5)'};
  }
`;

const TaskIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--accent-color);
`;

const TaskIconBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.15);
  z-index: -1;
  transition: all 0.3s ease;
  
  ${TaskIconWrapper}:hover & {
    transform: scale(1.1);
    background: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const TaskTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const TaskDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.6;
`;

const NetworksSlider = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 4rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const NetworkBadge = styled.div`
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.1) 0%, rgba(var(--accent-color-rgb), 0.3) 100%);
  padding: 0.6rem 1.2rem;
  border-radius: 30px;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 5px 15px rgba(var(--accent-color-rgb), 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.2) 0%, rgba(var(--accent-color-rgb), 0.4) 100%);
    box-shadow: 0 8px 20px rgba(var(--accent-color-rgb), 0.2);
  }
`;

// Services Section Styles
const ServicesSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.95) 100%
  );
  overflow: hidden;
`;

const ServicesBgPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  background-image: radial-gradient(rgba(var(--accent-color-rgb), 0.3) 2px, transparent 2px);
  background-size: 30px 30px;
  z-index: 0;
`;

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const ServicesIntro = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const ServicesTabs = styled.div`
  margin-bottom: 4rem;
`;

const ServiceTabsList = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceTab = styled(motion.button)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 0.8rem 2rem;
  border-radius: 30px;
  color: ${props => props.isActive ? 'var(--accent-color)' : 'var(--text-primary)'};
  font-weight: 600;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  min-width: 200px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ActiveTabIndicator = styled(motion.div)`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 3px;
  background: var(--accent-color);
  border-radius: 3px;
`;

const ServicesContent = styled.div`
  min-height: 500px;
  position: relative;
`;

const ServiceTabContent = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ServiceTabHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
  }
`;

const ServiceTabIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  font-size: 1.5rem;
`;

const ServiceTabDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 2rem;
  font-size: 1.05rem;
`;

// Content Strategy specific styles
const ServiceFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceFeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ServiceFeatureIcon = styled.div`
  color: var(--accent-color);
  font-size: 1.2rem;
  margin-top: 0.2rem;
  flex-shrink: 0;
`;

const ServiceFeatureText = styled.p`
  color: var(--text-primary);
  font-weight: 500;
`;

// Page Management specific styles
const ServicePlatforms = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ServicePlatformItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ServicePlatformIcon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  
  ${props => props.platform === 'instagram' && `
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  `}
  
  ${props => props.platform === 'tiktok' && `
    background: black;
  `}
  
  ${props => props.platform === 'other' && `
    background: linear-gradient(45deg, #FF0000 0%, #FF0000 100%);
  `}
`;

const ServicePlatformName = styled.p`
  color: var(--text-primary);
  font-weight: 500;
`;

// Targeting specific styles
const ServiceCampaignTypes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCampaignItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ServiceCampaignCircle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  font-weight: 700;
  flex-shrink: 0;
`;

const ServiceCampaignText = styled.p`
  color: var(--text-primary);
`;

const ServiceIllustration = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

// Mockup components for illustrations
const ContentPlanMockup = styled.div`
  width: 300px;
  height: 200px;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.8) 0%, rgba(var(--accent-color-rgb), 0.4) 100%);
  border-radius: 10px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  &::before, &::after {
    content: '';
    position: absolute;
    background: white;
    border-radius: 4px;
  }
  
  &::before {
    top: 20px;
    left: 20px;
    right: 20px;
    height: 30px;
  }
  
  &::after {
    top: 70px;
    left: 20px;
    right: 20px;
    bottom: 20px;
  }
`;

const SocialMediaMockup = styled.div`
  width: 200px;
  height: 400px;
  background: linear-gradient(135deg, #1DA1F2 0%, #1778F2 50%, #C13584 100%);
  border-radius: 30px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 25px;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 6px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const TargetingMockup = styled.div`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.4) 0%, rgba(var(--accent-color-rgb), 0.8) 100%);
  border-radius: 50%;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid rgba(255, 255, 255, 0.3);
  }
  
  &::before {
    width: 200px;
    height: 200px;
  }
  
  &::after {
    width: 100px;
    height: 100px;
  }
`;

// Collaboration Section Styles
const CollaborationSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(
    to bottom,
    rgba(var(--bg-primary-rgb), 0.97) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
`;

const CollabWave = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: radial-gradient(
    ellipse at center,
    rgba(var(--accent-color-rgb), 0.15) 0%,
    rgba(var(--accent-color-rgb), 0.05) 50%,
    transparent 100%
  );
  transform: translateY(-50%);
`;

const CollabContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const CollabIntro = styled(motion.p)`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const CollaborationTimeline = styled.div`
  position: relative;
  padding: 2rem 0;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-direction: ${props => props.isRight ? 'row-reverse' : 'row'};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProcessStepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.7) 0%, rgba(var(--accent-color-rgb), 0.9) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
  margin-right: 1.2rem;
  margin-top: 0.5rem;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  
  ${ProcessStep}[isRight] & {
    margin-right: 0;
    margin-left: 1.2rem;
  }
  
  @media (max-width: 768px) {
    margin: 0 0 1rem 0;
  }
`;

const ProcessStepContent = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  max-width: ${props => props.isRight ? 'calc(100% - 65px)' : '100%'};
  
  &::before {
    content: '';
    position: absolute;
    top: 25px;
    width: 15px;
    height: 15px;
    background: rgba(255, 255, 255, 0.02);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    transform: rotate(-45deg);
    z-index: 1;
    
    ${props => props.isRight ? `
      right: -8px;
    ` : `
      left: -8px;
    `}
  }
  
  @media (max-width: 768px) {
    &::before {
      display: none;
    }
    max-width: 100%;
    padding: 1rem;
  }
`;

const ProcessStepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
`;

const ProcessStepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const ProcessConnector = styled.div`
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(var(--accent-color-rgb), 0.1),
    rgba(var(--accent-color-rgb), 0.5),
    rgba(var(--accent-color-rgb), 0.1)
  );
  z-index: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Briefing & Audience Analysis specific styles
const ProcessStepList = styled.div`
  margin-bottom: 1rem;
`;

const ProcessStepListTitle = styled.p`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
`;

const ProcessStepListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.4rem;
  color: var(--text-secondary);
  font-size: 0.85rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProcessStepListIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  flex-shrink: 0;
  font-size: 0.8rem;
`;

// Strategy specific styles
const ProcessStepTactic = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(var(--accent-color-rgb), 0.05);
  padding: 0.8rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProcessStepTacticIcon = styled.div`
  width: 30px;
  height: 30px;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ProcessStepTacticText = styled.p`
  color: var(--text-primary);
  font-weight: 500;
  line-height: 1.4;
  font-size: 0.85rem;
`;

// Execution specific styles
const ProcessStepCards = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProcessStepCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ProcessStepCardIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.5) 0%, rgba(var(--accent-color-rgb), 0.8) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ProcessStepCardTitle = styled.p`
  color: var(--text-primary);
  font-weight: 600;
  text-align: center;
  font-size: 0.85rem;
`;

// Analytics specific styles
const ProcessStepTools = styled.div`
  margin-bottom: 1rem;
`;

const ProcessStepToolsTitle = styled.p`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
`;

const ProcessStepToolsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStepTool = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  font-size: 0.8rem;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
  }
  
  @media (max-width: 768px) {
    justify-content: center;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ProcessStepToolIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: rgba(var(--accent-color-rgb), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  flex-shrink: 0;
  font-size: 0.8rem;
`;

// Illustration components
const ProcessStepIllustration = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const AudienceAnalysisGraphic = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px dashed rgba(var(--accent-color-rgb), 0.3);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(var(--accent-color-rgb), 0.2) 0%, rgba(var(--accent-color-rgb), 0.1) 70%, transparent 100%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StrategyGraphic = styled.div`
  width: 120px;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  &::before, &::after {
    content: '';
    height: 6px;
    background: linear-gradient(90deg, rgba(var(--accent-color-rgb), 0.3) 0%, rgba(var(--accent-color-rgb), 0.7) 50%, rgba(var(--accent-color-rgb), 0.3) 100%);
    border-radius: 3px;
  }
  
  &::before {
    width: 80%;
    margin-top: 15px;
  }
  
  &::after {
    width: 60%;
    margin-bottom: 15px;
  }
`;

const ExecutionGraphic = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    transform: translate(-50%, -50%) rotate(45deg);
    background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.1) 0%, rgba(var(--accent-color-rgb), 0.3) 100%);
    border: 1px solid rgba(var(--accent-color-rgb), 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    transform: translate(-50%, -50%) rotate(45deg);
    background: rgba(var(--accent-color-rgb), 0.2);
    border: 1px solid rgba(var(--accent-color-rgb), 0.5);
  }
`;

const AnalyticsGraphic = styled.div`
  width: 100px;
  height: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 8px 8px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(var(--accent-color-rgb), 0.5);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: rgba(var(--accent-color-rgb), 0.5);
  }
  
  div {
    width: 15%;
    background: linear-gradient(to top, rgba(var(--accent-color-rgb), 0.3), rgba(var(--accent-color-rgb), 0.7));
    border-radius: 2px 2px 0 0;
  }
`;

const CollabCTA = styled(motion.div)`
  text-align: center;
  margin-top: 5rem;
`;

const CollabCTAText = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 2rem;
`;

const CollabCTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Results Section Styles
const ResultsSection = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
`;

const ResultsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ResultsHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  position: relative;
`;

const ResultsDecorLine = styled.div`
  width: 120px;
  height: 3px;
  background: linear-gradient(to right, transparent, var(--accent-color), transparent);
  margin: 0 auto 1.5rem;
`;

const ResultsTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.2rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
`;

const ResultsDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
`;

const ResultsContent = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ResultsTimeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  min-width: 40px;
  
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const TimelineStep = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  
  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

const TimelineNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin-bottom: 1rem;
  box-shadow: 0 5px 15px rgba(var(--accent-color-rgb), 0.3);
  z-index: 2;
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const TimelineConnector = styled.div`
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, var(--accent-color), rgba(var(--accent-color-rgb), 0.3));
  margin: 0.5rem 0;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 2px;
    margin: 0 0.5rem;
  }
`;

const ResultBoxes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ResultBox = styled(motion.div)`
  position: relative;
  border-radius: 16px;
  border-left: ${props => props.active ? '4px solid var(--accent-color)' : '1px solid rgba(255, 255, 255, 0.1)'};
  background: rgba(255, 255, 255, 0.02);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.04);
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ResultBoxInner = styled.div`
  padding: 2rem;
`;

const ResultBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ResultBoxTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const ResultBoxIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  background: ${props => props.tertiary 
    ? 'linear-gradient(135deg, #FF9B21 0%, #FFCA80 120%)'
    : props.secondary 
      ? 'linear-gradient(135deg, #4A8CFF 0%, #9AC1FF 120%)'
      : 'linear-gradient(135deg, var(--accent-color) 0%, #B56EFF 120%)'};
  box-shadow: ${props => props.tertiary 
    ? '0 8px 20px rgba(255, 155, 33, 0.3)'
    : props.secondary 
      ? '0 8px 20px rgba(74, 140, 255, 0.3)'
      : '0 8px 20px rgba(var(--accent-color-rgb), 0.3)'};
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1) rotate(10deg);
  }
`;

const ResultBoxDesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ResultBoxList = styled.div`
  margin-top: 1.5rem;
`;

const ResultBoxListTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ResultBoxListItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  
  span {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
`;

const CheckIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  margin-right: 1rem;
  flex-shrink: 0;
  color: ${props => props.tertiary 
    ? '#FF9B21'
    : props.secondary 
      ? '#4A8CFF'
      : 'var(--accent-color)'};
  background: ${props => props.tertiary 
    ? 'rgba(255, 155, 33, 0.15)'
    : props.secondary 
      ? 'rgba(74, 140, 255, 0.15)'
      : 'rgba(var(--accent-color-rgb), 0.15)'};
`;

const ResultMetrics = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ResultMetric = styled.div`
  flex: 1;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  text-align: center;
`;

const ResultMetricValue = styled.div`
  font-size: 1.8rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  color: ${props => props.tertiary 
    ? '#FF9B21'
    : props.secondary 
      ? '#4A8CFF'
      : 'var(--accent-color)'};
`;

const ResultMetricLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ResultChart = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 200px;
  margin-bottom: 2.5rem;
  padding: 0 1rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 35px;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    z-index: 0;
  }
`;

const ResultChartBar = styled.div`
  position: relative;
  width: 20%;
  height: ${props => props.height};
  background: linear-gradient(to top, rgba(74, 140, 255, 0.7), rgba(74, 140, 255, 0.3));
  border-radius: 6px 6px 0 0;
  transition: all 0.3s ease;
  
  &::before {
    content: '${props => props.label}';
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.85rem;
    color: var(--text-secondary);
    white-space: nowrap;
  }
  
  &::after {
    content: '${props => props.value}';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.9rem;
    font-weight: 600;
    color: #4A8CFF;
  }
  
  &:hover {
    transform: scaleY(1.05);
    background: linear-gradient(to top, rgba(74, 140, 255, 0.8), rgba(74, 140, 255, 0.4));
  }
`;

const ResultProgressContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const ResultProgressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const ResultProgressLabel = styled.div`
  width: 100px;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-right: 1rem;
`;

const ResultProgressBar = styled.div`
  flex: 1;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-right: 1rem;
`;

const ResultProgressFill = styled.div`
  height: 100%;
  width: ${props => props.percent};
  border-radius: 4px;
  background: ${props => props.tertiary 
    ? 'linear-gradient(to right, #FF9B21, #FFCA80)'
    : props.secondary 
      ? 'linear-gradient(to right, #4A8CFF, #9AC1FF)'
      : 'linear-gradient(to right, var(--accent-color), #B56EFF)'};
`;

const ResultProgressValue = styled.div`
  width: 70px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: right;
`;

const ResultsQuote = styled.div`
  margin: 4rem auto;
  max-width: 900px;
  text-align: center;
`;

const ResultsQuoteText = styled.blockquote`
  font-size: 1.6rem;
  font-weight: 600;
  font-style: italic;
  color: var(--text-primary);
  line-height: 1.5;
  position: relative;
  
  &::before, &::after {
    content: '"';
    font-size: 4rem;
    color: rgba(var(--accent-color-rgb), 0.2);
    line-height: 0;
    position: absolute;
  }
  
  &::before {
    left: -2rem;
    top: 1rem;
  }
  
  &::after {
    right: -2rem;
    bottom: 0;
  }
`;

const ResultsCTA = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ResultsCTATitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ResultsCTAButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
`;

// Team Advantages Section Styles - New Hexagon Design
const TeamAdvantagesSection = styled.section`
  position: relative;
  padding: 8rem 0;
  overflow: hidden;
`;

const TeamAdvantagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
`;

const TeamAdvantagesHeader = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 6rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2rem;
    transform: translateX(-50%);
    width: 150px;
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(var(--accent-color-rgb), 0.5), transparent);
  }
`;

const TeamAdvantagesTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.2rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, rgba(var(--accent-color-rgb), 0.2), var(--accent-color), rgba(var(--accent-color-rgb), 0.2));
  }
`;

const TeamAdvantagesDescription = styled.p`
  font-size: 1.15rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-top: 2rem;
`;

const HexagonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  & > :last-child {
    grid-column: 1 / -1;
    justify-self: center;
  }
`;

const HexagonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Hexagon = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  background: ${props => props.tertiary 
    ? 'linear-gradient(135deg, rgba(255, 155, 33, 0.05) 0%, rgba(255, 155, 33, 0.15) 100%)'
    : props.secondary 
      ? 'linear-gradient(135deg, rgba(74, 140, 255, 0.05) 0%, rgba(74, 140, 255, 0.15) 100%)'
      : 'linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.05) 0%, rgba(var(--accent-color-rgb), 0.15) 100%)'};
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    background: rgba(255, 255, 255, 0.02);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-10px) rotate(3deg);
    box-shadow: ${props => props.tertiary 
      ? '0 20px 40px rgba(255, 155, 33, 0.1)'
      : props.secondary 
        ? '0 20px 40px rgba(74, 140, 255, 0.1)'
        : '0 20px 40px rgba(var(--accent-color-rgb), 0.1)'};
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.tertiary 
      ? 'conic-gradient(from 0deg at 50% 50%, rgba(255, 155, 33, 0) 0%, rgba(255, 155, 33, 0.3) 50%, rgba(255, 155, 33, 0) 100%)'
      : props.secondary 
        ? 'conic-gradient(from 0deg at 50% 50%, rgba(74, 140, 255, 0) 0%, rgba(74, 140, 255, 0.3) 50%, rgba(74, 140, 255, 0) 100%)'
        : 'conic-gradient(from 0deg at 50% 50%, rgba(var(--accent-color-rgb), 0) 0%, rgba(var(--accent-color-rgb), 0.3) 50%, rgba(var(--accent-color-rgb), 0) 100%)'};
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    animation: spinGradient 10s linear infinite;
    z-index: 0;
  }
  
  @keyframes spinGradient {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const HexagonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 85%;
  z-index: 2;
`;

const HexagonIcon = styled.div`
  font-size: 2.5rem;
  color: var(--accent-color);
  margin-bottom: 1rem;
  position: relative;
  animation: iconPulse 2s infinite ease-in-out;
  
  @keyframes iconPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(var(--accent-color-rgb), 0.1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    animation: ripple 2s infinite ease-out;
  }
  
  @keyframes ripple {
    0% { width: 0px; height: 0px; opacity: 0.8; }
    100% { width: 70px; height: 70px; opacity: 0; }
  }
  
  ${Hexagon}[secondary] & {
    color: #4A8CFF;
    
    &::after {
      background: rgba(74, 140, 255, 0.1);
    }
  }
  
  ${Hexagon}[tertiary] & {
    color: #FF9B21;
    
    &::after {
      background: rgba(255, 155, 33, 0.1);
    }
  }
`;

const HexagonTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
  color: var(--text-primary);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    background: ${props => props.tertiary 
      ? '#FF9B21'
      : props.secondary 
        ? '#4A8CFF'
        : 'var(--accent-color)'};
    transition: width 0.5s ease;
  }
  
  ${Hexagon}:hover & {
    &::after {
      width: 80%;
    }
  }
`;

const HexagonText = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

const AdvantageFeatureList = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const AdvantageFeatureTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: var(--text-primary);
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const AdvantageFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  span {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.5;
  }
`;

const AdvantageFeatureMarker = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  background: ${props => props.tertiary 
    ? 'linear-gradient(135deg, #FF9B21 0%, #FFB84F 100%)'
    : props.secondary 
      ? 'linear-gradient(135deg, #4A8CFF 0%, #63A1FF 100%)'
      : 'linear-gradient(135deg, var(--accent-color) 0%, #9461FC 100%)'};
  box-shadow: ${props => props.tertiary 
    ? '0 5px 15px rgba(255, 155, 33, 0.3)'
    : props.secondary 
      ? '0 5px 15px rgba(74, 140, 255, 0.3)'
      : '0 5px 15px rgba(var(--accent-color-rgb), 0.3)'};
`;

const TeamConnectBanner = styled.div`
  position: relative;
  margin-top: 6rem;
  padding: 3rem 2rem;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.03) 0%, rgba(var(--accent-color-rgb), 0.08) 100%);
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
  overflow: hidden;
`;

const TeamConnectDecor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(var(--accent-color-rgb), 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(74, 140, 255, 0.1) 0%, transparent 50%);
  z-index: 0;
  
  &::after {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgba(var(--accent-color-rgb), 0.05);
    border-radius: 50%;
    filter: blur(80px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const TeamConnectContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TeamConnectHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--text-primary);
  max-width: 500px;
`;

const TeamConnectButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--accent-color) 0%, #9461FC 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
`;

// FAQ Section Styles
const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
`;

const pulseFaq = keyframes`
  0% { opacity: 0.6; width: 60px; }
  50% { opacity: 1; width: 90px; }
  100% { opacity: 0.6; width: 60px; }
`;

const shimmerEffect = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

// Стилизованные компоненты для секции FAQ
const FaqSection = styled.section`
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
  margin-top: 4rem;

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
`;

const FaqWaveTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(
    to top left,
    transparent 49%,
    var(--bg-primary) 51%
  );
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
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
      rgba(var(--accent-color-rgb), 0.05) 0%,
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
      rgba(var(--accent-color-rgb), 0.05) 0%,
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
  text-shadow: 0 2px 10px rgba(var(--accent-color-rgb), 0.2);

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 5rem;
    color: rgba(var(--accent-color-rgb), 0.03);
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
    animation: ${pulseFaq} 2s infinite ease-in-out;
  }
`;

const FaqList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 4rem;
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
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2),
      0 0 15px rgba(var(--accent-color-rgb), 0.1);
    border-color: rgba(var(--accent-color-rgb), 0.1);
    transform: translateY(-3px);
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
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
    box-shadow: 0 0 10px rgba(var(--accent-color-rgb), 0.2);
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
      rgba(var(--accent-color-rgb), 0.1),
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
      var(--accent-color-light)
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
      rgba(var(--accent-color-rgb), 0.05) 0%,
      transparent 50%
    );
    z-index: -1;
  }
`;

const FaqCtaText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--text-primary);
  text-align: center;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const FaqCtaButton = styled(motion.button)`
  padding: 1rem 2rem;
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
  display: flex;
  align-items: center;
  gap: 0.8rem;
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
