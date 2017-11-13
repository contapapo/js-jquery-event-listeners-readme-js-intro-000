//define functions here
function getIt() {
  $('p').on('click',function(){
    alert('Hey!')
  })
};

function frameIt() {
  $('img').on('load', function () {

  })
};

function pressIt() {
  $('#typing').on('keydown',function (e) {
    if(e.which === 71){
      alert('Yo');
    }
  })
};

function submitIt() {
  $('form').on('submit',function () {
    alert("Your form is going to be submitted now.");
    return;
  })
};

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
