console.log("js file is connected");

// This selects all the question rows with class=question-row and stores them in a NodeList 
const questionRows= document.querySelectorAll(".question-row");
// traverse through the questionRows(above we declared) 
// row used here is just a parameter 
// row is the current element in the loop  
// older version


// for (let i = 0; i < questionRows.length; i++) {
//    let row = questionRows[i];
//    row.addEventListener("click", function() {
//        // do something
//    });
// }

questionRows.forEach((row) =>{
    // now add "click" event listener 
    row.addEventListener("click", ()=>{
        const answer=row.nextElementSibling;
        const symbol=row.querySelector(".symbol");
        const isOpen= answer.classList.contains("show");

                if(isOpen){
                    answer.classList.remove("show");
                    symbol.textContent="+"
                }else{
                    answer.classList.add("show");
                    symbol.textContent="-"
                }
             });
        });