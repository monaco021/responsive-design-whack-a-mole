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
    let moles = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    let i = getRandomIntInclusive(0, moles.length - 1);
    console.log(moles)
    let mole = moles[i];
    mole.classList.remove("wgs__mole-head--hidden");
    console.log(mole)

    setTimeout(() => {
        hideMole(mole)
    }, 3000);
}

function hideMole(mole) {
    mole.classList.add("wgs__mole-head--hidden");
    setTimeout(() => {
        popUpRandomMole();
    }, 1000);
}

window.addEventListener("DOMContentLoaded", (event) => {
    let moles = document.querySelectorAll(".wgs__mole-head")
    moles.forEach(mole => {
        mole.addEventListener("click", (event) => {
            mole.classList.add("wgs__mole-head--hidden", "wgs__mole-head--whacked");
        })
    })



    setTimeout(() => {
        popUpRandomMole();
    }, 0)
})
