let currentTime = dayjs();
let currentHour = parseInt(currentTime.format('HH'));
const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
$('#currentDay').text(currentTime.format('MMMM DD, YYYY hh:mm a')); 

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
});
