(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{306:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"issues"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#issues"}},[t._v("#")]),t._v(" Issues")]),t._v(" "),e("p",[t._v("This document documents some common usage issues, if you find an exception in using the latest version of OpenEX. Please submit it to")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/MCZZCS/OpenEXPro/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Issues"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"compile-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-error"}},[t._v("#")]),t._v(" Compile Error")]),t._v(" "),e("p",[t._v("Once your script compiles with an exception, you will see the console print the following information.")]),t._v(" "),e("p",[t._v("Here we take a script with syntax errors as an example.")]),t._v(" "),e("div",{staticClass:"language-openex line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('include "system";\n\nvalue a = 12;\n\nsystem.print(b);\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("After OpenEX starts, the following results are output")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Compile Error: Unable to resolve symbols.\n    Token: b\n    Line: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    Filename: script.exf\n    Edition: OpenEX Pro\n    Version: v0.1.4\nLocation:\n    system.print"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                 ^\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"error-table"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-table"}},[t._v("#")]),t._v(" Error table")]),t._v(" "),e("p",[t._v("The following is a comparison table of all compile errors")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("ID")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lr.b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("'}' expected.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check that the parentheses are complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lp.b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("'{' expected.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check that the parentheses are complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lr.s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("'(' expected.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check that the parentheses are complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lp.s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("')' expected.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check that the parentheses are complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.sem.marks")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("'\"' expected.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check that the quotation marks are complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.sem.call")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("'.' expected.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check whether the function call statement is complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("miss.function.body")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Missing function body.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Functions have no defined body.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("miss.statement.body")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Missing statement body.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No such statement body.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type.not.valid")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Type name is not valid.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Check whether the function or variable name is represented by the Identifier Type field")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("unable.resolve.symbols")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Unable to resolve symbols.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check variables are defined or imported runtime library")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("not.statement")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Not a statement")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check statement is complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.expression.start")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Illegal start of expression.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check expression is complete")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.expression.comb")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Illegal combination of expressions.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check expression is correct")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.string.escape")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Illegal escape character in string literal.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Please check escape characters in the string are correct")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.key")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Illegal keywords.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("An illegal keyword appears in the initial value of the variable")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("outside.function.return")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Return outside function.")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The "),e("code",[t._v("return")]),t._v(" statement is defined outside the function body")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("outside.loop.back")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Back outside loop")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The "),e("code",[t._v("return")]),t._v(" statement is defined outside the loop body")])])])]),t._v(" "),e("h2",{attrs:{id:"runtime-error"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runtime-error"}},[t._v("#")]),t._v(" Runtime Error")]),t._v(" "),e("p",[t._v("Usually this combination of error statements is legal and cannot be parsed by the front-end compiler. However, exceptions occur at runtime")]),t._v(" "),e("p",[t._v("Here we take a script with a runtime error as an example")]),t._v(" "),e("div",{staticClass:"language-openex line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('include "system";\n\nvalue ary = [1,2,3];\n\nsystem.print(ary[3]);\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("After OpenEX starts, the following results are output")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("ScriptRuntimeError: Array index out of bounds,length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index:3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index:3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tThreadName: main\n\tFileName: main.exf\n\tException: INDEX_OUT_OF_BOUND_EXCEPTION\n\tEdition: OpenEX Pro\n\tVersion: v0.1.2\nCall stack struct:\n\tat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main.exf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(": loader.boot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Script Loader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main.exf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(": array.get_object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Runtime Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("Runtime errors output a script call stack, typically enclosing the type of each stack frame")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Script Loader")]),t._v(" Not create by user, which is a loader function used by the execution engine to execute user scripts")]),t._v(" "),e("li",[e("code",[t._v("User Script")]),t._v(" A script function created by a user")]),t._v(" "),e("li",[e("code",[t._v("Runtime Function")]),t._v(" Runtime implementation functions, not created by script users. Implemented by the runtime itself or by an external extension")])]),t._v(" "),e("h3",{attrs:{id:"error-table-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-table-2"}},[t._v("#")]),t._v(" Error table")]),t._v(" "),e("p",[t._v("The following are all runtime exceptions")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("catch")]),t._v(":  Whether it can be handled by the 'try-catch' statement")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("code",[t._v("catch")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("VM_ERROR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("An error occurred internally at runtime")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("NO")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("VM_OP_STACK_ERROR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("An exception occurred on the operation stack of the stack frame")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("NO")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NULL_PRINT_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Null print exception")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("INDEX_OUT_OF_BOUNDS_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Index out of bounds exception")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ILLEGAL_ACCESS_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Illegal parameter exception")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("FILE_IO_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("File I/O operation exception")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NO_SUCH_FUNCTION_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Not found function")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE_CAST_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("An exception occurred in the type conversion")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NO_SUCH_VALUE_ERROR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Not found value")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("NO")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Tip")]),t._v(" "),e("p",[t._v("In the "),e("code",[t._v("OpenEX Pro")]),t._v(" series, versions "),e("code",[t._v("v0.1.1")]),t._v(" and below have no exception error types and call stack output, and before they were replaced, the JVM call stack structure was printed directly.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);