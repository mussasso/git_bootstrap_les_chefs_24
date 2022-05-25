window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 850) {
    document.getElementById("stick").style.color = "black";
    document.getElementById("stick").style.fontWeight = "bolder";
  } else {
    document.getElementById("stick").style.backgroundColor = "transparent";
    document.getElementById("stick").style.color = "white";
  }
  if (document.documentElement.scrollTop > 2260) {
    document.getElementById("stick").style.backgroundColor = "transparent";
    document.getElementById("stick").style.color = "white";

  }
  if (document.documentElement.scrollTop > 3000) {
    document.getElementById("stick").style.color = "black";
  }
  if (document.documentElement.scrollTop > 4850) {
    document.getElementById("stick").style.color = "white";
  }
  if (document.documentElement.scrollTop > 5300) {
    document.getElementById("stick").style.color = "black";
  }
}