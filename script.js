const arrow = document.getElementById('arrow');
const skills = document.getElementById('skills');

arrow.addEventListener('click', () => {
  skills.classList.toggle('show');
});
