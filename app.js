const body = document.body
const slides = document.querySelectorAll(".slider");
const rightButton = document.getElementById("right");
const leftButton = document.getElementById("left");


let activeSlide = 3;


rightButton.addEventListener("click", () => {
    activeSlide++
     if(activeSlide > slides.length -1 ) {
        activeSlide =0;
     }

     setActiveSlide()
     setBgToBody()
     
})

setBgToBody()
setActiveSlide()

function setBgToBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;

}

function setActiveSlide(){

    slides.forEach((slid) =>  slid.classList.remove("active"))


 slides[activeSlide].classList.add("active")
   
}


