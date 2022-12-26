// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for(i = 0; imgs.length > i; i++){
    imgs[i].onmousemove = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      } 
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user hovers on <span> , close the modal
span.onmouseover = function() { 
  modal.style.display = "none";
}

// Close modal by click
modal.onclick = function() {
    modal.style.display = "none";
}

// Close modal by ESC
document.onkeydown = (evt) => {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape && modal.style.display !== "none") {
        modal.style.display = "none";
    }};
