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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7152__auto__,writer__7153__auto__,opt__7154__auto__){
return cljs.core._write.call(null,writer__7153__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__7628__auto__ = [];
var len__7621__auto___8019 = arguments.length;
var i__7622__auto___8020 = (0);
while(true){
if((i__7622__auto___8020 < len__7621__auto___8019)){
args__7628__auto__.push((arguments[i__7622__auto___8020]));

var G__8021 = (i__7622__auto___8020 + (1));
i__7622__auto___8020 = G__8021;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq8018){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8018));
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
var args__7628__auto__ = [];
var len__7621__auto___8023 = arguments.length;
var i__7622__auto___8024 = (0);
while(true){
if((i__7622__auto___8024 < len__7621__auto___8023)){
args__7628__auto__.push((arguments[i__7622__auto___8024]));

var G__8025 = (i__7622__auto___8024 + (1));
i__7622__auto___8024 = G__8025;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq8022){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8022));
});

var g_QMARK__8026 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_8027 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8026){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8026))
,null));
var mkg_8028 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__8026,g_8027){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__8026,g_8027))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__8026,g_8027,mkg_8028){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__8026).call(null,x);
});})(g_QMARK__8026,g_8027,mkg_8028))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__8026,g_8027,mkg_8028){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_8028).call(null,gfn);
});})(g_QMARK__8026,g_8027,mkg_8028))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__8026,g_8027,mkg_8028){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_8027).call(null,generator);
});})(g_QMARK__8026,g_8027,mkg_8028))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__7990__auto___8046 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__7990__auto___8046){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8047 = arguments.length;
var i__7622__auto___8048 = (0);
while(true){
if((i__7622__auto___8048 < len__7621__auto___8047)){
args__7628__auto__.push((arguments[i__7622__auto___8048]));

var G__8049 = (i__7622__auto___8048 + (1));
i__7622__auto___8048 = G__8049;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8046))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8046){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8046),args);
});})(g__7990__auto___8046))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__7990__auto___8046){
return (function (seq8029){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8029));
});})(g__7990__auto___8046))
;


var g__7990__auto___8050 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__7990__auto___8050){
return (function cljs$spec$impl$gen$list(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8051 = arguments.length;
var i__7622__auto___8052 = (0);
while(true){
if((i__7622__auto___8052 < len__7621__auto___8051)){
args__7628__auto__.push((arguments[i__7622__auto___8052]));

var G__8053 = (i__7622__auto___8052 + (1));
i__7622__auto___8052 = G__8053;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8050))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8050){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8050),args);
});})(g__7990__auto___8050))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__7990__auto___8050){
return (function (seq8030){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8030));
});})(g__7990__auto___8050))
;


var g__7990__auto___8054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__7990__auto___8054){
return (function cljs$spec$impl$gen$map(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8055 = arguments.length;
var i__7622__auto___8056 = (0);
while(true){
if((i__7622__auto___8056 < len__7621__auto___8055)){
args__7628__auto__.push((arguments[i__7622__auto___8056]));

var G__8057 = (i__7622__auto___8056 + (1));
i__7622__auto___8056 = G__8057;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8054))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8054){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8054),args);
});})(g__7990__auto___8054))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__7990__auto___8054){
return (function (seq8031){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8031));
});})(g__7990__auto___8054))
;


var g__7990__auto___8058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__7990__auto___8058){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8059 = arguments.length;
var i__7622__auto___8060 = (0);
while(true){
if((i__7622__auto___8060 < len__7621__auto___8059)){
args__7628__auto__.push((arguments[i__7622__auto___8060]));

var G__8061 = (i__7622__auto___8060 + (1));
i__7622__auto___8060 = G__8061;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8058))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8058){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8058),args);
});})(g__7990__auto___8058))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__7990__auto___8058){
return (function (seq8032){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8032));
});})(g__7990__auto___8058))
;


