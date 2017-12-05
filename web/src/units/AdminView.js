(() => {

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
    title: '2much | Admin',
    body: (
      AdminLayout.render({
        menu: [
          { title: 'Модели', url: '/admin/models' },
          { title: 'Статьи', url: '/admin/articles' }
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
    return buildList(props.persons)
  }

  if (type === 'edit') {
    return buildForm(props.person)
  }

  if (type === 'create') {
    return buildForm(null)
  }

  // Uploader.build(),
  // g.skin.PhotoLoad.render()
}


function buildList (persons) {
  return q.html`
    <div class="AdminList">
      <a class="AdminList__new" href="/admin/models/new">[+]</a>
      ${persons.reverse().map((person, i) => q.html`
        <a class="AdminList__item" href="/admin/models/${person._id}">
          <div
            class="AdminList__itemPhoto"
            ${person.cover && `style="background-image: url('/media/small/${person.cover.fileName}')"`}
          ></div>
          <div class="AdminList__itemName">
            ${person.name || '<i>no name</i>'}
          </div>
        </a>
      `)}
    </div>
  `
}

function buildForm (person) {
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

        <div class="AdminForm__column">
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


})()
