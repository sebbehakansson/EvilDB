"use strict";
let evilScientist = [
    {
        name: "Hasse",
        age: 4,
        henchmen: 12,
    },
    {
        name: "Gunvald",
        age: 20,
        henchmen: 1,
    },
    {
        name: "Bosse",
        age: 64,
        henchmen: 42,
    },
];
let sourze = document.querySelector("content");
let showScientist = function () {
    let lenght = evilScientist.length;
    for (let i = 0; i > lenght; i++) {
        let div1 = document.createElement('div');
        div1.className = "show";
        div1.innerHTML = `${evilScientist[i].name}`;
        sourze.append(div1);
    }
};
const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
