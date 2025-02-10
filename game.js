const choices=["rock","paper","scissors"];
function getComputerChoice(){
    const getIndex= Math.floor(Math.random()*choices.length);
    return choices[getIndex];
}
let c=0;
let l=0;
// console.log(getComputerChoice());
function determineWinner(playerchoice,ComputerChoice){
    if (playerchoice==ComputerChoice){
        console.log("Its a Draw!");
    }
    else{
        if (
            (playerchoice=='rock' && ComputerChoice=='paper') ||
            (playerchoice=='paper' && ComputerChoice=='scissors')||
            (playerchoice=='scissors' && ComputerChoice=='rock')
        ){
            l+=1;
            console.log(`You Lose!`);
        }
        else{
            c+=1;
            console.log('You Win!');
        }
    }
    console.log(`Victories : ${c} Loses : ${l}`);
}
determineWinner('rock',getComputerChoice());
function Play(playerchoice){
    determineWinner(playerchoice,getComputerChoice());
}