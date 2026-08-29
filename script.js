const btn=document.querySelector('.menu-btn');
const links=document.querySelector('.nav-links');
if(btn&&links){btn.addEventListener('click',()=>links.classList.toggle('open'));}
const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
const machineField=document.querySelector('#machine-id');
if(machineField){const machine=new URLSearchParams(window.location.search).get('machine');if(machine)machineField.value=machine;}
const footerBrand=document.querySelector('.footer-grid>div:first-child');
if(footerBrand){
  const instagram=document.createElement('a');
  instagram.className='instagram-link';
  instagram.href='https://www.instagram.com/alfabrightcommerce/';
  instagram.target='_blank';
  instagram.rel='noopener noreferrer';
  instagram.setAttribute('aria-label','Follow Alfa Bright Commerce on Instagram');
  instagram.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4.25"></circle><circle class="instagram-dot" cx="17.4" cy="6.7" r="1"></circle></svg><span>Follow us on Instagram</span>';
  footerBrand.appendChild(instagram);
}