var g__7990__auto___8062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__7990__auto___8062){
return (function cljs$spec$impl$gen$set(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8063 = arguments.length;
var i__7622__auto___8064 = (0);
while(true){
if((i__7622__auto___8064 < len__7621__auto___8063)){
args__7628__auto__.push((arguments[i__7622__auto___8064]));

var G__8065 = (i__7622__auto___8064 + (1));
i__7622__auto___8064 = G__8065;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8062))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8062){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8062),args);
});})(g__7990__auto___8062))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__7990__auto___8062){
return (function (seq8033){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8033));
});})(g__7990__auto___8062))
;


var g__7990__auto___8066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__7990__auto___8066){
return (function cljs$spec$impl$gen$vector(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8067 = arguments.length;
var i__7622__auto___8068 = (0);
while(true){
if((i__7622__auto___8068 < len__7621__auto___8067)){
args__7628__auto__.push((arguments[i__7622__auto___8068]));

var G__8069 = (i__7622__auto___8068 + (1));
i__7622__auto___8068 = G__8069;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8066))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8066){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8066),args);
});})(g__7990__auto___8066))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__7990__auto___8066){
return (function (seq8034){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8034));
});})(g__7990__auto___8066))
;


var g__7990__auto___8070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__7990__auto___8070){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8071 = arguments.length;
var i__7622__auto___8072 = (0);
while(true){
if((i__7622__auto___8072 < len__7621__auto___8071)){
args__7628__auto__.push((arguments[i__7622__auto___8072]));

var G__8073 = (i__7622__auto___8072 + (1));
i__7622__auto___8072 = G__8073;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8070))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8070){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8070),args);
});})(g__7990__auto___8070))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__7990__auto___8070){
return (function (seq8035){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8035));
});})(g__7990__auto___8070))
;


var g__7990__auto___8074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__7990__auto___8074){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8075 = arguments.length;
var i__7622__auto___8076 = (0);
while(true){
if((i__7622__auto___8076 < len__7621__auto___8075)){
args__7628__auto__.push((arguments[i__7622__auto___8076]));

var G__8077 = (i__7622__auto___8076 + (1));
i__7622__auto___8076 = G__8077;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8074))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8074){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8074),args);
});})(g__7990__auto___8074))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__7990__auto___8074){
return (function (seq8036){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8036));
});})(g__7990__auto___8074))
;


var g__7990__auto___8078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__7990__auto___8078){
return (function cljs$spec$impl$gen$elements(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8079 = arguments.length;
var i__7622__auto___8080 = (0);
while(true){
if((i__7622__auto___8080 < len__7621__auto___8079)){
args__7628__auto__.push((arguments[i__7622__auto___8080]));

var G__8081 = (i__7622__auto___8080 + (1));
i__7622__auto___8080 = G__8081;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8078))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8078){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8078),args);
});})(g__7990__auto___8078))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__7990__auto___8078){
return (function (seq8037){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8037));
});})(g__7990__auto___8078))
;


var g__7990__auto___8082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__7990__auto___8082){
return (function cljs$spec$impl$gen$bind(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8083 = arguments.length;
var i__7622__auto___8084 = (0);
while(true){
if((i__7622__auto___8084 < len__7621__auto___8083)){
args__7628__auto__.push((arguments[i__7622__auto___8084]));

var G__8085 = (i__7622__auto___8084 + (1));
i__7622__auto___8084 = G__8085;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8082))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8082){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8082),args);
});})(g__7990__auto___8082))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__7990__auto___8082){
return (function (seq8038){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8038));
});})(g__7990__auto___8082))
;


var g__7990__auto___8086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__7990__auto___8086){
return (function cljs$spec$impl$gen$choose(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8087 = arguments.length;
var i__7622__auto___8088 = (0);
while(true){
if((i__7622__auto___8088 < len__7621__auto___8087)){
args__7628__auto__.push((arguments[i__7622__auto___8088]));

var G__8089 = (i__7622__auto___8088 + (1));
i__7622__auto___8088 = G__8089;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8086))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8086){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8086),args);
});})(g__7990__auto___8086))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__7990__auto___8086){
return (function (seq8039){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8039));
});})(g__7990__auto___8086))
;


