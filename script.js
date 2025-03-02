function updateFrequency(dropdown) {
    const row = dropdown.closest('tr');
    const frequencyDisplay = row.querySelector('.selected-frequency');

    const selectedValue = dropdown.value;

    if (selectedValue) {
        frequencyDisplay.textContent = `(${selectedValue})`;
    } else {
        frequencyDisplay.textContent = ''; 
    }
}


// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Toggle Theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme');
    updateToggleIcon();
});

function updateToggleIcon() {
    if (body.classList.contains('light-theme')) {
        the
        
        
        meToggle.textContent = '🌙'; 
    } else {
        themeToggle.textContent = '☀️'; 
    }
}

// Update Frequency Function (if needed)
// function updateFrequency(dropdown) {
//     const row = dropdown.closest('tr');
//     const frequencyDisplay = row.querySelector('.selected-frequency');
//     const selectedValue = dropdown.value;
//     frequencyDisplay.textContent = selectedValue ? `(${selectedValue})` : '';
// }