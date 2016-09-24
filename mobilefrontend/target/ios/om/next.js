// Compiled by ClojureScript 1.9.229 {}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('cljs.analyzer.api');
goog.require('cljs.analyzer');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('clojure.string');
goog.require('goog.debug.Console');
om.next.collect_statics = (function om$next$collect_statics(dt){
var split_on_static = (function om$next$collect_statics_$_split_on_static(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"static","static",-1440077198,null),null], null), null)),forms);
});
var split_on_symbol = (function om$next$collect_statics_$_split_on_symbol(forms){
return cljs.core.split_with.call(null,cljs.core.complement.call(null,cljs.core.symbol_QMARK_),forms);
});
var dt__$1 = cljs.core.seq.call(null,dt);
var dt_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
var statics = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fields","fields",-1932066230),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"protocols","protocols",-5615896),cljs.core.PersistentVector.EMPTY], null);
while(true){
if(dt__$1){
var vec__33473 = split_on_static.call(null,dt__$1);
var pre = cljs.core.nth.call(null,vec__33473,(0),null);
var vec__33476 = cljs.core.nth.call(null,vec__33473,(1),null);
var seq__33477 = cljs.core.seq.call(null,vec__33476);
var first__33478 = cljs.core.first.call(null,seq__33477);
var seq__33477__$1 = cljs.core.next.call(null,seq__33477);
var _ = first__33478;
var first__33478__$1 = cljs.core.first.call(null,seq__33477__$1);
var seq__33477__$2 = cljs.core.next.call(null,seq__33477__$1);
var sym = first__33478__$1;
var remaining = seq__33477__$2;
var post = vec__33476;
var dt_SINGLEQUOTE___$1 = cljs.core.into.call(null,dt_SINGLEQUOTE_,pre);
if(cljs.core.seq.call(null,post)){
if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"field","field",338095027,null))){
var vec__33479 = cljs.core.split_at.call(null,(2),remaining);
var field_info = cljs.core.nth.call(null,vec__33479,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__33479,(1),null);
var G__33485 = cljs.core.seq.call(null,dt__$2);
var G__33486 = dt_SINGLEQUOTE___$1;
var G__33487 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields","fields",-1932066230)], null),cljs.core.conj,cljs.core.vec.call(null,field_info));
dt__$1 = G__33485;
dt_SINGLEQUOTE_ = G__33486;
statics = G__33487;
continue;
} else {
if((sym instanceof cljs.core.Symbol)){
var vec__33482 = split_on_symbol.call(null,remaining);
var protocol_info = cljs.core.nth.call(null,vec__33482,(0),null);
var dt__$2 = cljs.core.nth.call(null,vec__33482,(1),null);
var G__33488 = cljs.core.seq.call(null,dt__$2);
var G__33489 = dt_SINGLEQUOTE___$1;
var G__33490 = cljs.core.update_in.call(null,statics,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols","protocols",-5615896)], null),cljs.core.into,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null),protocol_info));
dt__$1 = G__33488;
dt_SINGLEQUOTE_ = G__33489;
statics = G__33490;
continue;
} else {
throw (new Error("Malformed static"));

}
}
} else {
var G__33491 = null;
var G__33492 = dt_SINGLEQUOTE___$1;
var G__33493 = statics;
dt__$1 = G__33491;
dt_SINGLEQUOTE_ = G__33492;
statics = G__33493;
continue;
}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dt","dt",-368444759),dt_SINGLEQUOTE_,new cljs.core.Keyword(null,"statics","statics",-1984882809),statics], null);
}
break;
}
});
om.next.validate_statics = (function om$next$validate_statics(dt){
var temp__6728__auto__ = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["IQueryParams",null,"IQuery",null,"Ident",null], null), null),cljs.core.map.call(null,(function (p1__33494_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,[cljs.core.str(p1__33494_SHARP_)].join(''),/\//));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,dt)));
if(cljs.core.truth_(temp__6728__auto__)){
var invalid = temp__6728__auto__;
throw (new Error([cljs.core.str(invalid),cljs.core.str(" protocol declaration must appear with `static`.")].join('')));
} else {
return null;
}
});
om.next.lifecycle_sigs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null),new cljs.core.Symbol(null,"render","render",232498073,null),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),new cljs.core.Symbol(null,"componentDidMount","componentDidMount",-1698724833,null)],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"prev-props","prev-props",1081981230,null),new cljs.core.Symbol(null,"prev-state","prev-state",1365252518,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"next-props","next-props",-266324026,null),new cljs.core.Symbol(null,"next-state","next-state",211803275,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"this","this",1028897902,null)], null)]);
om.next.validate_sig = (function om$next$validate_sig(p__33495){
var vec__33499 = p__33495;
var name = cljs.core.nth.call(null,vec__33499,(0),null);
var sig = cljs.core.nth.call(null,vec__33499,(1),null);
var method = vec__33499;
var sig_SINGLEQUOTE_ = cljs.core.get.call(null,om.next.lifecycle_sigs,name);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,sig_SINGLEQUOTE_),cljs.core.count.call(null,sig))){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid signature for "),cljs.core.str(name),cljs.core.str(" got "),cljs.core.str(sig),cljs.core.str(", need "),cljs.core.str(sig_SINGLEQUOTE_)].join('')),cljs.core.str("\n"),cljs.core.str("(= (count sig') (count sig))")].join('')));
}
});
om.next.reshape_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reshape","reshape",1588089910),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"initLocalState","initLocalState",1594027651,null),(function (p__33545){
var vec__33546 = p__33545;
var seq__33547 = cljs.core.seq.call(null,vec__33546);
var first__33548 = cljs.core.first.call(null,seq__33547);
var seq__33547__$1 = cljs.core.next.call(null,seq__33547);
var name = first__33548;
var first__33548__$1 = cljs.core.first.call(null,seq__33547__$1);
var seq__33547__$2 = cljs.core.next.call(null,seq__33547__$1);
var vec__33549 = first__33548__$1;
var this$ = cljs.core.nth.call(null,vec__33549,(0),null);
var args = vec__33549;
var body = seq__33547__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33509__auto__","ret__33509__auto__",1487364326,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33509__auto__","ret__33509__auto__",1487364326,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillReceiveProps","componentWillReceiveProps",-2094446795,null),(function (p__33552){
var vec__33553 = p__33552;
var seq__33554 = cljs.core.seq.call(null,vec__33553);
var first__33555 = cljs.core.first.call(null,seq__33554);
var seq__33554__$1 = cljs.core.next.call(null,seq__33554);
var name = first__33555;
var first__33555__$1 = cljs.core.first.call(null,seq__33554__$1);
var seq__33554__$2 = cljs.core.next.call(null,seq__33554__$1);
var vec__33556 = first__33555__$1;
var this$ = cljs.core.nth.call(null,vec__33556,(0),null);
var next_props = cljs.core.nth.call(null,vec__33556,(1),null);
var args = vec__33556;
var body = seq__33554__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33510__auto__","this__33510__auto__",193697262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33511__auto__","next-props__33511__auto__",707304323,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33510__auto__","this__33510__auto__",193697262,null)),(function (){var x__21067__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33511__auto__","next-props__33511__auto__",707304323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33510__auto__","this__33510__auto__",193697262,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null),(function (p__33559){
var vec__33560 = p__33559;
var seq__33561 = cljs.core.seq.call(null,vec__33560);
var first__33562 = cljs.core.first.call(null,seq__33561);
var seq__33561__$1 = cljs.core.next.call(null,seq__33561);
var name = first__33562;
var first__33562__$1 = cljs.core.first.call(null,seq__33561__$1);
var seq__33561__$2 = cljs.core.next.call(null,seq__33561__$1);
var vec__33563 = first__33562__$1;
var this$ = cljs.core.nth.call(null,vec__33563,(0),null);
var next_props = cljs.core.nth.call(null,vec__33563,(1),null);
var next_state = cljs.core.nth.call(null,vec__33563,(2),null);
var args = vec__33563;
var body = seq__33561__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33513__auto__","next-props__33513__auto__",-1378749226,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__33514__auto__","next-state__33514__auto__",1598049279,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)),(function (){var x__21067__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33513__auto__","next-props__33513__auto__",-1378749226,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = next_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__33514__auto__","next-state__33514__auto__",1598049279,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$pendingState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__33514__auto__","next-state__33514__auto__",1598049279,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33515__auto__","ret__33515__auto__",683842341,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__33516__auto__","ident__33516__auto__",-1165415821,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__33517__auto__","next-ident__33517__auto__",-697003808,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)),(function (){var x__21067__auto__ = next_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__33516__auto__","ident__33516__auto__",-1165415821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__33517__auto__","next-ident__33517__auto__",-697003808,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__33518__auto__","idxr__33518__auto__",2081214175,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__33518__auto__","idxr__33518__auto__",2081214175,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__33518__auto__","idxr__33518__auto__",2081214175,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__33519__auto__","indexes__33519__auto__",126837706,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__33519__auto__","indexes__33519__auto__",126837706,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__33516__auto__","ident__33516__auto__",-1165415821,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__33517__auto__","next-ident__33517__auto__",-697003808,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__21067__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33512__auto__","this__33512__auto__",459266696,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__33515__auto__","ret__33515__auto__",683842341,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
}),new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null),(function (p__33566){
var vec__33567 = p__33566;
var seq__33568 = cljs.core.seq.call(null,vec__33567);
var first__33569 = cljs.core.first.call(null,seq__33568);
var seq__33568__$1 = cljs.core.next.call(null,seq__33568);
var name = first__33569;
var first__33569__$1 = cljs.core.first.call(null,seq__33568__$1);
var seq__33568__$2 = cljs.core.next.call(null,seq__33568__$1);
var vec__33570 = first__33569__$1;
var this$ = cljs.core.nth.call(null,vec__33570,(0),null);
var prev_props = cljs.core.nth.call(null,vec__33570,(1),null);
var prev_state = cljs.core.nth.call(null,vec__33570,(2),null);
var args = vec__33570;
var body = seq__33568__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33520__auto__","this__33520__auto__",-1616401745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__33521__auto__","prev-props__33521__auto__",-726963607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__33522__auto__","prev-state__33522__auto__",-994609889,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33520__auto__","this__33520__auto__",-1616401745,null)),(function (){var x__21067__auto__ = prev_props;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prev-props","om.next/-prev-props",-1189686117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__33521__auto__","prev-props__33521__auto__",-726963607,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33520__auto__","this__33520__auto__",-1616401745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = prev_state;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__33522__auto__","prev-state__33522__auto__",-994609889,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$previousState"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),body,(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33520__auto__","this__33520__auto__",-1616401745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null),(function (p__33573){
var vec__33574 = p__33573;
var seq__33575 = cljs.core.seq.call(null,vec__33574);
var first__33576 = cljs.core.first.call(null,seq__33575);
var seq__33575__$1 = cljs.core.next.call(null,seq__33575);
var name = first__33576;
var first__33576__$1 = cljs.core.first.call(null,seq__33575__$1);
var seq__33575__$2 = cljs.core.next.call(null,seq__33575__$1);
var vec__33577 = first__33576__$1;
var this$ = cljs.core.nth.call(null,vec__33577,(0),null);
var args = vec__33577;
var body = seq__33575__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33523__auto__","this__33523__auto__",1603389680,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33523__auto__","this__33523__auto__",1603389680,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33524__auto__","indexer__33524__auto__",-686350212,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33523__auto__","this__33523__auto__",1603389680,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33524__auto__","indexer__33524__auto__",-686350212,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33524__auto__","indexer__33524__auto__",-686350212,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33523__auto__","this__33523__auto__",1603389680,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
}),new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null),(function (p__33580){
var vec__33581 = p__33580;
var seq__33582 = cljs.core.seq.call(null,vec__33581);
var first__33583 = cljs.core.first.call(null,seq__33582);
var seq__33582__$1 = cljs.core.next.call(null,seq__33582);
var name = first__33583;
var first__33583__$1 = cljs.core.first.call(null,seq__33582__$1);
var seq__33582__$2 = cljs.core.next.call(null,seq__33582__$1);
var vec__33584 = first__33583__$1;
var this$ = cljs.core.nth.call(null,vec__33584,(0),null);
var args = vec__33584;
var body = seq__33582__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33525__auto__","this__33525__auto__",-1130934167,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33525__auto__","this__33525__auto__",-1130934167,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__33526__auto__","r__33526__auto__",-110745608,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33525__auto__","this__33525__auto__",-1130934167,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__33527__auto__","cfg__33527__auto__",-214145756,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__33526__auto__","r__33526__auto__",-110745608,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33528__auto__","st__33528__auto__",-331064783,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__33527__auto__","cfg__33527__auto__",-214145756,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33529__auto__","indexer__33529__auto__",-214011290,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__33527__auto__","cfg__33527__auto__",-214145756,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33528__auto__","st__33528__auto__",-331064783,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33528__auto__","st__33528__auto__",-331064783,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33525__auto__","this__33525__auto__",-1130934167,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33528__auto__","st__33528__auto__",-331064783,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33525__auto__","this__33525__auto__",-1130934167,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33529__auto__","indexer__33529__auto__",-214011290,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33529__auto__","indexer__33529__auto__",-214011290,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33525__auto__","this__33525__auto__",-1130934167,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
}),new cljs.core.Symbol(null,"render","render",232498073,null),(function (p__33587){
var vec__33588 = p__33587;
var seq__33589 = cljs.core.seq.call(null,vec__33588);
var first__33590 = cljs.core.first.call(null,seq__33589);
var seq__33589__$1 = cljs.core.next.call(null,seq__33589);
var name = first__33590;
var first__33590__$1 = cljs.core.first.call(null,seq__33589__$1);
var seq__33589__$2 = cljs.core.next.call(null,seq__33589__$1);
var vec__33591 = first__33590__$1;
var this$ = cljs.core.nth.call(null,vec__33591,(0),null);
var args = vec__33591;
var body = seq__33589__$2;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33530__auto__","this__33530__auto__",-613436218,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33530__auto__","this__33530__auto__",-613436218,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*reconciler*","om.next/*reconciler*",2063201960,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33530__auto__","this__33530__auto__",-613436218,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*depth*","om.next/*depth*",161261240,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","depth","om.next/depth",-1750843006,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33530__auto__","this__33530__auto__",-613436218,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*shared*","om.next/*shared*",-270307055,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","shared","om.next/shared",426941171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33530__auto__","this__33530__auto__",-613436218,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*instrument*","om.next/*instrument*",-1428199886,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","instrument","om.next/instrument",1410710376,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33530__auto__","this__33530__auto__",-613436218,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*parent*","om.next/*parent*",-764653121,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33530__auto__","this__33530__auto__",-613436218,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
})], null),new cljs.core.Keyword(null,"defaults","defaults",976027214),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"isMounted","isMounted",-1263254906,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","boolean","cljs.core/boolean",-1222483266,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","getValueByKeys","goog.object/getValueByKeys",-1135358948,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_reactInternalInstance"),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_renderedComponent"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"shouldComponentUpdate","shouldComponentUpdate",-858684809,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__33533__auto__","next-state__33533__auto__",-1536899988,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__33534__auto__","next-children__33534__auto__",-55651948,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$value"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","OmProps","om.next/OmProps",-1258962915,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","unwrap","om.next/unwrap",-621667282,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-state","-state",1439972041,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","get","goog.object/get",-1684509985,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__33533__auto__","next-state__33533__auto__",-1536899988,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"omcljs$state"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-props","om.next/-props",1063294959,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-children","om.next/-children",-16965396,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-children__33534__auto__","next-children__33534__auto__",-55651948,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUpdate","componentWillUpdate",-1997044837,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-state__33533__auto__","next-state__33533__auto__",-1536899988,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","Ident","om.next/Ident",-1165621946,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__33535__auto__","ident__33535__auto__",-784538301,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","props","om.next/props",679329025,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__33536__auto__","next-ident__33536__auto__",134399402,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","ident","om.next/ident",-1255218310,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-next-props","om.next/-next-props",1700067080,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-props__33532__auto__","next-props__33532__auto__",-685157297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__33535__auto__","ident__33535__auto__",-784538301,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__33536__auto__","next-ident__33536__auto__",134399402,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__33537__auto__","idxr__33537__auto__",677723299,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__33537__auto__","idxr__33537__auto__",677723299,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexes","indexes",1496475545)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"idxr__33537__auto__","idxr__33537__auto__",677723299,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__33538__auto__","indexes__33538__auto__",-1788912975,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexes__33538__auto__","indexes__33538__auto__",-1788912975,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ident__33535__auto__","ident__33535__auto__",-784538301,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","disj","cljs.core/disj",1679005177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"next-ident__33536__auto__","next-ident__33536__auto__",134399402,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fnil","cljs.core/fnil",479587341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null)),(function (){var x__21067__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-props!","om.next/merge-pending-props!",-1035300673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","merge-pending-state!","om.next/merge-pending-state!",1487578810,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentDidUpdate","componentDidUpdate",-342946454,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-props__33539__auto__","prev-props__33539__auto__",251051858,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prev-state__33540__auto__","prev-state__33540__auto__",-1433115099,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","clear-prev-props!","om.next/clear-prev-props!",1240655595,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillMount","componentWillMount",1355203908,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33541__auto__","indexer__33541__auto__",1292756545,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33541__auto__","indexer__33541__auto__",1292756545,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","index-component!","om.next.protocols/index-component!",-1047911549,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33541__auto__","indexer__33541__auto__",1292756545,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"componentWillUnmount","componentWillUnmount",-1080646955,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__33542__auto__","r__33542__auto__",1614073383,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","get-reconciler","om.next/get-reconciler",1605739065,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__33543__auto__","cfg__33543__auto__",1712742562,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"config","config",994861415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"r__33542__auto__","r__33542__auto__",1614073383,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33544__auto__","st__33544__auto__",1340866623,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__33543__auto__","cfg__33543__auto__",1712742562,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33541__auto__","indexer__33541__auto__",1292756545,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"indexer","indexer",-1774914315)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cfg__33543__auto__","cfg__33543__auto__",1712742562,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33544__auto__","st__33544__auto__",1340866623,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-in","cljs.core/get-in",-1307311504,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33544__auto__","st__33544__auto__",1340866623,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","swap!","cljs.core/swap!",-2144679919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"st__33544__auto__","st__33544__auto__",1340866623,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","update-in","cljs.core/update-in",-2120854498,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33541__auto__","indexer__33541__auto__",1292756545,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next.protocols","drop-component!","om.next.protocols/drop-component!",1227662523,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"indexer__33541__auto__","indexer__33541__auto__",1292756545,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33531__auto__","this__33531__auto__",84307745,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))))], null);
om.next.reshape = (function om$next$reshape(dt,p__33594){
var map__33635 = p__33594;
var map__33635__$1 = ((((!((map__33635 == null)))?((((map__33635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33635):map__33635);
var reshape__$1 = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword(null,"reshape","reshape",1588089910));
var defaults = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var reshape_STAR_ = ((function (map__33635,map__33635__$1,reshape__$1,defaults){
return (function om$next$reshape_$_reshape_STAR_(x){
if((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,reshape__$1,cljs.core.first.call(null,x)))){
var reshapef = cljs.core.get.call(null,reshape__$1,cljs.core.first.call(null,x));
om.next.validate_sig.call(null,x);

return reshapef.call(null,x);
} else {
return x;
}
});})(map__33635,map__33635__$1,reshape__$1,defaults))
;
var add_defaults_step = ((function (map__33635,map__33635__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults_step(ret,p__33656){
var vec__33666 = p__33656;
var name = cljs.core.nth.call(null,vec__33666,(0),null);
var impl = cljs.core.nth.call(null,vec__33666,(1),null);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([name], true),cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.seq_QMARK_,ret))))){
var vec__33669 = cljs.core.split_with.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null)),ret);
var before = cljs.core.nth.call(null,vec__33669,(0),null);
var vec__33672 = cljs.core.nth.call(null,vec__33669,(1),null);
var seq__33673 = cljs.core.seq.call(null,vec__33672);
var first__33674 = cljs.core.first.call(null,seq__33673);
var seq__33673__$1 = cljs.core.next.call(null,seq__33673);
var p = first__33674;
var after = seq__33673__$1;
return cljs.core.into.call(null,cljs.core.conj.call(null,cljs.core.vec.call(null,before),p,cljs.core.cons.call(null,name,impl)),after);
} else {
return ret;
}
});})(map__33635,map__33635__$1,reshape__$1,defaults))
;
var add_defaults = ((function (map__33635,map__33635__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_defaults(dt__$1){
return cljs.core.reduce.call(null,add_defaults_step,dt__$1,defaults);
});})(map__33635,map__33635__$1,reshape__$1,defaults))
;
var add_object_protocol = ((function (map__33635,map__33635__$1,reshape__$1,defaults){
return (function om$next$reshape_$_add_object_protocol(dt__$1){
if(cljs.core.not.call(null,cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"Object","Object",61210754,null),null], null), null),dt__$1))){
return cljs.core.conj.call(null,dt__$1,new cljs.core.Symbol(null,"Object","Object",61210754,null));
} else {
return dt__$1;
}
});})(map__33635,map__33635__$1,reshape__$1,defaults))
;
return add_defaults.call(null,add_object_protocol.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,reshape_STAR_,dt))));
});
om.next.defui_STAR_ = (function om$next$defui_STAR_(var_args){
var args33687 = [];
var len__21324__auto___33709 = arguments.length;
var i__21325__auto___33710 = (0);
while(true){
if((i__21325__auto___33710 < len__21324__auto___33709)){
args33687.push((arguments[i__21325__auto___33710]));

var G__33711 = (i__21325__auto___33710 + (1));
i__21325__auto___33710 = G__33711;
continue;
} else {
}
break;
}

var G__33689 = args33687.length;
switch (G__33689) {
case 2:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33687.length)].join('')));

}
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (name,form){
return om.next.defui_STAR_.call(null,name,form,null);
});

om.next.defui_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (name,forms,env){
var field_set_BANG_ = (function om$next$field_set_BANG_(obj,p__33697){
var vec__33701 = p__33697;
var field = cljs.core.nth.call(null,vec__33701,(0),null);
var value = cljs.core.nth.call(null,vec__33701,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21067__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(field)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = value;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
});
var docstring = ((typeof cljs.core.first.call(null,forms) === 'string')?cljs.core.first.call(null,forms):null);
var forms__$1 = (function (){var G__33705 = forms;
if(cljs.core.truth_(docstring)){
return cljs.core.rest.call(null,G__33705);
} else {
return G__33705;
}
})();
var map__33704 = om.next.collect_statics.call(null,forms__$1);
var map__33704__$1 = ((((!((map__33704 == null)))?((((map__33704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33704):map__33704);
var dt = cljs.core.get.call(null,map__33704__$1,new cljs.core.Keyword(null,"dt","dt",-368444759));
var statics = cljs.core.get.call(null,map__33704__$1,new cljs.core.Keyword(null,"statics","statics",-1984882809));
var _ = om.next.validate_statics.call(null,dt);
var rname = (cljs.core.truth_(env)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),name)):name);
var ctor = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null)),(function (){var x__21067__auto__ = cljs.core.with_meta.call(null,name,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@constructor"], null)], null),cljs.core.meta.call(null,name),(cljs.core.truth_(docstring)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null):null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33681__auto__","this__33681__auto__",-1380610512,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component","js/React.Component",752301916,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33681__auto__","this__33681__auto__",-1380610512,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-initLocalState",".-initLocalState",-1875308467,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33681__auto__","this__33681__auto__",-1380610512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33681__auto__","this__33681__auto__",-1380610512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".initLocalState",".initLocalState",-104173886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33681__auto__","this__33681__auto__",-1380610512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-state",".-state",2145135971,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33681__auto__","this__33681__auto__",-1380610512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33681__auto__","this__33681__auto__",-1380610512,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
var set_react_proto_BANG_ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.object","clone","goog.object/clone",-508199474,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","React.Component.prototype","js/React.Component.prototype",259217051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
var ctor__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,name)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21067__auto__ = ctor;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = set_react_proto_BANG_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})()))));
var display_name = (cljs.core.truth_(env)?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))),cljs.core.str("/"),cljs.core.str(name)].join(''):new cljs.core.Symbol("js","undefined","js/undefined",-329966622,null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21067__auto__ = ctor__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),om.next.reshape.call(null,dt,om.next.reshape_map))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-constructor","om.next/-constructor",-675008524,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-displayName","om.next/-displayName",250349469,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = display_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-prototype","om.next/-prototype",951061230,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","-om$isComponent","om.next/-om$isComponent",-1994912590,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core.map.call(null,((function (docstring,forms__$1,map__33704,map__33704__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__33682_SHARP_){
return field_set_BANG_.call(null,name,p1__33682_SHARP_);
});})(docstring,forms__$1,map__33704,map__33704__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(statics)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core.mapv.call(null,((function (docstring,forms__$1,map__33704,map__33704__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name){
return (function (p1__33683_SHARP_){
var G__33708 = p1__33683_SHARP_;
if((p1__33683_SHARP_ instanceof cljs.core.Symbol)){
return cljs.core.vary_meta.call(null,G__33708,cljs.core.assoc,new cljs.core.Keyword(null,"static","static",1214358571),true);
} else {
return G__33708;
}
});})(docstring,forms__$1,map__33704,map__33704__$1,dt,statics,_,rname,ctor,set_react_proto_BANG_,ctor__$1,display_name))
,new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(statics))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__21067__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__21067__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__21067__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__33684__auto__","this__33684__auto__",-1007843238,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__33685__auto__","writer__33685__auto__",-1552504907,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__33686__auto__","opt__33686__auto__",2074135113,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__33685__auto__","writer__33685__auto__",-1552504907,null)),(function (){var x__21067__auto__ = [cljs.core.str(rname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
});

om.next.defui_STAR_.cljs$lang$maxFixedArity = 3;

om.next.defui = (function om$next$defui(var_args){
var args__21331__auto__ = [];
var len__21324__auto___33717 = arguments.length;
var i__21325__auto___33718 = (0);
while(true){
if((i__21325__auto___33718 < len__21324__auto___33717)){
args__21331__auto__.push((arguments[i__21325__auto___33718]));

var G__33719 = (i__21325__auto___33718 + (1));
i__21325__auto___33718 = G__33719;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((3) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((3)),(0),null)):null);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21332__auto__);
});

om.next.defui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,forms){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.defui_STAR_.call(null,name,forms,_AMPERSAND_env);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui-clj","om.next/defui-clj",-1719526038,null)),(function (){var x__21067__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),forms)));
}
});

om.next.defui.cljs$lang$maxFixedArity = (3);

om.next.defui.cljs$lang$applyTo = (function (seq33713){
var G__33714 = cljs.core.first.call(null,seq33713);
var seq33713__$1 = cljs.core.next.call(null,seq33713);
var G__33715 = cljs.core.first.call(null,seq33713__$1);
var seq33713__$2 = cljs.core.next.call(null,seq33713__$1);
var G__33716 = cljs.core.first.call(null,seq33713__$2);
var seq33713__$3 = cljs.core.next.call(null,seq33713__$2);
return om.next.defui.cljs$core$IFn$_invoke$arity$variadic(G__33714,G__33715,G__33716,seq33713__$3);
});


om.next.defui.cljs$lang$macro = true;
om.next.ui = (function om$next$ui(var_args){
var args__21331__auto__ = [];
var len__21324__auto___33723 = arguments.length;
var i__21325__auto___33724 = (0);
while(true){
if((i__21325__auto___33724 < len__21324__auto___33723)){
args__21331__auto__.push((arguments[i__21325__auto___33724]));

var G__33725 = (i__21325__auto___33724 + (1));
i__21325__auto___33724 = G__33725;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((2) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((2)),(0),null)):null);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21332__auto__);
});

om.next.ui.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"ui_"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","defui","om.next/defui",1665242576,null)),(function (){var x__21067__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),forms)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
});

om.next.ui.cljs$lang$maxFixedArity = (2);

om.next.ui.cljs$lang$applyTo = (function (seq33720){
var G__33721 = cljs.core.first.call(null,seq33720);
var seq33720__$1 = cljs.core.next.call(null,seq33720);
var G__33722 = cljs.core.first.call(null,seq33720__$1);
var seq33720__$2 = cljs.core.next.call(null,seq33720__$1);
return om.next.ui.cljs$core$IFn$_invoke$arity$variadic(G__33721,G__33722,seq33720__$2);
});


om.next.ui.cljs$lang$macro = true;
om.next.invariant_STAR_ = (function om$next$invariant_STAR_(condition,message,env){
var opts = cljs.analyzer.api.get_options.call(null);
var fn_scope = new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env);
var fn_name = (function (){var G__33728 = fn_scope;
var G__33728__$1 = (((G__33728 == null))?null:cljs.core.first.call(null,G__33728));
var G__33728__$2 = (((G__33728__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__33728__$1));
if((G__33728__$2 == null)){
return null;
} else {
return [cljs.core.str(G__33728__$2)].join('');
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(opts))){
return null;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),(function (){var x__21067__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__33726__auto__","l__33726__auto__",61704267,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("om.next","*logger*","om.next/*logger*",-530662591,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = condition;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog.log","error","goog.log/error",-1510663407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"l__33726__auto__","l__33726__auto__",61704267,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invariant Violation"),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),(function (){var x__21067__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),(function (){var x__21067__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," (in function: `"),(function (){var x__21067__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"`)"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,": "),(function (){var x__21067__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})())));
}
});
om.next.invariant = (function om$next$invariant(_AMPERSAND_form,_AMPERSAND_env,condition,message){
if(cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))){
return om.next.invariant_STAR_.call(null,condition,message,_AMPERSAND_env);
} else {
return null;
}
});

om.next.invariant.cljs$lang$macro = true;
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_.call(null,x));
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_.call(null,expr)){
return cljs.core.ffirst.call(null,expr);
} else {
if(cljs.core.seq_QMARK_.call(null,expr)){
var expr_SINGLEQUOTE_ = cljs.core.first.call(null,expr);
if(cljs.core.map_QMARK_.call(null,expr_SINGLEQUOTE_)){
return cljs.core.ffirst.call(null,expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.util.ident_QMARK_.call(null,expr)){
var G__33730 = expr;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,expr))){
return cljs.core.first.call(null,G__33730);
} else {
return G__33730;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper.call(null,(function (p1__33731_SHARP_){
return (cljs.core.vector_QMARK_.call(null,p1__33731_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__33731_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__33731_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null)));
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down.call(null,loc);
while(true){
var node = clojure.zip.node.call(null,loc__$1);
if(cljs.core._EQ_.call(null,k,cljs.core.first.call(null,node))){
return clojure.zip.right.call(null,clojure.zip.down.call(null,loc__$1));
} else {
var G__33732 = clojure.zip.right.call(null,loc__$1);
loc__$1 = G__33732;
continue;
}
break;
}
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_.call(null,path__$1)){
return loc;
} else {
var node = clojure.zip.node.call(null,loc);
if(cljs.core.vector_QMARK_.call(null,node)){
var G__33765 = clojure.zip.down.call(null,loc);
var G__33766 = path__$1;
loc = G__33765;
path__$1 = G__33766;
continue;
} else {
var vec__33761 = path__$1;
var seq__33762 = cljs.core.seq.call(null,vec__33761);
var first__33763 = cljs.core.first.call(null,seq__33762);
var seq__33762__$1 = cljs.core.next.call(null,seq__33762);
var k = first__33763;
var ks = seq__33762__$1;
var k_SINGLEQUOTE_ = om.next.expr__GT_key.call(null,node);
if(cljs.core.keyword_identical_QMARK_.call(null,k,k_SINGLEQUOTE_)){
if((cljs.core.map_QMARK_.call(null,node)) || ((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,node))))){
var loc_SINGLEQUOTE_ = om.next.move_to_key.call(null,(function (){var G__33764 = loc;
if(cljs.core.seq_QMARK_.call(null,node)){
return clojure.zip.down.call(null,G__33764);
} else {
return G__33764;
}
})(),k);
var node_SINGLEQUOTE_ = clojure.zip.node.call(null,loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_.call(null,node_SINGLEQUOTE_)){
if(cljs.core.seq.call(null,ks)){
var G__33767 = clojure.zip.replace.call(null,loc_SINGLEQUOTE_,clojure.zip.node.call(null,om.next.move_to_key.call(null,loc_SINGLEQUOTE_,cljs.core.first.call(null,ks))));
var G__33768 = cljs.core.next.call(null,ks);
loc = G__33767;
path__$1 = G__33768;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__33769 = loc_SINGLEQUOTE_;
var G__33770 = ks;
loc = G__33769;
path__$1 = G__33770;
continue;
}
} else {
var G__33771 = clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,loc))));
var G__33772 = ks;
loc = G__33771;
path__$1 = G__33772;
continue;
}
} else {
var G__33773 = clojure.zip.right.call(null,loc);
var G__33774 = path__$1;
loc = G__33773;
path__$1 = G__33774;
continue;
}
}
}
break;
}
});
return query_template_STAR_.call(null,om.next.query_zip.call(null,query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root.call(null,clojure.zip.replace.call(null,template,new_query));
});
om.next.focused_join = (function om$next$focused_join(expr,ks,full_expr,union_expr){
var expr_meta = cljs.core.meta.call(null,expr);
var expr_SINGLEQUOTE_ = ((cljs.core.map_QMARK_.call(null,expr))?(function (){var join_value = cljs.core.second.call(null,cljs.core.first.call(null,expr));
var join_value__$1 = (((om.util.recursion_QMARK_.call(null,join_value)) && (cljs.core.seq.call(null,ks)))?((!((union_expr == null)))?union_expr:full_expr):join_value);
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst.call(null,expr),om.next.focus_query_STAR_.call(null,join_value__$1,ks,null)], true, false);
})():((cljs.core.seq_QMARK_.call(null,expr))?(function (){var x__21067__auto__ = om$next$focused_join.call(null,cljs.core.first.call(null,expr),ks,null,null);
return cljs.core._conj.call(null,(function (){var x__21067__auto____$1 = cljs.core.second.call(null,expr);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto____$1);
})(),x__21067__auto__);
})():expr
));
var G__33776 = expr_SINGLEQUOTE_;
if(cljs.core.some_QMARK_.call(null,expr_meta)){
return cljs.core.with_meta.call(null,G__33776,expr_meta);
} else {
return G__33776;
}
});
om.next.focus_query_STAR_ = (function om$next$focus_query_STAR_(query,path,union_expr){
if(cljs.core.empty_QMARK_.call(null,path)){
return query;
} else {
var vec__33780 = path;
var seq__33781 = cljs.core.seq.call(null,vec__33780);
var first__33782 = cljs.core.first.call(null,seq__33781);
var seq__33781__$1 = cljs.core.next.call(null,seq__33781);
var k = first__33782;
var ks = seq__33781__$1;
var match = ((function (vec__33780,seq__33781,first__33782,seq__33781__$1,k,ks){
return (function om$next$focus_query_STAR__$_match(x){
return cljs.core._EQ_.call(null,k,om.util.join_key.call(null,x));
});})(vec__33780,seq__33781,first__33782,seq__33781__$1,k,ks))
;
var value = ((function (vec__33780,seq__33781,first__33782,seq__33781__$1,k,ks){
return (function om$next$focus_query_STAR__$_value(x){
return om.next.focused_join.call(null,x,ks,query,union_expr);
});})(vec__33780,seq__33781,first__33782,seq__33781__$1,k,ks))
;
if(cljs.core.map_QMARK_.call(null,query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query_STAR_.call(null,cljs.core.get.call(null,query,k),ks,query)], true, false);
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,match),cljs.core.map.call(null,value),cljs.core.take.call(null,(1))),query);
}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
return om.next.focus_query_STAR_.call(null,query,path,null);
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args33783 = [];
var len__21324__auto___33789 = arguments.length;
var i__21325__auto___33790 = (0);
while(true){
if((i__21325__auto___33790 < len__21324__auto___33789)){
args33783.push((arguments[i__21325__auto___33790]));

var G__33791 = (i__21325__auto___33790 + (1));
i__21325__auto___33790 = G__33791;
continue;
} else {
}
break;
}

var G__33785 = args33783.length;
switch (G__33785) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33783.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.call(null,focus,new cljs.core.Symbol(null,"*","*",345799209,null),cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.call(null,focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__20129__auto__ = (cljs.core._EQ_.call(null,bound,new cljs.core.Symbol(null,"*","*",345799209,null))) || ((cljs.core.not_EQ_.call(null,path,bound)) && ((cljs.core.count.call(null,path) < cljs.core.count.call(null,bound))));
if(and__20129__auto__){
var and__20129__auto____$1 = cljs.core.some.call(null,om.util.join_QMARK_,focus);
if(cljs.core.truth_(and__20129__auto____$1)){
return ((1) === cljs.core.count.call(null,focus));
} else {
return and__20129__auto____$1;
}
} else {
return and__20129__auto__;
}
})())){
var vec__33786 = om.util.join_entry.call(null,cljs.core.first.call(null,focus));
var k = cljs.core.nth.call(null,vec__33786,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__33786,(1),null);
var focus_SINGLEQUOTE___$1 = ((om.util.recursion_QMARK_.call(null,focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__33793 = focus_SINGLEQUOTE___$1;
var G__33794 = bound;
var G__33795 = cljs.core.conj.call(null,path,k);
focus = G__33793;
bound = G__33794;
path = G__33795;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__20854__auto__ = (((this$ == null))?null:this$);
var m__20855__auto__ = (om.next.ident[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,this$,props);
} else {
var m__20855__auto____$1 = (om.next.ident["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,this$,props);
} else {
throw cljs.core.missing_protocol.call(null,"Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__20854__auto__ = (((this$ == null))?null:this$);
var m__20855__auto__ = (om.next.params[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,this$);
} else {
var m__20855__auto____$1 = (om.next.params["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__20854__auto__ = (((this$ == null))?null:this$);
var m__20855__auto__ = (om.next.query[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,this$);
} else {
var m__20855__auto____$1 = (om.next.query["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__20854__auto__ = (((this$ == null))?null:this$);
var m__20855__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,this$,new_state);
} else {
var m__20855__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,this$,new_state);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__20854__auto__ = (((this$ == null))?null:this$);
var m__20855__auto__ = (om.next._get_state[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,this$);
} else {
var m__20855__auto____$1 = (om.next._get_state["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__20854__auto__ = (((this$ == null))?null:this$);
var m__20855__auto__ = (om.next._get_rendered_state[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,this$);
} else {
var m__20855__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__20854__auto__ = (((this$ == null))?null:this$);
var m__20855__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,this$);
} else {
var m__20855__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__20129__auto__ = (x instanceof cljs.core.Symbol);
if(and__20129__auto__){
return goog.string.startsWith([cljs.core.str(x)].join(''),"?");
} else {
return and__20129__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').substring((1)));
});
om.next.replace_var = (function om$next$replace_var(expr,params){
if(cljs.core.truth_(om.next.var_QMARK_.call(null,expr))){
return cljs.core.get.call(null,params,om.next.var__GT_keyword.call(null,expr),expr);
} else {
return expr;
}
});
om.next.bind_query = (function om$next$bind_query(query,params){
var qm = cljs.core.meta.call(null,query);
var tr = cljs.core.map.call(null,((function (qm){
return (function (p1__33796_SHARP_){
return om$next$bind_query.call(null,p1__33796_SHARP_,params);
});})(qm))
);
var ret = ((cljs.core.seq_QMARK_.call(null,query))?cljs.core.apply.call(null,cljs.core.list,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,tr,query)):((cljs.core.coll_QMARK_.call(null,query))?cljs.core.into.call(null,cljs.core.empty.call(null,query),tr,query):om.next.replace_var.call(null,query,params)
));
var G__33799 = ret;
if(cljs.core.truth_((function (){var and__20129__auto__ = qm;
if(cljs.core.truth_(and__20129__auto__)){
if(!((ret == null))){
if(((ret.cljs$lang$protocol_mask$partition0$ & (131072))) || (ret.cljs$core$IMeta$)){
return true;
} else {
if((!ret.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IMeta,ret);
}
} else {
return and__20129__auto__;
}
})())){
return cljs.core.with_meta.call(null,G__33799,qm);
} else {
return G__33799;
}
});






om.next.component__GT_query_data = (function om$next$component__GT_query_data(component){
var G__33802 = om.next.get_reconciler.call(null,component);
var G__33802__$1 = (((G__33802 == null))?null:new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__33802));
var G__33802__$2 = (((G__33802__$1 == null))?null:new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__33802__$1));
var G__33802__$3 = (((G__33802__$2 == null))?null:cljs.core.deref.call(null,G__33802__$2));
var G__33802__$4 = (((G__33802__$3 == null))?null:new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146).cljs$core$IFn$_invoke$arity$1(G__33802__$3));
if((G__33802__$4 == null)){
return null;
} else {
return cljs.core.get.call(null,G__33802__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.query.call(null,component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(om.next.component__GT_query_data.call(null,component),om.next.params.call(null,component));
});
om.next.get_component_query = (function om$next$get_component_query(var_args){
var args33803 = [];
var len__21324__auto___33806 = arguments.length;
var i__21325__auto___33807 = (0);
while(true){
if((i__21325__auto___33807 < len__21324__auto___33806)){
args33803.push((arguments[i__21325__auto___33807]));

var G__33808 = (i__21325__auto___33807 + (1));
i__21325__auto___33807 = G__33808;
continue;
} else {
}
break;
}

var G__33805 = args33803.length;
switch (G__33805) {
case 1:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_component_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33803.length)].join('')));

}
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_component_query.call(null,component,om.next.component__GT_query_data.call(null,component));
});

om.next.get_component_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query_data){
var q = new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$2(query_data,om.next.query.call(null,component));
var c_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(component),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c')")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$2(query_data,om.next.params.call(null,component))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.type.call(null,component)], null));
});

om.next.get_component_query.cljs$lang$maxFixedArity = 2;

om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
/**
 * Return a IQuery/IParams local bound query. Works for component classes
 * and component instances. Does not use the indexer.
 */
om.next.get_class_or_instance_query = (function om$next$get_class_or_instance_query(x){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
return om.next.get_component_query.call(null,x);
} else {
var q = om.next.query.call(null,x);
var c = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str("(nil? c)")].join('')));
}

