const getmap = document.querySelector('.map-container');

var getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){
    // console.log("hay i am working");

    circleidx++;
    // console.log(e.target);

    if(e.target.classList.contains('map-container')){
        //Coordinates event - relative to the window
    const cx = e.clientX;
    const cy = e.clientY;
    // console.log(cx,cy);

    // Coordinates event - relative to the window
    const mapleft = e.target.offsetLeft;
    const maptop = e.target.offsetTop;
    console.log(mapleft,maptop);

    const curx = cx - mapleft;
    const cury = cy - maptop;
    // console.log(curx,cury);

    const circle = document.createElement('span');
    circle.id = circleidx;
    circle.classList.add('circle');
    // console.log(circle)

    circle.style.left = `${curx}px`;
    circle.style.top = `${cury}px`;

    // circle.style.setProperty('--small-color',"darkblue");
    // circle.style.setProperty('--medium-color','steelblue');
    // circle.style.setProperty('--large-color','skyblue');

    // console.log(getsmallcolor.selectedIndex);  select yet index number ko lo chin tr

    if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex > 0 && getlargecolor.selectedIndex > 0){
    circle.style.setProperty('--smallcolor',getsmallcolor.value);
    circle.style.setProperty('--mediumcolor',getmediumcolor.value);
    circle.style.setProperty('--largecolor',getlargecolor.value);
    }

    e.target.appendChild(circle);
    }

    removepointer(e);
});

function removepointer(e){
//    console.log(e.target)
//    console.log(e.target.id);

   if(e.target.id > 0){
    e.target.remove();
   }
}