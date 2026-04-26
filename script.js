const CORRECT_DATE = "0818"; 

const loginScreen = document.getElementById('login-screen');
const mainStory = document.getElementById('main-story');
const passwordField = document.getElementById('passwordField');
const errorMessage = document.getElementById('error-message');

// Vérification de l'état au chargement
window.onload = function() {
    // On cache l'erreur par défaut au chargement
    if (errorMessage) errorMessage.style.display = 'none';

    if (localStorage.getItem('isUnlocked') === 'true') {
        if(loginScreen) loginScreen.style.display = 'none';
        if(mainStory) mainStory.style.display = 'block';
        updateCounters();
    }
};

function checkPassword() {
    if (passwordField.value === CORRECT_DATE) {
        localStorage.setItem('isUnlocked', 'true');
        loginScreen.style.display = 'none';
        mainStory.style.display = 'block';
        updateCounters();
    } else {
        // N'affiche l'erreur que si le champ n'est pas vide
        if (passwordField.value !== "") {
            errorMessage.style.display = 'block';
            passwordField.value = "";
        }
    }
}

function updateCounters() {
    const startDate = new Date('2025-08-18T00:00:00');
    const togetherDate = new Date('2025-09-09T00:00:00');
    const now = new Date();

    function calculate(targetDate, prefix) {
        const diff = now - targetDate;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);

        const dElem = document.getElementById(prefix + '-days');
        const hElem = document.getElementById(prefix + '-hours');
        const mElem = document.getElementById(prefix + '-mins');

        if (dElem) dElem.innerText = days;
        if (hElem) hElem.innerText = hours;
        if (mElem) mElem.innerText = mins;
    }

    calculate(startDate, 'met');
    calculate(togetherDate, 'together');
}

// Mise à jour chaque minute
setInterval(updateCounters, 60000);

// Écouteurs d'événements
if(document.getElementById('unlockBtn')) {
    document.getElementById('unlockBtn').addEventListener('click', checkPassword);
}

if(passwordField) {
    passwordField.addEventListener('keypress', (e) => { 
        if (e.key === 'Enter') checkPassword(); 
    });

    // Cache l'erreur quand l'utilisateur tape à nouveau
    passwordField.addEventListener('input', () => {
        if (errorMessage) errorMessage.style.display = 'none';
    });
}
