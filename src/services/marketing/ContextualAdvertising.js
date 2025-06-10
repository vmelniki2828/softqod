import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, 
  FaChartLine, 
  FaBullseye,
  FaCheck,
  FaRegChartBar,
  FaRocket,
  FaUsers,
  FaHandshake,
  FaShoppingCart,
  FaKeyboard,
  FaEdit,
  FaCogs,
  FaChartBar,
  FaAd,
  FaChartPie,
  FaTags,
  FaEye,
  FaLightbulb,
  FaSearch,
  FaSearchDollar,
  FaTag,
  FaGoogle,
  FaFacebookF,
  FaComments,
  FaBullhorn,
  FaMoneyBillWave,
  FaBolt
} from 'react-icons/fa';

const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

// Animations
const breatheAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const floatVertical = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0); }
`;

const shimmerEffect = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
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

// Преимущества контекстной рекламы
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

// PPC platforms
const PlatformsContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 450px;
  perspective: 1000px;
`;

const PlatformCard = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d;
  transition: all 0.3s ease;

  &:hover {
    transform: translateZ(20px) scale(1.05);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15),
      0 0 15px rgba(var(--accent-color-rgb), 0.3);
    z-index: 10;
  }

  &.google {
    top: 15%;
    left: 15%;
    background: linear-gradient(
      45deg, 
      #4285F4 0%, 
      #34A853 33%, 
      #FBBC05 66%, 
      #EA4335 100%
    );
  }

  &.facebook {
    top: 5%;
    right: 20%;
    background: #1877f2;
  }

  &.yandex {
    bottom: 25%;
    left: 8%;
    background: linear-gradient(
      45deg, 
      #fc3f1d 0%, 
      #ff5c38 100%
    );
  }

  &.remarketing {
    top: 40%;
    right: 10%;
    background: linear-gradient(
      45deg, 
      #7638fa 0%, 
      #a388f7 100%
    );
  }

  &.shopping {
    bottom: 10%;
    right: 25%;
    background: linear-gradient(
      45deg, 
      #0ea5e9 0%, 
      #38bdf8 100%
    );
  }
`;

const PlatformIcon = styled.div`
  font-size: 2.5rem;
  color: white;
`;

const PlatformName = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

// Info Section - What is Contextual Advertising
const InfoSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const InfoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const InfoTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const InfoContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const InfoText = styled.div`
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const InfoDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const InfoHighlight = styled.div`
  margin: 2.5rem 0;
  padding: 1.5rem;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-left: 4px solid var(--accent-color);
  border-radius: 0 8px 8px 0;
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin: 0;
    font-style: italic;
  }
  
  strong {
    color: var(--accent-color);
  }
`;

const InfoVisualization = styled.div`
  position: relative;
  height: 450px;
  
  @media (max-width: 1024px) {
    height: 400px;
    order: 0;
  }
`;

const SearchBarMockup = styled(motion.div)`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 60px;
  background: white;
  border-radius: 30px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  z-index: 3;
`;

const SearchIcon = styled.div`
  font-size: 1.2rem;
  color: #5f6368;
  margin-right: 15px;
`;

const SearchText = styled.div`
  font-size: 1.1rem;
  color: #202124;
  font-weight: 400;
`;

const SearchResultsMockup = styled(motion.div)`
  position: absolute;
  top: 25%;
  left: 5%;
  width: 90%;
  height: 65%;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  padding: 20px;
  overflow: hidden;
  z-index: 2;
`;

const SearchAd = styled(motion.div)`
  padding: 12px 15px;
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;
  
  &::before {
    content: 'Ad';
    position: absolute;
    top: 12px;
    right: 15px;
    font-size: 0.7rem;
    color: rgba(var(--accent-color-rgb), 0.7);
    background: rgba(var(--accent-color-rgb), 0.1);
    padding: 2px 6px;
    border-radius: 4px;
  }
`;

const AdTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: var(--accent-color);
  margin-bottom: 5px;
`;

const AdUrl = styled.div`
  font-size: 0.8rem;
  color: #34A853;
  margin-bottom: 5px;
`;

const AdDescription = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
`;

const SearchResult = styled(motion.div)`
  padding: 12px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  margin-bottom: 15px;
`;

const ResultTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #8ab4f8;
  margin-bottom: 5px;
`;

const ResultUrl = styled.div`
  font-size: 0.8rem;
  color: #34A853;
  margin-bottom: 5px;
`;

const ResultDescription = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.4;
`;

const KeyPointsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const KeyPoint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const KeyPointIcon = styled.div`
  width: 44px;
  height: 44px;
  background: rgba(var(--accent-color-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color);
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const KeyPointContent = styled.div``;

const KeyPointTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const KeyPointText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
`;