return cljs.core.with_meta.call(null,om.next.bind_query.call(null,q,om.next.params.call(null,x)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),x], null));
}
});
/**
 * Get a component's static query from the indexer. For recursive queries, recurses
 * up the data path. Falls back to `get-class-or-instance-query` if nothing is
 * found in the indexer.
 */
om.next.get_indexed_query = (function om$next$get_indexed_query(component,class_path_query_data,data_path){
while(true){
var qs = cljs.core.filter.call(null,((function (component,class_path_query_data,data_path){
return (function (p1__33812_SHARP_){
return cljs.core._EQ_.call(null,data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__33812_SHARP_),data_path));
});})(component,class_path_query_data,data_path))
,class_path_query_data);
var qs__$1 = ((cljs.core.empty_QMARK_.call(null,qs))?class_path_query_data:qs);
if(!(cljs.core.empty_QMARK_.call(null,qs__$1))){
var q = cljs.core.first.call(null,qs__$1);
var node = clojure.zip.node.call(null,q);
if(!(om.util.recursion_QMARK_.call(null,node))){
return node;
} else {
var G__33813 = component;
var G__33814 = class_path_query_data;
var G__33815 = cljs.core.pop.call(null,data_path);
component = G__33813;
class_path_query_data = G__33814;
data_path = G__33815;
continue;
}
} else {
return om.next.get_class_or_instance_query.call(null,component);
}
break;
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_(om.next.component_QMARK_.call(null,x))){
var temp__6726__auto__ = om.next.component__GT_query_data.call(null,x);
if(cljs.core.truth_(temp__6726__auto__)){
var query_data = temp__6726__auto__;
return om.next.get_component_query.call(null,x,query_data);
} else {
var cp = om.next.class_path.call(null,x);
var r = om.next.get_reconciler.call(null,x);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,x));
var class_path_query_data = cljs.core.get.call(null,new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,om.next.get_indexer.call(null,r))),cp);
return om.next.get_indexed_query.call(null,x,class_path_query_data,data_path);
}
} else {
return om.next.get_class_or_instance_query.call(null,x);
}
} else {
return null;
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword(null,"component","component",1555936782),class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"props","props",2093813254,null),new cljs.core.Symbol(null,"basis-t","basis-t",216455797,null)], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props.call(null,null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__6726__auto__ = new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__6726__auto__)){
var rk = temp__6726__auto__;
return rk;
} else {
var temp__6726__auto____$1 = new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props));
if(cljs.core.truth_(temp__6726__auto____$1)){
var idx = temp__6726__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 *    om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args33818 = [];
var len__21324__auto___33826 = arguments.length;
var i__21325__auto___33827 = (0);
while(true){
if((i__21325__auto___33827 < len__21324__auto___33826)){
args33818.push((arguments[i__21325__auto___33827]));

var G__33828 = (i__21325__auto___33827 + (1));
i__21325__auto___33827 = G__33828;
continue;
} else {
}
break;
}

var G__33820 = args33818.length;
switch (G__33820) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33818.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.call(null,class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__33821){
var map__33822 = p__33821;
var map__33822__$1 = ((((!((map__33822 == null)))?((((map__33822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33822):map__33822);
var opts = map__33822__$1;
var validator = cljs.core.get.call(null,map__33822__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var keyfn = cljs.core.get.call(null,map__33822__$1,new cljs.core.Keyword(null,"keyfn","keyfn",780060332));
var instrument_QMARK_ = cljs.core.get.call(null,map__33822__$1,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),true);
if(cljs.core.fn_QMARK_.call(null,class$)){
} else {
throw (new Error("Assert failed: (fn? class)"));
}

return ((function (map__33822,map__33822__$1,opts,validator,keyfn,instrument_QMARK_){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_(validator.call(null,props))){
} else {
throw (new Error("Assert failed: (validator props)"));
}
}

if(cljs.core.truth_((function (){var and__20129__auto__ = om.next._STAR_instrument_STAR_;
if(cljs.core.truth_(and__20129__auto__)){
return instrument_QMARK_;
} else {
return and__20129__auto__;
}
})())){
return om.next._STAR_instrument_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"children","children",-940561982),children,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"factory","factory",63933746),om.next.factory.call(null,class$,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"instrument?","instrument?",-1835582396),false))], null));
} else {
var key = ((!((keyfn == null)))?keyfn.call(null,props):om.next.compute_react_key.call(null,class$,props));
var ref = new cljs.core.Keyword(null,"ref","ref",1289896967).cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__33825 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__33825)].join('');
} else {
return G__33825;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t.call(null,om.next._STAR_reconciler_STAR_):(0));
return React.createElement(class$,({"omcljs$value": om.next.om_props.call(null,props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "omcljs$reactKey": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": new cljs.core.Keyword(null,"om-path","om-path",-1911443978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_}),om.util.force_children.call(null,children));
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__33830__i = 0, G__33830__a = new Array(arguments.length -  1);
while (G__33830__i < G__33830__a.length) {G__33830__a[G__33830__i] = arguments[G__33830__i + 1]; ++G__33830__i;}
  children = new cljs.core.IndexedSeq(G__33830__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__33831){
var props = cljs.core.first(arglist__33831);
var children = cljs.core.rest(arglist__33831);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__33822,map__33822__$1,opts,validator,keyfn,instrument_QMARK_))
});

om.next.factory.cljs$lang$maxFixedArity = 2;

/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
return goog.object.get(c.props,k);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_.call(null,x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
return goog.object.set(c.props,k,v);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return om.next.get_prop.call(null,c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args33832 = [];
var len__21324__auto___33835 = arguments.length;
var i__21325__auto___33836 = (0);
while(true){
if((i__21325__auto___33836 < len__21324__auto___33835)){
args33832.push((arguments[i__21325__auto___33836]));

var G__33837 = (i__21325__auto___33836 + (1));
i__21325__auto___33836 = G__33837;
continue;
} else {
}
break;
}

var G__33834 = args33832.length;
switch (G__33834) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33832.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.call(null,om.next.om_props_basis,x,om.next.props_STAR_.call(null,y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;

om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args33839 = [];
var len__21324__auto___33842 = arguments.length;
var i__21325__auto___33843 = (0);
while(true){
if((i__21325__auto___33843 < len__21324__auto___33842)){
args33839.push((arguments[i__21325__auto___33843]));

var G__33844 = (i__21325__auto___33843 + (1));
i__21325__auto___33843 = G__33844;
continue;
} else {
}
break;
}

var G__33841 = args33839.length;
switch (G__33841) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33839.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.call(null,om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.call(null,om.next.om_props_basis,om.next.props_STAR_.call(null,x,y),om.next.props_STAR_.call(null,y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;

om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap.call(null,om.next.prev_props_STAR_.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,prev_props),om.next.get_prev_props.call(null,cst)),om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,next_props),om.next.get_next_props.call(null,component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.call(null,om.next.get_props.call(null,cst),om.next.get_props.call(null,props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
return goog.object.remove(c.state,"omcljs$prev$value");
});
/**
 * Get basis t value for when the component last read its props from
 *    the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,c.props),om.next.get_props.call(null,c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop.call(null,component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *  the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_.call(null,component)){
return om.next.get_prop.call(null,component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return om.next.get_prop.call(null,component,"omcljs$reactKey");
});
/**
 * Returns the component type, regardless of whether the component has been
 *    mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__20141__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return cljs.core.type.call(null,x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop.call(null,c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args33846 = [];
var len__21324__auto___33851 = arguments.length;
var i__21325__auto___33852 = (0);
while(true){
if((i__21325__auto___33852 < len__21324__auto___33851)){
args33846.push((arguments[i__21325__auto___33852]));

var G__33853 = (i__21325__auto___33852 + (1));
i__21325__auto___33852 = G__33853;
continue;
} else {
}
break;
}

var G__33848 = args33846.length;
switch (G__33848) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33846.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var shared = goog.object.get(component.props,"omcljs$shared");
var ks = (function (){var G__33849 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__33849],null));
} else {
return G__33849;
}
})();
var G__33850 = shared;
if(!(cljs.core.empty_QMARK_.call(null,ks))){
return cljs.core.get_in.call(null,G__33850,ks);
} else {
return G__33850;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;

om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.get_prop.call(null,component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var G__33856 = c.state;
goog.object.set(G__33856,"omcljs$next$value",om.next.om_props.call(null,next_props,om.next.protocols.basis_t.call(null,om.next.get_reconciler.call(null,c))));

return G__33856;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return om.next.unwrap.call(null,om.next.props_STAR_.call(null,om.next.get_props.call(null,component.props),om.next.get_props.call(null,component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_.call(null,props)){
var G__33859 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.vary_meta.call(null,G__33859,cljs.core.assoc,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__33859;
}
} else {
var G__33860 = props;
if(!(cljs.core.empty_QMARK_.call(null,computed_map))){
return cljs.core.assoc.call(null,G__33860,new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329),computed_map);
} else {
return G__33860;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args33861 = [];
var len__21324__auto___33866 = arguments.length;
var i__21325__auto___33867 = (0);
while(true){
if((i__21325__auto___33867 < len__21324__auto___33866)){
args33861.push((arguments[i__21325__auto___33867]));

var G__33868 = (i__21325__auto___33867 + (1));
i__21325__auto___33867 = G__33868;
continue;
} else {
}
break;
}

var G__33863 = args33861.length;
switch (G__33863) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33861.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.call(null,x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__33864 = x;
if(om.next.component_QMARK_.call(null,x)){
return om.next.props.call(null,G__33864);
} else {
return G__33864;
}
})();
var ks = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","computed","om.next/computed",1947886329)], null),(function (){var G__33865 = k_or_ks;
if(!(cljs.core.sequential_QMARK_.call(null,k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__33865],null));
} else {
return G__33865;
}
})());
if(cljs.core.vector_QMARK_.call(null,props)){
return cljs.core.get_in.call(null,cljs.core.meta.call(null,props),ks);
} else {
return cljs.core.get_in.call(null,props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;

/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_.call(null,component,new_state);
} else {
goog.object.set(component.state,"omcljs$pendingState",new_state);
}

var temp__6726__auto__ = om.next.get_reconciler.call(null,component);
if(cljs.core.truth_(temp__6726__auto__)){
var r = temp__6726__auto__;
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return om.next.schedule_render_BANG_.call(null,r);
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args33872 = [];
var len__21324__auto___33876 = arguments.length;
var i__21325__auto___33877 = (0);
while(true){
if((i__21325__auto___33877 < len__21324__auto___33876)){
args33872.push((arguments[i__21325__auto___33877]));

var G__33878 = (i__21325__auto___33877 + (1));
i__21325__auto___33877 = G__33878;
continue;
} else {
}
break;
}

var G__33874 = args33872.length;
switch (G__33874) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33872.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state.call(null,component):(function (){var temp__6728__auto__ = component.state;
if(cljs.core.truth_(temp__6728__auto__)){
var state = temp__6728__auto__;
var or__20141__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args33880 = [];
var len__21324__auto___33890 = arguments.length;
var i__21325__auto___33891 = (0);
while(true){
if((i__21325__auto___33891 < len__21324__auto___33890)){
args33880.push((arguments[i__21325__auto___33891]));

var G__33892 = (i__21325__auto___33891 + (1));
i__21325__auto___33891 = G__33892;
continue;
} else {
}
break;
}

var G__33889 = args33880.length;
switch (G__33889) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__21347__auto__ = (new cljs.core.IndexedSeq(args33880.slice((6)),(0),null));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__21347__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component)));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_.call(null,component,f.call(null,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3));
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_.call(null,component,cljs.core.apply.call(null,f,om.next.get_state.call(null,component),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq33881){
var G__33882 = cljs.core.first.call(null,seq33881);
var seq33881__$1 = cljs.core.next.call(null,seq33881);
var G__33883 = cljs.core.first.call(null,seq33881__$1);
var seq33881__$2 = cljs.core.next.call(null,seq33881__$1);
var G__33884 = cljs.core.first.call(null,seq33881__$2);
var seq33881__$3 = cljs.core.next.call(null,seq33881__$2);
var G__33885 = cljs.core.first.call(null,seq33881__$3);
var seq33881__$4 = cljs.core.next.call(null,seq33881__$3);
var G__33886 = cljs.core.first.call(null,seq33881__$4);
var seq33881__$5 = cljs.core.next.call(null,seq33881__$4);
var G__33887 = cljs.core.first.call(null,seq33881__$5);
var seq33881__$6 = cljs.core.next.call(null,seq33881__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33882,G__33883,G__33884,G__33885,G__33886,G__33887,seq33881__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(var_args){
var args33894 = [];
var len__21324__auto___33899 = arguments.length;
var i__21325__auto___33900 = (0);
while(true){
if((i__21325__auto___33900 < len__21324__auto___33899)){
args33894.push((arguments[i__21325__auto___33900]));

var G__33901 = (i__21325__auto___33900 + (1));
i__21325__auto___33900 = G__33901;
continue;
} else {
}
break;
}

var G__33896 = args33894.length;
switch (G__33896) {
case 1:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33894.length)].join('')));

}
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_rendered_state.call(null,component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_rendered_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_rendered_state.call(null,component):(function (){var G__33898 = component;
var G__33898__$1 = (((G__33898 == null))?null:G__33898.state);
if((G__33898__$1 == null)){
return null;
} else {
return goog.object.get(G__33898__$1,"omcljs$state");
}
})());
return cljs.core.get_in.call(null,cst,((cljs.core.sequential_QMARK_.call(null,k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_rendered_state.cljs$lang$maxFixedArity = 2;

om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_.call(null,c);
} else {
var temp__6728__auto__ = (function (){var G__33906 = c;
var G__33906__$1 = (((G__33906 == null))?null:G__33906.state);
if((G__33906__$1 == null)){
return null;
} else {
return goog.object.get(G__33906__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__6728__auto__)){
var pending = temp__6728__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args33907 = [];
var len__21324__auto___33910 = arguments.length;
var i__21325__auto___33911 = (0);
while(true){
if((i__21325__auto___33911 < len__21324__auto___33910)){
args33907.push((arguments[i__21325__auto___33911]));

var G__33912 = (i__21325__auto___33911 + (1));
i__21325__auto___33911 = G__33912;
continue;
} else {
}
break;
}

var G__33909 = args33907.length;
switch (G__33909) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33907.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.call(null,component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_.call(null,component)){
} else {
throw (new Error("Assert failed: (component? component)"));
}

return component.setState(({"omcljs$state": new_state}),cb);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;






om.next.gather_sends = (function om$next$gather_sends(p__33915,q,remotes){
var map__33922 = p__33915;
var map__33922__$1 = ((((!((map__33922 == null)))?((((map__33922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33922):map__33922);
var env = map__33922__$1;
var parser = cljs.core.get.call(null,map__33922__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.call(null,cljs.core.map.call(null,((function (map__33922,map__33922__$1,env,parser){
return (function (p1__33914_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__33914_SHARP_,parser.call(null,env,q,p1__33914_SHARP_)],null));
});})(map__33922,map__33922__$1,env,parser))
),cljs.core.filter.call(null,((function (map__33922,map__33922__$1,env,parser){
return (function (p__33924){
var vec__33925 = p__33924;
var _ = cljs.core.nth.call(null,vec__33925,(0),null);
var v = cljs.core.nth.call(null,vec__33925,(1),null);
return (cljs.core.count.call(null,v) > (0));
});})(map__33922,map__33922__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
if(cljs.core.truth_(new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r)))){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.force.call(null,cljs.core.first.call(null,q),target)], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
var transformed = om.next.full_query.call(null,c,with_target.call(null,target,om.next.focus_query.call(null,om.next.get_query.call(null,c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))));
return cljs.core.into.call(null,tx__$1,cljs.core.remove.call(null,cljs.core.set.call(null,tx__$1)),transformed);
});
var exprs = cljs.core.seq.call(null,tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var ast = om.next.impl.parser.expr__GT_ast.call(null,expr);
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast);
var tgt = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var cs = om.next.ref__GT_components.call(null,r,key);
var G__33932 = cljs.core.next.call(null,exprs);
var G__33933 = cljs.core.reduce.call(null,((function (exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt){
return (function (p1__33928_SHARP_,p2__33929_SHARP_){
return add_focused_query.call(null,key,tgt,p1__33928_SHARP_,p2__33929_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,cs,expr,ast,key,tgt))
,(function (){var G__33931 = tx_SINGLEQUOTE_;
if(cljs.core.empty_QMARK_.call(null,cs)){
return cljs.core.conj.call(null,G__33931,expr);
} else {
return G__33931;
}
})(),cs);
exprs = G__33932;
tx_SINGLEQUOTE_ = G__33933;
continue;
} else {
var G__33934 = cljs.core.next.call(null,exprs);
var G__33935 = cljs.core.conj.call(null,tx_SINGLEQUOTE_,expr);
exprs = G__33934;
tx_SINGLEQUOTE_ = G__33935;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
} else {
return tx;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args33936 = [];
var len__21324__auto___33943 = arguments.length;
var i__21325__auto___33944 = (0);
while(true){
if((i__21325__auto___33944 < len__21324__auto___33943)){
args33936.push((arguments[i__21325__auto___33944]));

var G__33945 = (i__21325__auto___33944 + (1));
i__21325__auto___33944 = G__33945;
continue;
} else {
}
break;
}

var G__33938 = args33936.length;
switch (G__33938) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33936.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.call(null,x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__33939,reads){
var map__33940 = p__33939;
var map__33940__$1 = ((((!((map__33940 == null)))?((((map__33940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33940):map__33940);
var params = cljs.core.get.call(null,map__33940__$1,new cljs.core.Keyword(null,"params","params",710516235));
var query = cljs.core.get.call(null,map__33940__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
if(cljs.core.truth_((function (){var or__20141__auto__ = om.next.reconciler_QMARK_.call(null,x);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return om.next.component_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (reconciler? x) (component? x))"));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error("Assert failed: (or (not (nil? params)) (not (nil? query)))"));
}

if(((reads == null)) || (cljs.core.vector_QMARK_.call(null,reads))){
} else {
throw (new Error("Assert failed: (or (nil? reads) (vector? reads))"));
}

var r = ((om.next.component_QMARK_.call(null,x))?om.next.get_reconciler.call(null,x):x);
var c = ((om.next.component_QMARK_.call(null,x))?x:null);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(r)));
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var st = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid.call(null);
new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,st));

var temp__6728__auto___33947 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6728__auto___33947)){
var l_33948 = temp__6728__auto___33947;
goog.log.info(l_33948,[cljs.core.str((function (){var temp__6728__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(cljs.core.truth_(temp__6728__auto____$1)){
var ident = temp__6728__auto____$1;
return [cljs.core.str(cljs.core.pr_str.call(null,ident)),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
}

cljs.core.swap_BANG_.call(null,st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),(function (){var or__20141__auto__ = c;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.merge.call(null,(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),params], null):null)));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_.call(null,r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_.call(null,r,reads);
}

om.next.protocols.reindex_BANG_.call(null,r);

var rootq_33949 = ((!((c == null)))?om.next.full_query.call(null,c):(((reads == null))?om.next.get_query.call(null,root):null));
var sends_33950 = om.next.gather_sends.call(null,om.next.to_env.call(null,cfg),cljs.core.into.call(null,(function (){var or__20141__auto__ = rootq_33949;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads.call(null,r,reads)),new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_.call(null,sends_33950)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,sends_33950);

om.next.schedule_sends_BANG_.call(null,r);
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args33951 = [];
var len__21324__auto___33961 = arguments.length;
var i__21325__auto___33962 = (0);
while(true){
if((i__21325__auto___33962 < len__21324__auto___33961)){
args33951.push((arguments[i__21325__auto___33962]));

var G__33963 = (i__21325__auto___33962 + (1));
i__21325__auto___33962 = G__33963;
continue;
} else {
}
break;
}

var G__33960 = args33951.length;
switch (G__33960) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__21347__auto__ = (new cljs.core.IndexedSeq(args33951.slice((6)),(0),null));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__21347__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null)));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.call(null,component,f.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2));
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_query_BANG_.call(null,component,cljs.core.apply.call(null,f,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),om.next.get_unbound_query.call(null,component),new cljs.core.Keyword(null,"params","params",710516235),om.next.get_params.call(null,component)], null),arg0,arg1,arg2,arg3,arg_rest));
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq33952){
var G__33953 = cljs.core.first.call(null,seq33952);
var seq33952__$1 = cljs.core.next.call(null,seq33952);
var G__33954 = cljs.core.first.call(null,seq33952__$1);
var seq33952__$2 = cljs.core.next.call(null,seq33952__$1);
var G__33955 = cljs.core.first.call(null,seq33952__$2);
var seq33952__$3 = cljs.core.next.call(null,seq33952__$2);
var G__33956 = cljs.core.first.call(null,seq33952__$3);
var seq33952__$4 = cljs.core.next.call(null,seq33952__$3);
var G__33957 = cljs.core.first.call(null,seq33952__$4);
var seq33952__$5 = cljs.core.next.call(null,seq33952__$4);
var G__33958 = cljs.core.first.call(null,seq33952__$5);
var seq33952__$6 = cljs.core.next.call(null,seq33952__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33953,G__33954,G__33955,G__33956,G__33957,G__33958,seq33952__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);

/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_.call(null,x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__33966 = component.refs;
if((G__33966 == null)){
return null;
} else {
return goog.object.get(G__33966,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

om.next.update_props_BANG_.call(null,c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args33967 = [];
var len__21324__auto___33970 = arguments.length;
var i__21325__auto___33971 = (0);
while(true){
if((i__21325__auto___33971 < len__21324__auto___33970)){
args33967.push((arguments[i__21325__auto___33971]));

var G__33972 = (i__21325__auto___33971 + (1));
i__21325__auto___33971 = G__33972;
continue;
} else {
}
break;
}

var G__33969 = args33967.length;
switch (G__33969) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33967.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.call(null,c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return c.shouldComponentUpdate(({"omcljs$value": next_props}),({"omcljs$state": next_state}));
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * Return the raw component class path associated with a component. Contains
 * duplicates for recursive component trees.
 */
om.next.raw_class_path = (function om$next$raw_class_path(c){
var c__$1 = c;
var ret = (function (){var x__21067__auto__ = cljs.core.type.call(null,c__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})();
while(true){
var temp__6726__auto__ = om.next.parent.call(null,c__$1);
if(cljs.core.truth_(temp__6726__auto__)){
var p = temp__6726__auto__;
if(om.next.iquery_QMARK_.call(null,p)){
var G__33974 = p;
var G__33975 = cljs.core.cons.call(null,cljs.core.type.call(null,p),ret);
c__$1 = G__33974;
ret = G__33975;
continue;
} else {
var G__33976 = p;
var G__33977 = ret;
c__$1 = G__33976;
ret = G__33977;
continue;
}
} else {
return ret;
}
break;
}
});
/**
 * Return the component class path associated with a component.
 */
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

var raw_cp = om.next.raw_class_path.call(null,c);
var cp = cljs.core.seq.call(null,raw_cp);
var ret = cljs.core.PersistentVector.EMPTY;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cp){
var c__$1 = cljs.core.first.call(null,cp);
if(cljs.core.contains_QMARK_.call(null,seen,c__$1)){
var G__33978 = cljs.core.next.call(null,cp);
var G__33979 = ret;
var G__33980 = seen;
cp = G__33978;
ret = G__33979;
seen = G__33980;
continue;
} else {
var G__33981 = cljs.core.next.call(null,cp);
var G__33982 = cljs.core.conj.call(null,ret,c__$1);
var G__33983 = cljs.core.conj.call(null,seen,c__$1);
cp = G__33981;
ret = G__33982;
seen = G__33983;
continue;
}
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
 * Returns true if a component's classpath is recursive
 */
om.next.recursive_class_path_QMARK_ = (function om$next$recursive_class_path_QMARK_(c){
if(om.next.component_QMARK_.call(null,c)){
} else {
throw (new Error("Assert failed: (component? c)"));
}

return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,om.next.raw_class_path.call(null,c)));
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error("Assert failed: (or (keyword? subquery-ref) (string? subquery-ref))"));
}

if(cljs.core.fn_QMARK_.call(null,subquery_class)){
} else {
throw (new Error("Assert failed: (fn? subquery-class)"));
}

var ref = (function (){var G__33985 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__33985)].join('');
} else {
return G__33985;
}
})();
if((om.next.component_QMARK_.call(null,x)) && (om.next.mounted_QMARK_.call(null,x))){
return om.next.get_query.call(null,om.next.react_ref.call(null,x,ref));
} else {
return om.next.get_query.call(null,subquery_class);
}
});
/**
 * Given a mounted component with assigned props, return the ident for the
 * component.
 */
om.next.get_ident = (function om$next$get_ident(x){
if(om.next.component_QMARK_.call(null,x)){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var m = om.next.props.call(null,x);
if(!((m == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("get-ident invoked on component with nil props"),cljs.core.str("\n"),cljs.core.str("(not (nil? m))")].join('')));
}

return om.next.ident.call(null,x,m);
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t.call(null,reconciler);
});
om.next.queue_render_BANG_ = (function om$next$queue_render_BANG_(f){
if(cljs.core.fn_QMARK_.call(null,om.next._STAR_raf_STAR_)){
return om.next._STAR_raf_STAR_.call(null,f);
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_.call(null,reconciler))){
return om.next.queue_render_BANG_.call(null,(function (){
return om.next.protocols.reconcile_BANG_.call(null,reconciler);
}));
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_.call(null,reconciler))){
return setTimeout((function (){
return om.next.protocols.send_BANG_.call(null,reconciler);
}),(0));
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args33986 = [];
var len__21324__auto___33989 = arguments.length;
var i__21325__auto___33990 = (0);
while(true){
if((i__21325__auto___33990 < len__21324__auto___33989)){
args33986.push((arguments[i__21325__auto___33990]));

var G__33991 = (i__21325__auto___33990 + (1));
i__21325__auto___33990 = G__33991;
continue;
} else {
}
break;
}

var G__33988 = args33986.length;
switch (G__33988) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33986.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.call(null,reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

if(cljs.core.fn_QMARK_.call(null,root_class)){
} else {
throw (new Error("Assert failed: (fn? root-class)"));
}

var temp__6728__auto___33993 = cljs.core.get.call(null,cljs.core.deref.call(null,om.next.roots),target);
if(cljs.core.truth_(temp__6728__auto___33993)){
var old_reconciler_33994 = temp__6728__auto___33993;
om.next.remove_root_BANG_.call(null,old_reconciler_33994,target);
} else {
}

cljs.core.swap_BANG_.call(null,om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_.call(null,reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_.call(null,reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__20854__auto__ = (((c == null))?null:c);
var m__20855__auto__ = (om.next.tx_intercept[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,c,tx);
} else {
var m__20855__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,c,tx);
} else {
throw cljs.core.missing_protocol.call(null,"ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys.call(null,config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"pathopt","pathopt",-61073149)], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__20129__auto__ = c;
if(cljs.core.truth_(and__20129__auto__)){
var and__20129__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__20129__auto____$1){
return cljs.core.not.call(null,ref);
} else {
return and__20129__auto____$1;
}
} else {
return and__20129__auto__;
}
})())?om.next.ident.call(null,c,om.next.props.call(null,c)):ref);
var env = cljs.core.merge.call(null,om.next.to_env.call(null,cfg),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reconciler","reconciler",-1832826966),r,new cljs.core.Keyword(null,"component","component",1555936782),c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref__$1], null):null));
var id = cljs.core.random_uuid.call(null);
var _ = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cfg).add(id,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg)));
var ___$1 = (function (){var temp__6728__auto__ = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__6728__auto__)){
var l = temp__6728__auto__;
return goog.log.info(l,[cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.call(null,ref__$1)),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.call(null,id))].join(''));
} else {
return null;
}
})();
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends.call(null,env,tx,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__34000 = cljs.core.PersistentVector.EMPTY;
var G__34000__$1 = ((!((c == null)))?cljs.core.conj.call(null,G__34000,c):G__34000);
if(!((ref__$1 == null))){
return cljs.core.conj.call(null,G__34000__$1,ref__$1);
} else {
return G__34000__$1;
}
})();
om.next.protocols.queue_BANG_.call(null,r,cljs.core.into.call(null,q,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,v)));

