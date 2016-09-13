// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_natal.support');
goog.require('cljs.core');
goog.require('om.next');
if(typeof re_natal.support.root_nodes !== 'undefined'){
} else {
re_natal.support.root_nodes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * A substitute for a real root node (1) for mounting om-next component.
 *    You have to call function :on-render and :on-unmount in reconciler :root-render :root-unmount function.
 */
re_natal.support.root_node_BANG_ = (function re_natal$support$root_node_BANG_(id){
var content = cljs.core.atom.call(null,null);
var instance = cljs.core.atom.call(null,null);
var class$ = (function (){
/**
 * @constructor
 */
re_natal.support.ui_31296 = ((function (content,instance){
return (function re_natal$support$root_node_BANG__$_ui_31296(){
var this__30264__auto__ = this;
React.Component.apply(this__30264__auto__,arguments);

if(!((this__30264__auto__.initLocalState == null))){
this__30264__auto__.state = this__30264__auto__.initLocalState();
} else {
this__30264__auto__.state = {};
}

return this__30264__auto__;
});})(content,instance))
;

re_natal.support.ui_31296.prototype = goog.object.clone(React.Component.prototype);

var x31301_31311 = re_natal.support.ui_31296.prototype;
x31301_31311.componentWillUpdate = ((function (x31301_31311,content,instance){
return (function (next_props__30143__auto__,next_state__30144__auto__){
var this__30142__auto__ = this;
if(((!((this__30142__auto__ == null)))?(((false) || (this__30142__auto__.om$next$Ident$))?true:false):false)){
var ident__30146__auto___31312 = om.next.ident.call(null,this__30142__auto__,om.next.props.call(null,this__30142__auto__));
var next_ident__30147__auto___31313 = om.next.ident.call(null,this__30142__auto__,om.next._next_props.call(null,next_props__30143__auto__,this__30142__auto__));
if(cljs.core.not_EQ_.call(null,ident__30146__auto___31312,next_ident__30147__auto___31313)){
var idxr__30148__auto___31314 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__30148__auto___31314 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__30148__auto___31314),((function (idxr__30148__auto___31314,ident__30146__auto___31312,next_ident__30147__auto___31313,this__30142__auto__,x31301_31311,content,instance){
return (function (indexes__30149__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__30149__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__30146__auto___31312], null),cljs.core.disj,this__30142__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__30147__auto___31313], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__30142__auto__);
});})(idxr__30148__auto___31314,ident__30146__auto___31312,next_ident__30147__auto___31313,this__30142__auto__,x31301_31311,content,instance))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__30142__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__30142__auto__);
});})(x31301_31311,content,instance))
;

x31301_31311.shouldComponentUpdate = ((function (x31301_31311,content,instance){
return (function (next_props__30143__auto__,next_state__30144__auto__){
var this__30142__auto__ = this;
var next_children__30145__auto__ = next_props__30143__auto__.children;
var next_props__30143__auto____$1 = goog.object.get(next_props__30143__auto__,"omcljs$value");
var next_props__30143__auto____$2 = (function (){var G__31303 = next_props__30143__auto____$1;
if((next_props__30143__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__31303);
} else {
return G__31303;
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
});})(x31301_31311,content,instance))
;

x31301_31311.componentWillUnmount = ((function (x31301_31311,content,instance){
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
});})(x31301_31311,content,instance))
;

x31301_31311.componentDidUpdate = ((function (x31301_31311,content,instance){
return (function (prev_props__30150__auto__,prev_state__30151__auto__){
var this__30142__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__30142__auto__);
});})(x31301_31311,content,instance))
;

x31301_31311.isMounted = ((function (x31301_31311,content,instance){
return (function (){
var this__30142__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__30142__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x31301_31311,content,instance))
;

x31301_31311.componentWillMount = ((function (x31301_31311,content,instance){
return (function (){
var this__30134__auto__ = this;
var this$ = this__30134__auto__;
var indexer__30135__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__30134__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__30135__auto__ == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__30135__auto__,this__30134__auto__);
}

return cljs.core.reset_BANG_.call(null,instance,this$);
});})(x31301_31311,content,instance))
;

x31301_31311.render = ((function (x31301_31311,content,instance){
return (function (){
var this__30141__auto__ = this;
var _ = this__30141__auto__;
var _STAR_reconciler_STAR_31304 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_31305 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_31306 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_31307 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_31308 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__30141__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__30141__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__30141__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__30141__auto__);

om.next._STAR_parent_STAR_ = this__30141__auto__;

try{return cljs.core.deref.call(null,content);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_31308;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_31307;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_31306;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_31305;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_31304;
}});})(x31301_31311,content,instance))
;


re_natal.support.ui_31296.prototype.constructor = re_natal.support.ui_31296;

re_natal.support.ui_31296.prototype.constructor.displayName = "re-natal.support/ui_31296";

re_natal.support.ui_31296.prototype.om$isComponent = true;

var x31309_31315 = re_natal.support.ui_31296;


var x31310_31316 = re_natal.support.ui_31296.prototype;


re_natal.support.ui_31296.cljs$lang$type = true;

re_natal.support.ui_31296.cljs$lang$ctorStr = "re-natal.support/ui_31296";

re_natal.support.ui_31296.cljs$lang$ctorPrWriter = ((function (content,instance){
return (function (this__30267__auto__,writer__30268__auto__,opt__30269__auto__){
return cljs.core._write.call(null,writer__30268__auto__,"re-natal.support/ui_31296");
});})(content,instance))
;

return re_natal.support.ui_31296;
})()
;
cljs.core.swap_BANG_.call(null,re_natal.support.root_nodes,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-render","on-render",2096729391),((function (content,instance,class$){
return (function (el){
cljs.core.reset_BANG_.call(null,content,el);

if(cljs.core.truth_(cljs.core.deref.call(null,instance))){
return cljs.core.deref.call(null,instance).forceUpdate();
} else {
return null;
}
});})(content,instance,class$))
,new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),((function (content,instance,class$){
return (function (){
return null;
});})(content,instance,class$))
,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));

return class$;
});
/**
 * Use this as reconciler :root-render function.
 */
re_natal.support.root_render = (function re_natal$support$root_render(el,id){
var node = cljs.core.get.call(null,cljs.core.deref.call(null,re_natal.support.root_nodes),id);
var on_render = new cljs.core.Keyword(null,"on-render","on-render",2096729391).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(on_render)){
return on_render.call(null,el);
} else {
return null;
}
});
/**
 * Use this as reconciler :root-unmount function.
 */
re_natal.support.root_unmount = (function re_natal$support$root_unmount(id){
var node = cljs.core.get.call(null,cljs.core.deref.call(null,re_natal.support.root_nodes),id);
var unmount_fn = new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(unmount_fn)){
return unmount_fn.call(null);
} else {
return null;
}
});

//# sourceMappingURL=support.js.map