const ContextualAdvertising = () => {
  const platformRef = useRef(null);
  
  // Add useState hook inside the component
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFaqs, setExpandedFaqs] = useState([]);
  
  // Advantages data
  const advantages = [
    {
      icon: <FaSearchDollar />,
      text: "Точне таргетування на користувачів, які шукають ваші послуги"
    },
    {
      icon: <FaRegChartBar />,
      text: "Можливість відстежувати ROI та конверсії в реальному часі"
    },
    {
      icon: <FaTag />,
      text: "Гнучкий бюджет та оплата лише за результат (клік або конверсію)"
    },
    {
      icon: <FaRocket />,
      text: "Миттєвий старт кампанії та швидкі результати"
    }
  ];

  // Business types data for the interactive tabs
  const businessData = [
    {
      id: 'smb',
      name: 'Малий та середній бізнес',
      icon: <FaHandshake />,
      color: '#4285F4',
      description: 'Пошукова реклама дозволяє отримувати клієнтів вже в перший день запуску кампанії. Немає потреби чекати кілька місяців, як у SEO. Це ідеальний варіант для компаній, які щойно виходять на ринок або запускають нові продукти.',
      advantages: [
        'Швидкий старт і миттєві результати',
        'Гнучкий контроль рекламного бюджету',
        'Точне налаштування під локальну аудиторію',
        'Висока ефективність при запуску нових продуктів'
      ],
      stats: [
        { icon: '⚡', value: '300-400%', label: 'Середній ROI' },
        { icon: '🚀', value: '1-2 дні', label: 'Час до перших клієнтів' }
      ]
    },
    {
      id: 'ecommerce',
      name: 'Інтернет-магазини',
      icon: <FaShoppingCart />,
      color: '#EA4335',
      description: 'Для e-commerce ефективні торгові кампанії, динамічний ремаркетинг та пошукова реклама. Ви можете показувати свої товари користувачам, які активно їх шукають, а також повертати відвідувачів, які не завершили покупку.',
      advantages: [
        'Візуальні оголошення з товарами у Shopping Ads',
        'Динамічний ремаркетинг для повернення клієнтів',
        'Таргетування за сезонними інтересами',
        'Оптимізація конверсії для окремих категорій товарів'
      ],
      stats: [
        { icon: '📊', value: '30%', label: 'Збільшення конверсії' },
        { icon: '📈', value: '25%', label: 'Зростання середнього чеку' }
      ]
    },
    {
      id: 'services',
      name: 'Сфера послуг',
      icon: <FaRegChartBar />,
      color: '#673AB7',
      description: 'Реклама у Google Ads дозволяє залучити клієнтів на консультування, запис до лікаря, замовлення доставки чи будь-яку іншу послугу. Таргетинг на локальну аудиторію особливо ефективний для офлайн-бізнесів.',
      advantages: [
        'Геолокаційне таргетування на район чи місто',
        'Реклама за часовим розкладом роботи',
        'Відстеження та аналіз дзвінків',
        'Інтеграція з CRM для відстеження клієнтів'
      ],
      stats: [
        { icon: '📱', value: '40-50%', label: 'Зростання клієнтської бази' },
        { icon: '📍', value: '60%', label: 'Більше локальних клієнтів' }
      ]
    },
    {
      id: 'b2b',
      name: 'B2B-компанії',
      icon: <FaUsers />,
      color: '#009688',
      description: 'Хоча цикл угоди тут довший, контекстна реклама чудово працює для залучення лідів, проведення вебінарів, підписки на розсилки або бронювання зустрічей з менеджерами.',
      advantages: [
        'Генерація якісних B2B лідів',
        'Просування вебінарів та професійних подій',
        'Таргетинг за посадою та галуззю',
        'Ремаркетинг для довгого циклу прийняття рішень'
      ],
      stats: [
        { icon: '💼', value: '25%', label: 'Підвищення якості лідів' },
        { icon: '💰', value: '20%', label: 'Зниження вартості ліда' }
      ]
    },
    {
      id: 'startups',
      name: 'Стартапи',
      icon: <FaRocket />,
      color: '#FF5722',
      description: 'Контекстна реклама — це спосіб швидко протестувати гіпотези, перевірити попит і вийти на цільову аудиторію з мінімальними витратами часу.',
      advantages: [
        'Швидке тестування MVP та бізнес-ідей',
        'Детальний аналіз реакції аудиторії',
        'Гнучкі стратегії A/B тестування',
        'Масштабування при підтвердженні гіпотез'
      ],
      stats: [
        { icon: '🔥', value: '60%', label: 'Скорочення Time-to-Market' },
        { icon: '📝', value: '45%', label: 'Більше зворотного зв\'язку' }
      ]
    }
  ];
  
  // FAQ data
  const faqData = [
    {
      question: '1. Скільки часу потрібно, щоб побачити перші результати від контекстної реклами?',
      answer: 'Зазвичай перші кліки та переходи на сайт з\'являються вже в день запуску. Проте для повноцінної оцінки ефективності варто дочекатися хоча б 1–2 тижнів накопичення статистики.'
    },
    {
      question: '2. Чи можна запускати контекстну рекламу без сайту?',
      answer: 'Так, у деяких випадках можна направляти трафік на лендінг, сторінку в соцмережах або Google Мій бізнес. Проте сайт або посадкова сторінка значно покращують якість реклами та конверсію.'
    },
    {
      question: '3. Чи варто запускати контекстну рекламу у "не сезон"?',
      answer: 'Це залежить від ніші. У деяких сферах (наприклад, ремонт, навчання, подарунки) "не сезон" означає меншу конкуренцію та нижчу ціну за клік. Це може бути вигідною стратегією.'
    },
    {
      question: '4. Як уникнути склікування бюджету конкурентами?',
      answer: 'Google має вбудовані механізми захисту від фродового трафіку. Також можна використовувати додаткові сервіси захисту, обмеження по IP та геолокації. Ми застосовуємо комплексні методи протидії.'
    },
    {
      question: '5. Чи можу я самостійно керувати рекламною кампанією після запуску?',
      answer: 'Так, ми можемо налаштувати кампанію з урахуванням подальшого самостійного управління. Також проводимо інструктаж або передаємо повний пакет налаштувань з поясненнями.'
    }
  ];

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

  // Toggle FAQ function
  const toggleFaq = (index) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
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
                Контекстна реклама — <HighlightedSpan>лідогенерація</HighlightedSpan> у момент пошуку
              </AnimatedTitle>

              <HeroDescription
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Контекстна реклама — це інструмент цифрового маркетингу, який дозволяє показувати ваші оголошення потенційним клієнтам саме тоді, коли вони шукають ваш продукт або послугу. Це потужний інструмент для залучення цільового трафіку, який готовий до конверсії. Ми налаштовуємо ефективні кампанії в Google Ads, Facebook Ads та інших платформах, які приносять якісні ліди.
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
                  Замовити контекстну рекламу <FaArrowRight />
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
              <PlatformsContainer ref={platformRef}>
                <PlatformCard 
                  className="google"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaGoogle />
                  </PlatformIcon>
                  <PlatformName>Google Ads</PlatformName>
                </PlatformCard>
                
                <PlatformCard 
                  className="facebook"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaFacebookF />
                  </PlatformIcon>
                  <PlatformName>Facebook Ads</PlatformName>
                </PlatformCard>
                
                <PlatformCard 
                  className="yandex"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaSearch />
                  </PlatformIcon>
                  <PlatformName>Yandex Direct</PlatformName>
                </PlatformCard>
                
                <PlatformCard 
                  className="remarketing"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaUsers />
                  </PlatformIcon>
                  <PlatformName>Ремаркетинг</PlatformName>
                </PlatformCard>
                
                <PlatformCard 
                  className="shopping"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  whileHover={{ y: -10 }}
                >
                  <PlatformIcon>
                    <FaShoppingCart />
                  </PlatformIcon>
                  <PlatformName>Shopping Ads</PlatformName>
                </PlatformCard>
              </PlatformsContainer>
            </HeroRight>
          </HeroSplit>
        </HeroInner>
      </HeroWrapper>
      
      <InfoSection>
        <InfoContainer>
          <InfoTitle>Що таке контекстна реклама</InfoTitle>
          
          <InfoContentGrid>
            <InfoText>
              <InfoDescription>
                Контекстна реклама — це інтелектуальний рекламний механізм, який з'єднує бізнес із потенційними клієнтами саме в той момент, коли вони активно шукають пропоновані товари чи послуги. На відміну від традиційної реклами, контекстна працює не на широку аудиторію, а на конкретні пошукові запити та інтереси користувачів.
              </InfoDescription>
              
              <InfoDescription>
                Основна перевага такого формату — релевантність. Ви не просто показуєте рекламу, а відповідаєте на конкретний запит користувача. Наприклад, якщо він шукає "купити кросівки для бігу в Києві", ваша реклама спортивного магазину може з'явитися у верхніх позиціях результатів пошуку ще до органічних результатів.
              </InfoDescription>
              
              <InfoHighlight>
                <p>
                  <strong>Важливо:</strong> Контекстна реклама використовує модель оплати за клік (PPC), тобто ви платите лише тоді, коли користувач зацікавився вашим оголошенням достатньо, щоб клікнути на нього.
                </p>
              </InfoHighlight>
              
              <InfoDescription>
                Сьогодні контекстна реклама — це не лише текстові оголошення у пошуку Google. Вона також включає медійні оголошення на сайтах-партнерах, YouTube, Gmail та навіть мобільних додатках. Завдяки розвиненим алгоритмам машинного навчання, ці системи стають дедалі точнішими у виборі потенційних клієнтів.
              </InfoDescription>
              
              <KeyPointsList>
                <KeyPoint>
                  <KeyPointIcon>
                    <FaSearch />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>Пошукова реклама</KeyPointTitle>
                    <KeyPointText>
                      Показується безпосередньо у результатах пошуку, коли користувач шукає конкретні товари чи послуги
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>
                
                <KeyPoint>
                  <KeyPointIcon>
                    <FaComments />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>Медійна мережа</KeyPointTitle>
                    <KeyPointText>
                      Розміщується на сайтах-партнерах, у мобільних додатках та відеоконтенті, враховуючи інтереси користувачів
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>
                
                <KeyPoint>
                  <KeyPointIcon>
                    <FaUsers />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>Ремаркетинг</KeyPointTitle>
                    <KeyPointText>
                      Націлена на користувачів, які вже відвідували ваш сайт, але не здійснили цільову дію
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>
                
                <KeyPoint>
                  <KeyPointIcon>
                    <FaShoppingCart />
                  </KeyPointIcon>
                  <KeyPointContent>
                    <KeyPointTitle>Товарна реклама</KeyPointTitle>
                    <KeyPointText>
                      Демонструє конкретні товари з вашого каталогу, включаючи фото, ціну та інші характеристики
                    </KeyPointText>
                  </KeyPointContent>
                </KeyPoint>
              </KeyPointsList>
            </InfoText>
            
            <InfoVisualization>
              <SearchBarMockup
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SearchIcon>
                  <FaSearch />
                </SearchIcon>
                <SearchText>купити кросівки для бігу в Києві</SearchText>
              </SearchBarMockup>
              
              <SearchResultsMockup
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <SearchAd
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <AdTitle>Професійні бігові кросівки - Знижки до -40%</AdTitle>
                  <AdUrl>www.runnersstore.ua/sale</AdUrl>
                  <AdDescription>
                    Широкий вибір брендових кросівок для бігу. Безкоштовна доставка. Гарантія 30 днів. ✓ Відгуки ✓ Консультація експертів
                  </AdDescription>
                </SearchAd>
                
                <SearchAd
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <AdTitle>Кросівки для бігу Nike, Adidas, Asics - SportShop</AdTitle>
                  <AdUrl>www.sportshop.ua/running</AdUrl>
                  <AdDescription>
                    Великий вибір бігових кросівок у Києві ✓ Офіційна гарантія ✓ Доставка по всій Україні ✓ Оплата при отриманні
                  </AdDescription>
                </SearchAd>
                
                <SearchResult
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <ResultTitle>Як вибрати кросівки для бігу: поради експертів</ResultTitle>
                  <ResultUrl>www.runningblog.ua/how-to-choose</ResultUrl>
                  <ResultDescription>
                    Дізнайтеся, як правильно обрати кросівки для бігу залежно від типу стопи, стилю бігу та поверхні...
                  </ResultDescription>
                </SearchResult>
                
                <SearchResult
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <ResultTitle>ТОП-10 кросівок для бігу у 2023 році</ResultTitle>
                  <ResultUrl>www.runnersclub.ua/reviews</ResultUrl>
                  <ResultDescription>
                    Рейтинг найкращих бігових кросівок за співвідношенням ціна/якість. Відгуки спортсменів...
                  </ResultDescription>
                </SearchResult>
              </SearchResultsMockup>
            </InfoVisualization>
          </InfoContentGrid>
        </InfoContainer>
      </InfoSection>

      {/* Types of Contextual Advertising Section */}
      <TypesSection>
        <ImplBackgroundGradient />
        <ImplBackgroundGrid />
        
        <TypesContainer>
          <TypesTitle>
            Основні види контекстної реклами
          </TypesTitle>
          
          <TypesDescription>
            Контекстна реклама охоплює різні формати, які дозволяють досягти користувача на різних етапах воронки продажів — від моменту пошуку товару до перегляду відео на YouTube. Розглянемо основні види детальніше.
          </TypesDescription>
          
          <TypesGrid>
            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TypeIconContainer className="search">
                <FaSearch />
              </TypeIconContainer>
              <TypeName>Пошукова реклама <TypeNameEn>(Search Ads)</TypeNameEn></TypeName>
              <TypeDescription>
                Пошукова реклама — це оголошення, що з'являються у верхній частині сторінки результатів пошуку Google, коли користувач вводить певний запит. Це один із найефективніших форматів реклами, оскільки звертається до користувача в момент конкретного інтересу.
              </TypeDescription>
              
              <TypeAdvantagesList>
                <AdvantageTitle>Переваги:</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Високий рівень наміру (intent) у користувача
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Гнучке налаштування ключових слів
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Миттєвий трафік на сайт
                </TypeAdvantageItem>
              </TypeAdvantagesList>
              
              <TypeUseCase>
                Ідеально підходить для просування товарів, послуг, запису на консультації та генерації лідів.
              </TypeUseCase>
            </TypeCard>
            
            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TypeIconContainer className="display">
                <FaRegChartBar />
              </TypeIconContainer>
              <TypeName>Медійна реклама <TypeNameEn>(Display Ads)</TypeNameEn></TypeName>
              <TypeDescription>
                Медійні оголошення — це банери, які з'являються на сайтах-партнерах Google, у додатках та на платформах, що підтримують Google Display Network. Вони можуть включати зображення, анімацію та текстові елементи.
              </TypeDescription>
              
              <TypeAdvantagesList>
                <AdvantageTitle>Переваги:</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Візуальна привабливість
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Велике охоплення аудиторії
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Таргетинг за інтересами, демографією та поведінкою
                </TypeAdvantageItem>
              </TypeAdvantagesList>
              
              <TypeUseCase>
                Ефективна для формування впізнаваності бренду та охоплення нової аудиторії.
              </TypeUseCase>
            </TypeCard>
            
            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TypeIconContainer className="video">
                <FaBullhorn />
              </TypeIconContainer>
              <TypeName>Відеореклама <TypeNameEn>(YouTube Ads)</TypeNameEn></TypeName>
              <TypeDescription>
                Реклама у відеоформаті розміщується на YouTube та в мережі відеопартнерів Google. Вона дозволяє доносити емоційний меседж, залучати увагу та підвищувати довіру до бренду.
              </TypeDescription>
              
              <TypeAdvantagesList>
                <AdvantageTitle>Види:</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  In-stream (з можливістю пропуску)
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Bumper Ads (короткі до 6 секунд)
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Video Discovery Ads
                </TypeAdvantageItem>
              </TypeAdvantagesList>
              
              <TypeUseCase>
                Особливо підходить для B2C-сегменту, брендових кампаній та запуску нових продуктів.
              </TypeUseCase>
            </TypeCard>
            
            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TypeIconContainer className="shopping">
                <FaShoppingCart />
              </TypeIconContainer>
              <TypeName>Торгові кампанії <TypeNameEn>(Google Shopping)</TypeNameEn></TypeName>
              <TypeDescription>
                Google Shopping — це спеціальний формат реклами для інтернет-магазинів, де користувач бачить товар, його ціну, назву магазину та зображення просто в пошуку.
              </TypeDescription>
              
              <TypeAdvantagesList>
                <AdvantageTitle>Переваги:</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Висока конверсія
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Візуальний контент у видачі
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Автоматичне оновлення товарних даних
                </TypeAdvantageItem>
              </TypeAdvantagesList>
              
              <TypeUseCase>
                Для запуску потрібно зв'язати Google Merchant Center і Google Ads.
              </TypeUseCase>
            </TypeCard>
            
            <TypeCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <TypeIconContainer className="remarketing">
                <FaUsers />
              </TypeIconContainer>
              <TypeName>Ремаркетинг і динамічний ремаркетинг</TypeName>
              <TypeDescription>
                Ремаркетинг дозволяє показувати рекламу користувачам, які вже були на сайті, але не здійснили цільову дію. Динамічний ремаркетинг — це персоналізовані оголошення з тими товарами або послугами, які користувач переглядав.
              </TypeDescription>
              
              <TypeAdvantagesList>
                <AdvantageTitle>Переваги:</AdvantageTitle>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Нагадування про бренд
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Високий ROI
                </TypeAdvantageItem>
                <TypeAdvantageItem>
                  <TypeAdvantageIcon>✓</TypeAdvantageIcon>
                  Адаптація до поведінки користувача
                </TypeAdvantageItem>
              </TypeAdvantagesList>
              
              <TypeUseCase>
                Особливо ефективні для e-commerce, сервісів бронювання, курсів та B2B-компаній.
              </TypeUseCase>
            </TypeCard>
          </TypesGrid>
        </TypesContainer>
      </TypesSection>

      {/* Stages of Launching Contextual Advertising Section */}
      <StagesSection>
        <ImplBackgroundGradient />
        <ImplBackgroundGrid />
        
        <StagesContainer>
          <StagesTitle>
            Етапи запуску контекстної реклами
          </StagesTitle>
          
          <StagesDescription>
            Запуск ефективної контекстної реклами вимагає системного підходу та чіткого дотримання послідовності дій. 
            Кожен етап відіграє ключову роль у досягненні ваших бізнес-цілей.
          </StagesDescription>
          
          <StagesTimeline>
            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <StageNumber>01</StageNumber>
              <StageContent>
                <StageTitle>Аналіз бізнесу та цільової аудиторії</StageTitle>
                <StageDescription>
                  На першому етапі важливо зрозуміти, хто є вашим потенційним клієнтом, які проблеми ви вирішуєте, 
                  які переваги має ваш продукт або послуга. Аналіз конкурентів також дає змогу виявити сильні та слабкі сторони ринку.
                </StageDescription>
                <StageIconContainer>
                  <FaSearch />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Дослідження поведінки цільової аудиторії</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Аналіз стратегій конкурентів</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Виявлення унікальних переваг продукту</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
            
            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <StageNumber>02</StageNumber>
              <StageContent>
                <StageTitle>Визначення цілей та KPI</StageTitle>
                <StageDescription>
                  Мета кампанії може бути різною: продаж, генерація лідів, впізнаваність бренду або підписка. 
                  Для кожної мети визначаються ключові показники ефективності (KPI), наприклад, вартість ліда (CPL), 
                  рентабельність витрат (ROAS) чи CTR.
                </StageDescription>
                <StageIconContainer>
                  <FaChartLine />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Встановлення чітких бізнес-метрик</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Визначення допустимої вартості залучення клієнта</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Розрахунок очікуваного ROI</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
            
            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <StageNumber>03</StageNumber>
              <StageContent>
                <StageTitle>Підбір ключових слів та аудиторій</StageTitle>
                <StageDescription>
                  Проводиться семантичне ядро — список релевантних ключових фраз, за якими користувачі шукають ваші товари чи послуги. 
                  Також налаштовуються цільові аудиторії — за інтересами, поведінкою, географією, мовою тощо.
                </StageDescription>
                <StageIconContainer>
                  <FaKeyboard />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Збір пошукових запитів вашої ЦА</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Аналіз пошукових обсягів та конкуренції</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Групування ключових слів за тематиками</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
            
            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <StageNumber>04</StageNumber>
              <StageContent>
                <StageTitle>Створення рекламних оголошень</StageTitle>
                <StageDescription>
                  Пишуться привабливі тексти, що стимулюють до дії, підбираються зображення або відео. 
                  Оголошення мають відповідати очікуванням користувача та вести на релевантну цільову сторінку.
                </StageDescription>
                <StageIconContainer>
                  <FaEdit />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Написання конверсійних заголовків</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Створення унікальних торгових пропозицій</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Розробка чітких CTA (закликів до дії)</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
            
            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StageNumber>05</StageNumber>
              <StageContent>
                <StageTitle>Налаштування кампанії в Google Ads</StageTitle>
                <StageDescription>
                  Усі параметри — геотаргетинг, бюджет, ставки, графік показу — задаються відповідно до стратегії. 
                  Також підключається відстеження конверсій через Google Analytics або Tag Manager.
                </StageDescription>
                <StageIconContainer>
                  <FaCogs />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Структурування кампаній та груп оголошень</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Налаштування таргетингу та виключень</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Впровадження систем відстеження</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
            
            <StageCard
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <StageNumber>06</StageNumber>
              <StageContent>
                <StageTitle>Запуск та моніторинг</StageTitle>
                <StageDescription>
                  Після запуску важливо контролювати хід кампанії щодня: відстежувати витрати, 
                  переглядати клікабельність, вносити оперативні коригування.
                </StageDescription>
                <StageIconContainer>
                  <FaRocket />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Аналіз показників у реальному часі</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Контроль витрат та ефективності</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Швидке реагування на зміни в метриках</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
            
            <StageCard
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <StageNumber>07</StageNumber>
              <StageContent>
                <StageTitle>Оптимізація</StageTitle>
                <StageDescription>
                  На основі зібраних даних оптимізуються ключові слова, таргетинг, креативи, ставки. 
                  Тестуються A/B-варіанти оголошень для підвищення ефективності.
                </StageDescription>
                <StageIconContainer>
                  <FaChartBar />
                </StageIconContainer>
                <StageBulletPoints>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Корекція стратегії на основі даних</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Проведення A/B-тестів</span>
                  </StageBullet>
                  <StageBullet>
                    <StageBulletIcon>✓</StageBulletIcon>
                    <span>Масштабування успішних підходів</span>
                  </StageBullet>
                </StageBulletPoints>
              </StageContent>
            </StageCard>
          </StagesTimeline>
          
          <StagesCallout>
            <CalloutContent>
              <CalloutTitle>Готові запустити ефективну контекстну рекламу?</CalloutTitle>
              <CalloutDescription>
                Наша команда створить і запустить для вас кампанію, яка приведе цільових клієнтів 
                та забезпечить максимальну окупність інвестицій
              </CalloutDescription>
              <CalloutButton>
                Замовити консультацію
                <FaArrowRight />
              </CalloutButton>
            </CalloutContent>
            <CalloutBackground />
          </StagesCallout>
        </StagesContainer>
      </StagesSection>

      {/* Tools for Contextual Advertising Section */}
      <ToolsSection>
        <BackgroundGradient />
        
        <ToolsContainer>
          <ToolsTitle>
            Інструменти для роботи з контекстною рекламою
          </ToolsTitle>
          
          <ToolsDescription>
            Успішне ведення контекстної реклами неможливе без використання професійних інструментів. 
            Вони допомагають автоматизувати процеси, аналізувати результати, оптимізувати витрати та досягати кращих показників.
          </ToolsDescription>
          
          <ToolsGrid>
            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <ToolIconContainer className="google-ads">
                <FaAd />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Google Ads</ToolName>
                <ToolDescription>
                  Це основна платформа для запуску пошукових, медійних, відео- та торгових кампаній. Дозволяє налаштовувати 
                  кампанії будь-якого рівня складності, керувати ставками, створювати оголошення, сегментувати аудиторії та відстежувати ефективність.
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Запуск всіх типів рекламних кампаній</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Гнучке керування ставками та бюджетом</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Детальна аналітика результатів</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>
            
            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <ToolIconContainer className="analytics">
                <FaChartPie />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Google Analytics</ToolName>
                <ToolDescription>
                  Незамінний інструмент для збору та аналізу поведінки користувачів на сайті. Дає змогу побачити, 
                  як працюють оголошення, які сторінки найефективніші, скільки часу користувач проводить на сайті, які конверсії відбуваються.
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Відстеження джерел трафіку та поведінки</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Налаштування цілей та конверсій</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Інтеграція з Google Ads</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>
            
            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <ToolIconContainer className="tag-manager">
                <FaTags />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Google Tag Manager</ToolName>
                <ToolDescription>
                  Сервіс для зручного керування тегами без необхідності втручання в код сайту. 
                  Дозволяє встановлювати пікселі конверсій, ремаркетингу, події аналітики тощо.
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Встановлення тегів без редагування коду</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Централізоване керування тегами</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Налаштування тригерів та змінних</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>
            
            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <ToolIconContainer className="keyword-planner">
                <FaSearch />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Keyword Planner</ToolName>
                <ToolDescription>
                  Інструмент від Google для підбору ключових слів. Дає змогу дізнатися частотність запитів, 
                  рівень конкуренції та приблизну ціну за клік. Ідеально підходить для створення семантичного ядра.
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Пошук релевантних ключових слів</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Оцінка обсягів пошуку та конкуренції</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Прогнозування бюджету кампанії</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>
            
            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <ToolIconContainer className="seo-tools">
                <FaChartLine />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>SEMrush, Ahrefs, Serpstat</ToolName>
                <ToolDescription>
                  SEO-аналітичні сервіси, що також корисні для контекстної реклами. Допомагають вивчати конкурентів, 
                  аналізувати рекламні стратегії інших компаній, підбирати ключові слова та відстежувати позиції.
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Аналіз конкурентних стратегій</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Розширений пошук ключових слів</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Відстеження позицій та видимості</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>
            
            <ToolCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            >
              <ToolIconContainer className="ux-tools">
                <FaEye />
                <ToolIconRing />
              </ToolIconContainer>
              <ToolContent>
                <ToolName>Hotjar або Clarity</ToolName>
                <ToolDescription>
                  Ці сервіси дають змогу бачити, як користувачі взаємодіють із сайтом: куди клікають, 
                  як гортaють сторінку, що їх зупиняє. Це корисно для підвищення конверсій після переходу з реклами.
                </ToolDescription>
                <ToolFeatures>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Теплові карти кліків та скролу</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Запис сесій користувачів</span>
                  </ToolFeature>
                  <ToolFeature>
                    <ToolFeatureIcon>
                      <FaCheck />
                    </ToolFeatureIcon>
                    <span>Опитування та форми зворотного зв'язку</span>
                  </ToolFeature>
                </ToolFeatures>
              </ToolContent>
            </ToolCard>
          </ToolsGrid>
          
          <ToolsFooter>
            <ToolsNote>
              <NoteIcon>
                <FaLightbulb />
              </NoteIcon>
              <NoteText>
                Наші фахівці володіють усіма необхідними інструментами на професійному рівні та постійно 
                відстежують нові функції й можливості, щоб забезпечити вашому бізнесу максимальну ефективність контекстної реклами.
              </NoteText>
            </ToolsNote>
          </ToolsFooter>
        </ToolsContainer>
      </ToolsSection>

      {/* KPI Section */}
      <KpiSection>
        <KpiBackgroundGlow />
        
        <KpiContainer>
          <KpiTitle>
            Показники ефективності (KPI)
          </KpiTitle>
          
          <KpiDescription>
            Для оцінки успішності контекстної реклами важливо орієнтуватися не лише на загальну кількість кліків чи витрат, 
            а й на конкретні показники ефективності — KPI. Саме вони демонструють, наскільки реклама досягає поставлених бізнес-цілей.
          </KpiDescription>
          
          <KpiGrid>
            <KpiCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              $accentColor="#4285F4"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(66, 133, 244, 0.1)">
                  <FaChartLine />
                </KpiIcon>
                <KpiMetricName>CTR</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>Click-Through Rate — клікабельність</KpiSubtitle>
              <KpiContent>
                Показує відсоток користувачів, які побачили оголошення та клікнули на нього. Високий CTR свідчить про релевантність оголошення до запиту або інтересів аудиторії.
              </KpiContent>
              <KpiExample $bgColor="rgba(66, 133, 244, 0.05)">
                <KpiExampleTitle>Приклад:</KpiExampleTitle>
                <KpiExampleContent>
                  CTR = 5% означає, що 5 зі 100 користувачів, які побачили оголошення, клікнули на нього
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>
            
            <KpiCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              $accentColor="#34A853"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(52, 168, 83, 0.1)">
                  <FaTag />
                </KpiIcon>
                <KpiMetricName>CPC</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>Cost per Click — ціна за клік</KpiSubtitle>
              <KpiContent>
                Це середня сума, яку ви платите за кожен перехід за оголошенням. Важливо знижувати CPC без втрати трафіку шляхом оптимізації оголошень та ключових слів.
              </KpiContent>
              <KpiExample $bgColor="rgba(52, 168, 83, 0.05)">
                <KpiExampleTitle>Приклад:</KpiExampleTitle>
                <KpiExampleContent>
                  CPC = 2€ означає, що за кожен клік по вашому оголошенню ви платите в середньому 2€
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>
            
            <KpiCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              $accentColor="#FBBC05"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(251, 188, 5, 0.1)">
                  <FaShoppingCart />
                </KpiIcon>
                <KpiMetricName>CPA</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>Cost per Acquisition — вартість конверсії</KpiSubtitle>
              <KpiContent>
                CPA визначає, скільки в середньому коштує залучення одного клієнта (наприклад, покупця або ліда). Це ключовий показник для оцінки рентабельності кампанії.
              </KpiContent>
              <KpiExample $bgColor="rgba(251, 188, 5, 0.05)">
                <KpiExampleTitle>Приклад:</KpiExampleTitle>
                <KpiExampleContent>
                  CPA = 25€ означає, що залучення одного нового клієнта коштує в середньому 25€
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>
            
            <KpiCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              $accentColor="#EA4335"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(234, 67, 53, 0.1)">
                  <FaChartPie />
                </KpiIcon>
                <KpiMetricName>ROAS</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>Return on Ad Spend — прибутковість</KpiSubtitle>
              <KpiContent>
                Цей показник відображає співвідношення доходу до витрат на рекламу. Якщо ROAS перевищує 100%, кампанія приносить прибуток.
              </KpiContent>
              <KpiExample $bgColor="rgba(234, 67, 53, 0.05)">
                <KpiExampleTitle>Приклад:</KpiExampleTitle>
                <KpiExampleContent>
                  ROAS = 350% означає, що на кожен 1€, вкладений у рекламу, ви отримуєте 3.5€ доходу
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>
            
            <KpiCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              $accentColor="#9C27B0"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(156, 39, 176, 0.1)">
                  <FaBullseye />
                </KpiIcon>
                <KpiMetricName>Кількість конверсій</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>Обсяг цільових дій користувачів</KpiSubtitle>
              <KpiContent>
                Фіксується кожна дія, яку вважають цільовою: заповнення форми, дзвінок, покупка. Аналіз кількості й якості конверсій допомагає коригувати стратегію.
              </KpiContent>
              <KpiExample $bgColor="rgba(156, 39, 176, 0.05)">
                <KpiExampleTitle>Приклад:</KpiExampleTitle>
                <KpiExampleContent>
                  120 конверсій при 3000 кліків дає коефіцієнт конверсії 4%, що є хорошим показником
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>
            
            <KpiCard 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              $accentColor="#1E88E5"
            >
              <KpiHeader>
                <KpiIcon $bgColor="rgba(30, 136, 229, 0.1)">
                  <FaUsers />
                </KpiIcon>
                <KpiMetricName>Якість трафіку</KpiMetricName>
              </KpiHeader>
              <KpiSubtitle>Поведінкові метрики користувачів</KpiSubtitle>
              <KpiContent>
                Визначається через поведінку користувачів на сайті: глибина перегляду, час перебування, відсоток відмов. Високоякісний трафік означає більшу ймовірність продажів.
              </KpiContent>
              <KpiExample $bgColor="rgba(30, 136, 229, 0.05)">
                <KpiExampleTitle>Приклад:</KpiExampleTitle>
                <KpiExampleContent>
                  Середній час на сайті 3:20, перегляд 3.5 сторінок, відсоток відмов 35% — показники якісного трафіку
                </KpiExampleContent>
              </KpiExample>
            </KpiCard>
          </KpiGrid>
          
          <KpiAction>
            <KpiActionText>
              Хочете отримати детальний аналіз ефективності вашої рекламної кампанії?
            </KpiActionText>
            <KpiActionButton whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(var(--accent-color-rgb), 0.4)' }}>
              Замовити аудит ефективності
              <FaArrowRight />
            </KpiActionButton>
          </KpiAction>
        </KpiContainer>
      </KpiSection>

      {/* Who is contextual advertising for Section */}
      <SuitableForSection>
        <SuitableForContainer>
          <SuitableForTitle>
            Кому підходить контекстна реклама
          </SuitableForTitle>
          
          <SuitableForDescription>
            Контекстна реклама — це універсальний інструмент, який підходить практично для будь-якого бізнесу, 
            незалежно від ніші, розміру компанії чи стадії розвитку. Однак є типи бізнесу, 
            яким вона приносить особливо відчутні результати.
          </SuitableForDescription>
          
          <BusinessTypes>
            <BusinessTabsContainer>
              <BusinessTabs>
                {businessData.map((business, index) => (
                  <BusinessTab 
                    key={business.id}
                    className={activeTab === index ? 'active' : ''}
                    onClick={() => setActiveTab(index)}
                    $color={business.color}
                  >
                    <BusinessTabIcon>{business.icon}</BusinessTabIcon>
                    <BusinessTabName>{business.name}</BusinessTabName>
                  </BusinessTab>
                ))}
              </BusinessTabs>
            </BusinessTabsContainer>
            
            <BusinessContent>
              <AnimatePresence mode="wait">
                <BusinessInfo
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <BusinessInfoHeader $color={businessData[activeTab].color}>
                    <BusinessInfoTitle>{businessData[activeTab].name}</BusinessInfoTitle>
                    <BusinessInfoIcon>{businessData[activeTab].icon}</BusinessInfoIcon>
                  </BusinessInfoHeader>
                  
                  <BusinessInfoText>
                    {businessData[activeTab].description}
                  </BusinessInfoText>
                  
                  <BusinessAdvantagesTitle>Переваги:</BusinessAdvantagesTitle>
                  <BusinessAdvantagesList>
                    {businessData[activeTab].advantages.map((advantage, index) => (
                      <BusinessAdvantageItem 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <BusinessAdvantageIcon $color={businessData[activeTab].color}>
                          <FaCheck />
                        </BusinessAdvantageIcon>
                        {advantage}
                      </BusinessAdvantageItem>
                    ))}
                  </BusinessAdvantagesList>
                  
                  <BusinessStatsContainer>
                    <BusinessStatItem $color={businessData[activeTab].color}>
                      <BusinessStatIcon>{businessData[activeTab].stats[0].icon}</BusinessStatIcon>
                      <BusinessStatContent>
                        <BusinessStatValue>{businessData[activeTab].stats[0].value}</BusinessStatValue>
                        <BusinessStatLabel>{businessData[activeTab].stats[0].label}</BusinessStatLabel>
                      </BusinessStatContent>
                    </BusinessStatItem>
                    <BusinessStatItem $color={businessData[activeTab].color}>
                      <BusinessStatIcon>{businessData[activeTab].stats[1].icon}</BusinessStatIcon>
                      <BusinessStatContent>
                        <BusinessStatValue>{businessData[activeTab].stats[1].value}</BusinessStatValue>
                        <BusinessStatLabel>{businessData[activeTab].stats[1].label}</BusinessStatLabel>
                      </BusinessStatContent>
                    </BusinessStatItem>
                  </BusinessStatsContainer>
                  
                  <BusinessCaseStudyButton $color={businessData[activeTab].color}>
                    Переглянути приклад кампанії
                    <FaArrowRight />
                  </BusinessCaseStudyButton>
                </BusinessInfo>
              </AnimatePresence>
            </BusinessContent>
          </BusinessTypes>
          
          <SuitableForContactCta>
            <SuitableForCtaContent>
              <SuitableForCtaTitle>Не впевнені, чи підходить контекстна реклама для вашого бізнесу?</SuitableForCtaTitle>
              <SuitableForCtaText>
                Наші фахівці допоможуть вам з'ясувати, чи підійде контекстна реклама саме вашому бізнесу, та розроблять індивідуальну стратегію з урахуванням специфіки вашої ніші.
              </SuitableForCtaText>
              <SuitableForCtaButton>
                Отримати безкоштовну консультацію
              </SuitableForCtaButton>
            </SuitableForCtaContent>
          </SuitableForContactCta>
        </SuitableForContainer>
      </SuitableForSection>

      {/* Our Approach Section */}
      <ApproachSection>
        <ApproachContainer>
          <ApproachTitle>
            Наш підхід до запуску реклами
          </ApproachTitle>
          
          <ApproachIntro>
            Ми не просто налаштовуємо контекстну рекламу — ми створюємо рішення, які працюють на результат. 
            Наш підхід заснований на глибокому аналізі, тестуванні та постійній оптимізації.
          </ApproachIntro>
          
          <ApproachTimeline>
            <ApproachStage 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>01</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={false} />
              <ApproachStageContent>
                <ApproachStageTitle>Занурення в бізнес</ApproachStageTitle>
                <ApproachStageDescription>
                  Спочатку ми занурюємось у бізнес-контекст клієнта: вивчаємо продукт, конкурентів, цільову аудиторію та її поведінкові патерни. 
                  Глибоке розуміння продукту дозволяє нам знайти його унікальні переваги та правильно презентувати їх у рекламі.
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>Аналіз ніші</ApproachTag>
                  <ApproachTag>Вивчення конкурентів</ApproachTag>
                  <ApproachTag>Аудит цільової аудиторії</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaSearchDollar />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>
            
            <ApproachStage 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>02</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={false} />
              <ApproachStageContent>
                <ApproachStageTitle>Стратегія та планування</ApproachStageTitle>
                <ApproachStageDescription>
                  Далі — визначаємо чіткі KPI, розробляємо медіаплан і запускаємо кампанії через Google Ads. 
                  Замість простого запуску реклами, ми розробляємо комплексну стратегію з 
                  декількома сценаріями розвитку та чітким розподілом бюджету.
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>Медіапланування</ApproachTag>
                  <ApproachTag>Визначення KPI</ApproachTag>
                  <ApproachTag>Бюджетування</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaChartLine />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>
            
            <ApproachStage 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>03</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={false} />
              <ApproachStageContent>
                <ApproachStageTitle>Моніторинг та оптимізація</ApproachStageTitle>
                <ApproachStageDescription>
                  У процесі роботи ми щоденно моніторимо ефективність: переглядаємо клікабельність оголошень, якість трафіку, 
                  конверсії та вартість залучення. За потреби оперативно вносимо коригування. 
                  Після тестування декількох варіантів реклами залишаємо найрезультативніші.
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>Щоденний контроль</ApproachTag>
                  <ApproachTag>A/B тестування</ApproachTag>
                  <ApproachTag>Оптимізація ставок</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaChartBar />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>
            
            <ApproachStage 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ApproachStageNumber>
                <ApproachStageNumberInner>04</ApproachStageNumberInner>
              </ApproachStageNumber>
              <ApproachStageLine $isLast={true} />
              <ApproachStageContent>
                <ApproachStageTitle>Звітність і масштабування</ApproachStageTitle>
                <ApproachStageDescription>
                  Ми забезпечуємо прозору звітність: клієнт бачить, куди витрачається бюджет, які кампанії працюють найкраще 
                  і як змінюється віддача з часом. Наше завдання — не просто витратити рекламні кошти, а примножити їх, 
                  тому ми постійно шукаємо нові можливості для масштабування успішних кампаній.
                </ApproachStageDescription>
                <ApproachStageTags>
                  <ApproachTag>Прозора аналітика</ApproachTag>
                  <ApproachTag>ROI-орієнтованість</ApproachTag>
                  <ApproachTag>Масштабування успіху</ApproachTag>
                </ApproachStageTags>
                <ApproachStageIcon>
                  <FaChartPie />
                </ApproachStageIcon>
              </ApproachStageContent>
            </ApproachStage>
          </ApproachTimeline>
        
          <ResultsSection>
            <ResultsTitle>
              Що ви отримаєте в результаті
            </ResultsTitle>
            
            <ResultsIntro>
              Запуск контекстної реклами з нами — це не просто набір оголошень у Google. 
              Це системний підхід, що приносить вимірюваний результат і конкретні бізнес-переваги.
            </ResultsIntro>
            
            <ResultsGrid>
              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaUsers />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>Цільовий трафік на сайт</ResultItemTitle>
                <ResultItemDescription>
                  Користувачі, які вже шукають ваші товари чи послуги, побачать ваші оголошення в потрібний момент. 
                  Контекстна реклама забезпечує найвищу релевантність аудиторії.
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>93%</ResultMetricValue>
                  <ResultMetricLabel>релевантності аудиторії</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>
              
              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaChartLine />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>Зростання звернень і продажів</ResultItemTitle>
                <ResultItemDescription>
                  Завдяки точному таргетингу та ефективній структурі кампаній, ваші конверсії зростуть.
                  Ми зосереджуємось на залученні клієнтів, готових до покупки.
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>+45%</ResultMetricValue>
                  <ResultMetricLabel>середнє зростання конверсій</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>
              
              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaBullhorn />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>Підвищення впізнаваності бренду</ResultItemTitle>
                <ResultItemDescription>
                  Особливо при використанні медійної реклами та YouTube, ваш бренд стане помітнішим для цільової аудиторії.
                  Ми допомагаємо залишатися на виду.
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>3.5x</ResultMetricValue>
                  <ResultMetricLabel>зростання brand awareness</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>
              
              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaMoneyBillWave />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>Повний контроль над бюджетом</ResultItemTitle>
                <ResultItemDescription>
                  Ви самі визначаєте, скільки готові інвестувати. Ми забезпечуємо максимальну 
                  ефективність кожної витраченої гривні на рекламу.
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>100%</ResultMetricValue>
                  <ResultMetricLabel>прозорості витрат</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>
              
              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaChartPie />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>Прозора аналітика</ResultItemTitle>
                <ResultItemDescription>
                  Наші звіти показують кожен клік, конверсію та прибутковість. Ви завжди знаєте, 
                  що працює, а що потребує оптимізації в рекламних кампаніях.
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>24/7</ResultMetricValue>
                  <ResultMetricLabel>доступ до даних</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>
              
              <ResultCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              >
                <ResultIconContainer>
                  <ResultIcon>
                    <FaBolt />
                  </ResultIcon>
                  <ResultIconGlow />
                </ResultIconContainer>
                <ResultItemTitle>Гнучкість і швидкість змін</ResultItemTitle>
                <ResultItemDescription>
                  Кампанії можна адаптувати в реальному часі до змін на ринку. Ми оперативно 
                  реагуємо на нові тренди та коригуємо стратегію для кращих результатів.
                </ResultItemDescription>
                <ResultMetric>
                  <ResultMetricValue>~24 год</ResultMetricValue>
                  <ResultMetricLabel>на впровадження змін</ResultMetricLabel>
                </ResultMetric>
              </ResultCard>
            </ResultsGrid>
            
            <ResultsNote>
              <ResultsNoteHighlight>Наша мета — не просто запуск реклами, а стабільне зростання вашого бізнесу завдяки цифровим каналам.</ResultsNoteHighlight>
              <ResultsAction
                whileHover={{ 
                  y: -5,
                  boxShadow: '0 10px 25px rgba(var(--accent-color-rgb), 0.4)'
                }}
              >
                Отримати безкоштовну консультацію
                <FaArrowRight />
              </ResultsAction>
            </ResultsNote>
          </ResultsSection>
        </ApproachContainer>
      </ApproachSection>

      {/* FAQ Section */}
      <FaqSection>
        <FaqWaveTop />
        
        <FaqContainer>
          <FaqGlowCircle className="circle-1" />
          <FaqGlowCircle className="circle-2" />
          
          <FaqTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            FAQ
          </FaqTitle>
          
          <FaqList
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <FaqItemContent
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1,
                  }}
                  layout
                >
                  <FaqQuestion
                    layout
                    onClick={() => toggleFaq(index)}
                  >
                    <FaqQuestionText>{faq.question}</FaqQuestionText>
                    <FaqToggle
                      animate={{
                        rotate: expandedFaqs.includes(index) ? 45 : 0,
                        backgroundColor: expandedFaqs.includes(index)
                          ? 'rgba(var(--accent-color-rgb), 0.3)'
                          : 'rgba(var(--accent-color-rgb), 0.1)',
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    />
                  </FaqQuestion>
                  
                  {expandedFaqs.includes(index) && (
                    <FaqAnswer
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                      layout
                    >
                      {faq.answer}
                    </FaqAnswer>
                  )}
                </FaqItemContent>
              </FaqItem>
            ))}
          </FaqList>
          
          <FaqCta
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaqCtaText>
              Залишилися питання щодо контекстної реклами? Зв'яжіться з нами для безкоштовної консультації
            </FaqCtaText>
            <FaqCtaButton
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Отримати консультацію
              <FaArrowRight />
            </FaqCtaButton>
          </FaqCta>
        </FaqContainer>
      </FaqSection>
    </PageContainer>
  );
};

