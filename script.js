document.getElementById("year").textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const settingsToggle = document.getElementById("settings-toggle");
const settingsPanel = document.getElementById("settings-panel");
const themeToggle = document.getElementById("theme-toggle");
const languageToggle = document.getElementById("language-toggle");
const languageLabel = document.getElementById("language-label");
const textToggle = document.getElementById("text-toggle");
const contrastToggle = document.getElementById("contrast-toggle");
const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");
const nameInput = document.querySelector('.contact-form input[name="name"]');
const locationInput = document.querySelector('.contact-form input[name="location"]');
const projectInput = document.querySelector('.contact-form textarea[name="message"]');
const portfolioLightbox = document.getElementById("portfolio-lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const metaDescription = document.querySelector('meta[name="description"]');
const englishTitle = document.title;
const englishDescription = metaDescription.content;

const hindiText = {
  "Services": "सेवाएँ",
  "Our work": "हमारा काम",
  "Process": "प्रक्रिया",
  "About": "परिचय",
  "FAQ": "सामान्य प्रश्न",
  "Let's talk": "बात करें",
  "Settings": "सेटिंग्स",
  "Light theme": "हल्की थीम",
  "Larger text": "बड़ा टेक्स्ट",
  "High contrast": "उच्च कंट्रास्ट",
  "DIGITAL EXPERIENCES, BUILT WITH PURPOSE": "उद्देश्यपूर्ण डिजिटल अनुभव",
  "Thoughtful websites": "सोच-समझकर बनाई गई वेबसाइटें",
  "for ambitious ideas.": "महत्वाकांक्षी विचारों के लिए।",
  "I design and build modern, responsive websites that help people and businesses show up with confidence online.": "मैं आधुनिक और रिस्पॉन्सिव वेबसाइटें डिज़ाइन और बनाता हूँ, जो लोगों और व्यवसायों को ऑनलाइन आत्मविश्वास से आगे बढ़ने में मदद करती हैं।",
  "Let's talk": "बात करें",
  "Explore my work": "मेरा काम देखें",
  "THOUGHTFULLY MADE FOR": "इनके लिए सोच-समझकर बनाया गया",
  "Small businesses": "छोटे व्यवसाय",
  "Startups": "स्टार्टअप",
  "Creators": "क्रिएटर्स",
  "Professionals": "पेशेवर",
  "Local brands": "स्थानीय ब्रांड",
  "We turn your": "हम आपके",
  "ideas into": "विचारों को",
  "digital reality.": "डिजिटल रूप देते हैं।",
  "Webora Technologies creates clean, modern and responsive websites that help businesses build trust and grow online.": "Webora Technologies आधुनिक और रिस्पॉन्सिव वेबसाइट बनाता है, जिससे व्यवसाय ऑनलाइन भरोसा और पहचान बना सकें।",
  "Start a project": "प्रोजेक्ट शुरू करें",
  "Explore our work": "हमारा काम देखें",
  "Thoughtful design. Reliable development.": "सोच-समझकर डिज़ाइन। भरोसेमंद डेवलपमेंट।",
  "Made for people and businesses with big ideas.": "बड़े विचारों वाले लोगों और व्यवसायों के लिए।",
  "Design that connects": "जुड़ाव बनाने वाला डिज़ाइन",
  "Responsive by design": "हर स्क्रीन के लिए रिस्पॉन्सिव",
  "DESIGN": "डिज़ाइन",
  "DEVELOPMENT": "डेवलपमेंट",
  "GROWTH": "विकास",
  "SCROLL TO EXPLORE ↓": "आगे देखने के लिए स्क्रॉल करें ↓",
  "01 / ABOUT WEBORA": "01 / WEBORA के बारे में",
  "Webora Technologies": "Webora Technologies",
  "Webora Technologies creates clear, modern and responsive websites for individuals, startups and small businesses.": "Webora Technologies व्यक्तियों, स्टार्टअप और छोटे व्यवसायों के लिए स्पष्ट, आधुनिक और रिस्पॉन्सिव वेबसाइटें बनाता है।",
  "Our services include website development, responsive design, UI/UX design and website refreshes, shaped around each project's goals and audience.": "हमारी सेवाओं में वेबसाइट डेवलपमेंट, रिस्पॉन्सिव डिज़ाइन, UI/UX डिज़ाइन और वेबसाइट रिफ्रेश शामिल हैं, जिन्हें हर प्रोजेक्ट के लक्ष्यों और दर्शकों के अनुसार तैयार किया जाता है।",
  "From planning and design through development and launch, we focus on practical layouts, easy-to-use experiences and reliable communication.": "योजना और डिज़ाइन से लेकर डेवलपमेंट और लॉन्च तक, हम उपयोगी लेआउट, आसान अनुभव और भरोसेमंद संवाद पर ध्यान देते हैं।",
  "Our goal: Turn your ideas into a professional online experience.": "हमारा लक्ष्य: आपके विचारों को एक पेशेवर ऑनलाइन अनुभव में बदलना।",
  "02 / WHAT WE DO": "02 / हम क्या करते हैं",
  "Small details.": "छोटी बातें।",
  "Big impact.": "बड़ा असर।",
  "From the first sketch to the final launch, we focus on creating useful digital experiences that make your business easier to discover.": "पहले विचार से लेकर लॉन्च तक, हम ऐसे उपयोगी डिजिटल अनुभव बनाते हैं जो आपके व्यवसाय को ऑनलाइन ढूँढ़ना आसान करें।",
  "Website Development": "वेबसाइट डेवलपमेंट",
  "Professional websites designed to introduce your business, explain your services and help customers reach you.": "आपके व्यवसाय का परिचय देने, सेवाएँ समझाने और ग्राहकों से संपर्क आसान करने वाली पेशेवर वेबसाइटें।",
  "Discuss a website": "वेबसाइट पर बात करें",
  "Responsive Design": "रिस्पॉन्सिव डिज़ाइन",
  "Clean layouts that adapt smoothly across mobile phones, tablets and desktop screens.": "साफ़ लेआउट जो मोबाइल, टैबलेट और कंप्यूटर पर आसानी से ढलते हैं।",
  "Make it responsive": "रिस्पॉन्सिव बनाएँ",
  "UI/UX Design": "UI/UX डिज़ाइन",
  "Simple, thoughtful interfaces and page structures that help visitors find what they need.": "सरल और सोच-समझकर बनाए गए इंटरफ़ेस, जिनसे विज़िटर आसानी से ज़रूरी जानकारी पाएँ।",
  "Improve your experience": "अनुभव बेहतर करें",
  "Website Refresh": "वेबसाइट रिफ्रेश",
  "Give an existing website a clearer structure, refreshed visual style and better mobile experience.": "मौजूदा वेबसाइट को बेहतर संरचना, नया रूप और अच्छा मोबाइल अनुभव दें।",
  "Refresh my website": "मेरी वेबसाइट रिफ्रेश करें",
  "03 / SELECTED CONCEPTS": "03 / चुने हुए कॉन्सेप्ट",
  "Ideas brought": "विचारों को लाएँ",
  "to the screen.": "स्क्रीन पर।",
  "A few sample directions that demonstrate the kind of websites we can create. These are concept projects, not commissioned client work.": "ये कुछ नमूने हैं जो हमारे वेबसाइट डिज़ाइन का अंदाज़ दिखाते हैं। ये कॉन्सेप्ट प्रोजेक्ट हैं, क्लाइंट के लिए किए गए काम नहीं।",
  "CONCEPT 01 · HOSPITALITY": "कॉन्सेप्ट 01 · हॉस्पिटैलिटी",
  "Restaurant website": "रेस्तराँ वेबसाइट",
  "CONCEPT 02 · FITNESS": "कॉन्सेप्ट 02 · फिटनेस",
  "Fitness studio website": "फिटनेस स्टूडियो वेबसाइट",
  "CONCEPT 03 · PERSONAL BRAND": "कॉन्सेप्ट 03 · व्यक्तिगत ब्रांड",
  "Portfolio website": "पोर्टफोलियो वेबसाइट",
  "04 / HOW WE WORK": "04 / हमारी प्रक्रिया",
  "Clear steps.": "स्पष्ट चरण।",
  "No surprises.": "कोई अनचाहा सरप्राइज़ नहीं।",
  "A clear, collaborative workflow keeps the scope, feedback and next steps aligned from kickoff to launch.": "स्पष्ट और सहयोगी प्रक्रिया से काम का दायरा, सुझाव और अगले कदम शुरुआत से लॉन्च तक व्यवस्थित रहते हैं।",
  "Tell us about your idea": "अपने विचार के बारे में बताएँ",
  "Discovery & goals": "ज़रूरतें और लक्ष्य",
  "We discuss your business, audience, goals, required pages and features to define what the website needs to achieve.": "हम आपके व्यवसाय, दर्शकों, लक्ष्यों, ज़रूरी पेज और सुविधाओं पर बात करते हैं, ताकि वेबसाइट का उद्देश्य स्पष्ट हो।",
  "Scope & planning": "दायरा और योजना",
  "We confirm the project scope, timeline and quote, then map out the page structure and milestones before work begins.": "काम शुरू होने से पहले हम प्रोजेक्ट का दायरा, समय-सीमा और अनुमानित कीमत तय करते हैं, फिर पेज और चरणों की योजना बनाते हैं।",
  "Design & development": "डिज़ाइन और डेवलपमेंट",
  "We design and build the agreed pages as a responsive website, sharing progress at checkpoints for your feedback.": "हम तय किए गए पेजों को रिस्पॉन्सिव वेबसाइट के रूप में बनाते हैं और तय चरणों पर आपकी राय लेते हैं।",
  "Review & launch": "समीक्षा और लॉन्च",
  "We test the site across screen sizes, complete agreed refinements and help publish it after your approval and final payment.": "हम वेबसाइट को अलग-अलग स्क्रीन पर जाँचते हैं, तय सुधार करते हैं और आपकी मंज़ूरी व अंतिम भुगतान के बाद इसे प्रकाशित करने में मदद करते हैं।",
  "ANSWERS BEFORE WE BEGIN": "शुरू करने से पहले जवाब",
  "Frequently asked": "अक्सर पूछे जाने वाले",
  "questions.": "सवाल।",
  "Have another question? Send a project enquiry and tell me what you have in mind.": "कोई और सवाल है? प्रोजेक्ट की जानकारी भेजें और बताएँ कि आप क्या बनाना चाहते हैं।",
  "Ask about your project": "अपने प्रोजेक्ट के बारे में पूछें",
  "What services do you offer?": "आप कौन-सी सेवाएँ देते हैं?",
  "Website development, responsive design, UI/UX design and website refreshes for individuals, startups and businesses.": "व्यक्तियों, स्टार्टअप और व्यवसायों के लिए वेबसाइट डेवलपमेंट, रिस्पॉन्सिव डिज़ाइन, UI/UX डिज़ाइन और वेबसाइट रिफ्रेश।",
  "How is project pricing decided?": "प्रोजेक्ट की कीमत कैसे तय होती है?",
  "Every project is different. The quote is based on your goals, pages and required features; the scope and quote are discussed before work begins.": "हर प्रोजेक्ट अलग होता है। कीमत आपके लक्ष्यों, पेजों और सुविधाओं पर निर्भर करती है। काम शुरू होने से पहले दायरे और कीमत पर बात होती है।",
  "How long will my website take?": "मेरी वेबसाइट बनने में कितना समय लगेगा?",
  "Timing depends on the project scope and the feedback process. We agree on a timeline during planning before development begins.": "समय प्रोजेक्ट के दायरे और सुझावों पर निर्भर करता है। डेवलपमेंट शुरू होने से पहले योजना में समय-सीमा तय की जाती है।",
  "Will my website work on mobile?": "क्या मेरी वेबसाइट मोबाइल पर चलेगी?",
  "Yes. Responsive layouts are planned for mobile phones, tablets and desktop screens.": "हाँ। वेबसाइट को मोबाइल, टैबलेट और कंप्यूटर के लिए रिस्पॉन्सिव बनाया जाता है।",
  "Can you refresh an existing website?": "क्या आप मौजूदा वेबसाइट को रिफ्रेश कर सकते हैं?",
  "Yes. Website refreshes can improve a site's structure, visual style and mobile experience.": "हाँ। वेबसाइट रिफ्रेश से उसकी संरचना, रूप और मोबाइल अनुभव बेहतर किए जा सकते हैं।",
  "How do I get started?": "मैं शुरुआत कैसे करूँ?",
  "Send a project enquiry with your goals and requirements. We can then discuss the scope, timeline and next steps.": "अपने लक्ष्य और ज़रूरतों के साथ प्रोजेक्ट की जानकारी भेजें। फिर हम दायरे, समय-सीमा और अगले कदमों पर बात करेंगे।",
  "HAVE A PROJECT IN MIND?": "क्या आपके पास कोई प्रोजेक्ट है?",
  "Let's make something": "आइए कुछ ऐसा बनाएँ",
  "worth visiting.": "जिसे देखना अच्छा लगे।",
  "Start": "शुरू",
  "here": "यहाँ",
  "05 / GET IN TOUCH": "05 / संपर्क करें",
  "Your next idea": "आपका अगला विचार",
  "starts with a": "शुरू होता है एक",
  "hello.": "नमस्ते से।",
  "Tell us a little about your project. We'll get back to you to discuss the next steps.": "अपने प्रोजेक्ट के बारे में बताएँ। अगले कदमों पर बात करने के लिए हम आपसे संपर्क करेंगे।",
  "EMAIL": "ईमेल",
  "PHONE": "फ़ोन",
  "BASED IN": "स्थान",
  "India · Working remotely": "भारत · दूरस्थ रूप से काम",
  "Your name": "आपका नाम",
  "Email address": "ईमेल पता",
  "Mobile number": "मोबाइल नंबर",
  "Location": "स्थान",
  "Project Enquiry": "प्रोजेक्ट की जानकारी",
  "Project details": "प्रोजेक्ट का विवरण",
  "Project type": "प्रोजेक्ट का प्रकार",
  "Select a project type": "प्रोजेक्ट का प्रकार चुनें",
  "Business website": "व्यवसाय की वेबसाइट",
  "E-commerce website": "ई-कॉमर्स वेबसाइट",
  "Website refresh": "वेबसाइट रिफ्रेश",
  "Other": "अन्य",
  "Preferred project timeline": "प्रोजेक्ट की पसंदीदा समय-सीमा",
  "Choose a timeline": "समय-सीमा चुनें",
  "As soon as possible": "जितनी जल्दी हो सके",
  "Within 2–4 weeks": "2–4 सप्ताह के भीतर",
  "Within 1–2 months": "1–2 महीने के भीतर",
  "Flexible / not decided": "लचीला / अभी तय नहीं",
  "Specific date to discuss": "चर्चा के लिए एक निश्चित तारीख",
  "Project description": "प्रोजेक्ट का विवरण",
  "What do you need?": "आपको क्या चाहिए?",
  "Choose a service": "सेवा चुनें",
  "New business website": "नए व्यवसाय की वेबसाइट",
  "Landing page": "लैंडिंग पेज",
  "Website redesign": "वेबसाइट री-डिज़ाइन",
  "UI/UX design": "UI/UX डिज़ाइन",
  "Something else": "कुछ और",
  "Tell us about your project": "अपने प्रोजेक्ट के बारे में बताएँ",
  "Send project enquiry": "प्रोजेक्ट की जानकारी भेजें",
  "Your enquiry will be sent to weboratechnologieswt@gmail.com through FormSubmit. On the first submission, confirm the activation email sent to that inbox. FormSubmit may retain submissions for up to 30 days; this website does not store them.": "आपकी जानकारी FormSubmit के ज़रिए weboratechnologieswt@gmail.com पर भेजी जाएगी। पहली बार भेजने के बाद उस इनबॉक्स में आए सक्रियण ईमेल की पुष्टि करें। FormSubmit जानकारी को 30 दिनों तक रख सकता है; यह वेबसाइट उसे सहेजती नहीं है।",
  "BACK TO TOP ↑": "ऊपर जाएँ ↑",
  "DESIGNED WITH INTENTION · BUILT FOR THE WEB": "सोच-समझकर डिज़ाइन · वेब के लिए निर्मित",
  "All rights reserved.": "सर्वाधिकार सुरक्षित।",
  "Webora Technologies. All rights reserved.": "Webora Technologies. सर्वाधिकार सुरक्षित।",
  "Webora Assistant": "Webora सहायक",
  "Ask me about Webora, our services, projects or how to get started.": "Webora, हमारी सेवाओं, प्रोजेक्ट या शुरुआत के बारे में पूछें।",
  "Hi, I'm Webora Assistant. How can I help you today?": "नमस्ते, मैं Webora Assistant हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
  "Services": "सेवाएँ",
  "Pricing": "कीमत",
  "Timeline": "समय-सीमा",
  "Our work": "हमारा काम",
  "Contact": "संपर्क",
  "Ask a question": "अपना सवाल पूछें",
  "Type your question...": "अपना सवाल लिखें...",
  "Send": "भेजें",
  "I answer using Webora's website information. For questions outside it, contact us by email or project enquiry.": "मैं Webora की वेबसाइट की जानकारी के आधार पर जवाब देता हूँ। इससे जुड़े न होने वाले सवालों के लिए ईमेल करें या प्रोजेक्ट जानकारी भेजें।"
};

const translations = { hi: hindiText };
const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let textNode;
while ((textNode = textWalker.nextNode())) {
  if (textNode.parentElement && !textNode.parentElement.closest("script, style")) {
    textNodes.push({ node: textNode, original: textNode.textContent });
  }
}

let currentLanguage = "en";
function translatePage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = language === "hi"
    ? "Webora Technologies | व्यवसाय को आगे बढ़ाने वाली वेबसाइटें"
    : englishTitle;
  metaDescription.content = language === "hi"
    ? "Webora Technologies व्यक्तियों, स्टार्टअप और व्यवसायों के लिए आधुनिक, रिस्पॉन्सिव वेबसाइटें बनाता है।"
    : englishDescription;
  textNodes.forEach(({ node, original }) => {
    const key = original.trim();
    const translated = language === "hi" ? translations.hi[key] : key;
    if (translated) {
      const leadingSpace = original.match(/^\s*/)[0];
      const trailingSpace = original.match(/\s*$/)[0];
      node.textContent = `${leadingSpace}${translated}${trailingSpace}`;
    } else {
      node.textContent = original;
    }
  });
  languageToggle.checked = language === "hi";
  languageLabel.textContent = language === "hi" ? "English" : "हिंदी";
  chatInput.placeholder = language === "hi" ? "अपना सवाल लिखें..." : "Type your question...";
  chatInput.setAttribute("aria-label", language === "hi" ? "अपना सवाल पूछें" : "Ask a question");
  nameInput.placeholder = language === "hi" ? "आपको किस नाम से पुकारें?" : "How should we call you?";
  locationInput.placeholder = language === "hi" ? "शहर, राज्य, देश" : "City, State, Country";
  projectInput.placeholder = language === "hi"
    ? "अपने लक्ष्य, पेज, सुविधाएँ और कोई संदर्भ बताएँ..."
    : "Describe your goals, pages, features, and any references...";
  chatToggle.setAttribute("aria-label", language === "hi" ? "Webora सहायक खोलें" : "Open Webora Assistant");
  menuButton.setAttribute("aria-label", navLinks.classList.contains("open")
    ? (language === "hi" ? "नेविगेशन बंद करें" : "Close navigation")
    : (language === "hi" ? "नेविगेशन खोलें" : "Open navigation"));
  settingsToggle.setAttribute("aria-label", language === "hi" ? "सेटिंग्स खोलें" : "Open settings");
  document.querySelector(".nav").setAttribute("aria-label", language === "hi" ? "मुख्य नेविगेशन" : "Main navigation");
  chatClose.setAttribute("aria-label", language === "hi" ? "चैट बंद करें" : "Close chat");
}

