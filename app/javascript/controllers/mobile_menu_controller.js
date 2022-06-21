import { Controller } from "@hotwired/stimulus"

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
    }
  }

  open() {
    this.menuBtnTarget.classList.add('open')
    this.dropdownTarget.style.right = '0'
    this.sideMenuOpen = true
  }

  hideMenuDropdown() {
    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
  }
}
