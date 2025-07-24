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
          developmentThirdItem: 'ERP and CRM systems',
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
          formStatus1:
            'Thank you! Your application has been submitted successfully.',
          formStatus2: 'We will contact you shortly.',
        },
        footer: {
          footerText:
            'We create innovative digital solutions to grow your business.',
          footerAdress: 'Kyiv, Khreshchatyk St., building 22',
          footerText1: 'All rights reserved',
        },
        modal: {
          formNameText: 'Your name',
          phonrNumberText: 'Phone number',
          messegeText: 'Message',
          placeholderNameText: 'Enter your name',
          placeholderText: 'Tell us about your project or ask a question...',
          buttonText1: 'Send a message',
          buttonText2: 'Sending...',
          formStatus1:
            'Thank you! Your application has been submitted successfully.',
          formStatus2: 'We will contact you shortly.',
          error1: 'Please fill in all required fields (Name, Email, Message)',
          error2: 'Please enter a valid email address.',
          error3:
            'Error sending message. Please try again or contact us directly.',
        },
      },
      pwaPage: {
        hero: {
          mainText: 'PWA: The Future of Web Apps',
          text: 'Progressive Web Apps (PWAs) combine the best of both websites and mobile apps. They are fast, reliable, and can be installed on a smartphone without going to the App Store or Google Play.',
          phoneText: 'Speed and reliability',
          mianTextItem1: 'More customers',
          mianTextItem2: 'Better user experience',
          mianTextItem3: 'A faster path to profit',
          textItem1:
            'With PWA, access to your product becomes easier, which increases audience reach.',
          textItem2:
            'Speed, convenience, and an intuitive interface provide the best user experience.',
          textItem3:
            'Savings on native application development and faster time to market.',
          buttonText: 'Learn more',
        },
        whatIsPWA: {
          mainText: 'What are PWAs (Progressive Web Apps)?',
          text: 'PWA is a modern web application format that combines the advantages of websites and mobile applications. They work directly in the browser, but at the same time can:',
          itemText1: 'run offline',
          itemText2: 'send push notifications',
          itemText3: 'be installed on the home screen of a smartphone',
          itemText4: 'work quickly even with poor internet',
          articleText:
            'Simply put, it’s a website that behaves like an app. The user doesn’t notice the difference, and the business gets maximum reach without the expense of developing separate mobile platforms.',
        },
        benefitsOfPWA: {
          mainText: 'Benefits of PWA for business',
          itemMainText1: 'Versatility',
          itemMainText2: 'Installing without the App Store',
          itemMainText3: 'Work offline',
          itemMainText4: 'Higher download speed',
          itemMainText5: 'Push notifications',
          itemMainText6: 'Less development costs',
          itemText1:
            'PWA works on any device — Android, iOS, Windows. One app reaches the entire audience without the additional costs of multiple platforms.',
          itemText2:
            'Users can add an app to the home screen in two clicks — without registrations, markets, or updates.',
          itemText3:
            'Even without the Internet, your customers will be able to view important pages, place orders, or leave requests.',
          itemText4:
            'PWA caches data and works many times faster than a regular website. And speed = better conversion.',
          itemText5:
            'Remind about promotions, new products, or abandoned carts directly on your smartphone screen — just like in mobile apps.',
          itemText6:
            'No need to create and maintain separate apps for iOS and Android — one PWA covers everything.',
          btnText: 'Order PWA development',
        },
        ourPWAServices: {
          mainText: 'Our PWA development services',
          text: 'We create progressive web applications on a turnkey basis - from idea to launch. All development is completely custom, without templates or designers. You will receive a unique product that perfectly matches your business goals.',
          listMainText: 'What is included in our services:',
          listItem1: 'Analysis of the niche, competitors and user needs',
          listItem2: 'Prototyping and logical structure development',
          listItem3: 'UI/UX design, adaptability to different devices',
          listItem4:
            'Layout and programming using modern technologies (JS, HTML5, Service Workers, etc.)',
          listItem5:
            'Integration of offline functionality, push notifications, caching',
          listItem6: 'SEO optimization, analytics, testing',
          listItem7: 'Technical support and project development after launch',
          articleText:
            "We don't just make a 'browser app' - we create a tool that actually works for results.",
        },
        whyChooseUs: {
          mainText: 'Why choose us?',
          mainTextItem1: 'Custom development for your business',
          mainTextItem2: 'Full cycle - from idea to launch',
          mainTextItem3: 'Speed, quality, result',
          mainTextItem4: 'Experience and expertise',
          textItem1:
            "We don't work with templates. Each PWA is a unique product, built with your niche, goals, and customers in mind.",
          textItem2:
            'You will receive a complete web application with all the necessary features. We take care of the entire process - analysis, design, code, testing, SEO.',
          textItem3:
            'We create fast, stable, and optimized PWAs that meet the latest web standards and deliver real results.',
          textItem4:
            'Our team has deep technical expertise and understands how businesses need not just technology, but solutions that work.',
          btnText: 'Start the project',
        },
        pwaForm: {
          mainText: 'Order a PWA for your business today!',
          text1:
            'Do you want a fast, convenient, and effective web application that works on all devices and actually brings in customers? We will create just such a PWA for you - individual, modern, and ready to grow.',
          text2: 'We work quickly, clearly and with results.',
          text3:
            'Leave a request and we will contact you to discuss details, cost estimates, and deadlines.',
          placeholderNameText: 'Your name',
          placeholderPhone: 'Phone',
          messegeText:
            'Thank you! Your request has been submitted. We will contact you shortly.',
          btnText1: 'Order a consultation',
          btnText2: 'We are sending...',
          articleText:
            'Submitting a request or getting a consultation is one step towards a powerful digital tool for your business.',
        },
        faqPWA: {
          question1: 'What is a Progressive Web App (PWA)?',
          question2: 'How is a PWA better than a mobile app?',
          question3: 'Does PWA work offline?',
          question4: 'Can I install PWA on iOS and Android?',
          question5: 'How does PWA affect site speed and SEO?',
          question6: 'How much does it cost to develop a PWA?',
          question7: 'Is it possible to integrate payment into a PWA?',
          question8: 'How to add a PWA to your smartphone home screen?',
          answer1:
            'PWA — це веб-додаток, який виглядає й працює як мобільний застосунок. Його можна відкрити в браузері, встановити на смартфон, працювати з ним офлайн та отримувати push-сповіщення — без потреби завантаження з App Store або Google Play.',
          answer2:
            'A PWA doesn’t require separate development for iOS and Android, which saves budget. It’s easier to promote, faster to launch, and easier to update. Plus, users can interact with it right away — without installation.',
          answer3:
            'Yes, PWA supports offline mode. Thanks to caching, the user can view content or perform actions even without a network connection.',
          answer4:
            "Yes. PWAs can be added to your smartphone's home screen like a regular app. They work on Android, iOS, Windows, and other systems with a modern browser.",
          answer5:
            'PWAs load faster thanks to caching and optimization, which has a positive impact on user experience and behavioral factors, which in turn improves SEO.',
          answer6:
            "The price depends on the complexity of the functionality and the scope of work. We work individually: we analyze the client's needs, after which we form a clear commercial offer.",
          answer7:
            'Yes, we can implement payment systems (e.g. cards, Apple Pay, Google Pay, etc.) within a PWA — just like in a regular app or website.',
          answer8:
            'When opening a PWA in a browser, the user will see a pop-up window offering to install the application. In two clicks, it appears on the home screen — without markets, searches, or registrations.',
          text: "Didn't find the answer to your question?",
          btnText: 'Write to us',
        },
      },
      automation: {
        hero: {
          mainText: 'Automation and optimization of business processes',
          text: "In today's business environment, inefficiency is unaffordable. Every unnecessary action, delay, or mistake is costly. We offer a business process automation and optimization service that allows companies to work faster, spend less resources, and ensure stable profit growth.",
          phoneMainText: 'Business Automation',
          phoneText: 'Efficiency and control',
          mianTextItem1: 'Increasing efficiency',
          mianTextItem2: 'Increasing profits',
          mianTextItem3: 'Quality control',
          textItem1:
            'Automating routine processes allows employees to focus on important tasks.',
          textItem2:
            'Optimization of business processes leads to reduced costs and increased revenues.',
          textItem3:
            'Automation reduces errors and improves the quality of products or services.',
          buttonText: 'Learn more',
        },
        ourSolutions: {
          maintText: 'Our solutions for your business',
          text: 'We do not offer standard packages, but individual solutions designed specifically for your business. Before starting work, we analyze the company structure, identify the strengths and weaknesses of processes, and assess the potential for automation.',
          text1:
            'Comprehensive automation includes building task management, document management, sales, customer relationship management (CRM), and supplier management systems. We integrate tools that simplify accounting, reduce manual work, and minimize the risk of errors. The result is not just separate automated processes, but a single, consistent ecosystem that helps your team achieve goals faster.',
          articleText:
            'Importantly, we do not abandon the client after implementation: our specialists support the adaptation process, updating the solution in accordance with changes in business and technology.',
          itemText1: 'Analysis of business processes and company needs',
          itemText2: 'Development of an individual automation strategy',
          itemText3: 'Implementation of CRM and document management systems',
          itemText4: 'Creating a unified ecosystem for business management',
          itemText5: 'Staff training and technical support',
        },
        benefitsOfAutomation: {
          mainText:
            'Benefits of automation and optimization of business processes',
          text: 'Why is now the right time to invest in automation? Because it is no longer a competitive advantage, but a necessity for survival and development in the market.',
          itemMainText1: 'Resource saving',
          itemMainText2: 'Increasing profitability',
          itemMainText3: 'Reducing errors and risks',
          itemMainText4: 'Better control and transparency',
          itemText1:
            'Automated processes allow you to significantly reduce costs for operational personnel, reduce task completion time, and optimize the use of technical resources.',
          itemText2:
            'Process optimization leads to greater employee productivity without the need to increase headcount. Your business gains the ability to serve more customers and fulfill more orders without additional costs.',
          itemText3:
            'Manual data processing is always associated with the risk of inaccuracies. Automation allows you to minimize the human factor, which is critically important for financial transactions, accounting for goods, and maintaining project documentation.',
          itemText4:
            'Automated processes provide better control and transparency of the business. Managers see the status of affairs in real time, which allows them to make management decisions quickly.',
          btnText: 'Start business optimization',
        },
        howWeWork: {
          mainText: 'How we work',
          text: 'Our cooperation begins with a free consultation, during which we discuss your business objectives and identify potential areas for optimization.',
          itemMainText1: 'Business process audit',
          itemMainText2: 'Development of an individual solution',
          itemMainText3: 'Implementation and training',
          itemMainText4: 'Support and development',
          itemText1:
            'We conduct in-depth process audits. This includes analyzing existing business operations, identifying bottlenecks, duplication of functions, and excessive resource consumption.',
          itemText2:
            'Based on the audit, an individual solution is developed. We select the optimal tools - from CRM and ERP systems to specialized programs for production, logistics or accounting.',
          itemText3:
            'The implementation phase involves configuring systems, integrating them with each other, and testing solutions in real-world business environments. We also train staff to use new tools to maximize efficiency.',
          itemText4:
            "After launch, we provide ongoing support and development — updating the solution, adding new features in response to the company's needs, consulting, and helping your business stay one step ahead of the competition.",
          articleText:
            "We don't just implement technologies - we create comprehensive solutions that really increase the efficiency of your business.",
        },
        whatYouWillGet: {
          mainText: 'What you will get by choosing us',
          text: 'By ordering a business process automation service from us, you are investing not just in technology, but in your results. The main benefits for our clients:',
          itemMainText1: 'Cost reduction by 20–40%',
          itemMainText2: 'Acceleration of business operations by 1.5–2 times',
          itemMainText3: 'Improving accounting and reporting accuracy',
          itemMainText4: 'Increasing customer loyalty',
          itemMainText5: 'Greater transparency and control',
          itemText1:
            'Optimizing resources and minimizing redundant operations allows you to significantly reduce business operating costs.',
          itemText2:
            'Automated processes are performed faster and more efficiently, which increases the productivity of the entire company.',
          itemText3:
            'Minimizing the human factor ensures higher data accuracy and reliable decision-making.',
          itemText4:
            'Faster and better customer service thanks to optimized processes and improved communications.',
          itemText5:
            "A complete overview of all stages of the company's activities in real time for operational management.",
          mainArticleText: 'Proven results from our clients:',
          articleText1:
            'Manufacturing companies that have used our solutions have increased their turnover by ',
          articleText2:
            'without a significant increase in costs, and logistics operators were able to reduce order processing time by ',
          articleText3:
            'We are focused not on loud promises, but on real changes in your business.',
          btnText: 'Start automation',
        },
        automationForm: {
          mainText: 'Order business process automation today!',
          text1:
            "Don't put off optimization for later - right now is your chance to take your business to the next level. Request a consultation and we'll offer a solution that works for you.",
          text2:
            'Click the "Order a Consultation" button to receive a personalized strategy for growing your business through automation.',
          placeholderNameText: 'Your name',
          placeholderPhone: 'Phone',
          messegeText:
            'Thank you! Your request has been sent. We will contact you shortly.',
          btnText1: 'Order a consultation',
          btnText2: 'Sending...',
          articleText:
            'One step towards an efficient and profitable business. Start getting more from your processes today!',
        },
        faqAutomation: {
          question1:
            'What does the business process automation service include?',
          question2: 'Which businesses are suitable for automation?',
          question3: 'What results can be expected after implementation?',
          question4: 'How long does the automation process take?',
          question5:
            'Do I need to change my entire IT infrastructure for automation?',
          question6: 'How much does business process automation cost?',
          question7:
            'What if business requirements change after implementation?',
          answer1:
            'The service includes analysis of existing processes, development of customized solutions, software implementation, employee training, and subsequent technical support.',
          answer2:
            'Automation is suitable for companies of any size — from small businesses to large enterprises in the fields of production, logistics, trade, services, and IT.',
          answer3:
            'Typically, businesses benefit from time and resource savings, reduced errors, increased productivity, and management transparency.',
          answer4:
            'The duration depends on the complexity of the project. The average implementation period is from 4 to 12 weeks.',
          answer5:
            'No, we integrate new solutions with existing systems. A complete replacement is only necessary if the current solutions are significantly outdated.',
          answer6:
            'The cost is determined individually after a process audit. It depends on the scale of automation, the number of integrations, and the specifics of the business.',
          answer7:
            'We provide flexible solutions and are ready to update and expand functionality in accordance with changing company needs.',
          text: 'Do you have additional questions about business process automation?',
          btnText: 'Contact an expert',
        },
      },
      ErpCrmSystem: {
        hero: {
          mainText: 'ERP and CRM systems',
          text: 'Comprehensive solutions for business and customer relationship management. Optimize processes, automate routines, and increase profits.',
          animationText: 'Management and analytics',
          mianTextItem1: 'Centralized management',
          mianTextItem2: 'Increasing efficiency',
          mianTextItem3: 'Improving customer service',
          textItem1:
            'All company data and processes in a single system, accessible to all departments',
          textItem2: 'Automate routine tasks and optimize business processes',
          textItem3: 'Automate routine tasks and optimize business processes',
          buttonText: 'Learn more',
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
          developmentThirdItem: 'ERP та CRM системи',
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
        footer: {
          footerText:
            'Створюємо інноваційні цифрові рішення для розвитку вашого бізнесу.',
          footerAdress: 'м. Київ, вул. Хрещатик, буд. 22',
          footerText1: 'Всі права захищені',
        },
        modal: {
          formNameText: "Ваше ім'я",
          phonrNumberText: 'Номер телефону',
          messegeText: 'Повідомлення',
          placeholderNameText: "Введіть ваше ім'я",
          placeholderText: 'Розкажіть про ваш проєкт або поставте запитання...',
          buttonText1: 'Відправити повідомлення',
          buttonText2: 'Надсилання...',
          formStatus1: 'Дякуємо! Ваша заявка надіслана успішно.',
          formStatus2: "Ми зв'яжемося з вами найближчим часом.",
          error1:
            "Будь ласка, заповніть всі обов'язкові поля (Ім'я, Email, Повідомлення)",
          error2: 'Будь ласка, введіть коректний email адрес',
          error3:
            "Помилка відправки повідомлення. Спробуйте ще раз або зв'яжіться з нами безпосередньо.",
        },
      },
      pwaPage: {
        hero: {
          mainText: 'PWA: Майбутнє веб-додатків',
          text: 'Прогресивні веб-додатки (PWA) — це поєднання найкращих якостей сайтів і мобільних застосунків. Вони працюють швидко, надійно й можуть встановлюватися на смартфон без походу в App Store чи Google Play.',
          phoneText: 'Швидкість та надійність',
          mianTextItem1: 'Більше клієнтів',
          mianTextItem2: 'Краще юзер-експірієнс',
          mianTextItem3: 'Швидший шлях до прибутку',
          textItem1:
            'Завдяки PWA доступ до вашого продукту стає простішим, що збільшує охоплення аудиторії.',
          textItem2:
            'Швидкість, зручність та інтуїтивний інтерфейс забезпечують найкращий досвід користувача.',
          textItem3:
            'Економія на розробці нативних додатків та швидше введення продукту на ринок.',
          buttonText: 'Дізнатися більше',
        },
        whatIsPWA: {
          mainText: 'Що таке PWA (Progressive Web Apps)?',
          text: 'PWA — це сучасний формат веб-додатків, який поєднує переваги сайтів і мобільних застосунків. Вони працюють прямо в браузері, але при цьому можуть:',
          itemText1: 'запускатися офлайн',
          itemText2: 'надсилати push-сповіщення',
          itemText3: 'встановлюватися на головний екран смартфона',
          itemText4: 'працювати швидко навіть при поганому інтернеті',
          articleText:
            'Простіше кажучи — це сайт, який поводиться як застосунок. Користувач не помічає різниці, а бізнес отримує максимум охоплення без витрат на розробку окремих мобільних платформ.',
        },
        benefitsOfPWA: {
          mainText: 'Переваги PWA для бізнесу',
          itemMainText1: 'Універсальність',
          itemMainText2: 'Встановлення без App Store',
          itemMainText3: 'Робота офлайн',
          itemMainText4: 'Вища швидкість завантаження',
          itemMainText5: 'Push-сповіщення',
          itemMainText6: 'Менше витрат на розробку',
          itemText1:
            'PWA працює на будь-якому пристрої — Android, iOS, Windows. Один додаток охоплює всю аудиторію без додаткових витрат на кілька платформ.',
          itemText2:
            'Користувачі можуть додати додаток на головний екран у два кліки — без реєстрацій, маркетів і оновлень.',
          itemText3:
            'Навіть без інтернету ваші клієнти зможуть переглядати важливі сторінки, оформлювати замовлення чи залишати заявки.',
          itemText4:
            'PWA кешує дані і працює в рази швидше, ніж звичайний сайт. А швидкість = краща конверсія.',
          itemText5:
            'Нагадуйте про акції, новинки чи брошені кошики напряму на екран смартфона — як у мобільних застосунках.',
          itemText6:
            'Не потрібно створювати й підтримувати окремі застосунки для iOS та Android — одна PWA покриває все.',
          btnText: 'Замовити PWA-розробку',
        },
        ourPWAServices: {
          mainText: 'Наші послуги з розробки PWA',
          text: 'Ми створюємо прогресивні веб-додатки під ключ — від ідеї до запуску. Вся розробка повністю кастомна, без шаблонів і конструкторів. Ви отримаєте унікальний продукт, який ідеально відповідає вашим бізнес-цілям.',
          listMainText: 'Що входить у наші послуги:',
          listItem1: 'Аналіз ніші, конкурентів та потреб користувачів',
          listItem2: 'Прототипування та розробка логічної структури',
          listItem3: 'UI/UX-дизайн, адаптивність під різні пристрої',
          listItem4:
            'Верстка та програмування з використанням сучасних технологій (JS, HTML5, Service Workers тощо)',
          listItem5: 'Інтеграція офлайн-функціоналу, push-сповіщень, кешування',
          listItem6: 'SEO-оптимізація, аналітика, тестування',
          listItem7: 'Техпідтримка та розвиток проєкту після запуску',
          articleText:
            "Ми не просто робимо 'додаток у браузері' — ми створюємо інструмент, який реально працює на результат.",
        },
        whyChooseUs: {
          mainText: 'Чому варто обрати нас?',
          mainTextItem1: 'Кастомна розробка під ваш бізнес',
          mainTextItem2: 'Повний цикл — від ідеї до запуску',
          mainTextItem3: 'Швидкість, якість, результат',
          mainTextItem4: 'Досвід і експертиза',
          textItem1:
            'Ми не працюємо з шаблонами. Кожен PWA — це унікальний продукт, створений з урахуванням вашої ніші, цілей і клієнтів.',
          textItem2:
            'Ви отримаєте повноцінний веб-додаток з усіма необхідними функціями. Ми беремо на себе весь процес — аналіз, дизайн, код, тестування, SEO.',
          textItem3:
            'Ми створюємо швидкі, стабільні й оптимізовані PWA, які відповідають останнім стандартам вебу та реально приносять результат.',
          textItem4:
            'Наша команда має глибоку технічну експертизу та розуміє, як бізнесу потрібні не просто технології, а рішення, що працюють.',
          btnText: 'Почати проєкт',
        },
        pwaForm: {
          mainText: 'Замовте PWA для вашого бізнесу вже сьогодні!',
          text1:
            'Хочете швидкий, зручний та ефективний веб-додаток, який працює на всіх пристроях і реально приносить клієнтів? Ми створимо для вас саме такий PWA — індивідуальний, сучасний і готовий до росту.',
          text2: 'Працюємо швидко, чітко та з результатом.',
          text3:
            "Залишайте заявку — і ми зв'яжемось із вами для обговорення деталей, прорахунку вартості та термінів.",
          placeholderNameText: "Ваше ім'я",
          placeholderPhone: 'Телефон',
          messegeText:
            "Дякуємо! Ваша заявка надіслана. Ми зв'яжемося з вами найближчим часом.",
          btnText1: 'Замовити консультацію',
          btnText2: 'Відправляємо...',
          articleText:
            'Залишити заявку або отримати консультацію — один крок до потужного цифрового інструменту для вашого бізнесу.',
        },
        faqPWA: {
          question1: 'Що таке Progressive Web App (PWA)?',
          question2: 'Чим PWA кращий за мобільний додаток?',
          question3: 'Чи працює PWA без інтернету?',
          question4: 'Чи можна встановити PWA на iOS та Android?',
          question5: 'Як PWA впливає на швидкість сайту та SEO?',
          question6: 'Скільки коштує розробка PWA?',
          question7: 'Чи можна інтегрувати оплату в PWA?',
          question8: 'Як додати PWA на головний екран смартфона?',
          answer1:
            'PWA — це веб-додаток, який виглядає й працює як мобільний застосунок. Його можна відкрити в браузері, встановити на смартфон, працювати з ним офлайн та отримувати push-сповіщення — без потреби завантаження з App Store або Google Play.',
          answer2:
            'PWA не потребує окремої розробки для iOS та Android, що економить бюджет. Його простіше просувати, швидше запускати і легше оновлювати. А ще користувачі можуть взаємодіяти з ним одразу — без установки.',
          answer3:
            'Так, PWA підтримує офлайн-режим. Завдяки кешуванню, користувач може переглядати контент або виконувати дії навіть без підключення до мережі.',
          answer4:
            'Так. PWA можна додати на головний екран смартфона як звичайний застосунок. Працює на Android, iOS, Windows та інших системах із сучасним браузером.',
          answer5:
            'PWA завантажується швидше завдяки кешуванню і оптимізації. Це позитивно впливає на користувацький досвід і поведінкові фактори, що, у свою чергу, покращує SEO.',
          answer6:
            'Ціна залежить від складності функціоналу та обсягу роботи. Ми працюємо індивідуально: аналізуємо потреби клієнта, після чого формуємо чітку комерційну пропозицію.',
          answer7:
            'Так, ми можемо реалізувати платіжні системи (наприклад, картки, Apple Pay, Google Pay тощо) в рамках PWA — так само, як у звичайному застосунку чи сайті.',
          answer8:
            "При відкритті PWA у браузері користувач побачить спливаюче вікно з пропозицією встановити додаток. У два кліки він з'являється на головному екрані — без маркетів, пошуку чи реєстрацій.",
          text: 'Не знайшли відповідь на своє питання?',
          btnText: 'Напишіть нам',
        },
      },
      automation: {
        hero: {
          mainText: 'Автоматизація та оптимізація бізнес-процесів',
          text: 'В сучасних умовах бізнес не може дозволити собі неефективність. Кожна зайва дія, затримка або помилка обходяться дорого. Ми пропонуємо послугу автоматизації та оптимізації бізнес-процесів, яка дозволяє компаніям працювати швидше, витрачати менше ресурсів і забезпечувати стабільне зростання прибутку.',
          phoneMainText: 'Бізнес Автоматизація',
          phoneText: 'Ефективність і контроль',
          mianTextItem1: 'Збільшення ефективності',
          mianTextItem2: 'Підвищення прибутку',
          mianTextItem3: 'Контроль якості',
          textItem1:
            'Автоматизація рутинних процесів дозволяє співробітникам зосередитись на важливих завданнях.',
          textItem2:
            'Оптимізація бізнес-процесів веде до зменшення витрат та зростання доходів.',
          textItem3:
            'Автоматизація зменшує кількість помилок та покращує якість продукції або послуг.',
          buttonText: 'Дізнатися більше',
        },
        ourSolutions: {
          maintText: 'Наші рішення для вашого бізнесу',
          text: 'Ми пропонуємо не стандартні пакети, а індивідуальні рішення, розроблені спеціально під ваш бізнес. Перед стартом роботи ми аналізуємо структуру компанії, визначаємо сильні та слабкі сторони процесів, а також оцінюємо потенціал для автоматизації.',
          text1:
            'Комплексна автоматизація включає побудову систем управління завданнями, документообігом, продажами, взаємодією з клієнтами (CRM) та постачальниками. Ми інтегруємо інструменти, які спрощують облік, зменшують кількість ручної роботи та мінімізують ризик помилок. В результаті ви отримуєте не просто окремі автоматизовані процеси, а єдину узгоджену екосистему, яка допомагає вашій команді досягати цілей швидше.',
          articleText:
            'Що важливо, ми не залишаємо клієнта після впровадження: наші фахівці супроводжують процес адаптації, оновлюють рішення відповідно до змін у бізнесі та технологіях.',
          itemText1: 'Аналіз бізнес-процесів та потреб компанії',
          itemText2: 'Розробка індивідуальної стратегії автоматизації',
          itemText3: 'Впровадження CRM та систем документообігу',
          itemText4: 'Створення єдиної екосистеми для управління бізнесом',
          itemText5: 'Навчання персоналу та технічна підтримка',
        },
        benefitsOfAutomation: {
          mainText: 'Переваги автоматизації та оптимізації бізнес-процесів',
          text: 'Чому зараз саме час інвестувати в автоматизацію? Тому що це вже не конкурентна перевага, а необхідність для виживання та розвитку на ринку.',
          itemMainText1: 'Економія ресурсів',
          itemMainText2: 'Підвищення прибутковості',
          itemMainText3: 'Зниження кількості помилок і ризиків',
          itemMainText4: 'Кращий контроль і прозорість',
          itemText1:
            'Автоматизовані процеси дозволяють істотно скоротити витрати на операційний персонал, зменшити час виконання задач і оптимізувати використання технічних ресурсів.',
          itemText2:
            'Оптимізація процесів призводить до більшої продуктивності співробітників без необхідності збільшувати чисельність персоналу. Ваш бізнес отримує можливість обслуговувати більше клієнтів і виконувати більше замовлень без додаткових витрат.',
          itemText3:
            "Ручна обробка даних завжди пов'язана з ризиком неточностей. Автоматизація дозволяє мінімізувати людський фактор, що критично важливо для фінансових операцій, обліку товарів, ведення проектної документації.",
          itemText4:
            'Автоматизовані процеси забезпечують кращий контроль і прозорість бізнесу. Керівники в реальному часі бачать стан справ, що дозволяє оперативно ухвалювати управлінські рішення.',
          btnText: 'Почати оптимізацію бізнесу',
        },
        howWeWork: {
          mainText: 'Як ми працюємо',
          text: 'Наша співпраця починається з безкоштовної консультації, на якій ми обговорюємо завдання вашого бізнесу та визначаємо потенційні напрями для оптимізації.',
          itemMainText1: 'Аудит бізнес-процесів',
          itemMainText2: 'Розробка індивідуального рішення',
          itemMainText3: 'Впровадження та навчання',
          itemMainText4: 'Підтримка та розвиток',
          itemText1:
            'Ми проводимо глибокий аудит процесів. Це включає аналіз існуючих бізнес-операцій, виявлення вузьких місць, дублювань функцій та надмірних витрат ресурсів.',
          itemText2:
            'На основі аудиту розробляється індивідуальне рішення. Ми підбираємо оптимальні інструменти — від CRM та ERP-систем до спеціалізованих програм для виробництва, логістики чи бухгалтерського обліку.',
          itemText3:
            'Етап впровадження передбачає налаштування систем, інтеграцію між собою та тестування рішень в умовах реального бізнесу. Ми також навчаємо персонал користуватися новими інструментами для досягнення максимальної ефективності.',
          itemText4:
            'Після запуску ми забезпечуємо постійну підтримку та розвиток — оновлюємо рішення, додаємо нові функції у відповідь на потреби компанії, консультуємо і допомагаємо вашому бізнесу залишатися на крок попереду конкурентів.',
          articleText:
            'Ми не просто впроваджуємо технології — ми створюємо комплексні рішення, які реально підвищують ефективність вашого бізнесу.',
        },
        whatYouWillGet: {
          mainText: 'Що ви отримаєте, обравши нас',
          text: 'Замовляючи послугу автоматизації бізнес-процесів у нас, ви інвестуєте не просто в технології, а у свій результат. Основні вигоди для наших клієнтів:',
          itemMainText1: 'Скорочення витрат на 20–40%',
          itemMainText2: 'Прискорення бізнес-операцій у 1,5–2 рази',
          itemMainText3: 'Підвищення точності обліку та звітності',
          itemMainText4: 'Підвищення лояльності клієнтів',
          itemMainText5: 'Більша прозорість і контроль',
          itemText1:
            'Оптимізація ресурсів та мінімізація надлишкових операцій дозволяє суттєво знизити операційні витрати бізнесу.',
          itemText2:
            'Автоматизовані процеси виконуються швидше та ефективніше, що підвищує продуктивність всієї компанії.',
          itemText3:
            'Мінімізація людського фактору забезпечує вищу точність даних та надійність прийняття рішень.',
          itemText4:
            'Швидше та якісніше обслуговування клієнтів завдяки оптимізованим процесам та налагодженим комунікаціям.',
          itemText5:
            'Повний огляд всіх етапів діяльності компанії в реальному часі для оперативного управління.',
          mainArticleText: 'Підтверджені результати наших клієнтів:',
          articleText1:
            'Виробничі компанії, які скористались нашими рішеннями, збільшили оборот на ',
          articleText2:
            'без суттєвого зростання витрат, а логістичні оператори змогли скоротити час обробки замовлень на ',
          articleText3:
            'Ми орієнтовані не на гучні обіцянки, а на реальні зміни у вашому бізнесі.',
          btnText: 'Розпочати автоматизацію',
        },
        automationForm: {
          mainText: 'Замовте автоматизацію бізнес-процесів уже сьогодні!',
          text1:
            'Не відкладайте оптимізацію на потім — саме зараз у вас є можливість вивести бізнес на новий рівень. Залиште заявку на консультацію, і ми запропонуємо рішення, яке працюватиме саме для вас.',
          text2:
            'Натисніть кнопку "Замовити консультацію", щоб отримати персоналізовану стратегію розвитку вашого бізнесу через автоматизацію.',
          placeholderNameText: "Ваше ім'я",
          placeholderPhone: 'Телефон',
          messegeText:
            "Дякуємо! Ваша заявка надіслана. Ми зв'яжемося з вами найближчим часом.",
          btnText1: 'Замовити консультацію',
          btnText2: 'Відправляємо...',
          articleText:
            'Один крок до ефективного та прибуткового бізнесу. Почніть отримувати більше від своїх процесів уже сьогодні!',
        },
        faqAutomation: {
          question1: 'Що включає послуга автоматизації бізнес-процесів?',
          question2: 'Для яких бізнесів підходить автоматизація?',
          question3: 'Які результати можна очікувати після впровадження?',
          question4: 'Скільки часу займає процес автоматизації?',
          question5:
            'Чи потрібно змінювати всю ІТ-інфраструктуру для автоматизації?',
          question6: 'Скільки коштує автоматизація бізнес-процесів?',
          question7:
            'Що робити, якщо після впровадження зміняться вимоги бізнесу?',
          answer1:
            'Послуга охоплює аналіз існуючих процесів, розробку індивідуальних рішень, впровадження програмного забезпечення, навчання співробітників і подальшу технічну підтримку.',
          answer2:
            'Автоматизація підходить компаніям будь-якого розміру — від малого бізнесу до великих підприємств у сферах виробництва, логістики, торгівлі, послуг та IT.',
          answer3:
            'Зазвичай бізнес отримує економію часу та ресурсів, зменшення кількості помилок, підвищення продуктивності та прозорість управління.',
          answer4:
            'Тривалість залежить від складності проекту. Середній термін впровадження — від 4 до 12 тижнів.',
          answer5:
            'Ні, ми інтегруємо нові рішення з існуючими системами. Повна заміна необхідна лише у випадку, якщо поточні рішення суттєво застарілі.',
          answer6:
            'Вартість визначається індивідуально після аудиту процесів. Вона залежить від масштабу автоматизації, кількості інтеграцій та специфіки бізнесу.',
          answer7:
            'Ми забезпечуємо гнучкість рішень і готові оновлювати та розширювати функціонал відповідно до змін потреб компанії.',
          text: 'Маєте додаткові запитання щодо автоматизації бізнес-процесів?',
          btnText: "Зв'язатися з експертом",
        },
      },
      ErpCrmSystem: {
        hero: {
          mainText: 'ERP та CRM системи',
          text: 'Комплексні рішення для управління бізнесом та взаємовідносинами з клієнтами. Оптимізуйте процеси, автоматизуйте рутину та збільшуйте прибуток.',
          animationText: 'Управління та аналітика',
          mianTextItem1: 'Централізоване управління',
          mianTextItem2: 'Підвищення ефективності',
          mianTextItem3: 'Поліпшення клієнтського сервісу',
          textItem1:
            'Усі дані та процеси компанії в єдиній системі, доступній для всіх відділів',
          textItem2:
            'Автоматизація рутинних завдань та оптимізація бізнес-процесів',
          textItem3:
            'Повна історія взаємодії з клієнтами та швидкий доступ до даних',
          buttonText: 'Дізнатися більше',
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
