// Multi-page Marketing Agency Website JavaScript

// Data from JSON
const appData = {
  "services": [
    {
      "id": 1,
      "name": "Strategy & Planning",
      "description": "Comprehensive digital roadmap for your success.",
      "detailedDescription": "We analyze your market, competitors, and audience to build a solid foundation for your digital growth.",
      "icon": "🎯",
      "features": ["Market Research", "Competitor Analysis", "Target Audience Persona", "Digital Marketing Roadmap"],
      "price": "Custom Pricing",
      "category": "Strategy"
    },
    {
      "id": 2,
      "name": "Content Creation",
      "description": "Engaging content that tells your brand story.",
      "detailedDescription": "From copywriting to video production, we create content that resonates with your audience and drives engagement.",
      "icon": "✍️",
      "features": ["Copywriting & Blogging", "Graphic Design & Branding", "Video Creation & Editing", "Motion Graphics / Animation"],
      "price": "Custom Pricing",
      "category": "Content"
    },
    {
      "id": 3,
      "name": "Meta Ads Growth Marketing",
      "description": "Specialized Facebook & Instagram advertising strategies designed to generate high-quality leads, sales, and scalable growth.",
      "detailedDescription": "We build and optimize high-performance Meta ad campaigns that convert visitors into customers.",
      "icon": "📈",
      "features": ["Audience research & targeting (Custom + Lookalike)", "Facebook & Instagram ad creatives & copy", "Lead generation, traffic & conversion ads"],
      "price": "Custom Pricing",
      "category": "Marketing"
    }
  ],
  "detailedServices": [
    {
      "id": 101,
      "name": "Content Marketing",
      "description": "Engaging content that tells your brand story.",
      "detailedDescription": "From copywriting to video production, we create content that resonates with your audience and drives engagement.",
      "icon": "✍️",
      "features": ["Copywriting & Blogging", "Graphic Design & Branding", "Video Creation & Editing", "Motion Graphics / Animation"],
      "price": "Custom Pricing",
      "category": "Content"
    },
    {
      "id": 102,
      "name": "Web Design & Development",
      "description": "Robust technical infrastructure for your business.",
      "detailedDescription": "We build and optimize high-performance websites and funnels that convert visitors into customers.",
      "icon": "💻",
      "features": ["Website Development (WordPress, Shopify)", "SEO Optimization (On-page & Technical)", "Landing Page & Funnel Building", "Analytics Setup"],
      "price": "Custom Pricing",
      "category": "Development"
    },
    {
      "id": 103,
      "name": "Social Media Management",
      "description": "Strategic social media management to grow your brand presence.",
      "detailedDescription": "We handle your social media accounts, create engaging content, and interact with your audience to build a loyal community.",
      "icon": "📱",
      "features": ["Profile Optimization", "Content Calendar", "Community Engagement", "Platform Growth Strategy"],
      "price": "Custom Pricing",
      "category": "Social Media"
    },
    {
      "id": 104,
      "name": "Influencer Marketing",
      "description": "Leverage the power of voices your audience trusts.",
      "detailedDescription": "We connect your brand with the right influencers to amplify your message and reach new customers authentically.",
      "icon": "📢",
      "features": ["Influencer Discovery", "Campaign Strategy", "Contract Negotiation", "Performance Measurement"],
      "price": "Custom Pricing",
      "category": "Marketing"
    },
    {
      "id": 105,
      "name": "Online Reputation Management (ORM)",
      "description": "Protect and enhance your brand's digital reputation.",
      "detailedDescription": "Comprehensive strategies to monitor, manage, and improve how your brand is perceived online.",
      "icon": "🛡️",
      "features": ["Review monitoring & response strategy", "Google & Justdial reputation cleanup", "PR article publishing & backlinking"],
      "price": "Custom Pricing",
      "category": "Reputation"
    },
    {
      "id": 106,
      "name": "Video Marketing & Reels Production",
      "description": "Captivating video content for the short-form era.",
      "detailedDescription": "High-quality video production optimized for engagement on platforms like Instagram and YouTube.",
      "icon": "🎥",
      "features": ["YouTube SEO & thumbnail design", "Short-form video campaigns (Instagram, YouTube Shorts)", "Motion graphics & storytelling"],
      "price": "Custom Pricing",
      "category": "Video"
    },
    {
      "id": 107,
      "name": "AI-Powered Marketing Automation",
      "description": "Smart automation to scale your marketing efforts.",
      "detailedDescription": "Leverage AI to automate interactions, target customers effectively, and optimize content delivery.",
      "icon": "🤖",
      "features": ["Chatbot setup (WhatsApp, website)", "Predictive customer targeting", "AI-generated content optimization"],
      "price": "Custom Pricing",
      "category": "Automation"
    },
    {
      "id": 108,
      "name": "E-commerce Growth Marketing",
      "description": "Drive sales and revenue for your online store.",
      "detailedDescription": "Specialized marketing strategies designed to increase conversions and sales on e-commerce platforms.",
      "icon": "🛍️",
      "features": ["Product listing optimization", "Marketplace ads (Amazon, Flipkart)", "Conversion rate optimization"],
      "price": "Custom Pricing",
      "category": "E-commerce"
    },
    {
      "id": 109,
      "name": "Brand Strategy & Positioning",
      "description": "Define who you are and why you matter.",
      "detailedDescription": "Strategic branding services to establish a strong, unique identity in the market.",
      "icon": "✨",
      "features": ["Brand audit & competitor benchmarking", "Visual identity & tone-of-voice guide", "Brand storytelling strategy"],
      "price": "Custom Pricing",
      "category": "Branding"
    }
  ],
  "consultationServices": [
    "Digital Marketing Strategy Consultation",
    "Brand & Positioning Guidance",
    "Social Media Growth Consultation",
    "SEO & Content Strategy Consultation",
    "Performance Marketing Advisory",
    "Business Automation & CRM Setup",
    "Reputation & PR Consultation"
  ],
  "packages": [
    {
      "name": "Launch Plan",
      "price": "₹14,999/month",
      "description": "Start driving basic traffic and leads.",
      "services": ["Basic Meta Ads setup", "Single campaign (Lead / Traffic)", "One ad creative", "Basic audience targeting", "Monthly report"],
      "features": ["Basic Meta Ads setup", "Single campaign (Lead / Traffic)", "One ad creative", "Basic audience targeting", "Monthly report"],
      "ideal": "Local businesses and new startups"
    },
    {
      "name": "Performance Growth",
      "price": "₹28,999/month",
      "description": "Scale your lead and conversion campaigns.",
      "services": ["Facebook & Instagram Ads (Meta Ads)", "Audience research & retargeting", "2-3 ad creatives per month", "Lead / conversion campaign setup", "Monthly performance report"],
      "features": ["Facebook & Instagram Ads (Meta Ads)", "Audience research & retargeting", "2-3 ad creatives per month", "Lead / conversion campaign setup", "Monthly performance report"],
      "ideal": "Growing businesses ready to scale"
    },
    {
      "name": "Professional Marketing Suite",
      "price": "₹44,999/month",
      "description": "Advanced multi-channel marketing suite.",
      "services": ["Advanced Meta Ads (Scaling)", "Google Ads (Optional add-on mention)", "Funnel & retargeting ads", "Weekly optimization", "Dedicated account manager", "Advanced reporting"],
      "features": ["Advanced Meta Ads (Scaling)", "Google Ads (Optional add-on mention)", "Funnel & retargeting ads", "Weekly optimization", "Dedicated account manager", "Advanced reporting"],
      "ideal": "Established businesses maximizing ROI"
    },
    {
      "name": "Enterprise Growth Engine",
      "price": "Custom Pricing",
      "description": "Complete growth engine for large scale operations.",
      "services": ["Full-funnel paid ads (Meta + Google)", "Custom strategy & creatives", "High-budget ad scaling", "Priority support", "Weekly review calls"],
      "features": ["Full-funnel paid ads (Meta + Google)", "Custom strategy & creatives", "High-budget ad scaling", "Priority support", "Weekly review calls"],
      "ideal": "Large enterprises and aggressive scaling"
    }
  ],
  "testimonials": [
    {
      "name": "Rajesh Sharma",
      "company": "TechStart Solutions",
      "position": "CEO",
      "text": "Our website traffic increased by 300% within 6 months. The SEO and content strategy was exactly what we needed to reach our target audience.",
      "rating": 5,
      "service": "SEO Optimization"
    },
    {
      "name": "Priya Mehta",
      "company": "Fashion Forward Boutique",
      "position": "Founder",
      "text": "Social media engagement skyrocketed! Their creative campaigns perfectly captured our brand essence and drove real sales.",
      "rating": 5,
      "service": "Social Media Marketing"
    },
    {
      "name": "Amit Kumar",
      "company": "Local Eats Restaurant",
      "position": "Owner",
      "text": "Google Ads campaign delivered 150% ROI in the first month. The team understood our local market perfectly.",
      "rating": 5,
      "service": "Google Ads & PPC"
    },
    {
      "name": "Sarah Johnson",
      "company": "Global Imports Ltd",
      "position": "Marketing Director",
      "text": "Professional team, data-driven approach, and exceptional results. Our B2B lead generation improved dramatically.",
      "rating": 5,
      "service": "Content Marketing"
    },
    {
      "name": "Vikash Singh",
      "company": "Fitness Hub Gym",
      "position": "General Manager",
      "text": "From web design to marketing campaigns, they handled everything seamlessly. Our membership doubled in 8 months!",
      "rating": 5,
      "service": "Web Design"
    }
  ],
  "team": [
    {
      "name": "Hemant Kumar Sahu",
      "position": "Founder & CEO",
      "description": "Helping brands grow with data-driven marketing, performance ads, and scalable digital strategies.",
      "image": "images/founder.jpg"
    },
    {
      "name": "Sneha Sharma",
      "position": "Creative Director",
      "description": "Award-winning designer specializing in brand identity and social media",
      "image": "👩‍🎨"
    },
    {
      "name": "Rahul Kumar",
      "position": "Technical Lead",
      "description": "Full-stack developer with focus on performance and user experience",
      "image": "👨‍💻"
    },
    {
      "name": "Meera Singh",
      "position": "Analytics Manager",
      "description": "Data analyst with expertise in Google Analytics and marketing insights",
      "image": "👩‍💼"
    }
  ],
  "whatsappNumber": "918871225929",
  "companyInfo": {
    "name": "Swarsh Growth co.",
    "tagline": "Grow Your Business with 360° Digital Marketing",
    "description": "We are a full-service digital marketing agency specializing in SEO, social media marketing, PPC advertising, and more. Our data-driven approach helps businesses achieve measurable growth.",
    "mission": "To empower businesses of all sizes with innovative digital marketing strategies that drive real, measurable results.",
    "vision": "To be India's leading digital marketing agency, known for creativity, innovation, and exceptional client success.",
    "email": "hello@digitalgrowthagency.com",
    "phone": "+91 88712 25929",
    "address": "123 Business District, Mumbai, Maharashtra 400001",
    "founded": "2023",
    "clients": "500+",
    "projects": "1000+",
    "teamSize": "25+"
  },
  "whyChooseUs": [
    {
      "title": "Data-Driven Results",
      "description": "Every strategy is built on real analytics and measurable performance for better ROI.",
      "icon": "📈"
    },
    {
      "title": "Creative & Innovative Team",
      "description": "Our experts create fresh, result-oriented ideas that make your brand stand out.",
      "icon": "🎨"
    },
    {
      "title": "Proven Success Record",
      "description": "We’ve delivered 500+ successful campaigns that helped brands grow faster.",
      "icon": "🏆"
    },
    {
      "title": "<span class=\"gradient-text\">Free Consultation</span> & 24/7 Support",
      "description": "Get expert advice at no cost with our free consultation, plus dedicated 24/7 support anytime to move your business forward.",
      "icon": "🎧"
    }
  ],
  "timeline": [
    {
      "year": "2023",
      "title": "Founded with a Purpose",
      "description": "Launched Swarsh Growth co. with a mission to empower startups and small businesses through powerful digital marketing and growth strategies."
    },
    {
      "year": "2024",
      "title": "100+ Projects & 200+ Happy Clients",
      "description": "Scaled rapidly with a dedicated creative and performance team delivering measurable results across industries."
    },
    {
      "year": "2025",
      "title": "Expanding Horizons",
      "description": "Recognized as a fast-emerging digital agency — introducing automation tools, AI-driven campaigns, and performance analytics to maximize client ROI."
    },
    {
      "year": "2026",
      "title": "Future Growth Vision",
      "description": "Aiming to build a global footprint with partnerships across India and beyond, offering 360° digital growth solutions for every business."
    },
    {
      "year": "2027 & Beyond",
      "title": "The Innovation Era",
      "description": "Focused on continuous innovation — integrating AR, voice search marketing, and next-gen strategies to stay ahead in the evolving digital world."
    }
  ]
};

