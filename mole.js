// Write your JS here.
// window.addEventListener('DOMContentLoaded', () => {

//     setInterval(() => {
//         const moleHeads = document.querySelectorAll('.wgs__mole-head');
//         for (let moleHead of moleHeads) {
//             moleHead.classList.toggle('wgs__mole-head--hidden');
//         }
//     }, 1000);

// });
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function popUpRandomMole() {
    let moles =document.querySelectorAll(".wgs__mole-head");
    let i = getRandomIntInclusive(0,7);
    let mole = moles[i];
    mole.classList.remove("wgs__mole-head--hidden");

    setTimeout(() => {
        hideMole(mole)
    }, 1000);
}

function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(() => {
        popUpRandomMole();
    }, 1000);
}

window.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        popUpRandomMole();
    }, 0)
})
