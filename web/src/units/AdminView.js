(() => {

const $ = global.skin.Brick.render
const state = g.state
const Page = g.skin.page
const AdminLayout = g.skin.AdminLayout
const Uploader = g.unit.Uploader

g.unit.AdminView = {
  build: buildAdminView
}

/**
 * props = {
 *   js: URL[]
 *   css: URL[]
 * }
 */
function buildAdminView (props) {
  return Page.render({
    js: props.js,
    css: props.css,
    title: 'AGAINST | Admin',
    body:
      props.type === 'login' ? `
        <form class="adminForm" action="${props.originalUrl}" method="POST">
          <label class="adminForm__row">
            <div class="adminForm__label">Пароль</div>
            <input class="adminForm__input" name="password" type="password">
          </label>
          <label class="adminForm__row">
            <button class="adminForm__submit" type="submit">Сохранить</button>
          </label>
        </form>
      `
    : (
      AdminLayout.render({
        menu: [
          { title: 'Models', url: '/admin/models' },
          { title: 'News', url: '/admin/articles' },
          { title: 'Applications', url: '/admin/applications' }
        ]
      }, (
        buildContent(props)
      ))
    )
  })
}

function buildContent (props) {
  const type = props.type

  if (type === 'list') {
    return (
      props.persons ? buildListPersons(props.persons) :
      props.articles ? buildListArticles(props.articles) :
      props.applications ? buildListApplications(props.applications) :
      ''
    )
  }

  if (type === 'edit') {
    return (
      props.person ? buildFormPerson(props.person) :
      props.article ? buildFormArticle(props.article, props.allModels) :
      ''
    )
  }

  if (type === 'create') {
    return (
      props.what === 'person' ? buildFormPerson(null) :
      props.what === 'articles' ? buildFormArticle(null, props.allModels) :
      ''
    )
  }
}

function buildListPersons (persons) {
  return (
    $('AdminLayout', [
      $({ tag: 'a', class: 'AdminList__new', href: '/admin/models/new' }, '[+]'),
      $('AdminLayout__items', (
        persons.reverse().map((person, i) => (
          $({
            tag: 'a',
            class: 'AdminList__item',
            'data-id': person._id,
            href: `/admin/models/${person._id}`
          }, [
            $({
              class: 'AdminList__itemPhoto',
              style: person.cover && (
                `background-image: url('/media/small/${person.cover.fileName}')`
              )
            }),
            $('AdminList__itemName', (
              person.name || $({ tag: 'i' }, 'no name')
            ))
          ])
        ))
      ))
    ])
  )
}

function buildFormPerson (person) {
  const isEdit = !!person
  person || (person = {
    _id: '',
    name: '',
    slug: '',
    gender: 0,
    instagram: '',
    params: {
      height: null,
      chest: null,
      waist: null,
      hips: null,
      shoe: null,
      hair: '',
      eyes: '',
    },
    cover: '',
    book: [],
    polaroids: []
  })

  const onSaveClick = q.onClick('skin.AdminForm._onSaveClick', isEdit)
  const onDeleteClick = q.onClick('skin.AdminForm._onDeleteClick', 'event')

  return q.html`
    <div class="AdminForm">
      <div class="AdminForm__body">
        <div class="AdminForm__column">
          <label class="AdminForm__section">
            <div class="AdminForm__title">Name</div>
            <div class="AdminForm__content">
              <input class="AdminForm__input" name="name" value="${person.name}" />
            </div>
          </label>

          <label class="AdminForm__section">
            <div class="AdminForm__title">Sex</div>
            <div class="AdminForm__content">
              <select class="AdminForm__select" name="gender">
                <option value="0" ${person.gender === 0 && 'selected'}>Female</option>
                <option value="1" ${person.gender === 1 && 'selected'}>Male</option>
              </select>
            </div>
          </label>

          <label class="AdminForm__section">
            <div class="AdminForm__title">Instagram</div>
            <div class="AdminForm__content">
              <input class="AdminForm__input" name="instagram" value="${person.instagram}" />
            </div>
          </label>

          <div class="AdminForm__section">
            <div class="AdminForm__title">Params</div>
            <div class="AdminForm__content">
              <label class="AdminForm__row">
                <div class="AdminForm__label">height</div>
                <input class="AdminForm__input" name="height" type="number" value="${person.params.height}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">chest</div>
                <input class="AdminForm__input" name="chest" type="number" value="${person.params.chest}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">waist</div>
                <input class="AdminForm__input" name="waist" type="number" value="${person.params.waist}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">hips</div>
                <input class="AdminForm__input" name="hips" type="number" value="${person.params.hips}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">shoe</div>
                <input class="AdminForm__input" name="shoe" type="number" value="${person.params.shoe}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">hair</div>
                <input class="AdminForm__input" name="hair" value="${person.params.hair}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">eyes</div>
                <input class="AdminForm__input" name="eyes" value="${person.params.eyes}" />
              </label>
            </div>
          </div>
        </div>

        <div class="AdminForm__column AdminForm__column_uploads">
          <div class="AdminForm__section AdminForm__section_cover AdminForm__section_upload">
            <div class="AdminForm__title">Cover</div>
            <div class="AdminForm__content">
              ${person.cover && (
                skin.PhotoLoad.render({
                  id: person.cover._id,
                  photo: `/media/small/${person.cover.fileName}`,
                  percent: 100,
                })
              )}
            </div>
          </div>

          <div class="AdminForm__section AdminForm__section_book AdminForm__section_upload">
            <div class="AdminForm__title">Book</div>
            <div class="AdminForm__content">
              ${person.book.map(p => (
                skin.PhotoLoad.render({
                  id: p._id,
                  photo: `/media/small/${p.fileName}`,
                  percent: 100,
                })
              ))}
            </div>
          </div>

          <div class="AdminForm__section AdminForm__section_polaroids AdminForm__section_upload">
            <div class="AdminForm__title">Polaroids</div>
            <div class="AdminForm__content">
              ${person.polaroids.map(p => (
                skin.PhotoLoad.render({
                  id: p._id,
                  photo: `/media/small/${p.fileName}`,
                  percent: 100,
                })
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="AdminForm__footer">
        <button class="AdminForm__save" ${onSaveClick}>
          ${isEdit ? 'Save' : 'Create'}
        </button>
        ${isEdit && (q.html`
          <form action="/admin/models/${person._id}/delete" method="POST">
            <button class="AdminForm__delete" ${onDeleteClick}>
              Delete
            </button>
          </form>
        `)}
        <div class="AdminForm__saved">
          Changes saved
        </div>
      </div>
    </div>
  `
}


function buildListApplications (applications) {
  applications = applications.reverse()
  return html(`
    <div class="AdminLayout">
      <table class="AdminTable">
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>City</td>
            <td>Phone</td>
            <td>Mail</td>
            <td>Social</td>
            <td>Age</td>
            <td>Height</td>
            <td>Chest</td>
            <td>Waist</td>
            <td>Hips</td>
            <td>Shoe</td>
          </tr>
        </thead>
        <tbody>
          ${applications.map((application, i) => html(`
            <tr>
              <td>${i + 1}</td>
              <td>${application.name || '—'}</td>
              <td>${application.city || '—'}</td>
              <td>${application.phone || '—'}</td>
              <td>${application.mail || '—'}</td>
              <td>${application.social || '—'}</td>
              <td>${application.params.age || '—'}</td>
              <td>${application.params.height || '—'}</td>
              <td>${application.params.chest || '—'}</td>
              <td>${application.params.waist || '—'}</td>
              <td>${application.params.hips || '—'}</td>
              <td>${application.params.shoe || '—'}</td>
            </tr>
          `)).join('')}
        </tbody>
      </table>
    </div>
  `)
}

function html (str) {
  return str
}


function buildListArticles (articles) {
  articles = articles.reverse()
  return (
    $('AdminLayout', [
      $({ tag: 'a', class: 'AdminList__new', href: '/admin/articles/new' }, '[+]'),
      articles.map((article, i) => (
        $({
          tag: 'a',
          class: 'AdminList__item',
          href: `/admin/articles/${article._id}`
        }, [
          $({
            class: 'AdminList__itemPhoto',
            style: article.photos.length && (
              `background-image: url('/media/small/${article.photos[0].fileName}')`
            )
          }),
          $('AdminList__itemName', (
            article.titlePretty || $({ tag: 'i' }, 'no title')
          ))
        ])
      ))
    ])
  )
}

function buildFormArticle (article, allModels) {
  const isEdit = !!article
  article || (article = {
    _id: '',
    title: '',
    slug: '',
    models: [],
    photos: [],
    date: {
      day: null,
      month: null,
      year: null
    }
  })

  const onSaveClick = q.onClick('skin.AdminForm._onSaveClick', isEdit)
  const onDeleteClick = q.onClick('skin.AdminForm._onDeleteClick', 'event')

  return q.html`
    <div class="AdminForm">
      <div class="AdminForm__body">
        <div class="AdminForm__column">
          <label class="AdminForm__section">
            <div class="AdminForm__title">Title</div>
            <div class="AdminForm__content">
              <input class="AdminForm__input" name="title" value="${article.title}"
                placeholder="{model1} and {model2} for Vogue"
                style="width: 300px"
              />
            </div>
          </label>

          <div class="AdminForm__section">
            <div class="AdminForm__title">Date</div>
            <div class="AdminForm__content">
              <label class="AdminForm__row">
                <div class="AdminForm__label">day</div>
                <input class="AdminForm__input" name="day" type="number" value="${article.date.day}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">month</div>
                <input class="AdminForm__input" name="month" type="number" value="${article.date.month}" />
              </label>
              <label class="AdminForm__row">
                <div class="AdminForm__label">year</div>
                <input class="AdminForm__input" name="year" type="number" value="${article.date.year || 2017}" />
              </label>
            </div>
          </div>

          <div class="AdminForm__section">
            <div class="AdminForm__title">Models</div>
            <div class="AdminForm__content">
              ${article.models.map(model => q.html`
                <label class="AdminForm__row">
                  <select class="AdminForm__select AdminForm__model">
                    ${allModels.map(m => q.html`
                      <option value="${m._id}" ${m._id === model._id ? 'selected' : ''}>${m.name}</option>
                    `)}
                  </select>
                  <div class="AdminForm__selectRemove" onclick="window.removeSelect(this)">×</div>
                </label>
              `)}
              <label class="AdminForm__row">
                <select
                  class="AdminForm__select AdminForm__model AdminForm__addModel"
                  onchange="window.onAddModelChange(this)"
                >
                  <option id="selected_model_option" value="0" selected>Select model</option>
                  ${allModels.map(m => q.html`
                    <option value="${m._id}">${m.name}</option>
                  `)}
                </select>
                <div class="AdminForm__selectRemove" onclick="window.removeSelect(this)">×</div>
              </label>
            </div>
          </div>
        </div>

        <div class="AdminForm__column AdminForm__column_uploads">
          <div class="AdminForm__section AdminForm__section_photos AdminForm__section_upload">
            <div class="AdminForm__title">Photos</div>
            <div class="AdminForm__content">
              ${article.photos.map(p => (
                skin.PhotoLoad.render({
                  id: p._id,
                  photo: `/media/small/${p.fileName}`,
                  percent: 100,
                })
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="AdminForm__footer">
        <button class="AdminForm__save" ${onSaveClick}>
          ${isEdit ? 'Save' : 'Create'}
        </button>
        ${isEdit && (q.html`
          <form action="/admin/articles/${article._id}/delete" method="POST">
            <button class="AdminForm__delete" ${onDeleteClick}>
              Delete
            </button>
          </form>
        `)}
        <div class="AdminForm__saved">
          Changes saved
        </div>
      </div>
    </div>
  `
}

})()
