// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__31491_31495 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__31492_31496 = null;
var count__31493_31497 = (0);
var i__31494_31498 = (0);
while(true){
if((i__31494_31498 < count__31493_31497)){
var k_31499 = cljs.core._nth.call(null,chunk__31492_31496,i__31494_31498);
var v_31500 = (b[k_31499]);
(a[k_31499] = v_31500);

var G__31501 = seq__31491_31495;
var G__31502 = chunk__31492_31496;
var G__31503 = count__31493_31497;
var G__31504 = (i__31494_31498 + (1));
seq__31491_31495 = G__31501;
chunk__31492_31496 = G__31502;
count__31493_31497 = G__31503;
i__31494_31498 = G__31504;
continue;
} else {
var temp__6728__auto___31505 = cljs.core.seq.call(null,seq__31491_31495);
if(temp__6728__auto___31505){
var seq__31491_31506__$1 = temp__6728__auto___31505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31491_31506__$1)){
var c__21044__auto___31507 = cljs.core.chunk_first.call(null,seq__31491_31506__$1);
var G__31508 = cljs.core.chunk_rest.call(null,seq__31491_31506__$1);
var G__31509 = c__21044__auto___31507;
var G__31510 = cljs.core.count.call(null,c__21044__auto___31507);
var G__31511 = (0);
seq__31491_31495 = G__31508;
chunk__31492_31496 = G__31509;
count__31493_31497 = G__31510;
i__31494_31498 = G__31511;
continue;
} else {
var k_31512 = cljs.core.first.call(null,seq__31491_31506__$1);
var v_31513 = (b[k_31512]);
(a[k_31512] = v_31513);

var G__31514 = cljs.core.next.call(null,seq__31491_31506__$1);
var G__31515 = null;
var G__31516 = (0);
var G__31517 = (0);
seq__31491_31495 = G__31514;
chunk__31492_31496 = G__31515;
count__31493_31497 = G__31516;
i__31494_31498 = G__31517;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args31518 = [];
var len__21324__auto___31521 = arguments.length;
var i__21325__auto___31522 = (0);
while(true){
if((i__21325__auto___31522 < len__21324__auto___31521)){
args31518.push((arguments[i__21325__auto___31522]));

var G__31523 = (i__21325__auto___31522 + (1));
i__21325__auto___31522 = G__31523;
continue;
} else {
}
break;
}

var G__31520 = args31518.length;
switch (G__31520) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31518.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__31525 = (i + (2));
var G__31526 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__31525;
ret = G__31526;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31527_31531 = cljs.core.seq.call(null,v);
var chunk__31528_31532 = null;
var count__31529_31533 = (0);
var i__31530_31534 = (0);
while(true){
if((i__31530_31534 < count__31529_31533)){
var x_31535 = cljs.core._nth.call(null,chunk__31528_31532,i__31530_31534);
ret.push(x_31535);

var G__31536 = seq__31527_31531;
var G__31537 = chunk__31528_31532;
var G__31538 = count__31529_31533;
var G__31539 = (i__31530_31534 + (1));
seq__31527_31531 = G__31536;
chunk__31528_31532 = G__31537;
count__31529_31533 = G__31538;
i__31530_31534 = G__31539;
continue;
} else {
var temp__6728__auto___31540 = cljs.core.seq.call(null,seq__31527_31531);
if(temp__6728__auto___31540){
var seq__31527_31541__$1 = temp__6728__auto___31540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31527_31541__$1)){
var c__21044__auto___31542 = cljs.core.chunk_first.call(null,seq__31527_31541__$1);
var G__31543 = cljs.core.chunk_rest.call(null,seq__31527_31541__$1);
var G__31544 = c__21044__auto___31542;
var G__31545 = cljs.core.count.call(null,c__21044__auto___31542);
var G__31546 = (0);
seq__31527_31531 = G__31543;
chunk__31528_31532 = G__31544;
count__31529_31533 = G__31545;
i__31530_31534 = G__31546;
continue;
} else {
var x_31547 = cljs.core.first.call(null,seq__31527_31541__$1);
ret.push(x_31547);

var G__31548 = cljs.core.next.call(null,seq__31527_31541__$1);
var G__31549 = null;
var G__31550 = (0);
var G__31551 = (0);
seq__31527_31531 = G__31548;
chunk__31528_31532 = G__31549;
count__31529_31533 = G__31550;
i__31530_31534 = G__31551;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31552_31556 = cljs.core.seq.call(null,v);
var chunk__31553_31557 = null;
var count__31554_31558 = (0);
var i__31555_31559 = (0);
while(true){
if((i__31555_31559 < count__31554_31558)){
var x_31560 = cljs.core._nth.call(null,chunk__31553_31557,i__31555_31559);
ret.push(x_31560);

var G__31561 = seq__31552_31556;
var G__31562 = chunk__31553_31557;
var G__31563 = count__31554_31558;
var G__31564 = (i__31555_31559 + (1));
seq__31552_31556 = G__31561;
chunk__31553_31557 = G__31562;
count__31554_31558 = G__31563;
i__31555_31559 = G__31564;
continue;
} else {
var temp__6728__auto___31565 = cljs.core.seq.call(null,seq__31552_31556);
if(temp__6728__auto___31565){
var seq__31552_31566__$1 = temp__6728__auto___31565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31552_31566__$1)){
var c__21044__auto___31567 = cljs.core.chunk_first.call(null,seq__31552_31566__$1);
var G__31568 = cljs.core.chunk_rest.call(null,seq__31552_31566__$1);
var G__31569 = c__21044__auto___31567;
var G__31570 = cljs.core.count.call(null,c__21044__auto___31567);
var G__31571 = (0);
seq__31552_31556 = G__31568;
chunk__31553_31557 = G__31569;
count__31554_31558 = G__31570;
i__31555_31559 = G__31571;
continue;
} else {
var x_31572 = cljs.core.first.call(null,seq__31552_31566__$1);
ret.push(x_31572);

var G__31573 = cljs.core.next.call(null,seq__31552_31566__$1);
var G__31574 = null;
var G__31575 = (0);
var G__31576 = (0);
seq__31552_31556 = G__31573;
chunk__31553_31557 = G__31574;
count__31554_31558 = G__31575;
i__31555_31559 = G__31576;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31577_31581 = cljs.core.seq.call(null,v);
var chunk__31578_31582 = null;
var count__31579_31583 = (0);
var i__31580_31584 = (0);
while(true){
if((i__31580_31584 < count__31579_31583)){
var x_31585 = cljs.core._nth.call(null,chunk__31578_31582,i__31580_31584);
ret.push(x_31585);

var G__31586 = seq__31577_31581;
var G__31587 = chunk__31578_31582;
var G__31588 = count__31579_31583;
var G__31589 = (i__31580_31584 + (1));
seq__31577_31581 = G__31586;
chunk__31578_31582 = G__31587;
count__31579_31583 = G__31588;
i__31580_31584 = G__31589;
continue;
} else {
var temp__6728__auto___31590 = cljs.core.seq.call(null,seq__31577_31581);
if(temp__6728__auto___31590){
var seq__31577_31591__$1 = temp__6728__auto___31590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31577_31591__$1)){
var c__21044__auto___31592 = cljs.core.chunk_first.call(null,seq__31577_31591__$1);
var G__31593 = cljs.core.chunk_rest.call(null,seq__31577_31591__$1);
var G__31594 = c__21044__auto___31592;
var G__31595 = cljs.core.count.call(null,c__21044__auto___31592);
var G__31596 = (0);
seq__31577_31581 = G__31593;
chunk__31578_31582 = G__31594;
count__31579_31583 = G__31595;
i__31580_31584 = G__31596;
continue;
} else {
var x_31597 = cljs.core.first.call(null,seq__31577_31591__$1);
ret.push(x_31597);

var G__31598 = cljs.core.next.call(null,seq__31577_31591__$1);
var G__31599 = null;
var G__31600 = (0);
var G__31601 = (0);
seq__31577_31581 = G__31598;
chunk__31578_31582 = G__31599;
count__31579_31583 = G__31600;
i__31580_31584 = G__31601;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args31602 = [];
var len__21324__auto___31617 = arguments.length;
var i__21325__auto___31618 = (0);
while(true){
if((i__21325__auto___31618 < len__21324__auto___31617)){
args31602.push((arguments[i__21325__auto___31618]));

var G__31619 = (i__21325__auto___31618 + (1));
i__21325__auto___31618 = G__31619;
continue;
} else {
}
break;
}

var G__31604 = args31602.length;
switch (G__31604) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31602.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__31605 = obj;
G__31605.push(kfn.call(null,k),vfn.call(null,v));

return G__31605;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x31606 = cljs.core.clone.call(null,handlers);
x31606.forEach = ((function (x31606,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__31607 = cljs.core.seq.call(null,coll);
var chunk__31608 = null;
var count__31609 = (0);
var i__31610 = (0);
while(true){
if((i__31610 < count__31609)){
var vec__31611 = cljs.core._nth.call(null,chunk__31608,i__31610);
var k = cljs.core.nth.call(null,vec__31611,(0),null);
var v = cljs.core.nth.call(null,vec__31611,(1),null);
f.call(null,v,k);

var G__31621 = seq__31607;
var G__31622 = chunk__31608;
var G__31623 = count__31609;
var G__31624 = (i__31610 + (1));
seq__31607 = G__31621;
chunk__31608 = G__31622;
count__31609 = G__31623;
i__31610 = G__31624;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__31607);
if(temp__6728__auto__){
var seq__31607__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31607__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__31607__$1);
var G__31625 = cljs.core.chunk_rest.call(null,seq__31607__$1);
var G__31626 = c__21044__auto__;
var G__31627 = cljs.core.count.call(null,c__21044__auto__);
var G__31628 = (0);
seq__31607 = G__31625;
chunk__31608 = G__31626;
count__31609 = G__31627;
i__31610 = G__31628;
continue;
} else {
var vec__31614 = cljs.core.first.call(null,seq__31607__$1);
var k = cljs.core.nth.call(null,vec__31614,(0),null);
var v = cljs.core.nth.call(null,vec__31614,(1),null);
f.call(null,v,k);

var G__31629 = cljs.core.next.call(null,seq__31607__$1);
var G__31630 = null;
var G__31631 = (0);
var G__31632 = (0);
seq__31607 = G__31629;
chunk__31608 = G__31630;
count__31609 = G__31631;
i__31610 = G__31632;
continue;
}
} else {
return null;
}
}
break;
}
});})(x31606,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x31606;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args31633 = [];
var len__21324__auto___31639 = arguments.length;
var i__21325__auto___31640 = (0);
while(true){
if((i__21325__auto___31640 < len__21324__auto___31639)){
args31633.push((arguments[i__21325__auto___31640]));

var G__31641 = (i__21325__auto___31640 + (1));
i__21325__auto___31640 = G__31641;
continue;
} else {
}
break;
}

var G__31635 = args31633.length;
switch (G__31635) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31633.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit31636 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit31636 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta31637){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta31637 = meta31637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit31636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31638,meta31637__$1){
var self__ = this;
var _31638__$1 = this;
return (new cognitect.transit.t_cognitect$transit31636(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta31637__$1));
});

cognitect.transit.t_cognitect$transit31636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31638){
var self__ = this;
var _31638__$1 = this;
return self__.meta31637;
});

cognitect.transit.t_cognitect$transit31636.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit31636.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit31636.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit31636.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit31636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta31637","meta31637",2039038491,null)], null);
});

cognitect.transit.t_cognitect$transit31636.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit31636.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit31636";

cognitect.transit.t_cognitect$transit31636.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/t_cognitect$transit31636");
});

cognitect.transit.__GT_t_cognitect$transit31636 = (function cognitect$transit$__GT_t_cognitect$transit31636(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31637){
return (new cognitect.transit.t_cognitect$transit31636(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31637));
});

}

return (new cognitect.transit.t_cognitect$transit31636(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__20141__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map