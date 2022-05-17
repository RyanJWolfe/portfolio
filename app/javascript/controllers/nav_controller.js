import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["navbar", "homeSection"]

  connect() {
    this.theme = null
    this.toggleTheme()
  }

  toggleTheme() {
    console.log("toggle theme")
    console.log(this.theme)
    if (this.theme === 'light' || (!this.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      console.log("dark")
      this.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      console.log("light")

      this.theme = 'light'
    }
  }

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

  onHover() {
    clearTimeout(this.timer)
    this.keepShowingNavbar()

  }

  showNavbar() {
    this.navbarTarget.style.top = "0"
    clearTimeout(this.timer)
    this.keepShowingNavbar()
  }

  hideNavbar() {
    this.navbarTarget.style.top = "-150px"
  }

  keepShowingNavbar() {
    this.timer = setTimeout(() => {
      if (this.isScrolledIntoView(this.homeSectionTarget) === false) {
        this.hideNavbar()
      } else {
        this.showNavbar()
      }
    }, 2000)
  }

  isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect();
    let elemTop = rect.top;
    let elemBottom = rect.bottom;

    // Only completely visible elements return true:
    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
  }
}
