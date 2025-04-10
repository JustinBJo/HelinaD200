const pages = document.querySelectorAll('.page');
const nextBtn = document.getElementById('next-btn'); 

let currentPage = 0;

document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup-overlay');
    const closeBtn = document.getElementById('popup-close');

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
  
window.onload = () => {
    showPage(0, true);
    nextBtn.style.display = 'none'; 

    pages[0].addEventListener('click', () => {
        nextBtn.style.display = 'block'; 
        showPage(1, true);
        currentPage = 1;
    });
};

function showPage(index, instant = false, direction = 'left') {
    if (index === currentPage) return;

    const current = pages[currentPage];
    const next = pages[index];

    if (!instant) {
    const outClass = direction === 'left' ? 'slide-out-left' : 'slide-out-right';
    current.classList.add(outClass);

    setTimeout(() => {
        current.classList.remove('active', outClass);
        current.style.opacity = '0';
        current.style.transform = 'translateX(0)';
    }, 500);
    } else {
    current.classList.remove('active');
    }

    next.classList.add('active', 'fade-in');
    setTimeout(() => {
    next.classList.remove('fade-in');
    }, 500);

    if (index === pages.length - 1) {
    nextBtn.style.display = 'none';  
    } else {
    nextBtn.style.display = 'block'; 
    }

    currentPage = index;
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        showPage(currentPage + 1, false, 'left');
    }
}
