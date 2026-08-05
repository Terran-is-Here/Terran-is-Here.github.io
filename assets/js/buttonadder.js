// Long properties unused due to like; stuff. 
// Config settings for the display elements used for buttons; parsed as HTML
const hideButtonShort = "-"; 
const hideButtonLong = "Hide"; 
const showButtonShort = "⛶"; 
const showButtonLong = "Open"; 
const closeButtonShort = "X"; 
const closeButtonLong = "Close"; 

// Select all divs with the page-section-title class,
const divs = document.querySelectorAll("div.window-page-section > div.page-section-title > p"); 
// Then add button widgets on the end of them. 
divs.forEach(div => {
    div.insertAdjacentHTML("afterend", "<div class='page-section-title-buttons'></div>");
})
const buttonDivs = document.querySelectorAll("div.page-section-title-buttons"); 
buttonDivs.forEach(div => {
    div.insertAdjacentHTML("beforeend", `<button class="hide-button">${hideButtonShort}</button>`);
    div.insertAdjacentHTML("beforeend", `<button class="show-button">${showButtonShort}</button>`);
    div.insertAdjacentHTML("beforeend", `<button class="close-button">${closeButtonShort}</button>`);
})


// Collapsible parsing code; 
// where the collapsible code is page-content. 
const collapsibleWindowDivs = document.querySelectorAll("div.window-page-section"); 
    // Iterate through all collapsible window divs and setup button events to collapse / show things; 
    collapsibleWindowDivs.forEach(collapsibleWindowDivs => {
    
    // Get close button for this respective collapsible window div; 
    const closeButton = collapsibleWindowDivs.querySelector("button.hide-button")
    // Set on click to turn the collapsibleWindowDivs > page-content display parameter to none. 
    closeButton.addEventListener("click",function(event) {
        collapsibleWindowDivs.querySelector("div.page-content").classList.add("hidden-content");
        console.log("div closed");
    });
    
    // Get show button for this respective collapsible window div; 
    const showButton = collapsibleWindowDivs.querySelector("button.show-button")
    // Set on click to turn the collapsibleWindowDivs > page-content display parameter to none. 
    showButton.addEventListener("click",function(event) {
        collapsibleWindowDivs.querySelector("div.page-content").classList.remove("hidden-content");
        console.log("div opened");
    })
})