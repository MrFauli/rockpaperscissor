const pos = ["Scissor", "Rock","Paper"];

let Winner = "a";
let Win = "a"
let ComScore = 0;
let PlayerScore = 0;
function getComputerChoice(pos){
    return pos[Math.floor(Math.random() * 3)]
}
function playRound(){
    let ErgebnisPlayer = prompt("Scissor, Rock, Paper")
    let ErgebnisComputer = getComputerChoice(pos);
   if(ErgebnisComputer.toUpperCase() == "ROCK" && ErgebnisPlayer.toUpperCase() == "SCISSOR"){
    Winner = "Computer"; }
    else if(ErgebnisComputer.toUpperCase() == "SCISSOR" && ErgebnisPlayer.toUpperCase() == "ROCK"){
        Winner = "Human"; }
    else if(ErgebnisComputer.toUpperCase() == "SCISSOR" && ErgebnisPlayer.toUpperCase() == "PAPER"){
             Winner = "Computer"; }
    else if(ErgebnisComputer.toUpperCase() == "PAPER" && ErgebnisPlayer.toUpperCase() == "SCISSOR"){
         Winner = "Human"; }
    else if(ErgebnisComputer.toUpperCase() == "PAPER" && ErgebnisPlayer.toUpperCase() == "ROCK"){
             Winner = "Computer"; }
    else if(ErgebnisComputer.toUpperCase() == "ROCK" && ErgebnisPlayer.toUpperCase() == "PAPER"){
         Winner = "Human"; }
    else{
        Winner = "Nobody";
    }
    if(Winner == "Human"){
          Win ="You Won! " + ErgebnisPlayer + " beats " + ErgebnisComputer;
          PlayerScore += 1;
    }
    else if(Winner == "Computer"){
        Win ="You Lose! " + ErgebnisComputer + " beats " + ErgebnisPlayer;
        ComScore += 1;
    }
    else{
        Win = "Nobody Wons!"
    }
    return Win
}
function playGame(){
    for ( let i = 0; i < 5; i++){
        console.log(playRound())
        
    }
    if(PlayerScore > ComScore){
        console.log("You Won " + PlayerScore+ " : " + ComScore);
    }
    else if(ComScore > PlayerScore){
        console.log("You Lose " + PlayerScore+ " : " + ComScore);
    }
    else{
        console.log("Nobody Wons "+ PlayerScore+ " : " + ComScore)
    }
}
playGame()


