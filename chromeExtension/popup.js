chrome.runtime.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource2") {
        message.innerText = request.source;
        console.log(message)
    }
});

const onWindowLoad = async () => {

    console.log("ok")
    var message = document.querySelector('#message');

    chrome.tabs.executeScript(null, {
        file: "getPagesSource.js"
    }, function() {
        if (chrome.runtime.lastError) {
            message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        }
    });

}

window.onload = onWindowLoad;