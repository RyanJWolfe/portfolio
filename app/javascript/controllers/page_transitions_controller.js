import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="page-transitions"
export default class extends Controller {
  static targets = ["pageTransition"]

  connect() {
    const anchors = document.getElementsByTagName('a');

    setTimeout(() => {
      this.pageTransitionTarget.classList.remove('is-active')
    }, 500)

    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i]

      anchor.addEventListener('click', e => {
        let target = anchor.getAttribute('href')
        console.log(target)
        if (!target.includes("#") && !target.includes(".com")) {
          e.preventDefault();

          this.pageTransitionTarget.classList.add('is-active')

          setTimeout(() => {
            window.location.href = target;
          }, 500)
        }
      })
    }
  }
}
