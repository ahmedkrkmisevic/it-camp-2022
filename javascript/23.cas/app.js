const ograda = function () {
    const d = parseInt(prompt("unesite duzinu terena"))
    const s = parseInt(prompt("unesite sirinu terena"))
    const r = parseInt(prompt("unesite rastojanje izmedju ivice terena i ograde"))

    if (isNaN(d) || isNaN(s) || isNaN(r)) {
        return `unete vrednosti moraju biti brojevi.`
    } else if (d < 90 || d > 120) {
        return `duzina terena mora biti u segmentu [90,120]`
    } else if (s < 45 || s > 90) {
        return `sirina mora  biti u segmentu [45,90]. `
    } else if (r < 2 || r > 10) {
        return `rastojanje mora biti u segentu [2,10].`
    } else {
        return `za ogradjivanje terena datih dimenzija je potrebn0 ${ograda}metara.`
    }
};
console.log(ograda());