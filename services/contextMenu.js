
function pushMenuSelectionToContentScript(menu){

   
    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.sendMessage(tab.id, {menuItem: menu}, function(response) {
            console.log("hello there", response);
              
            
        });
    });
}



function handleClickOnMenuItem(menu){
    switch (menu) {
        case 'recommended':
            pushMenuSelectionToContentScript(menu)
            break;
        case 'CSS Selector':
            pushMenuSelectionToContentScript(menu)
            break;
        case 'cy Selector':
            pushMenuSelectionToContentScript(menu)
            break;
    
        default:
            break;
    }
}

chrome.contextMenus.onClicked.addListener((info,tab)=>{

    if (info.menuItemId === "c1") {
        handleClickOnMenuItem('recommended');
    } else if(info.menuItemId === "c2") {
        handleClickOnMenuItem('CSS Selector')
    } else if( info.menuItemId === "c3") {
        handleClickOnMenuItem('cy Selector')
    }

})

chrome.runtime.onInstalled.addListener(function() {



    chrome.contextMenus.create({
        "id":"p1",
        "title" : "cyPOM",
        "type" : "normal",
        "contexts" : ["page"]
    
    });


    chrome.contextMenus.create({
        "id":"c1",
        "title" : "recommended",
        "type" : "normal",
        "parentId":"p1",
        "contexts" : ["page"]
        
    });

    chrome.contextMenus.create({
        "id":"c2",
        "title" : "CSS Selector",
        "type" : "normal",
        "parentId":"p1",
        "contexts" : ["page"]

    });

    chrome.contextMenus.create({
        "id":"c3",
        "title" : "cy Selector",
        "type" : "normal",
        "parentId":"p1",
        "contexts" : ["page"]

    });




});


