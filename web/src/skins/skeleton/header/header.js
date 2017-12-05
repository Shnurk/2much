/* global q */
/* global skin */

;(() => {

skin.header = {
  render: renderHeader
}


function renderHeader () {
  return q.html`
    <div class="header">
      <div class="header__menu">
        <a class="header__menuItem" href="/men">Men</a>
        <a class="header__menuItem" href="/women">Women</a>
        <a class="header__menuItem" href="/news">News</a>
      </div>
      <a class="header__logo" href="/">
        2MUCH
      </a>
      <div class="header__menu">
        <a class="header__menuItem" href="/about">About</a>
        <a class="header__menuItem" href="/contact">Contact</a>
        <a class="header__menuItem" href="/join">Join</a>
      </div>
    </div>
  `
}

})()
