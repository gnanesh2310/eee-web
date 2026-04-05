// News data
const newsData = {
    'events-notification': [
        { img: 'pics/e1.jpg', title: "'ONAM AAVESHAM 24 !!!  ", text: "Hurry up and register yourselves in for Onam Sadya and avail the following vouchers : 1. 10% off on single order at Anna Idli Restaurant.2. 10% off on total bill at Giani Ice cream shop. 3. 10% off  or Buy 2 Get 1 free offer at Cluckers Restaurant.4. 30% off on giving 5kg or above at Tumbledry Laundry Hingna T point (Only for first 300 registrations). 5. 20% off on Aarohi Concert and EDM passes for first 200 registrations. And 10% off for next 200 registrations." },
        { img: 'pics/e2.jpg', title: "ROBO EDGE", text: " 🌟 Exciting Opportunity for All Tech Enthusiasts! 🌟Are you passionate about Robotics & AI? Looking to learn from industry experts and work on cutting-edge projects? Then this is the perfect workshop for you! WHAT YOU’LL GET:- Learn from Experts- Expert Mentorship- Industry-Approved Projects- Career Guidance- Ratified Certification📅 Dates: 31st August - 2nd Sept🚀Don’t Miss Out! This is your chance to elevate your skills and connect with experts.  Register Now: bit.ly/ROBOEDGE-VNITLet’s dive into the future with Robotics & AI! 🤖" },
        { img: 'pics/e3.jpg', title: ' “Dusting Green trails…”', text: "cutting-edge solar powered vehicle prototype, developed by 5 qualified participating teams (Team Solarium, Team Tesla, Team Raptors, Team Steadfaster, and Team Hindustani Lahurians)                                          with 127 students and faculties of respective teams from different regions of the India. The vehicles showcased the latest advancements in solar technology and clean energy integration. The participants and attendees had the chance to interact, share ideas, and network, promoting collaboration and future innovations in the field of solar" },
        {img:'pics/e4.jpg',title:'',text:'Dear Nation Builders🌐,In this transient world, grieve nothing and take everything. Grasp this opportunity to be a ray of hope emanating from the cloudy skies🌤 of people unable to make their ends meet. Lets extend our contribution to those tiny, sturdy or the wrinkled hands that are grappling with need, yet hankering for their lives. A drop of blood 🩸 could fill the voids of desires for an equanimous life.🧬 To renew the blood drive, join hands with the team of PRAYAAS on 15th August. A drive to emancipate the deprived on Independence Day🇮🇳.🗓 Date:15th August, 2024⏰ Time: 9 AM to 1 PM📍 Venue: Classroom Complex, VNIT Nagpur'}
      ],
    'latest-updates': [
      { img: 'pics/img1.png', title: "Workshop on “Load Dispatch and Electricity Markets” - March 2, 2024", text: "Electrical Engineering Department of VNIT, Nagpur organized a workshop on Load Dispatch Centre - Functioning and Electricity Market Operation. The event featured distinguished Guest Speakers, Er. Niranjan Dalal, Executive Engineer, ALDC, MSETCL, Nagpur and Er. Pankaj Shinde,Add. Executive Engineer, ALDC, MSETCL, Nagpur. This workshop was coordinated by Prof. P.S. Kulkarni." },
      { img: 'pics/img2.png', title: " National Solar Vehicle Challenge – October 6 to October 10, 2023", text: " National Solar Vehicle Challenge was held at VNIT Nagpur on 10th October, 2023 by Electrical Engineering Department, VNIT Nagpur in association with Dynamist Motorsports, New Delhi and Institute’s Technical Clubs “Tesla Club of innovation”, “Team Velocity”. The highlight of the event was the unveiling of a cutting-edge solar powered vehicle prototype, developed by 5 qualified participating teams (Team Solarium, Team Tesla, Team Raptors, Team Steadfaster, and Team Hindustani Lahurians)                                          with 127 students and faculties of respective teams" },
      { img: 'pics/img3.png', title: ' “Dusting Green trails…”', text: "cutting-edge solar powered vehicle prototype, developed by 5 qualified participating teams (Team Solarium, Team Tesla, Team Raptors, Team Steadfaster, and Team Hindustani Lahurians)                                          with 127 students and faculties of respective teams from different regions of the India. The vehicles showcased the latest advancements in solar technology and clean energy integration. The participants and attendees had the chance to interact, share ideas, and network, promoting collaboration and future innovations in the field of solar" },      { img: 'pics/img4.png', title: ' Skill Development Training Program ', text: "Dr Arghya Mitra and Dr Ritesh Keshri coordinated a 45 days Training Program for the skill development of unemployed youth in Maharashtra on Artificial Intelligence and Robotics jointly organised by VNIT Nagpur and MITCON, Maharashtra " },
      { img: 'pics/img5.png', title: 'SPARC project lecture series - 24th and 29th May, 2024 ', text: ' Lecture Series on "Power Electronics Converter Control in HVDC transmission for Global Grid" by Dr. Jing Dai, Prof. Centrale Supélec, France was held in Department of Electrical Engineering, VNIT Nagpur under the MoE sponsored SPARC project titled "Global Grid: The Future of Earth". (Indian PI: Dr. Arghya Mitra, Indian Co-PI: Dr. Sunil Bhat, Foreign PI: Prof. Damien Ernst, Belgium, Foreign Co-PIs: Dr. Spyros Chatzivasileiadis, Denmark, Dr. Jing Dai, France' },
      { img: 'pics/img6.png', title: 'Training program: “Surya Pākavidyā” - 27th May to 31st May, 2024', text: ' The Department of Electrical Engineering, VNIT Nagpur, organised  a 5-day self-financed short term training program “Surya Pākavidyā: Hands-On Solar Cooker Design, Development and Operation Training” Dr. M.M. Lokhande and Dr. P.S. Kulkarni from Electrical Engineering Department and Dr. P.D. Sawarkar from Mechanical Engineering Department coordinated the event along with the vigorous involvement of Ph.D. Scholars and M.Tech. Students.' },
      { img: 'pics/img7.png', title: 'Expert Talk, IEEE PELS Day - 20th June 2024.', text: 'IEEE PELS Day 2024 was celebrated at the department with the deliverance of an Expert lecture on "Power Electronics and its Application for Greener Transportation" by Dr. Shashidhar Mathapati, R&D Manager, Delta Electronics India Pvt. Ltd. Bengaluru. Dr. P.L. Patel, Director, VNIT Nagpur graced the function as the Chief Guest. The event was organized by Dr. Pradyumn Chaturvedi.' },
      { img: 'pics/img8.png', title: 'Industrial Visit to “Gosikhurd Dam”, Nagpur, Maharashtra April 13, 2024', text: 'Knowledge is paramount to excel in studies but understanding it’s applications in real world scenarios is crucial in developing the engineering mindset. In order to fulfill this vision, 99 ignited minds from the 4th semester of Electrical Engineering at VNIT embarked on an educational visit to  Gosikhurd   Dam.' },
      { img: 'pics/img9.png', title: ' “Engineering Students marvel at the sustainable power of water…” ', text: 'The personnel in charge for the briefing and supervision at  the   site   Executive  engineer   Rajesh Dhumane and ER D. R. Patil, Assistant engineer Gosikhurd Dam guided the students into the intricacies of hydroelectric power generation process amidst the serene backdrop of Pauni, Bhandara. The significance of the concrete gravity dams, operations planning and execution, complexities of resettlement and rehabilitation and the sustainability of the Gosikhurd Dam project served as a rich tapestry of learning opportunities for the students. This visit will encourage them to emerge as the architects of a brighter,  more sustainable future. ' },
      { img: 'pics/img10.png', title: 'IG’24 , “ADVAITAM” : 1st -10th March, 2024', text: 'The Institute Gathering, 2024 of VNIT witnessed the surging dominance of the students of Electrical department in competitions spanning various fields of sports, literature, music, dance, Art, rallies and many more  bagging the first position for our department amongst 7 other competing departments. From thrilling victories to tough fights, carving creativity to marching in unison and unleashing their literary minds to the beats of groove and melody, the young sparks shone in all while earning them points to top the charts by a huge marg' }
    ],
    'department-news': [
      { img: 'pics/img1.png', title: "Workshop on “Load Dispatch and Electricity Markets” - March 2, 2024", text: "Electrical Engineering Department of VNIT, Nagpur organized a workshop on Load Dispatch Centre - Functioning and Electricity Market Operation. The event featured distinguished Guest Speakers, Er. Niranjan Dalal, Executive Engineer, ALDC, MSETCL, Nagpur and Er. Pankaj Shinde,Add. Executive Engineer, ALDC, MSETCL, Nagpur. This workshop was coordinated by Prof. P.S. Kulkarni." },
      { img: 'pics/img2.png', title: " National Solar Vehicle Challenge – October 6 to October 10, 2023", text: " National Solar Vehicle Challenge was held at VNIT Nagpur on 10th October, 2023 by Electrical Engineering Department, VNIT Nagpur in association with Dynamist Motorsports, New Delhi and Institute’s Technical Clubs “Tesla Club of innovation”, “Team Velocity”. The highlight of the event was the unveiling of a cutting-edge solar powered vehicle prototype, developed by 5 qualified participating teams (Team Solarium, Team Tesla, Team Raptors, Team Steadfaster, and Team Hindustani Lahurians)                                          with 127 students and faculties of respective teams" },
      { img: 'pics/img3.png', title: ' “Dusting Green trails…”', text: "cutting-edge solar powered vehicle prototype, developed by 5 qualified participating teams (Team Solarium, Team Tesla, Team Raptors, Team Steadfaster, and Team Hindustani Lahurians)                                          with 127 students and faculties of respective teams from different regions of the India. The vehicles showcased the latest advancements in solar technology and clean energy integration. The participants and attendees had the chance to interact, share ideas, and network, promoting collaboration and future innovations in the field of solar" },
      { img: 'pics/img4.png', title: ' Skill Development Training Program ', text: "Dr Arghya Mitra and Dr Ritesh Keshri coordinated a 45 days Training Program for the skill development of unemployed youth in Maharashtra on Artificial Intelligence and Robotics jointly organised by VNIT Nagpur and MITCON, Maharashtra " },
      { img: 'pics/img5.png', title: 'SPARC project lecture series - 24th and 29th May, 2024 ', text: ' Lecture Series on "Power Electronics Converter Control in HVDC transmission for Global Grid" by Dr. Jing Dai, Prof. Centrale Supélec, France was held in Department of Electrical Engineering, VNIT Nagpur under the MoE sponsored SPARC project titled "Global Grid: The Future of Earth". (Indian PI: Dr. Arghya Mitra, Indian Co-PI: Dr. Sunil Bhat, Foreign PI: Prof. Damien Ernst, Belgium, Foreign Co-PIs: Dr. Spyros Chatzivasileiadis, Denmark, Dr. Jing Dai, France' },
      { img: 'pics/img6.png', title: 'Training program: “Surya Pākavidyā” - 27th May to 31st May, 2024', text: ' The Department of Electrical Engineering, VNIT Nagpur, organised  a 5-day self-financed short term training program “Surya Pākavidyā: Hands-On Solar Cooker Design, Development and Operation Training” Dr. M.M. Lokhande and Dr. P.S. Kulkarni from Electrical Engineering Department and Dr. P.D. Sawarkar from Mechanical Engineering Department coordinated the event along with the vigorous involvement of Ph.D. Scholars and M.Tech. Students.' },
      { img: 'pics/img7.png', title: 'Expert Talk, IEEE PELS Day - 20th June 2024.', text: 'IEEE PELS Day 2024 was celebrated at the department with the deliverance of an Expert lecture on "Power Electronics and its Application for Greener Transportation" by Dr. Shashidhar Mathapati, R&D Manager, Delta Electronics India Pvt. Ltd. Bengaluru. Dr. P.L. Patel, Director, VNIT Nagpur graced the function as the Chief Guest. The event was organized by Dr. Pradyumn Chaturvedi.' },
      { img: 'pics/img8.png', title: 'Industrial Visit to “Gosikhurd Dam”, Nagpur, Maharashtra April 13, 2024', text: 'Knowledge is paramount to excel in studies but understanding it’s applications in real world scenarios is crucial in developing the engineering mindset. In order to fulfill this vision, 99 ignited minds from the 4th semester of Electrical Engineering at VNIT embarked on an educational visit to  Gosikhurd   Dam.' },
      { img: 'pics/img9.png', title: ' “Engineering Students marvel at the sustainable power of water…” ', text: 'The personnel in charge for the briefing and supervision at  the   site   Executive  engineer   Rajesh Dhumane and ER D. R. Patil, Assistant engineer Gosikhurd Dam guided the students into the intricacies of hydroelectric power generation process amidst the serene backdrop of Pauni, Bhandara. The significance of the concrete gravity dams, operations planning and execution, complexities of resettlement and rehabilitation and the sustainability of the Gosikhurd Dam project served as a rich tapestry of learning opportunities for the students. This visit will encourage them to emerge as the architects of a brighter,  more sustainable future. ' },
      { img: 'pics/img10.png', title: 'IG’24 , “ADVAITAM” : 1st -10th March, 2024', text: 'The Institute Gathering, 2024 of VNIT witnessed the surging dominance of the students of Electrical department in competitions spanning various fields of sports, literature, music, dance, Art, rallies and many more  bagging the first position for our department amongst 7 other competing departments. From thrilling victories to tough fights, carving creativity to marching in unison and unleashing their literary minds to the beats of groove and melody, the young sparks shone in all while earning them points to top the charts by a huge marg' }
    ],
    //format:- {img:'pics/',title:'',text:''},
    'student-notification': [
      { img: 'pics/img8.png', title: 'Industrial Visit to “Gosikhurd Dam”, Nagpur, Maharashtra April 13, 2024', text: 'Knowledge is paramount to excel in studies but understanding it’s applications in real world scenarios is crucial in developing the engineering mindset. In order to fulfill this vision, 99 ignited minds from the 4th semester of Electrical Engineering at VNIT embarked on an educational visit to  Gosikhurd   Dam.' },
      { img: 'pics/img9.png', title: ' “Engineering Students marvel at the sustainable power of water…” ', text: 'The personnel in charge for the briefing and supervision at  the   site   Executive  engineer   Rajesh Dhumane and ER D. R. Patil, Assistant engineer Gosikhurd Dam guided the students into the intricacies of hydroelectric power generation process amidst the serene backdrop of Pauni, Bhandara. The significance of the concrete gravity dams, operations planning and execution, complexities of resettlement and rehabilitation and the sustainability of the Gosikhurd Dam project served as a rich tapestry of learning opportunities for the students. This visit will encourage them to emerge as the architects of a brighter,  more sustainable future. ' },
      { img: 'pics/img10.png', title: 'IG’24 , “ADVAITAM” : 1st -10th March, 2024', text: 'The Institute Gathering, 2024 of VNIT witnessed the surging dominance of the students of Electrical department in competitions spanning various fields of sports, literature, music, dance, Art, rallies and many more  bagging the first position for our department amongst 7 other competing departments. From thrilling victories to tough fights, carving creativity to marching in unison and unleashing their literary minds to the beats of groove and melody, the young sparks shone in all while earning them points to top the charts by a huge marg' }
    ]
};

