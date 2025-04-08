import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #021024;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #C1E8FF;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled(motion.div)`
  background: #052659;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #5483B3;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: #C1E8FF;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(193, 232, 255, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #5483B3, #7DA0CA);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #C1E8FF;
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 1.25rem;
  color: #C1E8FF;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #7DA0CA;
  line-height: 1.6;
`;

const ContactForm = styled(motion.form)`
  background: #052659;
  padding: 3rem;
  border-radius: 20px;
  border: 1px solid #5483B3;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 0%, rgba(193, 232, 255, 0.05) 50%, transparent 100%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover::before {
    transform: translateX(100%);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: #C1E8FF;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: #021024;
  border: 1px solid #5483B3;
  border-radius: 8px;
  color: #C1E8FF;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #C1E8FF;
    box-shadow: 0 0 0 2px rgba(193, 232, 255, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: #021024;
  border: 1px solid #5483B3;
  border-radius: 8px;
  color: #C1E8FF;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #C1E8FF;
    box-shadow: 0 0 0 2px rgba(193, 232, 255, 0.1);
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(45deg, #5483B3, #7DA0CA);
  border: none;
  border-radius: 8px;
  color: #C1E8FF;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #7DA0CA, #C1E8FF);
    transform: translateY(-2px);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #5483B3, #7DA0CA);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.1;
  z-index: 1;
`;

const Contact = () => {
  return (
    <ContactSection>
      <FloatingShape
        style={{ top: '10%', left: '5%' }}
        animate={{
          rotate: 360,
          borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <FloatingShape
        style={{ bottom: '10%', right: '5%' }}
        animate={{
          rotate: -360,
          borderRadius: ["70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
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
                <InfoText>+7 (999) 123-45-67</InfoText>
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
                <InfoText>г. Москва, ул. Примерная, д. 123</InfoText>
              </InfoContent>
            </ContactCard>
          </ContactInfo>
          <ContactForm
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FormGroup>
              <Label>Ваше имя</Label>
              <Input type="text" placeholder="Введите ваше имя" />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" placeholder="Введите ваш email" />
            </FormGroup>
            <FormGroup>
              <Label>Сообщение</Label>
              <TextArea placeholder="Введите ваше сообщение" />
            </FormGroup>
            <SubmitButton
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Отправить сообщение
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </Container>
    </ContactSection>
  );
};

export default Contact; 