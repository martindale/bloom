// Compiled by ClojureScript 1.9.229 {}
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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__21331__auto__ = [];
var len__21324__auto___27021 = arguments.length;
var i__21325__auto___27022 = (0);
while(true){
if((i__21325__auto___27022 < len__21324__auto___27021)){
args__21331__auto__.push((arguments[i__21325__auto___27022]));

var G__27023 = (i__21325__auto___27022 + (1));
i__21325__auto___27022 = G__27023;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq27020){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27020));
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
var args__21331__auto__ = [];
var len__21324__auto___27025 = arguments.length;
var i__21325__auto___27026 = (0);
while(true){
if((i__21325__auto___27026 < len__21324__auto___27025)){
args__21331__auto__.push((arguments[i__21325__auto___27026]));

var G__27027 = (i__21325__auto___27026 + (1));
i__21325__auto___27026 = G__27027;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq27024){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27024));
});

var g_QMARK__27028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_27029 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27028){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27028))
,null));
var mkg_27030 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__27028,g_27029){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__27028,g_27029))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__27028,g_27029,mkg_27030){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__27028).call(null,x);
});})(g_QMARK__27028,g_27029,mkg_27030))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__27028,g_27029,mkg_27030){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_27030).call(null,gfn);
});})(g_QMARK__27028,g_27029,mkg_27030))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__27028,g_27029,mkg_27030){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_27029).call(null,generator);
});})(g_QMARK__27028,g_27029,mkg_27030))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__26992__auto___27049 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__26992__auto___27049){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27050 = arguments.length;
var i__21325__auto___27051 = (0);
while(true){
if((i__21325__auto___27051 < len__21324__auto___27050)){
args__21331__auto__.push((arguments[i__21325__auto___27051]));

var G__27052 = (i__21325__auto___27051 + (1));
i__21325__auto___27051 = G__27052;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27049))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27049){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27049),args);
});})(g__26992__auto___27049))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__26992__auto___27049){
return (function (seq27031){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27031));
});})(g__26992__auto___27049))
;


var g__26992__auto___27053 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__26992__auto___27053){
return (function cljs$spec$impl$gen$list(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27054 = arguments.length;
var i__21325__auto___27055 = (0);
while(true){
if((i__21325__auto___27055 < len__21324__auto___27054)){
args__21331__auto__.push((arguments[i__21325__auto___27055]));

var G__27056 = (i__21325__auto___27055 + (1));
i__21325__auto___27055 = G__27056;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27053))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27053){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27053),args);
});})(g__26992__auto___27053))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__26992__auto___27053){
return (function (seq27032){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27032));
});})(g__26992__auto___27053))
;


var g__26992__auto___27057 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__26992__auto___27057){
return (function cljs$spec$impl$gen$map(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27058 = arguments.length;
var i__21325__auto___27059 = (0);
while(true){
if((i__21325__auto___27059 < len__21324__auto___27058)){
args__21331__auto__.push((arguments[i__21325__auto___27059]));

var G__27060 = (i__21325__auto___27059 + (1));
i__21325__auto___27059 = G__27060;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27057))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27057){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27057),args);
});})(g__26992__auto___27057))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__26992__auto___27057){
return (function (seq27033){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27033));
});})(g__26992__auto___27057))
;


var g__26992__auto___27061 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__26992__auto___27061){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27062 = arguments.length;
var i__21325__auto___27063 = (0);
while(true){
if((i__21325__auto___27063 < len__21324__auto___27062)){
args__21331__auto__.push((arguments[i__21325__auto___27063]));

var G__27064 = (i__21325__auto___27063 + (1));
i__21325__auto___27063 = G__27064;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27061))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27061){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27061),args);
});})(g__26992__auto___27061))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__26992__auto___27061){
return (function (seq27034){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27034));
});})(g__26992__auto___27061))
;


