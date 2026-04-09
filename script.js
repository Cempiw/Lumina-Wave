// Function to switch between main pages
function navigateTo(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Scroll to top
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Function to switch sub-sections in Page 3
function showSubSection(sectionId) {
    const subSections = document.querySelectorAll('.sub-section');
    subSections.forEach(sec => sec.classList.remove('active'));

    document.getElementById(sectionId).classList.add('active');
}

// Quiz logic
function checkQuiz(button, isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    const allButtons = document.querySelectorAll('.quiz-options button');
    
    // Disable all buttons after choice
    allButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.style.backgroundColor = "#4caf50";
        button.style.color = "white";
        feedback.innerText = "Correct! The retina is the light-sensitive inner surface of the eye.";
        feedback.style.color = "#4caf50";
    } else {
        button.style.backgroundColor = "#f44336";
        button.style.color = "white";
        feedback.innerText = "Incorrect. The correct answer is B. Retina.";
        feedback.style.color = "#f44336";
    }
}
