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

const fetchData = async () => {
  const response = await fetch('./data.json');
  const data = await response.json();
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
  
    
  const workExperienceContainer = document.querySelector('#work-experience');
  const eachWorkExperienceHTML = data.workExperiences.map(renderWorkExperience);
  const allWorkExperiencesHTML = eachWorkExperienceHTML.join('');
  workExperienceContainer.innerHTML = allWorkExperiencesHTML;
  
   
  const educationContainer = document.querySelector(`#education`);
  const eachEducationalExperienceHTML = data.educationalExperiences.map(renderEducationalExperience);
  const allEducationalExperiencesHTML = eachEducationalExperienceHTML.join('');
  educationContainer.innerHTML = allEducationalExperiencesHTML;
  
  
  const skillContainer = document.querySelector(`#skills`);
  const eachSkillHTML = data.skills.map(renderSkills);
  const allSkillsHTML = eachSkillHTML.join('');
  skillContainer.innerHTML = allSkillsHTML;
};

fetchData();
