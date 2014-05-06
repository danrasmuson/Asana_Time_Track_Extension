////////////
//thoughts//
////////////
// anytime a url is changed a small script is ran
//     if the current tab is asana
//         it finds the asana tab and gets the task id
//         if its the same as the old task id does nothing
//         else 
//             it looks for it in memory
//             if it finds it 
//                 contines counter
//             else
//                 starts new counter

// NEXT STEP DETECT TAB CHANGE
// when a you cycle through you tabs it should be able to record
// when you cycle over the asana tab
// if you cant do an alert just log it to the console or local storage

///////////////////////////////////////////////////
//How to detect tabs change URLs or tabs create  //
///////////////////////////////////////////////////
// chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
//     insertDictionaryScript();
// });

// chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {         
//    insertDictionaryScript();
// });
// 
// // "content_scripts": [
    // {
    //   "matches": [...urls...],
    //   "exclude_matches": [...urls...],
    //   "css": [...
    //   "permissions": ["tabs", "*://*.google.com/*"]

/////////
//main //
/////////
function printTaskID(){
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] != null){
                if (tabs[i].url.indexOf("asana") != -1){
                    var urlSections = tabs[i].url.split("/");
                    var taskID = urlSections[urlSections.length-1];

                    // check local storage for task
                    var time = 0;
                    // var seconds = new Date().getTime() / 1000;
                    if (localStorage.getItem(taskID) != null)
                        time = parseInt(localStorage.getItem(taskID));

                    localStorage.setItem(taskID, time+1);

                    document.getElementById("main").innerHTML = taskID+"|"+(time+1);
                }
            }
        }
    });
}
function main(){
    printTaskID();
    
}
document.addEventListener('DOMContentLoaded', function () {
  main();
});
