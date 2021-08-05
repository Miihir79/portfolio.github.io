const burger = document.querySelector('.burger')
const navBar = document.querySelector('.navbar')
const navList = document.querySelector('.nav-list')
const textClickable_exp = document.querySelector('.exp-clicked')
const textClickable_home = document.querySelector('.home-clicked')
const textClickable_project = document.querySelector('.project-clicked')
const textClickable_skills = document.querySelector('.skills-clicked')
const textClickable_contact = document.querySelector('.connect-clicked')

/*window.addEventListener('scroll',()=>{
    document.body.style.setProperty('--scroll',window.pageYOffset/(document.body.offsetHeight - window.innerHeight));

},false);*/

burger.addEventListener('click', () => {

    navBar.classList.toggle('nav-resp');
    navList.classList.toggle('menu-resp');
})
textClickable_exp.addEventListener('click', () => {

    navBar.classList.toggle('nav-resp');
    navList.classList.toggle('menu-resp');
})
textClickable_home.addEventListener('click', () => {

    navBar.classList.toggle('nav-resp');
    navList.classList.toggle('menu-resp');
})
textClickable_project.addEventListener('click', () => {

    navBar.classList.toggle('nav-resp');
    navList.classList.toggle('menu-resp');
})

textClickable_contact.addEventListener('click', () => {

    navBar.classList.toggle('nav-resp');
    navList.classList.toggle('menu-resp');
})
textClickable_skills.addEventListener('click', () => {
    console.log()
    navBar.classList.toggle('nav-resp');
    navList.classList.toggle('menu-resp');
})

let languages = document.querySelector(".langHolder");
[...languages.children].reverse().forEach(i=> languages.append(i));

languages.addEventListener('click',swap);

function swap(e){
    let card = document.querySelector(".card:last-child");
    if(e.target !== card ) return;

    card.style.animation = 'swap 700ms forwards';

    setTimeout(()=>{
        card.style.animation ="";
        languages.prepend(card);
    },700);
}

let languagesApp = document.querySelector(".langHolder-app");
[...languagesApp.children].reverse().forEach(i=> languagesApp.append(i));

languagesApp.addEventListener('click',swapapp);

function swapapp(e){
    console.log("reached here")
    let cardApp = document.querySelector(".cardApp:last-child");
    if(e.target !== cardApp ) return;
    
    cardApp.style.animation = 'swap 700ms forwards';

    setTimeout(()=>{
        cardApp.style.animation ="";
        languagesApp.prepend(cardApp);
    },700);
}

let languagesOther = document.querySelector(".langHolder-other");
[...languagesOther.children].reverse().forEach(i=> languagesOther.append(i));

languagesOther.addEventListener('click',swapOth);

function swapOth(e){
    console.log("reached here")
    let cardOth = document.querySelector(".cardOth:last-child");
    if(e.target !== cardOth ) return;
    
    cardOth.style.animation = 'swap 700ms forwards';

    setTimeout(()=>{
        cardOth.style.animation ="";
        languagesOther.prepend(cardOth);
    },700);
}