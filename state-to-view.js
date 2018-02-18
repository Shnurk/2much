const state = {
  products: {
    [id]: {
      id: String
      title: String
      price: Number
    }
    ...
  }

  categories: [
    {
      id: String
      title: String
      productIds: String[]
    }
    ...
  ]

  cart: [
    {
      productId: String
      count: Number
    }
    ...
  ]
}

ui = {
  getTabs() {

  },

  getActiveCategoryProducts () {
    var activeCategoryId = state.activeCategoryId
    var activeCategory = state.categories.find(id => id === activeCategoryId)
    return activeCategory.productIds.map(id => {
      var product = state.products[id]

      return {
        id: product.id,
      }
    })
  },

  getCart () {
    return state.cart
  }
}

var Layout = mdl.require('view.common.Layout')
var Cart = mdl.require('view.shop.Cart')
var Product = mdl.require('view.shop.Product')

var model = self = {
  get () {
    return {
      tabs: self.getTabs(),
      products: self.getProducts(),
      cart: self.getCart()
    }
  }

  getTabs () {
    return state.categories.map(self.getTab)
  }

  getTab (category) {
    return {
      id: category.id,
      title: category.title,
      isActive: category.id === state.activeCategoryId
    }
  }

  getProducts () {
    var activeCategory = state.categories.find(c.id === state.activeCategoryId)
    activeCategory.products.map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
      isInCart: state.cart.some(i => i.productId === p.id),
    }))
  }
}


state.getActiveCategory(s)
statea.getCategoryProducts(s, categoryId)

function stateToView (state) {
  model.getTabs()
  model.getProducts()
  model.getCart()

  return Page.render({
    body: Layout.render({
      header: Tabs.render(model.tabs),
      content: Showcase.render(model.products),
      cart: Cart.render(model.cart)
    })
  })

  return {
    class: 'page',
    inner: [
      {
        class: 'page__body',
        inner: [
          {
            class: 'layout',
            inner: [
              {
                class: 'layout__header',
                inner: {
                  class: 'tabs',
                  inner: state.categories.map(c => ({
                    class: 'tabs__tab',
                    data: { id: c.id },
                    inner: c.title,
                    onclick: [ 'ui.onCategoryClick', c.id ],
                  }))
                }
              },
              {
                class: 'layout__content',
                inner: {
                  class: 'showcase',
                  inner: state.getActiveCategoryProducts().map(p => ({ // ui.buildShowcase
                    {
                      class: 'showcase__product',
                      data: { id: p.id },
                      onclick: [ 'ui.onProductClick', p.id ]
                    }
                  }))
                }
              }
            ]
          }
        ]
      }
    ]
  }
}


view.showcase.render = (props) => {
  return {
    class: 'showcase',
    inner: renderInner
  }
}

function renderInner(products) {
  return products.map(p => ({
    {
      class: 'showcase__product',
      data: { id: p.id },
      onclick: [ 'ui.onProductClick', p.id ]
    }
  }))
}

view.setShowcaseProducts = (products) => {
  $('.showcase').inner = renderInner(products)
}





// state
state.activeCategoryId = categoryId

// view
const $clickedTab = $(sel.tab(categoryId))
const $activeTab = $(sel.tabActive)
$activeTab.classList.remove(cls.tabActive)
$clickedTab.classList.add(cls.tabActive)

ui._onCategoryClick = ui.menuSetCategory

ui.menuSetCategory = (categoryId) => {
  if (state.activeCategoryId !== categoryId) {
    state.setActiveCategoryId(categoryId)
    view.setActiveCategoryId(categoryId)
    view.setShowcaseProducts(products)
  }
}

ui.onCartItemMinusClick = cartDecrease
ui.onCartItemPlusClick = cartIncrease

mdl.extend('ui', {
  setCategory,
  cartIncrease,
  cartDecrease
})

function cartIncrease (productId) {
  const newCount = state.cart.increase(productId)
  if (newCount === 1) {
    const product = state.getProduct(productId)
    view.cart.add(product)
  } else {
    view.cart.setCount(productId, newCount)
  }
}

function cartDecrease (productId) {
  const newCount = state.cart.decrease(productId)
  if (newCount === 0) {
    view.cart.destroy(productId)
  } else {
    view.cart.setCount(productId, newCount)
  }
}
