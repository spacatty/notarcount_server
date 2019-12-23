(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["2d22c0ff"],
  {
    f241: function(n, e, t) {
      "use strict";
      t.r(e);
      var a = function() {
          var n = this,
            e = n.$createElement,
            t = n._self._c || e;
          return t(
            "q-layout",
            { attrs: { view: "lHh Lpr lFf" } },
            [t("q-page-container", [t("router-view")], 1)],
            1
          );
        },
        o = [],
        r = {
          name: "MyLayout",
          data: function() {
            return { leftDrawerOpen: !1 };
          }
        },
        s = r,
        u = t("2877"),
        c = t("4d5a"),
        i = t("09e3"),
        l = Object(u["a"])(s, a, o, !1, null, null, null);
      e["default"] = l.exports;
      l.options.components = Object.assign(
        { QLayout: c["a"], QPageContainer: i["a"] },
        l.options.components
      );
    }
  }
]);
