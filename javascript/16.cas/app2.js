const brojFlasa = function () {
    const zapreminajedne = +prompt("unesite zapreminu flase:")
    const ukupnakolicina = +prompt("unesite kolicinu limunade:")
    return Math.ceil(ukupnakolicina / zapreminajedne);
}
console.log(brojFlasa());
