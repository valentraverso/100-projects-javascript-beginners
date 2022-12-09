let buttonChangeColor = document.getElementById('exerciseTwoBtn');
buttonChangeColor.addEventListener('click', randomBackgroundColor);

function randomBackgroundColor(){
    var result           = '';
    var characters       = 'ABCDEFG0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const mainFirst = document.getElementById('exerciseTwo');
    mainFirst.style.background = `#${result}`;

    const hexPrint = document.getElementById('hexPrint');
    hexPrint.innerText = `#${result}`;
    console.log(result)
}