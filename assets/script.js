$(function () {
  //Adding a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    //Getting the id of the time-block containing the clicked button for checking
    var timeBlockId = $(this).parent().attr("id");

    //Getting the user input from the text area
    var userInput = $(this).siblings(".description").val();

    //Saving the user input in local storage using the time-block id as key
    localStorage.setItem(timeBlockId, userInput);
  });

  //Checking current hour to add the past, present, or future class to each time block
  $(".time-block").each(function () {
    var timeBlockId = parseInt($(this).attr("id")); // Convert the timeBlockId to a number
    var currentHour = parseInt(dayjs().format("H")); // Convert the currentHour to a number
  
    if (timeBlockId < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockId === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  //Getting user input saved in the local storage and setting the values of the corresponding text area elements
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });

  //Displaying the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(currentDate);
});
