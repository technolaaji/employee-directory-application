(window.webpackJsonp = window.webpackJsonp || []).push([
    [2],
    {
        '6jsY': function(n, t, e) {
            'use strict';
            var r = e('KBEF'),
                u = e('J/q3'),
                a = e('3esu'),
                o = e('8m4E'),
                p = e('Od8a'),
                i = e('UrUy'),
                c = e('PL1w');
            (t.__esModule = !0),
                (t.Container = function(n) {
                    0;
                    return n.children;
                }),
                (t.createUrl = v),
                (t.default = void 0);
            var s = c(e('pzQc')),
                l = c(e('VJxl')),
                f = c(e('mXGw')),
                h = e('z4BS');
            function d(n) {
                return w.apply(this, arguments);
            }
            function w() {
                return (w = (0, l.default)(
                    i.mark(function n(t) {
                        var e, r, u;
                        return i.wrap(function(n) {
                            for (;;)
                                switch ((n.prev = n.next)) {
                                    case 0:
                                        return (
                                            (e = t.Component),
                                            (r = t.ctx),
                                            (n.next = 3),
                                            (0, h.loadGetInitialProps)(e, r)
                                        );
                                    case 3:
                                        return (
                                            (u = n.sent),
                                            n.abrupt('return', { pageProps: u })
                                        );
                                    case 5:
                                    case 'end':
                                        return n.stop();
                                }
                        }, n);
                    })
                )).apply(this, arguments);
            }
            t.AppInitialProps = h.AppInitialProps;
            var m = (function(n) {
                function t() {
                    return r(this, t), a(this, o(t).apply(this, arguments));
                }
                return (
                    p(t, n),
                    u(t, [
                        {
                            key: 'componentDidCatch',
                            value: function(n, t) {
                                throw n;
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var n = this.props,
                                    t = n.router,
                                    e = n.Component,
                                    r = n.pageProps,
                                    u = v(t);
                                return f.default.createElement(
                                    e,
                                    (0, s.default)({}, r, { url: u })
                                );
                            },
                        },
                    ]),
                    t
                );
            })(f.default.Component);
            function v(n) {
                var t = n.pathname,
                    e = n.asPath,
                    r = n.query;
                return {
                    get query() {
                        return r;
                    },
                    get pathname() {
                        return t;
                    },
                    get asPath() {
                        return e;
                    },
                    back: function() {
                        n.back();
                    },
                    push: function(t, e) {
                        return n.push(t, e);
                    },
                    pushTo: function(t, e) {
                        var r = e ? t : '',
                            u = e || t;
                        return n.push(r, u);
                    },
                    replace: function(t, e) {
                        return n.replace(t, e);
                    },
                    replaceTo: function(t, e) {
                        var r = e ? t : '',
                            u = e || t;
                        return n.replace(r, u);
                    },
                };
            }
            (t.default = m),
                (m.origGetInitialProps = d),
                (m.getInitialProps = d);
        },
        becm: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                '/_app',
                function() {
                    return e('6jsY');
                },
            ]);
        },
    },
    [['becm', 0, 1]],
]);
