import "./styles/snackbar.css";
class Snackbar {
  constructor() {
    // we are not creating snackbar elemnt beacuse we do not have snackbar element already present into the page we do create here
    this.snackbar = document.createElement("div");
  }
  init() {
    this.snackbar.classList.add("snackbar");
    document.querySelector("body").appendChild(this.snackbar);
  }
  show(message) {
    this.snackbar.textContent = message;
    this.snackbar.classList.add("active");
    setTimeout(() => {
      this.snackbar.classList.remove("active");
    }, 4000);
  }
}
export { Snackbar as default };
