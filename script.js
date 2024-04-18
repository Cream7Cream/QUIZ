let salt = document.querySelector(".salt");
let sugar = document.querySelector(".sugar");
let hot = document.querySelector(".hot");
let cold = document.querySelector(".cold");
let potato = document.querySelector(".potato")
let pickle = document.querySelector(".pickle")
let cookie = document.querySelector(".cookie")
let cereal = document.querySelector(".cereal")
let check = document.querySelector("button")
let h1 
let button=document.querySelector(".button")
let answer1
let answer2

pickle.style.display="none"
potato.style.display="none"
cereal.style.display="none"
cookie.style.display="none"


salt.addEventListener("click", function() {
    answer1 = "salt";
    console.log(answer1);
     salt.style.border ="3px solid red";
     sugar.style.display="none"
    }); 


sugar.addEventListener("click", function() {
       answer1 = "sweet";
        console.log(answer1);
        sugar.style.border ="3px solid red";
     salt.style.display="none"
    }); 
       
 hot.addEventListener("click", function() {
 answer2 = "hot";
     console.log(answer2);    
     hot.style.border ="3px solid red";
     cold.style.display="none"
     });

cold.addEventListener("click", function() {
    answer2 = "cold";
     console.log(answer2);
     cold.style.border ="3px solid red";
     hot.style.display="none"
     }); 






    check.addEventListener("click", function() {
        if (answer1 ==="salt" && answer2 ==="hot"){
        console.log("potato");
        potato.style.display="block"
        salt.style.display="none"
        hot.style.display="none"
        document.querySelector('h1').innerHTML ="Have some Mash & Gravy";
        } else if (answer1 ==="salt" && answer2 ==="cold"){
        
        
        console.log("pickle")
        pickle.style.display="block"
        salt.style.display="none"
        cold.style.display="none"
        document.querySelector('h1').innerHTML = "Have a pickle!";
         }
         
         else if (answer1 ==="sweet" && answer2 ==="hot"){
         
         console.log("cookie");
         cookie.style.display="block"
         sugar.style.display="none"
         hot.style.display="none"
         document.querySelector('h1').innerHTML = "Have a Cookie!";
         
         }   
         else if (answer1 ==="sweet" && answer2 ==="cold"){
         
            console.log("cereal");
            cereal.style.display="block"
            sugar.style.display="none"
            cold.style.display="none"
            document.querySelector('h1').innerHTML = "Have some cereal!";
            
            }   
        });
    
   




 