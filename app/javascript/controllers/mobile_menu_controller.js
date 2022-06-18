import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["userDropdown", "dropdown"]

  connect() {
    window.addEventListener("click", (e) => {
      if (e.target !== this.dropdownTarget)
        this.hide()
    })
  }

  toggleUserMenu(e) {
    e.stopPropagation()
    this.hideMenuDropdown()
    this.userDropdownTarget.classList.toggle('hidden')
  }

  toggleMenuDropdown(e) {
    e.stopPropagation()
    // this.hideUserDropdown()
    if (this.dropdownTarget.style.left == '0') {
      this.dropdownTarget.style.left = '-100%'
    } else {
      this.dropdownTarget.style.left = '0'
    }
  }

  hide() {
    // this.hideUserDropdown()
    if (this.hasDropdownTarget)
      this.dropdownTarget.style.left = '-100%'
  }

  hideUserDropdown() {
    if (this.hasUserDropdownTarget)
      this.userDropdownTarget.classList.add('hidden')
  }

  hideMenuDropdown() {
    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
  }
}
