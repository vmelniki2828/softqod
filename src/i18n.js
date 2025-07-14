import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        nav: {
          firstItem: 'Development',
          secondItem: 'Design',
          thirdItem: 'Marketing',
        },
        navItem: {
          developmentFirstItem:
            'Automation and optimization of business processes',
          developmentSecondItem: 'Mobile application development',
          designFirstItem: 'Banner advertising',
          designSecondItem: 'Brand book',
          designThirdItem: 'Web design',
          designForthItem: 'UX/UI design',
          designFifthItem: 'Typography and lettering',
          designSixthItem: 'Branding and identity',
          marketingFirstItem: 'AI banner advertising',
          marketingSecondItem: 'Contextual advertising',
          marketingThirdItem: 'SEO Optimization',
          marketingForthItem: 'Targeted advertising',
          marketingFifthItem: 'Marketing audit',
        },
      },
      mainPage: {
        hero: {
          mainText: 'We create digital solutions for your business',
          text: 'We help companies thrive in the digital environment with modern technologies and creative solutions. Our team of experts creates innovative projects that bring real results.',
          buttonText: 'Discuss the project',
          firstListItem: 'Years of experience',
          firstListSecond: 'Successful projects',
          firstListThird: 'Experts',
        },
        services: {
          title: 'The values of our services',
          firstItem: {
            title: 'Speed and efficiency',
            description:
              'We understand that time is money. Our solutions will help you achieve your goals and get results faster.',
            benefitsFirstItem: 'Quick start of the project',
            benefitsSecondItem: 'Optimized processes',
            benefitsThirdItem: 'Reduction of development time',
            benefitsForthItem: 'Instant feedback',
          },
          secondItem: {
            title: 'Business growth',
            description:
              'Our solutions are aimed at increasing profits and expanding your business.',
            benefitsFirstItem: 'Increase conversion',
            benefitsSecondItem: 'Expanding the customer base',
            benefitsThirdItem: 'Increasing customer loyalty',
            benefitsForthItem: 'Cost optimization',
          },
          thirdItem: {
            title: 'Customer focus',
            description:
              'Your customers are our priority. We create solutions that make them happy.',
            benefitsFirstItem: 'Improving user experience',
            benefitsSecondItem: 'Personalized solutions',
            benefitsThirdItem: 'Personalized solutions',
            benefitsForthItem: 'Quick problem solving',
          },
          forthItem: {
            title: 'Reliability and safety',
            description:
              'We guarantee stable operation and protection of your data.',
            benefitsFirstItem: 'Protection against cyberattacks',
            benefitsSecondItem: 'Data backup',
            benefitsThirdItem: 'Stable work 24/7',
            benefitsForthItem: 'Compliance with safety standards',
          },
          fifthItem: {
            title: 'Long-term solutions',
            description:
              'We create solutions that will work and grow with your business.',
            benefitsFirstItem: 'Scalability of solutions',
            benefitsSecondItem: 'Long-term support',
            benefitsThirdItem: 'Regular updates',
            benefitsForthItem: 'Adaptation to new requirements',
          },
          sixthItem: {
            title: 'Partnership',
            description:
              'We become part of your team and work for mutual success.',
            benefitsFirstItem: 'Transparent cooperation',
            benefitsSecondItem: 'Flexible working conditions',
            benefitsThirdItem: 'Expert support',
            benefitsForthItem: 'Joint development',
          },
        },
        benefits: {
          title: 'Why choose us',
          firstItem: {
            title: 'Innovative solutions',
            description:
              'We use the latest technologies to create unique products.',
            statsLabel: 'Projects',
          },
          secondItem: {
            title: 'Fast delivery',
            description:
              'Optimized development processes allow us to execute projects quickly.',
            statsLabel: 'Rather',
          },
          thirdItem: {
            title: 'Expert team',
            description:
              'Our team consists of experienced professionals in various fields.',
            statsLabel: 'Experts',
          },
          forthItem: {
            title: '24/7 Support',
            description:
              'We are always ready to help you and answer your questions.',
            statsLabel: 'Support',
          },
        },
        сases: {
          title: 'Our cases',
          buttonText: 'Read more',
          firstItem: {
            title: 'E-commerce platform',
            description:
              'Development of a modern e-commerce platform with integration of payment systems and analytics.',
          },
          secondItem: {
            title: 'Corporate portal',
            description:
              'Creation of a corporate portal for a large company with a document management system.',
          },
          thirdItem: {
            title: 'AI assistant',
            description:
              'Development of an intellectual assistant for the automation of business processes.',
          },
        },
        contact: {
          title: 'Contact us',
          contactTetx1: 'Phone',
          contactTetx2: 'Address',
          adressText: 'Kyiv, Khreshchatyk St., building 22',
          formNameText: 'Your name',
          phonrNumberText: 'Phone number',
          messegeText: 'Message',
          placeholderNameText: 'Enter your name',
          placeholderText: 'Enter a message',
          buttonText1: 'Send a message',
          buttonText2: 'Sending...',
          formStatus1: 'Thank you! Your application has been submitted successfully.',
          formStatus2: "We will contact you shortly.",
        },
      },
    },
  },
  uk: {
    translation: {
      header: {
        nav: {
          firstItem: 'Розробка',
          secondItem: 'Дизайн',
          thirdItem: 'Маркетинг',
        },
        navItem: {
          developmentFirstItem: 'Автоматизація та оптимізація бізнес-процесів',
          developmentSecondItem: 'Розробка мобільних додатків',
          designFirstItem: 'Банерна реклама',
          designSecondItem: 'Брендбук',
          designThirdItem: 'Веб-дизайн',
          designForthItem: 'UX/UI дизайн',
          designFifthItem: 'Типографіка та леттеринг',
          designSixthItem: 'Брендинг та айдентика',
          marketingFirstItem: 'Банерна реклама ШІ',
          marketingSecondItem: 'Контекстна реклама',
          marketingThirdItem: 'SEO Оптимізація',
          marketingForthItem: 'Таргетована реклама',
          marketingFifthItem: 'Маркетинговий аудит',
        },
      },
      mainPage: {
        hero: {
          mainText: 'Створюємо цифрові рішення для вашого бізнесу',
          text: 'Ми допомагаємо компаніям розвиватися в цифровому середовищі за допомогою сучасних технологій та креативних рішень. Наша команда експертів створює інноваційні проєкти, які приносять реальні результати.',
          buttonText: 'Обговорити проєкт',
          firstListItem: 'Років досвіду',
          firstListSecond: 'Успішних проєктів',
          firstListThird: 'Експертів',
        },
        services: {
          title: 'Цінності наших послуг',
          firstItem: {
            title: 'Швидкість та ефективність',
            description:
              'Ми розуміємо, що час - це гроші. Наші рішення допоможуть вам швидше досягти цілей і отримати результат.',
            benefitsFirstItem: 'Швидкий старт проєкту',
            benefitsSecondItem: 'Оптимізовані процеси',
            benefitsThirdItem: 'Скорочення часу на розробку',
            benefitsForthItem: "Миттєвий зворотний зв'язок",
          },
          secondItem: {
            title: 'Зростання бізнесу',
            description:
              'Наші рішення спрямовані на збільшення прибутку та розширення вашого бізнесу.',
            benefitsFirstItem: 'Збільшення конверсії',
            benefitsSecondItem: 'Розширення клієнтської бази',
            benefitsThirdItem: 'Підвищення лояльності клієнтів',
            benefitsForthItem: 'Оптимізація витрат',
          },
          thirdItem: {
            title: 'Клієнтоорієнтованість',
            description:
              'Ваші клієнти - наш пріоритет. Ми створюємо рішення, які роблять їх щасливими.',
            benefitsFirstItem: 'Покращення користувацького досвіду',
            benefitsSecondItem: 'Персоналізовані рішення',
            benefitsThirdItem: 'Постійна підтримка',
            benefitsForthItem: 'Швидке вирішення проблем',
          },
          forthItem: {
            title: 'Надійність та безпека',
            description:
              'Ми гарантуємо стабільну роботу та захист ваших даних.',
            benefitsFirstItem: 'Захист від кібератак',
            benefitsSecondItem: 'Резервне копіювання даних',
            benefitsThirdItem: 'Стабільна робота 24/7',
            benefitsForthItem: 'Дотримання стандартів безпеки',
          },
          fifthItem: {
            title: 'Довгострокові рішення',
            description:
              'Ми створюємо рішення, які будуть працювати і розвиватися разом з вашим бізнесом.',
            benefitsFirstItem: 'Масштабованість рішень',
            benefitsSecondItem: 'Довгострокова підтримка',
            benefitsThirdItem: 'Регулярні оновлення',
            benefitsForthItem: 'Адаптація під нові вимоги',
          },
          sixthItem: {
            title: 'Партнерство',
            description:
              'Ми стаємо частиною вашої команди і працюємо на спільний успіх.',
            benefitsFirstItem: 'Прозора співпраця',
            benefitsSecondItem: 'Гнучкі умови роботи',
            benefitsThirdItem: 'Експертна підтримка',
            benefitsForthItem: 'Спільний розвиток',
          },
        },
        benefits: {
          title: 'Чому обирають нас',
          firstItem: {
            title: 'Інноваційні рішення',
            description:
              'Ми використовуємо найсучасніші технології для створення унікальних продуктів.',
            statsLabel: 'Проєктів',
          },
          secondItem: {
            title: 'Швидка доставка',
            description:
              'Оптимізовані процеси розробки дозволяють нам швидко виконувати проєкти.',
            statsLabel: 'Швидше',
          },
          thirdItem: {
            title: 'Експертна команда',
            description:
              'Наша команда складається з досвідчених професіоналів у різних галузях.',
            statsLabel: 'Експертів',
          },
          forthItem: {
            title: '24/7 Підтримка',
            description:
              'Ми завжди готові допомогти вам і відповісти на ваші запитання.',
            statsLabel: 'Підтримка',
          },
        },
        сases: {
          title: 'Наші кейси',
          buttonText: 'Докладніше',
          firstItem: {
            title: 'E-commerce платформа',
            description:
              'Розробка сучасної платформи електронної комерції з інтеграцією платіжних систем та аналітикою.',
          },
          secondItem: {
            title: 'Корпоративний портал',
            description:
              'Створення корпоративного порталу для великої компанії із системою управління документами.',
          },
          thirdItem: {
            title: 'AI-асистент',
            description:
              'Розробка інтелектуального помічника для автоматизації бізнес-процесів.',
          },
        },
        contact: {
          title: "Зв'яжіться з нами",
          contactTetx1: 'Телефон',
          contactTetx2: 'Адреса',
          adressText: 'м. Київ, вул. Хрещатик, буд. 22',
          formNameText: "Ваше ім'я",
          phonrNumberText: 'Номер телефону',
          messegeText: 'Повідомлення',
          placeholderNameText: "Введіть ваше ім'я",
          placeholderText: 'Введіть повідомлення',
          buttonText1: 'Відправити повідомлення',
          buttonText2: 'Надсилання...',
          formStatus1: 'Дякуємо! Ваша заявка надіслана успішно.',
          formStatus2: "Ми зв'яжемося з вами найближчим часом.",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'uk',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
