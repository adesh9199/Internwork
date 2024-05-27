let menu = document.querySelector(".btn_one");
let cross = document.querySelector(".btn_two");
let carousel=document.querySelector(".carousel");
let cont=document.querySelector(".content");
menu.addEventListener("click", function() {
    carousel.style.width="80%";
    carousel.style.marginRight =" 5px";
    carousel.style.marginLeft =" auto";
    cont.style.width="80%"
    cont.style.marginRight =" 5px";
    cont.style.marginLeft =" auto";
   
  
});
cross.addEventListener("click", function() {
    carousel.style.width="96%";
    carousel.style.marginRight =" auto";
    carousel.style.marginLeft =" auto";
    cont.style.width="96%"
    cont.style.marginRight =" auto";
    cont.style.marginLeft =" auto";
   
   
  
});

      
        let clip = document.querySelector(".vid") 
  
        clip.addEventListener("mouseover", function (e) { 
            clip.play(); 
        }) 

        clip.addEventListener("mouseout", function (e) { 
            clip.pause(); 
        }) 


        let flag = true;
        let dark = document.querySelector("#dark");
        let body = document.querySelector("body");
        let txt = document.querySelectorAll("span");
        let icon = document.querySelectorAll("i");
     
        dark.addEventListener("click", function () {
            if (flag == true) {
                body.style.background = "white";
            
                document.querySelector(".searchbar").style.background = "white";
                txt.forEach(function (span) {
                    span.style.color = "black"; // Applying style to each span element
                });
                icon.forEach(function (i) {
                    i.style.color = "black"; 
                });
                
                flag = false;
            } else {
                body.style.background = "#121212"; 
                document.querySelector(".searchbar").style.background = "#121212";
                txt.forEach(function (span) {
                    span.style.color = "white"; // Applying style to each span element
                });
                icon.forEach(function (i) {
                    i.style.color = "white";
                });
                flag = true;
            }
        });
        


    
 let crsl=document.querySelector("#crsl");
        let changeIcon = function (icon) {
            if (change) {
                icon.classList.remove("fa-moon");
                icon.classList.add('fa-sun');
        
              crsl.style.background="white";
                change = false;
            } else {
                icon.classList.remove("fa-sun");
                icon.classList.add('fa-moon');
                
                change = true;
            }
        }
        