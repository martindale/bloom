// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11559){
var map__11584 = p__11559;
var map__11584__$1 = ((((!((map__11584 == null)))?((((map__11584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11584):map__11584);
var m = map__11584__$1;
var n = cljs.core.get.call(null,map__11584__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__11584__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__11586_11608 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11587_11609 = null;
var count__11588_11610 = (0);
var i__11589_11611 = (0);
while(true){
if((i__11589_11611 < count__11588_11610)){
var f_11612 = cljs.core._nth.call(null,chunk__11587_11609,i__11589_11611);
cljs.core.println.call(null,"  ",f_11612);

var G__11613 = seq__11586_11608;
var G__11614 = chunk__11587_11609;
var G__11615 = count__11588_11610;
var G__11616 = (i__11589_11611 + (1));
seq__11586_11608 = G__11613;
chunk__11587_11609 = G__11614;
count__11588_11610 = G__11615;
i__11589_11611 = G__11616;
continue;
} else {
var temp__4425__auto___11617 = cljs.core.seq.call(null,seq__11586_11608);
if(temp__4425__auto___11617){
var seq__11586_11618__$1 = temp__4425__auto___11617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11586_11618__$1)){
var c__10202__auto___11619 = cljs.core.chunk_first.call(null,seq__11586_11618__$1);
var G__11620 = cljs.core.chunk_rest.call(null,seq__11586_11618__$1);
var G__11621 = c__10202__auto___11619;
var G__11622 = cljs.core.count.call(null,c__10202__auto___11619);
var G__11623 = (0);
seq__11586_11608 = G__11620;
chunk__11587_11609 = G__11621;
count__11588_11610 = G__11622;
i__11589_11611 = G__11623;
continue;
} else {
var f_11624 = cljs.core.first.call(null,seq__11586_11618__$1);
cljs.core.println.call(null,"  ",f_11624);

var G__11625 = cljs.core.next.call(null,seq__11586_11618__$1);
var G__11626 = null;
var G__11627 = (0);
var G__11628 = (0);
seq__11586_11608 = G__11625;
chunk__11587_11609 = G__11626;
count__11588_11610 = G__11627;
i__11589_11611 = G__11628;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11629 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__9391__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__9391__auto__)){
return or__9391__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11629);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11629)))?cljs.core.second.call(null,arglists_11629):arglists_11629));
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
var seq__11590_11630 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11591_11631 = null;
var count__11592_11632 = (0);
var i__11593_11633 = (0);
while(true){
if((i__11593_11633 < count__11592_11632)){
var vec__11594_11634 = cljs.core._nth.call(null,chunk__11591_11631,i__11593_11633);
var name_11635 = cljs.core.nth.call(null,vec__11594_11634,(0),null);
var map__11597_11636 = cljs.core.nth.call(null,vec__11594_11634,(1),null);
var map__11597_11637__$1 = ((((!((map__11597_11636 == null)))?((((map__11597_11636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11597_11636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11597_11636):map__11597_11636);
var doc_11638 = cljs.core.get.call(null,map__11597_11637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11639 = cljs.core.get.call(null,map__11597_11637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11635);

cljs.core.println.call(null," ",arglists_11639);

if(cljs.core.truth_(doc_11638)){
cljs.core.println.call(null," ",doc_11638);
} else {
}

var G__11640 = seq__11590_11630;
var G__11641 = chunk__11591_11631;
var G__11642 = count__11592_11632;
var G__11643 = (i__11593_11633 + (1));
seq__11590_11630 = G__11640;
chunk__11591_11631 = G__11641;
count__11592_11632 = G__11642;
i__11593_11633 = G__11643;
continue;
} else {
var temp__4425__auto___11644 = cljs.core.seq.call(null,seq__11590_11630);
if(temp__4425__auto___11644){
var seq__11590_11645__$1 = temp__4425__auto___11644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11590_11645__$1)){
var c__10202__auto___11646 = cljs.core.chunk_first.call(null,seq__11590_11645__$1);
var G__11647 = cljs.core.chunk_rest.call(null,seq__11590_11645__$1);
var G__11648 = c__10202__auto___11646;
var G__11649 = cljs.core.count.call(null,c__10202__auto___11646);
var G__11650 = (0);
seq__11590_11630 = G__11647;
chunk__11591_11631 = G__11648;
count__11592_11632 = G__11649;
i__11593_11633 = G__11650;
continue;
} else {
var vec__11599_11651 = cljs.core.first.call(null,seq__11590_11645__$1);
var name_11652 = cljs.core.nth.call(null,vec__11599_11651,(0),null);
var map__11602_11653 = cljs.core.nth.call(null,vec__11599_11651,(1),null);
var map__11602_11654__$1 = ((((!((map__11602_11653 == null)))?((((map__11602_11653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11602_11653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11602_11653):map__11602_11653);
var doc_11655 = cljs.core.get.call(null,map__11602_11654__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_11656 = cljs.core.get.call(null,map__11602_11654__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_11652);

cljs.core.println.call(null," ",arglists_11656);

if(cljs.core.truth_(doc_11655)){
cljs.core.println.call(null," ",doc_11655);
} else {
}

var G__11657 = cljs.core.next.call(null,seq__11590_11645__$1);
var G__11658 = null;
var G__11659 = (0);
var G__11660 = (0);
seq__11590_11630 = G__11657;
chunk__11591_11631 = G__11658;
count__11592_11632 = G__11659;
i__11593_11633 = G__11660;
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

var seq__11604 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__11605 = null;
var count__11606 = (0);
var i__11607 = (0);
while(true){
if((i__11607 < count__11606)){
var role = cljs.core._nth.call(null,chunk__11605,i__11607);
var temp__4425__auto___11661__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___11661__$1)){
var spec_11662 = temp__4425__auto___11661__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11662));
} else {
}

var G__11663 = seq__11604;
var G__11664 = chunk__11605;
var G__11665 = count__11606;
var G__11666 = (i__11607 + (1));
seq__11604 = G__11663;
chunk__11605 = G__11664;
count__11606 = G__11665;
i__11607 = G__11666;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__11604);
if(temp__4425__auto____$1){
var seq__11604__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11604__$1)){
var c__10202__auto__ = cljs.core.chunk_first.call(null,seq__11604__$1);
var G__11667 = cljs.core.chunk_rest.call(null,seq__11604__$1);
var G__11668 = c__10202__auto__;
var G__11669 = cljs.core.count.call(null,c__10202__auto__);
var G__11670 = (0);
seq__11604 = G__11667;
chunk__11605 = G__11668;
count__11606 = G__11669;
i__11607 = G__11670;
continue;
} else {
var role = cljs.core.first.call(null,seq__11604__$1);
var temp__4425__auto___11671__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___11671__$2)){
var spec_11672 = temp__4425__auto___11671__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_11672));
} else {
}

var G__11673 = cljs.core.next.call(null,seq__11604__$1);
var G__11674 = null;
var G__11675 = (0);
var G__11676 = (0);
seq__11604 = G__11673;
chunk__11605 = G__11674;
count__11606 = G__11675;
i__11607 = G__11676;
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