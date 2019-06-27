const container = document.querySelector('.container');
const btn = document.querySelector('#btn');


const h1  = document.querySelectorAll('.heading');






btn.addEventListener('click', () =>{
    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.classList.add('special');
    h1.innerText = `I was added dynamically inside the Container`;
    container.appendChild(h1);
})

//Add callback funtion on click event
container.addEventListener('click', (event)=> {
if (event.target.classList.contains('heading')){
    event.target.addEventListener('click',()=>
    {console.log('you clicked me');
    })
}
})

//Get element you are clicking on
// container.addEventListener('click',(event) => { console.log(event.target)})

// document.querySelectorAll('.heading').forEach((nodelist)=>{
//     nodelist.addEventListener('click',() => {console.log('you clicked me');
// })})



// let test = document.querySelectorAll("li");
  
// console.log(test);
// // This handler will be executed only once when the cursor
// // moves over the unordered list
// // test.addEventListener("mouseenter", function( event ) {   
// //   // highlight the mouseenter target
// //   event.target.style.color = "red";

// //   // reset the color after a short delay
// //   setTimeout(function() {
// //     event.target.style.color = "";
// //   }, 8000);
// // }, false);

// // This handler will be executed every you click
// // on a different list item
// test.forEach((nodelist) => {
//   nodelist.addEventListener("click", function( event ) {   
//   // highlight the mouseover target
//   event.target.style.color = "red";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 5000);
// }, false);
// });


// const input =  document.querySelector('.innersms');

// input.addEventListener('click',(event) => {event.target.innerHTML = 'I change this for outside';
// console.log(typeof event.target);
// });