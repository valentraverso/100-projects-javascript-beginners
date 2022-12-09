let buttonChangeColor = document.getElementById('exerciseOneBtn');
buttonChangeColor.addEventListener('click', changeBackgroundColor);

let i = 0;
function changeBackgroundColor(){
    const mainFirst = document.getElementById('exerciseOne');
    
    let color = ['blue', 'green', 'red', 'yellow', 'brown', 'black', 'white'];

    if(i === 7){
        i = 0;
    }

    mainFirst.style.backgroundColor = color[i];

    i++;
}