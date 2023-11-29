//------------------Fade In And Out----------------
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
//------------------------Update Padding----------------------
// Function to update the padding of the "main" element based on the height of the "nav" element
function updateMainPadding() {
    const logo = document.querySelector(".logo-image")
    const logoCon = document.querySelector(".logo")
    const navMain = document.querySelector(".navMain")
    const altNav = document.querySelector(".altNav")
    const menuButton = document.querySelector(".menuButton");
    const header = document.getElementById("mainHeader");
    const menu = document.querySelector(".dropdown-content");

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    if (menu.style.display === "block") {
        // Close the menu
        menu.style.display = "none";
        menuButton.style.position = "relative";
        menuButton.style.top = "";
        menuButton.innerHTML = "&#9776;";
        menuButton.style.marginLeft = "0px";
        menuButton.style.marginTop = "0px";
        header.style.height = "";
        logoCon.style.display = 'block';

        // Enable scrolling
        enableScrolling();
    } 

    if (viewportWidth <= 890 && viewportWidth > 745){
        // logo.style.width = '75%'; Commenting these out, but these change the size of the logo based on the screen size
        navMain.style.display = 'flex';
        altNav.style.display = 'none';
        logoCon.style.padding = '0px';
    }
    else if(viewportWidth <= 745 ){
        // logo.style.width = '75%'; Commenting these out, but these change the size of the logo based on the screen size
        logoCon.style.padding = '0px'
        navMain.style.display = 'none';
        altNav.style.display = 'flex';
    }
    else{
        // logo.style.width = '100%'; Commenting these out, but these change the size of the logo based on the screen size
        navMain.style.display = 'flex';
        altNav.style.display = 'none';
        logoCon.style.padding = '10px';
    }

    if (viewportHeight <= 735) {
        menu.classList.add('small-screen');
    } 
    else {
        menu.classList.remove('small-screen');
        // menuButton.style.marginLeft = "";
    }

    const navElement = document.getElementById("mainHeader");
    const mainElement = document.querySelector(".pageTitle");
    if(mainElement){
        mainElement.style.paddingTop = `${navElement.clientHeight+80}px`;
    }
}

// Initial update when the DOM is ready
document.addEventListener("DOMContentLoaded", updateMainPadding);

// Update padding on window resize
window.addEventListener("resize", updateMainPadding);

// Add an event listener to the document that listens for clicks
document.addEventListener("click", function(event) {
    const header = document.getElementById("mainHeader");
    const menu = document.querySelector(".dropdown-content");
    if (!header.contains(event.target)) {
        menu.style.display = "none";
    }
});

// Function to toggle the display of the dropdown content
function toggleMenu() {
    const sideMenu = document.querySelector(".sideMenu");
    const menu = document.querySelector(".dropdown-content");
    // const menuCon = document.querySelector(".dropdown"); not needed
    const menuButton = document.querySelector(".mobile-menu-button");
    const header = document.getElementById("mainHeader");
    const logo = document.querySelector(".logo");

    if (menu.style.display === "flex") {
        // Close the menu
        menu.style.display = "none";
        menuButton.style.position = "absolute"; // this makes it so it can be seen
        menuButton.style.top = "";
        menuButton.innerHTML = "&#9776;";
        menuButton.style.marginLeft = "0px";
        menuButton.style.top = "25px"; // Changed this for positioning
        header.style.height = "";
        logo.style.display = 'block';
        sideMenu.style.display = 'flex';
        // menuCon.style.top = "";
        // menuCon.style.left = "";
        // menuCon.style.right = "";

        // Enable scrolling
        enableScrolling();
    } else {
        // Open the menu
        menuButton.style.position = "absolute";
        menuButton.style.top = "45px";
        menu.style.display = "flex";
        menuButton.innerHTML = "&#x2715;";
        menuButton.style.right = "25px"; // this is where the placement of the menu button goes
        header.style.height = "100%";
        logo.style.display = 'none';
        sideMenu.style.display = 'none';
        // menuCon.style.top = "100px";
        // menuCon.style.left = "0";
        // menuCon.style.right = "0";

        // Disable scrolling
        disableScrolling();
    }
}

// For reference, this is my toggleMenu function:
// function toggleMenu() {
//     const menu = document.querySelector(".dropdown-content");
//     const menuCon = document.querySelector(".dropdown");
//     const menuButton = document.querySelector(".menuButton");
//     const header = document.querySelector('header');
//     const logo = document.querySelector(".logo");

//     if (menu.style.display === "flex") {
//         // Close the menu
//         header.style.backgroundColor = "";
//         header.style.boxShadow = "";
//         menu.style.display = "none";
//         menuButton.style.position = "relative";
//         menuButton.style.top = "";
//         menuButton.innerHTML = "&#9776;";
//         menuButton.style.right = "";
//         menuButton.style.marginTop = "0px";
//         header.style.height = "";
//         logo.style.display = 'flex';
//         menuCon.style.top = "";
//         menuCon.style.left = "";
//         menuCon.style.right = "";

