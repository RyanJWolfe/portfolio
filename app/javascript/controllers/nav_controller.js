import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["header", "menuBtn", "navbar"]

  connect() {
    this.addOrRemoveShadow()
    this.scrollListener = this.onScroll.bind(this)
    window.addEventListener('scroll', this.scrollListener)
  }

  disconnect() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  onScroll() {
    let scrolledDown = this.oldScroll < this.scrollTop
    if (scrolledDown) {
      this.hideNavbar()
    } else {
      this.showNavbar()
    }
    this.oldScroll = this.scrollTop
  }

  toggleTheme() {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('theme-dark')
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add('theme-dark')
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }

  onKeyup(e) {
    if (e.key === "ArrowUp") {
      this.showNavbar()
    } else if (e.key === "ArrowDown" || e.key === ' ') {
      this.hideNavbar()
    }
  }

  showNavbar() {
    this.addOrRemoveShadow()
    this.headerTarget.style.top = "0"
  }

  hideNavbar() {
    if (this.hasMenuBtnTarget) {
      if (this.menuBtnTarget.classList.contains('open') || this.scrollTop < 20) {
        return
      }
    }
    this.headerTarget.style.top = "-150px"
  }

  addOrRemoveShadow() {
    if (this.scrollTop < 5) {
      this.headerTarget.classList.remove("shadow-lg")
      this.navbarTarget.classList.remove("py-3", "md:py-4")
      this.navbarTarget.classList.add("py-4", "md:py-6", "lg:py-8")
    } else {
      this.headerTarget.classList.add("shadow-lg")
      this.navbarTarget.classList.add("py-3", "md:py-4")
      this.navbarTarget.classList.remove("py-4", "md:py-6", "lg:py-8")
    }
  }

  get scrollTop() {
    return window.scrollY || document.documentElement.scrollTop;
  }
}
