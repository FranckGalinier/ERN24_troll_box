//on récupère notre div square

const square = document.getElementById('square');
document.body.style.backgroundColor = 'Black';

//----------------le style du carré----------------

square.style.width = '100px';
square.style.height = '100px';
square.style.backgroundColor = 'green';
square.style.color = 'white';
square.style.position = 'absolute';
square.style.textAlign = 'center';
square.style.lineHeight = '150 px';
square.innerHTML = 'c\'est pas là qu\'il faut cliquer !! ';
square.style.cursor = 'pointer';
square.style.borderRadius = '30px';
square.style.justifyContent = 'center';
square.style.display = 'flex';
square.style.alignItems = 'center';

//fonction qui crée un nbre aléatoire entre un min et un max

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

//fonction pour déplacer le carré dans une position aléatoire

function mouvSquare() {

    // largeur de l'écran - largeur du carré
    const screenWidth = window.innerWidth - 100;
    // hauteur de l'écran - hauteur du carré

    const screenHeight = window.innerHeight - 100;

    //Déterminer une largeur aléatoire par rapport à l'écran
    let newLeft = getRandomNumber(0, screenWidth);

    //Déterminer une hauteur aléatoire par rapport à l'écran
    let newTop = getRandomNumber(0, screenHeight);

    // on donne les valeurs de top et de left à notre carré
    square.style.left = newLeft + 'px';
    square.style.top = newTop + 'px';
}

//on crrée l'évènement
square.addEventListener('mouseover', () => {
    setTimeout(mouvSquare, 100);
})
timer.style.alignItems = 'center';

square.addEventListener('click', () => {
    alert('Perdu !!');
})


//Timer

// const departMinutes = 0
// let temps = departMinutes * 60

// const timerElement = document.getElementById("timer")

// setInterval(() => {
//     let minutes = parseInt(temps / 60, 10)
//     let secondes = parseInt(temps % 60, 10)

//     minutes = minutes < 10 ? "0" + minutes : minutes
//     secondes = secondes < 10 ? "0" + secondes : secondes

//     timerElement.innerText = `${minutes}:${secondes}`
//     temps = temps <= 0 ? 0 : temps - 1
// }, 1000)


// secondes écoulées
let secondes = 0;

// élément où afficher le décompte
let para = document.getElementById("timer");

// lance l'exécution de la fonction à toutes les secondes
let chrono = window.setInterval(tictictic, 2000);

function tictictic() {
    secondes++;
    para.innerHTML = secondes;
}
timer.style.width = '100px';
timer.style.height = '100px';
timer.style.backgroundColor = 'red';
timer.style.borderRadius = '50px'
timer.style.justifyContent = 'center';
timer.style.display = 'flex';
timer.style.alignItems = 'center';
timer.style.color = 'yellow';
timer.style.cursor = 'pointer';

document.getElementById('timer').addEventListener("click", () => {
    tictictic();
})