import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LoaderContent = styled.div`
  text-align: center;
`;

const LogoText = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  letter-spacing: 2px;
`;

const LoaderShape = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, var(--accent-color), var(--text-secondary));
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(128, 128, 128, 0.3);
`;

const Loader = ({ isLoading }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "afterChildren"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const shapeVariants = {
    hidden: { scale: 0, rotate: 0 },
    visible: {
      scale: 1,
      rotate: 180,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: {
      scale: 0,
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <LoaderContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate={isLoading ? "visible" : "hidden"}
      exit="hidden"
    >
      <LoaderContent>
        <LogoText
          variants={logoVariants}
          initial="hidden"
          animate="visible"
        >
          softqod
        </LogoText>
        <LoaderShape
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        />
      </LoaderContent>
    </LoaderContainer>
  );
};

export default Loader;