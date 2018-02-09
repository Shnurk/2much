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
        b('About__text', text)
      ])
    ))
  )
}

var title = 'Against Model Management'
var email = 'hello@againstmanagement.com'
var paragraphs = `
  We are the model agency from Saint-Petersburg, Russia.

  Our main idea is a friendly relationship between booker’s team and models.
  We are always glad to meet up models, stylists, photographers, and agencies
  all around the world. And we think this information is enough :)

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
