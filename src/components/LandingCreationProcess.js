import React, { useEffect, useState, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useAnimation, useInView } from 'framer-motion';

// Define keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0.5;
  }
`;

// Styled components
const LPCreationSection = styled(motion.section)`
  position: relative;
  padding: 8rem 2rem;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  overflow: hidden;
  z-index: 1;
`;

const LPCreationBgPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: linear-gradient(rgba(94, 234, 212, 0.05) 1px, transparent 1px), 
                   linear-gradient(90deg, rgba(94, 234, 212, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: 0 0;
  z-index: 0;
  opacity: 0.2;
`;

const LPCreationBottomFade = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300px;
  background: linear-gradient(to bottom, transparent, #0f172a);
  z-index: 0;
  pointer-events: none;
`;

const LPCreationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LPCreationAccentLine = styled(motion.div)`
  height: 4px;
  width: 80px;
  background: linear-gradient(90deg, #5eead4, #0ea5e9);
  border-radius: 2px;
  margin-bottom: 2rem;
`;

const LPCreationTitle = styled(motion.h2)`
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 800;
  text-align: center;
  margin-bottom: 2.5rem;
  background: linear-gradient(135deg, #fff 0%, #5eead4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(94, 234, 212, 0.3));
  position: relative;
  line-height: 1.3;
  letter-spacing: -0.5px;
`;

const LPCreationDescription = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #94a3b8;
  text-align: center;
  max-width: 900px;
  margin-bottom: 4rem;
`;

const LPCreationStepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  margin-bottom: 4rem;
`;

const LPCreationStepCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  isolation: isolate;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const LPCreationStepNumber = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  font-family: monospace;
  line-height: 1;
`;

const LPCreationStepIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 0 10px rgba(94, 234, 212, 0.2));
`;

const LPCreationStepTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #f1f5f9;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #fff 10%, #5eead4 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LPCreationStepText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  color: #94a3b8;
  flex-grow: 1;
`;

const LPCreationInfoBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 3rem;
  width: 100%;
  max-width: 900px;
  margin-bottom: 4rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  position: relative;
`;

const LPCreationDecorativeCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  
  &.circle1 {
    width: 300px;
    height: 300px;
    border: 1px dashed rgba(94, 234, 212, 0.1);
    top: 10%;
    left: -150px;
    animation: ${rotate} 40s linear infinite;
  }
  
  &.circle2 {
    width: 200px;
    height: 200px;
    border: 1px dashed rgba(14, 165, 233, 0.1);
    bottom: 20%;
    right: -100px;
    animation: ${rotate} 30s linear infinite reverse;
  }
  
  &.circle3 {
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(94, 234, 212, 0.05) 0%, transparent 70%);
    top: 40%;
    right: 10%;
    filter: blur(20px);
    animation: ${pulse} 5s ease-in-out infinite;
  }
`;

// Component implementation
const LandingCreationProcess = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const creationSteps = [
    {
      id: 1,
      icon: "🔍",
      title: "Аналіз та стратегія",
      content: "Глибоко вивчаємо бізнес, конкурентів та цільову аудиторію для формування чіткої стратегії. Визначаємо ключові цілі та метрики успіху."
    },
    {
      id: 2,
      icon: "🎨",
      title: "Дизайн та прототип",
      content: "Створюємо унікальний дизайн, що відображає сутність бренду. Розробляємо прототип з фокусом на конверсію та досвід користувача."
    },
    {
      id: 3,
      icon: "💻",
      title: "Розробка",
      content: "Будуємо адаптивний лендінг з сучасними анімаціями. Оптимізуємо швидкість та продуктивність для найкращих результатів."
    },
    {
      id: 4,
      icon: "🚀",
      title: "Запуск та аналітика",
      content: "Налаштовуємо аналітику, тестуємо всі елементи та запускаємо лендінг з подальшою підтримкою для постійного вдосконалення."
    }
  ];

  // Mouse following effect for the cards
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
  }, []);

  return (
    <LPCreationSection 
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      id="landing-creation-process"
    >
      <LPCreationBgPattern />
      <LPCreationDecorativeCircle className="circle1" />
      <LPCreationDecorativeCircle className="circle2" />
      <LPCreationDecorativeCircle className="circle3" />
      <LPCreationBottomFade />
      
      <LPCreationContainer>
        <LPCreationAccentLine 
          initial={{ width: 0 }}
          animate={controls}
          variants={{
            hidden: { width: 0 },
            visible: { 
              width: 80,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
        />
        
        <LPCreationTitle
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={item}
        >
          Як ми створюємо лендінг, що перетворює відвідувачів у покупців
        </LPCreationTitle>
        
        <LPCreationDescription
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { duration: 1.2, ease: "easeOut", delay: 0.2 }
            }
          }}
        >
          Щоб створити ефективний лендинг, ми починаємо з глибокого аналізу: вивчаємо ринок, конкурентів і чітко визначаємо цільову аудиторію. Це дозволяє побудувати не просто красивий сайт, а такий, що говорить мовою клієнта й відповідає на його потреби.
        </LPCreationDescription>
        
        <LPCreationStepsGrid 
          as={motion.div}
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {creationSteps.map((step) => (
            <LPCreationStepCard
              key={step.id}
              variants={item}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                transition: { duration: 0.3 }
              }}
              onMouseMove={handleMouseMove}
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(94, 234, 212, 0.08) 0%, 
                  rgba(255, 255, 255, 0.03) 50%)`
              }}
            >
              <LPCreationStepNumber>{step.id}</LPCreationStepNumber>
              <LPCreationStepIcon>{step.icon}</LPCreationStepIcon>
              <LPCreationStepTitle>{step.title}</LPCreationStepTitle>
              <LPCreationStepText>{step.content}</LPCreationStepText>
            </LPCreationStepCard>
          ))}
        </LPCreationStepsGrid>
        
        <LPCreationInfoBox
          as={motion.div}
          variants={fadeIn}
          whileHover={{ 
            boxShadow: "0 15px 40px rgba(94, 234, 212, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.6 }
              }
            }}
          >
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#94a3b8" }}>
              <strong style={{ color: "#f1f5f9" }}>Структура</strong> — створюємо логічний сценарій взаємодії користувача зі сторінкою. Формуємо прототип, де визначаємо ключові блоки, їх послідовність та розташування елементів, що ведуть до цільової дії.
            </p>
            <br />
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#94a3b8" }}>
              <strong style={{ color: "#f1f5f9" }}>Дизайн</strong> сайту розробляється під конкретну нішу — сучасний, стильний, з акцентами на головне. Після цього ми зверстаємо сайт і адаптуємо його під усі пристрої: смартфони, планшети, ноутбуки.
            </p>
            <br />
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#94a3b8" }}>
              <strong style={{ color: "#f1f5f9" }}>Перед запуском</strong> ми підключаємо інструменти аналітики (Google Analytics, Facebook Pixel тощо), перевіряємо працездатність усіх елементів та тестуємо швидкість завантаження. Після запуску ми не залишаємо вас наодинці — допомагаємо з оптимізацією та аналізуємо поведінку користувачів для покращення конверсії.
            </p>
          </motion.div>
        </LPCreationInfoBox>
        
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate={controls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button 
            style={{
              background: "linear-gradient(90deg, #5eead4, #0ea5e9)",
              border: "none",
              padding: "1.2rem 2.5rem",
              borderRadius: "12px",
              color: "#0f172a",
              fontSize: "1.2rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              boxShadow: "0 10px 20px rgba(94, 234, 212, 0.2)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            Замовити ефективний лендінг
            <span>→</span>
          </button>
        </motion.div>
      </LPCreationContainer>
    </LPCreationSection>
  );
};

export default LandingCreationProcess; 