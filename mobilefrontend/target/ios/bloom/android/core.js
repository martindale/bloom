// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloom.android.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('re_natal.support');
goog.require('bloom.state');
window.React = require("react");
bloom.android.core.ReactNative = require("react-native");
bloom.android.core.create_element = (function bloom$android$core$create_element(var_args){
var args__21331__auto__ = [];
var len__21324__auto___23948 = arguments.length;
var i__21325__auto___23949 = (0);
while(true){
if((i__21325__auto___23949 < len__21324__auto___23948)){
args__21331__auto__.push((arguments[i__21325__auto___23949]));

var G__23950 = (i__21325__auto___23949 + (1));
i__21325__auto___23949 = G__23950;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((2) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((2)),(0),null)):null);
return bloom.android.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21332__auto__);
});

bloom.android.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (rn_comp,opts,children){
return cljs.core.apply.call(null,React.createElement,rn_comp,cljs.core.clj__GT_js.call(null,opts),children);
});

bloom.android.core.create_element.cljs$lang$maxFixedArity = (2);

bloom.android.core.create_element.cljs$lang$applyTo = (function (seq23945){
var G__23946 = cljs.core.first.call(null,seq23945);
var seq23945__$1 = cljs.core.next.call(null,seq23945);
var G__23947 = cljs.core.first.call(null,seq23945__$1);
var seq23945__$2 = cljs.core.next.call(null,seq23945__$1);
return bloom.android.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__23946,G__23947,seq23945__$2);
});

bloom.android.core.app_registry = bloom.android.core.ReactNative.AppRegistry;
bloom.android.core.view = cljs.core.partial.call(null,bloom.android.core.create_element,bloom.android.core.ReactNative.View);
bloom.android.core.text = cljs.core.partial.call(null,bloom.android.core.create_element,bloom.android.core.ReactNative.Text);
bloom.android.core.image = cljs.core.partial.call(null,bloom.android.core.create_element,bloom.android.core.ReactNative.Image);
bloom.android.core.touchable_highlight = cljs.core.partial.call(null,bloom.android.core.create_element,bloom.android.core.ReactNative.TouchableHighlight);
bloom.android.core.logo_img = require("./images/cljs.png");
bloom.android.core.alert = (function bloom$android$core$alert(title){
return bloom.android.core.ReactNative.Alert.alert(title);
});
/**
 * @constructor
 */
bloom.android.core.AppRoot = (function bloom$android$core$AppRoot(){
var this__23341__auto__ = this;
React.Component.apply(this__23341__auto__,arguments);

if(!((this__23341__auto__.initLocalState == null))){
this__23341__auto__.state = this__23341__auto__.initLocalState();
} else {
this__23341__auto__.state = {};
}

return this__23341__auto__;
});

bloom.android.core.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x23955_23967 = bloom.android.core.AppRoot.prototype;
x23955_23967.componentWillUpdate = ((function (x23955_23967){
return (function (next_props__23220__auto__,next_state__23221__auto__){
var this__23219__auto__ = this;
if(((!((this__23219__auto__ == null)))?(((false) || (this__23219__auto__.om$next$Ident$))?true:false):false)){
var ident__23223__auto___23968 = om.next.ident.call(null,this__23219__auto__,om.next.props.call(null,this__23219__auto__));
var next_ident__23224__auto___23969 = om.next.ident.call(null,this__23219__auto__,om.next._next_props.call(null,next_props__23220__auto__,this__23219__auto__));
if(cljs.core.not_EQ_.call(null,ident__23223__auto___23968,next_ident__23224__auto___23969)){
var idxr__23225__auto___23970 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23219__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__23225__auto___23970 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__23225__auto___23970),((function (idxr__23225__auto___23970,ident__23223__auto___23968,next_ident__23224__auto___23969,this__23219__auto__,x23955_23967){
return (function (indexes__23226__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__23226__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__23223__auto___23968], null),cljs.core.disj,this__23219__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__23224__auto___23969], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__23219__auto__);
});})(idxr__23225__auto___23970,ident__23223__auto___23968,next_ident__23224__auto___23969,this__23219__auto__,x23955_23967))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__23219__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__23219__auto__);
});})(x23955_23967))
;

x23955_23967.shouldComponentUpdate = ((function (x23955_23967){
return (function (next_props__23220__auto__,next_state__23221__auto__){
var this__23219__auto__ = this;
var next_children__23222__auto__ = next_props__23220__auto__.children;
var next_props__23220__auto____$1 = goog.object.get(next_props__23220__auto__,"omcljs$value");
var next_props__23220__auto____$2 = (function (){var G__23957 = next_props__23220__auto____$1;
if((next_props__23220__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__23957);
} else {
return G__23957;
}
})();
var or__20141__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__23219__auto__),next_props__23220__auto____$2);
if(or__20141__auto__){
return or__20141__auto__;
} else {
var or__20141__auto____$1 = (function (){var and__20129__auto__ = this__23219__auto__.state;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__23219__auto__.state,"omcljs$state"),goog.object.get(next_state__23221__auto__,"omcljs$state"));
} else {
return and__20129__auto__;
}
})();
if(cljs.core.truth_(or__20141__auto____$1)){
return or__20141__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__23219__auto__.props.children,next_children__23222__auto__);
}
}
});})(x23955_23967))
;

