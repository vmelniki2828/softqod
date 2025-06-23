import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 4rem;
  color: var(--text-primary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 2px;
  }

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;

    &::after {
      width: 80px;
      height: 2px;
      bottom: -8px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;

    &::after {
      width: 60px;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
    gap: 0.3rem;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.$active ? 'var(--accent-color)' : 'var(--border-color)'};
  background: ${props => props.$active ? 'var(--accent-color)' : 'var(--bg-secondary)'};
  color: ${props => props.$active ? 'white' : 'var(--text-primary)'};
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--accent-color);
    background: var(--accent-color);
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 25px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 20px;

    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--bg-secondary);
  border-radius: 20px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: var(--accent-color);
  }

  @media (max-width: 1024px) {
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    border-radius: 15px;

    &:hover {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 480px) {
    border-radius: 12px;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, var(--accent-color), #6AADFF);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: url(${props => props.$image}) center/cover;
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: 220px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;

  @media (max-width: 1024px) {
    padding: 1.8rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 0.8rem;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const ProjectTag = styled.span`
  background: var(--accent-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0.25rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
    border-radius: 10px;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    flex-direction: column;
  }
`;

const ProjectLink = styled.a`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$primary ? 'var(--accent-color)' : 'transparent'};
  color: ${props => props.$primary ? 'white' : 'var(--accent-color)'};
  border: 2px solid var(--accent-color);
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background: ${props => props.$primary ? 'transparent' : 'var(--accent-color)'};
    color: ${props => props.$primary ? 'var(--accent-color)' : 'white'};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 18px;

    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const ProjectButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: var(--accent-color);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
    border-radius: 18px;

    &:hover {
      transform: translateY(-1px);
    }
  }
`;

const projects = [
  {
    id: 1,
    title: 'E-commerce платформа',
    description: 'Повнофункціональна платформа електронної комерції з інтеграцією платежів та управлінням запасами.',
    image: '/images/project1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'web',
    link: '#'
  },
  {
    id: 2,
    title: 'Мобільний фітнес-додаток',
    description: 'Додаток для відстеження фітнесу з функціями тренувань та харчування.',
    image: '/images/project2.jpg',
    tags: ['React Native', 'Firebase'],
    category: 'mobile',
    link: '#'
  },
  {
    id: 3,
    title: 'Корпоративний дизайн',
    description: 'Повний редизайн корпоративної ідентичності та веб-сайту технологічної компанії.',
    image: '/images/project3.jpg',
    tags: ['UI/UX', 'Branding'],
    category: 'design',
    link: '#'
  },
  {
    id: 4,
    title: 'CRM система',
    description: 'Користувацька CRM система для управління клієнтськими відносинами.',
    image: '/images/project4.jpg',
    tags: ['Vue.js', 'PHP', 'MySQL'],
    category: 'web',
    link: '#'
  },
  {
    id: 5,
    title: 'Додаток для доставки їжі',
    description: 'Мобільний додаток для замовлення їжі з відстеженням у реальному часі.',
    image: '/images/project5.jpg',
    tags: ['Flutter', 'Node.js'],
    category: 'mobile',
    link: '#'
  },
  {
    id: 6,
    title: 'SaaS дашборд',
    description: 'Інтуїтивно зрозумілий дашборд для SaaS платформи з аналітикою даних.',
    image: '/images/project6.jpg',
    tags: ['React', 'TypeScript', 'Charts'],
    category: 'web',
    link: '#'
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(project => activeFilter === 'all' || project.category === activeFilter);

  return (
    <ProjectsSection>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Наші проєкти
        </SectionTitle>

        <FilterContainer>
          <FilterButton
            active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Усі проєкти
          </FilterButton>
          <FilterButton
            active={activeFilter === 'web'}
            onClick={() => setActiveFilter('web')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Веб-розробка
          </FilterButton>
          <FilterButton
            active={activeFilter === 'mobile'}
            onClick={() => setActiveFilter('mobile')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Мобільні додатки
          </FilterButton>
          <FilterButton
            active={activeFilter === 'design'}
            onClick={() => setActiveFilter('design')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Дизайн
          </FilterButton>
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map(project => (
            <ProjectCard key={project.id}>
              <ProjectImage image={project.image} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map(tag => (
                    <ProjectTag key={tag}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <ProjectLink $primary>
                    <ProjectButton
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      Переглянути проєкт
                    </ProjectButton>
                  </ProjectLink>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects; 