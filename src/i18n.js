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
            "Simply put, it's a website that behaves like an app. The user doesn't notice the difference, and the business gets maximum reach without the expense of developing separate mobile platforms.",
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
            "A PWA doesn't require separate development for iOS and Android, which saves budget. It's easier to promote, faster to launch, and easier to update. Plus, users can interact with it right away — without installation.",
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
        whatIsErpCrm: {
          title: 'What are ERP and CRM systems?',
          erpTitle: 'ERP: enterprise resource management',
          erpDescription:
            'ERP (Enterprise Resource Planning) is a comprehensive system for managing all enterprise resources: finance, production, procurement, inventory, personnel. The goal of ERP is to create a unified information space that allows management to see a complete picture of business processes and make operational decisions.',
          erpFeaturesTitle: 'Main capabilities of ERP systems:',
          erpFeatures: [
            'Automation of accounting and financial management',
            'Supply and inventory management',
            'Production planning',
            'Personnel management',
            'Real-time analytics and reporting',
          ],
          crmTitle: 'CRM: customer relationship management',
          crmDescription:
            'CRM (Customer Relationship Management) is a system for organizing effective customer interaction. It helps track contact history, improve service quality, manage sales and marketing.',
          crmFeaturesTitle: 'CRM system functions:',
          crmFeatures: [
            'Customer database management',
            'Lead and deal management',
            'Sales automation',
            'Analysis of sales department performance',
            'Marketing campaigns and communication',
          ],
        },
        problemsSolved: {
          title: 'What problems do ERP and CRM systems solve?',
          description:
            'ERP and CRM systems help solve key challenges that prevent companies from growing, developing, and operating efficiently. They eliminate chaos in business processes, allowing companies to focus on development and increasing profitability.',
          erpProblemsTitle: 'The main problems that the ERP system solves:',
          erpProblems: {
            title1: 'Lack of a unified database',
            description1:
              'Information about finances, purchasing, inventory, and production is scattered across different systems or maintained manually. ERP integrates all data into a single database, ensuring transparency and accessibility of information for management.',
            title2: 'Inconsistency between departments',
            description2:
              'Lack of interaction between departments leads to errors, delays and financial losses. ERP systems synchronize the work of all departments in real time.',

            title3: 'Slow decision-making speed',
            description3:
              'Due to the lack of up-to-date analytics, managers are forced to make decisions "blindly." ERP provides analytical reports in one click, allowing you to quickly respond to market changes.',

            title4: 'Difficulties in resource planning',
            description4:
              'Production disruptions, material shortages, or budget overruns are all consequences of lack of planning. ERP automates these processes, helping you to more accurately forecast needs.',
          },
          crmProblemsTitle: 'The main problems that the CRM system solves:',
          crmProblems: {
            title1: 'Loss of customers due to poor service',
            description1:
              'Without CRM, it is difficult to keep a history of customer interactions, track their needs, and offer relevant solutions. CRM records all contacts, tasks, and deals, improving the level of service.',

            title2: 'Ineffective sales and marketing',
            description2:
              'Without structured lead management, a company loses potential revenue. CRM helps automate the sales funnel, manage leads, analyze conversion, and increase the effectiveness of marketing campaigns.',

            title3: 'Incomprehensible effectiveness of managers',
            description3:
              'When there is no centralized system for recording the activities of sales managers, it is difficult to assess their productivity. CRM allows you to see the number of calls, letters, meetings and the actual results of each employee.',

            title4:
              'Lack of a systematic approach to developing the client base',
            description4:
              'CRM creates a complete customer profile, helping to better understand their needs and offer appropriate products or services, which increases repeat sales.',
          },
        },
        ourSolutions: {
          title: 'Our solutions for your business',
          erpImplementation: {
            title: 'Implementation of ERP systems',
            description:
              'We select and configure ERP systems for your tasks: from financial management to production automation. We work with both ready-made solutions and individual developments.',
          },
          crmImplementation: {
            title: 'Implementation of CRM systems',
            description:
              'We help you set up effective work with clients: sales automation, transaction accounting, creation of client databases, marketing campaign analytics.',
          },
          integration: {
            title: 'ERP and CRM integration',
            description:
              'We integrate ERP and CRM systems to create a single digital environment where business processes and customer interaction work as a single mechanism.',
          },
          customSolutions: {
            title: 'Customized solutions',
            description:
              'We develop systems for specific business needs: logistics features, production processes, non-standard sales schemes, etc.',
          },
          consulting: {
            title: 'Digital transformation consulting',
            description:
              'We help businesses determine the optimal automation and digitalization strategy. We audit existing processes, develop an ERP/CRM implementation roadmap, and support them at all stages of digital transformation.',
          },
          blockButton: 'Order a consultation',
        },
        advantages: {
          title: 'Advantages of cooperation with us',
          advantagesItems: {
            title1: 'Experience in various industries',
            description1: 'From retail to manufacturing and service',
            title2: 'Individual approach',
            description2: 'We select solutions for specific company goals',
            title3: 'Comprehensive approach',
            description3: 'Analysis, implementation, training, support',
            title4: 'Result guarantee',
            description4: 'Improving business efficiency after implementation',
            title5: 'System support and development',
            description5: 'Adaptation to business changes',
          },
        },
        workStages: {
          title: 'Stages of our work',
          stages: {
            title1: 'Business needs analysis',
            description1:
              "We study the company's business features, problem areas, and expected results.",

            title2: 'Choosing the optimal solution',
            description2:
              'We offer solutions — ready-made products or individual development.',

            title3: 'System implementation',
            description3:
              "We configure, adapt, and integrate the system into the company's existing processes.",

            title4: 'Testing and staff training',
            description4:
              "We check the system's operation in practice and train employees to work with new tools.",

            title5: 'Support and development',
            description5:
              'We provide technical support and system modernization in accordance with changes in your business.',
          },
        },
        faq: {
          title: 'FAQ',
          questions: {
            question1: 'How does ERP differ from CRM system?',
            answer1:
              'ERP system manages all internal company processes (finance, production, logistics, etc.), while CRM focuses on customer relationships, sales, and marketing. In many cases, these systems are integrated to create a comprehensive solution.',

            question2: 'How long does ERP/CRM implementation take?',
            answer2:
              'Implementation time depends on the scale of the business and the complexity of processes. For small businesses, it can take from 1 to 3 months, for medium-sized businesses — from 3 to 6 months, for large businesses — from 6 months to a year.',

            question3: 'Can ERP/CRM be integrated with our existing programs?',
            answer3:
              'Yes, modern systems have open APIs and integration capabilities with accounting programs, websites, marketplaces, analytics systems, and many other solutions.',

            question4: 'What budget is required for implementation?',
            answer4:
              'The cost depends on the chosen solution (ready-made product or development from scratch), number of users, required modules, and complexity of integrations. We provide a detailed calculation after analyzing business needs.',

            question5: 'How to choose the right system for business?',
            answer5:
              'The choice depends on the size of the company, industry, budget, and specific requirements. We conduct a business process audit and based on it recommend the optimal solution — ready-made or individual.',

            question6: 'Is special equipment needed for ERP/CRM?',
            answer6:
              'Most modern systems work in the cloud and do not require installation of complex equipment. For local solutions, your own server may be required.',
          },
          ctaText: "Didn't find the answer to your question?",
          ctaButton: 'Write to us',
        },
      },
      EcommercePage: {
        hero: {
          title: 'Custom e-commerce development',
          subtitle:
            'We create e-commerce stores that sell. From design to launch — a complete development cycle for your business. We take into account the specifics of the niche, goals, buyer behavior, and SEO promotion requirements. We guarantee technical reliability, convenient interface, and readiness for marketing from day one.',
          buttonText: 'Order development',
          benefits: {
            title1: 'Custom design',
            description1:
              'Unique store design for your niche and target audience.',
            title2: 'Mobile adaptation',
            description2:
              'Perfect display on all devices — from smartphones to computers.',
            title3: 'SEO optimization',
            description3:
              'Built-in SEO preparation for high positions in search engines.',
          },
          phoneStore: {
            storeName: 'YourStore',
            products: {
              title1: "Men's T-shirt",
              price1: '1 200 грн',
              title2: 'Hoodie with hood',
              price2: '1 750 грн',
              title3: 'Sports shorts',
              price3: '950 грн',
              title4: 'Winter hat',
              price4: '550 грн',
            },
            footer: {
              cart: 'Cart',
              support: 'Support',
              promotions: 'Promotions',
            },
          },
        },
        whyUs: {
          title: 'Why order an e-commerce store from us',
          subtitle: 'We guarantee sales growth and user convenience',
          cards: {
            title1: 'We guarantee sales growth and user convenience',
            description1:
              'We design the interface based on user logic. Convenient navigation, fast loading, simple cart and checkout — all this shortens the path to purchase and increases conversion.',

            title2: 'E-commerce experience and individual solutions',
            description2:
              "Behind our shoulders — dozens of implemented projects in various industries: clothing, electronics, home goods, B2B solutions. We don't work with templates — each store is developed individually, taking into account the product, target audience, and client's business goals.",

            title3: 'Technical reliability and security',
            description3:
              'We use modern technologies and follow security standards. Fast loading, protection against attacks, backup systems, and 24/7 monitoring ensure stable operation of your store.',
          },
          btnText: 'Discuss the project',
        },
        features: {
          title: 'What you get with an e-commerce store from us',
          intro:
            'We create not just a site with a cart, but a full-fledged eCommerce platform ready for sales, promotion, and scaling. Everything needed for launch is already included:',
          features: {
            title1: 'Adaptive modern design',
            description1:
              'Your e-commerce store will be equally convenient on smartphones, tablets, and computers. The user will quickly find the product and place an order without unnecessary steps.',

            title2: 'Convenient management system',
            description2:
              'You will be able to independently add and edit products, manage orders, prices, promotions, and pages — without the need to contact the developer.',

            title3: 'Turnkey integrations',
            description3:
              'We connect payment systems (LiqPay, Stripe, Fondy), delivery services (Nova Poshta, Ukrposhta), CRM, analytics, email marketing, event tracking, and advertising — everything for process automation.',

            title4: 'SEO and analytics from day one',
            description4:
              'Proper URL structure, meta tags, microdata (Schema.org), fast page loading — all this is already configured. Additionally, we integrate Google Analytics, GA4, Google Tag Manager, set up events and goals.',

            title5: 'Security and performance',
            description5:
              'SSL certificate, bot protection, regular CMS updates, captcha, code and image optimization — everything for stable and fast store operation.',

            title6: 'Scalability capability',
            description6:
              'The e-commerce store is easy to expand: add new categories, change currency, launch promotions, or integrate with marketplaces. We design the platform with your growth in mind.',
          },
          buttonText: 'Order development',
        },
        stages: {
          title: 'Stages of e-commerce store creation',
          subtitle:
            'We work step by step, transparently and systematically — so you understand at what stage the project is and what you will get as a result:',
          steps: {
            title1: 'Niche and target audience analysis',
            description1:
              'We study the market, competitors, and behavior of your potential buyers. We form the site structure, define key functionality and growth points.',
            title2: 'Prototyping and catalog structure',
            description2:
              'We create a logical scheme of pages, menus, filters, product cards. We develop a convenient architecture that simplifies navigation and promotes SEO.',
            title3: 'Design and functionality development',
            description3:
              'We create individual design with UX/UI consideration, adapt for mobile devices. We implement cart, payment, delivery, registration, personal account, etc.',
            title4: 'Testing, launch and support',
            description4:
              'We check the site for errors, speed, adaptability, and correctness of all integrations. After launch — we accompany, update, consult.',
          },
          btnText: 'Order development',
        },
        pricing: {
          title: 'Cost and development time for e-commerce store',
          description:
            "The price of creating an e-commerce store depends on the complexity of functionality, number of pages, integrations, and individual design. We don't use template solutions, so each project is unique.",
          factors: {
            title1: 'Functionality complexity',
            description1:
              'Number and complexity of functions: product filters, personal account, comparison, cart saving, multi-currency.',

            title2: 'Integrations',
            description2:
              'Connection of payment systems, delivery services, CRM, ERP, analytics systems, mailing services.',

            title3: 'Design',
            description3:
              'From basic stylish design to fully custom design with animations and individual graphics.',

            title4: 'Development time',
            description4:
              'On average, a project takes from 4 to 12 weeks, depending on complexity and number of pages.',
          },
          dependencies: {
            title: 'What the price depends on',
            items: {
              item1: 'Volume of product catalog and filtering complexity.',
              item2:
                'Required integrations: payment systems, delivery, CRM, warehouse.',
              item3:
                'Presence of personal account, bonus system, multi-currency, etc.',
              item4: 'Individual or typical design.',
              item5: 'Whether further technical support is needed.',
            },
          },
          conclusion:
            'To determine the exact cost and terms, we conduct a detailed project analysis. We will help you decide on the optimal set of functions for a successful start, and then scale the business.',
          buttonText: 'Get consultation',
        },
        faq: {
          title: 'FAQ',
          questions: {
            question1: 'How much does e-commerce store development cost?',
            answer1:
              'The cost depends on the number of functions and project complexity. We develop e-commerce stores individually for your needs, so the exact price can be determined after assessing requirements and specifications.',

            question2: 'How long does e-commerce store development take?',
            answer2:
              'Terms vary depending on project complexity. Minimum term — from 3 weeks, but usually development takes 4-6 weeks. This time includes design, functionality development, testing, and launch.',

            question3: 'Is support provided after launch?',
            answer3:
              'Yes, we provide technical support after launching the e-commerce store. You can contact us for help with technical issues, updates, or additional settings.',

            question4: 'Do I need to order domain and hosting myself?',
            answer4:
              'We can help with domain and hosting selection or set them up for you. All hosting and domain issues are discussed at the project preparation stage.',

            question5:
              'Can the store be integrated with marketplaces and social networks?',
            answer5:
              'Yes, we integrate the e-commerce store with marketplaces (Prom, Rozetka) and social networks (Facebook, Instagram) for sales and advertising.',

            question6: 'Are your stores suitable for mobile devices?',
            answer6:
              'Yes, we create adaptive design that allows the e-commerce store to display correctly on all types of devices — smartphones, tablets, and computers.',
          },
          ctaText: "Didn't find the answer to your question?",
          ctaButton: 'Write to us',
        },
      },
      LandingPage: {
        hero: {
          title: 'We create landing pages that bring profit to your business',
          subtitle:
            'We develop effective landing pages that convert visitors into customers. Modern design, fast loading and search engine optimization.',
          buttonText: 'Learn more',
          phoneContent: {
            title: 'Landing Page',
            subtitle: 'Conversion and results',
          },
          benefits: {
            title1: 'High conversion',
            description1:
              'We create pages that transform visitors into customers through proper structure and call-to-action elements.',

            title2: 'Unique design',
            description2:
              'We develop individual design that reflects the features of your brand and attracts customer attention.',

            title3: 'Quick launch',
            description3:
              'We create and launch effective landing pages in the shortest time so you can start attracting customers right now.',
          },
        },
        whatIsLandingPage: {
          title: 'What is Landing Page and its main functions',
          description:
            "Landing Page (or single-page website) is a web page created to achieve a specific marketing goal: selling a product, collecting applications or presenting a service. It focuses the user's attention on the main thing — your offer.",
          features: [
            'Clear structure and understandable user path',
            'Effective attention-grabbing elements and call-to-action',
            'Adaptive design for all devices',
            'Fast loading and optimized performance',
            'Integration with analytics and CRM systems',
            'Lead capture forms and feedback',
          ],
          summary:
            'An effective landing page is not just a beautiful page, but a powerful sales tool that transforms visitors into customers and brings real profit to your business.',
        },
        landingVsMultiPage: {
          title: 'How landing page differs from multi-page website',
          quote:
            'The main difference of landing page is focus. Unlike multi-page websites that scatter attention across dozens of pages, landing page leads the user along a logical path to one target action. This increases the chances that the visitor will become your customer.',
          landing: {
            title: 'Landing Page',
            features: {
              item1: 'One page — one clear path for the user',
              item2: 'All elements lead to the target action',
              item3: 'High conversion due to focus on results',
              item4: 'Quick launch and easy testing',
              item5: 'Perfect for advertising and quick sales',
            },
          },
          multiPage: {
            title: 'Multi-page website',
            features: {
              item1: 'Branched structure with many pages',
              item2: 'Extended functionality and capabilities',
              item3: 'More complex navigation and longer path to goal',
              item4: 'Suitable for large projects and catalogs',
              item5: 'Requires more time for development and maintenance',
            },
          },
        },
        conversionBenefits: {
          title: 'How properly built landing page helps increase conversion',
          description:
            "A strategically designed landing page takes into account the needs of the target audience, solves their pain points and leads to decision making. From a competent headline to a convincing call-to-action — every element works for results. That's why an effective landing page is not just a website, but a profit growth tool.",
          subtitle: 'Benefits of ordering a professional landing page',
          advantages: {
            item1: 'Individual approach to your business',
            item2: 'Catchy and memorable design',
            item3: 'High loading speed and adaptability',
            item4: 'SEO optimization for promotion in Google',
            item5: 'Analytics connection and readiness for advertising',
          },
          buttonText: 'Order landing page',
        },
        whyEffective: {
          title:
            'Why Landing Page is the most effective tool for attracting customers?',
          subtitle: 'How single-page website focuses on specific user action',
          description:
            'Landing Page is created with a clear purpose: to interest, convince and encourage the user to perform a certain action — leave an application, call, purchase a product. Thanks to minimal distracting elements and clear structure, single-page websites achieve higher conversion than classic multi-page websites.',
        },
        businessBenefits: {
          subtitle: 'Which businesses benefit most from landing pages',
          intro: 'Landing pages are perfect for:',
          categories: {
            title1: 'Services',
            description1: 'legal, cosmetology, construction, etc.',

            title2: 'Online courses',
            description2: 'and various infoproducts',

            title3: 'Product sales',
            description3: 'individual products or new collections',

            title4: 'Promo campaigns',
            description4: 'and launching promising startups',
          },
          summary:
            'In fact, any business that has a specific target audience and a clear offer benefits from using landing pages.',
        },
        effectiveness: {
          title:
            'Why Landing Page is the most effective tool for attracting customers?',
          banner: 'Single-page website that transforms visitors into customers',
          description:
            'Landing Page is created with a clear purpose: to interest, convince and encourage the user to perform a certain action — leave an application, call, purchase a product. Thanks to minimal distracting elements and clear structure, single-page websites achieve higher conversion than classic multi-page websites.',
          conversionSteps: {
            title1: 'Attention attraction',

            title2: 'Interest retention',

            title3: 'Desire formation',

            title4: 'Action motivation',
          },
          statsTitle: 'Real benefits of landing pages in numbers',
          stats: {
            value1: '+75%',
            label1: 'Conversion increase',

            value2: '-50%',
            label2: 'Lower customer acquisition cost',

            value3: 'x3',
            label3: 'Faster market entry',
          },
          advantagesTitle:
            'Key advantages of landing page over regular websites',
          advantages: {
            item1: 'One goal — user is not distracted by secondary information',
            item2:
              'Clear structure — each block logically leads to target action',
            item3: 'Simplified analytics — easier to track user behavior',
            item4: 'A/B testing — ability to quickly test different hypotheses',
          },
          quote:
            'Landing page is not just a page, but a conversion funnel where every element has its role in transforming a visitor into a customer',
          buttonText: 'Order effective landing page',
        },
        creation: {
          title:
            'How we create landing page that transforms visitors into buyers',
          steps: {
            title1: 'Analysis and strategy',
            description1:
              'We study your business, competitors and target audience to form a clear strategy',

            title2: 'Design and prototype',
            description2:
              'We create unique design that reflects your brand and develop a prototype focused on conversion',

            title3: 'Development',
            description3:
              'We create adaptive landing page with modern animations and optimize speed and performance',

            title4: 'Launch and analytics',
            description4:
              'We set up analytics, test all elements and launch the landing page with further support',
          },
          features: {
            title1: 'Clear structure',
            description1: 'Logical sequence of blocks leading to target action',

            title2: 'Unique design',
            description2:
              'Creative solutions that distinguish you from competitors',

            title3: 'Speed of work',
            description3: 'Optimized loading speed and response',

            title4: 'Adaptability',
            description4: 'Perfect display on all devices',
          },
        },
        requirements: {
          title: 'What is needed to create a single-page website that sells?',
          cards: {
            title1: 'Clear structure and strong USP',
            description1:
              'Successful landing page starts with a script that leads the user to a specific action: leave an application, make a purchase or sign up for a consultation. Unique selling proposition (USP) should immediately capture attention, be understandable and valuable for your client.',

            title2: 'Trust triggers and proper call-to-action',
            description2:
              "To prevent user doubts, it's important to add trust elements: real reviews, cases, photos, certificates, guarantees. This significantly increases confidence level. And the final step should be a strong call-to-action (CTA): bright button with clear message that motivates to click.",

            title3: 'Optimization and simplicity',
            description3:
              "It's important not to overload the page — minimum unnecessary elements, maximum focus on the goal. And also — technical optimization: fast loading, adaptability, convenient navigation on any device.",
          },
        },
        offer: {
          title:
            'Get an effective Landing Page turnkey — quickly and profitably',
          subtitle: "Why it's worth ordering a landing page from professionals",
          description:
            'Creating a landing page yourself — is possible. But creating one that really sells — is a matter for an experienced team. We know how to lead a client to target action, how to structure content, where to put a button and what to write in the headline. Your website is the face of your business, and it should work for you.',
          additionalDescription:
            'We offer both completely individual development and template adaptation for your business. Both options have their advantages — everything depends on budget, tasks and deadlines. In any case, you will get a modern, adaptive and conversion landing page.',
          whatYouGet: {
            title: 'What you will get:',
            items: {
              item1:
                'Professional single-page website optimized for your goals and audience',
              item2:
                'Increase in conversion and sales due to proper structure and USP',
              item3: 'Adaptive design that looks great on all devices',
              item4: 'Fast loading and optimal performance',
            },
          },
          ourFeatures: {
            title: 'Our features:',
            items: {
              item1: 'Unique design created for your brand and target audience',
              item2: 'Integration with CRM and analytics systems',
              item3: 'Spam protection and data security',
              item4: 'Technical support and consultations after launch',
            },
          },
        },
        cta: {
          title: 'Order an effective landing page for your business',
          description:
            'Want to get a modern single-page website that will bring real applications and sales? We will create a selling landing page with unique design and high conversion for you.',
          highlight: 'We develop landing pages that bring results',
          subtext:
            'Leave an application — and we will contact you to discuss your project, calculate cost and development time.',
          form: {
            name: 'Your name',
            phone: 'Phone',
            email: 'Email',
            button: 'Get consultation',
          },
          footer:
            'Take the first step to increasing sales — order a professional landing page right now',
        },
        faq: {
          title: 'FAQ',
          questions: {
         
              question1: 'What is Landing Page and what is it needed for?',
              answer1:
                'Landing Page is a single-page website that focuses on one action: get an application, call or sale. We create custom landing pages with unique structure, design and content tailored to a specific target audience.',
        
              question2:
                'How does single-page website differ from regular website?',
              answer2:
                'Regular website contains many pages and sections, while landing page is a focused sales tool. Everything in it is subordinated to one action, without unnecessary distractions. Custom development allows making the landing page as accurate and effective as possible.',
           
              question3: 'What types of landing pages exist?',
              answer3:
                'We create different types of custom landing pages: Product — for selling specific product or service, Promo pages — for campaigns, launches, events, Business card landing pages — for experts, freelancers, business, Lead generation — for collecting applications and contacts.',
         
              question4: 'How much time is needed to create a Landing Page?',
              answer4:
                'On average — from 7 to 14 working days. Everything depends on task complexity, content volume and required functionality. Custom development takes a bit more time, but the result is completely unique.',
           
              question5: 'Can landing page be edited after launch?',
              answer5:
                "Yes, we provide the possibility of further changes and updates. You can contact us for editing or get access to the administrative part if it's provided.",
           
              question6: 'How does landing page help increase conversion?',
              answer6:
                'Our custom landing pages are created based on target audience analysis, user behavior psychology and marketing triggers. Thanks to proper structure, strong headlines, USP and trust elements, we help transform a visitor into a customer.',
           
              question7: 'On what platform do you develop landing pages?',
              answer7:
                "We don't use constructors (like Tilda or Wix). Each website is created from scratch — manually, on clean code (HTML, CSS, JS, sometimes CMS if needed). This gives maximum freedom in design implementation, high website speed and full control over all functionality.",
           
              question8: 'What services are included in Landing Page creation?',
              answer8:
                'Full cycle of custom development includes: Analysis of your business and target audience, Structure and prototype development, Unique design and adaptive layout, Sales-oriented text writing, Analytics connection, Functionality testing, Launch and support after publication.',
            
          },
          ctaText: "Didn't find the answer to your question?",
          ctaButton: 'Write to us',
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
        whatIsErpCrm: {
          title: 'Що таке ERP та CRM системи?',
          erpTitle: 'ERP: управління ресурсами компанії',
          erpDescription:
            'ERP (Enterprise Resource Planning) — це система комплексного управління всіма ресурсами підприємства: фінансами, виробництвом, закупівлями, складом, персоналом. Мета ERP — створити єдиний інформаційний простір, що дозволяє керівництву бачити повну картину бізнес-процесів і оперативно приймати рішення.',
          erpFeaturesTitle: 'Основні можливості ERP систем:',
          erpFeatures: [
            'Автоматизація обліку та управління фінансами',
            'Управління постачаннями та запасами',
            'Планування виробництва',
            'Управління персоналом',
            'Аналітика та звітність в реальному часі',
          ],
          crmTitle: 'CRM: управління відносинами з клієнтами',
          crmDescription:
            'CRM (Customer Relationship Management) — це система для організації ефективної взаємодії з клієнтами. Вона допомагає відстежувати історію контактів, покращувати якість обслуговування, управляти продажами та маркетингом.',
          crmFeaturesTitle: 'Функції CRM систем:',
          crmFeatures: [
            'Ведення клієнтської бази',
            'Управління лідами та угодами',
            'Автоматизація продажів',
            'Аналіз ефективності роботи відділу продажу',
            'Маркетингові кампанії та комунікація',
          ],
        },
        problemsSolved: {
          title: 'Які проблеми вирішують ERP та CRM системи?',
          description:
            'ERP та CRM системи допомагають вирішити ключові завдання, що заважають компаніям рости, розвиватися та ефективно працювати. Вони усувають хаос у бізнес-процесах, дозволяють зосередитися на розвитку компанії та підвищенні прибутковості.',
          erpProblemsTitle: 'Основні проблеми, які вирішує ERP система:',
          erpProblems: {
            title1: 'Відсутність єдиної бази даних',
            description1:
              "Інформація про фінанси, закупівлі, складські залишки та виробництво розкидана по різних системах або ведеться вручну. ERP об'єднує всі дані в єдину базу, забезпечуючи прозорість і доступність інформації для керівництва.",

            title2: 'Неузгодженість між відділами',
            description2:
              'Відсутність взаємодії між підрозділами призводить до помилок, затримок і фінансових втрат. ERP системи синхронізують роботу всіх відділів у реальному часі.',

            title3: 'Низька швидкість прийняття рішень',
            description3:
              'Через нестачу актуальної аналітики керівники змушені ухвалювати рішення "наосліп". ERP надає аналітичні звіти в один клік, що дозволяє швидко реагувати на зміни на ринку.',

            title4: 'Труднощі в плануванні ресурсів',
            description4:
              'Виробничі збої, нестача матеріалів або перевитрати бюджету — наслідки відсутності планування. ERP автоматизує ці процеси, допомагаючи більш точно прогнозувати потреби.',
          },
          crmProblemsTitle: 'Основні проблеми, які вирішує CRM система:',
          crmProblems: {
            title1: 'Втрата клієнтів через неякісне обслуговування',
            description1:
              'Без CRM важко зберігати історію взаємодії з клієнтом, відстежувати його потреби та пропонувати актуальні рішення. CRM фіксує всі контакти, завдання та угоди, підвищуючи рівень обслуговування.',

            title2: 'Неефективний продаж і маркетинг',
            description2:
              'Без структурованої роботи з лідами компанія втрачає потенційні доходи. CRM допомагає автоматизувати воронку продажів, управляти лідами, аналізувати конверсію та підвищувати ефективність маркетингових кампаній.',

            title3: 'Незрозуміла ефективність менеджерів',
            description3:
              'Коли відсутня централізована система обліку діяльності менеджерів з продажу, складно оцінити їхню продуктивність. CRM дозволяє бачити кількість дзвінків, листів, зустрічей та фактичні результати кожного співробітника.',

            title4:
              'Відсутність системного підходу до розвитку клієнтської бази',
            description4:
              'CRM формує повноцінний профіль клієнта, допомагаючи краще розуміти його потреби і пропонувати відповідні товари або послуги, що збільшує обсяг повторних продажів.',
          },
        },
        ourSolutions: {
          title: 'Наші рішення для вашого бізнесу',
          erpImplementation: {
            title: 'Впровадження ERP систем',
            description:
              'Ми підбираємо і налаштовуємо ERP системи під ваші завдання: від управління фінансами до автоматизації виробництва. Працюємо як із готовими рішеннями, так і з індивідуальними розробками.',
          },
          crmImplementation: {
            title: 'Впровадження CRM систем',
            description:
              'Допомагаємо налаштувати ефективну роботу з клієнтами: автоматизація продажів, облік угод, створення клієнтських баз, аналітика маркетингових кампаній.',
          },
          integration: {
            title: 'Інтеграція ERP та CRM',
            description:
              "Об'єднуємо ERP та CRM системи для створення єдиного цифрового середовища, де бізнес-процеси та взаємодія з клієнтами працюють як єдиний механізм.",
          },
          customSolutions: {
            title: 'Індивідуальні рішення',
            description:
              'Розробляємо системи під конкретні потреби бізнесу: особливості логістики, виробничі процеси, нестандартні схеми продажів тощо.',
          },
          consulting: {
            title: 'Консалтинг з цифрової трансформації',
            description:
              'Допомагаємо бізнесу визначити оптимальну стратегію автоматизації та цифровізації. Проводимо аудит існуючих процесів, розробляємо дорожню карту впровадження ERP/CRM та супроводжуємо на всіх етапах цифрової трансформації.',
          },
          blockButton: 'Замовити консультацію',
        },
        advantages: {
          title: 'Переваги співпраці з нами',
          advantagesItems: {
            title1: 'Досвід у різних галузях',
            description1: 'Від роздрібної торгівлі до виробництва та сервісу',
            title2: 'Індивідуальний підхід',
            description2: 'Підбираємо рішення під конкретні цілі компанії',
            title3: 'Комплексний підхід',
            description3: 'Аналіз, впровадження, навчання, підтримка',
            title4: 'Гарантія результату',
            description4: 'Підвищення ефективності бізнесу після впровадження',
            title5: 'Супровід і розвиток системи',
            description5: 'Адаптація до змін у бізнесі',
          },
        },
        workStages: {
          title: 'Етапи нашої роботи',
          stages: {
            title1: 'Аналіз потреб бізнесу',
            description1:
              'Вивчаємо особливості діяльності компанії, проблемні зони та очікувані результати.',
            title2: 'Вибір оптимального рішення',
            description2:
              'Пропонуємо рішення — готові продукти або індивідуальну розробку.',
            title3: 'Впровадження системи',
            description3:
              'Налаштовуємо, адаптуємо та інтегруємо систему в існуючі процеси компанії.',
            title4: 'Тестування та навчання персоналу',
            description4:
              'Перевіряємо роботу системи на практиці, навчаємо співробітників роботі з новими інструментами.',
            title5: 'Підтримка та розвиток',
            description5:
              'Забезпечуємо технічну підтримку та модернізацію системи відповідно до змін вашого бізнесу.',
          },
        },
        faq: {
          title: 'FAQ',
          questions: {
            question1: 'Чим відрізняється ERP від CRM системи?',
            answer1:
              'ERP система управляє всіма внутрішніми процесами компанії (фінанси, виробництво, логістика тощо), а CRM фокусується на взаємовідносинах з клієнтами, продажах та маркетингу. У багатьох випадках ці системи інтегруються для створення комплексного рішення.',

            question2: 'Скільки часу займає впровадження ERP/CRM?',
            answer2:
              'Терміни впровадження залежать від масштабу бізнесу та складності процесів. Для малого бізнесу це може зайняти від 1 до 3 місяців, для середнього — від 3 до 6 місяців, для великого — від 6 місяців до року.',

            question3:
              'Чи можна інтегрувати ERP/CRM з нашими існуючими програмами?',
            answer3:
              'Так, сучасні системи мають відкритий API та можливості інтеграції з бухгалтерськими програмами, сайтами, маркетплейсами, системами аналітики та багатьма іншими рішеннями.',

            question4: 'Який бюджет знадобиться на впровадження?',
            answer4:
              'Вартість залежить від обраного рішення (готовий продукт або розробка з нуля), кількості користувачів, необхідних модулів та складності інтеграцій. Ми складаємо детальний розрахунок після аналізу потреб бізнесу.',

            question5: 'Як вибрати підходящу систему для бізнесу?',
            answer5:
              'Вибір залежить від розміру компанії, галузі, бюджету та специфічних вимог. Ми проводимо аудит бізнес-процесів і на його основі рекомендуємо оптимальне рішення — готове або індивідуальне.',

            question6: 'Чи потрібне спеціальне обладнання для ERP/CRM?',
            answer6:
              'Більшість сучасних систем працюють у хмарі і не потребують встановлення складного обладнання. Для локальних рішень може знадобитися власний сервер.',
          },
          ctaText: 'Не знайшли відповідь на своє питання?',
          ctaButton: 'Напишіть нам',
        },
      },
      EcommercePage: {
        hero: {
          title: 'Розробка інтернет-магазинів під ключ',
          subtitle:
            'Створюємо інтернет-магазини, які продають. Від проєктування до запуску — повний цикл розробки під ваш бізнес. Ми враховуємо специфіку ніші, цілі, поведінку покупців і вимоги до SEO-просування. Гарантуємо технічну надійність, зручний інтерфейс та готовність до маркетингу з першого дня.',
          buttonText: 'Замовити розробку',
          benefits: {
            title1: 'Індивідуальний дизайн',
            description1:
              'Унікальний дизайн магазину під вашу нішу та цільову аудиторію.',

            title2: 'Мобільна адаптація',
            description2:
              "Ідеальне відображення на всіх пристроях — від смартфонів до комп'ютерів.",

            title3: 'SEO-оптимізація',
            description3:
              'Вбудована SEO-підготовка для високих позицій у пошукових системах.',
          },
          phoneStore: {
            storeName: 'YourStore',
            products: {
              title1: 'Футболка чоловіча',
              price1: '1 200 грн',
              title2: 'Худі з капюшоном',
              price2: '1 750 грн',
              title3: 'Шорти спортивні',
              price3: '950 грн',
              title4: 'Шапка зимова',
              price4: '550 грн',
            },
            footer: {
              cart: 'Кошик',
              support: 'Підтримка',
              promotions: 'Акції',
            },
          },
        },
        whyUs: {
          title: 'Чому варто замовити інтернет-магазин у нас',
          subtitle:
            'Гарантуємо зростання продажів та зручність для користувачів',
          cards: {
            title1:
              'Гарантуємо зростання продажів та зручність для користувачів',
            description1:
              'Ми проєктуємо інтерфейс на основі логіки користувача. Зручна навігація, швидке завантаження, проста корзина і оформлення замовлення — усе це скорочує шлях до покупки та підвищує конверсію.',

            title2: 'Досвід у eCommerce та індивідуальні рішення',
            description2:
              'За нашими плечима — десятки реалізованих проєктів у різних галузях: одяг, електроніка, товари для дому, B2B-рішення. Ми не працюємо за шаблонами — кожен магазин розробляємо індивідуально, з урахуванням продукту, цільової аудиторії та бізнес-цілей клієнта.',

            title3: 'Технічна надійність та безпека',
            description3:
              'Використовуємо сучасні технології та дотримуємося стандартів безпеки. Швидке завантаження, захист від атак, резервні системи та моніторинг 24/7 забезпечують стабільну роботу вашого магазину.',
          },
          btnText: 'Обговорити проєкт',
        },
        features: {
          title: 'Що ви отримаєте з інтернет-магазином від нас',
          intro:
            'Ми створюємо не просто сайт з кошиком, а повноцінну eCommerce-платформу, готову до продажів, просування та масштабування. Усе необхідне для запуску вже включено:',
          features: {
            title1: 'Адаптивний сучасний дизайн',
            description1:
              "Ваш інтернет-магазин буде однаково зручним на смартфонах, планшетах і комп'ютерах. Користувач швидко знайде товар і оформить замовлення без зайвих кроків.",

            title2: 'Зручна система керування',
            description2:
              'Ви зможете самостійно додавати й редагувати товари, керувати замовленнями, цінами, акціями та сторінками — без потреби звертатися до розробника.',

            title3: 'Інтеграції під ключ',
            description3:
              'Підключаємо платіжні системи (LiqPay, Stripe, Fondy), служби доставки (Нова пошта, Укрпошта), CRM, аналітику, e-mail-маркетинг, трекінг подій і рекламу — все для автоматизації процесів.',

            title4: 'SEO та аналітика з першого дня',
            description4:
              'Грамотна структура URL, мета-теги, мікророзмітка (Schema.org), швидке завантаження сторінок — усе це вже налаштовано. Додатково інтегруємо Google Analytics, GA4, Google Tag Manager, налаштовуємо події та цілі.',

            title5: 'Безпека та продуктивність',
            description5:
              'SSL-сертифікат, захист від ботів, регулярні оновлення CMS, капча, оптимізація коду та зображень — усе для стабільної та швидкої роботи магазину.',

            title6: 'Можливість масштабування',
            description6:
              'Інтернет-магазин легко розширити: додати нові категорії, змінити валюту, запустити акції або інтегрувати з маркетплейсами. Ми проєктуємо платформу з урахуванням вашого росту.',
          },
          buttonText: 'Замовити розробку',
        },
        stages: {
          title: 'Етапи створення інтернет-магазину',
          subtitle:
            'Ми працюємо поетапно, прозоро й системно — щоб ви розуміли, на якому етапі знаходиться проєкт і що отримаєте в результаті:',
          steps: {
            title1: 'Аналіз ніші та цільової аудиторії',
            description1:
              'Вивчаємо ринок, конкурентів і поведінку ваших потенційних покупців. Формуємо структуру сайту, визначаємо ключовий функціонал і точки зростання.',

            title2: 'Прототипування та структура каталогу',
            description2:
              'Створюємо логічну схему сторінок, меню, фільтрів, карток товарів. Розробляємо зручну архітектуру, яка спрощує навігацію та сприяє SEO.',

            title3: 'Дизайн і розробка функціоналу',
            description3:
              'Створюємо індивідуальний дизайн з урахуванням UX/UI, адаптуємо під мобільні пристрої. Реалізуємо кошик, оплату, доставку, реєстрацію, особистий кабінет тощо.',

            title4: 'Тестування, запуск і підтримка',
            description4:
              'Перевіряємо сайт на помилки, швидкість, адаптивність і коректність усіх інтеграцій. Після запуску — супроводжуємо, оновлюємо, консультуємо.',
          },
          btnText: 'Замовити розробку',
        },
        pricing: {
          title: 'Вартість і терміни розробки інтернет-магазину',
          description:
            'Ціна створення інтернет-магазину залежить від складності функціоналу, кількості сторінок, інтеграцій та індивідуального дизайну. Ми не використовуємо шаблонних рішень, тому кожен проєкт — унікальний.',
          factors: {
            title1: 'Складність функціоналу',
            description1:
              'Кількість та складність функцій: фільтри товарів, особистий кабінет, порівняння, збереження кошика, мультивалютність.',

            title2: 'Інтеграції',
            description2:
              'Підключення платіжних систем, служб доставки, CRM, ERP, систем аналітики, сервісів розсилки.',

            title3: 'Дизайн',
            description3:
              'Від базового стильного оформлення до повністю кастомного дизайну з анімаціями та індивідуальною графікою.',

            title4: 'Терміни розробки',
            description4:
              'В середньому проєкт займає від 4 до 12 тижнів, залежно від складності та кількості сторінок.',
          },
          dependencies: {
            title: 'Від чого залежить ціна',
            items: {
              item1: 'Обсяг каталогу товарів та складність фільтрації.',
              item2:
                'Необхідні інтеграції: платіжні системи, доставка, CRM, склад.',
              item3:
                'Наявність особистого кабінету, бонусної системи, мультивалютності тощо.',
              item4: 'Індивідуальний або типовий дизайн.',
              item5: 'Потрібна чи ні подальша технічна підтримка.',
            },
          },
          conclusion:
            'Для визначення точної вартості та термінів проводимо детальний аналіз проєкту. Ми допоможемо вам визначитися з оптимальним набором функцій для успішного старту, а потім масштабувати бізнес.',
          buttonText: 'Отримати консультацію',
        },
        faq: {
          title: 'FAQ',
          questions: {
            question1: 'Скільки коштує розробка інтернет-магазину?',
            answer1:
              'Вартість залежить від кількості функцій та складності проекту. Ми розробляємо інтернет-магазини індивідуально під ваші потреби, тому точну ціну можна визначити після оцінки вимог і специфікацій.',

            question2: 'Скільки часу займає розробка інтернет-магазину?',
            answer2:
              'Терміни варіюються в залежності від складності проєкту. Мінімальний термін — від 3 тижнів, але зазвичай на розробку потрібно 4-6 тижнів. У цей час входять дизайн, розробка функціоналу, тестування і запуск.',

            question3: 'Чи надається підтримка після запуску?',
            answer3:
              'Так, ми надаємо технічну підтримку після запуску інтернет-магазину. Ви можете звертатися за допомогою щодо технічних питань, оновлень або додаткових налаштувань.',

            question4: 'Чи потрібно замовляти домен і хостинг самостійно?',
            answer4:
              'Ми можемо допомогти з вибором домену та хостингу або налаштувати їх для вас. Усі питання з хостингом і доменом ми обговорюємо на етапі підготовки проєкту.',

            question5:
              'Чи можна інтегрувати магазин з маркетплейсами та соцмережами?',
            answer5:
              'Так, ми інтегруємо інтернет-магазин з маркетплейсами (Prom, Rozetka) та соціальними мережами (Facebook, Instagram) для продажу та реклами.',

            question6: 'Чи підходять ваші магазини для мобільних пристроїв?',
            answer6:
              "Так, ми створюємо адаптивний дизайн, який дозволяє інтернет-магазину коректно відображатися на всіх типах пристроїв — смартфонах, планшетах та комп'ютерах.",
          },
          ctaText: 'Не знайшли відповідь на своє питання?',
          ctaButton: 'Напишіть нам',
        },
      },
      LandingPage: {
        hero: {
          title:
            'Створюємо односторінкові сайти, що приносять прибуток вашому бізнесу',
          subtitle:
            'Розробляємо ефективні landing page, які конвертують відвідувачів у клієнтів. Сучасний дизайн, швидкість завантаження та оптимізація для пошукових систем.',
          buttonText: 'Дізнатися більше',
          phoneContent: {
            title: 'Landing Page',
            subtitle: 'Конверсія та результат',
          },
          benefits: {
            title1: 'Висока конверсія',
            description1:
              'Створюємо сторінки, що перетворюють відвідувачів на клієнтів завдяки правильній структурі та закликам до дії.',

            title2: 'Унікальний дизайн',
            description2:
              'Розробляємо індивідуальний дизайн, що відображає особливості вашого бренду та привертає увагу клієнтів.',

            title3: 'Швидкий запуск',
            description3:
              'Створюємо та запускаємо ефективні лендінги в найкоротші терміни, щоб ви могли почати залучати клієнтів вже зараз.',
          },
        },
        whatIsLandingPage: {
          title: 'Що таке Landing Page та які його основні функції',
          description:
            'Landing Page (або односторінковий сайт) — це вебсторінка, створена для досягнення конкретної маркетингової цілі: продажу товару, збору заявок чи презентації послуги. Вона концентрує увагу користувача на головному — вашій пропозиції.',
          features: [
            'Чітка структура та зрозумілий користувацький шлях',
            'Ефективні елементи захоплення уваги та заклики до дії',
            'Адаптивний дизайн для всіх пристроїв',
            'Швидке завантаження та оптимізована продуктивність',
            'Інтеграція з системами аналітики та CRM',
            "Форми захоплення лідів та зворотного зв'язку",
          ],
          summary:
            'Ефективний лендінг — це не просто гарна сторінка, а потужний інструмент продажів, який перетворює відвідувачів у клієнтів та приносить реальний прибуток вашому бізнесу.',
        },
        landingVsMultiPage: {
          title: 'Чим лендінг відрізняється від багатосторінкового сайту',
          quote:
            'Головна відмінність лендінгу — фокус. На відміну від багатосторінкових сайтів, які розпорошують увагу між десятками сторінок, лендінг веде користувача по логічному шляху до однієї цільової дії. Це збільшує шанси, що відвідувач стане вашим клієнтом.',
          landing: {
            title: 'Лендінг',
            features: {
              item1: 'Одна сторінка — один чіткий шлях для користувача',
              item2: 'Всі елементи ведуть до цільової дії',
              item3: 'Висока конверсія завдяки фокусу на результат',
              item4: 'Швидкий запуск та легке тестування',
              item5: 'Ідеально для реклами та швидких продажів',
            },
          },
          multiPage: {
            title: 'Багатосторінковий сайт',
            features: {
              item1: 'Розгалужена структура з багатьма сторінками',
              item2: 'Розширений функціонал та можливості',
              item3: 'Складніша навігація та довший шлях до цілі',
              item4: 'Підходить для великих проектів та каталогів',
              item5: 'Потребує більше часу на розробку та підтримку',
            },
          },
        },
        conversionBenefits: {
          title:
            'Як правильно побудований лендінг допомагає збільшити конверсію',
          description:
            'Стратегічно спроєктований лендінг враховує потреби цільової аудиторії, вирішує її болі та підводить до прийняття рішення. Від грамотного заголовка до переконливого заклику до дії — кожен елемент працює на результат. Саме тому ефективний лендинг — це не просто сайт, а інструмент зростання прибутку.',
          subtitle: 'Переваги замовлення професійного лендингу',
          advantages: {
            item1: 'Індивідуальний підхід до вашого бізнесу',
            item2: "Дизайн, що чіпляє та запам'ятовується",
            item3: 'Висока швидкість завантаження й адаптивність',
            item4: 'SEO-оптимізація для просування в Google',
            item5: 'Підключення аналітики й готовність до реклами',
          },
          buttonText: 'Замовити лендінг',
        },
        whyEffective: {
          title:
            'Чому Landing Page — це найефективніший інструмент для залучення клієнтів?',
          subtitle:
            'Як односторінковий сайт фокусується на конкретній дії користувача',
          description:
            'Landing Page створюється з чіткою метою: зацікавити, переконати й спонукати користувача виконати певну дію — залишити заявку, зателефонувати, придбати товар. Завдяки мінімуму відволікаючих елементів і чіткій структурі, односторінкові сайти досягають вищої конверсії, ніж класичні багатосторінкові сайти.',
        },
        businessBenefits: {
          subtitle: 'Які бізнеси отримують найбільше користі від лендингів',
          intro: 'Лендінги ідеально підходять для:',
          categories: {
            title1: 'Послуг',
            description1: 'юридичних, косметологічних, будівельних тощо',

            title2: 'Онлайн-курсів',
            description2: 'та різноманітних інфопродуктів',

            title3: 'Продажу товарів',
            description3: 'окремих продуктів або нових колекцій',

            title4: 'Промо-акцій',
            description4: 'та запуску перспективних стартапів',
          },
          summary:
            'Фактично, будь-який бізнес, що має конкретну цільову аудиторію та чітку пропозицію, виграє від використання лендінгу.',
        },
        effectiveness: {
          title:
            'Чому Landing Page — це найефективніший інструмент для залучення клієнтів?',
          banner:
            'Односторінковий сайт, який перетворює відвідувачів у клієнтів',
          description:
            'Landing Page створюється з чіткою метою: зацікавити, переконати й спонукати користувача виконати певну дію — залишити заявку, зателефонувати, придбати товар. Завдяки мінімуму відволікаючих елементів і чіткій структурі, односторінкові сайти досягають вищої конверсії, ніж класичні багатосторінкові сайти.',
          conversionSteps: {
            title1: 'Привернення уваги',

            title2: 'Утримання інтересу',

            title3: 'Формування бажання',

            title4: 'Спонукання до дії',
          },
          statsTitle: 'Реальні переваги лендінгів у цифрах',
          stats: {
            value1: '+75%',
            label1: 'Збільшення конверсії',

            value2: '-50%',
            label2: 'Менша вартість залучення клієнта',

            value3: 'x3',
            label3: 'Швидше введення на ринок',
          },
          advantagesTitle: 'Ключові переваги лендингу перед звичайними сайтами',
          advantages: {
            item1:
              'Одна мета — користувач не відволікається на другорядну інформацію',
            item2:
              'Чітка структура — кожний блок логічно підводить до цільової дії',
            item3:
              'Спрощена аналітика — легше відстежувати поведінку користувача',
            item4:
              'A/B тестування — можливість швидко перевіряти різні гіпотези',
          },
          quote:
            'Лендінг — це не просто сторінка, а конверсійна воронка, де кожен елемент має свою роль у перетворенні відвідувача в клієнта',
          buttonText: 'Замовити ефективний лендінг',
        },
        creation: {
          title:
            'Як ми створюємо лендінг, що перетворює відвідувачів у покупців',
          steps: {
            title1: 'Аналіз та стратегія',
            description1:
              'Вивчаємо ваш бізнес, конкурентів і цільову аудиторію для формування чіткої стратегії',

            title2: 'Дизайн та прототип',
            description2:
              'Створюємо унікальний дизайн, що відображає ваш бренд, та розробляємо прототип з фокусом на конверсію',

            title3: 'Розробка',
            description3:
              'Верстаємо адаптивний лендінг з сучасними анімаціями та оптимізуємо швидкість і продуктивність',

            title4: 'Запуск та аналітика',
            description4:
              'Налаштовуємо аналітику, тестуємо всі елементи та запускаємо лендінг з подальшою підтримкою',
          },
          features: {
            title1: 'Чітка структура',
            description1:
              'Логічна послідовність блоків, що ведуть до цільової дії',

            title2: 'Унікальний дизайн',
            description2:
              'Креативні рішення, що виділяють вас серед конкурентів',

            title3: 'Швидкість роботи',
            description3: 'Оптимізована швидкість завантаження та відгуку',

            title4: 'Адаптивність',
            description4: 'Ідеальне відображення на всіх пристроях',
          },
        },
        requirements: {
          title:
            'Що потрібно для створення односторінкового сайту, який продає?',
          cards: {
            title1: 'Чітка структура та сильне УТП',
            description1:
              'Успішний лендинг починається зі сценарію, що веде користувача до конкретної дії: залишити заявку, здійснити покупку або записатися на консультацію. Унікальна торгова пропозиція (УТП) повинна одразу захоплювати увагу, бути зрозумілою та цінною для вашого клієнта.',

            title2: 'Тригери довіри та правильний заклик до дії',
            description2:
              'Щоб користувач не сумнівався, важливо додати елементи довіри: реальні відгуки, кейси, фото, сертифікати, гарантії. Це суттєво підвищує рівень впевненості. А завершальним кроком має стати сильний заклик до дії (CTA): яскрава кнопка з чітким посилом, що мотивує натиснути.',

            title3: 'Оптимізація та простота',
            description3:
              'Важливо не перенавантажувати сторінку — мінімум зайвих елементів, максимум фокус на цілі. А ще — технічна оптимізація: швидке завантаження, адаптивність, зручна навігація на будь-якому пристрої.',
          },
        },
        offer: {
          title:
            'Отримайте ефективний Landing Page під ключ — швидко та вигідно',
          subtitle: 'Чому варто замовити лендінг у професіоналів',
          description:
            'Самостійно створити лендінг — можна. Але створити той, що дійсно продає, — справа для команди з досвідом. Ми знаємо, як вивести клієнта на цільову дію, як структурувати контент, де поставити кнопку й що написати в заголовку. Ваш сайт — це обличчя бізнесу, і воно має працювати на вас.',
          additionalDescription:
            'Ми пропонуємо як повністю індивідуальну розробку, так і адаптацію шаблонів під ваш бізнес. Обидва варіанти мають свої переваги — все залежить від бюджету, задач і термінів. У будь-якому випадку ви отримаєте сучасний, адаптивний та конверсійний лендінг.',
          whatYouGet: {
            title: 'Що ви отримаєте:',
            items: {
              item1:
                'Професійний односторінковий сайт, оптимізований під ваші цілі та аудиторію',
              item2:
                'Збільшення конверсії та продажів завдяки правильній структурі та УТП',
              item3:
                'Адаптивний дизайн, що відмінно виглядає на всіх пристроях',
              item4: 'Швидке завантаження та оптимальна продуктивність',
            },
          },
          ourFeatures: {
            title: 'Наші фішки:',
            items: {
              item1:
                'Унікальний дизайн, створений під ваш бренд та цільову аудиторію',
              item2: 'Інтеграція з CRM та системами аналітики',
              item3: 'Захист від спаму та безпека даних',
              item4: 'Технічна підтримка та консультації після запуску',
            },
          },
        },
        cta: {
          title: 'Замовте ефективний лендінг для вашого бізнесу',
          description:
            'Бажаєте отримати сучасний односторінковий сайт, який буде приносити реальні заявки та продажі? Ми створимо для вас продаючий лендінг з унікальним дизайном та високою конверсією.',
          highlight: 'Розробляємо лендінги, що приносять результат',
          subtext:
            "Залиште заявку — і ми зв'яжемося з вами для обговорення вашого проєкту, розрахунку вартості та термінів розробки.",
          form: {
            name: "Ваше ім'я",
            phone: 'Телефон',
            email: 'Email',
            button: 'Отримати консультацію',
          },
          footer:
            'Зробіть перший крок до збільшення продажів — замовте професійний лендінг прямо зараз',
        },
        faq: {
          title: 'FAQ',
          questions: {
            question1: 'Що таке Landing Page і для чого він потрібен?',
            answer1:
              'Landing Page — це односторінковий сайт, який фокусується на одній дії: отримати заявку, дзвінок або продаж. Ми створюємо кастомні лендінги з унікальною структурою, дизайном і контентом, що підлаштовані під конкретну цільову аудиторію.',

            question2:
              'Чим односторінковий сайт відрізняється від звичайного сайту?',
            answer2:
              'Звичайний сайт містить багато сторінок і розділів, а лендінг — це фокусований інструмент продажів. У ньому все підпорядковано одній дії, без зайвих відволікань. Кастомна розробка дозволяє зробити лендінг максимально точним і ефективним.',

            question3: 'Які види лендінгів існують?',
            answer3:
              'Ми створюємо різні типи кастомних лендінгів: Продуктові — для продажу конкретного товару чи послуги, Промо-сторінки — для акцій, запусків, подій, Лендінги-візитки — для експертів, фрілансерів, бізнесу, Лід-генераційні — для збору заявок та контактів.',

            question4: 'Скільки часу потрібно для створення Landing Page?',
            answer4:
              'В середньому — від 7 до 14 робочих днів. Все залежить від складності задач, обсягу контенту та необхідного функціоналу. Кастомна розробка займає трохи більше часу, але результат повністю унікальний.',

            question5: 'Чи можна редагувати лендінг після запуску?',
            answer5:
              'Так, ми закладаємо можливість подальших змін і оновлень. Ви зможете звертатися до нас для редагування або отримати доступ до адміністративної частини, якщо вона передбачена.',

            question6: 'Як лендінг допомагає підвищити конверсію?',
            answer6:
              'Наші кастомні лендінги створюються на основі аналізу ЦА, психології поведінки користувача та маркетингових тригерів. Завдяки правильній структурі, сильним заголовкам, УТП і елементам довіри ми допомагаємо перетворити відвідувача на клієнта.',

            question7: 'На якій платформі ви розробляєте лендінги?',
            answer7:
              'Ми не використовуємо конструктори (типу Tilda чи Wix). Кожен сайт створюється з нуля — вручну, на чистому коді (HTML, CSS, JS, іноді CMS за потреби). Це дає максимальну свободу в реалізації дизайну, високу швидкість роботи сайту та повний контроль над усім функціоналом.',

            question8: 'Які послуги входять у створення Landing Page?',
            answer8:
              'Повний цикл кастомної розробки включає: Аналіз вашого бізнесу та ЦА, Розробку структури та прототипу, Унікальний дизайн і адаптивну верстку, Написання текстів під продаж, Підключення аналітики, Тестування функціоналу, Запуск і підтримку після публікації.',
          },
          ctaText: 'Не знайшли відповідь на своє питання?',
          ctaButton: 'Напишіть нам',
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
