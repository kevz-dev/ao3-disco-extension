function parseWorkID(url) {
    const res = url.match(/.*works\/(\d+).*/m)
    if (res && res.length == 2) {
        return res[1]
    }
    return "";
}

chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    const workID = parseWorkID(tabs[0].url)
    if (workID) {
        chrome.tabs.create({ url: "https://dashboard.ao3-disco.app/results?q=" + workID });
    };
});
