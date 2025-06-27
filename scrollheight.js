document.addEventListener('DOMContentLoaded', function() {
    setPropChildHeight();
});


function setPropChildHeight () {
    const body = document.body;
    const proportional_document_container = document.querySelector('#page_content_bg');
    const bodyScrollHeight = body.scrollHeight;
    
    proportional_document_container.style.height = `${bodyScrollHeight}px`;
    console.log(bodyScrollHeight)
};