x23955_23967.componentWillUnmount = ((function (x23955_23967){
return (function (){
var this__23219__auto__ = this;
var r__23230__auto__ = om.next.get_reconciler.call(null,this__23219__auto__);
var cfg__23231__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__23230__auto__);
var st__23232__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__23231__auto__);
var indexer__23229__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__23231__auto__);
if(cljs.core.truth_((function (){var and__20129__auto__ = !((st__23232__auto__ == null));
if(and__20129__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__23232__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__23219__auto__], null));
} else {
return and__20129__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__23232__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__23219__auto__);
} else {
}

if((indexer__23229__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__23229__auto__,this__23219__auto__);
}
});})(x23955_23967))
;

x23955_23967.componentDidUpdate = ((function (x23955_23967){
return (function (prev_props__23227__auto__,prev_state__23228__auto__){
var this__23219__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__23219__auto__);
});})(x23955_23967))
;

x23955_23967.isMounted = ((function (x23955_23967){
return (function (){
var this__23219__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__23219__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23955_23967))
;

x23955_23967.componentWillMount = ((function (x23955_23967){
return (function (){
var this__23219__auto__ = this;
var indexer__23229__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__23219__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__23229__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__23229__auto__,this__23219__auto__);
}
});})(x23955_23967))
;

x23955_23967.render = ((function (x23955_23967){
return (function (){
var this__23218__auto__ = this;
var this$ = this__23218__auto__;
var _STAR_reconciler_STAR_23958 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23959 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23960 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23961 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23962 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__23218__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__23218__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__23218__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__23218__auto__);

om.next._STAR_parent_STAR_ = this__23218__auto__;

try{var map__23963 = om.next.props.call(null,this$);
var map__23963__$1 = ((((!((map__23963 == null)))?((((map__23963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23963):map__23963);
var msg = cljs.core.get.call(null,map__23963__$1,new cljs.core.Keyword("app","msg","app/msg",-1386003639));
return bloom.android.core.view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),bloom.android.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(30),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"100",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(20),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null),msg),bloom.android.core.image.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),bloom.android.core.logo_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(30)], null)], null)),bloom.android.core.touchable_highlight.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#999",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(5)], null),new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (map__23963,map__23963__$1,msg,_STAR_reconciler_STAR_23958,_STAR_depth_STAR_23959,_STAR_shared_STAR_23960,_STAR_instrument_STAR_23961,_STAR_parent_STAR_23962,this$,this__23218__auto__,x23955_23967){
return (function (){
return bloom.android.core.alert.call(null,"HELLO!");
});})(map__23963,map__23963__$1,msg,_STAR_reconciler_STAR_23958,_STAR_depth_STAR_23959,_STAR_shared_STAR_23960,_STAR_instrument_STAR_23961,_STAR_parent_STAR_23962,this$,this__23218__auto__,x23955_23967))
], null),bloom.android.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),"press me")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23962;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23961;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23960;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23959;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23958;
}});})(x23955_23967))
;


bloom.android.core.AppRoot.prototype.constructor = bloom.android.core.AppRoot;

bloom.android.core.AppRoot.prototype.constructor.displayName = "bloom.android.core/AppRoot";

bloom.android.core.AppRoot.prototype.om$isComponent = true;

var x23965_23971 = bloom.android.core.AppRoot;
/** @nocollapse */
x23965_23971.om$next$IQuery$ = true;

/** @nocollapse */
x23965_23971.om$next$IQuery$query$arity$1 = ((function (x23965_23971){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x23965_23971))
;


var x23966_23972 = bloom.android.core.AppRoot.prototype;

x23966_23972.om$next$IQuery$ = true;


x23966_23972.om$next$IQuery$query$arity$1 = ((function (x23966_23972){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x23966_23972))
;


bloom.android.core.AppRoot.cljs$lang$type = true;

bloom.android.core.AppRoot.cljs$lang$ctorStr = "bloom.android.core/AppRoot";

bloom.android.core.AppRoot.cljs$lang$ctorPrWriter = (function (this__23344__auto__,writer__23345__auto__,opt__23346__auto__){
return cljs.core._write.call(null,writer__23345__auto__,"bloom.android.core/AppRoot");
});
if(typeof bloom.android.core.RootNode !== 'undefined'){
} else {
bloom.android.core.RootNode = re_natal.support.root_node_BANG_.call(null,(1));
}
if(typeof bloom.android.core.app_root !== 'undefined'){
} else {
bloom.android.core.app_root = om.next.factory.call(null,bloom.android.core.RootNode);
}
bloom.android.core.init = (function bloom$android$core$init(){
om.next.add_root_BANG_.call(null,bloom.state.reconciler,bloom.android.core.AppRoot,(1));

return bloom.android.core.app_registry.registerComponent("bloom",(function (){
return bloom.android.core.app_root;
}));
});

//# sourceMappingURL=core.js.map