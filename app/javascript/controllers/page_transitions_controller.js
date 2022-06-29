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
        let currentPageRoot = true

        if (this.hasPageTransitionTarget) {
          currentPageRoot = (this.pageTransitionTarget.dataset.root === 'true')
        }

        // Do not transition if the link is an anchor link to the root page and we are not in the root page
        // TODO: Make this work so that it doesn't transition if the anchor link is for the current page
        if (!target.includes("#") && !target.includes(".com") && !currentPageRoot) {
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