// Global variables
let selectedServices = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
  initializeApp();
});

function initializeApp() {
  console.log('Initializing app...');

  // Load saved plan from localStorage
  loadPlan();

  // Setup FAQ Accordion
  setupFAQAccordion();

  setupNavigation();
  setupMobileMenu();
  setupWhatsAppIntegration();

  // Determine current page and populate content accordingly
  const path = window.location.pathname;
  // Handle trailing slashes and default to index.html
  let page = path.split('/').pop();
  if (page === '') page = 'index.html';
  // Remove query strings if any (though pathname shouldn't have them)
  page = page.split('?')[0];

  console.log('Current path:', path);
  console.log('Detected page:', page);

  if (page === 'index.html' || page === '') {
    populateFeaturedServices();
    populateFreeConsultation();
    populateFeatures();
    populateTestimonials();
    populateTestimonials();
  } else if (page === 'about.html' || page === 'about') {
    console.log('Initializing about page components');
    populateTimeline();
    populateTeam();
    initCounters();
  } else if (page === 'services.html' || page === 'services') {
    populateDetailedServices();
    populatePackages();
    populateServiceTestimonials();
    setupModal();
  } else if (page === 'plan.html' || page === 'plan') {
    updatePlanDisplay();
  } else if (page === 'contact.html' || page === 'contact') {
    setupContactForm();
  }

  // Update plan count in header for all pages
  updatePlanCount();

  // Initialize hero animation for all pages
  initHeroAnimation();
}

