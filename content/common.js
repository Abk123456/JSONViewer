 
 // Set current year in footer
    document.addEventListener("DOMContentLoaded", function() {
      const yearElement = document.querySelector(".FooterYear");
      if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
      }
    });



    
