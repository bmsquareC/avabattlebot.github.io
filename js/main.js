// main.js
const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = mobileMenu.querySelectorAll('a'); // Get all links in mobile menu

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('hidden'); // Or use Tailwind classes like 'block'/'hidden' directly

        // Toggle icons (if you have separate SVGs for open/close without Alpine's :class)
        // const openIcon = mobileMenuButton.querySelector('.block.h-6.w-6'); // More specific selector
        // const closeIcon = mobileMenuButton.querySelector('.hidden.h-6.w-6');
        // openIcon.classList.toggle('hidden');
        // closeIcon.classList.toggle('hidden');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.classList.add('hidden');
            // Reset icons if needed
        });
    });
}
// Can be done with CSS `scroll-behavior: smooth;` on the `<html>` tag.
// Or with JS:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});