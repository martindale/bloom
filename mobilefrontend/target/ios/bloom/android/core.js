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
var len__21324__auto___25205 = arguments.length;
var i__21325__auto___25206 = (0);
while(true){
if((i__21325__auto___25206 < len__21324__auto___25205)){
args__21331__auto__.push((arguments[i__21325__auto___25206]));

var G__25207 = (i__21325__auto___25206 + (1));
i__21325__auto___25206 = G__25207;
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

bloom.android.core.create_element.cljs$lang$applyTo = (function (seq25202){
var G__25203 = cljs.core.first.call(null,seq25202);
var seq25202__$1 = cljs.core.next.call(null,seq25202);
var G__25204 = cljs.core.first.call(null,seq25202__$1);
var seq25202__$2 = cljs.core.next.call(null,seq25202__$1);
return bloom.android.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__25203,G__25204,seq25202__$2);
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
var this__24198__auto__ = this;
React.Component.apply(this__24198__auto__,arguments);

if(!((this__24198__auto__.initLocalState == null))){
this__24198__auto__.state = this__24198__auto__.initLocalState();
} else {
this__24198__auto__.state = {};
}

return this__24198__auto__;
});

bloom.android.core.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x25212_25224 = bloom.android.core.AppRoot.prototype;
x25212_25224.componentWillUpdate = ((function (x25212_25224){
return (function (next_props__24053__auto__,next_state__24054__auto__){
var this__24052__auto__ = this;
if(((!((this__24052__auto__ == null)))?(((false) || (this__24052__auto__.om$next$Ident$))?true:false):false)){
var ident__24056__auto___25225 = om.next.ident.call(null,this__24052__auto__,om.next.props.call(null,this__24052__auto__));
var next_ident__24057__auto___25226 = om.next.ident.call(null,this__24052__auto__,om.next._next_props.call(null,next_props__24053__auto__,this__24052__auto__));
if(cljs.core.not_EQ_.call(null,ident__24056__auto___25225,next_ident__24057__auto___25226)){
var idxr__24058__auto___25227 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24052__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__24058__auto___25227 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__24058__auto___25227),((function (idxr__24058__auto___25227,ident__24056__auto___25225,next_ident__24057__auto___25226,this__24052__auto__,x25212_25224){
return (function (indexes__24059__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__24059__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__24056__auto___25225], null),cljs.core.disj,this__24052__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__24057__auto___25226], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__24052__auto__);
});})(idxr__24058__auto___25227,ident__24056__auto___25225,next_ident__24057__auto___25226,this__24052__auto__,x25212_25224))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__24052__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24052__auto__);
});})(x25212_25224))
;

x25212_25224.shouldComponentUpdate = ((function (x25212_25224){
return (function (next_props__24053__auto__,next_state__24054__auto__){
var this__24052__auto__ = this;
var next_children__24055__auto__ = next_props__24053__auto__.children;
var next_props__24053__auto____$1 = goog.object.get(next_props__24053__auto__,"omcljs$value");
var next_props__24053__auto____$2 = (function (){var G__25214 = next_props__24053__auto____$1;
if((next_props__24053__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__25214);
} else {
return G__25214;
}
})();
var or__20141__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24052__auto__),next_props__24053__auto____$2);
if(or__20141__auto__){
return or__20141__auto__;
} else {
var or__20141__auto____$1 = (function (){var and__20129__auto__ = this__24052__auto__.state;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24052__auto__.state,"omcljs$state"),goog.object.get(next_state__24054__auto__,"omcljs$state"));
} else {
return and__20129__auto__;
}
})();
if(cljs.core.truth_(or__20141__auto____$1)){
return or__20141__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__24052__auto__.props.children,next_children__24055__auto__);
}
}
});})(x25212_25224))
;

