// -------------- Fade In And Out --------------
document.addEventListener("DOMContentLoaded", function () {
    // Function to check if an element is intersecting the viewport
    function isElementIntersecting(entry) {
        return entry.isIntersecting;
    }
    // Function to handle the intersection
    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (isElementIntersecting(entry)) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }
    // Create the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.18,
    });
    // Select all elements with the "benefit" class
    const benefits = document.querySelectorAll(".benefit");
    // Select all elements with the "member" class
    const members = document.querySelectorAll(".member");
    // Observe all the selected "benefit" elements
    benefits.forEach(function (benefit) {
        observer.observe(benefit);
    });
    // Observe all the selected "member" elements
    members.forEach(function (member) {
        observer.observe(member);
    });
});

// -------------- Update Padding --------------
function updateMainPadding() {
    // Your existing updateMainPadding function, no changes
}

// Initial update when the DOM is ready
document.addEventListener("DOMContentLoaded", updateMainPadding);

// Update padding on window resize
window.addEventListener("resize", updateMainPadding);

// Function to toggle the display of the dropdown content
function toggleMenu() {
    const menu = document.querySelector(".dropdown-content");
    const menuButton = document.querySelector(".mobile-menu-button");
    const header = document.getElementById("mainHeader");
    const logo = document.querySelector(".logo");

    if (menu.style.display === "block" || window.getComputedStyle(menu).display === "block") {
        // Close the menu
        menu.style.display = "none";
        menuButton.style.position = "relative";
        menuButton.style.top = "";
        menuButton.innerHTML = "&#9776;";
        menuButton.style.marginLeft = "0px";
        menuButton.style.marginTop = "0px";
        header.style.height = "";
        logo.style.display = 'block';

        // Enable scrolling
        enableScrolling();
    } else {
        // Open the menu
        menuButton.style.position = "absolute";
        menuButton.style.top = "45px";
        menu.style.display = "block";
        menuButton.innerHTML = "&#10006;";
        menuButton.style.marginLeft = "200px";
        menuButton.style.marginTop = "-120px";
        header.style.height = "100%";
        logo.style.display = 'none';

        // Disable scrolling
        disableScrolling();
    }
}

// Attach the click event listener to the mobile menu button
const mobileMenuButton = document.querySelector(".mobile-menu-button");
if (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", toggleMenu);
}

// Function to disable scrolling
function disableScrolling() {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `${scrollY}px`;
}

// Function to enable scrolling
function enableScrolling() {
    const scrollY = parseInt(document.body.style.top);
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, scrollY);
}

// Initialize the previous scroll position
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    // Your existing scroll behavior, no changes
    const currentScrollPos = window.pageYOffset;
    const navElement = document.getElementById("mainHeader");

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("mainHeader").style.top = "0";
    } else {
        document.getElementById("mainHeader").style.top = `-${navElement.clientHeight}px`; // Hide header
    }

    prevScrollPos = currentScrollPos;
};

// ---------------- Up Arrow ----------------
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 60) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
});

    // -----------------------------------------Dark Mode--------------------------
    const icon = document.querySelector(".mode");
    const switchInput = document.getElementById('switch');

    // Initialize color mode based on local storage or system preferences
    const preferredColorMode = localStorage.getItem('colorMode');
    if (preferredColorMode === 'light-mode') {
        applyColorPalette('light-mode');
        switchInput.checked = true;
    } else {
        applyColorPalette('dark-mode');
        switchInput.checked = false;
    }

    icon.addEventListener("click", toggleColorPalette);

    function toggleColorPalette() {
        const switchInput = document.getElementById('switch');
        if (switchInput.checked) {
            applyColorPalette('light-mode');
            localStorage.setItem('colorMode', 'light-mode');
        } else {
            applyColorPalette('dark-mode');
            localStorage.setItem('colorMode', 'dark-mode');
        }
    }

    function applyColorPalette(palette) {
        const root = document.documentElement;
        root.className = palette;
    }

    //----------------------------Transparent Navbar--------------------------
    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY; // See where the scroll is at
        // ------------ transparent top stuff------------
        const navElement = document.querySelector('header.team'); // Check if scroll position is at the top of the page (scrollY is zero)
        if(navElement){
            if (scrollY === 0 && document.body.style.top >= 0) {
                // Scroll is at the top, make the header clear and remove box shadow
                navElement.style.backgroundColor = "transparent";
                navElement.style.boxShadow = "none";
            } else {
                // Scroll is not at the top, set background color and box shadow as needed
                navElement.style.backgroundColor = "var(--background-color-header)";
                navElement.style.boxShadow = "var(--shadow)";
            }
        }
    });

    //---------------------------Team img resize---------------

