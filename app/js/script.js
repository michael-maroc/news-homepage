const hamburgerBtn = document.getElementById("hamburgerBtn");
const body = document.body;

hamburgerBtn.addEventListener('click', function(e){
  e.preventDefault()

  body.classList.contains('open')
    ? body.classList.remove('open')
    : body.classList.add('open')
});

window.onresize = function(){
  if (window.screen.width >= 1023){
    body.classList.remove('open')
  }
};