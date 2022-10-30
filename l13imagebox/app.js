let getimgboxes = document.querySelectorAll('.imgbox');
// let getbtnclose = document.querySelectorAll('.btn-close');


getimgboxes.forEach(function(getimgbox,idx){
//   console.log(getimgbox,idx);

getimgbox.addEventListener('click',function(){
    // console.log(idx);
    showbox(idx);
 });
});

function showbox(idx){
//   console.log(idx)
getimgboxes.forEach(function(imgbox,curidx){
    // console.log("from parameter = ",idx);
    // console.log("form current = ",curidx);

    if(idx === curidx){
        imgbox.classList.add('show');
        imgbox.addEventListener('click',function(e){
            // console.log(e.target.className);   
        if(e.target.className === 'btn-close'){
            imgbox.classList.remove('show');
        }

        if(e.target.className === 'btn'){
            // const subbtn = imgbox.querySelector('btn');
            const subbtn = getimgboxes[idx].querySelector('.btn');
            subbtn.textContent = "Subscribed";
        }
          
    });

    }else{
        imgbox.classList.remove('show');
    }
 });


};

