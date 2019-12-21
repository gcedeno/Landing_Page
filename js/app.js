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
window.addEventListener("scroll", (event) => {
    highlight();
    checkForScrollButton();
    });
/*Builds the Navigation Bar when loading the page*/
document.addEventListener('DOMContentLoaded', (event) => {
    buildNav();
    highlight();
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
/*Function to test if a DOM element is visible in the current viewport */
function isElementInViewport(el){
    /*The Element.getBoundingClientRect() method returns the size of an element and
    its position relative to the viewport. */
    let rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    // Only completely visible elements return true:
    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
    };

/*Function that reacts to the event listener when scrolling */
function checkForScrollButton(){
    // Getting the current scroll value
    let y = window.scrollY;

    /* If the scroll value is greater than the window height,
    then change the class to the scroll-to-top button to visualize it */
    if (y > 0) {
        scrollBack.className = "show";
      }
    else {
        scrollBack.className = "hide";
    }
  };

// Add class 'active' to section when near top of viewport

/**********************************************/
/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// building the Navigation Bar
function buildNav() {
  for (let i = 0; i < sections.length; i++) {
    /* exttracting text content for nav items and id for anchors,
    creating an array containing each section for further use:*/
    let itemText = sections[i].getAttribute('data-nav');
    let itemId = sections[i].getAttribute('id');
    sectionList[i] = sections[i];
    //creating the list items and anchors for the Navbar
    nameListItem[i] = document.createElement('li');
    let nameListItemA = document.createElement('a');
    nameListItemA.setAttribute('href', '#' + itemId);
    //appending text to anchors, and each li to ul:
    nameListItemA.appendChild(document.createTextNode(itemText));
    nameListItem[i].appendChild(nameListItemA);
    navList.appendChild(nameListItem[i]);
    //adding the menu_link class from the css styling file:
    nameListItemA.className = 'menu__link';
    }
    };
// Scroll to section on link click
// Set sections as active
// Add class 'active' to section when near top of viewport
// function changes styling of sections when active
function highlight (e) {
  for(let i = 0; i < sectionList.length; i++){
    let containsActiveClass = sectionList[i].classList.contains('your-active-class');
    //changes active class based on current viewport:
    if (!containsActiveClass) {
       if(window.scrollY >= sectionList[i].offsetTop - 150 && window.scrollY <= sectionList[i].offsetTop + 500) {
        sectionList[i].className = 'your-active-class';
        nameListItem[i].className = 'link_active';
      }
    }else {
      if(window.scrollY < sectionList[i].offsetTop - 150 || window.scrollY > sectionList[i].offsetTop + 500) {
       sectionList[i].classList.remove('your-active-class');
       nameListItem[i].classList.remove('link_active');
     }}};

// Scroll to anchor ID using scrollTO event
//  test user location, when getting to the bottom of the page insert "scroll back to top" buttonn
  if( window.scrollY > document.querySelector('main').offsetHeight - 1800) {
    scrollBack.style.display = 'block';}
  else {
    scrollBack.style.display = 'none';}
  };
/**
 * End Main Functions
 */

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
