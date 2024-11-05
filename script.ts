// Selecting elements
const nameInput = document.getElementById('name') as HTMLInputElement;
const contactInput = document.getElementById('contact') as HTMLInputElement;
const educationInput = document.getElementById('education') as HTMLInputElement;
const skillsInput = document.getElementById('skills') as HTMLInputElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;

const displayName = document.getElementById('displayName') as HTMLParagraphElement;
const displayContact = document.getElementById('displayContact') as HTMLParagraphElement;
const displayEducation = document.getElementById('displayEducation') as HTMLParagraphElement;
const displaySkills = document.getElementById('displaySkills') as HTMLUListElement;
const displayExperience = document.getElementById('displayExperience') as HTMLParagraphElement;

const toggleSkillsButton = document.getElementById('toggleSkillsButton') as HTMLButtonElement;
const resumeSkillsSection = document.getElementById('resumeSkills') as HTMLElement;

const generateResumeButton = document.getElementById('generateResumeButton') as HTMLButtonElement;

// Toggle Skills Section Visibility
toggleSkillsButton.addEventListener('click', () => {
  if (resumeSkillsSection.style.display === 'none' || resumeSkillsSection.style.display === '') {
    resumeSkillsSection.style.display = 'block';
    toggleSkillsButton.textContent = 'Hide Skills';
  } else {
    resumeSkillsSection.style.display = 'none';
    toggleSkillsButton.textContent = 'Show Skills';
  }
});

// Generate Resume and Display Data
generateResumeButton.addEventListener('click', () => {
  // Personal Information
  displayName.textContent = `Name: ${nameInput.value}`;
  displayContact.textContent = `Contact: ${contactInput.value}`;

  // Education
  displayEducation.textContent = educationInput.value;

  // Skills (Parse comma-separated input)
  const skills = skillsInput.value.split(',').map(skill => skill.trim());
  displaySkills.innerHTML = '';  // Clear existing skills
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    displaySkills.appendChild(li);
  });

  // Work Experience
  displayExperience.textContent = experienceInput.value;
});
