type Scientist = {
    name: string,
    age: number,
    henchmen: number,
};

let evilScientist: Scientist[] = [
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
 
let sourze = document.querySelector("content") as HTMLElement; 


let showScientist = function() {
    let lenght = evilScientist.length;

    for(let i = 0; i > lenght; i++) {
        let div1 = document.createElement('div') as HTMLDivElement;
        div1.className = "show";
        div1.innerHTML = `${evilScientist[i].name}`;
        sourze.append(div1);
    }
    
}


const inputElement = document.querySelector("input") as 
HTMLInputElement;
const buttonElement = document.querySelector("button") as HTMLButtonElement;

// buttonElement.addEventListener("click", function (event) {

// })
