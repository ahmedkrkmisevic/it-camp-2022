// primer sa intervjua.
const promise = new Promise((resolve, reject) => {
    resolve();
});

promise
    .then(() => {
        promise.then(() => {
            console.log("2");
        })
        console.log("1");
    });
promise.then(() => {
    console.log("3");
});
    // prvo se izvrsavaju sve sihrone radnje unutar svih promisa a onda dolaze
    // na redu asihrone operacije.
    //1
    //3
    //2