// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28290){
var map__28315 = p__28290;
var map__28315__$1 = ((((!((map__28315 == null)))?((((map__28315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28315):map__28315);
var m = map__28315__$1;
var n = cljs.core.get.call(null,map__28315__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28315__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6728__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6728__auto__)){
var ns = temp__6728__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28317_28339 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28318_28340 = null;
var count__28319_28341 = (0);
var i__28320_28342 = (0);
while(true){
if((i__28320_28342 < count__28319_28341)){
var f_28343 = cljs.core._nth.call(null,chunk__28318_28340,i__28320_28342);
cljs.core.println.call(null,"  ",f_28343);

var G__28344 = seq__28317_28339;
var G__28345 = chunk__28318_28340;
var G__28346 = count__28319_28341;
var G__28347 = (i__28320_28342 + (1));
seq__28317_28339 = G__28344;
chunk__28318_28340 = G__28345;
count__28319_28341 = G__28346;
i__28320_28342 = G__28347;
continue;
} else {
var temp__6728__auto___28348 = cljs.core.seq.call(null,seq__28317_28339);
if(temp__6728__auto___28348){
var seq__28317_28349__$1 = temp__6728__auto___28348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28317_28349__$1)){
var c__21044__auto___28350 = cljs.core.chunk_first.call(null,seq__28317_28349__$1);
var G__28351 = cljs.core.chunk_rest.call(null,seq__28317_28349__$1);
var G__28352 = c__21044__auto___28350;
var G__28353 = cljs.core.count.call(null,c__21044__auto___28350);
var G__28354 = (0);
seq__28317_28339 = G__28351;
chunk__28318_28340 = G__28352;
count__28319_28341 = G__28353;
i__28320_28342 = G__28354;
continue;
} else {
var f_28355 = cljs.core.first.call(null,seq__28317_28349__$1);
cljs.core.println.call(null,"  ",f_28355);

var G__28356 = cljs.core.next.call(null,seq__28317_28349__$1);
var G__28357 = null;
var G__28358 = (0);
var G__28359 = (0);
seq__28317_28339 = G__28356;
chunk__28318_28340 = G__28357;
count__28319_28341 = G__28358;
i__28320_28342 = G__28359;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28360 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20141__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28360);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28360)))?cljs.core.second.call(null,arglists_28360):arglists_28360));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28321_28361 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28322_28362 = null;
var count__28323_28363 = (0);
var i__28324_28364 = (0);
while(true){
if((i__28324_28364 < count__28323_28363)){
var vec__28325_28365 = cljs.core._nth.call(null,chunk__28322_28362,i__28324_28364);
var name_28366 = cljs.core.nth.call(null,vec__28325_28365,(0),null);
var map__28328_28367 = cljs.core.nth.call(null,vec__28325_28365,(1),null);
var map__28328_28368__$1 = ((((!((map__28328_28367 == null)))?((((map__28328_28367.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28328_28367.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28328_28367):map__28328_28367);
var doc_28369 = cljs.core.get.call(null,map__28328_28368__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28370 = cljs.core.get.call(null,map__28328_28368__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28366);

cljs.core.println.call(null," ",arglists_28370);

if(cljs.core.truth_(doc_28369)){
cljs.core.println.call(null," ",doc_28369);
} else {
}

var G__28371 = seq__28321_28361;
var G__28372 = chunk__28322_28362;
var G__28373 = count__28323_28363;
var G__28374 = (i__28324_28364 + (1));
seq__28321_28361 = G__28371;
chunk__28322_28362 = G__28372;
count__28323_28363 = G__28373;
i__28324_28364 = G__28374;
continue;
} else {
var temp__6728__auto___28375 = cljs.core.seq.call(null,seq__28321_28361);
if(temp__6728__auto___28375){
var seq__28321_28376__$1 = temp__6728__auto___28375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28321_28376__$1)){
var c__21044__auto___28377 = cljs.core.chunk_first.call(null,seq__28321_28376__$1);
var G__28378 = cljs.core.chunk_rest.call(null,seq__28321_28376__$1);
var G__28379 = c__21044__auto___28377;
var G__28380 = cljs.core.count.call(null,c__21044__auto___28377);
var G__28381 = (0);
seq__28321_28361 = G__28378;
chunk__28322_28362 = G__28379;
count__28323_28363 = G__28380;
i__28324_28364 = G__28381;
continue;
} else {
var vec__28330_28382 = cljs.core.first.call(null,seq__28321_28376__$1);
var name_28383 = cljs.core.nth.call(null,vec__28330_28382,(0),null);
var map__28333_28384 = cljs.core.nth.call(null,vec__28330_28382,(1),null);
var map__28333_28385__$1 = ((((!((map__28333_28384 == null)))?((((map__28333_28384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28333_28384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28333_28384):map__28333_28384);
var doc_28386 = cljs.core.get.call(null,map__28333_28385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28387 = cljs.core.get.call(null,map__28333_28385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28383);

cljs.core.println.call(null," ",arglists_28387);

if(cljs.core.truth_(doc_28386)){
cljs.core.println.call(null," ",doc_28386);
} else {
}

var G__28388 = cljs.core.next.call(null,seq__28321_28376__$1);
var G__28389 = null;
var G__28390 = (0);
var G__28391 = (0);
seq__28321_28361 = G__28388;
chunk__28322_28362 = G__28389;
count__28323_28363 = G__28390;
i__28324_28364 = G__28391;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6728__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6728__auto__)){
var fnspec = temp__6728__auto__;
cljs.core.print.call(null,"Spec");

var seq__28335 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28336 = null;
var count__28337 = (0);
var i__28338 = (0);
while(true){
if((i__28338 < count__28337)){
var role = cljs.core._nth.call(null,chunk__28336,i__28338);
var temp__6728__auto___28392__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___28392__$1)){
var spec_28393 = temp__6728__auto___28392__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28393));
} else {
}

var G__28394 = seq__28335;
var G__28395 = chunk__28336;
var G__28396 = count__28337;
var G__28397 = (i__28338 + (1));
seq__28335 = G__28394;
chunk__28336 = G__28395;
count__28337 = G__28396;
i__28338 = G__28397;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__28335);
if(temp__6728__auto____$1){
var seq__28335__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28335__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__28335__$1);
var G__28398 = cljs.core.chunk_rest.call(null,seq__28335__$1);
var G__28399 = c__21044__auto__;
var G__28400 = cljs.core.count.call(null,c__21044__auto__);
var G__28401 = (0);
seq__28335 = G__28398;
chunk__28336 = G__28399;
count__28337 = G__28400;
i__28338 = G__28401;
continue;
} else {
var role = cljs.core.first.call(null,seq__28335__$1);
var temp__6728__auto___28402__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___28402__$2)){
var spec_28403 = temp__6728__auto___28402__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28403));
} else {
}

var G__28404 = cljs.core.next.call(null,seq__28335__$1);
var G__28405 = null;
var G__28406 = (0);
var G__28407 = (0);
seq__28335 = G__28404;
chunk__28336 = G__28405;
count__28337 = G__28406;
i__28338 = G__28407;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map