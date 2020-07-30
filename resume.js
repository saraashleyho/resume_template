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
