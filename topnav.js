
window.addEventListener("DOMContentLoaded", (event) => { //code to be loaded when DOM is fully loaded
    console.log("DOM fully loaded and parsed");
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    window.onscroll = function() {myFunction()};


  });

  window.onscroll = function() {myFunction()};

  //force commit