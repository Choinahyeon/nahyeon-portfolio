let leftBt = document.getElementsByClassName("leftBt")[0];
let rightImg = document.getElementsByClassName("rightImg")[0];
let pjList = leftBt.getElementsByClassName("project");

for(let i=0; i<pjList.length; i++){
    pjList[i].addEventListener("click",function(){
        leftBt.getElementsByClassName("active")[0].classList.remove("active");
        pjList[i].classList.add("active");
        rightImg.getElementsByClassName("active")[0].classList.remove("active");
        rightImg.getElementsByTagName("div")[i].classList.add("active");
    });
}