var g__7990__auto___8090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__7990__auto___8090){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8091 = arguments.length;
var i__7622__auto___8092 = (0);
while(true){
if((i__7622__auto___8092 < len__7621__auto___8091)){
args__7628__auto__.push((arguments[i__7622__auto___8092]));

var G__8093 = (i__7622__auto___8092 + (1));
i__7622__auto___8092 = G__8093;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8090))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8090){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8090),args);
});})(g__7990__auto___8090))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__7990__auto___8090){
return (function (seq8040){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8040));
});})(g__7990__auto___8090))
;


var g__7990__auto___8094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__7990__auto___8094){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8095 = arguments.length;
var i__7622__auto___8096 = (0);
while(true){
if((i__7622__auto___8096 < len__7621__auto___8095)){
args__7628__auto__.push((arguments[i__7622__auto___8096]));

var G__8097 = (i__7622__auto___8096 + (1));
i__7622__auto___8096 = G__8097;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8094))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8094){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8094),args);
});})(g__7990__auto___8094))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__7990__auto___8094){
return (function (seq8041){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8041));
});})(g__7990__auto___8094))
;


var g__7990__auto___8098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__7990__auto___8098){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8099 = arguments.length;
var i__7622__auto___8100 = (0);
while(true){
if((i__7622__auto___8100 < len__7621__auto___8099)){
args__7628__auto__.push((arguments[i__7622__auto___8100]));

var G__8101 = (i__7622__auto___8100 + (1));
i__7622__auto___8100 = G__8101;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8098))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8098){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8098),args);
});})(g__7990__auto___8098))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__7990__auto___8098){
return (function (seq8042){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8042));
});})(g__7990__auto___8098))
;


var g__7990__auto___8102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__7990__auto___8102){
return (function cljs$spec$impl$gen$sample(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8103 = arguments.length;
var i__7622__auto___8104 = (0);
while(true){
if((i__7622__auto___8104 < len__7621__auto___8103)){
args__7628__auto__.push((arguments[i__7622__auto___8104]));

var G__8105 = (i__7622__auto___8104 + (1));
i__7622__auto___8104 = G__8105;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8102))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8102){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8102),args);
});})(g__7990__auto___8102))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__7990__auto___8102){
return (function (seq8043){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8043));
});})(g__7990__auto___8102))
;


var g__7990__auto___8106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__7990__auto___8106){
return (function cljs$spec$impl$gen$return(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8107 = arguments.length;
var i__7622__auto___8108 = (0);
while(true){
if((i__7622__auto___8108 < len__7621__auto___8107)){
args__7628__auto__.push((arguments[i__7622__auto___8108]));

var G__8109 = (i__7622__auto___8108 + (1));
i__7622__auto___8108 = G__8109;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8106))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8106){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8106),args);
});})(g__7990__auto___8106))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__7990__auto___8106){
return (function (seq8044){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8044));
});})(g__7990__auto___8106))
;


var g__7990__auto___8110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__7990__auto___8110){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8111 = arguments.length;
var i__7622__auto___8112 = (0);
while(true){
if((i__7622__auto___8112 < len__7621__auto___8111)){
args__7628__auto__.push((arguments[i__7622__auto___8112]));

var G__8113 = (i__7622__auto___8112 + (1));
i__7622__auto___8112 = G__8113;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__7990__auto___8110))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__7990__auto___8110){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__7990__auto___8110),args);
});})(g__7990__auto___8110))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__7990__auto___8110){
return (function (seq8045){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8045));
});})(g__7990__auto___8110))
;

var g__8003__auto___8135 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__8003__auto___8135){
return (function cljs$spec$impl$gen$any(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8136 = arguments.length;
var i__7622__auto___8137 = (0);
while(true){
if((i__7622__auto___8137 < len__7621__auto___8136)){
args__7628__auto__.push((arguments[i__7622__auto___8137]));

var G__8138 = (i__7622__auto___8137 + (1));
i__7622__auto___8137 = G__8138;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8135))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8135){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8135);
});})(g__8003__auto___8135))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__8003__auto___8135){
return (function (seq8114){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8114));
});})(g__8003__auto___8135))
;


