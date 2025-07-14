// Code for implementing collapsible window tabs 

var close_button_element_class = document.getElementsByClassName("close");
var open_button_element_class = document.getElementsByClassName("maximize");
var i;

document.addEventListener('DOMContentLoaded',function(){
    for (i = 0; i < close_button_element_class.length; i++) {
    close_button_element_class[i].addEventListener("click", function(event){
        var button = event.target; 
        var window_content_container = button.closest('.window_container').querySelector('.window_content'); 
        // Log Original Element Height in root window_content container
        button.closest('.window_container').setAttribute('data-element-height', getComputedStyle(button.closest('.window_container')).height); 
        // Set element height to the height of the titlebar element 
        //var titlebar_element_height = getComputedStyle(button.closest('.window_container').querySelector('.window_title_bg')).height;
        var titlebar_element_height = button.closest('.window_container').querySelector('.window_title_bg').offsetHeight.toString() + "px";
        
        button.closest('.window_container').style.height =  titlebar_element_height;
        window_content_container.style.display = 'none';
    })
};

for (i = 0; i < open_button_element_class.length; i++) {
    open_button_element_class[i].addEventListener("click", function(event){
        var button = event.target; 
        var window_content_container = button.closest('.window_container').querySelector('.window_content'); 
        var original_height = window_content_container.getAttribute('data-element-height'); 
        button.closest('.window_container').style.height = original_height;
        window_content_container.style.display = 'block';
    })
};
}

);

