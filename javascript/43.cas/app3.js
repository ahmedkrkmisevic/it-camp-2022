const godine = [
    { starost: 19 },
    { starost: 19 },
    { starost: 19 },
    { starost: 18 },
    { starost: 16 },
    { starost: 18 },
    { starost: 14 },
    { starost: 17 },
];
// napraviti novi niz(punoletni) koji ce sadrzati one elemente(objekte)

const punoletni = godine.filter((element) => element.starost > 17);
console.log(punoletni);