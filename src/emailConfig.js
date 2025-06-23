// EmailJS Configuration
// Замініть ці значення на ваші власні з панелі управління EmailJS

export const EMAILJS_CONFIG = {
  // Service ID - отримується при створенні Email Service в EmailJS
  SERVICE_ID: 'service_softqod',
  
  // Template ID - отримується при створенні Email Template в EmailJS
  TEMPLATE_ID: 'template_contact',
  
  // Public Key (User ID) - знаходиться в розділі Account > API Keys
  USER_ID: 'your_public_key_here',
};

// Інструкції по налаштуванню EmailJS:
// 
// 1. Зареєструйтесь на https://emailjs.com
// 2. Створіть Email Service (Gmail, Outlook, тощо)
// 3. Створіть Email Template з наступними змінними:
//    - {{from_name}} - ім'я відправника
//    - {{from_email}} - email відправника
//    - {{phone}} - телефон (якщо є)
//    - {{service}} - тип послуги
//    - {{message}} - повідомлення
// 4. Замініть значення вище на ваші реальні ідентифікатори
// 
// Приклад Email Template:
// 
// Subject: Нова заявка від {{from_name}}
// 
// Body:
// Ім'я: {{from_name}}
// Email: {{from_email}}
// Телефон: {{phone}}
// Послуга: {{service}}
// 
// Повідомлення:
// {{message}}

export default EMAILJS_CONFIG; 