// State Management (LocalStorage)
function savePlan() {
  localStorage.setItem('selectedServices', JSON.stringify(selectedServices));
  updatePlanCount();
}

function loadPlan() {
  const saved = localStorage.getItem('selectedServices');
  if (saved) {
    selectedServices = JSON.parse(saved);
  }
}

function updatePlanCount() {
  const planCount = document.getElementById('plan-count');
  if (planCount) {
    if (selectedServices.length > 0) {
      planCount.textContent = selectedServices.length;
      planCount.classList.remove('hidden');
    } else {
      planCount.classList.add('hidden');
    }
  }
}

// Navigation Setup
function setupNavigation() {
  // Highlight active link based on current URL
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Mobile Menu Setup
function setupMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
      });
    });
  }
}

// WhatsApp Integration
function setupWhatsAppIntegration() {
  const path = window.location.pathname;
  const page = path.split('/').pop() || 'index.html';
  let message = "Hi! I'm interested in your digital marketing services.";

  if (page === 'index.html' || page === '') {
    message = "Hi! I'm interested in your digital marketing services. Can we schedule a consultation?";
  } else if (page === 'about.html') {
    message = "Hi! I'd like to learn more about Swarsh Growth co. and how you can help my business grow.";
  } else if (page === 'services.html') {
    message = "Hi! I'm interested in your digital marketing services. Can you tell me more about your packages?";
  } else if (page === 'plan.html') {
    if (selectedServices.length > 0) {
      const serviceNames = selectedServices.map(service => service.name);
      message = `Hi! I'm interested in the following services: ${serviceNames.join(', ')}. Can we schedule a consultation to discuss my requirements?`;
    } else {
      message = "Hi! I'd like to create a custom marketing plan for my business. Can we discuss my requirements?";
    }
  } else if (page === 'contact.html') {
    message = "Hi! I'm ready to start my digital marketing journey. Let's discuss how you can help my business grow.";
  }

  const whatsappUrl = `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent(message)}`;

  // Update floating WhatsApp button
  const whatsappFloat = document.getElementById('whatsapp-float');
  if (whatsappFloat) {
    whatsappFloat.href = whatsappUrl;
  }

  // Update other buttons if they exist
  const whatsappHeroBtn = document.getElementById('whatsapp-hero-btn');
  if (whatsappHeroBtn) whatsappHeroBtn.href = whatsappUrl;

  const bookConsultationBtn = document.getElementById('book-consultation-btn');
  if (bookConsultationBtn) bookConsultationBtn.href = whatsappUrl;
}

