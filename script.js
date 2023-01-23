let ham = document.getElementById("ham");
let ul = document.getElementById("ul");
let search = document.getElementById("search-box");
let nav = document.getElementById("nav");

// skills section
let skillRotate = document.getElementById("rotate");
let items = document.querySelectorAll(".item");

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

const rotateItem = (angle, item) => {
  setInterval(() => {
    if (angle == -360) {
      angle = 0;
    }
    item.style.transform = `rotate(${angle}deg)`;
    angle--;
  }, 100);
};

rotate(0);
console.log(items)
// items.map(item =>{
//   rotateItem(2, item)
// })

items.forEach(item=>{
  rotateItem(5,item);
})