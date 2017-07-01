function Header() {
  return `
    <div class="header">
      <div class="menu">
        <a class="menu__item" href="men.html">Men</a>
        <a class="menu__item" href="women.html">Women</a>
        <a class="menu__item" href="news.html">News</a>
      </div>
      <a class="header__logo" href="text.html">2much</a>
      <div class="menu">
        <a class="menu__item" href="about.html">About</a>
        <a class="menu__item" href="contact.html">Contact</a>
        <a class="menu__item" href="join.html">Join</a>
      </div>
    </div>
  `;
}

module.exports = Header;
