////////////
//thoughts//
////////////



///////////////////////////////////////////////////
//How to detect tabs change URLs or tabs create  //
///////////////////////////////////////////////////
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    insertDictionaryScript();
});

chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {         
   insertDictionaryScript();
});

/////////
//main //
/////////
function printTaskID(){
    chrome.tabs.query({}, function (tabs) {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] != null){
                if (tabs[i].url.indexOf("asana") != -1){
                    console.log(tabs[i].url);
                    var urlSections = tabs[i].url.split("/");
                    var taskID = urlSections[urlSections.length-1];
                    document.getElementById("main").innerHTML = taskID;
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
