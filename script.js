const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Dark Mode styling

const darkMode =()=>{
    nav.style.backgroundColor = 'rgba(0 0 0 /0.50)';
    textBox.style.backgroundColor = 'rgba(255 255 255 /0.50)';
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun',  'fa-moon')
    image1.src = 'assets/undraw_feeling_proud_dark.svg'
    image2.src = 'assets/undraw_proud_coder_dark.svg'
    image3.src = 'assets/undraw_conceptual_idea_dark.svg'
}

// Light Mode styling

const lightMode =()=>{
    nav.style.backgroundColor = 'rgba(255 255 255 /0.50)';
    textBox.style.backgroundColor = 'rgba(0 0 0 /0.50)';
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    image1.src = 'assets/undraw_feeling_proud_light.svg'
    image2.src = 'assets/undraw_proud_coder_light.svg'
    image3.src = 'assets/undraw_conceptual_idea_light.svg'
}



// switch them dynamically

function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark');
        darkMode()
    }else{
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme', 'light');
        lightMode()
    }
}

// Event listener

toggleSwitch.addEventListener('change', switchTheme)

// Check local storage for theme

const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}