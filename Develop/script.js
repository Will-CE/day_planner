var currentDay = document.getElementById('currentDay');
var Btn = $('.Btn');


currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');


 Btn.on('click', function(){
  var input = $(this).siblings('.input').val();
  var hours = $(this).siblings('.time').val();
  localStorage.setItem(hours, input);

 });





