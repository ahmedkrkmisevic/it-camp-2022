const stringovi = (A, B) => {
    const duzina = A.length > B.length ? A.length : B.length;
    let C = ""
    for (let i = 0; i <= duzina - 1; i++) {
        if (A[i] !== undefined && B[i] !== undefined) {
            C += A[i] + B[i];
        } else if (A[i] === undefined) {
            C += B[i];
        } else if (B[i] === undefined) {
            C += A[i];
        }
    }
    return C;
};
console.log(stringovi("Pera", "sladoled"));
console.log(stringovi("ovo je sada duzi string ", "sladoled"));