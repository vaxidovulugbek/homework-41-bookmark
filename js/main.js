// let BTN = document.getElementById("modeBtn")

// document.getElementById('modeBtn').addEventListener('click', function () {
//   BTN.classList.toggle('toggl')
// });


// modeBtn.addEventListener("click", function(){
//   modal1.classList.toggle("toggle-block")
// })

// modeBtn2.addEventListener("click", function(){
//   modal1.classList.toggle("toggle-block2")
// })

// modeBtn3.addEventListener("click", function(){
//   modal1.classList.toggle("toggle-block3")
// })

// modeBtn4.addEventListener("click", function(){
//   modal1.classList.toggle("toggle-block4")
// })

let openbtn = document.getElementById("open")
let closebtn = document.getElementById("close")
let headerModal = document.getElementById("modal")

openbtn.addEventListener("click", function(){
  headerModal.classList.add("show")
})
closebtn.addEventListener("click", function(){
  headerModal.classList.remove("show")
})








