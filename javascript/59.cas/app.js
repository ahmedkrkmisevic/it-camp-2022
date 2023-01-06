var nekiElement = document.getElementById("nekiElement");
nekiElement.style.color = "red";
nekiElement.innerText = "Rodjen 25.06.2003";

var ime = document.getElementById("a");
ime.style.backgroundColor = "lightgreen";
ime.style.fontSize = "30px";
ime.innerText = "vahid gasanin";
// addEventListener

//ispis teksta iz prompta
var prazan = document.getElementById("prazan");
//prazan.innerText = prompt("Unesi sta ces da ti napisem(dzabe)");
prazan.innerText = "nestoooo";

//nature image
var slika1 = document.getElementById("nature");
slika1.style.borderRadius = "50%";
slika1.style.width = "300px";
slika1.style.height = "300px";

slika1.addEventListener("click", () => {
    slika1.style.display = "none";
    setTimeout(() => {
        slika1.style.display = "block";
    }, 2000);
});

console.log(slika1.getAttribute("src"));