# workday-schedule-app
# 05 Third-Party APIs: Work Day Scheduler

Created a simple daily planner application that allows user to save events for each hour of the day. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

Used the [Moment.js](https://momentjs.com/) library to work with date and time. Date/time is going to be dynamically displayed on the screen.

## Purpose

```
The app allows to add important events to a daily planner. The purpose is to help employees 
manage their time more effectively.

## Screenshot

```
![2020-07-15 (1)](https://user-images.githubusercontent.com/65925449/87591473-5de72b80-c6b6-11ea-8df1-5a80181349f7.png)

## Functionality

```
WHEN user opens the planner, the current day and time is displayed at the top of the calendar. 
WHEN user scrolls down, he/she is presented with timeblocks for standard business hours.
WHEN user views the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past, present, or future.
WHEN user clicks into a timeblock, he/she can enter a new or update an existing event.
To save the event, user has to click the save button for that timeblock.
As the result, the text for that event is saved in local storage.
WHEN user refreshes the page, the saved events persist.
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)


## Review


* The URL of the deployed application:
    https://agorelik2.github.io/workday-schedule-app/

* The URL of the GitHub repository:
    https://github.com/agorelik2/workday-schedule-app