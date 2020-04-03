chrome.browserAction.onClicked.addListener((tab) => {
  if (tab.active) {
    chrome.tabs.sendMessage(tab.id, 'save')
  } 
})

