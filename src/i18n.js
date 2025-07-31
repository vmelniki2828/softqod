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
      MobileAppsPage: {
        hero: {
          title: 'Custom mobile app development',
          subtitle:
            "Creating a mobile app is an effective business tool that helps attract new customers, increase loyalty, and boost sales. In today's world, over 70% of internet traffic comes from mobile devices, so having your own mobile app for iOS or Android becomes an important competitive advantage.",
          subtitle2:
            'Our company offers professional mobile app development services "turnkey" — from analytics and planning to launch and support. We create native apps, cross-platform solutions, and progressive web apps (PWA) that work fast, stably, and securely.',
          buttonText: 'Order consultation',
          phoneContent: {
            title: 'Mobile App',
            subtitle: 'iOS + Android',
          },
        },
        benefits: {
          title1: 'Native development',
          desc1:
            'We create unique apps with maximum performance for iOS and Android.',
          title2: 'Cross-platform solutions',
          desc2: 'Save time and budget with apps that work on all platforms.',
          title3: 'Support and updates',
          desc3:
            'We ensure stable operation and release new versions with additional functionality.',
        },
        business: {
          title: 'Why your business needs a mobile app',
          text1:
            'A mobile app opens new opportunities for business interaction with customers and market promotion. It allows you to stay connected with your audience 24/7, send push notifications about promotions, news, and special offers, as well as collect analytics to improve service.',
          text2:
            'Additionally, having a mobile app helps strengthen your brand. A bright and convenient interface, flawless functionality, and fast operation help form a positive company image. Businesses that offer a mobile experience significantly outperform competitors in customer engagement and sales volume.',
          highlight:
            'By investing in mobile app development, you get a powerful marketing tool that works for your success every day.',
        },
        appTypes: {
          title: 'What mobile apps we create',
          description:
            'Our team develops mobile solutions for businesses of any complexity — from startups to large corporations. We create apps that perfectly fit your target audience and business goals.',
          nativeTitle: 'Native apps for iOS and Android',
          nativeDesc:
            'Native development allows creating maximum fast and stable apps that fully utilize the capabilities of iOS and Android operating systems. Such apps are distinguished by high performance, quality graphics, and deep integration with user devices.',
          crossTitle: 'Cross-platform apps on Flutter and React Native',
          crossDesc:
            'Cross-platform solutions allow developing one app for two platforms simultaneously, saving time and budget. Flutter and React Native technologies ensure high speed, good interface quality, and easy project scaling.',
          pwaTitle: 'Progressive web apps (PWA)',
          pwaDesc:
            "Progressive web apps combine the advantages of websites and native apps. They work in the browser, don't require installation, can work offline, and support push notifications. PWA is an excellent choice for businesses that want to quickly launch a mobile product with minimal costs.",
        },
        stages: {
          title: 'Mobile app development stages',
          description:
            'The process of creating a mobile app consists of several important stages, each of which affects the quality of the final product and its success among users.',
          step1Title: 'Analysis and planning',
          step1Desc:
            'We study your business, audience, competitors, and formulate clear requirements for the future app. We create technical specifications and choose optimal technologies.',
          step2Title: 'UX/UI Design',
          step2Desc:
            'We design the logical structure of the app, create prototypes and design that ensures ease of use and attractive appearance.',
          step3Title: 'Development',
          step3Desc:
            'Our programmers implement functionality, integrate necessary services, ensure security and optimize app performance.',
          step4Title: 'Testing',
          step4Desc:
            'We conduct comprehensive testing to identify and fix errors. We guarantee stable app operation on different devices and operating system versions.',
          step5Title: 'Launch and support',
          step5Desc:
            'We publish the app in App Store and Google Play, provide technical support, develop and update the product according to new business needs.',
          buttonText: 'Order development',
        },
        whyUs: {
          title: 'Advantages of working with our team',
          subtitle:
            'By ordering mobile app development from us, you get not just a contractor, but a reliable technology partner who is interested in your success.',
          card1Title: 'Experienced development team',
          card1Desc:
            'We have been working in mobile development for many years and have successful cases in various niches — from e-commerce and finance to education and medicine.',
          card2Title: 'Individual approach to each project',
          card2Desc:
            'Every business is unique, so we offer solutions that consider your goals, target audience needs, and budget.',
          card3Title: 'Quality guarantee and deadline compliance',
          card3Desc:
            'We strictly control quality at every development stage and always adhere to agreed deadlines. Your project will be implemented on time and meet all modern standards.',
          buttonText: 'Order development',
        },
        pricing: {
          title: 'Mobile app cost',
          description:
            'The price of mobile app development depends on several factors: functionality complexity, platform choice, technologies, and implementation terms. We offer flexible solutions that allow choosing the optimal option for your budget and needs.',
          factorsTitle: 'Main factors affecting cost:',
          factor1Title: 'App type',
          factor1Desc: 'Native, cross-platform, or PWA.',
          factor2Title: 'Functionality complexity',
          factor2Desc:
            'Additional features such as payment system integration, geolocation, video/audio functions, etc.',
          factor3Title: 'Design and UX/UI',
          factor3Desc:
            'Unique design may increase cost, but it always contributes to better user experience.',
          factor4Title: 'Implementation timeline',
          factor4Desc:
            'The faster you need to complete the project, the higher the resource costs may be.',
          ctaText:
            'For accurate calculation of your mobile app cost, we offer a free consultation during which we will determine the scope of work and create an individual proposal.',
          buttonText: 'Get consultation',
        },
        faq: {
          title: 'FAQ',
          q1: 'How long does mobile app development take?',
          a1: 'The time for mobile app development depends on the project complexity and functions you want to implement. Usually, development takes from 2 to 6 months for standard apps, but for complex solutions, this period may be longer.',
          q2: "What's the difference between native and cross-platform apps?",
          a2: 'A native app is developed separately for each operating system (iOS or Android), which allows achieving high performance and integration with device functions. Cross-platform apps are developed using technologies that allow using one code for two platforms, which saves time and budget, but may be less optimal in speed and stability.',
          q3: 'What is a progressive web app (PWA)?',
          a3: 'A progressive web app is a web app that combines the advantages of websites and native apps. PWA can work offline, receive push notifications, and launch on any device without installation.',
          q4: 'What advantages does a mobile app have for my business?',
          a4: 'A mobile app allows your business to be accessible to customers 24/7, helps increase loyalty, improves user experience, and allows conducting effective marketing campaigns. The app also helps collect analytics to improve service and expand business.',
          q5: 'What additional functions can be added to a mobile app?',
          a5: 'Various functions can be added to a mobile app, such as geolocation, push notifications, payment system integration, chatbots, social networks, offline mode, multimedia support (video, photos), and many others, depending on your needs.',
          q6: 'How can I get the exact cost of mobile app development?',
          a6: 'For accurate cost calculation, we need to discuss project details: its complexity, desired platform, functionality, and terms. We offer a free consultation during which we will collect all necessary information and provide you with an individual proposal.',
          ctaText: "Didn't find the answer to your question?",
          ctaButton: 'Write to us',
        },
      },
      BannerAdsPage: {
        hero: {
          title: 'AI Advertising Banners – Fast, Accurate, Effective',
          subtitle:
            'Increase the effectiveness of your marketing with AI-powered banner ads. Save time, personalize, and convert.',
          buttonText: 'Order Banners',
          features: {
            fast: 'Fast',
            quality: 'Quality',
            effective: 'Effective',
          },
        },
        imgText: {
          text1: 'Special offer',
          text2: 'Summer discount 50%',
          text3: 'For all types of advertising banners for your business',
          text4: 'Order',
        },
        benefits: {
          title: 'Why use AI to create banners',
          subTitle:
            'Modern AI-powered tools are changing the game in advertising design. Here are a few reasons why our clients choose this approach:',
          speed: {
            title: 'Development Speed',
            description:
              'Generating several banner variations takes just minutes.',
          },
          budget: {
            title: 'Budget Savings',
            description:
              'Less costs for manual work of designers and copywriters.',
          },
          optimization: {
            title: 'A/B Testing Optimization',
            description:
              'AI can create dozens of variations for different audience segments.',
          },
          personalization: {
            title: 'Personalization',
            description:
              'Adaptation to language, geolocation, interests and user behavior.',
          },
          uniqueness: {
            title: 'Uniqueness',
            description:
              'Visuals and texts are generated from scratch, taking into account your style and brand.',
          },
        },
        services: {
          title: 'What We Offer',
          subTitle:
            'We specialize in creating advertising banners using artificial intelligence tools. This allows you to quickly generate high-quality visuals adapted to different platforms and tasks. Our services cover the full range of banner advertising:',
          static: {
            title: 'Static Banners',
            description:
              'Suitable for Google Ads, Facebook, Instagram, mobile applications and websites. Generated in various formats and sizes taking into account platform requirements.',
          },
          animated: {
            title: 'Animated Banners (GIF and HTML5)',
            description:
              'We create dynamic creatives that attract attention and increase clickability.',
          },
          remarketing: {
            title: 'Banners for Remarketing and Programmatic Advertising',
            description:
              'Development of adaptive creatives for showing audiences who have already contacted your brand.',
          },
          massGeneration: {
            title: 'Mass Generation of Variations',
            description:
              'AI is capable of creating dozens and even hundreds of variations of one banner for testing or scaling advertising campaigns.',
          },
          textGeneration: {
            title: 'Text and Image Generation',
            description:
              'We combine AI text models (e.g., ChatGPT) with visual ones (DALL·E, Midjourney, Stable Diffusion) to create creatives completely from scratch.',
          },
          footerText:
            'Each banner is manually checked and refined by the designer to achieve high quality.',
        },
        process: {
          title: 'How the Process Works',
          subTitle:
            'We have made the process of creating AI advertising banners as simple, transparent, and convenient as possible for the customer. The entire process takes from a few hours to a few days, depending on the complexity and volume.',
          text: 'Step',
          step1: {
            title: 'Task Discussion',
            description:
              "At the first stage, we clarify campaign goals, platform type (Google, Meta, TikTok, mobile apps, etc.), banner format, wishes for styling and texts. If there's a brand book — we'll take into account colors, logo and style.",
            item1: 'Goal Definition',
            item2: 'Audience Analysis',
            item3: 'Concept Creation',
          },
          step2: {
            title: 'Concept Generation',
            description:
              'We use generative AI tools to create first variations: images (if needed — with illustrations, characters or objects); text (taking into account platform and target audience); animation or static variants.',
            item1: 'Image Generation',
            item2: 'Design Variations',
            item3: 'First Selection',
          },
          step3: {
            title: 'Manual Refinement',
            description:
              'Selected banners we adapt manually: adjust design elements, align, add lightness and visual balance. If needed, we make edits after your feedback.',
            item1: 'Final Design',
            item2: 'Element Correction',
            item3: 'Edit Approval',
          },
          step4: {
            title: 'Platform Optimization',
            description:
              'After approval of the final design, we create banners in all necessary sizes and formats: 300×250, 728×90, 160×600 – for display networks; 1080×1080, 1080×1920 – for social networks; HTML5, GIF – for animation.',
            item1: 'Web Formats',
            item2: 'Mobile Formats',
            item3: 'Animated Versions',
          },
          step5: {
            title: 'Final Files Delivery',
            description:
              'All ready banners you receive in a convenient form (archive, Google Drive, link). Also upon request we provide recommendations for their placement or help with uploading to advertising cabinets.',
            item1: 'File Package',
            item2: 'Timely Delivery',
            item3: 'Placement Support',
          },
        },
        examples: {
          title: 'Examples of advertising banners created with AI',
          subTitle:
            'Artificial intelligence opens up new possibilities in creating advertising banners. Thanks to modern generative models, we create visuals that perfectly match business goals and audience needs. Flexibility, scalability, and high quality are the key advantages of our approach.',
          filters: {
            all: 'All Types',
            mobile: 'Mobile Advertising',
            retargeting: 'Retargeting',
            education: 'Educational Products',
            niche: 'Niche Projects',
          },
          examples: {
            item1: {
              title: 'Discount -50% on Summer Collection',
              description:
                'Banner with bright background and clear product display. Simple and attractive design for increasing conversion.',
              tags1: 'Discount',
            },
            item2: {
              title: 'New Bag Collection 2023',
              description:
                'Banner for accessories brand with focus on seasonal novelties and exclusive offers.',
              tags1: 'Seasonal Collection',
            },
            item3: {
              title: 'Mobile App – 30% Discount',
              description:
                'Bright banner for mobile app promo campaign with focus on limited offer.',
              tags1: 'Animation',
            },
            item4: {
              title: 'New Game – Available on AppStore',
              description:
                'Vertical banner for mobile game with bright elements and clear CTA.',
              tags1: 'Vertical Format',
            },
            item5: {
              title: 'You Forgot Something in Your Cart!',
              description:
                "Personalized banner for retargeting users who didn't complete their purchase.",
              tags1: 'Retargeting',
              tags2: 'Personalization',
              tags3: 'Cart',
            },
            item6: {
              title: 'Marketing Course – Start September 15',
              description:
                'Informative banner for educational project with focus on course benefits and start date.',
              tags1: 'Education',
              tags2: 'Online Course',
              tags3: 'Marketing',
            },
            item7: {
              title: 'Exclusive Offer for Gamers',
              description:
                'Thematic banner for gaming service using appropriate styling and color scheme.',
              tags1: 'Games',
              tags2: 'Offer',
            },
            item8: {
              title: 'Financial Service for Business',
              description:
                'Professional banner for B2B financial product with focus on security and reliability.',
              tags1: 'Finance',
              tags2: 'Security',
            },
          },
          footerTitle: 'Additional information',
          footerText1:
            'We provide examples of banners in PNG, JPEG, GIF or HTML5 format. If necessary, we will prepare a banner set for Google Ads, Meta Ads or any DSP platform.',
          footerText2:
            'Additionally, we can offer multiple design options for each order, so you can choose the one that works best. All of this without a significant price increase, as the generation is automated.',
        },
        advantages: {
          title: 'Benefits of using AI in banner creation',
          subTitle:
            'Using artificial intelligence in banner design is not just a fashion trend, but a practical solution that provides concrete business benefits. Below are the key reasons why more and more companies are choosing AI design:',
          speed: {
            title: 'Execution Speed',
            description:
              'Instead of several days for preparing layouts — you can get first banner variations in just a few hours. Algorithms work quickly and in parallel, which is especially useful for urgent campaigns.',
          },
          variety: {
            title: 'More Options to Choose From',
            description:
              'AI allows generating dozens of unique creatives at once. This enables faster finding of the perfect style, testing several versions (A/B testing) and choosing the most effective option.',
          },
          creativity: {
            title: 'Creativity + Analytics',
            description:
              'AI takes into account trends, visual patterns and audience preferences. Thanks to this, banners are created that are not just beautiful, but also work for results: high CTR, more conversions, better engagement.',
          },
          budget: {
            title: 'Budget Savings',
            description:
              'Manual work of designers is expensive. Using generative AI significantly reduces costs for banner production, especially if you need a large number of formats.',
          },
          scaling: {
            title: 'Scaling',
            description:
              "Need banners in 10+ formats? Or a series of 30 variations for different offers? For AI this is not a problem. You'll be able to scale advertising in a few clicks.",
          },
          adaptation: {
            title: 'Platform Adaptation',
            description:
              'AI "understands" which banners work better on Facebook, which — in Google Ads, and which — in TikTok. Therefore banners are immediately optimized for the specifics of each channel.',
          },
        },
        target: {
          title: 'Who is this service suitable for and why do they choose us?',
          text: 'AI banner ad creation service is an effective solution for any business that wants to quickly and profitably promote itself on the Internet. And regardless of the niche, we know how to give you results.',
          subTitle1: 'Who will benefit',
          subTitle2: 'Why choose us',
          ecommerce: {
            title: 'Online Stores and E-commerce',
            description:
              'Bright banners for promotions, sales, novelties. Fast generation of hundreds of banners for different product categories.',
          },
          mobile: {
            title: 'Mobile App Developers',
            description:
              'Creatives for promotion on TikTok, Meta and Google Ads. High conversion thanks to AI-based approach and testing.',
          },
          education: {
            title: 'Online Courses and Educational Platforms',
            description:
              'Professional banners for advertising webinars, courses and training programs with focus on your competitive advantages.',
          },
          gaming: {
            title: 'Gambling Projects and Entertainment Services',
            description:
              'Attracting attention with bright visuals while complying with legislative restrictions and niche specifics.',
          },
          b2b: {
            title: 'B2B Companies',
            description:
              'Presentation of services, events, programs or lead generation. Banners that match your corporate style.',
          },
          agencies: {
            title: 'Marketers and Agencies',
            description:
              'Large-scale and fast banner production for client projects. New ideas and approaches for increasing conversion.',
          },
        },
        whyUs: {
          speed: {
            title: 'Speed',
            description:
              'First creative variations in just a few hours. We can prepare an entire campaign in 1-2 days.',
          },
          quality: {
            title: 'Quality + AI',
            description:
              'Combination of artificial intelligence with human experience.',
          },
          experience: {
            title: 'Experience in Different Niches',
            description:
              'Understanding the specifics of different business sectors.',
          },
          adaptation: {
            title: 'Complete Adaptation',
            description: 'Customization to your needs and brand.',
          },
          transparency: {
            title: 'Transparent Process',
            description: 'Full control at every stage of creation.',
          },
          pricing: {
            title: 'Optimal Prices',
            description: 'Affordable tariff plans for any budget.',
          },
        },
        specialOffer: {
          tagline: 'Special Offer',
          title: 'Summer Discount 50%',
          description: 'On all types of advertising banners for your business',
          buttonText: 'Order',
        },
        additionalInfo: {
          title: 'Additional Information',
        },
        checklist: {
          title: 'Order modern advertising banners today',
          subTitle:
            'The world of digital marketing is changing, and AI-powered banners are not just a trend, but an effective promotional tool. They attract attention, convey a message, and drive clicks — all with minimal time and budget.',
          text: 'If you need:',
          items: {
            item1: 'attract new customers',
            item2: 'update creatives for a new offer',
            item3: 'conduct A/B testing of different variants',
            item4: 'save budget on design',
            item5: 'quickly launch an advertising campaign',
          },
          footerText:
            'Order AI-powered banner ads right now and get a modern design that delivers results.',
          footerSub:
            'Contact us for a consultation or leave a request - we will respond within 1 business day.',
        },
        faq: {
          title: 'Frequently Asked Questions',
          q1: 'How are AI-created banners better than regular ones?',
          a1: 'AI banners are created faster, cost less and can generate dozens of variations for testing. They combine creativity with analytics for maximum effectiveness.',
          q2: 'What banner formats do you create?',
          a2: 'We create static banners (JPG, PNG), animated (GIF, HTML5), and also adapt to different sizes for different platforms.',
          q3: 'Will the banner be unique?',
          a3: 'Yes, each banner is created from scratch based on your requirements. AI generates unique variations that are then refined by a designer.',
          q4: 'Do I need technical knowledge to order a banner?',
          a4: 'No. You just provide a brief technical specification, and we take care of everything else.',
          q5: 'Can I add my logo or brand colors?',
          a5: 'Of course! We integrate your branding into all banners to maintain style consistency.',
          q6: 'How long does it take to create an AI banner?',
          a6: 'Depends on complexity, but usually 2-24 hours. For complex projects it may take up to 2-3 days.',
          q7: 'Can I test several banner variants?',
          a7: 'Yes! We create several variations for A/B testing so you can choose the most effective option.',
          ctaText: "Didn't find the answer to your question?",
          ctaButton: 'Write to us',
        },
      },
      BrandbookPage: {
        hero: {
          title: 'Brandbook for Your Business — Visual Identity',
          subtitle:
            "In today's competitive environment, it's not enough for companies to simply have a logo. They need to have a holistic, understandable visual identity system. A brand book is a tool that guarantees brand stability at all points of contact with the audience.",
          buttonText: 'Order Brandbook',
          features: {
            uniqueness: 'Uniqueness',
            recognition: 'Recognition',
            effectiveness: 'Effectiveness',
          },
          phoneText: 'COMPANY',
          phoneText2: 'Corporate style',
        },
        whatIs: {
          title: 'What is a Brandbook and Why You Need It',
          subtitle: 'Complete Guide',
          description:
            'A brand book is a document that contains all the rules for the visual and verbal design of a brand. Its main goal is to ensure a single style for the company, regardless of who creates the content: a designer, a marketer, or a contractor.',
          features: {
            systematic: {
              title: 'Systematic Approach',
              description:
                'All brand elements are used consistently, without coincidences. The logo, colors, fonts, and graphic elements form a single whole.',
            },
            professional: {
              title: 'Professionalism',
              description:
                'Your brand looks serious and reliable on all platforms. Customers and partners perceive the company as stable and professional.',
            },
            recognition: {
              title: 'Recognition',
              description:
                'Customers are more likely to remember and trust a brand with a consistent identity. The regularity of visual elements increases loyalty and trust.',
            },
            convenience: {
              title: 'Team Convenience',
              description:
                'Instead of a thousand explanations, you simply send a brand book. Save time and effort when working with contractors and new employees.',
            },
          },
          footerTitle: 'Without a brand book, the brand loses its integrity.',
          footerText:
            "Without a brand book, a brand easily 'falls apart': colors, fonts, and messages lose logic, and the impression of the company loses clarity. It's like an orchestra without a conductor - everyone plays their own melody, but there is no harmony.",
        },
        howItLooks: {
          title: 'What a Ready Brandbook Looks Like',
          subTitle:
            'A ready-made brand book is a structured PDF or interactive document that is easy to understand and convenient to use on a daily basis. It contains not only visual elements, but also explanations of how and where to apply them.',
          sections: {
            titlePage: {
              title: 'Title Page',
              description:
                'Every brandbook starts with a title page that includes the brand name, logo, and document version. It is the first visual point of contact with your brand.',
            },
            visualElements: {
              title: 'Sections with Visual Elements',
              description:
                'Clear sections with logo, color palette, typography, and other visual parameters. Each element is accompanied by usage rules and technical specifications.',
            },
            usageExamples: {
              title: 'Usage Examples',
              description:
                'Layouts for various communication channels: how the brand looks on social networks, on business cards, advertising banners, website pages, and other points of contact with the audience.',
            },
            realScenarios: {
              title: 'Real Application Scenarios',
              description:
                'We provide adaptations for real-world scenarios: how your identity looks on Instagram, in a newsletter, on packaging, or in a presentation for investors — to see how the brand works in action.',
            },
          },
          mockup: {
            companyName: 'COMPANY',
            companyType: 'Corporate Style',
            brandStyle: 'Corporate Style of "BRAND" Company',
            versionText: 'Version',
            textItem1: 'Logo usage options:',
            textItem2: 'Examples of using the style:',
            logo: {
              title: 'Logo',
              subtitle: 'Main element of corporate style',
            },
            colors: {
              title: 'Color Palette and Typography',
              subtitle: 'Unified style in all communications',
            },
            fonts: {
              montserrat: 'Montserrat (headings)',
              openSans: 'Open Sans (main text)',
            },
            examples: {
              businessCard: 'Business Card',
              website: 'Website',
              banner: 'Banner',
            },
          },
        },
        process: {
          title: 'How We Create a Brandbook — Work Stages',
          subTitle:
            'Creating a brand book is a clearly structured process that includes analysis, design, and coordination of all components of the brand style. We work transparently and in stages so that you get not just a beautiful presentation, but an effective tool for your business.',
          steps: {
            step1: {
              title: 'Briefing and Analysis',
              description:
                'We study your business, competitors, target audience, market and brand values. We collect everything you need to create a unique style. We analyze trends in your industry and create a detailed report with recommendations for your future identity.',
            },
            step2: {
              title: 'Visual Style Concept',
              description:
                'We develop several logo options, select a color palette, fonts, and form an initial identity. You choose the most successful direction. We present concepts, explain the idea and symbolism of each element. We help you choose the best option.',
            },
            step3: {
              title: 'Brand System Creation',
              description:
                'After approving the concept, we prepare a full package of visual solutions: rules for using the logo, fonts, colors, graphic elements, templates, etc. We create a harmonious system where each element complements the other and works towards a single brand idea.',
            },
            step4: {
              title: 'Guidelines Development and Final Document',
              description:
                'We organize everything into a structured document with examples of use. If necessary, we add recommendations on the tone of communication and style of visual content. We think through the structure of the document so that it is easy to use for both your team and contractors.',
            },
            step5: {
              title: 'Brandbook Handover and Consultations',
              description:
                'You receive the final brand book in a convenient format (PDF, Figma or other). We explain how to use it and answer all your questions. We provide consulting support when implementing a new corporate identity and help resolve any issues.',
            },
          },
          footerText:
            "We don't just design — we build a system that strengthens your brand for years to come.",
        },
        whyUs: {
          title: 'Why You Should Order a Brandbook from Us',
          subTitle:
            "We don't create template documents, but living brand books that actually work to develop your business. Our approach is a combination of a deep understanding of marketing, design, and strategy.",
          advantages: {
            individual: {
              title: 'Individual Approach',
              description:
                "We don't copy other people's solutions. Each brandbook is a unique system, created specifically for your brand, market and goals. We study the specifics of your business and create a design that reflects its essence.",
            },
            experience: {
              title: 'Experience and Expertise',
              description:
                'Our portfolio includes dozens of projects for small businesses, startups, online services, manufacturing, and infobusiness. Our team has expertise in various industries, which allows us to create effective visual solutions.',
            },
            comprehensive: {
              title: 'Comprehensive Approach',
              description:
                "We don't just draw a logo, we create a complete visual language that works in any environment - from social media to packaging. All brand elements are interconnected and complement each other.",
            },
            deadlines: {
              title: 'Clear Deadlines',
              description:
                'We adhere to deadlines and always inform you about the status of the project. You will know at what stage the work is, and you will receive the finished brand book exactly on time without delays and missed deadlines.',
            },
            support: {
              title: 'Post-Delivery Support',
              description:
                'Even after the work is completed, we are in touch and ready to help with clarifications or adaptations. We do not disappear after receiving payment, but remain your partner and brand consultant.',
            },
          },
          footerText:
            'Our goal is not just to “design,” but to strengthen your brand and help it grow.',
        },
        target: {
          title: 'Who Brandbook is Suitable For',
          subTitle:
            'A brand book is a universal tool that is needed not only by large companies. It is useful for any business that seeks to appear holistic and professional.',
          categories: {
            startups: {
              title: 'Startups',
              badge: 'Perfect',
              des: 'At the start, it is important to form a strong, consistent image to quickly occupy your niche. A brand book will help a startup create a recognizable style from the very first steps.',
              benefits: {
                item1: 'Formation of clear identity from the very beginning',
                item2: 'Professional appearance for investors and clients',
                item3: 'Faster integration of new team members',
              },
            },
            rebranding: {
              title: 'Companies at Rebranding Stage',
              des: 'If you update your style or change your positioning, a brand book will solidify the new identity and ensure a consistent transition.',
              benefits: {
                item1:
                  'Clear instructions for gradual updating of all materials',
                item2: 'Prevention of mixing old and new style elements',
                item3: 'Rules for the rebranding transition period',
              },
            },
            smb: {
              title: 'Small and Medium Business',
              des: 'To compete with the big players, you need to have a professional appearance in every touch with the customer, regardless of the size of your company.',
              benefits: {
                item1: 'Look on par with large companies',
                item2: 'Savings on design thanks to ready-made templates',
                item3: 'Systematic communication with clients',
              },
            },
            education: {
              title: 'Educational and Creative Projects',
              des: 'Identity helps clearly convey ideas and enhances communication. Especially important for projects where the visual component is closely related to the essence.',
              benefits: {
                item1: 'Emphasizing the uniqueness of your approach',
                item2: 'Systematic presentation of visual content',
                item3: 'Additional value of the creative product',
              },
            },
            remote: {
              title: 'Teams with Remote Contractors',
              des: 'The brand book provides clear instructions on how to work with style, regardless of who is doing the work and where it comes from.',
              benefits: {
                item1: 'Unified standards for all performers',
                item2: 'Quick onboarding of new designers and marketers',
                item3: 'Preserving brand integrity when changing contractors',
              },
            },
          },
          footerText:
            'A brand book is not an "option", but a basic tool for sustainable growth and brand recognition, regardless of the size of your business.',
        },
        cta: {
          title: 'Order a brand book today - make your brand recognizable',
          description:
            'If you want your brand to inspire trust, look professional and be easily memorable — a brandbook will become a reliable foundation. This is an investment in stability, recognition and growth.',

          subtitle1:
            'We are ready to create a brand book for you that speaks the language of your business;',
          subtitle2: 'looks modern and consistent',
          subtitle3:
            'works equally effectively in digital and offline environments.',
          buttonText: 'Leave Application',
          additionalText:
            'Leave an application, and we will contact you for a short briefing. In just a few weeks, you will receive a powerful tool that will make your brand stronger.',
        },
        faq: {
          title: 'Frequently Asked Questions',
          q1: 'What is a brandbook?',
          a1: 'A brandbook is a set of rules for using visual and verbal elements of your brand to ensure its unity and recognition.',
          q2: 'Why do I need a brandbook if I have a logo?',
          a2: 'A logo is only part of a brand. A brandbook defines how to use the logo, colors, fonts and other elements to create a unified style.',
          q3: 'What elements are included in a brandbook?',
          a3: 'A brandbook includes logo, color palette, fonts, graphic elements, usage rules and other important aspects of communication.',
          q4: 'Do I need to update the brandbook over time?',
          a4: 'Yes, a brandbook may require updates, especially during rebranding or changes in company strategy.',
          q5: 'How long does it take to create a brandbook?',
          a5: 'Usually creating a brandbook takes from 2 to 4 weeks, depending on the complexity of the project.',
          q6: 'Can I use a brandbook for different formats, such as social networks and advertising?',
          a6: 'Yes, a brandbook contains rules for all types of communications, including social networks, advertising and web design.',
          q7: 'Do I need special skills to use a brandbook?',
          a7: 'No, a brandbook is designed for all team members — from designers to marketers. It provides clear instructions for each brand element.',
          ctaText: "Didn't find the answer to your question?",
          ctaButton: 'Write to us',
        },
      },
      webDesign: {
        // Hero Section
        heroTitle: 'Web Design: Creating a Unique Digital Image',
        heroDescription:
          'Professional web design is not just a beautiful picture, but an effective communication tool. Quality design forms first impressions, builds trust and directly affects the effectiveness of the site.',
        orderDesignButton: 'Order Design',
        adaptability: 'Adaptability',
        creativity: 'Creativity',
        conversion: 'Conversion',

        // About Section
        whatIsWebDesign: 'What is Web Design?',
        aboutDescription1:
          'Web design is the process of creating the appearance and interface of a website that combines visual appeal and user convenience. Its main goal is to make interaction with the resource simple, pleasant and effective.',
        aboutDescription2:
          'Modern web design performs several key functions: increases brand recognition, builds trust in the company and ensures a positive user experience (UX). Current trends include responsiveness (adaptation to different devices), minimalism in design, as well as the use of animations and interactive elements to engage attention.',

        // Function Cards
        brandingTitle: 'Branding and Recognition',
        brandingText:
          'Quality web design emphasizes the uniqueness of your brand, reflects its values and stands out among competitors.',
        uxTitle: 'User Experience (UX)',
        uxText:
          'Convenient navigation, intuitive interface and logical structure ensure comfortable interaction of visitors with the site.',
        businessGoalsTitle: 'Achieving Business Goals',
        businessGoalsText:
          'Effective design guides users to target actions: orders, form filling, subscriptions, calls and other conversion actions.',

        // Importance Section
        whyImportantTitle: 'Why is Web Design Important for Your Business?',
        importanceIntro:
          'A website is often the first thing a potential client encounters. Quality design builds trust and turns visitors into clients.',

        // Stats
        seconds: 'seconds',
        firstImpressionTime:
          'Time it takes to form a first impression of the site and company',
        users: 'users',
        leaveSite: 'Leave the site if the design is unattractive or outdated',
        toConversion: 'to conversion',
        qualityDesignAdds:
          'Quality design with thoughtful user experience adds',

        // Benefits
        firstImpressionTitle: 'First Impression',
        firstImpressionText:
          'If the design looks outdated or inconvenient, the user will quickly leave the page. Quality web design forms a positive first impression and increases the level of trust in the company.',
        userExperienceTitle: 'User Experience',
        userExperienceText:
          'Convenient navigation, logical structure and fast page loading directly affect user behavior and conversion. An intuitive interface holds attention and pushes to target actions.',
        seoTitle: 'SEO Promotion',
        seoText:
          'Search engines consider site interaction metrics: time spent, viewing depth, mobile optimization. Modern design is also a contribution to SEO promotion and organic visibility.',
        imgText: 'Order',

        // Services Section
        ourServicesTitle: 'Our Web Design Services',
        servicesDescription:
          'We offer a full range of website design services — from concept creation to full project implementation, taking into account all modern trends and requirements.',

        // Service Cards
        createFromScratchTitle: 'Creating Website Design from Scratch',
        createFromScratchText:
          'We develop individual design that reflects the values of your brand. We start with a concept, form the structure (Wireframes) and create a visual style that harmoniously combines aesthetics with functionality.',
        createFromScratchFeatures: {
          item1: 'Concept development and prototypes',
          item2: 'Creating unique visual style',
          item3: 'UX/UI design of all interface elements',
          item4: 'Preparing layouts for developers',
        },

        restylingTitle: 'Restyling Existing Websites',
        restylingText:
          "Your site looks outdated or doesn't bring results? We will update the design according to modern requirements, improve the structure, make the interface more convenient and attractive for the user.",
        restylingFeatures: {
          item1: 'Analysis of current design shortcomings',
          item2: 'Updating visual style',
          item3: 'Improving structure and navigation',
          item4: 'Optimization of conversion paths',
        },

        responsiveTitle: 'Responsive Design',
        responsiveText:
          'We create interfaces that display correctly on smartphones, tablets and desktops. This guarantees convenience of use from any device and positively affects behavioral factors.',
        responsiveFeatures: {
          item1: 'Optimization for all types of devices',
          item2: 'Flexible layouts and interface elements',
          item3: 'Content adaptation for different resolutions',
          item4: 'Testing on all popular devices',
        },

        ecommerceTitle: 'Design for eCommerce',
        ecommerceText:
          'We develop UX/UI design for online stores taking into account buyer behavior. We optimize the user path to purchase to increase conversion and average check.',
        ecommerceFeatures: {
          item1: 'Designing convenient catalogs and filters',
          item2: 'Development of converting product cards',
          item3: 'Optimization of the order process',
          item4: 'Integration with payment systems',
        },

        additionalServicesTitle: 'Additional Services',
        additionalServicesText:
          'We offer design of landing pages, blogs, corporate websites, as well as preparation of graphic elements: banners, icons, presentations. We work with ready-made CMS or in partnership with developers.',
        additionalServicesFeatures: {
          item1: 'Design of banners and advertising materials',
          item2: 'Creating icons and graphic elements',
          item3: 'Interface design for CMS',
          item4: 'UX audit of existing projects',
        },

        // Benefits Section
        advantagesTitle: 'Benefits of Working With Us',

        // Benefit Cards
        experiencedTeamTitle: 'Experienced Team',
        experiencedTeamText:
          'Our designers have practical experience in creating projects for various niches — from small business to eCommerce platforms.',
        expertise: 'Expertise',

        modernToolsTitle: 'Modern Tools and Technologies',
        modernToolsText:
          'We work with Figma, Adobe XD, Sketch, follow the latest web design and UI/UX standards.',
        innovation: 'Innovation',

        individualApproachTitle: 'Individual Approach',
        individualApproachText:
          'Each project is unique. We take into account business goals, market specifics and target audience preferences.',
        clientOriented: 'Client-Oriented',

        uniqueDesignTitle: 'Guarantee of Unique Design',
        uniqueDesignText:
          'No templates — only original solutions created specifically for your brand.',
        originality: 'Originality',

        uxStandardsTitle: 'Compliance with UX/UI Standards',
        uxStandardsText:
          'Design is not only attractive, but also convenient. We test prototypes and optimize the interface for maximum efficiency.',
        efficiency: 'Efficiency',

        timelyDeliveryTitle: 'Timely Delivery',
        timelyDeliveryText:
          'We adhere to agreed terms and ensure smooth workflow. You always know at what stage your project is.',
        punctuality: 'Punctuality',

        // CTA Section
        ctaTitle: 'Order Web Design That Brings Results',
        ctaDescription:
          'Professional web design is not just an expense, but an investment in the growth of your business. A well-designed site attracts more visitors, converts more leads and helps your business stand out among competitors in the digital space.',
        orderConsultationButton: 'Order Free Consultation',

        // FAQ Section
        faqTitle: 'FAQ',
        faqNotFound: "Didn't find the answer to your question?",
        writeToUsButton: 'Write to Us',

        // FAQ Questions and Answers
        faqData: {
          question1: 'What is web design and why is it important for a brand?',
          answer1:
            'Web design is the process of creating the appearance and functionality of a website. It forms the first impression of the brand, affects user trust and encourages interaction with your product or service.',

          question2: 'What elements form a unique digital brand image?',
          answer2:
            'These are brand colors, typography, logo, illustrations, interface style, site structure and general visual language that emphasizes the individuality of your brand.',

          question3:
            'What is the difference between template and individual web design?',
          answer3:
            'Template design is ready-made solutions with limited customization options. Individual web design is created from scratch for the needs of a specific business, ensuring maximum brand compliance and uniqueness.',

          question4: 'How does web design affect user behavior?',
          answer4:
            'Well-thought-out design facilitates navigation, speeds up decision-making, increases time spent on the site and reduces bounce rate, which directly affects conversions.',

          question5: 'How long does it take to create a unique web design?',
          answer5:
            'Depending on the complexity of the project, development of a unique design can take from 2 to 8 weeks. This is influenced by the number of pages, functionality, client participation in the process.',

          question6:
            'Is mobile adaptation taken into account during design creation?',
          answer6:
            'Yes, responsive design is a mandatory standard. The site should be convenient and functional on all devices — smartphones, tablets and PCs.',

          question7:
            'How to maintain the integrity of the digital brand image after the site launch?',
          answer7:
            "It is important to follow the brand guidelines, use a unified style in all digital channels, update content according to the brand's tone of voice and regularly conduct UX/UI audits.",
        },

        // Modal
        modalTitle: 'Order Web Design',
        modalSubtitle:
          'Leave a request and we will contact you to discuss project details',

        // Mock content
        yourBrand: 'Your Brand',
        order: 'Order',
      },
      uxUiDesignPage: {
        // Hero Section
        heroTitle:
          'UX/UI design for business — we create convenient and effective digital interfaces',
        heroDescription:
          'UX/UI design is not just about aesthetics, but a strategic tool that turns visitors into clients. We create interfaces that increase conversion, usability, and customer loyalty.',
        orderDesignButton: 'Order UX/UI design',
        featureIntuitive: 'Intuitiveness',
        featureUserOriented: 'User-oriented',
        featureEffective: 'Effectiveness',
        // Philosophy Section
        philosophyTitle: 'Thoughtful design that works for results',
        philosophyResearch: 'Research',
        philosophyResearchDesc:
          'Analysis of user needs, competitors, and business requirements. Identifying problems and opportunities to improve interaction.',
        philosophyDesign: 'Design',
        philosophyDesignDesc:
          'Development of visual style, UI components, and detailed elaboration of all screens with attention to detail.',
        philosophyPrototyping: 'Prototyping',
        philosophyPrototypingDesc:
          'Creating information architecture, user scenarios, and prototypes of various detail levels.',
        philosophyTesting: 'Testing',
        philosophyTestingDesc:
          'Usability testing, analysis of behavioral metrics, and iterative improvement based on real data.',
        philosophyApproach: 'Our approach',
        philosophyApproachText1:
          'Our team creates not just beautiful interfaces, but holistic digital ecosystems that take into account user psychology, business goals, and technical capabilities.',
        philosophyApproachText2:
          'We use a data-driven approach, collecting and analyzing data at every stage of the design process. This allows us to make informed decisions and create interfaces that are not only aesthetically pleasing but also as effective as possible.',
        philosophyAdvantage1: 'Increased conversion and engagement',
        philosophyAdvantage2: 'Reduced user churn',
        philosophyAdvantage3: 'Faster achievement of business goals',
        philosophyResult:
          'The result is a digital product that is intuitive, aesthetically pleasing, technically perfect, and, most importantly, effectively solves business problems.',

        //Approach to UX/UI design — functionality, logic, aesthetics
        approachTitle:
          'Approach to UX/UI design — functionality, logic, aesthetics',
        approachText:
          'Our approach to UX/UI design is based on global best practices for creating interfaces that work equally well for both users and businesses. We offer solutions that are based on real data and research.',
        items1: {
          title: 'User and competitor research',
          text: 'We analyze the behavior of the target audience and the competitive environment to develop effective UX/UI solutions.',
          item1: 'Interview',
          item2: 'Data analysis',
          item3: 'User profiling',
          item4: 'Audience',
          item5: 'Analytics',
          item6: 'Competitors',
          item7: 'Scenarios',
        },
        items2: {
          title: 'UX architecture and prototyping',
          text: 'We design logical structures and interaction scenarios to create intuitive navigation and a user-friendly interface.',
          item1: 'Custom flows',
          item2: 'Wireframes',
          item3: 'Prototypes',
        },
        items3: {
          title: 'Brand-style UI design',
          text: 'We develop visual elements in accordance with your corporate identity, ensuring accessibility and consistency of the user experience.',
          item1: 'Visual design',
          item2: 'Accessibility',
          item3: 'Components',
        },
        items4: {
          title: 'Testing, UX optimization and transfer to development',
          text: 'We test our solutions with real users, optimize them for a seamless experience, and prepare files for the frontend team.',
          item1: 'Usability testing',
          item2: 'Optimization',
          item3: 'Documentation',
        },

        // Business Benefits Section
        benefitsTitle: 'What UX/UI design gives your business',
        benefitsSubtitle:
          'By ordering UX/UI design from us, you get not just a beautiful picture — but a full-fledged tool for business growth.',
        benefit1Title: 'Clear interface for users',
        benefit1Text:
          'Minimum unnecessary — maximum convenience. Every element has logic and meaning.',
        benefit2Title: 'Adaptivity and cross-browser compatibility',
        benefit2Text:
          'The interface works correctly on smartphones, tablets, and any screen resolutions.',
        benefit3Title: 'Increased conversion',
        benefit3Text:
          'Intuitive navigation and competent UX structure contribute to achieving target actions.',
        benefit4Title: 'Unique visual style',
        benefit4Text:
          'Design that reflects your brand’s character and distinguishes you from competitors.',
        benefit5Title: 'Design system and guidelines',
        benefit5Text:
          'Complete documentation that simplifies further development, scaling, and support.',
        benefitsCta:
          'The goal of UX/UI is not only aesthetics, but also business results expressed in numbers.',
        benefitsCtaButton: 'Order UX/UI design',
        // Solutions Section
        solutionsTitle:
          'Examples of UX/UI design solutions — typical tasks we solve',
        solutionsSubtitle:
          'We create design for various niches and business formats. Here are the tasks we most often solve:',
        solution1Type: 'UX/UI for corporate websites',
        solution1Feature1: 'Clear structure',
        solution1Feature2: 'Strong visual accents',
        solution1Feature3: 'Clear navigation for different target groups',
        solution1Result: 'Result:',
        solution1ResultItem: 'brand reputation + trust from the first click',
        solution2Type: 'UX/UI for online stores',
        solution2Feature1: 'Convenient catalog',
        solution2Feature2: 'Optimized checkout',
        solution2Feature3: 'Mobile adaptation focused on speed',
        solution2Result: 'Result: ',
        solution2ResultItem:
          'increased conversion and reduced cart abandonment',
        solution3Type: 'UX/UI for startups and MVP',
        solution3Feature1: 'Quick prototype for testing',
        solution3Feature2: 'Minimalistic UI with MVP logic',
        solution3Feature3: 'Scalability',
        solution3Result: 'Result: ',
        solution3ResultItem:
          'fast market entry with a quality first impression',
        solution4Type: 'UX/UI for mobile applications',
        solution4Feature1: 'Icons, gestures, micro-animation',
        solution4Feature2: 'UX models for iOS/Android',
        solution4Feature3: 'User scenario testing',
        solution4Result: 'Result: ',
        solution4ResultItem: 'user engagement and positive experience',
        solutionsCta: 'Get a UX/UI solution that fits your business',
        solutionsCtaButton: 'Discuss the project',
        // Testimonials Section
        testimonialsTitle: 'What clients say about our UX/UI design',
        testimonialsDescription:
          'We work with businesses that care not just about a beautiful interface, but about results. Here’s what they write to us after launch:',
        testimonial1Text:
          'After the site redesign, user time on site increased by 1.5 times. The design looks modern, but most importantly — everything is logical and works as it should.',
        testimonial1Author: 'Founder of an IT company',
        testimonial2Text:
          'It was a pleasure to work: they quickly understood what we wanted and offered solutions we hadn’t thought of ourselves. The new design really simplified the client’s path to the application.',
        testimonial2Author: 'Head of marketing in the service sector',
        testimonial3Text:
          'We received not just layouts, but a complete design system. The team strictly adhered to deadlines and provided technical support after project handover.',
        testimonial3Author: 'CEO of an eCommerce brand',
        testimonialsCtaButton: 'Join the clients',
        // FAQ Section
        faqTitle: 'FAQ',
        faqData: {
          question1: '1. What is the difference between UX and UI design?',
          answer1:
            'UX (User Experience) is responsible for the logic, structure, and usability of the interface. UI (User Interface) — for the visual design: colors, fonts, styles, buttons. Both directions work together to achieve the perfect user experience.',
          question2: '2. Is it necessary to do UX research?',
          answer2:
            'Yes. Without analyzing user behavior and project goals, the design may be aesthetic but ineffective. UX research is the foundation of functionality.',
          question3: '3. How long does UX/UI design take?',
          answer3:
            'On average, from 2 to 6 weeks, depending on the project scope. If you need it faster — we consider phased work or an accelerated MVP launch.',
          question4: '4. Do you adapt the design for mobile devices?',
          answer4:
            'Yes, mobile adaptation is a standard part of every project. We create responsive design for all key device types.',
          question5:
            '5. Do you work with an existing site or only from scratch?',
          answer5:
            'We can conduct a UX audit of an existing resource, suggest a redesign, or work from scratch. It all depends on your goals.',
          question6:
            '6. What result will I get after the project is completed?',
          answer6:
            'You will receive ready-made design layouts in Figma (or another convenient format), a guideline for developers, and, if necessary, consultation during implementation.',
          question7: '7. What is needed to start cooperation?',
          answer7:
            'Send a short description of your project or contact us for a briefing. We will clarify the tasks, offer an approach, and calculate the cost.',
        },
        faqCta: 'Have additional questions about UX/UI design?',
        faqCtaButton: 'Contact us',
      },
      typographyLetteringPage: {
        // Hero Section
        heroTitle: "Typography and Lettering — your brand's unique style",
        heroDescription:
          "Typography and lettering are not just about text styling. They are a powerful communication tool that forms the first impression of a brand. The right choice of fonts and custom word design can emphasize the company's character, convey its values, and inspire trust.",
        orderButton: 'Order development',
        feature1: 'Uniqueness',
        feature2: 'Expressiveness',
        feature3: 'Individuality',

        // Typography Importance
        importanceTitle: 'The importance of typography for branding',
        whatIsTypography: 'What is typography?',
        whatIsTypographyText1:
          "Typography is the art and technique of arranging, selecting, and styling text to convey ideas and create an impression. It's how text looks, feels, and is perceived, and it's an integral part of design and communication.",
        whatIsTypographyText2:
          'Good typography creates hierarchy, sets the tone, mood, and atmosphere, and also creates a recognizable brand image for your company, making it easily memorable for the audience.',
        influenceTitle: 'Impact on the brand',
        influenceText:
          "Properly chosen typography does more than just convey information. It shapes the perception of your brand and can influence your clients' decision-making.",
        influenceList1: 'Forms the non-verbal communication of your brand',
        influenceList2: 'Creates and strengthens brand identity',
        influenceList3: 'Builds information hierarchy and improves readability',
        influenceList4: 'Evokes an emotional response from the audience',
        influenceConclusion:
          "Choosing typography is a strategic decision that should reflect your brand's values and positioning, resonate with your target audience, and set you apart from competitors.",
        item1: 'Technological',
        item2: 'Creative',
        item3: 'Premium',
        item4: 'Benevolent',

        // Lettering Section
        letteringArtTitle: 'Lettering as the art of individual style',
        letteringDiffTitle: 'How is lettering different from fonts',
        letteringDiffText1:
          'A font is a ready-made set of characters. Lettering is individually drawn letters. It is not repeated, created for a specific word, project, or logo. This is a maximally personalized element that cannot be copied or forged.',
        letteringDiffText2:
          'Lettering is appropriate when a unique accent is needed — in the brand name, logo, packaging, poster. It adds character and a living emotion that a standard font cannot provide.',
        letteringFeature1: 'Uniqueness',
        letteringFeature2: 'Emotionality',
        letteringFeature3: 'Originality',
        letteringVsTitle: 'Font vs Lettering',
        itemLettering1: 'Type',
        itemLettering2: 'Brand',
        itemLettering3: 'Identical symbols',
        itemLettering4: 'Lettering',
        itemLettering5: 'Brand',
        itemLettering6: 'Unique, hand-drawn symbols',
        itemLettering7: 'Application:',
        itemLettering8: 'Logos and headers',
        itemLettering9: 'Packaging and labels',
        itemLettering10: 'Posters and signs',
        itemLettering11: 'Book covers',
        letteringVsSubtitle: 'Visual comparison',
        letteringShowcaseTitle: 'Lettering examples',
        letteringCta: 'Want to create unique lettering for your project?',
        letteringCtaButton: 'Order lettering',

        // Methodology Section
        methodologyTitle: 'Our approach to typography and lettering',
        methodologyStep1Title: 'Brand and target audience analysis',
        methodologyStep1Text:
          "Before creating a typographic system or lettering, we study the brand: its positioning, values, target audience, and competitors' visual solutions. This allows us to work in context and create relevant, not random, elements.",
        methodologyStep1Point1: 'Audience analysis',
        methodologyStep1Point2: 'Competitor analysis',
        methodologyStep1Point3: 'Font pair selection',
        methodologyStep2Title:
          'Style selection: classic, minimalism, experiment',
        methodologyStep2Text:
          'Depending on the tasks, we choose the style: grotesque or serif, minimalism or elaborate design. Classic solutions add solidity, experimental ones make you stand out among competitors.',
        methodologyStep2Option1: 'Classic',
        methodologyStep2Option11:
          'for brands focused on reliability and prestige',
        methodologyStep2Option2: 'Minimalism',
        methodologyStep2Option22: 'for modern tech brands',
        methodologyStep2Option3: 'Experiment',
        methodologyStep2Option33:
          'for creative industries and brands that want to go beyond',
        methodologyStepTextItem:
          'Style is not defined by fashion, but by purpose: what reaction a visual solution should evoke.',
        methodologyStep3Title: 'Consistency with the overall brand design',
        methodologyStep3Text:
          'Typography and lettering do not exist in isolation. They are woven into the identity — logo, colors, layouts. We achieve complete visual integrity. Everything looks harmonious, logical, and stylish on all media — from the website to offline materials.',
        methodologyStepItem1: 'Web',
        methodologyStepItem2: 'Printing industry',
        methodologyStepItem3: 'Mobile',

        // Benefits Section
        benefitsTitle: 'Benefits of professional typography and lettering',
        benefit1Title: 'Increased recognition',
        benefit1Text:
          'Unique typography makes the brand recognizable even without a logo. It creates visual associations that stick in memory. One font — and the user remembers you.',
        benefit2Title: 'Brand uniqueness',
        benefit2Text:
          'We create non-standard solutions — lettering or custom typography that are not available in template generators. Your brand gets its own visual language.',
        benefit3Title: 'Better visual perception',
        benefit3Text:
          'Quality typography improves readability, structures content, and directs attention. This is especially critical in interfaces, presentations, and advertising.',
        benefitItem1: 'Logotype',
        benefitItem2: 'Typography',
        benefitItem3: 'Recognition',
        benefitItem4: 'Template',
        benefitItem5: 'Custom',
        benefitItem6: 'To',
        benefitItem7: 'After',

        // Workflow Section
        workflowTitle:
          'How we work — an example of our approach to each project',
        workflowDescription:
          'Each brand is a separate story, so we do not use templates. Our approach is a combination of analytics, design expertise, and attention to detail. We do not just select fonts — we form a typographic system that works for brand identity.',
        workflowTextItem: 'Process',
        workflowStep1: {
          title: 'Briefing and initial immersion',
          description:
            'We start with a deep understanding of your business: who you are, what makes you different, who your audience is, and what style you want to communicate with them in. We study your products, services, brand mission, and existing visual elements.',
          items: {
            item1: 'Brand analysis',
            item2: 'Competitor research',
            item3: 'Target audience research',
            item4: 'Technical requirements',
            item5: 'Products/services',
          },
        },
        workflowStep2: {
          title: 'Market and competitor analysis',
          description:
            "We research the environment your brand operates in. We study competitors' visual solutions, font trends in your niche, and analyze typical approaches to avoid repetition and create distinction.",
          items: {
            item1: 'Competitor A',
            item2: 'Competitor Б',
            item3: 'Competitor В',
          },
        },
        workflowStep3: {
          title: 'Concept development',
          description:
            'At this stage, we offer several directions: typographic pairs, style references, lettering options. If necessary, we create sketches of handwritten solutions that emphasize individuality.',
        },
        workflowStep4: {
          title: 'Design and testing',
          description:
            'We create the final version of typography or lettering, check how it looks in real scenarios: in a logo, on a website, in mockups, on social networks. We take into account adaptability and readability on different media.',
        },
        workflowStep5: {
          title: 'Coordination and preparation of final materials',
          description:
            'After approval, we transfer all necessary files — in formats for printing and digital use. Upon request, we prepare a mini-guideline or instructions on the correct use of fonts or lettering.',
          textItem: 'Guideline',
        },

        // Order Section
        orderTitle: 'How to order the service',
        orderSubtitle: 'Stages of cooperation',
        orderDescription:
          'We have made the process as convenient as possible for the client — without unnecessary bureaucracy, but with full quality control at every stage.',
        orderStep1: {
          title: 'Application',
          description:
            'Leave a request via the form on the website or send an email with a brief description of the task. We will respond within one business day.',
        },
        orderStep2: {
          title: 'Discussion of the problem',
          description:
            'We ask clarifying questions, discuss expectations, style, and scope of work. If necessary, we send a short brief to fill out.',
        },
        orderStep3: {
          title: 'Commercial offer',
          description:
            'We create a clear offer with cost, terms, and scope. You understand exactly what you will get, how much it costs, and when it will be ready.',
        },
        orderStep4: {
          title: 'Start of work',
          description:
            'After agreeing on the terms, we sign a contract or confirmation of the start. The development phase begins: research, concepts, sketches.',
        },
        orderStep5: {
          title: 'Interim approval',
          description:
            'During the draft decisions stage, we show interim options to agree on direction and make adjustments before finalization. You are involved in the process.',
        },
        orderStep6: {
          title: 'Completion and transfer of the result',
          description:
            'You receive all the files in convenient formats, as well as explanations on how to use them. Once completed, you are left with a visual asset that works for your brand.',
        },

        // FAQ Section
        faqTitle: 'FAQ',
        faqData: {
          question1: 'Can I use one font for all brand media?',
          answer1:
            'No, usually a typographic system is created from several fonts — main, accent, and auxiliary. They perform different functions: headings, body text, captions, etc. This provides flexibility and maintains style unity.',
          question2: 'Do I need to buy licenses for fonts?',
          answer2:
            'Yes, if you use commercial fonts. We always select fonts taking into account usage rights — from open libraries or with a clear license. Free fonts are not always high-quality or unique.',
          question3:
            'What is the advantage of custom lettering compared to a logo based on a font?',
          answer3:
            'Custom lettering is created from scratch and takes into account the shape, rhythm, and uniqueness of the brand name. This ensures absolute exclusivity. A font-based logo is faster, but not always distinctive enough from competitors.',
          question4:
            'Can I get the font in a format for installation on my computer?',
          answer4:
            'Yes, if a custom font is developed or the selected typography includes downloadable files. You will receive files in OTF/TTF/WOFF formats + installation and usage instructions.',
          question5:
            'Can I order only lettering without a full corporate style?',
          answer5:
            'Of course. Lettering is a separate service. It can be used as an accent on packaging, posters, merchandise, or even on social networks. We adapt the result to your tasks.',
          question6: 'How long does it take to create typography or lettering?',
          answer6:
            'On average — from 5 to 15 working days, depending on complexity. Simple font selection is faster. Unique lettering or a system with fonts for different media requires more time for research and detail development.',
        },
        faqCta: 'Have additional questions about typography or lettering?',
        faqCtaButton: 'Contact us',
      },
      brandingPage: {
        // Hero Section
        heroTitle:
          'Corporate identity development — the visual DNA of your business',
        heroDescription:
          "Identity is not just a logo or colors. It's a visual language that conveys your character, values, and mood to the audience. We create a corporate style that works for you — every element enhances recognition and distinguishes the brand among competitors.",
        orderButton: 'Order development',
        feature1: 'Uniqueness',
        feature2: 'Recognition',
        feature3: 'Systematic',

        // About corporate identity
        aboutTitle: 'What is corporate identity and why do you need it',
        elementsTitle: 'Key elements of identity',
        elementsDescription:
          'Corporate identity is a set of visual solutions that form a holistic perception of the brand. It includes:',
        elementLogoTitle: 'Logo and its variations',
        elementLogoDesc:
          'A unique graphic symbol for instant brand identification',
        elementPaletteTitle: 'Color palette',
        elementPaletteDesc:
          'Characteristic colors that evoke the right emotions and associations',
        elementTypographyTitle: 'Fonts and typographic grid',
        elementTypographyDesc: 'Text styling for consistent communication',
        elementIconsTitle: 'Icons, patterns, illustrations',
        elementIconsDesc:
          'Graphic elements that complement the overall concept',
        elementGuideTitle: 'Guideline or brandbook',
        elementGuideDesc:
          'A complete document with standards for using all brand elements for different media — from business cards to digital campaigns',

        // Impact of corporate identity
        impactTitle: "How style affects the company's image",
        impactDescription:
          'Corporate identity is the first impression formed even before getting to know the product. Quality style:',
        impact1: 'Company values',
        impact2: 'Customer trust',
        impact3: 'Emotional connection',
        impact4: 'Recognition',

        impactList1Title: 'Emphasizes company values',
        impactList1Desc:
          "The visual language conveys the brand's philosophy and emphasizes its key values to the audience.",
        impactList2Title: 'Builds trust and a professional image',
        impactList2Desc:
          'Quality design demonstrates attention to detail and professionalism at all levels of interaction.',
        impactList3Title: 'Creates an emotional connection with the client',
        impactList3Desc:
          'A harmonious visual style evokes the right emotions and builds a strong connection with the audience.',
        impactList4Title:
          'Promotes recognition in offline and online environments',
        impactList4Desc:
          'A unified style ensures instant brand recognition regardless of the communication channel.',

        // Services
        servicesTitle:
          'What is included in the corporate identity development service',
        serviceLogoBadge: 'Brand foundation',
        serviceLogoTitle: 'Logo',
        serviceLogoDesc:
          'We create an original sign that conveys the essence of the brand. We offer several concepts and adapt the logo for different formats — from a mobile app to a billboard.',
        servicePaletteBadge: 'Emotional impact',
        servicePaletteTitle: 'Color palette',
        servicePaletteDesc:
          'We select colors that match the emotional tone of the brand, taking into account color psychology, contrast, and practicality for use on different backgrounds.',
        serviceTypographyBadge: 'Text communication',
        serviceTypographyTitle: 'Fonts and typography',
        serviceTypographyDesc:
          'We form a typographic system: main and accent fonts, heading styles, sizes, and line spacing. We ensure readability and consistency in visual communications.',
        serviceGuideBadge: 'Usage standards',
        serviceGuideTitle: 'Guideline (brandbook)',
        serviceGuideDesc:
          'We prepare a document with clear rules for using all style elements. This ensures the integrity of the visual image regardless of who does the design in the future.',

        // Approach
        approachTitle: 'Our approach to creating identity',
        approachStep1Title: 'Briefing and market research',
        approachStep1Desc:
          'We start with a dialogue. We study the brand, its audience, values, competitors. We analyze the market, determine positioning. This forms the basis for a design that is not just beautiful, but strategically accurate.',
        approachStep2Title: 'Concept and idea',
        approachStep2Desc:
          "We don't draw at random. All style elements are subordinated to the idea — the brand's visual metaphor. It can be a shape, symbol, movement character, associative series. As a result, an identity is born that speaks without words.",
        approachStepItem1: 'Audience',
        approachStepItem2: 'Values',
        approachStepItem3: 'Competitors',
        approachStepItem4: 'Positioning',

        // Benefits
        benefitsTitle: 'Business benefits',
        benefitsIntro:
          'A strong visual identity is more than aesthetics. It is a tool for strategic influence on perception, sales, and loyalty. Corporate identity solves clear business tasks, and here’s how:',
        benefit1Title: 'Market recognition',
        benefit1Desc:
          'When the brand looks consistent at all touchpoints — from the website to packaging — it is remembered much faster. This saves advertising resources: just a few touches for the audience to recognize your style. Visual consistency creates a sense of familiarity that turns into trust.',
        benefit2Title: 'Competitive advantage',
        benefit2Desc:
          'In most niches, visual identity is either weak or chaotic. You win simply by looking better. Your brand stands out in social media feeds, looks confident in presentations, and professional at exhibitions. Potential clients perceive you as a strong player — even before getting to know the product.',
        benefit3Title: 'Systematic communication',
        benefit3Desc:
          'With corporate identity, you get a set of rules that make designing any materials easier. No need to invent from scratch every time — just follow the guide. This saves time, money, and nerves.',
        benefit4Title: 'Business scalability',
        benefit4Desc:
          'Clear identity makes it easy to launch new products, franchises, branches, or advertising campaigns. The style is flexible — but does not lose connection with the main brand. This is the foundation for growth.',

        // Inspiration
        inspirationTitle: 'Our inspiration is your successful brand',
        inspirationParagraph1:
          "Every project of ours is not about a pretty picture. It's about the essence we see in your business. We don't copy trends — we create solutions that work specifically for you.",
        inspirationParagraph2:
          "We are inspired not by someone else's cases, but by your unique story, product, ambitions. This is where identities are born that resonate with the audience, evoke emotions, and crystallize the brand's character.",
        inspirationParagraph3:
          'Your trust is our responsibility. That’s why we don’t make templates, don’t work superficially, and always offer more than you expect.',

        // Order
        orderTitle: 'How to order corporate identity',
        orderSubtitle: 'Step-by-step instructions',
        orderDescription:
          'We guarantee support at every stage and open communication.',
        orderStep1Title: 'Request',
        orderStep1Desc:
          'You contact us with a brief description of your request.',
        orderStep2Title: 'Briefing',
        orderStep2Desc:
          'You fill out a questionnaire or have an online meeting to clarify details.',
        orderStep3Title: 'Proposal',
        orderStep3Desc:
          'We send a commercial proposal with deadlines, price, and service composition.',
        orderStep4Title: 'Start of work',
        orderStep4Desc:
          'After approval and payment, the research and concept stage begins.',
        orderStep5Title: 'Design and presentation',
        orderStep5Desc: 'We show solutions, discuss, and make adjustments.',
        orderStep6Title: 'File and guideline delivery',
        orderStep6Desc:
          'We finalize all materials and deliver them to you in a convenient way.',
        orderCta: 'Order corporate identity',

        // FAQ
        faqTitle: 'FAQ',
        faqData: {
          question1:
            '1. What is the difference between a logo and a corporate identity?',
          answer1:
            'A logo is just one element. Corporate identity includes a complete visual set: colors, fonts, visual rules, icons, social media design, etc.',
          question2: '2. Can I order only part of the corporate identity?',
          answer2:
            'Yes, we can adapt the service to your request — for example, develop only a logo or update the palette and typography for an existing brand.',
          question3: '3. Will I get a brandbook?',
          answer3:
            'Yes, the basic package includes a guideline with the main rules for using the style. If necessary, we can create a full brandbook with extended examples.',
          question4:
            '4. How long does it take to develop a corporate identity?',
          answer4:
            'On average — from 2 to 4 weeks, depending on the scope of work and the speed of approval. We agree on deadlines before starting.',
          question5: '5. Can I make changes to the proposed design?',
          answer5:
            'Yes, 1–2 rounds of adjustments are provided within the approved concept. We take your wishes into account while maintaining professional quality.',
          question6: '6. In what formats will I receive the final materials?',
          answer6:
            'We provide the logo and style elements in print formats (.ai, .pdf) and for digital (.png, .svg, .jpg). Fonts — with licenses or recommendations.',
        },
        faqCta: 'Have additional questions about corporate identity?',
        faqCtaButton: 'Contact us',
      },
      aiBannerMarketingPage: {
        // Hero Section
        heroTitle:
          'Banner advertising on websites — an effective way to attract clients',
        heroHighlight: 'effective way',
        heroDescription:
          'Banner advertising is a powerful digital marketing tool that allows brands to interact with target audiences directly on popular web resources. Thanks to visual impact, precise targeting, and scalability, banners remain relevant even in conditions of high competition for user attention.',
        stat1: '+180%',
        stat1Label: 'CTR Growth',
        stat2: '+65%',
        stat2Label: 'Conversion Increase',
        stat3: '-40%',
        stat3Label: 'Cost Reduction',
        orderButton: 'Order Banner Advertising',

        // Info Section
        infoTitle: 'What is banner advertising and how it works',
        infoDescription:
          'Banner advertising consists of graphic blocks (images, animations, or videos) that are placed on websites to attract attention, generate demand, or redirect users to a target page (landing). It works on the principle of impressions (CPM), clicks (CPC), or actions (CPA), depending on the goals of the advertising campaign.',
        formatsTitle: 'Main banner advertising formats',
        formatsDescription:
          "Banners can be static (JPEG, PNG), animated (GIF), or interactive (HTML5). Additionally, adaptive formats are used that automatically adjust to the user's screen.",
        formatLeaderboard: 'Leaderboard',
        formatLeaderboardDesc:
          'Placed in the upper part of the page, provides high visibility at the beginning of user interaction with the site.',
        formatRectangle: 'Medium Rectangle',
        formatRectangleDesc:
          'One of the most effective formats that embeds in content or is placed in the sidebar.',
        formatSkyscraper: 'Wide Skyscraper',
        formatSkyscraperDesc:
          'Vertical format that is usually placed in the sidebar and remains visible when scrolling.',
        formatBillboard: 'Billboard',
        formatBillboardDesc:
          'Large format for premium campaigns that provides maximum reach and impact.',
        howItWorksTitle: 'How banner advertising works',
        howItWorksDescription:
          'The advertiser chooses sites where they want to show ads, defines the audience by demographic, behavioral, or geographic parameters, after which banners are launched through advertising networks or directly through platforms.',
        step1Title: 'Format and platform selection',
        step1Text:
          'The advertiser chooses banner types and sites for placement.',
        step2Title: 'Target audience definition',
        step2Text:
          'Setting up demographic, behavioral, and geographic parameters.',
        step3Title: 'Launch through advertising networks',
        step3Text:
          'Banners are placed through specialized platforms or directly.',
        step4Title: 'Optimization and results analysis',
        step4Text:
          'Monitoring metrics and adjusting the campaign to improve effectiveness.',
        businessBenefitsTitle: 'Benefits of banner advertising for business',
        benefit1Title: 'Scalability',
        benefit1Text: 'Ability to reach thousands or millions of unique users.',
        benefit2Title: 'Visual impact',
        benefit2Text:
          'Effectively convey messages using colors and emotional triggers.',
        benefit3Title: 'Precise targeting',
        benefit3Text:
          'Showing ads only to those who have already been interested in similar products or services.',
        benefit4Title: 'Format flexibility',
        benefit4Text:
          'Suitable for launching promotions, presenting new products, or increasing brand awareness.',
        benefit5Title: 'Measurability',
        benefit5Text:
          'Detailed analytics allows controlling every click, impression, or conversion.',

        // Placement Section
        placementTitle: 'Where banner advertising is placed',
        placementDescription:
          "Successful banner advertising starts with the right choice of placement platform. Not every site provides the same effectiveness, so it's important to analyze the topic, audience, traffic, and competitive environment of the resource. Successful placement ensures high visibility, relevance, and maximum return from each impression.",
        thematicSitesTitle: 'Thematic sites',
        thematicSitesDescription:
          "Placing banners on niche websites allows addressing an already interested audience. For example, advertising travel services on travel blogs or cosmetics banners on women's forums work precisely and effectively. Thematic platforms have high relevance, which increases the likelihood of clicks and brand interaction.",
        thematicSitesAdv1: 'High-quality traffic',
        thematicSitesAdv2: 'Minimal losses on non-target audience',
        thematicSitesAdv3: 'Increased trust level thanks to expert context',
        newsPortalsTitle: 'News portals',
        newsPortalsDescription:
          'News sites have one of the highest daily traffic indicators. Thanks to constant content updates, users regularly return, which allows reaching a wide but active audience. Banners here are often placed in the upper part of the page or between news blocks.',
        newsPortalsAdv1: 'High impression frequency',
        newsPortalsAdv2: 'Rapid reach growth',
        newsPortalsAdv3: 'Relevance: advertising alongside hot news',
        highTrafficTitle: 'High-traffic platforms',
        highTrafficDescription:
          'This category includes large aggregators, encyclopedias, online magazines, forums, as well as Q&A sites (like Quora or local analogues). Placement on such platforms allows reaching a wide audience without being tied to a narrow topic.',
        highTrafficAdv1: 'Massive reach',
        highTrafficAdv2: 'CPM or CPC optimization',
        highTrafficAdv3: 'Ability to A/B test banners on a large sample',

        // Implementation Section
        implementationTitle: 'Our process of creating effective banners',
        implementationDescription:
          "Every banner we create is the result of a comprehensive approach that combines analytics, design, and technology. We don't just draw pretty pictures, we develop strategic solutions that bring real clients. Our methodology involves deep understanding of your business and target audience needs.",
        step01Title: 'Analysis and strategy',
        step01Text:
          'We study your business, competitors, and target audience to develop a unique placement strategy',
        step01List1: 'User behavior analysis',
        step01List2: 'Competitor research',
        step01List3: 'Selection of optimal formats',
        step02Title: 'Creative concept',
        step02Text:
          'We create unique visual solutions that attract attention and encourage action',
        step02List1: 'Development of attractive designs',
        step02List2: 'Testing multiple variants',
        step02List3: 'Optimization for different platforms',
        step03Title: 'Setup and launch',
        step03Text:
          'We configure banner display on selected platforms with precise targeting',
        step03List1: 'Integration with advertising networks',
        step03List2: 'Targeting setup',
        step03List3: 'Selection of optimal display strategies',
        step04Title: 'Optimization and scaling',
        step04Text:
          'We constantly analyze effectiveness and adjust the campaign to achieve maximum results',
        step04List1: 'A/B testing of variants',
        step04List2: 'Analysis of performance metrics',
        step04List3: 'Scaling successful campaigns',
        result1Value: '+78%',
        result1Label: 'Average CTR Growth',
        result2Value: '5.2M',
        result2Label: 'Monthly Reach',
        result3Value: '3.8x',
        result3Label: 'Average Campaign ROI',
        ctaTitle: 'Ready to launch banner advertising that really works?',
        ctaDescription:
          "Contact us today, and we'll develop an individual strategy that matches your business goals",
        ctaButton: 'Order Consultation',

        // Analytics Section
        analyticsTitle: 'Results and analytics',
        analyticsDescription:
          'Successful banner advertising is not just creative and impressions, but also precise analytics. We work with data and metrics that help us optimize campaigns and achieve maximum effectiveness of invested funds.',
        metricsTitle: 'Key metrics',
        metricCTR:
          'The ratio of clicks to impressions. The main indicator of banner effectiveness that demonstrates how attractive it is to the audience.',
        metricCPM:
          'Cost per thousand impressions. Helps evaluate the economic effectiveness of reaching the target audience.',
        metricCPC:
          'Cost per click. Shows how much it costs to attract one potential client to the site.',
        metricCR:
          'Percentage of visitors who performed a target action (order, registration, etc.) after clicking from the banner.',
        whatYouGetTitle: 'What you get',
        regularReports: 'Regular reporting',
        regularReportsDesc:
          'Weekly or monthly reports with detailed analysis of all key campaign metrics and optimization recommendations.',
        roiAnalysis: 'ROI analysis',
        roiAnalysisDesc:
          'Calculation of return on investment for each advertising channel and format, allowing to determine the most profitable strategies.',
        audienceData: 'Audience data',
        audienceDataDesc:
          'Detailed information about demographics, interests, and behavior of users who interact with your banners.',
        realtimeOptimization: 'Real-time optimization',
        realtimeOptimizationDesc:
          'Continuous monitoring and adjustment of campaigns to achieve maximum effectiveness and minimize costs.',
        processTitle: 'Our analytical process',
        processStep1: 'Tracking setup',
        processStep1Desc:
          'Integration of Google Analytics, Facebook Pixel, and other tools for precise tracking of all user interactions with banners and the site.',
        processStep2: 'Data collection and analysis',
        processStep2Desc:
          'Systematic collection of data about impressions, clicks, conversions, and other user interactions with advertising materials.',
        processStep3: 'A/B testing',
        processStep3Desc:
          'Comparison of different banner versions to determine the most effective visual elements, calls to action, and placements.',
        processStep4: 'Report formation',
        processStep4Desc:
          'Creation of clear and detailed reports that demonstrate campaign results and provide clear understanding of ROI.',
        processStep5: 'Optimization and scaling',
        processStep5Desc:
          'Based on collected data, we make adjustments to campaigns and scale the most successful strategies to maximize results.',
        analyticsQuote:
          "Without analytics, advertising is just pretty pictures. With analytics — it's a powerful business development tool where every dollar works for results.",
        analyticsQuoteAuthor: '— SoftQod Team',
        analyticsCta:
          'Want to learn more about how we can help you achieve measurable results with banner advertising?',
        analyticsCtaButton: 'Order Consultation',

        // Benefits Section
        benefitsTitle: "Why it's worth ordering banner advertising from us",
        benefitsDescription:
          "In the world of digital advertising, it's important not just to launch banners, but to achieve specific business goals — sales, leads, reach. We offer not template solutions, but an individual approach based on experience, proven methodologies, and modern technologies. Our team deeply immerses in the client's niche to create an effective, ROI-oriented banner campaign.",
        experienceTitle: 'Experience working with different niches',
        experienceText:
          'We have implemented dozens of projects in e-commerce, finance, tourism, education, B2B services, medicine, and other areas. Thanks to this, we understand the specifics of target audience behavior in each segment. We know which formats work better in specific industries, how to design offers and creatives to evoke maximum response.',
        approachTitle: 'Our approach is:',
        approach1: 'Deep competitive analysis',
        approach1Desc:
          'We study competitor strategies to create a unique offer',
        approach2: 'Seasonal demand consideration',
        approach2Desc:
          'We adapt advertising campaigns to seasonal trends and consumer behavior',
        approach3:
          'Banner adaptation to target audience language and mentality',
        approach3Desc:
          'We create creatives that resonate with your audience on a cultural level',
        industries: {
          item1: 'E-commerce',
          item2: 'Finance',
          item3: 'Tourism',
          item4: 'Education',
          item5: 'B2B',
          item6: 'Medicine',
          item7: 'HoReCa',
          item8: 'Other areas',
        },

        transparencyTitle: 'Transparent reporting and support',
        transparencyText:
          "We don't hide data — every client has full access to reports, statistics, and dashboards in a convenient format. You see how the campaign works in real-time, which platforms bring results, and which ones need correction. Our specialists accompany the project at every stage, providing recommendations and responding promptly to changes in user behavior.",
        whatYouGet: 'What you get:',
        reportMetrics: 'Reports with CTR, CPC, CPM metrics',
        reportMetricsDesc:
          'Detailed campaign effectiveness statistics available in real-time',
        consult: 'Consultations on improving results',
        consultDesc:
          'Regular recommendations from specialists for campaign optimization',
        manager: 'Constant communication with campaign manager',
        managerDesc:
          "Specialist on call who is responsible for your project's success",
        creativeIdeas: 'Creative ideas for banners',
        creativeIdeasDesc:
          'Regular creative updates to prevent banner blindness',
        testimonialText:
          'Working with the SoftQod team, we received not just advertising, but a strategic partner who truly understands our business. Thanks to their individual approach and constant analysis, our conversion from banner advertising increased by 34%.',
        testimonialAuthor: 'Olena Petrenko',
        testimonialAuthorRole: 'Marketing Director, Ecommerce Store',

        // FAQ Section
        faqTitle: 'FAQ',
        faqData: {
          question1: 'How long does it take to launch a banner campaign?',
          answer1:
            'Depending on the complexity of the task, preparation takes from 2 to 5 working days. This includes audience analysis, site selection, creative development, and technical preparation for launch.',
          question2: 'Can I test multiple banners simultaneously?',
          answer2:
            'Yes, we practice A/B testing to determine which banner variant has better CTR and lower CPC. This allows us to optimize the campaign even at the start stage.',
          question3:
            'What types of businesses are best suited for banner advertising?',
          answer3:
            'Banner advertising is effective both for broad B2C segments (retail, cosmetics, tourism) and for narrow B2B areas. It works especially well in niches with visual components or promotional offers.',
          question4:
            'Is it possible to limit banner display to specific regions?',
          answer4:
            'Yes, we can set up geo-targeting to the level of country, region, or even a specific city. This allows focusing the budget only on those regions where your target audience is located.',
          question5:
            "What happens if the campaign doesn't give expected results?",
          answer5:
            'We regularly analyze metrics and make changes as needed — replace creatives, change platforms, or adjust targeting. All campaigns are accompanied by a specialist who is responsible for the result.',
          question6:
            'Can I launch banner advertising without ready-made design?',
          answer6:
            'Yes, we completely take over banner creation — from concept to final layout. Our designers adapt creatives to the chosen strategy and ensure their compliance with platform technical requirements.',
        },
        faqCta: 'Have additional questions about banner advertising?',
        faqCtaButton: 'Contact us',
      },
      smmPage: {
        // Hero Section
        heroTitle: 'SMM promotion — your brand in social networks',
        heroHighlight: 'your brand',
        heroDescription:
          'SMM promotion is a strategic digital marketing tool that allows businesses to build long-term relationships with clients, form brand image, and stimulate sales through social networks. In a world where consumer attention is the most valuable resource, SMM helps take your place in the information field and transform subscribers into a loyal audience.',
        orderButton: 'Order SMM',

        // SMM Advantages
        advantage1: 'Direct connection with your target audience',
        advantage2: 'Formation of loyalty and community around the brand',
        advantage3: 'Viral content distribution through reposts',
        advantage4: 'Detailed analytics of campaign effectiveness',

        // Main SMM Tasks
        task1Title: 'Brand image formation',
        task1Desc: 'through valuable content, visual style, and tone of voice',
        task2Title: 'Increasing recognition',
        task2Desc: 'through regular publication, interactivity, and targeting',
        task3Title: 'Building community',
        task3Desc:
          'creating a loyal base of subscribers who support, comment, and buy',
        task4Title: 'Communication with audience',
        task4Desc:
          'responding to inquiries, processing reviews, resolving situations in real-time',
        task5Title: 'Promotion of products or services',
        task5Desc:
          'through advertising campaigns, collaborations, promotions, lead magnets',

        // What is SMM
        whatIsTitle: "What is SMM and why it's important",
        whatIsDesc1:
          "SMM (Social Media Marketing) is a set of actions for promoting a company in social networks: from content creation and community management to launching targeted advertising. SMM is not just a communication channel — it's a source of loyalty, feedback, and direct influence on consumer behavior.",
        whatIsDesc2:
          'Millions of Ukrainians use social networks daily. Ignoring this channel means losing potential clients who are ready to buy, order, or share impressions right now.',

        // Statistics
        stat1Value: '73%',
        stat1Label: 'of internet users are active on social networks',
        stat2Value: 'hr',
        stat2Label: 'average time on social networks daily',
        stat3Value: '61%',
        stat3Label: 'make purchase decisions after viewing on social networks',

        // Main SMM Tasks
        tasksTitle: 'Main SMM tasks',

        // Services
        servicesTitle: 'What services we provide within SMM',
        servicesIntro:
          "We offer a complete SMM support cycle — from strategy to results. Our services cover key areas that allow a brand not just to 'be on social networks,' but to systematically develop, attract clients, and achieve business goals. We adapt our approach to the specifics of the market, competitors, and audience.",

        // Service Tabs
        tab1: 'Content strategy development',
        tab2: 'Page management',
        tab3: 'Targeted advertising',

        // Content Strategy
        contentStrategyTitle: 'Content strategy development',
        contentStrategyDesc:
          'Content is the foundation of communication in SMM. We create strategies that take into account seasonality, audience behavioral patterns, platform trends, and brand positioning. The content plan is prepared a month in advance and includes visuals, texts, hashtags, interactives, stories, Reels or Shorts — depending on the platform.',
        contentStrategyFeatures: [
          'Goal and KPI definition',
          'Tone of voice building',
          'Content plan by categories and formats',
          'Creating unique creative',
        ],

        // Page Management
        pageManagementTitle:
          'Page management (Instagram, Facebook, TikTok, etc.)',
        pageManagementDesc:
          'We take full account administration: regular publications, responses in comments, processing inquiries in Direct, mention monitoring. For each platform, we choose the most effective formats — short videos, carousels, memes, giveaways, or guide posts.',
        platform1: 'Instagram and Facebook (Meta)',
        platform2: 'TikTok — considering algorithms and viral potential',
        platform3: 'YouTube Shorts, Telegram, LinkedIn (optional)',

        // Targeted Advertising
        targetedAdsTitle: 'Targeted advertising in social networks',
        targetedAdsDesc:
          'One of the strongest tools in SMM is paid advertising. We launch targeting by interests, behavior, geolocation, similar audiences, or remarketing. For each campaign, we create several creatives and test them to get optimal results at minimal cost.',
        campaignType1: 'Subscriber acquisition',
        campaignType2: 'Post or story advertising',
        campaignType3: 'Lead generation (lead forms, website transitions)',
        campaignType4: 'Dynamic campaigns for e-commerce',

        // Collaboration Process
        collaborationTitle: 'How collaboration works',
        collaborationIntro:
          'We work transparently, systematically, and focus on results. For each client, we build an individual SMM process adapted to the niche, goals, and specifics of the business. Each stage is coordinated and supported by our team — from start to scaling.',

        // Process Steps
        step1Title: 'Briefing and audience analysis',
        step1Desc:
          'We start with deep immersion in your business: collect data through briefs, analyze competitors, determine the target audience portrait. We study their pain points, interests, activity on social networks, and adapt the communication approach accordingly.',
        step1Includes: 'What it includes:',
        step1Item1: 'Market analysis, USP, positioning',
        step1Item2:
          'Determining the platform where the target audience is most active',
        step1Item3:
          'Building interaction scenarios (mutual following, comments, advertising)',

        step2Title: 'Strategy development',
        step2Desc:
          'Based on collected data, we form a social media presence strategy: determine optimal platforms, content plan, publication frequency, tone, and key brand messages.',
        step2Tactic:
          'We provide a document with a detailed strategy that includes all aspects of SMM promotion from visual style to KPI',

        step3Title: 'Launch and implementation',
        step3Desc:
          'We create and publish content according to the agreed plan, set up and launch advertising campaigns. We begin interaction with the audience and actively moderate comments and messages.',
        step3Card1: 'Content creation',
        step3Card2: 'Advertising launch',
        step3Card3: 'Communication',

        step4Title: 'Regular analytics and strategy adjustment',
        step4Desc:
          "We don't 'manage pages for the sake of pages' — we work with data. Monthly, we prepare reports on reach, engagement, subscribers, saves, clicks, comments. We analyze what works and what doesn't, and adjust the strategy to avoid wasting time and budget in vain.",
        step4Tools: 'Analytics tools:',
        step4Tool1: 'Meta Business Suite / TikTok Analytics',
        step4Tool2: 'Internal CRM and conversion tracking',
        step4Tool3: 'Google Analytics (in case of website transitions)',

        // Collaboration CTA
        collaborationCta:
          'Ready to start collaboration with a team of professionals?',
        collaborationCtaButton: 'Order SMM',

        // Results
        resultsTitle: 'Results from SMM promotion',
        resultsDesc:
          "Working on social networks should give concrete results — not just 'likes,' but real growth indicators. SMM promotion forms a long-term effect: strengthens brand positions, creates community, and generates leads.",

        // Result 1: Brand Recognition
        result1Title: 'Brand recognition',
        result1Desc:
          'Thanks to regular publication of quality content, presence in subscriber feeds, and launching targeted advertising, the brand becomes recognizable. People begin to associate you with expertise, reliability, or relevance — depending on the chosen positioning.',
        result1Metric1: '+127%',
        result1Metric1Label: 'Organic reach',
        result1Metric2: '+86%',
        result1Metric2Label: 'Brand recognition',
        result1Results: 'Recognition results:',
        result1Item1: 'Growth in organic traffic to profile',
        result1Item2: 'High frequency of mentions or tags',
        result1Item3: 'Positive comments and reviews',

        // Result 2: Subscriber Growth
        result2Title: 'Subscriber growth and engagement',
        result2Desc:
          'An active page with interesting content attracts new subscribers. We use natural engagement methods, as well as paid tools — advertising, mutual mentions, collaborations with micro-influencers.',
        result2ChartLabels: ['January', 'February', 'March', 'April'],
        result2ChartValues: ['+210', '+460', '+680', '+890'],
        result2Metrics: 'Metrics we focus on:',
        result2Item1: 'Engagement Rate (ER)',
        result2Item2: 'Number of subscriptions per month',
        result2Item3: 'Engagement dynamics from post to post',

        // Result 3: Lead Generation
        result3Title: 'Lead generation and sales',
        result3Desc:
          'SMM is also a direct sales channel, especially for e-commerce, online services, and local businesses. We create special offers, calls to action, and lead magnets for conversions.',
        result3ProgressLabels: [
          'Reach',
          'Transitions',
          'Applications',
          'Sales',
        ],
        result3ProgressValues: ['12,680', '7,354', '4,057', '2,282'],
        result3ProgressPercents: ['100%', '58%', '32%', '18%'],
        result3Tools: 'Conversion tools:',
        result3Item1: 'Lead forms on Facebook / Instagram',
        result3Item2: 'Applications through Direct or comments',
        result3Item3: 'Redirect to landing with targeted offer',

        // Quote
        resultsQuote:
          'Effective SMM is not chasing likes, but systematic work that directly affects your business KPI.',

        // Results CTA
        resultsCtaTitle: 'Want similar results?',
        resultsCtaButton: 'Order SMM strategy',

        // Team Advantages
        teamAdvantagesTitle: 'Advantages of working with our team',
        teamAdvantagesDesc:
          "We are not just performers, we are partners who are interested in results. For us, it's important not only to create an aesthetic profile but also to ensure strategic growth of your brand on social networks. Our team consists of SMM specialists, designers, analysts, and targetologists who work as a single mechanism.",

        // Advantage 1: Innovative Approaches
        advantage1Title: 'Innovative approaches',
        advantage1Desc:
          'We constantly test new formats and AI tools, analyze trends to keep your brand ahead of competitors.',
        advantage1Features: 'What we implement:',
        advantage1Item1: 'Adaptation to algorithms of each social network',
        advantage1Item2: 'Using ChatGPT and AI design for content generation',
        advantage1Item3: 'Multi-format content and flexible message testing',

        // Advantage 2: Experience in Different Spheres
        advantage2Title: 'Experience in different business spheres',
        advantage2Desc:
          'We have worked with companies from such industries: education, medicine, e-commerce, infobusiness, real estate, HoReCa, b2b.',
        advantage2Features: 'What this gives you:',
        advantage2Item1: 'Minimum time explaining business specifics',
        advantage2Item2: 'Maximum fast campaign launch',
        advantage2Item3: 'Expert solutions verified by practice',

        // Advantage 3: Transparent Reporting
        advantage3Title: 'Transparent reporting',
        advantage3Desc:
          'We provide detailed reports with specific KPIs and metrics that demonstrate work effectiveness.',
        advantage3Features: 'What you receive:',
        advantage3Item1: 'Weekly dashboards with key metrics',
        advantage3Item2: 'Monthly detailed analysis and recommendations',
        advantage3Item3: 'Competitor audits and ROI calculation',

        // Team CTA
        teamCtaTitle: 'Ready to collaborate with experts?',
        teamCtaButton: 'Contact the team',

        // FAQ
        faqTitle: 'FAQ',
        faqCtaText: 'Have additional questions about SMM?',
        faqCtaButton: 'Contact us',

        // FAQ Data
        faqData: {
          question1:
            'Can you promote business on social networks without video?',
          answer1:
            "Yes, although video is a powerful engagement tool, we adapt the content strategy to the client's resources. You can use graphics, carousels, infographics, animations, or interactive polls. If the opportunity to create video appears later, we integrate them into the content plan.",

          question2: 'Do you need a separate strategy for each social network?',
          answer2:
            'Yes. User behavior on Facebook, Instagram, and TikTok is different, as is the content format. We adapt tone of voice, publication types, and visual style to the characteristics of each platform to achieve maximum effect.',

          question3: 'How long does it take to see SMM promotion results?',
          answer3:
            'First results (activity growth, reach, engagement) are usually noticeable within 2–4 weeks. Full brand strengthening, stable audience growth, and conversion — within 2–3 months of systematic work.',

          question4:
            'What is the minimum number of posts per week recommended?',
          answer4:
            'Optimally — from 3 to 5 publications per week. This allows maintaining audience activity without oversaturation. In some cases, 2 posts + daily stories are sufficient, depending on the platform and niche specifics.',

          question5: 'Can SMM be integrated with email newsletters or website?',
          answer5:
            'Yes. We set up transitions from social networks to the website, landing page, or email subscription. This helps build multi-level communication with the client and increase trust in the brand.',

          question6: 'Is it worth using influencers within SMM campaigns?',
          answer6:
            "Influencer marketing is an effective addition to classical SMM. We help select micro- or macro-influencers according to your niche, analyze their audience, and organize 'turnkey' collaboration.",
        },
      },
      contextualAdvertisingPage: {
        // Hero Section
        heroTitle:
          'Contextual advertising — lead generation at the moment of search',
        heroHighlight: 'lead generation',
        heroDescription:
          'Contextual advertising is a digital marketing tool that allows you to show your ads to potential clients exactly when they are searching for your product or service. This is a powerful tool for attracting targeted traffic ready to convert. We set up effective campaigns in Google Ads, Facebook Ads, and other platforms that bring quality leads.',
        orderButton: 'Order contextual advertising',

        // Advantages
        advantage1: 'Precise targeting of users searching for your services',
        advantage2: 'Ability to track ROI and conversions in real time',
        advantage3:
          'Flexible budget and pay only for results (click or conversion)',
        advantage4: 'Instant campaign launch and quick results',
        iconAdvantage5: 'Remarketing',

        // Info Section
        infoTitle: 'How contextual advertising works',
        infoDescription:
          'Contextual advertising is shown to users based on their search queries, interests, or online behavior. When a person searches for a product or service, they see relevant ads, which increases the likelihood of a click and conversion.',
        infoDescription1:
          "The main advantage of this format is relevance. You are not just showing an ad, but responding to a specific user query. For example, if they search for 'buy running shoes in Kyiv', your sports store ad may appear in the top positions of search results even before the organic results.",
        infoDescription2:
          'Contextual advertising uses a pay-per-click (PPC) model, meaning you only pay when a user is interested enough in your ad to click on it.',
        infoDescription3:
          'Today, contextual advertising is not just text ads on Google search. It also includes display ads on partner sites, YouTube, Gmail, and even mobile apps. Thanks to advanced machine learning algorithms, these systems are becoming increasingly accurate in selecting potential customers.',
          iconSearchText: 'buy running shoes in Kiev',
          iconSearchTitle1: 'Professional running shoes - Discounts up to -40%',
          iconSearchDes1: 'Wide selection of branded running shoes. Free shipping. 30-day warranty. ✓ Reviews ✓ Expert advice',
          iconSearchTitle2: 'Running shoes Nike, Adidas, Asics - SportShop',
          iconSearchDes2: 'Large selection of running shoes in Kyiv ✓ Official guarantee ✓ Delivery throughout Ukraine ✓ Cash on delivery',


          itemInfoTitle1: 'Search advertising',
          itemInfoDes1: 'Appears directly in search results when a user searches for specific products or services',
  
          itemInfoTitle2: 'Media network',
          itemInfoDes2: 'Placed on partner sites, mobile applications and video content, taking into account user interests',
         
          itemInfoTitle3: 'Remarketing',
          itemInfoDes3: 'Targets users who have already visited your site but have not taken the targeted action',
        
          itemInfoTitle4: 'Merchandise advertising',
          itemInfoDes4: 'Displays specific products from your catalog, including photos, prices, and other features',

        // Types Section
        typesTitle: 'Main types of contextual advertising',
        typesDescription:
          "Contextual advertising covers various formats that allow you to reach the user at different stages of the sales funnel — from the moment of searching for a product to watching a video on YouTube. Let's look at the main types in more detail.",

        // Search Ads
        searchAdsTitle: 'Search Ads',
        searchAdsDescription:
          'Search ads are advertisements that appear at the top of Google search results when a user enters a specific query. This is one of the most effective ad formats because it addresses the user at the moment of specific interest.',
        searchAdsText: 'Advantages:',
  
        searchAdsAdvantages: [
          'High user intent',
          'Flexible keyword settings',
          'Instant traffic to the site',
        ],
        searchAdsUseCase:
          'Ideal for promoting products, services, booking consultations, and lead generation.',

        // Display Ads
        displayAdsTitle: 'Display Ads',
        displayAdsDescription:
          'Display ads are banners that appear on Google partner sites, in apps, and on platforms that support the Google Display Network. They can include images, animation, and text elements.',
        displayAdsAdvantages: [
          'Visual appeal',
          'Large audience reach',
          'Targeting by interests, demographics, and behavior',
        ],
        displayAdsUseCase:
          'Effective for building brand awareness and reaching new audiences.',

        // Video Ads
        videoAdsTitle: 'Video Ads (YouTube Ads)',
        videoAdsDescription:
          'Video ads are placed on YouTube and the Google video partner network. They allow you to deliver an emotional message, attract attention, and increase brand trust.',
        videoAdsText: 'Species:',
          videoAdsTypes: [
          'In-stream (skippable)',
          'Bumper Ads (up to 6 seconds)',
          'Video Discovery Ads',
        ],
        videoAdsUseCase:
          'Especially suitable for B2C, brand campaigns, and new product launches.',

        // Shopping Ads
        shoppingAdsTitle: 'Shopping Campaigns (Google Shopping)',
        shoppingAdsDescription:
          'Google Shopping is a special ad format for online stores, where the user sees the product, its price, store name, and image directly in the search.',
        shoppingAdsAdvantages: [
          'High conversion rate',
          'Visual content in search results',
          'Automatic product data updates',
        ],
        shoppingAdsUseCase:
          'To launch, you need to link Google Merchant Center and Google Ads.',

        // Remarketing
        remarketingTitle: 'Remarketing and Dynamic Remarketing',
        remarketingDescription:
          'Remarketing allows you to show ads to users who have already visited your site but have not completed the target action. Dynamic remarketing is personalized ads with the products or services the user viewed.',
        remarketingAdvantages: [
          'Brand recall',
          'High ROI',
          'Adapts to user behavior',
        ],
        remarketingUseCase:
          'Especially effective for e-commerce, booking services, courses, and B2B companies.',

        // Stages Section
        stagesTitle: 'Stages of launching contextual advertising',
        stagesDescription:
          'Launching effective contextual advertising requires a systematic approach and strict adherence to the sequence of actions. Each stage plays a key role in achieving your business goals.',

        // Stage 1
        stage1Title: 'Business and audience analysis',
        stage1Description:
          'At the first stage, it is important to understand who your potential client is, what problems you solve, and what advantages your product or service has. Competitor analysis also helps to identify the strengths and weaknesses of the market.',
        stage1Bullets: [
          'Researching target audience behavior',
          'Analyzing competitor strategies',
          'Identifying unique product advantages',
        ],

        // Stage 2
        stage2Title: 'Defining goals and KPIs',
        stage2Description:
          'The campaign goal can be different: sales, lead generation, brand awareness, or subscription. For each goal, key performance indicators (KPIs) are defined, such as cost per lead (CPL), return on ad spend (ROAS), or CTR.',
        stage2Bullets: [
          'Setting clear business metrics',
          'Defining acceptable customer acquisition cost',
          'Calculating expected ROI',
        ],

        // Stage 3
        stage3Title: 'Selecting keywords and audiences',
        stage3Description:
          'A semantic core is compiled — a list of relevant key phrases that users use to search for your products or services. Target audiences are also set up — by interests, behavior, geography, language, etc.',
        stage3Bullets: [
          'Collecting search queries of your target audience',
          'Analyzing search volumes and competition',
          'Grouping keywords by topics',
        ],

        // Stage 4
        stage4Title: 'Creating ad creatives',
        stage4Description:
          'Attractive texts that encourage action are written, images or videos are selected. Ads must meet user expectations and lead to a relevant landing page.',
        stage4Bullets: [
          'Writing conversion headlines',
          'Creating unique selling propositions',
          'Developing clear CTAs (calls to action)',
        ],

        // Stage 5
        stage5Title: 'Setting up the campaign in Google Ads',
        stage5Description:
          'All parameters — geotargeting, budget, bids, schedule — are set according to the strategy. Conversion tracking is also connected via Google Analytics or Tag Manager.',
        stage5Bullets: [
          'Structuring campaigns and ad groups',
          'Setting up targeting and exclusions',
          'Implementing tracking systems',
        ],

        // Stage 6
        stage6Title: 'Launch and monitoring',
        stage6Description:
          'After launch, it is important to monitor the campaign daily: track expenses, review click-through rates, and make prompt adjustments.',
        stage6Bullets: [
          'Real-time metrics analysis',
          'Controlling costs and efficiency',
          'Quick response to metric changes',
        ],

        // Stage 7
        stage7Title: 'Optimization',
        stage7Description:
          'Based on the collected data, keywords, targeting, creatives, and bids are optimized. A/B ad variants are tested to improve effectiveness.',
        stage7Bullets: [
          'Strategy correction based on data',
          'Conducting A/B tests',
          'Scaling successful approaches',
        ],

        stagesCalloutTitle: 'Ready to launch effective contextual advertising?',
        stagesCalloutDescription:
          'Our team will create and launch a campaign for you that will bring targeted clients and ensure maximum return on investment.',
        stagesCalloutButton: 'Order a consultation',

        // Tools Section
        toolsTitle: 'Tools for working with contextual advertising',
        toolsDescription:
          'Successful contextual advertising management is impossible without professional tools. They help automate processes, analyze results, optimize costs, and achieve better performance.',

        // Google Ads
        toolGoogleAdsName: 'Google Ads',
        toolGoogleAdsDescription:
          'This is the main platform for launching search, display, video, and shopping campaigns. It allows you to set up campaigns of any complexity, manage bids, create ads, segment audiences, and track performance.',
        toolGoogleAdsFeatures: [
          'Launching all types of ad campaigns',
          'Flexible bid and budget management',
          'Detailed analytics of results',
        ],

        // Google Analytics
        toolAnalyticsName: 'Google Analytics',
        toolAnalyticsDescription:
          'An indispensable tool for collecting and analyzing user behavior on the site. It allows you to see how ads work, which pages are most effective, how much time users spend on the site, and what conversions occur.',
        toolAnalyticsFeatures: [
          'Tracking traffic sources and behavior',
          'Setting up goals and conversions',
          'Integration with Google Ads',
        ],

        // Google Tag Manager
        toolTagManagerName: 'Google Tag Manager',
        toolTagManagerDescription:
          'A service for convenient tag management without the need to edit site code. Allows you to set up conversion pixels, remarketing, analytics events, etc.',
        toolTagManagerFeatures: [
          'Setting tags without editing code',
          'Centralized tag management',
          'Setting up triggers and variables',
        ],

        // Keyword Planner
        toolKeywordPlannerName: 'Keyword Planner',
        toolKeywordPlannerDescription:
          'A Google tool for selecting keywords. Allows you to find out query frequency, competition level, and approximate cost per click. Ideal for creating a semantic core.',
        toolKeywordPlannerFeatures: [
          'Searching for relevant keywords',
          'Estimating search volumes and competition',
          'Campaign budget forecasting',
        ],

        // SEO Tools
        toolSeoToolsName: 'SEMrush, Ahrefs, Serpstat',
        toolSeoToolsDescription:
          "SEO analytics services that are also useful for contextual advertising. They help study competitors, analyze other companies' ad strategies, select keywords, and track positions.",
        toolSeoToolsFeatures: [
          'Competitor strategy analysis',
          'Advanced keyword research',
          'Position and visibility tracking',
        ],

        // UX Tools
        toolUxToolsName: 'Hotjar or Clarity',
        toolUxToolsDescription:
          'These services allow you to see how users interact with the site: where they click, how they scroll the page, what stops them. This is useful for increasing conversions after coming from ads.',
        toolUxToolsFeatures: [
          'Heatmaps of clicks and scrolls',
          'User session recordings',
          'Surveys and feedback forms',
        ],

        toolsNote:
          'Our specialists are proficient in all necessary tools at a professional level and constantly monitor new features and capabilities to ensure your business gets the maximum effectiveness from contextual advertising.',

        // KPI Section
        kpiTitle: 'Key Performance Indicators (KPI)',
        kpiDescription:
          'To assess the success of contextual advertising, it is important to focus not only on the total number of clicks or expenses, but also on specific performance indicators — KPIs. They show how well the advertising achieves the set business goals.',

        // CTR
        kpiCtrName: 'CTR',
        kpiCtrSubtitle: 'Click-Through Rate',
        kpiText: 'Example:',
        kpiCtrContent:
          'Shows the percentage of users who saw the ad and clicked on it. A high CTR indicates the ad is relevant to the query or audience interests.',
        kpiCtrExample:
          'CTR = 5% means that 5 out of 100 users who saw the ad clicked on it.',

        // CPC
        kpiCpcName: 'CPC',
        kpiCpcSubtitle: 'Cost per Click',
        kpiCpcContent:
          'This is the average amount you pay for each ad click. It is important to reduce CPC without losing traffic by optimizing ads and keywords.',
        kpiCpcExample:
          'CPC = €2 means that each click on your ad costs you an average of €2.',

        // CPA
        kpiCpaName: 'CPA',
        kpiCpaSubtitle: 'Cost per Acquisition',
        kpiCpaContent:
          'CPA determines how much it costs on average to acquire one client (for example, a buyer or lead). This is a key indicator for evaluating campaign profitability.',
        kpiCpaExample:
          'CPA = €25 means that acquiring one new client costs an average of €25.',

        // ROAS
        kpiRoasName: 'ROAS',
        kpiRoasSubtitle: 'Return on Ad Spend',
        kpiRoasContent:
          'This indicator reflects the ratio of revenue to advertising costs. If ROAS exceeds 100%, the campaign is profitable.',
        kpiRoasExample:
          'ROAS = 350% means that for every €1 invested in advertising, you get €3.5 in revenue.',

        // Conversions
        kpiConversionsName: 'Number of conversions',
        kpiConversionsSubtitle: 'Volume of target user actions',
        kpiConversionsContent:
          'Every action considered a target is recorded: form submission, call, purchase. Analyzing the number and quality of conversions helps adjust the strategy.',
        kpiConversionsExample:
          '120 conversions with 3,000 clicks gives a conversion rate of 4%, which is a good indicator.',

        // Traffic Quality
        kpiQualityName: 'Traffic quality',
        kpiQualitySubtitle: 'User behavioral metrics',
        kpiQualityContent:
          'Determined by user behavior on the site: depth of view, time spent, bounce rate. High-quality traffic means a higher probability of sales.',
        kpiQualityExample:
          'Average time on site 3:20, 3.5 pages viewed, bounce rate 35% — indicators of quality traffic.',

        kpiActionText:
          "Want to get a detailed analysis of your advertising campaign's effectiveness?",
        kpiActionButton: 'Order an effectiveness audit',

        // Suitable For Section
        suitableForTitle: 'Who is contextual advertising suitable for',
        suitableForDescription:
          'Contextual advertising is a universal tool suitable for almost any business, regardless of niche, company size, or development stage. However, there are types of businesses for which it brings especially tangible results.',

        // Business Types
        businessTextItem: 'Advantages: ',
        businessSmbName: 'Small and medium business',
        businessSmbDescription:
          'Search advertising allows you to get clients on the very first day of the campaign launch. There is no need to wait several months as with SEO. This is an ideal option for companies just entering the market or launching new products.',
        businessSmbAdvantages: [
          'Quick start and instant results',
          'Flexible control of the advertising budget',
          'Precise targeting for local audiences',
          'High efficiency when launching new products',
        ],
        businessSmbStats: [
          {icon: '⚡', value: '300-400%', label: 'Average ROI' },
          {icon: '🚀', value: '1-2 days', label: 'Time to first clients' },
        ],

        businessEcommerceName: 'Online stores',
        businessEcommerceDescription:
          'For e-commerce, shopping campaigns, dynamic remarketing, and search advertising are effective. You can show your products to users actively searching for them, as well as bring back visitors who did not complete a purchase.',
        businessEcommerceAdvantages: [
          'Visual ads with products in Shopping Ads',
          'Dynamic remarketing to bring back clients',
          'Targeting by seasonal interests',
          'Conversion optimization for specific product categories',
        ],
        businessEcommerceStats: [
          {icon: '📊', value: '30%', label: 'Increase in conversion' },
          {icon: '📈', value: '25%', label: 'Growth in average check' },
        ],

        businessServicesName: 'Service sector',
        businessServicesDescription:
          'Advertising in Google Ads allows you to attract clients for consultations, doctor appointments, delivery orders, or any other service. Targeting local audiences is especially effective for offline businesses.',
        businessServicesAdvantages: [
          'Geolocation targeting for district or city',
          'Advertising by business hours',
          'Call tracking and analysis',
          'CRM integration for client tracking',
        ],
        businessServicesStats: [
          {icon: '📱', value: '40-50%', label: 'Growth in client base' },
          {icon: '📍', value: '60%', label: 'More local clients' },
        ],

        businessB2bName: 'B2B companies',
        businessB2bDescription:
          'Although the deal cycle is longer here, contextual advertising works great for lead generation, webinars, newsletter subscriptions, or booking meetings with managers.',
        businessB2bAdvantages: [
          'Generation of quality B2B leads',
          'Promotion of webinars and professional events',
          'Targeting by position and industry',
          'Remarketing for long decision cycles',
        ],
        businessB2bStats: [
          {icon: '💼', value: '25%', label: 'Lead quality improvement' },
          {icon: '💰', value: '20%', label: 'Lead cost reduction' },
        ],

        businessStartupsName: 'Startups',
        businessStartupsDescription:
          'Contextual advertising is a way to quickly test hypotheses, check demand, and reach your target audience with minimal time investment.',
        businessStartupsAdvantages: [
            'Rapid testing of MVPs and business ideas',
            'Detailed analysis of audience reaction',
            'Flexible A/B testing strategies',
            'Scaling when confirming hypotheses',
          ],
        businessStartupsStats: [
            { icon: '🔥', value: '60%', label: 'Time-to-Market Reduction' },
            { icon: '📝', value: '45%', label: "More feedback" },
          ],

        suitableForCtaTitle:
          'Not sure if contextual advertising is right for your business?',
        suitableForCtaText:
          'Our specialists will help you determine if contextual advertising is right for your business and will develop an individual strategy taking into account the specifics of your niche.',
        suitableForCtaButton: 'Get a free consultation',

        // Approach Section
        approachTitle: 'Our approach to launching advertising',
        approachIntro:
          "We don't just set up contextual advertising — we create solutions that deliver results. Our approach is based on deep analysis, testing, and constant optimization.",

        // Approach Stage 1
        approachStage1Title: 'Immersion in the business',
        approachStage1Description:
          "First, we immerse ourselves in the client's business context: we study the product, competitors, target audience, and their behavioral patterns. A deep understanding of the product allows us to find its unique advantages and present them correctly in advertising.",
        approachStage1Tags: [
          'Niche analysis',
          'Competitor research',
          'Target audience audit',
        ],

        // Approach Stage 2
        approachStage2Title: 'Strategy and planning',
        approachStage2Description:
          'Next — we define clear KPIs, develop a media plan, and launch campaigns through Google Ads. Instead of just launching ads, we develop a comprehensive strategy with several development scenarios and a clear budget allocation.',
        approachStage2Tags: ['Media planning', 'KPI definition', 'Budgeting'],

        // Approach Stage 3
        approachStage3Title: 'Monitoring and optimization',
        approachStage3Description:
          'During the process, we monitor effectiveness daily: review ad click-through rates, traffic quality, conversions, and acquisition cost. We make prompt adjustments as needed. After testing several ad variants, we keep the most effective ones.',
        approachStage3Tags: [
          'Daily control',
          'A/B testing',
          'Bid optimization',
        ],

        // Approach Stage 4
        approachStage4Title: 'Reporting and scaling',
        approachStage4Description:
          'We provide transparent reporting: the client sees where the budget is spent, which campaigns work best, and how returns change over time. Our task is not just to spend the advertising budget, but to multiply it, so we are constantly looking for new opportunities to scale successful campaigns.',
        approachStage4Tags: [
          'Transparent analytics',
          'ROI orientation',
          'Scaling success',
        ],

        // Results Section
        resultsTitle: 'What you will get as a result',
        resultsIntro:
          'Launching contextual advertising with us is not just a set of ads in Google. It is a systematic approach that brings measurable results and specific business benefits.',

        // Result 1
        result1Title: 'Targeted traffic to the site',
        result1Description:
          'Users who are already searching for your products or services will see your ads at the right moment. Contextual advertising provides the highest audience relevance.',
        result1Metric: { value: '93%', label: 'audience relevance' },

        // Result 2
        result2Title: 'Increase in inquiries and sales',
        result2Description:
          'Thanks to precise targeting and effective campaign structure, your conversions will grow. We focus on attracting clients ready to buy.',
        result2Metric: { value: '+45%', label: 'average conversion growth' },

        // Result 3
        result3Title: 'Increased brand awareness',
        result3Description:
          'Especially when using display ads and YouTube, your brand will become more visible to the target audience. We help you stay top of mind.',
        result3Metric: { value: '3.5x', label: 'brand awareness growth' },

        // Result 4
        result4Title: 'Full budget control',
        result4Description:
          'You decide how much you are ready to invest. We ensure maximum efficiency for every hryvnia spent on advertising.',
        result4Metric: { value: '100%', label: 'cost transparency' },

        // Result 5
        result5Title: 'Transparent analytics',
        result5Description:
          'Our reports show every click, conversion, and profitability. You always know what works and what needs optimization in your ad campaigns.',
        result5Metric: { value: '24/7', label: 'data access' },

        // Result 6
        result6Title: 'Flexibility and speed of changes',
        result6Description:
          'Campaigns can be adapted in real time to market changes. We quickly respond to new trends and adjust the strategy for better results.',
        result6Metric: { value: '~24h', label: 'to implement changes' },

        resultsNoteHighlight:
          'Our goal is not just to launch ads, but to ensure stable growth of your business through digital channels.',
        resultsActionButton: 'Get a free consultation',

        // FAQ Section
        faqData: {
          question1:
            'How long does it take to see the first results from contextual advertising?',
          answer1:
            'Usually, the first clicks and site visits appear on the day of launch. However, to fully assess effectiveness, it is worth waiting at least 1–2 weeks to accumulate statistics.',
          question2: 'Can I run contextual advertising without a website?',
          answer2:
            'Yes, in some cases you can direct traffic to a landing page, social media page, or Google My Business. However, a website or landing page significantly improves ad quality and conversion.',
          question3:
            "Is it worth running contextual advertising in the 'off-season'?",
          answer3:
            "It depends on the niche. In some areas (e.g., repairs, education, gifts), the 'off-season' means less competition and a lower cost per click. This can be a profitable strategy.",
          question4: 'How to avoid budget draining by competitors?',
          answer4:
            'Google has built-in mechanisms to protect against fraudulent traffic. You can also use additional protection services, IP and geolocation restrictions. We use comprehensive countermeasures.',
          question5: 'Can I manage the ad campaign myself after launch?',
          answer5:
            'Yes, we can set up the campaign for further self-management. We also provide instructions or transfer the full setup package with explanations.',
        },

        faqCtaText:
          'Have more questions about contextual advertising? Contact us for a free consultation.',
        faqCtaButton: 'Get a consultation',
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

      MobileAppsPage: {
        hero: {
          title: 'Розробка мобільних додатків на замовлення',
          subtitle:
            'Створення мобільного додатку — це ефективний інструмент для бізнесу, який допомагає залучати нових клієнтів, підвищувати лояльність та збільшувати продажі. У сучасному світі понад 70% інтернет-трафіку надходить саме з мобільних пристроїв, тому наявність власного мобільного додатку для iOS або Android стає важливою конкурентною перевагою.',
          subtitle2:
            'Наша компанія пропонує професійні послуги з розробки мобільних додатків "під ключ" — від аналітики і проєктування до запуску та підтримки. Ми створюємо нативні додатки, кросплатформенні рішення та прогресивні вебдодатки (PWA), які працюють швидко, стабільно та безпечно.',
          buttonText: 'Замовити консультацію',
          phoneContent: {
            title: 'Mobile App',
            subtitle: 'iOS + Android',
          },
        },
        benefits: {
          title1: 'Нативна розробка',
          desc1:
            'Створюємо унікальні додатки з максимальною продуктивністю для iOS та Android.',
          title2: 'Крос-платформенні рішення',
          desc2:
            'Економія часу та бюджету з додатками, що працюють на всіх платформах.',
          title3: 'Підтримка та оновлення',
          desc3:
            'Забезпечуємо стабільну роботу та випускаємо нові версії з додатковим функціоналом.',
        },
        business: {
          title: 'Чому вашому бізнесу потрібно мобільний додаток',
          text1:
            "Мобільний додаток відкриває для бізнесу нові можливості взаємодії з клієнтами та ринку просування. Він дозволяє бути на зв'язку з аудиторією 24/7, надсилати push-сповіщення про акції, новини та спеціальні пропозиції, а також збирати аналітику для покращення сервісу.",
          text2:
            'Крім того, наявність мобільного додатку сприяє зміцненню бренду. Яскравий та зручний інтерфейс, бездоганна функціональність і швидка робота допомагають формувати позитивний імідж компанії. Бізнеси, що пропонують мобільний досвід, значно випереджають конкурентів за рівнем залученості клієнтів та обсягом продажів.',
          highlight:
            'Інвестуючи у розробку мобільного додатку, ви отримуєте потужний маркетинговий інструмент, який працює на ваш успіх кожного дня.',
        },
        appTypes: {
          title: 'Які мобільні додатки ми створюємо',
          description:
            'Наша команда розробляє мобільні рішення для бізнесу будь-якої складності — від стартапів до великих корпорацій. Ми створюємо додатки, що ідеально підходять для вашої цільової аудиторії та бізнес-цілей.',
          nativeTitle: 'Нативні додатки для iOS та Android',
          nativeDesc:
            'Нативна розробка дозволяє створювати максимально швидкі та стабільні додатки, що повністю використовують можливості операційних систем iOS та Android. Такі додатки відрізняються високою продуктивністю, якісною графікою та глибокою інтеграцією з пристроями користувача.',
          crossTitle: 'Кросплатформенні додатки на Flutter та React Native',
          crossDesc:
            'Кросплатформенні рішення дають змогу розробити один додаток для двох платформ одночасно, що економить час та бюджет. Технології Flutter і React Native забезпечують високу швидкість роботи, гарну якість інтерфейсу та простоту масштабування проєкту.',
          pwaTitle: 'Прогресивні вебдодатки (PWA)',
          pwaDesc:
            'Прогресивні вебдодатки поєднують переваги вебсайтів та нативних додатків. Вони працюють у браузері, не потребують встановлення, можуть працювати в офлайн-режимі та підтримують push-сповіщення. PWA — чудовий вибір для бізнесу, який хоче швидко запустити мобільний продукт із мінімальними витратами.',
        },
        stages: {
          title: 'Етапи розробки мобільного додатку',
          description:
            'Процес створення мобільного додатку складається з кількох важливих етапів, кожен з яких впливає на якість кінцевого продукту та його успіх серед користувачів.',
          step1Title: 'Аналіз та планування',
          step1Desc:
            'Ми вивчаємо ваш бізнес, аудиторію, конкурентів і формулюємо чіткі вимоги до майбутнього додатку. Створюємо технічне завдання та обираємо оптимальні технології.',
          step2Title: 'Дизайн UX/UI',
          step2Desc:
            'Проєктуємо логічну структуру додатку, створюємо прототипи та дизайн, який забезпечує зручність використання й привабливий вигляд.',
          step3Title: 'Розробка',
          step3Desc:
            'Наші програмісти реалізують функціонал, інтегрують необхідні сервіси, забезпечують безпеку та оптимізацію продуктивності додатку.',
          step4Title: 'Тестування',
          step4Desc:
            'Проводимо комплексне тестування для виявлення та виправлення помилок. Гарантуємо стабільну роботу додатку на різних пристроях та версіях операційних систем.',
          step5Title: 'Запуск і підтримка',
          step5Desc:
            'Публікуємо додаток у App Store та Google Play, надаємо технічну підтримку, розвиваємо та оновлюємо продукт відповідно до нових потреб бізнесу.',
          buttonText: 'Замовити розробку',
        },
        whyUs: {
          title: 'Переваги роботи з нашою командою',
          subtitle:
            'Замовляючи розробку мобільного додатку у нас, ви отримуєте не просто виконавця, а надійного технологічного партнера, який зацікавлений у вашому успіху.',
          card1Title: 'Досвідчена команда розробників',
          card1Desc:
            'Ми працюємо у сфері мобільної розробки багато років і маємо успішні кейси у різних нішах — від e-commerce і фінансів до освіти та медицини.',
          card2Title: 'Індивідуальний підхід до кожного проєкту',
          card2Desc:
            'Кожен бізнес унікальний, тому ми пропонуємо рішення, які враховують ваші цілі, потреби цільової аудиторії та бюджет.',
          card3Title: 'Гарантія якості та дотримання термінів',
          card3Desc:
            'Ми суворо контролюємо якість на кожному етапі розробки та завжди дотримуємося узгоджених термінів. Ваш проєкт буде реалізований вчасно та відповідатиме всім сучасним стандартам.',
          buttonText: 'Замовити розробку',
        },
        pricing: {
          title: 'Вартість мобільного додатку',
          description:
            'Ціна розробки мобільного додатку залежить від кількох факторів: складності функціоналу, вибору платформи, технологій та термінів реалізації. Ми пропонуємо гнучкі рішення, які дозволяють підібрати оптимальний варіант під ваш бюджет і потреби.',
          factorsTitle: 'Основні фактори, що впливають на вартість:',
          factor1Title: 'Тип додатку',
          factor1Desc: 'Нативний, кросплатформенний чи PWA.',
          factor2Title: 'Складність функціоналу',
          factor2Desc:
            'Додаткові можливості, такі як інтеграція з платіжними системами, геолокація, відео/аудіо функції тощо.',
          factor3Title: 'Дизайн та UX/UI',
          factor3Desc:
            'Унікальний дизайн може збільшити вартість, але він завжди сприяє кращому користувацькому досвіду.',
          factor4Title: 'Термін реалізації',
          factor4Desc:
            'Чим швидше потрібно завершити проєкт, тим більше можуть бути витрати на ресурси.',
          ctaText:
            'Для точного розрахунку вартості вашого мобільного додатку ми пропонуємо безкоштовну консультацію, під час якої ми визначимо обсяг робіт та створимо індивідуальну пропозицію.',
          buttonText: 'Отримати консультацію',
        },
        faq: {
          title: 'FAQ',
          q1: 'Скільки часу займає розробка мобільного додатку?',
          a1: 'Час на розробку мобільного додатку залежить від складності проекту та функцій, які ви хочете реалізувати. Зазвичай, розробка займає від 2 до 6 місяців для стандартних додатків, але для складних рішень цей термін може бути довшим.',
          q2: 'Чим відрізняється нативний додаток від кросплатформеного?',
          a2: 'Нативний додаток розробляється окремо для кожної операційної системи (iOS чи Android), що дозволяє досягти високої продуктивності та інтеграції з функціями пристроїв. Кросплатформенні додатки розробляються за допомогою технологій, які дозволяють використовувати один код для двох платформ, що економить час і бюджет, але може бути менш оптимальним за швидкістю та стабільністю.',
          q3: 'Що таке прогресивний вебдодаток (PWA)?',
          a3: 'Прогресивний вебдодаток — це вебдодаток, який поєднує переваги вебсайтів і нативних додатків. PWA може працювати офлайн, отримувати push-сповіщення і запускатися на будь-якому пристрої без необхідності встановлення.',
          q4: 'Які переваги має мобільний додаток для мого бізнесу?',
          a4: 'Мобільний додаток дозволяє вашому бізнесу бути доступним для клієнтів 24/7, сприяє збільшенню лояльності, покращує користувацький досвід і дозволяє проводити ефективні маркетингові кампанії. Додаток також допомагає зібрати аналітику для покращення сервісу та розширення бізнесу.',
          q5: 'Які додаткові функції можна додати до мобільного додатку?',
          a5: 'До мобільного додатку можна додавати різноманітні функції, такі як геолокація, push-сповіщення, інтеграція з платіжними системами, чат-боти, соціальні мережі, офлайн-режим, підтримка мультимедіа (відео, фото) і багато інших, залежно від ваших потреб.',
          q6: 'Як я можу отримати точну вартість розробки мобільного додатку?',
          a6: 'Для точного розрахунку вартості потрібно обговорити деталі проєкту: його складність, бажану платформу, функціонал та терміни. Ми пропонуємо безкоштовну консультацію, під час якої ми зберемо всю необхідну інформацію і надамо вам індивідуальну пропозицію.',
          ctaText: 'Не знайшли відповідь на своє питання?',
          ctaButton: 'Напишіть нам',
        },
      },
      BannerAdsPage: {
        hero: {
          title: 'Рекламні банери з ШІ – швидко, точно, ефективно',
          subtitle:
            'Підвищіть ефективність вашого маркетингу з рекламними банерами, створеними за допомогою штучного інтелекту. Економія часу, персоналізація та висока конверсія.',
          buttonText: 'Замовити банери',
          features: {
            fast: 'Швидко',
            quality: 'Якісно',
            effective: 'Ефективно',
          },
        },
        imgText: {
          text1: 'Спеціальна пропозиція',
          text2: 'Літня знижка 50%',
          text3: 'На всі види рекламних банерів для вашого бізнесу',
          text4: 'Замовити',
        },
        benefits: {
          title: 'Чому варто використовувати ШІ для створення банерів',
          subTitle:
            'Сучасні інструменти на основі ШІ змінюють правила гри в дизайні реклами. Ось кілька причин, чому наші клієнти обирають саме цей підхід:',
          speed: {
            title: 'Швидкість розробки',
            description:
              'Генерація декількох варіантів банерів займає лічені хвилини.',
          },
          budget: {
            title: 'Економія бюджету',
            description:
              'Менше витрат на ручну роботу дизайнерів і копірайтерів.',
          },
          optimization: {
            title: 'Оптимізація під A/B-тестування',
            description:
              'ШІ може створити десятки варіацій під різні сегменти ЦА.',
          },
          personalization: {
            title: 'Персоналізація',
            description:
              'Адаптація під мову, геолокацію, інтереси та поведінку користувача.',
          },
          uniqueness: {
            title: 'Унікальність',
            description:
              'Візуали та тексти генеруються заново, з урахуванням вашого стилю та бренду.',
          },
        },
        services: {
          title: 'Що ми пропонуємо',
          subTitle:
            'Ми спеціалізуємося на створенні рекламних банерів з використанням інструментів штучного інтелекту. Це дозволяє швидко генерувати якісні візуали, адаптовані до різних платформ і завдань. Наші послуги охоплюють повний спектр банерної реклами:',
          static: {
            title: 'Статичні банери',
            description:
              'Підходять для Google Ads, Facebook, Instagram, мобільних застосунків та сайтів. Генеруються у різних форматах і розмірах з урахуванням вимог платформи.',
          },
          animated: {
            title: 'Анімовані банери (GIF та HTML5)',
            description:
              'Створюємо динамічні креативи, які привертають увагу і підвищують клікабельність.',
          },
          remarketing: {
            title: 'Банери для ремаркетингу та програматик-реклами',
            description:
              'Розробка адаптивних креативів для показу аудиторії, яка вже контактувала з вашим брендом.',
          },
          massGeneration: {
            title: 'Масова генерація варіантів',
            description:
              'ШІ здатен створити десятки і навіть сотні варіацій одного банера для тестування або масштабування рекламних кампаній.',
          },
          textGeneration: {
            title: 'Генерація текстів і зображень',
            description:
              'Ми поєднуємо текстові моделі ШІ (наприклад, ChatGPT) з візуальними (DALL·E, Midjourney, Stable Diffusion), щоб створювати креативи повністю з нуля.',
          },
          footerText:
            'Кожен банер проходить ручну перевірку та доопрацювання дизайнером для досягнення високої якості.',
        },
        process: {
          title: 'Як працює процес',
          subTitle:
            'Ми зробили процес створення рекламних банерів з ШІ максимально простим, прозорим і зручним для замовника. Уся робота займає від кількох годин до кількох днів — залежно від складності та обсягу.',
          text: 'Крок',
          step1: {
            title: 'Обговорення завдання',

            description:
              'На першому етапі ми уточнюємо цілі кампанії, тип платформи (Google, Meta, TikTok, мобільні додатки тощо), формат банера, побажання до стилістики та текстів. Якщо є брендбук — ми врахуємо кольори, логотип та стиль.',
            item1: 'Визначення цілей',
            item2: 'Аналіз аудиторії',
            item3: 'Створення концепції',
          },
          step2: {
            title: 'Генерація концептів',
            description:
              'Ми використовуємо інструменти генеративного ШІ для створення перших варіантів: зображення (за потреби — з ілюстраціями, персонажами або предметами); текст (з урахуванням платформи й ЦА); анімація або статичні варіанти.',
            item1: 'Генерація зображень',
            item2: 'Варіанти дизайну',
            item3: 'Перший відбір',
          },
          step3: {
            title: 'Ручна доопрацювання',
            description:
              'Обрані банери ми адаптуємо вручну: коригуємо елементи дизайну, вирівнюємо, додаємо легкість і візуальний баланс. За потреби вносимо правки після вашого фідбеку.',

            item1: 'Фінальний дизайн',
            item2: 'Корекція елементів',
            item3: 'Узгодження правок',
          },
          step4: {
            title: 'Оптимізація під платформи',
            description:
              'Після затвердження фінального дизайну, ми створюємо банери у всіх необхідних розмірах і форматах: 300×250, 728×90, 160×600 – для дисплейних мереж; 1080×1080, 1080×1920 – для соціальних мереж; HTML5, GIF – для анімації.',
            item1: 'Веб-формати',
            item2: 'Мобільні формати',
            item3: 'Анімовані версії',
          },
          step5: {
            title: 'Передача фінальних файлів',
            description:
              'Усі готові банери ви отримуєте у зручному вигляді (архів, Google Drive, посилання). Також за запитом надаємо рекомендації щодо їх розміщення або допомагаємо з завантаженням у рекламні кабінети.',

            item1: 'Пакет файлів',
            item2: 'Своєчасна доставка',
            item3: 'Підтримка розміщення',
          },
        },
        examples: {
          title: 'Приклади рекламних банерів, створених з ШІ',
          subTitle:
            'Штучний інтелект відкриває нові можливості у створенні рекламних банерів. Завдяки сучасним генеративним моделям, ми створюємо візуали, які ідеально відповідають цілям бізнесу та потребам аудиторії. Гнучкість, масштабованість і висока якість — ключові переваги нашого підходу.',
          filters: {
            all: 'Всі типи',
            mobile: 'Мобільна реклама',
            retargeting: 'Ретаргетинг',
            education: 'Освітні продукти',
            niche: 'Нішеві проекти',
          },
          examples: {
            item1: {
              title: 'Знижка -50% на літню колекцію',
              description:
                'Банер з яскравим фоном і чітким відображенням продукту. Простий і привабливий дизайн для збільшення конверсії.',
              tags1: 'Знижка',
            },
            item2: {
              title: 'Нова колекція сумок 2023',
              description:
                'Банер для бренду аксесуарів з акцентом на новинки сезону та ексклюзивні пропозиції.',
              tags1: 'Сезонна колекція',
            },
            item3: {
              title: 'Мобільний додаток – Знижка 30%',
              description:
                'Яскравий банер для промо-кампанії мобільного додатку з акцентом на обмежену пропозицію.',
              tags1: 'Анімація',
            },
            item4: {
              title: 'Нова гра – Доступно в AppStore',
              description:
                'Вертикальний банер для мобільної гри з яскравими елементами і чітким CTA.',
              tags1: 'Вертикальний формат',
            },
            item5: {
              title: 'Ви забули щось у кошику!',
              description:
                'Персоналізований банер для ретаргетингу користувачів, які не завершили покупку.',
              tags1: 'Ретаргетинг',
              tags2: 'Персоналізація',
              tags3: 'Кошик',
            },
            item6: {
              title: 'Курс з маркетингу – Старт 15 вересня',
              description:
                'Інформативний банер для освітнього проекту з фокусом на переваги курсу та дату початку.',
              tags1: 'Навчання',
              tags2: 'Онлайн-курс',
              tags3: 'Маркетинг',
            },
            item7: {
              title: 'Ексклюзивна пропозиція для геймерів',
              description:
                'Тематичний банер для ігрового сервісу з використанням відповідної стилістики та кольорової гами.',
              tags1: 'Ігри',
              tags2: 'Пропозиція',
            },
            item8: {
              title: 'Фінансовий сервіс для бізнесу',
              description:
                'Професійний банер для B2B фінансового продукту з акцентом на безпеку та надійність.',
              tags1: 'Фінанси',
              tags2: 'Безпека',
            },
          },
          footerTitle: 'Додаткова інформація',
          footerText1:
            'Ми надаємо приклади банерів у форматі PNG, JPEG, GIF або HTML5. За потреби — підготуємо банер-сет під Google Ads, Meta Ads або будь-яку DSP-платформу.',
          footerText2:
            'Крім того, для кожного замовлення ми можемо запропонувати декілька варіантів дизайну — щоб ви могли обрати той, що працює найкраще. Усе це — без значного підвищення ціни, адже генерація відбувається автоматизовано.',
        },
        advantages: {
          title: 'Переваги використання ШІ в створенні банерів',
          subTitle:
            'Використання штучного інтелекту в дизайні рекламних банерів — це не просто модний тренд, а практичне рішення, що дає конкретні переваги бізнесу. Нижче — ключові причини, чому все більше компаній обирають саме AI-дизайн:',
          speed: {
            title: 'Швидкість виконання',
            description:
              'Замість кількох днів на підготовку макетів — перші варіанти банерів ви можете отримати вже через кілька годин. Алгоритми працюють швидко й паралельно, що особливо корисно для термінових кампаній.',
          },
          variety: {
            title: 'Більше варіантів на вибір',
            description:
              'ШІ дозволяє одразу згенерувати десятки унікальних креативів. Це дає змогу швидше знайти ідеальний стиль, протестувати кілька версій (A/B-тестування) та обрати найефективніший варіант.',
          },
          creativity: {
            title: 'Креативність + аналітика',
            description:
              'AI бере до уваги тренди, візуальні патерни та переваги аудиторії. Завдяки цьому створюються банери, які не просто красиві, а ще й працюють на результат: високий CTR, більше конверсій, краще залучення.',
          },
          budget: {
            title: 'Економія бюджету',
            description:
              'Ручна робота дизайнерів — дорога. Застосування генеративного ШІ суттєво знижує витрати на виробництво банерів, особливо якщо вам потрібна велика кількість форматів.',
          },
          scaling: {
            title: 'Масштабування',
            description:
              'Потрібні банери 10+ форматів? Або серія з 30 варіацій під різні оффери? Для ШІ це не проблема. Ви зможете масштабувати рекламу в кілька кліків.',
          },
          adaptation: {
            title: 'Адаптація під платформи',
            description:
              'ШІ «розуміє», які банери краще працюють у Facebook, які — в Google Ads, а які — в TikTok. Тому банери одразу оптимізуються під специфіку кожного каналу.',
          },
        },
        target: {
          title: 'Для кого підходить ця послуга та чому обирають нас',
          text: 'Послуга створення рекламних банерів з використанням ШІ — це ефективне рішення для будь-якого бізнесу, який прагне швидко та вигідно просуватися в інтернеті. І незалежно від ніші, ми знаємо, як дати вам результат.',
          subTitle1: 'Кому буде корисно',
          subTitle2: 'Чому обирають нас',
          ecommerce: {
            title: 'Інтернет-магазинам та e-commerce',
            description:
              'Яскраві банери для акцій, розпродажів, новинок. Швидка генерація сотень банерів для різних товарних категорій.',
          },
          mobile: {
            title: 'Розробникам мобільних застосунків',
            description:
              'Креативи для просування в TikTok, Meta та Google Ads. Висока конверсія завдяки підходу, заснованому на ШІ та тестуванні.',
          },
          education: {
            title: 'Онлайн-курсам та освітнім платформам',
            description:
              'Професійні банери для реклами вебінарів, курсів та програм навчання з акцентом на ваші конкурентні переваги.',
          },
          gaming: {
            title: 'Гемблінг-проєктам та розважальним сервісам',
            description:
              'Залучення уваги яскравими візуалами з дотриманням законодавчих обмежень та особливостей ніші.',
          },
          b2b: {
            title: 'B2B-компаніям',
            description:
              'Презентація послуг, подій, програм або генерація лідів. Банери, що відповідають вашому корпоративному стилю.',
          },
          agencies: {
            title: 'Маркетологам та агентствам',
            description:
              'Масштабне та швидке виробництво банерів під проєкти клієнтів. Нові ідеї та підходи для збільшення конверсії.',
          },
        },
        whyUs: {
          speed: {
            title: 'Швидкість',
            description:
              'Перші варіанти креативів вже за кілька годин. Цілу кампанію можемо підготувати за 1-2 дні.',
          },
          quality: {
            title: 'Якість + ШІ',
            description: 'Поєднання штучного інтелекту з людським досвідом.',
          },
          experience: {
            title: 'Досвід у різних нішах',
            description: 'Розуміння специфіки різних бізнес-секторів.',
          },
          adaptation: {
            title: 'Повна адаптація',
            description: 'Налаштування під ваші потреби та бренд.',
          },
          transparency: {
            title: 'Прозорий процес',
            description: 'Повний контроль на кожному етапі створення.',
          },
          pricing: {
            title: 'Оптимальні ціни',
            description: 'Доступні тарифні плани для будь-якого бюджету.',
          },
        },
        specialOffer: {
          tagline: 'Спеціальна пропозиція',
          title: 'Літня знижка 50%',
          description: 'На всі види рекламних банерів для вашого бізнесу',
          buttonText: 'Замовити',
        },
        additionalInfo: {
          title: 'Додаткова інформація',
        },
        checklist: {
          title: 'Замовляйте сучасні рекламні банери вже сьогодні',
          subTitle:
            'Світ цифрового маркетингу змінюється, і банери, створені за допомогою ШІ, — це не просто тренд, а ефективний інструмент просування. Вони привертають увагу, передають меседж, стимулюють кліки — і все це з мінімальними витратами часу та бюджету.',
          text: 'Якщо вам потрібно:',
          items: {
            item1: 'привернути нових клієнтів',
            item2: 'оновити креативи під нову пропозицію',
            item3: 'провести A/B-тестування різних варіантів',
            item4: 'заощадити бюджет на дизайн',
            item5: 'швидко запустити рекламну кампанію',
          },
          footerText:
            'Замовляйте рекламні банери з використанням ШІ прямо зараз — і отримайте сучасний дизайн, що працює на результат.',
          footerSub:
            "Зв'яжіться з нами для консультації або залиште заявку — відповімо протягом 1 робочого дня.",
        },
        faq: {
          q1: 'Чим банери, створені за допомогою ШІ, кращі за звичайні?',
          a1: 'ШІ-банери створюються швидше, коштують дешевше і можуть генерувати десятки варіацій для тестування. Вони поєднують креативність з аналітикою для максимальної ефективності.',
          q2: 'Які формати банерів ви створюєте?',
          a2: 'Ми створюємо статичні банери (JPG, PNG), анімовані (GIF, HTML5), а також адаптуємо під різні розміри для різних платформ.',
          q3: 'Чи буде банер унікальним?',
          a3: 'Так, кожен банер створюється з нуля на основі ваших вимог. ШІ генерує унікальні варіації, які потім доопрацьовуються дизайнером.',
          q4: 'Чи потрібні технічні знання, щоб замовити банер?',
          a4: 'Ні. Ви просто надаєте коротке ТЗ, а ми беремо на себе все інше.',
          q5: 'Чи можна додати свій логотип або кольори бренду?',
          a5: 'Звичайно! Ми інтегруємо ваш брендинг у всі банери для підтримки єдності стилю.',
          q6: 'Скільки часу займає створення банеру з ШІ?',
          a6: 'Залежить від складності, але зазвичай 2-24 години. Для складних проєктів може знадобитися до 2-3 днів.',
          q7: 'Чи можна протестувати кілька варіантів банерів?',
          a7: 'Так! Ми створюємо кілька варіацій для A/B-тестування, щоб ви могли вибрати найефективніший варіант.',
          ctaText: 'Не знайшли відповідь на своє питання?',
          ctaButton: 'Напишіть нам',
        },
      },
      BrandbookPage: {
        hero: {
          title: 'Брендбук для вашого бізнесу — візуальна ідентичність',
          subtitle:
            'У сучасному конкурентному середовищі компаніям недостатньо просто мати логотип. Потрібно мати цілісну, зрозумілу систему візуальної ідентичності. Брендбук — це інструмент, який гарантує стабільність бренду у всіх точках контакту з аудиторією.',
          buttonText: 'Замовити брендбук',
          features: {
            uniqueness: 'Унікальність',
            recognition: 'Впізнаваність',
            effectiveness: 'Ефективність',
          },
          phoneText: 'КОМПАНІЯ',
          phoneText2: 'Фірмовий стиль',
        },
        whatIs: {
          title: 'Що таке брендбук і навіщо він потрібен',
          subtitle: 'Повне керівництво',
          description:
            'Брендбук — це документ, який містить всі правила візуального та вербального оформлення бренду. Його основна мета — забезпечити єдиний стиль компанії незалежно від того, хто створює контент: дизайнер, маркетолог чи підрядник.',
          features: {
            systematic: {
              title: 'Системність',
              description:
                'Усі елементи бренду використовуються послідовно, без випадковостей. Логотип, кольори, шрифти та графічні елементи становлять єдине ціле.',
            },
            professional: {
              title: 'Професійність',
              description:
                'Ваш бренд виглядає серйозно й надійно на всіх платформах. Клієнти та партнери сприймають компанію як стабільну та професійну.',
            },
            recognition: {
              title: 'Впізнаваність',
              description:
                "Клієнт швидше запам'ятовує і довіряє бренду зі стабільною айдентикою. Регулярність візуальних елементів підвищує лояльність і довіру.",
            },
            convenience: {
              title: 'Зручність для команди',
              description:
                'Замість тисячі пояснень ви просто надсилаєте брендбук. Економія часу та зусиль при роботі з підрядниками та новими співробітниками.',
            },
          },
          footerTitle: 'Без брендбуку бренд втрачає цілісність',
          footerText:
            'Без брендбуку бренд легко «розпадається»: кольори, шрифти та меседжі втрачають логіку, а враження від компанії — чіткість. Це як оркестр без диригента — кожен грає свою мелодію, але гармонії не виникає.',
        },
        howItLooks: {
          title: 'Як виглядає готовий брендбук',
          subTitle:
            'Готовий брендбук — це структурований PDF або інтерактивний документ, який легко зрозуміти і зручно використовувати щодня. Він містить не лише візуальні елементи, а й пояснення, як і де саме їх застосовувати.',
          sections: {
            titlePage: {
              title: 'Титульна сторінка',
              description:
                'Кожен брендбук починається з титульної сторінки, яка містить назву бренду, логотип та версію документа. Це перша візуальна точка контакту з вашим брендом.',
            },
            visualElements: {
              title: 'Розділи з візуальними елементами',
              description:
                'Чіткі розділи з логотипом, кольоровою палітрою, типографікою та іншими візуальними параметрами. Кожен елемент супроводжується правилами використання та технічними специфікаціями.',
            },
            usageExamples: {
              title: 'Приклади використання',
              description:
                'Макети для різних каналів комунікації: як бренд виглядає в соцмережах, на візитках, рекламних банерах, сторінках сайту та інших точках контакту з аудиторією.',
            },
            realScenarios: {
              title: 'Реальні сценарії застосування',
              description:
                'Надаємо адаптації для реальних сценаріїв: як ваша айдентика виглядає в Instagram, у розсилці, на упаковці чи в презентації для інвесторів — щоб побачити, як бренд працює в дії.',
            },
          },
          mockup: {
            companyName: 'КОМПАНІЯ',
            companyType: 'Фірмовий стиль',
            brandStyle: 'Фірмовий стиль компанії "BRAND"',
            versionText: 'Версія',
            textItem1: 'Варіанти використання логотипу:',
            textItem2: 'Приклади застосування стилю:',
            logo: {
              title: 'Логотип',
              subtitle: 'Основний елемент фірмового стилю',
            },
            colors: {
              title: 'Кольорова палітра та типографіка',
              subtitle: 'Єдиний стиль у всіх комунікаціях',
            },
            fonts: {
              montserrat: 'Montserrat (заголовки)',
              openSans: 'Open Sans (основний текст)',
            },
            examples: {
              businessCard: 'Візитка',
              website: 'Сайт',
              banner: 'Банер',
            },
          },
        },
        process: {
          title: 'Як ми створюємо брендбук — етапи роботи',
          subTitle:
            'Створення брендбуку — це чітко структурований процес, який включає аналіз, дизайн і узгодження всіх складових стилю бренду. Ми працюємо прозоро й етапно, щоб ви отримали не просто красиву презентацію, а дієвий інструмент для бізнесу.',
          steps: {
            step1: {
              title: 'Брифінг та аналіз',
              description:
                'Ми вивчаємо ваш бізнес, конкурентів, цільову аудиторію, ринок і цінності бренду. Збираємо все необхідне для створення унікального стилю. Проводимо аналіз тенденцій у вашій галузі та створюємо детальний звіт з рекомендаціями для майбутньої айдентики.',
            },
            step2: {
              title: 'Концепція візуального стилю',
              description:
                'Розробляємо кілька варіантів логотипу, підбираємо палітру кольорів, шрифти та формуємо початкову айдентику. Ви обираєте найбільш вдалий напрям. Презентуємо концепції, пояснюємо ідею та символізм кожного елемента. Допомагаємо обрати найкращий варіант.',
            },
            step3: {
              title: 'Створення бренд-системи',
              description:
                'Після затвердження концепції ми готуємо повний пакет візуальних рішень: правила використання логотипу, шрифти, кольори, графічні елементи, шаблони тощо. Створюємо гармонійну систему, де кожен елемент доповнює інший і працює на єдину ідею бренду.',
            },
            step4: {
              title: 'Розробка гайдлайнів і фінального документа',
              description:
                'Оформлюємо все в структурований документ з прикладами використання. За потреби — додаємо рекомендації з тону комунікації та стилю візуального контенту. Продумуємо структуру документа так, щоб нею було легко користуватися як вашій команді, так і підрядникам.',
            },
            step5: {
              title: 'Передача брендбуку та консультації',
              description:
                'Ви отримуєте фінальний брендбук у зручному форматі (PDF, Figma або інше). Пояснюємо, як ним користуватися, і відповідаємо на всі запитання. Надаємо консультаційну підтримку при впровадженні нового фірмового стилю та допомагаємо у вирішенні будь-яких питань.',
            },
          },
          footerText:
            'Ми не просто оформлюємо — ми будуємо систему, яка підсилює ваш бренд на роки вперед.',
        },
        whyUs: {
          title: 'Чому варто замовити брендбук саме у нас',
          subTitle:
            'Ми створюємо не шаблонні документи, а живі брендбуки, які реально працюють на розвиток бізнесу. Наш підхід — це поєднання глибокого розуміння маркетингу, дизайну та стратегії.',
          advantages: {
            individual: {
              title: 'Індивідуальний підхід',
              description:
                'Ми не копіюємо чужі рішення. Кожен брендбук — це унікальна система, створена спеціально під ваш бренд, ринок і цілі. Ми вивчаємо особливості вашого бізнесу і створюємо дизайн, який відображає його сутність.',
            },
            experience: {
              title: 'Досвід і експертиза',
              description:
                'У нашому портфоліо — десятки проєктів для малого бізнесу, стартапів, онлайн-сервісів, виробництва та інфобізнесу. Наша команда має експертизу в різних галузях, що дозволяє створювати ефективні візуальні рішення.',
            },
            comprehensive: {
              title: 'Комплексний підхід',
              description:
                "Ми не просто малюємо логотип, а створюємо повноцінну візуальну мову, яка працює в будь-якому середовищі — від соцмереж до упаковки. Всі елементи бренду взаємопов'язані і доповнюють один одного.",
            },
            deadlines: {
              title: 'Чіткі дедлайни',
              description:
                'Ми дотримуємось термінів і завжди інформуємо про статус проєкту. Ви будете знати, на якому етапі знаходиться робота, і отримаєте готовий брендбук точно в обумовлений час без затримок і зривів термінів.',
            },
            support: {
              title: 'Підтримка після здачі',
              description:
                "Навіть після завершення роботи ми на зв'язку й готові допомогти з уточненнями або адаптаціями. Ми не зникаємо після отримання оплати, а залишаємося вашим партнером і консультантом з питань бренду.",
            },
          },
          footerText:
            'Наша мета — не просто «зробити дизайн», а посилити ваш бренд і допомогти йому зростати.',
        },
        target: {
          title: 'Для кого підходить брендбук',
          subTitle:
            'Брендбук — це універсальний інструмент, який потрібен не лише великим компаніям. Він корисний будь-якому бізнесу, що прагне виглядати цілісно та професійно.',
          categories: {
            startups: {
              title: 'Стартапам',
              badge: 'Ідеально',
              des: 'На старті важливо сформувати сильний, послідовний образ, щоб швидше зайняти свою нішу. Брендбук допоможе стартапу створити впізнаваний стиль з перших кроків.',
              benefits: {
                item1: 'Формування чіткої ідентичності з самого початку',
                item2: 'Професійний вигляд для інвесторів та клієнтів',
                item3: 'Швидша інтеграція нових членів команди',
              },
            },
            rebranding: {
              title: 'Компаніям на етапі ребрендингу',
              des: 'Якщо ви оновлюєте стиль або змінюєте позиціонування — брендбук закріпить нову ідентичність та забезпечить послідовний перехід.',
              benefits: {
                item1:
                  'Чіткі інструкції для поступового оновлення всіх матеріалів',
                item2: 'Запобігання змішування старих і нових елементів стилю',
                item3: 'Правила транзитного періоду ребрендингу',
              },
            },
            smb: {
              title: 'Малому та середньому бізнесу',
              des: 'Щоб конкурувати з великими гравцями, потрібно мати професійний вигляд у кожному дотику з клієнтом, незалежно від розміру вашої компанії.',
              benefits: {
                item1: 'Виглядати на рівні з великими компаніями',
                item2: 'Економія на дизайні завдяки готовим шаблонам',
                item3: 'Системність комунікації з клієнтами',
              },
            },
            education: {
              title: 'Освітнім і креативним проєктам',
              des: "Айдентика допомагає чітко доносити ідеї та підсилює комунікацію. Особливо важливо для проєктів, де візуальна складова тісно пов'язана з суттю.",
              benefits: {
                item1: 'Підкреслення унікальності вашого підходу',
                item2: 'Системна подача візуального контенту',
                item3: 'Додаткова цінність креативного продукту',
              },
            },
            remote: {
              title: 'Командам із віддаленими підрядниками',
              des: 'Брендбук дає зрозумілі інструкції, як працювати зі стилем, незалежно від того, хто виконує роботу та звідки.',
              benefits: {
                item1: 'Єдині стандарти для всіх виконавців',
                item2: 'Швидке долучення нових дизайнерів та маркетологів',
                item3: 'Збереження цілісності бренду при зміні підрядників',
              },
            },
          },
          footerText:
            'Брендбук — це не «опція», а базовий інструмент для стабільного зростання та впізнаваності бренду, незалежно від розміру вашого бізнесу.',
        },
        cta: {
          title:
            'Замовте брендбук уже сьогодні — зробіть свій бренд впізнаваним',
          description:
            "Якщо ви хочете, щоб ваш бренд викликав довіру, виглядав професійно та легко запам'ятовувався — брендбук стане надійною основою. Це інвестиція в стабільність, впізнаваність і ріст.",
          subtitle1:
            'Ми готові створити для вас брендбук, який говорить мовою вашого бізнесу;',
          subtitle2: 'виглядає сучасно й послідовно',
          subtitle3:
            'працює однаково ефективно в цифровому та офлайн-середовищі.',
          buttonText: 'Залишити заявку',
          additionalText:
            "Залиште заявку, і ми зв'яжемося з вами для короткого брифінгу. Вже за кілька тижнів ви отримаєте потужний інструмент, що зробить ваш бренд сильнішим.",
        },
        faq: {
          q1: 'Що таке брендбук?',
          a1: 'Брендбук — це набір правил для використання візуальних та вербальних елементів вашого бренду, щоб забезпечити його єдність і впізнаваність.',
          q2: 'Навіщо мені брендбук, якщо я маю логотип?',
          a2: 'Логотип — лише частина бренду. Брендбук визначає, як використовувати логотип, кольори, шрифти та інші елементи для створення єдиного стилю.',
          q3: 'Які елементи входять до брендбуку?',
          a3: 'До брендбуку входять логотип, кольорова палітра, шрифти, графічні елементи, правила використання та інші важливі аспекти комунікації.',
          q4: 'Чи потрібно оновлювати брендбук з часом?',
          a4: 'Так, брендбук може потребувати оновлення, особливо при ребрендингу або зміні стратегії компанії.',
          q5: 'Скільки часу займає створення брендбуку?',
          a5: 'Зазвичай створення брендбуку займає від 2 до 4 тижнів, залежно від складності проєкту.',
          q6: 'Чи можу я використовувати брендбук для різних форматів, наприклад, соцмереж та реклами?',
          a6: 'Так, брендбук містить правила для всіх типів комунікацій, включаючи соцмережі, рекламу та веб-дизайн.',
          q7: 'Чи потрібні спеціальні навички для використання брендбуку?',
          a7: 'Ні, брендбук призначений для всіх членів команди — від дизайнерів до маркетологів. Він надає чіткі інструкції для кожного елемента бренду.',
          ctaText: 'Не знайшли відповідь на своє питання?',
          ctaButton: 'Напишіть нам',
        },
      },
      webDesign: {
        // Hero Section
        heroTitle: 'Веб-дизайн: створення унікального цифрового образу',
        heroDescription:
          'Професійний веб-дизайн — це не просто красива картинка, а ефективний інструмент комунікації. Якісний дизайн формує перше враження, підвищує довіру та безпосередньо впливає на результативність сайту.',
        orderDesignButton: 'Замовити дизайн',
        adaptability: 'Адаптивність',
        creativity: 'Креативність',
        conversion: 'Конверсійність',

        // About Section
        whatIsWebDesign: 'Що таке веб-дизайн?',
        aboutDescription1:
          'Веб-дизайн — це процес створення зовнішнього вигляду та інтерфейсу сайту, що поєднує в собі візуальну привабливість і зручність для користувача. Його головна мета — зробити взаємодію з ресурсом простою, приємною та ефективною.',
        aboutDescription2:
          'Сучасний веб-дизайн виконує кілька ключових функцій: підвищує впізнаваність бренду, формує довіру до компанії та забезпечує позитивний користувацький досвід (UX). Актуальні тенденції включають адаптивність (підлаштування під різні пристрої), мінімалізм у дизайні, а також використання анімацій та інтерактивних елементів для залучення уваги.',

        // Function Cards
        brandingTitle: 'Брендинг та впізнаваність',
        brandingText:
          'Якісний веб-дизайн підкреслює унікальність вашого бренду, відображає його цінності та виділяє серед конкурентів.',
        uxTitle: 'Користувацький досвід (UX)',
        uxText:
          'Зручність навігації, інтуїтивно зрозумілий інтерфейс та логічна структура забезпечують комфортну взаємодію відвідувачів із сайтом.',
        businessGoalsTitle: 'Досягнення бізнес-цілей',
        businessGoalsText:
          'Ефективний дизайн спрямовує користувачів до цільових дій: замовлень, заповнення форм, підписок, дзвінків та інших конверсійних дій.',

        // Importance Section
        whyImportantTitle: 'Чому веб-дизайн важливий для вашого бізнесу?',
        importanceIntro:
          'Сайт — це часто перше, з чим стикається потенційний клієнт. Якісний дизайн формує довіру і перетворює відвідувачів на клієнтів.',

        // Stats
        seconds: 'секунди',
        firstImpressionTime:
          'Час, за який формується перше враження про сайт та компанію',
        users: 'користувачів',
        leaveSite: 'Залишають сайт, якщо дизайн непривабливий або застарілий',
        toConversion: 'до конверсії',
        qualityDesignAdds:
          'Додає якісний дизайн з продуманим користувацьким досвідом',

        // Benefits
        firstImpressionTitle: 'Перше враження',
        firstImpressionText:
          'Якщо дизайн виглядає застарілим або незручним, користувач швидко залишить сторінку. Якісний веб-дизайн формує позитивне перше враження та підвищує рівень довіри до компанії.',
        userExperienceTitle: 'Користувацький досвід',
        userExperienceText:
          'Зручна навігація, логічна структура та швидке завантаження сторінок напряму впливають на поведінку користувачів і конверсію. Інтуїтивний інтерфейс утримує увагу та підштовхує до цільових дій.',
        seoTitle: 'SEO-просування',
        seoText:
          'Пошукові системи враховують показники взаємодії з сайтом: час перебування, глибину перегляду, мобільну оптимізацію. Сучасний дизайн — це ще й внесок у SEO-просування та органічну видимість.',
        imgText: 'Замовити',

        // Services Section
        ourServicesTitle: 'Наші послуги у сфері веб-дизайну',
        servicesDescription:
          'Ми пропонуємо повний спектр послуг з дизайну сайтів — від створення концепції до повної реалізації проєкту, враховуючи всі сучасні тенденції та вимоги.',

        // Service Cards
        createFromScratchTitle: 'Створення дизайну сайту з нуля',
        createFromScratchText:
          'Ми розробляємо індивідуальний дизайн, який відображає цінності вашого бренду. Починаємо з концепції, формуємо структуру (Wireframes) і створюємо візуальний стиль, який гармонійно поєднує естетику з функціональністю.',
        createFromScratchFeatures: {
          item1: 'Розробка концепції та прототипів',
          item2: 'Створення унікального візуального стилю',
          item3: 'UX/UI проектування всіх елементів інтерфейсу',
          item4: 'Підготовка макетів для розробників',
        },

        restylingTitle: 'Рестайлінг існуючих сайтів',
        restylingText:
          'Ваш сайт виглядає застаріло або не приносить результатів? Ми оновимо дизайн відповідно до сучасних вимог, поліпшимо структуру, зробимо інтерфейс більш зручним і привабливим для користувача.',
        restylingFeatures: {
          item1: 'Аналіз недоліків поточного дизайну',
          item2: 'Оновлення візуального стилю',
          item3: 'Поліпшення структури та навігації',
          item4: 'Оптимізація конверсійних шляхів',
        },

        responsiveTitle: 'Адаптивний дизайн',
        responsiveText:
          'Створюємо інтерфейси, які коректно відображаються на смартфонах, планшетах і десктопах. Це гарантує зручність користування з будь-якого пристрою та позитивно впливає на поведенкові фактори.',
        responsiveFeatures: {
          item1: 'Оптимізація для всіх типів пристроїв',
          item2: 'Гнучкі макети та елементи інтерфейсу',
          item3: 'Адаптація контенту для різних роздільних здатностей',
          item4: 'Тестування на всіх популярних пристроях',
        },

        ecommerceTitle: 'Дизайн для eCommerce',
        ecommerceText:
          'Розробляємо UX/UI-дизайн для інтернет-магазинів з урахуванням поведінки покупців. Оптимізуємо шлях користувача до покупки, щоб збільшити конверсію та середній чек.',
        ecommerceFeatures: {
          item1: 'Проектування зручних каталогів та фільтрів',
          item2: 'Розробка карток товарів, що конвертують',
          item3: 'Оптимізація процесу оформлення замовлення',
          item4: 'Інтеграція з платіжними системами',
        },

        additionalServicesTitle: 'Додаткові послуги',
        additionalServicesText:
          'Пропонуємо дизайн лендінгів, блогів, корпоративних сайтів, а також підготовку графічних елементів: банерів, іконок, презентацій. Працюємо з готовими CMS або в парі з розробниками.',
        additionalServicesFeatures: {
          item1: 'Дизайн банерів та рекламних матеріалів',
          item2: 'Створення іконок та графічних елементів',
          item3: 'Дизайн інтерфейсів для CMS',
          item4: 'UX-аудит існуючих проектів',
        },

        // Benefits Section
        advantagesTitle: 'Переваги співпраці з нами',

        // Benefit Cards
        experiencedTeamTitle: 'Досвідчена команда',
        experiencedTeamText:
          'Наші дизайнери мають практичний досвід у створенні проєктів для різних ніш — від малого бізнесу до eCommerce-платформ.',
        expertise: 'Експертність',

        modernToolsTitle: 'Сучасні інструменти та технології',
        modernToolsText:
          'Ми працюємо з Figma, Adobe XD, Sketch, дотримуємося найновіших стандартів веб-дизайну та UI/UX.',
        innovation: 'Інновації',

        individualApproachTitle: 'Індивідуальний підхід',
        individualApproachText:
          'Кожен проєкт — унікальний. Ми враховуємо цілі бізнесу, специфіку ринку та вподобання цільової аудиторії.',
        clientOriented: 'Клієнтоорієнтованість',

        uniqueDesignTitle: 'Гарантія унікального дизайну',
        uniqueDesignText:
          'Жодних шаблонів — лише оригінальні рішення, створені спеціально під ваш бренд.',
        originality: 'Оригінальність',

        uxStandardsTitle: 'Відповідність UX/UI стандартам',
        uxStandardsText:
          'Дизайн не лише привабливий, а й зручний. Ми тестуємо прототипи та оптимізуємо інтерфейс для максимальної ефективності.',
        efficiency: 'Ефективність',

        timelyDeliveryTitle: 'Своєчасна доставка',
        timelyDeliveryText:
          'Дотримуємося узгоджених термінів та забезпечуємо плавний процес роботи. Ви завжди знаєте, на якому етапі знаходиться ваш проєкт.',
        punctuality: 'Пунктуальність',

        // CTA Section
        ctaTitle: 'Замовте веб-дизайн, який приносить результати',
        ctaDescription:
          'Професійний веб-дизайн — це не просто витрата, а інвестиція у зростання вашого бізнесу. Добре спроектований сайт приваблює більше відвідувачів, конвертує більше лідів і допомагає вашому бізнесу виділитися серед конкурентів у цифровому просторі.',
        orderConsultationButton: 'Замовити безкоштовну консультацію',

        // FAQ Section
        faqTitle: 'FAQ',
        faqNotFound: 'Не знайшли відповідь на своє питання?',
        writeToUsButton: 'Напишіть нам',

        // FAQ Questions and Answers
        faqData: {
          question1: 'Що таке веб-дизайн і чому він важливий для бренду?',
          answer1:
            'Веб-дизайн — це процес створення зовнішнього вигляду та функціональності сайту. Він формує перше враження про бренд, впливає на довіру користувачів і спонукає до взаємодії з вашим продуктом або послугою.',

          question2: 'Які елементи формують унікальний цифровий образ бренду?',
          answer2:
            'Це фірмові кольори, типографіка, логотип, ілюстрації, стиль інтерфейсу, структура сайту та загальна візуальна мова, яка підкреслює індивідуальність вашого бренду.',

          question3:
            'У чому різниця між шаблонним та індивідуальним веб-дизайном?',
          answer3:
            'Шаблонний дизайн — це готові рішення з обмеженими можливостями налаштування. Індивідуальний веб-дизайн створюється з нуля під потреби конкретного бізнесу, забезпечуючи максимальну відповідність бренду та унікальність.',

          question4: 'Як веб-дизайн впливає на поведінку користувачів?',
          answer4:
            'Добре продуманий дизайн полегшує навігацію, прискорює прийняття рішень, підвищує час перебування на сайті та знижує рівень відмов, що прямо впливає на конверсії.',

          question5: 'Скільки часу займає створення унікального веб-дизайну?',
          answer5:
            'Залежно від складності проєкту, розробка унікального дизайну може тривати від 2 до 8 тижнів. На це впливає кількість сторінок, функціонал, участь замовника в процесі.',

          question6:
            'Чи враховується мобільна адаптація під час створення дизайну?',
          answer6:
            "Так, адаптивний дизайн є обов'язковим стандартом. Сайт має бути зручним і функціональним на всіх пристроях — смартфонах, планшетах та ПК.",

          question7:
            'Як підтримувати цілісність цифрового образу бренду після запуску сайту?',
          answer7:
            'Важливо дотримуватися гайдлайну бренду, використовувати єдину стилістику в усіх цифрових каналах, оновлювати контент відповідно до tone of voice бренду та регулярно проводити аудит UX/UI.',
        },

        // Modal
        modalTitle: 'Замовити веб-дизайн',
        modalSubtitle:
          "Залиште заявку і ми зв'яжемося з вами для обговорення деталей проєкту",

        // Mock content
        yourBrand: 'Your Brand',
        order: 'Замовити',
      },
      uxUiDesignPage: {
        // Hero Section
        heroTitle:
          'UX/UI дизайн для бізнесу — створюємо зручні та ефективні цифрові інтерфейси',
        heroDescription:
          'UX/UI дизайн — це не просто естетичне оформлення, а стратегічний інструмент, який перетворює відвідувачів на клієнтів. Ми створюємо інтерфейси, які підвищують конверсію, зручність користування та лояльність клієнтів.',
        orderDesignButton: 'Замовити UX/UI дизайн',
        featureIntuitive: 'Інтуїтивність',
        featureUserOriented: 'Орієнтація на користувача',
        featureEffective: 'Ефективність',
        // Philosophy Section
        philosophyTitle: 'Продуманий дизайн, який працює на результат',
        philosophyResearch: 'Дослідження',
        philosophyResearchDesc:
          'Аналіз потреб користувачів, конкурентів та бізнес-вимог. Виявлення проблем та можливостей для покращення взаємодії.',
        philosophyDesign: 'Дизайн',
        philosophyDesignDesc:
          'Розробка візуального стилю, UI компонентів та детальне опрацювання всіх екранів з увагою до деталей.',
        philosophyPrototyping: 'Проектування',
        philosophyPrototypingDesc:
          'Створення інформаційної архітектури, користувацьких сценаріїв та прототипів різної деталізації.',
        philosophyTesting: 'Тестування',
        philosophyTestingDesc:
          'Юзабіліті-тестування, аналіз поведінкових метрик та ітеративне вдосконалення на основі реальних даних.',
        philosophyApproach: 'Наш підхід',
        philosophyApproachText1:
          'Наша команда створює не просто гарні інтерфейси, а цілісні екосистеми цифрової взаємодії, які враховують психологію користувачів, бізнес-цілі та технічні можливості.',
        philosophyApproachText2:
          'Ми використовуємо data-driven підхід, збираючи та аналізуючи дані на кожному етапі дизайн-процесу. Це дозволяє приймати обґрунтовані рішення та створювати інтерфейси, які не тільки естетично привабливі, але й максимально ефективні.',
        philosophyAdvantage1: 'Підвищення конверсії і залученості',
        philosophyAdvantage2: 'Зниження відтоку користувачів',
        philosophyAdvantage3: 'Прискорення досягнення бізнес-цілей',
        philosophyResult:
          'Результат — цифровий продукт, який інтуїтивно зрозумілий, естетично привабливий, технічно досконалий і, головне, ефективно вирішує бізнес-завдання.',

        //Approach to UX/UI design — functionality, logic, aesthetics
        approachTitle:
          'Підхід до UX/UI дизайну — функціональність, логіка, естетика',
        approachText:
          'Наш підхід до UX/UI дизайну базується на найкращих світових практиках створення інтерфейсів, що однаково добре працюють як для користувачів, так і для бізнесу. Ми пропонуємо рішення, обґрунтовані реальними даними та дослідженнями.',
        items1: {
          title: 'Дослідження користувачів і конкурентів',
          text: 'Аналізуємо поведінку цільової аудиторії та конкурентне середовище, щоб розробити ефективні UX/UI рішення.',
          item1: "Інтерв'ю",
          item2: 'Аналіз даних',
          item3: 'Профілювання користувачів',
          item4: 'Аудиторія',
          item5: 'Аналітика',
          item6: 'Конкуренти',
          item7: 'Сценарії',
        },
        items2: {
          title: 'UX-архітектура та прототипування',
          text: 'Проектуємо логічні структури та сценарії взаємодії для створення інтуїтивно зрозумілої навігації та зручного інтерфейсу.',
          item1: 'Користувацькі потоки',
          item2: 'Вайрфрейми',
          item3: 'Прототипи',
        },
        items3: {
          title: 'UI-дизайн у стилі бренду',
          text: 'Розробляємо візуальні елементи відповідно до вашої фірмової айдентики, забезпечуючи доступність та узгодженість користувацького досвіду.',
          item1: 'Візуальний дизайн',
          item2: 'Доступність',
          item3: 'Компоненти',
        },
        items4: {
          title: 'Тестування, UX-оптимізація та передача в розробку',
          text: 'Тестуємо наші рішення з реальними користувачами, оптимізуємо їх для безперебійного досвіду та готуємо файли для фронтенд-команди.',
          item1: 'Юзабіліті-тестування',
          item2: 'Оптимізація',
          item3: 'Документація',
        },

        // Business Benefits Section
        benefitsTitle: 'Що дає UX/UI дизайн для вашого бізнесу',
        benefitsSubtitle:
          'Замовляючи UX/UI дизайн у нас, ви отримуєте не просто красиву картинку — а повноцінний інструмент для зростання бізнесу.',
        benefit1Title: 'Зрозумілий інтерфейс для користувачів',
        benefit1Text:
          'Мінімум зайвого — максимум зручності. Кожен елемент має логіку та сенс.',
        benefit2Title: 'Адаптивність і кросбраузерність',
        benefit2Text:
          'Інтерфейс коректно працює на смартфонах, планшетах і будь-яких розширеннях екрана.',
        benefit3Title: 'Підвищення конверсії',
        benefit3Text:
          'Інтуїтивна навігація та грамотна UX-структура сприяють досягненню цільових дій.',
        benefit4Title: 'Унікальний візуальний стиль',
        benefit4Text:
          'Дизайн, що відображає характер вашого бренду та виділяє вас на фоні конкурентів.',
        benefit5Title: 'Дизайн-система та гайдлайни',
        benefit5Text:
          'Повна документація, що спрощує подальшу розробку, масштабування і підтримку.',
        benefitsCta:
          'Мета UX/UI — не лише естетика, а й бізнес-результат, виражений у цифрах.',
        benefitsCtaButton: 'Замовити UX/UI дизайн',
        // Solutions Section
        solutionsTitle:
          'Приклади рішень у UX/UI дизайні — типові задачі, які ми закриваємо',
        solutionsSubtitle:
          'Ми створюємо дизайн для різних ніш і форматів бізнесу. Ось які задачі найчастіше вирішуємо:',
        solution1Type: 'UX/UI для корпоративних сайтів',
        solution1Feature1: 'Чітка структура',
        solution1Feature2: 'Сильні візуальні акценти',
        solution1Feature3: 'Зрозуміла навігація для різних цільових груп',
        solution1Result: 'Результат: ',
        solution1ResultItem: 'репутація бренду + довіра з першого кліку',
        solution2Type: 'UX/UI для інтернет-магазинів',
        solution2Feature1: 'Зручний каталог',
        solution2Feature2: 'Оптимізований чек-аут',
        solution2Feature3: 'Мобільна адаптація з фокусом на швидкість',
        solution2Result: 'Результат:',
        solution2ResultItem:
          'зростання конверсії та зменшення покинутого кошика',
        solution3Type: 'UX/UI для стартапів та MVP',
        solution3Feature1: 'Швидкий прототип для тестування',
        solution3Feature2: 'Мінімалістичний UI з логікою MVP',
        solution3Feature3: 'Можливість масштабування',
        solution3Result: 'Результат: ',
        solution3ResultItem:
          'швидкий вихід на ринок із якісним першим враженням',
        solution4Type: 'UX/UI для мобільних застосунків',
        solution4Feature1: 'Іконки, жести, мікроанімація',
        solution4Feature2: 'UX-моделі під iOS/Android',
        solution4Feature3: 'Тестування сценаріїв користувачів',
        solution4Result: 'Результат:',
        solution4ResultItem: 'залученість користувачів та позитивний досвід',
        solutionsCta:
          'Отримайте UX/UI рішення, яке підходить саме вашому бізнесу',
        solutionsCtaButton: 'Обговорити проєкт',
        // Testimonials Section
        testimonialsTitle: 'Що кажуть клієнти про наш UX/UI дизайн',
        testimonialsDescription:
          'Ми працюємо з бізнесами, яким важливий не просто красивий інтерфейс, а результат. Ось що нам пишуть після запуску:',
        testimonial1Text:
          'Після редизайну сайту час перебування користувачів зріс у 1,5 раза. Дизайн виглядає сучасно, але найголовніше — все логічно і працює як треба.',
        testimonial1Author: 'Засновник IT-компанії',
        testimonial2Text:
          'Було приємно працювати: швидко зрозуміли, чого ми хочемо, і запропонували рішення, про які ми самі не подумали. Новий дизайн реально спростив клієнтам шлях до заявки.',
        testimonial2Author: 'Керівник відділу маркетингу у сфері послуг',
        testimonial3Text:
          'Ми отримали не просто макети, а повну дизайн-систему. Команда чітко дотримувалась дедлайнів і дала технічну підтримку після передачі проєкту.',
        testimonial3Author: 'СЕО eCommerce-бренду',
        testimonialsCtaButton: 'Приєднатися до клієнтів',
        // FAQ Section
        faqTitle: 'FAQ',
        faqData: {
          question1: 'У чому різниця між UX і UI дизайном?',
          answer1:
            'UX (User Experience) відповідає за логіку, структуру і зручність використання інтерфейсу. UI (User Interface) — за візуальне оформлення: кольори, шрифти, стилі, кнопки. Обидва напрями працюють разом для досягнення ідеального користувацького досвіду.',
          question2: "Чи обов'язково робити UX-дослідження?",
          answer2:
            'Так. Без аналізу поведінки користувачів і цілей проєкту дизайн може вийти естетичним, але неефективним. UX-дослідження — основа функціональності.',
          question3: 'Скільки триває розробка UX/UI дизайну?',
          answer3:
            'У середньому від 2 до 6 тижнів, залежно від обсягу проєкту. Якщо потрібно швидше — розглядаємо варіант поетапної роботи або прискореного запуску MVP.',
          question4: 'Чи адаптуєте ви дизайн під мобільні пристрої?',
          answer4:
            'Так, мобільна адаптація — стандартна частина кожного проєкту. Ми створюємо responsive-дизайн для усіх ключових типів пристроїв.',
          question5: 'Ви працюєте з готовим сайтом чи тільки з нуля?',
          answer5:
            'Можемо провести UX-аудит вже існуючого ресурсу, запропонувати редизайн або працювати з чистого аркуша. Усе залежить від ваших цілей.',
          question6: 'Який результат я отримаю після завершення проєкту?',
          answer6:
            'Ви отримаєте готові дизайн-макети у Figma (або іншому зручному форматі), гайдлайн для розробників і за потреби — консультацію під час впровадження.',
          question7: 'Що потрібно, щоб розпочати співпрацю?',
          answer7:
            "Надішліть короткий опис вашого проєкту або зв'яжіться з нами для брифінгу. Ми уточнимо задачі, запропонуємо підхід і розрахуємо вартість.",
        },
        faqCta: 'Маєте додаткові запитання щодо UX/UI дизайну?',
        faqCtaButton: "Зв'язатися з нами",
      },
      typographyLetteringPage: {
        // Hero Section
        heroTitle: 'Типографіка і летеринг — унікальний стиль вашого бренду',
        heroDescription:
          'Типографіка й летеринг — це не просто оформлення тексту. Це потужний інструмент комунікації, що формує перше враження про бренд. Вдалий вибір шрифтів та індивідуальне написання слів здатні підкреслити характер компанії, передати її цінності та викликати довіру.',
        orderButton: 'Замовити розробку',
        feature1: 'Унікальність',
        feature2: 'Виразність',
        feature3: 'Індивідуальність',

        // Typography Importance
        importanceTitle: 'Значення типографіки для брендингу',
        whatIsTypography: 'Що таке типографіка?',
        whatIsTypographyText1:
          "Типографіка — це мистецтво та техніка розміщення, вибору та оформлення тексту для передачі ідей та створення враження. Це те, як текст виглядає, відчувається та сприймається, і це невід'ємна частина дизайну та комунікації.",
        whatIsTypographyText2:
          'Хороша типографія створює ієрархію, встановлює тон, настрій та атмосферу, а також створює відомий бренд-образ для вашої компанії, щоб бути легко впізнаваною для аудиторії.',
        influenceTitle: 'Вплив на бренд',
        influenceText:
          'Правильно підібрана типографіка робить більше, ніж просто передає інформацію. Вона формує сприйняття вашого бренду та може впливати на прийняття рішень вашими клієнтами.',
        influenceList1: 'Формує невербальну комунікацію вашого бренду',
        influenceList2: 'Створює та зміцнює ідентичність бренду',
        influenceList3:
          'Вибудовує інформаційну ієрархію та покращує читабельність',
        influenceList4: 'Викликає емоційний відгук у аудиторії',
        influenceConclusion:
          'Вибір типографіки - це стратегічне рішення, яке має відображати цінності та позиціонування вашого бренду, резонувати з цільовою аудиторією та виділяти вас серед конкурентів.',
        item1: 'Технологічний',
        item2: 'Креативний',
        item3: 'Преміальний',
        item4: 'Доброзичливий',

        // Lettering Section
        letteringArtTitle: 'Летеринг як мистецтво індивідуального стилю',
        letteringDiffTitle: 'Чим летеринг відрізняється від шрифтів',
        letteringDiffText1:
          'Шрифт — це готовий набір символів. Летеринг — це індивідуально намальовані літери. Він не повторюється, створюється під конкретне слово, проєкт чи логотип. Це максимально персоналізований елемент, який неможливо скопіювати чи підробити.',
        letteringDiffText2:
          'Летеринг доречний, коли потрібен унікальний акцент — у назві бренду, логотипі, упаковці, афіші. Він додає характеру та живої емоції, якої не дає стандартний шрифт.',
        letteringFeature1: 'Унікальність',
        letteringFeature2: 'Емоційність',
        letteringFeature3: 'Оригінальність',
        letteringVsTitle: 'Шрифт vs Летеринг',
        itemLettering1: 'Шрифт',
        itemLettering2: 'Бренд',
        itemLettering3: 'Ідентичні символи',
        itemLettering4: 'Летеринг',
        itemLettering5: 'Бренд',
        itemLettering6: 'Унікальні, намальовані символи',
        itemLettering7: 'Застосування:',
        itemLettering8: 'Логотипи та заголовки',
        itemLettering9: 'Упаковка та етикетки',
        itemLettering10: 'Плакати та вивіски',
        itemLettering11: 'Обкладинки книг',
        letteringVsSubtitle: 'Візуальне порівняння',
        letteringShowcaseTitle: 'Приклади летерингу',
        letteringCta:
          'Бажаєте розробити унікальний летеринг для вашого проєкту?',
        letteringCtaButton: 'Замовити летеринг',

        // Methodology Section
        methodologyTitle: 'Наш підхід до типографіки та летерингу',
        methodologyStep1Title: 'Аналіз бренду та цільової аудиторії',
        methodologyStep1Text:
          'Перш ніж створювати типографічну систему або летеринг, ми вивчаємо бренд: його позиціонування, цінності, цільову аудиторію, візуальні рішення конкурентів. Це дозволяє працювати в контексті та створювати доречні, а не випадкові елементи.',
        methodologyStep1Point1: 'Аналіз аудиторії',
        methodologyStep1Point2: 'Аналіз конкурентів',
        methodologyStep1Point3: 'Підбір шрифтових пар',
        methodologyStep2Title: 'Підбір стилю: класика, мінімалізм, експеримент',
        methodologyStep2Text:
          'Залежно від завдань ми обираємо стилістику: гротески чи антиква, мінімалізм чи вибагливий дизайн. Класичні рішення додають солідності, експериментальні — виділяють серед конкурентів.',
        methodologyStep2Option1: 'Класика',
        methodologyStep2Option11:
          'для брендів з акцентом на надійність та престиж',
        methodologyStep2Option2: 'Мінімалізм',
        methodologyStep2Option22: 'для сучасних технологічних брендів',
        methodologyStep2Option3: 'Експеримент',
        methodologyStep2Option33:
          'для креативних індустрій та брендів, які хочуть вийти за рамки',
        methodologyStepTextItem:
          'Стиль визначається не модою, а ціллю: яку реакцію має викликати візуальне рішення.',
        methodologyStep3Title: 'Узгодження з загальним дизайном бренду',
        methodologyStep3Text:
          'Типографіка та летеринг не існують ізольовано. Вони вплітаються в айдентику — логотип, кольори, макети. Ми добиваємося повної візуальної цілісності. Все виглядає злагоджено, логічно і стильно на всіх носіях — від веб-сайту до офлайнових матеріалів.',
        methodologyStepItem1: 'Веб',
        methodologyStepItem2: 'Поліграфія',
        methodologyStepItem3: 'Мобільний',

        // Benefits Section
        benefitsTitle: 'Переваги професійної типографіки та летерингу',
        benefit1Title: 'Підвищення впізнаваності',
        benefit1Text:
          "Унікальна типографіка робить бренд пізнаваним навіть без логотипа. Вона створює візуальні асоціації, які закріплюються в пам'яті. Один шрифт — і користувач згадує вас.",
        benefit2Title: 'Унікальність бренду',
        benefit2Text:
          'Ми створюємо нетипові рішення — летеринг або кастомну типографіку, яких немає у шаблонних генераторах. Ваш бренд отримує власну візуальну мову.',
        benefit3Title: 'Краще візуальне сприйняття',
        benefit3Text:
          'Якісна типографіка підвищує читабельність, структурує контент, направляє увагу. Це особливо критично в інтерфейсах, презентаціях, рекламі.',
        benefitItem1: 'Логотип',
        benefitItem2: 'Типографіка',
        benefitItem3: 'Впізнаваність',
        benefitItem4: 'Шаблон',
        benefitItem5: 'Кастом',
        benefitItem6: 'До',
        benefitItem7: 'Після',

        // Workflow Section
        workflowTitle: 'Як ми працюємо — приклад підходу до кожного проєкту',
        workflowDescription:
          'Кожен бренд — це окрема історія, тому ми не використовуємо шаблони. Наш підхід — це поєднання аналітики, дизайнерської експертизи та уваги до деталей. Ми не просто підбираємо шрифти — ми формуємо типографічну систему, яка працює на ідентичність бренду.',
        workflowTextItem: 'Процес',
        workflowStep1: {
          title: 'Брифінг та початкове занурення',
          description:
            'Починаємо з глибокого розуміння вашого бізнесу: хто ви, чим відрізняєтесь, яка ваша аудиторія, у якому стилі ви хочете з нею спілкуватися. Ми вивчаємо продукти, послуги, місію бренду, вже наявні візуальні елементи.',
          items: {
            item1: 'Аналіз бренду',
            item2: 'Дослідження конкурентів',
            item3: 'Вивчення цільової аудиторії',
            item4: 'Технічні вимоги',
            item5: 'Продукти/послуги',
          },
        },
        workflowStep2: {
          title: 'Аналіз ринку та конкурентів',
          description:
            'Досліджуємо середовище, в якому працює ваш бренд. Вивчаємо візуальні рішення конкурентів, шрифтові тренди у вашій ніші, аналізуємо типові підходи, щоб уникнути повторів та створити відмінність.',
          items: {
            item1: 'Конкурент А',
            item2: 'Конкурент Б',
            item3: 'Конкурент В',
          },
        },
        workflowStep3: {
          title: 'Розробка концепції',
          description:
            'На цьому етапі ми пропонуємо декілька напрямків: типографічні пари, стильові референси, варіанти летерингу. Якщо потрібно — створюємо начерки рукописних рішень, які підкреслюють індивідуальність.',
        },
        workflowStep4: {
          title: 'Дизайн і тестування',
          description:
            'Створюємо фінальну версію типографіки або летерингу, перевіряємо, як вона виглядає в реальних сценаріях: у логотипі, на сайті, в макетах, у соціальних мережах. Враховуємо адаптивність, читабельність на різних носіях.',
        },
        workflowStep5: {
          title: 'Узгодження і підготовка фінальних матеріалів',
          description:
            'Після затвердження ми передаємо всі необхідні файли — у форматах для друку та цифрового використання. За запитом — готуємо міні-гайдлайн або інструкції з правильного використання шрифтів чи летерингу.',
          textItem: 'Гайдлайн',
        },

        // Order Section
        orderTitle: 'Як замовити послугу',
        orderSubtitle: 'Етапи співпраці',
        orderDescription:
          'Ми зробили процес максимально зручним для клієнта — без зайвої бюрократії, але з повним контролем якості на кожному етапі.',
        orderStep1: {
          title: 'Заявка',
          description:
            'Залишаєте запит через форму на сайті або надсилаєте листа з коротким описом задачі. Ми відповідаємо протягом одного робочого дня.',
        },
        orderStep2: {
          title: 'Обговорення задачі',
          description:
            'Ми ставимо уточнювальні запитання, обговорюємо очікування, стиль, обсяг роботи. За потреби — надсилаємо короткий бриф для заповнення.',
        },
        orderStep3: {
          title: 'Комерційна пропозиція',
          description:
            'Формуємо чітку пропозицію із вартістю, термінами та обсягом. Ви розумієте, що саме отримаєте, скільки це коштує і коли буде готово.',
        },
        orderStep4: {
          title: 'Початок роботи',
          description:
            'Після узгодження умов ми підписуємо договір або підтвердження про старт. Починається етап розробки: дослідження, концепції, ескізи.',
        },
        orderStep5: {
          title: 'Проміжне погодження',
          description:
            'На етапі чорнових рішень ми показуємо проміжні варіанти, щоб узгодити напрямок і внести правки до фіналізації. Ви залучені до процесу.',
        },
        orderStep6: {
          title: 'Завершення та передача результату',
          description:
            'Ви отримуєте всі файли у зручних форматах, а також пояснення щодо їх використання. Після завершення — залишаєтесь із візуальним активом, що працює на бренд.',
        },

        // FAQ Section
        faqTitle: 'FAQ',
        faqData: {
          question1:
            'Чи можна використовувати один шрифт для всіх носіїв бренду?',
          answer1:
            'Ні, зазвичай створюється типографічна система з кількох шрифтів — основного, акцентного та допоміжного. Вони виконують різні функції: заголовки, тіла текстів, підписи тощо. Це забезпечує гнучкість і зберігає єдність стилю.',
          question2: 'Чи потрібно купувати ліцензії на шрифти?',
          answer2:
            'Так, якщо ви використовуєте комерційні шрифти. Ми завжди підбираємо шрифти з урахуванням прав на використання — з відкритих бібліотек або з чіткою ліцензією. Безкоштовні шрифти — не завжди якісні або унікальні.',
          question3:
            'У чому перевага кастомного летерингу порівняно з логотипом на основі шрифту?',
          answer3:
            'Кастомний летеринг створюється з нуля і враховує форму, ритм і унікальність назви бренду. Це забезпечує абсолютну ексклюзивність. Шрифтова основа — це швидше, але не завжди достатньо відмінно від конкурентів.',
          question4:
            "Чи можу я отримати шрифт у форматі для встановлення на комп'ютер?",
          answer4:
            'Так, якщо розробляється кастомний шрифт або обрана типографіка включає завантажувані файли. Ви отримаєте файли у форматах OTF/TTF/WOFF + інструкції з установлення та використання.',
          question5:
            'Чи можна замовити лише летеринг без повного фірмового стилю?',
          answer5:
            'Звісно. Летеринг — це окрема послуга. Він може бути використаний як акцент на упаковці, постері, мерчі або навіть у соціальних мережах. Ми адаптуємо результат під ваші задачі.',
          question6: 'Скільки часу займає створення типографіки або летерингу?',
          answer6:
            'У середньому — від 5 до 15 робочих днів, залежно від складності. Простий підбір типографіки — швидше. Унікальний летеринг або система зі шрифтами для різних носіїв — потребують більше часу для дослідження й опрацювання деталей.',
        },
        faqCta: 'Маєте додаткові запитання щодо типографіки або летерингу?',
        faqCtaButton: "Зв'язатися з нами",
      },
      brandingPage: {
        // Hero Section
        heroTitle: 'Розробка фірмового стилю — візуальна ДНК вашого бізнесу',
        heroDescription:
          'Айдентика — це не просто логотип чи кольори. Це візуальна мова, яка доносить ваш характер, цінності та настрій до аудиторії. Ми створюємо фірмовий стиль, що працює на вас — кожен елемент підсилює впізнаваність і відрізняє бренд серед конкурентів.',
        orderButton: 'Замовити розробку',
        feature1: 'Унікальність',
        feature2: 'Впізнаваність',
        feature3: 'Системність',

        // О фирменном стиле
        aboutTitle: 'Що таке фірмовий стиль і навіщо він потрібен',
        elementsTitle: 'Основні елементи айдентики',
        elementsDescription:
          'Фірмовий стиль — це комплекс візуальних рішень, які формують цілісне сприйняття бренду. До нього входять:',
        elementLogoTitle: 'Логотип та його варіації',
        elementLogoDesc:
          'Унікальний графічний символ для миттєвої ідентифікації бренду',
        elementPaletteTitle: 'Колірна палітра',
        elementPaletteDesc:
          'Характерні кольори, що викликають потрібні емоції та асоціації',
        elementTypographyTitle: 'Шрифти й типографічна сітка',
        elementTypographyDesc:
          'Стильове оформлення текстів для узгодженої комунікації',
        elementIconsTitle: 'Іконки, патерни, ілюстрації',
        elementIconsDesc: 'Графічні елементи, що доповнюють загальну концепцію',
        elementGuideTitle: 'Гайдлайн або брендбук',
        elementGuideDesc:
          'Повний документ зі стандартами використання всіх елементів бренду для різних носіїв — від візиток до digital-кампаній',

        // Вплив фірмового стилю
        impactTitle: 'Як стиль впливає на імідж компанії',
        impactDescription:
          'Фірмовий стиль — це перше враження, яке формується ще до знайомства з продуктом. Якісний стиль:',
        impact1: 'Цінності компанії',
        impact2: 'Довіра клієнтів',
        impact3: "Емоційний зв'язок",
        impact4: 'Впізнаваність',

        impactList1Title: 'Підкреслює цінності компанії',
        impactList1Desc:
          'Візуальна мова передає філософію бренду та підкреслює його ключові цінності для аудиторії.',
        impactList2Title: 'Формує довіру й професійний імідж',
        impactList2Desc:
          'Якісний дизайн демонструє увагу до деталей і професіоналізм компанії на всіх рівнях взаємодії.',
        impactList3Title: "Створює емоційний зв'язок із клієнтом",
        impactList3Desc:
          "Гармонійний візуальний стиль викликає потрібні емоції та будує міцний зв'язок з аудиторією.",
        impactList4Title: 'Сприяє впізнаванню в офлайн та онлайн середовищі',
        impactList4Desc:
          'Єдиний стиль забезпечує миттєве впізнавання бренду незалежно від каналу комунікації.',

        // Услуги
        servicesTitle: 'Що входить до послуги розробки фірмового стилю',
        serviceLogoBadge: 'Основа бренду',
        serviceLogoTitle: 'Логотип',
        serviceLogoDesc:
          'Створюємо оригінальний знак, який передає сутність бренду. Пропонуємо кілька концептів, адаптуємо логотип для різних форматів — від мобільного додатку до білборду.',
        servicePaletteBadge: 'Емоційний вплив',
        servicePaletteTitle: 'Колірна палітра',
        servicePaletteDesc:
          'Підбираємо кольори, які відповідають емоційному тону бренду, враховуємо психологію кольору, контрастність і практичність використання на різних фонах.',
        serviceTypographyBadge: 'Текстова комунікація',
        serviceTypographyTitle: 'Шрифти та типографіка',
        serviceTypographyDesc:
          'Формуємо типографічну систему: основні та акцентні шрифти, стилі заголовків, розміри та міжрядкові інтервали. Забезпечуємо зручність читання й послідовність у візуальних комунікаціях.',
        serviceGuideBadge: 'Стандарти використання',
        serviceGuideTitle: 'Гайдлайн (брендбук)',
        serviceGuideDesc:
          'Готуємо документ з чіткими правилами використання всіх елементів стилю. Це забезпечує цілісність візуального образу незалежно від того, хто займається дизайном у майбутньому.',

        // Approach
        approachTitle: 'Наш підхід до створення айдентики',
        approachStep1Title: 'Брифінг і дослідження ринку',
        approachStep1Desc:
          'Починаємо з діалогу. Вивчаємо бренд, його аудиторію, цінності, конкурентів. Аналізуємо ринок, визначаємо позиціонування. Це формує основу для дизайну, який не просто гарний, а стратегічно влучний.',
        approachStep2Title: 'Концепція та ідея',
        approachStep2Desc:
          'Ми не малюємо навмання. Усі елементи стилю підпорядковані ідеї — візуальній метафорі бренду. Це може бути форма, символ, характер руху, асоціативний ряд. У результаті народжується айдентика, що говорить без слів.',
        approachStepItem1: 'Аудиторія',
        approachStepItem2: 'Цінності',
        approachStepItem3: 'Конкуренти',
        approachStepItem4: 'Позиціонування',

        // Преимущества
        benefitsTitle: 'Переваги для бізнесу',
        benefitsIntro:
          'Сильна візуальна айдентика — це більше, ніж естетика. Це інструмент стратегічного впливу на сприйняття, продажі та лояльність. Фірмовий стиль виконує чіткі бізнес-завдання, і ось як саме:',
        benefit1Title: 'Впізнаваність на ринку',
        benefit1Desc:
          "Коли в усіх точках контакту — від сайту до упаковки — бренд виглядає послідовно, він запам'ятовується значно швидше. Це економить ресурси на рекламу: достатньо кількох дотиків, щоб аудиторія впізнала ваш стиль. Візуальна сталість створює ефект знайомства, який перетворюється на довіру.",
        benefit2Title: 'Конкурентна перевага',
        benefit2Desc:
          'У більшості ніш візуальна айдентика або слабка, або хаотична. Ви виграєте вже тим, що виглядаєте краще. Ваш бренд виділяється у стрічці соцмереж, виглядає впевнено на презентації, професійно на виставці. Потенційні клієнти сприймають вас як сильного гравця — навіть до знайомства з продуктом.',
        benefit3Title: 'Системність у комунікації',
        benefit3Desc:
          'З фірмовим стилем ви отримуєте набір правил, які полегшують дизайн будь-яких матеріалів. Більше не потрібно щоразу вигадувати з нуля — просто дотримуйтесь гайду. Це економія часу, коштів і нервів.',
        benefit4Title: 'Масштабованість бізнесу',
        benefit4Desc:
          "Чітка айдентика дозволяє легко запускати нові продукти, франшизи, філії або рекламні кампанії. Стиль гнучкий — але не втрачає зв'язку з основним брендом. Це основа для зростання.",

        // Inspiration
        inspirationTitle: 'Наше натхнення — ваш успішний бренд',
        inspirationParagraph1:
          'Кожен наш проєкт — це не про красиву картинку. Це про суть, яку ми бачимо у вашому бізнесі. Ми не копіюємо тренди — ми створюємо рішення, які працюють саме для вас.',
        inspirationParagraph2:
          'Ми надихаємось не чужими кейсами, а вашою унікальною історією, продуктом, амбіціями. Звідси й народжуються айдентики, що резонують з аудиторією, викликають емоції, викристалізовують характер бренду.',
        inspirationParagraph3:
          'Ваша довіра — наша відповідальність. Саме тому ми не робимо шаблонів, не працюємо поверхнево і завжди пропонуємо більше, ніж очікуєте.',

        // Order
        orderTitle: 'Як замовити фірмовий стиль',
        orderSubtitle: 'Покрокова інструкція',
        orderDescription:
          'Ми гарантуємо підтримку на кожному етапі та відкриту комунікацію.',
        orderStep1Title: 'Заявка',
        orderStep1Desc: 'Ви звертаєтесь до нас з коротким описом запиту.',
        orderStep2Title: 'Брифінг',
        orderStep2Desc:
          'Заповнюєте анкету або проходите онлайн-зустріч для уточнення деталей.',
        orderStep3Title: 'Пропозиція',
        orderStep3Desc:
          'Ми надсилаємо комерційну пропозицію з термінами, ціною і складом послуги.',
        orderStep4Title: 'Початок роботи',
        orderStep4Desc:
          'Після погодження та оплати стартує етап дослідження і концепції.',
        orderStep5Title: 'Дизайн і презентація',
        orderStep5Desc: 'Показуємо рішення, обговорюємо і коригуємо.',
        orderStep6Title: 'Передача файлів і гайдлайну',
        orderStep6Desc:
          'Фіналізуємо всі матеріали й передаємо вам зручним способом.',
        orderCta: 'Замовити фірмовий стиль',

        // FAQ
        faqTitle: 'FAQ',
        faqData: {
          question1: 'Яка різниця між логотипом і фірмовим стилем?',
          answer1:
            'Логотип — це лише один елемент. Фірмовий стиль включає повний візуальний комплект: кольори, шрифти, візуальні правила, іконки, оформлення соцмереж і т. д.',
          question2: 'Чи можна замовити лише частину фірмового стилю?',
          answer2:
            'Так, ми можемо адаптувати послугу під ваш запит — наприклад, розробити лише логотип або оновити палітру й типографіку для вже існуючого бренду.',
          question3: 'Чи отримаю я брендбук?',
          answer3:
            'Так, у базовий пакет входить гайдлайн з основними правилами використання стилю. За потреби ми можемо створити повноцінний брендбук з розширеними прикладами.',
          question4: 'Скільки часу триває розробка фірмового стилю?',
          answer4:
            'В середньому — від 2 до 4 тижнів, залежно від обсягу робіт і швидкості погодження. Ми погоджуємо дедлайни ще до старту.',
          question5: 'Чи можу я внести правки до запропонованого дизайну?',
          answer5:
            'Так, передбачено 1–2 раунди коригувань у межах затвердженої концепції. Ми враховуємо ваші побажання, зберігаючи професійну якість.',
          question6: 'У яких форматах я отримаю фінальні матеріали?',
          answer6:
            'Ми передаємо логотип і елементи стилю у форматах для друку (.ai, .pdf) і для digital (.png, .svg, .jpg). Шрифти — з ліцензіями або рекомендаціями.',
        },
        faqCta: 'Маєте додаткові запитання щодо фірмового стилю?',
        faqCtaButton: "Зв'язатися з нами",
      },
      aiBannerMarketingPage: {
        //Hero/Статистика/Кнопка
        heroTitle:
          'Банерна реклама на сайтах — ефективний спосіб залучення клієнтів',
        heroHighlight: 'ефективний спосіб',
        heroDescription:
          'Банерна реклама — це потужний інструмент цифрового маркетингу, який дозволяє брендам взаємодіяти з цільовою аудиторією безпосередньо на популярних веб-ресурсах. Завдяки візуальному впливу, точному таргетингу та можливості масштабування, банери залишаються актуальними навіть в умовах високої конкуренції за увагу користувачів.',
        stat1: '+180%',
        stat1Label: 'Зростання CTR',
        stat2: '+65%',
        stat2Label: 'Підвищення конверсії',
        stat3: '-40%',
        stat3Label: 'Зниження вартості залучення',
        orderButton: 'Замовити банерну рекламу',

        //Info/Формати/Як працює
        infoTitle: 'Що таке банерна реклама та як вона працює',
        infoDescription:
          'Банерна реклама — це графічні блоки (зображення, анімації або відео), що розміщуються на веб-сайтах з метою привернення уваги, формування попиту або перенаправлення користувачів на цільову сторінку (лендінг). Вона працює за принципом показів (CPM), кліків (CPC) або дій (CPA), залежно від цілей рекламної кампанії.',
        formatsTitle: 'Основні формати банерної реклами',
        formatsDescription:
          'Банери можуть бути статичними (JPEG, PNG), анімованими (GIF) або інтерактивними (HTML5). Крім того, використовуються адаптивні формати, що автоматично підлаштовуються під екран користувача.',
        formatLeaderboard: 'Leaderboard',
        formatLeaderboardDesc:
          'Розміщується у верхній частині сторінки, забезпечує високу видимість на початку взаємодії користувача з сайтом.',
        formatRectangle: 'Medium Rectangle',
        formatRectangleDesc:
          'Один з найбільш ефективних форматів, що вбудовується в контент або розміщується в боковій панелі.',
        formatSkyscraper: 'Wide Skyscraper',
        formatSkyscraperDesc:
          'Вертикальний формат, який зазвичай розміщується в сайдбарі і залишається видимим при прокрутці.',
        formatBillboard: 'Billboard',
        formatBillboardDesc:
          'Великий формат для преміальних кампаній, що забезпечує максимальне охоплення і вплив.',
        howItWorksTitle: 'Як працює банерна реклама',
        howItWorksDescription:
          'Рекламодавець обирає сайти, на яких хоче показувати оголошення, визначає аудиторію за демографічними, поведінковими або географічними параметрами, після чого банери запускаються через рекламні мережі або напряму через майданчики.',
        step1Title: 'Вибір форматів і площадок',
        step1Text: 'Рекламодавець обирає типи банерів і сайти для розміщення.',
        step2Title: 'Визначення цільової аудиторії',
        step2Text:
          'Налаштування демографічних, поведінкових та географічних параметрів.',
        step3Title: 'Запуск через рекламні мережі',
        step3Text:
          'Банери розміщуються через спеціалізовані платформи або напряму.',
        step4Title: 'Оптимізація і аналіз результатів',
        step4Text:
          'Моніторинг показників та коригування кампанії для підвищення ефективності.',
        businessBenefitsTitle: 'Переваги банерної реклами для бізнесу',
        benefit1Title: 'Масштабованість',
        benefit1Text:
          'Можливість охопити тисячі або мільйони унікальних користувачів.',
        benefit2Title: 'Візуальний вплив',
        benefit2Text:
          'Ефективно передають меседжі, використовуючи кольори та емоційні тригери.',
        benefit3Title: 'Точний таргетинг',
        benefit3Text:
          'Показ реклами лише тим, хто вже цікавився подібними товарами чи послугами.',
        benefit4Title: 'Гнучкість форматів',
        benefit4Text:
          'Підходять для запуску акцій, презентації нових продуктів або підвищення впізнаваності.',
        benefit5Title: 'Вимірюваність',
        benefit5Text:
          'Детальна аналітика дозволяє контролювати кожен клік, показ або конверсію.',

        //Placement/Де розміщують
        placementTitle: 'Де розміщують банерну рекламу',
        placementDescription:
          'Успішна банерна реклама починається з правильного вибору платформи для розміщення. Не кожен сайт дає однакову ефективність, тому важливо аналізувати тематику, аудиторію, трафік і конкурентне середовище ресурсу. Вдале розміщення забезпечує високу видимість, релевантність і максимальну віддачу від кожного показу.',
        thematicSitesTitle: 'Тематичні сайти',
        thematicSitesDescription:
          'Розміщення банерів на нішевих веб-сайтах дозволяє звертатися до вже зацікавленої аудиторії. Наприклад, реклама туристичних послуг на тревел-блогах або банери косметики на жіночих форумах працюють точково й ефективно. Тематичні майданчики мають високу релевантність, що збільшує ймовірність кліку та взаємодії з брендом.',
        thematicSitesAdv1: 'Висока якість трафіку',
        thematicSitesAdv2: 'Мінімальні втрати на нецільову аудиторію',
        thematicSitesAdv3:
          'Підвищений рівень довіри завдяки експертному контексту',
        newsPortalsTitle: 'Новинні портали',
        newsPortalsDescription:
          'Новинні сайти мають один з найвищих показників щоденного трафіку. Завдяки постійному оновленню контенту, користувачі регулярно повертаються, а це дає змогу охопити широку, але при цьому активну аудиторію. Банери тут часто розміщуються у верхній частині сторінки або між блоками новин.',
        newsPortalsAdv1: 'Висока частота показів',
        newsPortalsAdv2: 'Швидкий приріст охоплення',
        newsPortalsAdv3: 'Актуальність: реклама поруч з гарячими новинами',
        highTrafficTitle: 'Платформи з високим трафіком',
        highTrafficDescription:
          'До цієї категорії належать великі агрегатори, енциклопедії, онлайн-журнали, форуми, а також сайти типу "питання-відповіді" (як-от Quora або місцеві аналоги). Розміщення на таких платформах дозволяє охопити широку аудиторію без прив\'язки до вузької тематики.',
        highTrafficAdv1: 'Масштабне охоплення',
        highTrafficAdv2: 'Оптимізація за CPM або CPC',
        highTrafficAdv3: 'Можливість A/B-тестування банерів на великій вибірці',

        //Implementation/Процес створення
        implementationTitle: 'Наш процес створення ефективних банерів',
        implementationDescription:
          'Кожен банер, який ми створюємо — це результат комплексного підходу, що поєднує аналітику, дизайн і технології. Ми не просто малюємо гарні картинки, а розробляємо стратегічні рішення, які приводять реальних клієнтів. Наша методологія передбачає глибоке розуміння вашого бізнесу та потреб цільової аудиторії.',
        step01Title: 'Аналіз і стратегія',
        step01Text:
          'Вивчаємо ваш бізнес, конкурентів та цільову аудиторію, щоб розробити унікальну стратегію розміщення',
        step01List1: 'Аналіз поведінки користувачів',
        step01List2: 'Дослідження конкурентів',
        step01List3: 'Вибір оптимальних форматів',
        step02Title: 'Креативний концепт',
        step02Text:
          'Створюємо унікальні візуальні рішення, які привертають увагу та спонукають до дії',
        step02List1: 'Розробка привабливих дизайнів',
        step02List2: 'Тестування кількох варіантів',
        step02List3: 'Оптимізація для різних майданчиків',
        step03Title: 'Налаштування і запуск',
        step03Text:
          'Налаштовуємо показ банерів на обраних майданчиках з точним таргетингом',
        step03List1: 'Інтеграція з рекламними мережами',
        step03List2: 'Налаштування таргетингу',
        step03List3: 'Вибір оптимальних стратегій показу',
        step04Title: 'Оптимізація і масштабування',
        step04Text:
          'Постійно аналізуємо ефективність і коригуємо кампанію для досягнення максимальних результатів',
        step04List1: 'A/B-тестування варіантів',
        step04List2: 'Аналіз показників ефективності',
        step04List3: 'Масштабування успішних кампаній',
        result1Value: '+78%',
        result1Label: 'Середнє зростання CTR',
        result2Value: '5.2M',
        result2Label: 'Охоплення щомісяця',
        result3Value: '3.8x',
        result3Label: 'Середній ROI кампаній',
        ctaTitle: 'Готові запустити банерну рекламу, яка дійсно працює?',
        ctaDescription:
          "Зв'яжіться з нами сьогодні, і ми розробимо індивідуальну стратегію, що відповідає вашим бізнес-цілям",
        ctaButton: 'Замовити консультацію',

        //Analytics/Аналітика
        analyticsTitle: 'Результати та аналітика',
        analyticsDescription:
          'Успішна банерна реклама — це не тільки креатив і покази, а й точна аналітика. Ми працюємо з даними та метриками, які допомагають нам оптимізувати кампанії та досягати максимальної ефективності вкладених коштів.',
        metricsTitle: 'Ключові метрики',
        metricCTR:
          'Відношення кількості кліків до кількості показів. Основний показник ефективності банера, що демонструє наскільки він привабливий для аудиторії.',
        metricCPM:
          'Вартість за тисячу показів. Допомагає оцінити економічну ефективність охоплення цільової аудиторії.',
        metricCPC:
          'Вартість одного кліка. Показує, скільки коштує залучення одного потенційного клієнта на сайт.',
        metricCR:
          'Відсоток відвідувачів, які виконали цільову дію (замовлення, реєстрація тощо) після переходу з банера.',
        whatYouGetTitle: 'Що ви отримуєте',
        regularReports: 'Регулярна звітність',
        regularReportsDesc:
          'Щотижневі або щомісячні звіти з детальним аналізом усіх ключових показників кампанії та рекомендаціями щодо оптимізації.',
        roiAnalysis: 'Аналіз ROI',
        roiAnalysisDesc:
          'Розрахунок повернення інвестицій для кожного рекламного каналу та формату, що дозволяє визначити найбільш прибуткові стратегії.',
        audienceData: 'Дані про аудиторію',
        audienceDataDesc:
          'Детальна інформація про демографію, інтереси та поведінку користувачів, які взаємодіють з вашими банерами.',
        realtimeOptimization: 'Оптимізація в реальному часі',
        realtimeOptimizationDesc:
          'Постійний моніторинг та коригування кампаній для досягнення максимальної ефективності та мінімізації витрат.',
        processTitle: 'Наш аналітичний процес',
        processStep1: 'Налаштування відстеження',
        processStep1Desc:
          'Інтеграція Google Analytics, Facebook Pixel та інших інструментів для точного відстеження всіх взаємодій користувачів з банерами та сайтом.',
        processStep2: 'Збір та аналіз даних',
        processStep2Desc:
          'Систематичний збір даних про покази, кліки, конверсії та інші взаємодії користувачів з рекламними матеріалами.',
        processStep3: 'A/B тестування',
        processStep3Desc:
          'Порівняння різних версій банерів для визначення найбільш ефективних візуальних елементів, закликів до дії та розміщень.',
        processStep4: 'Формування звітності',
        processStep4Desc:
          'Створення зрозумілих і детальних звітів, що демонструють результати кампаній та дають чітке розуміння ROI.',
        processStep5: 'Оптимізація та масштабування',
        processStep5Desc:
          'На основі зібраних даних вносимо корективи в кампанії та масштабуємо найбільш успішні стратегії для максимізації результатів.',
        analyticsQuote:
          'Без аналітики реклама — це просто красиві картинки. З аналітикою — це потужний інструмент розвитку бізнесу, де кожна гривня працює на результат.',
        analyticsQuoteAuthor: '— Команда SoftQod',
        analyticsCta:
          'Хочете дізнатися більше про те, як ми можемо допомогти вам досягти вимірюваних результатів з банерною рекламою?',
        analyticsCtaButton: 'Замовити консультацію',

        //Benefits/Переваги
        benefitsTitle: 'Чому варто замовити банерну рекламу саме у нас',
        benefitsDescription:
          'У світі діджитал-реклами важливо не просто запускати банери, а досягати конкретних бізнес-цілей — продажів, заявок, охоплення. Ми пропонуємо не шаблонні рішення, а індивідуальний підхід, заснований на досвіді, перевірених методиках і сучасних технологіях. Наша команда глибоко занурюється в нішу клієнта, щоб створити ефективну, ROI-орієнтовану банерну кампанію.',
        experienceTitle: 'Досвід роботи з різними нішами',
        experienceText:
          'Ми реалізували десятки проєктів у сферах e-commerce, фінансів, туризму, освіти, b2b-послуг, медицини та ін. Завдяки цьому ми розуміємо специфіку поведінки цільової аудиторії в кожному сегменті. Ми знаємо, які формати працюють краще в конкретних галузях, як оформити оффер і креатив, щоб він викликав максимальний відгук.',
        approachTitle: 'Наш підхід — це:',
        approach1: 'Глибокий конкурентний аналіз',
        approach1Desc:
          'Вивчаємо стратегії конкурентів, щоб створити унікальну пропозицію',
        approach2: 'Врахування сезонності попиту',
        approach2Desc:
          'Адаптуємо рекламні кампанії до сезонних трендів і поведінки споживачів',
        approach3:
          'Адаптація банерів під мову та менталітет цільової аудиторії',
        approach3Desc:
          'Створюємо креативи, що резонують з вашою аудиторією на культурному рівні',
        industries: {
          item1: 'E-commerce',
          item2: 'Фінанси',
          item3: 'Туризм',
          item4: 'Освіта',
          item5: 'B2B',
          item6: 'Медицина',
          item7: 'HoReCa',
          item8: 'Інші сфери',
        },
        transparencyTitle: 'Прозора звітність і супровід',
        transparencyText:
          'Ми не приховуємо дані — кожен клієнт має повний доступ до звітів, статистики та дашбордів у зручному форматі. Ви бачите, як працює кампанія в реальному часі, які майданчики приносять результат, а які — потребують корекції. Наші спеціалісти супроводжують проект на кожному етапі, надаючи рекомендації та вчасно реагуючи на зміни в поведінці користувачів.',
        whatYouGet: 'Що ви отримуєте:',
        reportMetrics: 'Звіти з метриками CTR, CPC, CPM',
        reportMetricsDesc:
          'Детальна статистика ефективності кампаній, доступна в режимі реального часу',
        consult: 'Консультації щодо покращення результатів',
        consultDesc:
          'Регулярні рекомендації від фахівців для оптимізації кампаній',
        manager: "Постійний зв'язок з менеджером кампанії",
        managerDesc:
          "Спеціаліст на зв'язку, який відповідає за успіх вашого проєкту",
        creativeIdeas: 'Креативні ідеї для банерів',
        creativeIdeasDesc:
          'Регулярне оновлення креативів для запобігання банерній сліпоті',
        testimonialText:
          'Працюючи з командою SoftQod, ми отримали не просто рекламу, а стратегічного партнера, який дійсно розуміє наш бізнес. Завдяки їхньому індивідуальному підходу та постійному аналізу, наша конверсія з банерної реклами зросла на 34%.',
        testimonialAuthor: 'Олена Петренко',
        testimonialAuthorRole: 'Маркетинг-директор, Ecommerce Store',

        //FAQ
        faqTitle: 'FAQ',
        faqData: {
          question1: 'Скільки часу потрібно для запуску банерної кампанії?',
          answer1:
            'Залежно від складності завдання, підготовка займає від 2 до 5 робочих днів. Це включає аналіз ЦА, вибір сайтів, створення креативів і технічну підготовку до запуску.',
          question2: 'Чи можна протестувати кілька банерів одночасно?',
          answer2:
            'Так, ми практикуємо A/B-тестування, щоб визначити, який варіант банера має кращий CTR і нижчий CPC. Це дозволяє оптимізувати кампанію ще на етапі її старту.',
          question3:
            'Які типи бізнесу найкраще підходять для банерної реклами?',
          answer3:
            'Банерна реклама ефективна як для широкого B2C-сегменту (рітейл, косметика, туризм), так і для вузьких B2B-напрямів. Особливо вона працює в нішах з візуальною складовою або з акційними пропозиціями.',
          question4: 'Чи можливо обмежити показ банерів певними регіонами?',
          answer4:
            'Так, ми можемо налаштувати геотаргетинг до рівня країни, області чи навіть конкретного міста. Це дозволяє зосередити бюджет лише на тих регіонах, де знаходиться ваша цільова аудиторія.',
          question5: 'Що буде, якщо кампанія не дає очікуваних результатів?',
          answer5:
            'Ми регулярно аналізуємо показники і за потреби вносимо зміни — замінюємо креативи, змінюємо майданчики або коригуємо таргетинг. Усі кампанії супроводжує фахівець, який відповідає за результат.',
          question6: 'Чи можна запустити банерну рекламу без готового дизайну?',
          answer6:
            'Так, ми повністю беремо на себе створення банерів — від концепту до фінального макету. Наші дизайнери адаптують креативи під обрану стратегію та забезпечують їх відповідність технічним вимогам платформ.',
        },
        faqCta: 'Маєте додаткові запитання щодо банерної реклами?',
        faqCtaButton: "Зв'язатися з нами",
      },
      smmPage: {
        // Hero Section
        heroTitle: 'SMM-просування — ваш бренд у соціальних мережах',
        heroHighlight: 'ваш бренд',
        heroDescription:
          'SMM-просування — це стратегічний інструмент цифрового маркетингу, що дозволяє бізнесу будувати довготривалі відносини з клієнтами, формувати імідж бренду та стимулювати продажі через соціальні мережі. У світі, де увага споживача — найцінніший ресурс, SMM допомагає зайняти своє місце в інформаційному полі та трансформувати підписників у лояльну аудиторію.',
        orderButton: 'Замовити SMM',

        // Преимущества SMM
        advantage1: "Прямий зв'язок з вашою цільовою аудиторією",
        advantage2: 'Формування лояльності та спільноти навколо бренду',
        advantage3: 'Вірусне поширення контенту через репости',
        advantage4: 'Детальна аналітика ефективності кампаній',

        // Основные задачи SMM
        task1Title: 'Формування іміджу бренду',
        task1Desc: 'через ціннісний контент, візуальний стиль і tone of voice',
        task2Title: 'Підвищення впізнаваності',
        task2Desc:
          'за допомогою регулярної публікації, інтерактиву та таргетингу',
        task3Title: "Побудова ком'юніті",
        task3Desc:
          'створення лояльної бази підписників, які підтримують, коментують, купують',
        task4Title: 'Комунікація з аудиторією',
        task4Desc:
          "відповіді на запити, обробка відгуків, розв'язання ситуацій в режимі реального часу",
        task5Title: 'Просування продуктів чи послуг',
        task5Desc: 'через рекламні кампанії, колаборації, акції, лід-магніти',

        // Что такое SMM
        whatIsTitle: 'Що таке SMM і чому це важливо',
        whatIsDesc1:
          "SMM (Social Media Marketing) — це комплекс дій для просування компанії в соціальних мережах: від створення контенту та управління спільнотами до запуску таргетованої реклами. SMM є не просто каналом комунікації — це джерело лояльності, зворотного зв'язку, прямого впливу на споживчу поведінку.",
        whatIsDesc2:
          'Соціальні мережі щоденно використовують мільйони українців. Ігнорувати цей канал — означає втрачати потенційних клієнтів, які прямо зараз готові купувати, замовляти або ділитися враженнями.',

        // Статистика
        stat1Value: '73%',
        stat1Label: 'користувачів інтернету активні в соцмережах',
        stat2Value: 'год',
        stat2Label: 'середній час в соцмережах щодня',
        stat3Value: '61%',
        stat3Label:
          'приймають рішення про покупку після перегляду в соцмережах',

        // Основные задачи SMM
        tasksTitle: 'Основні завдання SMM',

        // Услуги
        servicesTitle: 'Які послуги ми надаємо в межах SMM',
        servicesIntro:
          "Ми пропонуємо повний цикл SMM-супроводу — від стратегії до результатів. Наші послуги охоплюють ключові напрямки, які дозволяють бренду не лише 'бути в соцмережах', а системно розвиватися, залучати клієнтів і досягати бізнес-цілей. Ми адаптуємо підхід під специфіку ринку, конкурентів і аудиторію.",

        // Вкладки услуг
        tab1: 'Розробка контент-стратегії',
        tab2: 'Ведення сторінок',
        tab3: 'Таргетована реклама',

        // Контент-стратегия
        contentStrategyTitle: 'Розробка контент-стратегії',
        contentStrategyDesc:
          'Контент — це основа комунікації в SMM. Ми створюємо стратегії, які враховують сезонність, поведінкові патерни аудиторії, тренди платформи та позиціонування бренду. Контент-план готується на місяць уперед і включає візуали, тексти, хештеги, інтерактиви, сторіс, Reels чи Shorts — залежно від платформи.',
        contentStrategyFeatures: [
          'Визначення цілей і KPI',
          'Побудова tone of voice',
          'Контент-план по рубриках та форматах',
          'Створення унікального креативу',
        ],

        // Ведение страниц
        pageManagementTitle:
          'Ведення сторінок (Instagram, Facebook, TikTok тощо)',
        pageManagementDesc:
          'Ми беремо на себе повне адміністрування акаунтів: регулярні публікації, відповіді в коментарях, обробку запитів у Direct, моніторинг згадок. Для кожної платформи обираємо найефективніші формати — короткі відео, каруселі, меми, розіграші чи гайд-пости.',
        platform1: 'Instagram та Facebook (Meta)',
        platform2: 'TikTok — з урахуванням алгоритмів та вірусного потенціалу',
        platform3: 'YouTube Shorts, Telegram, LinkedIn (опціонально)',

        // Таргетированная реклама
        targetedAdsTitle: 'Таргетована реклама в соціальних мережах',
        targetedAdsDesc:
          'Один з найсильніших інструментів у SMM — це платна реклама. Ми запускаємо таргетинг по інтересах, поведінці, геолокації, схожих аудиторіях або ремаркетингу. Для кожної кампанії створюємо кілька креативів і тестуємо, щоб отримати оптимальний результат за мінімальною вартістю.',
        campaignType1: 'Залучення підписників',
        campaignType2: 'Реклама постів або сторіс',
        campaignType3: 'Генерація лідів (лід-форми, переходи на сайт)',
        campaignType4: 'Динамічні кампанії для e-commerce',

        // Процесс сотрудничества
        collaborationTitle: 'Як відбувається співпраця',
        collaborationIntro:
          'Ми працюємо прозоро, системно й орієнтуємось на результат. Для кожного клієнта будуємо індивідуальний SMM-процес, адаптований під нішу, цілі та специфіку бізнесу. Кожен етап узгоджується і підтримується нашою командою — від старту до масштабування.',

        // Этапы процесса
        step1Title: 'Брифінг і аналіз ЦА',
        step1Desc:
          'Починаємо з глибокого занурення у ваш бізнес: збираємо дані через бриф, аналізуємо конкурентів, визначаємо портрет цільової аудиторії. Вивчаємо її болі, інтереси, активність у соціальних мережах і адаптуємо підхід до комунікації відповідно до цих даних.',
        step1Includes: 'Що включає:',
        step1Item1: 'Аналіз ринку, УТП, позиціонування',
        step1Item2: 'Визначення платформи, де ЦА найактивніша',
        step1Item3:
          'Побудова сценаріїв взаємодії (взаємний фоловінг, коментарі, реклама)',

        step2Title: 'Розробка стратегії',
        step2Desc:
          'На основі зібраних даних формуємо стратегію присутності в соцмережах: визначаємо оптимальні платформи, контент-план, частоту публікацій, тональність і ключові повідомлення бренду.',
        step2Tactic:
          'Ми надаємо документ з детальною стратегією, яка включає всі аспекти SMM-просування від візуального стилю до KPI',

        step3Title: 'Запуск і реалізація',
        step3Desc:
          'Створюємо та публікуємо контент згідно з узгодженим планом, налаштовуємо та запускаємо рекламні кампанії. Починаємо взаємодію з аудиторією та активно модеруємо коментарі та повідомлення.',
        step3Card1: 'Створення контенту',
        step3Card2: 'Запуск реклами',
        step3Card3: 'Комунікація',

        step4Title: 'Регулярна аналітика і корекція стратегії',
        step4Desc:
          "Ми не 'ведемо сторінки заради сторінок' — ми працюємо з даними. Щомісячно готуємо звітність по охопленнях, залученні, підписниках, збереженнях, кліках, коментарях. Аналізуємо, що працює, а що — ні, й коригуємо стратегію, аби не витрачати час і бюджет даремно.",
        step4Tools: 'Інструменти аналітики:',
        step4Tool1: 'Meta Business Suite / TikTok Analytics',
        step4Tool2: 'Внутрішні CRM та трекінг-конверсій',
        step4Tool3: 'Google Analytics (у разі переходів на сайт)',

        // CTA для сотрудничества
        collaborationCta:
          'Готові розпочати співпрацю з командою професіоналів?',
        collaborationCtaButton: 'Замовити SMM',

        // Результаты
        resultsTitle: 'Результати від SMM-просування',
        resultsDesc:
          "Робота в соціальних мережах має давати конкретний результат — не лише 'лайки', а й реальні показники зростання. SMM-просування формує довготривалий ефект: зміцнює позиції бренду, створює ком'юніті та генерує ліди.",

        // Результат 1: Впізнаваність бренду
        result1Title: 'Впізнаваність бренду',
        result1Desc:
          'Завдяки регулярній публікації якісного контенту, присутності у стрічках підписників і запуску таргетованої реклами, бренд стає впізнаваним. Люди починають асоціювати вас з експертизою, надійністю або актуальністю — залежно від вибраного позиціонування.',
        result1Metric1: '+127%',
        result1Metric1Label: 'Органічне охоплення',
        result1Metric2: '+86%',
        result1Metric2Label: 'Впізнаваність бренду',
        result1Results: 'Результати впізнаваності:',
        result1Item1: 'Зростання органічного трафіку на профіль',
        result1Item2: 'Висока частота згадок або тегів',
        result1Item3: 'Позитивні коментарі й відгуки',

        // Результат 2: Ріст підписників
        result2Title: 'Ріст підписників і залучення',
        result2Desc:
          'Активна сторінка з цікавим контентом приваблює нових підписників. Ми використовуємо методи природного залучення, а також платні інструменти — рекламу, взаємні згадки, співпраці з мікроінфлюенсерами.',
        result2ChartLabels: ['Січень', 'Лютий', 'Березень', 'Квітень'],
        result2ChartValues: ['+210', '+460', '+680', '+890'],
        result2Metrics: 'Показники, на які орієнтуємось:',
        result2Item1: 'Engagement Rate (ER)',
        result2Item2: 'Кількість підписок за місяць',
        result2Item3: 'Динаміка залучення від посту до посту',

        // Результат 3: Генерація заявок
        result3Title: 'Генерація заявок і продажів',
        result3Desc:
          'SMM — це також прямий канал продажів, особливо для e-commerce, онлайн-послуг і локального бізнесу. Ми створюємо спеціальні пропозиції, заклики до дії та лід-магніти для конверсій.',
        result3ProgressLabels: ['Охоплення', 'Переходи', 'Заявки', 'Продажі'],
        result3ProgressValues: ['12,680', '7,354', '4,057', '2,282'],
        result3ProgressPercents: ['100%', '58%', '32%', '18%'],
        result3Tools: 'Інструменти конверсії:',
        result3Item1: 'Лід-форми у Facebook / Instagram',
        result3Item2: 'Заявки через Direct або коментарі',
        result3Item3: 'Перенаправлення на лендінг із точковим оффером',

        // Цитата
        resultsQuote:
          'Ефективний SMM — це не погоня за лайками, а системна робота, що прямо впливає на KPI вашого бізнесу.',

        // CTA для результатов
        resultsCtaTitle: 'Бажаєте схожих результатів?',
        resultsCtaButton: 'Замовити SMM-стратегію',

        // Переваги команди
        teamAdvantagesTitle: 'Переваги роботи з нашою командою',
        teamAdvantagesDesc:
          'Ми — не просто виконавці, ми — партнери, які зацікавлені в результаті. Для нас важливо не лише створити естетичний профіль, а й забезпечити стратегічне зростання вашого бренду в соціальних мережах. Наша команда складається з SMM-фахівців, дизайнерів, аналітиків і таргетологів, які працюють як єдиний механізм.',

        // Перевага 1: Інноваційні підходи
        advantage1Title: 'Інноваційні підходи',
        advantage1Desc:
          'Ми постійно тестуємо нові формати та AI-інструменти, аналізуємо тренди, щоб ваш бренд був попереду конкурентів.',
        advantage1Features: 'Що ми впроваджуємо:',
        advantage1Item1: 'Адаптація під алгоритми кожної соцмережі',
        advantage1Item2:
          'Використання ChatGPT та AI-дизайну для генерації контенту',
        advantage1Item3: 'Мультимовний контент і гнучке тестування меседжів',

        // Перевага 2: Досвід у різних сферах
        advantage2Title: 'Досвід у різних сферах бізнесу',
        advantage2Desc:
          'Ми працювали з компаніями з таких галузей: освіта, медицина, e-commerce, інфобізнес, нерухомість, HoReCa, b2b.',
        advantage2Features: 'Що це дає вам:',
        advantage2Item1: 'Мінімум часу на пояснення специфіки бізнесу',
        advantage2Item2: 'Максимально швидкий запуск кампанії',
        advantage2Item3: 'Експертні рішення, перевірені практикою',

        // Перевага 3: Прозора звітність
        advantage3Title: 'Прозора звітність',
        advantage3Desc:
          'Надаємо детальні звіти з конкретними KPI та метриками, які демонструють ефективність роботи.',
        advantage3Features: 'Що ви отримуєте:',
        advantage3Item1: 'Щотижневі дашборди з ключовими метриками',
        advantage3Item2: 'Щомісячний детальний аналіз і рекомендації',
        advantage3Item3: 'Аудити конкурентів та розрахунок ROI',

        // CTA для команды
        teamCtaTitle: 'Готові до співпраці з експертами?',
        teamCtaButton: "Зв'язатися з командою",

        // FAQ
        faqTitle: 'FAQ',
        faqCtaText: 'Маєте додаткові запитання щодо SMM?',
        faqCtaButton: "Зв'язатися з нами",

        // FAQ данные
        faqData: {
          question1:
            'Чи можна просувати бізнес у соціальних мережах без відео?',
          answer1:
            "Так, хоча відео — потужний інструмент залучення, ми адаптуємо контент-стратегію під ресурси клієнта. Можна використовувати графіку, каруселі, інфографіку, анімації чи інтерактивні опитування. Якщо згодом з'являється можливість створити відео — ми інтегруємо їх у контент-план.",

          question2:
            'Чи потрібна окрема стратегія для кожної соціальної мережі?',
          answer2:
            'Так. Поведінка користувачів у Facebook, Instagram і TikTok — різна, як і формат контенту. Ми адаптуємо tone of voice, типи публікацій та візуальний стиль під особливості кожної платформи, щоб досягти максимального ефекту.',

          question3:
            'Скільки часу потрібно, щоб побачити результати SMM-просування?',
          answer3:
            'Перші результати (зростання активності, охоплення, звернення) зазвичай помітні вже через 2–4 тижні. Повноцінне зміцнення бренду, стабільне зростання аудиторії та конверсії — через 2–3 місяці системної роботи.',

          question4:
            'Яка мінімальна кількість постів на тиждень рекомендується?',
          answer4:
            'Оптимально — від 3 до 5 публікацій на тиждень. Це дозволяє підтримувати активність аудиторії без перенасичення. У деяких випадках достатньо 2 постів + щоденні сторіс, залежно від платформи й специфіки ніші.',

          question5: 'Чи можна інтегрувати SMM з email-розсилками або сайтом?',
          answer5:
            'Так. Ми налаштовуємо перехід з соціальних мереж на сайт, лендінг або email-підписку. Це допомагає побудувати багаторівневу комунікацію з клієнтом і підвищити довіру до бренду.',

          question6:
            'Чи варто використовувати інфлюенсерів у рамках SMM-кампанії?',
          answer6:
            "Інфлюенс-маркетинг — ефективне доповнення до класичного SMM. Ми допомагаємо підібрати мікро- або макроінфлюенсерів відповідно до вашої ніші, аналізуємо їхню авдиторію й організовуємо співпрацю 'під ключ'.",
        },
      },
      contextualAdvertisingPage: {
        // Hero Section
        heroTitle: 'Контекстна реклама — лідогенерація у момент пошуку',
        heroHighlight: 'лідогенерація',
        heroDescription:
          'Контекстна реклама — це інструмент цифрового маркетингу, який дозволяє показувати ваші оголошення потенційним клієнтам саме тоді, коли вони шукають ваш продукт або послугу. Це потужний інструмент для залучення цільового трафіку, який готовий до конверсії. Ми налаштовуємо ефективні кампанії в Google Ads, Facebook Ads та інших платформах, які приносять якісні ліди.',
        orderButton: 'Замовити контекстну рекламу',

        // Преимущества
        advantage1:
          'Точне таргетування на користувачів, які шукають ваші послуги',
        advantage2: 'Можливість відстежувати ROI та конверсії в реальному часі',
        advantage3:
          'Гнучкий бюджет та оплата лише за результат (клік або конверсію)',
        advantage4: 'Миттєвий старт кампанії та швидкі результати',
        iconAdvantage5: 'Ремаркетинг',

        // Info Section
        infoTitle: 'Як працює контекстна реклама',
        infoDescription:
          'Контекстна реклама показується користувачам на основі їх пошукових запитів, інтересів або поведінки в інтернеті. Коли людина шукає товар або послугу, вона бачить релевантні оголошення, що збільшує ймовірність кліку та конверсії.',
        infoDescription1:
          "Основна перевага такого формату — релевантність. Ви не просто показуєте рекламу, а відповідаєте на конкретний запит користувача. Наприклад, якщо він шукає 'купити кросівки для бігу в Києві', ваша реклама спортивного магазину може з'явитися у верхніх позиціях результатів пошуку ще до органічних результатів.",
        infoDescription2:
          'Контекстна реклама використовує модель оплати за клік (PPC), тобто ви платите лише тоді, коли користувач зацікавився вашим оголошенням достатньо, щоб клікнути на нього.',
        infoDescription3:
          'Сьогодні контекстна реклама — це не лише текстові оголошення у пошуку Google. Вона також включає медійні оголошення на сайтах-партнерах, YouTube, Gmail та навіть мобільних додатках. Завдяки розвиненим алгоритмам машинного навчання, ці системи стають дедалі точнішими у виборі потенційних клієнтів.',

        iconSearchText: 'купити кросівки для бігу в Києві',
        iconSearchTitle1: 'Професійні бігові кросівки - Знижки до -40%',
        iconSearchDes1: 'Широкий вибір брендових кросівок для бігу. Безкоштовна доставка. Гарантія 30 днів. ✓ Відгуки ✓ Консультація експертів',
        iconSearchTitle2: 'Кросівки для бігу Nike, Adidas, Asics - SportShop',
        iconSearchDes2: 'Великий вибір бігових кросівок у Києві ✓ Офіційна гарантія ✓ Доставка по всій Україні ✓ Оплата при отриманні',

        itemInfoTitle1: 'Пошукова реклама',
        itemInfoDes1: 'Показується безпосередньо у результатах пошуку, коли користувач шукає конкретні товари чи послуги',

        itemInfoTitle2: 'Медійна мережа',
        itemInfoDes2: 'Розміщується на сайтах-партнерах, у мобільних додатках та відеоконтенті, враховуючи інтереси користувачів',
       
        itemInfoTitle3: 'Ремаркетинг',
        itemInfoDes3: 'Націлена на користувачів, які вже відвідували ваш сайт, але не здійснили цільову дію',
      
        itemInfoTitle4: 'Товарна реклама',
        itemInfoDes4: 'Демонструє конкретні товари з вашого каталогу, включаючи фото, ціну та інші характеристики',


        // Types Section
        typesTitle: 'Основні види контекстної реклами',
        typesDescription:
          'Контекстна реклама охоплює різні формати, які дозволяють досягти користувача на різних етапах воронки продажів — від моменту пошуку товару до перегляду відео на YouTube. Розглянемо основні види детальніше.',

        // Search Ads
        searchAdsTitle: 'Пошукова реклама (Search Ads)',
        searchAdsDescription:
          "Пошукова реклама — це оголошення, що з'являються у верхній частині сторінки результатів пошуку Google, коли користувач вводить певний запит. Це один із найефективніших форматів реклами, оскільки звертається до користувача в момент конкретного інтересу.",
        searchAdsText: 'Переваги:',
          searchAdsAdvantages: [
          'Високий рівень наміру (intent) у користувача',
          'Гнучке налаштування ключових слів',
          'Миттєвий трафік на сайт',
        ],
        searchAdsUseCase:
          'Ідеально підходить для просування товарів, послуг, запису на консультації та генерації лідів.',

        // Display Ads
        displayAdsTitle: 'Медійна реклама (Display Ads)',
        displayAdsDescription:
          "Медійні оголошення — це банери, які з'являються на сайтах-партнерах Google, у додатках та на платформах, що підтримують Google Display Network. Вони можуть включати зображення, анімацію та текстові елементи.",
        displayAdsAdvantages: [
          'Візуальна привабливість',
          'Велике охоплення аудиторії',
          'Таргетинг за інтересами, демографією та поведінкою',
        ],
        displayAdsUseCase:
          'Ефективна для формування впізнаваності бренду та охоплення нової аудиторії.',

        // Video Ads
        videoAdsTitle: 'Відеореклама (YouTube Ads)',
        videoAdsDescription:
          'Реклама у відеоформаті розміщується на YouTube та в мережі відеопартнерів Google. Вона дозволяє доносити емоційний меседж, залучати увагу та підвищувати довіру до бренду.',
        videoAdsText: 'Види:',
          videoAdsTypes: [
          'In-stream (з можливістю пропуску)',
          'Bumper Ads (короткі до 6 секунд)',
          'Video Discovery Ads',
        ],
        videoAdsUseCase:
          'Особливо підходить для B2C-сегменту, брендових кампаній та запуску нових продуктів.',

        // Shopping Ads
        shoppingAdsTitle: 'Торгові кампанії (Google Shopping)',
        shoppingAdsDescription:
          'Google Shopping — це спеціальний формат реклами для інтернет-магазинів, де користувач бачить товар, його ціну, назву магазину та зображення просто в пошуку.',
        shoppingAdsAdvantages: [
          'Висока конверсія',
          'Візуальний контент у видачі',
          'Автоматичне оновлення товарних даних',
        ],
        shoppingAdsUseCase:
          "Для запуску потрібно зв'язати Google Merchant Center і Google Ads.",

        // Remarketing
        remarketingTitle: 'Ремаркетинг і динамічний ремаркетинг',
        remarketingDescription:
          'Ремаркетинг дозволяє показувати рекламу користувачам, які вже були на сайті, але не здійснили цільову дію. Динамічний ремаркетинг — це персоналізовані оголошення з тими товарами або послугами, які користувач переглядав.',
        remarketingAdvantages: [
          'Нагадування про бренд',
          'Високий ROI',
          'Адаптація до поведінки користувача',
        ],
        remarketingUseCase:
          'Особливо ефективні для e-commerce, сервісів бронювання, курсів та B2B-компаній.',

        // Stages Section
        stagesTitle: 'Етапи запуску контекстної реклами',
        stagesDescription:
          'Запуск ефективної контекстної реклами вимагає системного підходу та чіткого дотримання послідовності дій. Кожен етап відіграє ключову роль у досягненні ваших бізнес-цілей.',

        // Stage 1
        stage1Title: 'Аналіз бізнесу та цільової аудиторії',
        stage1Description:
          'На першому етапі важливо зрозуміти, хто є вашим потенційним клієнтом, які проблеми ви вирішуєте, які переваги має ваш продукт або послуга. Аналіз конкурентів також дає змогу виявити сильні та слабкі сторони ринку.',
        stage1Bullets: [
          'Дослідження поведінки цільової аудиторії',
          'Аналіз стратегій конкурентів',
          'Виявлення унікальних переваг продукту',
        ],

        // Stage 2
        stage2Title: 'Визначення цілей та KPI',
        stage2Description:
          'Мета кампанії може бути різною: продаж, генерація лідів, впізнаваність бренду або підписка. Для кожної мети визначаються ключові показники ефективності (KPI), наприклад, вартість ліда (CPL), рентабельність витрат (ROAS) чи CTR.',
        stage2Bullets: [
          'Встановлення чітких бізнес-метрик',
          'Визначення допустимої вартості залучення клієнта',
          'Розрахунок очікуваного ROI',
        ],

        // Stage 3
        stage3Title: 'Підбір ключових слів та аудиторій',
        stage3Description:
          'Проводиться семантичне ядро — список релевантних ключових фраз, за якими користувачі шукають ваші товари чи послуги. Також налаштовуються цільові аудиторії — за інтересами, поведінкою, географією, мовою тощо.',
        stage3Bullets: [
          'Збір пошукових запитів вашої ЦА',
          'Аналіз пошукових обсягів та конкуренції',
          'Групування ключових слів за тематиками',
        ],

        // Stage 4
        stage4Title: 'Створення рекламних оголошень',
        stage4Description:
          'Пишуться привабливі тексти, що стимулюють до дії, підбираються зображення або відео. Оголошення мають відповідати очікуванням користувача та вести на релевантну цільову сторінку.',
        stage4Bullets: [
          'Написання конверсійних заголовків',
          'Створення унікальних торгових пропозицій',
          'Розробка чітких CTA (закликів до дії)',
        ],

        // Stage 5
        stage5Title: 'Налаштування кампанії в Google Ads',
        stage5Description:
          'Усі параметри — геотаргетинг, бюджет, ставки, графік показу — задаються відповідно до стратегії. Також підключається відстеження конверсій через Google Analytics або Tag Manager.',
        stage5Bullets: [
          'Структурування кампаній та груп оголошень',
          'Налаштування таргетингу та виключень',
          'Впровадження систем відстеження',
        ],

        // Stage 6
        stage6Title: 'Запуск та моніторинг',
        stage6Description:
          'Після запуску важливо контролювати хід кампанії щодня: відстежувати витрати, переглядати клікабельність, вносити оперативні коригування.',
        stage6Bullets: [
          'Аналіз показників у реальному часі',
          'Контроль витрат та ефективності',
          'Швидке реагування на зміни в метриках',
        ],

        // Stage 7
        stage7Title: 'Оптимізація',
        stage7Description:
          'На основі зібраних даних оптимізуються ключові слова, таргетинг, креативи, ставки. Тестуються A/B-варіанти оголошень для підвищення ефективності.',
        stage7Bullets: [
          'Корекція стратегії на основі даних',
          'Проведення A/B-тестів',
          'Масштабування успішних підходів',
        ],

        stagesCalloutTitle: 'Готові запустити ефективну контекстну рекламу?',
        stagesCalloutDescription:
          'Наша команда створить і запустить для вас кампанію, яка приведе цільових клієнтів та забезпечить максимальну окупність інвестицій',
        stagesCalloutButton: 'Замовити консультацію',

        // Tools Section
        toolsTitle: 'Інструменти для роботи з контекстною рекламою',
        toolsDescription:
          'Успішне ведення контекстної реклами неможливе без використання професійних інструментів. Вони допомагають автоматизувати процеси, аналізувати результати, оптимізувати витрати та досягати кращих показників.',

        // Google Ads
        toolGoogleAdsName: 'Google Ads',
        toolGoogleAdsDescription:
          'Це основна платформа для запуску пошукових, медійних, відео- та торгових кампаній. Дозволяє налаштовувати кампанії будь-якого рівня складності, керувати ставками, створювати оголошення, сегментувати аудиторії та відстежувати ефективність.',
        toolGoogleAdsFeatures: [
          'Запуск всіх типів рекламних кампаній',
          'Гнучке керування ставками та бюджетом',
          'Детальна аналітика результатів',
        ],

        // Google Analytics
        toolAnalyticsName: 'Google Analytics',
        toolAnalyticsDescription:
          'Незамінний інструмент для збору та аналізу поведінки користувачів на сайті. Дає змогу побачити, як працюють оголошення, які сторінки найефективніші, скільки часу користувач проводить на сайті, які конверсії відбуваються.',
        toolAnalyticsFeatures: [
          'Відстеження джерел трафіку та поведінки',
          'Налаштування цілей та конверсій',
          'Інтеграція з Google Ads',
        ],

        // Google Tag Manager
        toolTagManagerName: 'Google Tag Manager',
        toolTagManagerDescription:
          'Сервіс для зручного керування тегами без необхідності втручання в код сайту. Дозволяє встановлювати пікселі конверсій, ремаркетингу, події аналітики тощо.',
        toolTagManagerFeatures: [
          'Встановлення тегів без редагування коду',
          'Централізоване керування тегами',
          'Налаштування тригерів та змінних',
        ],

        // Keyword Planner
        toolKeywordPlannerName: 'Keyword Planner',
        toolKeywordPlannerDescription:
          'Інструмент від Google для підбору ключових слів. Дає змогу дізнатися частотність запитів, рівень конкуренції та приблизну ціну за клік. Ідеально підходить для створення семантичного ядра.',
        toolKeywordPlannerFeatures: [
          'Пошук релевантних ключових слів',
          'Оцінка обсягів пошуку та конкуренції',
          'Прогнозування бюджету кампанії',
        ],

        // SEO Tools
        toolSeoToolsName: 'SEMrush, Ahrefs, Serpstat',
        toolSeoToolsDescription:
          'SEO-аналітичні сервіси, що також корисні для контекстної реклами. Допомагають вивчати конкурентів, аналізувати рекламні стратегії інших компаній, підбирати ключові слова та відстежувати позиції.',
        toolSeoToolsFeatures: [
          'Аналіз конкурентних стратегій',
          'Розширений пошук ключових слів',
          'Відстеження позицій та видимості',
        ],

        // UX Tools
        toolUxToolsName: 'Hotjar або Clarity',
        toolUxToolsDescription:
          'Ці сервіси дають змогу бачити, як користувачі взаємодіють із сайтом: куди клікають, як гортaють сторінку, що їх зупиняє. Це корисно для підвищення конверсій після переходу з реклами.',
        toolUxToolsFeatures: [
          'Теплові карти кліків та скролу',
          'Запис сесій користувачів',
          "Опитування та форми зворотного зв'язку",
        ],

        toolsNote:
          'Наші фахівці володіють усіма необхідними інструментами на професійному рівні та постійно відстежують нові функції й можливості, щоб забезпечити вашому бізнесу максимальну ефективність контекстної реклами.',

        // KPI Section
        kpiTitle: 'Показники ефективності (KPI)',
        kpiDescription:
          'Для оцінки успішності контекстної реклами важливо орієнтуватися не лише на загальну кількість кліків чи витрат, а й на конкретні показники ефективності — KPI. Саме вони демонструють, наскільки реклама досягає поставлених бізнес-цілей.',

        // CTR
        kpiCtrName: 'CTR',
        kpiCtrSubtitle: 'Click-Through Rate — клікабельність',
        kpiText: 'Приклад:',
        kpiCtrContent:
          'Показує відсоток користувачів, які побачили оголошення та клікнули на нього. Високий CTR свідчить про релевантність оголошення до запиту або інтересів аудиторії.',
        kpiCtrExample:
          'CTR = 5% означає, що 5 зі 100 користувачів, які побачили оголошення, клікнули на нього',

        // CPC
        kpiCpcName: 'CPC',
        kpiCpcSubtitle: 'Cost per Click — ціна за клік',
        kpiCpcContent:
          'Це середня сума, яку ви платите за кожен перехід за оголошенням. Важливо знижувати CPC без втрати трафіку шляхом оптимізації оголошень та ключових слів.',
        kpiCpcExample:
          'CPC = 2€ означає, що за кожен клік по вашому оголошенню ви платите в середньому 2€',

        // CPA
        kpiCpaName: 'CPA',
        kpiCpaSubtitle: 'Cost per Acquisition — вартість конверсії',
        kpiCpaContent:
          'CPA визначає, скільки в середньому коштує залучення одного клієнта (наприклад, покупця або ліда). Це ключовий показник для оцінки рентабельності кампанії.',
        kpiCpaExample:
          'CPA = 25€ означає, що залучення одного нового клієнта коштує в середньому 25€',

        // ROAS
        kpiRoasName: 'ROAS',
        kpiRoasSubtitle: 'Return on Ad Spend — прибутковість',
        kpiRoasContent:
          'Цей показник відображає співвідношення доходу до витрат на рекламу. Якщо ROAS перевищує 100%, кампанія приносить прибуток.',
        kpiRoasExample:
          'ROAS = 350% означає, що на кожен 1€, вкладений у рекламу, ви отримуєте 3.5€ доходу',

        // Конверсіи
        kpiConversionsName: 'Кількість конверсій',
        kpiConversionsSubtitle: 'Обсяг цільових дій користувачів',
        kpiConversionsContent:
          'Фіксується кожна дія, яку вважають цільовою: заповнення форми, дзвінок, покупка. Аналіз кількості й якості конверсій допомагає коригувати стратегію.',
        kpiConversionsExample:
          '120 конверсій при 3000 кліків дає коефіцієнт конверсії 4%, що є хорошим показником',

        // Якість трафіку
        kpiQualityName: 'Якість трафіку',
        kpiQualitySubtitle: 'Поведінкові метрики користувачів',
        kpiQualityContent:
          'Визначається через поведінку користувачів на сайті: глибина перегляду, час перебування, відсоток відмов. Високоякісний трафік означає більшу ймовірність продажів.',
        kpiQualityExample:
          'Середній час на сайті 3:20, перегляд 3.5 сторінок, відсоток відмов 35% — показники якісного трафіку',

        kpiActionText:
          'Хочете отримати детальний аналіз ефективності вашої рекламної кампанії?',
        kpiActionButton: 'Замовити аудит ефективності',

        // Suitable For Section
        suitableForTitle: 'Кому підходить контекстна реклама',
        suitableForDescription:
          'Контекстна реклама — це універсальний інструмент, який підходить практично для будь-якого бізнесу, незалежно від ніші, розміру компанії чи стадії розвитку. Однак є типи бізнесу, яким вона приносить особливо відчутні результати.',

        // Business Types
        businessTextItem: 'Переваги: ',
        businessSmbName: 'Малий та середній бізнес',
        businessSmbDescription:
          'Пошукова реклама дозволяє отримувати клієнтів вже в перший день запуску кампанії. Немає потреби чекати кілька місяців, як у SEO. Це ідеальний варіант для компаній, які щойно виходять на ринок або запускають нові продукти.',
        businessSmbAdvantages: [
          'Швидкий старт і миттєві результати',
          'Гнучкий контроль рекламного бюджету',
          'Точне налаштування під локальну аудиторію',
          'Висока ефективність при запуску нових продуктів',
        ],
        businessSmbStats: [
          {icon: '⚡', value: '300-400%', label: 'Середній ROI' },
          {icon: '🚀', value: '1-2 дні', label: 'Час до перших клієнтів' },
        ],

        businessEcommerceName: 'Інтернет-магазини',
        businessEcommerceDescription:
          'Для e-commerce ефективні торгові кампанії, динамічний ремаркетинг та пошукова реклама. Ви можете показувати свої товари користувачам, які активно їх шукають, а також повертати відвідувачів, які не завершили покупку.',
        businessEcommerceAdvantages: [
          'Візуальні оголошення з товарами у Shopping Ads',
          'Динамічний ремаркетинг для повернення клієнтів',
          'Таргетування за сезонними інтересами',
          'Оптимізація конверсії для окремих категорій товарів',
        ],
        businessEcommerceStats: [
          {icon: '📊', value: '30%', label: 'Збільшення конверсії' },
          {icon: '📈', value: '25%', label: 'Зростання середнього чеку' },
        ],

        businessServicesName: 'Сфера послуг',
        businessServicesDescription:
          'Реклама у Google Ads дозволяє залучити клієнтів на консультування, запис до лікаря, замовлення доставки чи будь-яку іншу послугу. Таргетинг на локальну аудиторію особливо ефективний для офлайн-бізнесів.',
        businessServicesAdvantages: [
          'Геолокаційне таргетування на район чи місто',
          'Реклама за часовим розкладом роботи',
          'Відстеження та аналіз дзвінків',
          'Інтеграція з CRM для відстеження клієнтів',
        ],
        businessServicesStats: [
          {icon: '📱', value: '40-50%', label: 'Зростання клієнтської бази' },
          {icon: '📍', value: '60%', label: 'Більше локальних клієнтів' },
        ],

        businessB2bName: 'B2B-компанії',
        businessB2bDescription:
          'Хоча цикл угоди тут довший, контекстна реклама чудово працює для залучення лідів, проведення вебінарів, підписки на розсилки або бронювання зустрічей з менеджерами.',
        businessB2bAdvantages: [
          'Генерація якісних B2B лідів',
          'Просування вебінарів та професійних подій',
          'Таргетинг за посадою та галуззю',
          'Ремаркетинг для довгого циклу прийняття рішень',
        ],
        businessB2bStats: [
          {icon: '💼', value: '25%', label: 'Підвищення якості лідів' },
          {icon: '💰', value: '20%', label: 'Зниження вартості ліда' },
        ],

        businessStartupsName: 'Стартапи',
        businessStartupsDescription:
          'Контекстна реклама — це спосіб швидко протестувати гіпотези, перевірити попит і вийти на цільову аудиторію з мінімальними витратами часу.',
        businessStartupsAdvantages: [
            'Швидке тестування MVP та бізнес-ідей',
            'Детальний аналіз реакції аудиторії',
            'Гнучкі стратегії A/B тестування',
            'Масштабування при підтвердженні гіпотез',
          ],
        businessStartupsStats: [
            { icon: '🔥', value: '60%', label: 'Скорочення Time-to-Market' },
            { icon: '📝', value: '45%', label: "Більше зворотного зв'язку" },
          ],

        suitableForCtaTitle:
          'Не впевнені, чи підходить контекстна реклама для вашого бізнесу?',
        suitableForCtaText:
          "Наші фахівці допоможуть вам з'ясувати, чи підійде контекстна реклама саме вашому бізнесу, та розроблять індивідуальну стратегію з урахуванням специфіки вашої ніші.",
        suitableForCtaButton: 'Отримати безкоштовну консультацію',

        // Approach Section
        approachTitle: 'Наш підхід до запуску реклами',
        approachIntro:
          'Ми не просто налаштовуємо контекстну рекламу — ми створюємо рішення, які працюють на результат. Наш підхід заснований на глибокому аналізі, тестуванні та постійній оптимізації.',

        // Approach Stage 1
        approachStage1Title: 'Занурення в бізнес',
        approachStage1Description:
          'Спочатку ми занурюємось у бізнес-контекст клієнта: вивчаємо продукт, конкурентів, цільову аудиторію та її поведінкові патерни. Глибоке розуміння продукту дозволяє нам знайти його унікальні переваги та правильно презентувати їх у рекламі.',
        approachStage1Tags: [
          'Аналіз ніші',
          'Вивчення конкурентів',
          'Аудит цільової аудиторії',
        ],

        // Approach Stage 2
        approachStage2Title: 'Стратегія та планування',
        approachStage2Description:
          'Далі — визначаємо чіткі KPI, розробляємо медіаплан і запускаємо кампанії через Google Ads. Замість простого запуску реклами, ми розробляємо комплексну стратегію з декількома сценаріями розвитку та чітким розподілом бюджету.',
        approachStage2Tags: [
          'Медіапланування',
          'Визначення KPI',
          'Бюджетування',
        ],

        // Approach Stage 3
        approachStage3Title: 'Моніторинг та оптимізація',
        approachStage3Description:
          'У процесі роботи ми щоденно моніторимо ефективність: переглядаємо клікабельність оголошень, якість трафіку, конверсії та вартість залучення. За потреби оперативно вносимо коригування. Після тестування декількох варіантів реклами залишаємо найрезультативніші.',
        approachStage3Tags: [
          'Щоденний контроль',
          'A/B тестування',
          'Оптимізація ставок',
        ],

        // Approach Stage 4
        approachStage4Title: 'Звітність і масштабування',
        approachStage4Description:
          'Ми забезпечуємо прозору звітність: клієнт бачить, куди витрачається бюджет, які кампанії працюють найкраще і як змінюється віддача з часом. Наше завдання — не просто витратити рекламні кошти, а примножити їх, тому ми постійно шукаємо нові можливості для масштабування успішних кампаній.',
        approachStage4Tags: [
          'Прозора аналітика',
          'ROI-орієнтованість',
          'Масштабування успіху',
        ],

        // Results Section
        resultsTitle: 'Що ви отримаєте в результаті',
        resultsIntro:
          'Запуск контекстної реклами з нами — це не просто набір оголошень у Google. Це системний підхід, що приносить вимірюваний результат і конкретні бізнес-переваги.',

        // Result 1
        result1Title: 'Цільовий трафік на сайт',
        result1Description:
          'Користувачі, які вже шукають ваші товари чи послуги, побачать ваші оголошення в потрібний момент. Контекстна реклама забезпечує найвищу релевантність аудиторії.',
        result1Metric: { value: '93%', label: 'релевантності аудиторії' },

        // Result 2
        result2Title: 'Зростання звернень і продажів',
        result2Description:
          'Завдяки точному таргетингу та ефективній структурі кампаній, ваші конверсії зростуть. Ми зосереджуємось на залученні клієнтів, готових до покупки.',
        result2Metric: { value: '+45%', label: 'середнє зростання конверсій' },

        // Result 3
        result3Title: 'Підвищення впізнаваності бренду',
        result3Description:
          'Особливо при використанні медійної реклами та YouTube, ваш бренд стане помітнішим для цільової аудиторії. Ми допомагаємо залишатися на виду.',
        result3Metric: { value: '3.5x', label: 'зростання brand awareness' },

        // Result 4
        result4Title: 'Повний контроль над бюджетом',
        result4Description:
          'Ви самі визначаєте, скільки готові інвестувати. Ми забезпечуємо максимальну ефективність кожної витраченої гривні на рекламу.',
        result4Metric: { value: '100%', label: 'прозорості витрат' },

        // Result 5
        result5Title: 'Прозора аналітика',
        result5Description:
          'Наші звіти показують кожен клік, конверсію та прибутковість. Ви завжди знаєте, що працює, а що потребує оптимізації в рекламних кампаніях.',
        result5Metric: { value: '24/7', label: 'доступ до даних' },

        // Result 6
        result6Title: 'Гнучкість і швидкість змін',
        result6Description:
          'Кампанії можна адаптувати в реальному часі до змін на ринку. Ми оперативно реагуємо на нові тренди та коригуємо стратегію для кращих результатів.',
        result6Metric: { value: '~24 год', label: 'на впровадження змін' },

        resultsNoteHighlight:
          'Наша мета — не просто запуск реклами, а стабільне зростання вашого бізнесу завдяки цифровим каналам.',
        resultsActionButton: 'Отримати безкоштовну консультацію',

        // FAQ Section
        faqData: {
          question1:
            'Скільки часу потрібно, щоб побачити перші результати від контекстної реклами?',
          answer1:
            "Зазвичай перші кліки та переходи на сайт з'являються вже в день запуску. Проте для повноцінної оцінки ефективності варто дочекатися хоча б 1–2 тижнів накопичення статистики.",
          question2: 'Чи можна запускати контекстну рекламу без сайту?',
          answer2:
            'Так, у деяких випадках можна направляти трафік на лендінг, сторінку в соцмережах або Google Мій бізнес. Проте сайт або посадкова сторінка значно покращують якість реклами та конверсію.',
          question3: 'Чи варто запускати контекстну рекламу у "не сезон"?',
          answer3:
            'Це залежить від ніші. У деяких сферах (наприклад, ремонт, навчання, подарунки) "не сезон" означає меншу конкуренцію та нижчу ціну за клік. Це може бути вигідною стратегією.',
          question4: 'Як уникнути склікування бюджету конкурентами?',
          answer4:
            'Google має вбудовані механізми захисту від фродового трафіку. Також можна використовувати додаткові сервіси захисту, обмеження по IP та геолокації. Ми застосовуємо комплексні методи протидії.',
          question5:
            'Чи можу я самостійно керувати рекламною кампанією після запуску?',
          answer5:
            'Так, ми можемо налаштувати кампанію з урахуванням подальшого самостійного управління. Також проводимо інструктаж або передаємо повний пакет налаштувань з поясненнями.',
        },

        faqCtaText:
          "Залишилися питання щодо контекстної реклами? Зв'яжіться з нами для безкоштовної консультації",
        faqCtaButton: 'Отримати консультацію',
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
