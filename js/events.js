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
  $('#typing').on('keydown',function () {
    if(key.which === 71){
      alert('Yo');
    }
  })
};

function submitIt() {

};

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
