let getbtnmodal = document.querySelector('#btn-modal');
let getmodalbox = document.querySelector('#loginmodal');
let getbtnclose = document.querySelector('.btn-close');

getbtnmodal.addEventListener('click',openmodal)

getbtnclose.addEventListener('click',closemodal);

window.onclick = function(e){
    if(e.target === getmodalbox){
        getmodalbox.style.transform = "scale(0)";
    }
}

function openmodal(){
    getmodalbox.style.transform = "scale(1)";;
}

function closemodal(){
    getmodalbox.style.transform = "scale(0)";;
}