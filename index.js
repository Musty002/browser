document.addEventListener('DOMContentLoaded', () => {
    // Referencing
    fetchAPI();
    mode();
})
 function mode(){
        const body = document.querySelector("body");
        const header = document.querySelector(".header-container");
        const box = document.getElementsByClassName("extension");
        const sun = document.getElementsByClassName("sun");
        const moon = document.getElementsByClassName("moon");
        const icon = document.getElementsByClassName("icon-moon");
        const head = document.querySelector("h1");
        const extension = document.getElementsByClassName("extension")
        const replace = document.getElementsByClassName("Remove");
        const toggle = document.getElementsByClassName("toggle")
         const act = document.querySelector('button');
         const active = document.getElementsByClassName("Active");
         const inActive = document.getElementsByClassName("Inactive");
         const all = document.getElementsByClassName("All");
          

        icon[0].addEventListener(("click"),(event)=> {
         if(moon[0].contains(event.target)){
            moon[0].style.display="none";
            sun[0].style.display="flex";
            body.classList.toggle("dark-theme");
            header.classList.toggle("header");
            head.style.color="white";
            act.style.backgroundColor = 'hsl(226, 11%, 37%)';
           active[0].style.backgroundColor = "hsl(226, 11%, 37%)";
           active[0].style.color = "white";
           inActive[0].style.backgroundColor = "hsl(226, 11%, 37%)";
           inActive[0].style.color = "white";
           all[0].style.backgroundColor = "";
           active.classList.toggle = "extension-control" 


            const box = Array.from(extension);
             const remove = Array.from(replace);
            
             
            box.forEach((element) => {
                element.style.backgroundColor = "hsl(226, 11%, 37%)";
                element.style.color = "white";
            });

             remove.forEach((element) => {
            element.style.color = "white";
           });
            
             
           

         }
         if(sun[0].contains(event.target)){
            sun[0].style.display="none";
            moon[0].style.display="flex";
            body.classList.toggle("dark-theme");
            header.classList.add("headers");
            header.classList.remove("header");
            head.style.color="#091540";
             sun[0].style.backgroundColor = "hsl(226, 11%, 37%)"
             active[0].style.backgroundColor = "";
           active[0].style.color = "";
             inActive[0].style.backgroundColor = "";
           inActive[0].style.color = "";
             

           

            const box = Array.from(extension);
             const remove = Array.from(replace);
            

            box.forEach((element) => {
                element.style.backgroundColor = "hsl(200, 60%, 99%)";
                element.style.color=""
            });
           remove.forEach((element) => {
            element.style.color = "";
           });

          
         }
        
        })
    

     console.log(act)
 }


const fetchAPI = async () => {

    const url = './data.json';
    try {
        const api = await fetch(url);
        const responses = await api.json();
        // console.log(responses)
        updateDOM(responses)
           active();
           remove();

    } catch (error) {
        console.log( error);
    }
}

const updateDOM = (data) => {

    const browserExtensions = document.querySelector('.browser-extensions');

    let HTMLContent = '';
    data.map((eachExtension) => {
         let extensions = `
            <article class="extension">
                <div class="content">
                <figure>
                    <img src="${eachExtension.logo}" alt="devlens">
                </figure>
                <div class="details">
                    <h3>${eachExtension.name}</h3>
                    <p>${eachExtension.description}</p>
                </div>
                </div>
                <div class="controls">
                    <button class="Remove">Remove</button>
                    <div class="toggle">
                        <p class="toggle-icon"></p>
                    </div>
                    <span class="isActive">${eachExtension.isActive}</span>
                </div>
            </article>
        `;

        HTMLContent += extensions;
    })
    browserExtensions.innerHTML = HTMLContent; 

   
} 

function active(){

    const activeBtn = document.querySelector(".Active");
    const inActiveBtn = document.querySelector(".Inactive");
    const allBtn = document.querySelector(".All");

    const isActive = document.querySelectorAll(".isActive");
    const toggle = document.querySelectorAll(".toggle");

    isActive.forEach((extension) => {
        let isActiveState = extension.textContent;
        if(isActiveState !== "true"){
            extension.previousElementSibling.classList.toggle("destiny")
        }else{
            return;
        }
    })

    toggle.forEach((eachToggle) => {
        eachToggle.addEventListener("click", () => {
            let isActive = eachToggle.nextElementSibling;


            if(isActive.textContent === "true"){
                isActive.previousElementSibling.classList.toggle("destiny");
                isActive.textContent = "false"
            }
            else{
                isActive.previousElementSibling.classList.toggle("destiny");
                isActive.textContent = "true"
            }
        })
    })

    inActiveBtn.addEventListener("click", () => {

        inActiveBtn.style.backgroundColor="hsl(3, 71%, 56%)"
        inActiveBtn.style.color="white";

        activeBtn.style.backgroundColor="white";
        activeBtn.style.color="black";

        allBtn.style.backgroundColor="white";
        allBtn.style.Color="black";

       
    isActive.forEach((eachActive) => {

        let parent2 = eachActive.closest(".extension")
        if(eachActive.textContent === "true"){
            parent2.style.display = "none"
        }
        else{
            parent2.style.display="flex"
        }
    })
    })

    activeBtn.addEventListener("click", () => {
    
         inActiveBtn.style.backgroundColor="white"
        inActiveBtn.style.color="black";

        activeBtn.style.backgroundColor="hsl(3, 71%, 56%)";
        activeBtn.style.color="white";

        allBtn.style.backgroundColor="white";
        allBtn.style.color="black";

          isActive.forEach((eachActive) => {
     let parent = eachActive.closest(".extension");
     
       
            if(eachActive.textContent === "false"){
            parent.style.display = "none"
        }
        else{
            parent.style.display="flex"
        }
        })
         
    })

    allBtn.addEventListener("click", () => {
    inActiveBtn.style.backgroundColor="white"
        inActiveBtn.style.Color="black";

        activeBtn.style.backgroundColor="white";
        activeBtn.style.color="black";

        allBtn.style.backgroundColor="hsl(3, 71%, 56%)";
        allBtn.style.color="white";

        isActive.forEach((eachActive) => {

            let parent = eachActive.closest(".extension")
            parent.style.display = "flex"
        })
    })
}

function remove (){
    const removeBtn = document.querySelectorAll(".Remove")


    removeBtn.forEach((eachRemove) =>{
        eachRemove.addEventListener("click", ()=>{
            let first = eachRemove.parentElement
            let parent = first.parentElement

            parent.style.display = "none";
        })
    })
}