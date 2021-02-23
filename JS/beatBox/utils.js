/**
 * Beat class that keeps track of playing the audio
 * HINT: Make sure to pass in the audioSrc as parameter to create a new audio track
 * HINT: Create a play function to play the audio if called
 */
class Beat {
  constructor(audioSrc) {
    this.audio = new Audio(audioSrc);
    //console.log(this.audio);
  }
  play = () => {
    this.audio.currentTime = 0;
    this.audio.play();
  };
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
  constructor(color, keyCode) {
    this.color = color;
    this.keyCode = keyCode;
    this.element = document.getElementById(keyCode);
    this.setButtonColorInHTML();

    this.setATransitionEndListener();

    // console.log(this.color);
    // console.log(this.keyCode);
    // console.log(this.element);
  }
  setATransitionEndListener = () => {
    this.element.addEventListener("transitionend", () => {
      this.deselect();
    });
  };

  /**
   * Set the button color based on color specified
   */
  setButtonColorInHTML = () => {
    this.element.style.borderColor = this.color;
  };

  /*
   * Select function to set the background color and boxShadow
   * boxshadow looks like this 0px (horizontal change) 0px (vertical change) 17px (blur) 0px(spread ) #afsdg(color)
   */
  select = () => {
    this.element.style.background = this.color;
    this.element.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
  };

  /**
   * Deselect function to reset background color and boxShadow
   */
  deselect = () => {
    this.element.style.background = "transparent";
    this.element.style.boxShadow = "none";
  };
}
