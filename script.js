

const Increment = document.getElementsByClassName("Increment")[0];
const SetZero = document.getElementsByClassName("SetZero")[0];
const Decrement = document.getElementsByClassName("Decrement")[0];
let counter = document.getElementById("Counter") ;
let countervalue = 0;

Increment.addEventListener("click", ()=>{
    counter.innerText = countervalue;
    countervalue++ ;
})

Decrement.addEventListener("click", ()=>{
    countervalue-- ;
    counter.innerText = countervalue;
})

SetZero.addEventListener("click", ()=>{
    countervalue=0;
    counter.innerText = countervalue;
})





























// button.addEventListener("click", () => {
                
//     if(container.style.display == 'block'){
//         container.style.display = 'none' ;
//         button.innerText = "Show Card" ;
//         button.style.backgroundColor = "green";
//     }else {
//         container.style.display = 'block' ;
//         button.innerText = "Hide Card" ;
//         button.style.backgroundColor = "red";
//     }

//             })

