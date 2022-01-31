
function loadEndSnippet(){
    let endfetch = new XMLHttpRequest();
    endfetch.open('GET', './resources/snippets/end-snippet.html', true);
    endfetch.onload = function(){
        if(this.readyState = 200){
            let endRes = this.responseText;
            // console.log(endRes);

            document.getElementById('main-data').innerHTML = endRes;
            loadEndHtml();

        }else {
            console.log('Game Fetch - Error');
        }
    }
    endfetch.send();
};

function loadEndHtml() {
    const mainScore = document.getElementById('end__score');
    const scoreOverlay = document.querySelector('.end__score-overlay');
    const restart = document.querySelector(".restart");
  
  
    function loadFinalScore() {
      let finalScore = localStorage.getItem("mainScore");
  
      // show score
      mainScore.textContent = finalScore;
      scoreOverlay.style.background = `conic-gradient(
          var(--secondary-blue) ${finalScore}%,
          var(--primary-blue) ${finalScore}%
      )`;
    }
    loadFinalScore(); 
    restart.addEventListener('click', function(){
        loadIndexHtml();
    });
}