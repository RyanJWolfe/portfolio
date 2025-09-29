import { Controller } from "@hotwired/stimulus"
import { isScrolledIntoView } from "helpers/scrolled_into_view"

export default class extends Controller {
  static targets = ["dropdown", "menuBtn"]

  connect() {
    this.sideMenuOpen = false
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
    this.menuBtnTarget.classList.add('open')
    this.dropdownTarget.style.right = '0'
    this.sideMenuOpen = true
  }

  hideMenuDropdown() {
    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
  }
}
