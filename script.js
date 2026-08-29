const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
