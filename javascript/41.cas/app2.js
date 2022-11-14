// Napraviti objekat sa sledecim svojstvima:
//1.firstname,
//2.lastname,
//3.language,
//4.setlanguage - metoda za setovanje jezika

const persona = {
    firstname: "Ahmed",
    lastname: "krkmisevic",
    language: "italijanski",
    nickname: "",
    SetLanguage: function (jezik) {
        this.language = jezik;
        return this.language;
    },
    SetNickname: function () {
        let prvadva = this.firstname[0].toUpperCase() + this.firstname[1].toLowerCase
        let drugadva = this.lastname[0].toLowerCase() + this.lastname[1].toLowerCase
        return prvadva + drugadva;
    }

};
console.log(persona.SetNickname());
//     SetLanguage: function (jezik) {
//         this.language = jezik
//         return this.language
//     },
//     setnickName: function (nik) {
//         this.nickname = xfg
//         return this.nickname
//     }
// };

// console.log(persona.SetLanguage("engleski"));
