const title = document.querySelector('.title h1');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.title h3');
const sizes = document.querySelector('.sizes');
const container = document.querySelector('.wrapper');
const card = document.querySelector('.card');

//animate in
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //popout
    title.style.transform = "translateZ(170px)";
    sneaker.style.transform = "translateZ(100px) rotateZ(20deg)";
    purchase.style.transform = "translateZ(80px)";
    description.style.transform = "translateZ(150px)";
    sizes.style.transform = "translateZ(120px)";
});


//animateout
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 1s ease-in";
    //popout
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});