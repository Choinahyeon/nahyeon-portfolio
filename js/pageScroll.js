

const elImg = document.querySelectorAll('li');
let elHei;
let winHei = window.innerHeight;

window.addEventListener('scroll',function(){
    for(let i=0; i<elImg.length; i++){
        elHei = elImg[i].offsetTop;

        if(elHei-winHei <= window.scrollY){
            elImg[i].classList.add('active');
        }
    }
});