// KPI Section Styled Components
const KpiSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(var(--bg-primary-rgb), 0.97) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const KpiBackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 30%, rgba(66, 133, 244, 0.07) 0%, transparent 70%),
    radial-gradient(circle at 80% 70%, rgba(52, 168, 83, 0.07) 0%, transparent 70%);
  z-index: 0;
`;

const KpiContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const KpiTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const KpiDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const KpiCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$accentColor || 'var(--accent-color)'};
    border-radius: 4px 4px 0 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.$accentColor ? `rgba(${hexToRgb(props.$accentColor)}, 0.2)` : 'rgba(var(--accent-color-rgb), 0.2)'};
  }
`;

const KpiHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const KpiIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  background: ${props => props.$bgColor || 'rgba(var(--accent-color-rgb), 0.1)'};
  color: ${props => props.$color || 'var(--accent-color)'};
`;

const KpiMetricName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

const KpiSubtitle = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const KpiContent = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const KpiExample = styled.div`
  padding: 1.2rem;
  background: ${props => props.$bgColor || 'rgba(255, 255, 255, 0.03)'};
  border-radius: 8px;
`;

const KpiExampleTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const KpiExampleContent = styled.p`
  font-size: 0.95rem;
  color: var(--text-primary);
  line-height: 1.5;
