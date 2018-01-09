(() => {

global.skin.Contact = {
  render: renderContact
}

function renderContact (props) {
  return q.html`
    <div class="Contacts">
      <div class="Contacts__title">Our contacts</div>
      ${contacts.map(c => `
        <div class="Contacts__item">
          <div class="Contacts__itemRow Contacts__itemRow_title">${c.name}</div>
          <div class="Contacts__itemRow">${c.position}</div>
          <a class="Contacts__itemRow Contacts__itemRow_link" href="mailto:${c.email}">${c.email}</a>
          <div class="Contacts__itemRow">${c.phone}</div>
        </div>
      `).join('')}
    </div>
  `
}

var contacts = [
  {
    name: 'Alexey Vlasov',
    position: 'CEO & Founder',
    email: 'alexey.vlasov@againstmanagement.com',
    phone: '+7 (931) 251-84-44'
  }
]

})()
