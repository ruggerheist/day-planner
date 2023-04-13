$('#currentDay').text(dayjs().format('MM/DD/YY HH:mm')); 
const currentTime = dayjs();

const timeBlocks = [
  {
    hourBlocks: '#hour-9',
    hour: 9
  },

  {
    hourBlocks: '#hour-10',
    hour: 10
  },

  {
    hourBlocks: '#hour-11',
    hour: 11
  },

  {
    hourBlocks: '#hour-12',
    hour: 12
  },

  {
    hourBlocks: '#hour-13',
    hour: 13
  },

  {
    hourBlocks: '#hour-14',
    hour: 14
  },

  {
    hourBlocks: 'hour-15',
    hour: 15
  },

  {
    hourBlocks: '#hour-16',
    hour: 16,
  },

  {
    hourBlocks: '#hour-17',
    hour: 17
  }
];

let hour;





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(".saveBtn").on('click', function (event) {
  console.log(event);
  var textArea = $(this).siblings(".description").val()//localstorage.getitem inside val)
  console.log(textArea);
  var time = $(this).parent().attr("id");
  console.log(time);  
  console.log(currentTime);
  console.log()
  


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

  //if currentTime > x do y
     // else do z

  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
});
