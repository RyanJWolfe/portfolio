import { Controller } from "@hotwired/stimulus"
import { isScrolledIntoView } from "helpers/scrolled_into_view"

export default class extends Controller {
  static targets = ["dropdown", "menuBtn", "contactInfo", "contactLink", "projectsLink", "projects",
                    "experiences", "experiencesLink", "about", "aboutLink", "home", "homeLink"]

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
    if (this.contactInfoInView) {
      this.toggleLinkClasses(this.contactLinkTarget)
    } else if (this.projectsInView) {
      this.toggleLinkClasses(this.projectsLinkTarget)
    } else if (this.experiencesInView) {
      this.toggleLinkClasses(this.experiencesLinkTarget)
    } else if (this.aboutInView) {
      this.toggleLinkClasses(this.aboutLinkTarget)
    } else if (this.homeInView) {
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
    }
  }

  open() {
    this.setSectionLinkClasses()
    this.menuBtnTarget.classList.add('open')
    this.dropdownTarget.style.right = '0'
    this.sideMenuOpen = true
  }

  hideMenuDropdown() {
    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
  }

  get contactInfoInView() {
    return isScrolledIntoView(this.contactInfoTarget, true)
  }

  get projectsInView() {
    return isScrolledIntoView(this.projectsTarget, true)
  }

  get experiencesInView() {
    return isScrolledIntoView(this.experiencesTarget, true)
  }

  get aboutInView() {
    return isScrolledIntoView(this.aboutTarget, true)
  }

  get homeInView() {
    return isScrolledIntoView(this.homeTarget, true)
  }

  toggleLinkClasses(targetEl) {
    let elements = [this.contactLinkTarget, this.aboutLinkTarget, this.homeLinkTarget,
                    this.experiencesLinkTarget, this.projectsLinkTarget]
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
