let currentTime = dayjs();
let currentHour = currentTime.format('HH');
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
$('#currentDay').text(currentTime.format('MM/DD/YY HH:mm')); 

$(hours).each( function(i, hour){
    let id = `hour-${hour}`;
    let storedText = localStorage.getItem(id);
    let timeBlock = document.getElementById(id);
    console.log(timeBlock);
    let description = timeBlock.getElementsByClassName('description');
    console.log(description);
    description[0].innerHTML = storedText;  
  let timeElement = document.getElementById(id);
  if (hour < currentHour) {
    timeElement.style.backgroundColor = "gray";
  } else if (hour === currentHour) {
    timeElement.style.backgroundColor = "red";    
  } else {
    timeElement.style.backgroundColor = "green";
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