if(cljs.core.empty_QMARK_.call(null,snds)){
} else {
om.next.protocols.queue_sends_BANG_.call(null,r,snds);

om.next.schedule_sends_BANG_.call(null,r);
}

return v;
});
/**
 * Given a query expression annotate all mutations by adding a :mutator -> ident
 * entry to the metadata of each mutation expression in the query.
 */
om.next.annotate_mutations = (function om$next$annotate_mutations(tx,ident){
var annotate = (function om$next$annotate_mutations_$_annotate(expr,ident__$1){
var G__34009 = expr;
if(om.util.mutation_QMARK_.call(null,expr)){
return cljs.core.vary_meta.call(null,G__34009,cljs.core.assoc,new cljs.core.Keyword(null,"mutator","mutator",-1326825366),ident__$1);
} else {
return G__34009;
}
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,(function (p1__34001_SHARP_){
return annotate.call(null,p1__34001_SHARP_,ident);
})),tx);
});
om.next.some_iquery_QMARK_ = (function om$next$some_iquery_QMARK_(c){
var c__$1 = c;
while(true){
if((c__$1 == null)){
return false;
} else {
if(om.next.iquery_QMARK_.call(null,c__$1)){
return true;
} else {
var G__34010 = om.next.parent.call(null,c__$1);
c__$1 = G__34010;
continue;

}
}
break;
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args34011 = [];
var len__21324__auto___34021 = arguments.length;
var i__21325__auto___34022 = (0);
while(true){
if((i__21325__auto___34022 < len__21324__auto___34021)){
args34011.push((arguments[i__21325__auto___34022]));

var G__34023 = (i__21325__auto___34022 + (1));
i__21325__auto___34022 = G__34023;
continue;
} else {
}
break;
}

var G__34013 = args34011.length;
switch (G__34013) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34011.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__20141__auto__ = om.next.component_QMARK_.call(null,x);
if(or__20141__auto__){
return or__20141__auto__;
} else {
return om.next.reconciler_QMARK_.call(null,x);
}
})())){
} else {
throw (new Error("Assert failed: (or (component? x) (reconciler? x))"));
}

