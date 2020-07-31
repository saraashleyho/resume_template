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
  workExperiences: [
    {
      emoji: "🍔",
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
    university: "Stanford University",
    school: "School of Engineering",
    dates: "2008 - 2012",
    details: [
      "Bachelor of Science, with honors, in Engineering - Architectural Design",
      "Phi Beta Kappa Academic Honors Society and Tau Beta Pi Engineering Honors Society. "
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

const emailContainer = document.querySelector('#email');
emailContainer.textContent = data.email;

const githubContainer = document.querySelector('#github-link');
githubContainer.textContent += data.githubHandle;

const linkedInContainer = document.querySelector('#linkedin-link');
linkedInContainer.textContent += data.linkedInHandle;

