import { Controller } from "@hotwired/stimulus"
import TextScramble from "helpers/text_scramble"
import { isScrolledIntoView } from "helpers/scrolled_into_view"
// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["header", "sidebar", "contactInfo", "menuBtn", "navbar",
                    "sideMenu", "contactLink", "projectsLink", "projects"]

  initialize() {
    this.faders.forEach(fader => {
      this.fadeInObserver().observe(fader)
    })

    this.scramblers.forEach(scrambler => {
      this.scrambleObserver().observe(scrambler)
    })

    window.onscroll = (e) => {
      let scrolledDown = this.oldScroll < this.scrollTop
      if (scrolledDown) {
        this.hideNavbar()
      } else {
        this.showNavbar()
      }
      this.toggleSidebar()
      this.oldScroll = this.scrollTop
    }
  }

  connect() {
    this.addOrRemoveShadow();
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

  fadeInObserver() {
    // This will add the 'appear' class onto elements that have the 'fade-in' class once they are on screen

    const appearOptions = {}
    return new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        } else {
          if (entry.target.classList.contains('scramble')) {
            let textScramble = new TextScramble(entry.target)
            textScramble.setText(entry.target.innerText).then(() => {})
          }
          setTimeout(() => {
            entry.target.classList.add('appear')
            appearOnScroll.unobserve(entry.target)
          }, 100)
        }
      })
    }, appearOptions)
  }

  scrambleObserver() {
    const appearOptions = {}
    return new IntersectionObserver((entries, appearOnScroll) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return
        } else {
          if (entry.target.classList.contains('fade-in'))
            return
          setTimeout(() => {
            let textScramble = new TextScramble(entry.target)
            textScramble.setText(entry.target.innerText).then(() => {})
            appearOnScroll.unobserve(entry.target)
          }, 300)
        }
      })
    }, appearOptions)
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
      this.navbarTarget.classList.remove("py-1.5", "md:py-3")
      this.navbarTarget.classList.add("py-3", "md:py-6")
    }
    else {
      this.headerTarget.classList.add("shadow-lg")
      this.navbarTarget.classList.add("py-1.5", "md:py-3")
      this.navbarTarget.classList.remove("py-3", "md:py-6")
    }
  }

  toggleSidebar() {
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

  get contactInfoInView() {
    return isScrolledIntoView(this.contactInfoTarget)
  }

  get faders() {
    return document.querySelectorAll(".fade-in")
  }

  get scramblers() {
    return document.querySelectorAll(".scramble")
  }

  get scrollTop() {
    return window.scrollY || document.documentElement.scrollTop;
  }
}
