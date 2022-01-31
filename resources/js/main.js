// Load Index.html

loadIndexHtml();

function loadIndexHtml(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './resources/snippets/index-snippet.html', true);
    xhr.onload = function(){
        if(this.readyState = 200){
            let res = this.responseText;
            // console.log(res);
            document.getElementById('main-data').innerHTML = res;
            loadGameSnippet();
            
        }else {
            console.log("Index Html - Error")
        }
    }

    xhr.send();
}

function loadGameSnippet(){
    const start = document.querySelector('.start-btn');
    const mainContent = document.querySelector('.main-content');


    start.addEventListener('click', function(){
        let gamefetch = new XMLHttpRequest();
        gamefetch.open('GET', './resources/snippets/game-snippet.html', true);
        gamefetch.onload = function(){
            if(this.readyState = 200){
                let gameRes = this.responseText;
                // console.log(gameRes);

                document.getElementById('main-data').innerHTML = gameRes;
                setTimeout(() => {
                LoadGameHtml();  
                            
                }, 500);

            }else {
                console.log('Game Fetch - Error');
            }
        }
        gamefetch.send();


    });
};