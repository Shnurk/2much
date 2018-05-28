(() => {

const b = global.skin.Brick.render

global.skin.header = {
  render: renderHeader
}

function renderHeader () {
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
  return (
    b({
      class: 'Header__menuItem',
      tag: 'a',
      href: item.url,
      target: item.newTab && '_blank'
    }, (
      item.title
    ))
  )
}

var leftMenu = [
  { title: 'Models', url: '/models' },
  { title: 'Join', url: '/join' }
  // { title: 'News', url: '/news' }
]

var rightMenu = [
  // { title: 'About', url: '/about' },
  { title: 'Instagram', url: 'https://instagram.com/againstmanagement', newTab: true },
  { title: 'Contact', url: '/contact' },
]

})()
