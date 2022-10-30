const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('professional');
const getmst = document.getElementById('mst');

// console.log(getbasic,getprofessional,getmst)

getchecklabel.addEventListener('click',function(){
    // console.log('hi')
    if(getcheckbox.checked){
       console.log(getcheckbox.checked);
       [getbasic.textContent,getprof.textContent,getmst.textContent] = [10,20,30];
    }else{
        console.log(getcheckbox.checked);
       getbasic.textContent = 120;
       getprof.textContent = 240;
       getmst.textContent = 360;
    }
});


//5PS