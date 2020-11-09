//alert("Xpath Finder")

let receiver = (message, sender, sendResponse) => {
    console.log(message);
  return true;
}

console.log("------this is Content file-----");
chrome.runtime.onMessage.addListener(receiver);

// chrome.runtime.onConnect.addListener((port) => {
//     port.onMessage.addListener((msg) => {
//       if (msg.function == 'html') {
//         port.postMessage({ html: "document.documentElement.outerHTML", description: "desp", title: document.title });
//         console.log()
//       }
//     });
//   });