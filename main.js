const BUTTONS = document.querySelectorAll(".button")
const SUBMIT = document.getElementById("submit");

const firtSection = document.getElementById("firstSection");
const thanksSection = document.getElementById("sectionThanks");


const numberThanks = document.getElementById("number")


/* Elimina el active de botones previamente seleccionados */
const classRemove = (selector) => {

  const elemetentActive = document.querySelectorAll(`.${selector}`);

  if(elemetentActive.length){
    elemetentActive.forEach(elementAct => {

      elementAct.classList.remove(selector);

    })
  }
}
/* Le da la clase active al los botones */
BUTTONS.forEach(botones =>{
  botones.addEventListener("click", ()=>{
    //botones.classList.toggle("active-button")

   if(!botones.classList.contains("active-button")){
     classRemove("active-button");
     
     botones.classList.add("active-button");

    }
    const atributte = botones.getAttribute("value")

    numberThanks.textContent = atributte;
  })
})


/* Se muestra la segunda seccion despues de enviar el numero */
SUBMIT.addEventListener("click", ()=>{
    thanksSection.style.display = "flex";

    firtSection.style.display = "none";

})


/* Vuelve a la seccion para seleccionar el numero */
const backButon = document.getElementById("backButton")

backButon.addEventListener("click", ()=> {
  thanksSection.style.display = "none";
  firtSection.style.display = "block"
})