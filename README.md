# Ultra Dan Finder!

Ultra Dan Finder is a quick little project as an introduction into full stack applications.  When completing the fields and survey questions, it matches you up with the "most-similar" person who also filled in the survey.  The survey has been pre-filled by some random famous people just for demonstration purposes, however the app is functional and the list of "users" will continue to populate as more people complete the survey.

## Getting Started

If you just want to play around with the app, you can visit the deployed version at:  https://salty-gorge-60362.herokuapp.com/

If you want to start your own local server to host the app, clone this repo and then run npm install (or manually install express and path node modules) from your node environment.

With the server running, visit localhost:3031 to arrive at the landing page.

### Prerequisites

(Nothing is required to see the deployed app - just visit the link.)

The server requires node.js javascript environment.

Dependencies in node are express and path.

### Installing

"npm install" from the command line should install all dependencies.  Otherwise you could install them manually.

### What it does

The script at app/data/friends.js contains an array with all "user info" as well as all logic to run the back end of the app.  Information is pulled in on the front end with some jquery scripts in survey.html.  This is then sent to the back end where some calculations are performed to determine the "best match".  The response is then pushed to the front end which populates a modal pop-up to display this info to the user.  

The "best match" is calculated by finding the absolute-value difference to all questions in the survey, and then ranking users by the total sum of differences.  