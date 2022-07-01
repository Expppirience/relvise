(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            r = e && "classList" in document.createElement("p"),
            a = e && window.devicePixelRatio > 1,
            i = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            c = function (e) {
              return t({}, i, e);
            },
            s = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                r = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: r } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: r }
                );
              }
              window.dispatchEvent(n);
            },
            l = "src",
            u = "srcset",
            d = "sizes",
            f = "poster",
            h = "llOriginalAttrs",
            g = "data",
            _ = "loading",
            m = "loaded",
            v = "applied",
            p = "error",
            w = "native",
            b = "data-",
            L = "ll-status",
            E = function (t, e) {
              return t.getAttribute(b + e);
            },
            y = function (t) {
              return E(t, L);
            },
            A = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            I = function (t) {
              return A(t, null);
            },
            k = function (t) {
              return null === y(t);
            },
            S = function (t) {
              return y(t) === w;
            },
            x = [_, m, v, p],
            W = function (t, e, n, o) {
              t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            C = function (t, e) {
              r
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            O = function (t, e) {
              r
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            R = function (t) {
              return t.llTempImage;
            },
            q = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            T = function (t, e) {
              t && (t.loadingCount += e);
            },
            M = function (t, e) {
              t && (t.toLoadCount = e);
            },
            z = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            N = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && z(n).forEach(e);
            },
            $ = function (t, e) {
              z(t).forEach(e);
            },
            G = [l],
            j = [l, f],
            B = [l, u, d],
            F = [g],
            P = function (t) {
              return !!t[h];
            },
            V = function (t) {
              return t[h];
            },
            D = function (t) {
              return delete t[h];
            },
            H = function (t, e) {
              if (!P(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[h] = n);
              }
            },
            U = function (t, e) {
              if (P(t)) {
                var n = V(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            J = function (t, e, n) {
              C(t, e.class_applied),
                A(t, v),
                n &&
                  (e.unobserve_completed && q(t, e),
                  W(e.callback_applied, t, n));
            },
            Z = function (t, e, n) {
              C(t, e.class_loading),
                A(t, _),
                n && (T(n, 1), W(e.callback_loading, t, n));
            },
            X = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Y = function (t, e) {
              X(t, d, E(t, e.data_sizes)),
                X(t, u, E(t, e.data_srcset)),
                X(t, l, E(t, e.data_src));
            },
            Q = {
              IMG: function (t, e) {
                N(t, function (t) {
                  H(t, B), Y(t, e);
                }),
                  H(t, B),
                  Y(t, e);
              },
              IFRAME: function (t, e) {
                H(t, G), X(t, l, E(t, e.data_src));
              },
              VIDEO: function (t, e) {
                $(t, function (t) {
                  H(t, G), X(t, l, E(t, e.data_src));
                }),
                  H(t, j),
                  X(t, f, E(t, e.data_poster)),
                  X(t, l, E(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                H(t, F), X(t, g, E(t, e.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            tt = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                W(t.callback_finish, e);
            },
            et = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            nt = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            ot = function (t) {
              return !!t.llEvLisnrs;
            },
            rt = function (t) {
              if (ot(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  nt(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            at = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                T(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                O(t, e.class_loading),
                e.unobserve_completed && q(t, n);
            },
            it = function (t, e, n) {
              var o = R(t) || t;
              ot(o) ||
                (function (t, e, n) {
                  ot(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  et(t, o, e), et(t, "error", n);
                })(
                  o,
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = S(e);
                      at(e, n, o),
                        C(e, n.class_loaded),
                        A(e, m),
                        W(n.callback_loaded, e, o),
                        r || tt(n, o);
                    })(0, t, e, n),
                      rt(o);
                  },
                  function (r) {
                    !(function (t, e, n, o) {
                      var r = S(e);
                      at(e, n, o),
                        C(e, n.class_error),
                        A(e, p),
                        W(n.callback_error, e, o),
                        n.restore_on_error && U(e, B),
                        r || tt(n, o);
                    })(0, t, e, n),
                      rt(o);
                  }
                );
            },
            ct = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? (function (t, e, n) {
                    !(function (t) {
                      t.llTempImage = document.createElement("IMG");
                    })(t),
                      it(t, e, n),
                      (function (t) {
                        P(t) ||
                          (t[h] = { backgroundImage: t.style.backgroundImage });
                      })(t),
                      (function (t, e, n) {
                        var o = E(t, e.data_bg),
                          r = E(t, e.data_bg_hidpi),
                          i = a && r ? r : o;
                        i &&
                          ((t.style.backgroundImage = 'url("'.concat(i, '")')),
                          R(t).setAttribute(l, i),
                          Z(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = E(t, e.data_bg_multi),
                          r = E(t, e.data_bg_multi_hidpi),
                          i = a && r ? r : o;
                        i && ((t.style.backgroundImage = i), J(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = E(t, e.data_bg_set);
                        if (o) {
                          var r = o.split("|"),
                            a = r.map(function (t) {
                              return "image-set(".concat(t, ")");
                            });
                          (t.style.backgroundImage = a.join()),
                            "" === t.style.backgroundImage &&
                              ((a = r.map(function (t) {
                                return "-webkit-image-set(".concat(t, ")");
                              })),
                              (t.style.backgroundImage = a.join())),
                            J(t, e, n);
                        }
                      })(t, e, n);
                  })(t, e, n)
                : (function (t, e, n) {
                    it(t, e, n),
                      (function (t, e, n) {
                        var o = Q[t.tagName];
                        o && (o(t, e), Z(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            st = function (t) {
              t.removeAttribute(l), t.removeAttribute(u), t.removeAttribute(d);
            },
            lt = function (t) {
              N(t, function (t) {
                U(t, B);
              }),
                U(t, B);
            },
            ut = {
              IMG: lt,
              IFRAME: function (t) {
                U(t, G);
              },
              VIDEO: function (t) {
                $(t, function (t) {
                  U(t, G);
                }),
                  U(t, j),
                  t.load();
              },
              OBJECT: function (t) {
                U(t, F);
              },
            },
            dt = function (t, e) {
              (function (t) {
                var e = ut[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (P(t)) {
                        var e = V(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  k(t) ||
                    S(t) ||
                    (O(t, e.class_entered),
                    O(t, e.class_exited),
                    O(t, e.class_applied),
                    O(t, e.class_loading),
                    O(t, e.class_loaded),
                    O(t, e.class_error));
                })(t, e),
                I(t),
                D(t);
            },
            ft = ["IMG", "IFRAME", "VIDEO"],
            ht = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            gt = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var r = (function (t) {
                        return x.indexOf(y(t)) >= 0;
                      })(t);
                      A(t, "entered"),
                        C(t, n.class_entered),
                        O(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && q(t, n);
                        })(t, n, o),
                        W(n.callback_enter, t, e, o),
                        r || ct(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      k(t) ||
                        (C(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return y(t) === _;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (rt(t),
                            (function (t) {
                              N(t, function (t) {
                                st(t);
                              }),
                                st(t);
                            })(t),
                            lt(t),
                            O(t, n.class_loading),
                            T(o, -1),
                            I(t),
                            W(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        W(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            _t = function (t) {
              return Array.prototype.slice.call(t);
            },
            mt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            vt = function (t) {
              return (function (t) {
                return y(t) === p;
              })(t);
            },
            pt = function (t, e) {
              return (function (t) {
                return _t(t).filter(k);
              })(t || mt(e));
            },
            wt = function (t, n) {
              var r = c(t);
              (this._settings = r),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !ht(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        gt(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t)
                    ));
                })(r, this),
                (function (t, n) {
                  e &&
                    ((n._onlineHandler = function () {
                      !(function (t, e) {
                        var n;
                        ((n = mt(t)), _t(n).filter(vt)).forEach(function (e) {
                          O(e, t.class_error), I(e);
                        }),
                          e.update();
                      })(t, n);
                    }),
                    window.addEventListener("online", n._onlineHandler));
                })(r, this),
                this.update(n);
            };
          return (
            (wt.prototype = {
              update: function (t) {
                var e,
                  r,
                  a = this._settings,
                  i = pt(t, a);
                M(this, i.length),
                  !n && o
                    ? ht(a)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ft.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  it(t, e, n),
                                  (function (t, e) {
                                    var n = Q[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  A(t, w);
                              })(t, e, n);
                          }),
                            M(n, 0);
                        })(i, a, this)
                      : ((r = i),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, r))
                    : this.loadAll(i);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  e &&
                    window.removeEventListener("online", this._onlineHandler),
                  mt(this._settings).forEach(function (t) {
                    D(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                pt(t, n).forEach(function (t) {
                  q(t, e), ct(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                mt(t).forEach(function (e) {
                  dt(e, t);
                });
              },
            }),
            (wt.load = function (t, e) {
              var n = c(e);
              ct(t, n);
            }),
            (wt.resetStatus = function (t) {
              I(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) s(t, n);
                  else s(t, e);
              })(wt, window.lazyLoadOptions),
            wt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { exports: {} });
    return t[o].call(a.exports, a, a.exports, n), a.exports;
  }
  (() => {
    "use strict";
    let t = !0,
      e = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let o = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < o.length; t++) {
              o[t].style.paddingRight = "0px";
            }
            (n.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      },
      o = (e = 500) => {
        let n = document.querySelector("body");
        if (t) {
          let o = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < o.length; t++) {
            o[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (n.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (t = !1),
            setTimeout(function () {
              t = !0;
            }, e);
        }
      };
    function r(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    new (n(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class a {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]")
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`
          ),
            r(
              Array.from(t).map(function (t) {
                return `${
                  t.dataset.watchRoot ? t.dataset.watchRoot : null
                }|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              })
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                r = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    r = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(r) === o.threshold
                  )
                    return t;
                }),
                a = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(r, a);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging &&
          (function (t) {
            setTimeout(() => {
              window.FLS && console.log(t);
            }, 0);
          })(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } })
          );
      }
    }
    let i = !1;
    setTimeout(() => {
      if (i) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      window.addEventListener("load", function (t) {
        if (document.querySelector(".whoweare__video")) {
          const t = document.querySelector(".whoweare__video");
          t.addEventListener("click", function (e) {
            t.classList.contains("_init")
              ? (t.querySelector("video").paused
                  ? t.querySelector("video").play()
                  : t.querySelector("video").pause(),
                t.classList.toggle("_active"))
              : (t.classList.add("_active"),
                t.classList.add("_init"),
                t.querySelector("video").play(),
                (t.querySelector("video").muted = !1));
          }),
            t.querySelector("video").addEventListener("ended", function (e) {
              t.classList.remove("_active");
            });
        }
      }),
      (window.FLS = !0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        let n = document.querySelector(".icon-menu");
        console.log(n),
          n &&
            n.addEventListener("click", function (n) {
              t &&
                (((t = 500) => {
                  document.documentElement.classList.contains("lock")
                    ? e(t)
                    : o(t);
                })(),
                document.documentElement.classList.toggle("menu-open"));
            });
      })(),
      new a({}),
      (function () {
        i = !0;
        const t = document.querySelector("header.header"),
          e = t.hasAttribute("data-scroll-show"),
          n = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
          o = t.dataset.scroll ? t.dataset.scroll : 1;
        let r,
          a = 0;
        document.addEventListener("windowScroll", function (i) {
          const c = window.scrollY;
          clearTimeout(r),
            c >= o
              ? (!t.classList.contains("_header-scroll") &&
                  t.classList.add("_header-scroll"),
                e &&
                  (c > a
                    ? t.classList.contains("_header-show") &&
                      t.classList.remove("_header-show")
                    : !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show"),
                  (r = setTimeout(() => {
                    !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show");
                  }, n))))
              : (t.classList.contains("_header-scroll") &&
                  t.classList.remove("_header-scroll"),
                e &&
                  t.classList.contains("_header-show") &&
                  t.classList.remove("_header-show")),
            (a = c <= 0 ? 0 : c);
        });
      })();
  })();
})();
