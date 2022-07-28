const colors=['red','green','#f12345','rgba(122,132,144)'];

let btn =document.getElementById('btn');
let color=document.querySelector('.color');

btn.addEventListener('click',function(){
     let randomNumber=getRandomNumber();
     console.log(randomNumber)
    document.body.style.background=colors[randomNumber]
   color.textContent=colors[randomNumber]
    

})

function getRandomNumber(){
  return Math.floor(Math.random()*colors.length) 
}