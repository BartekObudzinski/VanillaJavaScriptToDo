const textarea = document.querySelector(".textmsg");
const btn = document.querySelector(".submit");
const taskContainer = document.querySelector(".div");

function addText(text){
    console.log("U DID IT");
    const element = document.createElement("div"); // tworzenie elementu div
    element.classList.add("element"); // dodanie klasy do divu
    taskContainer.appendChild(element); // dodanie elementu div z klasa element do istniejacego diva

    // tworzenie p do przypuisania tekstu

    const addTask = document.createElement("p");
    addTask.classList.add("singleTask");
    element.appendChild(addTask);

    // utworzenie buttona potwierdzjaace zrobienie zadania
    const elementConfirmTask = document.createElement("button");
    elementConfirmTask.classList.add("confirmTask");
    elementConfirmTask.innerText = "Done";
    element.appendChild(elementConfirmTask);

    // tworzenie buttona delete i dodanie go do do diva z klasa element

    const elementButtonDelete = document.createElement("button");
    elementButtonDelete.classList.add("btnDelete");
    elementButtonDelete.innerText = "X";
    element.appendChild(elementButtonDelete);

    
    // dodanie tekxtu z textarea do p

    addTask.innerText = textarea.value;
}

btn.addEventListener("click", e => {
    if (textarea.value !== ""){
        addText(textarea.value);
        textarea.value = "";
    }
});


taskContainer.addEventListener("click", e => {
    if (e.target.classList.contains("btnDelete")){
        console.log("to ja usun mnie");
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains("confirmTask")){
        console.log("chuj");
       // addTask.classList.add("elementDone");
       e.target.parentElement.classList.toggle('elementDone');
       

        
    }
});