x25212_25224.componentWillUnmount = ((function (x25212_25224){
return (function (){
var this__24052__auto__ = this;
var r__24063__auto__ = om.next.get_reconciler.call(null,this__24052__auto__);
var cfg__24064__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24063__auto__);
var st__24065__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24064__auto__);
var indexer__24062__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24064__auto__);
if(cljs.core.truth_((function (){var and__20129__auto__ = !((st__24065__auto__ == null));
if(and__20129__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__24065__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__24052__auto__], null));
} else {
return and__20129__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__24065__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24052__auto__);
} else {
}

if((indexer__24062__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24062__auto__,this__24052__auto__);
}
});})(x25212_25224))
;

x25212_25224.componentDidUpdate = ((function (x25212_25224){
return (function (prev_props__24060__auto__,prev_state__24061__auto__){
var this__24052__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24052__auto__);
});})(x25212_25224))
;

x25212_25224.isMounted = ((function (x25212_25224){
return (function (){
var this__24052__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24052__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25212_25224))
;

x25212_25224.componentWillMount = ((function (x25212_25224){
return (function (){
var this__24052__auto__ = this;
var indexer__24062__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24052__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24062__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24062__auto__,this__24052__auto__);
}
});})(x25212_25224))
;

x25212_25224.render = ((function (x25212_25224){
return (function (){
var this__24051__auto__ = this;
var this$ = this__24051__auto__;
var _STAR_reconciler_STAR_25215 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25216 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25217 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25218 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25219 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__24051__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__24051__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__24051__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__24051__auto__);

om.next._STAR_parent_STAR_ = this__24051__auto__;

try{var map__25220 = om.next.props.call(null,this$);
var map__25220__$1 = ((((!((map__25220 == null)))?((((map__25220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25220):map__25220);
var msg = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword("app","msg","app/msg",-1386003639));
return bloom.android.core.view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),bloom.android.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(30),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"100",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(20),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null),msg),bloom.android.core.image.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),bloom.android.core.logo_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(30)], null)], null)),bloom.android.core.touchable_highlight.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#999",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(5)], null),new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (map__25220,map__25220__$1,msg,_STAR_reconciler_STAR_25215,_STAR_depth_STAR_25216,_STAR_shared_STAR_25217,_STAR_instrument_STAR_25218,_STAR_parent_STAR_25219,this$,this__24051__auto__,x25212_25224){
return (function (){
return bloom.android.core.alert.call(null,"HELLO!");
});})(map__25220,map__25220__$1,msg,_STAR_reconciler_STAR_25215,_STAR_depth_STAR_25216,_STAR_shared_STAR_25217,_STAR_instrument_STAR_25218,_STAR_parent_STAR_25219,this$,this__24051__auto__,x25212_25224))
], null),bloom.android.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),"press me")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25219;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25218;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25217;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25216;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25215;
}});})(x25212_25224))
;


bloom.android.core.AppRoot.prototype.constructor = bloom.android.core.AppRoot;

bloom.android.core.AppRoot.prototype.constructor.displayName = "bloom.android.core/AppRoot";

bloom.android.core.AppRoot.prototype.om$isComponent = true;

var x25222_25228 = bloom.android.core.AppRoot;
/** @nocollapse */
x25222_25228.om$next$IQuery$ = true;

/** @nocollapse */
x25222_25228.om$next$IQuery$query$arity$1 = ((function (x25222_25228){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x25222_25228))
;


var x25223_25229 = bloom.android.core.AppRoot.prototype;

x25223_25229.om$next$IQuery$ = true;


x25223_25229.om$next$IQuery$query$arity$1 = ((function (x25223_25229){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x25223_25229))
;


bloom.android.core.AppRoot.cljs$lang$type = true;

bloom.android.core.AppRoot.cljs$lang$ctorStr = "bloom.android.core/AppRoot";

bloom.android.core.AppRoot.cljs$lang$ctorPrWriter = (function (this__24201__auto__,writer__24202__auto__,opt__24203__auto__){
return cljs.core._write.call(null,writer__24202__auto__,"bloom.android.core/AppRoot");
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