`;

const KpiAction = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.1) 0%, rgba(var(--accent-color-rgb), 0.02) 100%);
  border-radius: 16px;
`;

const KpiActionText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const KpiActionButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

// Helper function to convert hex to rgb
const hexToRgb = (hex) => {
  // Remove # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  // Return RGB format
  return `${r}, ${g}, ${b}`;
};

// Add new styled components for Types Section
const TypesSection = styled.section`
  padding: 7rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.95) 100%
  );

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const ImplBackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 20% 30%,
    rgba(var(--accent-color-rgb), 0.07) 0%,
    transparent 70%
  ),
  radial-gradient(
    circle at 80% 80%,
    rgba(var(--accent-color-rgb), 0.07) 0%,
    transparent 70%
  );
  z-index: 0;
`;

const ImplBackgroundGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    rgba(var(--accent-color-rgb), 0.03) 1px,
    transparent 1px
  ),
  linear-gradient(
    90deg,
    rgba(var(--accent-color-rgb), 0.03) 1px,
    transparent 1px
  );
  background-size: 40px 40px;
  background-position: center center;
  z-index: 0;
  opacity: 0.7;
  pointer-events: none;
`;

const TypesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const TypesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const TypesDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const TypesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const TypeCard = styled(motion.div)`
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    
    &::before {
      opacity: 0.1;
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.05;
    z-index: 0;
    transition: opacity 0.3s ease;
  }
  
  &:nth-child(5) {
    grid-column: span 2;
    
    @media (max-width: 1024px) {
      grid-column: span 1;
    }
  }