var g__26992__auto___27065 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__26992__auto___27065){
return (function cljs$spec$impl$gen$set(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27066 = arguments.length;
var i__21325__auto___27067 = (0);
while(true){
if((i__21325__auto___27067 < len__21324__auto___27066)){
args__21331__auto__.push((arguments[i__21325__auto___27067]));

var G__27068 = (i__21325__auto___27067 + (1));
i__21325__auto___27067 = G__27068;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27065))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27065){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27065),args);
});})(g__26992__auto___27065))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__26992__auto___27065){
return (function (seq27035){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27035));
});})(g__26992__auto___27065))
;


var g__26992__auto___27069 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__26992__auto___27069){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27070 = arguments.length;
var i__21325__auto___27071 = (0);
while(true){
if((i__21325__auto___27071 < len__21324__auto___27070)){
args__21331__auto__.push((arguments[i__21325__auto___27071]));

var G__27072 = (i__21325__auto___27071 + (1));
i__21325__auto___27071 = G__27072;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27069))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27069){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27069),args);
});})(g__26992__auto___27069))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__26992__auto___27069){
return (function (seq27036){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27036));
});})(g__26992__auto___27069))
;


var g__26992__auto___27073 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__26992__auto___27073){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27074 = arguments.length;
var i__21325__auto___27075 = (0);
while(true){
if((i__21325__auto___27075 < len__21324__auto___27074)){
args__21331__auto__.push((arguments[i__21325__auto___27075]));

var G__27076 = (i__21325__auto___27075 + (1));
i__21325__auto___27075 = G__27076;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27073))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27073){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27073),args);
});})(g__26992__auto___27073))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__26992__auto___27073){
return (function (seq27037){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27037));
});})(g__26992__auto___27073))
;


var g__26992__auto___27077 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__26992__auto___27077){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27078 = arguments.length;
var i__21325__auto___27079 = (0);
while(true){
if((i__21325__auto___27079 < len__21324__auto___27078)){
args__21331__auto__.push((arguments[i__21325__auto___27079]));

var G__27080 = (i__21325__auto___27079 + (1));
i__21325__auto___27079 = G__27080;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27077))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27077){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27077),args);
});})(g__26992__auto___27077))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__26992__auto___27077){
return (function (seq27038){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27038));
});})(g__26992__auto___27077))
;


var g__26992__auto___27081 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__26992__auto___27081){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27082 = arguments.length;
var i__21325__auto___27083 = (0);
while(true){
if((i__21325__auto___27083 < len__21324__auto___27082)){
args__21331__auto__.push((arguments[i__21325__auto___27083]));

var G__27084 = (i__21325__auto___27083 + (1));
i__21325__auto___27083 = G__27084;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27081))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27081){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27081),args);
});})(g__26992__auto___27081))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__26992__auto___27081){
return (function (seq27039){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27039));
});})(g__26992__auto___27081))
;


var g__26992__auto___27085 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__26992__auto___27085){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27086 = arguments.length;
var i__21325__auto___27087 = (0);
while(true){
if((i__21325__auto___27087 < len__21324__auto___27086)){
args__21331__auto__.push((arguments[i__21325__auto___27087]));

var G__27088 = (i__21325__auto___27087 + (1));
i__21325__auto___27087 = G__27088;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27085))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27085){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27085),args);
});})(g__26992__auto___27085))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__26992__auto___27085){
return (function (seq27040){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27040));
});})(g__26992__auto___27085))
;


var g__26992__auto___27089 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__26992__auto___27089){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27090 = arguments.length;
var i__21325__auto___27091 = (0);
while(true){
if((i__21325__auto___27091 < len__21324__auto___27090)){
args__21331__auto__.push((arguments[i__21325__auto___27091]));

var G__27092 = (i__21325__auto___27091 + (1));
i__21325__auto___27091 = G__27092;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27089))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27089){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27089),args);
});})(g__26992__auto___27089))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__26992__auto___27089){
return (function (seq27041){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27041));
});})(g__26992__auto___27089))
;


var g__26992__auto___27093 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__26992__auto___27093){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27094 = arguments.length;
var i__21325__auto___27095 = (0);
while(true){
if((i__21325__auto___27095 < len__21324__auto___27094)){
args__21331__auto__.push((arguments[i__21325__auto___27095]));

var G__27096 = (i__21325__auto___27095 + (1));
i__21325__auto___27095 = G__27096;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27093))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27093){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27093),args);
});})(g__26992__auto___27093))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__26992__auto___27093){
return (function (seq27042){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27042));
});})(g__26992__auto___27093))
;


