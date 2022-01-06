let start = document.getElementById('start');
start.addEventListener('click', startgame);

let p1totall = 100
let p2totall = 100

let p1win = 1
let p2win = 1


function startgame() {
    console.log("game start");
    document.getElementById("start").style.display = "none";
    document.getElementById("p1").style.display = "block";
    document.getElementById("p2").style.display = "block";
    document.getElementById("con2").style.display = "block";
  
    let player1 = document.getElementById('player1')
    player1.addEventListener('click', p1power);

    let player2 = document.getElementById('player2')
    player2.addEventListener('click', p2power);

}


function p1power(){
    document.getElementById("p2h").innerHTML = p1totall;
    let kame = Math.floor(Math.random() * 6)
    console.log(kame)
    let score = p1totall - kame;
    p1totall = score

    if(p1totall <= 0){
        alert("player1 won click player1 button to refresh player2 score")
        document.getElementById("p1s").innerHTML = p1win; 
        let wins = p1win + 1
        p1win = wins
        p1totall = 100
        if(p1win >= 4){
            alert("player1 wins restart")
            document.getElementById("winner1").style.display = "block"
        }
    }
}


function p2power(){
    document.getElementById("p1h").innerHTML = p2totall;
    let kame = Math.floor(Math.random() * 6)
    console.log(kame)
    let score = p2totall - kame;
    p2totall = score

    if(p2totall <= 0){
        alert("player2 won click player2 button to refresh player1 score")
        document.getElementById("p2s").innerHTML = p2win; 
        let wins = p2win + 1
        p2win = wins
        p2totall = 100 
        if(p2win >= 4){
            alert("player2 wins restart")
            document.getElementById("winner2").style.display = "block"
        }
    }
}

