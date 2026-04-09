function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const target = document.getElementById(pageId);
    target.classList.add('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function checkAnswer(btn, correct) {
    const text = btn.innerText;
    if(text.includes('Bent pencil')) {
        btn.style.backgroundColor = '#97d700'; // Green for correct
        alert("Correct! Refraction makes the pencil look bent! [cite: 1, 4]");
    } else {
        btn.style.backgroundColor = '#f091b2'; // Pink for wrong
        alert("Try again! Remember, refraction is about light bending.");
    }
}
function navigateTo(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0,0);
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function answer(qNum, isCorrect) {
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
    }
}
// Initial Animation for Spongebob vibes
console.log("Welcome to Lumina Wave! I'm ready! I'm ready!");
