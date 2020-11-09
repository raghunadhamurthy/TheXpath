//alert("Xpath Finder")

let receiver = (message, sender, sendResponse) => {
    console.log(message);
    //return true;
}

console.log("------this is Content file-----");
chrome.runtime.onMessage.addListener(receiver);
