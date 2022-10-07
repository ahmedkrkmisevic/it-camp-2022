const range = () => {
    let x1 = +prompt("unesite x koordinate tacke a:")
    let y1 = +prompt("unesite y koordinate tacke :a")
    let x2 = +prompt("unesite x koordinate tacke b:")
    let y2 = +prompt("unesite x koordinate tacke b:")
    const rastojanje = Math.sqrt(math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    const rastkon = +rastojanje.toFixed(2)
    return `rastojanje izmedju tacke a i tacke b je :${rastkon}`
};
console.log(range());