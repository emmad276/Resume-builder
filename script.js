// Selecting elements
var nameInput = document.getElementById('name');
var contactInput = document.getElementById('contact');
var educationInput = document.getElementById('education');
var skillsInput = document.getElementById('skills');
var experienceInput = document.getElementById('experience');
var displayName = document.getElementById('displayName');
var displayContact = document.getElementById('displayContact');
var displayEducation = document.getElementById('displayEducation');
var displaySkills = document.getElementById('displaySkills');
var displayExperience = document.getElementById('displayExperience');
var toggleSkillsButton = document.getElementById('toggleSkillsButton');
var resumeSkillsSection = document.getElementById('resumeSkills');
var generateResumeButton = document.getElementById('generateResumeButton');
// Toggle Skills Section Visibility
toggleSkillsButton.addEventListener('click', function () {
    if (resumeSkillsSection.style.display === 'none' || resumeSkillsSection.style.display === '') {
        resumeSkillsSection.style.display = 'block';
        toggleSkillsButton.textContent = 'Hide Skills';
    }
    else {
        resumeSkillsSection.style.display = 'none';
        toggleSkillsButton.textContent = 'Show Skills';
    }
});
// Generate Resume and Display Data
generateResumeButton.addEventListener('click', function () {
    // Personal Information
    displayName.textContent = "Name: ".concat(nameInput.value);
    displayContact.textContent = "Contact: ".concat(contactInput.value);
    // Education
    displayEducation.textContent = educationInput.value;
    // Skills (Parse comma-separated input)
    var skills = skillsInput.value.split(',').map(function (skill) { return skill.trim(); });
    displaySkills.innerHTML = ''; // Clear existing skills
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill;
        displaySkills.appendChild(li);
    });
    // Work Experience
    displayExperience.textContent = experienceInput.value;
});