var g__26992__auto___27097 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__26992__auto___27097){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27098 = arguments.length;
var i__21325__auto___27099 = (0);
while(true){
if((i__21325__auto___27099 < len__21324__auto___27098)){
args__21331__auto__.push((arguments[i__21325__auto___27099]));

var G__27100 = (i__21325__auto___27099 + (1));
i__21325__auto___27099 = G__27100;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27097))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27097){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27097),args);
});})(g__26992__auto___27097))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__26992__auto___27097){
return (function (seq27043){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27043));
});})(g__26992__auto___27097))
;


var g__26992__auto___27101 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__26992__auto___27101){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27102 = arguments.length;
var i__21325__auto___27103 = (0);
while(true){
if((i__21325__auto___27103 < len__21324__auto___27102)){
args__21331__auto__.push((arguments[i__21325__auto___27103]));

var G__27104 = (i__21325__auto___27103 + (1));
i__21325__auto___27103 = G__27104;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27101))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27101){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27101),args);
});})(g__26992__auto___27101))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__26992__auto___27101){
return (function (seq27044){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27044));
});})(g__26992__auto___27101))
;


var g__26992__auto___27105 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__26992__auto___27105){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27106 = arguments.length;
var i__21325__auto___27107 = (0);
while(true){
if((i__21325__auto___27107 < len__21324__auto___27106)){
args__21331__auto__.push((arguments[i__21325__auto___27107]));

var G__27108 = (i__21325__auto___27107 + (1));
i__21325__auto___27107 = G__27108;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27105))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27105){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27105),args);
});})(g__26992__auto___27105))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__26992__auto___27105){
return (function (seq27045){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27045));
});})(g__26992__auto___27105))
;


var g__26992__auto___27109 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__26992__auto___27109){
return (function cljs$spec$impl$gen$return(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27110 = arguments.length;
var i__21325__auto___27111 = (0);
while(true){
if((i__21325__auto___27111 < len__21324__auto___27110)){
args__21331__auto__.push((arguments[i__21325__auto___27111]));

var G__27112 = (i__21325__auto___27111 + (1));
i__21325__auto___27111 = G__27112;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27109))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27109){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27109),args);
});})(g__26992__auto___27109))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__26992__auto___27109){
return (function (seq27046){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27046));
});})(g__26992__auto___27109))
;


var g__26992__auto___27113 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__26992__auto___27113){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27114 = arguments.length;
var i__21325__auto___27115 = (0);
while(true){
if((i__21325__auto___27115 < len__21324__auto___27114)){
args__21331__auto__.push((arguments[i__21325__auto___27115]));

var G__27116 = (i__21325__auto___27115 + (1));
i__21325__auto___27115 = G__27116;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27113))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27113){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27113),args);
});})(g__26992__auto___27113))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__26992__auto___27113){
return (function (seq27047){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27047));
});})(g__26992__auto___27113))
;


var g__26992__auto___27117 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__26992__auto___27117){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27118 = arguments.length;
var i__21325__auto___27119 = (0);
while(true){
if((i__21325__auto___27119 < len__21324__auto___27118)){
args__21331__auto__.push((arguments[i__21325__auto___27119]));

var G__27120 = (i__21325__auto___27119 + (1));
i__21325__auto___27119 = G__27120;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__26992__auto___27117))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__26992__auto___27117){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__26992__auto___27117),args);
});})(g__26992__auto___27117))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__26992__auto___27117){
return (function (seq27048){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27048));
});})(g__26992__auto___27117))
;

var g__27005__auto___27142 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27005__auto___27142){
return (function cljs$spec$impl$gen$any(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27143 = arguments.length;
var i__21325__auto___27144 = (0);
while(true){
if((i__21325__auto___27144 < len__21324__auto___27143)){
args__21331__auto__.push((arguments[i__21325__auto___27144]));

var G__27145 = (i__21325__auto___27144 + (1));
i__21325__auto___27144 = G__27145;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27142))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27142){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27142);
});})(g__27005__auto___27142))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27005__auto___27142){
return (function (seq27121){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27121));
});})(g__27005__auto___27142))
;