// Content Population Functions
function populateFeaturedServices() {
  const grid = document.getElementById('featured-services-grid');
  if (!grid) return;

  const featuredServices = appData.services;
  grid.innerHTML = featuredServices.map(service => `
    <div class="service-card">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <ul class="service-features-list">
        ${service.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <a href="services.html" class="btn btn--primary">Learn More</a>
    </div>
  `).join('');
}

function populateFreeConsultation() {
  const container = document.getElementById('free-consultation-section');
  if (!container) return;

  container.innerHTML = `
    <div class="consultation-banner">
        <div class="consultation-badge">100% FREE</div>
        <h2>FREE Consultation Services</h2>
        <p>Get expert advice without spending a rupee. Limited time offer!</p>
        
        <div class="consultation-grid">
            ${appData.consultationServices.map(service => `
                <div class="consultation-item">
                    <span class="check-icon">✓</span>
                    <span>${service}</span>
                </div>
            `).join('')}
        </div>
        
        <a href="https://wa.me/${appData.whatsappNumber}?text=Hi!%20I'm%20interested%20in%20availing%20the%20Free%20Consultation%20Services" target="_blank" class="btn btn--accent btn--lg">
            Contact Us for Free Consultation
        </a>
    </div>
  `;
}

function populateFeatures() {
  const grid = document.getElementById('features-grid');
  if (!grid) return;

  grid.innerHTML = appData.whyChooseUs.map(feature => `
    <div class="feature-card">
      <div class="feature-icon">${feature.icon}</div>
      <h3>${feature.title}</h3>
      <p>${feature.description}</p>
    </div>
  `).join('');
}