if(cljs.core.vector_QMARK_.call(null,tx)){
} else {
throw (new Error("Assert failed: (vector? tx)"));
}

var tx__$1 = (function (){var G__34014 = tx;
if((function (){var and__20129__auto__ = om.next.component_QMARK_.call(null,x);
if(and__20129__auto__){
if(!((x == null))){
if((false) || (x.om$next$Ident$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.next.Ident,x);
}
} else {
return and__20129__auto__;
}
})()){
return om.next.annotate_mutations.call(null,G__34014,om.next.get_ident.call(null,x));
} else {
return G__34014;
}
})();
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))){
return om.next.transact_STAR_.call(null,x,null,null,tx__$1);
} else {
if(!(om.next.iquery_QMARK_.call(null,x))){
var l__32650__auto___34025 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_(om.next.some_iquery_QMARK_.call(null,x))){
} else {
goog.log.error(l__32650__auto___34025,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("transact! should be called on a component"),cljs.core.str("that implements IQuery or has a parent that"),cljs.core.str("implements IQuery")].join(''))].join(''));
}

return om.next.transact_STAR_.call(null,om.next.get_reconciler.call(null,x),null,null,tx__$1);
} else {
var p = om.next.parent.call(null,x);
var x__$1 = x;
var tx__$2 = tx__$1;
while(true){
if((p == null)){
var r = om.next.get_reconciler.call(null,x__$1);
return om.next.transact_STAR_.call(null,r,x__$1,null,om.next.transform_reads.call(null,r,tx__$2));
} else {
var vec__34017 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept.call(null,p,tx__$2)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$2], null));
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__34017,(0),null);
var tx__$3 = cljs.core.nth.call(null,vec__34017,(1),null);
var G__34026 = om.next.parent.call(null,p);
var G__34027 = x_SINGLEQUOTE_;
var G__34028 = tx__$3;
p = G__34026;
x__$1 = G__34027;
tx__$2 = G__34028;
continue;
}
break;
}

}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_.call(null,r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__34029){
var map__34032 = p__34029;
var map__34032__$1 = ((((!((map__34032 == null)))?((((map__34032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34032):map__34032);
var opts = map__34032__$1;
var read = cljs.core.get.call(null,map__34032__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__34032__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
if(cljs.core.map_QMARK_.call(null,opts)){
} else {
throw (new Error("Assert failed: (map? opts)"));
}

return om.next.impl.parser.parser.call(null,opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast.call(null,query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.call(null,query_ast,true);
});
/**
 * Cascades a query up the classpath. class-path->query is a map of classpaths
 * to their queries. classpath is the classpath where we start cascading (typically
 * the direct parent's classpath of the component changing query). data-path is
 * the data path in the classpath's query to the new query. new-query is the
 * query to be applied to the classpaths. union-keys are any keys into union
 * queries found during index building; they are used to access union queries
 * when cascading the classpath, and to generate the classpaths' rendered-paths,
 * which skip these keys.
 */
om.next.cascade_query = (function om$next$cascade_query(class_path__GT_query,classpath,data_path,new_query,union_keys){
var cp = classpath;
var data_path__$1 = data_path;
var new_query__$1 = new_query;
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!(cljs.core.empty_QMARK_.call(null,cp))){
var rendered_data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys)),data_path__$1);
var filter_data_path = (function (){var G__34036 = rendered_data_path;
if(!(cljs.core.empty_QMARK_.call(null,rendered_data_path))){
return cljs.core.pop.call(null,G__34036);
} else {
return G__34036;
}
})();
var qs = cljs.core.filter.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path){
return (function (p1__34034_SHARP_){
return cljs.core._EQ_.call(null,filter_data_path,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__34034_SHARP_),filter_data_path));
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path))
,cljs.core.get.call(null,class_path__GT_query,cp));
var qs_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,((function (cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs){
return (function (q){
var new_query__$2 = (cljs.core.truth_((function (){var or__20141__auto__ = cljs.core.map_QMARK_.call(null,clojure.zip.node.call(null,q));
if(or__20141__auto__){
return or__20141__auto__;
} else {
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.peek.call(null,data_path__$1)], true),union_keys);
}
})())?(function (){var union_key = cljs.core.peek.call(null,data_path__$1);
return cljs.core.assoc.call(null,clojure.zip.node.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path)),union_key,new_query__$1);
})():new_query__$1);
return om.next.query_template.call(null,om.next.focus_query.call(null,om.next.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q),rendered_data_path),new_query__$2),filter_data_path),filter_data_path);
});})(cp,data_path__$1,new_query__$1,ret,rendered_data_path,filter_data_path,qs))
),qs);
var G__34037 = cljs.core.pop.call(null,cp);
var G__34038 = cljs.core.pop.call(null,data_path__$1);
var G__34039 = clojure.zip.node.call(null,cljs.core.first.call(null,qs_SINGLEQUOTE_));
var G__34040 = cljs.core.assoc.call(null,ret,cp,qs_SINGLEQUOTE_);
cp = G__34037;
data_path__$1 = G__34038;
new_query__$1 = G__34039;
ret = G__34040;
continue;
} else {
return ret;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var class_path__GT_query = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var rootq = om.next.get_query.call(null,x);
var class$ = (function (){var G__34048 = x;
if(om.next.component_QMARK_.call(null,x)){
return cljs.core.type.call(null,G__34048);
} else {
return G__34048;
}
})();
var get_dispatch_key = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$get_dispatch_key(prop){
var G__34108 = prop;
if((!(om.util.ident_QMARK_.call(null,prop))) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,prop),new cljs.core.Symbol(null,"_","_",-1201019570,null)))){
return cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast).call(null,G__34108);
} else {
return G__34108;
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath,union_expr,union_keys){
var l__32650__auto___34173 = om.next._STAR_logger_STAR_;
if((!(om.next.iquery_QMARK_.call(null,class$__$1))) || ((om.next.iquery_QMARK_.call(null,class$__$1)) && (!(cljs.core.empty_QMARK_.call(null,query))))){
} else {
goog.log.error(l__32650__auto___34173,[cljs.core.str("Invariant Violation"),cljs.core.str(((("build-index*" == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str("build-index*"),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("`IQuery` implementation must return a non-empty query."),cljs.core.str(" Check the `IQuery` implementation of component `"),cljs.core.str(((om.next.component_QMARK_.call(null,class$__$1))?class$__$1.constructor.displayName:class$__$1.prototype.constructor.displayName)),cljs.core.str("`.")].join(''))].join(''));
}

var recursive_QMARK_ = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__34137 = classpath;
if((!((class$__$1 == null))) && (cljs.core.not.call(null,recursive_QMARK_))){
return cljs.core.conj.call(null,G__34137,class$__$1);
} else {
return G__34137;
}
})();
var dp__GT_cs = cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.indexes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750)], null));
if(cljs.core.truth_(class$__$1)){
var focused_query_34174 = om.next.query_template.call(null,om.next.focus_query.call(null,rootq,path),path);
var cp_query_34175 = (function (){var G__34138 = focused_query_34174;
if((cljs.core.not_EQ_.call(null,clojure.zip.node.call(null,focused_query_34174),query)) && (cljs.core.not.call(null,recursive_QMARK_))){
return clojure.zip.replace.call(null,G__34138,query);
} else {
return G__34138;
}
})();
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cp_query_34175);
} else {
}

