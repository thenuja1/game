
const skjemaSpill = document.querySelector("#skjemaSpill");
const inpSpill = document.querySelector("#inpSpill");
const liste = document.querySelector("#liste");

function registrer(evt) {
    evt.preventDefault();
    const spill = inpSpill.value;
    liste.innerHTML += `
        <li>${spill}</li>
    `;
    skjemaSpill.reset();
}

skjemaSpill.addEventListener("submit", registrer);