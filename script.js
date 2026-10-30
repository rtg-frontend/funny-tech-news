const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = themeToggleBtn.querySelector('.theme-btn__icon');

// Check saved theme preference from localStorage
const savedTheme = localStorage.getItem('neoTechTheme');

if (savedTheme === 'light') {
  document.body.classList.add('page--light');
  themeIcon.classList.replace('fa-sun', 'fa-moon');
} else {
  themeIcon.classList.replace('fa-moon', 'fa-sun');
}

// Toggle theme event handler
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('page--light');
  
  const isLight = document.body.classList.contains('page--light');

  if (isLight) {
    localStorage.setItem('neoTechTheme', 'light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    localStorage.setItem('neoTechTheme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});