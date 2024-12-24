// Intersection Observer로 스크롤 애니메이션 구현
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        threshold: 0.5, // 20%가 화면에 들어오면 애니메이션 트리거
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 페이지 새로고침 시 맨 위로 스크롤
window.addEventListener("beforeunload", () => {
    window.scrollTo(0, 0);
});
