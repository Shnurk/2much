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
var emailBoys = 'boys@againstmanagement.com'
var emailGirls = 'girls@againstmanagement.com'
var paragraphs = `
  We are team based in Saint-Petersburg, Russia that is scouting and developing exclusive young talents.

  Our main concept is to build and lead modelling career at all main fashion markets while focusing on promoting and growing personality. Welcome to work with us to make statement together.

  <div class="About__contacts">
    <div class="About__contactsLine About__contactsLine_city">
      Saint Petersburg
    </div>
    <div class="About__contactsLine">
      Naberezhnaia Reki Moiki 9
    </div>
    <div class="About__contactsLine">
      <a class="About__email" href="mailto:${emailGirls}">${emailGirls}</a>
    </div>
    <div class="About__contactsLine About__contactsLine_lastEmail">
      <a class="About__email" href="mailto:${emailBoys}">${emailBoys}</a>
    </div>
  </div>

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
