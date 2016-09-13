// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__9997__auto__,writer__9998__auto__,opt__9999__auto__){
return cljs.core._write.call(null,writer__9998__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12544 = arguments.length;
var i__10467__auto___12545 = (0);
while(true){
if((i__10467__auto___12545 < len__10466__auto___12544)){
args__10473__auto__.push((arguments[i__10467__auto___12545]));

var G__12546 = (i__10467__auto___12545 + (1));
i__10467__auto___12545 = G__12546;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12543){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12543));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12548 = arguments.length;
var i__10467__auto___12549 = (0);
while(true){
if((i__10467__auto___12549 < len__10466__auto___12548)){
args__10473__auto__.push((arguments[i__10467__auto___12549]));

var G__12550 = (i__10467__auto___12549 + (1));
i__10467__auto___12549 = G__12550;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12547){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12547));
});

var g_QMARK__12551 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12552 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12551){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12551))
,null));
var mkg_12553 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12551,g_12552){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12551,g_12552))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12551,g_12552,mkg_12553){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12551).call(null,x);
});})(g_QMARK__12551,g_12552,mkg_12553))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12551,g_12552,mkg_12553){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12553).call(null,gfn);
});})(g_QMARK__12551,g_12552,mkg_12553))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12551,g_12552,mkg_12553){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12552).call(null,generator);
});})(g_QMARK__12551,g_12552,mkg_12553))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10542__auto___12571 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__10542__auto___12571){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12572 = arguments.length;
var i__10467__auto___12573 = (0);
while(true){
if((i__10467__auto___12573 < len__10466__auto___12572)){
args__10473__auto__.push((arguments[i__10467__auto___12573]));

var G__12574 = (i__10467__auto___12573 + (1));
i__10467__auto___12573 = G__12574;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12571))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12571),args);
});})(g__10542__auto___12571))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__10542__auto___12571){
return (function (seq12554){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12554));
});})(g__10542__auto___12571))
;


var g__10542__auto___12575 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__10542__auto___12575){
return (function cljs$spec$impl$gen$list(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12576 = arguments.length;
var i__10467__auto___12577 = (0);
while(true){
if((i__10467__auto___12577 < len__10466__auto___12576)){
args__10473__auto__.push((arguments[i__10467__auto___12577]));

var G__12578 = (i__10467__auto___12577 + (1));
i__10467__auto___12577 = G__12578;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12575))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12575),args);
});})(g__10542__auto___12575))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__10542__auto___12575){
return (function (seq12555){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12555));
});})(g__10542__auto___12575))
;


var g__10542__auto___12579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__10542__auto___12579){
return (function cljs$spec$impl$gen$map(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12580 = arguments.length;
var i__10467__auto___12581 = (0);
while(true){
if((i__10467__auto___12581 < len__10466__auto___12580)){
args__10473__auto__.push((arguments[i__10467__auto___12581]));

var G__12582 = (i__10467__auto___12581 + (1));
i__10467__auto___12581 = G__12582;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12579))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12579),args);
});})(g__10542__auto___12579))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__10542__auto___12579){
return (function (seq12556){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12556));
});})(g__10542__auto___12579))
;


var g__10542__auto___12583 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__10542__auto___12583){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12584 = arguments.length;
var i__10467__auto___12585 = (0);
while(true){
if((i__10467__auto___12585 < len__10466__auto___12584)){
args__10473__auto__.push((arguments[i__10467__auto___12585]));

var G__12586 = (i__10467__auto___12585 + (1));
i__10467__auto___12585 = G__12586;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12583))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12583),args);
});})(g__10542__auto___12583))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__10542__auto___12583){
return (function (seq12557){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12557));
});})(g__10542__auto___12583))
;


var g__10542__auto___12587 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__10542__auto___12587){
return (function cljs$spec$impl$gen$set(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12588 = arguments.length;
var i__10467__auto___12589 = (0);
while(true){
if((i__10467__auto___12589 < len__10466__auto___12588)){
args__10473__auto__.push((arguments[i__10467__auto___12589]));

var G__12590 = (i__10467__auto___12589 + (1));
i__10467__auto___12589 = G__12590;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12587))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12587),args);
});})(g__10542__auto___12587))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__10542__auto___12587){
return (function (seq12558){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12558));
});})(g__10542__auto___12587))
;


