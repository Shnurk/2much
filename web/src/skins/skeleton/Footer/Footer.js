(() => {

const b = global.skin.Brick.render

global.skin.Footer = {
  render: renderFooter
}

function renderFooter () {
  return `
    <div class="footer">
      <div class="footer__socials">
        <a class="footer__socialsItem" href="https://facebook.com/againstmanagement" target="_blank">
          <img class="socials__image" src="/images/facebook.png" />
        </a>
        <a class="footer__socialsItem" href="https://instagram.com/againstmanagement" target="_blank">
          <img class="socials__image" src="/images/instagram.png" />
        </a>
        <a class="footer__socialsItem" href="https://vk.com/againstmanagement" target="_blank">
          <img class="socials__image" src="/images/vk.png" />
        </a>
      </div>
      <div class="footer__rights">© Against Model Management, 2018</div>
    </div>
  `

  return (
    b('Footer', [
      b('Footer__socials', (
        socials.map(social => (
          b({
            class: 'Footer__social',
            tag: 'a',
            href: social.url,
            target: '_blank'
          }, (
            b({
              class: 'Footer__socialImage',
              tag: 'img',
              src: social.image
            })
          ))
        ))
      )),
      b('Footer__rights', (
        '© 2Much Model Management, 2018'
      ))
    ])
  )
}

var socials = [
  {
    url: 'https://facebook.com/2much',
    image: '/images/facebook.png',
  },
  {
    url: 'https://instagram.com/2much',
    image: '/images/instagram.png'
  },
  {
    url: 'https://vk.com/2much',
    image: '/images/vk.png'
  }
]

})()
