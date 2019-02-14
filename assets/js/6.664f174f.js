(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{301:function(e,t,a){"use strict";a.r(t);var r=a(43),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"contribution-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Contribution Guide")]),e._v(" "),a("p",[e._v("Contribution is welcome! There are many ways you could help Vetur's development:")]),e._v(" "),a("ul",[a("li",[e._v("Writing Code")]),e._v(" "),a("li",[e._v("Improving Doc")]),e._v(" "),a("li",[e._v("Managing Issues")])]),e._v(" "),a("h2",{attrs:{id:"code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code","aria-hidden":"true"}},[e._v("#")]),e._v(" Code")]),e._v(" "),a("p",[e._v("Comment on feature requests that you'd like to contribute before sending PR.")]),e._v(" "),a("h4",{attrs:{id:"coding-style"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#coding-style","aria-hidden":"true"}},[e._v("#")]),e._v(" Coding Style")]),e._v(" "),a("ul",[a("li",[e._v("Prettier with 120 print-width")]),e._v(" "),a("li",[e._v("TSLint")]),e._v(" "),a("li",[a("code",[e._v("const")]),e._v(" over "),a("code",[e._v("let")]),e._v(" whenever possible")])]),e._v(" "),a("h4",{attrs:{id:"code-dev-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#code-dev-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Code Dev Guide")]),e._v(" "),a("p",[e._v("Vetur consists of 2 parts")]),e._v(" "),a("ul",[a("li",[e._v("Language Client as a normal VS Code extension")]),e._v(" "),a("li",[e._v("Vue Language Server")])]),e._v(" "),a("p",[e._v("The language client launches Vue Language Server on port 6005 whenever a Vue file is opened.")]),e._v(" "),a("p",[e._v("To compile:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yarn\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" server "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" yarn "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&&")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("\nyarn compile or\nyarn "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("watch")]),e._v("\n")])])]),a("p",[e._v("To debug:")]),e._v(" "),a("ul",[a("li",[e._v("The extension has 2 configurations for debugging i.e client and server.")]),e._v(" "),a("li",[e._v("Run the client configuration first.")]),e._v(" "),a("li",[e._v("As the client launches the language server lazily, open any .vue file so that the server is started.")]),e._v(" "),a("li",[e._v("Run the server configuration which binds the server code to port 6005 to enable debugging.")]),e._v(" "),a("li",[e._v("At this point breakpoints in both server and client code should work.")]),e._v(" "),a("li",[e._v("Alternatively, you can run the 'all' compound debug config too. You need to make sure to open a .vue file within 10 seconds so the server can be started and attached to")])]),e._v(" "),a("p",[e._v("It should look like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/vuejs/vetur/master/docs/images/debug.png",alt:"VS Code Debugging"}})]),e._v(" "),a("p",[a("strong",[a("code",[e._v("vetur.dev.vlsPath")])])]),e._v(" "),a("p",[e._v("You can use this setting to make Vetur load a development version of "),a("code",[e._v("vue-language-server")]),e._v(". Some use cases:")]),e._v(" "),a("ul",[a("li",[e._v("You fixed a bug in Vetur, but the PR is pending and won't be published anytime soon.")]),e._v(" "),a("li",[e._v("You want to use TS 3.1, but Vetur bundles TS 2.8.")]),e._v(" "),a("li",[e._v("You are contributing to Vetur, and would run alpha/beta/RC versions in your daily development to provide feedback and find bugs.")])]),e._v(" "),a("p",[e._v("Two ways of using it:")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("yarn global add vue-language-server")]),e._v(" and point the setting to "),a("code",[e._v("yarn global dir")]),e._v(" + "),a("code",[e._v("node_modules/vue-language-server")])]),e._v(" "),a("li",[e._v("Clone this repo, build it and point it to the ABSOLUTE path of "),a("code",[e._v("/server")])])]),e._v(" "),a("h4",{attrs:{id:"grammar-dev-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grammar-dev-guide","aria-hidden":"true"}},[e._v("#")]),e._v(" Grammar Dev Guide")]),e._v(" "),a("ul",[a("li",[e._v("Open the yaml files in "),a("code",[e._v("/syntax")])]),e._v(" "),a("li",[e._v("After editing use either "),a("code",[e._v("yarn build:grammar")]),e._v(" or "),a("code",[e._v("npm run build:grammar")]),e._v(" to build the json files")]),e._v(" "),a("li",[e._v("If you changed the "),a("code",[e._v("vue.yaml")]),e._v(" file, be sure to run the "),a("code",[e._v("vetur.generateGrammar")]),e._v(" command from the vscode command palette")])]),e._v(" "),a("blockquote",[a("p",[e._v("Tip: In VS Code, use F1 -> Inspect TM Scopes to view language scopes to debug the grammar:")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/vuejs/vetur/master/docs/images/scope.png",alt:"scope"}})]),e._v(" "),a("h2",{attrs:{id:"doc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doc","aria-hidden":"true"}},[e._v("#")]),e._v(" Doc")]),e._v(" "),a("p",[e._v("PR that fixes grammar & typo or clarify & illustrate usage is welcome.")]),e._v(" "),a("h2",{attrs:{id:"issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Issues")]),e._v(" "),a("ul",[a("li",[e._v("Answer other people's questions")]),e._v(" "),a("li",[e._v("Make & ask for repro cases")])])])},[],!1,null,null,null);s.options.__file="CONTRIBUTING.md";t.default=s.exports}}]);