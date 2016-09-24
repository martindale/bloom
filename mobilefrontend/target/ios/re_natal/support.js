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
re_natal.support.ui_34722 = ((function (content,instance){
return (function re_natal$support$root_node_BANG__$_ui_34722(){
var this__32615__auto__ = this;
React.Component.apply(this__32615__auto__,arguments);

if(!((this__32615__auto__.initLocalState == null))){
this__32615__auto__.state = this__32615__auto__.initLocalState();
} else {
this__32615__auto__.state = {};
}

return this__32615__auto__;
});})(content,instance))
;

re_natal.support.ui_34722.prototype = goog.object.clone(React.Component.prototype);

var x34727_34737 = re_natal.support.ui_34722.prototype;
x34727_34737.componentWillUpdate = ((function (x34727_34737,content,instance){
return (function (next_props__32470__auto__,next_state__32471__auto__){
var this__32469__auto__ = this;
if(((!((this__32469__auto__ == null)))?(((false) || (this__32469__auto__.om$next$Ident$))?true:false):false)){
var ident__32473__auto___34738 = om.next.ident.call(null,this__32469__auto__,om.next.props.call(null,this__32469__auto__));
var next_ident__32474__auto___34739 = om.next.ident.call(null,this__32469__auto__,om.next._next_props.call(null,next_props__32470__auto__,this__32469__auto__));
if(cljs.core.not_EQ_.call(null,ident__32473__auto___34738,next_ident__32474__auto___34739)){
var idxr__32475__auto___34740 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32469__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32475__auto___34740 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32475__auto___34740),((function (idxr__32475__auto___34740,ident__32473__auto___34738,next_ident__32474__auto___34739,this__32469__auto__,x34727_34737,content,instance){
return (function (indexes__32476__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32476__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32473__auto___34738], null),cljs.core.disj,this__32469__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32474__auto___34739], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32469__auto__);
});})(idxr__32475__auto___34740,ident__32473__auto___34738,next_ident__32474__auto___34739,this__32469__auto__,x34727_34737,content,instance))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32469__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32469__auto__);
});})(x34727_34737,content,instance))
;

x34727_34737.shouldComponentUpdate = ((function (x34727_34737,content,instance){
return (function (next_props__32470__auto__,next_state__32471__auto__){
var this__32469__auto__ = this;
var next_children__32472__auto__ = next_props__32470__auto__.children;
var next_props__32470__auto____$1 = goog.object.get(next_props__32470__auto__,"omcljs$value");
var next_props__32470__auto____$2 = (function (){var G__34729 = next_props__32470__auto____$1;
if((next_props__32470__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__34729);
} else {
return G__34729;
}
})();
var or__20141__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32469__auto__),next_props__32470__auto____$2);
if(or__20141__auto__){
return or__20141__auto__;
} else {
var or__20141__auto____$1 = (function (){var and__20129__auto__ = this__32469__auto__.state;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32469__auto__.state,"omcljs$state"),goog.object.get(next_state__32471__auto__,"omcljs$state"));
} else {
return and__20129__auto__;
}
})();
if(cljs.core.truth_(or__20141__auto____$1)){
return or__20141__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32469__auto__.props.children,next_children__32472__auto__);
}
}
});})(x34727_34737,content,instance))
;

x34727_34737.componentWillUnmount = ((function (x34727_34737,content,instance){
return (function (){
var this__32469__auto__ = this;
var r__32480__auto__ = om.next.get_reconciler.call(null,this__32469__auto__);
var cfg__32481__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32480__auto__);
var st__32482__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32481__auto__);
var indexer__32479__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32481__auto__);
if(cljs.core.truth_((function (){var and__20129__auto__ = !((st__32482__auto__ == null));
if(and__20129__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32482__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32469__auto__], null));
} else {
return and__20129__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32482__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32469__auto__);
} else {
}

if((indexer__32479__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32479__auto__,this__32469__auto__);
}
});})(x34727_34737,content,instance))
;

x34727_34737.componentDidUpdate = ((function (x34727_34737,content,instance){
return (function (prev_props__32477__auto__,prev_state__32478__auto__){
var this__32469__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32469__auto__);
});})(x34727_34737,content,instance))
;

x34727_34737.isMounted = ((function (x34727_34737,content,instance){
return (function (){
var this__32469__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32469__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34727_34737,content,instance))
;

x34727_34737.componentWillMount = ((function (x34727_34737,content,instance){
return (function (){
var this__32461__auto__ = this;
var this$ = this__32461__auto__;
var indexer__32462__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32461__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32462__auto__ == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__32462__auto__,this__32461__auto__);
}

return cljs.core.reset_BANG_.call(null,instance,this$);
});})(x34727_34737,content,instance))
;

x34727_34737.render = ((function (x34727_34737,content,instance){
return (function (){
var this__32468__auto__ = this;
var _ = this__32468__auto__;
var _STAR_reconciler_STAR_34730 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34731 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34732 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34733 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34734 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32468__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32468__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32468__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32468__auto__);

om.next._STAR_parent_STAR_ = this__32468__auto__;

try{return cljs.core.deref.call(null,content);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34734;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34733;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34732;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34731;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34730;
}});})(x34727_34737,content,instance))
;


re_natal.support.ui_34722.prototype.constructor = re_natal.support.ui_34722;

re_natal.support.ui_34722.prototype.constructor.displayName = "re-natal.support/ui_34722";

re_natal.support.ui_34722.prototype.om$isComponent = true;

var x34735_34741 = re_natal.support.ui_34722;


var x34736_34742 = re_natal.support.ui_34722.prototype;


re_natal.support.ui_34722.cljs$lang$type = true;

re_natal.support.ui_34722.cljs$lang$ctorStr = "re-natal.support/ui_34722";

re_natal.support.ui_34722.cljs$lang$ctorPrWriter = ((function (content,instance){
return (function (this__32618__auto__,writer__32619__auto__,opt__32620__auto__){
return cljs.core._write.call(null,writer__32619__auto__,"re-natal.support/ui_34722");
});})(content,instance))
;

return re_natal.support.ui_34722;
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