const hex=[1,2,3,4,5,6,7,8,9,"A","B","C","E","D","F"];

let btn = document.getElementById('btn');
let color=document.querySelector(".color")
btn.addEventListener('click',function(){
   
    let hashColor="#"
    for(let i=0;i<6;i++){
     
        hashColor+=hex[getRandomNumber()]
    }
    color.textContent=hashColor
    document.body.style.background=hashColor
})

function getRandomNumber(){
   return Math.floor(Math.random()*hex.length)
}