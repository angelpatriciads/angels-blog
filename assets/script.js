function readMoreFunction() {
    var dots = document.getElementById("titik");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readMoreButton");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }