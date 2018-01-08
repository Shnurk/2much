(() => {

const b = global.skin.Brick.render

global.skin.Footer = {
  render: renderFooter
}

function renderFooter () {
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
        '© 2Much Model Management, 2017'
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
