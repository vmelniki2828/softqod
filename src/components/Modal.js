import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaPaperPlane,
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import { useTranslation } from 'react-i18next';

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Modal Overlay
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    align-items: flex-start;
    padding-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    padding-top: 1rem;
  }
`;

// Modal Container
const ModalContainer = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(16, 24, 39, 0.95) 0%,
    rgba(31, 41, 55, 0.95) 100%
  );
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5),
    0 0 60px rgba(var(--accent-color-rgb), 0.1);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  backdrop-filter: blur(20px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--accent-color),
      var(--accent-color-light),
      var(--accent-color)
    );
    background-size: 200% 100%;
    animation: ${shimmer} 2s infinite;
  }

  @media (max-width: 768px) {
    max-width: 90vw;
    border-radius: 16px;
    max-height: 85vh;
  }

  @media (max-width: 480px) {
    max-width: 95vw;
    border-radius: 12px;
    max-height: 90vh;
  }

  @media (max-height: 600px) {
    max-height: 95vh;
  }
`;

// Modal Header
const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem 0.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: var(--text-primary);
    transform: rotate(90deg);
  }

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

// Form Styles
const ModalForm = styled.form`
  padding: 0 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 20px rgba(var(--accent-color-rgb), 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  &:valid {
    border-color: rgba(34, 197, 94, 0.6);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.75rem 0.7rem 2.5rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 20px rgba(var(--accent-color-rgb), 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem 0.75rem 2.75rem;
    font-size: 0.95rem;
    min-height: 90px;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 0.75rem 0.7rem 2.5rem;
    font-size: 0.9rem;
    min-height: 80px;
    border-radius: 10px;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--accent-color);
  font-size: 1rem;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    left: 0.875rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    left: 0.75rem;
    font-size: 0.9rem;
  }
`;

const TextareaIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 3rem;
  color: var(--accent-color);
  font-size: 1rem;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    left: 0.875rem;
    top: 2.75rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    left: 0.75rem;
    top: 2.5rem;
    font-size: 0.9rem;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(
    45deg,
    var(--accent-color),
    var(--accent-color-light)
  );
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 10px 30px rgba(var(--accent-color-rgb), 0.3);
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(var(--accent-color-rgb), 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
    margin-top: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    border-radius: 10px;
    margin-top: 0.5rem;
  }
`;

const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  color: var(--accent-color);
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    font-size: 0.95rem;
  }
`;

const ErrorMessage = styled(motion.div)`
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  color: #ef4444;
  font-size: 0.9rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &::before {
    content: '⚠️';
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.6rem 0.8rem;
  }
`;

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Валідація обов'язкових полів
    const requiredFields = ['from_name', 'from_email', 'message'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());

    if (emptyFields.length > 0) {
      setError(t('mainPage.modal.error1'));
      return;
    }

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError(t('mainPage.modal.error2'));
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Відправка форми через EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.USER_ID
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);

      // Очищуємо форму після успішної відправки
      setTimeout(() => {
        setFormData({
          from_name: '',
          from_email: '',
          phone: '',
        });
        console.log(EMAILJS_CONFIG.SERVICE_ID);
        setIsSubmitted(false);
        onClose();
      }, 2000);
    } catch (err) {
      console.error('Email sending failed:', err);
      setError(t('mainPage.modal.error3'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
        >
          <ModalContainer
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{
              duration: 0.4,
              type: 'spring',
              damping: 20,
              stiffness: 300,
            }}
          >
            {isSubmitted ? (
              <SuccessMessage
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                ✅ {t('mainPage.modal.formStatus1')}
                <br />
                {t('mainPage.modal.formStatus2')}
              </SuccessMessage>
            ) : (
              <>
                {' '}
                <ModalHeader>
                  <CloseButton onClick={onClose}>
                    <FaTimes />
                  </CloseButton>
                </ModalHeader>
                <ModalForm ref={formRef} onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormLabel>
                      <FaUser /> {t('mainPage.modal.formNameText')} *
                    </FormLabel>
                    <div style={{ position: 'relative' }}>
                      <InputIcon>
                        <FaUser />
                      </InputIcon>
                      <FormInput
                        type="text"
                        name="from_name"
                        value={formData.from_name}
                        onChange={handleInputChange}
                        placeholder={t('mainPage.modal.placeholderNameText')}
                        required
                      />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>
                      <FaEnvelope /> Email *
                    </FormLabel>
                    <div style={{ position: 'relative' }}>
                      <InputIcon>
                        <FaEnvelope />
                      </InputIcon>
                      <FormInput
                        type="email"
                        name="from_email"
                        value={formData.from_email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>
                      <FaPhone /> {t('mainPage.modal.phonrNumberText')}
                    </FormLabel>
                    <div style={{ position: 'relative' }}>
                      <InputIcon>
                        <FaPhone />
                      </InputIcon>
                      <FormInput
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>
                      <FaComment /> {t('mainPage.modal.messegeText')} *
                    </FormLabel>
                    <div style={{ position: 'relative' }}>
                      <TextareaIcon>
                        <FaComment />
                      </TextareaIcon>
                      <FormTextarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('mainPage.modal.placeholderText')}
                        required
                      />
                    </div>
                  </FormGroup>

                  {error && (
                    <ErrorMessage
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      {error}
                    </ErrorMessage>
                  )}

                  <SubmitButton
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner />
                        {t('mainPage.modal.buttonText2')}
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        {t('mainPage.modal.buttonText1')}
                      </>
                    )}
                  </SubmitButton>
                </ModalForm>
              </>
            )}
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default Modal;
