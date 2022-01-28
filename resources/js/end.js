
const mainScore = document.getElementById('score');
const scoreOverlay = document.querySelector('.score-overlay');
const restart = document.querySelector('.restart');


window.addEventListener('DOMContentLoaded', loadFinalScore);

function loadFinalScore(){
    let finalScore = localStorage.getItem('mainScore');        

    // show score
    mainScore.textContent = finalScore;
    scoreOverlay.style.background = `conic-gradient(
        var(--secondary-blue) ${finalScore}%,
        var(--primary-blue) ${finalScore}%
    )`;
}

restart.addEventListener('click', function(){
    window.location.assign('/index.html');
})


