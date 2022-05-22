import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["userDropdown", "dropdown"]

  connect() {
    console.log("Hellow world")
  }

  toggleUserMenu(e) {
    e.stopPropagation()
    this.hideMenuDropdown()
    this.userDropdownTarget.classList.toggle('hidden')
  }

  toggleMenuDropdown(e) {
    e.stopPropagation()
    console.log("TOGGLE")
    // this.hideUserDropdown()
    this.dropdownTarget.classList.toggle('hidden')
  }

  hide() {
    // this.hideUserDropdown()
    console.log("HIDE")
    if (this.hasDropdownTarget)
      this.dropdownTarget.classList.add('hidden')
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
