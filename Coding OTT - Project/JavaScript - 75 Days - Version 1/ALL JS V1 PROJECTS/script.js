// ==============================
// PROJECTS DATA
// ==============================
const projects = [
  {
    title: "DAY: 7 - 8",
    date: "07-05-2026",
    description: `
      Maine ek Color Changer Project banaya hai jisme card ke andar input aur button hai.
      User color name ya hex code enter karta hai aur button click karte hi body ka background
      color change ho jata hai (event ko function me pass karke).
      <br><br>
      Maine dusra project banaya hai jisme user color select karta hai aur select karte hi card ka
      color change hota hai aur uska hex code bhi show hota hai.
    `,
    link: "https://75day-js-day-7-8.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 9",
    date: "07-05-2026",
    description: `
      Maine ek project banaya hai jisme card ke andar title aur description hai aur ek color picker input hai.
      User jis element (title/description) par click karega, color select karte hi sirf ussi element ka text color change hoga.
      By default title selected rahega. Color change ke sath hex code bhi show hota hai.
      <br><br>
      Maine ek Login Form Project banaya hai jisme email aur password input aur login button hai.
      User login par click kare toh form reload/refresh nahi hota, JavaScript se default form submit behavior prevent kiya gaya hai.
    `,
    link: "https://75day-js-day-9.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 10 - 14",
    date: "07-05-2026",
    description: `
      Maine ek Registration + Login System Project banaya hai jisme user apni details register kar sakta hai
      aur data array aur object me store hota hai. Agar user dobara same data fill kare toh existing object update ho jata hai.
      <br><br>
      Iske sath ek login form bhi hai jisme user ka data stored object se match karke login verify hota hai.
      <br><br>
      Saath hi maine Animate.css CDN use karke custom popup dialog messages banaye hain jo registration success,
      login successful, aur login failed messages animated popup me show karte hain.
    `,
    link: "https://75day-js-day-10-14.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 15 - 18",
    date: "07-05-2026",
    description: `
      Maine ek Calculator Project banaya hai jisme saari calculations JavaScript se perform hoti hain aur result screen par show hota hai.
      Result show karte time program yeh bhi check karta hai ki output even hai ya odd, aur uske according ek text message bhi display hota hai.
    `,
    link: "https://75day-js-day-15-18.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 19 - 23",
    date: "07-05-2026",
    description: `
      Maine ek Admin Panel Project banaya hai jisme navbar, sidebar aur menu button hai.
      Menu par click karte hi sidebar open/close toggle hota hai.
      Sidebar me Signup aur Login options diye gaye hain, un par click karne se corresponding form show hota hai.
      <br><br>
      Dono forms me proper validation lagayi gayi hai aur invalid input par error messages display hote hain.
      Pure project ka design aur functionality A to Z JavaScript ki help se implement kiya gaya hai.
    `,
    link: "https://75day-js-day-19-23.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 24",
    date: "09-05-2026",
    description: `
      Maine ek Kids Alphabet Learning Project banaya hai jisme A to Z alphabets diye gaye hain.
      User kisi bhi alphabet par click karta hai toh uska full form show hota hai (jaise A for Apple) aur saath hi audio bhi play hota hai.
      Kuch seconds baad full form automatically hide ho jata hai.
      <br><br>
      Jab audio play hota hai tab mic icon enable ho jata hai aur jaise hi audio finish hota hai mic icon automatically disabled ho jata hai.
    `,
    link: "https://75day-js-day-24.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 25 - 27",
    date: "09-05-2026",
    description: `
      Maine ek Text Repeater Project banaya hai jisme user apna text message aur repeat count enter karta hai.
      JavaScript loop ki help se text utni baar repeat hoke output me show hota hai.
      <br><br>
      Repeat count me minimum aur maximum limit set hai, agar user invalid value dale toh error message show hota hai,
      aur valid input par repeated output message display hota hai.
    `,
    link: "https://75day-js-day-25-27.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 28 - 29",
    date: "09-05-2026",
    description: `
      Maine ek project banaya hai jisme buttons diye gaye hain.
      User button par click karta hai toh JavaScript ki help se heading, paragraph, ol, ul, li jaise elements dynamically create hote hain aur page par add ho jate hain.
    `,
    link: "https://75day-js-day-28-29.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 30",
    date: "09-05-2026",
    description: `
      Maine Animate.css jaisi ek modern website clone banayi hai jisme clean UI aur modern design hai.
      Website me different animations ki list hai aur user jab kisi animation par click karta hai toh selected animation live preview box me apply hokar show hoti hai.
    `,
    link: "https://75day-js-day-30.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 31 - 41",
    date: "10-05-2026",
    description: `
      Maine ek Professional Marksheet Generator Tool banaya hai jo complete LocalStorage based system hai.
      Isme sabse pehle School Registration + Login system hai aur ek proper Landing Page bhi available hai.
      <br><br>
      Login ke baad school ko ek Dashboard milta hai jisme:
      <br><br>
      Add New Student <br>
      Manage Students (Edit/Delete) <br>
      Add Marksheet <br>
      Manage Marksheet (Edit/Delete)
      <br><br>
      School registration me school ki complete details store hoti hain (name, email, address, number, password, logo, tagline, description, registration no/date, medium, created/updated date).
      <br><br>
      Student section me full student profile save hoti hai (name, photo, contact details, parents details, DOB, address, class, admission date, roll no, stream).
      <br><br>
      Marksheet module me top par school logo + school info show hota hai.
      Student select karte hi student ka photo, name, roll no, class, father/mother name, email auto display hota hai.
      <br><br>
      Uske niche subjects add karne ka system hai jisme subject name, total marks, obtained marks add hote hain aur delete option bhi available hai.
      <br><br>
      Bottom me creator name + social media icons, printed date, created/updated date, created by, school name show hota hai.
      <br><br>
      Saath hi marksheet ko Save as PDF button se PDF me export karne ka option bhi diya gaya hai.
    `,
    link: "https://75day-js-day-31-41.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 42 - 43",
    date: "10-05-2026",
    description: `
      Maine JS V1 (Day 42-43) me ek Image Upload & Preview Project banaya hai jisme user images upload karke preview dekh sakta hai.
      Agar image upload na ho toh 'No Images Found' message show hota hai.
      Har image ke saath View/Delete options, image name & size display hota hai.
      Delete par confirmation popup aur View par full screen modal open hota hai.
    `,
    link: "https://75day-js-day-42-43.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 44",
    date: "00-00-2026",
    description: `
      Maine JS V1 (Day 44) me Multiple Image/File Upload & Preview Project banaya hai jisme user ek saath multiple files select karke upload kar sakta hai.
      Agar koi file upload nahi hoti toh 'No Images Found' message icon ke saath show hota hai.
      Har file ke saath View/Delete option, file name & size display hota hai, aur overflow properly handle kiya gaya hai.
      Delete par confirmation popup aur View par full screen modal open hota hai.
    `,
    link: "https://75day-js-day-44.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 45",
    date: "00-00-2026",
    description: `
      Maine JS V1 (Day 45) me ek Professional Responsive Navbar Project banaya hai jisme left side par logo/icon,
      website name aur tagline hai aur right side par menu links diye gaye hain.
      Mobile view me hamburger menu properly open/close hota hai.
      <br><br>
      Navbar ke niche maine ek Courses Section banaya hai jisme multiple responsive course cards hain.
      Har card me course name, price aur purchase button available hai.
      Pure project me Tailwind CSS use kiya gaya hai aur cards ko mobile, tablet aur desktop ke hisaab se responsive grid layout me design kiya gaya hai.
    `,
    link: "https://75day-js-day-45.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 46",
    date: "00-00-2026",
    description: `
      Maine JS V1 (Day 46) me ek PDF Viewer Project banaya hai jisme user PDF file upload/select karke usko iframe ke through preview kar sakta hai.
      Agar koi PDF select nahi hoti toh No PDF Found message icon ke saath show hota hai.
      PDF upload hone ke baad PDF name, size aur last modified date display hoti hai,
      aur button text Select File se change hokar Change File ho jaata hai.
    `,
    link: "https://75day-js-day-46.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 47 - 50",
    date: "00-00-2026",
    description: `
      Maine JS V1 (Day 47-50) me ek Audio/Music Player Project banaya hai jisme user apne device se music upload karke play kar sakta hai.
      Agar koi music select na ho toh No Music Found message icon ke saath show hota hai aur Select Music button aata hai.
      Music upload hone ke baad audio player open ho jaata hai aur button text Choose Another Music ho jaata hai.
      <br><br>
      Is player me Play/Pause, Forward, Backward, Mute/Unmute, Loop, aur seekable progress bar features hain.
      Saath hi current time, total duration, aur uploaded file ka music name & size bhi display hota hai.
      Player icons user actions ke according dynamically change hote hain.
    `,
    link: "https://75day-js-day-47-50.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 51",
    date: "00-00-2026",
    description: `
      Maine JS V1 (Day 51) me ek Login Form Project banaya hai jisme Email aur Password fields hain,
      aur password ke liye show/hide icon properly work karta hai.
      Isme Remember Me checkbox ka feature bhi add kiya gaya hai jisse email aur password Local Storage me save ho jaate hain
      aur page refresh/open hone par automatically auto-fill ho jaate hain.
      Login button click karne par ek professional custom success popup bhi show hota hai.
    `,
    link: "https://75day-js-day-51.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 59",
    date: "00-00-2026",
    description: `
      Maine JS V1 (Day 59) me ek project banaya hai jisme Synchronous aur Asynchronous JavaScript ka concept clearly demonstrate kiya gaya hai.
      Isme ek button click karne par <p> tags one by one dynamically create hote hain. <br><br>
      Second 'p' create hone ke baad ek Promise-based function call hota hai jisme setTimeout() use kiya gaya hai aur condition ke according resolve/reject hota hai.
      Result ko UI par show karne ke liye .then() aur .catch() ka use kiya gaya hai.
    `,
    link: "https://75day-js-day-59.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  },

  {
    title: "DAY: 60",
    date: "00-00-2026",
    description: `
      Maine JS V1 (Day 60) me ek project banaya hai jisme Promise ke through data fetch kiya gaya hai
      aur async/await ke saath try-catch use karke proper error handling implement ki gayi hai.
      Promise ke andar setTimeout() se delay create kiya gaya hai aur condition ke basis par resolve ya reject hota hai.
      Result ko console aur UI dono par success/error message ke form me display kiya gaya hai.
    `,
    link: "https://75day-js-day-60.netlify.app",
    tech: [
      { name: "HTML", icon: "ri-html5-line" },
      { name: "CSS", icon: "ri-css3-line" },
      { name: "JavaScript", icon: "ri-javascript-line" }
    ]
  }
];

// ==============================
// CREATE PROJECT CARD
// ==============================
function createCard(project) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <div class="card-body">
      <div class="card-head">
        <h3>${project.title}</h3>
        <div class="date">
          <i class="ri-calendar-line"></i>
          ${project.date}
        </div>
      </div>

      <div class="desc">${project.description}</div>

      <div class="chips">
        ${project.tech
          .map(
            (t) => `
              <div class="chip">
                <i class="${t.icon}"></i>
                <span>${t.name}</span>
              </div>
            `
          )
          .join("")}
      </div>

      <button class="cta-btn">
        <i class="ri-external-link-line"></i>
        View Project
      </button>
    </div>
  `;

  // View Project Button
  card.querySelector(".cta-btn").addEventListener("click", () => {
    window.open(project.link, "_blank");
  });

  return card;
}

// ==============================
// RENDER PROJECTS
// ==============================
function renderProjects(list) {
  const container = document.getElementById("projectsSection");
  const empty = document.getElementById("emptyState");

  container.innerHTML = "";

  if (!list.length) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  list.forEach((p) => container.appendChild(createCard(p)));
}

// ==============================
// SEARCH FILTER
// ==============================
document.getElementById("searchInput").addEventListener("input", (e) => {
  const query = e.target.value.trim().toLowerCase();

  const filtered = projects.filter((p) => {
    const techText = p.tech.map((t) => t.name.toLowerCase()).join(" ");

    return (
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      techText.includes(query)
    );
  });

  renderProjects(filtered);
});

// ==============================
// SCROLL FUNCTIONS
// ==============================
function scrollToProjects() {
  document.getElementById("projectsSection").scrollIntoView({ behavior: "smooth" });
}

function scrollToFooter() {
  document.getElementById("footerSection").scrollIntoView({ behavior: "smooth" });
}

// ==============================
// SET CURRENT YEAR
// ==============================
document.getElementById("year").textContent = new Date().getFullYear();

// ==============================
// INITIAL LOAD
// ==============================
renderProjects(projects);