var g__10542__auto___12591 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__10542__auto___12591){
return (function cljs$spec$impl$gen$vector(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12592 = arguments.length;
var i__10467__auto___12593 = (0);
while(true){
if((i__10467__auto___12593 < len__10466__auto___12592)){
args__10473__auto__.push((arguments[i__10467__auto___12593]));

var G__12594 = (i__10467__auto___12593 + (1));
i__10467__auto___12593 = G__12594;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12591))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12591),args);
});})(g__10542__auto___12591))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__10542__auto___12591){
return (function (seq12559){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12559));
});})(g__10542__auto___12591))
;


var g__10542__auto___12595 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__10542__auto___12595){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12596 = arguments.length;
var i__10467__auto___12597 = (0);
while(true){
if((i__10467__auto___12597 < len__10466__auto___12596)){
args__10473__auto__.push((arguments[i__10467__auto___12597]));

var G__12598 = (i__10467__auto___12597 + (1));
i__10467__auto___12597 = G__12598;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12595))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12595),args);
});})(g__10542__auto___12595))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__10542__auto___12595){
return (function (seq12560){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12560));
});})(g__10542__auto___12595))
;


var g__10542__auto___12599 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__10542__auto___12599){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12600 = arguments.length;
var i__10467__auto___12601 = (0);
while(true){
if((i__10467__auto___12601 < len__10466__auto___12600)){
args__10473__auto__.push((arguments[i__10467__auto___12601]));

var G__12602 = (i__10467__auto___12601 + (1));
i__10467__auto___12601 = G__12602;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12599))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12599),args);
});})(g__10542__auto___12599))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__10542__auto___12599){
return (function (seq12561){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12561));
});})(g__10542__auto___12599))
;


var g__10542__auto___12603 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__10542__auto___12603){
return (function cljs$spec$impl$gen$elements(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12604 = arguments.length;
var i__10467__auto___12605 = (0);
while(true){
if((i__10467__auto___12605 < len__10466__auto___12604)){
args__10473__auto__.push((arguments[i__10467__auto___12605]));

var G__12606 = (i__10467__auto___12605 + (1));
i__10467__auto___12605 = G__12606;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12603))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12603),args);
});})(g__10542__auto___12603))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__10542__auto___12603){
return (function (seq12562){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12562));
});})(g__10542__auto___12603))
;


var g__10542__auto___12607 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__10542__auto___12607){
return (function cljs$spec$impl$gen$bind(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12608 = arguments.length;
var i__10467__auto___12609 = (0);
while(true){
if((i__10467__auto___12609 < len__10466__auto___12608)){
args__10473__auto__.push((arguments[i__10467__auto___12609]));

var G__12610 = (i__10467__auto___12609 + (1));
i__10467__auto___12609 = G__12610;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12607))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12607){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12607),args);
});})(g__10542__auto___12607))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__10542__auto___12607){
return (function (seq12563){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12563));
});})(g__10542__auto___12607))
;


var g__10542__auto___12611 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__10542__auto___12611){
return (function cljs$spec$impl$gen$choose(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12612 = arguments.length;
var i__10467__auto___12613 = (0);
while(true){
if((i__10467__auto___12613 < len__10466__auto___12612)){
args__10473__auto__.push((arguments[i__10467__auto___12613]));

var G__12614 = (i__10467__auto___12613 + (1));
i__10467__auto___12613 = G__12614;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12611))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12611),args);
});})(g__10542__auto___12611))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__10542__auto___12611){
return (function (seq12564){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12564));
});})(g__10542__auto___12611))
;


