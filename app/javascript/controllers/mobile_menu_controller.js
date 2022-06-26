import { Controller } from "@hotwired/stimulus"
import { isScrolledIntoView } from "helpers/scrolled_into_view"

export default class extends Controller {
  static targets = ["dropdown", "menuBtn", "contactInfo", "contactLink", "projectsLink", "projects",
                    "hire", "hireLink", "about", "aboutLink", "home", "homeLink"]

  initialize() {
    window.addEventListener('scroll', (e) => {
      if (this.sideMenuOpen)
        this.setSectionLinkClasses()
    })
  }
  connect() {
    this.sideMenuOpen = false
    this.setSectionLinkClasses()
  }

  setSectionLinkClasses() {
    if (!this.hasHomeTarget)
      return

    if (this.targetInView(this.contactInfoTarget)) {
      this.toggleLinkClasses(this.contactLinkTarget)
    } else if (this.targetInView(this.projectsTarget)) {
      this.toggleLinkClasses(this.projectsLinkTarget)
    } else if (this.targetInView(this.hireTarget)) {
      this.toggleLinkClasses(this.hireLinkTarget)
    } else if (this.targetInView(this.aboutTarget)) {
      this.toggleLinkClasses(this.aboutLinkTarget)
    } else if (this.targetInView(this.homeTarget)) {
      this.toggleLinkClasses(this.homeLinkTarget)
    }
  }

  toggleMenuDropdown(e) {
    e.stopPropagation()
    if (this.sideMenuOpen) {
      this.hide()
    } else {
      this.open()
    }
  }

  hide() {
    if (this.hasDropdownTarget) {
      this.menuBtnTarget.classList.remove('open')
      this.dropdownTarget.style.right = '-100%'
      this.sideMenuOpen = false
      let fadeInElements = document.getElementsByClassName('side-menu-fade-in')
      for (let i = 0; i < fadeInElements.length; i++) {
        let el = fadeInElements[i]
        el.classList.remove('appear')
      }
    }
  }

  open() {
    let fadeInElements = document.getElementsByClassName('side-menu-fade-in')
    for (let i = 0; i < fadeInElements.length; i++) {
      let el = fadeInElements[i]
      el.classList.add('appear')
    }
    this.setSectionLinkClasses()
    this.menuBtnTarget.classList.add('open')
    this.dropdownTarget.style.right = '0'
    this.sideMenuOpen = true
  }

  hideMenuDropdown() {
    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
  }

  targetInView(targetEl) {
    if (targetEl)
      return isScrolledIntoView(targetEl, true)
    return false
  }

  // For determining which link item is the current place on the page
  toggleLinkClasses(targetEl) {
    let elements = [this.contactLinkTarget, this.aboutLinkTarget, this.homeLinkTarget,
                    this.hireLinkTarget, this.projectsLinkTarget]
    for (let i = 0; i < elements.length; ++i) {
      if (targetEl == elements[i]) {
        this.addClasses(targetEl)
      } else {
        this.removeClasses(elements[i])
      }

    }
  }

  addClasses(el) {
    el.classList.add("py-1.5", "pr-3", "border-r-4", "border-primary", "text-primary", "font-semibold")
  }

  removeClasses(el) {
    el.classList.remove("py-1.5", "pr-3", "border-r-4", "border-primary", "text-primary", "font-semibold")
  }
}