`;

const TypeIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  
  &.search {
    background: linear-gradient(135deg, #4285F4 0%, #34A853 100%);
    color: white;
  }
  
  &.display {
    background: linear-gradient(135deg, #ea4335 0%, #fbbc05 100%);
    color: white;
  }
  
  &.video {
    background: linear-gradient(135deg, #FF0000 0%, #FF5E3A 100%);
    color: white;
  }
  
  &.shopping {
    background: linear-gradient(135deg, #34A853 0%, #4285F4 100%);
    color: white;
  }
  
  &.remarketing {
    background: linear-gradient(135deg, #9C27B0 0%, #673AB7 100%);
    color: white;
  }
`;

const TypeName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  position: relative;
  z-index: 1;
`;

const TypeNameEn = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin-left: 0.5rem;
`;

const TypeDescription = styled.p`
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
`;

const TypeAdvantagesList = styled.div`
  margin: 1.5rem 0;
  position: relative;
  z-index: 1;
`;

const AdvantageTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const TypeAdvantageItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 1rem;
  color: var(--text-secondary);
`;

const TypeAdvantageIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const TypeUseCase = styled.div`
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--text-primary);
  font-weight: 500;
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  z-index: 1;
`;

// Styles for Stages Section
const StagesSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(var(--bg-primary-rgb), 0.98) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const StagesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const StagesTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const StagesDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const StagesTimeline = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(var(--accent-color-rgb), 0.3) 15%,
      rgba(var(--accent-color-rgb), 0.3) 85%,
      transparent
    );
    z-index: 0;
    transform: translateX(-50%);
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    
    &::before {
      left: 30px;
    }
  }
`;

const StageCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  
  &:nth-child(odd) {
    margin-right: 1.5rem;
    
    @media (max-width: 1024px) {
      margin-right: 0;
      margin-left: 4rem;
    }
  }
  
  &:nth-child(even) {
    margin-left: 1.5rem;
    
    @media (max-width: 1024px) {
      margin-left: 4rem;
    }
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border-color: rgba(var(--accent-color-rgb), 0.2);
  }
`;

const StageNumber = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-color);
  color: white;
  font-size: 1.5rem;
  font-weight: 800;
  position: absolute;
  top: 1.5rem;
  left: -30px;
  border-radius: 50%;
  z-index: 2;
  box-shadow: 0 5px 15px rgba(var(--accent-color-rgb), 0.3);
  
  @media (max-width: 1024px) {
    left: -2rem;
  }
  
  ${StageCard}:hover & {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(var(--accent-color-rgb), 0.4);
  }
`;

const StageContent = styled.div`
  padding: 2rem 2rem 2rem 2.5rem;
  flex: 1;
`;

const StageTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  padding-right: 50px;
`;

const StageDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const StageIconContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  
  ${StageCard}:hover & {
    transform: rotate(10deg);
    background: rgba(var(--accent-color-rgb), 0.15);
  }
`;

const StageBulletPoints = styled.div`
  margin-top: 1.5rem;
`;

