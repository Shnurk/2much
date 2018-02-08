(() => {

const b = global.skin.Brick.render

global.skin.Contact = {
  render: renderContact
}

function renderContact () {
  const text = paragraphs
    .split('\n\n')
    .map(p => p.trim().replace(/\s+/g, ' '))
    .join('<br><br>')

  return (
    b('About', (
      b('About__container', [
        b('About__title', title),
        b('About__text About__email', text)
      ])
    ))
  )
}

var title = 'Contact us'
var email = 'hello@againstmanagement.com'
var paragraphs = `
  <a class="Contacts__email" href="mailto:${email}">${email}</a>
`

// function renderContact (props) {
//   return q.html`
//     <div class="Contacts">
//       <div class="Contacts__title">CONTACT US</div>
//       ${contacts.map(c => `
//         <div class="Contacts__item">
//           <a class="Contacts__itemRow Contacts__itemRow_link" href="mailto:${c.email}">${c.email}</a>
//         </div>
//       `).join('')}
//     </div>
//   `
//   // <div class="Contacts__itemRow Contacts__itemRow_title">${c.name}</div>
// }

// var contacts = [
//   {
//     name: 'Alexey',
//     position: 'CEO & Founder',
//     email: 'hello@againstmanagement.com',
//     phone: '+7 (931) 251-84-44'
//   }
// ]

})()
