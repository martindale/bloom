// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__21331__auto__ = [];
var len__21324__auto___28562 = arguments.length;
var i__21325__auto___28563 = (0);
while(true){
if((i__21325__auto___28563 < len__21324__auto___28562)){
args__21331__auto__.push((arguments[i__21325__auto___28563]));

var G__28564 = (i__21325__auto___28563 + (1));
i__21325__auto___28563 = G__28564;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((2) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__21332__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28554_28565 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28555_28566 = null;
var count__28556_28567 = (0);
var i__28557_28568 = (0);
while(true){
if((i__28557_28568 < count__28556_28567)){
var k_28569 = cljs.core._nth.call(null,chunk__28555_28566,i__28557_28568);
e.setAttribute(cljs.core.name.call(null,k_28569),cljs.core.get.call(null,attrs,k_28569));

var G__28570 = seq__28554_28565;
var G__28571 = chunk__28555_28566;
var G__28572 = count__28556_28567;
var G__28573 = (i__28557_28568 + (1));
seq__28554_28565 = G__28570;
chunk__28555_28566 = G__28571;
count__28556_28567 = G__28572;
i__28557_28568 = G__28573;
continue;
} else {
var temp__6728__auto___28574 = cljs.core.seq.call(null,seq__28554_28565);
if(temp__6728__auto___28574){
var seq__28554_28575__$1 = temp__6728__auto___28574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28554_28575__$1)){
var c__21044__auto___28576 = cljs.core.chunk_first.call(null,seq__28554_28575__$1);
var G__28577 = cljs.core.chunk_rest.call(null,seq__28554_28575__$1);
var G__28578 = c__21044__auto___28576;
var G__28579 = cljs.core.count.call(null,c__21044__auto___28576);
var G__28580 = (0);
seq__28554_28565 = G__28577;
chunk__28555_28566 = G__28578;
count__28556_28567 = G__28579;
i__28557_28568 = G__28580;
continue;
} else {
var k_28581 = cljs.core.first.call(null,seq__28554_28575__$1);
e.setAttribute(cljs.core.name.call(null,k_28581),cljs.core.get.call(null,attrs,k_28581));

var G__28582 = cljs.core.next.call(null,seq__28554_28575__$1);
var G__28583 = null;
var G__28584 = (0);
var G__28585 = (0);
seq__28554_28565 = G__28582;
chunk__28555_28566 = G__28583;
count__28556_28567 = G__28584;
i__28557_28568 = G__28585;
continue;
}
} else {
}
}
break;
}

var seq__28558_28586 = cljs.core.seq.call(null,children);
var chunk__28559_28587 = null;
var count__28560_28588 = (0);
var i__28561_28589 = (0);
while(true){
if((i__28561_28589 < count__28560_28588)){
var ch_28590 = cljs.core._nth.call(null,chunk__28559_28587,i__28561_28589);
e.appendChild(ch_28590);

var G__28591 = seq__28558_28586;
var G__28592 = chunk__28559_28587;
var G__28593 = count__28560_28588;
var G__28594 = (i__28561_28589 + (1));
seq__28558_28586 = G__28591;
chunk__28559_28587 = G__28592;
count__28560_28588 = G__28593;
i__28561_28589 = G__28594;
continue;
} else {
var temp__6728__auto___28595 = cljs.core.seq.call(null,seq__28558_28586);
if(temp__6728__auto___28595){
var seq__28558_28596__$1 = temp__6728__auto___28595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28558_28596__$1)){
var c__21044__auto___28597 = cljs.core.chunk_first.call(null,seq__28558_28596__$1);
var G__28598 = cljs.core.chunk_rest.call(null,seq__28558_28596__$1);
var G__28599 = c__21044__auto___28597;
var G__28600 = cljs.core.count.call(null,c__21044__auto___28597);
var G__28601 = (0);
seq__28558_28586 = G__28598;
chunk__28559_28587 = G__28599;
count__28560_28588 = G__28600;
i__28561_28589 = G__28601;
continue;
} else {
var ch_28602 = cljs.core.first.call(null,seq__28558_28596__$1);
e.appendChild(ch_28602);

var G__28603 = cljs.core.next.call(null,seq__28558_28596__$1);
var G__28604 = null;
var G__28605 = (0);
var G__28606 = (0);
seq__28558_28586 = G__28603;
chunk__28559_28587 = G__28604;
count__28560_28588 = G__28605;
i__28561_28589 = G__28606;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28551){
var G__28552 = cljs.core.first.call(null,seq28551);
var seq28551__$1 = cljs.core.next.call(null,seq28551);
var G__28553 = cljs.core.first.call(null,seq28551__$1);
var seq28551__$2 = cljs.core.next.call(null,seq28551__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28552,G__28553,seq28551__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21164__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21165__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21166__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21167__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21168__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21164__auto__,prefer_table__21165__auto__,method_cache__21166__auto__,cached_hierarchy__21167__auto__,hierarchy__21168__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21164__auto__,prefer_table__21165__auto__,method_cache__21166__auto__,cached_hierarchy__21167__auto__,hierarchy__21168__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21168__auto__,method_table__21164__auto__,prefer_table__21165__auto__,method_cache__21166__auto__,cached_hierarchy__21167__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28607 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28607.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28607.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28607.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28607);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28608,st_map){
var map__28615 = p__28608;
var map__28615__$1 = ((((!((map__28615 == null)))?((((map__28615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28615):map__28615);
var container_el = cljs.core.get.call(null,map__28615__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28615,map__28615__$1,container_el){
return (function (p__28617){
var vec__28618 = p__28617;
var k = cljs.core.nth.call(null,vec__28618,(0),null);
var v = cljs.core.nth.call(null,vec__28618,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28615,map__28615__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28621,dom_str){
var map__28624 = p__28621;
var map__28624__$1 = ((((!((map__28624 == null)))?((((map__28624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28624):map__28624);
var c = map__28624__$1;
var content_area_el = cljs.core.get.call(null,map__28624__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28626){
var map__28629 = p__28626;
var map__28629__$1 = ((((!((map__28629 == null)))?((((map__28629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28629):map__28629);
var content_area_el = cljs.core.get.call(null,map__28629__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_28672){
var state_val_28673 = (state_28672[(1)]);
if((state_val_28673 === (1))){
var inst_28657 = (state_28672[(7)]);
var inst_28657__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28658 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28659 = ["10px","10px","100%","68px","1.0"];
var inst_28660 = cljs.core.PersistentHashMap.fromArrays(inst_28658,inst_28659);
var inst_28661 = cljs.core.merge.call(null,inst_28660,style);
var inst_28662 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28657__$1,inst_28661);
var inst_28663 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28657__$1,msg);
var inst_28664 = cljs.core.async.timeout.call(null,(300));
var state_28672__$1 = (function (){var statearr_28674 = state_28672;
(statearr_28674[(8)] = inst_28662);

(statearr_28674[(9)] = inst_28663);

(statearr_28674[(7)] = inst_28657__$1);

return statearr_28674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28672__$1,(2),inst_28664);
} else {
if((state_val_28673 === (2))){
var inst_28657 = (state_28672[(7)]);
var inst_28666 = (state_28672[(2)]);
var inst_28667 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28668 = ["auto"];
var inst_28669 = cljs.core.PersistentHashMap.fromArrays(inst_28667,inst_28668);
var inst_28670 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28657,inst_28669);
var state_28672__$1 = (function (){var statearr_28675 = state_28672;
(statearr_28675[(10)] = inst_28666);

return statearr_28675;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28672__$1,inst_28670);
} else {
return null;
}
}
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto____0 = (function (){
var statearr_28679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28679[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto__);

(statearr_28679[(1)] = (1));

return statearr_28679;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto____1 = (function (state_28672){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_28672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e28680){if((e28680 instanceof Object)){
var ex__22817__auto__ = e28680;
var statearr_28681_28683 = state_28672;
(statearr_28681_28683[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28684 = state_28672;
state_28672 = G__28684;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto__ = function(state_28672){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto____1.call(this,state_28672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_28682 = f__22928__auto__.call(null);
(statearr_28682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_28682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__6726__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__6726__auto__)){
var vec__28688 = temp__6726__auto__;
var f = cljs.core.nth.call(null,vec__28688,(0),null);
var ln = cljs.core.nth.call(null,vec__28688,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28695 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28695,(0),null);
var file_line = cljs.core.nth.call(null,vec__28695,(1),null);
var file_column = cljs.core.nth.call(null,vec__28695,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28695,file_name,file_line,file_column){
return (function (p1__28691_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28691_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28695,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__20141__auto__ = file_line;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
var and__20129__auto__ = cause;
if(cljs.core.truth_(and__20129__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__20129__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28700 = figwheel.client.heads_up.ensure_container.call(null);
var map__28700__$1 = ((((!((map__28700 == null)))?((((map__28700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28700):map__28700);
var content_area_el = cljs.core.get.call(null,map__28700__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_28748){
var state_val_28749 = (state_28748[(1)]);
if((state_val_28749 === (1))){
var inst_28731 = (state_28748[(7)]);
var inst_28731__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28732 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28733 = ["0.0"];
var inst_28734 = cljs.core.PersistentHashMap.fromArrays(inst_28732,inst_28733);
var inst_28735 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28731__$1,inst_28734);
var inst_28736 = cljs.core.async.timeout.call(null,(300));
var state_28748__$1 = (function (){var statearr_28750 = state_28748;
(statearr_28750[(7)] = inst_28731__$1);

(statearr_28750[(8)] = inst_28735);

return statearr_28750;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28748__$1,(2),inst_28736);
} else {
if((state_val_28749 === (2))){
var inst_28731 = (state_28748[(7)]);
var inst_28738 = (state_28748[(2)]);
var inst_28739 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28740 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28741 = cljs.core.PersistentHashMap.fromArrays(inst_28739,inst_28740);
var inst_28742 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28731,inst_28741);
var inst_28743 = cljs.core.async.timeout.call(null,(200));
var state_28748__$1 = (function (){var statearr_28751 = state_28748;
(statearr_28751[(9)] = inst_28738);

(statearr_28751[(10)] = inst_28742);

return statearr_28751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28748__$1,(3),inst_28743);
} else {
if((state_val_28749 === (3))){
var inst_28731 = (state_28748[(7)]);
var inst_28745 = (state_28748[(2)]);
var inst_28746 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28731,"");
var state_28748__$1 = (function (){var statearr_28752 = state_28748;
(statearr_28752[(11)] = inst_28745);

return statearr_28752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28748__$1,inst_28746);
} else {
return null;
}
}
}
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__22814__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__22814__auto____0 = (function (){
var statearr_28756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28756[(0)] = figwheel$client$heads_up$clear_$_state_machine__22814__auto__);

(statearr_28756[(1)] = (1));

return statearr_28756;
});
var figwheel$client$heads_up$clear_$_state_machine__22814__auto____1 = (function (state_28748){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_28748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e28757){if((e28757 instanceof Object)){
var ex__22817__auto__ = e28757;
var statearr_28758_28760 = state_28748;
(statearr_28758_28760[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28761 = state_28748;
state_28748 = G__28761;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__22814__auto__ = function(state_28748){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__22814__auto____1.call(this,state_28748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__22814__auto____0;
figwheel$client$heads_up$clear_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__22814__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_28759 = f__22928__auto__.call(null);
(statearr_28759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_28759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_28793){
var state_val_28794 = (state_28793[(1)]);
if((state_val_28794 === (1))){
var inst_28783 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28793__$1,(2),inst_28783);
} else {
if((state_val_28794 === (2))){
var inst_28785 = (state_28793[(2)]);
var inst_28786 = cljs.core.async.timeout.call(null,(400));
var state_28793__$1 = (function (){var statearr_28795 = state_28793;
(statearr_28795[(7)] = inst_28785);

return statearr_28795;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28793__$1,(3),inst_28786);
} else {
if((state_val_28794 === (3))){
var inst_28788 = (state_28793[(2)]);
var inst_28789 = figwheel.client.heads_up.clear.call(null);
var state_28793__$1 = (function (){var statearr_28796 = state_28793;
(statearr_28796[(8)] = inst_28788);

return statearr_28796;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28793__$1,(4),inst_28789);
} else {
if((state_val_28794 === (4))){
var inst_28791 = (state_28793[(2)]);
var state_28793__$1 = state_28793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28793__$1,inst_28791);
} else {
return null;
}
}
}
}
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto____0 = (function (){
var statearr_28800 = [null,null,null,null,null,null,null,null,null];
(statearr_28800[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto__);

(statearr_28800[(1)] = (1));

return statearr_28800;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto____1 = (function (state_28793){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_28793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e28801){if((e28801 instanceof Object)){
var ex__22817__auto__ = e28801;
var statearr_28802_28804 = state_28793;
(statearr_28802_28804[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28805 = state_28793;
state_28793 = G__28805;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto__ = function(state_28793){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto____1.call(this,state_28793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_28803 = f__22928__auto__.call(null);
(statearr_28803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_28803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map