var g__10542__auto___12615 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__10542__auto___12615){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12616 = arguments.length;
var i__10467__auto___12617 = (0);
while(true){
if((i__10467__auto___12617 < len__10466__auto___12616)){
args__10473__auto__.push((arguments[i__10467__auto___12617]));

var G__12618 = (i__10467__auto___12617 + (1));
i__10467__auto___12617 = G__12618;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12615))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12615),args);
});})(g__10542__auto___12615))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__10542__auto___12615){
return (function (seq12565){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12565));
});})(g__10542__auto___12615))
;


var g__10542__auto___12619 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__10542__auto___12619){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12620 = arguments.length;
var i__10467__auto___12621 = (0);
while(true){
if((i__10467__auto___12621 < len__10466__auto___12620)){
args__10473__auto__.push((arguments[i__10467__auto___12621]));

var G__12622 = (i__10467__auto___12621 + (1));
i__10467__auto___12621 = G__12622;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12619))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12619),args);
});})(g__10542__auto___12619))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__10542__auto___12619){
return (function (seq12566){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12566));
});})(g__10542__auto___12619))
;


var g__10542__auto___12623 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__10542__auto___12623){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12624 = arguments.length;
var i__10467__auto___12625 = (0);
while(true){
if((i__10467__auto___12625 < len__10466__auto___12624)){
args__10473__auto__.push((arguments[i__10467__auto___12625]));

var G__12626 = (i__10467__auto___12625 + (1));
i__10467__auto___12625 = G__12626;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12623))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12623),args);
});})(g__10542__auto___12623))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__10542__auto___12623){
return (function (seq12567){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12567));
});})(g__10542__auto___12623))
;


var g__10542__auto___12627 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__10542__auto___12627){
return (function cljs$spec$impl$gen$sample(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12628 = arguments.length;
var i__10467__auto___12629 = (0);
while(true){
if((i__10467__auto___12629 < len__10466__auto___12628)){
args__10473__auto__.push((arguments[i__10467__auto___12629]));

var G__12630 = (i__10467__auto___12629 + (1));
i__10467__auto___12629 = G__12630;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12627))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12627),args);
});})(g__10542__auto___12627))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__10542__auto___12627){
return (function (seq12568){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12568));
});})(g__10542__auto___12627))
;


var g__10542__auto___12631 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__10542__auto___12631){
return (function cljs$spec$impl$gen$return(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12632 = arguments.length;
var i__10467__auto___12633 = (0);
while(true){
if((i__10467__auto___12633 < len__10466__auto___12632)){
args__10473__auto__.push((arguments[i__10467__auto___12633]));

var G__12634 = (i__10467__auto___12633 + (1));
i__10467__auto___12633 = G__12634;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12631))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12631),args);
});})(g__10542__auto___12631))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__10542__auto___12631){
return (function (seq12569){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12569));
});})(g__10542__auto___12631))
;


var g__10542__auto___12635 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__10542__auto___12635){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12636 = arguments.length;
var i__10467__auto___12637 = (0);
while(true){
if((i__10467__auto___12637 < len__10466__auto___12636)){
args__10473__auto__.push((arguments[i__10467__auto___12637]));

var G__12638 = (i__10467__auto___12637 + (1));
i__10467__auto___12637 = G__12638;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10542__auto___12635))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10542__auto___12635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10542__auto___12635),args);
});})(g__10542__auto___12635))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10542__auto___12635){
return (function (seq12570){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12570));
});})(g__10542__auto___12635))
;

var g__10555__auto___12660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__10555__auto___12660){
return (function cljs$spec$impl$gen$any(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12661 = arguments.length;
var i__10467__auto___12662 = (0);
while(true){
if((i__10467__auto___12662 < len__10466__auto___12661)){
args__10473__auto__.push((arguments[i__10467__auto___12662]));

var G__12663 = (i__10467__auto___12662 + (1));
i__10467__auto___12662 = G__12663;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12660))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12660){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12660);
});})(g__10555__auto___12660))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__10555__auto___12660){
return (function (seq12639){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12639));
});})(g__10555__auto___12660))
;


