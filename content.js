function parseWorkID(url) {
    const res = url.match(/.*works\/(\d+).*/m)
    if (res && res.length == 2) {
        return res[1]
    }
    return "";
}
console.log(window.location.href)
const workID = parseWorkID(window.location.href)

const top_buttons = document.querySelector(".work.navigation.actions");
top_buttons.innerHTML = "<li><a href='https://dashboard.ao3-disco.app/results?q=" + workID + "' target='_blank'>Find Similar Works</a></li>" + top_buttons.innerHTML

const bottom_buttons = document.querySelector("#feedback .actions");
bottom_buttons.innerHTML = "<li><a href='https://dashboard.ao3-disco.app/results?q=" + workID + " target='_blank''>Find Similar Works</a></li>" + bottom_buttons.innerHTML