var g__27005__auto___27146 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27005__auto___27146){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27147 = arguments.length;
var i__21325__auto___27148 = (0);
while(true){
if((i__21325__auto___27148 < len__21324__auto___27147)){
args__21331__auto__.push((arguments[i__21325__auto___27148]));

var G__27149 = (i__21325__auto___27148 + (1));
i__21325__auto___27148 = G__27149;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27146))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27146){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27146);
});})(g__27005__auto___27146))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27005__auto___27146){
return (function (seq27122){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27122));
});})(g__27005__auto___27146))
;


var g__27005__auto___27150 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27005__auto___27150){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27151 = arguments.length;
var i__21325__auto___27152 = (0);
while(true){
if((i__21325__auto___27152 < len__21324__auto___27151)){
args__21331__auto__.push((arguments[i__21325__auto___27152]));

var G__27153 = (i__21325__auto___27152 + (1));
i__21325__auto___27152 = G__27153;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27150))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27150){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27150);
});})(g__27005__auto___27150))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27005__auto___27150){
return (function (seq27123){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27123));
});})(g__27005__auto___27150))
;


var g__27005__auto___27154 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27005__auto___27154){
return (function cljs$spec$impl$gen$char(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27155 = arguments.length;
var i__21325__auto___27156 = (0);
while(true){
if((i__21325__auto___27156 < len__21324__auto___27155)){
args__21331__auto__.push((arguments[i__21325__auto___27156]));

var G__27157 = (i__21325__auto___27156 + (1));
i__21325__auto___27156 = G__27157;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27154))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27154){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27154);
});})(g__27005__auto___27154))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27005__auto___27154){
return (function (seq27124){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27124));
});})(g__27005__auto___27154))
;


var g__27005__auto___27158 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27005__auto___27158){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27159 = arguments.length;
var i__21325__auto___27160 = (0);
while(true){
if((i__21325__auto___27160 < len__21324__auto___27159)){
args__21331__auto__.push((arguments[i__21325__auto___27160]));

var G__27161 = (i__21325__auto___27160 + (1));
i__21325__auto___27160 = G__27161;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27158))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27158){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27158);
});})(g__27005__auto___27158))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27005__auto___27158){
return (function (seq27125){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27125));
});})(g__27005__auto___27158))
;


var g__27005__auto___27162 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27005__auto___27162){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27163 = arguments.length;
var i__21325__auto___27164 = (0);
while(true){
if((i__21325__auto___27164 < len__21324__auto___27163)){
args__21331__auto__.push((arguments[i__21325__auto___27164]));

var G__27165 = (i__21325__auto___27164 + (1));
i__21325__auto___27164 = G__27165;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27162))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27162){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27162);
});})(g__27005__auto___27162))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27005__auto___27162){
return (function (seq27126){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27126));
});})(g__27005__auto___27162))
;


var g__27005__auto___27166 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27005__auto___27166){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27167 = arguments.length;
var i__21325__auto___27168 = (0);
while(true){
if((i__21325__auto___27168 < len__21324__auto___27167)){
args__21331__auto__.push((arguments[i__21325__auto___27168]));

var G__27169 = (i__21325__auto___27168 + (1));
i__21325__auto___27168 = G__27169;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27166))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27166){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27166);
});})(g__27005__auto___27166))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27005__auto___27166){
return (function (seq27127){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27127));
});})(g__27005__auto___27166))
;


var g__27005__auto___27170 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27005__auto___27170){
return (function cljs$spec$impl$gen$double(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27171 = arguments.length;
var i__21325__auto___27172 = (0);
while(true){
if((i__21325__auto___27172 < len__21324__auto___27171)){
args__21331__auto__.push((arguments[i__21325__auto___27172]));

var G__27173 = (i__21325__auto___27172 + (1));
i__21325__auto___27172 = G__27173;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27170))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27170){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27170);
});})(g__27005__auto___27170))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27005__auto___27170){
return (function (seq27128){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27128));
});})(g__27005__auto___27170))
;