settingsToggle.addEventListener("click", () => {
  const isOpen = settingsPanel.hidden;
  settingsPanel.hidden = !isOpen;
  settingsToggle.setAttribute("aria-expanded", String(isOpen));
});

themeToggle.addEventListener("change", () => {
  document.body.dataset.theme = themeToggle.checked ? "light" : "dark";
  document.querySelector('meta[name="theme-color"]').content = themeToggle.checked ? "#f4f6fb" : "#0b1020";
});

languageToggle.addEventListener("change", () => {
  translatePage(languageToggle.checked ? "hi" : "en");
});

textToggle.addEventListener("change", () => {
  document.body.classList.toggle("larger-text", textToggle.checked);
});

contrastToggle.addEventListener("change", () => {
  document.body.classList.toggle("high-contrast", contrastToggle.checked);
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen
    ? (currentLanguage === "hi" ? "नेविगेशन बंद करें" : "Close navigation")
    : (currentLanguage === "hi" ? "नेविगेशन खोलें" : "Open navigation"));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", currentLanguage === "hi" ? "नेविगेशन खोलें" : "Open navigation");
    settingsPanel.hidden = true;
    settingsToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  if (!settingsPanel.hidden && !event.target.closest(".settings-panel, .settings-toggle")) {
    settingsPanel.hidden = true;
    settingsToggle.setAttribute("aria-expanded", "false");
  }
});

