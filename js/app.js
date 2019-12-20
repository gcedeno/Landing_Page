/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/
//defining event listeners
// window.addEventListener('scroll', highlight);
window.addEventListener("scroll", (event) => {
    highlight();
    updateDistinguishedSection();
    checkForScrollButton();
});
document.addEventListener('DOMContentLoaded', (event) => {
    buildNav();
    // scrollSmoothly();
});
/**
 * Define Global Variables
 *
*/
let navList = document.querySelector('#navbar__list');
let sections = document.querySelectorAll('section');
let scrollBack = document.querySelector('.scrollTop');
let nameListItem = [];
let sectionList = [];

/**
 * End Global Variables
 * Start Helper Functions
 *
*/
/**********************************************/
function isElementInViewport(el){
    let rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    // const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

function checkForScrollButton(){
    // Get the current scroll value
    let y = window.scrollY;

    // If the scroll value is greater than the window height, let's add a class to the scroll-to-top button to show it!
    if (y > 0) {
        scrollToTopButton.className = "show";
      }
    else {
        scrollToTopButton.className = "hide";
    }
}

// Add class 'active' to section when near top of viewport
function updateDistinguishedSection(){
    for (const landingPgSection of landingPgSections){
        if (isElementInViewport(landingPgSection)){
            landingPgSection.classList.add("your-active-class");
        }
        else {
            landingPgSection.classList.remove("your-active-class");
        }
    }
};
/**********************************************/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav() {
  for (let i = 0; i < sections.length; i++) {
// variables here are used to get the (1)text content for nav items and (2)id for anchors, also (3)added each section to Array for further use:
    let itemText = sections[i].getAttribute('data-nav');
    let itemId = sections[i].getAttribute('id');
    sectionList[i] = sections[i];
//creating (1)list items and (2)anchors and (3)setting the value, got from upper variable as href value:
    nameListItem[i] = document.createElement('li');
    let nameListItemA = document.createElement('a');
    nameListItemA.setAttribute('href', '#' + itemId);
//appending (1)text from top variable to a, (2)appending a to li, and (3)li to ul:
    nameListItemA.appendChild(document.createTextNode(itemText));
    nameListItem[i].appendChild(nameListItemA);
    navList.appendChild(nameListItem[i]);
//adding class that I found in css file:
    nameListItemA.className = 'menu__link';
  }
}

// buildNav();

// Add class 'active' to section when near top of viewport
// function changes styling of sections when active
function highlight (e) {
//loop through section list stored in an array sectionCollection;
  for(let i = 0; i < sectionList.length; i++){
//checks if section has active class and saves value as a boolian:
    let containsActiveClass = sectionList[i].classList.contains('your-active-class');
//changes active class based on position of user screen view:
    if (!containsActiveClass) {
       if(window.scrollY >= sectionList[i].offsetTop - 150 && window.scrollY <= sectionList[i].offsetTop + 500) {
        sectionList[i].className = 'your-active-class';
        nameListItem[i].className = 'link_active';
      }
    }else {
      if(window.scrollY < sectionList[i].offsetTop - 150 || window.scrollY > sectionList[i].offsetTop + 500) {
       sectionList[i].classList.remove('your-active-class');
       nameListItem[i].classList.remove('link_active');
     }
    }
  }

// Scroll to anchor ID using scrollTO event
//  test where the user is located and inserting "back to top" button to the screen
  if( window.scrollY > document.querySelector('main').offsetHeight - 1800) {
    scrollBack.style.display = 'block';
  }else {
    scrollBack.style.display = 'none';
  }
};
/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
// added code from https://github.com/cferdinandi/smooth-scroll to get a scroll effect
// const scroll = new SmoothScroll('a[href*="#"]', {
// });
const scroll = new SmoothScroll('a[href*="#"]', {
  speed:500,
  speedAsDuration: false,
  // Function. Custom easing pattern
	customEasing: function (time) {

		// return <your formulate with time as a multiplier>
		return time < 0.2 ? 10 * time * time : -1 + (4 - 2 * time) * time;
	}
});
