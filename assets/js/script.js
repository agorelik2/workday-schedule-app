$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Assign saveBtn click listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        //get nearby values.
        console.log(this);
        var task = $(this).siblings(".description").val();
        var timeHour = $(this).parent().attr("id").slice(4);  
        //var newHour = timeHour.slice(4);

        //set items in local storage.
        localStorage.setItem(timeHour, task);
        console.log ("Key stored: " + timeHour)
        console.log ("Task stored: " + task)
    })
    //load any saved data from LocalStorage - do this for each hour created.
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    function taskTracker() {
        //get current number of hours.
        var currentHour = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var taskHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( taskHour, currentHour)

            //check if we've moved past this time
            if (taskHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (taskHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    taskTracker();
    //set up interval to check if current tasks have to be updated
    var interval = setInterval(taskTracker,15000);

    //Load saved data from local storage

})