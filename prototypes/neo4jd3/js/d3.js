// https://d3js.org Version 4.6.0. Copyright 2017 Mike Bostock.
(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? n(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], n)
    : n((t.d3 = t.d3 || {}));
})(this, function (t) {
  "use strict";
  function n(t) {
    return function (n, e) {
      return Ss(t(n), e);
    };
  }
  function e(t, n, e) {
    var r = Math.abs(n - t) / Math.max(0, e),
      i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
      o = r / i;
    return (
      o >= js ? (i *= 10) : o >= Hs ? (i *= 5) : o >= Xs && (i *= 2),
      n < t ? -i : i
    );
  }
  function r(t) {
    return t.length;
  }
  function i(t, n, e) {
    var r = t(e);
    return "translate(" + (isFinite(r) ? r : n(e)) + ",0)";
  }
  function o(t, n, e) {
    var r = t(e);
    return "translate(0," + (isFinite(r) ? r : n(e)) + ")";
  }
  function u(t) {
    var n = t.bandwidth() / 2;
    return (
      t.round() && (n = Math.round(n)),
      function (e) {
        return t(e) + n;
      }
    );
  }
  function a() {
    return !this.__axis;
  }
  function c(t, n) {
    function e(e) {
      var p,
        d = null == c ? (n.ticks ? n.ticks.apply(n, r) : n.domain()) : c,
        v = null == s ? (n.tickFormat ? n.tickFormat.apply(n, r) : hf) : s,
        _ = Math.max(f, 0) + h,
        y = t === pf || t === vf ? i : o,
        g = n.range(),
        m = g[0] + 0.5,
        x = g[g.length - 1] + 0.5,
        b = (n.bandwidth ? u : hf)(n.copy()),
        w = e.selection ? e.selection() : e,
        M = w.selectAll(".domain").data([null]),
        T = w.selectAll(".tick").data(d, n).order(),
        N = T.exit(),
        k = T.enter().append("g").attr("class", "tick"),
        S = T.select("line"),
        E = T.select("text"),
        A = t === pf || t === _f ? -1 : 1,
        C = t === _f || t === df ? ((p = "x"), "y") : ((p = "y"), "x");
      (M = M.merge(
        M.enter()
          .insert("path", ".tick")
          .attr("class", "domain")
          .attr("stroke", "#000")
      )),
        (T = T.merge(k)),
        (S = S.merge(
          k
            .append("line")
            .attr("stroke", "#000")
            .attr(p + "2", A * f)
            .attr(C + "1", 0.5)
            .attr(C + "2", 0.5)
        )),
        (E = E.merge(
          k
            .append("text")
            .attr("fill", "#000")
            .attr(p, A * _)
            .attr(C, 0.5)
            .attr("dy", t === pf ? "0em" : t === vf ? "0.71em" : "0.32em")
        )),
        e !== w &&
          ((M = M.transition(e)),
          (T = T.transition(e)),
          (S = S.transition(e)),
          (E = E.transition(e)),
          (N = N.transition(e)
            .attr("opacity", yf)
            .attr("transform", function (t) {
              return y(b, this.parentNode.__axis || b, t);
            })),
          k.attr("opacity", yf).attr("transform", function (t) {
            return y(this.parentNode.__axis || b, b, t);
          })),
        N.remove(),
        M.attr(
          "d",
          t === _f || t == df
            ? "M" + A * l + "," + m + "H0.5V" + x + "H" + A * l
            : "M" + m + "," + A * l + "V0.5H" + x + "V" + A * l
        ),
        T.attr("opacity", 1).attr("transform", function (t) {
          return y(b, b, t);
        }),
        S.attr(p + "2", A * f),
        E.attr(p, A * _).text(v),
        w
          .filter(a)
          .attr("fill", "none")
          .attr("font-size", 10)
          .attr("font-family", "sans-serif")
          .attr(
            "text-anchor",
            t === df ? "start" : t === _f ? "end" : "middle"
          ),
        w.each(function () {
          this.__axis = b;
        });
    }
    var r = [],
      c = null,
      s = null,
      f = 6,
      l = 6,
      h = 3;
    return (
      (e.scale = function (t) {
        return arguments.length ? ((n = t), e) : n;
      }),
      (e.ticks = function () {
        return (r = lf.call(arguments)), e;
      }),
      (e.tickArguments = function (t) {
        return arguments.length
          ? ((r = null == t ? [] : lf.call(t)), e)
          : r.slice();
      }),
      (e.tickValues = function (t) {
        return arguments.length
          ? ((c = null == t ? null : lf.call(t)), e)
          : c && c.slice();
      }),
      (e.tickFormat = function (t) {
        return arguments.length ? ((s = t), e) : s;
      }),
      (e.tickSize = function (t) {
        return arguments.length ? ((f = l = +t), e) : f;
      }),
      (e.tickSizeInner = function (t) {
        return arguments.length ? ((f = +t), e) : f;
      }),
      (e.tickSizeOuter = function (t) {
        return arguments.length ? ((l = +t), e) : l;
      }),
      (e.tickPadding = function (t) {
        return arguments.length ? ((h = +t), e) : h;
      }),
      e
    );
  }
  function s(t) {
    return c(pf, t);
  }
  function f(t) {
    return c(df, t);
  }
  function l(t) {
    return c(vf, t);
  }
  function h(t) {
    return c(_f, t);
  }
  function p() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r)
        throw new Error("illegal type: " + t);
      r[t] = [];
    }
    return new d(r);
  }
  function d(t) {
    this._ = t;
  }
  function v(t, n) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var e = "",
          r = t.indexOf(".");
        if (
          (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
          t && !n.hasOwnProperty(t))
        )
          throw new Error("unknown type: " + t);
        return {
          type: t,
          name: e,
        };
      });
  }
  function _(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r)
      if ((e = t[r]).name === n) return e.value;
  }
  function y(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r)
      if (t[r].name === n) {
        (t[r] = gf), (t = t.slice(0, r).concat(t.slice(r + 1)));
        break;
      }
    return (
      null != e &&
        t.push({
          name: n,
          value: e,
        }),
      t
    );
  }
  function g(t) {
    return function () {
      var n = this.ownerDocument,
        e = this.namespaceURI;
      return e === mf && n.documentElement.namespaceURI === mf
        ? n.createElement(t)
        : n.createElementNS(e, t);
    };
  }
  function m(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }
  function x() {
    return new b();
  }
  function b() {
    this._ = "@" + (++Mf).toString(36);
  }
  function w(t, n, e) {
    return (
      (t = M(t, n, e)),
      function (n) {
        var e = n.relatedTarget;
        (e && (e === this || 8 & e.compareDocumentPosition(this))) ||
          t.call(this, n);
      }
    );
  }
  function M(n, e, r) {
    return function (i) {
      var o = t.event;
      t.event = i;
      try {
        n.call(this, this.__data__, e, r);
      } finally {
        t.event = o;
      }
    };
  }
  function T(t) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = "",
          e = t.indexOf(".");
        return (
          e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
          {
            type: t,
            name: n,
          }
        );
      });
  }
  function N(t) {
    return function () {
      var n = this.__on;
      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
          (e = n[r]),
            (t.type && e.type !== t.type) || e.name !== t.name
              ? (n[++i] = e)
              : this.removeEventListener(e.type, e.listener, e.capture);
        ++i ? (n.length = i) : delete this.__on;
      }
    };
  }
  function k(t, n, e) {
    var r = Ef.hasOwnProperty(t.type) ? w : M;
    return function (i, o, u) {
      var a,
        c = this.__on,
        s = r(n, o, u);
      if (c)
        for (var f = 0, l = c.length; f < l; ++f)
          if ((a = c[f]).type === t.type && a.name === t.name)
            return (
              this.removeEventListener(a.type, a.listener, a.capture),
              this.addEventListener(a.type, (a.listener = s), (a.capture = e)),
              void (a.value = n)
            );
      this.addEventListener(t.type, s, e),
        (a = {
          type: t.type,
          name: t.name,
          value: n,
          listener: s,
          capture: e,
        }),
        c ? c.push(a) : (this.__on = [a]);
    };
  }
  function S(n, e, r, i) {
    var o = t.event;
    (n.sourceEvent = t.event), (t.event = n);
    try {
      return e.apply(r, i);
    } finally {
      t.event = o;
    }
  }
  function E() {}
  function A() {
    return [];
  }
  function C(t, n) {
    (this.ownerDocument = t.ownerDocument),
      (this.namespaceURI = t.namespaceURI),
      (this._next = null),
      (this._parent = t),
      (this.__data__ = n);
  }
  function z(t, n, e, r, i, o) {
    for (var u, a = 0, c = n.length, s = o.length; a < s; ++a)
      (u = n[a]) ? ((u.__data__ = o[a]), (r[a] = u)) : (e[a] = new C(t, o[a]));
    for (; a < c; ++a) (u = n[a]) && (i[a] = u);
  }
  function P(t, n, e, r, i, o, u) {
    var a,
      c,
      s,
      f = {},
      l = n.length,
      h = o.length,
      p = new Array(l);
    for (a = 0; a < l; ++a)
      (c = n[a]) &&
        ((p[a] = s = Bf + u.call(c, c.__data__, a, n)),
        s in f ? (i[a] = c) : (f[s] = c));
    for (a = 0; a < h; ++a)
      (s = Bf + u.call(t, o[a], a, o)),
        (c = f[s])
          ? ((r[a] = c), (c.__data__ = o[a]), (f[s] = null))
          : (e[a] = new C(t, o[a]));
    for (a = 0; a < l; ++a) (c = n[a]) && f[p[a]] === c && (i[a] = c);
  }
  function R(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function q(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function L(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function U(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }
  function D(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }
  function O(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }
  function F(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e
        ? this.removeAttributeNS(t.space, t.local)
        : this.setAttributeNS(t.space, t.local, e);
    };
  }
  function I(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function Y(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }
  function B(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r
        ? this.style.removeProperty(t)
        : this.style.setProperty(t, r, e);
    };
  }
  function j(t) {
    return function () {
      delete this[t];
    };
  }
  function H(t, n) {
    return function () {
      this[t] = n;
    };
  }
  function X(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : (this[t] = e);
    };
  }
  function V(t) {
    return t.trim().split(/^|\s+/);
  }
  function W(t) {
    return t.classList || new $(t);
  }
  function $(t) {
    (this._node = t), (this._names = V(t.getAttribute("class") || ""));
  }
  function Z(t, n) {
    for (var e = W(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
  }
  function G(t, n) {
    for (var e = W(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
  }
  function J(t) {
    return function () {
      Z(this, t);
    };
  }
  function Q(t) {
    return function () {
      G(this, t);
    };
  }
  function K(t, n) {
    return function () {
      (n.apply(this, arguments) ? Z : G)(this, t);
    };
  }
  function tt() {
    this.textContent = "";
  }
  function nt(t) {
    return function () {
      this.textContent = t;
    };
  }
  function et(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n;
    };
  }
  function rt() {
    this.innerHTML = "";
  }
  function it(t) {
    return function () {
      this.innerHTML = t;
    };
  }
  function ot(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n;
    };
  }
  function ut() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function at() {
    this.previousSibling &&
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function ct() {
    return null;
  }
  function st() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }
  function ft(t, n, e) {
    var r = nl(t),
      i = r.CustomEvent;
    i
      ? (i = new i(n, e))
      : ((i = r.document.createEvent("Event")),
        e
          ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
          : i.initEvent(n, !1, !1)),
      t.dispatchEvent(i);
  }
  function lt(t, n) {
    return function () {
      return ft(this, t, n);
    };
  }
  function ht(t, n) {
    return function () {
      return ft(this, t, n.apply(this, arguments));
    };
  }
  function pt(t, n) {
    (this._groups = t), (this._parents = n);
  }
  function dt() {
    return new pt([[document.documentElement]], dl);
  }
  function vt() {
    t.event.stopImmediatePropagation();
  }
  function _t(t, n) {
    var e = t.document.documentElement,
      r = vl(t).on("dragstart.drag", null);
    n &&
      (r.on("click.drag", ml, !0),
      setTimeout(function () {
        r.on("click.drag", null);
      }, 0)),
      "onselectstart" in e
        ? r.on("selectstart.drag", null)
        : ((e.style.MozUserSelect = e.__noselect), delete e.__noselect);
  }
  function yt(t, n, e, r, i, o, u, a, c, s) {
    (this.target = t),
      (this.type = n),
      (this.subject = e),
      (this.identifier = r),
      (this.active = i),
      (this.x = o),
      (this.y = u),
      (this.dx = a),
      (this.dy = c),
      (this._ = s);
  }
  function gt() {
    return !t.event.button;
  }
  function mt() {
    return this.parentNode;
  }
  function xt(n) {
    return null == n
      ? {
          x: t.event.x,
          y: t.event.y,
        }
      : n;
  }
  function bt(t, n) {
    var e = Object.create(t.prototype);
    for (var r in n) e[r] = n[r];
    return e;
  }
  function wt() {}
  function Mt(t) {
    var n;
    return (
      (t = (t + "").trim().toLowerCase()),
      (n = Al.exec(t))
        ? ((n = parseInt(n[1], 16)),
          new Et(
            ((n >> 8) & 15) | ((n >> 4) & 240),
            ((n >> 4) & 15) | (240 & n),
            ((15 & n) << 4) | (15 & n),
            1
          ))
        : (n = Cl.exec(t))
        ? Tt(parseInt(n[1], 16))
        : (n = zl.exec(t))
        ? new Et(n[1], n[2], n[3], 1)
        : (n = Pl.exec(t))
        ? new Et((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
        : (n = Rl.exec(t))
        ? Nt(n[1], n[2], n[3], n[4])
        : (n = ql.exec(t))
        ? Nt((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
        : (n = Ll.exec(t))
        ? At(n[1], n[2] / 100, n[3] / 100, 1)
        : (n = Ul.exec(t))
        ? At(n[1], n[2] / 100, n[3] / 100, n[4])
        : Dl.hasOwnProperty(t)
        ? Tt(Dl[t])
        : "transparent" === t
        ? new Et(NaN, NaN, NaN, 0)
        : null
    );
  }
  function Tt(t) {
    return new Et((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
  }
  function Nt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new Et(t, n, e, r);
  }
  function kt(t) {
    return (
      t instanceof wt || (t = Mt(t)),
      t ? ((t = t.rgb()), new Et(t.r, t.g, t.b, t.opacity)) : new Et()
    );
  }
  function St(t, n, e, r) {
    return 1 === arguments.length ? kt(t) : new Et(t, n, e, null == r ? 1 : r);
  }
  function Et(t, n, e, r) {
    (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
  }
  function At(t, n, e, r) {
    return (
      r <= 0
        ? (t = n = e = NaN)
        : e <= 0 || e >= 1
        ? (t = n = NaN)
        : n <= 0 && (t = NaN),
      new Pt(t, n, e, r)
    );
  }
  function Ct(t) {
    if (t instanceof Pt) return new Pt(t.h, t.s, t.l, t.opacity);
    if ((t instanceof wt || (t = Mt(t)), !t)) return new Pt();
    if (t instanceof Pt) return t;
    t = t.rgb();
    var n = t.r / 255,
      e = t.g / 255,
      r = t.b / 255,
      i = Math.min(n, e, r),
      o = Math.max(n, e, r),
      u = NaN,
      a = o - i,
      c = (o + i) / 2;
    return (
      a
        ? ((u =
            n === o
              ? (e - r) / a + 6 * (e < r)
              : e === o
              ? (r - n) / a + 2
              : (n - e) / a + 4),
          (a /= c < 0.5 ? o + i : 2 - o - i),
          (u *= 60))
        : (a = c > 0 && c < 1 ? 0 : u),
      new Pt(u, a, c, t.opacity)
    );
  }
  function zt(t, n, e, r) {
    return 1 === arguments.length ? Ct(t) : new Pt(t, n, e, null == r ? 1 : r);
  }
  function Pt(t, n, e, r) {
    (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
  }
  function Rt(t, n, e) {
    return (
      255 *
      (t < 60
        ? n + ((e - n) * t) / 60
        : t < 180
        ? e
        : t < 240
        ? n + ((e - n) * (240 - t)) / 60
        : n)
    );
  }
  function qt(t) {
    if (t instanceof Ut) return new Ut(t.l, t.a, t.b, t.opacity);
    if (t instanceof jt) {
      var n = t.h * Ol;
      return new Ut(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }
    t instanceof Et || (t = kt(t));
    var e = It(t.r),
      r = It(t.g),
      i = It(t.b),
      o = Dt((0.4124564 * e + 0.3575761 * r + 0.1804375 * i) / Yl),
      u = Dt((0.2126729 * e + 0.7151522 * r + 0.072175 * i) / Bl),
      a = Dt((0.0193339 * e + 0.119192 * r + 0.9503041 * i) / jl);
    return new Ut(116 * u - 16, 500 * (o - u), 200 * (u - a), t.opacity);
  }
  function Lt(t, n, e, r) {
    return 1 === arguments.length ? qt(t) : new Ut(t, n, e, null == r ? 1 : r);
  }
  function Ut(t, n, e, r) {
    (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
  }
  function Dt(t) {
    return t > Wl ? Math.pow(t, 1 / 3) : t / Vl + Hl;
  }
  function Ot(t) {
    return t > Xl ? t * t * t : Vl * (t - Hl);
  }
  function Ft(t) {
    return (
      255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
    );
  }
  function It(t) {
    return (t /= 255) <= 0.04045
      ? t / 12.92
      : Math.pow((t + 0.055) / 1.055, 2.4);
  }
  function Yt(t) {
    if (t instanceof jt) return new jt(t.h, t.c, t.l, t.opacity);
    t instanceof Ut || (t = qt(t));
    var n = Math.atan2(t.b, t.a) * Fl;
    return new jt(
      n < 0 ? n + 360 : n,
      Math.sqrt(t.a * t.a + t.b * t.b),
      t.l,
      t.opacity
    );
  }
  function Bt(t, n, e, r) {
    return 1 === arguments.length ? Yt(t) : new jt(t, n, e, null == r ? 1 : r);
  }
  function jt(t, n, e, r) {
    (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
  }
  function Ht(t) {
    if (t instanceof Vt) return new Vt(t.h, t.s, t.l, t.opacity);
    t instanceof Et || (t = kt(t));
    var n = t.r / 255,
      e = t.g / 255,
      r = t.b / 255,
      i = (nh * r + Kl * n - th * e) / (nh + Kl - th),
      o = r - i,
      u = (Ql * (e - i) - Gl * o) / Jl,
      a = Math.sqrt(u * u + o * o) / (Ql * i * (1 - i)),
      c = a ? Math.atan2(u, o) * Fl - 120 : NaN;
    return new Vt(c < 0 ? c + 360 : c, a, i, t.opacity);
  }
  function Xt(t, n, e, r) {
    return 1 === arguments.length ? Ht(t) : new Vt(t, n, e, null == r ? 1 : r);
  }
  function Vt(t, n, e, r) {
    (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
  }
  function Wt(t, n, e, r, i) {
    var o = t * t,
      u = o * t;
    return (
      ((1 - 3 * t + 3 * o - u) * n +
        (4 - 6 * o + 3 * u) * e +
        (1 + 3 * t + 3 * o - 3 * u) * r +
        u * i) /
      6
    );
  }
  function $t(t, n) {
    return function (e) {
      return t + e * n;
    };
  }
  function Zt(t, n, e) {
    return (
      (t = Math.pow(t, e)),
      (n = Math.pow(n, e) - t),
      (e = 1 / e),
      function (r) {
        return Math.pow(t + r * n, e);
      }
    );
  }
  function Gt(t, n) {
    var e = n - t;
    return e
      ? $t(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
      : fh(isNaN(t) ? n : t);
  }
  function Jt(t) {
    return 1 === (t = +t)
      ? Qt
      : function (n, e) {
          return e - n ? Zt(n, e, t) : fh(isNaN(n) ? e : n);
        };
  }
  function Qt(t, n) {
    var e = n - t;
    return e ? $t(t, e) : fh(isNaN(t) ? n : t);
  }
  function Kt(t) {
    return function (n) {
      var e,
        r,
        i = n.length,
        o = new Array(i),
        u = new Array(i),
        a = new Array(i);
      for (e = 0; e < i; ++e)
        (r = St(n[e])), (o[e] = r.r || 0), (u[e] = r.g || 0), (a[e] = r.b || 0);
      return (
        (o = t(o)),
        (u = t(u)),
        (a = t(a)),
        (r.opacity = 1),
        function (t) {
          return (r.r = o(t)), (r.g = u(t)), (r.b = a(t)), r + "";
        }
      );
    };
  }
  function tn(t) {
    return function () {
      return t;
    };
  }
  function nn(t) {
    return function (n) {
      return t(n) + "";
    };
  }
  function en(t) {
    return "none" === t
      ? Th
      : (eh ||
          ((eh = document.createElement("DIV")),
          (rh = document.documentElement),
          (ih = document.defaultView)),
        (eh.style.transform = t),
        (t = ih
          .getComputedStyle(rh.appendChild(eh), null)
          .getPropertyValue("transform")),
        rh.removeChild(eh),
        (t = t.slice(7, -1).split(",")),
        Nh(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }
  function rn(t) {
    return null == t
      ? Th
      : (oh ||
          (oh = document.createElementNS("http://www.w3.org/2000/svg", "g")),
        oh.setAttribute("transform", t),
        (t = oh.transform.baseVal.consolidate())
          ? ((t = t.matrix), Nh(t.a, t.b, t.c, t.d, t.e, t.f))
          : Th);
  }
  function on(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }
    function o(t, r, i, o, u, a) {
      if (t !== i || r !== o) {
        var c = u.push("translate(", null, n, null, e);
        a.push(
          {
            i: c - 4,
            x: _h(t, i),
          },
          {
            i: c - 2,
            x: _h(r, o),
          }
        );
      } else (i || o) && u.push("translate(" + i + n + o + e);
    }
    function u(t, n, e, o) {
      t !== n
        ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
          o.push({
            i: e.push(i(e) + "rotate(", null, r) - 2,
            x: _h(t, n),
          }))
        : n && e.push(i(e) + "rotate(" + n + r);
    }
    function a(t, n, e, o) {
      t !== n
        ? o.push({
            i: e.push(i(e) + "skewX(", null, r) - 2,
            x: _h(t, n),
          })
        : n && e.push(i(e) + "skewX(" + n + r);
    }
    function c(t, n, e, r, o, u) {
      if (t !== e || n !== r) {
        var a = o.push(i(o) + "scale(", null, ",", null, ")");
        u.push(
          {
            i: a - 4,
            x: _h(t, e),
          },
          {
            i: a - 2,
            x: _h(n, r),
          }
        );
      } else (1 === e && 1 === r) || o.push(i(o) + "scale(" + e + "," + r + ")");
    }
    return function (n, e) {
      var r = [],
        i = [];
      return (
        (n = t(n)),
        (e = t(e)),
        o(n.translateX, n.translateY, e.translateX, e.translateY, r, i),
        u(n.rotate, e.rotate, r, i),
        a(n.skewX, e.skewX, r, i),
        c(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i),
        (n = e = null),
        function (t) {
          for (var n, e = -1, o = i.length; ++e < o; ) r[(n = i[e]).i] = n.x(t);
          return r.join("");
        }
      );
    };
  }
  function un(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }
  function an(t) {
    return ((t = Math.exp(t)) - 1 / t) / 2;
  }
  function cn(t) {
    return ((t = Math.exp(2 * t)) - 1) / (t + 1);
  }
  function sn(t) {
    return function (n, e) {
      var r = t((n = zt(n)).h, (e = zt(e)).h),
        i = Qt(n.s, e.s),
        o = Qt(n.l, e.l),
        u = Qt(n.opacity, e.opacity);
      return function (t) {
        return (
          (n.h = r(t)), (n.s = i(t)), (n.l = o(t)), (n.opacity = u(t)), n + ""
        );
      };
    };
  }
  function fn(t, n) {
    var e = Qt((t = Lt(t)).l, (n = Lt(n)).l),
      r = Qt(t.a, n.a),
      i = Qt(t.b, n.b),
      o = Qt(t.opacity, n.opacity);
    return function (n) {
      return (
        (t.l = e(n)), (t.a = r(n)), (t.b = i(n)), (t.opacity = o(n)), t + ""
      );
    };
  }
  function ln(t) {
    return function (n, e) {
      var r = t((n = Bt(n)).h, (e = Bt(e)).h),
        i = Qt(n.c, e.c),
        o = Qt(n.l, e.l),
        u = Qt(n.opacity, e.opacity);
      return function (t) {
        return (
          (n.h = r(t)), (n.c = i(t)), (n.l = o(t)), (n.opacity = u(t)), n + ""
        );
      };
    };
  }
  function hn(t) {
    return (function n(e) {
      function r(n, r) {
        var i = t((n = Xt(n)).h, (r = Xt(r)).h),
          o = Qt(n.s, r.s),
          u = Qt(n.l, r.l),
          a = Qt(n.opacity, r.opacity);
        return function (t) {
          return (
            (n.h = i(t)),
            (n.s = o(t)),
            (n.l = u(Math.pow(t, e))),
            (n.opacity = a(t)),
            n + ""
          );
        };
      }
      return (e = +e), (r.gamma = n), r;
    })(1);
  }
  function pn() {
    return Xh || ($h(dn), (Xh = Wh.now() + Vh));
  }
  function dn() {
    Xh = 0;
  }
  function vn() {
    this._call = this._time = this._next = null;
  }
  function _n(t, n, e) {
    var r = new vn();
    return r.restart(t, n, e), r;
  }
  function yn() {
    pn(), ++Ih;
    for (var t, n = uh; n; )
      (t = Xh - n._time) >= 0 && n._call.call(null, t), (n = n._next);
    --Ih;
  }
  function gn() {
    (Xh = (Hh = Wh.now()) + Vh), (Ih = Yh = 0);
    try {
      yn();
    } finally {
      (Ih = 0), xn(), (Xh = 0);
    }
  }
  function mn() {
    var t = Wh.now(),
      n = t - Hh;
    n > jh && ((Vh -= n), (Hh = t));
  }
  function xn() {
    for (var t, n, e = uh, r = 1 / 0; e; )
      e._call
        ? (r > e._time && (r = e._time), (t = e), (e = e._next))
        : ((n = e._next), (e._next = null), (e = t ? (t._next = n) : (uh = n)));
    (ah = t), bn(r);
  }
  function bn(t) {
    if (!Ih) {
      Yh && (Yh = clearTimeout(Yh));
      var n = t - Xh;
      n > 24
        ? (t < 1 / 0 && (Yh = setTimeout(gn, n)),
          Bh && (Bh = clearInterval(Bh)))
        : (Bh || ((Hh = Xh), (Bh = setInterval(mn, jh))), (Ih = 1), $h(gn));
    }
  }
  function wn(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n]) || e.state > Kh) throw new Error("too late");
    return e;
  }
  function Mn(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n]) || e.state > np) throw new Error("too late");
    return e;
  }
  function Tn(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error("too late");
    return e;
  }
  function Nn(t, n, e) {
    function r(t) {
      (e.state = tp),
        e.timer.restart(i, e.delay, e.time),
        e.delay <= t && i(t - e.delay);
    }
    function i(r) {
      var s, f, l, h;
      if (e.state !== tp) return u();
      for (s in c)
        if (((h = c[s]), h.name === e.name)) {
          if (h.state === ep) return Zh(i);
          h.state === rp
            ? ((h.state = op),
              h.timer.stop(),
              h.on.call("interrupt", t, t.__data__, h.index, h.group),
              delete c[s])
            : +s < n && ((h.state = op), h.timer.stop(), delete c[s]);
        }
      if (
        (Zh(function () {
          e.state === ep &&
            ((e.state = rp), e.timer.restart(o, e.delay, e.time), o(r));
        }),
        (e.state = np),
        e.on.call("start", t, t.__data__, e.index, e.group),
        e.state === np)
      ) {
        for (
          e.state = ep, a = new Array((l = e.tween.length)), s = 0, f = -1;
          s < l;
          ++s
        )
          (h = e.tween[s].value.call(t, t.__data__, e.index, e.group)) &&
            (a[++f] = h);
        a.length = f + 1;
      }
    }
    function o(n) {
      for (
        var r =
            n < e.duration
              ? e.ease.call(null, n / e.duration)
              : (e.timer.restart(u), (e.state = ip), 1),
          i = -1,
          o = a.length;
        ++i < o;

      )
        a[i].call(null, r);
      e.state === ip &&
        (e.on.call("end", t, t.__data__, e.index, e.group), u());
    }
    function u() {
      (e.state = op), e.timer.stop(), delete c[n];
      for (var r in c) return;
      delete t.__transition;
    }
    var a,
      c = t.__transition;
    (c[n] = e), (e.timer = _n(r, 0, e.time));
  }
  function kn(t, n) {
    var e, r;
    return function () {
      var i = Mn(this, t),
        o = i.tween;
      if (o !== e) {
        r = e = o;
        for (var u = 0, a = r.length; u < a; ++u)
          if (r[u].name === n) {
            (r = r.slice()), r.splice(u, 1);
            break;
          }
      }
      i.tween = r;
    };
  }
  function Sn(t, n, e) {
    var r, i;
    if ("function" != typeof e) throw new Error();
    return function () {
      var o = Mn(this, t),
        u = o.tween;
      if (u !== r) {
        i = (r = u).slice();
        for (
          var a = {
              name: n,
              value: e,
            },
            c = 0,
            s = i.length;
          c < s;
          ++c
        )
          if (i[c].name === n) {
            i[c] = a;
            break;
          }
        c === s && i.push(a);
      }
      o.tween = i;
    };
  }
  function En(t, n, e) {
    var r = t._id;
    return (
      t.each(function () {
        var t = Mn(this, r);
        (t.value || (t.value = {}))[n] = e.apply(this, arguments);
      }),
      function (t) {
        return Tn(t, r).value[n];
      }
    );
  }
  function An(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function Cn(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function zn(t, n, e) {
    var r, i;
    return function () {
      var o = this.getAttribute(t);
      return o === e ? null : o === r ? i : (i = n((r = o), e));
    };
  }
  function Pn(t, n, e) {
    var r, i;
    return function () {
      var o = this.getAttributeNS(t.space, t.local);
      return o === e ? null : o === r ? i : (i = n((r = o), e));
    };
  }
  function Rn(t, n, e) {
    var r, i, o;
    return function () {
      var u,
        a = e(this);
      return null == a
        ? void this.removeAttribute(t)
        : ((u = this.getAttribute(t)),
          u === a ? null : u === r && a === i ? o : (o = n((r = u), (i = a))));
    };
  }
  function qn(t, n, e) {
    var r, i, o;
    return function () {
      var u,
        a = e(this);
      return null == a
        ? void this.removeAttributeNS(t.space, t.local)
        : ((u = this.getAttributeNS(t.space, t.local)),
          u === a ? null : u === r && a === i ? o : (o = n((r = u), (i = a))));
    };
  }
  function Ln(t, n) {
    function e() {
      var e = this,
        r = n.apply(e, arguments);
      return (
        r &&
        function (n) {
          e.setAttributeNS(t.space, t.local, r(n));
        }
      );
    }
    return (e._value = n), e;
  }
  function Un(t, n) {
    function e() {
      var e = this,
        r = n.apply(e, arguments);
      return (
        r &&
        function (n) {
          e.setAttribute(t, r(n));
        }
      );
    }
    return (e._value = n), e;
  }
  function Dn(t, n) {
    return function () {
      wn(this, t).delay = +n.apply(this, arguments);
    };
  }
  function On(t, n) {
    return (
      (n = +n),
      function () {
        wn(this, t).delay = n;
      }
    );
  }
  function Fn(t, n) {
    return function () {
      Mn(this, t).duration = +n.apply(this, arguments);
    };
  }
  function In(t, n) {
    return (
      (n = +n),
      function () {
        Mn(this, t).duration = n;
      }
    );
  }
  function Yn(t, n) {
    if ("function" != typeof n) throw new Error();
    return function () {
      Mn(this, t).ease = n;
    };
  }
  function Bn(t) {
    return (t + "")
      .trim()
      .split(/^|\s+/)
      .every(function (t) {
        var n = t.indexOf(".");
        return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
      });
  }
  function jn(t, n, e) {
    var r,
      i,
      o = Bn(n) ? wn : Mn;
    return function () {
      var u = o(this, t),
        a = u.on;
      a !== r && (i = (r = a).copy()).on(n, e), (u.on = i);
    };
  }
  function Hn(t) {
    return function () {
      var n = this.parentNode;
      for (var e in this.__transition) if (+e !== t) return;
      n && n.removeChild(this);
    };
  }
  function Xn(t, n) {
    var e, r, i;
    return function () {
      var o = nl(this).getComputedStyle(this, null),
        u = o.getPropertyValue(t),
        a = (this.style.removeProperty(t), o.getPropertyValue(t));
      return u === a
        ? null
        : u === e && a === r
        ? i
        : (i = n((e = u), (r = a)));
    };
  }
  function Vn(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function Wn(t, n, e) {
    var r, i;
    return function () {
      var o = nl(this).getComputedStyle(this, null).getPropertyValue(t);
      return o === e ? null : o === r ? i : (i = n((r = o), e));
    };
  }
  function $n(t, n, e) {
    var r, i, o;
    return function () {
      var u = nl(this).getComputedStyle(this, null),
        a = u.getPropertyValue(t),
        c = e(this);
      return (
        null == c &&
          (this.style.removeProperty(t), (c = u.getPropertyValue(t))),
        a === c ? null : a === r && c === i ? o : (o = n((r = a), (i = c)))
      );
    };
  }
  function Zn(t, n, e) {
    function r() {
      var r = this,
        i = n.apply(r, arguments);
      return (
        i &&
        function (n) {
          r.style.setProperty(t, i(n), e);
        }
      );
    }
    return (r._value = n), r;
  }
  function Gn(t) {
    return function () {
      this.textContent = t;
    };
  }
  function Jn(t) {
    return function () {
      var n = t(this);
      this.textContent = null == n ? "" : n;
    };
  }
  function Qn(t, n, e, r) {
    (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
  }
  function Kn(t) {
    return dt().transition(t);
  }
  function te() {
    return ++Ep;
  }
  function ne(t) {
    return +t;
  }
  function ee(t) {
    return t * t;
  }
  function re(t) {
    return t * (2 - t);
  }
  function ie(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
  }
  function oe(t) {
    return t * t * t;
  }
  function ue(t) {
    return --t * t * t + 1;
  }
  function ae(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  function ce(t) {
    return 1 - Math.cos(t * Lp);
  }
  function se(t) {
    return Math.sin(t * Lp);
  }
  function fe(t) {
    return (1 - Math.cos(qp * t)) / 2;
  }
  function le(t) {
    return Math.pow(2, 10 * t - 10);
  }
  function he(t) {
    return 1 - Math.pow(2, -10 * t);
  }
  function pe(t) {
    return (
      ((t *= 2) <= 1
        ? Math.pow(2, 10 * t - 10)
        : 2 - Math.pow(2, 10 - 10 * t)) / 2
    );
  }
  function de(t) {
    return 1 - Math.sqrt(1 - t * t);
  }
  function ve(t) {
    return Math.sqrt(1 - --t * t);
  }
  function _e(t) {
    return (
      ((t *= 2) <= 1
        ? 1 - Math.sqrt(1 - t * t)
        : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
    );
  }
  function ye(t) {
    return 1 - ge(1 - t);
  }
  function ge(t) {
    return (t = +t) < Up
      ? Xp * t * t
      : t < Op
      ? Xp * (t -= Dp) * t + Fp
      : t < Yp
      ? Xp * (t -= Ip) * t + Bp
      : Xp * (t -= jp) * t + Hp;
  }
  function me(t) {
    return ((t *= 2) <= 1 ? 1 - ge(1 - t) : ge(t - 1) + 1) / 2;
  }
  function xe(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]); )
      if (!(t = t.parentNode)) return (ed.time = pn()), ed;
    return e;
  }
  function be() {
    t.event.stopImmediatePropagation();
  }
  function we(t) {
    return {
      type: t,
    };
  }
  function Me() {
    return !t.event.button;
  }
  function Te() {
    var t = this.ownerSVGElement || this;
    return [
      [0, 0],
      [t.width.baseVal.value, t.height.baseVal.value],
    ];
  }
  function Ne(t) {
    for (; !t.__brush; ) if (!(t = t.parentNode)) return;
    return t.__brush;
  }
  function ke(t) {
    return t[0][0] === t[1][0] || t[0][1] === t[1][1];
  }
  function Se(t) {
    var n = t.__brush;
    return n ? n.dim.output(n.selection) : null;
  }
  function Ee() {
    return Ce(pd);
  }
  function Ae() {
    return Ce(dd);
  }
  function Ce(n) {
    function e(t) {
      var e = t
        .property("__brush", a)
        .selectAll(".overlay")
        .data([we("overlay")]);
      e
        .enter()
        .append("rect")
        .attr("class", "overlay")
        .attr("pointer-events", "all")
        .attr("cursor", _d.overlay)
        .merge(e)
        .each(function () {
          var t = Ne(this).extent;
          vl(this)
            .attr("x", t[0][0])
            .attr("y", t[0][1])
            .attr("width", t[1][0] - t[0][0])
            .attr("height", t[1][1] - t[0][1]);
        }),
        t
          .selectAll(".selection")
          .data([we("selection")])
          .enter()
          .append("rect")
          .attr("class", "selection")
          .attr("cursor", _d.selection)
          .attr("fill", "#777")
          .attr("fill-opacity", 0.3)
          .attr("stroke", "#fff")
          .attr("shape-rendering", "crispEdges");
      var i = t.selectAll(".handle").data(n.handles, function (t) {
        return t.type;
      });
      i.exit().remove(),
        i
          .enter()
          .append("rect")
          .attr("class", function (t) {
            return "handle handle--" + t.type;
          })
          .attr("cursor", function (t) {
            return _d[t.type];
          }),
        t
          .each(r)
          .attr("fill", "none")
          .attr("pointer-events", "all")
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
          .on("mousedown.brush touchstart.brush", u);
    }
    function r() {
      var t = vl(this),
        n = Ne(this).selection;
      n
        ? (t
            .selectAll(".selection")
            .style("display", null)
            .attr("x", n[0][0])
            .attr("y", n[0][1])
            .attr("width", n[1][0] - n[0][0])
            .attr("height", n[1][1] - n[0][1]),
          t
            .selectAll(".handle")
            .style("display", null)
            .attr("x", function (t) {
              return "e" === t.type[t.type.length - 1]
                ? n[1][0] - h / 2
                : n[0][0] - h / 2;
            })
            .attr("y", function (t) {
              return "s" === t.type[0] ? n[1][1] - h / 2 : n[0][1] - h / 2;
            })
            .attr("width", function (t) {
              return "n" === t.type || "s" === t.type
                ? n[1][0] - n[0][0] + h
                : h;
            })
            .attr("height", function (t) {
              return "e" === t.type || "w" === t.type
                ? n[1][1] - n[0][1] + h
                : h;
            }))
        : t
            .selectAll(".selection,.handle")
            .style("display", "none")
            .attr("x", null)
            .attr("y", null)
            .attr("width", null)
            .attr("height", null);
    }
    function i(t, n) {
      return t.__brush.emitter || new o(t, n);
    }
    function o(t, n) {
      (this.that = t),
        (this.args = n),
        (this.state = t.__brush),
        (this.active = 0);
    }
    function u() {
      function e() {
        var t = Rf(T);
        !U ||
          w ||
          M ||
          (Math.abs(t[0] - O[0]) > Math.abs(t[1] - O[1]) ? (M = !0) : (w = !0)),
          (O = t),
          (b = !0),
          cd(),
          o();
      }
      function o() {
        var t;
        switch (((m = O[0] - D[0]), (x = O[1] - D[1]), k)) {
          case fd:
          case sd:
            S &&
              ((m = Math.max(P - l, Math.min(q - v, m))),
              (h = l + m),
              (_ = v + m)),
              E &&
                ((x = Math.max(R - p, Math.min(L - y, x))),
                (d = p + x),
                (g = y + x));
            break;
          case ld:
            S < 0
              ? ((m = Math.max(P - l, Math.min(q - l, m))),
                (h = l + m),
                (_ = v))
              : S > 0 &&
                ((m = Math.max(P - v, Math.min(q - v, m))),
                (h = l),
                (_ = v + m)),
              E < 0
                ? ((x = Math.max(R - p, Math.min(L - p, x))),
                  (d = p + x),
                  (g = y))
                : E > 0 &&
                  ((x = Math.max(R - y, Math.min(L - y, x))),
                  (d = p),
                  (g = y + x));
            break;
          case hd:
            S &&
              ((h = Math.max(P, Math.min(q, l - m * S))),
              (_ = Math.max(P, Math.min(q, v + m * S)))),
              E &&
                ((d = Math.max(R, Math.min(L, p - x * E))),
                (g = Math.max(R, Math.min(L, y + x * E))));
        }
        _ < h &&
          ((S *= -1),
          (t = l),
          (l = v),
          (v = t),
          (t = h),
          (h = _),
          (_ = t),
          N in yd && Y.attr("cursor", _d[(N = yd[N])])),
          g < d &&
            ((E *= -1),
            (t = p),
            (p = y),
            (y = t),
            (t = d),
            (d = g),
            (g = t),
            N in gd && Y.attr("cursor", _d[(N = gd[N])])),
          A.selection && (z = A.selection),
          w && ((h = z[0][0]), (_ = z[1][0])),
          M && ((d = z[0][1]), (g = z[1][1])),
          (z[0][0] === h && z[0][1] === d && z[1][0] === _ && z[1][1] === g) ||
            ((A.selection = [
              [h, d],
              [_, g],
            ]),
            r.call(T),
            F.brush());
      }
      function u() {
        if ((be(), t.event.touches)) {
          if (t.event.touches.length) return;
          c && clearTimeout(c),
            (c = setTimeout(function () {
              c = null;
            }, 500)),
            I.on("touchmove.brush touchend.brush touchcancel.brush", null);
        } else _t(t.event.view, b), B.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
        I.attr("pointer-events", "all"),
          Y.attr("cursor", _d.overlay),
          A.selection && (z = A.selection),
          ke(z) && ((A.selection = null), r.call(T)),
          F.end();
      }
      function a() {
        switch (t.event.keyCode) {
          case 16:
            U = S && E;
            break;
          case 18:
            k === ld &&
              (S && ((v = _ - m * S), (l = h + m * S)),
              E && ((y = g - x * E), (p = d + x * E)),
              (k = hd),
              o());
            break;
          case 32:
            (k !== ld && k !== hd) ||
              (S < 0 ? (v = _ - m) : S > 0 && (l = h - m),
              E < 0 ? (y = g - x) : E > 0 && (p = d - x),
              (k = fd),
              Y.attr("cursor", _d.selection),
              o());
            break;
          default:
            return;
        }
        cd();
      }
      function s() {
        switch (t.event.keyCode) {
          case 16:
            U && ((w = M = U = !1), o());
            break;
          case 18:
            k === hd &&
              (S < 0 ? (v = _) : S > 0 && (l = h),
              E < 0 ? (y = g) : E > 0 && (p = d),
              (k = ld),
              o());
            break;
          case 32:
            k === fd &&
              (t.event.altKey
                ? (S && ((v = _ - m * S), (l = h + m * S)),
                  E && ((y = g - x * E), (p = d + x * E)),
                  (k = hd))
                : (S < 0 ? (v = _) : S > 0 && (l = h),
                  E < 0 ? (y = g) : E > 0 && (p = d),
                  (k = ld)),
              Y.attr("cursor", _d[N]),
              o());
            break;
          default:
            return;
        }
        cd();
      }
      if (t.event.touches) {
        if (t.event.changedTouches.length < t.event.touches.length) return cd();
      } else if (c) return;
      if (f.apply(this, arguments)) {
        var l,
          h,
          p,
          d,
          v,
          _,
          y,
          g,
          m,
          x,
          b,
          w,
          M,
          T = this,
          N = t.event.target.__data__.type,
          k =
            "selection" === (t.event.metaKey ? (N = "overlay") : N)
              ? sd
              : t.event.altKey
              ? hd
              : ld,
          S = n === dd ? null : md[N],
          E = n === pd ? null : xd[N],
          A = Ne(T),
          C = A.extent,
          z = A.selection,
          P = C[0][0],
          R = C[0][1],
          q = C[1][0],
          L = C[1][1],
          U = S && E && t.event.shiftKey,
          D = Rf(T),
          O = D,
          F = i(T, arguments).beforestart();
        "overlay" === N
          ? (A.selection = z =
              [
                [(l = n === dd ? P : D[0]), (p = n === pd ? R : D[1])],
                [(v = n === dd ? q : l), (y = n === pd ? L : p)],
              ])
          : ((l = z[0][0]), (p = z[0][1]), (v = z[1][0]), (y = z[1][1])),
          (h = l),
          (d = p),
          (_ = v),
          (g = y);
        var I = vl(T).attr("pointer-events", "none"),
          Y = I.selectAll(".overlay").attr("cursor", _d[N]);
        if (t.event.touches)
          I.on("touchmove.brush", e, !0).on(
            "touchend.brush touchcancel.brush",
            u,
            !0
          );
        else {
          var B = vl(t.event.view)
            .on("keydown.brush", a, !0)
            .on("keyup.brush", s, !0)
            .on("mousemove.brush", e, !0)
            .on("mouseup.brush", u, !0);
          xl(t.event.view);
        }
        be(), ap(T), r.call(T), F.start();
      }
    }
    function a() {
      var t = this.__brush || {
        selection: null,
      };
      return (t.extent = s.apply(this, arguments)), (t.dim = n), t;
    }
    var c,
      s = Te,
      f = Me,
      l = p(e, "start", "brush", "end"),
      h = 6;
    return (
      (e.move = function (t, e) {
        t.selection
          ? t
              .on("start.brush", function () {
                i(this, arguments).beforestart().start();
              })
              .on("interrupt.brush end.brush", function () {
                i(this, arguments).end();
              })
              .tween("brush", function () {
                function t(t) {
                  (u.selection = 1 === t && ke(s) ? null : f(t)),
                    r.call(o),
                    a.brush();
                }
                var o = this,
                  u = o.__brush,
                  a = i(o, arguments),
                  c = u.selection,
                  s = n.input(
                    "function" == typeof e ? e.apply(this, arguments) : e,
                    u.extent
                  ),
                  f = bh(c, s);
                return c && s ? t : t(1);
              })
          : t.each(function () {
              var t = this,
                o = arguments,
                u = t.__brush,
                a = n.input(
                  "function" == typeof e ? e.apply(t, o) : e,
                  u.extent
                ),
                c = i(t, o).beforestart();
              ap(t),
                (u.selection = null == a || ke(a) ? null : a),
                r.call(t),
                c.start().brush().end();
            });
      }),
      (o.prototype = {
        beforestart: function () {
          return (
            1 === ++this.active &&
              ((this.state.emitter = this), (this.starting = !0)),
            this
          );
        },
        start: function () {
          return (
            this.starting && ((this.starting = !1), this.emit("start")), this
          );
        },
        brush: function () {
          return this.emit("brush"), this;
        },
        end: function () {
          return (
            0 === --this.active &&
              (delete this.state.emitter, this.emit("end")),
            this
          );
        },
        emit: function (t) {
          S(new ad(e, t, n.output(this.state.selection)), l.apply, l, [
            t,
            this.that,
            this.args,
          ]);
        },
      }),
      (e.extent = function (t) {
        return arguments.length
          ? ((s =
              "function" == typeof t
                ? t
                : ud([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]],
                  ])),
            e)
          : s;
      }),
      (e.filter = function (t) {
        return arguments.length
          ? ((f = "function" == typeof t ? t : ud(!!t)), e)
          : f;
      }),
      (e.handleSize = function (t) {
        return arguments.length ? ((h = +t), e) : h;
      }),
      (e.on = function () {
        var t = l.on.apply(l, arguments);
        return t === l ? e : t;
      }),
      e
    );
  }
  function ze(t) {
    return function (n, e) {
      return t(
        n.source.value + n.target.value,
        e.source.value + e.target.value
      );
    };
  }
  function Pe() {
    (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
  }
  function Re() {
    return new Pe();
  }
  function qe(t) {
    return t.source;
  }
  function Le(t) {
    return t.target;
  }
  function Ue(t) {
    return t.radius;
  }
  function De(t) {
    return t.startAngle;
  }
  function Oe(t) {
    return t.endAngle;
  }
  function Fe() {}
  function Ie(t, n) {
    var e = new Fe();
    if (t instanceof Fe)
      t.each(function (t, n) {
        e.set(n, t);
      });
    else if (Array.isArray(t)) {
      var r,
        i = -1,
        o = t.length;
      if (null == n) for (; ++i < o; ) e.set(i, t[i]);
      else for (; ++i < o; ) e.set(n((r = t[i]), i, t), r);
    } else if (t) for (var u in t) e.set(u, t[u]);
    return e;
  }
  function Ye() {
    return {};
  }
  function Be(t, n, e) {
    t[n] = e;
  }
  function je() {
    return Ie();
  }
  function He(t, n, e) {
    t.set(n, e);
  }
  function Xe() {}
  function Ve(t, n) {
    var e = new Xe();
    if (t instanceof Xe)
      t.each(function (t) {
        e.add(t);
      });
    else if (t) {
      var r = -1,
        i = t.length;
      if (null == n) for (; ++r < i; ) e.add(t[r]);
      else for (; ++r < i; ) e.add(n(t[r], r, t));
    }
    return e;
  }
  function We(t) {
    return new Function(
      "d",
      "return {" +
        t
          .map(function (t, n) {
            return JSON.stringify(t) + ": d[" + n + "]";
          })
          .join(",") +
        "}"
    );
  }
  function $e(t, n) {
    var e = We(t);
    return function (r, i) {
      return n(e(r), i, t);
    };
  }
  function Ze(t) {
    var n = Object.create(null),
      e = [];
    return (
      t.forEach(function (t) {
        for (var r in t) r in n || e.push((n[r] = r));
      }),
      e
    );
  }
  function Ge(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;
    var i,
      o,
      u,
      a,
      c,
      s,
      f,
      l,
      h,
      p = t._root,
      d = {
        data: r,
      },
      v = t._x0,
      _ = t._y0,
      y = t._x1,
      g = t._y1;
    if (!p) return (t._root = d), t;
    for (; p.length; )
      if (
        ((s = n >= (o = (v + y) / 2)) ? (v = o) : (y = o),
        (f = e >= (u = (_ + g) / 2)) ? (_ = u) : (g = u),
        (i = p),
        !(p = p[(l = (f << 1) | s)]))
      )
        return (i[l] = d), t;
    if (
      ((a = +t._x.call(null, p.data)),
      (c = +t._y.call(null, p.data)),
      n === a && e === c)
    )
      return (d.next = p), i ? (i[l] = d) : (t._root = d), t;
    do
      (i = i ? (i[l] = new Array(4)) : (t._root = new Array(4))),
        (s = n >= (o = (v + y) / 2)) ? (v = o) : (y = o),
        (f = e >= (u = (_ + g) / 2)) ? (_ = u) : (g = u);
    while ((l = (f << 1) | s) === (h = ((c >= u) << 1) | (a >= o)));
    return (i[h] = p), (i[l] = d), t;
  }
  function Je(t) {
    var n,
      e,
      r,
      i,
      o = t.length,
      u = new Array(o),
      a = new Array(o),
      c = 1 / 0,
      s = 1 / 0,
      f = -(1 / 0),
      l = -(1 / 0);
    for (e = 0; e < o; ++e)
      isNaN((r = +this._x.call(null, (n = t[e])))) ||
        isNaN((i = +this._y.call(null, n))) ||
        ((u[e] = r),
        (a[e] = i),
        r < c && (c = r),
        r > f && (f = r),
        i < s && (s = i),
        i > l && (l = i));
    for (
      f < c && ((c = this._x0), (f = this._x1)),
        l < s && ((s = this._y0), (l = this._y1)),
        this.cover(c, s).cover(f, l),
        e = 0;
      e < o;
      ++e
    )
      Ge(this, u[e], a[e], t[e]);
    return this;
  }
  function Qe(t) {
    for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
    return this;
  }
  function Ke(t) {
    return t[0];
  }
  function tr(t) {
    return t[1];
  }
  function nr(t, n, e) {
    var r = new er(null == n ? Ke : n, null == e ? tr : e, NaN, NaN, NaN, NaN);
    return null == t ? r : r.addAll(t);
  }
  function er(t, n, e, r, i, o) {
    (this._x = t),
      (this._y = n),
      (this._x0 = e),
      (this._y0 = r),
      (this._x1 = i),
      (this._y1 = o),
      (this._root = void 0);
  }
  function rr(t) {
    for (
      var n = {
          data: t.data,
        },
        e = n;
      (t = t.next);

    )
      e = e.next = {
        data: t.data,
      };
    return n;
  }
  function ir(t) {
    return t.x + t.vx;
  }
  function or(t) {
    return t.y + t.vy;
  }
  function ur(t) {
    return t.index;
  }
  function ar(t, n) {
    var e = t.get(n);
    if (!e) throw new Error("missing: " + n);
    return e;
  }
  function cr(t) {
    return t.x;
  }
  function sr(t) {
    return t.y;
  }
  function fr(t) {
    if (!(n = Pv.exec(t))) throw new Error("invalid format: " + t);
    var n,
      e = n[1] || " ",
      r = n[2] || ">",
      i = n[3] || "-",
      o = n[4] || "",
      u = !!n[5],
      a = n[6] && +n[6],
      c = !!n[7],
      s = n[8] && +n[8].slice(1),
      f = n[9] || "";
    "n" === f ? ((c = !0), (f = "g")) : zv[f] || (f = ""),
      (u || ("0" === e && "=" === r)) && ((u = !0), (e = "0"), (r = "=")),
      (this.fill = e),
      (this.align = r),
      (this.sign = i),
      (this.symbol = o),
      (this.zero = u),
      (this.width = a),
      (this.comma = c),
      (this.precision = s),
      (this.type = f);
  }
  function lr(t) {
    return t;
  }
  function hr(n) {
    return (
      (qv = Uv(n)),
      (t.format = qv.format),
      (t.formatPrefix = qv.formatPrefix),
      qv
    );
  }
  function pr() {
    this.reset();
  }
  function dr(t, n, e) {
    var r = (t.s = n + e),
      i = r - n,
      o = r - i;
    t.t = n - o + (e - i);
  }
  function vr(t) {
    return t > 1 ? 0 : t < -1 ? b_ : Math.acos(t);
  }
  function _r(t) {
    return t > 1 ? w_ : t < -1 ? -w_ : Math.asin(t);
  }
  function yr(t) {
    return (t = L_(t / 2)) * t;
  }
  function gr() {}
  function mr(t, n) {
    t && I_.hasOwnProperty(t.type) && I_[t.type](t, n);
  }
  function xr(t, n, e) {
    var r,
      i = -1,
      o = t.length - e;
    for (n.lineStart(); ++i < o; ) (r = t[i]), n.point(r[0], r[1], r[2]);
    n.lineEnd();
  }
  function br(t, n) {
    var e = -1,
      r = t.length;
    for (n.polygonStart(); ++e < r; ) xr(t[e], n, 1);
    n.polygonEnd();
  }
  function wr() {
    H_.point = Tr;
  }
  function Mr() {
    Nr(Yv, Bv);
  }
  function Tr(t, n) {
    (H_.point = Nr),
      (Yv = t),
      (Bv = n),
      (t *= k_),
      (n *= k_),
      (jv = t),
      (Hv = C_((n = n / 2 + M_))),
      (Xv = L_(n));
  }
  function Nr(t, n) {
    (t *= k_), (n *= k_), (n = n / 2 + M_);
    var e = t - jv,
      r = e >= 0 ? 1 : -1,
      i = r * e,
      o = C_(n),
      u = L_(n),
      a = Xv * u,
      c = Hv * o + a * C_(i),
      s = a * r * L_(i);
    B_.add(A_(s, c)), (jv = t), (Hv = o), (Xv = u);
  }
  function kr(t) {
    return [A_(t[1], t[0]), _r(t[2])];
  }
  function Sr(t) {
    var n = t[0],
      e = t[1],
      r = C_(e);
    return [r * C_(n), r * L_(n), L_(e)];
  }
  function Er(t, n) {
    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
  }
  function Ar(t, n) {
    return [
      t[1] * n[2] - t[2] * n[1],
      t[2] * n[0] - t[0] * n[2],
      t[0] * n[1] - t[1] * n[0],
    ];
  }
  function Cr(t, n) {
    (t[0] += n[0]), (t[1] += n[1]), (t[2] += n[2]);
  }
  function zr(t, n) {
    return [t[0] * n, t[1] * n, t[2] * n];
  }
  function Pr(t) {
    var n = D_(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
    (t[0] /= n), (t[1] /= n), (t[2] /= n);
  }
  function Rr(t, n) {
    t_.push((n_ = [(Vv = t), ($v = t)])),
      n < Wv && (Wv = n),
      n > Zv && (Zv = n);
  }
  function qr(t, n) {
    var e = Sr([t * k_, n * k_]);
    if (Kv) {
      var r = Ar(Kv, e),
        i = [r[1], -r[0], 0],
        o = Ar(i, r);
      Pr(o), (o = kr(o));
      var u,
        a = t - Gv,
        c = a > 0 ? 1 : -1,
        s = o[0] * N_ * c,
        f = S_(a) > 180;
      f ^ (c * Gv < s && s < c * t)
        ? ((u = o[1] * N_), u > Zv && (Zv = u))
        : ((s = ((s + 360) % 360) - 180),
          f ^ (c * Gv < s && s < c * t)
            ? ((u = -o[1] * N_), u < Wv && (Wv = u))
            : (n < Wv && (Wv = n), n > Zv && (Zv = n))),
        f
          ? t < Gv
            ? Ir(Vv, t) > Ir(Vv, $v) && ($v = t)
            : Ir(t, $v) > Ir(Vv, $v) && (Vv = t)
          : $v >= Vv
          ? (t < Vv && (Vv = t), t > $v && ($v = t))
          : t > Gv
          ? Ir(Vv, t) > Ir(Vv, $v) && ($v = t)
          : Ir(t, $v) > Ir(Vv, $v) && (Vv = t);
    } else t_.push((n_ = [(Vv = t), ($v = t)]));
    n < Wv && (Wv = n), n > Zv && (Zv = n), (Kv = e), (Gv = t);
  }
  function Lr() {
    W_.point = qr;
  }
  function Ur() {
    (n_[0] = Vv), (n_[1] = $v), (W_.point = Rr), (Kv = null);
  }
  function Dr(t, n) {
    if (Kv) {
      var e = t - Gv;
      V_.add(S_(e) > 180 ? e + (e > 0 ? 360 : -360) : e);
    } else (Jv = t), (Qv = n);
    H_.point(t, n), qr(t, n);
  }
  function Or() {
    H_.lineStart();
  }
  function Fr() {
    Dr(Jv, Qv),
      H_.lineEnd(),
      S_(V_) > m_ && (Vv = -($v = 180)),
      (n_[0] = Vv),
      (n_[1] = $v),
      (Kv = null);
  }
  function Ir(t, n) {
    return (n -= t) < 0 ? n + 360 : n;
  }
  function Yr(t, n) {
    return t[0] - n[0];
  }
  function Br(t, n) {
    return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n;
  }
  function jr(t, n) {
    (t *= k_), (n *= k_);
    var e = C_(n);
    Hr(e * C_(t), e * L_(t), L_(n));
  }
  function Hr(t, n, e) {
    ++e_, (i_ += (t - i_) / e_), (o_ += (n - o_) / e_), (u_ += (e - u_) / e_);
  }
  function Xr() {
    Z_.point = Vr;
  }
  function Vr(t, n) {
    (t *= k_), (n *= k_);
    var e = C_(n);
    (v_ = e * C_(t)),
      (__ = e * L_(t)),
      (y_ = L_(n)),
      (Z_.point = Wr),
      Hr(v_, __, y_);
  }
  function Wr(t, n) {
    (t *= k_), (n *= k_);
    var e = C_(n),
      r = e * C_(t),
      i = e * L_(t),
      o = L_(n),
      u = A_(
        D_(
          (u = __ * o - y_ * i) * u +
            (u = y_ * r - v_ * o) * u +
            (u = v_ * i - __ * r) * u
        ),
        v_ * r + __ * i + y_ * o
      );
    (r_ += u),
      (a_ += u * (v_ + (v_ = r))),
      (c_ += u * (__ + (__ = i))),
      (s_ += u * (y_ + (y_ = o))),
      Hr(v_, __, y_);
  }
  function $r() {
    Z_.point = jr;
  }
  function Zr() {
    Z_.point = Jr;
  }
  function Gr() {
    Qr(p_, d_), (Z_.point = jr);
  }
  function Jr(t, n) {
    (p_ = t), (d_ = n), (t *= k_), (n *= k_), (Z_.point = Qr);
    var e = C_(n);
    (v_ = e * C_(t)), (__ = e * L_(t)), (y_ = L_(n)), Hr(v_, __, y_);
  }
  function Qr(t, n) {
    (t *= k_), (n *= k_);
    var e = C_(n),
      r = e * C_(t),
      i = e * L_(t),
      o = L_(n),
      u = __ * o - y_ * i,
      a = y_ * r - v_ * o,
      c = v_ * i - __ * r,
      s = D_(u * u + a * a + c * c),
      f = v_ * r + __ * i + y_ * o,
      l = s && -_r(s) / s,
      h = A_(s, f);
    (f_ += l * u),
      (l_ += l * a),
      (h_ += l * c),
      (r_ += h),
      (a_ += h * (v_ + (v_ = r))),
      (c_ += h * (__ + (__ = i))),
      (s_ += h * (y_ + (y_ = o))),
      Hr(v_, __, y_);
  }
  function Kr(t, n) {
    return [t > b_ ? t - T_ : t < -b_ ? t + T_ : t, n];
  }
  function ti(t, n, e) {
    return (t %= T_)
      ? n || e
        ? Q_(ei(t), ri(n, e))
        : ei(t)
      : n || e
      ? ri(n, e)
      : Kr;
  }
  function ni(t) {
    return function (n, e) {
      return (n += t), [n > b_ ? n - T_ : n < -b_ ? n + T_ : n, e];
    };
  }
  function ei(t) {
    var n = ni(t);
    return (n.invert = ni(-t)), n;
  }
  function ri(t, n) {
    function e(t, n) {
      var e = C_(n),
        a = C_(t) * e,
        c = L_(t) * e,
        s = L_(n),
        f = s * r + a * i;
      return [A_(c * o - f * u, a * r - s * i), _r(f * o + c * u)];
    }
    var r = C_(t),
      i = L_(t),
      o = C_(n),
      u = L_(n);
    return (
      (e.invert = function (t, n) {
        var e = C_(n),
          a = C_(t) * e,
          c = L_(t) * e,
          s = L_(n),
          f = s * o - c * u;
        return [A_(c * o + s * u, a * r + f * i), _r(f * r - a * i)];
      }),
      e
    );
  }
  function ii(t, n, e, r, i, o) {
    if (e) {
      var u = C_(n),
        a = L_(n),
        c = r * e;
      null == i
        ? ((i = n + r * T_), (o = n - c / 2))
        : ((i = oi(u, i)),
          (o = oi(u, o)),
          (r > 0 ? i < o : i > o) && (i += r * T_));
      for (var s, f = i; r > 0 ? f > o : f < o; f -= c)
        (s = kr([u, -a * C_(f), -a * L_(f)])), t.point(s[0], s[1]);
    }
  }
  function oi(t, n) {
    (n = Sr(n)), (n[0] -= t), Pr(n);
    var e = vr(-n[1]);
    return ((-n[2] < 0 ? -e : e) + T_ - m_) % T_;
  }
  function ui(t, n, e, r) {
    (this.x = t),
      (this.z = n),
      (this.o = e),
      (this.e = r),
      (this.v = !1),
      (this.n = this.p = null);
  }
  function ai(t) {
    if ((n = t.length)) {
      for (var n, e, r = 0, i = t[0]; ++r < n; )
        (i.n = e = t[r]), (e.p = i), (i = e);
      (i.n = e = t[0]), (e.p = i);
    }
  }
  function ci(t, n, e, r) {
    function i(i, o) {
      return t <= i && i <= e && n <= o && o <= r;
    }
    function o(i, o, a, s) {
      var f = 0,
        l = 0;
      if (
        null == i ||
        (f = u(i, a)) !== (l = u(o, a)) ||
        (c(i, o) < 0) ^ (a > 0)
      ) {
        do s.point(0 === f || 3 === f ? t : e, f > 1 ? r : n);
        while ((f = (f + a + 4) % 4) !== l);
      } else s.point(o[0], o[1]);
    }
    function u(r, i) {
      return S_(r[0] - t) < m_
        ? i > 0
          ? 0
          : 3
        : S_(r[0] - e) < m_
        ? i > 0
          ? 2
          : 1
        : S_(r[1] - n) < m_
        ? i > 0
          ? 1
          : 0
        : i > 0
        ? 3
        : 2;
    }
    function a(t, n) {
      return c(t.x, n.x);
    }
    function c(t, n) {
      var e = u(t, 1),
        r = u(n, 1);
      return e !== r
        ? e - r
        : 0 === e
        ? n[1] - t[1]
        : 1 === e
        ? t[0] - n[0]
        : 2 === e
        ? t[1] - n[1]
        : n[0] - t[0];
    }
    return function (u) {
      function c(t, n) {
        i(t, n) && k.point(t, n);
      }
      function s() {
        for (var n = 0, e = 0, i = _.length; e < i; ++e)
          for (
            var o,
              u,
              a = _[e],
              c = 1,
              s = a.length,
              f = a[0],
              l = f[0],
              h = f[1];
            c < s;
            ++c
          )
            (o = l),
              (u = h),
              (f = a[c]),
              (l = f[0]),
              (h = f[1]),
              u <= r
                ? h > r && (l - o) * (r - u) > (h - u) * (t - o) && ++n
                : h <= r && (l - o) * (r - u) < (h - u) * (t - o) && --n;
        return n;
      }
      function f() {
        (k = S), (v = []), (_ = []), (N = !0);
      }
      function l() {
        var t = s(),
          n = N && t,
          e = (v = nf(v)).length;
        (n || e) &&
          (u.polygonStart(),
          n && (u.lineStart(), o(null, null, 1, u), u.lineEnd()),
          e && vy(v, a, t, o, u),
          u.polygonEnd()),
          (k = u),
          (v = _ = y = null);
      }
      function h() {
        (E.point = d), _ && _.push((y = [])), (T = !0), (M = !1), (b = w = NaN);
      }
      function p() {
        v && (d(g, m), x && M && S.rejoin(), v.push(S.result())),
          (E.point = c),
          M && k.lineEnd();
      }
      function d(o, u) {
        var a = i(o, u);
        if ((_ && y.push([o, u]), T))
          (g = o),
            (m = u),
            (x = a),
            (T = !1),
            a && (k.lineStart(), k.point(o, u));
        else if (a && M) k.point(o, u);
        else {
          var c = [
              (b = Math.max(yy, Math.min(_y, b))),
              (w = Math.max(yy, Math.min(_y, w))),
            ],
            s = [
              (o = Math.max(yy, Math.min(_y, o))),
              (u = Math.max(yy, Math.min(_y, u))),
            ];
          py(c, s, t, n, e, r)
            ? (M || (k.lineStart(), k.point(c[0], c[1])),
              k.point(s[0], s[1]),
              a || k.lineEnd(),
              (N = !1))
            : a && (k.lineStart(), k.point(o, u), (N = !1));
        }
        (b = o), (w = u), (M = a);
      }
      var v,
        _,
        y,
        g,
        m,
        x,
        b,
        w,
        M,
        T,
        N,
        k = u,
        S = hy(),
        E = {
          point: c,
          lineStart: h,
          lineEnd: p,
          polygonStart: f,
          polygonEnd: l,
        };
      return E;
    };
  }
  function si() {
    (xy.point = li), (xy.lineEnd = fi);
  }
  function fi() {
    xy.point = xy.lineEnd = gr;
  }
  function li(t, n) {
    (t *= k_), (n *= k_), (K_ = t), (ty = L_(n)), (ny = C_(n)), (xy.point = hi);
  }
  function hi(t, n) {
    (t *= k_), (n *= k_);
    var e = L_(n),
      r = C_(n),
      i = S_(t - K_),
      o = C_(i),
      u = L_(i),
      a = r * u,
      c = ny * e - ty * r * o,
      s = ty * e + ny * r * o;
    my.add(A_(D_(a * a + c * c), s)), (K_ = t), (ty = e), (ny = r);
  }
  function pi(t, n, e) {
    var r = Bs(t, n - m_, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [t, n];
      });
    };
  }
  function di(t, n, e) {
    var r = Bs(t, n - m_, e).concat(n);
    return function (t) {
      return r.map(function (n) {
        return [n, t];
      });
    };
  }
  function vi() {
    function t() {
      return {
        type: "MultiLineString",
        coordinates: n(),
      };
    }
    function n() {
      return Bs(z_(o / _) * _, i, _)
        .map(h)
        .concat(Bs(z_(s / y) * y, c, y).map(p))
        .concat(
          Bs(z_(r / d) * d, e, d)
            .filter(function (t) {
              return S_(t % _) > m_;
            })
            .map(f)
        )
        .concat(
          Bs(z_(a / v) * v, u, v)
            .filter(function (t) {
              return S_(t % y) > m_;
            })
            .map(l)
        );
    }
    var e,
      r,
      i,
      o,
      u,
      a,
      c,
      s,
      f,
      l,
      h,
      p,
      d = 10,
      v = d,
      _ = 90,
      y = 360,
      g = 2.5;
    return (
      (t.lines = function () {
        return n().map(function (t) {
          return {
            type: "LineString",
            coordinates: t,
          };
        });
      }),
      (t.outline = function () {
        return {
          type: "Polygon",
          coordinates: [
            h(o).concat(
              p(c).slice(1),
              h(i).reverse().slice(1),
              p(s).reverse().slice(1)
            ),
          ],
        };
      }),
      (t.extent = function (n) {
        return arguments.length
          ? t.extentMajor(n).extentMinor(n)
          : t.extentMinor();
      }),
      (t.extentMajor = function (n) {
        return arguments.length
          ? ((o = +n[0][0]),
            (i = +n[1][0]),
            (s = +n[0][1]),
            (c = +n[1][1]),
            o > i && ((n = o), (o = i), (i = n)),
            s > c && ((n = s), (s = c), (c = n)),
            t.precision(g))
          : [
              [o, s],
              [i, c],
            ];
      }),
      (t.extentMinor = function (n) {
        return arguments.length
          ? ((r = +n[0][0]),
            (e = +n[1][0]),
            (a = +n[0][1]),
            (u = +n[1][1]),
            r > e && ((n = r), (r = e), (e = n)),
            a > u && ((n = a), (a = u), (u = n)),
            t.precision(g))
          : [
              [r, a],
              [e, u],
            ];
      }),
      (t.step = function (n) {
        return arguments.length ? t.stepMajor(n).stepMinor(n) : t.stepMinor();
      }),
      (t.stepMajor = function (n) {
        return arguments.length ? ((_ = +n[0]), (y = +n[1]), t) : [_, y];
      }),
      (t.stepMinor = function (n) {
        return arguments.length ? ((d = +n[0]), (v = +n[1]), t) : [d, v];
      }),
      (t.precision = function (n) {
        return arguments.length
          ? ((g = +n),
            (f = pi(a, u, 90)),
            (l = di(r, e, g)),
            (h = pi(s, c, 90)),
            (p = di(o, i, g)),
            t)
          : g;
      }),
      t
        .extentMajor([
          [-180, -90 + m_],
          [180, 90 - m_],
        ])
        .extentMinor([
          [-180, -80 - m_],
          [180, 80 + m_],
        ])
    );
  }
  function _i() {
    return vi()();
  }
  function yi() {
    Ay.point = gi;
  }
  function gi(t, n) {
    (Ay.point = mi), (ey = iy = t), (ry = oy = n);
  }
  function mi(t, n) {
    Ey.add(oy * t - iy * n), (iy = t), (oy = n);
  }
  function xi() {
    mi(ey, ry);
  }
  function bi(t, n) {
    t < Cy && (Cy = t),
      t > Py && (Py = t),
      n < zy && (zy = n),
      n > Ry && (Ry = n);
  }
  function wi(t, n) {
    (Ly += t), (Uy += n), ++Dy;
  }
  function Mi() {
    Hy.point = Ti;
  }
  function Ti(t, n) {
    (Hy.point = Ni), wi((cy = t), (sy = n));
  }
  function Ni(t, n) {
    var e = t - cy,
      r = n - sy,
      i = D_(e * e + r * r);
    (Oy += (i * (cy + t)) / 2),
      (Fy += (i * (sy + n)) / 2),
      (Iy += i),
      wi((cy = t), (sy = n));
  }
  function ki() {
    Hy.point = wi;
  }
  function Si() {
    Hy.point = Ai;
  }
  function Ei() {
    Ci(uy, ay);
  }
  function Ai(t, n) {
    (Hy.point = Ci), wi((uy = cy = t), (ay = sy = n));
  }
  function Ci(t, n) {
    var e = t - cy,
      r = n - sy,
      i = D_(e * e + r * r);
    (Oy += (i * (cy + t)) / 2),
      (Fy += (i * (sy + n)) / 2),
      (Iy += i),
      (i = sy * t - cy * n),
      (Yy += i * (cy + t)),
      (By += i * (sy + n)),
      (jy += 3 * i),
      wi((cy = t), (sy = n));
  }
  function zi(t) {
    this._context = t;
  }
  function Pi(t, n) {
    (Jy.point = Ri), (Vy = $y = t), (Wy = Zy = n);
  }
  function Ri(t, n) {
    ($y -= t), (Zy -= n), Gy.add(D_($y * $y + Zy * Zy)), ($y = t), (Zy = n);
  }
  function qi() {
    this._string = [];
  }
  function Li(t) {
    return (
      "m0," +
      t +
      "a" +
      t +
      "," +
      t +
      " 0 1,1 0," +
      -2 * t +
      "a" +
      t +
      "," +
      t +
      " 0 1,1 0," +
      2 * t +
      "z"
    );
  }
  function Ui(t) {
    return t.length > 1;
  }
  function Di(t, n) {
    return (
      ((t = t.x)[0] < 0 ? t[1] - w_ - m_ : w_ - t[1]) -
      ((n = n.x)[0] < 0 ? n[1] - w_ - m_ : w_ - n[1])
    );
  }
  function Oi(t) {
    var n,
      e = NaN,
      r = NaN,
      i = NaN;
    return {
      lineStart: function () {
        t.lineStart(), (n = 1);
      },
      point: function (o, u) {
        var a = o > 0 ? b_ : -b_,
          c = S_(o - e);
        S_(c - b_) < m_
          ? (t.point(e, (r = (r + u) / 2 > 0 ? w_ : -w_)),
            t.point(i, r),
            t.lineEnd(),
            t.lineStart(),
            t.point(a, r),
            t.point(o, r),
            (n = 0))
          : i !== a &&
            c >= b_ &&
            (S_(e - i) < m_ && (e -= i * m_),
            S_(o - a) < m_ && (o -= a * m_),
            (r = Fi(e, r, o, u)),
            t.point(i, r),
            t.lineEnd(),
            t.lineStart(),
            t.point(a, r),
            (n = 0)),
          t.point((e = o), (r = u)),
          (i = a);
      },
      lineEnd: function () {
        t.lineEnd(), (e = r = NaN);
      },
      clean: function () {
        return 2 - n;
      },
    };
  }
  function Fi(t, n, e, r) {
    var i,
      o,
      u = L_(t - e);
    return S_(u) > m_
      ? E_(
          (L_(n) * (o = C_(r)) * L_(e) - L_(r) * (i = C_(n)) * L_(t)) /
            (i * o * u)
        )
      : (n + r) / 2;
  }
  function Ii(t, n, e, r) {
    var i;
    if (null == t)
      (i = e * w_),
        r.point(-b_, i),
        r.point(0, i),
        r.point(b_, i),
        r.point(b_, 0),
        r.point(b_, -i),
        r.point(0, -i),
        r.point(-b_, -i),
        r.point(-b_, 0),
        r.point(-b_, i);
    else if (S_(t[0] - n[0]) > m_) {
      var o = t[0] < n[0] ? b_ : -b_;
      (i = (e * o) / 2), r.point(-o, i), r.point(0, i), r.point(o, i);
    } else r.point(n[0], n[1]);
  }
  function Yi(t) {
    return function (n) {
      var e = new Bi();
      for (var r in t) e[r] = t[r];
      return (e.stream = n), e;
    };
  }
  function Bi() {}
  function ji(t, n, e) {
    var r = n[1][0] - n[0][0],
      i = n[1][1] - n[0][1],
      o = t.clipExtent && t.clipExtent();
    t.scale(150).translate([0, 0]),
      null != o && t.clipExtent(null),
      Y_(e, t.stream(qy));
    var u = qy.result(),
      a = Math.min(r / (u[1][0] - u[0][0]), i / (u[1][1] - u[0][1])),
      c = +n[0][0] + (r - a * (u[1][0] + u[0][0])) / 2,
      s = +n[0][1] + (i - a * (u[1][1] + u[0][1])) / 2;
    return null != o && t.clipExtent(o), t.scale(150 * a).translate([c, s]);
  }
  function Hi(t, n, e) {
    return ji(t, [[0, 0], n], e);
  }
  function Xi(t) {
    return Yi({
      point: function (n, e) {
        (n = t(n, e)), this.stream.point(n[0], n[1]);
      },
    });
  }
  function Vi(t, n) {
    function e(r, i, o, u, a, c, s, f, l, h, p, d, v, _) {
      var y = s - r,
        g = f - i,
        m = y * y + g * g;
      if (m > 4 * n && v--) {
        var x = u + h,
          b = a + p,
          w = c + d,
          M = D_(x * x + b * b + w * w),
          T = _r((w /= M)),
          N = S_(S_(w) - 1) < m_ || S_(o - l) < m_ ? (o + l) / 2 : A_(b, x),
          k = t(N, T),
          S = k[0],
          E = k[1],
          A = S - r,
          C = E - i,
          z = g * A - y * C;
        ((z * z) / m > n ||
          S_((y * A + g * C) / m - 0.5) > 0.3 ||
          u * h + a * p + c * d < ug) &&
          (e(r, i, o, u, a, c, S, E, N, (x /= M), (b /= M), w, v, _),
          _.point(S, E),
          e(S, E, N, x, b, w, s, f, l, h, p, d, v, _));
      }
    }
    return function (n) {
      function r(e, r) {
        (e = t(e, r)), n.point(e[0], e[1]);
      }
      function i() {
        (y = NaN), (w.point = o), n.lineStart();
      }
      function o(r, i) {
        var o = Sr([r, i]),
          u = t(r, i);
        e(
          y,
          g,
          _,
          m,
          x,
          b,
          (y = u[0]),
          (g = u[1]),
          (_ = r),
          (m = o[0]),
          (x = o[1]),
          (b = o[2]),
          og,
          n
        ),
          n.point(y, g);
      }
      function u() {
        (w.point = r), n.lineEnd();
      }
      function a() {
        i(), (w.point = c), (w.lineEnd = s);
      }
      function c(t, n) {
        o((f = t), n),
          (l = y),
          (h = g),
          (p = m),
          (d = x),
          (v = b),
          (w.point = o);
      }
      function s() {
        e(y, g, _, m, x, b, l, h, f, p, d, v, og, n), (w.lineEnd = u), u();
      }
      var f,
        l,
        h,
        p,
        d,
        v,
        _,
        y,
        g,
        m,
        x,
        b,
        w = {
          point: r,
          lineStart: i,
          lineEnd: u,
          polygonStart: function () {
            n.polygonStart(), (w.lineStart = a);
          },
          polygonEnd: function () {
            n.polygonEnd(), (w.lineStart = i);
          },
        };
      return w;
    };
  }
  function Wi(t) {
    return $i(function () {
      return t;
    })();
  }
  function $i(t) {
    function n(t) {
      return (t = f(t[0] * k_, t[1] * k_)), [t[0] * _ + a, c - t[1] * _];
    }
    function e(t) {
      return (
        (t = f.invert((t[0] - a) / _, (c - t[1]) / _)),
        t && [t[0] * N_, t[1] * N_]
      );
    }
    function r(t, n) {
      return (t = u(t, n)), [t[0] * _ + a, c - t[1] * _];
    }
    function i() {
      f = Q_((s = ti(b, w, M)), u);
      var t = u(m, x);
      return (a = y - t[0] * _), (c = g + t[1] * _), o();
    }
    function o() {
      return (d = v = null), n;
    }
    var u,
      a,
      c,
      s,
      f,
      l,
      h,
      p,
      d,
      v,
      _ = 150,
      y = 480,
      g = 250,
      m = 0,
      x = 0,
      b = 0,
      w = 0,
      M = 0,
      T = null,
      N = eg,
      k = null,
      S = ky,
      E = 0.5,
      A = ag(r, E);
    return (
      (n.stream = function (t) {
        return d && v === t ? d : (d = cg(N(s, A(S((v = t))))));
      }),
      (n.clipAngle = function (t) {
        return arguments.length
          ? ((N = +t ? rg((T = t * k_), 6 * k_) : ((T = null), eg)), o())
          : T * N_;
      }),
      (n.clipExtent = function (t) {
        return arguments.length
          ? ((S =
              null == t
                ? ((k = l = h = p = null), ky)
                : ci(
                    (k = +t[0][0]),
                    (l = +t[0][1]),
                    (h = +t[1][0]),
                    (p = +t[1][1])
                  )),
            o())
          : null == k
          ? null
          : [
              [k, l],
              [h, p],
            ];
      }),
      (n.scale = function (t) {
        return arguments.length ? ((_ = +t), i()) : _;
      }),
      (n.translate = function (t) {
        return arguments.length ? ((y = +t[0]), (g = +t[1]), i()) : [y, g];
      }),
      (n.center = function (t) {
        return arguments.length
          ? ((m = (t[0] % 360) * k_), (x = (t[1] % 360) * k_), i())
          : [m * N_, x * N_];
      }),
      (n.rotate = function (t) {
        return arguments.length
          ? ((b = (t[0] % 360) * k_),
            (w = (t[1] % 360) * k_),
            (M = t.length > 2 ? (t[2] % 360) * k_ : 0),
            i())
          : [b * N_, w * N_, M * N_];
      }),
      (n.precision = function (t) {
        return arguments.length ? ((A = ag(r, (E = t * t))), o()) : D_(E);
      }),
      (n.fitExtent = function (t, e) {
        return ji(n, t, e);
      }),
      (n.fitSize = function (t, e) {
        return Hi(n, t, e);
      }),
      function () {
        return (u = t.apply(this, arguments)), (n.invert = u.invert && e), i();
      }
    );
  }
  function Zi(t) {
    var n = 0,
      e = b_ / 3,
      r = $i(t),
      i = r(n, e);
    return (
      (i.parallels = function (t) {
        return arguments.length
          ? r((n = t[0] * k_), (e = t[1] * k_))
          : [n * N_, e * N_];
      }),
      i
    );
  }
  function Gi(t) {
    function n(t, n) {
      return [t * e, L_(n) / e];
    }
    var e = C_(t);
    return (
      (n.invert = function (t, n) {
        return [t / e, _r(n * e)];
      }),
      n
    );
  }
  function Ji(t, n) {
    function e(t, n) {
      var e = D_(o - 2 * i * L_(n)) / i;
      return [e * L_((t *= i)), u - e * C_(t)];
    }
    var r = L_(t),
      i = (r + L_(n)) / 2;
    if (S_(i) < m_) return Gi(t);
    var o = 1 + r * (2 * i - r),
      u = D_(o) / i;
    return (
      (e.invert = function (t, n) {
        var e = u - n;
        return [
          (A_(t, S_(e)) / i) * U_(e),
          _r((o - (t * t + e * e) * i * i) / (2 * i)),
        ];
      }),
      e
    );
  }
  function Qi(t) {
    var n = t.length;
    return {
      point: function (e, r) {
        for (var i = -1; ++i < n; ) t[i].point(e, r);
      },
      sphere: function () {
        for (var e = -1; ++e < n; ) t[e].sphere();
      },
      lineStart: function () {
        for (var e = -1; ++e < n; ) t[e].lineStart();
      },
      lineEnd: function () {
        for (var e = -1; ++e < n; ) t[e].lineEnd();
      },
      polygonStart: function () {
        for (var e = -1; ++e < n; ) t[e].polygonStart();
      },
      polygonEnd: function () {
        for (var e = -1; ++e < n; ) t[e].polygonEnd();
      },
    };
  }
  function Ki(t) {
    return function (n, e) {
      var r = C_(n),
        i = C_(e),
        o = t(r * i);
      return [o * i * L_(n), o * L_(e)];
    };
  }
  function to(t) {
    return function (n, e) {
      var r = D_(n * n + e * e),
        i = t(r),
        o = L_(i),
        u = C_(i);
      return [A_(n * o, r * u), _r(r && (e * o) / r)];
    };
  }
  function no(t, n) {
    return [t, R_(O_((w_ + n) / 2))];
  }
  function eo(t) {
    var n,
      e = Wi(t),
      r = e.scale,
      i = e.translate,
      o = e.clipExtent;
    return (
      (e.scale = function (t) {
        return arguments.length ? (r(t), n && e.clipExtent(null), e) : r();
      }),
      (e.translate = function (t) {
        return arguments.length ? (i(t), n && e.clipExtent(null), e) : i();
      }),
      (e.clipExtent = function (t) {
        if (!arguments.length) return n ? null : o();
        if ((n = null == t)) {
          var u = b_ * r(),
            a = i();
          t = [
            [a[0] - u, a[1] - u],
            [a[0] + u, a[1] + u],
          ];
        }
        return o(t), e;
      }),
      e.clipExtent(null)
    );
  }
  function ro(t) {
    return O_((w_ + t) / 2);
  }
  function io(t, n) {
    function e(t, n) {
      o > 0 ? n < -w_ + m_ && (n = -w_ + m_) : n > w_ - m_ && (n = w_ - m_);
      var e = o / q_(ro(n), i);
      return [e * L_(i * t), o - e * C_(i * t)];
    }
    var r = C_(t),
      i = t === n ? L_(t) : R_(r / C_(n)) / R_(ro(n) / ro(t)),
      o = (r * q_(ro(t), i)) / i;
    return i
      ? ((e.invert = function (t, n) {
          var e = o - n,
            r = U_(i) * D_(t * t + e * e);
          return [(A_(t, S_(e)) / i) * U_(e), 2 * E_(q_(o / r, 1 / i)) - w_];
        }),
        e)
      : no;
  }
  function oo(t, n) {
    return [t, n];
  }
  function uo(t, n) {
    function e(t, n) {
      var e = o - n,
        r = i * t;
      return [e * L_(r), o - e * C_(r)];
    }
    var r = C_(t),
      i = t === n ? L_(t) : (r - C_(n)) / (n - t),
      o = r / i + t;
    return S_(i) < m_
      ? oo
      : ((e.invert = function (t, n) {
          var e = o - n;
          return [(A_(t, S_(e)) / i) * U_(e), o - U_(i) * D_(t * t + e * e)];
        }),
        e);
  }
  function ao(t, n) {
    var e = C_(n),
      r = C_(t) * e;
    return [(e * L_(t)) / r, L_(n) / r];
  }
  function co(t, n, e, r) {
    return 1 === t && 1 === n && 0 === e && 0 === r
      ? ky
      : Yi({
          point: function (i, o) {
            this.stream.point(i * t + e, o * n + r);
          },
        });
  }
  function so(t, n) {
    return [C_(n) * L_(t), L_(n)];
  }
  function fo(t, n) {
    var e = C_(n),
      r = 1 + C_(t) * e;
    return [(e * L_(t)) / r, L_(n) / r];
  }
  function lo(t, n) {
    return [R_(O_((w_ + n) / 2)), -t];
  }
  function ho(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }
  function po(t) {
    return t.reduce(vo, 0) / t.length;
  }
  function vo(t, n) {
    return t + n.x;
  }
  function _o(t) {
    return 1 + t.reduce(yo, 0);
  }
  function yo(t, n) {
    return Math.max(t, n.y);
  }
  function go(t) {
    for (var n; (n = t.children); ) t = n[0];
    return t;
  }
  function mo(t) {
    for (var n; (n = t.children); ) t = n[n.length - 1];
    return t;
  }
  function xo(t) {
    var n = 0,
      e = t.children,
      r = e && e.length;
    if (r) for (; --r >= 0; ) n += e[r].value;
    else n = 1;
    t.value = n;
  }
  function bo(t, n) {
    if (t === n) return t;
    var e = t.ancestors(),
      r = n.ancestors(),
      i = null;
    for (t = e.pop(), n = r.pop(); t === n; )
      (i = t), (t = e.pop()), (n = r.pop());
    return i;
  }
  function wo(t, n) {
    var e,
      r,
      i,
      o,
      u,
      a = new So(t),
      c = +t.value && (a.value = t.value),
      s = [a];
    for (null == n && (n = To); (e = s.pop()); )
      if ((c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length)))
        for (e.children = new Array(u), o = u - 1; o >= 0; --o)
          s.push((r = e.children[o] = new So(i[o]))),
            (r.parent = e),
            (r.depth = e.depth + 1);
    return a.eachBefore(ko);
  }
  function Mo() {
    return wo(this).eachBefore(No);
  }
  function To(t) {
    return t.children;
  }
  function No(t) {
    t.data = t.data.data;
  }
  function ko(t) {
    var n = 0;
    do t.height = n;
    while ((t = t.parent) && t.height < ++n);
  }
  function So(t) {
    (this.data = t), (this.depth = this.height = 0), (this.parent = null);
  }
  function Eo(t) {
    (this._ = t), (this.next = null);
  }
  function Ao(t, n) {
    var e = n.x - t.x,
      r = n.y - t.y,
      i = t.r - n.r;
    return i * i + 1e-6 > e * e + r * r;
  }
  function Co(t, n) {
    var e,
      r,
      i,
      o = null,
      u = t.head;
    switch (n.length) {
      case 1:
        e = zo(n[0]);
        break;
      case 2:
        e = Po(n[0], n[1]);
        break;
      case 3:
        e = Ro(n[0], n[1], n[2]);
    }
    for (; u; )
      (i = u._),
        (r = u.next),
        e && Ao(e, i)
          ? (o = u)
          : (o ? ((t.tail = o), (o.next = null)) : (t.head = t.tail = null),
            n.push(i),
            (e = Co(t, n)),
            n.pop(),
            t.head
              ? ((u.next = t.head), (t.head = u))
              : ((u.next = null), (t.head = t.tail = u)),
            (o = t.tail),
            (o.next = r)),
        (u = r);
    return (t.tail = o), e;
  }
  function zo(t) {
    return {
      x: t.x,
      y: t.y,
      r: t.r,
    };
  }
  function Po(t, n) {
    var e = t.x,
      r = t.y,
      i = t.r,
      o = n.x,
      u = n.y,
      a = n.r,
      c = o - e,
      s = u - r,
      f = a - i,
      l = Math.sqrt(c * c + s * s);
    return {
      x: (e + o + (c / l) * f) / 2,
      y: (r + u + (s / l) * f) / 2,
      r: (l + i + a) / 2,
    };
  }
  function Ro(t, n, e) {
    var r = t.x,
      i = t.y,
      o = t.r,
      u = n.x,
      a = n.y,
      c = n.r,
      s = e.x,
      f = e.y,
      l = e.r,
      h = 2 * (r - u),
      p = 2 * (i - a),
      d = 2 * (c - o),
      v = r * r + i * i - o * o - u * u - a * a + c * c,
      _ = 2 * (r - s),
      y = 2 * (i - f),
      g = 2 * (l - o),
      m = r * r + i * i - o * o - s * s - f * f + l * l,
      x = _ * p - h * y,
      b = (p * m - y * v) / x - r,
      w = (y * d - p * g) / x,
      M = (_ * v - h * m) / x - i,
      T = (h * g - _ * d) / x,
      N = w * w + T * T - 1,
      k = 2 * (b * w + M * T + o),
      S = b * b + M * M - o * o,
      E = (-k - Math.sqrt(k * k - 4 * N * S)) / (2 * N);
    return {
      x: b + w * E + r,
      y: M + T * E + i,
      r: E,
    };
  }
  function qo(t, n, e) {
    var r = t.x,
      i = t.y,
      o = n.r + e.r,
      u = t.r + e.r,
      a = n.x - r,
      c = n.y - i,
      s = a * a + c * c;
    if (s) {
      var f = 0.5 + ((u *= u) - (o *= o)) / (2 * s),
        l =
          Math.sqrt(Math.max(0, 2 * o * (u + s) - (u -= s) * u - o * o)) /
          (2 * s);
      (e.x = r + f * a + l * c), (e.y = i + f * c - l * a);
    } else (e.x = r + u), (e.y = i);
  }
  function Lo(t, n) {
    var e = n.x - t.x,
      r = n.y - t.y,
      i = t.r + n.r;
    return i * i - 1e-6 > e * e + r * r;
  }
  function Uo(t, n) {
    for (var e = t._.r; t !== n; ) e += 2 * (t = t.next)._.r;
    return e - n._.r;
  }
  function Do(t, n, e) {
    var r = t._,
      i = t.next._,
      o = r.r + i.r,
      u = (r.x * i.r + i.x * r.r) / o - n,
      a = (r.y * i.r + i.y * r.r) / o - e;
    return u * u + a * a;
  }
  function Oo(t) {
    (this._ = t), (this.next = null), (this.previous = null);
  }
  function Fo(t) {
    if (!(i = t.length)) return 0;
    var n, e, r, i;
    if (((n = t[0]), (n.x = 0), (n.y = 0), !(i > 1))) return n.r;
    if (((e = t[1]), (n.x = -e.r), (e.x = n.r), (e.y = 0), !(i > 2)))
      return n.r + e.r;
    qo(e, n, (r = t[2]));
    var o,
      u,
      a,
      c,
      s,
      f,
      l,
      h = n.r * n.r,
      p = e.r * e.r,
      d = r.r * r.r,
      v = h + p + d,
      _ = h * n.x + p * e.x + d * r.x,
      y = h * n.y + p * e.y + d * r.y;
    (n = new Oo(n)),
      (e = new Oo(e)),
      (r = new Oo(r)),
      (n.next = r.previous = e),
      (e.next = n.previous = r),
      (r.next = e.previous = n);
    t: for (a = 3; a < i; ++a) {
      qo(n._, e._, (r = t[a])),
        (r = new Oo(r)),
        (c = e.next),
        (s = n.previous),
        (f = e._.r),
        (l = n._.r);
      do
        if (f <= l) {
          if (Lo(c._, r._)) {
            f + n._.r + e._.r > Uo(c, e) ? (n = c) : (e = c),
              (n.next = e),
              (e.previous = n),
              --a;
            continue t;
          }
          (f += c._.r), (c = c.next);
        } else {
          if (Lo(s._, r._)) {
            Uo(n, s) > l + n._.r + e._.r ? (n = s) : (e = s),
              (n.next = e),
              (e.previous = n),
              --a;
            continue t;
          }
          (l += s._.r), (s = s.previous);
        }
      while (c !== s.next);
      for (
        r.previous = n,
          r.next = e,
          n.next = e.previous = e = r,
          v += d = r._.r * r._.r,
          _ += d * r._.x,
          y += d * r._.y,
          h = Do(n, (o = _ / v), (u = y / v));
        (r = r.next) !== e;

      )
        (d = Do(r, o, u)) < h && ((n = r), (h = d));
      e = n.next;
    }
    for (n = [e._], r = e; (r = r.next) !== e; ) n.push(r._);
    for (r = Og(n), a = 0; a < i; ++a) (n = t[a]), (n.x -= r.x), (n.y -= r.y);
    return r.r;
  }
  function Io(t) {
    return null == t ? null : Yo(t);
  }
  function Yo(t) {
    if ("function" != typeof t) throw new Error();
    return t;
  }
  function Bo() {
    return 0;
  }
  function jo(t) {
    return Math.sqrt(t.value);
  }
  function Ho(t) {
    return function (n) {
      n.children || (n.r = Math.max(0, +t(n) || 0));
    };
  }
  function Xo(t, n) {
    return function (e) {
      if ((r = e.children)) {
        var r,
          i,
          o,
          u = r.length,
          a = t(e) * n || 0;
        if (a) for (i = 0; i < u; ++i) r[i].r += a;
        if (((o = Fo(r)), a)) for (i = 0; i < u; ++i) r[i].r -= a;
        e.r = o + a;
      }
    };
  }
  function Vo(t) {
    return function (n) {
      var e = n.parent;
      (n.r *= t), e && ((n.x = e.x + t * n.x), (n.y = e.y + t * n.y));
    };
  }
  function Wo(t) {
    return t.id;
  }
  function $o(t) {
    return t.parentId;
  }
  function Zo(t, n) {
    return t.parent === n.parent ? 1 : 2;
  }
  function Go(t) {
    var n = t.children;
    return n ? n[0] : t.t;
  }
  function Jo(t) {
    var n = t.children;
    return n ? n[n.length - 1] : t.t;
  }
  function Qo(t, n, e) {
    var r = e / (n.i - t.i);
    (n.c -= r), (n.s += e), (t.c += r), (n.z += e), (n.m += e);
  }
  function Ko(t) {
    for (var n, e = 0, r = 0, i = t.children, o = i.length; --o >= 0; )
      (n = i[o]), (n.z += e), (n.m += e), (e += n.s + (r += n.c));
  }
  function tu(t, n, e) {
    return t.a.parent === n.parent ? t.a : e;
  }
  function nu(t, n) {
    (this._ = t),
      (this.parent = null),
      (this.children = null),
      (this.A = null),
      (this.a = this),
      (this.z = 0),
      (this.m = 0),
      (this.c = 0),
      (this.s = 0),
      (this.t = null),
      (this.i = n);
  }
  function eu(t) {
    for (var n, e, r, i, o, u = new nu(t, 0), a = [u]; (n = a.pop()); )
      if ((r = n._.children))
        for (n.children = new Array((o = r.length)), i = o - 1; i >= 0; --i)
          a.push((e = n.children[i] = new nu(r[i], i))), (e.parent = n);
    return ((u.parent = new nu(null, 0)).children = [u]), u;
  }
  function ru(t, n, e, r, i, o) {
    for (
      var u,
        a,
        c,
        s,
        f,
        l,
        h,
        p,
        d,
        v,
        _,
        y = [],
        g = n.children,
        m = 0,
        x = 0,
        b = g.length,
        w = n.value;
      m < b;

    ) {
      (c = i - e), (s = o - r);
      do f = g[x++].value;
      while (!f && x < b);
      for (
        l = h = f,
          v = Math.max(s / c, c / s) / (w * t),
          _ = f * f * v,
          d = Math.max(h / _, _ / l);
        x < b;
        ++x
      ) {
        if (
          ((f += a = g[x].value),
          a < l && (l = a),
          a > h && (h = a),
          (_ = f * f * v),
          (p = Math.max(h / _, _ / l)),
          p > d)
        ) {
          f -= a;
          break;
        }
        d = p;
      }
      y.push(
        (u = {
          value: f,
          dice: c < s,
          children: g.slice(m, x),
        })
      ),
        u.dice
          ? jg(u, e, r, i, w ? (r += (s * f) / w) : o)
          : Gg(u, e, r, w ? (e += (c * f) / w) : i, o),
        (w -= f),
        (m = x);
    }
    return y;
  }
  function iu(t, n) {
    return t[0] - n[0] || t[1] - n[1];
  }
  function ou(t) {
    for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; ++i) {
      for (; r > 1 && om(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0; ) --r;
      e[r++] = i;
    }
    return e.slice(0, r);
  }
  function uu(t) {
    if (!(t >= 1)) throw new Error();
    (this._size = t),
      (this._call = this._error = null),
      (this._tasks = []),
      (this._data = []),
      (this._waiting = this._active = this._ended = this._start = 0);
  }
  function au(t) {
    if (!t._start)
      try {
        cu(t);
      } catch (n) {
        if (t._tasks[t._ended + t._active - 1]) fu(t, n);
        else if (!t._data) throw n;
      }
  }
  function cu(t) {
    for (; (t._start = t._waiting && t._active < t._size); ) {
      var n = t._ended + t._active,
        e = t._tasks[n],
        r = e.length - 1,
        i = e[r];
      (e[r] = su(t, n)),
        --t._waiting,
        ++t._active,
        (e = i.apply(null, e)),
        t._tasks[n] && (t._tasks[n] = e || fm);
    }
  }
  function su(t, n) {
    return function (e, r) {
      t._tasks[n] &&
        (--t._active,
        ++t._ended,
        (t._tasks[n] = null),
        null == t._error &&
          (null != e
            ? fu(t, e)
            : ((t._data[n] = r), t._waiting ? au(t) : lu(t))));
    };
  }
  function fu(t, n) {
    var e,
      r = t._tasks.length;
    for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0; )
      if ((e = t._tasks[r]) && ((t._tasks[r] = null), e.abort))
        try {
          e.abort();
        } catch (t) {}
    (t._active = NaN), lu(t);
  }
  function lu(t) {
    if (!t._active && t._call) {
      var n = t._data;
      (t._data = void 0), t._call(t._error, n);
    }
  }
  function hu(t) {
    return new uu(arguments.length ? +t : 1 / 0);
  }
  function pu(t) {
    return function (n, e) {
      t(null == n ? e : null);
    };
  }
  function du(t) {
    var n = t.responseType;
    return n && "text" !== n ? t.response : t.responseText;
  }
  function vu(t, n) {
    return function (e) {
      return t(e.responseText, n);
    };
  }
  function _u(t) {
    function n(n) {
      var o = n + "",
        u = e.get(o);
      if (!u) {
        if (i !== Am) return i;
        e.set(o, (u = r.push(n)));
      }
      return t[(u - 1) % t.length];
    }
    var e = Ie(),
      r = [],
      i = Am;
    return (
      (t = null == t ? [] : Em.call(t)),
      (n.domain = function (t) {
        if (!arguments.length) return r.slice();
        (r = []), (e = Ie());
        for (var i, o, u = -1, a = t.length; ++u < a; )
          e.has((o = (i = t[u]) + "")) || e.set(o, r.push(i));
        return n;
      }),
      (n.range = function (e) {
        return arguments.length ? ((t = Em.call(e)), n) : t.slice();
      }),
      (n.unknown = function (t) {
        return arguments.length ? ((i = t), n) : i;
      }),
      (n.copy = function () {
        return _u().domain(r).range(t).unknown(i);
      }),
      n
    );
  }
  function yu() {
    function t() {
      var t = i().length,
        r = u[1] < u[0],
        l = u[r - 0],
        h = u[1 - r];
      (n = (h - l) / Math.max(1, t - c + 2 * s)),
        a && (n = Math.floor(n)),
        (l += (h - l - n * (t - c)) * f),
        (e = n * (1 - c)),
        a && ((l = Math.round(l)), (e = Math.round(e)));
      var p = Bs(t).map(function (t) {
        return l + n * t;
      });
      return o(r ? p.reverse() : p);
    }
    var n,
      e,
      r = _u().unknown(void 0),
      i = r.domain,
      o = r.range,
      u = [0, 1],
      a = !1,
      c = 0,
      s = 0,
      f = 0.5;
    return (
      delete r.unknown,
      (r.domain = function (n) {
        return arguments.length ? (i(n), t()) : i();
      }),
      (r.range = function (n) {
        return arguments.length ? ((u = [+n[0], +n[1]]), t()) : u.slice();
      }),
      (r.rangeRound = function (n) {
        return (u = [+n[0], +n[1]]), (a = !0), t();
      }),
      (r.bandwidth = function () {
        return e;
      }),
      (r.step = function () {
        return n;
      }),
      (r.round = function (n) {
        return arguments.length ? ((a = !!n), t()) : a;
      }),
      (r.padding = function (n) {
        return arguments.length
          ? ((c = s = Math.max(0, Math.min(1, n))), t())
          : c;
      }),
      (r.paddingInner = function (n) {
        return arguments.length ? ((c = Math.max(0, Math.min(1, n))), t()) : c;
      }),
      (r.paddingOuter = function (n) {
        return arguments.length ? ((s = Math.max(0, Math.min(1, n))), t()) : s;
      }),
      (r.align = function (n) {
        return arguments.length ? ((f = Math.max(0, Math.min(1, n))), t()) : f;
      }),
      (r.copy = function () {
        return yu()
          .domain(i())
          .range(u)
          .round(a)
          .paddingInner(c)
          .paddingOuter(s)
          .align(f);
      }),
      t()
    );
  }
  function gu(t) {
    var n = t.copy;
    return (
      (t.padding = t.paddingOuter),
      delete t.paddingInner,
      delete t.paddingOuter,
      (t.copy = function () {
        return gu(n());
      }),
      t
    );
  }
  function mu() {
    return gu(yu().paddingInner(1));
  }
  function xu(t, n) {
    return (n -= t = +t)
      ? function (e) {
          return (e - t) / n;
        }
      : Cm(n);
  }
  function bu(t) {
    return function (n, e) {
      var r = t((n = +n), (e = +e));
      return function (t) {
        return t <= n ? 0 : t >= e ? 1 : r(t);
      };
    };
  }
  function wu(t) {
    return function (n, e) {
      var r = t((n = +n), (e = +e));
      return function (t) {
        return t <= 0 ? n : t >= 1 ? e : r(t);
      };
    };
  }
  function Mu(t, n, e, r) {
    var i = t[0],
      o = t[1],
      u = n[0],
      a = n[1];
    return (
      o < i ? ((i = e(o, i)), (u = r(a, u))) : ((i = e(i, o)), (u = r(u, a))),
      function (t) {
        return u(i(t));
      }
    );
  }
  function Tu(t, n, e, r) {
    var i = Math.min(t.length, n.length) - 1,
      o = new Array(i),
      u = new Array(i),
      a = -1;
    for (
      t[i] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
      ++a < i;

    )
      (o[a] = e(t[a], t[a + 1])), (u[a] = r(n[a], n[a + 1]));
    return function (n) {
      var e = Cs(t, n, 1, i) - 1;
      return u[e](o[e](n));
    };
  }
  function Nu(t, n) {
    return n
      .domain(t.domain())
      .range(t.range())
      .interpolate(t.interpolate())
      .clamp(t.clamp());
  }
  function ku(t, n) {
    function e() {
      return (
        (i = Math.min(a.length, c.length) > 2 ? Tu : Mu), (o = u = null), r
      );
    }
    function r(n) {
      return (o || (o = i(a, c, f ? bu(t) : t, s)))(+n);
    }
    var i,
      o,
      u,
      a = Pm,
      c = Pm,
      s = bh,
      f = !1;
    return (
      (r.invert = function (t) {
        return (u || (u = i(c, a, xu, f ? wu(n) : n)))(+t);
      }),
      (r.domain = function (t) {
        return arguments.length ? ((a = Sm.call(t, zm)), e()) : a.slice();
      }),
      (r.range = function (t) {
        return arguments.length ? ((c = Em.call(t)), e()) : c.slice();
      }),
      (r.rangeRound = function (t) {
        return (c = Em.call(t)), (s = wh), e();
      }),
      (r.clamp = function (t) {
        return arguments.length ? ((f = !!t), e()) : f;
      }),
      (r.interpolate = function (t) {
        return arguments.length ? ((s = t), e()) : s;
      }),
      e()
    );
  }
  function Su(t) {
    var n = t.domain;
    return (
      (t.ticks = function (t) {
        var e = n();
        return Vs(e[0], e[e.length - 1], null == t ? 10 : t);
      }),
      (t.tickFormat = function (t, e) {
        return Rm(n(), t, e);
      }),
      (t.nice = function (r) {
        var i = n(),
          o = i.length - 1,
          u = null == r ? 10 : r,
          a = i[0],
          c = i[o],
          s = e(a, c, u);
        return (
          s &&
            ((s = e(Math.floor(a / s) * s, Math.ceil(c / s) * s, u)),
            (i[0] = Math.floor(a / s) * s),
            (i[o] = Math.ceil(c / s) * s),
            n(i)),
          t
        );
      }),
      t
    );
  }
  function Eu() {
    var t = ku(xu, _h);
    return (
      (t.copy = function () {
        return Nu(t, Eu());
      }),
      Su(t)
    );
  }
  function Au() {
    function t(t) {
      return +t;
    }
    var n = [0, 1];
    return (
      (t.invert = t),
      (t.domain = t.range =
        function (e) {
          return arguments.length ? ((n = Sm.call(e, zm)), t) : n.slice();
        }),
      (t.copy = function () {
        return Au().domain(n);
      }),
      Su(t)
    );
  }
  function Cu(t, n) {
    return (n = Math.log(n / t))
      ? function (e) {
          return Math.log(e / t) / n;
        }
      : Cm(n);
  }
  function zu(t, n) {
    return t < 0
      ? function (e) {
          return -Math.pow(-n, e) * Math.pow(-t, 1 - e);
        }
      : function (e) {
          return Math.pow(n, e) * Math.pow(t, 1 - e);
        };
  }
  function Pu(t) {
    return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t;
  }
  function Ru(t) {
    return 10 === t
      ? Pu
      : t === Math.E
      ? Math.exp
      : function (n) {
          return Math.pow(t, n);
        };
  }
  function qu(t) {
    return t === Math.E
      ? Math.log
      : (10 === t && Math.log10) ||
          (2 === t && Math.log2) ||
          ((t = Math.log(t)),
          function (n) {
            return Math.log(n) / t;
          });
  }
  function Lu(t) {
    return function (n) {
      return -t(-n);
    };
  }
  function Uu() {
    function n() {
      return (
        (o = qu(i)), (u = Ru(i)), r()[0] < 0 && ((o = Lu(o)), (u = Lu(u))), e
      );
    }
    var e = ku(Cu, zu).domain([1, 10]),
      r = e.domain,
      i = 10,
      o = qu(10),
      u = Ru(10);
    return (
      (e.base = function (t) {
        return arguments.length ? ((i = +t), n()) : i;
      }),
      (e.domain = function (t) {
        return arguments.length ? (r(t), n()) : r();
      }),
      (e.ticks = function (t) {
        var n,
          e = r(),
          a = e[0],
          c = e[e.length - 1];
        (n = c < a) && ((h = a), (a = c), (c = h));
        var s,
          f,
          l,
          h = o(a),
          p = o(c),
          d = null == t ? 10 : +t,
          v = [];
        if (!(i % 1) && p - h < d) {
          if (((h = Math.round(h) - 1), (p = Math.round(p) + 1), a > 0)) {
            for (; h < p; ++h)
              for (f = 1, s = u(h); f < i; ++f)
                if (((l = s * f), !(l < a))) {
                  if (l > c) break;
                  v.push(l);
                }
          } else
            for (; h < p; ++h)
              for (f = i - 1, s = u(h); f >= 1; --f)
                if (((l = s * f), !(l < a))) {
                  if (l > c) break;
                  v.push(l);
                }
        } else v = Vs(h, p, Math.min(p - h, d)).map(u);
        return n ? v.reverse() : v;
      }),
      (e.tickFormat = function (n, r) {
        if (
          (null == r && (r = 10 === i ? ".0e" : ","),
          "function" != typeof r && (r = t.format(r)),
          n === 1 / 0)
        )
          return r;
        null == n && (n = 10);
        var a = Math.max(1, (i * n) / e.ticks().length);
        return function (t) {
          var n = t / u(Math.round(o(t)));
          return n * i < i - 0.5 && (n *= i), n <= a ? r(t) : "";
        };
      }),
      (e.nice = function () {
        return r(
          qm(r(), {
            floor: function (t) {
              return u(Math.floor(o(t)));
            },
            ceil: function (t) {
              return u(Math.ceil(o(t)));
            },
          })
        );
      }),
      (e.copy = function () {
        return Nu(e, Uu().base(i));
      }),
      e
    );
  }
  function Du(t, n) {
    return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n);
  }
  function Ou() {
    function t(t, n) {
      return (n = Du(n, e) - (t = Du(t, e)))
        ? function (r) {
            return (Du(r, e) - t) / n;
          }
        : Cm(n);
    }
    function n(t, n) {
      return (
        (n = Du(n, e) - (t = Du(t, e))),
        function (r) {
          return Du(t + n * r, 1 / e);
        }
      );
    }
    var e = 1,
      r = ku(t, n),
      i = r.domain;
    return (
      (r.exponent = function (t) {
        return arguments.length ? ((e = +t), i(i())) : e;
      }),
      (r.copy = function () {
        return Nu(r, Ou().exponent(e));
      }),
      Su(r)
    );
  }
  function Fu() {
    return Ou().exponent(0.5);
  }
  function Iu() {
    function t() {
      var t = 0,
        o = Math.max(1, r.length);
      for (i = new Array(o - 1); ++t < o; ) i[t - 1] = Zs(e, t / o);
      return n;
    }
    function n(t) {
      if (!isNaN((t = +t))) return r[Cs(i, t)];
    }
    var e = [],
      r = [],
      i = [];
    return (
      (n.invertExtent = function (t) {
        var n = r.indexOf(t);
        return n < 0
          ? [NaN, NaN]
          : [n > 0 ? i[n - 1] : e[0], n < i.length ? i[n] : e[e.length - 1]];
      }),
      (n.domain = function (n) {
        if (!arguments.length) return e.slice();
        e = [];
        for (var r, i = 0, o = n.length; i < o; ++i)
          (r = n[i]), null == r || isNaN((r = +r)) || e.push(r);
        return e.sort(Ss), t();
      }),
      (n.range = function (n) {
        return arguments.length ? ((r = Em.call(n)), t()) : r.slice();
      }),
      (n.quantiles = function () {
        return i.slice();
      }),
      (n.copy = function () {
        return Iu().domain(e).range(r);
      }),
      n
    );
  }
  function Yu() {
    function t(t) {
      if (t <= t) return u[Cs(o, t, 0, i)];
    }
    function n() {
      var n = -1;
      for (o = new Array(i); ++n < i; )
        o[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
      return t;
    }
    var e = 0,
      r = 1,
      i = 1,
      o = [0.5],
      u = [0, 1];
    return (
      (t.domain = function (t) {
        return arguments.length ? ((e = +t[0]), (r = +t[1]), n()) : [e, r];
      }),
      (t.range = function (t) {
        return arguments.length
          ? ((i = (u = Em.call(t)).length - 1), n())
          : u.slice();
      }),
      (t.invertExtent = function (t) {
        var n = u.indexOf(t);
        return n < 0
          ? [NaN, NaN]
          : n < 1
          ? [e, o[0]]
          : n >= i
          ? [o[i - 1], r]
          : [o[n - 1], o[n]];
      }),
      (t.copy = function () {
        return Yu().domain([e, r]).range(u);
      }),
      Su(t)
    );
  }
  function Bu() {
    function t(t) {
      if (t <= t) return e[Cs(n, t, 0, r)];
    }
    var n = [0.5],
      e = [0, 1],
      r = 1;
    return (
      (t.domain = function (i) {
        return arguments.length
          ? ((n = Em.call(i)), (r = Math.min(n.length, e.length - 1)), t)
          : n.slice();
      }),
      (t.range = function (i) {
        return arguments.length
          ? ((e = Em.call(i)), (r = Math.min(n.length, e.length - 1)), t)
          : e.slice();
      }),
      (t.invertExtent = function (t) {
        var r = e.indexOf(t);
        return [n[r - 1], n[r]];
      }),
      (t.copy = function () {
        return Bu().domain(n).range(e);
      }),
      t
    );
  }
  function ju(t, n, e, r) {
    function i(n) {
      return t((n = new Date(+n))), n;
    }
    return (
      (i.floor = i),
      (i.ceil = function (e) {
        return t((e = new Date(e - 1))), n(e, 1), t(e), e;
      }),
      (i.round = function (t) {
        var n = i(t),
          e = i.ceil(t);
        return t - n < e - t ? n : e;
      }),
      (i.offset = function (t, e) {
        return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
      }),
      (i.range = function (e, r, o) {
        var u = [];
        if (
          ((e = i.ceil(e)),
          (o = null == o ? 1 : Math.floor(o)),
          !(e < r && o > 0))
        )
          return u;
        do u.push(new Date(+e));
        while ((n(e, o), t(e), e < r));
        return u;
      }),
      (i.filter = function (e) {
        return ju(
          function (n) {
            if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
          },
          function (t, r) {
            if (t >= t) for (; --r >= 0; ) for (; n(t, 1), !e(t); );
          }
        );
      }),
      e &&
        ((i.count = function (n, r) {
          return (
            Lm.setTime(+n), Um.setTime(+r), t(Lm), t(Um), Math.floor(e(Lm, Um))
          );
        }),
        (i.every = function (t) {
          return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
              ? t > 1
                ? i.filter(
                    r
                      ? function (n) {
                          return r(n) % t === 0;
                        }
                      : function (n) {
                          return i.count(0, n) % t === 0;
                        }
                  )
                : i
              : null
          );
        })),
      i
    );
  }
  function Hu(t) {
    return ju(
      function (n) {
        n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
          n.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setDate(t.getDate() + 7 * n);
      },
      function (t, n) {
        return (
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Im) / jm
        );
      }
    );
  }
  function Xu(t) {
    return ju(
      function (n) {
        n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
          n.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCDate(t.getUTCDate() + 7 * n);
      },
      function (t, n) {
        return (n - t) / jm;
      }
    );
  }
  function Vu(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }
  function Wu(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }
  function $u(t) {
    return {
      y: t,
      m: 0,
      d: 1,
      H: 0,
      M: 0,
      S: 0,
      L: 0,
    };
  }
  function Zu(t) {
    function n(t, n) {
      return function (e) {
        var r,
          i,
          o,
          u = [],
          a = -1,
          c = 0,
          s = t.length;
        for (e instanceof Date || (e = new Date(+e)); ++a < s; )
          37 === t.charCodeAt(a) &&
            (u.push(t.slice(c, a)),
            null != (i = Yx[(r = t.charAt(++a))])
              ? (r = t.charAt(++a))
              : (i = "e" === r ? " " : "0"),
            (o = n[r]) && (r = o(e, i)),
            u.push(r),
            (c = a + 1));
        return u.push(t.slice(c, a)), u.join("");
      };
    }
    function e(t, n) {
      return function (e) {
        var i = $u(1900),
          o = r(i, t, (e += ""), 0);
        if (o != e.length) return null;
        if (("p" in i && (i.H = (i.H % 12) + 12 * i.p), "W" in i || "U" in i)) {
          "w" in i || (i.w = "W" in i ? 1 : 0);
          var u = "Z" in i ? Wu($u(i.y)).getUTCDay() : n($u(i.y)).getDay();
          (i.m = 0),
            (i.d =
              "W" in i
                ? ((i.w + 6) % 7) + 7 * i.W - ((u + 5) % 7)
                : i.w + 7 * i.U - ((u + 6) % 7));
        }
        return "Z" in i
          ? ((i.H += (i.Z / 100) | 0), (i.M += i.Z % 100), Wu(i))
          : n(i);
      };
    }
    function r(t, n, e, r) {
      for (var i, o, u = 0, a = n.length, c = e.length; u < a; ) {
        if (r >= c) return -1;
        if (((i = n.charCodeAt(u++)), 37 === i)) {
          if (
            ((i = n.charAt(u++)),
            (o = B[i in Yx ? n.charAt(u++) : i]),
            !o || (r = o(t, e, r)) < 0)
          )
            return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }
      return r;
    }
    function i(t, n, e) {
      var r = C.exec(n.slice(e));
      return r ? ((t.p = z[r[0].toLowerCase()]), e + r[0].length) : -1;
    }
    function o(t, n, e) {
      var r = q.exec(n.slice(e));
      return r ? ((t.w = L[r[0].toLowerCase()]), e + r[0].length) : -1;
    }
    function u(t, n, e) {
      var r = P.exec(n.slice(e));
      return r ? ((t.w = R[r[0].toLowerCase()]), e + r[0].length) : -1;
    }
    function a(t, n, e) {
      var r = O.exec(n.slice(e));
      return r ? ((t.m = F[r[0].toLowerCase()]), e + r[0].length) : -1;
    }
    function c(t, n, e) {
      var r = U.exec(n.slice(e));
      return r ? ((t.m = D[r[0].toLowerCase()]), e + r[0].length) : -1;
    }
    function s(t, n, e) {
      return r(t, w, n, e);
    }
    function f(t, n, e) {
      return r(t, M, n, e);
    }
    function l(t, n, e) {
      return r(t, T, n, e);
    }
    function h(t) {
      return S[t.getDay()];
    }
    function p(t) {
      return k[t.getDay()];
    }
    function d(t) {
      return A[t.getMonth()];
    }
    function v(t) {
      return E[t.getMonth()];
    }
    function _(t) {
      return N[+(t.getHours() >= 12)];
    }
    function y(t) {
      return S[t.getUTCDay()];
    }
    function g(t) {
      return k[t.getUTCDay()];
    }
    function m(t) {
      return A[t.getUTCMonth()];
    }
    function x(t) {
      return E[t.getUTCMonth()];
    }
    function b(t) {
      return N[+(t.getUTCHours() >= 12)];
    }
    var w = t.dateTime,
      M = t.date,
      T = t.time,
      N = t.periods,
      k = t.days,
      S = t.shortDays,
      E = t.months,
      A = t.shortMonths,
      C = Qu(N),
      z = Ku(N),
      P = Qu(k),
      R = Ku(k),
      q = Qu(S),
      L = Ku(S),
      U = Qu(E),
      D = Ku(E),
      O = Qu(A),
      F = Ku(A),
      I = {
        a: h,
        A: p,
        b: d,
        B: v,
        c: null,
        d: da,
        e: da,
        H: va,
        I: _a,
        j: ya,
        L: ga,
        m: ma,
        M: xa,
        p: _,
        S: ba,
        U: wa,
        w: Ma,
        W: Ta,
        x: null,
        X: null,
        y: Na,
        Y: ka,
        Z: Sa,
        "%": Ba,
      },
      Y = {
        a: y,
        A: g,
        b: m,
        B: x,
        c: null,
        d: Ea,
        e: Ea,
        H: Aa,
        I: Ca,
        j: za,
        L: Pa,
        m: Ra,
        M: qa,
        p: b,
        S: La,
        U: Ua,
        w: Da,
        W: Oa,
        x: null,
        X: null,
        y: Fa,
        Y: Ia,
        Z: Ya,
        "%": Ba,
      },
      B = {
        a: o,
        A: u,
        b: a,
        B: c,
        c: s,
        d: aa,
        e: aa,
        H: sa,
        I: sa,
        j: ca,
        L: ha,
        m: ua,
        M: fa,
        p: i,
        S: la,
        U: na,
        w: ta,
        W: ea,
        x: f,
        X: l,
        y: ia,
        Y: ra,
        Z: oa,
        "%": pa,
      };
    return (
      (I.x = n(M, I)),
      (I.X = n(T, I)),
      (I.c = n(w, I)),
      (Y.x = n(M, Y)),
      (Y.X = n(T, Y)),
      (Y.c = n(w, Y)),
      {
        format: function (t) {
          var e = n((t += ""), I);
          return (
            (e.toString = function () {
              return t;
            }),
            e
          );
        },
        parse: function (t) {
          var n = e((t += ""), Vu);
          return (
            (n.toString = function () {
              return t;
            }),
            n
          );
        },
        utcFormat: function (t) {
          var e = n((t += ""), Y);
          return (
            (e.toString = function () {
              return t;
            }),
            e
          );
        },
        utcParse: function (t) {
          var n = e(t, Wu);
          return (
            (n.toString = function () {
              return t;
            }),
            n
          );
        },
      }
    );
  }
  function Gu(t, n, e) {
    var r = t < 0 ? "-" : "",
      i = (r ? -t : t) + "",
      o = i.length;
    return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }
  function Ju(t) {
    return t.replace(Hx, "\\$&");
  }
  function Qu(t) {
    return new RegExp("^(?:" + t.map(Ju).join("|") + ")", "i");
  }
  function Ku(t) {
    for (var n = {}, e = -1, r = t.length; ++e < r; ) n[t[e].toLowerCase()] = e;
    return n;
  }
  function ta(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 1));
    return r ? ((t.w = +r[0]), e + r[0].length) : -1;
  }
  function na(t, n, e) {
    var r = Bx.exec(n.slice(e));
    return r ? ((t.U = +r[0]), e + r[0].length) : -1;
  }
  function ea(t, n, e) {
    var r = Bx.exec(n.slice(e));
    return r ? ((t.W = +r[0]), e + r[0].length) : -1;
  }
  function ra(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 4));
    return r ? ((t.y = +r[0]), e + r[0].length) : -1;
  }
  function ia(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 2));
    return r
      ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
      : -1;
  }
  function oa(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
    return r
      ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
      : -1;
  }
  function ua(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 2));
    return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
  }
  function aa(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 2));
    return r ? ((t.d = +r[0]), e + r[0].length) : -1;
  }
  function ca(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 3));
    return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
  }
  function sa(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 2));
    return r ? ((t.H = +r[0]), e + r[0].length) : -1;
  }
  function fa(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 2));
    return r ? ((t.M = +r[0]), e + r[0].length) : -1;
  }
  function la(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 2));
    return r ? ((t.S = +r[0]), e + r[0].length) : -1;
  }
  function ha(t, n, e) {
    var r = Bx.exec(n.slice(e, e + 3));
    return r ? ((t.L = +r[0]), e + r[0].length) : -1;
  }
  function pa(t, n, e) {
    var r = jx.exec(n.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function da(t, n) {
    return Gu(t.getDate(), n, 2);
  }
  function va(t, n) {
    return Gu(t.getHours(), n, 2);
  }
  function _a(t, n) {
    return Gu(t.getHours() % 12 || 12, n, 2);
  }
  function ya(t, n) {
    return Gu(1 + Gm.count(dx(t), t), n, 3);
  }
  function ga(t, n) {
    return Gu(t.getMilliseconds(), n, 3);
  }
  function ma(t, n) {
    return Gu(t.getMonth() + 1, n, 2);
  }
  function xa(t, n) {
    return Gu(t.getMinutes(), n, 2);
  }
  function ba(t, n) {
    return Gu(t.getSeconds(), n, 2);
  }
  function wa(t, n) {
    return Gu(Qm.count(dx(t), t), n, 2);
  }
  function Ma(t) {
    return t.getDay();
  }
  function Ta(t, n) {
    return Gu(Km.count(dx(t), t), n, 2);
  }
  function Na(t, n) {
    return Gu(t.getFullYear() % 100, n, 2);
  }
  function ka(t, n) {
    return Gu(t.getFullYear() % 1e4, n, 4);
  }
  function Sa(t) {
    var n = t.getTimezoneOffset();
    return (
      (n > 0 ? "-" : ((n *= -1), "+")) +
      Gu((n / 60) | 0, "0", 2) +
      Gu(n % 60, "0", 2)
    );
  }
  function Ea(t, n) {
    return Gu(t.getUTCDate(), n, 2);
  }
  function Aa(t, n) {
    return Gu(t.getUTCHours(), n, 2);
  }
  function Ca(t, n) {
    return Gu(t.getUTCHours() % 12 || 12, n, 2);
  }
  function za(t, n) {
    return Gu(1 + xx.count(Ox(t), t), n, 3);
  }
  function Pa(t, n) {
    return Gu(t.getUTCMilliseconds(), n, 3);
  }
  function Ra(t, n) {
    return Gu(t.getUTCMonth() + 1, n, 2);
  }
  function qa(t, n) {
    return Gu(t.getUTCMinutes(), n, 2);
  }
  function La(t, n) {
    return Gu(t.getUTCSeconds(), n, 2);
  }
  function Ua(t, n) {
    return Gu(wx.count(Ox(t), t), n, 2);
  }
  function Da(t) {
    return t.getUTCDay();
  }
  function Oa(t, n) {
    return Gu(Mx.count(Ox(t), t), n, 2);
  }
  function Fa(t, n) {
    return Gu(t.getUTCFullYear() % 100, n, 2);
  }
  function Ia(t, n) {
    return Gu(t.getUTCFullYear() % 1e4, n, 4);
  }
  function Ya() {
    return "+0000";
  }
  function Ba() {
    return "%";
  }
  function ja(n) {
    return (
      (Fx = Zu(n)),
      (t.timeFormat = Fx.format),
      (t.timeParse = Fx.parse),
      (t.utcFormat = Fx.utcFormat),
      (t.utcParse = Fx.utcParse),
      Fx
    );
  }
  function Ha(t) {
    return t.toISOString();
  }
  function Xa(t) {
    var n = new Date(t);
    return isNaN(n) ? null : n;
  }
  function Va(t) {
    return new Date(t);
  }
  function Wa(t) {
    return t instanceof Date ? +t : +new Date(+t);
  }
  function $a(t, n, r, i, o, u, a, c, s) {
    function f(e) {
      return (
        a(e) < e
          ? v
          : u(e) < e
          ? _
          : o(e) < e
          ? y
          : i(e) < e
          ? g
          : n(e) < e
          ? r(e) < e
            ? m
            : x
          : t(e) < e
          ? b
          : w
      )(e);
    }
    function l(n, r, i, o) {
      if ((null == n && (n = 10), "number" == typeof n)) {
        var u = Math.abs(i - r) / n,
          a = Es(function (t) {
            return t[2];
          }).right(M, u);
        a === M.length
          ? ((o = e(r / tb, i / tb, n)), (n = t))
          : a
          ? ((a = M[u / M[a - 1][2] < M[a][2] / u ? a - 1 : a]),
            (o = a[1]),
            (n = a[0]))
          : ((o = e(r, i, n)), (n = c));
      }
      return null == o ? n : n.every(o);
    }
    var h = ku(xu, _h),
      p = h.invert,
      d = h.domain,
      v = s(".%L"),
      _ = s(":%S"),
      y = s("%I:%M"),
      g = s("%I %p"),
      m = s("%a %d"),
      x = s("%b %d"),
      b = s("%B"),
      w = s("%Y"),
      M = [
        [a, 1, $x],
        [a, 5, 5 * $x],
        [a, 15, 15 * $x],
        [a, 30, 30 * $x],
        [u, 1, Zx],
        [u, 5, 5 * Zx],
        [u, 15, 15 * Zx],
        [u, 30, 30 * Zx],
        [o, 1, Gx],
        [o, 3, 3 * Gx],
        [o, 6, 6 * Gx],
        [o, 12, 12 * Gx],
        [i, 1, Jx],
        [i, 2, 2 * Jx],
        [r, 1, Qx],
        [n, 1, Kx],
        [n, 3, 3 * Kx],
        [t, 1, tb],
      ];
    return (
      (h.invert = function (t) {
        return new Date(p(t));
      }),
      (h.domain = function (t) {
        return arguments.length ? d(Sm.call(t, Wa)) : d().map(Va);
      }),
      (h.ticks = function (t, n) {
        var e,
          r = d(),
          i = r[0],
          o = r[r.length - 1],
          u = o < i;
        return (
          u && ((e = i), (i = o), (o = e)),
          (e = l(t, i, o, n)),
          (e = e ? e.range(i, o + 1) : []),
          u ? e.reverse() : e
        );
      }),
      (h.tickFormat = function (t, n) {
        return null == n ? f : s(n);
      }),
      (h.nice = function (t, n) {
        var e = d();
        return (t = l(t, e[0], e[e.length - 1], n)) ? d(qm(e, t)) : h;
      }),
      (h.copy = function () {
        return Nu(h, $a(t, n, r, i, o, u, a, c, s));
      }),
      h
    );
  }
  function Za(t) {
    var n = t.length;
    return function (e) {
      return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
    };
  }
  function Ga(t) {
    function n(n) {
      var o = (n - e) / (r - e);
      return t(i ? Math.max(0, Math.min(1, o)) : o);
    }
    var e = 0,
      r = 1,
      i = !1;
    return (
      (n.domain = function (t) {
        return arguments.length ? ((e = +t[0]), (r = +t[1]), n) : [e, r];
      }),
      (n.clamp = function (t) {
        return arguments.length ? ((i = !!t), n) : i;
      }),
      (n.interpolator = function (e) {
        return arguments.length ? ((t = e), n) : t;
      }),
      (n.copy = function () {
        return Ga(t).domain([e, r]).clamp(i);
      }),
      Su(n)
    );
  }
  function Ja(t) {
    return t.innerRadius;
  }
  function Qa(t) {
    return t.outerRadius;
  }
  function Ka(t) {
    return t.startAngle;
  }
  function tc(t) {
    return t.endAngle;
  }
  function nc(t) {
    return t && t.padAngle;
  }
  function ec(t) {
    return t >= 1 ? xb : t <= -1 ? -xb : Math.asin(t);
  }
  function rc(t, n, e, r, i, o, u, a) {
    var c = e - t,
      s = r - n,
      f = u - i,
      l = a - o,
      h = (f * (n - o) - l * (t - i)) / (l * c - f * s);
    return [t + h * c, n + h * s];
  }
  function ic(t, n, e, r, i, o, u) {
    var a = t - e,
      c = n - r,
      s = (u ? o : -o) / Math.sqrt(a * a + c * c),
      f = s * c,
      l = -s * a,
      h = t + f,
      p = n + l,
      d = e + f,
      v = r + l,
      _ = (h + d) / 2,
      y = (p + v) / 2,
      g = d - h,
      m = v - p,
      x = g * g + m * m,
      b = i - o,
      w = h * v - d * p,
      M = (m < 0 ? -1 : 1) * Math.sqrt(Math.max(0, b * b * x - w * w)),
      T = (w * m - g * M) / x,
      N = (-w * g - m * M) / x,
      k = (w * m + g * M) / x,
      S = (-w * g + m * M) / x,
      E = T - _,
      A = N - y,
      C = k - _,
      z = S - y;
    return (
      E * E + A * A > C * C + z * z && ((T = k), (N = S)),
      {
        cx: T,
        cy: N,
        x01: -f,
        y01: -l,
        x11: T * (i / b - 1),
        y11: N * (i / b - 1),
      }
    );
  }
  function oc(t) {
    this._context = t;
  }
  function uc(t) {
    return t[0];
  }
  function ac(t) {
    return t[1];
  }
  function cc(t) {
    this._curve = t;
  }
  function sc(t) {
    function n(n) {
      return new cc(t(n));
    }
    return (n._curve = t), n;
  }
  function fc(t) {
    var n = t.curve;
    return (
      (t.angle = t.x),
      delete t.x,
      (t.radius = t.y),
      delete t.y,
      (t.curve = function (t) {
        return arguments.length ? n(sc(t)) : n()._curve;
      }),
      t
    );
  }
  function lc(t, n, e) {
    t._context.bezierCurveTo(
      (2 * t._x0 + t._x1) / 3,
      (2 * t._y0 + t._y1) / 3,
      (t._x0 + 2 * t._x1) / 3,
      (t._y0 + 2 * t._y1) / 3,
      (t._x0 + 4 * t._x1 + n) / 6,
      (t._y0 + 4 * t._y1 + e) / 6
    );
  }
  function hc(t) {
    this._context = t;
  }
  function pc(t) {
    this._context = t;
  }
  function dc(t) {
    this._context = t;
  }
  function vc(t, n) {
    (this._basis = new hc(t)), (this._beta = n);
  }
  function _c(t, n, e) {
    t._context.bezierCurveTo(
      t._x1 + t._k * (t._x2 - t._x0),
      t._y1 + t._k * (t._y2 - t._y0),
      t._x2 + t._k * (t._x1 - n),
      t._y2 + t._k * (t._y1 - e),
      t._x2,
      t._y2
    );
  }
  function yc(t, n) {
    (this._context = t), (this._k = (1 - n) / 6);
  }
  function gc(t, n) {
    (this._context = t), (this._k = (1 - n) / 6);
  }
  function mc(t, n) {
    (this._context = t), (this._k = (1 - n) / 6);
  }
  function xc(t, n, e) {
    var r = t._x1,
      i = t._y1,
      o = t._x2,
      u = t._y2;
    if (t._l01_a > gb) {
      var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
        c = 3 * t._l01_a * (t._l01_a + t._l12_a);
      (r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c),
        (i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c);
    }
    if (t._l23_a > gb) {
      var s = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
        f = 3 * t._l23_a * (t._l23_a + t._l12_a);
      (o = (o * s + t._x1 * t._l23_2a - n * t._l12_2a) / f),
        (u = (u * s + t._y1 * t._l23_2a - e * t._l12_2a) / f);
    }
    t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2);
  }
  function bc(t, n) {
    (this._context = t), (this._alpha = n);
  }
  function wc(t, n) {
    (this._context = t), (this._alpha = n);
  }
  function Mc(t, n) {
    (this._context = t), (this._alpha = n);
  }
  function Tc(t) {
    this._context = t;
  }
  function Nc(t) {
    return t < 0 ? -1 : 1;
  }
  function kc(t, n, e) {
    var r = t._x1 - t._x0,
      i = n - t._x1,
      o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
      u = (e - t._y1) / (i || (r < 0 && -0)),
      a = (o * i + u * r) / (r + i);
    return (
      (Nc(o) + Nc(u)) * Math.min(Math.abs(o), Math.abs(u), 0.5 * Math.abs(a)) ||
      0
    );
  }
  function Sc(t, n) {
    var e = t._x1 - t._x0;
    return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
  }
  function Ec(t, n, e) {
    var r = t._x0,
      i = t._y0,
      o = t._x1,
      u = t._y1,
      a = (o - r) / 3;
    t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u);
  }
  function Ac(t) {
    this._context = t;
  }
  function Cc(t) {
    this._context = new zc(t);
  }
  function zc(t) {
    this._context = t;
  }
  function Pc(t) {
    return new Ac(t);
  }
  function Rc(t) {
    return new Cc(t);
  }
  function qc(t) {
    this._context = t;
  }
  function Lc(t) {
    var n,
      e,
      r = t.length - 1,
      i = new Array(r),
      o = new Array(r),
      u = new Array(r);
    for (i[0] = 0, o[0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n)
      (i[n] = 1), (o[n] = 4), (u[n] = 4 * t[n] + 2 * t[n + 1]);
    for (
      i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1;
      n < r;
      ++n
    )
      (e = i[n] / o[n - 1]), (o[n] -= e), (u[n] -= e * u[n - 1]);
    for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; n >= 0; --n)
      i[n] = (u[n] - i[n + 1]) / o[n];
    for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n)
      o[n] = 2 * t[n + 1] - i[n + 1];
    return [i, o];
  }
  function Uc(t, n) {
    (this._context = t), (this._t = n);
  }
  function Dc(t) {
    return new Uc(t, 0);
  }
  function Oc(t) {
    return new Uc(t, 1);
  }
  function Fc(t, n) {
    return t[n];
  }
  function Ic(t) {
    for (var n, e = 0, r = -1, i = t.length; ++r < i; )
      (n = +t[r][1]) && (e += n);
    return e;
  }
  function Yc(t) {
    return t[0];
  }
  function Bc(t) {
    return t[1];
  }
  function jc() {
    this._ = null;
  }
  function Hc(t) {
    t.U = t.C = t.L = t.R = t.P = t.N = null;
  }
  function Xc(t, n) {
    var e = n,
      r = n.R,
      i = e.U;
    i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
      (r.U = i),
      (e.U = r),
      (e.R = r.L),
      e.R && (e.R.U = e),
      (r.L = e);
  }
  function Vc(t, n) {
    var e = n,
      r = n.L,
      i = e.U;
    i ? (i.L === e ? (i.L = r) : (i.R = r)) : (t._ = r),
      (r.U = i),
      (e.U = r),
      (e.L = r.R),
      e.L && (e.L.U = e),
      (r.R = e);
  }
  function Wc(t) {
    for (; t.L; ) t = t.L;
    return t;
  }
  function $c(t, n, e, r) {
    var i = [null, null],
      o = Ew.push(i) - 1;
    return (
      (i.left = t),
      (i.right = n),
      e && Gc(i, t, n, e),
      r && Gc(i, n, t, r),
      kw[t.index].halfedges.push(o),
      kw[n.index].halfedges.push(o),
      i
    );
  }
  function Zc(t, n, e) {
    var r = [n, e];
    return (r.left = t), r;
  }
  function Gc(t, n, e, r) {
    t[0] || t[1]
      ? t.left === e
        ? (t[1] = r)
        : (t[0] = r)
      : ((t[0] = r), (t.left = n), (t.right = e));
  }
  function Jc(t, n, e, r, i) {
    var o,
      u = t[0],
      a = t[1],
      c = u[0],
      s = u[1],
      f = a[0],
      l = a[1],
      h = 0,
      p = 1,
      d = f - c,
      v = l - s;
    if (((o = n - c), d || !(o > 0))) {
      if (((o /= d), d < 0)) {
        if (o < h) return;
        o < p && (p = o);
      } else if (d > 0) {
        if (o > p) return;
        o > h && (h = o);
      }
      if (((o = r - c), d || !(o < 0))) {
        if (((o /= d), d < 0)) {
          if (o > p) return;
          o > h && (h = o);
        } else if (d > 0) {
          if (o < h) return;
          o < p && (p = o);
        }
        if (((o = e - s), v || !(o > 0))) {
          if (((o /= v), v < 0)) {
            if (o < h) return;
            o < p && (p = o);
          } else if (v > 0) {
            if (o > p) return;
            o > h && (h = o);
          }
          if (((o = i - s), v || !(o < 0))) {
            if (((o /= v), v < 0)) {
              if (o > p) return;
              o > h && (h = o);
            } else if (v > 0) {
              if (o < h) return;
              o < p && (p = o);
            }
            return (
              !(h > 0 || p < 1) ||
              (h > 0 && (t[0] = [c + h * d, s + h * v]),
              p < 1 && (t[1] = [c + p * d, s + p * v]),
              !0)
            );
          }
        }
      }
    }
  }
  function Qc(t, n, e, r, i) {
    var o = t[1];
    if (o) return !0;
    var u,
      a,
      c = t[0],
      s = t.left,
      f = t.right,
      l = s[0],
      h = s[1],
      p = f[0],
      d = f[1],
      v = (l + p) / 2,
      _ = (h + d) / 2;
    if (d === h) {
      if (v < n || v >= r) return;
      if (l > p) {
        if (c) {
          if (c[1] >= i) return;
        } else c = [v, e];
        o = [v, i];
      } else {
        if (c) {
          if (c[1] < e) return;
        } else c = [v, i];
        o = [v, e];
      }
    } else if (((u = (l - p) / (d - h)), (a = _ - u * v), u < -1 || u > 1))
      if (l > p) {
        if (c) {
          if (c[1] >= i) return;
        } else c = [(e - a) / u, e];
        o = [(i - a) / u, i];
      } else {
        if (c) {
          if (c[1] < e) return;
        } else c = [(i - a) / u, i];
        o = [(e - a) / u, e];
      }
    else if (h < d) {
      if (c) {
        if (c[0] >= r) return;
      } else c = [n, u * n + a];
      o = [r, u * r + a];
    } else {
      if (c) {
        if (c[0] < n) return;
      } else c = [r, u * r + a];
      o = [n, u * n + a];
    }
    return (t[0] = c), (t[1] = o), !0;
  }
  function Kc(t, n, e, r) {
    for (var i, o = Ew.length; o--; )
      (Qc((i = Ew[o]), t, n, e, r) &&
        Jc(i, t, n, e, r) &&
        (Math.abs(i[0][0] - i[1][0]) > zw ||
          Math.abs(i[0][1] - i[1][1]) > zw)) ||
        delete Ew[o];
  }
  function ts(t) {
    return (kw[t.index] = {
      site: t,
      halfedges: [],
    });
  }
  function ns(t, n) {
    var e = t.site,
      r = n.left,
      i = n.right;
    return (
      e === i && ((i = r), (r = e)),
      i
        ? Math.atan2(i[1] - r[1], i[0] - r[0])
        : (e === r ? ((r = n[1]), (i = n[0])) : ((r = n[0]), (i = n[1])),
          Math.atan2(r[0] - i[0], i[1] - r[1]))
    );
  }
  function es(t, n) {
    return n[+(n.left !== t.site)];
  }
  function rs(t, n) {
    return n[+(n.left === t.site)];
  }
  function is() {
    for (var t, n, e, r, i = 0, o = kw.length; i < o; ++i)
      if ((t = kw[i]) && (r = (n = t.halfedges).length)) {
        var u = new Array(r),
          a = new Array(r);
        for (e = 0; e < r; ++e) (u[e] = e), (a[e] = ns(t, Ew[n[e]]));
        for (
          u.sort(function (t, n) {
            return a[n] - a[t];
          }),
            e = 0;
          e < r;
          ++e
        )
          a[e] = n[u[e]];
        for (e = 0; e < r; ++e) n[e] = a[e];
      }
  }
  function os(t, n, e, r) {
    var i,
      o,
      u,
      a,
      c,
      s,
      f,
      l,
      h,
      p,
      d,
      v,
      _ = kw.length,
      y = !0;
    for (i = 0; i < _; ++i)
      if ((o = kw[i])) {
        for (u = o.site, c = o.halfedges, a = c.length; a--; )
          Ew[c[a]] || c.splice(a, 1);
        for (a = 0, s = c.length; a < s; )
          (p = rs(o, Ew[c[a]])),
            (d = p[0]),
            (v = p[1]),
            (f = es(o, Ew[c[++a % s]])),
            (l = f[0]),
            (h = f[1]),
            (Math.abs(d - l) > zw || Math.abs(v - h) > zw) &&
              (c.splice(
                a,
                0,
                Ew.push(
                  Zc(
                    u,
                    p,
                    Math.abs(d - t) < zw && r - v > zw
                      ? [t, Math.abs(l - t) < zw ? h : r]
                      : Math.abs(v - r) < zw && e - d > zw
                      ? [Math.abs(h - r) < zw ? l : e, r]
                      : Math.abs(d - e) < zw && v - n > zw
                      ? [e, Math.abs(l - e) < zw ? h : n]
                      : Math.abs(v - n) < zw && d - t > zw
                      ? [Math.abs(h - n) < zw ? l : t, n]
                      : null
                  )
                ) - 1
              ),
              ++s);
        s && (y = !1);
      }
    if (y) {
      var g,
        m,
        x,
        b = 1 / 0;
      for (i = 0, y = null; i < _; ++i)
        (o = kw[i]) &&
          ((u = o.site),
          (g = u[0] - t),
          (m = u[1] - n),
          (x = g * g + m * m),
          x < b && ((b = x), (y = o)));
      if (y) {
        var w = [t, n],
          M = [t, r],
          T = [e, r],
          N = [e, n];
        y.halfedges.push(
          Ew.push(Zc((u = y.site), w, M)) - 1,
          Ew.push(Zc(u, M, T)) - 1,
          Ew.push(Zc(u, T, N)) - 1,
          Ew.push(Zc(u, N, w)) - 1
        );
      }
    }
    for (i = 0; i < _; ++i) (o = kw[i]) && (o.halfedges.length || delete kw[i]);
  }
  function us() {
    Hc(this), (this.x = this.y = this.arc = this.site = this.cy = null);
  }
  function as(t) {
    var n = t.P,
      e = t.N;
    if (n && e) {
      var r = n.site,
        i = t.site,
        o = e.site;
      if (r !== o) {
        var u = i[0],
          a = i[1],
          c = r[0] - u,
          s = r[1] - a,
          f = o[0] - u,
          l = o[1] - a,
          h = 2 * (c * l - s * f);
        if (!(h >= -Pw)) {
          var p = c * c + s * s,
            d = f * f + l * l,
            v = (l * p - s * d) / h,
            _ = (c * d - f * p) / h,
            y = Aw.pop() || new us();
          (y.arc = t),
            (y.site = i),
            (y.x = v + u),
            (y.y = (y.cy = _ + a) + Math.sqrt(v * v + _ * _)),
            (t.circle = y);
          for (var g = null, m = Sw._; m; )
            if (y.y < m.y || (y.y === m.y && y.x <= m.x)) {
              if (!m.L) {
                g = m.P;
                break;
              }
              m = m.L;
            } else {
              if (!m.R) {
                g = m;
                break;
              }
              m = m.R;
            }
          Sw.insert(g, y), g || (Tw = y);
        }
      }
    }
  }
  function cs(t) {
    var n = t.circle;
    n &&
      (n.P || (Tw = n.N), Sw.remove(n), Aw.push(n), Hc(n), (t.circle = null));
  }
  function ss() {
    Hc(this), (this.edge = this.site = this.circle = null);
  }
  function fs(t) {
    var n = Cw.pop() || new ss();
    return (n.site = t), n;
  }
  function ls(t) {
    cs(t), Nw.remove(t), Cw.push(t), Hc(t);
  }
  function hs(t) {
    var n = t.circle,
      e = n.x,
      r = n.cy,
      i = [e, r],
      o = t.P,
      u = t.N,
      a = [t];
    ls(t);
    for (
      var c = o;
      c.circle &&
      Math.abs(e - c.circle.x) < zw &&
      Math.abs(r - c.circle.cy) < zw;

    )
      (o = c.P), a.unshift(c), ls(c), (c = o);
    a.unshift(c), cs(c);
    for (
      var s = u;
      s.circle &&
      Math.abs(e - s.circle.x) < zw &&
      Math.abs(r - s.circle.cy) < zw;

    )
      (u = s.N), a.push(s), ls(s), (s = u);
    a.push(s), cs(s);
    var f,
      l = a.length;
    for (f = 1; f < l; ++f)
      (s = a[f]), (c = a[f - 1]), Gc(s.edge, c.site, s.site, i);
    (c = a[0]),
      (s = a[l - 1]),
      (s.edge = $c(c.site, s.site, null, i)),
      as(c),
      as(s);
  }
  function ps(t) {
    for (var n, e, r, i, o = t[0], u = t[1], a = Nw._; a; )
      if (((r = ds(a, u) - o), r > zw)) a = a.L;
      else {
        if (((i = o - vs(a, u)), !(i > zw))) {
          r > -zw
            ? ((n = a.P), (e = a))
            : i > -zw
            ? ((n = a), (e = a.N))
            : (n = e = a);
          break;
        }
        if (!a.R) {
          n = a;
          break;
        }
        a = a.R;
      }
    ts(t);
    var c = fs(t);
    if ((Nw.insert(n, c), n || e)) {
      if (n === e)
        return (
          cs(n),
          (e = fs(n.site)),
          Nw.insert(c, e),
          (c.edge = e.edge = $c(n.site, c.site)),
          as(n),
          void as(e)
        );
      if (!e) return void (c.edge = $c(n.site, c.site));
      cs(n), cs(e);
      var s = n.site,
        f = s[0],
        l = s[1],
        h = t[0] - f,
        p = t[1] - l,
        d = e.site,
        v = d[0] - f,
        _ = d[1] - l,
        y = 2 * (h * _ - p * v),
        g = h * h + p * p,
        m = v * v + _ * _,
        x = [(_ * g - p * m) / y + f, (h * m - v * g) / y + l];
      Gc(e.edge, s, d, x),
        (c.edge = $c(s, t, null, x)),
        (e.edge = $c(t, d, null, x)),
        as(n),
        as(e);
    }
  }
  function ds(t, n) {
    var e = t.site,
      r = e[0],
      i = e[1],
      o = i - n;
    if (!o) return r;
    var u = t.P;
    if (!u) return -(1 / 0);
    e = u.site;
    var a = e[0],
      c = e[1],
      s = c - n;
    if (!s) return a;
    var f = a - r,
      l = 1 / o - 1 / s,
      h = f / s;
    return l
      ? (-h +
          Math.sqrt(
            h * h - 2 * l * ((f * f) / (-2 * s) - c + s / 2 + i - o / 2)
          )) /
          l +
          r
      : (r + a) / 2;
  }
  function vs(t, n) {
    var e = t.N;
    if (e) return ds(e, n);
    var r = t.site;
    return r[1] === n ? r[0] : 1 / 0;
  }
  function _s(t, n, e) {
    return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1]);
  }
  function ys(t, n) {
    return n[1] - t[1] || n[0] - t[0];
  }
  function gs(t, n) {
    var e,
      r,
      i,
      o = t.sort(ys).pop();
    for (Ew = [], kw = new Array(t.length), Nw = new jc(), Sw = new jc(); ; )
      if (((i = Tw), o && (!i || o[1] < i.y || (o[1] === i.y && o[0] < i.x))))
        (o[0] === e && o[1] === r) || (ps(o), (e = o[0]), (r = o[1])),
          (o = t.pop());
      else {
        if (!i) break;
        hs(i.arc);
      }
    if ((is(), n)) {
      var u = +n[0][0],
        a = +n[0][1],
        c = +n[1][0],
        s = +n[1][1];
      Kc(u, a, c, s), os(u, a, c, s);
    }
    (this.edges = Ew), (this.cells = kw), (Nw = Sw = Ew = kw = null);
  }
  function ms(t, n, e) {
    (this.target = t), (this.type = n), (this.transform = e);
  }
  function xs(t, n, e) {
    (this.k = t), (this.x = n), (this.y = e);
  }
  function bs(t) {
    return t.__zoom || Lw;
  }
  function ws() {
    t.event.stopImmediatePropagation();
  }
  function Ms() {
    return !t.event.button;
  }
  function Ts() {
    var t,
      n,
      e = this;
    return (
      e instanceof SVGElement
        ? ((e = e.ownerSVGElement || e),
          (t = e.width.baseVal.value),
          (n = e.height.baseVal.value))
        : ((t = e.clientWidth), (n = e.clientHeight)),
      [
        [0, 0],
        [t, n],
      ]
    );
  }
  function Ns() {
    return this.__zoom || Lw;
  }
  var ks = "4.6.0",
    Ss = function (t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    },
    Es = function (t) {
      return (
        1 === t.length && (t = n(t)),
        {
          left: function (n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
              var o = (r + i) >>> 1;
              t(n[o], e) < 0 ? (r = o + 1) : (i = o);
            }
            return r;
          },
          right: function (n, e, r, i) {
            for (null == r && (r = 0), null == i && (i = n.length); r < i; ) {
              var o = (r + i) >>> 1;
              t(n[o], e) > 0 ? (i = o) : (r = o + 1);
            }
            return r;
          },
        }
      );
    },
    As = Es(Ss),
    Cs = As.right,
    zs = As.left,
    Ps = function (t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    },
    Rs = function (t) {
      return null === t ? NaN : +t;
    },
    qs = function (t, n) {
      var e,
        r,
        i = t.length,
        o = 0,
        u = 0,
        a = -1,
        c = 0;
      if (null == n)
        for (; ++a < i; )
          isNaN((e = Rs(t[a]))) ||
            ((r = e - o), (o += r / ++c), (u += r * (e - o)));
      else
        for (; ++a < i; )
          isNaN((e = Rs(n(t[a], a, t)))) ||
            ((r = e - o), (o += r / ++c), (u += r * (e - o)));
      if (c > 1) return u / (c - 1);
    },
    Ls = function (t, n) {
      var e = qs(t, n);
      return e ? Math.sqrt(e) : e;
    },
    Us = function (t, n) {
      var e,
        r,
        i,
        o = -1,
        u = t.length;
      if (null == n) {
        for (; ++o < u; )
          if (null != (r = t[o]) && r >= r) {
            e = i = r;
            break;
          }
        for (; ++o < u; )
          null != (r = t[o]) && (e > r && (e = r), i < r && (i = r));
      } else {
        for (; ++o < u; )
          if (null != (r = n(t[o], o, t)) && r >= r) {
            e = i = r;
            break;
          }
        for (; ++o < u; )
          null != (r = n(t[o], o, t)) && (e > r && (e = r), i < r && (i = r));
      }
      return [e, i];
    },
    Ds = Array.prototype,
    Os = Ds.slice,
    Fs = Ds.map,
    Is = function (t) {
      return function () {
        return t;
      };
    },
    Ys = function (t) {
      return t;
    },
    Bs = function (t, n, e) {
      (t = +t),
        (n = +n),
        (e =
          (i = arguments.length) < 2 ? ((n = t), (t = 0), 1) : i < 3 ? 1 : +e);
      for (
        var r = -1,
          i = 0 | Math.max(0, Math.ceil((n - t) / e)),
          o = new Array(i);
        ++r < i;

      )
        o[r] = t + r * e;
      return o;
    },
    js = Math.sqrt(50),
    Hs = Math.sqrt(10),
    Xs = Math.sqrt(2),
    Vs = function (t, n, r) {
      var i = e(t, n, r);
      return Bs(Math.ceil(t / i) * i, Math.floor(n / i) * i + i / 2, i);
    },
    Ws = function (t) {
      return Math.ceil(Math.log(t.length) / Math.LN2) + 1;
    },
    $s = function () {
      function t(t) {
        var i,
          o,
          u = t.length,
          a = new Array(u);
        for (i = 0; i < u; ++i) a[i] = n(t[i], i, t);
        var c = e(a),
          s = c[0],
          f = c[1],
          l = r(a, s, f);
        Array.isArray(l) || (l = Vs(s, f, l));
        for (var h = l.length; l[0] <= s; ) l.shift(), --h;
        for (; l[h - 1] >= f; ) l.pop(), --h;
        var p,
          d = new Array(h + 1);
        for (i = 0; i <= h; ++i)
          (p = d[i] = []),
            (p.x0 = i > 0 ? l[i - 1] : s),
            (p.x1 = i < h ? l[i] : f);
        for (i = 0; i < u; ++i)
          (o = a[i]), s <= o && o <= f && d[Cs(l, o, 0, h)].push(t[i]);
        return d;
      }
      var n = Ys,
        e = Us,
        r = Ws;
      return (
        (t.value = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Is(e)), t)
            : n;
        }),
        (t.domain = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Is([n[0], n[1]])), t)
            : e;
        }),
        (t.thresholds = function (n) {
          return arguments.length
            ? ((r =
                "function" == typeof n
                  ? n
                  : Is(Array.isArray(n) ? Os.call(n) : n)),
              t)
            : r;
        }),
        t
      );
    },
    Zs = function (t, n, e) {
      if ((null == e && (e = Rs), (r = t.length))) {
        if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
        if (n >= 1) return +e(t[r - 1], r - 1, t);
        var r,
          i = (r - 1) * n,
          o = Math.floor(i),
          u = +e(t[o], o, t),
          a = +e(t[o + 1], o + 1, t);
        return u + (a - u) * (i - o);
      }
    },
    Gs = function (t, n, e) {
      return (
        (t = Fs.call(t, Rs).sort(Ss)),
        Math.ceil(
          (e - n) /
            (2 * (Zs(t, 0.75) - Zs(t, 0.25)) * Math.pow(t.length, -1 / 3))
        )
      );
    },
    Js = function (t, n, e) {
      return Math.ceil((e - n) / (3.5 * Ls(t) * Math.pow(t.length, -1 / 3)));
    },
    Qs = function (t, n) {
      var e,
        r,
        i = -1,
        o = t.length;
      if (null == n) {
        for (; ++i < o; )
          if (null != (r = t[i]) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < o; ) null != (r = t[i]) && r > e && (e = r);
      } else {
        for (; ++i < o; )
          if (null != (r = n(t[i], i, t)) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < o; ) null != (r = n(t[i], i, t)) && r > e && (e = r);
      }
      return e;
    },
    Ks = function (t, n) {
      var e,
        r = 0,
        i = t.length,
        o = -1,
        u = i;
      if (null == n) for (; ++o < i; ) isNaN((e = Rs(t[o]))) ? --u : (r += e);
      else for (; ++o < i; ) isNaN((e = Rs(n(t[o], o, t)))) ? --u : (r += e);
      if (u) return r / u;
    },
    tf = function (t, n) {
      var e,
        r = [],
        i = t.length,
        o = -1;
      if (null == n) for (; ++o < i; ) isNaN((e = Rs(t[o]))) || r.push(e);
      else for (; ++o < i; ) isNaN((e = Rs(n(t[o], o, t)))) || r.push(e);
      return Zs(r.sort(Ss), 0.5);
    },
    nf = function (t) {
      for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i; )
        u += t[o].length;
      for (e = new Array(u); --i >= 0; )
        for (r = t[i], n = r.length; --n >= 0; ) e[--u] = r[n];
      return e;
    },
    ef = function (t, n) {
      var e,
        r,
        i = -1,
        o = t.length;
      if (null == n) {
        for (; ++i < o; )
          if (null != (r = t[i]) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < o; ) null != (r = t[i]) && e > r && (e = r);
      } else {
        for (; ++i < o; )
          if (null != (r = n(t[i], i, t)) && r >= r) {
            e = r;
            break;
          }
        for (; ++i < o; ) null != (r = n(t[i], i, t)) && e > r && (e = r);
      }
      return e;
    },
    rf = function (t) {
      for (
        var n = 0, e = t.length - 1, r = t[0], i = new Array(e < 0 ? 0 : e);
        n < e;

      )
        i[n] = [r, (r = t[++n])];
      return i;
    },
    of = function (t, n) {
      for (var e = n.length, r = new Array(e); e--; ) r[e] = t[n[e]];
      return r;
    },
    uf = function (t, n) {
      if ((e = t.length)) {
        var e,
          r,
          i = 0,
          o = 0,
          u = t[o];
        for (n || (n = Ss); ++i < e; )
          (n((r = t[i]), u) < 0 || 0 !== n(u, u)) && ((u = r), (o = i));
        return 0 === n(u, u) ? o : void 0;
      }
    },
    af = function (t, n, e) {
      for (
        var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n);
        o;

      )
        (i = (Math.random() * o--) | 0),
          (r = t[o + n]),
          (t[o + n] = t[i + n]),
          (t[i + n] = r);
      return t;
    },
    cf = function (t, n) {
      var e,
        r = 0,
        i = t.length,
        o = -1;
      if (null == n) for (; ++o < i; ) (e = +t[o]) && (r += e);
      else for (; ++o < i; ) (e = +n(t[o], o, t)) && (r += e);
      return r;
    },
    sf = function (t) {
      if (!(o = t.length)) return [];
      for (var n = -1, e = ef(t, r), i = new Array(e); ++n < e; )
        for (var o, u = -1, a = (i[n] = new Array(o)); ++u < o; )
          a[u] = t[u][n];
      return i;
    },
    ff = function () {
      return sf(arguments);
    },
    lf = Array.prototype.slice,
    hf = function (t) {
      return t;
    },
    pf = 1,
    df = 2,
    vf = 3,
    _f = 4,
    yf = 1e-6,
    gf = {
      value: function () {},
    };
  d.prototype = p.prototype = {
    constructor: d,
    on: function (t, n) {
      var e,
        r = this._,
        i = v(t + "", r),
        o = -1,
        u = i.length;
      {
        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n)
            throw new Error("invalid callback: " + n);
          for (; ++o < u; )
            if ((e = (t = i[o]).type)) r[e] = y(r[e], t.name, n);
            else if (null == n) for (e in r) r[e] = y(r[e], t.name, null);
          return this;
        }
        for (; ++o < u; )
          if ((e = (t = i[o]).type) && (e = _(r[e], t.name))) return e;
      }
    },
    copy: function () {
      var t = {},
        n = this._;
      for (var e in n) t[e] = n[e].slice();
      return new d(t);
    },
    call: function (t, n) {
      if ((e = arguments.length - 2) > 0)
        for (var e, r, i = new Array(e), o = 0; o < e; ++o)
          i[o] = arguments[o + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (r = this._[t], o = 0, e = r.length; o < e; ++o)
        r[o].value.apply(n, i);
    },
    apply: function (t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
        r[i].value.apply(n, e);
    },
  };
  var mf = "http://www.w3.org/1999/xhtml",
    xf = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: mf,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    },
    bf = function (t) {
      var n = (t += ""),
        e = n.indexOf(":");
      return (
        e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
        xf.hasOwnProperty(n)
          ? {
              space: xf[n],
              local: t,
            }
          : t
      );
    },
    wf = function (t) {
      var n = bf(t);
      return (n.local ? m : g)(n);
    },
    Mf = 0;
  b.prototype = x.prototype = {
    constructor: b,
    get: function (t) {
      for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
      return t[n];
    },
    set: function (t, n) {
      return (t[this._] = n);
    },
    remove: function (t) {
      return this._ in t && delete t[this._];
    },
    toString: function () {
      return this._;
    },
  };
  var Tf = function (t) {
    return function () {
      return this.matches(t);
    };
  };
  if ("undefined" != typeof document) {
    var Nf = document.documentElement;
    if (!Nf.matches) {
      var kf =
        Nf.webkitMatchesSelector ||
        Nf.msMatchesSelector ||
        Nf.mozMatchesSelector ||
        Nf.oMatchesSelector;
      Tf = function (t) {
        return function () {
          return kf.call(this, t);
        };
      };
    }
  }
  var Sf = Tf,
    Ef = {};
  if (((t.event = null), "undefined" != typeof document)) {
    var Af = document.documentElement;
    "onmouseenter" in Af ||
      (Ef = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
      });
  }
  var Cf = function (t, n, e) {
      var r,
        i,
        o = T(t + ""),
        u = o.length;
      {
        if (!(arguments.length < 2)) {
          for (a = n ? k : N, null == e && (e = !1), r = 0; r < u; ++r)
            this.each(a(o[r], n, e));
          return this;
        }
        var a = this.node().__on;
        if (a)
          for (var c, s = 0, f = a.length; s < f; ++s)
            for (r = 0, c = a[s]; r < u; ++r)
              if ((i = o[r]).type === c.type && i.name === c.name)
                return c.value;
      }
    },
    zf = function () {
      for (var n, e = t.event; (n = e.sourceEvent); ) e = n;
      return e;
    },
    Pf = function (t, n) {
      var e = t.ownerSVGElement || t;
      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        return (
          (r.x = n.clientX),
          (r.y = n.clientY),
          (r = r.matrixTransform(t.getScreenCTM().inverse())),
          [r.x, r.y]
        );
      }
      var i = t.getBoundingClientRect();
      return [
        n.clientX - i.left - t.clientLeft,
        n.clientY - i.top - t.clientTop,
      ];
    },
    Rf = function (t) {
      var n = zf();
      return n.changedTouches && (n = n.changedTouches[0]), Pf(t, n);
    },
    qf = function (t) {
      return null == t
        ? E
        : function () {
            return this.querySelector(t);
          };
    },
    Lf = function (t) {
      "function" != typeof t && (t = qf(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (
          var o, u, a = n[i], c = a.length, s = (r[i] = new Array(c)), f = 0;
          f < c;
          ++f
        )
          (o = a[f]) &&
            (u = t.call(o, o.__data__, f, a)) &&
            ("__data__" in o && (u.__data__ = o.__data__), (s[f] = u));
      return new pt(r, this._parents);
    },
    Uf = function (t) {
      return null == t
        ? A
        : function () {
            return this.querySelectorAll(t);
          };
    },
    Df = function (t) {
      "function" != typeof t && (t = Uf(t));
      for (
        var n = this._groups, e = n.length, r = [], i = [], o = 0;
        o < e;
        ++o
      )
        for (var u, a = n[o], c = a.length, s = 0; s < c; ++s)
          (u = a[s]) && (r.push(t.call(u, u.__data__, s, a)), i.push(u));
      return new pt(r, i);
    },
    Of = function (t) {
      "function" != typeof t && (t = Sf(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (var o, u = n[i], a = u.length, c = (r[i] = []), s = 0; s < a; ++s)
          (o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
      return new pt(r, this._parents);
    },
    Ff = function (t) {
      return new Array(t.length);
    },
    If = function () {
      return new pt(this._enter || this._groups.map(Ff), this._parents);
    };
  C.prototype = {
    constructor: C,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t);
    },
  };
  var Yf = function (t) {
      return function () {
        return t;
      };
    },
    Bf = "$",
    jf = function (t, n) {
      if (!t)
        return (
          (p = new Array(this.size())),
          (s = -1),
          this.each(function (t) {
            p[++s] = t;
          }),
          p
        );
      var e = n ? P : z,
        r = this._parents,
        i = this._groups;
      "function" != typeof t && (t = Yf(t));
      for (
        var o = i.length,
          u = new Array(o),
          a = new Array(o),
          c = new Array(o),
          s = 0;
        s < o;
        ++s
      ) {
        var f = r[s],
          l = i[s],
          h = l.length,
          p = t.call(f, f && f.__data__, s, r),
          d = p.length,
          v = (a[s] = new Array(d)),
          _ = (u[s] = new Array(d)),
          y = (c[s] = new Array(h));
        e(f, l, v, _, y, p, n);
        for (var g, m, x = 0, b = 0; x < d; ++x)
          if ((g = v[x])) {
            for (x >= b && (b = x + 1); !(m = _[b]) && ++b < d; );
            g._next = m || null;
          }
      }
      return (u = new pt(u, r)), (u._enter = a), (u._exit = c), u;
    },
    Hf = function () {
      return new pt(this._exit || this._groups.map(Ff), this._parents);
    },
    Xf = function (t) {
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          o = Math.min(r, i),
          u = new Array(r),
          a = 0;
        a < o;
        ++a
      )
        for (
          var c,
            s = n[a],
            f = e[a],
            l = s.length,
            h = (u[a] = new Array(l)),
            p = 0;
          p < l;
          ++p
        )
          (c = s[p] || f[p]) && (h[p] = c);
      for (; a < r; ++a) u[a] = n[a];
      return new pt(u, this._parents);
    },
    Vf = function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e; )
        for (var r, i = t[n], o = i.length - 1, u = i[o]; --o >= 0; )
          (r = i[o]) &&
            (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u),
            (u = r));
      return this;
    },
    Wf = function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }
      t || (t = R);
      for (
        var e = this._groups, r = e.length, i = new Array(r), o = 0;
        o < r;
        ++o
      ) {
        for (
          var u, a = e[o], c = a.length, s = (i[o] = new Array(c)), f = 0;
          f < c;
          ++f
        )
          (u = a[f]) && (s[f] = u);
        s.sort(n);
      }
      return new pt(i, this._parents).order();
    },
    $f = function () {
      var t = arguments[0];
      return (arguments[0] = this), t.apply(null, arguments), this;
    },
    Zf = function () {
      var t = new Array(this.size()),
        n = -1;
      return (
        this.each(function () {
          t[++n] = this;
        }),
        t
      );
    },
    Gf = function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var u = r[i];
          if (u) return u;
        }
      return null;
    },
    Jf = function () {
      var t = 0;
      return (
        this.each(function () {
          ++t;
        }),
        t
      );
    },
    Qf = function () {
      return !this.node();
    },
    Kf = function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
        for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)
          (i = o[u]) && t.call(i, i.__data__, u, o);
      return this;
    },
    tl = function (t, n) {
      var e = bf(t);
      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }
      return this.each(
        (null == n
          ? e.local
            ? L
            : q
          : "function" == typeof n
          ? e.local
            ? F
            : O
          : e.local
          ? D
          : U)(e, n)
      );
    },
    nl = function (t) {
      return (
        (t.ownerDocument && t.ownerDocument.defaultView) ||
        (t.document && t) ||
        t.defaultView
      );
    },
    el = function (t, n, e) {
      var r;
      return arguments.length > 1
        ? this.each(
            (null == n ? I : "function" == typeof n ? B : Y)(
              t,
              n,
              null == e ? "" : e
            )
          )
        : nl((r = this.node()))
            .getComputedStyle(r, null)
            .getPropertyValue(t);
    },
    rl = function (t, n) {
      return arguments.length > 1
        ? this.each((null == n ? j : "function" == typeof n ? X : H)(t, n))
        : this.node()[t];
    };
  $.prototype = {
    add: function (t) {
      var n = this._names.indexOf(t);
      n < 0 &&
        (this._names.push(t),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    remove: function (t) {
      var n = this._names.indexOf(t);
      n >= 0 &&
        (this._names.splice(n, 1),
        this._node.setAttribute("class", this._names.join(" ")));
    },
    contains: function (t) {
      return this._names.indexOf(t) >= 0;
    },
  };
  var il = function (t, n) {
      var e = V(t + "");
      if (arguments.length < 2) {
        for (var r = W(this.node()), i = -1, o = e.length; ++i < o; )
          if (!r.contains(e[i])) return !1;
        return !0;
      }
      return this.each(("function" == typeof n ? K : n ? J : Q)(e, n));
    },
    ol = function (t) {
      return arguments.length
        ? this.each(null == t ? tt : ("function" == typeof t ? et : nt)(t))
        : this.node().textContent;
    },
    ul = function (t) {
      return arguments.length
        ? this.each(null == t ? rt : ("function" == typeof t ? ot : it)(t))
        : this.node().innerHTML;
    },
    al = function () {
      return this.each(ut);
    },
    cl = function () {
      return this.each(at);
    },
    sl = function (t) {
      var n = "function" == typeof t ? t : wf(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    fl = function (t, n) {
      var e = "function" == typeof t ? t : wf(t),
        r = null == n ? ct : "function" == typeof n ? n : qf(n);
      return this.select(function () {
        return this.insertBefore(
          e.apply(this, arguments),
          r.apply(this, arguments) || null
        );
      });
    },
    ll = function () {
      return this.each(st);
    },
    hl = function (t) {
      return arguments.length
        ? this.property("__data__", t)
        : this.node().__data__;
    },
    pl = function (t, n) {
      return this.each(("function" == typeof n ? ht : lt)(t, n));
    },
    dl = [null];
  pt.prototype = dt.prototype = {
    constructor: pt,
    select: Lf,
    selectAll: Df,
    filter: Of,
    data: jf,
    enter: If,
    exit: Hf,
    merge: Xf,
    order: Vf,
    sort: Wf,
    call: $f,
    nodes: Zf,
    node: Gf,
    size: Jf,
    empty: Qf,
    each: Kf,
    attr: tl,
    style: el,
    property: rl,
    classed: il,
    text: ol,
    html: ul,
    raise: al,
    lower: cl,
    append: sl,
    insert: fl,
    remove: ll,
    datum: hl,
    on: Cf,
    dispatch: pl,
  };
  var vl = function (t) {
      return "string" == typeof t
        ? new pt([[document.querySelector(t)]], [document.documentElement])
        : new pt([[t]], dl);
    },
    _l = function (t) {
      return "string" == typeof t
        ? new pt([document.querySelectorAll(t)], [document.documentElement])
        : new pt([null == t ? [] : t], dl);
    },
    yl = function (t, n, e) {
      arguments.length < 3 && ((e = n), (n = zf().changedTouches));
      for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
        if ((r = n[i]).identifier === e) return Pf(t, r);
      return null;
    },
    gl = function (t, n) {
      null == n && (n = zf().touches);
      for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e)
        i[e] = Pf(t, n[e]);
      return i;
    },
    ml = function () {
      t.event.preventDefault(), t.event.stopImmediatePropagation();
    },
    xl = function (t) {
      var n = t.document.documentElement,
        e = vl(t).on("dragstart.drag", ml, !0);
      "onselectstart" in n
        ? e.on("selectstart.drag", ml, !0)
        : ((n.__noselect = n.style.MozUserSelect),
          (n.style.MozUserSelect = "none"));
    },
    bl = function (t) {
      return function () {
        return t;
      };
    };
  yt.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);
    return t === this._ ? this : t;
  };
  var wl = function () {
      function n(t) {
        t.on("mousedown.drag", e)
          .on("touchstart.drag", o)
          .on("touchmove.drag", u)
          .on("touchend.drag touchcancel.drag", a)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
      }
      function e() {
        if (!f && l.apply(this, arguments)) {
          var n = c("mouse", h.apply(this, arguments), Rf, this, arguments);
          n &&
            (vl(t.event.view)
              .on("mousemove.drag", r, !0)
              .on("mouseup.drag", i, !0),
            xl(t.event.view),
            vt(),
            (s = !1),
            n("start"));
        }
      }
      function r() {
        ml(), (s = !0), v.mouse("drag");
      }
      function i() {
        vl(t.event.view).on("mousemove.drag mouseup.drag", null),
          _t(t.event.view, s),
          ml(),
          v.mouse("end");
      }
      function o() {
        if (l.apply(this, arguments)) {
          var n,
            e,
            r = t.event.changedTouches,
            i = h.apply(this, arguments),
            o = r.length;
          for (n = 0; n < o; ++n)
            (e = c(r[n].identifier, i, yl, this, arguments)) &&
              (vt(), e("start"));
        }
      }
      function u() {
        var n,
          e,
          r = t.event.changedTouches,
          i = r.length;
        for (n = 0; n < i; ++n) (e = v[r[n].identifier]) && (ml(), e("drag"));
      }
      function a() {
        var n,
          e,
          r = t.event.changedTouches,
          i = r.length;
        for (
          f && clearTimeout(f),
            f = setTimeout(function () {
              f = null;
            }, 500),
            n = 0;
          n < i;
          ++n
        )
          (e = v[r[n].identifier]) && (vt(), e("end"));
      }
      function c(e, r, i, o, u) {
        var a,
          c,
          s,
          f = i(r, e),
          l = _.copy();
        if (
          S(
            new yt(n, "beforestart", a, e, y, f[0], f[1], 0, 0, l),
            function () {
              return (
                null != (t.event.subject = a = d.apply(o, u)) &&
                ((c = a.x - f[0] || 0), (s = a.y - f[1] || 0), !0)
              );
            }
          )
        )
          return function t(h) {
            var p,
              d = f;
            switch (h) {
              case "start":
                (v[e] = t), (p = y++);
                break;
              case "end":
                delete v[e], --y;
              case "drag":
                (f = i(r, e)), (p = y);
            }
            S(
              new yt(
                n,
                h,
                a,
                e,
                p,
                f[0] + c,
                f[1] + s,
                f[0] - d[0],
                f[1] - d[1],
                l
              ),
              l.apply,
              l,
              [h, o, u]
            );
          };
      }
      var s,
        f,
        l = gt,
        h = mt,
        d = xt,
        v = {},
        _ = p("start", "drag", "end"),
        y = 0;
      return (
        (n.filter = function (t) {
          return arguments.length
            ? ((l = "function" == typeof t ? t : bl(!!t)), n)
            : l;
        }),
        (n.container = function (t) {
          return arguments.length
            ? ((h = "function" == typeof t ? t : bl(t)), n)
            : h;
        }),
        (n.subject = function (t) {
          return arguments.length
            ? ((d = "function" == typeof t ? t : bl(t)), n)
            : d;
        }),
        (n.on = function () {
          var t = _.on.apply(_, arguments);
          return t === _ ? n : t;
        }),
        n
      );
    },
    Ml = function (t, n, e) {
      (t.prototype = n.prototype = e), (e.constructor = t);
    },
    Tl = 0.7,
    Nl = 1 / Tl,
    kl = "\\s*([+-]?\\d+)\\s*",
    Sl = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    El = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Al = /^#([0-9a-f]{3})$/,
    Cl = /^#([0-9a-f]{6})$/,
    zl = new RegExp("^rgb\\(" + [kl, kl, kl] + "\\)$"),
    Pl = new RegExp("^rgb\\(" + [El, El, El] + "\\)$"),
    Rl = new RegExp("^rgba\\(" + [kl, kl, kl, Sl] + "\\)$"),
    ql = new RegExp("^rgba\\(" + [El, El, El, Sl] + "\\)$"),
    Ll = new RegExp("^hsl\\(" + [Sl, El, El] + "\\)$"),
    Ul = new RegExp("^hsla\\(" + [Sl, El, El, Sl] + "\\)$"),
    Dl = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  Ml(wt, Mt, {
    displayable: function () {
      return this.rgb().displayable();
    },
    toString: function () {
      return this.rgb() + "";
    },
  }),
    Ml(
      Et,
      St,
      bt(wt, {
        brighter: function (t) {
          return (
            (t = null == t ? Nl : Math.pow(Nl, t)),
            new Et(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? Tl : Math.pow(Tl, t)),
            new Et(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        rgb: function () {
          return this;
        },
        displayable: function () {
          return (
            0 <= this.r &&
            this.r <= 255 &&
            0 <= this.g &&
            this.g <= 255 &&
            0 <= this.b &&
            this.b <= 255 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
        toString: function () {
          var t = this.opacity;
          return (
            (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))),
            (1 === t ? "rgb(" : "rgba(") +
              Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
              ", " +
              Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
              (1 === t ? ")" : ", " + t + ")")
          );
        },
      })
    ),
    Ml(
      Pt,
      zt,
      bt(wt, {
        brighter: function (t) {
          return (
            (t = null == t ? Nl : Math.pow(Nl, t)),
            new Pt(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker: function (t) {
          return (
            (t = null == t ? Tl : Math.pow(Tl, t)),
            new Pt(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb: function () {
          var t = (this.h % 360) + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < 0.5 ? e : 1 - e) * n,
            i = 2 * e - r;
          return new Et(
            Rt(t >= 240 ? t - 240 : t + 120, i, r),
            Rt(t, i, r),
            Rt(t < 120 ? t + 240 : t - 120, i, r),
            this.opacity
          );
        },
        displayable: function () {
          return (
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
            0 <= this.l &&
            this.l <= 1 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
      })
    );
  var Ol = Math.PI / 180,
    Fl = 180 / Math.PI,
    Il = 18,
    Yl = 0.95047,
    Bl = 1,
    jl = 1.08883,
    Hl = 4 / 29,
    Xl = 6 / 29,
    Vl = 3 * Xl * Xl,
    Wl = Xl * Xl * Xl;
  Ml(
    Ut,
    Lt,
    bt(wt, {
      brighter: function (t) {
        return new Ut(
          this.l + Il * (null == t ? 1 : t),
          this.a,
          this.b,
          this.opacity
        );
      },
      darker: function (t) {
        return new Ut(
          this.l - Il * (null == t ? 1 : t),
          this.a,
          this.b,
          this.opacity
        );
      },
      rgb: function () {
        var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
        return (
          (t = Bl * Ot(t)),
          (n = Yl * Ot(n)),
          (e = jl * Ot(e)),
          new Et(
            Ft(3.2404542 * n - 1.5371385 * t - 0.4985314 * e),
            Ft(-0.969266 * n + 1.8760108 * t + 0.041556 * e),
            Ft(0.0556434 * n - 0.2040259 * t + 1.0572252 * e),
            this.opacity
          )
        );
      },
    })
  ),
    Ml(
      jt,
      Bt,
      bt(wt, {
        brighter: function (t) {
          return new jt(
            this.h,
            this.c,
            this.l + Il * (null == t ? 1 : t),
            this.opacity
          );
        },
        darker: function (t) {
          return new jt(
            this.h,
            this.c,
            this.l - Il * (null == t ? 1 : t),
            this.opacity
          );
        },
        rgb: function () {
          return qt(this).rgb();
        },
      })
    );
  var $l = -0.14861,
    Zl = 1.78277,
    Gl = -0.29227,
    Jl = -0.90649,
    Ql = 1.97294,
    Kl = Ql * Jl,
    th = Ql * Zl,
    nh = Zl * Gl - Jl * $l;
  Ml(
    Vt,
    Xt,
    bt(wt, {
      brighter: function (t) {
        return (
          (t = null == t ? Nl : Math.pow(Nl, t)),
          new Vt(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker: function (t) {
        return (
          (t = null == t ? Tl : Math.pow(Tl, t)),
          new Vt(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb: function () {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * Ol,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);
        return new Et(
          255 * (n + e * ($l * r + Zl * i)),
          255 * (n + e * (Gl * r + Jl * i)),
          255 * (n + e * (Ql * r)),
          this.opacity
        );
      },
    })
  );
  var eh,
    rh,
    ih,
    oh,
    uh,
    ah,
    ch = function (t) {
      var n = t.length - 1;
      return function (e) {
        var r =
            e <= 0 ? (e = 0) : e >= 1 ? ((e = 1), n - 1) : Math.floor(e * n),
          i = t[r],
          o = t[r + 1],
          u = r > 0 ? t[r - 1] : 2 * i - o,
          a = r < n - 1 ? t[r + 2] : 2 * o - i;
        return Wt((e - r / n) * n, u, i, o, a);
      };
    },
    sh = function (t) {
      var n = t.length;
      return function (e) {
        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
          i = t[(r + n - 1) % n],
          o = t[r % n],
          u = t[(r + 1) % n],
          a = t[(r + 2) % n];
        return Wt((e - r / n) * n, i, o, u, a);
      };
    },
    fh = function (t) {
      return function () {
        return t;
      };
    },
    lh = (function t(n) {
      function e(t, n) {
        var e = r((t = St(t)).r, (n = St(n)).r),
          i = r(t.g, n.g),
          o = r(t.b, n.b),
          u = Qt(t.opacity, n.opacity);
        return function (n) {
          return (
            (t.r = e(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = u(n)), t + ""
          );
        };
      }
      var r = Jt(n);
      return (e.gamma = t), e;
    })(1),
    hh = Kt(ch),
    ph = Kt(sh),
    dh = function (t, n) {
      var e,
        r = n ? n.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        o = new Array(r),
        u = new Array(r);
      for (e = 0; e < i; ++e) o[e] = bh(t[e], n[e]);
      for (; e < r; ++e) u[e] = n[e];
      return function (t) {
        for (e = 0; e < i; ++e) u[e] = o[e](t);
        return u;
      };
    },
    vh = function (t, n) {
      var e = new Date();
      return (
        (t = +t),
        (n -= t),
        function (r) {
          return e.setTime(t + n * r), e;
        }
      );
    },
    _h = function (t, n) {
      return (
        (t = +t),
        (n -= t),
        function (e) {
          return t + n * e;
        }
      );
    },
    yh = function (t, n) {
      var e,
        r = {},
        i = {};
      (null !== t && "object" == typeof t) || (t = {}),
        (null !== n && "object" == typeof n) || (n = {});
      for (e in n) e in t ? (r[e] = bh(t[e], n[e])) : (i[e] = n[e]);
      return function (t) {
        for (e in r) i[e] = r[e](t);
        return i;
      };
    },
    gh = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    mh = new RegExp(gh.source, "g"),
    xh = function (t, n) {
      var e,
        r,
        i,
        o = (gh.lastIndex = mh.lastIndex = 0),
        u = -1,
        a = [],
        c = [];
      for (t += "", n += ""; (e = gh.exec(t)) && (r = mh.exec(n)); )
        (i = r.index) > o &&
          ((i = n.slice(o, i)), a[u] ? (a[u] += i) : (a[++u] = i)),
          (e = e[0]) === (r = r[0])
            ? a[u]
              ? (a[u] += r)
              : (a[++u] = r)
            : ((a[++u] = null),
              c.push({
                i: u,
                x: _h(e, r),
              })),
          (o = mh.lastIndex);
      return (
        o < n.length && ((i = n.slice(o)), a[u] ? (a[u] += i) : (a[++u] = i)),
        a.length < 2
          ? c[0]
            ? nn(c[0].x)
            : tn(n)
          : ((n = c.length),
            function (t) {
              for (var e, r = 0; r < n; ++r) a[(e = c[r]).i] = e.x(t);
              return a.join("");
            })
      );
    },
    bh = function (t, n) {
      var e,
        r = typeof n;
      return null == n || "boolean" === r
        ? fh(n)
        : ("number" === r
            ? _h
            : "string" === r
            ? (e = Mt(n))
              ? ((n = e), lh)
              : xh
            : n instanceof Mt
            ? lh
            : n instanceof Date
            ? vh
            : Array.isArray(n)
            ? dh
            : isNaN(n)
            ? yh
            : _h)(t, n);
    },
    wh = function (t, n) {
      return (
        (t = +t),
        (n -= t),
        function (e) {
          return Math.round(t + n * e);
        }
      );
    },
    Mh = 180 / Math.PI,
    Th = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
    },
    Nh = function (t, n, e, r, i, o) {
      var u, a, c;
      return (
        (u = Math.sqrt(t * t + n * n)) && ((t /= u), (n /= u)),
        (c = t * e + n * r) && ((e -= t * c), (r -= n * c)),
        (a = Math.sqrt(e * e + r * r)) && ((e /= a), (r /= a), (c /= a)),
        t * r < n * e && ((t = -t), (n = -n), (c = -c), (u = -u)),
        {
          translateX: i,
          translateY: o,
          rotate: Math.atan2(n, t) * Mh,
          skewX: Math.atan(c) * Mh,
          scaleX: u,
          scaleY: a,
        }
      );
    },
    kh = on(en, "px, ", "px)", "deg)"),
    Sh = on(rn, ", ", ")", ")"),
    Eh = Math.SQRT2,
    Ah = 2,
    Ch = 4,
    zh = 1e-12,
    Ph = function (t, n) {
      var e,
        r,
        i = t[0],
        o = t[1],
        u = t[2],
        a = n[0],
        c = n[1],
        s = n[2],
        f = a - i,
        l = c - o,
        h = f * f + l * l;
      if (h < zh)
        (r = Math.log(s / u) / Eh),
          (e = function (t) {
            return [i + t * f, o + t * l, u * Math.exp(Eh * t * r)];
          });
      else {
        var p = Math.sqrt(h),
          d = (s * s - u * u + Ch * h) / (2 * u * Ah * p),
          v = (s * s - u * u - Ch * h) / (2 * s * Ah * p),
          _ = Math.log(Math.sqrt(d * d + 1) - d),
          y = Math.log(Math.sqrt(v * v + 1) - v);
        (r = (y - _) / Eh),
          (e = function (t) {
            var n = t * r,
              e = un(_),
              a = (u / (Ah * p)) * (e * cn(Eh * n + _) - an(_));
            return [i + a * f, o + a * l, (u * e) / un(Eh * n + _)];
          });
      }
      return (e.duration = 1e3 * r), e;
    },
    Rh = sn(Gt),
    qh = sn(Qt),
    Lh = ln(Gt),
    Uh = ln(Qt),
    Dh = hn(Gt),
    Oh = hn(Qt),
    Fh = function (t, n) {
      for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
      return e;
    },
    Ih = 0,
    Yh = 0,
    Bh = 0,
    jh = 1e3,
    Hh = 0,
    Xh = 0,
    Vh = 0,
    Wh = "object" == typeof performance && performance.now ? performance : Date,
    $h =
      "function" == typeof requestAnimationFrame
        ? requestAnimationFrame
        : function (t) {
            setTimeout(t, 17);
          };
  vn.prototype = _n.prototype = {
    constructor: vn,
    restart: function (t, n, e) {
      if ("function" != typeof t)
        throw new TypeError("callback is not a function");
      (e = (null == e ? pn() : +e) + (null == n ? 0 : +n)),
        this._next ||
          ah === this ||
          (ah ? (ah._next = this) : (uh = this), (ah = this)),
        (this._call = t),
        (this._time = e),
        bn();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), bn());
    },
  };
  var Zh = function (t, n, e) {
      var r = new vn();
      return (
        (n = null == n ? 0 : +n),
        r.restart(
          function (e) {
            r.stop(), t(e + n);
          },
          n,
          e
        ),
        r
      );
    },
    Gh = function (t, n, e) {
      var r = new vn(),
        i = n;
      return null == n
        ? (r.restart(t, n, e), r)
        : ((n = +n),
          (e = null == e ? pn() : +e),
          r.restart(
            function o(u) {
              (u += i), r.restart(o, (i += n), e), t(u);
            },
            n,
            e
          ),
          r);
    },
    Jh = p("start", "end", "interrupt"),
    Qh = [],
    Kh = 0,
    tp = 1,
    np = 2,
    ep = 3,
    rp = 4,
    ip = 5,
    op = 6,
    up = function (t, n, e, r, i, o) {
      var u = t.__transition;
      if (u) {
        if (e in u) return;
      } else t.__transition = {};
      Nn(t, e, {
        name: n,
        index: r,
        group: i,
        on: Jh,
        tween: Qh,
        time: o.time,
        delay: o.delay,
        duration: o.duration,
        ease: o.ease,
        timer: null,
        state: Kh,
      });
    },
    ap = function (t, n) {
      var e,
        r,
        i,
        o = t.__transition,
        u = !0;
      if (o) {
        n = null == n ? null : n + "";
        for (i in o)
          (e = o[i]).name === n
            ? ((r = e.state > np && e.state < ip),
              (e.state = op),
              e.timer.stop(),
              r && e.on.call("interrupt", t, t.__data__, e.index, e.group),
              delete o[i])
            : (u = !1);
        u && delete t.__transition;
      }
    },
    cp = function (t) {
      return this.each(function () {
        ap(this, t);
      });
    },
    sp = function (t, n) {
      var e = this._id;
      if (((t += ""), arguments.length < 2)) {
        for (
          var r, i = Tn(this.node(), e).tween, o = 0, u = i.length;
          o < u;
          ++o
        )
          if ((r = i[o]).name === t) return r.value;
        return null;
      }
      return this.each((null == n ? kn : Sn)(e, t, n));
    },
    fp = function (t, n) {
      var e;
      return (
        "number" == typeof n
          ? _h
          : n instanceof Mt
          ? lh
          : (e = Mt(n))
          ? ((n = e), lh)
          : xh
      )(t, n);
    },
    lp = function (t, n) {
      var e = bf(t),
        r = "transform" === e ? Sh : fp;
      return this.attrTween(
        t,
        "function" == typeof n
          ? (e.local ? qn : Rn)(e, r, En(this, "attr." + t, n))
          : null == n
          ? (e.local ? Cn : An)(e)
          : (e.local ? Pn : zn)(e, r, n)
      );
    },
    hp = function (t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error();
      var r = bf(t);
      return this.tween(e, (r.local ? Ln : Un)(r, n));
    },
    pp = function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? Dn : On)(n, t))
        : Tn(this.node(), n).delay;
    },
    dp = function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? Fn : In)(n, t))
        : Tn(this.node(), n).duration;
    },
    vp = function (t) {
      var n = this._id;
      return arguments.length ? this.each(Yn(n, t)) : Tn(this.node(), n).ease;
    },
    _p = function (t) {
      "function" != typeof t && (t = Sf(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (var o, u = n[i], a = u.length, c = (r[i] = []), s = 0; s < a; ++s)
          (o = u[s]) && t.call(o, o.__data__, s, u) && c.push(o);
      return new Qn(r, this._parents, this._name, this._id);
    },
    yp = function (t) {
      if (t._id !== this._id) throw new Error();
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          o = Math.min(r, i),
          u = new Array(r),
          a = 0;
        a < o;
        ++a
      )
        for (
          var c,
            s = n[a],
            f = e[a],
            l = s.length,
            h = (u[a] = new Array(l)),
            p = 0;
          p < l;
          ++p
        )
          (c = s[p] || f[p]) && (h[p] = c);
      for (; a < r; ++a) u[a] = n[a];
      return new Qn(u, this._parents, this._name, this._id);
    },
    gp = function (t, n) {
      var e = this._id;
      return arguments.length < 2
        ? Tn(this.node(), e).on.on(t)
        : this.each(jn(e, t, n));
    },
    mp = function () {
      return this.on("end.remove", Hn(this._id));
    },
    xp = function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = qf(t));
      for (
        var r = this._groups, i = r.length, o = new Array(i), u = 0;
        u < i;
        ++u
      )
        for (
          var a, c, s = r[u], f = s.length, l = (o[u] = new Array(f)), h = 0;
          h < f;
          ++h
        )
          (a = s[h]) &&
            (c = t.call(a, a.__data__, h, s)) &&
            ("__data__" in a && (c.__data__ = a.__data__),
            (l[h] = c),
            up(l[h], n, e, h, l, Tn(a, e)));
      return new Qn(o, this._parents, n, e);
    },
    bp = function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = Uf(t));
      for (
        var r = this._groups, i = r.length, o = [], u = [], a = 0;
        a < i;
        ++a
      )
        for (var c, s = r[a], f = s.length, l = 0; l < f; ++l)
          if ((c = s[l])) {
            for (
              var h,
                p = t.call(c, c.__data__, l, s),
                d = Tn(c, e),
                v = 0,
                _ = p.length;
              v < _;
              ++v
            )
              (h = p[v]) && up(h, n, e, v, p, d);
            o.push(p), u.push(c);
          }
      return new Qn(o, u, n, e);
    },
    wp = dt.prototype.constructor,
    Mp = function () {
      return new wp(this._groups, this._parents);
    },
    Tp = function (t, n, e) {
      var r = "transform" == (t += "") ? kh : fp;
      return null == n
        ? this.styleTween(t, Xn(t, r)).on("end.style." + t, Vn(t))
        : this.styleTween(
            t,
            "function" == typeof n
              ? $n(t, r, En(this, "style." + t, n))
              : Wn(t, r, n),
            e
          );
    },
    Np = function (t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == n) return this.tween(r, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(r, Zn(t, n, null == e ? "" : e));
    },
    kp = function (t) {
      return this.tween(
        "text",
        "function" == typeof t
          ? Jn(En(this, "text", t))
          : Gn(null == t ? "" : t + "")
      );
    },
    Sp = function () {
      for (
        var t = this._name,
          n = this._id,
          e = te(),
          r = this._groups,
          i = r.length,
          o = 0;
        o < i;
        ++o
      )
        for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)
          if ((u = a[s])) {
            var f = Tn(u, n);
            up(u, t, e, s, a, {
              time: f.time + f.delay + f.duration,
              delay: 0,
              duration: f.duration,
              ease: f.ease,
            });
          }
      return new Qn(r, this._parents, t, e);
    },
    Ep = 0,
    Ap = dt.prototype;
  Qn.prototype = Kn.prototype = {
    constructor: Qn,
    select: xp,
    selectAll: bp,
    filter: _p,
    merge: yp,
    selection: Mp,
    transition: Sp,
    call: Ap.call,
    nodes: Ap.nodes,
    node: Ap.node,
    size: Ap.size,
    empty: Ap.empty,
    each: Ap.each,
    on: gp,
    attr: lp,
    attrTween: hp,
    style: Tp,
    styleTween: Np,
    text: kp,
    remove: mp,
    tween: sp,
    delay: pp,
    duration: dp,
    ease: vp,
  };
  var Cp = 3,
    zp = (function t(n) {
      function e(t) {
        return Math.pow(t, n);
      }
      return (n = +n), (e.exponent = t), e;
    })(Cp),
    Pp = (function t(n) {
      function e(t) {
        return 1 - Math.pow(1 - t, n);
      }
      return (n = +n), (e.exponent = t), e;
    })(Cp),
    Rp = (function t(n) {
      function e(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
      }
      return (n = +n), (e.exponent = t), e;
    })(Cp),
    qp = Math.PI,
    Lp = qp / 2,
    Up = 4 / 11,
    Dp = 6 / 11,
    Op = 8 / 11,
    Fp = 0.75,
    Ip = 9 / 11,
    Yp = 10 / 11,
    Bp = 0.9375,
    jp = 21 / 22,
    Hp = 63 / 64,
    Xp = 1 / Up / Up,
    Vp = 1.70158,
    Wp = (function t(n) {
      function e(t) {
        return t * t * ((n + 1) * t - n);
      }
      return (n = +n), (e.overshoot = t), e;
    })(Vp),
    $p = (function t(n) {
      function e(t) {
        return --t * t * ((n + 1) * t + n) + 1;
      }
      return (n = +n), (e.overshoot = t), e;
    })(Vp),
    Zp = (function t(n) {
      function e(t) {
        return (
          ((t *= 2) < 1
            ? t * t * ((n + 1) * t - n)
            : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        );
      }
      return (n = +n), (e.overshoot = t), e;
    })(Vp),
    Gp = 2 * Math.PI,
    Jp = 1,
    Qp = 0.3,
    Kp = (function t(n, e) {
      function r(t) {
        return n * Math.pow(2, 10 * --t) * Math.sin((i - t) / e);
      }
      var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gp);
      return (
        (r.amplitude = function (n) {
          return t(n, e * Gp);
        }),
        (r.period = function (e) {
          return t(n, e);
        }),
        r
      );
    })(Jp, Qp),
    td = (function t(n, e) {
      function r(t) {
        return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / e);
      }
      var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gp);
      return (
        (r.amplitude = function (n) {
          return t(n, e * Gp);
        }),
        (r.period = function (e) {
          return t(n, e);
        }),
        r
      );
    })(Jp, Qp),
    nd = (function t(n, e) {
      function r(t) {
        return (
          ((t = 2 * t - 1) < 0
            ? n * Math.pow(2, 10 * t) * Math.sin((i - t) / e)
            : 2 - n * Math.pow(2, -10 * t) * Math.sin((i + t) / e)) / 2
        );
      }
      var i = Math.asin(1 / (n = Math.max(1, n))) * (e /= Gp);
      return (
        (r.amplitude = function (n) {
          return t(n, e * Gp);
        }),
        (r.period = function (e) {
          return t(n, e);
        }),
        r
      );
    })(Jp, Qp),
    ed = {
      time: null,
      delay: 0,
      duration: 250,
      ease: ae,
    },
    rd = function (t) {
      var n, e;
      t instanceof Qn
        ? ((n = t._id), (t = t._name))
        : ((n = te()), ((e = ed).time = pn()), (t = null == t ? null : t + ""));
      for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
        for (var u, a = r[o], c = a.length, s = 0; s < c; ++s)
          (u = a[s]) && up(u, t, n, s, a, e || xe(u, n));
      return new Qn(r, this._parents, t, n);
    };
  (dt.prototype.interrupt = cp), (dt.prototype.transition = rd);
  var id = [null],
    od = function (t, n) {
      var e,
        r,
        i = t.__transition;
      if (i) {
        n = null == n ? null : n + "";
        for (r in i)
          if ((e = i[r]).state > tp && e.name === n)
            return new Qn([[t]], id, n, +r);
      }
      return null;
    },
    ud = function (t) {
      return function () {
        return t;
      };
    },
    ad = function (t, n, e) {
      (this.target = t), (this.type = n), (this.selection = e);
    },
    cd = function () {
      t.event.preventDefault(), t.event.stopImmediatePropagation();
    },
    sd = {
      name: "drag",
    },
    fd = {
      name: "space",
    },
    ld = {
      name: "handle",
    },
    hd = {
      name: "center",
    },
    pd = {
      name: "x",
      handles: ["e", "w"].map(we),
      input: function (t, n) {
        return (
          t && [
            [t[0], n[0][1]],
            [t[1], n[1][1]],
          ]
        );
      },
      output: function (t) {
        return t && [t[0][0], t[1][0]];
      },
    },
    dd = {
      name: "y",
      handles: ["n", "s"].map(we),
      input: function (t, n) {
        return (
          t && [
            [n[0][0], t[0]],
            [n[1][0], t[1]],
          ]
        );
      },
      output: function (t) {
        return t && [t[0][1], t[1][1]];
      },
    },
    vd = {
      name: "xy",
      handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(we),
      input: function (t) {
        return t;
      },
      output: function (t) {
        return t;
      },
    },
    _d = {
      overlay: "crosshair",
      selection: "move",
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize",
    },
    yd = {
      e: "w",
      w: "e",
      nw: "ne",
      ne: "nw",
      se: "sw",
      sw: "se",
    },
    gd = {
      n: "s",
      s: "n",
      nw: "sw",
      ne: "se",
      se: "ne",
      sw: "nw",
    },
    md = {
      overlay: 1,
      selection: 1,
      n: null,
      e: 1,
      s: null,
      w: -1,
      nw: -1,
      ne: 1,
      se: 1,
      sw: -1,
    },
    xd = {
      overlay: 1,
      selection: 1,
      n: -1,
      e: null,
      s: 1,
      w: null,
      nw: -1,
      ne: -1,
      se: 1,
      sw: 1,
    },
    bd = function () {
      return Ce(vd);
    },
    wd = Math.cos,
    Md = Math.sin,
    Td = Math.PI,
    Nd = Td / 2,
    kd = 2 * Td,
    Sd = Math.max,
    Ed = function () {
      function t(t) {
        var o,
          u,
          a,
          c,
          s,
          f,
          l = t.length,
          h = [],
          p = Bs(l),
          d = [],
          v = [],
          _ = (v.groups = new Array(l)),
          y = new Array(l * l);
        for (o = 0, s = -1; ++s < l; ) {
          for (u = 0, f = -1; ++f < l; ) u += t[s][f];
          h.push(u), d.push(Bs(l)), (o += u);
        }
        for (
          e &&
            p.sort(function (t, n) {
              return e(h[t], h[n]);
            }),
            r &&
              d.forEach(function (n, e) {
                n.sort(function (n, i) {
                  return r(t[e][n], t[e][i]);
                });
              }),
            o = Sd(0, kd - n * l) / o,
            c = o ? n : kd / l,
            u = 0,
            s = -1;
          ++s < l;

        ) {
          for (a = u, f = -1; ++f < l; ) {
            var g = p[s],
              m = d[g][f],
              x = t[g][m],
              b = u,
              w = (u += x * o);
            y[m * l + g] = {
              index: g,
              subindex: m,
              startAngle: b,
              endAngle: w,
              value: x,
            };
          }
          (_[g] = {
            index: g,
            startAngle: a,
            endAngle: u,
            value: h[g],
          }),
            (u += c);
        }
        for (s = -1; ++s < l; )
          for (f = s - 1; ++f < l; ) {
            var M = y[f * l + s],
              T = y[s * l + f];
            (M.value || T.value) &&
              v.push(
                M.value < T.value
                  ? {
                      source: T,
                      target: M,
                    }
                  : {
                      source: M,
                      target: T,
                    }
              );
          }
        return i ? v.sort(i) : v;
      }
      var n = 0,
        e = null,
        r = null,
        i = null;
      return (
        (t.padAngle = function (e) {
          return arguments.length ? ((n = Sd(0, e)), t) : n;
        }),
        (t.sortGroups = function (n) {
          return arguments.length ? ((e = n), t) : e;
        }),
        (t.sortSubgroups = function (n) {
          return arguments.length ? ((r = n), t) : r;
        }),
        (t.sortChords = function (n) {
          return arguments.length
            ? (null == n ? (i = null) : ((i = ze(n))._ = n), t)
            : i && i._;
        }),
        t
      );
    },
    Ad = Array.prototype.slice,
    Cd = function (t) {
      return function () {
        return t;
      };
    },
    zd = Math.PI,
    Pd = 2 * zd,
    Rd = 1e-6,
    qd = Pd - Rd;
  Pe.prototype = Re.prototype = {
    constructor: Pe,
    moveTo: function (t, n) {
      this._ +=
        "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    },
    closePath: function () {
      null !== this._x1 &&
        ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
    },
    lineTo: function (t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    },
    quadraticCurveTo: function (t, n, e, r) {
      this._ +=
        "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
    },
    bezierCurveTo: function (t, n, e, r, i, o) {
      this._ +=
        "C" +
        +t +
        "," +
        +n +
        "," +
        +e +
        "," +
        +r +
        "," +
        (this._x1 = +i) +
        "," +
        (this._y1 = +o);
    },
    arcTo: function (t, n, e, r, i) {
      (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
      var o = this._x1,
        u = this._y1,
        a = e - t,
        c = r - n,
        s = o - t,
        f = u - n,
        l = s * s + f * f;
      if (i < 0) throw new Error("negative radius: " + i);
      if (null === this._x1)
        this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
      else if (l > Rd)
        if (Math.abs(f * a - c * s) > Rd && i) {
          var h = e - o,
            p = r - u,
            d = a * a + c * c,
            v = h * h + p * p,
            _ = Math.sqrt(d),
            y = Math.sqrt(l),
            g = i * Math.tan((zd - Math.acos((d + l - v) / (2 * _ * y))) / 2),
            m = g / y,
            x = g / _;
          Math.abs(m - 1) > Rd &&
            (this._ += "L" + (t + m * s) + "," + (n + m * f)),
            (this._ +=
              "A" +
              i +
              "," +
              i +
              ",0,0," +
              +(f * h > s * p) +
              "," +
              (this._x1 = t + x * a) +
              "," +
              (this._y1 = n + x * c));
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      else;
    },
    arc: function (t, n, e, r, i, o) {
      (t = +t), (n = +n), (e = +e);
      var u = e * Math.cos(r),
        a = e * Math.sin(r),
        c = t + u,
        s = n + a,
        f = 1 ^ o,
        l = o ? r - i : i - r;
      if (e < 0) throw new Error("negative radius: " + e);
      null === this._x1
        ? (this._ += "M" + c + "," + s)
        : (Math.abs(this._x1 - c) > Rd || Math.abs(this._y1 - s) > Rd) &&
          (this._ += "L" + c + "," + s),
        e &&
          (l > qd
            ? (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                f +
                "," +
                (t - u) +
                "," +
                (n - a) +
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                f +
                "," +
                (this._x1 = c) +
                "," +
                (this._y1 = s))
            : (l < 0 && (l = (l % Pd) + Pd),
              (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0," +
                +(l >= zd) +
                "," +
                f +
                "," +
                (this._x1 = t + e * Math.cos(i)) +
                "," +
                (this._y1 = n + e * Math.sin(i)))));
    },
    rect: function (t, n, e, r) {
      this._ +=
        "M" +
        (this._x0 = this._x1 = +t) +
        "," +
        (this._y0 = this._y1 = +n) +
        "h" +
        +e +
        "v" +
        +r +
        "h" +
        -e +
        "Z";
    },
    toString: function () {
      return this._;
    },
  };
  var Ld = function () {
      function t() {
        var t,
          a = Ad.call(arguments),
          c = n.apply(this, a),
          s = e.apply(this, a),
          f = +r.apply(this, ((a[0] = c), a)),
          l = i.apply(this, a) - Nd,
          h = o.apply(this, a) - Nd,
          p = f * wd(l),
          d = f * Md(l),
          v = +r.apply(this, ((a[0] = s), a)),
          _ = i.apply(this, a) - Nd,
          y = o.apply(this, a) - Nd;
        if (
          (u || (u = t = Re()),
          u.moveTo(p, d),
          u.arc(0, 0, f, l, h),
          (l === _ && h === y) ||
            (u.quadraticCurveTo(0, 0, v * wd(_), v * Md(_)),
            u.arc(0, 0, v, _, y)),
          u.quadraticCurveTo(0, 0, p, d),
          u.closePath(),
          t)
        )
          return (u = null), t + "" || null;
      }
      var n = qe,
        e = Le,
        r = Ue,
        i = De,
        o = Oe,
        u = null;
      return (
        (t.radius = function (n) {
          return arguments.length
            ? ((r = "function" == typeof n ? n : Cd(+n)), t)
            : r;
        }),
        (t.startAngle = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : Cd(+n)), t)
            : i;
        }),
        (t.endAngle = function (n) {
          return arguments.length
            ? ((o = "function" == typeof n ? n : Cd(+n)), t)
            : o;
        }),
        (t.source = function (e) {
          return arguments.length ? ((n = e), t) : n;
        }),
        (t.target = function (n) {
          return arguments.length ? ((e = n), t) : e;
        }),
        (t.context = function (n) {
          return arguments.length ? ((u = null == n ? null : n), t) : u;
        }),
        t
      );
    },
    Ud = "$";
  Fe.prototype = Ie.prototype = {
    constructor: Fe,
    has: function (t) {
      return Ud + t in this;
    },
    get: function (t) {
      return this[Ud + t];
    },
    set: function (t, n) {
      return (this[Ud + t] = n), this;
    },
    remove: function (t) {
      var n = Ud + t;
      return n in this && delete this[n];
    },
    clear: function () {
      for (var t in this) t[0] === Ud && delete this[t];
    },
    keys: function () {
      var t = [];
      for (var n in this) n[0] === Ud && t.push(n.slice(1));
      return t;
    },
    values: function () {
      var t = [];
      for (var n in this) n[0] === Ud && t.push(this[n]);
      return t;
    },
    entries: function () {
      var t = [];
      for (var n in this)
        n[0] === Ud &&
          t.push({
            key: n.slice(1),
            value: this[n],
          });
      return t;
    },
    size: function () {
      var t = 0;
      for (var n in this) n[0] === Ud && ++t;
      return t;
    },
    empty: function () {
      for (var t in this) if (t[0] === Ud) return !1;
      return !0;
    },
    each: function (t) {
      for (var n in this) n[0] === Ud && t(this[n], n.slice(1), this);
    },
  };
  var Dd = function () {
      function t(n, i, u, a) {
        if (i >= o.length) return null != r ? r(n) : null != e ? n.sort(e) : n;
        for (
          var c, s, f, l = -1, h = n.length, p = o[i++], d = Ie(), v = u();
          ++l < h;

        )
          (f = d.get((c = p((s = n[l])) + ""))) ? f.push(s) : d.set(c, [s]);
        return (
          d.each(function (n, e) {
            a(v, e, t(n, i, u, a));
          }),
          v
        );
      }
      function n(t, e) {
        if (++e > o.length) return t;
        var i,
          a = u[e - 1];
        return (
          null != r && e >= o.length
            ? (i = t.entries())
            : ((i = []),
              t.each(function (t, r) {
                i.push({
                  key: r,
                  values: n(t, e),
                });
              })),
          null != a
            ? i.sort(function (t, n) {
                return a(t.key, n.key);
              })
            : i
        );
      }
      var e,
        r,
        i,
        o = [],
        u = [];
      return (i = {
        object: function (n) {
          return t(n, 0, Ye, Be);
        },
        map: function (n) {
          return t(n, 0, je, He);
        },
        entries: function (e) {
          return n(t(e, 0, je, He), 0);
        },
        key: function (t) {
          return o.push(t), i;
        },
        sortKeys: function (t) {
          return (u[o.length - 1] = t), i;
        },
        sortValues: function (t) {
          return (e = t), i;
        },
        rollup: function (t) {
          return (r = t), i;
        },
      });
    },
    Od = Ie.prototype;
  Xe.prototype = Ve.prototype = {
    constructor: Xe,
    has: Od.has,
    add: function (t) {
      return (t += ""), (this[Ud + t] = t), this;
    },
    remove: Od.remove,
    clear: Od.clear,
    values: Od.keys,
    size: Od.size,
    empty: Od.empty,
    each: Od.each,
  };
  var Fd = function (t) {
      var n = [];
      for (var e in t) n.push(e);
      return n;
    },
    Id = function (t) {
      var n = [];
      for (var e in t) n.push(t[e]);
      return n;
    },
    Yd = function (t) {
      var n = [];
      for (var e in t)
        n.push({
          key: e,
          value: t[e],
        });
      return n;
    },
    Bd = function (t) {
      function n(t, n) {
        var r,
          i,
          o = e(t, function (t, e) {
            return r ? r(t, e - 1) : ((i = t), void (r = n ? $e(t, n) : We(t)));
          });
        return (o.columns = i), o;
      }
      function e(t, n) {
        function e() {
          if (f >= s) return u;
          if (i) return (i = !1), o;
          var n,
            e = f;
          if (34 === t.charCodeAt(e)) {
            for (var r = e; r++ < s; )
              if (34 === t.charCodeAt(r)) {
                if (34 !== t.charCodeAt(r + 1)) break;
                ++r;
              }
            return (
              (f = r + 2),
              (n = t.charCodeAt(r + 1)),
              13 === n
                ? ((i = !0), 10 === t.charCodeAt(r + 2) && ++f)
                : 10 === n && (i = !0),
              t.slice(e + 1, r).replace(/""/g, '"')
            );
          }
          for (; f < s; ) {
            var a = 1;
            if (((n = t.charCodeAt(f++)), 10 === n)) i = !0;
            else if (13 === n) (i = !0), 10 === t.charCodeAt(f) && (++f, ++a);
            else if (n !== c) continue;
            return t.slice(e, f - a);
          }
          return t.slice(e);
        }
        for (
          var r, i, o = {}, u = {}, a = [], s = t.length, f = 0, l = 0;
          (r = e()) !== u;

        ) {
          for (var h = []; r !== o && r !== u; ) h.push(r), (r = e());
          (n && null == (h = n(h, l++))) || a.push(h);
        }
        return a;
      }
      function r(n, e) {
        return (
          null == e && (e = Ze(n)),
          [e.map(u).join(t)]
            .concat(
              n.map(function (n) {
                return e
                  .map(function (t) {
                    return u(n[t]);
                  })
                  .join(t);
              })
            )
            .join("\n")
        );
      }
      function i(t) {
        return t.map(o).join("\n");
      }
      function o(n) {
        return n.map(u).join(t);
      }
      function u(t) {
        return null == t
          ? ""
          : a.test((t += ""))
          ? '"' + t.replace(/\"/g, '""') + '"'
          : t;
      }
      var a = new RegExp('["' + t + "\n]"),
        c = t.charCodeAt(0);
      return {
        parse: n,
        parseRows: e,
        format: r,
        formatRows: i,
      };
    },
    jd = Bd(","),
    Hd = jd.parse,
    Xd = jd.parseRows,
    Vd = jd.format,
    Wd = jd.formatRows,
    $d = Bd("\t"),
    Zd = $d.parse,
    Gd = $d.parseRows,
    Jd = $d.format,
    Qd = $d.formatRows,
    Kd = function (t, n) {
      function e() {
        var e,
          i,
          o = r.length,
          u = 0,
          a = 0;
        for (e = 0; e < o; ++e) (i = r[e]), (u += i.x), (a += i.y);
        for (u = u / o - t, a = a / o - n, e = 0; e < o; ++e)
          (i = r[e]), (i.x -= u), (i.y -= a);
      }
      var r;
      return (
        null == t && (t = 0),
        null == n && (n = 0),
        (e.initialize = function (t) {
          r = t;
        }),
        (e.x = function (n) {
          return arguments.length ? ((t = +n), e) : t;
        }),
        (e.y = function (t) {
          return arguments.length ? ((n = +t), e) : n;
        }),
        e
      );
    },
    tv = function (t) {
      return function () {
        return t;
      };
    },
    nv = function () {
      return 1e-6 * (Math.random() - 0.5);
    },
    ev = function (t) {
      var n = +this._x.call(null, t),
        e = +this._y.call(null, t);
      return Ge(this.cover(n, e), n, e, t);
    },
    rv = function (t, n) {
      if (isNaN((t = +t)) || isNaN((n = +n))) return this;
      var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;
      if (isNaN(e))
        (i = (e = Math.floor(t)) + 1), (o = (r = Math.floor(n)) + 1);
      else {
        if (!(e > t || t > i || r > n || n > o)) return this;
        var u,
          a,
          c = i - e,
          s = this._root;
        switch ((a = ((n < (r + o) / 2) << 1) | (t < (e + i) / 2))) {
          case 0:
            do (u = new Array(4)), (u[a] = s), (s = u);
            while (((c *= 2), (i = e + c), (o = r + c), t > i || n > o));
            break;
          case 1:
            do (u = new Array(4)), (u[a] = s), (s = u);
            while (((c *= 2), (e = i - c), (o = r + c), e > t || n > o));
            break;
          case 2:
            do (u = new Array(4)), (u[a] = s), (s = u);
            while (((c *= 2), (i = e + c), (r = o - c), t > i || r > n));
            break;
          case 3:
            do (u = new Array(4)), (u[a] = s), (s = u);
            while (((c *= 2), (e = i - c), (r = o - c), e > t || r > n));
        }
        this._root && this._root.length && (this._root = s);
      }
      return (
        (this._x0 = e), (this._y0 = r), (this._x1 = i), (this._y1 = o), this
      );
    },
    iv = function () {
      var t = [];
      return (
        this.visit(function (n) {
          if (!n.length)
            do t.push(n.data);
            while ((n = n.next));
        }),
        t
      );
    },
    ov = function (t) {
      return arguments.length
        ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1])
        : isNaN(this._x0)
        ? void 0
        : [
            [this._x0, this._y0],
            [this._x1, this._y1],
          ];
    },
    uv = function (t, n, e, r, i) {
      (this.node = t),
        (this.x0 = n),
        (this.y0 = e),
        (this.x1 = r),
        (this.y1 = i);
    },
    av = function (t, n, e) {
      var r,
        i,
        o,
        u,
        a,
        c,
        s,
        f = this._x0,
        l = this._y0,
        h = this._x1,
        p = this._y1,
        d = [],
        v = this._root;
      for (
        v && d.push(new uv(v, f, l, h, p)),
          null == e
            ? (e = 1 / 0)
            : ((f = t - e), (l = n - e), (h = t + e), (p = n + e), (e *= e));
        (c = d.pop());

      )
        if (
          !(
            !(v = c.node) ||
            (i = c.x0) > h ||
            (o = c.y0) > p ||
            (u = c.x1) < f ||
            (a = c.y1) < l
          )
        )
          if (v.length) {
            var _ = (i + u) / 2,
              y = (o + a) / 2;
            d.push(
              new uv(v[3], _, y, u, a),
              new uv(v[2], i, y, _, a),
              new uv(v[1], _, o, u, y),
              new uv(v[0], i, o, _, y)
            ),
              (s = ((n >= y) << 1) | (t >= _)) &&
                ((c = d[d.length - 1]),
                (d[d.length - 1] = d[d.length - 1 - s]),
                (d[d.length - 1 - s] = c));
          } else {
            var g = t - +this._x.call(null, v.data),
              m = n - +this._y.call(null, v.data),
              x = g * g + m * m;
            if (x < e) {
              var b = Math.sqrt((e = x));
              (f = t - b), (l = n - b), (h = t + b), (p = n + b), (r = v.data);
            }
          }
      return r;
    },
    cv = function (t) {
      if (
        isNaN((o = +this._x.call(null, t))) ||
        isNaN((u = +this._y.call(null, t)))
      )
        return this;
      var n,
        e,
        r,
        i,
        o,
        u,
        a,
        c,
        s,
        f,
        l,
        h,
        p = this._root,
        d = this._x0,
        v = this._y0,
        _ = this._x1,
        y = this._y1;
      if (!p) return this;
      if (p.length)
        for (;;) {
          if (
            ((s = o >= (a = (d + _) / 2)) ? (d = a) : (_ = a),
            (f = u >= (c = (v + y) / 2)) ? (v = c) : (y = c),
            (n = p),
            !(p = p[(l = (f << 1) | s)]))
          )
            return this;
          if (!p.length) break;
          (n[(l + 1) & 3] || n[(l + 2) & 3] || n[(l + 3) & 3]) &&
            ((e = n), (h = l));
        }
      for (; p.data !== t; ) if (((r = p), !(p = p.next))) return this;
      return (
        (i = p.next) && delete p.next,
        r
          ? (i ? (r.next = i) : delete r.next, this)
          : n
          ? (i ? (n[l] = i) : delete n[l],
            (p = n[0] || n[1] || n[2] || n[3]) &&
              p === (n[3] || n[2] || n[1] || n[0]) &&
              !p.length &&
              (e ? (e[h] = p) : (this._root = p)),
            this)
          : ((this._root = i), this)
      );
    },
    sv = function () {
      return this._root;
    },
    fv = function () {
      var t = 0;
      return (
        this.visit(function (n) {
          if (!n.length)
            do ++t;
            while ((n = n.next));
        }),
        t
      );
    },
    lv = function (t) {
      var n,
        e,
        r,
        i,
        o,
        u,
        a = [],
        c = this._root;
      for (
        c && a.push(new uv(c, this._x0, this._y0, this._x1, this._y1));
        (n = a.pop());

      )
        if (
          !t((c = n.node), (r = n.x0), (i = n.y0), (o = n.x1), (u = n.y1)) &&
          c.length
        ) {
          var s = (r + o) / 2,
            f = (i + u) / 2;
          (e = c[3]) && a.push(new uv(e, s, f, o, u)),
            (e = c[2]) && a.push(new uv(e, r, f, s, u)),
            (e = c[1]) && a.push(new uv(e, s, i, o, f)),
            (e = c[0]) && a.push(new uv(e, r, i, s, f));
        }
      return this;
    },
    hv = function (t) {
      var n,
        e = [],
        r = [];
      for (
        this._root &&
        e.push(new uv(this._root, this._x0, this._y0, this._x1, this._y1));
        (n = e.pop());

      ) {
        var i = n.node;
        if (i.length) {
          var o,
            u = n.x0,
            a = n.y0,
            c = n.x1,
            s = n.y1,
            f = (u + c) / 2,
            l = (a + s) / 2;
          (o = i[0]) && e.push(new uv(o, u, a, f, l)),
            (o = i[1]) && e.push(new uv(o, f, a, c, l)),
            (o = i[2]) && e.push(new uv(o, u, l, f, s)),
            (o = i[3]) && e.push(new uv(o, f, l, c, s));
        }
        r.push(n);
      }
      for (; (n = r.pop()); ) t(n.node, n.x0, n.y0, n.x1, n.y1);
      return this;
    },
    pv = function (t) {
      return arguments.length ? ((this._x = t), this) : this._x;
    },
    dv = function (t) {
      return arguments.length ? ((this._y = t), this) : this._y;
    },
    vv = (nr.prototype = er.prototype);
  (vv.copy = function () {
    var t,
      n,
      e = new er(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
      r = this._root;
    if (!r) return e;
    if (!r.length) return (e._root = rr(r)), e;
    for (
      t = [
        {
          source: r,
          target: (e._root = new Array(4)),
        },
      ];
      (r = t.pop());

    )
      for (var i = 0; i < 4; ++i)
        (n = r.source[i]) &&
          (n.length
            ? t.push({
                source: n,
                target: (r.target[i] = new Array(4)),
              })
            : (r.target[i] = rr(n)));
    return e;
  }),
    (vv.add = ev),
    (vv.addAll = Je),
    (vv.cover = rv),
    (vv.data = iv),
    (vv.extent = ov),
    (vv.find = av),
    (vv.remove = cv),
    (vv.removeAll = Qe),
    (vv.root = sv),
    (vv.size = fv),
    (vv.visit = lv),
    (vv.visitAfter = hv),
    (vv.x = pv),
    (vv.y = dv);
  var _v,
    yv = function (t) {
      function n() {
        function t(t, n, e, r, i) {
          var o = t.data,
            a = t.r,
            p = l + a;
          {
            if (!o) return n > s + p || r < s - p || e > f + p || i < f - p;
            if (o.index > c.index) {
              var d = s - o.x - o.vx,
                v = f - o.y - o.vy,
                _ = d * d + v * v;
              _ < p * p &&
                (0 === d && ((d = nv()), (_ += d * d)),
                0 === v && ((v = nv()), (_ += v * v)),
                (_ = ((p - (_ = Math.sqrt(_))) / _) * u),
                (c.vx += (d *= _) * (p = (a *= a) / (h + a))),
                (c.vy += (v *= _) * p),
                (o.vx -= d * (p = 1 - p)),
                (o.vy -= v * p));
            }
          }
        }
        for (var n, r, c, s, f, l, h, p = i.length, d = 0; d < a; ++d)
          for (r = nr(i, ir, or).visitAfter(e), n = 0; n < p; ++n)
            (c = i[n]),
              (l = o[c.index]),
              (h = l * l),
              (s = c.x + c.vx),
              (f = c.y + c.vy),
              r.visit(t);
      }
      function e(t) {
        if (t.data) return (t.r = o[t.data.index]);
        for (var n = (t.r = 0); n < 4; ++n)
          t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
      function r() {
        if (i) {
          var n,
            e,
            r = i.length;
          for (o = new Array(r), n = 0; n < r; ++n)
            (e = i[n]), (o[e.index] = +t(e, n, i));
        }
      }
      var i,
        o,
        u = 1,
        a = 1;
      return (
        "function" != typeof t && (t = tv(null == t ? 1 : +t)),
        (n.initialize = function (t) {
          (i = t), r();
        }),
        (n.iterations = function (t) {
          return arguments.length ? ((a = +t), n) : a;
        }),
        (n.strength = function (t) {
          return arguments.length ? ((u = +t), n) : u;
        }),
        (n.radius = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : tv(+e)), r(), n)
            : t;
        }),
        n
      );
    },
    gv = function (t) {
      function n(t) {
        return 1 / Math.min(s[t.source.index], s[t.target.index]);
      }
      function e(n) {
        for (var e = 0, r = t.length; e < d; ++e)
          for (var i, o, c, s, l, h, p, v = 0; v < r; ++v)
            (i = t[v]),
              (o = i.source),
              (c = i.target),
              (s = c.x + c.vx - o.x - o.vx || nv()),
              (l = c.y + c.vy - o.y - o.vy || nv()),
              (h = Math.sqrt(s * s + l * l)),
              (h = ((h - a[v]) / h) * n * u[v]),
              (s *= h),
              (l *= h),
              (c.vx -= s * (p = f[v])),
              (c.vy -= l * p),
              (o.vx += s * (p = 1 - p)),
              (o.vy += l * p);
      }
      function r() {
        if (c) {
          var n,
            e,
            r = c.length,
            h = t.length,
            p = Ie(c, l);
          for (n = 0, s = new Array(r); n < h; ++n)
            (e = t[n]),
              (e.index = n),
              "object" != typeof e.source && (e.source = ar(p, e.source)),
              "object" != typeof e.target && (e.target = ar(p, e.target)),
              (s[e.source.index] = (s[e.source.index] || 0) + 1),
              (s[e.target.index] = (s[e.target.index] || 0) + 1);
          for (n = 0, f = new Array(h); n < h; ++n)
            (e = t[n]),
              (f[n] =
                s[e.source.index] / (s[e.source.index] + s[e.target.index]));
          (u = new Array(h)), i(), (a = new Array(h)), o();
        }
      }
      function i() {
        if (c) for (var n = 0, e = t.length; n < e; ++n) u[n] = +h(t[n], n, t);
      }
      function o() {
        if (c) for (var n = 0, e = t.length; n < e; ++n) a[n] = +p(t[n], n, t);
      }
      var u,
        a,
        c,
        s,
        f,
        l = ur,
        h = n,
        p = tv(30),
        d = 1;
      return (
        null == t && (t = []),
        (e.initialize = function (t) {
          (c = t), r();
        }),
        (e.links = function (n) {
          return arguments.length ? ((t = n), r(), e) : t;
        }),
        (e.id = function (t) {
          return arguments.length ? ((l = t), e) : l;
        }),
        (e.iterations = function (t) {
          return arguments.length ? ((d = +t), e) : d;
        }),
        (e.strength = function (t) {
          return arguments.length
            ? ((h = "function" == typeof t ? t : tv(+t)), i(), e)
            : h;
        }),
        (e.distance = function (t) {
          return arguments.length
            ? ((p = "function" == typeof t ? t : tv(+t)), o(), e)
            : p;
        }),
        e
      );
    },
    mv = 10,
    xv = Math.PI * (3 - Math.sqrt(5)),
    bv = function (t) {
      function n() {
        e(), d.call("tick", o), u < a && (h.stop(), d.call("end", o));
      }
      function e() {
        var n,
          e,
          r = t.length;
        for (
          u += (s - u) * c,
            l.each(function (t) {
              t(u);
            }),
            n = 0;
          n < r;
          ++n
        )
          (e = t[n]),
            null == e.fx ? (e.x += e.vx *= f) : ((e.x = e.fx), (e.vx = 0)),
            null == e.fy ? (e.y += e.vy *= f) : ((e.y = e.fy), (e.vy = 0));
      }
      function r() {
        for (var n, e = 0, r = t.length; e < r; ++e) {
          if (((n = t[e]), (n.index = e), isNaN(n.x) || isNaN(n.y))) {
            var i = mv * Math.sqrt(e),
              o = e * xv;
            (n.x = i * Math.cos(o)), (n.y = i * Math.sin(o));
          }
          (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
        }
      }
      function i(n) {
        return n.initialize && n.initialize(t), n;
      }
      var o,
        u = 1,
        a = 0.001,
        c = 1 - Math.pow(a, 1 / 300),
        s = 0,
        f = 0.6,
        l = Ie(),
        h = _n(n),
        d = p("tick", "end");
      return (
        null == t && (t = []),
        r(),
        (o = {
          tick: e,
          restart: function () {
            return h.restart(n), o;
          },
          stop: function () {
            return h.stop(), o;
          },
          nodes: function (n) {
            return arguments.length ? ((t = n), r(), l.each(i), o) : t;
          },
          alpha: function (t) {
            return arguments.length ? ((u = +t), o) : u;
          },
          alphaMin: function (t) {
            return arguments.length ? ((a = +t), o) : a;
          },
          alphaDecay: function (t) {
            return arguments.length ? ((c = +t), o) : +c;
          },
          alphaTarget: function (t) {
            return arguments.length ? ((s = +t), o) : s;
          },
          velocityDecay: function (t) {
            return arguments.length ? ((f = 1 - t), o) : 1 - f;
          },
          force: function (t, n) {
            return arguments.length > 1
              ? (null == n ? l.remove(t) : l.set(t, i(n)), o)
              : l.get(t);
          },
          find: function (n, e, r) {
            var i,
              o,
              u,
              a,
              c,
              s = 0,
              f = t.length;
            for (null == r ? (r = 1 / 0) : (r *= r), s = 0; s < f; ++s)
              (a = t[s]),
                (i = n - a.x),
                (o = e - a.y),
                (u = i * i + o * o),
                u < r && ((c = a), (r = u));
            return c;
          },
          on: function (t, n) {
            return arguments.length > 1 ? (d.on(t, n), o) : d.on(t);
          },
        })
      );
    },
    wv = function () {
      function t(t) {
        var n,
          a = i.length,
          c = nr(i, cr, sr).visitAfter(e);
        for (u = t, n = 0; n < a; ++n) (o = i[n]), c.visit(r);
      }
      function n() {
        if (i) {
          var t,
            n,
            e = i.length;
          for (a = new Array(e), t = 0; t < e; ++t)
            (n = i[t]), (a[n.index] = +c(n, t, i));
        }
      }
      function e(t) {
        var n,
          e,
          r,
          i,
          o,
          u = 0;
        if (t.length) {
          for (r = i = o = 0; o < 4; ++o)
            (n = t[o]) &&
              (e = n.value) &&
              ((u += e), (r += e * n.x), (i += e * n.y));
          (t.x = r / u), (t.y = i / u);
        } else {
          (n = t), (n.x = n.data.x), (n.y = n.data.y);
          do u += a[n.data.index];
          while ((n = n.next));
        }
        t.value = u;
      }
      function r(t, n, e, r) {
        if (!t.value) return !0;
        var i = t.x - o.x,
          c = t.y - o.y,
          h = r - n,
          p = i * i + c * c;
        if ((h * h) / l < p)
          return (
            p < f &&
              (0 === i && ((i = nv()), (p += i * i)),
              0 === c && ((c = nv()), (p += c * c)),
              p < s && (p = Math.sqrt(s * p)),
              (o.vx += (i * t.value * u) / p),
              (o.vy += (c * t.value * u) / p)),
            !0
          );
        if (!(t.length || p >= f)) {
          (t.data !== o || t.next) &&
            (0 === i && ((i = nv()), (p += i * i)),
            0 === c && ((c = nv()), (p += c * c)),
            p < s && (p = Math.sqrt(s * p)));
          do
            t.data !== o &&
              ((h = (a[t.data.index] * u) / p),
              (o.vx += i * h),
              (o.vy += c * h));
          while ((t = t.next));
        }
      }
      var i,
        o,
        u,
        a,
        c = tv(-30),
        s = 1,
        f = 1 / 0,
        l = 0.81;
      return (
        (t.initialize = function (t) {
          (i = t), n();
        }),
        (t.strength = function (e) {
          return arguments.length
            ? ((c = "function" == typeof e ? e : tv(+e)), n(), t)
            : c;
        }),
        (t.distanceMin = function (n) {
          return arguments.length ? ((s = n * n), t) : Math.sqrt(s);
        }),
        (t.distanceMax = function (n) {
          return arguments.length ? ((f = n * n), t) : Math.sqrt(f);
        }),
        (t.theta = function (n) {
          return arguments.length ? ((l = n * n), t) : Math.sqrt(l);
        }),
        t
      );
    },
    Mv = function (t) {
      function n(t) {
        for (var n, e = 0, u = r.length; e < u; ++e)
          (n = r[e]), (n.vx += (o[e] - n.x) * i[e] * t);
      }
      function e() {
        if (r) {
          var n,
            e = r.length;
          for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)
            i[n] = isNaN((o[n] = +t(r[n], n, r))) ? 0 : +u(r[n], n, r);
        }
      }
      var r,
        i,
        o,
        u = tv(0.1);
      return (
        "function" != typeof t && (t = tv(null == t ? 0 : +t)),
        (n.initialize = function (t) {
          (r = t), e();
        }),
        (n.strength = function (t) {
          return arguments.length
            ? ((u = "function" == typeof t ? t : tv(+t)), e(), n)
            : u;
        }),
        (n.x = function (r) {
          return arguments.length
            ? ((t = "function" == typeof r ? r : tv(+r)), e(), n)
            : t;
        }),
        n
      );
    },
    Tv = function (t) {
      function n(t) {
        for (var n, e = 0, u = r.length; e < u; ++e)
          (n = r[e]), (n.vy += (o[e] - n.y) * i[e] * t);
      }
      function e() {
        if (r) {
          var n,
            e = r.length;
          for (i = new Array(e), o = new Array(e), n = 0; n < e; ++n)
            i[n] = isNaN((o[n] = +t(r[n], n, r))) ? 0 : +u(r[n], n, r);
        }
      }
      var r,
        i,
        o,
        u = tv(0.1);
      return (
        "function" != typeof t && (t = tv(null == t ? 0 : +t)),
        (n.initialize = function (t) {
          (r = t), e();
        }),
        (n.strength = function (t) {
          return arguments.length
            ? ((u = "function" == typeof t ? t : tv(+t)), e(), n)
            : u;
        }),
        (n.y = function (r) {
          return arguments.length
            ? ((t = "function" == typeof r ? r : tv(+r)), e(), n)
            : t;
        }),
        n
      );
    },
    Nv = function (t, n) {
      if (
        (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf(
          "e"
        )) < 0
      )
        return null;
      var e,
        r = t.slice(0, e);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
    },
    kv = function (t) {
      return (t = Nv(Math.abs(t))), t ? t[1] : NaN;
    },
    Sv = function (t, n) {
      return function (e, r) {
        for (
          var i = e.length, o = [], u = 0, a = t[0], c = 0;
          i > 0 &&
          a > 0 &&
          (c + a + 1 > r && (a = Math.max(1, r - c)),
          o.push(e.substring((i -= a), i + a)),
          !((c += a + 1) > r));

        )
          a = t[(u = (u + 1) % t.length)];
        return o.reverse().join(n);
      };
    },
    Ev = function (t, n) {
      t = t.toPrecision(n);
      t: for (var e, r = t.length, i = 1, o = -1; i < r; ++i)
        switch (t[i]) {
          case ".":
            o = e = i;
            break;
          case "0":
            0 === o && (o = i), (e = i);
            break;
          case "e":
            break t;
          default:
            o > 0 && (o = 0);
        }
      return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
    },
    Av = function (t, n) {
      var e = Nv(t, n);
      if (!e) return t + "";
      var r = e[0],
        i = e[1],
        o = i - (_v = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
        u = r.length;
      return o === u
        ? r
        : o > u
        ? r + new Array(o - u + 1).join("0")
        : o > 0
        ? r.slice(0, o) + "." + r.slice(o)
        : "0." + new Array(1 - o).join("0") + Nv(t, Math.max(0, n + o - 1))[0];
    },
    Cv = function (t, n) {
      var e = Nv(t, n);
      if (!e) return t + "";
      var r = e[0],
        i = e[1];
      return i < 0
        ? "0." + new Array(-i).join("0") + r
        : r.length > i + 1
        ? r.slice(0, i + 1) + "." + r.slice(i + 1)
        : r + new Array(i - r.length + 2).join("0");
    },
    zv = {
      "": Ev,
      "%": function (t, n) {
        return (100 * t).toFixed(n);
      },
      b: function (t) {
        return Math.round(t).toString(2);
      },
      c: function (t) {
        return t + "";
      },
      d: function (t) {
        return Math.round(t).toString(10);
      },
      e: function (t, n) {
        return t.toExponential(n);
      },
      f: function (t, n) {
        return t.toFixed(n);
      },
      g: function (t, n) {
        return t.toPrecision(n);
      },
      o: function (t) {
        return Math.round(t).toString(8);
      },
      p: function (t, n) {
        return Cv(100 * t, n);
      },
      r: Cv,
      s: Av,
      X: function (t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function (t) {
        return Math.round(t).toString(16);
      },
    },
    Pv =
      /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i,
    Rv = function (t) {
      return new fr(t);
    };
  fr.prototype.toString = function () {
    return (
      this.fill +
      this.align +
      this.sign +
      this.symbol +
      (this.zero ? "0" : "") +
      (null == this.width ? "" : Math.max(1, 0 | this.width)) +
      (this.comma ? "," : "") +
      (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) +
      this.type
    );
  };
  var qv,
    Lv = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "µ",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ],
    Uv = function (t) {
      function n(t) {
        function n(t) {
          var n,
            i,
            c,
            g = d,
            m = v;
          if ("c" === p) (m = _(t) + m), (t = "");
          else {
            t = +t;
            var x = (t < 0 || 1 / t < 0) && ((t *= -1), !0);
            if (((t = _(t, h)), x))
              for (n = -1, i = t.length, x = !1; ++n < i; )
                if (
                  ((c = t.charCodeAt(n)),
                  (48 < c && c < 58) ||
                    ("x" === p && 96 < c && c < 103) ||
                    ("X" === p && 64 < c && c < 71))
                ) {
                  x = !0;
                  break;
                }
            if (
              ((g =
                (x ? ("(" === a ? a : "-") : "-" === a || "(" === a ? "" : a) +
                g),
              (m =
                m +
                ("s" === p ? Lv[8 + _v / 3] : "") +
                (x && "(" === a ? ")" : "")),
              y)
            )
              for (n = -1, i = t.length; ++n < i; )
                if (((c = t.charCodeAt(n)), 48 > c || c > 57)) {
                  (m = (46 === c ? o + t.slice(n + 1) : t.slice(n)) + m),
                    (t = t.slice(0, n));
                  break;
                }
          }
          l && !s && (t = r(t, 1 / 0));
          var b = g.length + t.length + m.length,
            w = b < f ? new Array(f - b + 1).join(e) : "";
          switch (
            (l &&
              s &&
              ((t = r(w + t, w.length ? f - m.length : 1 / 0)), (w = "")),
            u)
          ) {
            case "<":
              return g + t + m + w;
            case "=":
              return g + w + t + m;
            case "^":
              return w.slice(0, (b = w.length >> 1)) + g + t + m + w.slice(b);
          }
          return w + g + t + m;
        }
        t = Rv(t);
        var e = t.fill,
          u = t.align,
          a = t.sign,
          c = t.symbol,
          s = t.zero,
          f = t.width,
          l = t.comma,
          h = t.precision,
          p = t.type,
          d =
            "$" === c
              ? i[0]
              : "#" === c && /[boxX]/.test(p)
              ? "0" + p.toLowerCase()
              : "",
          v = "$" === c ? i[1] : /[%p]/.test(p) ? "%" : "",
          _ = zv[p],
          y = !p || /[defgprs%]/.test(p);
        return (
          (h =
            null == h
              ? p
                ? 6
                : 12
              : /[gprs]/.test(p)
              ? Math.max(1, Math.min(21, h))
              : Math.max(0, Math.min(20, h))),
          (n.toString = function () {
            return t + "";
          }),
          n
        );
      }
      function e(t, e) {
        var r = n(((t = Rv(t)), (t.type = "f"), t)),
          i = 3 * Math.max(-8, Math.min(8, Math.floor(kv(e) / 3))),
          o = Math.pow(10, -i),
          u = Lv[8 + i / 3];
        return function (t) {
          return r(o * t) + u;
        };
      }
      var r = t.grouping && t.thousands ? Sv(t.grouping, t.thousands) : lr,
        i = t.currency,
        o = t.decimal;
      return {
        format: n,
        formatPrefix: e,
      };
    };
  hr({
    decimal: ".",
    thousands: ",",
    grouping: [3],
    currency: ["$", ""],
  });
  var Dv = function (t) {
      return Math.max(0, -kv(Math.abs(t)));
    },
    Ov = function (t, n) {
      return Math.max(
        0,
        3 * Math.max(-8, Math.min(8, Math.floor(kv(n) / 3))) - kv(Math.abs(t))
      );
    },
    Fv = function (t, n) {
      return (
        (t = Math.abs(t)), (n = Math.abs(n) - t), Math.max(0, kv(n) - kv(t)) + 1
      );
    },
    Iv = function () {
      return new pr();
    };
  pr.prototype = {
    constructor: pr,
    reset: function () {
      this.s = this.t = 0;
    },
    add: function (t) {
      dr(g_, t, this.t),
        dr(this, g_.s, this.s),
        this.s ? (this.t += g_.t) : (this.s = g_.t);
    },
    valueOf: function () {
      return this.s;
    },
  };
  var Yv,
    Bv,
    jv,
    Hv,
    Xv,
    Vv,
    Wv,
    $v,
    Zv,
    Gv,
    Jv,
    Qv,
    Kv,
    t_,
    n_,
    e_,
    r_,
    i_,
    o_,
    u_,
    a_,
    c_,
    s_,
    f_,
    l_,
    h_,
    p_,
    d_,
    v_,
    __,
    y_,
    g_ = new pr(),
    m_ = 1e-6,
    x_ = 1e-12,
    b_ = Math.PI,
    w_ = b_ / 2,
    M_ = b_ / 4,
    T_ = 2 * b_,
    N_ = 180 / b_,
    k_ = b_ / 180,
    S_ = Math.abs,
    E_ = Math.atan,
    A_ = Math.atan2,
    C_ = Math.cos,
    z_ = Math.ceil,
    P_ = Math.exp,
    R_ = Math.log,
    q_ = Math.pow,
    L_ = Math.sin,
    U_ =
      Math.sign ||
      function (t) {
        return t > 0 ? 1 : t < 0 ? -1 : 0;
      },
    D_ = Math.sqrt,
    O_ = Math.tan,
    F_ = {
      Feature: function (t, n) {
        mr(t.geometry, n);
      },
      FeatureCollection: function (t, n) {
        for (var e = t.features, r = -1, i = e.length; ++r < i; )
          mr(e[r].geometry, n);
      },
    },
    I_ = {
      Sphere: function (t, n) {
        n.sphere();
      },
      Point: function (t, n) {
        (t = t.coordinates), n.point(t[0], t[1], t[2]);
      },
      MultiPoint: function (t, n) {
        for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
          (t = e[r]), n.point(t[0], t[1], t[2]);
      },
      LineString: function (t, n) {
        xr(t.coordinates, n, 0);
      },
      MultiLineString: function (t, n) {
        for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
          xr(e[r], n, 0);
      },
      Polygon: function (t, n) {
        br(t.coordinates, n);
      },
      MultiPolygon: function (t, n) {
        for (var e = t.coordinates, r = -1, i = e.length; ++r < i; )
          br(e[r], n);
      },
      GeometryCollection: function (t, n) {
        for (var e = t.geometries, r = -1, i = e.length; ++r < i; ) mr(e[r], n);
      },
    },
    Y_ = function (t, n) {
      t && F_.hasOwnProperty(t.type) ? F_[t.type](t, n) : mr(t, n);
    },
    B_ = Iv(),
    j_ = Iv(),
    H_ = {
      point: gr,
      lineStart: gr,
      lineEnd: gr,
      polygonStart: function () {
        B_.reset(), (H_.lineStart = wr), (H_.lineEnd = Mr);
      },
      polygonEnd: function () {
        var t = +B_;
        j_.add(t < 0 ? T_ + t : t),
          (this.lineStart = this.lineEnd = this.point = gr);
      },
      sphere: function () {
        j_.add(T_);
      },
    },
    X_ = function (t) {
      return j_.reset(), Y_(t, H_), 2 * j_;
    },
    V_ = Iv(),
    W_ = {
      point: Rr,
      lineStart: Lr,
      lineEnd: Ur,
      polygonStart: function () {
        (W_.point = Dr),
          (W_.lineStart = Or),
          (W_.lineEnd = Fr),
          V_.reset(),
          H_.polygonStart();
      },
      polygonEnd: function () {
        H_.polygonEnd(),
          (W_.point = Rr),
          (W_.lineStart = Lr),
          (W_.lineEnd = Ur),
          B_ < 0
            ? ((Vv = -($v = 180)), (Wv = -(Zv = 90)))
            : V_ > m_
            ? (Zv = 90)
            : V_ < -m_ && (Wv = -90),
          (n_[0] = Vv),
          (n_[1] = $v);
      },
    },
    $_ = function (t) {
      var n, e, r, i, o, u, a;
      if (
        ((Zv = $v = -(Vv = Wv = 1 / 0)), (t_ = []), Y_(t, W_), (e = t_.length))
      ) {
        for (t_.sort(Yr), n = 1, r = t_[0], o = [r]; n < e; ++n)
          (i = t_[n]),
            Br(r, i[0]) || Br(r, i[1])
              ? (Ir(r[0], i[1]) > Ir(r[0], r[1]) && (r[1] = i[1]),
                Ir(i[0], r[1]) > Ir(r[0], r[1]) && (r[0] = i[0]))
              : o.push((r = i));
        for (
          u = -(1 / 0), e = o.length - 1, n = 0, r = o[e];
          n <= e;
          r = i, ++n
        )
          (i = o[n]),
            (a = Ir(r[1], i[0])) > u && ((u = a), (Vv = i[0]), ($v = r[1]));
      }
      return (
        (t_ = n_ = null),
        Vv === 1 / 0 || Wv === 1 / 0
          ? [
              [NaN, NaN],
              [NaN, NaN],
            ]
          : [
              [Vv, Wv],
              [$v, Zv],
            ]
      );
    },
    Z_ = {
      sphere: gr,
      point: jr,
      lineStart: Xr,
      lineEnd: $r,
      polygonStart: function () {
        (Z_.lineStart = Zr), (Z_.lineEnd = Gr);
      },
      polygonEnd: function () {
        (Z_.lineStart = Xr), (Z_.lineEnd = $r);
      },
    },
    G_ = function (t) {
      (e_ = r_ = i_ = o_ = u_ = a_ = c_ = s_ = f_ = l_ = h_ = 0), Y_(t, Z_);
      var n = f_,
        e = l_,
        r = h_,
        i = n * n + e * e + r * r;
      return i < x_ &&
        ((n = a_),
        (e = c_),
        (r = s_),
        r_ < m_ && ((n = i_), (e = o_), (r = u_)),
        (i = n * n + e * e + r * r),
        i < x_)
        ? [NaN, NaN]
        : [A_(e, n) * N_, _r(r / D_(i)) * N_];
    },
    J_ = function (t) {
      return function () {
        return t;
      };
    },
    Q_ = function (t, n) {
      function e(e, r) {
        return (e = t(e, r)), n(e[0], e[1]);
      }
      return (
        t.invert &&
          n.invert &&
          (e.invert = function (e, r) {
            return (e = n.invert(e, r)), e && t.invert(e[0], e[1]);
          }),
        e
      );
    };
  Kr.invert = Kr;
  var K_,
    ty,
    ny,
    ey,
    ry,
    iy,
    oy,
    uy,
    ay,
    cy,
    sy,
    fy = function (t) {
      function n(n) {
        return (n = t(n[0] * k_, n[1] * k_)), (n[0] *= N_), (n[1] *= N_), n;
      }
      return (
        (t = ti(t[0] * k_, t[1] * k_, t.length > 2 ? t[2] * k_ : 0)),
        (n.invert = function (n) {
          return (
            (n = t.invert(n[0] * k_, n[1] * k_)), (n[0] *= N_), (n[1] *= N_), n
          );
        }),
        n
      );
    },
    ly = function () {
      function t(t, n) {
        e.push((t = r(t, n))), (t[0] *= N_), (t[1] *= N_);
      }
      function n() {
        var t = i.apply(this, arguments),
          n = o.apply(this, arguments) * k_,
          c = u.apply(this, arguments) * k_;
        return (
          (e = []),
          (r = ti(-t[0] * k_, -t[1] * k_, 0).invert),
          ii(a, n, c, 1),
          (t = {
            type: "Polygon",
            coordinates: [e],
          }),
          (e = r = null),
          t
        );
      }
      var e,
        r,
        i = J_([0, 0]),
        o = J_(90),
        u = J_(6),
        a = {
          point: t,
        };
      return (
        (n.center = function (t) {
          return arguments.length
            ? ((i = "function" == typeof t ? t : J_([+t[0], +t[1]])), n)
            : i;
        }),
        (n.radius = function (t) {
          return arguments.length
            ? ((o = "function" == typeof t ? t : J_(+t)), n)
            : o;
        }),
        (n.precision = function (t) {
          return arguments.length
            ? ((u = "function" == typeof t ? t : J_(+t)), n)
            : u;
        }),
        n
      );
    },
    hy = function () {
      var t,
        n = [];
      return {
        point: function (n, e) {
          t.push([n, e]);
        },
        lineStart: function () {
          n.push((t = []));
        },
        lineEnd: gr,
        rejoin: function () {
          n.length > 1 && n.push(n.pop().concat(n.shift()));
        },
        result: function () {
          var e = n;
          return (n = []), (t = null), e;
        },
      };
    },
    py = function (t, n, e, r, i, o) {
      var u,
        a = t[0],
        c = t[1],
        s = n[0],
        f = n[1],
        l = 0,
        h = 1,
        p = s - a,
        d = f - c;
      if (((u = e - a), p || !(u > 0))) {
        if (((u /= p), p < 0)) {
          if (u < l) return;
          u < h && (h = u);
        } else if (p > 0) {
          if (u > h) return;
          u > l && (l = u);
        }
        if (((u = i - a), p || !(u < 0))) {
          if (((u /= p), p < 0)) {
            if (u > h) return;
            u > l && (l = u);
          } else if (p > 0) {
            if (u < l) return;
            u < h && (h = u);
          }
          if (((u = r - c), d || !(u > 0))) {
            if (((u /= d), d < 0)) {
              if (u < l) return;
              u < h && (h = u);
            } else if (d > 0) {
              if (u > h) return;
              u > l && (l = u);
            }
            if (((u = o - c), d || !(u < 0))) {
              if (((u /= d), d < 0)) {
                if (u > h) return;
                u > l && (l = u);
              } else if (d > 0) {
                if (u < l) return;
                u < h && (h = u);
              }
              return (
                l > 0 && ((t[0] = a + l * p), (t[1] = c + l * d)),
                h < 1 && ((n[0] = a + h * p), (n[1] = c + h * d)),
                !0
              );
            }
          }
        }
      }
    },
    dy = function (t, n) {
      return S_(t[0] - n[0]) < m_ && S_(t[1] - n[1]) < m_;
    },
    vy = function (t, n, e, r, i) {
      var o,
        u,
        a = [],
        c = [];
      if (
        (t.forEach(function (t) {
          if (!((n = t.length - 1) <= 0)) {
            var n,
              e,
              r = t[0],
              u = t[n];
            if (dy(r, u)) {
              for (i.lineStart(), o = 0; o < n; ++o)
                i.point((r = t[o])[0], r[1]);
              return void i.lineEnd();
            }
            a.push((e = new ui(r, t, null, !0))),
              c.push((e.o = new ui(r, null, e, !1))),
              a.push((e = new ui(u, t, null, !1))),
              c.push((e.o = new ui(u, null, e, !0)));
          }
        }),
        a.length)
      ) {
        for (c.sort(n), ai(a), ai(c), o = 0, u = c.length; o < u; ++o)
          c[o].e = e = !e;
        for (var s, f, l = a[0]; ; ) {
          for (var h = l, p = !0; h.v; ) if ((h = h.n) === l) return;
          (s = h.z), i.lineStart();
          do {
            if (((h.v = h.o.v = !0), h.e)) {
              if (p)
                for (o = 0, u = s.length; o < u; ++o)
                  i.point((f = s[o])[0], f[1]);
              else r(h.x, h.n.x, 1, i);
              h = h.n;
            } else {
              if (p)
                for (s = h.p.z, o = s.length - 1; o >= 0; --o)
                  i.point((f = s[o])[0], f[1]);
              else r(h.x, h.p.x, -1, i);
              h = h.p;
            }
            (h = h.o), (s = h.z), (p = !p);
          } while (!h.v);
          i.lineEnd();
        }
      }
    },
    _y = 1e9,
    yy = -_y,
    gy = function () {
      var t,
        n,
        e,
        r = 0,
        i = 0,
        o = 960,
        u = 500;
      return (e = {
        stream: function (e) {
          return t && n === e ? t : (t = ci(r, i, o, u)((n = e)));
        },
        extent: function (a) {
          return arguments.length
            ? ((r = +a[0][0]),
              (i = +a[0][1]),
              (o = +a[1][0]),
              (u = +a[1][1]),
              (t = n = null),
              e)
            : [
                [r, i],
                [o, u],
              ];
        },
      });
    },
    my = Iv(),
    xy = {
      sphere: gr,
      point: gr,
      lineStart: si,
      lineEnd: gr,
      polygonStart: gr,
      polygonEnd: gr,
    },
    by = function (t) {
      return my.reset(), Y_(t, xy), +my;
    },
    wy = [null, null],
    My = {
      type: "LineString",
      coordinates: wy,
    },
    Ty = function (t, n) {
      return (wy[0] = t), (wy[1] = n), by(My);
    },
    Ny = function (t, n) {
      var e = t[0] * k_,
        r = t[1] * k_,
        i = n[0] * k_,
        o = n[1] * k_,
        u = C_(r),
        a = L_(r),
        c = C_(o),
        s = L_(o),
        f = u * C_(e),
        l = u * L_(e),
        h = c * C_(i),
        p = c * L_(i),
        d = 2 * _r(D_(yr(o - r) + u * c * yr(i - e))),
        v = L_(d),
        _ = d
          ? function (t) {
              var n = L_((t *= d)) / v,
                e = L_(d - t) / v,
                r = e * f + n * h,
                i = e * l + n * p,
                o = e * a + n * s;
              return [A_(i, r) * N_, A_(o, D_(r * r + i * i)) * N_];
            }
          : function () {
              return [e * N_, r * N_];
            };
      return (_.distance = d), _;
    },
    ky = function (t) {
      return t;
    },
    Sy = Iv(),
    Ey = Iv(),
    Ay = {
      point: gr,
      lineStart: gr,
      lineEnd: gr,
      polygonStart: function () {
        (Ay.lineStart = yi), (Ay.lineEnd = xi);
      },
      polygonEnd: function () {
        (Ay.lineStart = Ay.lineEnd = Ay.point = gr), Sy.add(S_(Ey)), Ey.reset();
      },
      result: function () {
        var t = Sy / 2;
        return Sy.reset(), t;
      },
    },
    Cy = 1 / 0,
    zy = Cy,
    Py = -Cy,
    Ry = Py,
    qy = {
      point: bi,
      lineStart: gr,
      lineEnd: gr,
      polygonStart: gr,
      polygonEnd: gr,
      result: function () {
        var t = [
          [Cy, zy],
          [Py, Ry],
        ];
        return (Py = Ry = -(zy = Cy = 1 / 0)), t;
      },
    },
    Ly = 0,
    Uy = 0,
    Dy = 0,
    Oy = 0,
    Fy = 0,
    Iy = 0,
    Yy = 0,
    By = 0,
    jy = 0,
    Hy = {
      point: wi,
      lineStart: Mi,
      lineEnd: ki,
      polygonStart: function () {
        (Hy.lineStart = Si), (Hy.lineEnd = Ei);
      },
      polygonEnd: function () {
        (Hy.point = wi), (Hy.lineStart = Mi), (Hy.lineEnd = ki);
      },
      result: function () {
        var t = jy
          ? [Yy / jy, By / jy]
          : Iy
          ? [Oy / Iy, Fy / Iy]
          : Dy
          ? [Ly / Dy, Uy / Dy]
          : [NaN, NaN];
        return (Ly = Uy = Dy = Oy = Fy = Iy = Yy = By = jy = 0), t;
      },
    };
  zi.prototype = {
    _radius: 4.5,
    pointRadius: function (t) {
      return (this._radius = t), this;
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      0 === this._line && this._context.closePath(), (this._point = NaN);
    },
    point: function (t, n) {
      switch (this._point) {
        case 0:
          this._context.moveTo(t, n), (this._point = 1);
          break;
        case 1:
          this._context.lineTo(t, n);
          break;
        default:
          this._context.moveTo(t + this._radius, n),
            this._context.arc(t, n, this._radius, 0, T_);
      }
    },
    result: gr,
  };
  var Xy,
    Vy,
    Wy,
    $y,
    Zy,
    Gy = Iv(),
    Jy = {
      point: gr,
      lineStart: function () {
        Jy.point = Pi;
      },
      lineEnd: function () {
        Xy && Ri(Vy, Wy), (Jy.point = gr);
      },
      polygonStart: function () {
        Xy = !0;
      },
      polygonEnd: function () {
        Xy = null;
      },
      result: function () {
        var t = +Gy;
        return Gy.reset(), t;
      },
    };
  qi.prototype = {
    _circle: Li(4.5),
    pointRadius: function (t) {
      return (this._circle = Li(t)), this;
    },
    polygonStart: function () {
      this._line = 0;
    },
    polygonEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      0 === this._line && this._string.push("Z"), (this._point = NaN);
    },
    point: function (t, n) {
      switch (this._point) {
        case 0:
          this._string.push("M", t, ",", n), (this._point = 1);
          break;
        case 1:
          this._string.push("L", t, ",", n);
          break;
        default:
          this._string.push("M", t, ",", n, this._circle);
      }
    },
    result: function () {
      if (this._string.length) {
        var t = this._string.join("");
        return (this._string = []), t;
      }
    },
  };
  var Qy = function (t, n) {
      function e(t) {
        return (
          t &&
            ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)),
            Y_(t, r(i))),
          i.result()
        );
      }
      var r,
        i,
        o = 4.5;
      return (
        (e.area = function (t) {
          return Y_(t, r(Ay)), Ay.result();
        }),
        (e.measure = function (t) {
          return Y_(t, r(Jy)), Jy.result();
        }),
        (e.bounds = function (t) {
          return Y_(t, r(qy)), qy.result();
        }),
        (e.centroid = function (t) {
          return Y_(t, r(Hy)), Hy.result();
        }),
        (e.projection = function (n) {
          return arguments.length
            ? ((r = null == n ? ((t = null), ky) : (t = n).stream), e)
            : t;
        }),
        (e.context = function (t) {
          return arguments.length
            ? ((i = null == t ? ((n = null), new qi()) : new zi((n = t))),
              "function" != typeof o && i.pointRadius(o),
              e)
            : n;
        }),
        (e.pointRadius = function (t) {
          return arguments.length
            ? ((o = "function" == typeof t ? t : (i.pointRadius(+t), +t)), e)
            : o;
        }),
        e.projection(t).context(n)
      );
    },
    Ky = Iv(),
    tg = function (t, n) {
      var e = n[0],
        r = n[1],
        i = [L_(e), -C_(e), 0],
        o = 0,
        u = 0;
      Ky.reset();
      for (var a = 0, c = t.length; a < c; ++a)
        if ((f = (s = t[a]).length))
          for (
            var s,
              f,
              l = s[f - 1],
              h = l[0],
              p = l[1] / 2 + M_,
              d = L_(p),
              v = C_(p),
              _ = 0;
            _ < f;
            ++_, h = g, d = x, v = b, l = y
          ) {
            var y = s[_],
              g = y[0],
              m = y[1] / 2 + M_,
              x = L_(m),
              b = C_(m),
              w = g - h,
              M = w >= 0 ? 1 : -1,
              T = M * w,
              N = T > b_,
              k = d * x;
            if (
              (Ky.add(A_(k * M * L_(T), v * b + k * C_(T))),
              (o += N ? w + M * T_ : w),
              N ^ (h >= e) ^ (g >= e))
            ) {
              var S = Ar(Sr(l), Sr(y));
              Pr(S);
              var E = Ar(i, S);
              Pr(E);
              var A = (N ^ (w >= 0) ? -1 : 1) * _r(E[2]);
              (r > A || (r === A && (S[0] || S[1]))) &&
                (u += N ^ (w >= 0) ? 1 : -1);
            }
          }
      return (o < -m_ || (o < m_ && Ky < -m_)) ^ (1 & u);
    },
    ng = function (t, n, e, r) {
      return function (i, o) {
        function u(n, e) {
          var r = i(n, e);
          t((n = r[0]), (e = r[1])) && o.point(n, e);
        }
        function a(t, n) {
          var e = i(t, n);
          _.point(e[0], e[1]);
        }
        function c() {
          (b.point = a), _.lineStart();
        }
        function s() {
          (b.point = u), _.lineEnd();
        }
        function f(t, n) {
          v.push([t, n]);
          var e = i(t, n);
          m.point(e[0], e[1]);
        }
        function l() {
          m.lineStart(), (v = []);
        }
        function h() {
          f(v[0][0], v[0][1]), m.lineEnd();
          var t,
            n,
            e,
            r,
            i = m.clean(),
            u = g.result(),
            a = u.length;
          if ((v.pop(), p.push(v), (v = null), a))
            if (1 & i) {
              if (((e = u[0]), (n = e.length - 1) > 0)) {
                for (
                  x || (o.polygonStart(), (x = !0)), o.lineStart(), t = 0;
                  t < n;
                  ++t
                )
                  o.point((r = e[t])[0], r[1]);
                o.lineEnd();
              }
            } else
              a > 1 && 2 & i && u.push(u.pop().concat(u.shift())),
                d.push(u.filter(Ui));
        }
        var p,
          d,
          v,
          _ = n(o),
          y = i.invert(r[0], r[1]),
          g = hy(),
          m = n(g),
          x = !1,
          b = {
            point: u,
            lineStart: c,
            lineEnd: s,
            polygonStart: function () {
              (b.point = f),
                (b.lineStart = l),
                (b.lineEnd = h),
                (d = []),
                (p = []);
            },
            polygonEnd: function () {
              (b.point = u), (b.lineStart = c), (b.lineEnd = s), (d = nf(d));
              var t = tg(p, y);
              d.length
                ? (x || (o.polygonStart(), (x = !0)), vy(d, Di, t, e, o))
                : t &&
                  (x || (o.polygonStart(), (x = !0)),
                  o.lineStart(),
                  e(null, null, 1, o),
                  o.lineEnd()),
                x && (o.polygonEnd(), (x = !1)),
                (d = p = null);
            },
            sphere: function () {
              o.polygonStart(),
                o.lineStart(),
                e(null, null, 1, o),
                o.lineEnd(),
                o.polygonEnd();
            },
          };
        return b;
      };
    },
    eg = ng(
      function () {
        return !0;
      },
      Oi,
      Ii,
      [-b_, -w_]
    ),
    rg = function (t, n) {
      function e(e, r, i, o) {
        ii(o, t, n, i, e, r);
      }
      function r(t, n) {
        return C_(t) * C_(n) > a;
      }
      function i(t) {
        var n, e, i, a, f;
        return {
          lineStart: function () {
            (a = i = !1), (f = 1);
          },
          point: function (l, h) {
            var p,
              d = [l, h],
              v = r(l, h),
              _ = c ? (v ? 0 : u(l, h)) : v ? u(l + (l < 0 ? b_ : -b_), h) : 0;
            if (
              (!n && (a = i = v) && t.lineStart(),
              v !== i &&
                ((p = o(n, d)),
                (dy(n, p) || dy(d, p)) &&
                  ((d[0] += m_), (d[1] += m_), (v = r(d[0], d[1])))),
              v !== i)
            )
              (f = 0),
                v
                  ? (t.lineStart(), (p = o(d, n)), t.point(p[0], p[1]))
                  : ((p = o(n, d)), t.point(p[0], p[1]), t.lineEnd()),
                (n = p);
            else if (s && n && c ^ v) {
              var y;
              _ & e ||
                !(y = o(d, n, !0)) ||
                ((f = 0),
                c
                  ? (t.lineStart(),
                    t.point(y[0][0], y[0][1]),
                    t.point(y[1][0], y[1][1]),
                    t.lineEnd())
                  : (t.point(y[1][0], y[1][1]),
                    t.lineEnd(),
                    t.lineStart(),
                    t.point(y[0][0], y[0][1])));
            }
            !v || (n && dy(n, d)) || t.point(d[0], d[1]),
              (n = d),
              (i = v),
              (e = _);
          },
          lineEnd: function () {
            i && t.lineEnd(), (n = null);
          },
          clean: function () {
            return f | ((a && i) << 1);
          },
        };
      }
      function o(t, n, e) {
        var r = Sr(t),
          i = Sr(n),
          o = [1, 0, 0],
          u = Ar(r, i),
          c = Er(u, u),
          s = u[0],
          f = c - s * s;
        if (!f) return !e && t;
        var l = (a * c) / f,
          h = (-a * s) / f,
          p = Ar(o, u),
          d = zr(o, l),
          v = zr(u, h);
        Cr(d, v);
        var _ = p,
          y = Er(d, _),
          g = Er(_, _),
          m = y * y - g * (Er(d, d) - 1);
        if (!(m < 0)) {
          var x = D_(m),
            b = zr(_, (-y - x) / g);
          if ((Cr(b, d), (b = kr(b)), !e)) return b;
          var w,
            M = t[0],
            T = n[0],
            N = t[1],
            k = n[1];
          T < M && ((w = M), (M = T), (T = w));
          var S = T - M,
            E = S_(S - b_) < m_,
            A = E || S < m_;
          if (
            (!E && k < N && ((w = N), (N = k), (k = w)),
            A
              ? E
                ? (N + k > 0) ^ (b[1] < (S_(b[0] - M) < m_ ? N : k))
                : N <= b[1] && b[1] <= k
              : (S > b_) ^ (M <= b[0] && b[0] <= T))
          ) {
            var C = zr(_, (-y + x) / g);
            return Cr(C, d), [b, kr(C)];
          }
        }
      }
      function u(n, e) {
        var r = c ? t : b_ - t,
          i = 0;
        return (
          n < -r ? (i |= 1) : n > r && (i |= 2),
          e < -r ? (i |= 4) : e > r && (i |= 8),
          i
        );
      }
      var a = C_(t),
        c = a > 0,
        s = S_(a) > m_;
      return ng(r, i, e, c ? [0, -t] : [-b_, t - b_]);
    },
    ig = function (t) {
      return {
        stream: Yi(t),
      };
    };
  Bi.prototype = {
    constructor: Bi,
    point: function (t, n) {
      this.stream.point(t, n);
    },
    sphere: function () {
      this.stream.sphere();
    },
    lineStart: function () {
      this.stream.lineStart();
    },
    lineEnd: function () {
      this.stream.lineEnd();
    },
    polygonStart: function () {
      this.stream.polygonStart();
    },
    polygonEnd: function () {
      this.stream.polygonEnd();
    },
  };
  var og = 16,
    ug = C_(30 * k_),
    ag = function (t, n) {
      return +n ? Vi(t, n) : Xi(t);
    },
    cg = Yi({
      point: function (t, n) {
        this.stream.point(t * k_, n * k_);
      },
    }),
    sg = function () {
      return Zi(Ji).scale(155.424).center([0, 33.6442]);
    },
    fg = function () {
      return sg()
        .parallels([29.5, 45.5])
        .scale(1070)
        .translate([480, 250])
        .rotate([96, 0])
        .center([-0.6, 38.7]);
    },
    lg = function () {
      function t(t) {
        var n = t[0],
          e = t[1];
        return (
          (a = null),
          i.point(n, e),
          a || (o.point(n, e), a) || (u.point(n, e), a)
        );
      }
      function n() {
        return (e = r = null), t;
      }
      var e,
        r,
        i,
        o,
        u,
        a,
        c = fg(),
        s = sg().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
        f = sg().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
        l = {
          point: function (t, n) {
            a = [t, n];
          },
        };
      return (
        (t.invert = function (t) {
          var n = c.scale(),
            e = c.translate(),
            r = (t[0] - e[0]) / n,
            i = (t[1] - e[1]) / n;
          return (
            i >= 0.12 && i < 0.234 && r >= -0.425 && r < -0.214
              ? s
              : i >= 0.166 && i < 0.234 && r >= -0.214 && r < -0.115
              ? f
              : c
          ).invert(t);
        }),
        (t.stream = function (t) {
          return e && r === t
            ? e
            : (e = Qi([c.stream((r = t)), s.stream(t), f.stream(t)]));
        }),
        (t.precision = function (t) {
          return arguments.length
            ? (c.precision(t), s.precision(t), f.precision(t), n())
            : c.precision();
        }),
        (t.scale = function (n) {
          return arguments.length
            ? (c.scale(n),
              s.scale(0.35 * n),
              f.scale(n),
              t.translate(c.translate()))
            : c.scale();
        }),
        (t.translate = function (t) {
          if (!arguments.length) return c.translate();
          var e = c.scale(),
            r = +t[0],
            a = +t[1];
          return (
            (i = c
              .translate(t)
              .clipExtent([
                [r - 0.455 * e, a - 0.238 * e],
                [r + 0.455 * e, a + 0.238 * e],
              ])
              .stream(l)),
            (o = s
              .translate([r - 0.307 * e, a + 0.201 * e])
              .clipExtent([
                [r - 0.425 * e + m_, a + 0.12 * e + m_],
                [r - 0.214 * e - m_, a + 0.234 * e - m_],
              ])
              .stream(l)),
            (u = f
              .translate([r - 0.205 * e, a + 0.212 * e])
              .clipExtent([
                [r - 0.214 * e + m_, a + 0.166 * e + m_],
                [r - 0.115 * e - m_, a + 0.234 * e - m_],
              ])
              .stream(l)),
            n()
          );
        }),
        (t.fitExtent = function (n, e) {
          return ji(t, n, e);
        }),
        (t.fitSize = function (n, e) {
          return Hi(t, n, e);
        }),
        t.scale(1070)
      );
    },
    hg = Ki(function (t) {
      return D_(2 / (1 + t));
    });
  hg.invert = to(function (t) {
    return 2 * _r(t / 2);
  });
  var pg = function () {
      return Wi(hg).scale(124.75).clipAngle(179.999);
    },
    dg = Ki(function (t) {
      return (t = vr(t)) && t / L_(t);
    });
  dg.invert = to(function (t) {
    return t;
  });
  var vg = function () {
    return Wi(dg).scale(79.4188).clipAngle(179.999);
  };
  no.invert = function (t, n) {
    return [t, 2 * E_(P_(n)) - w_];
  };
  var _g = function () {
      return eo(no).scale(961 / T_);
    },
    yg = function () {
      return Zi(io).scale(109.5).parallels([30, 30]);
    };
  oo.invert = oo;
  var gg = function () {
      return Wi(oo).scale(152.63);
    },
    mg = function () {
      return Zi(uo).scale(131.154).center([0, 13.9389]);
    };
  ao.invert = to(E_);
  var xg = function () {
      return Wi(ao).scale(144.049).clipAngle(60);
    },
    bg = function () {
      function t() {
        return (i = o = null), u;
      }
      var n,
        e,
        r,
        i,
        o,
        u,
        a = 1,
        c = 0,
        s = 0,
        f = 1,
        l = 1,
        h = ky,
        p = null,
        d = ky;
      return (u = {
        stream: function (t) {
          return i && o === t ? i : (i = h(d((o = t))));
        },
        clipExtent: function (i) {
          return arguments.length
            ? ((d =
                null == i
                  ? ((p = n = e = r = null), ky)
                  : ci(
                      (p = +i[0][0]),
                      (n = +i[0][1]),
                      (e = +i[1][0]),
                      (r = +i[1][1])
                    )),
              t())
            : null == p
            ? null
            : [
                [p, n],
                [e, r],
              ];
        },
        scale: function (n) {
          return arguments.length
            ? ((h = co((a = +n) * f, a * l, c, s)), t())
            : a;
        },
        translate: function (n) {
          return arguments.length
            ? ((h = co(a * f, a * l, (c = +n[0]), (s = +n[1]))), t())
            : [c, s];
        },
        reflectX: function (n) {
          return arguments.length
            ? ((h = co(a * (f = n ? -1 : 1), a * l, c, s)), t())
            : f < 0;
        },
        reflectY: function (n) {
          return arguments.length
            ? ((h = co(a * f, a * (l = n ? -1 : 1), c, s)), t())
            : l < 0;
        },
        fitExtent: function (t, n) {
          return ji(u, t, n);
        },
        fitSize: function (t, n) {
          return Hi(u, t, n);
        },
      });
    };
  so.invert = to(_r);
  var wg = function () {
    return Wi(so)
      .scale(249.5)
      .clipAngle(90 + m_);
  };
  fo.invert = to(function (t) {
    return 2 * E_(t);
  });
  var Mg = function () {
    return Wi(fo).scale(250).clipAngle(142);
  };
  lo.invert = function (t, n) {
    return [-n, 2 * E_(P_(t)) - w_];
  };
  var Tg = function () {
      var t = eo(lo),
        n = t.center,
        e = t.rotate;
      return (
        (t.center = function (t) {
          return arguments.length
            ? n([-t[1], t[0]])
            : ((t = n()), [t[1], -t[0]]);
        }),
        (t.rotate = function (t) {
          return arguments.length
            ? e([t[0], t[1], t.length > 2 ? t[2] + 90 : 90])
            : ((t = e()), [t[0], t[1], t[2] - 90]);
        }),
        e([0, 0, 90]).scale(159.155)
      );
    },
    Ng = function () {
      function t(t) {
        var o,
          u = 0;
        t.eachAfter(function (t) {
          var e = t.children;
          e
            ? ((t.x = po(e)), (t.y = _o(e)))
            : ((t.x = o ? (u += n(t, o)) : 0), (t.y = 0), (o = t));
        });
        var a = go(t),
          c = mo(t),
          s = a.x - n(a, c) / 2,
          f = c.x + n(c, a) / 2;
        return t.eachAfter(
          i
            ? function (n) {
                (n.x = (n.x - t.x) * e), (n.y = (t.y - n.y) * r);
              }
            : function (n) {
                (n.x = ((n.x - s) / (f - s)) * e),
                  (n.y = (1 - (t.y ? n.y / t.y : 1)) * r);
              }
        );
      }
      var n = ho,
        e = 1,
        r = 1,
        i = !1;
      return (
        (t.separation = function (e) {
          return arguments.length ? ((n = e), t) : n;
        }),
        (t.size = function (n) {
          return arguments.length
            ? ((i = !1), (e = +n[0]), (r = +n[1]), t)
            : i
            ? null
            : [e, r];
        }),
        (t.nodeSize = function (n) {
          return arguments.length
            ? ((i = !0), (e = +n[0]), (r = +n[1]), t)
            : i
            ? [e, r]
            : null;
        }),
        t
      );
    },
    kg = function () {
      return this.eachAfter(xo);
    },
    Sg = function (t) {
      var n,
        e,
        r,
        i,
        o = this,
        u = [o];
      do
        for (n = u.reverse(), u = []; (o = n.pop()); )
          if ((t(o), (e = o.children)))
            for (r = 0, i = e.length; r < i; ++r) u.push(e[r]);
      while (u.length);
      return this;
    },
    Eg = function (t) {
      for (var n, e, r = this, i = [r]; (r = i.pop()); )
        if ((t(r), (n = r.children)))
          for (e = n.length - 1; e >= 0; --e) i.push(n[e]);
      return this;
    },
    Ag = function (t) {
      for (var n, e, r, i = this, o = [i], u = []; (i = o.pop()); )
        if ((u.push(i), (n = i.children)))
          for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
      for (; (i = u.pop()); ) t(i);
      return this;
    },
    Cg = function (t) {
      return this.eachAfter(function (n) {
        for (
          var e = +t(n.data) || 0, r = n.children, i = r && r.length;
          --i >= 0;

        )
          e += r[i].value;
        n.value = e;
      });
    },
    zg = function (t) {
      return this.eachBefore(function (n) {
        n.children && n.children.sort(t);
      });
    },
    Pg = function (t) {
      for (var n = this, e = bo(n, t), r = [n]; n !== e; )
        (n = n.parent), r.push(n);
      for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
      return r;
    },
    Rg = function () {
      for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
      return n;
    },
    qg = function () {
      var t = [];
      return (
        this.each(function (n) {
          t.push(n);
        }),
        t
      );
    },
    Lg = function () {
      var t = [];
      return (
        this.eachBefore(function (n) {
          n.children || t.push(n);
        }),
        t
      );
    },
    Ug = function () {
      var t = this,
        n = [];
      return (
        t.each(function (e) {
          e !== t &&
            n.push({
              source: e.parent,
              target: e,
            });
        }),
        n
      );
    };
  So.prototype = wo.prototype = {
    constructor: So,
    count: kg,
    each: Sg,
    eachAfter: Ag,
    eachBefore: Eg,
    sum: Cg,
    sort: zg,
    path: Pg,
    ancestors: Rg,
    descendants: qg,
    leaves: Lg,
    links: Ug,
    copy: Mo,
  };
  var Dg = function (t) {
      for (var n, e = (t = t.slice()).length, r = null, i = r; e; ) {
        var o = new Eo(t[e - 1]);
        (i = i ? (i.next = o) : (r = o)), (t[n] = t[--e]);
      }
      return {
        head: r,
        tail: i,
      };
    },
    Og = function (t) {
      return Co(Dg(t), []);
    },
    Fg = function (t) {
      return Fo(t), t;
    },
    Ig = function (t) {
      return function () {
        return t;
      };
    },
    Yg = function () {
      function t(t) {
        return (
          (t.x = e / 2),
          (t.y = r / 2),
          n
            ? t.eachBefore(Ho(n)).eachAfter(Xo(i, 0.5)).eachBefore(Vo(1))
            : t
                .eachBefore(Ho(jo))
                .eachAfter(Xo(Bo, 1))
                .eachAfter(Xo(i, t.r / Math.min(e, r)))
                .eachBefore(Vo(Math.min(e, r) / (2 * t.r))),
          t
        );
      }
      var n = null,
        e = 1,
        r = 1,
        i = Bo;
      return (
        (t.radius = function (e) {
          return arguments.length ? ((n = Io(e)), t) : n;
        }),
        (t.size = function (n) {
          return arguments.length ? ((e = +n[0]), (r = +n[1]), t) : [e, r];
        }),
        (t.padding = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : Ig(+n)), t)
            : i;
        }),
        t
      );
    },
    Bg = function (t) {
      (t.x0 = Math.round(t.x0)),
        (t.y0 = Math.round(t.y0)),
        (t.x1 = Math.round(t.x1)),
        (t.y1 = Math.round(t.y1));
    },
    jg = function (t, n, e, r, i) {
      for (
        var o,
          u = t.children,
          a = -1,
          c = u.length,
          s = t.value && (r - n) / t.value;
        ++a < c;

      )
        (o = u[a]),
          (o.y0 = e),
          (o.y1 = i),
          (o.x0 = n),
          (o.x1 = n += o.value * s);
    },
    Hg = function () {
      function t(t) {
        var u = t.height + 1;
        return (
          (t.x0 = t.y0 = i),
          (t.x1 = e),
          (t.y1 = r / u),
          t.eachBefore(n(r, u)),
          o && t.eachBefore(Bg),
          t
        );
      }
      function n(t, n) {
        return function (e) {
          e.children &&
            jg(e, e.x0, (t * (e.depth + 1)) / n, e.x1, (t * (e.depth + 2)) / n);
          var r = e.x0,
            o = e.y0,
            u = e.x1 - i,
            a = e.y1 - i;
          u < r && (r = u = (r + u) / 2),
            a < o && (o = a = (o + a) / 2),
            (e.x0 = r),
            (e.y0 = o),
            (e.x1 = u),
            (e.y1 = a);
        };
      }
      var e = 1,
        r = 1,
        i = 0,
        o = !1;
      return (
        (t.round = function (n) {
          return arguments.length ? ((o = !!n), t) : o;
        }),
        (t.size = function (n) {
          return arguments.length ? ((e = +n[0]), (r = +n[1]), t) : [e, r];
        }),
        (t.padding = function (n) {
          return arguments.length ? ((i = +n), t) : i;
        }),
        t
      );
    },
    Xg = "$",
    Vg = {
      depth: -1,
    },
    Wg = {},
    $g = function () {
      function t(t) {
        var r,
          i,
          o,
          u,
          a,
          c,
          s,
          f = t.length,
          l = new Array(f),
          h = {};
        for (i = 0; i < f; ++i)
          (r = t[i]),
            (a = l[i] = new So(r)),
            null != (c = n(r, i, t)) &&
              (c += "") &&
              ((s = Xg + (a.id = c)), (h[s] = s in h ? Wg : a));
        for (i = 0; i < f; ++i)
          if (((a = l[i]), (c = e(t[i], i, t)), null != c && (c += ""))) {
            if (((u = h[Xg + c]), !u)) throw new Error("missing: " + c);
            if (u === Wg) throw new Error("ambiguous: " + c);
            u.children ? u.children.push(a) : (u.children = [a]),
              (a.parent = u);
          } else {
            if (o) throw new Error("multiple roots");
            o = a;
          }
        if (!o) throw new Error("no root");
        if (
          ((o.parent = Vg),
          o
            .eachBefore(function (t) {
              (t.depth = t.parent.depth + 1), --f;
            })
            .eachBefore(ko),
          (o.parent = null),
          f > 0)
        )
          throw new Error("cycle");
        return o;
      }
      var n = Wo,
        e = $o;
      return (
        (t.id = function (e) {
          return arguments.length ? ((n = Yo(e)), t) : n;
        }),
        (t.parentId = function (n) {
          return arguments.length ? ((e = Yo(n)), t) : e;
        }),
        t
      );
    };
  nu.prototype = Object.create(So.prototype);
  var Zg = function () {
      function t(t) {
        var r = eu(t);
        if ((r.eachAfter(n), (r.parent.m = -r.z), r.eachBefore(e), c))
          t.eachBefore(i);
        else {
          var s = t,
            f = t,
            l = t;
          t.eachBefore(function (t) {
            t.x < s.x && (s = t),
              t.x > f.x && (f = t),
              t.depth > l.depth && (l = t);
          });
          var h = s === f ? 1 : o(s, f) / 2,
            p = h - s.x,
            d = u / (f.x + h + p),
            v = a / (l.depth || 1);
          t.eachBefore(function (t) {
            (t.x = (t.x + p) * d), (t.y = t.depth * v);
          });
        }
        return t;
      }
      function n(t) {
        var n = t.children,
          e = t.parent.children,
          i = t.i ? e[t.i - 1] : null;
        if (n) {
          Ko(t);
          var u = (n[0].z + n[n.length - 1].z) / 2;
          i ? ((t.z = i.z + o(t._, i._)), (t.m = t.z - u)) : (t.z = u);
        } else i && (t.z = i.z + o(t._, i._));
        t.parent.A = r(t, i, t.parent.A || e[0]);
      }
      function e(t) {
        (t._.x = t.z + t.parent.m), (t.m += t.parent.m);
      }
      function r(t, n, e) {
        if (n) {
          for (
            var r,
              i = t,
              u = t,
              a = n,
              c = i.parent.children[0],
              s = i.m,
              f = u.m,
              l = a.m,
              h = c.m;
            (a = Jo(a)), (i = Go(i)), a && i;

          )
            (c = Go(c)),
              (u = Jo(u)),
              (u.a = t),
              (r = a.z + l - i.z - s + o(a._, i._)),
              r > 0 && (Qo(tu(a, t, e), t, r), (s += r), (f += r)),
              (l += a.m),
              (s += i.m),
              (h += c.m),
              (f += u.m);
          a && !Jo(u) && ((u.t = a), (u.m += l - f)),
            i && !Go(c) && ((c.t = i), (c.m += s - h), (e = t));
        }
        return e;
      }
      function i(t) {
        (t.x *= u), (t.y = t.depth * a);
      }
      var o = Zo,
        u = 1,
        a = 1,
        c = null;
      return (
        (t.separation = function (n) {
          return arguments.length ? ((o = n), t) : o;
        }),
        (t.size = function (n) {
          return arguments.length
            ? ((c = !1), (u = +n[0]), (a = +n[1]), t)
            : c
            ? null
            : [u, a];
        }),
        (t.nodeSize = function (n) {
          return arguments.length
            ? ((c = !0), (u = +n[0]), (a = +n[1]), t)
            : c
            ? [u, a]
            : null;
        }),
        t
      );
    },
    Gg = function (t, n, e, r, i) {
      for (
        var o,
          u = t.children,
          a = -1,
          c = u.length,
          s = t.value && (i - e) / t.value;
        ++a < c;

      )
        (o = u[a]),
          (o.x0 = n),
          (o.x1 = r),
          (o.y0 = e),
          (o.y1 = e += o.value * s);
    },
    Jg = (1 + Math.sqrt(5)) / 2,
    Qg = (function t(n) {
      function e(t, e, r, i, o) {
        ru(n, t, e, r, i, o);
      }
      return (
        (e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1);
        }),
        e
      );
    })(Jg),
    Kg = function () {
      function t(t) {
        return (
          (t.x0 = t.y0 = 0),
          (t.x1 = i),
          (t.y1 = o),
          t.eachBefore(n),
          (u = [0]),
          r && t.eachBefore(Bg),
          t
        );
      }
      function n(t) {
        var n = u[t.depth],
          r = t.x0 + n,
          i = t.y0 + n,
          o = t.x1 - n,
          h = t.y1 - n;
        o < r && (r = o = (r + o) / 2),
          h < i && (i = h = (i + h) / 2),
          (t.x0 = r),
          (t.y0 = i),
          (t.x1 = o),
          (t.y1 = h),
          t.children &&
            ((n = u[t.depth + 1] = a(t) / 2),
            (r += l(t) - n),
            (i += c(t) - n),
            (o -= s(t) - n),
            (h -= f(t) - n),
            o < r && (r = o = (r + o) / 2),
            h < i && (i = h = (i + h) / 2),
            e(t, r, i, o, h));
      }
      var e = Qg,
        r = !1,
        i = 1,
        o = 1,
        u = [0],
        a = Bo,
        c = Bo,
        s = Bo,
        f = Bo,
        l = Bo;
      return (
        (t.round = function (n) {
          return arguments.length ? ((r = !!n), t) : r;
        }),
        (t.size = function (n) {
          return arguments.length ? ((i = +n[0]), (o = +n[1]), t) : [i, o];
        }),
        (t.tile = function (n) {
          return arguments.length ? ((e = Yo(n)), t) : e;
        }),
        (t.padding = function (n) {
          return arguments.length
            ? t.paddingInner(n).paddingOuter(n)
            : t.paddingInner();
        }),
        (t.paddingInner = function (n) {
          return arguments.length
            ? ((a = "function" == typeof n ? n : Ig(+n)), t)
            : a;
        }),
        (t.paddingOuter = function (n) {
          return arguments.length
            ? t.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n)
            : t.paddingTop();
        }),
        (t.paddingTop = function (n) {
          return arguments.length
            ? ((c = "function" == typeof n ? n : Ig(+n)), t)
            : c;
        }),
        (t.paddingRight = function (n) {
          return arguments.length
            ? ((s = "function" == typeof n ? n : Ig(+n)), t)
            : s;
        }),
        (t.paddingBottom = function (n) {
          return arguments.length
            ? ((f = "function" == typeof n ? n : Ig(+n)), t)
            : f;
        }),
        (t.paddingLeft = function (n) {
          return arguments.length
            ? ((l = "function" == typeof n ? n : Ig(+n)), t)
            : l;
        }),
        t
      );
    },
    tm = function (t, n, e, r, i) {
      function o(t, n, e, r, i, u, a) {
        if (t >= n - 1) {
          var s = c[t];
          return (s.x0 = r), (s.y0 = i), (s.x1 = u), (s.y1 = a), void 0;
        }
        for (var l = f[t], h = e / 2 + l, p = t + 1, d = n - 1; p < d; ) {
          var v = (p + d) >>> 1;
          f[v] < h ? (p = v + 1) : (d = v);
        }
        var _ = f[p] - l,
          y = e - _;
        if (a - i > u - r) {
          var g = (i * y + a * _) / e;
          o(t, p, _, r, i, u, g), o(p, n, y, r, g, u, a);
        } else {
          var m = (r * y + u * _) / e;
          o(t, p, _, r, i, m, a), o(p, n, y, m, i, u, a);
        }
      }
      var u,
        a,
        c = t.children,
        s = c.length,
        f = new Array(s + 1);
      for (f[0] = a = u = 0; u < s; ++u) f[u + 1] = a += c[u].value;
      o(0, s, t.value, n, e, r, i);
    },
    nm = function (t, n, e, r, i) {
      (1 & t.depth ? Gg : jg)(t, n, e, r, i);
    },
    em = (function t(n) {
      function e(t, e, r, i, o) {
        if ((u = t._squarify) && u.ratio === n)
          for (
            var u, a, c, s, f, l = -1, h = u.length, p = t.value;
            ++l < h;

          ) {
            for (
              a = u[l], c = a.children, s = a.value = 0, f = c.length;
              s < f;
              ++s
            )
              a.value += c[s].value;
            a.dice
              ? jg(a, e, r, i, (r += ((o - r) * a.value) / p))
              : Gg(a, e, r, (e += ((i - e) * a.value) / p), o),
              (p -= a.value);
          }
        else (t._squarify = u = ru(n, t, e, r, i, o)), (u.ratio = n);
      }
      return (
        (e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1);
        }),
        e
      );
    })(Jg),
    rm = function (t) {
      for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r; )
        (n = i), (i = t[e]), (o += n[1] * i[0] - n[0] * i[1]);
      return o / 2;
    },
    im = function (t) {
      for (
        var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0;
        ++r < i;

      )
        (n = a),
          (a = t[r]),
          (c += e = n[0] * a[1] - a[0] * n[1]),
          (o += (n[0] + a[0]) * e),
          (u += (n[1] + a[1]) * e);
      return (c *= 3), [o / c, u / c];
    },
    om = function (t, n, e) {
      return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
    },
    um = function (t) {
      if ((e = t.length) < 3) return null;
      var n,
        e,
        r = new Array(e),
        i = new Array(e);
      for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
      for (r.sort(iu), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
      var o = ou(r),
        u = ou(i),
        a = u[0] === o[0],
        c = u[u.length - 1] === o[o.length - 1],
        s = [];
      for (n = o.length - 1; n >= 0; --n) s.push(t[r[o[n]][2]]);
      for (n = +a; n < u.length - c; ++n) s.push(t[r[u[n]][2]]);
      return s;
    },
    am = function (t, n) {
      for (
        var e,
          r,
          i = t.length,
          o = t[i - 1],
          u = n[0],
          a = n[1],
          c = o[0],
          s = o[1],
          f = !1,
          l = 0;
        l < i;
        ++l
      )
        (o = t[l]),
          (e = o[0]),
          (r = o[1]),
          r > a != s > a && u < ((c - e) * (a - r)) / (s - r) + e && (f = !f),
          (c = e),
          (s = r);
      return f;
    },
    cm = function (t) {
      for (
        var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0;
        ++r < i;

      )
        (n = u),
          (e = a),
          (o = t[r]),
          (u = o[0]),
          (a = o[1]),
          (n -= u),
          (e -= a),
          (c += Math.sqrt(n * n + e * e));
      return c;
    },
    sm = [].slice,
    fm = {};
  uu.prototype = hu.prototype = {
    constructor: uu,
    defer: function (t) {
      if ("function" != typeof t || this._call) throw new Error();
      if (null != this._error) return this;
      var n = sm.call(arguments, 1);
      return n.push(t), ++this._waiting, this._tasks.push(n), au(this), this;
    },
    abort: function () {
      return null == this._error && fu(this, new Error("abort")), this;
    },
    await: function (t) {
      if ("function" != typeof t || this._call) throw new Error();
      return (
        (this._call = function (n, e) {
          t.apply(null, [n].concat(e));
        }),
        lu(this),
        this
      );
    },
    awaitAll: function (t) {
      if ("function" != typeof t || this._call) throw new Error();
      return (this._call = t), lu(this), this;
    },
  };
  var lm = function (t, n) {
      return (
        (t = null == t ? 0 : +t),
        (n = null == n ? 1 : +n),
        1 === arguments.length ? ((n = t), (t = 0)) : (n -= t),
        function () {
          return Math.random() * n + t;
        }
      );
    },
    hm = function (t, n) {
      var e, r;
      return (
        (t = null == t ? 0 : +t),
        (n = null == n ? 1 : +n),
        function () {
          var i;
          if (null != e) (i = e), (e = null);
          else
            do
              (e = 2 * Math.random() - 1),
                (i = 2 * Math.random() - 1),
                (r = e * e + i * i);
            while (!r || r > 1);
          return t + n * i * Math.sqrt((-2 * Math.log(r)) / r);
        }
      );
    },
    pm = function () {
      var t = hm.apply(this, arguments);
      return function () {
        return Math.exp(t());
      };
    },
    dm = function (t) {
      return function () {
        for (var n = 0, e = 0; e < t; ++e) n += Math.random();
        return n;
      };
    },
    vm = function (t) {
      var n = dm(t);
      return function () {
        return n() / t;
      };
    },
    _m = function (t) {
      return function () {
        return -Math.log(1 - Math.random()) / t;
      };
    },
    ym = function (t, n) {
      function e(t) {
        var n,
          e = s.status;
        if ((!e && du(s)) || (e >= 200 && e < 300) || 304 === e) {
          if (o)
            try {
              n = o.call(r, s);
            } catch (t) {
              return void a.call("error", r, t);
            }
          else n = s;
          a.call("load", r, n);
        } else a.call("error", r, t);
      }
      var r,
        i,
        o,
        u,
        a = p("beforesend", "progress", "load", "error"),
        c = Ie(),
        s = new XMLHttpRequest(),
        f = null,
        l = null,
        h = 0;
      if (
        ("undefined" == typeof XDomainRequest ||
          "withCredentials" in s ||
          !/^(http(s)?:)?\/\//.test(t) ||
          (s = new XDomainRequest()),
        "onload" in s
          ? (s.onload = s.onerror = s.ontimeout = e)
          : (s.onreadystatechange = function (t) {
              s.readyState > 3 && e(t);
            }),
        (s.onprogress = function (t) {
          a.call("progress", r, t);
        }),
        (r = {
          header: function (t, n) {
            return (
              (t = (t + "").toLowerCase()),
              arguments.length < 2
                ? c.get(t)
                : (null == n ? c.remove(t) : c.set(t, n + ""), r)
            );
          },
          mimeType: function (t) {
            return arguments.length ? ((i = null == t ? null : t + ""), r) : i;
          },
          responseType: function (t) {
            return arguments.length ? ((u = t), r) : u;
          },
          timeout: function (t) {
            return arguments.length ? ((h = +t), r) : h;
          },
          user: function (t) {
            return arguments.length < 1
              ? f
              : ((f = null == t ? null : t + ""), r);
          },
          password: function (t) {
            return arguments.length < 1
              ? l
              : ((l = null == t ? null : t + ""), r);
          },
          response: function (t) {
            return (o = t), r;
          },
          get: function (t, n) {
            return r.send("GET", t, n);
          },
          post: function (t, n) {
            return r.send("POST", t, n);
          },
          send: function (n, e, o) {
            return (
              s.open(n, t, !0, f, l),
              null == i || c.has("accept") || c.set("accept", i + ",*/*"),
              s.setRequestHeader &&
                c.each(function (t, n) {
                  s.setRequestHeader(n, t);
                }),
              null != i && s.overrideMimeType && s.overrideMimeType(i),
              null != u && (s.responseType = u),
              h > 0 && (s.timeout = h),
              null == o && "function" == typeof e && ((o = e), (e = null)),
              null != o && 1 === o.length && (o = pu(o)),
              null != o &&
                r.on("error", o).on("load", function (t) {
                  o(null, t);
                }),
              a.call("beforesend", r, s),
              s.send(null == e ? null : e),
              r
            );
          },
          abort: function () {
            return s.abort(), r;
          },
          on: function () {
            var t = a.on.apply(a, arguments);
            return t === a ? r : t;
          },
        }),
        null != n)
      ) {
        if ("function" != typeof n) throw new Error("invalid callback: " + n);
        return r.get(n);
      }
      return r;
    },
    gm = function (t, n) {
      return function (e, r) {
        var i = ym(e).mimeType(t).response(n);
        if (null != r) {
          if ("function" != typeof r) throw new Error("invalid callback: " + r);
          return i.get(r);
        }
        return i;
      };
    },
    mm = gm("text/html", function (t) {
      return document.createRange().createContextualFragment(t.responseText);
    }),
    xm = gm("application/json", function (t) {
      return JSON.parse(t.responseText);
    }),
    bm = gm("text/plain", function (t) {
      return t.responseText;
    }),
    wm = gm("application/xml", function (t) {
      var n = t.responseXML;
      if (!n) throw new Error("parse error");
      return n;
    }),
    Mm = function (t, n) {
      return function (e, r, i) {
        arguments.length < 3 && ((i = r), (r = null));
        var o = ym(e).mimeType(t);
        return (
          (o.row = function (t) {
            return arguments.length ? o.response(vu(n, (r = t))) : r;
          }),
          o.row(r),
          i ? o.get(i) : o
        );
      };
    },
    Tm = Mm("text/csv", Hd),
    Nm = Mm("text/tab-separated-values", Zd),
    km = Array.prototype,
    Sm = km.map,
    Em = km.slice,
    Am = {
      name: "implicit",
    },
    Cm = function (t) {
      return function () {
        return t;
      };
    },
    zm = function (t) {
      return +t;
    },
    Pm = [0, 1],
    Rm = function (n, r, i) {
      var o,
        u = n[0],
        a = n[n.length - 1],
        c = e(u, a, null == r ? 10 : r);
      switch (((i = Rv(null == i ? ",f" : i)), i.type)) {
        case "s":
          var s = Math.max(Math.abs(u), Math.abs(a));
          return (
            null != i.precision || isNaN((o = Ov(c, s))) || (i.precision = o),
            t.formatPrefix(i, s)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != i.precision ||
            isNaN((o = Fv(c, Math.max(Math.abs(u), Math.abs(a))))) ||
            (i.precision = o - ("e" === i.type));
          break;
        case "f":
        case "%":
          null != i.precision ||
            isNaN((o = Dv(c))) ||
            (i.precision = o - 2 * ("%" === i.type));
      }
      return t.format(i);
    },
    qm = function (t, n) {
      t = t.slice();
      var e,
        r = 0,
        i = t.length - 1,
        o = t[r],
        u = t[i];
      return (
        u < o && ((e = r), (r = i), (i = e), (e = o), (o = u), (u = e)),
        (t[r] = n.floor(o)),
        (t[i] = n.ceil(u)),
        t
      );
    },
    Lm = new Date(),
    Um = new Date(),
    Dm = ju(
      function () {},
      function (t, n) {
        t.setTime(+t + n);
      },
      function (t, n) {
        return n - t;
      }
    );
  Dm.every = function (t) {
    return (
      (t = Math.floor(t)),
      isFinite(t) && t > 0
        ? t > 1
          ? ju(
              function (n) {
                n.setTime(Math.floor(n / t) * t);
              },
              function (n, e) {
                n.setTime(+n + e * t);
              },
              function (n, e) {
                return (e - n) / t;
              }
            )
          : Dm
        : null
    );
  };
  var Om = Dm.range,
    Fm = 1e3,
    Im = 6e4,
    Ym = 36e5,
    Bm = 864e5,
    jm = 6048e5,
    Hm = ju(
      function (t) {
        t.setTime(Math.floor(t / Fm) * Fm);
      },
      function (t, n) {
        t.setTime(+t + n * Fm);
      },
      function (t, n) {
        return (n - t) / Fm;
      },
      function (t) {
        return t.getUTCSeconds();
      }
    ),
    Xm = Hm.range,
    Vm = ju(
      function (t) {
        t.setTime(Math.floor(t / Im) * Im);
      },
      function (t, n) {
        t.setTime(+t + n * Im);
      },
      function (t, n) {
        return (n - t) / Im;
      },
      function (t) {
        return t.getMinutes();
      }
    ),
    Wm = Vm.range,
    $m = ju(
      function (t) {
        var n = (t.getTimezoneOffset() * Im) % Ym;
        n < 0 && (n += Ym), t.setTime(Math.floor((+t - n) / Ym) * Ym + n);
      },
      function (t, n) {
        t.setTime(+t + n * Ym);
      },
      function (t, n) {
        return (n - t) / Ym;
      },
      function (t) {
        return t.getHours();
      }
    ),
    Zm = $m.range,
    Gm = ju(
      function (t) {
        t.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setDate(t.getDate() + n);
      },
      function (t, n) {
        return (
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Im) / Bm
        );
      },
      function (t) {
        return t.getDate() - 1;
      }
    ),
    Jm = Gm.range,
    Qm = Hu(0),
    Km = Hu(1),
    tx = Hu(2),
    nx = Hu(3),
    ex = Hu(4),
    rx = Hu(5),
    ix = Hu(6),
    ox = Qm.range,
    ux = Km.range,
    ax = tx.range,
    cx = nx.range,
    sx = ex.range,
    fx = rx.range,
    lx = ix.range,
    hx = ju(
      function (t) {
        t.setDate(1), t.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setMonth(t.getMonth() + n);
      },
      function (t, n) {
        return (
          n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
        );
      },
      function (t) {
        return t.getMonth();
      }
    ),
    px = hx.range,
    dx = ju(
      function (t) {
        t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setFullYear(t.getFullYear() + n);
      },
      function (t, n) {
        return n.getFullYear() - t.getFullYear();
      },
      function (t) {
        return t.getFullYear();
      }
    );
  dx.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? ju(
          function (n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
              n.setMonth(0, 1),
              n.setHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setFullYear(n.getFullYear() + e * t);
          }
        )
      : null;
  };
  var vx = dx.range,
    _x = ju(
      function (t) {
        t.setUTCSeconds(0, 0);
      },
      function (t, n) {
        t.setTime(+t + n * Im);
      },
      function (t, n) {
        return (n - t) / Im;
      },
      function (t) {
        return t.getUTCMinutes();
      }
    ),
    yx = _x.range,
    gx = ju(
      function (t) {
        t.setUTCMinutes(0, 0, 0);
      },
      function (t, n) {
        t.setTime(+t + n * Ym);
      },
      function (t, n) {
        return (n - t) / Ym;
      },
      function (t) {
        return t.getUTCHours();
      }
    ),
    mx = gx.range,
    xx = ju(
      function (t) {
        t.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCDate(t.getUTCDate() + n);
      },
      function (t, n) {
        return (n - t) / Bm;
      },
      function (t) {
        return t.getUTCDate() - 1;
      }
    ),
    bx = xx.range,
    wx = Xu(0),
    Mx = Xu(1),
    Tx = Xu(2),
    Nx = Xu(3),
    kx = Xu(4),
    Sx = Xu(5),
    Ex = Xu(6),
    Ax = wx.range,
    Cx = Mx.range,
    zx = Tx.range,
    Px = Nx.range,
    Rx = kx.range,
    qx = Sx.range,
    Lx = Ex.range,
    Ux = ju(
      function (t) {
        t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCMonth(t.getUTCMonth() + n);
      },
      function (t, n) {
        return (
          n.getUTCMonth() -
          t.getUTCMonth() +
          12 * (n.getUTCFullYear() - t.getUTCFullYear())
        );
      },
      function (t) {
        return t.getUTCMonth();
      }
    ),
    Dx = Ux.range,
    Ox = ju(
      function (t) {
        t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCFullYear(t.getUTCFullYear() + n);
      },
      function (t, n) {
        return n.getUTCFullYear() - t.getUTCFullYear();
      },
      function (t) {
        return t.getUTCFullYear();
      }
    );
  Ox.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? ju(
          function (n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
              n.setUTCMonth(0, 1),
              n.setUTCHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t);
          }
        )
      : null;
  };
  var Fx,
    Ix = Ox.range,
    Yx = {
      "-": "",
      _: " ",
      0: "0",
    },
    Bx = /^\s*\d+/,
    jx = /^%/,
    Hx = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
  ja({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  });
  var Xx = "%Y-%m-%dT%H:%M:%S.%LZ",
    Vx = Date.prototype.toISOString ? Ha : t.utcFormat(Xx),
    Wx = +new Date("2000-01-01T00:00:00.000Z") ? Xa : t.utcParse(Xx),
    $x = 1e3,
    Zx = 60 * $x,
    Gx = 60 * Zx,
    Jx = 24 * Gx,
    Qx = 7 * Jx,
    Kx = 30 * Jx,
    tb = 365 * Jx,
    nb = function () {
      return $a(dx, hx, Qm, Gm, $m, Vm, Hm, Dm, t.timeFormat).domain([
        new Date(2e3, 0, 1),
        new Date(2e3, 0, 2),
      ]);
    },
    eb = function () {
      return $a(Ox, Ux, wx, xx, gx, _x, Hm, Dm, t.utcFormat).domain([
        Date.UTC(2e3, 0, 1),
        Date.UTC(2e3, 0, 2),
      ]);
    },
    rb = function (t) {
      return t.match(/.{6}/g).map(function (t) {
        return "#" + t;
      });
    },
    ib = rb("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
    ob = rb(
      "393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"
    ),
    ub = rb(
      "3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"
    ),
    ab = rb(
      "1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"
    ),
    cb = Oh(Xt(300, 0.5, 0), Xt(-240, 0.5, 1)),
    sb = Oh(Xt(-100, 0.75, 0.35), Xt(80, 1.5, 0.8)),
    fb = Oh(Xt(260, 0.75, 0.35), Xt(80, 1.5, 0.8)),
    lb = Xt(),
    hb = function (t) {
      (t < 0 || t > 1) && (t -= Math.floor(t));
      var n = Math.abs(t - 0.5);
      return (
        (lb.h = 360 * t - 100),
        (lb.s = 1.5 - 1.5 * n),
        (lb.l = 0.8 - 0.9 * n),
        lb + ""
      );
    },
    pb = Za(
      rb(
        "44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"
      )
    ),
    db = Za(
      rb(
        "00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"
      )
    ),
    vb = Za(
      rb(
        "00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"
      )
    ),
    _b = Za(
      rb(
        "0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"
      )
    ),
    yb = function (t) {
      return function () {
        return t;
      };
    },
    gb = 1e-12,
    mb = Math.PI,
    xb = mb / 2,
    bb = 2 * mb,
    wb = function () {
      function t() {
        var t,
          s,
          f = +n.apply(this, arguments),
          l = +e.apply(this, arguments),
          h = o.apply(this, arguments) - xb,
          p = u.apply(this, arguments) - xb,
          d = Math.abs(p - h),
          v = p > h;
        if ((c || (c = t = Re()), l < f && ((s = l), (l = f), (f = s)), l > gb))
          if (d > bb - gb)
            c.moveTo(l * Math.cos(h), l * Math.sin(h)),
              c.arc(0, 0, l, h, p, !v),
              f > gb &&
                (c.moveTo(f * Math.cos(p), f * Math.sin(p)),
                c.arc(0, 0, f, p, h, v));
          else {
            var _,
              y,
              g = h,
              m = p,
              x = h,
              b = p,
              w = d,
              M = d,
              T = a.apply(this, arguments) / 2,
              N =
                T > gb &&
                (i ? +i.apply(this, arguments) : Math.sqrt(f * f + l * l)),
              k = Math.min(Math.abs(l - f) / 2, +r.apply(this, arguments)),
              S = k,
              E = k;
            if (N > gb) {
              var A = ec((N / f) * Math.sin(T)),
                C = ec((N / l) * Math.sin(T));
              (w -= 2 * A) > gb
                ? ((A *= v ? 1 : -1), (x += A), (b -= A))
                : ((w = 0), (x = b = (h + p) / 2)),
                (M -= 2 * C) > gb
                  ? ((C *= v ? 1 : -1), (g += C), (m -= C))
                  : ((M = 0), (g = m = (h + p) / 2));
            }
            var z = l * Math.cos(g),
              P = l * Math.sin(g),
              R = f * Math.cos(b),
              q = f * Math.sin(b);
            if (k > gb) {
              var L = l * Math.cos(m),
                U = l * Math.sin(m),
                D = f * Math.cos(x),
                O = f * Math.sin(x);
              if (d < mb) {
                var F = w > gb ? rc(z, P, D, O, L, U, R, q) : [R, q],
                  I = z - F[0],
                  Y = P - F[1],
                  B = L - F[0],
                  j = U - F[1],
                  H =
                    1 /
                    Math.sin(
                      Math.acos(
                        (I * B + Y * j) /
                          (Math.sqrt(I * I + Y * Y) * Math.sqrt(B * B + j * j))
                      ) / 2
                    ),
                  X = Math.sqrt(F[0] * F[0] + F[1] * F[1]);
                (S = Math.min(k, (f - X) / (H - 1))),
                  (E = Math.min(k, (l - X) / (H + 1)));
              }
            }
            M > gb
              ? E > gb
                ? ((_ = ic(D, O, z, P, l, E, v)),
                  (y = ic(L, U, R, q, l, E, v)),
                  c.moveTo(_.cx + _.x01, _.cy + _.y01),
                  E < k
                    ? c.arc(
                        _.cx,
                        _.cy,
                        E,
                        Math.atan2(_.y01, _.x01),
                        Math.atan2(y.y01, y.x01),
                        !v
                      )
                    : (c.arc(
                        _.cx,
                        _.cy,
                        E,
                        Math.atan2(_.y01, _.x01),
                        Math.atan2(_.y11, _.x11),
                        !v
                      ),
                      c.arc(
                        0,
                        0,
                        l,
                        Math.atan2(_.cy + _.y11, _.cx + _.x11),
                        Math.atan2(y.cy + y.y11, y.cx + y.x11),
                        !v
                      ),
                      c.arc(
                        y.cx,
                        y.cy,
                        E,
                        Math.atan2(y.y11, y.x11),
                        Math.atan2(y.y01, y.x01),
                        !v
                      )))
                : (c.moveTo(z, P), c.arc(0, 0, l, g, m, !v))
              : c.moveTo(z, P),
              f > gb && w > gb
                ? S > gb
                  ? ((_ = ic(R, q, L, U, f, -S, v)),
                    (y = ic(z, P, D, O, f, -S, v)),
                    c.lineTo(_.cx + _.x01, _.cy + _.y01),
                    S < k
                      ? c.arc(
                          _.cx,
                          _.cy,
                          S,
                          Math.atan2(_.y01, _.x01),
                          Math.atan2(y.y01, y.x01),
                          !v
                        )
                      : (c.arc(
                          _.cx,
                          _.cy,
                          S,
                          Math.atan2(_.y01, _.x01),
                          Math.atan2(_.y11, _.x11),
                          !v
                        ),
                        c.arc(
                          0,
                          0,
                          f,
                          Math.atan2(_.cy + _.y11, _.cx + _.x11),
                          Math.atan2(y.cy + y.y11, y.cx + y.x11),
                          v
                        ),
                        c.arc(
                          y.cx,
                          y.cy,
                          S,
                          Math.atan2(y.y11, y.x11),
                          Math.atan2(y.y01, y.x01),
                          !v
                        )))
                  : c.arc(0, 0, f, b, x, v)
                : c.lineTo(R, q);
          }
        else c.moveTo(0, 0);
        if ((c.closePath(), t)) return (c = null), t + "" || null;
      }
      var n = Ja,
        e = Qa,
        r = yb(0),
        i = null,
        o = Ka,
        u = tc,
        a = nc,
        c = null;
      return (
        (t.centroid = function () {
          var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2,
            r =
              (+o.apply(this, arguments) + +u.apply(this, arguments)) / 2 -
              mb / 2;
          return [Math.cos(r) * t, Math.sin(r) * t];
        }),
        (t.innerRadius = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : yb(+e)), t)
            : n;
        }),
        (t.outerRadius = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : yb(+n)), t)
            : e;
        }),
        (t.cornerRadius = function (n) {
          return arguments.length
            ? ((r = "function" == typeof n ? n : yb(+n)), t)
            : r;
        }),
        (t.padRadius = function (n) {
          return arguments.length
            ? ((i = null == n ? null : "function" == typeof n ? n : yb(+n)), t)
            : i;
        }),
        (t.startAngle = function (n) {
          return arguments.length
            ? ((o = "function" == typeof n ? n : yb(+n)), t)
            : o;
        }),
        (t.endAngle = function (n) {
          return arguments.length
            ? ((u = "function" == typeof n ? n : yb(+n)), t)
            : u;
        }),
        (t.padAngle = function (n) {
          return arguments.length
            ? ((a = "function" == typeof n ? n : yb(+n)), t)
            : a;
        }),
        (t.context = function (n) {
          return arguments.length ? ((c = null == n ? null : n), t) : c;
        }),
        t
      );
    };
  oc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default:
          this._context.lineTo(t, n);
      }
    },
  };
  var Mb = function (t) {
      return new oc(t);
    },
    Tb = function () {
      function t(t) {
        var a,
          c,
          s,
          f = t.length,
          l = !1;
        for (null == i && (u = o((s = Re()))), a = 0; a <= f; ++a)
          !(a < f && r((c = t[a]), a, t)) === l &&
            ((l = !l) ? u.lineStart() : u.lineEnd()),
            l && u.point(+n(c, a, t), +e(c, a, t));
        if (s) return (u = null), s + "" || null;
      }
      var n = uc,
        e = ac,
        r = yb(!0),
        i = null,
        o = Mb,
        u = null;
      return (
        (t.x = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : yb(+e)), t)
            : n;
        }),
        (t.y = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : yb(+n)), t)
            : e;
        }),
        (t.defined = function (n) {
          return arguments.length
            ? ((r = "function" == typeof n ? n : yb(!!n)), t)
            : r;
        }),
        (t.curve = function (n) {
          return arguments.length ? ((o = n), null != i && (u = o(i)), t) : o;
        }),
        (t.context = function (n) {
          return arguments.length
            ? (null == n ? (i = u = null) : (u = o((i = n))), t)
            : i;
        }),
        t
      );
    },
    Nb = function () {
      function t(t) {
        var n,
          f,
          l,
          h,
          p,
          d = t.length,
          v = !1,
          _ = new Array(d),
          y = new Array(d);
        for (null == a && (s = c((p = Re()))), n = 0; n <= d; ++n) {
          if (!(n < d && u((h = t[n]), n, t)) === v)
            if ((v = !v)) (f = n), s.areaStart(), s.lineStart();
            else {
              for (s.lineEnd(), s.lineStart(), l = n - 1; l >= f; --l)
                s.point(_[l], y[l]);
              s.lineEnd(), s.areaEnd();
            }
          v &&
            ((_[n] = +e(h, n, t)),
            (y[n] = +i(h, n, t)),
            s.point(r ? +r(h, n, t) : _[n], o ? +o(h, n, t) : y[n]));
        }
        if (p) return (s = null), p + "" || null;
      }
      function n() {
        return Tb().defined(u).curve(c).context(a);
      }
      var e = uc,
        r = null,
        i = yb(0),
        o = ac,
        u = yb(!0),
        a = null,
        c = Mb,
        s = null;
      return (
        (t.x = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : yb(+n)), (r = null), t)
            : e;
        }),
        (t.x0 = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : yb(+n)), t)
            : e;
        }),
        (t.x1 = function (n) {
          return arguments.length
            ? ((r = null == n ? null : "function" == typeof n ? n : yb(+n)), t)
            : r;
        }),
        (t.y = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : yb(+n)), (o = null), t)
            : i;
        }),
        (t.y0 = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : yb(+n)), t)
            : i;
        }),
        (t.y1 = function (n) {
          return arguments.length
            ? ((o = null == n ? null : "function" == typeof n ? n : yb(+n)), t)
            : o;
        }),
        (t.lineX0 = t.lineY0 =
          function () {
            return n().x(e).y(i);
          }),
        (t.lineY1 = function () {
          return n().x(e).y(o);
        }),
        (t.lineX1 = function () {
          return n().x(r).y(i);
        }),
        (t.defined = function (n) {
          return arguments.length
            ? ((u = "function" == typeof n ? n : yb(!!n)), t)
            : u;
        }),
        (t.curve = function (n) {
          return arguments.length ? ((c = n), null != a && (s = c(a)), t) : c;
        }),
        (t.context = function (n) {
          return arguments.length
            ? (null == n ? (a = s = null) : (s = c((a = n))), t)
            : a;
        }),
        t
      );
    },
    kb = function (t, n) {
      return n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
    },
    Sb = function (t) {
      return t;
    },
    Eb = function () {
      function t(t) {
        var a,
          c,
          s,
          f,
          l,
          h = t.length,
          p = 0,
          d = new Array(h),
          v = new Array(h),
          _ = +i.apply(this, arguments),
          y = Math.min(bb, Math.max(-bb, o.apply(this, arguments) - _)),
          g = Math.min(Math.abs(y) / h, u.apply(this, arguments)),
          m = g * (y < 0 ? -1 : 1);
        for (a = 0; a < h; ++a)
          (l = v[(d[a] = a)] = +n(t[a], a, t)) > 0 && (p += l);
        for (
          null != e
            ? d.sort(function (t, n) {
                return e(v[t], v[n]);
              })
            : null != r &&
              d.sort(function (n, e) {
                return r(t[n], t[e]);
              }),
            a = 0,
            s = p ? (y - h * m) / p : 0;
          a < h;
          ++a, _ = f
        )
          (c = d[a]),
            (l = v[c]),
            (f = _ + (l > 0 ? l * s : 0) + m),
            (v[c] = {
              data: t[c],
              index: a,
              value: l,
              startAngle: _,
              endAngle: f,
              padAngle: g,
            });
        return v;
      }
      var n = Sb,
        e = kb,
        r = null,
        i = yb(0),
        o = yb(bb),
        u = yb(0);
      return (
        (t.value = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : yb(+e)), t)
            : n;
        }),
        (t.sortValues = function (n) {
          return arguments.length ? ((e = n), (r = null), t) : e;
        }),
        (t.sort = function (n) {
          return arguments.length ? ((r = n), (e = null), t) : r;
        }),
        (t.startAngle = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : yb(+n)), t)
            : i;
        }),
        (t.endAngle = function (n) {
          return arguments.length
            ? ((o = "function" == typeof n ? n : yb(+n)), t)
            : o;
        }),
        (t.padAngle = function (n) {
          return arguments.length
            ? ((u = "function" == typeof n ? n : yb(+n)), t)
            : u;
        }),
        t
      );
    },
    Ab = sc(Mb);
  cc.prototype = {
    areaStart: function () {
      this._curve.areaStart();
    },
    areaEnd: function () {
      this._curve.areaEnd();
    },
    lineStart: function () {
      this._curve.lineStart();
    },
    lineEnd: function () {
      this._curve.lineEnd();
    },
    point: function (t, n) {
      this._curve.point(n * Math.sin(t), n * -Math.cos(t));
    },
  };
  var Cb = function () {
      return fc(Tb().curve(Ab));
    },
    zb = function () {
      var t = Nb().curve(Ab),
        n = t.curve,
        e = t.lineX0,
        r = t.lineX1,
        i = t.lineY0,
        o = t.lineY1;
      return (
        (t.angle = t.x),
        delete t.x,
        (t.startAngle = t.x0),
        delete t.x0,
        (t.endAngle = t.x1),
        delete t.x1,
        (t.radius = t.y),
        delete t.y,
        (t.innerRadius = t.y0),
        delete t.y0,
        (t.outerRadius = t.y1),
        delete t.y1,
        (t.lineStartAngle = function () {
          return fc(e());
        }),
        delete t.lineX0,
        (t.lineEndAngle = function () {
          return fc(r());
        }),
        delete t.lineX1,
        (t.lineInnerRadius = function () {
          return fc(i());
        }),
        delete t.lineY0,
        (t.lineOuterRadius = function () {
          return fc(o());
        }),
        delete t.lineY1,
        (t.curve = function (t) {
          return arguments.length ? n(sc(t)) : n()._curve;
        }),
        t
      );
    },
    Pb = {
      draw: function (t, n) {
        var e = Math.sqrt(n / mb);
        t.moveTo(e, 0), t.arc(0, 0, e, 0, bb);
      },
    },
    Rb = {
      draw: function (t, n) {
        var e = Math.sqrt(n / 5) / 2;
        t.moveTo(-3 * e, -e),
          t.lineTo(-e, -e),
          t.lineTo(-e, -3 * e),
          t.lineTo(e, -3 * e),
          t.lineTo(e, -e),
          t.lineTo(3 * e, -e),
          t.lineTo(3 * e, e),
          t.lineTo(e, e),
          t.lineTo(e, 3 * e),
          t.lineTo(-e, 3 * e),
          t.lineTo(-e, e),
          t.lineTo(-3 * e, e),
          t.closePath();
      },
    },
    qb = Math.sqrt(1 / 3),
    Lb = 2 * qb,
    Ub = {
      draw: function (t, n) {
        var e = Math.sqrt(n / Lb),
          r = e * qb;
        t.moveTo(0, -e),
          t.lineTo(r, 0),
          t.lineTo(0, e),
          t.lineTo(-r, 0),
          t.closePath();
      },
    },
    Db = 0.8908130915292852,
    Ob = Math.sin(mb / 10) / Math.sin((7 * mb) / 10),
    Fb = Math.sin(bb / 10) * Ob,
    Ib = -Math.cos(bb / 10) * Ob,
    Yb = {
      draw: function (t, n) {
        var e = Math.sqrt(n * Db),
          r = Fb * e,
          i = Ib * e;
        t.moveTo(0, -e), t.lineTo(r, i);
        for (var o = 1; o < 5; ++o) {
          var u = (bb * o) / 5,
            a = Math.cos(u),
            c = Math.sin(u);
          t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i);
        }
        t.closePath();
      },
    },
    Bb = {
      draw: function (t, n) {
        var e = Math.sqrt(n),
          r = -e / 2;
        t.rect(r, r, e, e);
      },
    },
    jb = Math.sqrt(3),
    Hb = {
      draw: function (t, n) {
        var e = -Math.sqrt(n / (3 * jb));
        t.moveTo(0, 2 * e),
          t.lineTo(-jb * e, -e),
          t.lineTo(jb * e, -e),
          t.closePath();
      },
    },
    Xb = -0.5,
    Vb = Math.sqrt(3) / 2,
    Wb = 1 / Math.sqrt(12),
    $b = 3 * (Wb / 2 + 1),
    Zb = {
      draw: function (t, n) {
        var e = Math.sqrt(n / $b),
          r = e / 2,
          i = e * Wb,
          o = r,
          u = e * Wb + e,
          a = -o,
          c = u;
        t.moveTo(r, i),
          t.lineTo(o, u),
          t.lineTo(a, c),
          t.lineTo(Xb * r - Vb * i, Vb * r + Xb * i),
          t.lineTo(Xb * o - Vb * u, Vb * o + Xb * u),
          t.lineTo(Xb * a - Vb * c, Vb * a + Xb * c),
          t.lineTo(Xb * r + Vb * i, Xb * i - Vb * r),
          t.lineTo(Xb * o + Vb * u, Xb * u - Vb * o),
          t.lineTo(Xb * a + Vb * c, Xb * c - Vb * a),
          t.closePath();
      },
    },
    Gb = [Pb, Rb, Ub, Bb, Yb, Hb, Zb],
    Jb = function () {
      function t() {
        var t;
        if (
          (r || (r = t = Re()),
          n.apply(this, arguments).draw(r, +e.apply(this, arguments)),
          t)
        )
          return (r = null), t + "" || null;
      }
      var n = yb(Pb),
        e = yb(64),
        r = null;
      return (
        (t.type = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : yb(e)), t)
            : n;
        }),
        (t.size = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : yb(+n)), t)
            : e;
        }),
        (t.context = function (n) {
          return arguments.length ? ((r = null == n ? null : n), t) : r;
        }),
        t
      );
    },
    Qb = function () {};
  hc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          lc(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._context.lineTo(
              (5 * this._x0 + this._x1) / 6,
              (5 * this._y0 + this._y1) / 6
            );
        default:
          lc(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = n);
    },
  };
  var Kb = function (t) {
    return new hc(t);
  };
  pc.prototype = {
    areaStart: Qb,
    areaEnd: Qb,
    lineStart: function () {
      (this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
          NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x2, this._y2), this._context.closePath();
          break;
        case 2:
          this._context.moveTo(
            (this._x2 + 2 * this._x3) / 3,
            (this._y2 + 2 * this._y3) / 3
          ),
            this._context.lineTo(
              (this._x3 + 2 * this._x2) / 3,
              (this._y3 + 2 * this._y2) / 3
            ),
            this._context.closePath();
          break;
        case 3:
          this.point(this._x2, this._y2),
            this.point(this._x3, this._y3),
            this.point(this._x4, this._y4);
      }
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1), (this._x2 = t), (this._y2 = n);
          break;
        case 1:
          (this._point = 2), (this._x3 = t), (this._y3 = n);
          break;
        case 2:
          (this._point = 3),
            (this._x4 = t),
            (this._y4 = n),
            this._context.moveTo(
              (this._x0 + 4 * this._x1 + t) / 6,
              (this._y0 + 4 * this._y1 + n) / 6
            );
          break;
        default:
          lc(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = n);
    },
  };
  var tw = function (t) {
    return new pc(t);
  };
  dc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 3 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
          var e = (this._x0 + 4 * this._x1 + t) / 6,
            r = (this._y0 + 4 * this._y1 + n) / 6;
          this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
          break;
        case 3:
          this._point = 4;
        default:
          lc(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = n);
    },
  };
  var nw = function (t) {
    return new dc(t);
  };
  vc.prototype = {
    lineStart: function () {
      (this._x = []), (this._y = []), this._basis.lineStart();
    },
    lineEnd: function () {
      var t = this._x,
        n = this._y,
        e = t.length - 1;
      if (e > 0)
        for (
          var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1;
          ++c <= e;

        )
          (r = c / e),
            this._basis.point(
              this._beta * t[c] + (1 - this._beta) * (i + r * u),
              this._beta * n[c] + (1 - this._beta) * (o + r * a)
            );
      (this._x = this._y = null), this._basis.lineEnd();
    },
    point: function (t, n) {
      this._x.push(+t), this._y.push(+n);
    },
  };
  var ew = (function t(n) {
    function e(t) {
      return 1 === n ? new hc(t) : new vc(t, n);
    }
    return (
      (e.beta = function (n) {
        return t(+n);
      }),
      e
    );
  })(0.85);
  yc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          _c(this, this._x1, this._y1);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          (this._point = 2), (this._x1 = t), (this._y1 = n);
          break;
        case 2:
          this._point = 3;
        default:
          _c(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var rw = (function t(n) {
    function e(t) {
      return new yc(t, n);
    }
    return (
      (e.tension = function (n) {
        return t(+n);
      }),
      e
    );
  })(0);
  gc.prototype = {
    areaStart: Qb,
    areaEnd: Qb,
    lineStart: function () {
      (this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._x5 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
        this._y5 =
          NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3),
            this.point(this._x4, this._y4),
            this.point(this._x5, this._y5);
      }
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1), (this._x3 = t), (this._y3 = n);
          break;
        case 1:
          (this._point = 2),
            this._context.moveTo((this._x4 = t), (this._y4 = n));
          break;
        case 2:
          (this._point = 3), (this._x5 = t), (this._y5 = n);
          break;
        default:
          _c(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var iw = (function t(n) {
    function e(t) {
      return new gc(t, n);
    }
    return (
      (e.tension = function (n) {
        return t(+n);
      }),
      e
    );
  })(0);
  mc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 3 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._line
              ? this._context.lineTo(this._x2, this._y2)
              : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          _c(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var ow = (function t(n) {
    function e(t) {
      return new mc(t, n);
    }
    return (
      (e.tension = function (n) {
        return t(+n);
      }),
      e
    );
  })(0);
  bc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._l01_a =
          this._l12_a =
          this._l23_a =
          this._l01_2a =
          this._l12_2a =
          this._l23_2a =
          this._point =
            0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x2, this._y2);
          break;
        case 3:
          this.point(this._x2, this._y2);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      if (((t = +t), (n = +n), this._point)) {
        var e = this._x2 - t,
          r = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3;
        default:
          xc(this, t, n);
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var uw = (function t(n) {
    function e(t) {
      return n ? new bc(t, n) : new yc(t, 0);
    }
    return (
      (e.alpha = function (n) {
        return t(+n);
      }),
      e
    );
  })(0.5);
  wc.prototype = {
    areaStart: Qb,
    areaEnd: Qb,
    lineStart: function () {
      (this._x0 =
        this._x1 =
        this._x2 =
        this._x3 =
        this._x4 =
        this._x5 =
        this._y0 =
        this._y1 =
        this._y2 =
        this._y3 =
        this._y4 =
        this._y5 =
          NaN),
        (this._l01_a =
          this._l12_a =
          this._l23_a =
          this._l01_2a =
          this._l12_2a =
          this._l23_2a =
          this._point =
            0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 1:
          this._context.moveTo(this._x3, this._y3), this._context.closePath();
          break;
        case 2:
          this._context.lineTo(this._x3, this._y3), this._context.closePath();
          break;
        case 3:
          this.point(this._x3, this._y3),
            this.point(this._x4, this._y4),
            this.point(this._x5, this._y5);
      }
    },
    point: function (t, n) {
      if (((t = +t), (n = +n), this._point)) {
        var e = this._x2 - t,
          r = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          (this._point = 1), (this._x3 = t), (this._y3 = n);
          break;
        case 1:
          (this._point = 2),
            this._context.moveTo((this._x4 = t), (this._y4 = n));
          break;
        case 2:
          (this._point = 3), (this._x5 = t), (this._y5 = n);
          break;
        default:
          xc(this, t, n);
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var aw = (function t(n) {
    function e(t) {
      return n ? new wc(t, n) : new gc(t, 0);
    }
    return (
      (e.alpha = function (n) {
        return t(+n);
      }),
      e
    );
  })(0.5);
  Mc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
        (this._l01_a =
          this._l12_a =
          this._l23_a =
          this._l01_2a =
          this._l12_2a =
          this._l23_2a =
          this._point =
            0);
    },
    lineEnd: function () {
      (this._line || (0 !== this._line && 3 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      if (((t = +t), (n = +n), this._point)) {
        var e = this._x2 - t,
          r = this._y2 - n;
        this._l23_a = Math.sqrt(
          (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
        );
      }
      switch (this._point) {
        case 0:
          this._point = 1;
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._line
              ? this._context.lineTo(this._x2, this._y2)
              : this._context.moveTo(this._x2, this._y2);
          break;
        case 3:
          this._point = 4;
        default:
          xc(this, t, n);
      }
      (this._l01_a = this._l12_a),
        (this._l12_a = this._l23_a),
        (this._l01_2a = this._l12_2a),
        (this._l12_2a = this._l23_2a),
        (this._x0 = this._x1),
        (this._x1 = this._x2),
        (this._x2 = t),
        (this._y0 = this._y1),
        (this._y1 = this._y2),
        (this._y2 = n);
    },
  };
  var cw = (function t(n) {
    function e(t) {
      return n ? new Mc(t, n) : new mc(t, 0);
    }
    return (
      (e.alpha = function (n) {
        return t(+n);
      }),
      e
    );
  })(0.5);
  Tc.prototype = {
    areaStart: Qb,
    areaEnd: Qb,
    lineStart: function () {
      this._point = 0;
    },
    lineEnd: function () {
      this._point && this._context.closePath();
    },
    point: function (t, n) {
      (t = +t),
        (n = +n),
        this._point
          ? this._context.lineTo(t, n)
          : ((this._point = 1), this._context.moveTo(t, n));
    },
  };
  var sw = function (t) {
    return new Tc(t);
  };
  (Ac.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
        (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 2:
          this._context.lineTo(this._x1, this._y1);
          break;
        case 3:
          Ec(this, this._t0, Sc(this, this._t0));
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      var e = NaN;
      if (((t = +t), (n = +n), t !== this._x1 || n !== this._y1)) {
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3), Ec(this, Sc(this, (e = kc(this, t, n))), e);
            break;
          default:
            Ec(this, this._t0, (e = kc(this, t, n)));
        }
        (this._x0 = this._x1),
          (this._x1 = t),
          (this._y0 = this._y1),
          (this._y1 = n),
          (this._t0 = e);
      }
    },
  }),
    ((Cc.prototype = Object.create(Ac.prototype)).point = function (t, n) {
      Ac.prototype.point.call(this, n, t);
    }),
    (zc.prototype = {
      moveTo: function (t, n) {
        this._context.moveTo(n, t);
      },
      closePath: function () {
        this._context.closePath();
      },
      lineTo: function (t, n) {
        this._context.lineTo(n, t);
      },
      bezierCurveTo: function (t, n, e, r, i, o) {
        this._context.bezierCurveTo(n, t, r, e, o, i);
      },
    }),
    (qc.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x = []), (this._y = []);
      },
      lineEnd: function () {
        var t = this._x,
          n = this._y,
          e = t.length;
        if (e)
          if (
            (this._line
              ? this._context.lineTo(t[0], n[0])
              : this._context.moveTo(t[0], n[0]),
            2 === e)
          )
            this._context.lineTo(t[1], n[1]);
          else
            for (var r = Lc(t), i = Lc(n), o = 0, u = 1; u < e; ++o, ++u)
              this._context.bezierCurveTo(
                r[0][o],
                i[0][o],
                r[1][o],
                i[1][o],
                t[u],
                n[u]
              );
        (this._line || (0 !== this._line && 1 === e)) &&
          this._context.closePath(),
          (this._line = 1 - this._line),
          (this._x = this._y = null);
      },
      point: function (t, n) {
        this._x.push(+t), this._y.push(+n);
      },
    });
  var fw = function (t) {
    return new qc(t);
  };
  Uc.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x = this._y = NaN), (this._point = 0);
    },
    lineEnd: function () {
      0 < this._t &&
        this._t < 1 &&
        2 === this._point &&
        this._context.lineTo(this._x, this._y),
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
        this._line >= 0 &&
          ((this._t = 1 - this._t), (this._line = 1 - this._line));
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
        default:
          if (this._t <= 0)
            this._context.lineTo(this._x, n), this._context.lineTo(t, n);
          else {
            var e = this._x * (1 - this._t) + t * this._t;
            this._context.lineTo(e, this._y), this._context.lineTo(e, n);
          }
      }
      (this._x = t), (this._y = n);
    },
  };
  var lw = function (t) {
      return new Uc(t, 0.5);
    },
    hw = Array.prototype.slice,
    pw = function (t, n) {
      if ((r = t.length) > 1)
        for (var e, r, i = 1, o = t[n[0]], u = o.length; i < r; ++i) {
          (e = o), (o = t[n[i]]);
          for (var a = 0; a < u; ++a)
            o[a][1] += o[a][0] = isNaN(e[a][1]) ? e[a][0] : e[a][1];
        }
    },
    dw = function (t) {
      for (var n = t.length, e = new Array(n); --n >= 0; ) e[n] = n;
      return e;
    },
    vw = function () {
      function t(t) {
        var o,
          u,
          a = n.apply(this, arguments),
          c = t.length,
          s = a.length,
          f = new Array(s);
        for (o = 0; o < s; ++o) {
          for (var l, h = a[o], p = (f[o] = new Array(c)), d = 0; d < c; ++d)
            (p[d] = l = [0, +i(t[d], h, d, t)]), (l.data = t[d]);
          p.key = h;
        }
        for (o = 0, u = e(f); o < s; ++o) f[u[o]].index = o;
        return r(f, u), f;
      }
      var n = yb([]),
        e = dw,
        r = pw,
        i = Fc;
      return (
        (t.keys = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : yb(hw.call(e))), t)
            : n;
        }),
        (t.value = function (n) {
          return arguments.length
            ? ((i = "function" == typeof n ? n : yb(+n)), t)
            : i;
        }),
        (t.order = function (n) {
          return arguments.length
            ? ((e =
                null == n ? dw : "function" == typeof n ? n : yb(hw.call(n))),
              t)
            : e;
        }),
        (t.offset = function (n) {
          return arguments.length ? ((r = null == n ? pw : n), t) : r;
        }),
        t
      );
    },
    _w = function (t, n) {
      if ((r = t.length) > 0) {
        for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
          for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
          if (i) for (e = 0; e < r; ++e) t[e][o][1] /= i;
        }
        pw(t, n);
      }
    },
    yw = function (t, n) {
      if ((e = t.length) > 0) {
        for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
          for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
          i[r][1] += i[r][0] = -a / 2;
        }
        pw(t, n);
      }
    },
    gw = function (t, n) {
      if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
        for (var e, r, i, o = 0, u = 1; u < r; ++u) {
          for (var a = 0, c = 0, s = 0; a < i; ++a) {
            for (
              var f = t[n[a]],
                l = f[u][1] || 0,
                h = f[u - 1][1] || 0,
                p = (l - h) / 2,
                d = 0;
              d < a;
              ++d
            ) {
              var v = t[n[d]],
                _ = v[u][1] || 0,
                y = v[u - 1][1] || 0;
              p += _ - y;
            }
            (c += l), (s += p * l);
          }
          (e[u - 1][1] += e[u - 1][0] = o), c && (o -= s / c);
        }
        (e[u - 1][1] += e[u - 1][0] = o), pw(t, n);
      }
    },
    mw = function (t) {
      var n = t.map(Ic);
      return dw(t).sort(function (t, e) {
        return n[t] - n[e];
      });
    },
    xw = function (t) {
      return mw(t).reverse();
    },
    bw = function (t) {
      var n,
        e,
        r = t.length,
        i = t.map(Ic),
        o = dw(t).sort(function (t, n) {
          return i[n] - i[t];
        }),
        u = 0,
        a = 0,
        c = [],
        s = [];
      for (n = 0; n < r; ++n)
        (e = o[n]), u < a ? ((u += i[e]), c.push(e)) : ((a += i[e]), s.push(e));
      return s.reverse().concat(c);
    },
    ww = function (t) {
      return dw(t).reverse();
    },
    Mw = function (t) {
      return function () {
        return t;
      };
    };
  jc.prototype = {
    constructor: jc,
    insert: function (t, n) {
      var e, r, i;
      if (t) {
        if (((n.P = t), (n.N = t.N), t.N && (t.N.P = n), (t.N = n), t.R)) {
          for (t = t.R; t.L; ) t = t.L;
          t.L = n;
        } else t.R = n;
        e = t;
      } else
        this._
          ? ((t = Wc(this._)),
            (n.P = null),
            (n.N = t),
            (t.P = t.L = n),
            (e = t))
          : ((n.P = n.N = null), (this._ = n), (e = null));
      for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C; )
        (r = e.U),
          e === r.L
            ? ((i = r.R),
              i && i.C
                ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                : (t === e.R && (Xc(this, e), (t = e), (e = t.U)),
                  (e.C = !1),
                  (r.C = !0),
                  Vc(this, r)))
            : ((i = r.L),
              i && i.C
                ? ((e.C = i.C = !1), (r.C = !0), (t = r))
                : (t === e.L && (Vc(this, e), (t = e), (e = t.U)),
                  (e.C = !1),
                  (r.C = !0),
                  Xc(this, r))),
          (e = t.U);
      this._.C = !1;
    },
    remove: function (t) {
      t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), (t.N = t.P = null);
      var n,
        e,
        r,
        i = t.U,
        o = t.L,
        u = t.R;
      if (
        ((e = o ? (u ? Wc(u) : o) : u),
        i ? (i.L === t ? (i.L = e) : (i.R = e)) : (this._ = e),
        o && u
          ? ((r = e.C),
            (e.C = t.C),
            (e.L = o),
            (o.U = e),
            e !== u
              ? ((i = e.U),
                (e.U = t.U),
                (t = e.R),
                (i.L = t),
                (e.R = u),
                (u.U = e))
              : ((e.U = i), (i = e), (t = e.R)))
          : ((r = t.C), (t = e)),
        t && (t.U = i),
        !r)
      ) {
        if (t && t.C) return void (t.C = !1);
        do {
          if (t === this._) break;
          if (t === i.L) {
            if (
              ((n = i.R),
              n.C && ((n.C = !1), (i.C = !0), Xc(this, i), (n = i.R)),
              (n.L && n.L.C) || (n.R && n.R.C))
            ) {
              (n.R && n.R.C) ||
                ((n.L.C = !1), (n.C = !0), Vc(this, n), (n = i.R)),
                (n.C = i.C),
                (i.C = n.R.C = !1),
                Xc(this, i),
                (t = this._);
              break;
            }
          } else if (
            ((n = i.L),
            n.C && ((n.C = !1), (i.C = !0), Vc(this, i), (n = i.L)),
            (n.L && n.L.C) || (n.R && n.R.C))
          ) {
            (n.L && n.L.C) ||
              ((n.R.C = !1), (n.C = !0), Xc(this, n), (n = i.L)),
              (n.C = i.C),
              (i.C = n.L.C = !1),
              Vc(this, i),
              (t = this._);
            break;
          }
          (n.C = !0), (t = i), (i = i.U);
        } while (!t.C);
        t && (t.C = !1);
      }
    },
  };
  var Tw,
    Nw,
    kw,
    Sw,
    Ew,
    Aw = [],
    Cw = [],
    zw = 1e-6,
    Pw = 1e-12;
  gs.prototype = {
    constructor: gs,
    polygons: function () {
      var t = this.edges;
      return this.cells.map(function (n) {
        var e = n.halfedges.map(function (e) {
          return es(n, t[e]);
        });
        return (e.data = n.site.data), e;
      });
    },
    triangles: function () {
      var t = [],
        n = this.edges;
      return (
        this.cells.forEach(function (e, r) {
          if ((o = (i = e.halfedges).length))
            for (
              var i,
                o,
                u,
                a = e.site,
                c = -1,
                s = n[i[o - 1]],
                f = s.left === a ? s.right : s.left;
              ++c < o;

            )
              (u = f),
                (s = n[i[c]]),
                (f = s.left === a ? s.right : s.left),
                u &&
                  f &&
                  r < u.index &&
                  r < f.index &&
                  _s(a, u, f) < 0 &&
                  t.push([a.data, u.data, f.data]);
        }),
        t
      );
    },
    links: function () {
      return this.edges
        .filter(function (t) {
          return t.right;
        })
        .map(function (t) {
          return {
            source: t.left.data,
            target: t.right.data,
          };
        });
    },
    find: function (t, n, e) {
      for (
        var r, i, o = this, u = o._found || 0, a = o.cells.length;
        !(i = o.cells[u]);

      )
        if (++u >= a) return null;
      var c = t - i.site[0],
        s = n - i.site[1],
        f = c * c + s * s;
      do
        (i = o.cells[(r = u)]),
          (u = null),
          i.halfedges.forEach(function (e) {
            var r = o.edges[e],
              a = r.left;
            if ((a !== i.site && a) || (a = r.right)) {
              var c = t - a[0],
                s = n - a[1],
                l = c * c + s * s;
              l < f && ((f = l), (u = a.index));
            }
          });
      while (null !== u);
      return (o._found = r), null == e || f <= e * e ? i.site : null;
    },
  };
  var Rw = function () {
      function t(t) {
        return new gs(
          t.map(function (r, i) {
            var o = [
              Math.round(n(r, i, t) / zw) * zw,
              Math.round(e(r, i, t) / zw) * zw,
            ];
            return (o.index = i), (o.data = r), o;
          }),
          r
        );
      }
      var n = Yc,
        e = Bc,
        r = null;
      return (
        (t.polygons = function (n) {
          return t(n).polygons();
        }),
        (t.links = function (n) {
          return t(n).links();
        }),
        (t.triangles = function (n) {
          return t(n).triangles();
        }),
        (t.x = function (e) {
          return arguments.length
            ? ((n = "function" == typeof e ? e : Mw(+e)), t)
            : n;
        }),
        (t.y = function (n) {
          return arguments.length
            ? ((e = "function" == typeof n ? n : Mw(+n)), t)
            : e;
        }),
        (t.extent = function (n) {
          return arguments.length
            ? ((r =
                null == n
                  ? null
                  : [
                      [+n[0][0], +n[0][1]],
                      [+n[1][0], +n[1][1]],
                    ]),
              t)
            : r && [
                [r[0][0], r[0][1]],
                [r[1][0], r[1][1]],
              ];
        }),
        (t.size = function (n) {
          return arguments.length
            ? ((r =
                null == n
                  ? null
                  : [
                      [0, 0],
                      [+n[0], +n[1]],
                    ]),
              t)
            : r && [r[1][0] - r[0][0], r[1][1] - r[0][1]];
        }),
        t
      );
    },
    qw = function (t) {
      return function () {
        return t;
      };
    };
  xs.prototype = {
    constructor: xs,
    scale: function (t) {
      return 1 === t ? this : new xs(this.k * t, this.x, this.y);
    },
    translate: function (t, n) {
      return (0 === t) & (0 === n)
        ? this
        : new xs(this.k, this.x + this.k * t, this.y + this.k * n);
    },
    apply: function (t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    },
    applyX: function (t) {
      return t * this.k + this.x;
    },
    applyY: function (t) {
      return t * this.k + this.y;
    },
    invert: function (t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    },
    invertX: function (t) {
      return (t - this.x) / this.k;
    },
    invertY: function (t) {
      return (t - this.y) / this.k;
    },
    rescaleX: function (t) {
      return t
        .copy()
        .domain(t.range().map(this.invertX, this).map(t.invert, t));
    },
    rescaleY: function (t) {
      return t
        .copy()
        .domain(t.range().map(this.invertY, this).map(t.invert, t));
    },
    toString: function () {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    },
  };
  var Lw = new xs(1, 0, 0);
  bs.prototype = xs.prototype;
  var Uw = function () {
      t.event.preventDefault(), t.event.stopImmediatePropagation();
    },
    Dw = function () {
      function n(t) {
        t.on("wheel.zoom", s)
          .on("mousedown.zoom", f)
          .on("dblclick.zoom", l)
          .on("touchstart.zoom", h)
          .on("touchmove.zoom", d)
          .on("touchend.zoom touchcancel.zoom", v)
          .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
          .property("__zoom", Ns);
      }
      function e(t, n) {
        return (
          (n = Math.max(x, Math.min(b, n))), n === t.k ? t : new xs(n, t.x, t.y)
        );
      }
      function r(t, n, e) {
        var r = n[0] - e[0] * t.k,
          i = n[1] - e[1] * t.k;
        return r === t.x && i === t.y ? t : new xs(t.k, r, i);
      }
      function i(t, n) {
        var e = t.invertX(n[0][0]) - w,
          r = t.invertX(n[1][0]) - M,
          i = t.invertY(n[0][1]) - T,
          o = t.invertY(n[1][1]) - N;
        return t.translate(
          r > e ? (e + r) / 2 : Math.min(0, e) || Math.max(0, r),
          o > i ? (i + o) / 2 : Math.min(0, i) || Math.max(0, o)
        );
      }
      function o(t) {
        return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
      }
      function u(t, n, e) {
        t.on("start.zoom", function () {
          a(this, arguments).start();
        })
          .on("interrupt.zoom end.zoom", function () {
            a(this, arguments).end();
          })
          .tween("zoom", function () {
            var t = this,
              r = arguments,
              i = a(t, r),
              u = m.apply(t, r),
              c = e || o(u),
              s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
              f = t.__zoom,
              l = "function" == typeof n ? n.apply(t, r) : n,
              h = E(f.invert(c).concat(s / f.k), l.invert(c).concat(s / l.k));
            return function (t) {
              if (1 === t) t = l;
              else {
                var n = h(t),
                  e = s / n[2];
                t = new xs(e, c[0] - n[0] * e, c[1] - n[1] * e);
              }
              i.zoom(null, t);
            };
          });
      }
      function a(t, n) {
        for (var e, r = 0, i = A.length; r < i; ++r)
          if ((e = A[r]).that === t) return e;
        return new c(t, n);
      }
      function c(t, n) {
        (this.that = t),
          (this.args = n),
          (this.index = -1),
          (this.active = 0),
          (this.extent = m.apply(t, n));
      }
      function s() {
        function n() {
          (o.wheel = null), o.end();
        }
        if (g.apply(this, arguments)) {
          var o = a(this, arguments),
            u = this.__zoom,
            c = Math.max(
              x,
              Math.min(
                b,
                u.k *
                  Math.pow(
                    2,
                    (-t.event.deltaY * (t.event.deltaMode ? 120 : 1)) / 500
                  )
              )
            ),
            s = Rf(this);
          if (o.wheel)
            (o.mouse[0][0] === s[0] && o.mouse[0][1] === s[1]) ||
              (o.mouse[1] = u.invert((o.mouse[0] = s))),
              clearTimeout(o.wheel);
          else {
            if (u.k === c) return;
            (o.mouse = [s, u.invert(s)]), ap(this), o.start();
          }
          Uw(),
            (o.wheel = setTimeout(n, P)),
            o.zoom("mouse", i(r(e(u, c), o.mouse[0], o.mouse[1]), o.extent));
        }
      }
      function f() {
        function n() {
          Uw(),
            (o.moved = !0),
            o.zoom(
              "mouse",
              i(
                r(o.that.__zoom, (o.mouse[0] = Rf(o.that)), o.mouse[1]),
                o.extent
              )
            );
        }
        function e() {
          u.on("mousemove.zoom mouseup.zoom", null),
            _t(t.event.view, o.moved),
            Uw(),
            o.end();
        }
        if (!y && g.apply(this, arguments)) {
          var o = a(this, arguments),
            u = vl(t.event.view)
              .on("mousemove.zoom", n, !0)
              .on("mouseup.zoom", e, !0),
            c = Rf(this);
          xl(t.event.view),
            ws(),
            (o.mouse = [c, this.__zoom.invert(c)]),
            ap(this),
            o.start();
        }
      }
      function l() {
        if (g.apply(this, arguments)) {
          var o = this.__zoom,
            a = Rf(this),
            c = o.invert(a),
            s = o.k * (t.event.shiftKey ? 0.5 : 2),
            f = i(r(e(o, s), a, c), m.apply(this, arguments));
          Uw(),
            k > 0
              ? vl(this).transition().duration(k).call(u, f, a)
              : vl(this).call(n.transform, f);
        }
      }
      function h() {
        if (g.apply(this, arguments)) {
          var n,
            e,
            r,
            i,
            o = a(this, arguments),
            u = t.event.changedTouches,
            c = u.length;
          for (ws(), e = 0; e < c; ++e)
            (r = u[e]),
              (i = yl(this, u, r.identifier)),
              (i = [i, this.__zoom.invert(i), r.identifier]),
              o.touch0
                ? o.touch1 || (o.touch1 = i)
                : ((o.touch0 = i), (n = !0));
          return _ && ((_ = clearTimeout(_)), !o.touch1)
            ? (o.end(),
              (i = vl(this).on("dblclick.zoom")),
              void (i && i.apply(this, arguments)))
            : void (
                n &&
                ((_ = setTimeout(function () {
                  _ = null;
                }, z)),
                ap(this),
                o.start())
              );
        }
      }
      function d() {
        var n,
          o,
          u,
          c,
          s = a(this, arguments),
          f = t.event.changedTouches,
          l = f.length;
        for (Uw(), _ && (_ = clearTimeout(_)), n = 0; n < l; ++n)
          (o = f[n]),
            (u = yl(this, f, o.identifier)),
            s.touch0 && s.touch0[2] === o.identifier
              ? (s.touch0[0] = u)
              : s.touch1 && s.touch1[2] === o.identifier && (s.touch1[0] = u);
        if (((o = s.that.__zoom), s.touch1)) {
          var h = s.touch0[0],
            p = s.touch0[1],
            d = s.touch1[0],
            v = s.touch1[1],
            y = (y = d[0] - h[0]) * y + (y = d[1] - h[1]) * y,
            g = (g = v[0] - p[0]) * g + (g = v[1] - p[1]) * g;
          (o = e(o, Math.sqrt(y / g))),
            (u = [(h[0] + d[0]) / 2, (h[1] + d[1]) / 2]),
            (c = [(p[0] + v[0]) / 2, (p[1] + v[1]) / 2]);
        } else {
          if (!s.touch0) return;
          (u = s.touch0[0]), (c = s.touch0[1]);
        }
        s.zoom("touch", i(r(o, u, c), s.extent));
      }
      function v() {
        var n,
          e,
          r = a(this, arguments),
          i = t.event.changedTouches,
          o = i.length;
        for (
          ws(),
            y && clearTimeout(y),
            y = setTimeout(function () {
              y = null;
            }, z),
            n = 0;
          n < o;
          ++n
        )
          (e = i[n]),
            r.touch0 && r.touch0[2] === e.identifier
              ? delete r.touch0
              : r.touch1 && r.touch1[2] === e.identifier && delete r.touch1;
        r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1),
          r.touch0 || r.end();
      }
      var _,
        y,
        g = Ms,
        m = Ts,
        x = 0,
        b = 1 / 0,
        w = -b,
        M = b,
        T = w,
        N = M,
        k = 250,
        E = Ph,
        A = [],
        C = p("start", "zoom", "end"),
        z = 500,
        P = 150;
      return (
        (n.transform = function (t, n) {
          var e = t.selection ? t.selection() : t;
          e.property("__zoom", Ns),
            t !== e
              ? u(t, n)
              : e.interrupt().each(function () {
                  a(this, arguments)
                    .start()
                    .zoom(
                      null,
                      "function" == typeof n ? n.apply(this, arguments) : n
                    )
                    .end();
                });
        }),
        (n.scaleBy = function (t, e) {
          n.scaleTo(t, function () {
            var t = this.__zoom.k,
              n = "function" == typeof e ? e.apply(this, arguments) : e;
            return t * n;
          });
        }),
        (n.scaleTo = function (t, u) {
          n.transform(t, function () {
            var t = m.apply(this, arguments),
              n = this.__zoom,
              a = o(t),
              c = n.invert(a),
              s = "function" == typeof u ? u.apply(this, arguments) : u;
            return i(r(e(n, s), a, c), t);
          });
        }),
        (n.translateBy = function (t, e, r) {
          n.transform(t, function () {
            return i(
              this.__zoom.translate(
                "function" == typeof e ? e.apply(this, arguments) : e,
                "function" == typeof r ? r.apply(this, arguments) : r
              ),
              m.apply(this, arguments)
            );
          });
        }),
        (c.prototype = {
          start: function () {
            return (
              1 === ++this.active &&
                ((this.index = A.push(this) - 1), this.emit("start")),
              this
            );
          },
          zoom: function (t, n) {
            return (
              this.mouse &&
                "mouse" !== t &&
                (this.mouse[1] = n.invert(this.mouse[0])),
              this.touch0 &&
                "touch" !== t &&
                (this.touch0[1] = n.invert(this.touch0[0])),
              this.touch1 &&
                "touch" !== t &&
                (this.touch1[1] = n.invert(this.touch1[0])),
              (this.that.__zoom = n),
              this.emit("zoom"),
              this
            );
          },
          end: function () {
            return (
              0 === --this.active &&
                (A.splice(this.index, 1), (this.index = -1), this.emit("end")),
              this
            );
          },
          emit: function (t) {
            S(new ms(n, t, this.that.__zoom), C.apply, C, [
              t,
              this.that,
              this.args,
            ]);
          },
        }),
        (n.filter = function (t) {
          return arguments.length
            ? ((g = "function" == typeof t ? t : qw(!!t)), n)
            : g;
        }),
        (n.extent = function (t) {
          return arguments.length
            ? ((m =
                "function" == typeof t
                  ? t
                  : qw([
                      [+t[0][0], +t[0][1]],
                      [+t[1][0], +t[1][1]],
                    ])),
              n)
            : m;
        }),
        (n.scaleExtent = function (t) {
          return arguments.length ? ((x = +t[0]), (b = +t[1]), n) : [x, b];
        }),
        (n.translateExtent = function (t) {
          return arguments.length
            ? ((w = +t[0][0]),
              (M = +t[1][0]),
              (T = +t[0][1]),
              (N = +t[1][1]),
              n)
            : [
                [w, T],
                [M, N],
              ];
        }),
        (n.duration = function (t) {
          return arguments.length ? ((k = +t), n) : k;
        }),
        (n.interpolate = function (t) {
          return arguments.length ? ((E = t), n) : E;
        }),
        (n.on = function () {
          var t = C.on.apply(C, arguments);
          return t === C ? n : t;
        }),
        n
      );
    };
  (t.version = ks),
    (t.bisect = Cs),
    (t.bisectRight = Cs),
    (t.bisectLeft = zs),
    (t.ascending = Ss),
    (t.bisector = Es),
    (t.descending = Ps),
    (t.deviation = Ls),
    (t.extent = Us),
    (t.histogram = $s),
    (t.thresholdFreedmanDiaconis = Gs),
    (t.thresholdScott = Js),
    (t.thresholdSturges = Ws),
    (t.max = Qs),
    (t.mean = Ks),
    (t.median = tf),
    (t.merge = nf),
    (t.min = ef),
    (t.pairs = rf),
    (t.permute = of),
    (t.quantile = Zs),
    (t.range = Bs),
    (t.scan = uf),
    (t.shuffle = af),
    (t.sum = cf),
    (t.ticks = Vs),
    (t.tickStep = e),
    (t.transpose = sf),
    (t.variance = qs),
    (t.zip = ff),
    (t.axisTop = s),
    (t.axisRight = f),
    (t.axisBottom = l),
    (t.axisLeft = h),
    (t.brush = bd),
    (t.brushX = Ee),
    (t.brushY = Ae),
    (t.brushSelection = Se),
    (t.chord = Ed),
    (t.ribbon = Ld),
    (t.nest = Dd),
    (t.set = Ve),
    (t.map = Ie),
    (t.keys = Fd),
    (t.values = Id),
    (t.entries = Yd),
    (t.color = Mt),
    (t.rgb = St),
    (t.hsl = zt),
    (t.lab = Lt),
    (t.hcl = Bt),
    (t.cubehelix = Xt),
    (t.dispatch = p),
    (t.drag = wl),
    (t.dragDisable = xl),
    (t.dragEnable = _t),
    (t.dsvFormat = Bd),
    (t.csvParse = Hd),
    (t.csvParseRows = Xd),
    (t.csvFormat = Vd),
    (t.csvFormatRows = Wd),
    (t.tsvParse = Zd),
    (t.tsvParseRows = Gd),
    (t.tsvFormat = Jd),
    (t.tsvFormatRows = Qd),
    (t.easeLinear = ne),
    (t.easeQuad = ie),
    (t.easeQuadIn = ee),
    (t.easeQuadOut = re),
    (t.easeQuadInOut = ie),
    (t.easeCubic = ae),
    (t.easeCubicIn = oe),
    (t.easeCubicOut = ue),
    (t.easeCubicInOut = ae),
    (t.easePoly = Rp),
    (t.easePolyIn = zp),
    (t.easePolyOut = Pp),
    (t.easePolyInOut = Rp),
    (t.easeSin = fe),
    (t.easeSinIn = ce),
    (t.easeSinOut = se),
    (t.easeSinInOut = fe),
    (t.easeExp = pe),
    (t.easeExpIn = le),
    (t.easeExpOut = he),
    (t.easeExpInOut = pe),
    (t.easeCircle = _e),
    (t.easeCircleIn = de),
    (t.easeCircleOut = ve),
    (t.easeCircleInOut = _e),
    (t.easeBounce = ge),
    (t.easeBounceIn = ye),
    (t.easeBounceOut = ge),
    (t.easeBounceInOut = me),
    (t.easeBack = Zp),
    (t.easeBackIn = Wp),
    (t.easeBackOut = $p),
    (t.easeBackInOut = Zp),
    (t.easeElastic = td),
    (t.easeElasticIn = Kp),
    (t.easeElasticOut = td),
    (t.easeElasticInOut = nd),
    (t.forceCenter = Kd),
    (t.forceCollide = yv),
    (t.forceLink = gv),
    (t.forceManyBody = wv),
    (t.forceSimulation = bv),
    (t.forceX = Mv),
    (t.forceY = Tv),
    (t.formatDefaultLocale = hr),
    (t.formatLocale = Uv),
    (t.formatSpecifier = Rv),
    (t.precisionFixed = Dv),
    (t.precisionPrefix = Ov),
    (t.precisionRound = Fv),
    (t.geoArea = X_),
    (t.geoBounds = $_),
    (t.geoCentroid = G_),
    (t.geoCircle = ly),
    (t.geoClipExtent = gy),
    (t.geoDistance = Ty),
    (t.geoGraticule = vi),
    (t.geoGraticule10 = _i),
    (t.geoInterpolate = Ny),
    (t.geoLength = by),
    (t.geoPath = Qy),
    (t.geoAlbers = fg),
    (t.geoAlbersUsa = lg),
    (t.geoAzimuthalEqualArea = pg),
    (t.geoAzimuthalEqualAreaRaw = hg),
    (t.geoAzimuthalEquidistant = vg),
    (t.geoAzimuthalEquidistantRaw = dg),
    (t.geoConicConformal = yg),
    (t.geoConicConformalRaw = io),
    (t.geoConicEqualArea = sg),
    (t.geoConicEqualAreaRaw = Ji),
    (t.geoConicEquidistant = mg),
    (t.geoConicEquidistantRaw = uo),
    (t.geoEquirectangular = gg),
    (t.geoEquirectangularRaw = oo),
    (t.geoGnomonic = xg),
    (t.geoGnomonicRaw = ao),
    (t.geoIdentity = bg),
    (t.geoProjection = Wi),
    (t.geoProjectionMutator = $i),
    (t.geoMercator = _g),
    (t.geoMercatorRaw = no),
    (t.geoOrthographic = wg),
    (t.geoOrthographicRaw = so),
    (t.geoStereographic = Mg),
    (t.geoStereographicRaw = fo),
    (t.geoTransverseMercator = Tg),
    (t.geoTransverseMercatorRaw = lo),
    (t.geoRotation = fy),
    (t.geoStream = Y_),
    (t.geoTransform = ig),
    (t.cluster = Ng),
    (t.hierarchy = wo),
    (t.pack = Yg),
    (t.packSiblings = Fg),
    (t.packEnclose = Og),
    (t.partition = Hg),
    (t.stratify = $g),
    (t.tree = Zg),
    (t.treemap = Kg),
    (t.treemapBinary = tm),
    (t.treemapDice = jg),
    (t.treemapSlice = Gg),
    (t.treemapSliceDice = nm),
    (t.treemapSquarify = Qg),
    (t.treemapResquarify = em),
    (t.interpolate = bh),
    (t.interpolateArray = dh),
    (t.interpolateBasis = ch),
    (t.interpolateBasisClosed = sh),
    (t.interpolateDate = vh),
    (t.interpolateNumber = _h),
    (t.interpolateObject = yh),
    (t.interpolateRound = wh),
    (t.interpolateString = xh),
    (t.interpolateTransformCss = kh),
    (t.interpolateTransformSvg = Sh),
    (t.interpolateZoom = Ph),
    (t.interpolateRgb = lh),
    (t.interpolateRgbBasis = hh),
    (t.interpolateRgbBasisClosed = ph),
    (t.interpolateHsl = Rh),
    (t.interpolateHslLong = qh),
    (t.interpolateLab = fn),
    (t.interpolateHcl = Lh),
    (t.interpolateHclLong = Uh),
    (t.interpolateCubehelix = Dh),
    (t.interpolateCubehelixLong = Oh),
    (t.quantize = Fh),
    (t.path = Re),
    (t.polygonArea = rm),
    (t.polygonCentroid = im),
    (t.polygonHull = um),
    (t.polygonContains = am),
    (t.polygonLength = cm);
  t.quadtree = nr;
  (t.queue = hu),
    (t.randomUniform = lm),
    (t.randomNormal = hm),
    (t.randomLogNormal = pm),
    (t.randomBates = vm),
    (t.randomIrwinHall = dm),
    (t.randomExponential = _m),
    (t.request = ym),
    (t.html = mm),
    (t.json = xm),
    (t.text = bm),
    (t.xml = wm),
    (t.csv = Tm),
    (t.tsv = Nm),
    (t.scaleBand = yu),
    (t.scalePoint = mu),
    (t.scaleIdentity = Au),
    (t.scaleLinear = Eu),
    (t.scaleLog = Uu),
    (t.scaleOrdinal = _u),
    (t.scaleImplicit = Am),
    (t.scalePow = Ou),
    (t.scaleSqrt = Fu),
    (t.scaleQuantile = Iu),
    (t.scaleQuantize = Yu),
    (t.scaleThreshold = Bu),
    (t.scaleTime = nb),
    (t.scaleUtc = eb),
    (t.schemeCategory10 = ib),
    (t.schemeCategory20b = ob),
    (t.schemeCategory20c = ub),
    (t.schemeCategory20 = ab),
    (t.interpolateCubehelixDefault = cb),
    (t.interpolateRainbow = hb),
    (t.interpolateWarm = sb),
    (t.interpolateCool = fb),
    (t.interpolateViridis = pb),
    (t.interpolateMagma = db),
    (t.interpolateInferno = vb),
    (t.interpolatePlasma = _b),
    (t.scaleSequential = Ga),
    (t.creator = wf),
    (t.local = x),
    (t.matcher = Sf),
    (t.mouse = Rf),
    (t.namespace = bf),
    (t.namespaces = xf),
    (t.select = vl),
    (t.selectAll = _l),
    (t.selection = dt),
    (t.selector = qf),
    (t.selectorAll = Uf),
    (t.touch = yl),
    (t.touches = gl),
    (t.window = nl),
    (t.customEvent = S),
    (t.arc = wb),
    (t.area = Nb),
    (t.line = Tb),
    (t.pie = Eb),
    (t.radialArea = zb),
    (t.radialLine = Cb),
    (t.symbol = Jb),
    (t.symbols = Gb),
    (t.symbolCircle = Pb),
    (t.symbolCross = Rb),
    (t.symbolDiamond = Ub),
    (t.symbolSquare = Bb),
    (t.symbolStar = Yb),
    (t.symbolTriangle = Hb),
    (t.symbolWye = Zb),
    (t.curveBasisClosed = tw),
    (t.curveBasisOpen = nw),
    (t.curveBasis = Kb),
    (t.curveBundle = ew),
    (t.curveCardinalClosed = iw),
    (t.curveCardinalOpen = ow),
    (t.curveCardinal = rw),
    (t.curveCatmullRomClosed = aw),
    (t.curveCatmullRomOpen = cw),
    (t.curveCatmullRom = uw),
    (t.curveLinearClosed = sw),
    (t.curveLinear = Mb),
    (t.curveMonotoneX = Pc),
    (t.curveMonotoneY = Rc),
    (t.curveNatural = fw),
    (t.curveStep = lw),
    (t.curveStepAfter = Oc),
    (t.curveStepBefore = Dc),
    (t.stack = vw),
    (t.stackOffsetExpand = _w),
    (t.stackOffsetNone = pw),
    (t.stackOffsetSilhouette = yw),
    (t.stackOffsetWiggle = gw),
    (t.stackOrderAscending = mw),
    (t.stackOrderDescending = xw),
    (t.stackOrderInsideOut = bw),
    (t.stackOrderNone = dw),
    (t.stackOrderReverse = ww),
    (t.timeInterval = ju),
    (t.timeMillisecond = Dm),
    (t.timeMilliseconds = Om),
    (t.utcMillisecond = Dm),
    (t.utcMilliseconds = Om),
    (t.timeSecond = Hm),
    (t.timeSeconds = Xm),
    (t.utcSecond = Hm),
    (t.utcSeconds = Xm),
    (t.timeMinute = Vm),
    (t.timeMinutes = Wm),
    (t.timeHour = $m),
    (t.timeHours = Zm),
    (t.timeDay = Gm),
    (t.timeDays = Jm),
    (t.timeWeek = Qm),
    (t.timeWeeks = ox),
    (t.timeSunday = Qm),
    (t.timeSundays = ox),
    (t.timeMonday = Km),
    (t.timeMondays = ux),
    (t.timeTuesday = tx),
    (t.timeTuesdays = ax),
    (t.timeWednesday = nx),
    (t.timeWednesdays = cx),
    (t.timeThursday = ex),
    (t.timeThursdays = sx),
    (t.timeFriday = rx),
    (t.timeFridays = fx),
    (t.timeSaturday = ix),
    (t.timeSaturdays = lx),
    (t.timeMonth = hx),
    (t.timeMonths = px),
    (t.timeYear = dx),
    (t.timeYears = vx),
    (t.utcMinute = _x),
    (t.utcMinutes = yx),
    (t.utcHour = gx),
    (t.utcHours = mx),
    (t.utcDay = xx),
    (t.utcDays = bx),
    (t.utcWeek = wx),
    (t.utcWeeks = Ax),
    (t.utcSunday = wx),
    (t.utcSundays = Ax),
    (t.utcMonday = Mx),
    (t.utcMondays = Cx),
    (t.utcTuesday = Tx),
    (t.utcTuesdays = zx),
    (t.utcWednesday = Nx),
    (t.utcWednesdays = Px),
    (t.utcThursday = kx),
    (t.utcThursdays = Rx),
    (t.utcFriday = Sx),
    (t.utcFridays = qx),
    (t.utcSaturday = Ex),
    (t.utcSaturdays = Lx),
    (t.utcMonth = Ux),
    (t.utcMonths = Dx),
    (t.utcYear = Ox),
    (t.utcYears = Ix),
    (t.timeFormatDefaultLocale = ja),
    (t.timeFormatLocale = Zu),
    (t.isoFormat = Vx),
    (t.isoParse = Wx),
    (t.now = pn),
    (t.timer = _n),
    (t.timerFlush = yn),
    (t.timeout = Zh),
    (t.interval = Gh),
    (t.transition = Kn),
    (t.active = od),
    (t.interrupt = ap),
    (t.voronoi = Rw),
    (t.zoom = Dw),
    (t.zoomTransform = bs),
    (t.zoomIdentity = Lw),
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
});