var g__10555__auto___12664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__10555__auto___12664){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12665 = arguments.length;
var i__10467__auto___12666 = (0);
while(true){
if((i__10467__auto___12666 < len__10466__auto___12665)){
args__10473__auto__.push((arguments[i__10467__auto___12666]));

var G__12667 = (i__10467__auto___12666 + (1));
i__10467__auto___12666 = G__12667;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12664))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12664){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12664);
});})(g__10555__auto___12664))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__10555__auto___12664){
return (function (seq12640){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12640));
});})(g__10555__auto___12664))
;


var g__10555__auto___12668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__10555__auto___12668){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12669 = arguments.length;
var i__10467__auto___12670 = (0);
while(true){
if((i__10467__auto___12670 < len__10466__auto___12669)){
args__10473__auto__.push((arguments[i__10467__auto___12670]));

var G__12671 = (i__10467__auto___12670 + (1));
i__10467__auto___12670 = G__12671;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12668))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12668){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12668);
});})(g__10555__auto___12668))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__10555__auto___12668){
return (function (seq12641){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12641));
});})(g__10555__auto___12668))
;


var g__10555__auto___12672 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__10555__auto___12672){
return (function cljs$spec$impl$gen$char(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12673 = arguments.length;
var i__10467__auto___12674 = (0);
while(true){
if((i__10467__auto___12674 < len__10466__auto___12673)){
args__10473__auto__.push((arguments[i__10467__auto___12674]));

var G__12675 = (i__10467__auto___12674 + (1));
i__10467__auto___12674 = G__12675;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12672))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12672){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12672);
});})(g__10555__auto___12672))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__10555__auto___12672){
return (function (seq12642){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12642));
});})(g__10555__auto___12672))
;


var g__10555__auto___12676 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__10555__auto___12676){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12677 = arguments.length;
var i__10467__auto___12678 = (0);
while(true){
if((i__10467__auto___12678 < len__10466__auto___12677)){
args__10473__auto__.push((arguments[i__10467__auto___12678]));

var G__12679 = (i__10467__auto___12678 + (1));
i__10467__auto___12678 = G__12679;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12676))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12676){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12676);
});})(g__10555__auto___12676))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__10555__auto___12676){
return (function (seq12643){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12643));
});})(g__10555__auto___12676))
;


var g__10555__auto___12680 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__10555__auto___12680){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12681 = arguments.length;
var i__10467__auto___12682 = (0);
while(true){
if((i__10467__auto___12682 < len__10466__auto___12681)){
args__10473__auto__.push((arguments[i__10467__auto___12682]));

var G__12683 = (i__10467__auto___12682 + (1));
i__10467__auto___12682 = G__12683;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12680))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12680){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12680);
});})(g__10555__auto___12680))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__10555__auto___12680){
return (function (seq12644){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12644));
});})(g__10555__auto___12680))
;


var g__10555__auto___12684 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__10555__auto___12684){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12685 = arguments.length;
var i__10467__auto___12686 = (0);
while(true){
if((i__10467__auto___12686 < len__10466__auto___12685)){
args__10473__auto__.push((arguments[i__10467__auto___12686]));

var G__12687 = (i__10467__auto___12686 + (1));
i__10467__auto___12686 = G__12687;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12684))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12684){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12684);
});})(g__10555__auto___12684))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__10555__auto___12684){
return (function (seq12645){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12645));
});})(g__10555__auto___12684))
;


var g__10555__auto___12688 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__10555__auto___12688){
return (function cljs$spec$impl$gen$double(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12689 = arguments.length;
var i__10467__auto___12690 = (0);
while(true){
if((i__10467__auto___12690 < len__10466__auto___12689)){
args__10473__auto__.push((arguments[i__10467__auto___12690]));

var G__12691 = (i__10467__auto___12690 + (1));
i__10467__auto___12690 = G__12691;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12688))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12688){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12688);
});})(g__10555__auto___12688))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__10555__auto___12688){
return (function (seq12646){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12646));
});})(g__10555__auto___12688))
;


