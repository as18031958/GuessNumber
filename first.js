let randomnumber=parseInt(Math.random()*100)+1
//  document.querySelector('.number').textContent = randomnumber ;

 console.log(randomnumber)
 let scores=100
 let highscores = 0;

document.querySelector('.check_btn').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

if(!guess){
    document.querySelector('.message').textContent = "😒No Number"

}else if(randomnumber === guess){
    document.querySelector('.message').textContent = "✔Correct Guess✔" 
    document.querySelector('body').style.backgroundColor = 'violet';  
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomnumber ;

    if(scores > highscores){
        highscores = scores;
        document.querySelector('.highscores').textContent = highscores;
    }

}else if(randomnumber > guess){
    if(scores > 1){
    document.querySelector('.message').textContent = "🔉🔉Too Low"
    scores--;
    document.querySelector('.scores').textContent = scores 
    
}else{
        document.querySelector('.message').textContent = "🧩🧩You last the game"
        document.querySelector('.scores').textContent = 0;
    }
}else if(randomnumber < guess){
    if( scores > 1){
    
    document.querySelector('.message').textContent = "🔊🔊Too High" 
    scores--; 
    document.querySelector('.scores').textContent = scores
    }else{
        document.querySelector('.message').textContent = "🧩🧩You last the game"
        document.querySelector('.scores').textContent = 0;
    }
}
const againButton = document.querySelector('.btn_again');
  
    // 2. Attach a click event handler
    againButton.addEventListener('click', () => {
      // 3. Restore initial values
      scores = 100;
      secretNumber = Math.trunc(Math.random() * 100) + 1;
  
      // Restore initial conditions
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.scores').textContent = scores;
      document.querySelector('.guess').value = '';
  
      // Restore background color and number width
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    });




})


