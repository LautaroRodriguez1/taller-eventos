document.addEventListener("DOMContentLoaded", function() {
    const miDiv = document.getElementById("eldiv");
    
  
    miDiv.addEventListener("click", function(event) {
      if (event.target.matches("#botonazo")) {
        alert("Hola!");
      } else {
        alert("Hola! Soy el div");
      }
    });
  });