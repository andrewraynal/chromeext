'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
    chrome.browserAction.show(tabId);
});

console.log('\'Allo \'Allo! Event Page for Page Action');
