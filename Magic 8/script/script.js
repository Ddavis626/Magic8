/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

    document.querySelector('#ask').addEventListener('click', randomNumber);

    function randomNumber (){
      let number = Math.floor(Math.random() * 21 );
      
      
      
      if(number === 1){
        document.querySelector('#class').innerText = `It is certain.`
      }else if (number === 2){
        document.querySelector('#class').innerText = `It is decidedly so`
      }else if (number === 3){
        document.querySelector('#class').innerText = `Without a doubt`
      }else if (number === 4){
        document.querySelector('#class').innerText = `Yes definitely`
      }else if( number === 5){
        document.querySelector('#class').innerText = `You may rely on it`
      }else if (number === 6){
        document.querySelector('#class').innerText = `As I see it, yes`
      }else if(number === 7){
        document.querySelector('#class').innerText = `Most likely`
      }else if(number === 8){
        document.querySelector('#class').innerText = `Outlook good`
      }else if( number === 9){
        document.querySelector('#class').innerText = `Yes`
      }else if( number === 10){
        document.querySelector('#class').innerText = `Signs point to yes`
      }else if( number === 11){
        document.querySelector('#class').innerText = `Reply hazy, try again`
      }else if(number === 12){
        document.querySelector('#class').innerText = `Ask again later`
      }else if(number === 13){
        document.querySelector('#class').innerText = `Better not tell you now`
      }else if (number === 14){
        document.querySelector('#class').innerText = `Cannot predict now`
      }else if(number === 15){
        document.querySelector('#class').innerText = `Concentrate and ask again`
      }else if(number === 16){
        document.querySelector('#class').innerText = `Don't count on it`
      }else if(number === 17){
        document.querySelector('#class').innerText = `My reply is no`
      }else if(number === 18){
        document.querySelector('#class').innerText = `My sources say no`
      }else if(number === 19){
        document.querySelector('#class').innerText = `Outlook not so good`
      }else if(number === 20){
        document.querySelector('#class').innerText = `Very doubtful`
      }else{
        document.querySelector('#class').innerText = `Look within yourself`
      }
    }
    