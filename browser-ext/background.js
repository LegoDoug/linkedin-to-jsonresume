/**
 * === Handle Toggling of Button Action based on domain match ===
 * This is only necessary because we are using  `page_action` instead of `browser_action`
 */
chrome.runtime.onInstalled.addListener(() => {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (
            changeInfo.status === "complete" &&
            tab.url &&
            tab.url.includes("linkedin.com")
        ) {
            chrome.action.enable(tabId);
        } else {
            chrome.action.disable(tabId);
        }
    });
});