var g__8003__auto___8139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__8003__auto___8139){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8140 = arguments.length;
var i__7622__auto___8141 = (0);
while(true){
if((i__7622__auto___8141 < len__7621__auto___8140)){
args__7628__auto__.push((arguments[i__7622__auto___8141]));

var G__8142 = (i__7622__auto___8141 + (1));
i__7622__auto___8141 = G__8142;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8139))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8139){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8139);
});})(g__8003__auto___8139))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__8003__auto___8139){
return (function (seq8115){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8115));
});})(g__8003__auto___8139))
;


var g__8003__auto___8143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__8003__auto___8143){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8144 = arguments.length;
var i__7622__auto___8145 = (0);
while(true){
if((i__7622__auto___8145 < len__7621__auto___8144)){
args__7628__auto__.push((arguments[i__7622__auto___8145]));

var G__8146 = (i__7622__auto___8145 + (1));
i__7622__auto___8145 = G__8146;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8143))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8143){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8143);
});})(g__8003__auto___8143))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__8003__auto___8143){
return (function (seq8116){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8116));
});})(g__8003__auto___8143))
;


var g__8003__auto___8147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__8003__auto___8147){
return (function cljs$spec$impl$gen$char(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8148 = arguments.length;
var i__7622__auto___8149 = (0);
while(true){
if((i__7622__auto___8149 < len__7621__auto___8148)){
args__7628__auto__.push((arguments[i__7622__auto___8149]));

var G__8150 = (i__7622__auto___8149 + (1));
i__7622__auto___8149 = G__8150;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8147))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8147){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8147);
});})(g__8003__auto___8147))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__8003__auto___8147){
return (function (seq8117){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8117));
});})(g__8003__auto___8147))
;


var g__8003__auto___8151 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__8003__auto___8151){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8152 = arguments.length;
var i__7622__auto___8153 = (0);
while(true){
if((i__7622__auto___8153 < len__7621__auto___8152)){
args__7628__auto__.push((arguments[i__7622__auto___8153]));

var G__8154 = (i__7622__auto___8153 + (1));
i__7622__auto___8153 = G__8154;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8151))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8151){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8151);
});})(g__8003__auto___8151))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__8003__auto___8151){
return (function (seq8118){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8118));
});})(g__8003__auto___8151))
;


var g__8003__auto___8155 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__8003__auto___8155){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8156 = arguments.length;
var i__7622__auto___8157 = (0);
while(true){
if((i__7622__auto___8157 < len__7621__auto___8156)){
args__7628__auto__.push((arguments[i__7622__auto___8157]));

var G__8158 = (i__7622__auto___8157 + (1));
i__7622__auto___8157 = G__8158;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8155))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8155){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8155);
});})(g__8003__auto___8155))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__8003__auto___8155){
return (function (seq8119){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8119));
});})(g__8003__auto___8155))
;


var g__8003__auto___8159 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__8003__auto___8159){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8160 = arguments.length;
var i__7622__auto___8161 = (0);
while(true){
if((i__7622__auto___8161 < len__7621__auto___8160)){
args__7628__auto__.push((arguments[i__7622__auto___8161]));

var G__8162 = (i__7622__auto___8161 + (1));
i__7622__auto___8161 = G__8162;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8159))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8159){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8159);
});})(g__8003__auto___8159))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__8003__auto___8159){
return (function (seq8120){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8120));
});})(g__8003__auto___8159))
;


var g__8003__auto___8163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__8003__auto___8163){
return (function cljs$spec$impl$gen$double(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8164 = arguments.length;
var i__7622__auto___8165 = (0);
while(true){
if((i__7622__auto___8165 < len__7621__auto___8164)){
args__7628__auto__.push((arguments[i__7622__auto___8165]));

var G__8166 = (i__7622__auto___8165 + (1));
i__7622__auto___8165 = G__8166;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8163))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8163){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8163);
});})(g__8003__auto___8163))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__8003__auto___8163){
return (function (seq8121){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8121));
});})(g__8003__auto___8163))
;


