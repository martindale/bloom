// Compiled by ClojureScript 1.9.229 {}
goog.provide('bloom.ios.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('re_natal.support');
goog.require('bloom.state');
window.React = require("react");
bloom.ios.core.ReactNative = require("react-native");
bloom.ios.core.create_element = (function bloom$ios$core$create_element(var_args){
var args__21331__auto__ = [];
var len__21324__auto___31330 = arguments.length;
var i__21325__auto___31331 = (0);
while(true){
if((i__21325__auto___31331 < len__21324__auto___31330)){
args__21331__auto__.push((arguments[i__21325__auto___31331]));

var G__31332 = (i__21325__auto___31331 + (1));
i__21325__auto___31331 = G__31332;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((2) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((2)),(0),null)):null);
return bloom.ios.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21332__auto__);
});

bloom.ios.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (rn_comp,opts,children){
return cljs.core.apply.call(null,React.createElement,rn_comp,cljs.core.clj__GT_js.call(null,opts),children);
});

bloom.ios.core.create_element.cljs$lang$maxFixedArity = (2);

bloom.ios.core.create_element.cljs$lang$applyTo = (function (seq31327){
var G__31328 = cljs.core.first.call(null,seq31327);
var seq31327__$1 = cljs.core.next.call(null,seq31327);
var G__31329 = cljs.core.first.call(null,seq31327__$1);
var seq31327__$2 = cljs.core.next.call(null,seq31327__$1);
return bloom.ios.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__31328,G__31329,seq31327__$2);
});

bloom.ios.core.app_registry = bloom.ios.core.ReactNative.AppRegistry;
bloom.ios.core.view = cljs.core.partial.call(null,bloom.ios.core.create_element,bloom.ios.core.ReactNative.View);
bloom.ios.core.text = cljs.core.partial.call(null,bloom.ios.core.create_element,bloom.ios.core.ReactNative.Text);
bloom.ios.core.image = cljs.core.partial.call(null,bloom.ios.core.create_element,bloom.ios.core.ReactNative.Image);
bloom.ios.core.touchable_highlight = cljs.core.partial.call(null,bloom.ios.core.create_element,bloom.ios.core.ReactNative.TouchableHighlight);
bloom.ios.core.logo_img = require("./images/cljs.png");
bloom.ios.core.alert = (function bloom$ios$core$alert(title){
return bloom.ios.core.ReactNative.Alert.alert(title);
});
/**
 * @constructor
 */
bloom.ios.core.AppRoot = (function bloom$ios$core$AppRoot(){
var this__30264__auto__ = this;
React.Component.apply(this__30264__auto__,arguments);

if(!((this__30264__auto__.initLocalState == null))){
this__30264__auto__.state = this__30264__auto__.initLocalState();
} else {
this__30264__auto__.state = {};
}

return this__30264__auto__;
});

bloom.ios.core.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x31337_31349 = bloom.ios.core.AppRoot.prototype;
x31337_31349.componentWillUpdate = ((function (x31337_31349){
return (function (next_props__30143__auto__,next_state__30144__auto__){
var this__30142__auto__ = this;
if(((!((this__30142__auto__ == null)))?(((false) || (this__30142__auto__.om$next$Ident$))?true:false):false)){
var ident__30146__auto___31350 = om.next.ident.call(null,this__30142__auto__,om.next.props.call(null,this__30142__auto__));
var next_ident__30147__auto___31351 = om.next.ident.call(null,this__30142__auto__,om.next._next_props.call(null,next_props__30143__auto__,this__30142__auto__));
if(cljs.core.not_EQ_.call(null,ident__30146__auto___31350,next_ident__30147__auto___31351)){
var idxr__30148__auto___31352 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30148__auto___31352 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30148__auto___31352),((function (idxr__30148__auto___31352,ident__30146__auto___31350,next_ident__30147__auto___31351,this__30142__auto__,x31337_31349){
return (function (indexes__30149__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30149__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30146__auto___31350], null),cljs.core.disj,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30147__auto___31351], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30142__auto__);
});})(idxr__30148__auto___31352,ident__30146__auto___31350,next_ident__30147__auto___31351,this__30142__auto__,x31337_31349))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30142__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30142__auto__);
});})(x31337_31349))
;

x31337_31349.shouldComponentUpdate = ((function (x31337_31349){
return (function (next_props__30143__auto__,next_state__30144__auto__){
var this__30142__auto__ = this;
var next_children__30145__auto__ = next_props__30143__auto__.children;
var next_props__30143__auto____$1 = goog.object.get(next_props__30143__auto__,"omcljs$value");
var next_props__30143__auto____$2 = (function (){var G__31339 = next_props__30143__auto____$1;
if((next_props__30143__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31339);
} else {
return G__31339;
}
})();
var or__20141__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__30142__auto__),next_props__30143__auto____$2);
if(or__20141__auto__){
return or__20141__auto__;
} else {
var or__20141__auto____$1 = (function (){var and__20129__auto__ = this__30142__auto__.state;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__30142__auto__.state,"omcljs$state"),goog.object.get(next_state__30144__auto__,"omcljs$state"));
} else {
return and__20129__auto__;
}
})();
if(cljs.core.truth_(or__20141__auto____$1)){
return or__20141__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__30142__auto__.props.children,next_children__30145__auto__);
}
}
});})(x31337_31349))
;

