////////////
//thoughts//
////////////



///////////////////////////////////////////////////
//How to detect tabs change URLs or tabs create  //
///////////////////////////////////////////////////
var count = 10;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    insertDictionaryScript();
});

chrome.tabs.onCreated.addListener(function(tabId, changeInfo, tab) {         
   insertDictionaryScript();
});

/////////
//main //
/////////
function getOpenAsanaUrls(){
    chrome.tabs.query({}, function(tabs){
            for (var i = 0; i < tabs.length; i++){
                if (tabs[i].url.indexOf("asana") != -1){
                    console.log(tabs[i].url);
                }
            }
        }
    );
}
function main(){
    getOpenAsanaUrls();
    // document.getElementById("main").innerHTML = urls.toString();
}
document.addEventListener('DOMContentLoaded', function () {
  main();
  count += 1;
});