//         enableScrolling();
//     } 
//     else {
//         // Open the menu
//         header.style.backgroundColor = "var(--primary-faded-color)";
//         header.style.boxShadow = "var(--shadow)";
//         menuButton.style.position = "relative";
//         menuButton.style.top = "30px";
//         menu.style.display = "flex";
//         menuButton.innerHTML = "&#x2715;";
//         menuButton.style.right = "-40%";
//         menuButton.style.marginTop = "-100px";
//         header.style.height = "100%";
//         logo.style.display = 'none';
//         menuCon.style.top = "100px";
//         menuCon.style.left = "0";
//         menuCon.style.right = "0";

//         disableScrolling();
//     }
//     document.body.style.left = '0px';
//     document.body.style.right = '0px';
// }

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

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    const header = document.getElementById("mainHeader");
    const viewportWidth = window.innerWidth;
    if ((viewportWidth*.5)>300){
        width = 50;
    }
    else{
        width = viewportWidth*.5;
    }

    if (header){
        // Check if scrolled more than width amount of pixels
        if (currentScrollPos > width) {
            if (prevScrollPos > currentScrollPos) {
                header.style.top = "-5px";
            } else {
                header.style.top = `-${header.clientHeight}px`; // Hide header
            }
        }

        // Keep header visible for the first few hundred pixels
        else {
            header.style.top = "0";
        }

        prevScrollPos = currentScrollPos;
    }
};


//---------------Up Arrow-------------------------------//
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scroll-to-top");

    // Add a click event listener to the up arrow icon
    scrollToTopButton.addEventListener("click", () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Show/hide the up arrow icon based on the user's scroll position
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 60) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
});

// -----------------------------------------Dark Mode--------------------------
window.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector(".mode");
    const switchInput = document.getElementById('switch');
    
    // Initialize color mode based on local storage or system preferences
    const preferredColorMode = localStorage.getItem('colorMode');
    if (preferredColorMode === 'dark-mode') {
        applyColorPalette('dark-mode');
        switchInput.checked = true;
    } else {
        applyColorPalette('light-mode');
        switchInput.checked = false;
    }
    
    icon.addEventListener("click", () => {
        toggleColorPalette();
    });
});

function toggleColorPalette() {
    const switchInput = document.getElementById('switch');
    if (switchInput.checked) {
        applyColorPalette('dark-mode');
        localStorage.setItem('colorMode', 'dark-mode');
    } else {
        applyColorPalette('light-mode');
        localStorage.setItem('colorMode', 'light-mode');
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
        if (scrollY <= 0 && document.body.style.top >= 0 && navElement && window.innerWidth>500) {
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

//-------------------------Next/Previous Button--------

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const carousel = document.querySelector('.carousel');

    var direction;

    if(prev){
        prev.addEventListener('click', function() {
            if (direction === -1){
                slider.appendChild(slider.firstElementChild);
                direction = 1;
            }
            
            carousel.style.justifyContent = 'flex-end';
            slider.style.transform = 'translate(33%)';
        });
    }
    
    if(next){
        next.addEventListener('click', function() {
            direction = -1;
            carousel.style.justifyContent = 'flex-start';
            slider.style.transform = 'translate(-33%)';
        });     
    }

    if(slider){
        slider.addEventListener('transitionend', function() {
            if(slider.style.transform === 'translate(-33%)' || slider.style.transform === 'translate(33%)'){
                if (direction === -1){
                    slider.appendChild(slider.firstElementChild);
                } else if (direction === 1){
                    slider.prepend(slider.lastElementChild);
                }
                
        
                slider.style.transition = 'none';
                slider.style.transform = 'translate(0)';
                setTimeout(function() {
                    slider.style.transition = 'all 0.5s';
                });
            }
        });
    }
});

//-------------------------Success Notification----------------
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function showSent(send){
    send.style.display = 'block';
    send.parentElement.scrollIntoView({behavior:'smooth'});
}

document.addEventListener("DOMContentLoaded", function(){
    var successParam = GetURLParameter('success')
    if (successParam){
        var message;
        if(successParam ==1 ){
            message = '#sent';
        }else{
            message = '#fail';
        }

        const send = document.querySelector(message);
        showSent(send);
    }
});

//-----------------loading image-----------------
function showLoading(){
    const loader = document.querySelector('.loader');
    loader.classList.add('load');
    loader.style.display = 'block';
}

//---------- Function to clean the input to protect against code injection
function sanitizeInput(inputField) {
    const inputValue = inputField.value;
    const sanitizedValue = DOMPurify.sanitize(inputValue, { ALLOWED_TAGS: ['p', 'br'] });

    const displayValue = sanitizedValue.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
    inputField.value = displayValue;
}