function populateTestimonials() {
  const slider = document.getElementById('testimonials-slider');
  if (!slider) return;

  // Duplicate testimonials for seamless scrolling
  const allTestimonials = [...appData.testimonials, ...appData.testimonials];

  const cardsHtml = allTestimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-text">"${testimonial.text}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${testimonial.name.charAt(0)}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.company}</p>
        </div>
      </div>
      <div class="testimonial-rating">
        ${'★'.repeat(testimonial.rating)}
      </div>
    </div>
  `).join('');

  slider.innerHTML = `
    <div class="testimonials-track">
      ${cardsHtml}
    </div>
  `;
}

function populateDetailedServices() {
  const grid = document.getElementById('services-detailed-grid');
  if (!grid) return;

  grid.innerHTML = appData.detailedServices.map(service => `
    <div class="service-detailed-card">
      <span class="service-icon">${service.icon}</span>
      <h3>${service.name}</h3>
      <p>${service.detailedDescription || service.description}</p>
      <div class="service-price">${service.price}</div>
      <ul class="service-features">
        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <div class="service-actions">
        <button class="btn--add" onclick="addToPlan(${service.id})" id="add-btn-${service.id}">
          + Add to My Plan
        </button>
        <button class="btn btn--outline" onclick="openServiceModal(${service.id})">Details</button>
      </div>
    </div>
  `).join('');

  updateAllAddButtons();
}

function populatePackages() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;

  grid.innerHTML = appData.packages.map((pkg, index) => `
    <div class="package-card ${index === 2 ? 'popular' : ''}">
      <div class="package-price">${pkg.name}<br>${pkg.price}</div>
      <p class="package-description">${pkg.description}</p>
      <ul class="package-features">
        ${pkg.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
      <div style="margin-top: 2rem;">
        <button class="btn btn--primary" style="width: 100%;" onclick="selectPackage('${pkg.name}')">Book a Consultation</button>
      </div>
    </div>
  `).join('');
}

function populateTimeline() {
  const timeline = document.getElementById('timeline');
  if (!timeline) return;

  timeline.innerHTML = appData.timeline.map(item => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <div class="timeline-content">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}

function populateTeam() {
  const founderGrid = document.getElementById('founder-grid');
  const teamGrid = document.getElementById('team-grid');

  if (!founderGrid) return; // Founder grid is essential

  founderGrid.innerHTML = '';
  if (teamGrid) teamGrid.innerHTML = '';

  appData.team.forEach(member => {
    const isImage = /\.(jpg|jpeg|png|gif|webp)$/i.test(member.image);
    const avatar = isImage
      ? `<img src="${member.image}" alt="${member.name}" class="team-avatar-img">`
      : `<div class="team-avatar">${member.image}</div>`;

    const memberCard = `
      <div class="team-card">
        ${avatar}
        <h3>${member.name}</h3>
        <p class="team-position">${member.position}</p>
        <p class="team-description">${member.description}</p>
      </div>
    `;

    if (member.position.includes("Founder & CEO")) {
      founderGrid.innerHTML = memberCard;
    } else if (teamGrid) {
      teamGrid.innerHTML += memberCard;
    }
  });
}

function populateServiceTestimonials() {
  const slider = document.getElementById('service-testimonials-slider');
  if (!slider) return;

  // Check both service arrays for matching names
  const allServices = [...appData.services, ...appData.detailedServices];

  const serviceTestimonials = appData.testimonials.filter(t =>
    allServices.some(s => s.name.includes(t.service) || t.service.includes(s.name.split(' ')[0]))
  );

  // Duplicate for seamless scrolling
  const allServiceTestimonials = [...serviceTestimonials, ...serviceTestimonials];

  const cardsHtml = allServiceTestimonials.map(testimonial => `
    <div class="testimonial-card">
      <div class="testimonial-text">"${testimonial.text}"</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${testimonial.name.charAt(0)}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.company} • ${testimonial.position}</p>
        </div>
      </div>
      <div class="testimonial-rating">
        ${'★'.repeat(testimonial.rating)}
      </div>
    </div>
  `).join('');

  slider.innerHTML = `
    <div class="testimonials-track">
      ${cardsHtml}
    </div>
  `;
}

// Service Selection Logic
function addToPlan(serviceId) {
  // Check both arrays for the service
  let service = appData.services.find(s => s.id === serviceId);
  if (!service && appData.detailedServices) {
    service = appData.detailedServices.find(s => s.id === serviceId);
  }

  if (!service) return;

  const isAlreadySelected = selectedServices.some(s => s.id === serviceId);
  if (isAlreadySelected) return;

  selectedServices.push(service);
  savePlan(); // Save to localStorage
  updateAddButton(serviceId, true);

  alert(`${service.name} added to your plan!`);
}

function removeFromPlan(serviceId) {
  selectedServices = selectedServices.filter(s => s.id !== serviceId);
  savePlan(); // Save to localStorage
  updatePlanDisplay();

  // If we were on services page, update that button too
  updateAddButton(serviceId, false);
}

function updateAddButton(serviceId, isAdded) {
  const addBtn = document.getElementById(`add - btn - ${serviceId} `);
  if (!addBtn) return;

  if (isAdded) {
    addBtn.textContent = '✓ Added';
    addBtn.disabled = true;
    addBtn.style.background = 'rgba(16, 185, 129, 0.2)';
    addBtn.style.color = '#10b981';
  } else {
    addBtn.textContent = '+ Add to My Plan';
    addBtn.disabled = false;
    addBtn.style.background = '';
    addBtn.style.color = '';
  }
}

function updateAllAddButtons() {
  appData.services.forEach(service => {
    const isSelected = selectedServices.some(s => s.id === service.id);
    updateAddButton(service.id, isSelected);
  });
}

function updatePlanDisplay() {
  const selectedServicesContainer = document.getElementById('selected-services');
  const planActions = document.getElementById('plan-actions');

  if (!selectedServicesContainer) return;

  if (selectedServices.length === 0) {
    selectedServicesContainer.innerHTML = `
      <div class="empty-plan">
        <div class="empty-icon">📋</div>
        <h3>No services selected yet</h3>
        <p>Browse our services and add them to create your custom plan</p>
        <a href="services.html" class="btn btn--primary">Browse Services</a>
      </div>
    `;

    if (planActions) planActions.style.display = 'none';
  } else {
    selectedServicesContainer.innerHTML = `
      <div class="selected-services-list">
        ${selectedServices.map(service => `
          <div class="selected-service-item">
            <div class="selected-service-info">
              <span class="selected-service-icon">${service.icon}</span>
              <div class="selected-service-details">
                <h4>${service.name}</h4>
                <p>${service.price}</p>
              </div>
            </div>
            <button class="remove-service" onclick="removeFromPlan(${service.id})" title="Remove service">
              ×
            </button>
          </div>
        `).join('')}
      </div>
    `;

    if (planActions) planActions.style.display = 'block';
  }

  // Update WhatsApp message since content changed
  setupWhatsAppIntegration();
}

function selectPackage(packageName) {
  const pkg = appData.packages.find(p => p.name === packageName);
  if (!pkg) return;

  let message = `Hi! I'm interested in the ${pkg.name} package (${pkg.price}). `;

  if (pkg.services.includes('All Services Included')) {
    message += 'I would like to discuss all your digital marketing services.';
  } else {
    message += `The services included are: ${pkg.services.join(', ')}. `;
  }

  message += ' Can we schedule a consultation?';

  const whatsappUrl = `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
}

// Contact Form
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    let message = `Hi! I'm contacting you via the website form.\n\n`;
    message += `Name: ${data.name}\n`;
    message += `Email: ${data.email}\n`;
    if (data.phone) message += `Phone: ${data.phone}\n`;
    if (data.service) message += `Interested in: ${data.service}\n`;
    message += `Message: ${data.message}`;

    const whatsappUrl = `https://wa.me/${appData.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  });
}

// Modal
function setupModal() {
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');

  if (modalClose) modalClose.addEventListener('click', closeServiceModal);
  if (modalOverlay) modalOverlay.addEventListener('click', closeServiceModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeServiceModal();
  });
}

function openServiceModal(serviceId) {
  let service = appData.services.find(s => s.id === serviceId);
  if (!service && appData.detailedServices) {
    service = appData.detailedServices.find(s => s.id === serviceId);
  }
  const serviceModal = document.getElementById('service-modal');
  const modalBody = document.getElementById('modal-body');

  if (!service || !serviceModal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="modal-service-icon">${service.icon}</div>
    <h2 class="modal-service-title">${service.name}</h2>
    <p class="modal-service-description">${service.detailedDescription || service.description}</p>
    <div class="modal-service-price">${service.price}</div>
    <ul class="modal-service-features">
      ${service.features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    <div class="modal-cta" style="margin-top: 2rem; padding: 1.5rem; background: var(--color-gray-50); border-radius: var(--radius-md); text-align: center; border: 1px solid var(--color-gray-200);">
      <p style="margin-bottom: 1rem; color: var(--color-gray-700); font-weight: 500;">Want to know more about how this service can help your business?</p>
      <a href="https://wa.me/${appData.whatsappNumber}?text=Hi!%20I'm%20interested%20in%20knowing%20more%20about%20${encodeURIComponent(service.name)}" target="_blank" class="btn btn--primary" style="display: inline-block;">Book a Free Consultation</a>
    </div>
  `;

  serviceModal.classList.remove('hidden');
}