var g__8003__auto___8167 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__8003__auto___8167){
return (function cljs$spec$impl$gen$int(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8168 = arguments.length;
var i__7622__auto___8169 = (0);
while(true){
if((i__7622__auto___8169 < len__7621__auto___8168)){
args__7628__auto__.push((arguments[i__7622__auto___8169]));

var G__8170 = (i__7622__auto___8169 + (1));
i__7622__auto___8169 = G__8170;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8167))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8167){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8167);
});})(g__8003__auto___8167))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__8003__auto___8167){
return (function (seq8122){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8122));
});})(g__8003__auto___8167))
;


var g__8003__auto___8171 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__8003__auto___8171){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8172 = arguments.length;
var i__7622__auto___8173 = (0);
while(true){
if((i__7622__auto___8173 < len__7621__auto___8172)){
args__7628__auto__.push((arguments[i__7622__auto___8173]));

var G__8174 = (i__7622__auto___8173 + (1));
i__7622__auto___8173 = G__8174;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8171))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8171){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8171);
});})(g__8003__auto___8171))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__8003__auto___8171){
return (function (seq8123){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8123));
});})(g__8003__auto___8171))
;


var g__8003__auto___8175 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__8003__auto___8175){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8176 = arguments.length;
var i__7622__auto___8177 = (0);
while(true){
if((i__7622__auto___8177 < len__7621__auto___8176)){
args__7628__auto__.push((arguments[i__7622__auto___8177]));

var G__8178 = (i__7622__auto___8177 + (1));
i__7622__auto___8177 = G__8178;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8175))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8175){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8175);
});})(g__8003__auto___8175))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__8003__auto___8175){
return (function (seq8124){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8124));
});})(g__8003__auto___8175))
;


var g__8003__auto___8179 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__8003__auto___8179){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8180 = arguments.length;
var i__7622__auto___8181 = (0);
while(true){
if((i__7622__auto___8181 < len__7621__auto___8180)){
args__7628__auto__.push((arguments[i__7622__auto___8181]));

var G__8182 = (i__7622__auto___8181 + (1));
i__7622__auto___8181 = G__8182;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8179))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8179){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8179);
});})(g__8003__auto___8179))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__8003__auto___8179){
return (function (seq8125){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8125));
});})(g__8003__auto___8179))
;


var g__8003__auto___8183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__8003__auto___8183){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8184 = arguments.length;
var i__7622__auto___8185 = (0);
while(true){
if((i__7622__auto___8185 < len__7621__auto___8184)){
args__7628__auto__.push((arguments[i__7622__auto___8185]));

var G__8186 = (i__7622__auto___8185 + (1));
i__7622__auto___8185 = G__8186;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8183))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8183){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8183);
});})(g__8003__auto___8183))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__8003__auto___8183){
return (function (seq8126){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8126));
});})(g__8003__auto___8183))
;


var g__8003__auto___8187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__8003__auto___8187){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8188 = arguments.length;
var i__7622__auto___8189 = (0);
while(true){
if((i__7622__auto___8189 < len__7621__auto___8188)){
args__7628__auto__.push((arguments[i__7622__auto___8189]));

var G__8190 = (i__7622__auto___8189 + (1));
i__7622__auto___8189 = G__8190;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8187))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8187){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8187);
});})(g__8003__auto___8187))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__8003__auto___8187){
return (function (seq8127){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8127));
});})(g__8003__auto___8187))
;


var g__8003__auto___8191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__8003__auto___8191){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8192 = arguments.length;
var i__7622__auto___8193 = (0);
while(true){
if((i__7622__auto___8193 < len__7621__auto___8192)){
args__7628__auto__.push((arguments[i__7622__auto___8193]));

var G__8194 = (i__7622__auto___8193 + (1));
i__7622__auto___8193 = G__8194;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8191))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8191){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8191);
});})(g__8003__auto___8191))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__8003__auto___8191){
return (function (seq8128){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8128));
});})(g__8003__auto___8191))
;