const StageBullet = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const StageBulletIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  font-size: 0.7rem;
  margin-right: 0.8rem;
  flex-shrink: 0;
`;

const StagesCallout = styled.div`
  margin-top: 5rem;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
`;

const CalloutContent = styled.div`
  position: relative;
  padding: 3rem;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CalloutTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const CalloutDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin-bottom: 2rem;
`;

const CalloutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: white;
  color: var(--accent-color);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.9);
    color: #1a73e8; /* Deeper blue for better contrast */
    
    svg {
      transform: translateX(5px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const CalloutBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--accent-color) 0%, #4285F4 100%);
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='white' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E") center center;
    opacity: 0.3;
  }
`;

// Styles for Tools Section
const ToolsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const BackgroundGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at 10% 10%,
    rgba(var(--accent-color-rgb), 0.03) 0%,
    transparent 60%
  ),
  radial-gradient(
    circle at 90% 90%,
    rgba(var(--accent-color-rgb), 0.03) 0%,
    transparent 60%
  );
  z-index: 0;
`;

const ToolsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ToolsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ToolsDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ToolCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const ToolIconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &.google-ads {
    background: linear-gradient(135deg, #4285F4 0%, #34A853 100%);
    color: white;
  }
  
  &.analytics {
    background: linear-gradient(135deg, #F4B400 0%, #EA4335 100%);
    color: white;
  }
  
  &.tag-manager {
    background: linear-gradient(135deg, #1e88e5 0%, #0d47a1 100%);
    color: white;
  }
  
  &.keyword-planner {
    background: linear-gradient(135deg, #039be5 0%, #01579b 100%);
    color: white;
  }
  
  &.seo-tools {
    background: linear-gradient(135deg, #7b1fa2 0%, #4a148c 100%);
    color: white;
  }
  
  &.ux-tools {
    background: linear-gradient(135deg, #f57c00 0%, #e65100 100%);
    color: white;
  }
`;

const ToolIconRing = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: spin 15s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ToolContent = styled.div`
  flex: 1;
  position: relative;
  z-index: 2;
`;

const ToolName = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ToolDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ToolFeatures = styled.div`
  margin-top: 1.5rem;
`;

const ToolFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  font-size: 0.95rem;
  color: var(--text-secondary);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ToolFeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  font-size: 0.8rem;
  margin-right: 0.8rem;
  flex-shrink: 0;
`;

const ToolImage = styled.img`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 80px;
  height: 80px;
  opacity: 0.2;
  transition: all 0.3s ease;
  object-fit: contain;
  
  ${ToolCard}:hover & {
    opacity: 0.3;
    transform: scale(1.1) rotate(5deg);
  }
`;

const ToolsFooter = styled.div`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
`;

const ToolsNote = styled.div`
  background: rgba(var(--accent-color-rgb), 0.05);
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const NoteIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
`;

const NoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-primary);
  margin: 0;
`;

// For Who Section Styled Components
const ForWhoSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.97) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const ForWhoPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.05;
  background-image: 
    radial-gradient(circle at 50% 0, rgba(255, 255, 255, 0.1), transparent 20%),
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1), transparent 20%),
    radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1), transparent 20%),
    radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.1), transparent 20%);
  z-index: 0;
`;

const ForWhoContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ForWhoTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ForWhoDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const BusinessTypesSlider = styled.div`
  position: relative;
  margin-bottom: 4rem;
  padding-bottom: 2rem;
`;

const BusinessTypesList = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0.5rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const BusinessCard = styled(motion.div)`
  flex: 0 0 350px;
  scroll-snap-align: start;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    flex: 0 0 300px;
  }
`;

const BusinessIconBg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  
  &.smb {
    background: linear-gradient(135deg, #4285F4, #34A853);
  }
  
  &.ecommerce {
    background: linear-gradient(135deg, #EA4335, #FBBC05);
  }
  
  &.services {
    background: linear-gradient(135deg, #673AB7, #3F51B5);
  }
  
  &.b2b {
    background: linear-gradient(135deg, #009688, #4CAF50);
  }
  
  &.startups {
    background: linear-gradient(135deg, #FF5722, #F44336);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0)
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }
  
  @keyframes shine {
    0% { transform: translateX(-100%) rotate(45deg); }
    20%, 100% { transform: translateX(100%) rotate(45deg); }
  }
`;

const BusinessIcon = styled.div`
  font-size: 2rem;
  color: white;
  z-index: 1;
`;

const BusinessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const BusinessDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const BusinessAdvantages = styled.div`
  margin-bottom: 1.5rem;
`;

const BusinessAdvantage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
  font-size: 0.95rem;
  color: var(--text-primary);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const AdvantageCheck = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  flex-shrink: 0;
`;

const BusinessMetric = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  margin-top: auto;
`;

const BusinessMetricIcon = styled.div`
  font-size: 1.5rem;
`;