var recursive_join_QMARK_ = (function (){var and__20129__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__20129__auto__)){
var and__20129__auto____$1 = cljs.core.some.call(null,((function (and__20129__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (e){
var and__20129__auto____$1 = om.util.join_QMARK_.call(null,e);
if(cljs.core.truth_(and__20129__auto____$1)){
return !(om.util.recursion_QMARK_.call(null,om.util.join_value.call(null,e)));
} else {
return and__20129__auto____$1;
}
});})(and__20129__auto__,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,query);
if(cljs.core.truth_(and__20129__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__20129__auto____$1;
}
} else {
return and__20129__auto__;
}
})();
var recursive_union_QMARK_ = (function (){var and__20129__auto__ = recursive_QMARK_;
if(cljs.core.truth_(and__20129__auto__)){
var and__20129__auto____$1 = union_expr;
if(cljs.core.truth_(and__20129__auto____$1)){
return cljs.core._EQ_.call(null,cljs.core.distinct.call(null,path),path);
} else {
return and__20129__auto____$1;
}
} else {
return and__20129__auto__;
}
})();
if(cljs.core.truth_((function (){var or__20141__auto__ = cljs.core.not.call(null,recursive_QMARK_);
if(or__20141__auto__){
return or__20141__auto__;
} else {
var or__20141__auto____$1 = recursive_join_QMARK_;
if(cljs.core.truth_(or__20141__auto____$1)){
return or__20141__auto____$1;
} else {
return recursive_union_QMARK_;
}
}
})())){
if(cljs.core.vector_QMARK_.call(null,query)){
var map__34139 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__34139__$1 = ((((!((map__34139 == null)))?((((map__34139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34139):map__34139);
var props = cljs.core.get.call(null,map__34139__$1,false);
var joins = cljs.core.get.call(null,map__34139__$1,true);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (map__34139,map__34139__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__34041_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__34041_SHARP_,cljs.core.zipmap.call(null,cljs.core.map.call(null,get_dispatch_key,props),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.fromArray([class$__$1], true))));
});})(map__34139,map__34139__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

var seq__34141 = cljs.core.seq.call(null,joins);
var chunk__34142 = null;
var count__34143 = (0);
var i__34144 = (0);
while(true){
if((i__34144 < count__34143)){
var join = cljs.core._nth.call(null,chunk__34142,i__34144);
var vec__34145_34176 = om.util.join_entry.call(null,join);
var prop_34177 = cljs.core.nth.call(null,vec__34145_34176,(0),null);
var query_SINGLEQUOTE__34178 = cljs.core.nth.call(null,vec__34145_34176,(1),null);
var prop_dispatch_key_34179 = get_dispatch_key.call(null,prop_34177);
var recursion_QMARK__34180 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__34178);
var union_recursion_QMARK__34181 = (function (){var and__20129__auto__ = recursion_QMARK__34180;
if(and__20129__auto__){
return union_expr;
} else {
return and__20129__auto__;
}
})();
var query_SINGLEQUOTE__34182__$1 = ((recursion_QMARK__34180)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__34178);
var path_SINGLEQUOTE__34183 = cljs.core.conj.call(null,path,prop_34177);
var rendered_path_SINGLEQUOTE__34184 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__34183));
var cs_34185 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__34184);
var cascade_query_QMARK__34186 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_34185),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__34182__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_34185)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__34182__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__34187 = ((cascade_query_QMARK__34186)?om.next.get_query.call(null,cljs.core.first.call(null,cs_34185)):query_SINGLEQUOTE__34182__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__34141,chunk__34142,count__34143,i__34144,vec__34145_34176,prop_34177,query_SINGLEQUOTE__34178,prop_dispatch_key_34179,recursion_QMARK__34180,union_recursion_QMARK__34181,query_SINGLEQUOTE__34182__$1,path_SINGLEQUOTE__34183,rendered_path_SINGLEQUOTE__34184,cs_34185,cascade_query_QMARK__34186,query_SINGLEQUOTE__SINGLEQUOTE__34187,join,map__34139,map__34139__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__34042_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__34042_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_34179,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__34141,chunk__34142,count__34143,i__34144,vec__34145_34176,prop_34177,query_SINGLEQUOTE__34178,prop_dispatch_key_34179,recursion_QMARK__34180,union_recursion_QMARK__34181,query_SINGLEQUOTE__34182__$1,path_SINGLEQUOTE__34183,rendered_path_SINGLEQUOTE__34184,cs_34185,cascade_query_QMARK__34186,query_SINGLEQUOTE__SINGLEQUOTE__34187,join,map__34139,map__34139__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__34186) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__34182__$1,query_SINGLEQUOTE__SINGLEQUOTE__34187))){
var cp__GT_q_SINGLEQUOTE__34188 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__34183,query_SINGLEQUOTE__SINGLEQUOTE__34187,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__34188);
} else {
}

var class_SINGLEQUOTE__34189 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__34187));
if((recursion_QMARK__34180) && ((class_SINGLEQUOTE__34189 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__34189,query_SINGLEQUOTE__SINGLEQUOTE__34187,path_SINGLEQUOTE__34183,classpath__$1,((recursion_QMARK__34180)?union_expr:null),union_keys);
}

var G__34190 = seq__34141;
var G__34191 = chunk__34142;
var G__34192 = count__34143;
var G__34193 = (i__34144 + (1));
seq__34141 = G__34190;
chunk__34142 = G__34191;
count__34143 = G__34192;
i__34144 = G__34193;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__34141);
if(temp__6728__auto__){
var seq__34141__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34141__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__34141__$1);
var G__34194 = cljs.core.chunk_rest.call(null,seq__34141__$1);
var G__34195 = c__21044__auto__;
var G__34196 = cljs.core.count.call(null,c__21044__auto__);
var G__34197 = (0);
seq__34141 = G__34194;
chunk__34142 = G__34195;
count__34143 = G__34196;
i__34144 = G__34197;
continue;
} else {
var join = cljs.core.first.call(null,seq__34141__$1);
var vec__34148_34198 = om.util.join_entry.call(null,join);
var prop_34199 = cljs.core.nth.call(null,vec__34148_34198,(0),null);
var query_SINGLEQUOTE__34200 = cljs.core.nth.call(null,vec__34148_34198,(1),null);
var prop_dispatch_key_34201 = get_dispatch_key.call(null,prop_34199);
var recursion_QMARK__34202 = om.util.recursion_QMARK_.call(null,query_SINGLEQUOTE__34200);
var union_recursion_QMARK__34203 = (function (){var and__20129__auto__ = recursion_QMARK__34202;
if(and__20129__auto__){
return union_expr;
} else {
return and__20129__auto__;
}
})();
var query_SINGLEQUOTE__34204__$1 = ((recursion_QMARK__34202)?((!((union_expr == null)))?union_expr:query):query_SINGLEQUOTE__34200);
var path_SINGLEQUOTE__34205 = cljs.core.conj.call(null,path,prop_34199);
var rendered_path_SINGLEQUOTE__34206 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.set.call(null,union_keys),path_SINGLEQUOTE__34205));
var cs_34207 = cljs.core.get.call(null,dp__GT_cs,rendered_path_SINGLEQUOTE__34206);
var cascade_query_QMARK__34208 = (cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_34207),(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__34204__$1)),cljs.core.type.call(null,cljs.core.first.call(null,cs_34207)))) && (!(cljs.core.map_QMARK_.call(null,query_SINGLEQUOTE__34204__$1)));
var query_SINGLEQUOTE__SINGLEQUOTE__34209 = ((cascade_query_QMARK__34208)?om.next.get_query.call(null,cljs.core.first.call(null,cs_34207)):query_SINGLEQUOTE__34204__$1);
cljs.core.swap_BANG_.call(null,prop__GT_classes,((function (seq__34141,chunk__34142,count__34143,i__34144,vec__34148_34198,prop_34199,query_SINGLEQUOTE__34200,prop_dispatch_key_34201,recursion_QMARK__34202,union_recursion_QMARK__34203,query_SINGLEQUOTE__34204__$1,path_SINGLEQUOTE__34205,rendered_path_SINGLEQUOTE__34206,cs_34207,cascade_query_QMARK__34208,query_SINGLEQUOTE__SINGLEQUOTE__34209,join,seq__34141__$1,temp__6728__auto__,map__34139,map__34139__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__34042_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__34042_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_dispatch_key_34201,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false));
});})(seq__34141,chunk__34142,count__34143,i__34144,vec__34148_34198,prop_34199,query_SINGLEQUOTE__34200,prop_dispatch_key_34201,recursion_QMARK__34202,union_recursion_QMARK__34203,query_SINGLEQUOTE__34204__$1,path_SINGLEQUOTE__34205,rendered_path_SINGLEQUOTE__34206,cs_34207,cascade_query_QMARK__34208,query_SINGLEQUOTE__SINGLEQUOTE__34209,join,seq__34141__$1,temp__6728__auto__,map__34139,map__34139__$1,props,joins,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);

if((cascade_query_QMARK__34208) && (cljs.core.not_EQ_.call(null,query_SINGLEQUOTE__34204__$1,query_SINGLEQUOTE__SINGLEQUOTE__34209))){
var cp__GT_q_SINGLEQUOTE__34210 = om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1,path_SINGLEQUOTE__34205,query_SINGLEQUOTE__SINGLEQUOTE__34209,union_keys);
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__34210);
} else {
}

var class_SINGLEQUOTE__34211 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE__SINGLEQUOTE__34209));
if((recursion_QMARK__34202) && ((class_SINGLEQUOTE__34211 == null))){
} else {
om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__34211,query_SINGLEQUOTE__SINGLEQUOTE__34209,path_SINGLEQUOTE__34205,classpath__$1,((recursion_QMARK__34202)?union_expr:null),union_keys);
}

var G__34212 = cljs.core.next.call(null,seq__34141__$1);
var G__34213 = null;
var G__34214 = (0);
var G__34215 = (0);
seq__34141 = G__34212;
chunk__34142 = G__34213;
count__34143 = G__34214;
i__34144 = G__34215;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var seq__34151 = cljs.core.seq.call(null,query);
var chunk__34152 = null;
var count__34153 = (0);
var i__34154 = (0);
while(true){
if((i__34154 < count__34153)){
var vec__34155 = cljs.core._nth.call(null,chunk__34152,i__34154);
var prop = cljs.core.nth.call(null,vec__34155,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__34155,(1),null);
var path_SINGLEQUOTE__34216 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__34217 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_34218 = cljs.core.filter.call(null,((function (seq__34151,chunk__34152,count__34153,i__34154,path_SINGLEQUOTE__34216,class_SINGLEQUOTE__34217,vec__34155,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__34043_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__34217,cljs.core.type.call(null,p1__34043_SHARP_));
});})(seq__34151,chunk__34152,count__34153,i__34154,path_SINGLEQUOTE__34216,class_SINGLEQUOTE__34217,vec__34155,prop,query_SINGLEQUOTE_,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__34219 = (function (){var and__20129__auto__ = class_SINGLEQUOTE__34217;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_34218),(1));
} else {
return and__20129__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__34220 = (cljs.core.truth_(cascade_query_QMARK__34219)?om.next.get_query.call(null,cljs.core.first.call(null,cs_34218)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__20129__auto__ = cascade_query_QMARK__34219;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__34220);
} else {
return and__20129__auto__;
}
})())){
var qs_34221 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_34222 = cljs.core.first.call(null,qs_34221);
var qnode_34223 = clojure.zip.node.call(null,(function (){var G__34158 = q_34222;
if((class$__$1 == null)){
return om.next.query_template.call(null,G__34158,path);
} else {
return G__34158;
}
})());
var new_query_34224 = cljs.core.assoc.call(null,qnode_34223,prop,query_SINGLEQUOTE__SINGLEQUOTE__34220);
var q_SINGLEQUOTE__34225 = (function (){var G__34159 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_34222),path),new_query_34224);
if((class$__$1 == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__34159),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__34159;
}
})();
var qs_SINGLEQUOTE__34226 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__34225], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_34222], true)),qs_34221);
var cp__GT_q_SINGLEQUOTE__34227 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__34226], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__34225),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__34227);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__34217,query_SINGLEQUOTE__SINGLEQUOTE__34220,path_SINGLEQUOTE__34216,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__34228 = seq__34151;
var G__34229 = chunk__34152;
var G__34230 = count__34153;
var G__34231 = (i__34154 + (1));
seq__34151 = G__34228;
chunk__34152 = G__34229;
count__34153 = G__34230;
i__34154 = G__34231;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__34151);
if(temp__6728__auto__){
var seq__34151__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34151__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__34151__$1);
var G__34232 = cljs.core.chunk_rest.call(null,seq__34151__$1);
var G__34233 = c__21044__auto__;
var G__34234 = cljs.core.count.call(null,c__21044__auto__);
var G__34235 = (0);
seq__34151 = G__34232;
chunk__34152 = G__34233;
count__34153 = G__34234;
i__34154 = G__34235;
continue;
} else {
var vec__34160 = cljs.core.first.call(null,seq__34151__$1);
var prop = cljs.core.nth.call(null,vec__34160,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__34160,(1),null);
var path_SINGLEQUOTE__34236 = cljs.core.conj.call(null,path,prop);
var class_SINGLEQUOTE__34237 = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query_SINGLEQUOTE_));
var cs_34238 = cljs.core.filter.call(null,((function (seq__34151,chunk__34152,count__34153,i__34154,path_SINGLEQUOTE__34236,class_SINGLEQUOTE__34237,vec__34160,prop,query_SINGLEQUOTE_,seq__34151__$1,temp__6728__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__34043_SHARP_){
return cljs.core._EQ_.call(null,class_SINGLEQUOTE__34237,cljs.core.type.call(null,p1__34043_SHARP_));
});})(seq__34151,chunk__34152,count__34153,i__34154,path_SINGLEQUOTE__34236,class_SINGLEQUOTE__34237,vec__34160,prop,query_SINGLEQUOTE_,seq__34151__$1,temp__6728__auto__,recursive_join_QMARK_,recursive_union_QMARK_,recursive_QMARK_,classpath__$1,dp__GT_cs,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
,cljs.core.get.call(null,dp__GT_cs,path));
var cascade_query_QMARK__34239 = (function (){var and__20129__auto__ = class_SINGLEQUOTE__34237;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,cs_34238),(1));
} else {
return and__20129__auto__;
}
})();
var query_SINGLEQUOTE__SINGLEQUOTE__34240 = (cljs.core.truth_(cascade_query_QMARK__34239)?om.next.get_query.call(null,cljs.core.first.call(null,cs_34238)):query_SINGLEQUOTE_);
if(cljs.core.truth_((function (){var and__20129__auto__ = cascade_query_QMARK__34239;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not_EQ_.call(null,query_SINGLEQUOTE_,query_SINGLEQUOTE__SINGLEQUOTE__34240);
} else {
return and__20129__auto__;
}
})())){
var qs_34241 = cljs.core.get.call(null,cljs.core.deref.call(null,class_path__GT_query),classpath__$1);
var q_34242 = cljs.core.first.call(null,qs_34241);
var qnode_34243 = clojure.zip.node.call(null,(function (){var G__34163 = q_34242;
if((class$__$1 == null)){
return om.next.query_template.call(null,G__34163,path);
} else {
return G__34163;
}
})());
var new_query_34244 = cljs.core.assoc.call(null,qnode_34243,prop,query_SINGLEQUOTE__SINGLEQUOTE__34240);
var q_SINGLEQUOTE__34245 = (function (){var G__34164 = clojure.zip.replace.call(null,om.next.query_template.call(null,clojure.zip.root.call(null,q_34242),path),new_query_34244);
if((class$__$1 == null)){
return om.next.query_template.call(null,om.next.focus_query.call(null,clojure.zip.root.call(null,G__34164),cljs.core.pop.call(null,path)),cljs.core.pop.call(null,path));
} else {
return G__34164;
}
})();
var qs_SINGLEQUOTE__34246 = cljs.core.into.call(null,cljs.core.PersistentHashSet.fromArray([q_SINGLEQUOTE__34245], true),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([q_34242], true)),qs_34241);
var cp__GT_q_SINGLEQUOTE__34247 = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([classpath__$1,qs_SINGLEQUOTE__34246], true, false),om.next.cascade_query.call(null,cljs.core.deref.call(null,class_path__GT_query),cljs.core.pop.call(null,classpath__$1),path,clojure.zip.node.call(null,q_SINGLEQUOTE__34245),union_keys));
cljs.core.swap_BANG_.call(null,class_path__GT_query,cljs.core.merge,cp__GT_q_SINGLEQUOTE__34247);
} else {
}

om$next$build_index_STAR_.call(null,class_SINGLEQUOTE__34237,query_SINGLEQUOTE__SINGLEQUOTE__34240,path_SINGLEQUOTE__34236,classpath__$1,query,cljs.core.conj.call(null,union_keys,prop));

var G__34248 = cljs.core.next.call(null,seq__34151__$1);
var G__34249 = null;
var G__34250 = (0);
var G__34251 = (0);
seq__34151 = G__34248;
chunk__34152 = G__34249;
count__34153 = G__34250;
i__34154 = G__34251;
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
}
} else {
return null;
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_.call(null,class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.call(null,self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),cljs.core.deref.call(null,prop__GT_classes),new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cljs.core.deref.call(null,class_path__GT_query)], null));
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"index-component","index-component",-1258618905).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident.call(null,c,om.next.props.call(null,c));
var l__32650__auto___34252 = om.next._STAR_logger_STAR_;
if(om.util.ident_QMARK_.call(null,ident)){
} else {
goog.log.error(l__32650__auto___34252,[cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join(''));
}

return ident;
})():null);
if(!((ident == null))){
var G__34166 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__34166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__34166;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.type.call(null,c)], null),cljs.core.disj,c);
var data_path = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.number_QMARK_),om.next.path.call(null,c));
var indexes__$3 = cljs.core.update_in.call(null,new cljs.core.Keyword(null,"drop-component","drop-component",1805913749).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$2,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),data_path], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident.call(null,c,om.next.props.call(null,c)):null);
if(!((ident == null))){
var G__34168 = indexes__$3;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.call(null,G__34168,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident], null),cljs.core.disj,c);
} else {
return G__34168;
}
} else {
return indexes__$3;
}
});})(___$1))
);
});