function appendChatMessage(message, type) {
  const bubble = document.createElement("p");
  bubble.className = `chat-message ${type}-message`;
  bubble.textContent = message;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

const chatbotAnswers = {
  en: {
    greeting: "Hi! I'm Webora Assistant. I can help with Webora's website services, project process, pricing and contact details. What would you like to know?",
    identity: "I'm Webora Assistant, an automated guide to Webora Technologies. I can answer questions using information published on this website.",
    about: "Webora Technologies creates modern, responsive websites for individuals, startups and small businesses. Our services include website development, UI/UX design and website refreshes.",
    services: "Webora offers website development, responsive design, UI/UX design and website refreshes.",
    pricing: "Pricing depends on the pages, features and scope of your project. Send an enquiry for a tailored quote before work begins.",
    timeline: "The timeline depends on the project scope and feedback. We agree on a schedule during planning.",
    process: "We begin by discussing your goals, confirm scope and timeline, build the agreed website, then review and prepare it for launch.",
    responsive: "Yes. Websites are designed to adapt to mobile phones, tablets and desktop screens.",
    refresh: "Yes. Webora can refresh an existing website's structure, visual style and mobile experience.",
    work: "You can browse website concepts in the Our Work section. These are sample concepts, not commissioned client projects.",
    contact: "Use the project enquiry form, email weboratechnologieswt@gmail.com, or call 8217634422.",
    location: "Webora Technologies is based in India and works remotely.",
    maintenance: "Ongoing maintenance plans aren't described on this website. Send an enquiry with your support needs so Webora can confirm what's available.",
    features: "Webora lists website development, responsive design, UI/UX design and website refreshes. Specific platforms and features depend on project scope; send an enquiry to confirm your requirements.",
    thanks: "You're welcome! Ask me another question about Webora, or send a project enquiry if you'd like to discuss a website.",
    fallback: "I don't have enough information to answer that reliably yet. I can help with Webora's services, pricing, timelines, process, work samples and contact details. For a specific request, email weboratechnologieswt@gmail.com, call 8217634422, or send a project enquiry."
  },
  hi: {
    greeting: "नमस्ते! मैं Webora Assistant हूँ। मैं Webora की वेबसाइट सेवाओं, प्रोजेक्ट प्रक्रिया, कीमत और संपर्क जानकारी में मदद कर सकता हूँ। आप क्या जानना चाहेंगे?",
    identity: "मैं Webora Assistant हूँ, Webora Technologies के लिए एक स्वचालित जानकारी सहायक। मैं इस वेबसाइट पर दी गई जानकारी के आधार पर जवाब देता हूँ।",
    about: "Webora Technologies व्यक्तियों, स्टार्टअप और छोटे व्यवसायों के लिए आधुनिक, रिस्पॉन्सिव वेबसाइटें बनाता है। हमारी सेवाओं में वेबसाइट डेवलपमेंट, UI/UX डिज़ाइन और वेबसाइट रिफ्रेश शामिल हैं।",
    services: "Webora वेबसाइट डेवलपमेंट, रिस्पॉन्सिव डिज़ाइन, UI/UX डिज़ाइन और वेबसाइट रिफ्रेश सेवाएँ देता है।",
    pricing: "कीमत आपके प्रोजेक्ट के पेज, सुविधाओं और दायरे पर निर्भर करती है। काम शुरू होने से पहले अनुमानित कीमत के लिए जानकारी भेजें।",
    timeline: "समय प्रोजेक्ट के दायरे और सुझावों पर निर्भर करता है। योजना बनाते समय समय-सीमा तय की जाती है।",
    process: "पहले हम आपके लक्ष्य समझते हैं, फिर दायरा और समय तय करते हैं, वेबसाइट बनाते हैं और समीक्षा के बाद लॉन्च की तैयारी करते हैं।",
    responsive: "हाँ। वेबसाइट मोबाइल, टैबलेट और कंप्यूटर स्क्रीन के अनुसार ढलने के लिए बनाई जाती है।",
    refresh: "हाँ। Webora मौजूदा वेबसाइट की संरचना, रूप और मोबाइल अनुभव को बेहतर कर सकता है।",
    work: "Our Work सेक्शन में वेबसाइट के नमूना कॉन्सेप्ट देखें। ये उदाहरण हैं, क्लाइंट के लिए किए गए प्रोजेक्ट नहीं।",
    contact: "इस पेज पर प्रोजेक्ट जानकारी वाला फ़ॉर्म भरें, weboratechnologieswt@gmail.com पर ईमेल करें या 8217634422 पर कॉल करें।",
    location: "Webora Technologies भारत में स्थित है और दूरस्थ रूप से काम करता है।",
    maintenance: "इस वेबसाइट पर नियमित मेंटेनेंस योजनाओं की जानकारी नहीं दी गई है। उपलब्ध सहायता की पुष्टि के लिए अपनी ज़रूरतें भेजें।",
    features: "Webora वेबसाइट डेवलपमेंट, रिस्पॉन्सिव डिज़ाइन, UI/UX डिज़ाइन और वेबसाइट रिफ्रेश सेवाएँ देता है। खास प्लेटफ़ॉर्म और सुविधाएँ प्रोजेक्ट के दायरे पर निर्भर करती हैं; पुष्टि के लिए जानकारी भेजें।",
    thanks: "आपका स्वागत है! Webora के बारे में कुछ और पूछें या वेबसाइट पर बात करने के लिए प्रोजेक्ट जानकारी भेजें।",
    fallback: "मेरे पास अभी इसका भरोसेमंद जवाब देने के लिए पर्याप्त जानकारी नहीं है। मैं Webora की सेवाओं, कीमत, समय, प्रक्रिया, काम के नमूनों और संपर्क के बारे में बता सकता हूँ। खास अनुरोध के लिए weboratechnologieswt@gmail.com पर ईमेल करें, 8217634422 पर कॉल करें या प्रोजेक्ट जानकारी भेजें।"
  }
};

function getChatAnswer(question) {
  const text = question.toLowerCase();
  const patterns = [
    [/^(hi|hello|hey|good morning|good afternoon|good evening|नमस्ते|नमस्कार)[!.?,\s]*$/, "greeting"],
    [/\b(thanks|thank you|appreciate it)\b|धन्यवाद|शुक्रिया/, "thanks"],
    [/\b(who are you|what are you|who is this|your name)\b|आप कौन|तुम कौन/, "identity"],
    [/how long|timeline|how much time|कितना समय|समय-सीमा|समय सीमा|कब तक/, "timeline"],
    [/how much|price|pricing|cost|budget|quote|estimate|rate|कीमत|लागत|बजट|शुल्क/, "pricing"],
    [/\b(what is webora|who is webora|what does webora do|about webora|about us|company information|company details)\b|वेबोरा क्या|कंपनी के बारे में/, "about"],
    [/contact|email|reach|phone number|mobile number|telephone|call webora|hire|work with webora|संपर्क|ईमेल|फोन नंबर|मोबाइल नंबर|नंबर/, "contact"],
    [/\b(portfolio|examples?|sample work|your work|previous projects)\b|पोर्टफोलियो|उदाहरण|नमूने/, "work"],
    [/\b(where are you|where is webora|where are you based|location|based|india|remote|country)\b|कहाँ|स्थान|भारत|दूरस्थ/, "location"],
    [/maintenance|maintain|after launch|support plan|ongoing support|रखरखाव|लॉन्च के बाद/, "maintenance"],
    [/e-?commerce|online store|shopify|wordpress|booking|payments?|domain|hosting|platform|features?|support|updates?|seo|search engine|analytics|accessibility|ई.?कॉमर्स|ऑनलाइन स्टोर|बुकिंग|पेमेंट|डोमेन|होस्टिंग/, "features"],
    [/mobile|responsive|phone|मोबाइल|रिस्पॉन्सिव|फोन/, "responsive"],
    [/refresh|redesign|existing|मौजूदा|रिफ्रेश|री-डिज़ाइन/, "refresh"],
    [/process|start|begin|get started|next step|शुरू|प्रक्रिया|कैसे करें/, "process"],
    [/\b(service|services|offer|website|site|build|create|what do you do|what can you do|how can you help)\b|सेवा|वेबसाइट|साइट|क्या करते/, "services"]
  ];
  const match = patterns.find(([pattern]) => pattern.test(text));
  return chatbotAnswers[currentLanguage][match ? match[1] : "fallback"];
}

function submitChatQuestion(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;
  appendChatMessage(cleanQuestion, "user");
  appendChatMessage(getChatAnswer(cleanQuestion), "assistant");
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitChatQuestion(chatInput.value);
  chatInput.value = "";
  chatInput.focus();
});

