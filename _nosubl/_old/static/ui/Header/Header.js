function Header() {
  return `
    <div class="header">
      <div class="menu">
        <a class="menu__item" href="/men">Men</a>
        <a class="menu__item" href="/women">Women</a>
        <a class="menu__item" href="/news">News</a>
      </div>
      <a class="header__logo" href="/">2Much</a>
      <div class="menu">
        <a class="menu__item" href="/about">About</a>
        <a class="menu__item" href="/contact">Contact</a>
        <a class="menu__item" href="/join">Join</a>
      </div>
    </div>
  `;
}

module.exports = Header;
