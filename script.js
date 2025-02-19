    // Tüm soruların başlıklarına tıklanabilirlik ekle
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const icon = this.querySelector('.faq-icon');
            
            // Yanıtı aç veya kapat
            if (answer.style.display === "none" || answer.style.display === "") {
                answer.style.display = "block";
                icon.textContent = "↑"; // Yukarı ok simgesi
            } else {
                answer.style.display = "none";
                icon.textContent = "↓"; // Aşağı ok simgesi
            }
        });
    });