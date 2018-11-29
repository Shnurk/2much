const {generateHtml} = require('../../../lib/epos.js')

global.skin.header = {
  render: renderHeader
}

const leftMenu = [
  { title: 'Models', url: '/models' },
  { title: 'Join', url: '/join' }
]

const rightMenu = [
  { title: 'Instagram', url: 'https://instagram.com/againstmanagement', newTab: true },
  { title: 'Contact', url: '/contact' },
]

function renderHeader () {
  return generateHtml({
    class: 'Header',
    inner: {
      class: 'Header__center',
      inner: [
        {
          class: 'Header__menu',
          inner: leftMenu.map(renderMenuItem)
        },
        {
          tag: 'a',
          class: 'Header__logo',
          href: '/models',
          inner: 'Against'
        },
        {
          class: 'Header__menu Header__menu_right',
          inner: rightMenu.map(renderMenuItem)
        }
      ]
    }
  })

  return (
    b('Header', [
      b({ class: 'Header__center' }, [
        b({ class: 'Header__menu' }, leftMenu.map(renderMenuItem)),
        b({
          class: 'Header__logo',
          tag: 'a',
          href: '/models',
        }, 'Against'),
        b({ class: 'Header__menu' }, rightMenu.map(renderMenuItem)),
      ]),
    ])
  )
}

function renderMenuItem (item) {
  return {
    tag: 'a',
    class: 'Header__menuItem Link',
    href: item.url,
    target: item.newTab && '_blank',
    inner: item.title
  }
}