// Function to generate news HTML
function generateNewsHTML(sectionId) {
    const newsSection = document.querySelector(`#${sectionId} .news-items`);
    const newsItems = newsData[sectionId];

    newsItems.forEach((item, index) => {
        const newsBox = document.createElement('div');
        newsBox.classList.add('news-box');
        newsBox.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="news-img">
            <h3 class="news-title">${item.title}</h3>
            <p class="news-text">${item.text}</p>
        `;
        newsSection.appendChild(newsBox);
    });
}

// Function to toggle expand/collapse
function toggleExpand(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle('expanded');

  const expandButton = section.querySelector('.expand-button');
  if (section.classList.contains('expanded')) {
      expandButton.textContent = "Show Less";
  } else {
      expandButton.textContent = "Show More";
  }
}

// Generate news for each section
['events-notification', 'latest-updates', 'department-news', 'student-notification'].forEach(sectionId => {
    generateNewsHTML(sectionId);
});
document.querySelectorAll('.expand-button').forEach(button => {
  button.addEventListener('click', () => {
      const section = button.closest('.news-sections');
      section.classList.toggle('expanded');

      if (section.classList.contains('expanded')) {
          button.textContent = 'Collapse';
      } else {
          button.textContent = 'Expand';
      }
  });
});
const newsSections = document.querySelectorAll('.news-sections');
newsSections.forEach(section => {
    const newsItems = section.querySelector('.news-items');
    let scrollAmount = 0;
    const scrollStep = 2; // Adjust the scroll speed
    const scrollInterval = setInterval(() => {
        scrollAmount += scrollStep;
        if (scrollAmount >= newsItems.scrollWidth - newsItems.clientWidth) {
            scrollAmount = 0;
        }
        newsItems.scrollLeft = scrollAmount;
    }, 30); // Adjust the scroll interval
});
// JavaScript to handle the expand/collapse functionality
document.querySelectorAll('.expand-button').forEach(button => {
  button.addEventListener('click', () => {
      const section = button.closest('.news-sections');
      section.classList.toggle('expanded');

      if (section.classList.contains('expanded')) {
          button.textContent = 'Collapse';
      } else {
          button.textContent = 'Expand';
      }
  });
});

// JavaScript to handle infinite scrolling for news boxes
document.querySelectorAll('.news-items').forEach((newsItems) => {
  const items = newsItems.querySelectorAll('.news-box');
  
  // Clone the news boxes to create an infinite loop
  items.forEach(item => {
      let clone = item.cloneNode(true);
      newsItems.appendChild(clone);
  });

  let scrollAmount = 0;
  const scrollStep = 1; // Adjust the scroll speed
  const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep;
      newsItems.scrollLeft = scrollAmount;

      if (scrollAmount >= newsItems.scrollWidth / 2) {
          scrollAmount = 0;
      }
  }, 600); // Adjust the scroll interval
});
