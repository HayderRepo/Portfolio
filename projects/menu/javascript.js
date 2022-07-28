const menu=[
    {
        id:1,
        title:"buttermlk pancakes",
        category:"breakfast",
        price:15,
        img:"img/pexels-daria-shevtsova-1095550.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
        id:2,
        title:"diner double",
        category:"lunch",
        price:15,
        img:"img/pexels-ella-olsson-1334129.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
        id:3,
        title:"fruitse",
        category:"diner",
        price:15,
        img:"img/pexels-ella-olsson-1334131.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
        id:4,
        title:"healthy male",
        category:"breakfast",
        price:15,
        img:"img/pexels-ella-olsson-1640771.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
        id:5,
        title:"pizza",
        category:"lunch",
        price:20,
        img:"img/pexels-ella-olsson-1640777.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
        id:6,
        title:"stack",
        category:"diner",
        price:40,
        img:"img/pexels-ella-olsson-3026801.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
        id:7,
        title:"egg with butter",
        category:"breakfast",
        price:15,
        img:"img/pexels-ella-olsson-3026804.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
        id:8,
        title:"chicken",
        category:"lunch",
        price:20,
        img:"img/pexels-ella-olsson-3026809.jpg",
        desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
    },
    {
      id:9,
      title:"drinks",
      category:"drinks",
      price:20,
      img:"img/drinks.jpg",
      desc:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio'
  },
];

const sectionCenter=document.querySelector(".section-center");
const container=document.querySelector('.btn-container')
const filterBtns=document.querySelectorAll('.filter-btn');

  //load items
window.addEventListener('DOMContentLoaded',function(){
 displayMenuItems(menu);

 const categories=menu.reduce(function(values,item){
   if(!values.includes(item.category)){
     values.push(item.category);
   }
   return values
 },['all'])

 const categoryBtn=categories.map(function(category){
   return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
 }).join("");

 

 container.innerHTML=categoryBtn;
 const filterBtns=document.querySelectorAll('.filter-btn');

   //filter items

filterBtns.forEach(function(btn){
  btn.addEventListener("click",function(e){
   const category=e.currentTarget.dataset.id;
   const menuCategory=menu.filter(function(menuItem){
     //console.log(menuItem.category)
     if(menuItem.category === category){
       return menuItem;
     }
   });
  //  console.log(menuCategory)
if(category === "all"){
  displayMenuItems(menu);

}else {
 displayMenuItems(menuCategory)
}
  });
});
});





function displayMenuItems(menuItems){
  let displayMenu=menuItems.map(function(item){
    
    return `
    <article class="menu-items">
        <img
          class="photo"
          src=${item.img}
          alt=""
        />
        <div class="item-info">
          <header class="info-header">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price} $</h4>
        </header>
        <div class="line-brake"></div>
          <p>
           
          ${item.desc}
            
          </p>
        </div>
        
      </article>`;
  });
  displayMenu=displayMenu.join('');
  sectionCenter.innerHTML=displayMenu;
};




