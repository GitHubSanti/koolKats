//characterCounter
$(document).ready(function() {
  $('input#input_text, textarea#textarea1').characterCounter();
});
      


// var timeInstance = M.Timepicker.getInstance(elem);
var dateInstance = M.Datepicker.getInstance(elem);

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, options);
});
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.timepicker');
//   var instances = M.Timepicker.init(elems, options);
// });

const timer = document.querySelector('.timepicker');
M.Timepicker.init(timer,{
  showClearBtn:true;
  i18m:{
    clear:'remove',
    cancel: 'cancel',
    done: 'done',
  }
})

// // The code in add.js handles what happens when the user clicks the "Add a book" button.

// // When user clicks add-btn
// $("#add-btn").on("click", function (event) {
//   event.preventDefault();

//   // Make a newEvent object
//   var newEvent = {
//     Title: $("#eventTitle").val().trim(),
//     organizer: $("#eventOrganizer").val().trim(),
//     startTime: $("#eventStartTime").val().trim(),
//     endTime: $("#eventEndTime").val().trim(),
//     Description: $("#eventDescription").val().trim()
//   };

//   console.log(newEvent);

//   // Send an AJAX POST-request with jQuery
//   $.post("/api/addEvent", newEvent)
//     // On success, run the following code
//     .then(function (data) {
//       // Log the data we found
//       console.log(data);
//     });

//   // Empty each input box by replacing the value with an empty string
//   $("#eventTitle").val().trim(),
//     $("#eventOrganizer").val().trim(),
//     $("#eventStartTime").val().trim(),
//     $("#eventEndTime").val().trim(),
//     $("#eventDescription").val().trim()
// });
