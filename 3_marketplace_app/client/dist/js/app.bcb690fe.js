;(function (t) {
  function e(e) {
    for (
      var n, a, s = e[0], i = e[1], u = e[2], d = 0, p = [];
      d < s.length;
      d++
    )
      (a = s[d]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]),
        (o[a] = 0)
    for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
    l && l(e)
    while (p.length) p.shift()()
    return c.push.apply(c, u || []), r()
  }
  function r() {
    for (var t, e = 0; e < c.length; e++) {
      for (var r = c[e], n = !0, s = 1; s < r.length; s++) {
        var i = r[s]
        0 !== o[i] && (n = !1)
      }
      n && (c.splice(e--, 1), (t = a((a.s = r[0]))))
    }
    return t
  }
  var n = {},
    o = { app: 0 },
    c = []
  function a(e) {
    if (n[e]) return n[e].exports
    var r = (n[e] = { i: e, l: !1, exports: {} })
    return t[e].call(r.exports, r, r.exports, a), (r.l = !0), r.exports
  }
  ;(a.m = t),
    (a.c = n),
    (a.d = function (t, e, r) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
    }),
    (a.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (a.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var n in t)
          a.d(
            r,
            n,
            function (e) {
              return t[e]
            }.bind(null, n)
          )
      return r
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t['default']
            }
          : function () {
              return t
            }
      return a.d(e, 'a', e), e
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (a.p = '/')
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    i = s.push.bind(s)
  ;(s.push = e), (s = s.slice())
  for (var u = 0; u < s.length; u++) e(s[u])
  var l = i
  c.push([0, 'chunk-vendors']), r()
})({
  0: function (t, e, r) {
    t.exports = r('56d7')
  },
  '034f': function (t, e, r) {
    'use strict'
    var n = r('64a9'),
      o = r.n(n)
    o.a
  },
  '56d7': function (t, e, r) {
    'use strict'
    r.r(e)
    var n = r('2b0e'),
      o = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r(
          'div',
          { attrs: { id: 'app' } },
          [
            r(
              'div',
              { attrs: { id: 'nav' } },
              [
                r('router-link', { attrs: { to: '/' } }, [t._v('Home')]),
                t._v(' |\n    '),
                r('router-link', { attrs: { to: '/about' } }, [t._v('About')])
              ],
              1
            ),
            r('router-view')
          ],
          1
        )
      },
      c = [],
      a = (r('034f'), r('2877')),
      s = {},
      i = Object(a['a'])(s, o, c, !1, null, null, null),
      u = i.exports,
      l = r('8c4f'),
      d = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r('div', { staticClass: 'home' }, [r('ProductList')], 1)
      },
      p = [],
      f = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r('div', [
          r('div', { staticClass: 'row' }, [
            r('div', { staticClass: 'col-1' }),
            r('div', { staticClass: 'col-8' }, [
              r('h1', [t._v('Product List')]),
              r('div', { staticClass: 'card' }, [
                t.loading
                  ? r('img', {
                      attrs: { src: 'https://i.imgur.com/JfPpwOA.gif' }
                    })
                  : r(
                      'ul',
                      { staticClass: 'list-group list-group-flush' },
                      t._l(t.products, function (e) {
                        return r(
                          'li',
                          { staticClass: 'list-group-item' },
                          [
                            t._v(
                              '\n            ' +
                                t._s(e.title) +
                                ' - ' +
                                t._s(t._f('currency')(e.price)) +
                                ' - ' +
                                t._s(e.inventory) +
                                '\n            '
                            ),
                            r(
                              'router-link',
                              {
                                attrs: {
                                  to: { name: 'product', params: { id: e.id } }
                                }
                              },
                              [t._v('details')]
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
              ])
            ]),
            r('div', { staticClass: 'col-3' })
          ])
        ])
      },
      m = [],
      h = {
        data() {
          return { loading: !1 }
        },
        computed: {
          products() {
            return this.$store.state.products
          },
          productIsInStock() {
            return this.$store.getters.productIsInStock
          }
        },
        methods: {
          addProductToCart(t) {
            this.$store.dispatch('addProductToCart', t)
          },
          selectProduct(t) {
            this.$store.dispatch('selectProduct', t)
          }
        },
        created() {
          ;(this.loading = !0),
            this.$store
              .dispatch('fetchProducts')
              .then(() => (this.loading = !1))
        }
      },
      v = h,
      b = Object(a['a'])(v, f, m, !1, null, '2737710b', null),
      _ = b.exports,
      C = { name: 'home', components: { ProductList: _ } },
      g = C,
      y = Object(a['a'])(g, d, p, !1, null, null, null),
      P = y.exports,
      w = function () {
        var t = this,
          e = t.$createElement
        t._self._c
        return t._m(0)
      },
      $ = [
        function () {
          var t = this,
            e = t.$createElement,
            r = t._self._c || e
          return r('div', { staticClass: 'about' }, [
            r('h1', [t._v('This is an about page')])
          ])
        }
      ],
      O = {},
      j = Object(a['a'])(O, w, $, !1, null, null, null),
      x = j.exports,
      S = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r('div', { staticClass: 'product' }, [r('Product')], 1)
      },
      k = [],
      T = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r('div', [
          r('div', { staticClass: 'row' }, [
            r('div', { staticClass: 'col-1' }),
            r('div', { staticClass: 'col-8' }, [
              r('div', { staticClass: 'card' }, [
                r('img', {
                  staticClass: 'card-img-top',
                  attrs: { src: 'https://i.imgur.com/JfPpwOA.gif', alt: '...' }
                }),
                r(
                  'div',
                  { staticClass: 'card-body' },
                  [
                    r('h5', { staticClass: 'card-title' }, [
                      t._v(t._s(t.product.title) + ' title')
                    ]),
                    r('p', { staticClass: 'card-text' }, [
                      t._v(t._s(t.product.description))
                    ]),
                    r(
                      'router-link',
                      {
                        staticClass: 'btn btn-primary',
                        attrs: { to: '/contact' }
                      },
                      [t._v('New')]
                    )
                  ],
                  1
                )
              ])
            ]),
            r('div', { staticClass: 'col-3' }, [
              t._v('\n      Variable width content\n    ')
            ])
          ])
        ])
      },
      I = [],
      E = {
        data() {
          return { loading: !1, id: this.$route.params.id }
        },
        computed: {
          product() {
            return this.$store.getters.selectedProduct
          }
        },
        methods: {
          addProductToCart(t) {
            this.$store.dispatch('addProductToCart', t)
          }
        },
        created() {
          this.$store
            .dispatch('selectProduct', this.id)
            .then(() => (this.loading = !1))
        }
      },
      L = E,
      M = Object(a['a'])(L, T, I, !1, null, null, null),
      J = M.exports,
      N = { name: 'product', components: { Product: J } },
      A = N,
      F = Object(a['a'])(A, S, k, !1, null, null, null),
      D = F.exports,
      H = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r(
          'div',
          { staticClass: 'contact_form' },
          [t._v('\n  xxx\n  '), r('Contact')],
          1
        )
      },
      X = [],
      V = function () {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e
        return r('div', [
          r(
            'form',
            {
              on: {
                submit: function (e) {
                  return e.preventDefault(), t.createContact(t.contact)
                }
              }
            },
            [
              r('input', {
                attrs: { id: 'subject' },
                domProps: { value: t.contact.subject },
                on: {
                  input: function (e) {
                    return t.updateLocaleContact(e)
                  }
                }
              }),
              r('input', {
                attrs: { id: 'body' },
                domProps: { value: t.contact_form.body },
                on: {
                  input: function (e) {
                    return t.updateLocaleContact(e)
                  }
                }
              }),
              r('input', { attrs: { type: 'submit', value: 'Submit' } })
            ]
          )
        ])
      },
      W = [],
      q = r('2f62'),
      z = {
        data() {
          return { contact: { subject: '', body: '' } }
        },
        methods: {
          createContact(t) {
            this.$store.dispatch('createContact', contact),
              this.$router.push('/')
          },
          updateLocaleContact(t) {
            this.$set(this.contact, t.target.id, t.target.value)
          }
        }
      },
      B = z,
      G = Object(a['a'])(B, V, W, !1, null, null, null),
      K = G.exports,
      Q = { name: 'contact', components: { Contact: K } },
      R = Q,
      U = Object(a['a'])(R, H, X, !1, null, null, null)
    U.exports
    n['a'].use(l['a'])
    var Y = new l['a']({
      mode: 'history',
      base: '/',
      routes: [
        { path: '/', name: 'home', component: P },
        { path: '/product/:id', name: 'product', component: D },
        { path: '/contact', name: 'contact', component: P },
        { path: '/about', name: 'about', component: x }
      ]
    })
    const Z = [
        {
          id: 1,
          description: 'Lorem Ipsum...1',
          picture: '',
          title: 'iPad 4 Mini',
          price: 500.01,
          inventory: 2
        },
        {
          id: 2,
          description: 'Lorem Ipsum...2',
          picture: '',
          title: 'H&M T-Shirt White',
          price: 10.99,
          inventory: 10
        },
        {
          id: 3,
          description: 'Lorem Ipsum...3',
          picture: '',
          title: 'Charli XCX - Sucker CD',
          price: 19.99,
          inventory: 5
        }
      ],
      tt = (t) => {
        return new Promise((e, r) => {
          setTimeout(() => e(Z[t]), 100)
        })
      },
      et = () => {
        return new Promise((t, e) => {
          setTimeout(() => t(Z, 100))
        })
      }
    async function rt() {
      const t = await et()
      return t
    }
    async function nt(t) {
      const e = await tt(t)
      return e
    }
    var ot = {
        async fetchProducts({ commit: t }) {
          const e = await rt()
          t('setProducts', e)
        },
        async selectProduct({ commit: t }, e) {
          const r = await nt(e)
          t('setProduct', r)
        },
        getNewProduct() {
          commit('setProduct', product)
        },
        async createContact({ commit: t }, e) {
          await postContact(e), t('addNewContact', e)
        }
      },
      ct = {
        productIsInStock() {
          return (t) => {
            return t.inventory > 0
          }
        },
        selectedProduct(t) {
          return t.product ? t.product : null
        }
      },
      at = {
        setProducts(t, e) {
          t.products = e
        },
        setProduct(t, e) {
          t.product = e
        },
        decrementProductInventory(t, e) {
          e.inventory--
        },
        createContact(t, e) {
          t.contact = e
        },
        addNewContact(t, e) {}
      }
    n['a'].use(q['a'])
    var st = new q['a'].Store({
      state: { products: [], product: null },
      getters: ct,
      actions: ot,
      mutations: at
    })
    const it = /(\d{3})(?=\d)/g
    function ut(t, e, r) {
      if (((t = parseFloat(t)), !isFinite(t) || (!t && 0 !== t))) return ''
      ;(e = null != e ? e : '$'), (r = null != r ? r : 2)
      var n = Math.abs(t).toFixed(r),
        o = r ? n.slice(0, -1 - r) : n,
        c = o.length % 3,
        a = c > 0 ? o.slice(0, c) + (o.length > 3 ? ',' : '') : '',
        s = r ? n.slice(-1 - r) : '',
        i = t < 0 ? '-' : ''
      return i + e + a + o.slice(c).replace(it, '$1,') + s
    }
    ;(n['a'].config.productionTip = !1),
      n['a'].filter('currency', ut),
      new n['a']({ router: Y, store: st, render: (t) => t(u) }).$mount('#app')
  },
  '64a9': function (t, e, r) {}
})
//# sourceMappingURL=app.bcb690fe.js.map
