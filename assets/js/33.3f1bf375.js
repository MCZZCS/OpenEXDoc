(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{312:function(t,e,a){"use strict";a.r(e);var s=a(14),l=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"问题解决"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[t._v("#")]),t._v(" 问题解决")]),t._v(" "),e("p",[t._v("本文档记录了一些常见的使用问题,如果您在使用OpenEX最新版本中发现了异常.请递交到")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/MCZZCS/OpenEXPro/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Issues"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"编译型错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译型错误"}},[t._v("#")]),t._v(" 编译型错误")]),t._v(" "),e("p",[t._v("一旦您的脚本发生编译异常,您会看到控制台打印出以下信息")]),t._v(" "),e("p",[t._v("这里以一个具有语法错误的脚本为例")]),t._v(" "),e("div",{staticClass:"language-openex line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('include "system";\n\nvalue a = 12;\n\nsystem.print(b);\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("openex启动后会输出以下结果")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("Compile Error: Unable to resolve symbols.\n    Token: b\n    Line: "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n    Filename: script.exf\n    Edition: OpenEX Pro\n    Version: v0.1.4\nLocation:\n    system.print"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                 ^\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("h3",{attrs:{id:"对照表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对照表"}},[t._v("#")]),t._v(" 对照表")]),t._v(" "),e("p",[t._v("以下是所有编译型错误对照表")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("代号")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lr.b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("需要 '}'")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查括号是否完整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lp.b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("需要 '{'")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查括号是否完整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lr.s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("需要 '('")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查括号是否完整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.lp.s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("需要 ')'")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查括号是否完整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.sem.marks")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("需要 '\"'")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查引号是否完整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("need.sem.call")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("需要'.'")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查函数调用是否缺少符号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("miss.function.body")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("缺少函数体")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("function")]),t._v("定义的函数没有代码体")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("miss.statement.body")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("缺少语句体")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("if")]),t._v(" "),e("code",[t._v("while")]),t._v(" "),e("code",[t._v("for")]),t._v("等语句没有代码体")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("type.not.valid")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("类型名称无效")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查函数或变量名是否由是标识符类型字段")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("unable.resolve.symbols")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("无法解析符号")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查变量是否定义或是否导入运行时库")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("not.statement")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不是语句")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查语句是否完整")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.expression.start")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("非法的表达式开头")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查表达式是否正确")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.expression.comb")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("非法的表达式组合")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查表达式是否正确")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.string.escape")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("非法的转义字符")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("请检查字符串中的转义字符是否正确")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("illegal.key")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("非法的关键字")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("变量初始值出现非法关键字")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("outside.function.return")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("返回语句位于函数外部")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("return")]),t._v("语句定义在函数体外部")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("outside.loop.back")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("退出语句位于循环外部")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("break")]),t._v("语句定义在循环体外部")])])])]),t._v(" "),e("h2",{attrs:{id:"运行时错误"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行时错误"}},[t._v("#")]),t._v(" 运行时错误")]),t._v(" "),e("p",[t._v("通常这种错误语句的组合是合法的,无法由前端编译器解析出来.但是在运行时会发生异常")]),t._v(" "),e("p",[t._v("这里以一个具有运行时错误的脚本为例")]),t._v(" "),e("div",{staticClass:"language-openex line-numbers-mode"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('include "system";\n\nvalue ary = [1,2,3];\n\nsystem.print(ary[3]);\n')])]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("openex 启动后会输出以下结果")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v("ScriptRuntimeError: Array index out of bounds,length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index:3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index:3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tThreadName: main\n\tFileName: main.exf\n\tException: INDEX_OUT_OF_BOUND_EXCEPTION\n\tEdition: OpenEX Pro\n\tVersion: v0.1.2\nCall stack struct:\n\tat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main.exf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(": loader.boot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Script Loader"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("main.exf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(": array.get_object"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Runtime Function"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("运行时错误会输出脚本调用栈,通常会夹带每个栈帧的类型")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Script Loader")]),t._v(" 非用户创建, 是执行引擎执行用户脚本用的加载器函数")]),t._v(" "),e("li",[e("code",[t._v("User Script")]),t._v(" 由用户创建的脚本函数")]),t._v(" "),e("li",[e("code",[t._v("Runtime Function")]),t._v(" 运行库实现函数,非脚本用户创建. 由运行时本身或外部扩展实现")])]),t._v(" "),e("h3",{attrs:{id:"对照表-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#对照表-2"}},[t._v("#")]),t._v(" 对照表")]),t._v(" "),e("p",[t._v("以下是所有运行时异常")]),t._v(" "),e("blockquote",[e("p",[e("code",[t._v("catch")]),t._v(" : 是否可以被 "),e("code",[t._v("try-catch")]),t._v(" 语句处理")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[e("code",[t._v("catch")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("VM_ERROR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("运行时内部发生错误")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("NO")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("VM_OP_STACK_ERROR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("栈帧的操作栈发生异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("NO")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NULL_PRINT_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("空指针异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("INDEX_OUT_OF_BOUNDS_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("索引越界异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ILLEGAL_ACCESS_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("非法参数异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("FILE_IO_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("文件I/O操作异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NO_SUCH_FUNCTION_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("找不到函数异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("TYPE_CAST_EXCEPTION")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("类型转换发生异常")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("YES")])])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("冷知识")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("OpenEX Pro")]),t._v(" 系列中 "),e("code",[t._v("v0.1.1")]),t._v(" 版本及以下都是没有异常报错类型和调用栈输出的,被取而代之之前是直接打印出JVM调用栈结构")])])])}),[],!1,null,null,null);e.default=l.exports}}]);