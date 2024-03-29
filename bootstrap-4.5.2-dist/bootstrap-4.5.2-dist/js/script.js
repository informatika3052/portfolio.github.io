const links = document.querySelectorAll(".navbar a")

links.forEach(function (i) {
    i.addEventListener('click', clickHandler);

});

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });

}
const color = [
    '#2196f3',
    '#e91e63',
    '#ffeb3b',
    '#74ff1d'
]


function createSquare() {
    const section = document.querySelector('.skill-a');
    const square = document.createElement('p');

    let size = Math.random() * 50;

    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = color[Math.floor(Math.random() * color.length)];

    square.style.background = bg;


    section.appendChild(square);
    setTimeout(() => {
        square.remove()

    }, 5000)

}

setInterval(createSquare, 150);


// button scroll top

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";


    } else {
        mybutton.style.display = "none";
    }

}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    scrollTo({
        behavior: "smooth"
    });

}
// GSAP JS

// let plane1 = document.querySelector('.plane1');
// plane1 = gsap.timeline();

// plane1.to(".plane1 ", { duration: 2, x: '1400px', y: '100px', ease: 'linier' });



// var repeat = plane1.repeat();
// plane1.repeat(5).yoyo(false).play();

