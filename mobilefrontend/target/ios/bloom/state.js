// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloom.state');
goog.require('cljs.core');
goog.require('om.next');
goog.require('re_natal.support');
if(typeof bloom.state.app_state !== 'undefined'){
} else {
bloom.state.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app","msg","app/msg",-1386003639),"This is ClojureScript. :)"], null));
}
if(typeof bloom.state.read !== 'undefined'){
} else {
bloom.state.read = (function (){var method_table__21164__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21165__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21168__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"bloom.state","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21168__auto__,method_table__21164__auto__,prefer_table__21165__auto__,method_cache__21166__auto__,cached_hierarchy__21167__auto__));
})();
}
cljs.core._add_method.call(null,bloom.state.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__25160,k,_){
var map__25161 = p__25160;
var map__25161__$1 = ((((!((map__25161 == null)))?((((map__25161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25161):map__25161);
var state = cljs.core.get.call(null,map__25161__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__6726__auto__ = cljs.core.find.call(null,st,k);
if(cljs.core.truth_(temp__6726__auto__)){
var vec__25163 = temp__6726__auto__;
var ___$1 = cljs.core.nth.call(null,vec__25163,(0),null);
var v = cljs.core.nth.call(null,vec__25163,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
if(typeof bloom.state.reconciler !== 'undefined'){
} else {
bloom.state.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),bloom.state.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),bloom.state.read], null)),new cljs.core.Keyword(null,"root-render","root-render",835981146),re_natal.support.root_render,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),re_natal.support.root_unmount], null));
}

//# sourceMappingURL=state.js.map