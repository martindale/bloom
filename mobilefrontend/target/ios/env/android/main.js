// Compiled by ClojureScript 1.9.229 {}
goog.provide('env.android.main');
goog.require('cljs.core');
goog.require('om.next');
goog.require('bloom.android.core');
goog.require('bloom.state');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),false,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return om.next.add_root_BANG_.call(null,bloom.state.reconciler,bloom.android.core.AppRoot,(1));
}));
bloom.android.core.init.call(null);
env.android.main.root_el = bloom.android.core.app_root.call(null);

//# sourceMappingURL=main.js.map