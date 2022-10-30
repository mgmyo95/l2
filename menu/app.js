(()=>{
//   console.log("hay")

const openNavMenu = document.querySelector('.open-nav-menu');
const closeNavMenu = document.querySelector('.colse-nav-menu');
const navMenu = document.querySelector('.nav-menu');
let menuOverlay = document.querySelector('.menu-overlay');
let mediaSize = 991;

openNavMenu.addEventListener('click',toggleNav);
closeNavMenu.addEventListener('click',toggleNav);
menuOverlay.addEventListener('click',toggleNav)

function toggleNav(){
    navMenu.classList.toggle('open');
    menuOverlay.classList.toggle('active');
    document.body.classList.toggle('hidden-scrolling');
}

navMenu.addEventListener('click',function(e){
    // console.log(e.target);
    if(e.target.hasAttribute('data-toggle') && window.innerWidth <= mediaSize){
        // console.log(true);

        //prevent Default anchor click behavior
        e.preventDefault();
        const menuItemHasChildren = e.target.parentElement;
        // console.log(menuItemHasChildren);

        //if menuItemHasChildren is already expanded ,collapse it
        if(menuItemHasChildren.classList.contains('active')){  //step four
            collapseSubMenu();
        }else{
        //collapse exitsint expanded menuitemHasChildren
        if(navMenu.querySelector('.menu-item-has-children.active')){      //step two
            collapseSubMenu();
        }

        //expand new menuItemHasChildren
        menuItemHasChildren.classList.add('active');   //step one
        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
       }
    }
});

function collapseSubMenu(){       //step 3
    navMenu.querySelector('.menu-item-has-children.active .sub-menu').removeAttribute("style");
    navMenu.querySelector('.menu-item-has-children.active').classList.remove('active');
}

function resizeFix(){
    //if newmenu is open , close if
    if(navMenu.classList.contains('open')){
        toggleNav();
    }

    //if menuItemHasChildren is expanded , collapse it
    if(navMenu.querySelector('.menu-item-has-children.active')){
        collapseSubMenu();
    }
}
window.addEventListener('resize',function(){
    if(this.innerWidth > mediaSize){
        resizeFix();
    }
})

})();