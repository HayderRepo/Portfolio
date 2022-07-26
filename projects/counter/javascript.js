let value = document.querySelector('.number');
let count=0;
let btns=document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
     const   styles = e.currentTarget.classList;

     if(styles.contains("decrease")){
         count--;
         value.textContent=count
     }

     else if (styles.contains('increase')){
         count++;
         value.textContent=count;
     }

     else if(styles.contains('reset')){
         count=0;
         value.textContent=count;
     }

     if(count>0){
         value.style.color='green'
     }
     else if(count<0){
         value.style.color='red'
     }

     else if(count===0){
         value.style.color='black'
     }

    })
})