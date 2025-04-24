fetch('./data/data.json')
.then(res => res.json())
.then(data => callback(data));

function callback(data){
    const elBtn = document.querySelectorAll('.btn'),//버튼 전체
          elLogo = document.querySelector('.logo'),
          elUl = document.querySelector('.items');//ul
    let img, tit, day, tagList = '';

    //ul 태그안에 데이터 전체 넣기
    data.items.forEach(function(k){
        img = k.image;
        tit = k.title;
        day = k.days;
        tagList += `<li class="item">
                        <img src="${img}">
                        <span class="item__description">${tit}, ${day}</span>
                    </li>`;
    });
    elUl.innerHTML = tagList;

    //logo 클릭 시 전체상품 나오기
    elLogo.addEventListener('click',function(){
        tagList = '';
        data.items.forEach(function(v){
            img = v.image;
            tit = v.title;
            day = v.days;
            tagList += `<li class="item">
                            <img src="${img}">
                            <span class="item__description">${tit}, ${day}</span>
                        </li>`;
        });
        elUl.innerHTML = tagList;
    });

    //버튼 클릭
    for(let i=0; i<elBtn.length; i++){
        elBtn[i].addEventListener('click',function(){ //버튼 전체 클릭 이벤트
            tagList = ''
            if(this.dataset.key == 'category'){ //key값이 color와 같다면
                for(let z=0; z<data.items.length; z++){
                    if(data.items[z].category == this.dataset.value){ //json파일의 color 값과 
                        load(z);  //함수실행                       //클릭한것의 value 값이 같다면
                    };
                };
            }
            // else if(this.children[0].dataset.key == 'type'){ //key값이 type과 같다면
            //     for(let z=0; z<data.items.length; z++){
            //         if(data.items[z].type == this.children[0].dataset.value){
            //             load(z); //함수실행
            //         };
            //     };
            // };
            elUl.innerHTML = tagList; //ul태그안에 넣기
        });
    };

    function load(z){
        img = data.items[z].image;     
        tit = data.items[z].title;       
        day = data.items[z].days;     
        tagList += `<li class="item">
                        <img src="${img}">
                        <span class="item__description">${tit}, ${day}</span>
                    </li>`;
    };
};