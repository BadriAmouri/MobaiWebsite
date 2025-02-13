 // Toggle the mobile menu
 function toggleMenu() {
  var navMenu = document.getElementById("nav-menu");
  var hamburgerIcon = document.querySelector(".hamburger");
  navMenu.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
}



// AGENDA

  const previous=document.getElementById('previous')
  const next=document.getElementById('next')
  let dayoj=document.querySelectorAll('.day0')
  let ob=0;
  
  function updat(index){
    dayoj.forEach((dayoj,i)=>{
        if(i===index){
          dayoj.classList.add("active")
        }else{
          dayoj.classList.remove("active")
        }
    })
  }
  
  
  
  next.addEventListener("click", ()=>{
      ob=(ob+1)%dayoj.length;
      dayoj.forEach(day0=>{
          day0.style.transform = `translateX(-${ob * 100}%)`
          updat(ob)
      })
      
  
  })
  previous.addEventListener("click", () => {
      ob = (ob - 1 + dayoj.length) % dayoj.length; // دعم القيم السالبة
      dayoj.forEach((day0, index) => {
        day0.style.transform = `translateX(-${ob * 100}%)`;
      }); updat(ob)
      
    });
  
    
  
// It's Almost There 


    function updateCountdown() {
        const eventDate = new Date("2025-02-13T14:00:00")
        const elements = {
          days: document.getElementById("days"),
          hours: document.getElementById("hours"),
          minutes: document.getElementById("minutes"),
          seconds: document.getElementById("seconds"),
        }
      
        const now = new Date()
        let totalSeconds = Math.floor((eventDate - now) / 1000)
      
        function calculateTimeLeft() {
          if (totalSeconds <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 }
          }
      
          const days = Math.floor(totalSeconds / (60 * 60 * 24))
          const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
          const minutes = Math.floor((totalSeconds % (60 * 60)) / 60)
          const seconds = Math.floor(totalSeconds % 60)
      
          return { days, hours, minutes, seconds }
        }
      
        function updateDisplay(timeLeft) {
          elements.days.textContent = timeLeft.days.toString().padStart(2, "0")
          elements.hours.textContent = timeLeft.hours.toString().padStart(2, "0")
          elements.minutes.textContent = timeLeft.minutes.toString().padStart(2, "0")
          elements.seconds.textContent = timeLeft.seconds.toString().padStart(2, "0")
        }
      
        function decreaseSeconds() {
          const timeLeft = calculateTimeLeft()
          updateDisplay(timeLeft)
      
          if (totalSeconds <= 0) {
            clearInterval(timer)
          } else {
            totalSeconds--
          }
        }
      
        decreaseSeconds()
      
        const timer = setInterval(decreaseSeconds, 1000)
      }
      
      document.addEventListener("DOMContentLoaded", updateCountdown)
    




      document.addEventListener('DOMContentLoaded', () => {
        const faqContainer = document.getElementById('faq-container');
      
        const faqsData = [
          {
            question:
              ' What is MobAi Hackathon?',
            answer:
              'The MobAi Hackathon is a 72-hour coding marathon where innovators, developers, and AI enthusiasts come together to build groundbreaking AI-driven mobile applications.'
          },
          {
            question: " Why should I participate? ",
            answer:
              "You’ll gain hands-on experience, collaborate on exciting AI projects, expand your network, and compete for amazing prizes. Plus, you'll have access to mentors and free food!",
          },
          {
            question: " What should I bring? ",
            answer:
              "Your laptop, charger, enthusiasm, and a willingness to learn! A notebook for ideas and a rubber duck for debugging could also come in handy.",
          },
          {
            question: "How does team formation work? ",
            answer:
              "You must form a team before registering, as individual registrations are not accepted. Each team can have up to 6 members.",
          },
          {
            question: " What kind of projects can we build?",
            answer:
              "Any AI-powered mobile solution! You can create smart apps, integrate machine learning, or build innovative AI-based tools. Focus on creativity, impact, and technical execution.",
          },
          {
            question: "Will there be mentors? ",
            answer:
              "Yes! AI and mobile development experts will be available to guide you, help solve challenges, and provide valuable insights to enhance your project.",
          },
          {
            question: "How can I make the most of this event?",
            answer:
              "Collaborate effectively, learn from mentors, and network with other participants. Test your ideas quickly and embrace the hackathon spirit!",
          },
          {
            question: "What’s the judging criteria? ",
            answer:
              "Projects will be evaluated based on innovation, technical complexity, usability, and real-world impact. Ensure your project is functional, well-documented, and AI-driven.",
          },
        ];
      
        let openIndex = null;
      
        const toggleFAQ = (index) => {
          openIndex = openIndex === index ? null : index;
          renderFAQs();
        };
      
        const renderFAQs = () => {
          faqContainer.innerHTML = ''; // Clear existing FAQ content
      
          faqsData.forEach((faq, index) => {
            const faqElement = document.createElement('div');
            faqElement.classList.add('faq-item');
            if (openIndex === index) {
              faqElement.classList.add('open');
            }
            faqElement.addEventListener('click', () => toggleFAQ(index));
      
            const faqContent = `
              <div class="faq-item-header">
                <div class="flex items-center gap-4">
                  <img src="/images/Mobai.svg" alt="Club Logo" class="mt-2 w-10 h-10 object-contain" />
                  <h4 class="text-lg lg:text-xl font-semibold">${faq.question}</h4>
                </div>
                <span class="toggle-icon">${openIndex === index ? '-' : '+'}</span>
              </div>
              <div class="faq-answer">
                <p>${faq.answer}</p>
              </div>
            
            `;
      
            faqElement.innerHTML = faqContent;
            faqContainer.appendChild(faqElement);
          });
        };
      
        renderFAQs(); // Initial render
      });
      


