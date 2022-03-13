const changeColor = {
  eventTarget : document.querySelector("body").classList,
  violetBG : "violetBG",
  yellowBG : "yellowBG",
  
  setVioletBG : function() {
    this.eventTarget.remove(this.yellowBG);
    this.eventTarget.add(this.violetBG);
  },
  setYellowBG : function() {
    this.eventTarget.remove(this.violetBG);
    this.eventTarget.add(this.yellowBG);
  },
  setFirstBG : function() {
    this.eventTarget.remove(this.yellowBG);
    this.eventTarget.remove(this.violetBG);
  }
}

let width;

function getWidth() {
  width = window.innerWidth;
}

function showCurrentWidth() {
  const span = document.querySelector("body > h2 > span");
  span.textContent = `${width}px`;
}

function changeBG() {
  if (width >= 300 && width <400 ) {
    changeColor.setVioletBG();
  } else if (width >= 400 ) {
    changeColor.setYellowBG();
  } else {
    changeColor.setFirstBG();
  }
}

getWidth();
showCurrentWidth();
changeBG();
window.addEventListener("resize", () => {
  getWidth();
  showCurrentWidth();
  changeBG();
});