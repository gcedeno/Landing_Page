## Table of Contents

1. [Project Description](#description)
3. [Project Components](#components)
4. [Instructions](#instructions)
5. [Licensing, Authors, and Acknowledgements](#licensing)

## Project Description <a name="description"></a>

The starter project given by Udacity has some HTML and CSS styling to display a static version of the Landing Page project. Main project task is to convert the static version of the project into an interactive one. This requires modifying the HTML and CSS files, but primarily the JavaScript file.

The main app's functionality can be found in the `js/app.js` and additional `js/pushIn.js` file is
used to simulate a dolly-in or push-in effect on a div element.

To animate a scrolling to anchor links, I used the "smooth scroll" plugin using jsDelivr CDN.

More info on those functions can be found following the links given in the corresponding references below.  


## Project Components <a name="components"></a>

Main components of this project are the `index.html`, and `style.css` files used to design
the Website's static Front End and The main app's functionality can be found in the `app.js` file.
<ul>
<li> The Blog Website structure: index.html </li>
<li> Styling: style.css </li>
<li> Dynamic functionality: app.js </li>
</ul>

## Instructions<a name="instructions"></a>

When initially loading the page, a blue background with the page content and dynamically created navigation bar will show off.
No section is highlighted at this point. Active sections in view and related links are highlighted when scrolling or after clicking on the corresponding section reference on the navigation bar to clearly show the current active section. Paragraph's text will also change with active sections and scroll actions to give an illusion of perspective as objects grow/shrink. A floating button to smooth scroll back to the top of the page becomes visible when reaching section 4 and 5 and will move to the footer when scrolling up to the end. The scroll effect when pressing the button follows an Ease-In-Out pattern in which gradually increases in speed, peaks, and then gradually slows down. Once reaching the top of the page, no section will be highlighted and the text inside the paragraphs will shrink.

## Licensing, Authors, Acknowledgements<a name="licensing"></a>

<strong><em>Author:<em></strong> `Gustavo Cedeno` following recommendations and requirements from Udacity's
Front End Developer NanoDegree Program.
For authors and further information on the "Smooth Scroll and pushIn effects" check the references below.

Main Sources of Reference:
* [Udacity's Front End Developer ND](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)
* [W3C UI Events](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
* [Smooth Scroll](https://github.com/cferdinandi/smooth-scroll#global-settings)
* [pushIn Effect](https://github.com/nateplusplus/pushIn.js)
* [Selecting visible DOM elements](https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport)
* [Onscroll Event](https://www.w3schools.com/jsref/event_onscroll.asp)
# FEND: Landing Page Project
