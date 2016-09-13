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
var len__21324__auto___31394 = arguments.length;
var i__21325__auto___31395 = (0);
while(true){
if((i__21325__auto___31395 < len__21324__auto___31394)){
args__21331__auto__.push((arguments[i__21325__auto___31395]));

var G__31396 = (i__21325__auto___31395 + (1));
i__21325__auto___31395 = G__31396;
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

bloom.android.core.create_element.cljs$lang$applyTo = (function (seq31391){
var G__31392 = cljs.core.first.call(null,seq31391);
var seq31391__$1 = cljs.core.next.call(null,seq31391);
var G__31393 = cljs.core.first.call(null,seq31391__$1);
var seq31391__$2 = cljs.core.next.call(null,seq31391__$1);
return bloom.android.core.create_element.cljs$core$IFn$_invoke$arity$variadic(G__31392,G__31393,seq31391__$2);
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
var this__30264__auto__ = this;
React.Component.apply(this__30264__auto__,arguments);

if(!((this__30264__auto__.initLocalState == null))){
this__30264__auto__.state = this__30264__auto__.initLocalState();
} else {
this__30264__auto__.state = {};
}

return this__30264__auto__;
});

bloom.android.core.AppRoot.prototype = goog.object.clone(React.Component.prototype);

var x31401_31413 = bloom.android.core.AppRoot.prototype;
x31401_31413.componentWillUpdate = ((function (x31401_31413){
return (function (next_props__30143__auto__,next_state__30144__auto__){
var this__30142__auto__ = this;
if(((!((this__30142__auto__ == null)))?(((false) || (this__30142__auto__.om$next$Ident$))?true:false):false)){
var ident__30146__auto___31414 = om.next.ident.call(null,this__30142__auto__,om.next.props.call(null,this__30142__auto__));
var next_ident__30147__auto___31415 = om.next.ident.call(null,this__30142__auto__,om.next._next_props.call(null,next_props__30143__auto__,this__30142__auto__));
if(cljs.core.not_EQ_.call(null,ident__30146__auto___31414,next_ident__30147__auto___31415)){
var idxr__30148__auto___31416 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30148__auto___31416 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30148__auto___31416),((function (idxr__30148__auto___31416,ident__30146__auto___31414,next_ident__30147__auto___31415,this__30142__auto__,x31401_31413){
return (function (indexes__30149__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30149__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30146__auto___31414], null),cljs.core.disj,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30147__auto___31415], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30142__auto__);
});})(idxr__30148__auto___31416,ident__30146__auto___31414,next_ident__30147__auto___31415,this__30142__auto__,x31401_31413))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30142__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30142__auto__);
});})(x31401_31413))
;

x31401_31413.shouldComponentUpdate = ((function (x31401_31413){
return (function (next_props__30143__auto__,next_state__30144__auto__){
var this__30142__auto__ = this;
var next_children__30145__auto__ = next_props__30143__auto__.children;
var next_props__30143__auto____$1 = goog.object.get(next_props__30143__auto__,"omcljs$value");
var next_props__30143__auto____$2 = (function (){var G__31403 = next_props__30143__auto____$1;
if((next_props__30143__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31403);
} else {
return G__31403;
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
});})(x31401_31413))
;

x31401_31413.componentWillUnmount = ((function (x31401_31413){
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
});})(x31401_31413))
;

x31401_31413.componentDidUpdate = ((function (x31401_31413){
return (function (prev_props__30150__auto__,prev_state__30151__auto__){
var this__30142__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30142__auto__);
});})(x31401_31413))
;

x31401_31413.isMounted = ((function (x31401_31413){
return (function (){
var this__30142__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30142__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31401_31413))
;

x31401_31413.componentWillMount = ((function (x31401_31413){
return (function (){
var this__30142__auto__ = this;
var indexer__30152__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30152__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__30152__auto__,this__30142__auto__);
}
});})(x31401_31413))
;

x31401_31413.render = ((function (x31401_31413){
return (function (){
var this__30141__auto__ = this;
var this$ = this__30141__auto__;
var _STAR_reconciler_STAR_31404 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31405 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31406 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31407 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31408 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30141__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30141__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30141__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30141__auto__);

om.next._STAR_parent_STAR_ = this__30141__auto__;

try{var map__31409 = om.next.props.call(null,this$);
var map__31409__$1 = ((((!((map__31409 == null)))?((((map__31409.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31409.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31409):map__31409);
var msg = cljs.core.get.call(null,map__31409__$1,new cljs.core.Keyword("app","msg","app/msg",-1386003639));
return bloom.android.core.view.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column",new cljs.core.Keyword(null,"margin","margin",-995903681),(40),new cljs.core.Keyword(null,"alignItems","alignItems",410331199),"center"], null)], null),bloom.android.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(30),new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"100",new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(20),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null),msg),bloom.android.core.image.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),bloom.android.core.logo_img,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(80),new cljs.core.Keyword(null,"height","height",1025178622),(80),new cljs.core.Keyword(null,"marginBottom","marginBottom",1236079031),(30)], null)], null)),bloom.android.core.touchable_highlight.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#999",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),(5)], null),new cljs.core.Keyword(null,"onPress","onPress",-1383694171),((function (map__31409,map__31409__$1,msg,_STAR_reconciler_STAR_31404,_STAR_depth_STAR_31405,_STAR_shared_STAR_31406,_STAR_instrument_STAR_31407,_STAR_parent_STAR_31408,this$,this__30141__auto__,x31401_31413){
return (function (){
return bloom.android.core.alert.call(null,"HELLO!");
});})(map__31409,map__31409__$1,msg,_STAR_reconciler_STAR_31404,_STAR_depth_STAR_31405,_STAR_shared_STAR_31406,_STAR_instrument_STAR_31407,_STAR_parent_STAR_31408,this$,this__30141__auto__,x31401_31413))
], null),bloom.android.core.text.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center",new cljs.core.Keyword(null,"fontWeight","fontWeight",166450581),"bold"], null)], null),"press me")));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31408;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31407;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31406;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31405;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31404;
}});})(x31401_31413))
;


bloom.android.core.AppRoot.prototype.constructor = bloom.android.core.AppRoot;

bloom.android.core.AppRoot.prototype.constructor.displayName = "bloom.android.core/AppRoot";

bloom.android.core.AppRoot.prototype.om$isComponent = true;

var x31411_31417 = bloom.android.core.AppRoot;
/** @nocollapse */
x31411_31417.om$next$IQuery$ = true;

/** @nocollapse */
x31411_31417.om$next$IQuery$query$arity$1 = ((function (x31411_31417){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x31411_31417))
;


var x31412_31418 = bloom.android.core.AppRoot.prototype;

x31412_31418.om$next$IQuery$ = true;


x31412_31418.om$next$IQuery$query$arity$1 = ((function (x31412_31418){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","msg","app/msg",-1386003639)], null);
});})(x31412_31418))
;


bloom.android.core.AppRoot.cljs$lang$type = true;

bloom.android.core.AppRoot.cljs$lang$ctorStr = "bloom.android.core/AppRoot";

bloom.android.core.AppRoot.cljs$lang$ctorPrWriter = (function (this__30267__auto__,writer__30268__auto__,opt__30269__auto__){
return cljs.core._write.call(null,writer__30268__auto__,"bloom.android.core/AppRoot");
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