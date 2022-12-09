let mainStructure = document.getElementById('mainStructure');

let projectNumber = 2;

function createExercise() {
let templateBody;

    switch (projectNumber) {
        case 1:
            templateBody = `<div id='exerciseOne'>
    <button id='exerciseOneBtn'>Change Background Color</button>
    </div>`;
            break;
        case 2:
            templateBody = `<div id='exerciseTwo'>
            <p id='hexPrint'></p>
            <button id='exerciseTwoBtn'>Hex Background Color</button>
            </div>`;
            break;
    }

    mainStructure.insertAdjacentHTML('beforeend', templateBody);
}