class Slider {
  constructor(scrolleable, length, first) {
    this.scrolleable = scrolleable;
    this.length = length;
    this.first = first;
    this.scroll_state = 0;

    this.scrolleable_width = this.scrolleable.scrollWidth;
    this.slide_width = this.scrolleable_width / length;
  }
  moveToFirst() {
    this.scroll_state = this.slide_width * this.first;
    this.move();
  }
  next() {
    this.scroll_state += this.slide_width;
    if (this.scroll_state >= this.scrolleable_width) this.scroll_state = 0;
    this.moveSmooth();
  }
  previous() {
    this.scroll_state -= this.slide_width;
    if (this.scroll_state < 0)
      this.scroll_state = this.scrolleable_width - this.slide_width;
    this.moveSmooth();
  }
  move() {
    this.scrolleable.scroll(this.scroll_state, 0);
  }
  moveSmooth() {
    this.scrolleable.scroll({
      left: this.scroll_state,
      top: 0,
      behavior: "smooth",
    });
  }
}

export { Slider }