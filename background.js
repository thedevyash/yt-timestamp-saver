
//find the most recent tab and chck if its the yt tab or not
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes("youtube.com/watch")) {
      //queryparmeters are unique for every video
      const queryParameters = tab.url.split("?")[1];
      const urlParameters = new URLSearchParams(queryParameters);
  

      //agr yt ki tab ki milti hai to uski unique id store krke ek mssg bhejdo ki NEW event hua h with this link
      chrome.tabs.sendMessage(tabId, {
        type: "NEW",
        videoId: urlParameters.get("v"),
      });
    }
  });
  