var g__27005__auto___27174 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27005__auto___27174){
return (function cljs$spec$impl$gen$int(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27175 = arguments.length;
var i__21325__auto___27176 = (0);
while(true){
if((i__21325__auto___27176 < len__21324__auto___27175)){
args__21331__auto__.push((arguments[i__21325__auto___27176]));

var G__27177 = (i__21325__auto___27176 + (1));
i__21325__auto___27176 = G__27177;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27174))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27174){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27174);
});})(g__27005__auto___27174))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27005__auto___27174){
return (function (seq27129){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27129));
});})(g__27005__auto___27174))
;


var g__27005__auto___27178 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27005__auto___27178){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27179 = arguments.length;
var i__21325__auto___27180 = (0);
while(true){
if((i__21325__auto___27180 < len__21324__auto___27179)){
args__21331__auto__.push((arguments[i__21325__auto___27180]));

var G__27181 = (i__21325__auto___27180 + (1));
i__21325__auto___27180 = G__27181;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27178))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27178){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27178);
});})(g__27005__auto___27178))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27005__auto___27178){
return (function (seq27130){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27130));
});})(g__27005__auto___27178))
;


var g__27005__auto___27182 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27005__auto___27182){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27183 = arguments.length;
var i__21325__auto___27184 = (0);
while(true){
if((i__21325__auto___27184 < len__21324__auto___27183)){
args__21331__auto__.push((arguments[i__21325__auto___27184]));

var G__27185 = (i__21325__auto___27184 + (1));
i__21325__auto___27184 = G__27185;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27182))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27182){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27182);
});})(g__27005__auto___27182))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27005__auto___27182){
return (function (seq27131){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27131));
});})(g__27005__auto___27182))
;


var g__27005__auto___27186 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27005__auto___27186){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27187 = arguments.length;
var i__21325__auto___27188 = (0);
while(true){
if((i__21325__auto___27188 < len__21324__auto___27187)){
args__21331__auto__.push((arguments[i__21325__auto___27188]));

var G__27189 = (i__21325__auto___27188 + (1));
i__21325__auto___27188 = G__27189;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27186))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27186){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27186);
});})(g__27005__auto___27186))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27005__auto___27186){
return (function (seq27132){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27132));
});})(g__27005__auto___27186))
;


var g__27005__auto___27190 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27005__auto___27190){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27191 = arguments.length;
var i__21325__auto___27192 = (0);
while(true){
if((i__21325__auto___27192 < len__21324__auto___27191)){
args__21331__auto__.push((arguments[i__21325__auto___27192]));

var G__27193 = (i__21325__auto___27192 + (1));
i__21325__auto___27192 = G__27193;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27190))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27190){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27190);
});})(g__27005__auto___27190))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27005__auto___27190){
return (function (seq27133){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27133));
});})(g__27005__auto___27190))
;


var g__27005__auto___27194 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27005__auto___27194){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27195 = arguments.length;
var i__21325__auto___27196 = (0);
while(true){
if((i__21325__auto___27196 < len__21324__auto___27195)){
args__21331__auto__.push((arguments[i__21325__auto___27196]));

var G__27197 = (i__21325__auto___27196 + (1));
i__21325__auto___27196 = G__27197;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27194))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27194){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27194);
});})(g__27005__auto___27194))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27005__auto___27194){
return (function (seq27134){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27134));
});})(g__27005__auto___27194))
;


var g__27005__auto___27198 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27005__auto___27198){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27199 = arguments.length;
var i__21325__auto___27200 = (0);
while(true){
if((i__21325__auto___27200 < len__21324__auto___27199)){
args__21331__auto__.push((arguments[i__21325__auto___27200]));

var G__27201 = (i__21325__auto___27200 + (1));
i__21325__auto___27200 = G__27201;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27198))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27198){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27198);
});})(g__27005__auto___27198))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27005__auto___27198){
return (function (seq27135){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27135));
});})(g__27005__auto___27198))
;


