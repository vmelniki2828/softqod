import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: #06141B;
  padding: 2.5rem 2rem;
  border-top: 1px solid rgba(204, 208, 207, 0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
  max-width: 400px;
`;

const Logo = styled(motion.div)`
  font-size: 1.3rem;
  font-weight: 800;
  color: #CCD0CF;
  background: linear-gradient(45deg, #4A5C6A, #9BA8AB);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const FooterText = styled.p`
  color: #9BA8AB;
  font-size: 0.85rem;
  line-height: 1.6;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #9BA8AB;
  font-size: 0.85rem;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  background: rgba(204, 208, 207, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #CCD0CF;
  font-size: 0.9rem;
  flex-shrink: 0;
`;

const FooterLink = styled(motion.a)`
  color: #9BA8AB;
  text-decoration: none;
  font-size: 0.85rem;
  transition: color 0.3s ease;

  &:hover {
    color: #CCD0CF;
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #4A5C6A;
  font-size: 0.75rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(204, 208, 207, 0.1);
`;

const Footer = () => {
    return (
        <FooterSection>
            <Container>
                <FooterColumn>
                    <Logo
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        softqod
                    </Logo>
                    <FooterText>
                        Создаем инновационные цифровые решения для развития вашего бизнеса.
                    </FooterText>
                </FooterColumn>

                <FooterColumn>
                    <ContactItem
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <IconWrapper>
                            <FaEnvelope />
                        </IconWrapper>
                        <FooterLink href="mailto:info@softqod.com">
                            info@softqod.com
                        </FooterLink>
                    </ContactItem>
                    <ContactItem
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <IconWrapper>
                            <FaPhone />
                        </IconWrapper>
                        <FooterLink href="tel:+79991234567">
                            +7 (999) 123-45-67
                        </FooterLink>
                    </ContactItem>
                    <ContactItem
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <IconWrapper>
                            <FaMapMarkerAlt />
                        </IconWrapper>
                        <FooterText>
                            г. Москва, ул. Примерная, д. 123
                        </FooterText>
                    </ContactItem>
                </FooterColumn>
            </Container>
            <Copyright>
                © {new Date().getFullYear()} softqod. Все права защищены.
            </Copyright>
        </FooterSection>
    );
};

export default Footer;