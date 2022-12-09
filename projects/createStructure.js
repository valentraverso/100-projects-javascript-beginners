let mainStructure = document.getElementById('mainStructure');

let projectNumber = 0;

function createExercise() {
let templateBody;

    switch (projectNumber) {
        case 1:
            templateBody = `<div id='exerciseOne'>
    <button id='exerciseOneBtn'>Change Background</button>
    </div>`;
            break;
        case 2:
            templateBody = `<div id='exerciseTwo'>
            </div>`;
            break;
    }

    mainStructure.insertAdjacentHTML('beforeend', templateBody);
}