om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = cljs.core.deref.call(null,self__.indexes);
if(om.next.component_QMARK_.call(null,k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__6726__auto__ = new cljs.core.Keyword(null,"ref->components","ref->components",-303587249).cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__6726__auto__)){
var cs = temp__6726__auto__;
return cs;
} else {
var cs = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),k], null),new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407));
if(!(cljs.core.keyword_identical_QMARK_.call(null,new cljs.core.Keyword("om.next","not-found","om.next/not-found",1869656407),cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prop->classes","prop->classes",515892717),k], null));
return cljs.core.transduce.call(null,cljs.core.map.call(null,((function (cs__$1,cs,temp__6726__auto__,indexes__$1,___$1){
return (function (p1__34044_SHARP_){
return cljs.core.get_in.call(null,indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),p1__34044_SHARP_], null));
});})(cs__$1,cs,temp__6726__auto__,indexes__$1,___$1))
),cljs.core.completing.call(null,cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}
}
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20811__auto__,k__20812__auto__){
var self__ = this;
var this__20811__auto____$1 = this;
return cljs.core._lookup.call(null,this__20811__auto____$1,k__20812__auto__,null);
});


om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20813__auto__,k34046,else__20814__auto__){
var self__ = this;
var this__20813__auto____$1 = this;
var G__34169 = (((k34046 instanceof cljs.core.Keyword))?k34046.fqn:null);
switch (G__34169) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34046,else__20814__auto__);

}
});


om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20825__auto__,writer__20826__auto__,opts__20827__auto__){
var self__ = this;
var this__20825__auto____$1 = this;
var pr_pair__20828__auto__ = ((function (this__20825__auto____$1){
return (function (keyval__20829__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20826__auto__,cljs.core.pr_writer,""," ","",opts__20827__auto__,keyval__20829__auto__);
});})(this__20825__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20826__auto__,pr_pair__20828__auto__,"#om.next.Indexer{",", ","}",opts__20827__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IIterable$ = true;


om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34045){
var self__ = this;
var G__34045__$1 = this;
return (new cljs.core.RecordIter((0),G__34045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20809__auto__){
var self__ = this;
var this__20809__auto____$1 = this;
return self__.__meta;
});


om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20805__auto__){
var self__ = this;
var this__20805__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20815__auto__){
var self__ = this;
var this__20815__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20806__auto__){
var self__ = this;
var this__20806__auto____$1 = this;
var h__20578__auto__ = self__.__hash;
if(!((h__20578__auto__ == null))){
return h__20578__auto__;
} else {
var h__20578__auto____$1 = cljs.core.hash_imap.call(null,this__20806__auto____$1);
self__.__hash = h__20578__auto____$1;

return h__20578__auto____$1;
}
});


om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20807__auto__,other__20808__auto__){
var self__ = this;
var this__20807__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20129__auto__ = other__20808__auto__;
if(cljs.core.truth_(and__20129__auto__)){
var and__20129__auto____$1 = (this__20807__auto____$1.constructor === other__20808__auto__.constructor);
if(and__20129__auto____$1){
return cljs.core.equiv_map.call(null,this__20807__auto____$1,other__20808__auto__);
} else {
return and__20129__auto____$1;
}
} else {
return and__20129__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20820__auto__,k__20821__auto__){
var self__ = this;
var this__20820__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"extfs","extfs",607041493),null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),null], null), null),k__20821__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20820__auto____$1),self__.__meta),k__20821__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20821__auto__)),null));
}
});


om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20818__auto__,k__20819__auto__,G__34045){
var self__ = this;
var this__20818__auto____$1 = this;
var pred__34170 = cljs.core.keyword_identical_QMARK_;
var expr__34171 = k__20819__auto__;
if(cljs.core.truth_(pred__34170.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545),expr__34171))){
return (new om.next.Indexer(G__34045,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34170.call(null,new cljs.core.Keyword(null,"extfs","extfs",607041493),expr__34171))){
return (new om.next.Indexer(self__.indexes,G__34045,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20819__auto__,G__34045),null));
}
}
});


om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20823__auto__){
var self__ = this;
var this__20823__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indexes","indexes",1496475545),self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"extfs","extfs",607041493),self__.extfs],null))], null),self__.__extmap));
});


om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20810__auto__,G__34045){
var self__ = this;
var this__20810__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__34045,self__.__extmap,self__.__hash));
});


om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20816__auto__,entry__20817__auto__){
var self__ = this;
var this__20816__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20817__auto__)){
return cljs.core._assoc.call(null,this__20816__auto____$1,cljs.core._nth.call(null,entry__20817__auto__,(0)),cljs.core._nth.call(null,entry__20817__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20816__auto____$1,entry__20817__auto__);
}
});


om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.indexes);
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"indexes","indexes",-1157960224,null),new cljs.core.Symbol(null,"extfs","extfs",-2047394276,null)], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__20847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__20847__auto__,writer__20848__auto__){
return cljs.core._write.call(null,writer__20848__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__34047){
return (new om.next.Indexer(new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(G__34047),new cljs.core.Keyword(null,"extfs","extfs",607041493).cljs$core$IFn$_invoke$arity$1(G__34047),null,cljs.core.dissoc.call(null,G__34047,new cljs.core.Keyword(null,"indexes","indexes",1496475545),new cljs.core.Keyword(null,"extfs","extfs",607041493)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args34254 = [];
var len__21324__auto___34257 = arguments.length;
var i__21325__auto___34258 = (0);
while(true){
if((i__21325__auto___34258 < len__21324__auto___34257)){
args34254.push((arguments[i__21325__auto___34258]));

var G__34259 = (i__21325__auto___34258 + (1));
i__21325__auto___34258 = G__34259;
continue;
} else {
}
break;
}

var G__34256 = args34254.length;
switch (G__34256) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34254.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index-component","index-component",-1258618905),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"drop-component","drop-component",1805913749),(function (indexes,component){
return indexes;
}),new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class->components","class->components",436435919),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"data-path->components","data-path->components",-1244619750),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),cljs.core.PersistentArrayMap.EMPTY], null)),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;

/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_(om.next.reconciler_QMARK_.call(null,reconciler))){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return om.next.protocols.key__GT_components.call(null,indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,om.next.protocols.key__GT_components.call(null,indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
return cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_(om.next.reconciler_QMARK_.call(null,x))?om.next.get_indexer.call(null,x):x);
var cp = ((om.next.component_QMARK_.call(null,y))?om.next.class_path.call(null,y):y);
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,clojure.zip.root),cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args34262 = [];
var len__21324__auto___34266 = arguments.length;
var i__21325__auto___34267 = (0);
while(true){
if((i__21325__auto___34267 < len__21324__auto___34266)){
args34262.push((arguments[i__21325__auto___34267]));

var G__34268 = (i__21325__auto___34267 + (1));
i__21325__auto___34267 = G__34268;
continue;
} else {
}
break;
}

var G__34264 = args34262.length;
switch (G__34264) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34262.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_.call(null,component)){
if((om.next.path.call(null,component) == null)){
return om.next.replace.call(null,cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),om.next.class_path.call(null,component)], null))),om.next.get_query.call(null,component));
} else {
return om.next.full_query.call(null,component,om.next.get_query.call(null,component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_.call(null,component)){
var xf = (function (){var G__34265 = cljs.core.remove.call(null,cljs.core.number_QMARK_);
if(om.next.recursive_class_path_QMARK_.call(null,component)){
return cljs.core.comp.call(null,cljs.core.distinct.call(null),G__34265);
} else {
return G__34265;
}
})();
var path_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,xf,om.next.path.call(null,component));
var cp = om.next.class_path.call(null,component);
var qs = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.next.get_indexer.call(null,om.next.get_reconciler.call(null,component))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class-path->query","class-path->query",-1222593700),cp], null));
if(!(cljs.core.empty_QMARK_.call(null,qs))){
var q = cljs.core.first.call(null,cljs.core.filter.call(null,((function (xf,path_SINGLEQUOTE_,cp,qs){
return (function (p1__34261_SHARP_){
return cljs.core._EQ_.call(null,path_SINGLEQUOTE_,om.next.focus__GT_path.call(null,clojure.zip.root.call(null,p1__34261_SHARP_),path_SINGLEQUOTE_));
});})(xf,path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace.call(null,q,query);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("om.next","no-queries","om.next/no-queries",2125033807)], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;

om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_.call(null,query)){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident.call(null,class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.call(null,om$next$normalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,ident)),data,refs,union_seen),cljs.core.assoc,new cljs.core.Keyword("om","tag","om/tag",-1290356769),cljs.core.first.call(null,ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_.call(null,data)){
return data;
} else {
var q = cljs.core.seq.call(null,query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first.call(null,q);
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var vec__34286 = om.util.join_entry.call(null,expr);
var k = cljs.core.nth.call(null,vec__34286,(0),null);
var sel = cljs.core.nth.call(null,vec__34286,(1),null);
var recursive_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var union_entry = ((om.util.union_QMARK_.call(null,expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,sel__$1));
var v = cljs.core.get.call(null,data,k);
if((recursive_QMARK_) && (om.util.ident_QMARK_.call(null,v))){
var G__34297 = cljs.core.next.call(null,q);
var G__34298 = ret;
q = G__34297;
ret = G__34298;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,v)){
var x = om$next$normalize_STAR_.call(null,sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident.call(null,class$,v);
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,i),cljs.core.second.call(null,i)], null),cljs.core.merge,x);

var G__34299 = cljs.core.next.call(null,q);
var G__34300 = cljs.core.assoc.call(null,ret,k,i);
q = G__34299;
ret = G__34300;
continue;
} else {
var G__34301 = cljs.core.next.call(null,q);
var G__34302 = cljs.core.assoc.call(null,ret,k,x);
q = G__34301;
ret = G__34302;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,v)){
var xs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__34270_SHARP_){
return om$next$normalize_STAR_.call(null,sel__$1,p1__34270_SHARP_,refs,union_entry);
});})(q,ret,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (q,ret,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__34272_SHARP_){
return om.next.ident.call(null,class$,p1__34272_SHARP_);
});})(q,ret,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_.call(null,sel__$1)){
if(cljs.core.empty_QMARK_.call(null,is)){
} else {
cljs.core.swap_BANG_.call(null,refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst.call(null,is)], null),((function (q,ret,is,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ys){
return cljs.core.merge_with.call(null,cljs.core.merge,ys,cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs.core.second,is),xs));
});})(q,ret,is,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.call(null,refs,((function (q,ret,is,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.call(null,((function (q,ret,is,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__34293){
var vec__34294 = p__34293;
var i = cljs.core.nth.call(null,vec__34294,(0),null);
var x = cljs.core.nth.call(null,vec__34294,(1),null);
return cljs.core.update_in.call(null,ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.call(null,cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__34286,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__34303 = cljs.core.next.call(null,q);
var G__34304 = cljs.core.assoc.call(null,ret,k,is);
q = G__34303;
ret = G__34304;
continue;
} else {
var G__34305 = cljs.core.next.call(null,q);
var G__34306 = cljs.core.assoc.call(null,ret,k,xs);
q = G__34305;
ret = G__34306;
continue;
}
} else {
if((v == null)){
var G__34307 = cljs.core.next.call(null,q);
var G__34308 = ret;
q = G__34307;
ret = G__34308;
continue;
} else {
var G__34309 = cljs.core.next.call(null,q);
var G__34310 = cljs.core.assoc.call(null,ret,k,v);
q = G__34309;
ret = G__34310;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_.call(null,expr))?cljs.core.first.call(null,expr):expr);
var v = cljs.core.get.call(null,data,k);
if((v == null)){
var G__34311 = cljs.core.next.call(null,q);
var G__34312 = ret;
q = G__34311;
ret = G__34312;
continue;
} else {
var G__34313 = cljs.core.next.call(null,q);
var G__34314 = cljs.core.assoc.call(null,ret,k,v);
q = G__34313;
ret = G__34314;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args34315 = [];
var len__21324__auto___34318 = arguments.length;
var i__21325__auto___34319 = (0);
while(true){
if((i__21325__auto___34319 < len__21324__auto___34318)){
args34315.push((arguments[i__21325__auto___34319]));

var G__34320 = (i__21325__auto___34319 + (1));
i__21325__auto___34319 = G__34320;
continue;
} else {
}
break;
}

var G__34317 = args34315.length;
switch (G__34317) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34315.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.call(null,x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var x__$1 = ((cljs.core.vector_QMARK_.call(null,x))?x:om.next.get_query.call(null,x));
var ret = om.next.normalize_STAR_.call(null,x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = cljs.core.deref.call(null,refs);
return cljs.core.assoc.call(null,cljs.core.merge.call(null,ret,refs_SINGLEQUOTE_),new cljs.core.Keyword("om.next","tables","om.next/tables",1677536335),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.keys.call(null,refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta.call(null,ret,cljs.core.deref.call(null,refs));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;

om.next.sift_idents = (function om$next$sift_idents(res){
var map__34325 = cljs.core.group_by.call(null,(function (p1__34322_SHARP_){
return cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,p1__34322_SHARP_));
}),res);
var map__34325__$1 = ((((!((map__34325 == null)))?((((map__34325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34325):map__34325);
var idents = cljs.core.get.call(null,map__34325__$1,true);
var rest = cljs.core.get.call(null,map__34325__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
if(!(cljs.core.empty_QMARK_.call(null,om.next.focus_query.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))))){
var pos = om.next.query_template.call(null,q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node.call(null,pos);
var node_SINGLEQUOTE_ = (function (){var G__34328 = node;
if(typeof node === 'number'){
return (G__34328 - (1));
} else {
return G__34328;
}
})();
return om.next.replace.call(null,pos,node_SINGLEQUOTE_);
} else {
return q;
}
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__34333){
var vec__34334 = p__34333;
var k = cljs.core.nth.call(null,vec__34334,(0),null);
var q = cljs.core.nth.call(null,vec__34334,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth.call(null,q,recursion_key)], null);
}),union_expr));
});
om.next.mappable_ident_QMARK_ = (function om$next$mappable_ident_QMARK_(refs,ident){
return (om.util.ident_QMARK_.call(null,ident)) && (cljs.core.contains_QMARK_.call(null,refs,cljs.core.first.call(null,ident)));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
var union_recur_QMARK_ = (function (){var and__20129__auto__ = union_expr;
if(cljs.core.truth_(and__20129__auto__)){
return recurse_key;
} else {
return and__20129__auto__;
}
})();
var recur_ident = (cljs.core.truth_(union_recur_QMARK_)?data:null);
var data__$1 = (function (){var data__$1 = data;
while(true){
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,data__$1))){
var G__34384 = cljs.core.get_in.call(null,refs,map_ident.call(null,data__$1));
data__$1 = G__34384;
continue;
} else {
return data__$1;
}
break;
}
})();
if(cljs.core.vector_QMARK_.call(null,data__$1)){
var step = ((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (ident){
if(cljs.core.not.call(null,om.next.mappable_ident_QMARK_.call(null,refs,ident))){
if(cljs.core._EQ_.call(null,query,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null))){
return ident;
} else {
var map__34362 = cljs.core.group_by.call(null,om.util.join_QMARK_,query);
var map__34362__$1 = ((((!((map__34362 == null)))?((((map__34362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34362):map__34362);
var props = cljs.core.get.call(null,map__34362__$1,false);
var joins = cljs.core.get.call(null,map__34362__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__34362,map__34362__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__34337_SHARP_){
var G__34364 = p1__34337_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__34337_SHARP_)){
return cljs.core.first.call(null,G__34364);
} else {
return G__34364;
}
});})(map__34362,map__34362__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var vec__34365 = om.util.join_entry.call(null,join);
var key = cljs.core.nth.call(null,vec__34365,(0),null);
var sel = cljs.core.nth.call(null,vec__34365,(1),null);
var v = cljs.core.get.call(null,ident,key);
var G__34385 = cljs.core.next.call(null,joins__$1);
var G__34386 = cljs.core.assoc.call(null,ret,key,om$next$denormalize_STAR_.call(null,sel,v,refs,map_ident,idents_seen,union_expr,recurse_key));
joins__$1 = G__34385;
ret = G__34386;
continue;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,ident,props__$1),ret);
}
break;
}
}
} else {
var ident_SINGLEQUOTE_ = cljs.core.get_in.call(null,refs,map_ident.call(null,ident));
var query__$1 = (function (){var G__34368 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__34368,recurse_key);
} else {
return G__34368;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__34369 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth.call(null,G__34369,recurse_key);
} else {
return G__34369;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__34370 = query__$1;
if(cljs.core.map_QMARK_.call(null,query__$1)){
return cljs.core.get.call(null,G__34370,cljs.core.first.call(null,ident));
} else {
return G__34370;
}
})();
return om$next$denormalize_STAR_.call(null,query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
}
});})(union_recur_QMARK_,recur_ident,data__$1))
;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,step),data__$1);
} else {
if(cljs.core.truth_((function (){var and__20129__auto__ = cljs.core.map_QMARK_.call(null,query);
if(and__20129__auto__){
return union_recur_QMARK_;
} else {
return and__20129__auto__;
}
})())){
return om$next$denormalize_STAR_.call(null,cljs.core.get.call(null,query,cljs.core.first.call(null,recur_ident)),data__$1,refs,map_ident,idents_seen,union_expr,recurse_key);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),query)){
return data__$1;
} else {
var map__34371 = cljs.core.group_by.call(null,((function (union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__34338_SHARP_){
var or__20141__auto__ = om.util.join_QMARK_.call(null,p1__34338_SHARP_);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return (om.util.ident_QMARK_.call(null,p1__34338_SHARP_)) || ((cljs.core.seq_QMARK_.call(null,p1__34338_SHARP_)) && (om.util.ident_QMARK_.call(null,cljs.core.first.call(null,p1__34338_SHARP_))));
}
});})(union_recur_QMARK_,recur_ident,data__$1))
,query);
var map__34371__$1 = ((((!((map__34371 == null)))?((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34371):map__34371);
var props = cljs.core.get.call(null,map__34371__$1,false);
var joins = cljs.core.get.call(null,map__34371__$1,true);
var props__$1 = cljs.core.mapv.call(null,((function (map__34371,map__34371__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1){
return (function (p1__34339_SHARP_){
var G__34373 = p1__34339_SHARP_;
if(cljs.core.seq_QMARK_.call(null,p1__34339_SHARP_)){
return cljs.core.first.call(null,G__34373);
} else {
return G__34373;
}
});})(map__34371,map__34371__$1,props,joins,union_recur_QMARK_,recur_ident,data__$1))
,props);
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__34377 = join;
if(cljs.core.seq_QMARK_.call(null,join)){
return cljs.core.first.call(null,G__34377);
} else {
return G__34377;
}
})();
var join__$2 = (function (){var G__34378 = join__$1;
if(om.util.ident_QMARK_.call(null,join__$1)){
return cljs.core.PersistentHashMap.fromArrays([G__34378],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__34378;
}
})();
var vec__34374 = om.util.join_entry.call(null,join__$2);
var key = cljs.core.nth.call(null,vec__34374,(0),null);
var sel = cljs.core.nth.call(null,vec__34374,(1),null);
var recurse_QMARK_ = om.util.recursion_QMARK_.call(null,sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = ((om.util.ident_QMARK_.call(null,key))?((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.second.call(null,key)))?cljs.core.get.call(null,refs,cljs.core.first.call(null,key)):cljs.core.get_in.call(null,refs,map_ident.call(null,key))):cljs.core.get.call(null,data__$1,key));
var key__$1 = (function (){var G__34379 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__34379);
} else {
return G__34379;
}
})();
var v__$1 = (cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,v))?(function (){var v__$1 = v;
while(true){
var next = cljs.core.get_in.call(null,refs,map_ident.call(null,v__$1));
if(cljs.core.truth_(om.next.mappable_ident_QMARK_.call(null,refs,next))){
var G__34387 = next;
v__$1 = G__34387;
continue;
} else {
return map_ident.call(null,v__$1);
}
break;
}
})():v);
var limit = ((typeof sel === 'number')?sel:new cljs.core.Keyword(null,"none","none",1333468478));
var union_entry = ((om.util.union_QMARK_.call(null,join__$2))?sel:((recurse_QMARK_)?union_expr:null));
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth.call(null,query,key__$1)):(cljs.core.truth_((function (){var and__20129__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__20129__auto__)){
return om.util.union_QMARK_.call(null,join__$2);
} else {
return and__20129__auto__;
}
})())?cljs.core.get.call(null,sel,cljs.core.first.call(null,v__$1)):(((om.util.ident_QMARK_.call(null,key__$1)) && (om.util.union_QMARK_.call(null,join__$2)))?cljs.core.get.call(null,sel,cljs.core.first.call(null,key__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,cljs.core.get.call(null,idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"none","none",1333468478),limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__20129__auto__ = om.next.mappable_ident_QMARK_.call(null,refs,v__$1);
if(cljs.core.truth_(and__20129__auto__)){
return recurse_QMARK_;
} else {
return and__20129__auto__;
}
})())?cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.call(null,(0),limit)){
var G__34388 = cljs.core.next.call(null,joins__$1);
var G__34389 = ret;
joins__$1 = G__34388;
ret = G__34389;
continue;
} else {
if(graph_loop_QMARK_){
var G__34390 = cljs.core.next.call(null,joins__$1);
var G__34391 = ret;
joins__$1 = G__34390;
ret = G__34391;
continue;
} else {
if((v__$1 == null)){
var G__34392 = cljs.core.next.call(null,joins__$1);
var G__34393 = ret;
joins__$1 = G__34392;
ret = G__34393;
continue;
} else {
var G__34394 = cljs.core.next.call(null,joins__$1);
var G__34395 = cljs.core.assoc.call(null,ret,key__$1,om$next$denormalize_STAR_.call(null,sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__34394;
ret = G__34395;
continue;

}
}
}
} else {
var temp__6726__auto__ = cljs.core.some.call(null,((function (joins__$1,ret,map__34371,map__34371__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1){
return (function (p__34380){
var vec__34381 = p__34380;
var k = cljs.core.nth.call(null,vec__34381,(0),null);
var identset = cljs.core.nth.call(null,vec__34381,(1),null);
if(cljs.core.contains_QMARK_.call(null,identset,cljs.core.get.call(null,data__$1,k))){
return cljs.core.get_in.call(null,idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-ident","last-ident",534500972),k], null));
} else {
return null;
}
});})(joins__$1,ret,map__34371,map__34371__$1,props,joins,props__$1,union_recur_QMARK_,recur_ident,data__$1))
,cljs.core.dissoc.call(null,idents_seen,new cljs.core.Keyword(null,"last-ident","last-ident",534500972)));
if(cljs.core.truth_(temp__6726__auto__)){
var looped_key = temp__6726__auto__;
return looped_key;
} else {
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,data__$1,props__$1),ret);
}
}
break;
}
}

}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args34396 = [];
var len__21324__auto___34399 = arguments.length;
var i__21325__auto___34400 = (0);
while(true){
if((i__21325__auto___34400 < len__21324__auto___34399)){
args34396.push((arguments[i__21325__auto___34400]));

var G__34401 = (i__21325__auto___34400 + (1));
i__21325__auto___34400 = G__34401;
continue;
} else {
}
break;
}

