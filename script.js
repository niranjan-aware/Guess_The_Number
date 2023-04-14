'use strict';

let rNumber=Math.trunc(Math.random()*20)+1;
console.log(rNumber);



document.querySelector('.number').textContent=rNumber;

let highsc=20;
let maxscore=0;
// console.log(document.querySelector('.message').textContent);
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    // console.log(guess,typeof guess);
if(highsc>1){

    //when there is no input
    if(!guess){
        (document.querySelector('.message').textContent)='No Number';
    }

    //when you win the game
    else if(guess===rNumber){
        if(maxscore<highsc){
            (document.querySelector('.highscore').textContent)=highsc;
            maxscore=highsc;
        }
        else{
            (document.querySelector('.highscore').textContent)=maxscore;
        }
        (document.querySelector('.message').textContent)='You Are Correct!';
        (document.querySelector('body').style.backgroundColor)='#60b347';

        (document.querySelector('.number').style.width)='30rem';
    }

    //when guess is high
    else if(guess>rNumber){
        highsc--;
        (document.querySelector('.score').textContent)=highsc;
        (document.querySelector('.message').textContent)='Too High!';
    }

    //when guess is low
    else if(guess<rNumber){
        highsc--;
        (document.querySelector('.score').textContent)=highsc;
        (document.querySelector('.message').textContent)='Too Low!';
    }
    else{
        highsc--;
        
    }
}
else{
    (document.querySelector('.message').textContent)='You Lost The Game!';
}
});


document.querySelector('.again').addEventListener('click',function(){
     highsc=20;
     rNumber=Math.trunc(Math.random()*20)+1;
     (document.querySelector('.number').style.width)='15rem';
     (document.querySelector('.number').textContent)=rNumber;
     (document.querySelector('.score').textContent)=highsc;
    //  (document.querySelector('.highscore').textContent)=0;
     (document.querySelector('.message').textContent)='Start guessing...';
     (document.querySelector('body').style.backgroundColor)='#222';
     (document.querySelector('.guess').value)='';
}); 

