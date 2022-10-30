let getinput = document.querySelector('#search');
let getul = document.querySelector('#member');
let getli = getul.getElementsByTagName('li');
console.log(getli);  //HTML Collection

var getsortazm1btn = document.querySelector("#sortazm1");
var getsortzam1btn = document.querySelector("#sortzam1");
var getsortazm2btn = document.querySelector("#sortazm2");
var getsortzam2btn = document.querySelector("#sortzam2");

getinput.addEventListener('keyup',filter);

//search
function filter(e){
    //    console.log(this.value)
    
    var inputfilter = this.value.toLowerCase();
    // console.log(inputfilter);
    
    for(var x = 0 ; x < getli.length ; x++){
        // console.log(getli[x]);
        // console.log(getli[x].querySelector('a').innerText.toLowerCase());
        // console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());
    
        var getvalue = getli[x].querySelector('a').innerText.toLowerCase();
        // let getvalues = getli[x].children[0].innerText.toLowerCase();
    
        if(getvalue.indexOf(inputfilter) > -1){
            getli[x].style.display = "";
        }else{
            getli[x].style.display = "none";
        }
    }
    
    }

getsortazm1btn.addEventListener('click',sortingazm1);

//method 1 a to z
function sortingazm1(){
    // console.log("hi")

    var lis = [];

    for(var i = 0 ; i < getli.length ; i++){
        // console.log(getli[i])
        // console.log(getli[i].textContent);

        lis.push(getli[i].textContent);
    }
    // console.log(lis)
    // console.log(lis.sort())
    // console.log(lis.sort().reverse());

    var azlis = lis.sort();
    getul.innerHTML = "";

    azlis.forEach(function(azli){
        // console.log(azli);
        const newli = document.createElement('li');
        const newlink = document.createElement('a');
        newlink.href = "javascript:void(0);";
        newlink.appendChild(document.createTextNode(azli));
        newli.appendChild(newlink);
        // console.log(newli);
        getul.appendChild(newli);
    })
};


//method1 z to a
getsortzam1btn.addEventListener('click',sortingzam1);
function sortingzam1(){
    var lis = [];
    for(var y = 0 ; y < getli.length ; y++){
        console.log(getli[y].textContent);

        lis.push(getli[y].textContent);
    };
    // console.log(lis.sort().reverse());

    var zalis = lis.sort().reverse();
    getul.textContent = ""

    zalis.forEach(function(zali){
        let newli = document.createElement('li');
        let newlink = document.createElement('a');
        newlink.href = `javascript:viod(0);`;
        newlink.appendChild(document.createTextNode(zali));
        newli.appendChild(newlink);
        getul.appendChild(newli);
    });
}

//Method 2 a to z
getsortazm2btn.addEventListener('click',sortingazm2);

function sortingazm2(){
    // console.log('hi')
    var shouldswitch = true;
    var switching = true;
    // console.log(getli.length);

    do{
        switching = false;
        var i = 0; 
        for(i ; i < getli.length-1 ; i++){
            shouldswitch = false;
            if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
                shouldswitch = true;
                break;
            }
        };
        if(shouldswitch){
            switching = true;

            //element.insertBefore(new,existing) , node.isertBefore(new,exitsing)
            getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
        }
    }while(switching);
}

getsortzam2btn.addEventListener('click',sortingzam2);

function sortingzam2(){
     // console.log('hi')
     var shouldswitch = true;
     var switching = true;
     // console.log(getli.length);
 
     do{
         switching = false;
         var i = 0; 
         for(i ; i < getli.length-1 ; i++){
             shouldswitch = false;
             if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
                 shouldswitch = true;
                 break;
             }
         };
         if(shouldswitch){
             switching = true;
 
             //element.insertBefore(new,existing) , node.isertBefore(new,exitsing)
             getli[i].parentElement.insertBefore(getli[i+1],getli[i]);
         }
     }while(switching);
}

console.log(getli[0].textContent.toLowerCase());
console.log(getli[1].textContent.toLowerCase());

if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
    console.log('true');
}else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
    console.log('equal')
}else{
    console.log('false')
}