var G__34398 = args34396.length;
switch (G__34398) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34396.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
if(cljs.core.map_QMARK_.call(null,refs)){
} else {
throw (new Error("Assert failed: (map? refs)"));
}

return om.next.denormalize_STAR_.call(null,query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;

om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__34426){
var vec__34430 = p__34426;
var k = cljs.core.nth.call(null,vec__34430,(0),null);
var orig_paths = cljs.core.nth.call(null,vec__34430,(1),null);
var to_move = cljs.core.get.call(null,result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.call(null,((function (to_move,vec__34430,k,orig_paths){
return (function (p1__34403_SHARP_,p2__34404_SHARP_){
return cljs.core.assoc_in.call(null,p1__34403_SHARP_,cljs.core.conj.call(null,p2__34404_SHARP_,k),to_move);
});})(to_move,vec__34430,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.call(null,res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.call(null,step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join__$1)) === true;
});
if(cljs.core.truth_(om.util.join_QMARK_.call(null,join))){
if(cljs.core.truth_(query_root_QMARK_.call(null,join))){
return cljs.core.conj.call(null,result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.call(null,(function (p1__34433_SHARP_){
return om$next$move_roots.call(null,p1__34433_SHARP_,result_roots,cljs.core.conj.call(null,path,om.util.join_key.call(null,join)));
}),om.util.join_value.call(null,join));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521).cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.call(null,(cljs.core.truth_((function (){var and__20129__auto__ = om.util.join_QMARK_.call(null,expr);
if(cljs.core.truth_(and__20129__auto__)){
return (!(om.util.union_QMARK_.call(null,expr))) && (!(cljs.core.list_QMARK_.call(null,expr)));
} else {
return and__20129__auto__;
}
})())?(function (){var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var q = (function (){var or__20141__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.util.recursion_QMARK_.call(null,q))?q:((om.util.recursion_QMARK_.call(null,jv))?jv:om$next$merge_joins.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,q,jv)))
));
return cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450)], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.call(null,res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370)], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521)], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"elements-seen","elements-seen",723482521),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370),cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.call(null,step,init,query);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,new cljs.core.Keyword(null,"not-mergeable","not-mergeable",-291093370).cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.call(null,((function (init,res){
return (function (p__34438){
var vec__34439 = p__34438;
var jkey = cljs.core.nth.call(null,vec__34439,(0),null);
var jsel = cljs.core.nth.call(null,vec__34439,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,new cljs.core.Keyword(null,"query-by-join","query-by-join",-131270450).cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots.call(null,expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_.call(null,roots)){
return retain.call(null,expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__34463){
var vec__34467 = p__34463;
var expr = cljs.core.nth.call(null,vec__34467,(0),null);
var path = cljs.core.nth.call(null,vec__34467,(1),null);
if(cljs.core.empty_QMARK_.call(null,path)){
return rewrites;
} else {
return cljs.core.update_in.call(null,rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.util.join_key.call(null,expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.call(null,reroot,query);
var query__$1 = om.next.merge_joins.call(null,cljs.core.mapv.call(null,cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.call(null,rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),query__$1,new cljs.core.Keyword(null,"rewrite","rewrite",870487388),cljs.core.partial.call(null,om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__34487 = config;
var map__34487__$1 = ((((!((map__34487 == null)))?((((map__34487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34487):map__34487);
var merge_ident = cljs.core.get.call(null,map__34487__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862));
var indexer = cljs.core.get.call(null,map__34487__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315));
var ident_joins = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (map__34487,map__34487__$1,merge_ident,indexer){
return (function (p1__34470_SHARP_){
var and__20129__auto__ = om.util.join_QMARK_.call(null,p1__34470_SHARP_);
if(cljs.core.truth_(and__20129__auto__)){
return om.util.ident_QMARK_.call(null,om.util.join_key.call(null,p1__34470_SHARP_));
} else {
return and__20129__auto__;
}
});})(map__34487,map__34487__$1,merge_ident,indexer))
,query));
var step = ((function (map__34487,map__34487__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__34496){
var vec__34500 = p__34496;
var ident = cljs.core.nth.call(null,vec__34500,(0),null);
var props = cljs.core.nth.call(null,vec__34500,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__20141__auto__ = cljs.core.get.call(null,ident_joins,ident);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return om.next.ref__GT_any.call(null,indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.call(null,c_or_q,props);
var refs__$1 = cljs.core.meta.call(null,props_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_),refs__$1);
} else {
return merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props);
}
});})(map__34487,map__34487__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.call(null,step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__34506 = om.next.sift_idents.call(null,res);
var idts = cljs.core.nth.call(null,vec__34506,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__34506,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.call(null,(function (){var or__20141__auto__ = query;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)));
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161).cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents.call(null,state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.symbol_QMARK_),cljs.core.keys.call(null,res)),new cljs.core.Keyword(null,"next","next",-117701485),om.next.merge_novelty_BANG_.call(null,reconciler,state,res,query),new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.reduce.call(null,cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.second),cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args34509 = [];
var len__21324__auto___34514 = arguments.length;
var i__21325__auto___34515 = (0);
while(true){
if((i__21325__auto___34515 < len__21324__auto___34514)){
args34509.push((arguments[i__21325__auto___34515]));

var G__34516 = (i__21325__auto___34515 + (1));
i__21325__auto___34515 = G__34516;
continue;
} else {
}
break;
}

var G__34511 = args34509.length;
switch (G__34511) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34509.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.call(null,reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(config);
var merge_STAR_ = new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(config);
var map__34512 = merge_STAR_.call(null,reconciler,cljs.core.deref.call(null,state),delta,query);
var map__34512__$1 = ((((!((map__34512 == null)))?((((map__34512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34512):map__34512);
var keys = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var next = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"next","next",-117701485));
var tempids = cljs.core.get.call(null,map__34512__$1,new cljs.core.Keyword(null,"tempids","tempids",1767509089));
om.next.protocols.queue_BANG_.call(null,reconciler,keys);

return cljs.core.reset_BANG_.call(null,state,(function (){var temp__6726__auto__ = new cljs.core.Keyword(null,"migrate","migrate",-207110743).cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__6726__auto__)){
var migrate = temp__6726__auto__;
return cljs.core.merge.call(null,cljs.core.select_keys.call(null,next,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null)),migrate.call(null,next,(function (){var or__20141__auto__ = query;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return om.next.get_query.call(null,new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler))));
}
})(),tempids,new cljs.core.Keyword(null,"id-key","id-key",-1881730044).cljs$core$IFn$_invoke$arity$1(config)));
} else {
return next;
}
})());
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__20811__auto__,k__20812__auto__){
var self__ = this;
var this__20811__auto____$1 = this;
return cljs.core._lookup.call(null,this__20811__auto____$1,k__20812__auto__,null);
});


om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__20813__auto__,k34523,else__20814__auto__){
var self__ = this;
var this__20813__auto____$1 = this;
var G__34525 = (((k34523 instanceof cljs.core.Keyword))?k34523.fqn:null);
switch (G__34525) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34523,else__20814__auto__);

}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queue","queue",1455835879)], null),cljs.core.into,ks);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765)], null),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202).cljs$core$IFn$_invoke$arity$1(self__.config),sends);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.empty_QMARK_.call(null,sends)){
return null;
} else {
cljs.core.swap_BANG_.call(null,self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),false);
});})(sends,this$__$1))
);

return new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (res,query){
return om.next.merge_BANG_.call(null,this$__$1,res,query);
});})(sends,this$__$1))
);
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var st = cljs.core.deref.call(null,self__.state);
var q = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"queued","queued",1701634607)], null),cljs.core.not);

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_.call(null,q)){
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
var cs = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (st,q,this$__$1){
return (function (p1__34519_SHARP_){
return om.next.protocols.key__GT_components.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),p1__34519_SHARP_);
});})(st,q,this$__$1))
),((function (st,q,this$__$1){
return (function (p1__34520_SHARP_,p2__34521_SHARP_){
return cljs.core.into.call(null,p1__34520_SHARP_,p2__34521_SHARP_);
});})(st,q,this$__$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__34526 = self__.config;
var map__34526__$1 = ((((!((map__34526 == null)))?((((map__34526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34526):map__34526);
var ui__GT_props = cljs.core.get.call(null,map__34526__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102));
var env = om.next.to_env.call(null,self__.config);
var root = new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
var props_change_QMARK_ = (om.next.protocols.basis_t.call(null,this$__$1) > om.next.t.call(null,root));
var seq__34528 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"optimize","optimize",-1912349448).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__34529 = null;
var count__34530 = (0);
var i__34531 = (0);
while(true){
if((i__34531 < count__34530)){
var c = cljs.core._nth.call(null,chunk__34529,i__34531);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_34539 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_34540 = ui__GT_props.call(null,env,c);
var next_props_34541 = om.next.computed.call(null,next_raw_props_34540,computed_34539);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK_)){
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_34541,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_34541,om.next.get_state.call(null,c)))){
if(!((next_props_34541 == null))){
om.next.update_component_BANG_.call(null,c,next_props_34541);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK_)){
var update_path_34542 = om.next.path.call(null,c);
if((update_path_34542 == null)){
} else {
var p_34543 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_34543)){
var update_path_SINGLEQUOTE__34544 = cljs.core.subvec.call(null,update_path_34542,cljs.core.count.call(null,om.next.path.call(null,p_34543)));
om.next.update_props_BANG_.call(null,p_34543,cljs.core.assoc_in.call(null,om.next.props.call(null,p_34543),update_path_SINGLEQUOTE__34544,next_raw_props_34540));

om.next.merge_pending_props_BANG_.call(null,p_34543);

var G__34545 = om.next.parent.call(null,p_34543);
p_34543 = G__34545;
continue;
} else {
}
break;
}
}
} else {
}
} else {
}
} else {
}

var G__34546 = seq__34528;
var G__34547 = chunk__34529;
var G__34548 = count__34530;
var G__34549 = (i__34531 + (1));
seq__34528 = G__34546;
chunk__34529 = G__34547;
count__34530 = G__34548;
i__34531 = G__34549;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__34528);
if(temp__6728__auto__){
var seq__34528__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34528__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__34528__$1);
var G__34550 = cljs.core.chunk_rest.call(null,seq__34528__$1);
var G__34551 = c__21044__auto__;
var G__34552 = cljs.core.count.call(null,c__21044__auto__);
var G__34553 = (0);
seq__34528 = G__34550;
chunk__34529 = G__34551;
count__34530 = G__34552;
i__34531 = G__34553;
continue;
} else {
var c = cljs.core.first.call(null,seq__34528__$1);
if(om.next.mounted_QMARK_.call(null,c)){
var computed_34554 = om.next.get_computed.call(null,om.next.props.call(null,c));
var next_raw_props_34555 = ui__GT_props.call(null,env,c);
var next_props_34556 = om.next.computed.call(null,next_raw_props_34555,computed_34554);
if((typeof c.componentWillReceiveProps !== 'undefined') && (om.next.iquery_QMARK_.call(null,root)) && (props_change_QMARK_)){
c.componentWillReceiveProps(({"omcljs$value": om.next.om_props.call(null,next_props_34556,om.next.protocols.basis_t.call(null,this$__$1))}));
} else {
}

if(cljs.core.truth_(om.next.should_update_QMARK_.call(null,c,next_props_34556,om.next.get_state.call(null,c)))){
if(!((next_props_34556 == null))){
om.next.update_component_BANG_.call(null,c,next_props_34556);
} else {
c.forceUpdate();
}

if((om.next.iquery_QMARK_.call(null,root)) && (cljs.core.not_EQ_.call(null,c,root)) && (props_change_QMARK_)){
var update_path_34557 = om.next.path.call(null,c);
if((update_path_34557 == null)){
} else {
var p_34558 = om.next.parent.call(null,c);
while(true){
if(cljs.core.some_QMARK_.call(null,p_34558)){
var update_path_SINGLEQUOTE__34559 = cljs.core.subvec.call(null,update_path_34557,cljs.core.count.call(null,om.next.path.call(null,p_34558)));
om.next.update_props_BANG_.call(null,p_34558,cljs.core.assoc_in.call(null,om.next.props.call(null,p_34558),update_path_SINGLEQUOTE__34559,next_raw_props_34555));

om.next.merge_pending_props_BANG_.call(null,p_34558);

var G__34560 = om.next.parent.call(null,p_34558);
p_34558 = G__34560;
continue;
} else {
}
break;
}
}
} else {
}
} else {
}
} else {
}

var G__34561 = cljs.core.next.call(null,seq__34528__$1);
var G__34562 = null;
var G__34563 = (0);
var G__34564 = (0);
seq__34528 = G__34561;
chunk__34529 = G__34562;
count__34530 = G__34563;
i__34531 = G__34564;
continue;
}
} else {
return null;
}
}
break;
}
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"queued","queued",1701634607).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"queued","queued",1701634607),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),true);

return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = cljs.core.atom.call(null,null);
var rctor = om.next.factory.call(null,root_class);
var guid = cljs.core.random_uuid.call(null);
if(om.next.iquery_QMARK_.call(null,root_class)){
om.next.protocols.index_root.call(null,new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__20129__auto__ = new cljs.core.Keyword(null,"normalize","normalize",-1904390051).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"normalized","normalized",-1887621663).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state)));
} else {
return and__20129__auto__;
}
})())){
var new_state_34565 = om.next.tree__GT_db.call(null,root_class,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
var refs_34566 = cljs.core.meta.call(null,new_state_34565);
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.merge.call(null,new_state_34565,refs_34566));

cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"normalized","normalized",-1887621663),true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_34532 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_34533 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34534 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.call(null,new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config))?new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null));

om.next._STAR_instrument_STAR_ = new cljs.core.Keyword(null,"instrument","instrument",-960698844).cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?new cljs.core.Keyword(null,"root-render","root-render",835981146).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,rctor.call(null,data),target):(((cljs.core.deref.call(null,ret) == null))?rctor.call(null,data):(function (){var temp__6728__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(temp__6728__auto__)){
var c_SINGLEQUOTE_ = temp__6728__auto__;
if(om.next.mounted_QMARK_.call(null,c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if(((cljs.core.deref.call(null,ret) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.assoc,new cljs.core.Keyword(null,"root","root",-448657453),c);

return cljs.core.reset_BANG_.call(null,ret,c);
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34534;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34533;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34532;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query.call(null,(function (){var or__20141__auto__ = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_.call(null,sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str("(or (nil? sel) (vector? sel))")].join('')));
}

if(!((sel == null))){
var env = om.next.to_env.call(null,self__.config);
var v = new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_.call(null,v)){
return null;
} else {
return renderf.call(null,v);
}
} else {
return renderf.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config)));
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"render","render",-1408033454),parsef,new cljs.core.Keyword(null,"root","root",-448657453),root_class,new cljs.core.Keyword(null,"remove","remove",-131428414),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__20141__auto__ = target;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.call(null,self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__34518_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__34518_SHARP_,new cljs.core.Keyword(null,"target","target",253001721)),new cljs.core.Keyword(null,"render","render",-1408033454)),new cljs.core.Keyword(null,"root","root",-448657453)),new cljs.core.Keyword(null,"remove","remove",-131428414));
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__20141__auto__ = target;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.call(null,self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"t","t",-1397832519)], null),cljs.core.inc);