var g__27005__auto___27202 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27005__auto___27202){
return (function cljs$spec$impl$gen$string(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27203 = arguments.length;
var i__21325__auto___27204 = (0);
while(true){
if((i__21325__auto___27204 < len__21324__auto___27203)){
args__21331__auto__.push((arguments[i__21325__auto___27204]));

var G__27205 = (i__21325__auto___27204 + (1));
i__21325__auto___27204 = G__27205;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27202))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27202){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27202);
});})(g__27005__auto___27202))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27005__auto___27202){
return (function (seq27136){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27136));
});})(g__27005__auto___27202))
;


var g__27005__auto___27206 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27005__auto___27206){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27207 = arguments.length;
var i__21325__auto___27208 = (0);
while(true){
if((i__21325__auto___27208 < len__21324__auto___27207)){
args__21331__auto__.push((arguments[i__21325__auto___27208]));

var G__27209 = (i__21325__auto___27208 + (1));
i__21325__auto___27208 = G__27209;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27206))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27206){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27206);
});})(g__27005__auto___27206))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27005__auto___27206){
return (function (seq27137){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27137));
});})(g__27005__auto___27206))
;


var g__27005__auto___27210 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27005__auto___27210){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27211 = arguments.length;
var i__21325__auto___27212 = (0);
while(true){
if((i__21325__auto___27212 < len__21324__auto___27211)){
args__21331__auto__.push((arguments[i__21325__auto___27212]));

var G__27213 = (i__21325__auto___27212 + (1));
i__21325__auto___27212 = G__27213;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27210))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27210){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27210);
});})(g__27005__auto___27210))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27005__auto___27210){
return (function (seq27138){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27138));
});})(g__27005__auto___27210))
;


var g__27005__auto___27214 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27005__auto___27214){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27215 = arguments.length;
var i__21325__auto___27216 = (0);
while(true){
if((i__21325__auto___27216 < len__21324__auto___27215)){
args__21331__auto__.push((arguments[i__21325__auto___27216]));

var G__27217 = (i__21325__auto___27216 + (1));
i__21325__auto___27216 = G__27217;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27214))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27214){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27214);
});})(g__27005__auto___27214))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27005__auto___27214){
return (function (seq27139){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27139));
});})(g__27005__auto___27214))
;


var g__27005__auto___27218 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27005__auto___27218){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27219 = arguments.length;
var i__21325__auto___27220 = (0);
while(true){
if((i__21325__auto___27220 < len__21324__auto___27219)){
args__21331__auto__.push((arguments[i__21325__auto___27220]));

var G__27221 = (i__21325__auto___27220 + (1));
i__21325__auto___27220 = G__27221;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27218))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27218){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27218);
});})(g__27005__auto___27218))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27005__auto___27218){
return (function (seq27140){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27140));
});})(g__27005__auto___27218))
;


var g__27005__auto___27222 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27005__auto___27222){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27223 = arguments.length;
var i__21325__auto___27224 = (0);
while(true){
if((i__21325__auto___27224 < len__21324__auto___27223)){
args__21331__auto__.push((arguments[i__21325__auto___27224]));

var G__27225 = (i__21325__auto___27224 + (1));
i__21325__auto___27224 = G__27225;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});})(g__27005__auto___27222))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27005__auto___27222){
return (function (args){
return cljs.core.deref.call(null,g__27005__auto___27222);
});})(g__27005__auto___27222))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27005__auto___27222){
return (function (seq27141){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27141));
});})(g__27005__auto___27222))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21331__auto__ = [];
var len__21324__auto___27228 = arguments.length;
var i__21325__auto___27229 = (0);
while(true){
if((i__21325__auto___27229 < len__21324__auto___27228)){
args__21331__auto__.push((arguments[i__21325__auto___27229]));

var G__27230 = (i__21325__auto___27229 + (1));
i__21325__auto___27229 = G__27230;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__27226_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__27226_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq27227){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27227));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__27231_SHARP_){
return (new Date(p1__27231_SHARP_));
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