chatMessages.addEventListener("click", (event) => {
  const suggestion = event.target.closest("[data-topic]");
  if (!suggestion) return;
  const questions = {
    en: {
      services: "What services do you offer?",
      pricing: "How much does a website cost?",
      timeline: "How long will it take?",
      work: "Can I see examples of your work?",
      contact: "How can I contact Webora?"
    },
    hi: {
      services: "आप कौन-सी सेवाएँ देते हैं?",
      pricing: "वेबसाइट की कीमत कितनी है?",
      timeline: "इसमें कितना समय लगेगा?",
      work: "क्या मैं आपके काम के उदाहरण देख सकता हूँ?",
      contact: "मैं Webora से संपर्क कैसे कर सकता हूँ?"
    }
  };
  submitChatQuestion(questions[currentLanguage][suggestion.dataset.topic]);
});

function setChatOpen(isOpen) {
  chatPanel.hidden = !isOpen;
  chatToggle.setAttribute("aria-expanded", String(isOpen));
  chatToggle.setAttribute("aria-label", isOpen
    ? (currentLanguage === "hi" ? "Webora सहायक बंद करें" : "Close Webora Assistant")
    : (currentLanguage === "hi" ? "Webora सहायक खोलें" : "Open Webora Assistant"));
  if (isOpen) chatInput.focus();
}

chatToggle.addEventListener("click", () => {
  setChatOpen(chatPanel.hidden);
});
chatClose.addEventListener("click", () => setChatOpen(false));

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!settingsPanel.hidden) {
    settingsPanel.hidden = true;
    settingsToggle.setAttribute("aria-expanded", "false");
  }
  if (!chatPanel.hidden) setChatOpen(false);
  if (portfolioLightbox.open) portfolioLightbox.close();
  navLinks.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
});

translatePage("en");

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

document.querySelectorAll(".work-image-button").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.alt;
    portfolioLightbox.showModal();
  });
});

document.getElementById("lightbox-close").addEventListener("click", () => {
  portfolioLightbox.close();
});
portfolioLightbox.addEventListener("click", (event) => {
  if (event.target === portfolioLightbox) portfolioLightbox.close();
});
