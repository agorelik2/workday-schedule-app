$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        
        //Loop through every save button and read the description next to it
        var task = $(this).siblings(".description").val();
        //Loop through every save button and read the div id next to it
        var timeHour = $(this).parent().attr("id");
        //var timeHour = $(this).parent().attr("id").slice(4);  
        
        //Save task description in local storage.
        localStorage.setItem(timeHour, task);
        console.log ("Key stored: " + timeHour)
        console.log ("Task stored: " + task)
    })
    
    //Loop to load saved task descriptions from LocalStorage
    $(".description").each(function(){
        $(this).val(localStorage.getItem($(this).parent().attr("id")));
        console.log("try this for local storage: " + localStorage.getItem($(this).parent().attr("id")))
    })
    //$("#hour9 .description").val(localStorage.getItem("hour9"));
    //$("#hour10 .description").val(localStorage.getItem("hour10"));
    //$("#hour11 .description").val(localStorage.getItem("hour11"));
    //$("#hour12 .description").val(localStorage.getItem("hour12"));
    // $("#hour13 .description").val(localStorage.getItem("hour13"));
    //$("#hour14 .description").val(localStorage.getItem("hour14"));
    //$("#hour15 .description").val(localStorage.getItem("hour15"));
    //$("#hour16 .description").val(localStorage.getItem("hour16"));
    //$("#hour17 .description").val(localStorage.getItem("hour17"));

    //Loop over time blocks and color them based on past, present or future
    function taskTracker() {
        //Get current hour based on moment()
        var currentHour = moment().hour();

        // Loop over time blocks
        $(".time-block").each(function () {
            var taskHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( taskHour, currentHour)

            //Compare task hour to current hour based on moment()
            if (taskHour < currentHour) {
                $(this).addClass("past");       //color as past
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (taskHour === currentHour) {
                $(this).removeClass("past");        
                $(this).addClass("present");    //color as present
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");      //color as future
            }
        })
    }
    //taskTracker();

    //set up interval to check if current tasks have to be updated
    var interval = setInterval(taskTracker,15000);

})