function closeServiceModal() {
  const serviceModal = document.getElementById('service-modal');
  if (serviceModal) {
    serviceModal.classList.add('hidden');
  }
}

// Hero Animation
function initHeroAnimation() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = canvas.parentElement.offsetWidth;
  let height = canvas.height = canvas.parentElement.offsetHeight;

  let particles = [];
  const particleCount = Math.min(Math.floor(width * height / 15000), 100); // Responsive count
  const connectionDistance = 150;
  const mouseDistance = 200;

  let mouse = {
    x: null,
    y: null
  };

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 1;
      this.vy = (Math.random() - 0.5) * 1;
      this.size = Math.random() * 2 + 1;
      this.color = '#FFB800'; // Primary color
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce off text/edges
      if (this.x < 0 || this.x > width) this.vx = -this.vx;
      if (this.y < 0 || this.y > height) this.vy = -this.vy;

      // Mouse interaction
      if (mouse.x != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const directionX = forceDirectionX * force * 2; // Repel force
          const directionY = forceDirectionY * force * 2;

          this.x -= directionX;
          this.y -= directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].x = Math.max(0, Math.min(width, particles[i].x));
      particles[i].y = Math.max(0, Math.min(height, particles[i].y));

      particles[i].update();
      particles[i].draw();

      // Connections
      for (let j = i; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 184, 0, ${1 - distance / connectionDistance})`; // Fade out
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  // Events
  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement.offsetWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
    init();
  });

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  init();
  animate();
}

// Number Counter Animation
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // The lower the slower

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');

        const updateCount = () => {
          const count = +counter.innerText;
          // Lower inc to slow and higher to slow
          const inc = target / speed;

          if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 20);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// FAQ Accordion
function setupFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAnswer) otherAnswer.style.maxHeight = null;
          if (otherIcon) otherIcon.textContent = '+';
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        icon.textContent = '+';
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = '−'; // Minus sign
      }
    });
  });
}
