const pos = ["Scissor", "Rock","Paper"];

let Winner = "a";
let Win = "a"
let ComScore = 0;
let PlayerScore = 0;
function getComputerChoice(pos){
    return pos[Math.floor(Math.random() * 3)]
}
function playRound(ErgebnisPlayer){
    
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
        Win = "Nobody Wons!";
    }
    return Win;
};
function playGame(ErgebnisPlayer){
    
    ergebnis_runde.textContent = playRound(ErgebnisPlayer);
    container.appendChild(ergebnis_runde);
    if(PlayerScore >= 5){
        punkte.textContent ="You  finally Won with " + PlayerScore+ " : " + ComScore;
        ComScore = 0;
        PlayerScore = 0;
    }
    else if(ComScore >=5){
        punkte.textContent ="Sorry, but you lost with " + PlayerScore+ " : " + ComScore;
        ComScore = 0;
        PlayerScore = 0;
    }
        else if(PlayerScore > ComScore){
        punkte.textContent ="You Won " + PlayerScore+ " : " + ComScore;

    }
    else if(ComScore > PlayerScore){
        punkte.textContent ="You Lose " + PlayerScore+ " : " + ComScore;
    }
    else{
        punkte.textContent ="Nobody Wons "+ PlayerScore+ " : " + ComScore;
    }
    container.appendChild(punkte);
    return ergebnis_runde;
};
 
const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissor_button = document.querySelector("#scissor");
const container = document.querySelector("#container");
let punkte = document.createElement("p");
    let ergebnis_runde = document.createElement("p");

    
rock_button.addEventListener("click", () => { 
    playGame("Rock");
});
paper_button.addEventListener("click", () => {
    playGame("Paper");
});
scissor_button.addEventListener("click", () => {
    playGame("Scissor");
});



