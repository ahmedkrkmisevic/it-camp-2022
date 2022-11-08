const nesto = [12, 13, 14, 15, 16, 117]
const nesto2 = nesto.filter((element) => element > 20)
console.log(nesto2);

const ime = ["ahmed"]
const ime2 = ime.map((element) => element + " krkmisevic")
console.log(ime2);

const voce = ["jabuka", "kruska", "jagoda", "mandarina", "breskva"]
const voce2 = voce.findIndex((element) => element + 1)
console.log(voce2);