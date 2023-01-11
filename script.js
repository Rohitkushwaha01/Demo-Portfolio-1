let ham = document.getElementById("ham");
let ul = document.getElementById("ul");
let search = document.getElementById("search-box");
let nav = document.getElementById("nav");

// skills section
let skillRotate = document.getElementById("rotate");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");

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

const rotateItem1 = (angle) => {
  setInterval(() => {
    if (angle == -360) {
      angle = 0;
    }
    item1.style.transform = `rotate(${angle}deg)`;
    angle--;
  }, 100);
};

const rotateItem2 = (angle) => {
    setInterval(() => {
      if (angle == -360) {
        angle = 0;
      }
      item2.style.transform = `rotate(${angle}deg)`;
      angle--;
    }, 100);
};
const rotateItem3 = (angle) => {
    setInterval(() => {
      if (angle == -360) {
        angle = 0;
      }
      item3.style.transform = `rotate(${angle}deg)`;
      angle--;
    }, 100);
};

const rotateItem4 = (angle) => {
    setInterval(() => {
      if (angle == -360) {
        angle = 0;
      }
      item4.style.transform = `rotate(${angle}deg)`;
      angle--;
    }, 100);
};


rotate(0);
rotateItem1(2);
rotateItem2(2);
rotateItem3(2);
rotateItem4(2);