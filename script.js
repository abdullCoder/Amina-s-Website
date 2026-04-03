  /* === MOBILE NAV === */
  function toggleMobileNav() {
    const nav = document.getElementById('mobileNav');
    const icon = document.getElementById('menuIcon');
    nav.classList.toggle('open');
    icon.className = nav.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  }
  function closeMobileNav() {
    document.getElementById('mobileNav').classList.remove('open');
    document.getElementById('menuIcon').className = 'fa-solid fa-bars';
  }

  /* === SCROLL TO TOP BUTTON === */
  const scrollBtn = document.getElementById('scrollBtn');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 400 ? 'grid' : 'none';
  });

  /* === FADE IN ON SCROLL === */
  const faders = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  faders.forEach(el => observer.observe(el));

  /* === APPOINTMENT FORM === */
  function submitAppointment(e) {
    e.preventDefault();
    const success = document.getElementById('apptSuccess');
    success.style.display = 'block';
    e.target.style.display = 'none';
    setTimeout(() => {
      success.style.display = 'none';
      e.target.style.display = 'block';
      e.target.reset();
    }, 5000);
  }

  /* === CONTACT FORM === */
  function submitContact(e) {
    e.preventDefault();
    const success = document.getElementById('contactSuccess');
    success.style.display = 'block';
    e.target.style.display = 'none';
    setTimeout(() => {
      success.style.display = 'none';
      e.target.style.display = 'block';
      e.target.reset();
    }, 5000);
  }

  /* === CHATBOT === */
  function toggleChat() {
    const box = document.getElementById('chatBox');
    const icon = document.getElementById('chatIcon');
    box.classList.toggle('open');
    icon.className = box.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-comment-medical';
  }

  /* Simple chatbot responses */
  const botReplies = {
    'appointment': '📅 You can book an appointment by filling out the form on this page, or call us at +234 800 123 4567!',
    'book': '📅 To book an appointment, scroll up to the "Book Appointment" section and fill in your details. We will confirm within 24 hours!',
    'emergency': '🚨 For emergencies, call us immediately: +234 800 911 0000. We are available 24/7!',
    'hours': '🕐 Our working hours are Monday–Friday: 8am–8pm, Saturday–Sunday: 9am–4pm. Emergency services are 24/7!',
    'doctors': '👨‍⚕️ We have over 50 specialist doctors! Scroll to the "Doctors" section to meet our team.',
    'services': '🏥 We offer General Medicine, Pediatrics, Maternity, Surgery, Cardiology, Laboratory, Pharmacy, and more!',
    'location': '📍 We are located at 14 Hospital Road, Victoria Island, Lagos, Nigeria.',
    'phone': '📞 Call us at +234 800 123 4567 for general inquiries, or +234 800 911 0000 for emergencies.',
    'hello': '👋 Hello there! How can I help you today? Feel free to ask about our services, doctors, or appointments!',
    'hi': '👋 Hi! Welcome to Amina\'s Hospital. What can I help you with today?',
    'thank': '😊 You\'re very welcome! Is there anything else I can help you with?',
  };

  function sendChat() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const text = input.value.trim();
    if (!text) return;

    // Add user message
    messages.innerHTML += `<div class="chat-msg user">${text}</div>`;
    input.value = '';

    // Find reply
    const lower = text.toLowerCase();
    let reply = '🤔 I\'m not sure about that. Please call us at <strong>+234 800 123 4567</strong> for more help, or scroll through our website!';
    for (const [key, val] of Object.entries(botReplies)) {
      if (lower.includes(key)) { reply = val; break; }
    }

    // Bot typing effect
    setTimeout(() => {
      messages.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
      messages.scrollTop = messages.scrollHeight;
    }, 600);

    messages.scrollTop = messages.scrollHeight;
  }

  /* === SET MIN DATE FOR APPOINTMENT === */
  document.addEventListener('DOMContentLoaded', () => {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    const today = new Date().toISOString().split('T')[0];
    dateInputs.forEach(d => d.setAttribute('min', today));
  });