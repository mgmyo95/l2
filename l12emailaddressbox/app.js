let getemail = document.querySelector("#emails");
let getbtn = document.querySelector('.btn');
const gettextarea = document.querySelector('textarea');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();

getemail.addEventListener('keyup',function(e){
    createemaillist(e.target.value)
});

function createemaillist(inputtext){
//    console.log(inputtext);

//split by (',');
// let eitems = inputtext.split(',');
// console.log(eitems)

//remove empty
// let eitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== "");
//  console.log(eitems)

 //remove spance empty                              return
 let emitems = inputtext.split(',').filter(rmempty=>rmempty.trim() !== "").map(reempty=>reempty.trim());
//  console.log(emitems)
getemcontainer.innerHTML = "";

  emitems.forEach(function(emitem){
    console.log(emitem)
    let span = document.createElement('span');
    span.appendChild(document.createTextNode(emitem));
    span.classList.add('email-item')
    getemcontainer.appendChild(span);
  });
}

getbtn.addEventListener('click',function(e){
    e.preventDefault();
    sendemail();
});

function sendemail(){
    // console.log("i am working")

    const gettxtvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll('.email-item');
    // console.log(gettxtvalue,getaddresses);

  var persons = [];
  if(getaddresses.length > 0 && gettxtvalue){
    getaddresses.forEach(function(getaddress){
        persons.push({
            email : getaddress.textContent,
            message : gettxtvalue
        });
    });
    console.log(persons);
  }else{
    window.alert("Enter Message");
    gettextarea.focus();
  }
}

//7EB
