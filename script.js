let section1 = document.querySelector(".landing");
let section2 = document.querySelector(".skills");
let section3 = document.querySelector(".services");
let section4 = document.querySelector(".footer");

// NavBar
let ham = document.getElementById("ham");
let ul = document.getElementById("ul");
let search = document.getElementById("search-box");
let nav = document.getElementById("nav");

// skills section
let skillRotate = document.getElementById("rotate");
let items = document.querySelectorAll(".item");
let skillDisplay = document.querySelector(".skill-display");
let line = document.querySelectorAll('.line');
let heart = document.querySelector("#item9");

heart.addEventListener("click", ()=>{
    line[0].classList.toggle("line-increase-w")
    line[1].classList.toggle("line-increase-h")
    line[2].classList.toggle("line-increase-w")
    line[3].classList.toggle("line-increase-h")
})

// Event to toggle navigation
ham.addEventListener("click", () => {
  ul.classList.toggle("hidden");
  search.classList.toggle("hidden");
  nav.classList.toggle("trans");
});

// Function to rotate the skill section
const rotate = (angle) => {
  setInterval(() => {
    if (angle == 360) {
      angle = 0;
    }
    skillRotate.style.transform = `rotate(${angle}deg)`;
    angle++;
  }, 100);
};

// Function to rotate the items of skill section.
const rotateItem = (angle, item) => {
  setInterval(() => {
    if (angle == -360) {
      angle = 0;
    }
    item.style.transform = `rotate(${angle}deg)`;
    angle--;
  }, 100);
};

// Rotating the skills section element by calling function for each.
rotate(0);
items.forEach(item => {
  rotateItem(5, item);
})

// Revealing Section when scrolling 

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15 });

const reveal = function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
}

reveal(section2);
reveal(section3);
reveal(section4);