
/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu');
    navToggle = document.getElementById('nav-toggle');
    navClose = document.getElementById('nav-close');
/*=============== Show Menu =============== */
/* Validate if constant exists */
if (navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu');
    });
}
/*=============== Hide Show =============== */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu');
    });
}
const navlink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('.nav-menu');
    //when we click on each link, we remove the show menu class
    navMenu.classList.remove('show-menu');
}
navlink.forEach((n) => n.addEventListener('click',linkAction));

/*Nav Link */
function activeLink(){
    navlink.forEach((a) => a.classList.remove('active-link'))
    this.classList.add('.active-link')
}
/*=============== Background Header =============== */

function scrollHeader(){
    const header = document.getElementById('header');
if (this.scrollY >= 50) header.classList.add('scroll-header');
else header.classList.remove('scroll-header');
}

window.addEventListener('scroll',scrollHeader);

/*Nav Link */

function activeLink(){
    navlink.forEach((a) => a.classList.remove('active-link'))
    this.classList.add('.active-link')
}

navlink.forEach((a) => a.addEventListener('click',activeLink))

/*=============== Mixitup Filter =============== */
let mixerProjects = mixitup('.projects__container', {
    selectors:{
        target : '.project__item',
    },
    animation:{
        duration: 300,
    }
});
/*=============== Active Link =============== */
const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a) => a.classList.remove('active-work'))
    this.classList.add('.active-work')
}

linkWork.forEach((a) => a.addEventListener('click',activeWork))
    
/*=============== Certification Swiper =============== */
var certiSwiper = new Swiper('.certification__container',{
    loop: true,
    navigation:{
        nextEl : '.swiper-button-next',
        prevEl : '.swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard:true,
});

/*=============== Contact Form =============== */
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    Message = document.getElementById('message'),
    contactMessage = document.getElementById('contact-message');

    const sendEmail = (e) =>{
        e.preventDefault();

        //check if the field has a value
        if(
            contactName.value === '' ||
            contactEmail.value === ''||
            Message.value ===''        
            ){
                //add and remove color
                contactMessage.classList.remove('color-light');
                contactMessage.classList.add('color-dark');

                //show message
                contactMessage.textContent = 'Write all the input fields..'
            } else {
                //serviceID - template -#form - publickey
                emailjs
                .sendForm('service_zv7j1gj',
                'template_obx6w0h',
                '#contact-form',
                'rOzKueHmrlRsxOI5K'
                )
            .then(() => {
                // show message and add color, window _ dot to open emoji
                contactMessage.classList.add('color-light');
                contactMessage.textContent = 'Message sent ✓';

                setTimeout(() =>{
                    contactMessage.textContent = '';
                },5000);
            },(error) =>{
                alert('OOps! SOMETHING WENT WRONG...',error)
            }
            );

            contactName.value = '';
            contactEmail.value = '';
            Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);
