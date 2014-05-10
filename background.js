// BRIEF DESCRIPTION
// will get the task id of the current page
// search the history for that task id until it finds it
// subtract that time from current time
// write that to the extension
function printTaskEllapsedTime(){
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] != null){
                if (tabs[i].url.indexOf("asana") != -1){

                    // find the task id of the current asana page
                    var urlSections = tabs[i].url.split("/");
                    var taskID = urlSections[urlSections.length-1];

                    // history search
                    chrome.history.search({
                            'text': '',
                            'maxResults': 10000,
                            'startTime': 0
                        },
                        showTime.bind(this, taskID)
                    );
                }
            }
        }
    });
}
function showTime(taskID, historyItems){
    for (var i = 0; i < historyItems.length; i++){
        console.log(taskID);
        if (historyItems[i].url.indexOf(taskID) != -1){
            console.log(taskID);
            // the time comes in as epoch time
            var dateVal ="/Date("+historyItems[i].lastVisitTime+")/";
            // time translate
            var taskStart = new Date( parseFloat( dateVal.substr(6 )));
            // current time
            var taskEnd = new Date();
            // difference in seconds
            var seconds = (taskEnd.getTime() - taskStart.getTime())/1000;
            // write minutes
            // return (seconds/60);
            document.getElementById("main").innerHTML = (seconds)+" Sec";
            return;
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
  printTaskEllapsedTime();
});
