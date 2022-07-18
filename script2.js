let newdoc = "Modifying the DOM"

function changingtitle() {
    document.title = newdoc;
}

console.log(newdoc);

document.body.style.backgroundColor = "#FF69B4";

let arr = document.body.children;

for (let elem of arr) {
    console.log(elem);
  }