// ==========================================
// 1. NAVIGASI HALAMAN
// ==========================================
function navigateTo(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        page.style.display = 'none';
    });

    // Tampilkan halaman yang dituju
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.style.display = 'flex'; // Menggunakan flex agar konten tetap di tengah
        window.scrollTo(0, 0); // Scroll ke atas setiap pindah halaman
    }
}

// ==========================================
// 2. SMOOTH SCROLL UNTUK SUB-MATERI
// ==========================================
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ==========================================
// 3. LOGIKA QUIZ (BERDASARKAN ASSESSMENT)
// ==========================================
let currentQuestion = 1;
let score = 0;
const totalQuestions = 5;

function checkAnswer(qNum, correctLetter, btn) {
    // Ambil semua tombol dalam satu soal
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('button');
    
    // Cegah klik ganda
    buttons.forEach(b => b.disabled = true);

    // Cek jawaban (asumsi teks tombol diawali huruf A, B, C, atau D)
    const selectedLetter = btn.innerText.charAt(0);

    if (selectedLetter === correctLetter) {
        btn.style.backgroundColor = "#97d700"; // Hijau (Spongebob Success)
        btn.style.color = "white";
        score++;
        playSimpleSound('correct'); 
    } else {
        btn.style.backgroundColor = "#f091b2"; // Pink (Patrick/Wrong)
        btn.style.color = "white";
        // Tunjukkan jawaban yang benar
        buttons.forEach(b => {
            if (b.innerText.charAt(0) === correctLetter) {
                b.style.border = "3px solid #97d700";
            }
        });
    }

    // Pindah ke soal berikutnya setelah delay 1.5 detik
    setTimeout(() => {
        const currentQEl = document.getElementById(`q${qNum}`);
        currentQEl.classList.remove('active-q');
        currentQEl.style.display = 'none';

        if (qNum < totalQuestions) {
            currentQuestion++;
            const nextQEl = document.getElementById(`q${currentQuestion}`);
            nextQEl.classList.add('active-q');
            nextQEl.style.display = 'block';
        } else {
            showQuizResult();
        }
    }, 1500);
}

function showQuizResult() {
    const resultDiv = document.getElementById('quiz-result');
    const scoreText = document.getElementById('score-text');
    
    resultDiv.style.display = 'block';
    
    let message = "";
    if (score === totalQuestions) message = "Barnacles! Perfect Score! 🌟";
    else if (score >= 3) message = "Great job, Sailor! ⚓";
    else message = "Keep studying, you can do it! 🍍";

    scoreText.innerHTML = `<h3>${message}</h3><p>Your Score: ${score} / ${totalQuestions}</p>`;
}

function resetQuiz() {
    score = 0;
    currentQuestion = 1;
    
    // Reset tampilan
    document.getElementById('quiz-result').style.display = 'none';
    
    for (let i = 1; i <= totalQuestions; i++) {
        const q = document.getElementById(`q${i}`);
        q.style.display = (i === 1) ? 'block' : 'none';
        q.classList.toggle('active-q', i === 1);
        
        const btns = q.querySelectorAll('button');
        btns.forEach(b => {
            b.disabled = false;
            b.style.backgroundColor = "#fdfdfd";
            b.style.color = "#333";
            b.style.border = "2px solid var(--sb-yellow)";
        });
    }
}

// ==========================================
// 4. FITUR TAMBAHAN (INTERAKTIF)
// ==========================================

// Fungsi placeholder untuk suara (bisa ditambah file mp3 jika ada)
function playSimpleSound(type) {
    console.log(`Playing ${type} sound effect...`);
}

// Inisialisasi saat web pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("Lumina Wave is Ready! I'm Ready! I'm Ready!");
    
    // Memastikan hanya page 1 yang muncul di awal
    navigateTo('page1');

    // Tambahkan event listener untuk input otomatis di worksheet (D = 1/f)
    const focalInputs = document.querySelectorAll('.focal-input');
    focalInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const row = e.target.closest('tr');
            const diopterDisplay = row.querySelector('.diopter-res');
            const f = parseFloat(e.target.value);
            
            if (f && f !== 0) {
                const d = (1 / f).toFixed(2);
                diopterDisplay.innerText = d + " D";
            } else {
                diopterDisplay.innerText = "-";
            }
        });
    });
});
