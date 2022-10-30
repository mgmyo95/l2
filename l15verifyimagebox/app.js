let database = [
    {
        question : "Choose Traffic Light?",
        a : "./img/traffic.jpg",
        b : "./img/mountain.jpg",
        c : "./img/ambulance.jpg",
        d : "./img/airport.jpg",
        correctanswer : "a"
    },
    {
        question : "Choose Mountain?",
        a : "./img/ambulance.jpg",
        b : "./img/mountain.jpg",
        c : "./img/traffic.jpg",
        d : "./img/airport.jpg",
        correctanswer : "b"
    },
    {
        question : "Choose Ambulance Truck",
        a : "./img/ambulance.jpg",
        b : "./img/airport.jpg",
        c : "./img/traffic.jpg",
        d : "./img/mountain.jpg",
        correctanswer : "a"
    },
    {
        question : "Choose Airport?",
        a : "./img/traffic.jpg",
        b : "./img/mountain.jpg",
        c : "./img/ambulance.jpg",
        d : "./img/airport.jpg",
        correctanswer : "d"
    }
];


// console.log(database);
// console.log(database[0].c);

const getcontainer = document.getElementById('container');
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll('.answer');
const getbtn = document.querySelector('.btn');
// console.log(getanswers);

const geta_img = document.getElementById('a_img'),
      getb_img = document.getElementById('b_img'),
      getc_img = document.getElementById('c_img'),
      getd_img = document.getElementById('d_img');

// console.log(geta_img)

let currentidx = 0;
let score = 0;


startquestion();
function startquestion(){
    removeselect();
    const currentqes = database[currentidx];
    // console.log(currentqes);

    getquestion.textContent = currentqes.question;
    geta_img.src = currentqes.a;
    getb_img.src = currentqes.b;
    getc_img.src = currentqes.c;
    getd_img.src = currentqes.d;
}

function getsingleanswer(){
    let answer;
    // console.log(answer);
    // console.log(getanswer);

    getanswers.forEach(function(getanswer){
        // console.log(getanswer);
        // console.log(getanswer.id);

        if(getanswer.checked){
            // console.log(getanswer.id)
            answer = getanswer.id;
        }
    });
    // console.log(answer);
    return answer;
}

getsingleanswer();

getbtn.addEventListener('click',function(){
    // console.log("hay i am working")
    const answer = getsingleanswer(); //id
    // console.log(answer)

    if(answer){
        // console.log(answer);

        if(answer === database[currentidx].correctanswer){
            score++;
        }

        currentidx++;
        // console.log(currentidx)
        if(currentidx < database.length){
            startquestion();
        }else{
            // console.log(score);
            getcontainer.innerHTML = `<h3>Total Score : ${score*25}</h3>;
            <h4>You answered correctly at ${score} / ${database.length} questions</h4>
            <!-- <button type="button" class="btn" ondblclick="location.reload()">Double Click To Reload</button> -->
            <button type="button" class="btn" onclick="doubleclick()">Double Click To Reload</button>`;
            
        }


    }else{
        window.alert("Choose One Answer");
    }
});

function removeselect(){
   getanswers.forEach(function(getanswer){
     return getanswer.checked = false;
   })
}

let clicktime = 0;
function doubleclick(){
    if(clicktime === 0){
        clicktime = Date.now();
    }else{
        if((Date.now() - clicktime) < 500){
            location.reload();
            clicktime = 0;
        }else{
            clicktime = new Date().getTime();
        }
    }
}

