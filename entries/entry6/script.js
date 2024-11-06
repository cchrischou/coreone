let currentPage = 0;
const pages = document.querySelectorAll('.page');
const totalPages = pages.length;

const flipbook = document.querySelector('.flipbook');

// Hide all pages except the first one
function resetPages() {
    pages.forEach((page, index) => {
        if (index !== currentPage) {
            page.style.transform = `rotateY(90deg)`;
        } else {
            page.style.transform = `rotateY(0deg)`;
        }
    });
}

// Go to the next page
document.getElementById('nextBtn').addEventListener('click', () => {
    currentPage = (currentPage + 1) % totalPages; // Loop back to first page if we reach the end
    resetPages();
});
