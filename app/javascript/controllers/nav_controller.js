import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["navbar", "sidebar", "homeSection", "contactInfo"]

  initialize() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }

    // This will add the 'appear' class onto elements that have the 'fade-in' class once they are on screen
    const appearOptions = {}
    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        } else {
          entry.target.classList.add('appear')
          appearOnScroll.unobserve(entry.target)
        }
      })
    }, appearOptions)

    this.faders.forEach(fader => {
      appearOnScroll.observe(fader)
    })
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

  onWheel(e) {
    if (e.wheelDeltaY > 0) {
      this.showNavbar()
      this.toggleSidebar(false)
    } else {
      this.hideNavbar()
      this.toggleSidebar(true)
    }
  }

  showNavbar() {
    this.addOrRemoveShadow()
    this.navbarTarget.style.top = "0"
  }

  hideNavbar() {
    this.navbarTarget.style.top = "-150px"
    clearInterval(this.interval)
  }

  addOrRemoveShadow() {
    this.interval = setInterval(() => {
      if (this.homeSectionInView)
        this.navbarTarget.classList.remove("shadow-lg")
      else
        this.navbarTarget.classList.add("shadow-lg")
    }, 100)
  }

  toggleSidebar(scrollDirectionDown) {
      if (this.contactInfoInView)
        this.hideSidebar()
      else
        this.showSidebar()
  }

  hideSidebar() {
    this.sidebarTarget.style.bottom = "-300px"
  }

  showSidebar() {
    this.sidebarTarget.style.bottom = "0"
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

  get homeSectionInView() {
    return this.isScrolledIntoView(this.homeSectionTarget)
  }

  get contactInfoInView() {
    return this.isScrolledIntoView(this.contactInfoTarget)
  }

  get faders() {
    return document.querySelectorAll(".fade-in")
  }
}
