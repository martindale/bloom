// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28289){
var map__28314 = p__28289;
var map__28314__$1 = ((((!((map__28314 == null)))?((((map__28314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28314):map__28314);
var m = map__28314__$1;
var n = cljs.core.get.call(null,map__28314__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28314__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28316_28338 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28317_28339 = null;
var count__28318_28340 = (0);
var i__28319_28341 = (0);
while(true){
if((i__28319_28341 < count__28318_28340)){
var f_28342 = cljs.core._nth.call(null,chunk__28317_28339,i__28319_28341);
cljs.core.println.call(null,"  ",f_28342);

var G__28343 = seq__28316_28338;
var G__28344 = chunk__28317_28339;
var G__28345 = count__28318_28340;
var G__28346 = (i__28319_28341 + (1));
seq__28316_28338 = G__28343;
chunk__28317_28339 = G__28344;
count__28318_28340 = G__28345;
i__28319_28341 = G__28346;
continue;
} else {
var temp__6728__auto___28347 = cljs.core.seq.call(null,seq__28316_28338);
if(temp__6728__auto___28347){
var seq__28316_28348__$1 = temp__6728__auto___28347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28316_28348__$1)){
var c__21044__auto___28349 = cljs.core.chunk_first.call(null,seq__28316_28348__$1);
var G__28350 = cljs.core.chunk_rest.call(null,seq__28316_28348__$1);
var G__28351 = c__21044__auto___28349;
var G__28352 = cljs.core.count.call(null,c__21044__auto___28349);
var G__28353 = (0);
seq__28316_28338 = G__28350;
chunk__28317_28339 = G__28351;
count__28318_28340 = G__28352;
i__28319_28341 = G__28353;
continue;
} else {
var f_28354 = cljs.core.first.call(null,seq__28316_28348__$1);
cljs.core.println.call(null,"  ",f_28354);

var G__28355 = cljs.core.next.call(null,seq__28316_28348__$1);
var G__28356 = null;
var G__28357 = (0);
var G__28358 = (0);
seq__28316_28338 = G__28355;
chunk__28317_28339 = G__28356;
count__28318_28340 = G__28357;
i__28319_28341 = G__28358;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28359 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20141__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28359);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28359)))?cljs.core.second.call(null,arglists_28359):arglists_28359));
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
var seq__28320_28360 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28321_28361 = null;
var count__28322_28362 = (0);
var i__28323_28363 = (0);
while(true){
if((i__28323_28363 < count__28322_28362)){
var vec__28324_28364 = cljs.core._nth.call(null,chunk__28321_28361,i__28323_28363);
var name_28365 = cljs.core.nth.call(null,vec__28324_28364,(0),null);
var map__28327_28366 = cljs.core.nth.call(null,vec__28324_28364,(1),null);
var map__28327_28367__$1 = ((((!((map__28327_28366 == null)))?((((map__28327_28366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28327_28366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28327_28366):map__28327_28366);
var doc_28368 = cljs.core.get.call(null,map__28327_28367__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28369 = cljs.core.get.call(null,map__28327_28367__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28365);

cljs.core.println.call(null," ",arglists_28369);

if(cljs.core.truth_(doc_28368)){
cljs.core.println.call(null," ",doc_28368);
} else {
}

var G__28370 = seq__28320_28360;
var G__28371 = chunk__28321_28361;
var G__28372 = count__28322_28362;
var G__28373 = (i__28323_28363 + (1));
seq__28320_28360 = G__28370;
chunk__28321_28361 = G__28371;
count__28322_28362 = G__28372;
i__28323_28363 = G__28373;
continue;
} else {
var temp__6728__auto___28374 = cljs.core.seq.call(null,seq__28320_28360);
if(temp__6728__auto___28374){
var seq__28320_28375__$1 = temp__6728__auto___28374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28320_28375__$1)){
var c__21044__auto___28376 = cljs.core.chunk_first.call(null,seq__28320_28375__$1);
var G__28377 = cljs.core.chunk_rest.call(null,seq__28320_28375__$1);
var G__28378 = c__21044__auto___28376;
var G__28379 = cljs.core.count.call(null,c__21044__auto___28376);
var G__28380 = (0);
seq__28320_28360 = G__28377;
chunk__28321_28361 = G__28378;
count__28322_28362 = G__28379;
i__28323_28363 = G__28380;
continue;
} else {
var vec__28329_28381 = cljs.core.first.call(null,seq__28320_28375__$1);
var name_28382 = cljs.core.nth.call(null,vec__28329_28381,(0),null);
var map__28332_28383 = cljs.core.nth.call(null,vec__28329_28381,(1),null);
var map__28332_28384__$1 = ((((!((map__28332_28383 == null)))?((((map__28332_28383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28332_28383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28332_28383):map__28332_28383);
var doc_28385 = cljs.core.get.call(null,map__28332_28384__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28386 = cljs.core.get.call(null,map__28332_28384__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28382);

cljs.core.println.call(null," ",arglists_28386);

if(cljs.core.truth_(doc_28385)){
cljs.core.println.call(null," ",doc_28385);
} else {
}

var G__28387 = cljs.core.next.call(null,seq__28320_28375__$1);
var G__28388 = null;
var G__28389 = (0);
var G__28390 = (0);
seq__28320_28360 = G__28387;
chunk__28321_28361 = G__28388;
count__28322_28362 = G__28389;
i__28323_28363 = G__28390;
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

var seq__28334 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28335 = null;
var count__28336 = (0);
var i__28337 = (0);
while(true){
if((i__28337 < count__28336)){
var role = cljs.core._nth.call(null,chunk__28335,i__28337);
var temp__6728__auto___28391__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___28391__$1)){
var spec_28392 = temp__6728__auto___28391__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28392));
} else {
}

var G__28393 = seq__28334;
var G__28394 = chunk__28335;
var G__28395 = count__28336;
var G__28396 = (i__28337 + (1));
seq__28334 = G__28393;
chunk__28335 = G__28394;
count__28336 = G__28395;
i__28337 = G__28396;
continue;
} else {
var temp__6728__auto____$1 = cljs.core.seq.call(null,seq__28334);
if(temp__6728__auto____$1){
var seq__28334__$1 = temp__6728__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28334__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__28334__$1);
var G__28397 = cljs.core.chunk_rest.call(null,seq__28334__$1);
var G__28398 = c__21044__auto__;
var G__28399 = cljs.core.count.call(null,c__21044__auto__);
var G__28400 = (0);
seq__28334 = G__28397;
chunk__28335 = G__28398;
count__28336 = G__28399;
i__28337 = G__28400;
continue;
} else {
var role = cljs.core.first.call(null,seq__28334__$1);
var temp__6728__auto___28401__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6728__auto___28401__$2)){
var spec_28402 = temp__6728__auto___28401__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_28402));
} else {
}

var G__28403 = cljs.core.next.call(null,seq__28334__$1);
var G__28404 = null;
var G__28405 = (0);
var G__28406 = (0);
seq__28334 = G__28403;
chunk__28335 = G__28404;
count__28336 = G__28405;
i__28337 = G__28406;
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