if(!(om.next.iquery_QMARK_.call(null,root_class))){
return om.next.queue_render_BANG_.call(null,parsef);
} else {
return om.next.schedule_render_BANG_.call(null,this$__$1);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef.call(null);

var temp__6728__auto___34567 = om.next.get_query.call(null,(function (){var or__20141__auto__ = (function (){var and__20129__auto__ = target;
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.deref.call(null,ret);
} else {
return and__20129__auto__;
}
})();
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__6728__auto___34567)){
var sel_34568 = temp__6728__auto___34567;
var env_34569 = om.next.to_env.call(null,self__.config);
var snds_34570 = om.next.gather_sends.call(null,env_34569,sel_34568,new cljs.core.Keyword(null,"remotes","remotes",1132366312).cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_.call(null,snds_34570)){
} else {
var temp__6728__auto___34571__$1 = new cljs.core.Keyword(null,"send","send",-652151114).cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__6728__auto___34571__$1)){
var send_34572 = temp__6728__auto___34571__$1;
send_34572.call(null,snds_34570,((function (send_34572,temp__6728__auto___34571__$1,env_34569,snds_34570,sel_34568,temp__6728__auto___34567,renderf,parsef,ret,rctor,guid,this$__$1){
return (function() {
var om$next$send_cb = null;
var om$next$send_cb__1 = (function (res){
return om$next$send_cb.call(null,res,null);
});
var om$next$send_cb__2 = (function (res,query){
om.next.merge_BANG_.call(null,this$__$1,res,query);

return renderf.call(null,new cljs.core.Keyword(null,"parser","parser",-1543495310).cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_34569,sel_34568));
});
om$next$send_cb = function(res,query){
switch(arguments.length){
case 1:
return om$next$send_cb__1.call(this,res);
case 2:
return om$next$send_cb__2.call(this,res,query);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$send_cb.cljs$core$IFn$_invoke$arity$1 = om$next$send_cb__1;
om$next$send_cb.cljs$core$IFn$_invoke$arity$2 = om$next$send_cb__2;
return om$next$send_cb;
})()
;})(send_34572,temp__6728__auto___34571__$1,env_34569,snds_34570,sel_34568,temp__6728__auto___34567,renderf,parsef,ret,rctor,guid,this$__$1))
);
} else {
}
}
} else {
}

return cljs.core.deref.call(null,ret);
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var root = cljs.core.get.call(null,cljs.core.deref.call(null,self__.state),new cljs.core.Keyword(null,"root","root",-448657453));
if(om.next.iquery_QMARK_.call(null,root)){
var indexer = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(self__.config);
var c = cljs.core.first.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,indexer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class->components","class->components",436435919),root], null)));
return om.next.protocols.index_root.call(null,indexer,(function (){var or__20141__auto__ = c;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return root;
}
})());
} else {
return null;
}
});


om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__6728__auto__ = new cljs.core.Keyword(null,"remove","remove",-131428414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.state));
if(cljs.core.truth_(temp__6728__auto__)){
var remove = temp__6728__auto__;
return remove.call(null);
} else {
return null;
}
});


om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__20825__auto__,writer__20826__auto__,opts__20827__auto__){
var self__ = this;
var this__20825__auto____$1 = this;
var pr_pair__20828__auto__ = ((function (this__20825__auto____$1){
return (function (keyval__20829__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__20826__auto__,cljs.core.pr_writer,""," ","",opts__20827__auto__,keyval__20829__auto__);
});})(this__20825__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__20826__auto__,pr_pair__20828__auto__,"#om.next.Reconciler{",", ","}",opts__20827__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IIterable$ = true;


om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34522){
var self__ = this;
var G__34522__$1 = this;
return (new cljs.core.RecordIter((0),G__34522__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)], null),cljs.core._iterator.call(null,self__.__extmap)));
});


om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__20809__auto__){
var self__ = this;
var this__20809__auto____$1 = this;
return self__.__meta;
});


om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__20805__auto__){
var self__ = this;
var this__20805__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__20815__auto__){
var self__ = this;
var this__20815__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__20806__auto__){
var self__ = this;
var this__20806__auto____$1 = this;
var h__20578__auto__ = self__.__hash;
if(!((h__20578__auto__ == null))){
return h__20578__auto__;
} else {
var h__20578__auto____$1 = cljs.core.hash_imap.call(null,this__20806__auto____$1);
self__.__hash = h__20578__auto____$1;

return h__20578__auto____$1;
}
});


om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__20807__auto__,other__20808__auto__){
var self__ = this;
var this__20807__auto____$1 = this;
if(cljs.core.truth_((function (){var and__20129__auto__ = other__20808__auto__;
if(cljs.core.truth_(and__20129__auto__)){
var and__20129__auto____$1 = (this__20807__auto____$1.constructor === other__20808__auto__.constructor);
if(and__20129__auto____$1){
return cljs.core.equiv_map.call(null,this__20807__auto____$1,other__20808__auto__);
} else {
return and__20129__auto____$1;
}
} else {
return and__20129__auto__;
}
})())){
return true;
} else {
return false;
}
});


om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__20820__auto__,k__20821__auto__){
var self__ = this;
var this__20820__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"config","config",994861415),null,new cljs.core.Keyword(null,"state","state",-1988618099),null], null), null),k__20821__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__20820__auto____$1),self__.__meta),k__20821__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__20821__auto__)),null));
}
});


om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__20818__auto__,k__20819__auto__,G__34522){
var self__ = this;
var this__20818__auto____$1 = this;
var pred__34535 = cljs.core.keyword_identical_QMARK_;
var expr__34536 = k__20819__auto__;
if(cljs.core.truth_(pred__34535.call(null,new cljs.core.Keyword(null,"config","config",994861415),expr__34536))){
return (new om.next.Reconciler(G__34522,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34535.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__34536))){
return (new om.next.Reconciler(self__.config,G__34522,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__20819__auto__,G__34522),null));
}
}
});


om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__20823__auto__){
var self__ = this;
var this__20823__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"config","config",994861415),self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null))], null),self__.__extmap));
});


om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__20810__auto__,G__34522){
var self__ = this;
var this__20810__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__34522,self__.__extmap,self__.__hash));
});


om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__20816__auto__,entry__20817__auto__){
var self__ = this;
var this__20816__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__20817__auto__)){
return cljs.core._assoc.call(null,this__20816__auto____$1,cljs.core._nth.call(null,entry__20817__auto__,(0)),cljs.core._nth.call(null,entry__20817__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__20816__auto____$1,entry__20817__auto__);
}
});


om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(self__.config));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"config","config",-1659574354,null),new cljs.core.Symbol(null,"state","state",-348086572,null)], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__20847__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__20847__auto__,writer__20848__auto__){
return cljs.core._write.call(null,writer__20848__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__34524){
return (new om.next.Reconciler(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(G__34524),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__34524),null,cljs.core.dissoc.call(null,G__34524,new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"state","state",-1988618099)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__34573,c){
var map__34579 = p__34573;
var map__34579__$1 = ((((!((map__34579 == null)))?((((map__34579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34579):map__34579);
var env = map__34579__$1;
var parser = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var pathopt = cljs.core.get.call(null,map__34579__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149));
var ui = (((function (){var and__20129__auto__ = pathopt;
if(and__20129__auto__){
var and__20129__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__20129__auto____$1){
return om.next.iquery_QMARK_.call(null,c);
} else {
return and__20129__auto____$1;
}
} else {
return and__20129__auto__;
}
})())?(function (){var id = om.next.ident.call(null,c,om.next.props.call(null,c));
return cljs.core.get.call(null,parser.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query.call(null,c)], true, false)], null)),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.call(null,c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time.call(null);
var ui__$1 = parser.call(null,env,fq);
var e = cljs.core.system_time.call(null);
var temp__6728__auto___34584 = new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__6728__auto___34584)){
var l_34585 = temp__6728__auto___34584;
var dt_34586 = (e - s);
if(((16) < dt_34586)){
goog.log.warning(l_34585,[cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_34586),cljs.core.str(" msecs")].join(''));
} else {
}
} else {
}

return cljs.core.get_in.call(null,ui__$1,om.next.path.call(null,c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.call(null,tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_.call(null,a)){
return cljs.core.merge.call(null,a,b);
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args34587 = [];
var len__21324__auto___34634 = arguments.length;
var i__21325__auto___34635 = (0);
while(true){
if((i__21325__auto___34635 < len__21324__auto___34634)){
args34587.push((arguments[i__21325__auto___34635]));

var G__34636 = (i__21325__auto___34635 + (1));
i__21325__auto___34635 = G__34636;
continue;
} else {
}
break;
}

var G__34589 = args34587.length;
switch (G__34589) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34587.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.call(null,app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__34612){
var vec__34616 = p__34612;
var table = cljs.core.nth.call(null,vec__34616,(0),null);
var id = cljs.core.nth.call(null,vec__34616,(1),null);
return cljs.core.assoc.call(null,pure,table,cljs.core.dissoc.call(null,cljs.core.get.call(null,pure,table),id));
});
var step = (function om$next$step(pure,p__34619){
var vec__34627 = p__34619;
var old = cljs.core.nth.call(null,vec__34627,(0),null);
var vec__34630 = cljs.core.nth.call(null,vec__34627,(1),null);
var _ = cljs.core.nth.call(null,vec__34630,(0),null);
var id = cljs.core.nth.call(null,vec__34630,(1),null);
var new$ = vec__34630;
return cljs.core.assoc_in.call(null,dissoc_in.call(null,pure,old),new$,(function (){var G__34633 = cljs.core.merge.call(null,cljs.core.get_in.call(null,pure,old),cljs.core.get_in.call(null,pure,new$));
if(!((id_key == null))){
return cljs.core.assoc.call(null,G__34633,id_key,id);
} else {
return G__34633;
}
})());
});
if(!(cljs.core.empty_QMARK_.call(null,tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.call(null,step,app_state_pure,tempids);
return om.next.tree__GT_db.call(null,query,om.next.db__GT_tree.call(null,query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.call(null,tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;

om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (cljs.core.contains_QMARK_.call(null,x,new cljs.core.Keyword("om.next","error","om.next/error",-1841983205)));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_.call(null,res__$1)))?cljs.core.swap_BANG_.call(null,errs,((function (class$){
return (function (p1__34638_SHARP_){
return cljs.core.update_in.call(null,p1__34638_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident.call(null,class$,res__$1)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_.call(null,query__$1)){
if(cljs.core.vector_QMARK_.call(null,res__$1)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (class$,top_error_QMARK_,ret){
return (function (p1__34639_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,query__$1,p1__34639_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq.call(null,query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first.call(null,exprs);
var k = (function (){var k = om.next.expr__GT_key.call(null,expr);
var G__34650 = k;
if(om.util.unique_ident_QMARK_.call(null,k)){
return cljs.core.first.call(null,G__34650);
} else {
return G__34650;
}
})();
var data = cljs.core.get.call(null,res__$1,k);
if(om.util.mutation_QMARK_.call(null,expr)){
var mk = om.util.mutation_key.call(null,expr);
var ret_SINGLEQUOTE_ = cljs.core.get.call(null,res__$1,mk);
if(om.next.has_error_QMARK_.call(null,ret_SINGLEQUOTE_)){
var x = new cljs.core.Keyword(null,"mutator","mutator",-1326825366).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,expr));
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__34640_SHARP_){
return cljs.core.update_in.call(null,p1__34640_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(ret_SINGLEQUOTE_));
});})(exprs,ret__$1,x,mk,ret_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__34651 = cljs.core.next.call(null,exprs);
var G__34652 = ret__$1;
exprs = G__34651;
ret__$1 = G__34652;
continue;
} else {
var G__34653 = cljs.core.next.call(null,exprs);
var G__34654 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,mk,ret_SINGLEQUOTE_));
exprs = G__34653;
ret__$1 = G__34654;
continue;
}
} else {
if(om.util.union_QMARK_.call(null,expr)){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var class_SINGLEQUOTE_ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,jv));
if(!(cljs.core.vector_QMARK_.call(null,data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,data))),data,errs);
var G__34655 = cljs.core.next.call(null,exprs);
var G__34656 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__34655;
ret__$1 = G__34656;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__34641_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_.call(null,cljs.core.get.call(null,jv,cljs.core.first.call(null,om.next.ident.call(null,class_SINGLEQUOTE_,p1__34641_SHARP_))),p1__34641_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__34657 = cljs.core.next.call(null,exprs);
var G__34658 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__34657;
ret__$1 = G__34658;
continue;
}
} else {
if(cljs.core.truth_(om.util.join_QMARK_.call(null,expr))){
var jk = om.util.join_key.call(null,expr);
var jv = om.util.join_value.call(null,expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_.call(null,jv,data,errs);
var G__34659 = cljs.core.next.call(null,exprs);
var G__34660 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__34659;
ret__$1 = G__34660;
continue;
} else {
if((cljs.core.map_QMARK_.call(null,data)) && (om.next.has_error_QMARK_.call(null,data))){
cljs.core.swap_BANG_.call(null,errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__34642_SHARP_){
return cljs.core.update_in.call(null,p1__34642_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__20141__auto__ = (((class$ == null))?null:om.next.ident.call(null,class$,res__$1));
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword("om.next","error","om.next/error",-1841983205).cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__34661 = cljs.core.next.call(null,exprs);
var G__34662 = null;
exprs = G__34661;
ret__$1 = G__34662;
continue;
} else {
var G__34663 = cljs.core.next.call(null,exprs);
var G__34664 = (((ret__$1 == null))?null:cljs.core.assoc.call(null,ret__$1,k,data));
exprs = G__34663;
ret__$1 = G__34664;
continue;

}
}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret = extract_STAR_.call(null,query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tree","tree",-196312028),ret,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.deref.call(null,errs)], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__34670){
var map__34674 = p__34670;
var map__34674__$1 = ((((!((map__34674 == null)))?((((map__34674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34674):map__34674);
var config = map__34674__$1;
var root_render = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"root-render","root-render",835981146),((function (map__34674,map__34674__$1,config){
return (function (p1__34667_SHARP_,p2__34668_SHARP_){
return ReactDOM.render(p1__34667_SHARP_,p2__34668_SHARP_);
});})(map__34674,map__34674__$1,config))
);
var normalize = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"normalize","normalize",-1904390051));
var prune_tree = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431),om.next.default_extract_errors);
var pathopt = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),false);
var instrument = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var id_key = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"id-key","id-key",-1881730044));
var merge_sends = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),((function (map__34674,map__34674__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__34665_SHARP_,p2__34666_SHARP_){
return cljs.core.merge_with.call(null,cljs.core.into,p1__34665_SHARP_,p2__34666_SHARP_);
});})(map__34674,map__34674__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),om.next.default_merge_ident);
var remotes = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote","remote",-1593576576)], null));
var migrate = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"migrate","migrate",-207110743),om.next.default_migrate);
var easy_reads = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),true);
var history = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"history","history",-247395220),(100));
var state = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var merge = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"merge","merge",-1804319409),om.next.default_merge);
var shared_fn = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144));
var ui__GT_props = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),om.next.default_ui__GT_props);
var parser = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"parser","parser",-1543495310));
var indexer = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"indexer","indexer",-1774914315),om.next.indexer);
var root_unmount = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),((function (map__34674,map__34674__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__34669_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__34669_SHARP_);
});})(map__34674,map__34674__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"send","send",-652151114));
var merge_tree = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),om.next.default_merge_tree);
var shared = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"shared","shared",-384145993));
var optimize = cljs.core.get.call(null,map__34674__$1,new cljs.core.Keyword(null,"optimize","optimize",-1912349448),((function (map__34674,map__34674__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.call(null,om.next.depth,cs);
});})(map__34674,map__34674__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,easy_reads,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_.call(null,config)){
} else {
throw (new Error("Assert failed: (map? config)"));
}

var idxr = indexer.call(null);
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:cljs.core.atom.call(null,state));
var logger = ((cljs.core.contains_QMARK_.call(null,config,new cljs.core.Keyword(null,"logger","logger",-220675947)))?new cljs.core.Keyword(null,"logger","logger",-220675947).cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"pathopt","pathopt",-61073149),new cljs.core.Keyword(null,"id-key","id-key",-1881730044),new cljs.core.Keyword(null,"instrument","instrument",-960698844),new cljs.core.Keyword(null,"merge-ident","merge-ident",1040841862),new cljs.core.Keyword(null,"merge-sends","merge-sends",-1718434202),new cljs.core.Keyword(null,"remotes","remotes",1132366312),new cljs.core.Keyword(null,"migrate","migrate",-207110743),new cljs.core.Keyword(null,"easy-reads","easy-reads",803667467),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"shared-fn","shared-fn",-180260144),new cljs.core.Keyword(null,"parser","parser",-1543495310),new cljs.core.Keyword(null,"ui->props","ui->props",-237981102),new cljs.core.Keyword(null,"logger","logger",-220675947),new cljs.core.Keyword(null,"indexer","indexer",-1774914315),new cljs.core.Keyword(null,"root-unmount","root-unmount",1692900789),new cljs.core.Keyword(null,"send","send",-652151114),new cljs.core.Keyword(null,"shared","shared",-384145993),new cljs.core.Keyword(null,"merge-tree","merge-tree",-127861161),new cljs.core.Keyword(null,"optimize","optimize",-1912349448),new cljs.core.Keyword(null,"root-render","root-render",835981146),new cljs.core.Keyword(null,"normalize","normalize",-1904390051),new cljs.core.Keyword(null,"prune-tree","prune-tree",142138431)],[pathopt,id_key,instrument,merge_ident,merge_sends,remotes,migrate,easy_reads,om.next.cache.cache.call(null,history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__20141__auto__ = !(norm_QMARK_);
if(or__20141__auto__){
return or__20141__auto__;
} else {
return normalize;
}
})(),prune_tree]),cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"normalized","normalized",-1887621663),new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.Keyword(null,"queue","queue",1455835879),new cljs.core.Keyword(null,"sends-queued","sends-queued",-1276878712),new cljs.core.Keyword(null,"queued-sends","queued-sends",278114765),new cljs.core.Keyword(null,"queued","queued",1701634607),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"target","target",253001721)],[norm_QMARK_,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null])),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"root","root",-448657453));
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return cljs.core.get.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(reconciler)),new cljs.core.Keyword(null,"render","render",-1408033454)).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_.call(null,reconciler)){
} else {
throw (new Error("Assert failed: (reconciler? reconciler)"));
}

return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args34677 = [];
var len__21324__auto___34680 = arguments.length;
var i__21325__auto___34681 = (0);
while(true){
if((i__21325__auto___34681 < len__21324__auto___34680)){
args34677.push((arguments[i__21325__auto___34681]));

var G__34682 = (i__21325__auto___34681 + (1));
i__21325__auto___34681 = G__34682;
continue;
} else {
}
break;
}

var G__34679 = args34677.length;
switch (G__34679) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34677.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.call(null);
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.call(null,id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;

/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_.call(null,x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args34684 = [];
var len__21324__auto___34687 = arguments.length;
var i__21325__auto___34688 = (0);
while(true){
if((i__21325__auto___34688 < len__21324__auto___34687)){
args34684.push((arguments[i__21325__auto___34688]));

var G__34689 = (i__21325__auto___34688 + (1));
i__21325__auto___34688 = G__34689;
continue;
} else {
}
break;
}

var G__34686 = args34684.length;
switch (G__34686) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34684.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.call(null);
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.call(null,opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;

/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args34691 = [];
var len__21324__auto___34694 = arguments.length;
var i__21325__auto___34695 = (0);
while(true){
if((i__21325__auto___34695 < len__21324__auto___34694)){
args34691.push((arguments[i__21325__auto___34695]));

var G__34696 = (i__21325__auto___34695 + (1));
i__21325__auto___34695 = G__34696;
continue;
} else {
}
break;
}

var G__34693 = args34691.length;
switch (G__34693) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34691.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.call(null);
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.call(null,opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;

/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args34698 = [];
var len__21324__auto___34701 = arguments.length;
var i__21325__auto___34702 = (0);
while(true){
if((i__21325__auto___34702 < len__21324__auto___34701)){
args34698.push((arguments[i__21325__auto___34702]));

var G__34703 = (i__21325__auto___34702 + (1));
i__21325__auto___34702 = G__34703;
continue;
} else {
}
break;
}

var G__34700 = args34698.length;
switch (G__34700) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34698.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.call(null,expr,new cljs.core.Keyword(null,"remote","remote",-1593576576));
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,(function (){var x__21067__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__21067__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=next.js.map