var g__10555__auto___12692 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__10555__auto___12692){
return (function cljs$spec$impl$gen$int(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12693 = arguments.length;
var i__10467__auto___12694 = (0);
while(true){
if((i__10467__auto___12694 < len__10466__auto___12693)){
args__10473__auto__.push((arguments[i__10467__auto___12694]));

var G__12695 = (i__10467__auto___12694 + (1));
i__10467__auto___12694 = G__12695;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12692))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12692){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12692);
});})(g__10555__auto___12692))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__10555__auto___12692){
return (function (seq12647){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12647));
});})(g__10555__auto___12692))
;


var g__10555__auto___12696 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__10555__auto___12696){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12697 = arguments.length;
var i__10467__auto___12698 = (0);
while(true){
if((i__10467__auto___12698 < len__10466__auto___12697)){
args__10473__auto__.push((arguments[i__10467__auto___12698]));

var G__12699 = (i__10467__auto___12698 + (1));
i__10467__auto___12698 = G__12699;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12696))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12696){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12696);
});})(g__10555__auto___12696))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__10555__auto___12696){
return (function (seq12648){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12648));
});})(g__10555__auto___12696))
;


var g__10555__auto___12700 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__10555__auto___12700){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12701 = arguments.length;
var i__10467__auto___12702 = (0);
while(true){
if((i__10467__auto___12702 < len__10466__auto___12701)){
args__10473__auto__.push((arguments[i__10467__auto___12702]));

var G__12703 = (i__10467__auto___12702 + (1));
i__10467__auto___12702 = G__12703;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12700))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12700){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12700);
});})(g__10555__auto___12700))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__10555__auto___12700){
return (function (seq12649){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12649));
});})(g__10555__auto___12700))
;


var g__10555__auto___12704 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__10555__auto___12704){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12705 = arguments.length;
var i__10467__auto___12706 = (0);
while(true){
if((i__10467__auto___12706 < len__10466__auto___12705)){
args__10473__auto__.push((arguments[i__10467__auto___12706]));

var G__12707 = (i__10467__auto___12706 + (1));
i__10467__auto___12706 = G__12707;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12704))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12704){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12704);
});})(g__10555__auto___12704))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__10555__auto___12704){
return (function (seq12650){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12650));
});})(g__10555__auto___12704))
;


var g__10555__auto___12708 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__10555__auto___12708){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12709 = arguments.length;
var i__10467__auto___12710 = (0);
while(true){
if((i__10467__auto___12710 < len__10466__auto___12709)){
args__10473__auto__.push((arguments[i__10467__auto___12710]));

var G__12711 = (i__10467__auto___12710 + (1));
i__10467__auto___12710 = G__12711;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12708))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12708){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12708);
});})(g__10555__auto___12708))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__10555__auto___12708){
return (function (seq12651){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12651));
});})(g__10555__auto___12708))
;


var g__10555__auto___12712 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__10555__auto___12712){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12713 = arguments.length;
var i__10467__auto___12714 = (0);
while(true){
if((i__10467__auto___12714 < len__10466__auto___12713)){
args__10473__auto__.push((arguments[i__10467__auto___12714]));

var G__12715 = (i__10467__auto___12714 + (1));
i__10467__auto___12714 = G__12715;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12712))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12712){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12712);
});})(g__10555__auto___12712))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__10555__auto___12712){
return (function (seq12652){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12652));
});})(g__10555__auto___12712))
;


var g__10555__auto___12716 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__10555__auto___12716){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12717 = arguments.length;
var i__10467__auto___12718 = (0);
while(true){
if((i__10467__auto___12718 < len__10466__auto___12717)){
args__10473__auto__.push((arguments[i__10467__auto___12718]));

var G__12719 = (i__10467__auto___12718 + (1));
i__10467__auto___12718 = G__12719;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12716))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12716){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12716);
});})(g__10555__auto___12716))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__10555__auto___12716){
return (function (seq12653){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12653));
});})(g__10555__auto___12716))
;