const BusinessMetricText = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
`;

const BusinessMetricValue = styled.span`
  color: var(--accent-color);
  font-weight: 600;
`;

const ScrollIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  color: var(--text-secondary);
  
  @media (min-width: 1400px) {
    display: none;
  }
`;

const ScrollIndicatorText = styled.span`
  font-size: 0.9rem;
`;

const ScrollIndicatorIcon = styled.div`
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(0); }
    40% { transform: translateX(8px); }
    60% { transform: translateX(4px); }
  }
`;

const ForWhoTestimonial = styled.div`
  max-width: 800px;
  margin: 0 auto 4rem;
  padding: 2.5rem;
  background: linear-gradient(
    135deg,
    rgba(var(--accent-color-rgb), 0.1) 0%,
    rgba(var(--accent-color-rgb), 0.05) 100%
  );
  border-radius: 16px;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: 2rem;
    left: 2rem;
    font-size: 8rem;
    line-height: 1;
    font-family: Georgia, serif;
    color: rgba(var(--accent-color-rgb), 0.1);
  }
`;

const TestimonialQuote = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.div`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
`;

const TestimonialPosition = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ForWhoNote = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ForWhoNoteIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--accent-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const ForWhoNoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-primary);
  flex: 1;
`;

const ForWhoNoteButton = styled.button`
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(var(--accent-color-rgb), 0.3);
  }
`;

// Suitable For Section Styled Components
const SuitableForSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const SuitableForContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SuitableForTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const SuitableForDescription = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 3rem;
  text-align: center;
`;

const BusinessTypes = styled.div`
  margin-bottom: 5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
`;

const BusinessTabsContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const BusinessTabs = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  min-width: max-content;
`;

const BusinessTab = styled.button`
  padding: 1.5rem 2rem;
  background: transparent;
  border: none;
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    color: var(--text-primary);
    background: rgba(255, 255, 255, 0.02);
  }
  
  &.active {
    color: ${props => props.$color || 'var(--accent-color)'};
    
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 3px;
      background: ${props => props.$color || 'var(--accent-color)'};
      border-radius: 3px 3px 0 0;
    }
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const BusinessTabIcon = styled.div`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BusinessTabName = styled.span``;

const BusinessContent = styled.div`
  padding: 3rem;
  position: relative;
  min-height: 670px;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const BusinessInfo = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 3rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const BusinessInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
`;

const BusinessInfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const BusinessInfoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.$color ? `rgba(${hexToRgb(props.$color)}, 0.1)` : 'rgba(var(--accent-color-rgb), 0.1)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.$color || 'var(--accent-color)'};
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
`;

const BusinessInfoText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BusinessAdvantagesTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const BusinessAdvantagesList = styled.div`
  margin-bottom: 2.5rem;
`;

const BusinessAdvantageItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  color: var(--text-secondary);
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BusinessAdvantageIcon = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.$color ? `rgba(${hexToRgb(props.$color)}, 0.1)` : 'rgba(var(--accent-color-rgb), 0.1)'};
  color: ${props => props.$color || 'var(--accent-color)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  flex-shrink: 0;
`;

const BusinessStatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BusinessStatItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-left: 3px solid ${props => props.$color || 'var(--accent-color)'};
`;

const BusinessStatIcon = styled.div`
  font-size: 2rem;
`;

const BusinessStatContent = styled.div``;

const BusinessStatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
`;

const BusinessStatLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const BusinessCaseStudyButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: transparent;
  border: 1px solid ${props => props.$color || 'var(--accent-color)'};
  color: ${props => props.$color || 'var(--accent-color)'};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$color ? `rgba(${hexToRgb(props.$color)}, 0.1)` : 'rgba(var(--accent-color-rgb), 0.1)'};
    transform: translateY(-3px);
    
    svg {
      transform: translateX(5px);
    }
  }
  
  svg {
    transition: transform 0.3s ease;
  }
`;

const SuitableForContactCta = styled.div`
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.2) 0%, rgba(var(--accent-color-rgb), 0.05) 100%);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 30%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 30%);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const SuitableForCtaContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const SuitableForCtaTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SuitableForCtaText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SuitableForCtaButton = styled.button`
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(var(--accent-color-rgb), 0.3);
  }
`;

// Styled Components for Approach Section
const ApproachSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    var(--bg-primary) 0%,
    rgba(var(--bg-primary-rgb), 0.98) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const ApproachContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const ApproachTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ApproachIntro = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const ApproachTimeline = styled.div`
  position: relative;
  margin: 0 auto 5rem;
  max-width: 900px;
`;

const ApproachStage = styled(motion.div)`
  position: relative;
  display: flex;
  margin-bottom: 2.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ApproachStageNumber = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.1) 0%, rgba(var(--accent-color-rgb), 0.05) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-color) 0%, rgba(var(--accent-color-rgb), 0.7) 100%);
    opacity: 0.2;
    z-index: -1;
  }
`;

const ApproachStageNumberInner = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent-color);
`;

const ApproachStageLine = styled.div`
  position: absolute;
  top: 60px;
  left: 30px;
  width: 1px;
  height: ${props => props.$isLast ? '0' : 'calc(100% - 30px)'};
  background: linear-gradient(
    to bottom,
    rgba(var(--accent-color-rgb), 0.3),
    rgba(var(--accent-color-rgb), 0.1)
  );
  z-index: 1;
`;

const ApproachStageContent = styled.div`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  margin-left: 2rem;
  flex: 1;
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(var(--accent-color-rgb), 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ApproachStageTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  padding-right: 50px;
`;

const ApproachStageDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ApproachStageTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const ApproachTag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(var(--accent-color-rgb), 0.07);
  border-radius: 30px;
  font-size: 0.85rem;
  color: var(--accent-color);
  font-weight: 500;
  
  &:hover {
    background: rgba(var(--accent-color-rgb), 0.1);
  }
`;

const ApproachStageIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(var(--accent-color-rgb), 0.1);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ApproachQuote = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  overflow: hidden;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ApproachQuoteContent = styled.div`
  padding: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const QuoteIcon = styled.div`
  font-size: 8rem;
  line-height: 1;
  font-family: Georgia, serif;
  color: rgba(var(--accent-color-rgb), 0.1);
  position: absolute;
  top: 1rem;
  left: 1.5rem;
`;

const QuoteText = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  color: var(--text-primary);
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const QuoteAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const QuoteAuthorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color) 0%, rgba(var(--accent-color-rgb), 0.8) 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const QuoteAuthorInfo = styled.div``;

const QuoteAuthorName = styled.div`
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
`;

const QuoteAuthorPosition = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ApproachQuoteGraph = styled.div`
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.15) 0%, rgba(var(--accent-color-rgb), 0.05) 100%);
  padding: 3rem;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const GraphTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MetricItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
`;

const MetricValue = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent-color);
  margin-bottom: 0.5rem;
`;

const MetricName = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ApproachAction = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: var(--accent-color);
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: auto;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const ResultsSection = styled.section`
  padding: 7rem 0;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(var(--bg-primary-rgb), 0.97) 0%,
    var(--bg-primary) 100%
  );
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(var(--accent-color-rgb), 0.4) 50%,
      transparent 100%
    );
  }
`;

const ResultsTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: center;
  background: linear-gradient(
    135deg,
    var(--text-primary) 0%,
    var(--accent-color) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--accent-color);
    border-radius: 2px;
  }
`;

const ResultsIntro = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  color: var(--text-secondary);
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
  position: relative;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResultCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$accentColor || 'var(--accent-color)'};
    border-radius: 4px 4px 0 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.$accentColor ? `rgba(${hexToRgb(props.$accentColor)}, 0.2)` : 'rgba(var(--accent-color-rgb), 0.2)'};
  }
`;

const ResultIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ResultIcon = styled.div`
  font-size: 2rem;
  color: var(--accent-color);
`;

const ResultIconGlow = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: spin 15s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ResultItemTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

const ResultItemDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const ResultMetric = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ResultMetricValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color);
`;

const ResultMetricLabel = styled.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ResultsNote = styled.div`
  margin-top: 5rem;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, rgba(var(--accent-color-rgb), 0.1) 0%, rgba(var(--accent-color-rgb), 0.05) 100%);
  border-radius: 16px;
`;

const ResultsNoteHighlight = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
`;

const ResultsAction = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: var(--accent-color);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

// FAQ Section Styled Components
const pulseFaq = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

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
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
`;

const FaqGlowCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(var(--accent-color-rgb), 0.2) 0%,
    rgba(var(--accent-color-rgb), 0.1) 40%,
    transparent 70%
  );
  z-index: 0;
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

  &::before, &::after {
    content: '';
    position: absolute;
    background: currentColor;
  }
  
  &::before {
    width: 12px;
    height: 2px;
  }
  
  &::after {
    width: 2px;
    height: 12px;
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

export default ContextualAdvertising;