var g__8003__auto___8195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__8003__auto___8195){
return (function cljs$spec$impl$gen$string(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8196 = arguments.length;
var i__7622__auto___8197 = (0);
while(true){
if((i__7622__auto___8197 < len__7621__auto___8196)){
args__7628__auto__.push((arguments[i__7622__auto___8197]));

var G__8198 = (i__7622__auto___8197 + (1));
i__7622__auto___8197 = G__8198;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8195))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8195){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8195);
});})(g__8003__auto___8195))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__8003__auto___8195){
return (function (seq8129){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8129));
});})(g__8003__auto___8195))
;


var g__8003__auto___8199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__8003__auto___8199){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8200 = arguments.length;
var i__7622__auto___8201 = (0);
while(true){
if((i__7622__auto___8201 < len__7621__auto___8200)){
args__7628__auto__.push((arguments[i__7622__auto___8201]));

var G__8202 = (i__7622__auto___8201 + (1));
i__7622__auto___8201 = G__8202;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8199))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8199){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8199);
});})(g__8003__auto___8199))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__8003__auto___8199){
return (function (seq8130){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8130));
});})(g__8003__auto___8199))
;


var g__8003__auto___8203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__8003__auto___8203){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8204 = arguments.length;
var i__7622__auto___8205 = (0);
while(true){
if((i__7622__auto___8205 < len__7621__auto___8204)){
args__7628__auto__.push((arguments[i__7622__auto___8205]));

var G__8206 = (i__7622__auto___8205 + (1));
i__7622__auto___8205 = G__8206;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8203))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8203){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8203);
});})(g__8003__auto___8203))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__8003__auto___8203){
return (function (seq8131){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8131));
});})(g__8003__auto___8203))
;


var g__8003__auto___8207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__8003__auto___8207){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8208 = arguments.length;
var i__7622__auto___8209 = (0);
while(true){
if((i__7622__auto___8209 < len__7621__auto___8208)){
args__7628__auto__.push((arguments[i__7622__auto___8209]));

var G__8210 = (i__7622__auto___8209 + (1));
i__7622__auto___8209 = G__8210;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8207))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8207){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8207);
});})(g__8003__auto___8207))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__8003__auto___8207){
return (function (seq8132){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8132));
});})(g__8003__auto___8207))
;


var g__8003__auto___8211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__8003__auto___8211){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8212 = arguments.length;
var i__7622__auto___8213 = (0);
while(true){
if((i__7622__auto___8213 < len__7621__auto___8212)){
args__7628__auto__.push((arguments[i__7622__auto___8213]));

var G__8214 = (i__7622__auto___8213 + (1));
i__7622__auto___8213 = G__8214;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8211))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8211){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8211);
});})(g__8003__auto___8211))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__8003__auto___8211){
return (function (seq8133){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8133));
});})(g__8003__auto___8211))
;


var g__8003__auto___8215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__8003__auto___8215){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8216 = arguments.length;
var i__7622__auto___8217 = (0);
while(true){
if((i__7622__auto___8217 < len__7621__auto___8216)){
args__7628__auto__.push((arguments[i__7622__auto___8217]));

var G__8218 = (i__7622__auto___8217 + (1));
i__7622__auto___8217 = G__8218;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});})(g__8003__auto___8215))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__8003__auto___8215){
return (function (args){
return cljs.core.deref.call(null,g__8003__auto___8215);
});})(g__8003__auto___8215))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__8003__auto___8215){
return (function (seq8134){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8134));
});})(g__8003__auto___8215))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__7628__auto__ = [];
var len__7621__auto___8221 = arguments.length;
var i__7622__auto___8222 = (0);
while(true){
if((i__7622__auto___8222 < len__7621__auto___8221)){
args__7628__auto__.push((arguments[i__7622__auto___8222]));

var G__8223 = (i__7622__auto___8222 + (1));
i__7622__auto___8222 = G__8223;
continue;
} else {
}
break;
}

var argseq__7629__auto__ = ((((0) < args__7628__auto__.length))?(new cljs.core.IndexedSeq(args__7628__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__7629__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__8219_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__8219_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq8220){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8220));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__8224_SHARP_){
return (new Date(p1__8224_SHARP_));
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