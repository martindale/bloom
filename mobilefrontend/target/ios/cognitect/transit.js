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
var seq__29915_29919 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__29916_29920 = null;
var count__29917_29921 = (0);
var i__29918_29922 = (0);
while(true){
if((i__29918_29922 < count__29917_29921)){
var k_29923 = cljs.core._nth.call(null,chunk__29916_29920,i__29918_29922);
var v_29924 = (b[k_29923]);
(a[k_29923] = v_29924);

var G__29925 = seq__29915_29919;
var G__29926 = chunk__29916_29920;
var G__29927 = count__29917_29921;
var G__29928 = (i__29918_29922 + (1));
seq__29915_29919 = G__29925;
chunk__29916_29920 = G__29926;
count__29917_29921 = G__29927;
i__29918_29922 = G__29928;
continue;
} else {
var temp__6728__auto___29929 = cljs.core.seq.call(null,seq__29915_29919);
if(temp__6728__auto___29929){
var seq__29915_29930__$1 = temp__6728__auto___29929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29915_29930__$1)){
var c__21044__auto___29931 = cljs.core.chunk_first.call(null,seq__29915_29930__$1);
var G__29932 = cljs.core.chunk_rest.call(null,seq__29915_29930__$1);
var G__29933 = c__21044__auto___29931;
var G__29934 = cljs.core.count.call(null,c__21044__auto___29931);
var G__29935 = (0);
seq__29915_29919 = G__29932;
chunk__29916_29920 = G__29933;
count__29917_29921 = G__29934;
i__29918_29922 = G__29935;
continue;
} else {
var k_29936 = cljs.core.first.call(null,seq__29915_29930__$1);
var v_29937 = (b[k_29936]);
(a[k_29936] = v_29937);

var G__29938 = cljs.core.next.call(null,seq__29915_29930__$1);
var G__29939 = null;
var G__29940 = (0);
var G__29941 = (0);
seq__29915_29919 = G__29938;
chunk__29916_29920 = G__29939;
count__29917_29921 = G__29940;
i__29918_29922 = G__29941;
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
var args29942 = [];
var len__21324__auto___29945 = arguments.length;
var i__21325__auto___29946 = (0);
while(true){
if((i__21325__auto___29946 < len__21324__auto___29945)){
args29942.push((arguments[i__21325__auto___29946]));

var G__29947 = (i__21325__auto___29946 + (1));
i__21325__auto___29946 = G__29947;
continue;
} else {
}
break;
}

var G__29944 = args29942.length;
switch (G__29944) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29942.length)].join('')));

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
var G__29949 = (i + (2));
var G__29950 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__29949;
ret = G__29950;
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
var seq__29951_29955 = cljs.core.seq.call(null,v);
var chunk__29952_29956 = null;
var count__29953_29957 = (0);
var i__29954_29958 = (0);
while(true){
if((i__29954_29958 < count__29953_29957)){
var x_29959 = cljs.core._nth.call(null,chunk__29952_29956,i__29954_29958);
ret.push(x_29959);

var G__29960 = seq__29951_29955;
var G__29961 = chunk__29952_29956;
var G__29962 = count__29953_29957;
var G__29963 = (i__29954_29958 + (1));
seq__29951_29955 = G__29960;
chunk__29952_29956 = G__29961;
count__29953_29957 = G__29962;
i__29954_29958 = G__29963;
continue;
} else {
var temp__6728__auto___29964 = cljs.core.seq.call(null,seq__29951_29955);
if(temp__6728__auto___29964){
var seq__29951_29965__$1 = temp__6728__auto___29964;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29951_29965__$1)){
var c__21044__auto___29966 = cljs.core.chunk_first.call(null,seq__29951_29965__$1);
var G__29967 = cljs.core.chunk_rest.call(null,seq__29951_29965__$1);
var G__29968 = c__21044__auto___29966;
var G__29969 = cljs.core.count.call(null,c__21044__auto___29966);
var G__29970 = (0);
seq__29951_29955 = G__29967;
chunk__29952_29956 = G__29968;
count__29953_29957 = G__29969;
i__29954_29958 = G__29970;
continue;
} else {
var x_29971 = cljs.core.first.call(null,seq__29951_29965__$1);
ret.push(x_29971);

var G__29972 = cljs.core.next.call(null,seq__29951_29965__$1);
var G__29973 = null;
var G__29974 = (0);
var G__29975 = (0);
seq__29951_29955 = G__29972;
chunk__29952_29956 = G__29973;
count__29953_29957 = G__29974;
i__29954_29958 = G__29975;
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
var seq__29976_29980 = cljs.core.seq.call(null,v);
var chunk__29977_29981 = null;
var count__29978_29982 = (0);
var i__29979_29983 = (0);
while(true){
if((i__29979_29983 < count__29978_29982)){
var x_29984 = cljs.core._nth.call(null,chunk__29977_29981,i__29979_29983);
ret.push(x_29984);

var G__29985 = seq__29976_29980;
var G__29986 = chunk__29977_29981;
var G__29987 = count__29978_29982;
var G__29988 = (i__29979_29983 + (1));
seq__29976_29980 = G__29985;
chunk__29977_29981 = G__29986;
count__29978_29982 = G__29987;
i__29979_29983 = G__29988;
continue;
} else {
var temp__6728__auto___29989 = cljs.core.seq.call(null,seq__29976_29980);
if(temp__6728__auto___29989){
var seq__29976_29990__$1 = temp__6728__auto___29989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29976_29990__$1)){
var c__21044__auto___29991 = cljs.core.chunk_first.call(null,seq__29976_29990__$1);
var G__29992 = cljs.core.chunk_rest.call(null,seq__29976_29990__$1);
var G__29993 = c__21044__auto___29991;
var G__29994 = cljs.core.count.call(null,c__21044__auto___29991);
var G__29995 = (0);
seq__29976_29980 = G__29992;
chunk__29977_29981 = G__29993;
count__29978_29982 = G__29994;
i__29979_29983 = G__29995;
continue;
} else {
var x_29996 = cljs.core.first.call(null,seq__29976_29990__$1);
ret.push(x_29996);

var G__29997 = cljs.core.next.call(null,seq__29976_29990__$1);
var G__29998 = null;
var G__29999 = (0);
var G__30000 = (0);
seq__29976_29980 = G__29997;
chunk__29977_29981 = G__29998;
count__29978_29982 = G__29999;
i__29979_29983 = G__30000;
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
var seq__30001_30005 = cljs.core.seq.call(null,v);
var chunk__30002_30006 = null;
var count__30003_30007 = (0);
var i__30004_30008 = (0);
while(true){
if((i__30004_30008 < count__30003_30007)){
var x_30009 = cljs.core._nth.call(null,chunk__30002_30006,i__30004_30008);
ret.push(x_30009);

var G__30010 = seq__30001_30005;
var G__30011 = chunk__30002_30006;
var G__30012 = count__30003_30007;
var G__30013 = (i__30004_30008 + (1));
seq__30001_30005 = G__30010;
chunk__30002_30006 = G__30011;
count__30003_30007 = G__30012;
i__30004_30008 = G__30013;
continue;
} else {
var temp__6728__auto___30014 = cljs.core.seq.call(null,seq__30001_30005);
if(temp__6728__auto___30014){
var seq__30001_30015__$1 = temp__6728__auto___30014;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30001_30015__$1)){
var c__21044__auto___30016 = cljs.core.chunk_first.call(null,seq__30001_30015__$1);
var G__30017 = cljs.core.chunk_rest.call(null,seq__30001_30015__$1);
var G__30018 = c__21044__auto___30016;
var G__30019 = cljs.core.count.call(null,c__21044__auto___30016);
var G__30020 = (0);
seq__30001_30005 = G__30017;
chunk__30002_30006 = G__30018;
count__30003_30007 = G__30019;
i__30004_30008 = G__30020;
continue;
} else {
var x_30021 = cljs.core.first.call(null,seq__30001_30015__$1);
ret.push(x_30021);

var G__30022 = cljs.core.next.call(null,seq__30001_30015__$1);
var G__30023 = null;
var G__30024 = (0);
var G__30025 = (0);
seq__30001_30005 = G__30022;
chunk__30002_30006 = G__30023;
count__30003_30007 = G__30024;
i__30004_30008 = G__30025;
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
var args30026 = [];
var len__21324__auto___30041 = arguments.length;
var i__21325__auto___30042 = (0);
while(true){
if((i__21325__auto___30042 < len__21324__auto___30041)){
args30026.push((arguments[i__21325__auto___30042]));

var G__30043 = (i__21325__auto___30042 + (1));
i__21325__auto___30042 = G__30043;
continue;
} else {
}
break;
}

var G__30028 = args30026.length;
switch (G__30028) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30026.length)].join('')));

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
var G__30029 = obj;
G__30029.push(kfn.call(null,k),vfn.call(null,v));

return G__30029;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x30030 = cljs.core.clone.call(null,handlers);
x30030.forEach = ((function (x30030,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__30031 = cljs.core.seq.call(null,coll);
var chunk__30032 = null;
var count__30033 = (0);
var i__30034 = (0);
while(true){
if((i__30034 < count__30033)){
var vec__30035 = cljs.core._nth.call(null,chunk__30032,i__30034);
var k = cljs.core.nth.call(null,vec__30035,(0),null);
var v = cljs.core.nth.call(null,vec__30035,(1),null);
f.call(null,v,k);

var G__30045 = seq__30031;
var G__30046 = chunk__30032;
var G__30047 = count__30033;
var G__30048 = (i__30034 + (1));
seq__30031 = G__30045;
chunk__30032 = G__30046;
count__30033 = G__30047;
i__30034 = G__30048;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__30031);
if(temp__6728__auto__){
var seq__30031__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30031__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__30031__$1);
var G__30049 = cljs.core.chunk_rest.call(null,seq__30031__$1);
var G__30050 = c__21044__auto__;
var G__30051 = cljs.core.count.call(null,c__21044__auto__);
var G__30052 = (0);
seq__30031 = G__30049;
chunk__30032 = G__30050;
count__30033 = G__30051;
i__30034 = G__30052;
continue;
} else {
var vec__30038 = cljs.core.first.call(null,seq__30031__$1);
var k = cljs.core.nth.call(null,vec__30038,(0),null);
var v = cljs.core.nth.call(null,vec__30038,(1),null);
f.call(null,v,k);

var G__30053 = cljs.core.next.call(null,seq__30031__$1);
var G__30054 = null;
var G__30055 = (0);
var G__30056 = (0);
seq__30031 = G__30053;
chunk__30032 = G__30054;
count__30033 = G__30055;
i__30034 = G__30056;
continue;
}
} else {
return null;
}
}
break;
}
});})(x30030,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x30030;
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
var args30057 = [];
var len__21324__auto___30063 = arguments.length;
var i__21325__auto___30064 = (0);
while(true){
if((i__21325__auto___30064 < len__21324__auto___30063)){
args30057.push((arguments[i__21325__auto___30064]));

var G__30065 = (i__21325__auto___30064 + (1));
i__21325__auto___30064 = G__30065;
continue;
} else {
}
break;
}

var G__30059 = args30057.length;
switch (G__30059) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30057.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit30060 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit30060 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta30061){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta30061 = meta30061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit30060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30062,meta30061__$1){
var self__ = this;
var _30062__$1 = this;
return (new cognitect.transit.t_cognitect$transit30060(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta30061__$1));
});

cognitect.transit.t_cognitect$transit30060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30062){
var self__ = this;
var _30062__$1 = this;
return self__.meta30061;
});

cognitect.transit.t_cognitect$transit30060.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30060.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit30060.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30060.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit30060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta30061","meta30061",696596903,null)], null);
});

cognitect.transit.t_cognitect$transit30060.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit30060.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit30060";

cognitect.transit.t_cognitect$transit30060.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cognitect.transit/t_cognitect$transit30060");
});

cognitect.transit.__GT_t_cognitect$transit30060 = (function cognitect$transit$__GT_t_cognitect$transit30060(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30061){
return (new cognitect.transit.t_cognitect$transit30060(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta30061));
});

}

return (new cognitect.transit.t_cognitect$transit30060(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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