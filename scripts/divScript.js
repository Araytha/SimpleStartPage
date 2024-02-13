
const linksContainerOneW = document.getElementById('containerOneWrapper');
const linksContainerTwoW = document.getElementById('containerTwoWrapper');
const linksContainerThreeW = document.getElementById('containerThreeWrapper');
const linksContainerFourW = document.getElementById('containerFourWrapper');
const linksContainerFiveW = document.getElementById('containerFiveWrapper');


function swapDiv(x) {
  switch (x) {
    case 0:
      setTimeout(function x() {
        linksContainerOneW.style.display = "block"
        linksContainerOneW.style.animation = "fade-in 1s";
      }, 110)

      setTimeout(function x() {
        linksContainerTwoW.style.display = "none"
        linksContainerThreeW.style.display = "none"
        linksContainerFourW.style.display = "none"
        linksContainerFiveW.style.display = "none"
      }, 100)

      linksContainerTwoW.style.animation = "fade-out 0.1s";
      linksContainerThreeW.style.animation = "fade-out 0.1s";
      linksContainerFourW.style.animation = "fade-out 0.1s";
      linksContainerFiveW.style.animation = "fade-out 0.1s";
      break;
    case 1:
      setTimeout(function x() {
        linksContainerTwoW.style.display = "block"
        linksContainerTwoW.style.animation = "fade-in 1s";
      }, 110)

      setTimeout(function x() {
        linksContainerOneW.style.display = "none"
        linksContainerThreeW.style.display = "none"
        linksContainerFourW.style.display = "none"
        linksContainerFiveW.style.display = "none"
      }, 100)

      linksContainerOneW.style.animation = "fade-out 0.1s";
      linksContainerThreeW.style.animation = "fade-out 0.1s";
      linksContainerFourW.style.animation = "fade-out 0.1s";
      linksContainerFiveW.style.animation = "fade-out 0.1s";
      break;
    case 2:
      setTimeout(function x() {
        linksContainerThreeW.style.display = "block"
        linksContainerThreeW.style.animation = "fade-in 1s";
      }, 110)

      setTimeout(function x() {
        linksContainerTwoW.style.display = "none"
        linksContainerOneW.style.display = "none"
        linksContainerFourW.style.display = "none"
        linksContainerFiveW.style.display = "none"
      }, 100)

      linksContainerTwoW.style.animation = "fade-out 0.1s";
      linksContainerOneW.style.animation = "fade-out 0.1s";
      linksContainerFourW.style.animation = "fade-out 0.1s";
      linksContainerFiveW.style.animation = "fade-out 0.1s";
      break;
    case 3:
      setTimeout(function x() {
        linksContainerFourW.style.display = "block"
        linksContainerFourW.style.animation = "fade-in 1s";
      }, 110)

      setTimeout(function x() {
        linksContainerTwoW.style.display = "none"
        linksContainerThreeW.style.display = "none"
        linksContainerOneW.style.display = "none"
        linksContainerFiveW.style.display = "none"
      }, 100)

      linksContainerTwoW.style.animation = "fade-out 0.1s";
      linksContainerThreeW.style.animation = "fade-out 0.1s";
      linksContainerOneW.style.animation = "fade-out 0.1s";
      linksContainerFiveW.style.animation = "fade-out 0.1s";
      break;
    case 4:
      setTimeout(function x() {
        linksContainerFiveW.style.display = "block"
        linksContainerFiveW.style.animation = "fade-in 1s";
      }, 110)

      setTimeout(function x() {
        linksContainerTwoW.style.display = "none"
        linksContainerThreeW.style.display = "none"
        linksContainerFourW.style.display = "none"
        linksContainerOneW.style.display = "none"
      }, 100)

      linksContainerTwoW.style.animation = "fade-out 0.1s";
      linksContainerThreeW.style.animation = "fade-out 0.1s";
      linksContainerFourW.style.animation = "fade-out 0.1s";
      linksContainerOneW.style.animation = "fade-out 0.1s";
      break;
  
    default:
      break;
  }
}