var g__10555__auto___12720 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__10555__auto___12720){
return (function cljs$spec$impl$gen$string(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12721 = arguments.length;
var i__10467__auto___12722 = (0);
while(true){
if((i__10467__auto___12722 < len__10466__auto___12721)){
args__10473__auto__.push((arguments[i__10467__auto___12722]));

var G__12723 = (i__10467__auto___12722 + (1));
i__10467__auto___12722 = G__12723;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12720))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12720){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12720);
});})(g__10555__auto___12720))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__10555__auto___12720){
return (function (seq12654){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12654));
});})(g__10555__auto___12720))
;


var g__10555__auto___12724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__10555__auto___12724){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12725 = arguments.length;
var i__10467__auto___12726 = (0);
while(true){
if((i__10467__auto___12726 < len__10466__auto___12725)){
args__10473__auto__.push((arguments[i__10467__auto___12726]));

var G__12727 = (i__10467__auto___12726 + (1));
i__10467__auto___12726 = G__12727;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12724))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12724){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12724);
});})(g__10555__auto___12724))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__10555__auto___12724){
return (function (seq12655){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12655));
});})(g__10555__auto___12724))
;


var g__10555__auto___12728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__10555__auto___12728){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12729 = arguments.length;
var i__10467__auto___12730 = (0);
while(true){
if((i__10467__auto___12730 < len__10466__auto___12729)){
args__10473__auto__.push((arguments[i__10467__auto___12730]));

var G__12731 = (i__10467__auto___12730 + (1));
i__10467__auto___12730 = G__12731;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12728))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12728){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12728);
});})(g__10555__auto___12728))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__10555__auto___12728){
return (function (seq12656){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12656));
});})(g__10555__auto___12728))
;


var g__10555__auto___12732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__10555__auto___12732){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12733 = arguments.length;
var i__10467__auto___12734 = (0);
while(true){
if((i__10467__auto___12734 < len__10466__auto___12733)){
args__10473__auto__.push((arguments[i__10467__auto___12734]));

var G__12735 = (i__10467__auto___12734 + (1));
i__10467__auto___12734 = G__12735;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12732))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12732){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12732);
});})(g__10555__auto___12732))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__10555__auto___12732){
return (function (seq12657){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12657));
});})(g__10555__auto___12732))
;


var g__10555__auto___12736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__10555__auto___12736){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12737 = arguments.length;
var i__10467__auto___12738 = (0);
while(true){
if((i__10467__auto___12738 < len__10466__auto___12737)){
args__10473__auto__.push((arguments[i__10467__auto___12738]));

var G__12739 = (i__10467__auto___12738 + (1));
i__10467__auto___12738 = G__12739;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12736))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12736){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12736);
});})(g__10555__auto___12736))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__10555__auto___12736){
return (function (seq12658){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12658));
});})(g__10555__auto___12736))
;


var g__10555__auto___12740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__10555__auto___12740){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12741 = arguments.length;
var i__10467__auto___12742 = (0);
while(true){
if((i__10467__auto___12742 < len__10466__auto___12741)){
args__10473__auto__.push((arguments[i__10467__auto___12742]));

var G__12743 = (i__10467__auto___12742 + (1));
i__10467__auto___12742 = G__12743;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});})(g__10555__auto___12740))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10555__auto___12740){
return (function (args){
return cljs.core.deref.call(null,g__10555__auto___12740);
});})(g__10555__auto___12740))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__10555__auto___12740){
return (function (seq12659){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12659));
});})(g__10555__auto___12740))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__10473__auto__ = [];
var len__10466__auto___12746 = arguments.length;
var i__10467__auto___12747 = (0);
while(true){
if((i__10467__auto___12747 < len__10466__auto___12746)){
args__10473__auto__.push((arguments[i__10467__auto___12747]));

var G__12748 = (i__10467__auto___12747 + (1));
i__10467__auto___12747 = G__12748;
continue;
} else {
}
break;
}

var argseq__10474__auto__ = ((((0) < args__10473__auto__.length))?(new cljs.core.IndexedSeq(args__10473__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10474__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12744_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12744_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12745){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12745));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12749_SHARP_){
return (new Date(p1__12749_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map