x31337_31349.componentWillUnmount = ((function (x31337_31349){
return (function (){
var this__30142__auto__ = this;
var r__30153__auto__ = om.next.get_reconciler.call(null,this__30142__auto__);
var cfg__30154__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__30153__auto__);
var st__30155__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__30154__auto__);
var indexer__30152__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__30154__auto__);
if(cljs.core.truth_((function (){var and__20129__auto__ = !((st__30155__auto__ == null));
if(and__20129__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__30155__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__30142__auto__], null));
} else {
return and__20129__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__30155__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__30142__auto__);
} else {
}

if((indexer__30152__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__30152__auto__,this__30142__auto__);
}
});})(x31337_31349))
;

x31337_31349.componentDidUpdate = ((function (x31337_31349){
return (function (prev_props__30150__auto__,prev_state__30151__auto__){
var this__30142__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30142__auto__);
});})(x31337_31349))
;

x31337_31349.isMounted = ((function (x31337_31349){
return (function (){
var this__30142__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30142__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31337_31349))
;

x31337_31349.componentWillMount = ((function (x31337_31349){
return (function (){
var this__30142__auto__ = this;
var indexer__30152__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30152__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30152__auto__,this__30142__auto__);
}
});})(x31337_31349))
;

x31337_31349.render = ((function (x31337_31349){
return (function (){
var this__30141__auto__ = this;
var this$ = this__30141__auto__;
var _STAR_reconciler_STAR_31340 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31341 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31342 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31343 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31344 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30141__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30141__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30141__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30141__auto__);

om.next._STAR_parent_STAR_ = this__30141__auto__;

try{var map__31345 = om.next.props.call(null,this$);
var map__31345__$1 = ((((!((map__31345 == null)))?((((map__31345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31345):map__31345);
var msg = cljs.core.get.call(null,map__31345__$1,new cljs.core.Keyword("app","msg","app/msg",-1386003639));
return bloom.ios.core.view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),bloom.ios.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(30),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"100",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(20),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null),msg),bloom.ios.core.image.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),bloom.ios.core.logo_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(30)], null)], null)),bloom.ios.core.touchable_highlight.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#999",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(5)], null),new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (map__31345,map__31345__$1,msg,_STAR_reconciler_STAR_31340,_STAR_depth_STAR_31341,_STAR_shared_STAR_31342,_STAR_instrument_STAR_31343,_STAR_parent_STAR_31344,this$,this__30141__auto__,x31337_31349){
return (function (){
return bloom.ios.core.alert.call(null,"HELLO!");
});})(map__31345,map__31345__$1,msg,_STAR_reconciler_STAR_31340,_STAR_depth_STAR_31341,_STAR_shared_STAR_31342,_STAR_instrument_STAR_31343,_STAR_parent_STAR_31344,this$,this__30141__auto__,x31337_31349))
], null),bloom.ios.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),"press me")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31344;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31343;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31342;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31341;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31340;
}});})(x31337_31349))
;


bloom.ios.core.AppRoot.prototype.constructor = bloom.ios.core.AppRoot;

bloom.ios.core.AppRoot.prototype.constructor.displayName = "bloom.ios.core/AppRoot";

bloom.ios.core.AppRoot.prototype.om$isComponent = true;

var x31347_31353 = bloom.ios.core.AppRoot;
/** @nocollapse */
x31347_31353.om$next$IQuery$ = true;

/** @nocollapse */
x31347_31353.om$next$IQuery$query$arity$1 = ((function (x31347_31353){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x31347_31353))
;


var x31348_31354 = bloom.ios.core.AppRoot.prototype;

x31348_31354.om$next$IQuery$ = true;


x31348_31354.om$next$IQuery$query$arity$1 = ((function (x31348_31354){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x31348_31354))
;


bloom.ios.core.AppRoot.cljs$lang$type = true;

bloom.ios.core.AppRoot.cljs$lang$ctorStr = "bloom.ios.core/AppRoot";

bloom.ios.core.AppRoot.cljs$lang$ctorPrWriter = (function (this__30267__auto__,writer__30268__auto__,opt__30269__auto__){
return cljs.core._write.call(null,writer__30268__auto__,"bloom.ios.core/AppRoot");
});
if(typeof bloom.ios.core.RootNode !== 'undefined'){
} else {
bloom.ios.core.RootNode = re_natal.support.root_node_BANG_.call(null,(1));
}
if(typeof bloom.ios.core.app_root !== 'undefined'){
} else {
bloom.ios.core.app_root = om.next.factory.call(null,bloom.ios.core.RootNode);
}
bloom.ios.core.init = (function bloom$ios$core$init(){
om.next.add_root_BANG_.call(null,bloom.state.reconciler,bloom.ios.core.AppRoot,(1));

return bloom.ios.core.app_registry.registerComponent("bloom",(function (){
return bloom.ios.core.app_root;
}));
});

//# sourceMappingURL=core.js.map