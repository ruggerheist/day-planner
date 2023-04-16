let currentTime = dayjs();
let currentHour = parseInt(currentTime.format('HH'));
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
$('#currentDay').text(currentTime.format('MMMM DD, YYYY HH:mm')); 

hours.forEach( function(hour){
    let id = `#hour-${hour}`;    
    let timeBlock = $(id);
    let description = $('.description', timeBlock);
    let storedText = localStorage.getItem(id.substring(1));
    description.val(storedText);  
    timeBlock.removeClass('past present future');
    if (hour < currentHour) {
      timeBlock.addClass('past');
    } else if (hour === currentHour) {
      timeBlock.addClass('present');   
    } else {
      timeBlock.addClass('future');
    }   
});

$(".saveBtn").on('click', function () {
  var text = $(this).siblings(".description").val();
  localStorage.setItem($(this).parent().attr("id"), text);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //jQuesy Each

  // TODO: This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});
