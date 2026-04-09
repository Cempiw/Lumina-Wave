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
let currentQuestion = 1;
let score = 0;
const totalQuestions = 5;

function checkAnswer(qNum, correctLetter, btn) {
    // Basic logic to get selected option letter
    const options = ["A", "B", "C", "D"];
    const btnIndex = Array.from(btn.parentNode.children).indexOf(btn);
    const selectedLetter = options[btnIndex];

    if (selectedLetter === correctLetter) {
        btn.style.backgroundColor = "#97d700"; // Green
        score++;
    } else {
        btn.style.backgroundColor = "#f091b2"; // Pink
    }

    // Disable all buttons in this question
    const buttons = btn.parentNode.querySelectorAll('button');
    buttons.forEach(b => b.disabled = true);

    // Wait and move to next
    setTimeout(() => {
        document.getElementById(`q${qNum}`).classList.remove('active-q');
        if (qNum < totalQuestions) {
            currentQuestion++;
            document.getElementById(`q${currentQuestion}`).classList.add('active-q');
        } else {
            showResult();
        }
    }, 1000);
}

function showResult() {
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.style.display = 'block';
    document.getElementById('score-text').innerText = `You scored ${score} out of ${totalQuestions}!`;
}

function resetQuiz() {
    score = 0;
    currentQuestion = 1;
    document.getElementById('quiz-result').style.display = 'none';
    
    // Reset all cards
    document.querySelectorAll('.q-card').forEach(card => card.classList.remove('active-q'));
    document.getElementById('q1').classList.add('active-q');
    
    // Reset all buttons
    document.querySelectorAll('.opt-grid button').forEach(btn => {
        btn.disabled = false;
        btn.style.backgroundColor = "#fdfdfd";
    });
}
