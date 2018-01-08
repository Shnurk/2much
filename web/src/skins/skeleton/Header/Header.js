(() => {

const b = global.skin.Brick.render

global.skin.header = {
  render: renderHeader
}

function renderHeader () {
  return (
    b('Header', [
      b({ class: 'Header__menu' }, leftMenu.map(renderMenuItem)),
      b({ class: 'Header__logo', tag: 'a', href: '/' }, 'AGAINST'),
      b({ class: 'Header__menu' }, rightMenu.map(renderMenuItem))
    ])
  )
}

function renderMenuItem (item) {
  return (
    b({
      class: 'Header__menuItem',
      tag: 'a',
      href: item.url
    }, (
      item.title
    ))
  )
}

var leftMenu = [
  { title: 'Models', url: '/models' },
  { title: 'News', url: '/news' }
]

var rightMenu = [
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' }
  // { title: 'Join', url: '/join' }
]

})()