// Mentors 
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const mentorData = [
  {
    name: "OUDDANE Youcef fahed",
    title: " Ai & data sciece student student at Esi Sba",
    description: "Flutter developer | Software enginner | Ai & data scientist ",
    media: [
      { link: "https://instagram.com/johndoe", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/johndoe", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Nizar Guessom",
    title: "student at Esi Sba",
    description: "UI/UX designer |Flutter Developer ",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Larbi Achref",
    title: "student at Esi Sba",
    description: "Full stack web developer | problem solver | computer enginner",
    media: [
      { link: "https://instagram.com/janesmith", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/janesmith", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Fadi Benzaima",
    title: "student at Esi Sba",
    description: "ML enthusiast | Co-Host and Manager of the BitWise Podcast | Susi 2023 Alumnus",
    media: [
      { link: "https://instagram.com/janesmith", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/janesmith", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Omar Farouk Zouak",
    title: "AI Student at ENSIA",
    description: "Junior Data Scientist | QML Intern at CQTech ",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Raid Abderrezak Ouahioune",
    title: "AI Student at ENSIA",
    description: "Junior machine learning & Software Engineer ",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Abdenour BOUZIANE",
    title: "AI Student at ENSIA",
    description: "Software  and Mobile Developer",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Moulay Mohamed Bouabdelli",
    title: "AI Student at ENSIA",
    description: " machine learning Engineer | Design Manager  ",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Mohamed Frihaoui",
    title: "AI Student at ENSIA",
    description: " machine learning Engineer | Web Developer  ",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Douaa Djaid",
    title: "AI Student at ENSIA",
    description: " machine learning & Software Engineer ",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },
  {
    name: "Said Senhadji",
    title: "AI and Data science student in ESI sba ",
    description: " ML enthusiast  & Software Engineer ",
    media: [
      { link: "https://instagram.com/markwilson", icon: "./assests/instagram.png" },
      { link: "https://linkedin.com/in/markwilson", icon: "./assests/linkedin.png" },
    ],
  },

  
  // Add more mentor objects as needed
];

document.addEventListener("DOMContentLoaded", function () {
  const mentorNameEl = document.querySelector(".mentor_info h2");
  const mentorTitleEl = document.querySelector(".mentor_info p:nth-of-type(1)");
  const mentorDescriptionEl = document.querySelector(".mentor_info p:nth-of-type(2)");
  const mentorMediaEl = document.querySelector(".mentor_media");

  // Helper function to update mentor information
  function updateMentorInfo(index) {
    const mentor = mentorData[index % mentorData.length]; // Prevent index overflow
    mentorNameEl.textContent = mentor.name;
    mentorTitleEl.textContent = mentor.title;
    mentorDescriptionEl.textContent = mentor.description;

    // Update media links
    mentorMediaEl.innerHTML = mentor.media
      .map(
        (item) =>
          `<a href="${item.link}" target="_blank"><img src="${item.icon}"  alt="Mentor Social Media" style="width: 40px;  margin-left: 20px;"  /></a>`
      )
      .join("");
  }

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    initialSlide: 1, // Set this to the index of the middle slide
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      968: { slidesPerView: 4 },
      768: { slidesPerView: 4 },
      350: { slidesPerView: 1 },
    },
    on: {
      slideChange: function () {
        updateMentorInfo(this.activeIndex);
      },
    },
  });

  // Set initial mentor info
  updateMentorInfo(0);
});



// for buttons to scroll to other sections 

document.querySelector(".button2").addEventListener("click", function () {
  document.getElementById("SecondSection").scrollIntoView({
    behavior: "smooth",
  });
});


document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

