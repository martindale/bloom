// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__9909){
var map__9934 = p__9909;
var map__9934__$1 = ((((!((map__9934 == null)))?((((map__9934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9934):map__9934);
var m = map__9934__$1;
var n = cljs.core.get.call(null,map__9934__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__9934__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__9936_9958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9937_9959 = null;
var count__9938_9960 = (0);
var i__9939_9961 = (0);
while(true){
if((i__9939_9961 < count__9938_9960)){
var f_9962 = cljs.core._nth.call(null,chunk__9937_9959,i__9939_9961);
cljs.core.println.call(null,"  ",f_9962);

var G__9963 = seq__9936_9958;
var G__9964 = chunk__9937_9959;
var G__9965 = count__9938_9960;
var G__9966 = (i__9939_9961 + (1));
seq__9936_9958 = G__9963;
chunk__9937_9959 = G__9964;
count__9938_9960 = G__9965;
i__9939_9961 = G__9966;
continue;
} else {
var temp__4425__auto___9967 = cljs.core.seq.call(null,seq__9936_9958);
if(temp__4425__auto___9967){
var seq__9936_9968__$1 = temp__4425__auto___9967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9936_9968__$1)){
var c__7357__auto___9969 = cljs.core.chunk_first.call(null,seq__9936_9968__$1);
var G__9970 = cljs.core.chunk_rest.call(null,seq__9936_9968__$1);
var G__9971 = c__7357__auto___9969;
var G__9972 = cljs.core.count.call(null,c__7357__auto___9969);
var G__9973 = (0);
seq__9936_9958 = G__9970;
chunk__9937_9959 = G__9971;
count__9938_9960 = G__9972;
i__9939_9961 = G__9973;
continue;
} else {
var f_9974 = cljs.core.first.call(null,seq__9936_9968__$1);
cljs.core.println.call(null,"  ",f_9974);

var G__9975 = cljs.core.next.call(null,seq__9936_9968__$1);
var G__9976 = null;
var G__9977 = (0);
var G__9978 = (0);
seq__9936_9958 = G__9975;
chunk__9937_9959 = G__9976;
count__9938_9960 = G__9977;
i__9939_9961 = G__9978;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9979 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6546__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6546__auto__)){
return or__6546__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9979);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9979)))?cljs.core.second.call(null,arglists_9979):arglists_9979));
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
var seq__9940_9980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9941_9981 = null;
var count__9942_9982 = (0);
var i__9943_9983 = (0);
while(true){
if((i__9943_9983 < count__9942_9982)){
var vec__9944_9984 = cljs.core._nth.call(null,chunk__9941_9981,i__9943_9983);
var name_9985 = cljs.core.nth.call(null,vec__9944_9984,(0),null);
var map__9947_9986 = cljs.core.nth.call(null,vec__9944_9984,(1),null);
var map__9947_9987__$1 = ((((!((map__9947_9986 == null)))?((((map__9947_9986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9947_9986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9947_9986):map__9947_9986);
var doc_9988 = cljs.core.get.call(null,map__9947_9987__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_9989 = cljs.core.get.call(null,map__9947_9987__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_9985);

cljs.core.println.call(null," ",arglists_9989);

if(cljs.core.truth_(doc_9988)){
cljs.core.println.call(null," ",doc_9988);
} else {
}

var G__9990 = seq__9940_9980;
var G__9991 = chunk__9941_9981;
var G__9992 = count__9942_9982;
var G__9993 = (i__9943_9983 + (1));
seq__9940_9980 = G__9990;
chunk__9941_9981 = G__9991;
count__9942_9982 = G__9992;
i__9943_9983 = G__9993;
continue;
} else {
var temp__4425__auto___9994 = cljs.core.seq.call(null,seq__9940_9980);
if(temp__4425__auto___9994){
var seq__9940_9995__$1 = temp__4425__auto___9994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9940_9995__$1)){
var c__7357__auto___9996 = cljs.core.chunk_first.call(null,seq__9940_9995__$1);
var G__9997 = cljs.core.chunk_rest.call(null,seq__9940_9995__$1);
var G__9998 = c__7357__auto___9996;
var G__9999 = cljs.core.count.call(null,c__7357__auto___9996);
var G__10000 = (0);
seq__9940_9980 = G__9997;
chunk__9941_9981 = G__9998;
count__9942_9982 = G__9999;
i__9943_9983 = G__10000;
continue;
} else {
var vec__9949_10001 = cljs.core.first.call(null,seq__9940_9995__$1);
var name_10002 = cljs.core.nth.call(null,vec__9949_10001,(0),null);
var map__9952_10003 = cljs.core.nth.call(null,vec__9949_10001,(1),null);
var map__9952_10004__$1 = ((((!((map__9952_10003 == null)))?((((map__9952_10003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9952_10003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9952_10003):map__9952_10003);
var doc_10005 = cljs.core.get.call(null,map__9952_10004__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10006 = cljs.core.get.call(null,map__9952_10004__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10002);

cljs.core.println.call(null," ",arglists_10006);

if(cljs.core.truth_(doc_10005)){
cljs.core.println.call(null," ",doc_10005);
} else {
}

var G__10007 = cljs.core.next.call(null,seq__9940_9995__$1);
var G__10008 = null;
var G__10009 = (0);
var G__10010 = (0);
seq__9940_9980 = G__10007;
chunk__9941_9981 = G__10008;
count__9942_9982 = G__10009;
i__9943_9983 = G__10010;
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
var temp__4425__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4425__auto__)){
var fnspec = temp__4425__auto__;
cljs.core.print.call(null,"Spec");

var seq__9954 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__9955 = null;
var count__9956 = (0);
var i__9957 = (0);
while(true){
if((i__9957 < count__9956)){
var role = cljs.core._nth.call(null,chunk__9955,i__9957);
var temp__4425__auto___10011__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___10011__$1)){
var spec_10012 = temp__4425__auto___10011__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10012));
} else {
}

var G__10013 = seq__9954;
var G__10014 = chunk__9955;
var G__10015 = count__9956;
var G__10016 = (i__9957 + (1));
seq__9954 = G__10013;
chunk__9955 = G__10014;
count__9956 = G__10015;
i__9957 = G__10016;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__9954);
if(temp__4425__auto____$1){
var seq__9954__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9954__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__9954__$1);
var G__10017 = cljs.core.chunk_rest.call(null,seq__9954__$1);
var G__10018 = c__7357__auto__;
var G__10019 = cljs.core.count.call(null,c__7357__auto__);
var G__10020 = (0);
seq__9954 = G__10017;
chunk__9955 = G__10018;
count__9956 = G__10019;
i__9957 = G__10020;
continue;
} else {
var role = cljs.core.first.call(null,seq__9954__$1);
var temp__4425__auto___10021__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___10021__$2)){
var spec_10022 = temp__4425__auto___10021__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10022));
} else {
}

var G__10023 = cljs.core.next.call(null,seq__9954__$1);
var G__10024 = null;
var G__10025 = (0);
var G__10026 = (0);
seq__9954 = G__10023;
chunk__9955 = G__10024;
count__9956 = G__10025;
i__9957 = G__10026;
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