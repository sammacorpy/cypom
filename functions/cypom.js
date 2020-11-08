



chrome.runtime.onMessage.addListener(

    (request, sender, sendResponse) => {
            sendResponse({ menuis: request.menuItem });
        }
);
