import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaComment, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    max-width: 900px;
  }

  @media (max-width: 768px) {
    max-width: 600px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
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

const ContactCard = styled(motion.div)`
  background: var(--bg-secondary);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: var(--accent-color);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(74, 144, 226, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
    gap: 1rem;
    flex-direction: column;
    text-align: center;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, var(--accent-color), #6AADFF);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--bg-primary);
  box-shadow: 0 5px 10px rgba(74, 144, 226, 0.2);
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
`;

const InfoContent = styled.div`
  flex: 1;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
`;

const InfoText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const ContactForm = styled(motion.form)`
  background: var(--bg-secondary);
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: var(--accent-color);
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(74, 144, 226, 0.15);
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 15px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    border-radius: 12px;
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

const Label = styled.label`
  display: block;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
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
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  &:valid {
    border-color: rgba(34, 197, 94, 0.6);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem 0.875rem 2.75rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
    font-size: 0.9rem;
    border-radius: 6px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  font-family: inherit;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1rem 0.875rem 2.75rem;
    font-size: 0.95rem;
    min-height: 120px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0.75rem 0.75rem 2.5rem;
    font-size: 0.9rem;
    min-height: 100px;
    border-radius: 6px;
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
  background: linear-gradient(45deg, var(--accent-color), #6AADFF);
  border: none;
  border-radius: 8px;
  color: var(--bg-primary);
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(74, 144, 226, 0.2);

  &:hover {
    background: linear-gradient(45deg, #6AADFF, var(--accent-color));
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(74, 144, 226, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 0.875rem 1.5rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    border-radius: 6px;
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
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 8px;
  margin-bottom: 1rem;

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

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, var(--accent-color), #6AADFF);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.1;
  z-index: 1;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

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
      setError(
        "Будь ласка, заповніть всі обов'язкові поля (Ім'я, Email, Повідомлення)"
      );
      return;
    }

    // Валідація email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError('Будь ласка, введіть коректний email адрес');
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
          message: '',
        });
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      console.error('Email sending failed:', err);
      setError(
        "Помилка відправки повідомлення. Спробуйте ще раз або зв'яжіться з нами безпосередньо."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactSection>
      <FloatingShape
        style={{ top: '10%', left: '5%' }}
        animate={{
          rotate: 360,
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <FloatingShape
        style={{ bottom: '10%', right: '5%' }}
        animate={{
          rotate: -360,
          borderRadius: [
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Свяжитесь с нами
        </SectionTitle>
        <ContactGrid>
          <ContactInfo>
            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Email</InfoTitle>
                <InfoText>info@softqod.com</InfoText>
              </InfoContent>
            </ContactCard>
            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Телефон</InfoTitle>
                <InfoText>+38 (067) 123-45-67</InfoText>
              </InfoContent>
            </ContactCard>
            <ContactCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <IconWrapper>
                <FaMapMarkerAlt />
              </IconWrapper>
              <InfoContent>
                <InfoTitle>Адрес</InfoTitle>
                <InfoText>м. Київ, вул. Хрещатик, буд. 22</InfoText>
              </InfoContent>
            </ContactCard>
          </ContactInfo>
          <ContactForm
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                ✅ Дякуємо! Ваша заявка надіслана успішно.
                <br />
                Ми зв'яжемося з вами найближчим часом.
              </SuccessMessage>
            )}

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

            <FormGroup>
              <Label>
                <FaUser /> Ваше имя *
              </Label>
              <div style={{ position: 'relative' }}>
                <InputIcon>
                  <FaUser />
                </InputIcon>
                <Input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  placeholder="Введите ваше имя"
                  required
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label>
                <FaEnvelope /> Email *
              </Label>
              <div style={{ position: 'relative' }}>
                <InputIcon>
                  <FaEnvelope />
                </InputIcon>
                <Input
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
              <Label>
                <FaPhone /> Номер телефону
              </Label>
              <div style={{ position: 'relative' }}>
                <InputIcon>
                  <FaPhone />
                </InputIcon>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+380 XX XXX XX XX"
                />
              </div>
            </FormGroup>

            <FormGroup>
              <Label>
                <FaComment /> Сообщение *
              </Label>
              <div style={{ position: 'relative' }}>
                <TextareaIcon>
                  <FaComment />
                </TextareaIcon>
                <TextArea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Введите ваше сообщение"
                  required
                />
              </div>
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner />
                  Надсилання...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Отправить сообщение
                </>
              )}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
