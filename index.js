const mobileMenu = document.querySelector('.mobile-menu-btn');
const cartBtn = document.querySelector('.cart');
const deleteBtn = document.getElementById('delete-btn');
const prevBtns = document.getElementsByClassName('prev-btn');
const nextBtns = document.getElementsByClassName('next-btn');
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const addBtn = document.getElementById('add-to-cart');
const mainImgFirst = document.getElementsByClassName('first-img');
const imgList1 = document.querySelector('.image-list1');
const thumbnails1 = imgList1.getElementsByClassName('thumbnail');
const imgList2 = document.querySelector('.image-list2');
const thumbnails2 = imgList2.getElementsByClassName('thumbnail');
const selectedImg = document.querySelector('.selected-image-main');
const closeBtnLightbox = document.getElementById('close-btn-lightbox');
const overlay = document.querySelector('.overlay');
const closeBtnMenu = document.getElementById('close-btn-menu')
const quantity = document.getElementById('quantity');

let imgIndex = 1;
let itemAmount = 0;


function showImg(i) {
    if(i === 1){
        for(let j=0; j<mainImgFirst.length; j++){
            mainImgFirst[j].style.marginLeft = "0";
        };
    } else if(i === 2){
        for(let j=0; j<mainImgFirst.length; j++){
            mainImgFirst[j].style.marginLeft = "-100%";
        };
    }
    else if(i === 3){
        for(let j=0; j<mainImgFirst.length; j++){
            mainImgFirst[j].style.marginLeft = "-200%";
        };
    }
    else if(i === 4){
        for(let j=0; j<mainImgFirst.length; j++){
            mainImgFirst[j].style.marginLeft = "-300%";
        };
    }

    for(let j=0; j<thumbnails1.length; j++){
        if(thumbnails1[j].classList.contains('selected')){
            thumbnails1[j].classList.remove('selected');
            thumbnails2[j].classList.remove('selected');
        }
    }
    thumbnails1[i-1].classList.add('selected');
    thumbnails2[i-1].classList.add('selected');
}

for(let i=0; i<prevBtns.length; i++){
    prevBtns[i].addEventListener('click', () => {
        imgIndex--;
        if(imgIndex < 1) imgIndex = 4;
        // console.log("prev btn", imgIndex);
        showImg(imgIndex);
    });
}

for(let i=0; i<nextBtns.length; i++){
    nextBtns[i].addEventListener('click', () => {
        imgIndex++;
        if(imgIndex > 4) imgIndex = 1;
        // console.log("next btn", imgIndex);
        showImg(imgIndex);
    });
}

selectedImg.addEventListener('click', ()=> {
    overlay.style.display = "block";
    document.querySelector('.lightbox-thumbnail-wrapper').style.display = "flex";
})

closeBtnLightbox.addEventListener('click', () => {
    overlay.style.display = "none";
    document.querySelector('.lightbox-thumbnail-wrapper').style.display = "none";
})


for(let i=0; i<thumbnails1.length; i++){
    thumbnails1[i].addEventListener('click', () => {
        imgIndex = i+1;
        showImg(imgIndex);
    })
    thumbnails2[i].addEventListener('click', () => {
        imgIndex = i+1;
        showImg(imgIndex);
    })
}


mobileMenu.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "block";
    overlay.style.display = "block";
})
closeBtnMenu.addEventListener('click', () => {
    document.querySelector('.mobile-menu').style.display = "none";
    overlay.style.display = "none";
})


minusBtn.addEventListener('click', () => {
    let count = quantity.innerText
    count --;
    if(count < 0) count = 0;
    quantity.innerText = `${count}`;
})
plusBtn.addEventListener('click', () => {
    let count = quantity.innerText
    count ++;
    quantity.innerText = `${count}`;
})
addBtn.addEventListener('click', () => {
    itemAmount += Number(quantity.innerText);
    quantity.innerText = "0";
    let totalPrice = itemAmount*125;
    //console.log(itemAmount);
    if(itemAmount>0){
        document.getElementById('quantity-alert').innerHTML = `${itemAmount}`;
        document.getElementById('quantity-alert').style.display = 'block';
        document.querySelector('.empty-cart').style.display = "none";
        document.querySelector('.product-checkout').style.display = "block";
        document.getElementById('price').innerHTML = `$125.00 x ${itemAmount}`;
        document.getElementById('total').innerHTML = `$${totalPrice}.00`;
    }
})
cartBtn.addEventListener('click', () => {
    document.querySelector('.cart-content-wrapper').classList.toggle('active');
})
deleteBtn.addEventListener('click', () => {
    document.querySelector('.empty-cart').style.display = "flex";
    document.querySelector('.product-checkout').style.display = "none";
    document.getElementById('quantity-alert').style.display = 'none';
    itemAmount = 0;
})