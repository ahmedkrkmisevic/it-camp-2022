function listPapira() {
    let sirina = + prompt("unesite sirinu papira");
    let duzina = + prompt("unesite duzinu papira");
    if (isNaN(sirina) || isNaN(duzina)) {
        return `sirina i duzina moraju biti brojevi `;
    } else if (sirina < 0 || sirina > 300) {
        return `sirina moze biti izmedju 0-300`;
    } else if (duzina < 0 || duzina > 300) {
        return `duzina mora biti izmedju 0-300`;
    } else {
        let ukupno = sirina * duzina;
        return `ukupna povrsina papira iznosi  ${ukupno}`

    }
}
console.log(listPapira());
