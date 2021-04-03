(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{515:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"util"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util"}},[t._v("#")]),t._v(" @util")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("@util")]),t._v(" module provides various utilities.")]),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("util "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@util'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"util-memoize-ttl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#util-memoize-ttl"}},[t._v("#")]),t._v(" @util.memoize(ttl)")]),t._v(" "),a("p",[t._v("A decorator that allows memoization of a function based on\nthe arguments passed to it:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("memoize")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nf expensive_task"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# do something very expensive here...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The first time "),a("code",[t._v("expensive_task")]),t._v(" gets called with a set of arguments,\nit will be execute. The next time it's called with the same set of\narguments its result will be fetched from a cache (currently\nimplemented in-memory). Executions are going to be cached for a\nspecific timeframe, "),a("code",[t._v("ttl")]),t._v(" (in seconds).")]),t._v(" "),a("p",[t._v("Arguments are serialized using the "),a("code",[t._v("str()")]),t._v(" method:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.23")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "[12, {}, 0.23, \\"hello\\"]"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);