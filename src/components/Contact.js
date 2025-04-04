import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  background: #000000;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #ffffff;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  color: #ffffff;
`;

const ContactTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ContactText = styled.p`
  color: #888888;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ContactForm = styled.form`
  background: #111111;
  padding: 3rem;
  border-radius: 10px;
  border: 1px solid #333;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #ffffff;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: #ffffff;
  color: #000000;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #888888;
    color: #ffffff;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection>
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
            <ContactTitle>Давайте обсудим ваш проект</ContactTitle>
            <ContactText>
              Мы всегда готовы помочь вам с разработкой вашего проекта. 
              Свяжитесь с нами, и мы обсудим все детали.
            </ContactText>
            <ContactText>
              Наша команда экспертов готова ответить на все ваши вопросы 
              и предложить оптимальное решение для вашего бизнеса.
            </ContactText>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Сообщение</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton
              type="submit"
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