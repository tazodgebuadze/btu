const images = [
'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900',
'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=900',
'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=900',
'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=900'
];

let current = 0;
let quantity = 0;
let cart = 0;

const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');

function updateImage() {
mainImage.src = images[current];

thumbs.forEach((thumb,index)=>{
thumb.classList.toggle('active', index===current);
});
}

document.querySelector('.next').onclick = () => {
current = (current + 1) % images.length;
updateImage();
};

document.querySelector('.prev').onclick = () => {
current = (current - 1 + images.length) % images.length;
updateImage();
};

thumbs.forEach((thumb,index)=>{
thumb.addEventListener('click',()=>{
current=index;
updateImage();
});
});

const quantityEl = document.getElementById('quantity');

document.getElementById('plus').onclick=()=>{
quantity++;
quantityEl.textContent=quantity;
};

document.getElementById('minus').onclick=()=>{
if(quantity>0){
quantity--;
quantityEl.textContent=quantity;
}
};

const badge=document.querySelector('.cart-badge');
const cartContent=document.querySelector('.cart-content');

document.getElementById('addCart').onclick=()=>{

if(quantity===0) return;

cart += quantity;

badge.style.display='block';
badge.textContent=cart;

cartContent.innerHTML=`
<p>Fall Limited Edition Sneakers</p>
<p>$125 x ${cart} = $${125 * cart}</p>
<button id="deleteItem">Delete</button>
<button>Checkout</button>
`;

quantity=0;
quantityEl.textContent=0;

document.getElementById('deleteItem').onclick=()=>{
cart=0;
badge.style.display='none';
cartContent.innerHTML='Your cart is empty.';
};
};

const cartBtn=document.getElementById('cartBtn');
const dropdown=document.getElementById('cartDropdown');

cartBtn.onclick=()=>{
dropdown.style.display=
dropdown.style.display==='block'
? 'none'
: 'block';
};

const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');

mainImage.onclick=()=>{
if(window.innerWidth > 768){
lightbox.style.display='flex';
lightboxImage.src=mainImage.src;
}
};

document.getElementById('closeLightbox').onclick=()=>{
lightbox.style.display='none';
};

const menu=document.querySelector('.mobile-menu');
const overlay=document.querySelector('.overlay');

document.getElementById('menuBtn').onclick=()=>{
menu.classList.add('open');
overlay.style.display='block';
};

document.getElementById('closeMenu').onclick=()=>{
menu.classList.remove('open');
overlay.style.display='none';
};

overlay.onclick=()=>{
menu.classList.remove('open');
overlay.style.display='none';
};
