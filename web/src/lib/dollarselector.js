window.$ = document.querySelector.bind(document)
window.$$ = document.querySelectorAll.bind(document)
HTMLElement.prototype.$ = HTMLElement.prototype.querySelector
HTMLElement.prototype.$$ = HTMLElement.prototype.querySelectorAll
