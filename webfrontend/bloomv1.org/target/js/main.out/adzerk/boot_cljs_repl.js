// Compiled by ClojureScript 1.9.89 {}
goog.provide('adzerk.boot_cljs_repl');
goog.require('cljs.core');
goog.require('weasel.repl');
var repl_conn_10280 = "ws://localhost:50702";
if(cljs.core.truth_((function (){var and__6534__auto__ = repl_conn_10280;
if(cljs.core.truth_(and__6534__auto__)){
return cljs.core.not.call(null,weasel.repl.alive_QMARK_.call(null));
} else {
return and__6534__auto__;
}
})())){
weasel.repl.connect.call(null,"ws://localhost:50702");
} else {
}

//# sourceMappingURL=boot_cljs_repl.js.map