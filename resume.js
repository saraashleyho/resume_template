const data = {
  name: 'Sara Ho',
  mainEmoji: {
    character: '🍦',
    ariaLabel: 'icecream',
  },
  phoneNumber: '978',
  email: 'sho@rbi.com',
  githubHandle: 'saraashleyho',
  linkedInHandle: 'sara-ho-a9a681a4/',
  // Add header emojis
  workExperiences: [
    {
      emoji: "🍔",
      ariaLabel: "burger",
      jobTitle: "MBA Summer Intern",
      institution: "Restaurant Brands International",
      dates: "summer 2019", // end with "present" for your current job
      details: [
        "Developed optimized digital media strategy, process and performance monitoring scorecard for the BK Marketing team in conjunction with the national launch of the Impossible Whopper.",
        "Executed internal consulting project to improve millennial media reach and drive new guests to store, mobile app and delivery through both organic and paid digital media",
        "Presented findings to RBI CEO and executive team."
      ]
    },
     {
      emoji: "💰",
      ariaLabel: "moneybag",
      jobTitle: "Private Equity Associate - Investor Relations & Fundraising",
      institution: "Hellman & Friedman",
      dates: "2016 - 2018", // end with "present" for your current job
      details: [
        "Co-led large-scale capital raise accessing global investor pool for a commingled megafund targeting over $15bn.",
        "Collaborated with CEO and Investment Committee on strategic business development initiatives, including fund size considerations, market timing determination, target investor pool, geographies and portfolio companies.",
        "Conducted quantitative financial analyses to project and assess fund portfolios, performance and fee structures."
      ]
    },
     {
      emoji: "🏗",
      ariaLabel: "crane",
      jobTitle: "Associate - Opportunity Funds Group",
      institution: "Stockbridge Real Estate",
      dates: "2014 - 2016", // end with "present" for your current job
      details: [
        "Managed and owned strategic business development and fundraising initiatives, including project management, due diligence, underwriting and ownership of client relationships.",
        "Led fundraising effort for $6bn, 8,000-unit, ground-up master-planned development located in the San Francisco Bay, resulting in a $250mm investment from Chinese investor syndicate.",
        "Facilitated strategic recapitalization and partial sale of a $2bn nationwide affordable housing portfolio."
      ]
    }
  ],
  educationalExperiences: [
  {
    emoji: "📚",
    ariaLabel: "books",
    university: "Harvard University",
    school: "Harvard Business School",
    dates: "2018 - 2020",
    details: [
      "Masters in Business Administration",
      "Hospitality Club Co-President. Harvard Real Estate Weekend Conference 2019 Co-Chair. "
    ]
    },
   {
    emoji: "🌲",
    ariaLabel: "tree",
    university: "Stanford University",
    school: "School of Engineering",
    dates: "2008 - 2012",
    details: [
      "Bachelor of Science, with honors, in Engineering - Architectural Design",
      "Phi Beta Kappa Academic Honors Society and Tau Beta Pi Engineering Honors Society. "
    ]
  }
  ],
  skills: [
    {
      emoji: "📝",
      ariaLabel: "notepad",
      dates: "2000 - present",
      skillone: "Languages",
      skilltwo: "Frameworks",
      details: [
        "Proficient in French",
        "Beginner HTML, CSS, Javascript",
        ]
    }
  ]
};

document.title = data.name;

const name = document.querySelector('#name');
name.textContent = data.name;

const emojiContainer = document.querySelector('h1 span[role="img"]');
emojiContainer.textContent = data.mainEmoji.character;
emojiContainer.setAttribute('aria-label', data.mainEmoji.ariaLabel);

const phoneNumberContainer = document.querySelector('#phone-number');
phoneNumberContainer.textContent = data.phoneNumber;
const phoneLink = document.querySelector('li:nth-child(1) a');
phoneLink.href += data.phoneNumber;

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;
const emailLink = document.querySelector('li:nth-child(2) a');
emailLink.href += data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;
const githubLink = document.querySelector('li:nth-child(3) a');
githubLink.href += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;
const linkedInLink = document.querySelector('li:nth-child(4) a');
linkedInLink.href += data.linkedInHandle;

//ADD PATRICKS const workExperienceHeading = documentquerySelector...


function renderWorkExperience(workExperience) {
  return `
  <div>
    <span class="date">${workExperience.dates}</span>
    <h3>
      <span role="img" aria-label="${workExperience.ariaLabel}">${workExperience.emoji}</span>
      ${workExperience.jobTitle}<span class="comma">,</span>
      <span class="light">${workExperience.institution}</span>
    </h3>
    <ul>
      ${workExperience.details.map(detail => `<li>${detail}</li>`).join('')}
    </ul>
  </div>`;
}

const workExperienceContainer = document.querySelector('#work-experience');
const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
workExperienceContainer.innerHTML = allWorkExperiencesHTML;

const renderEducationalExperience = educationalExperience => `
<div>
  <span class="date">${educationalExperience.dates}</span>
  <h3>
    <span role="img" aria-label="${educationalExperience.ariaLabel}">${educationalExperience.emoji}</span>
    ${educationalExperience.university}<span class="comma">,</span>
    <span class="light">${educationalExperience.school}</span>
  </h3>
  <ul>
    ${educationalExperience.details
      .map(detail => `<li>${detail}</li>`)
      .join('')}
  </ul>
</div>`;

const educationContainer = document.querySelector(`#education`);
const eachEducationalExperienceHTML = data.educationalExperiences.map(renderEducationalExperience);
const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
educationContainer.innerHTML = allEducationalExperiencesHTML;

function renderSkills(skill) {
  return `
      <div>
      <span class="date">${skill.dates}</span>
      <h3>
        <span role="img" aria-label="${skill.ariaLabel}">${skill.emoji}</span>
        ${skill.skillone}<span class="comma">,</span>
        <span class="light">${skill.skilltwo}</span>
      </h3>
      <ul>
      ${skill.details
        .map(detail => `<li>${detail}</li>`)
        .join('')}
      </ul>
    </div>`;
   }
   const skillContainer = document.querySelector(`#skills`);
   const eachSkillHTML = data.skills.map(renderSkills);
   const allSkillsHTML = eachSkillHTML.join('');
   skillContainer.innerHTML = allSkillsHTML;


