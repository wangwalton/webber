chrome.runtime.sendMessage({
    action: "getSource2",
    source: document.documentElement.outerHTML
});

const getHTMLData = () => {
    console.log("123")
    return document.documentElement.outerHTML
}
