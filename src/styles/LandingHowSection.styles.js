import styled from 'styled-components';
import { motion } from 'framer-motion';

// Landing How Section Components
export const LandingHowSection = styled(motion.section)`
  padding: 120px 0;
  background: linear-gradient(180deg, #0f172a 0%, #1e293b 100%);
  position: relative;
  overflow: hidden;
`;

export const LandingHowContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
`;

export const LandingHowTitle = styled(motion.h2)`
  font-size: 2.5rem;
  color: #f8fafc;
  text-align: center;
  margin-bottom: 48px;
  background: linear-gradient(135deg, #5eead4 0%, #0ea5e9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LandingHowText = styled.p`
  color: #94a3b8;
  font-size: 1.125rem;
  line-height: 1.75;
  margin: 32px 0;
  
  .how-accent {
    color: #5eead4;
    font-weight: 600;
  }
  
  .how-quote {
    display: block;
    padding: 24px;
    margin: 24px 0;
    border-left: 4px solid #5eead4;
    font-style: italic;
    color: #cbd5e1;
  }
`;

export const LandingHowStepTitle = styled.h3`
  font-size: 1.5rem;
  color: #f8fafc;
  margin: 16px 0;
`;

export const LandingHowStepText = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
`;

// LP What Need Section Components
export const LPWhatNeedSection = styled(motion.section)`
  padding: 100px 0;
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%);
  position: relative;
`;

export const LPWhatNeedContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
`;

export const LPWhatNeedAccentLine = styled.div`
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #5eead4 0%, #0ea5e9 100%);
  margin-bottom: 32px;
`;

export const LPWhatNeedTitle = styled.h2`
  font-size: 2.25rem;
  color: #f8fafc;
  margin-bottom: 48px;
  
  span {
    font-size: 2rem;
    margin-right: 12px;
  }
`;

export const LPWhatNeedCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  margin-top: 48px;
`;

export const LPWhatNeedCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(94, 234, 212, 0.1);
  border-radius: 16px;
  padding: 32px;
  backdrop-filter: blur(12px);
`;

export const LPWhatNeedCardIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 24px;
`;

export const LPWhatNeedCardTitle = styled.h3`
  font-size: 1.5rem;
  color: #f8fafc;
  margin-bottom: 16px;
`;

export const LPWhatNeedCardText = styled.p`
  color: #94a3b8;
  font-size: 1rem;
  line-height: 1.6;
`; 