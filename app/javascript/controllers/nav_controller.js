import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["navbar"]

  onKeyup(e) {
    if (e.key === "ArrowUp") {
      this.showNavbar()
    } else if (e.key === "ArrowDown" || e.key === ' ') {
      this.hideNavbar()
    }
  }

  onWheel(e) {
    if (e.wheelDeltaY > 0) {
      this.showNavbar()
    } else {
      this.hideNavbar()
    }
  }

  showNavbar() {
    this.navbarTarget.style.top = "0"
  }

  hideNavbar() {
    this.navbarTarget.style.top = "-50px"
  }
}
