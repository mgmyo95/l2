let getimgs = document.querySelectorAll('.img'),
    getmodal = document.querySelector('.modal'),
    getmodalimg = document.querySelector('.modal-img'),
    getcaption = document.querySelector('.caption'),
    getbtnclose = document.querySelector('.btn-close');

    // console.log(getimgs)

for(var x = 0 ; x < getimgs.length ; x++){
    getimgs[x].addEventListener('click',function(){
        shownow(this);
    });
}
function shownow(ele){
//    console.log(ele)
// console.log(ele.src);
// console.log(ele.alt);

getmodal.style.display = "block";
getmodalimg.src = ele.src;
getcaption.textContent = ele.alt;
}


getbtnclose.onclick = function(){
    getmodal.style.display = "none";
}

// document.addEventListener('click',function(e))
window.onclick = function(e){
    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
}
