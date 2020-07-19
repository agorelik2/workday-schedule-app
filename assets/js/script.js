var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function () {
    //display current day & time
    datetime = $('#currentDay')
    update();
    setInterval(update, 1000);

    
    //Assign saveBtn click listener for user input and time stamp
    $(".saveBtn").on("click", function () {
        
        //Loop through every save button and read the description next to it
        var task = $(this).siblings(".description").val();
        //Loop through every save button and read the div id next to it
        var timeHour = $(this).parent().attr("id");
        
        //Save timehour/task pair in local storage
        localStorage.setItem(timeHour, task);
        
    })
    
    //Loop to load and display saved task descriptions from LocalStorage
    $(".description").each(function(){
        $(this).val(localStorage.getItem($(this).parent().attr("id")));
        
    })
    
    //Loop over time blocks and color them based on past, present or future
    function taskTracker() {
        //Get current hour based on moment()
        var currentHour = moment().hours();
        console.log ("Current Hour: " + currentHour);
        // Loop over time blocks
        $(".time-block").each(function () {
            var taskHour = parseInt($(this).attr("id").split("r")[1]);
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
    taskTracker();

    //set up interval to check if current tasks have to be updated every 15 sec
    var interval = setInterval(taskTracker,15000);

})