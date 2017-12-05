/* global q */
/* global skin */

;(() => {

skin.footer = {
  render: renderFooter
}


function renderFooter () {
  return q.html`
    <div class="footer">
      <div class="footer__socials">
        ${renderSocial(socials.facebook)}
        ${renderSocial(socials.instagram)}
        ${renderSocial(socials.vk)}
      </div>
      <div class="footer__rights">
        © 2Much Model Management, 2017
      </div>
    </div>
  `;
}


function renderSocial (social) {
  return q.html`
    <a class="footer__social" href="${social.url}" target="_blank">
      <img class="footer__socialImage" src="${social.image}" />
    </a>
  `
}


var socials = {
  facebook: {
    url: 'https://facebook.com/2much',
    image: '/images/facebook.png',
  },
  instagram: {
    url: 'https://instagram.com/2much',
    image: '/images/instagram.png'
  },
  vk: {
    url: 'https://vk.com/2much',
    image: '/images/vk.png'
  }
}

})()
