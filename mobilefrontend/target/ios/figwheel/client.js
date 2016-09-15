// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28809 = cljs.core._EQ_;
var expr__28810 = (function (){var or__20141__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e28813){if((e28813 instanceof Error)){
var e = e28813;
return false;
} else {
throw e28813;

}
}})();
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28809.call(null,"true",expr__28810))){
return true;
} else {
if(cljs.core.truth_(pred__28809.call(null,"false",expr__28810))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28810)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28815){if((e28815 instanceof Error)){
var e = e28815;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28815;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__21331__auto__ = [];
var len__21324__auto___28817 = arguments.length;
var i__21325__auto___28818 = (0);
while(true){
if((i__21325__auto___28818 < len__21324__auto___28817)){
args__21331__auto__.push((arguments[i__21325__auto___28818]));

var G__28819 = (i__21325__auto___28818 + (1));
i__21325__auto___28818 = G__28819;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28816){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28816));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28820){
var map__28823 = p__28820;
var map__28823__$1 = ((((!((map__28823 == null)))?((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var message = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20141__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20129__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20129__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20129__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22927__auto___28985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___28985,ch){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___28985,ch){
return (function (state_28954){
var state_val_28955 = (state_28954[(1)]);
if((state_val_28955 === (7))){
var inst_28950 = (state_28954[(2)]);
var state_28954__$1 = state_28954;
var statearr_28956_28986 = state_28954__$1;
(statearr_28956_28986[(2)] = inst_28950);

(statearr_28956_28986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (1))){
var state_28954__$1 = state_28954;
var statearr_28957_28987 = state_28954__$1;
(statearr_28957_28987[(2)] = null);

(statearr_28957_28987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (4))){
var inst_28907 = (state_28954[(7)]);
var inst_28907__$1 = (state_28954[(2)]);
var state_28954__$1 = (function (){var statearr_28958 = state_28954;
(statearr_28958[(7)] = inst_28907__$1);

return statearr_28958;
})();
if(cljs.core.truth_(inst_28907__$1)){
var statearr_28959_28988 = state_28954__$1;
(statearr_28959_28988[(1)] = (5));

} else {
var statearr_28960_28989 = state_28954__$1;
(statearr_28960_28989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (15))){
var inst_28914 = (state_28954[(8)]);
var inst_28929 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28914);
var inst_28930 = cljs.core.first.call(null,inst_28929);
var inst_28931 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28930);
var inst_28932 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28931)].join('');
var inst_28933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28932);
var state_28954__$1 = state_28954;
var statearr_28961_28990 = state_28954__$1;
(statearr_28961_28990[(2)] = inst_28933);

(statearr_28961_28990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (13))){
var inst_28938 = (state_28954[(2)]);
var state_28954__$1 = state_28954;
var statearr_28962_28991 = state_28954__$1;
(statearr_28962_28991[(2)] = inst_28938);

(statearr_28962_28991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (6))){
var state_28954__$1 = state_28954;
var statearr_28963_28992 = state_28954__$1;
(statearr_28963_28992[(2)] = null);

(statearr_28963_28992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (17))){
var inst_28936 = (state_28954[(2)]);
var state_28954__$1 = state_28954;
var statearr_28964_28993 = state_28954__$1;
(statearr_28964_28993[(2)] = inst_28936);

(statearr_28964_28993[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (3))){
var inst_28952 = (state_28954[(2)]);
var state_28954__$1 = state_28954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28954__$1,inst_28952);
} else {
if((state_val_28955 === (12))){
var inst_28913 = (state_28954[(9)]);
var inst_28927 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28913,opts);
var state_28954__$1 = state_28954;
if(cljs.core.truth_(inst_28927)){
var statearr_28965_28994 = state_28954__$1;
(statearr_28965_28994[(1)] = (15));

} else {
var statearr_28966_28995 = state_28954__$1;
(statearr_28966_28995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (2))){
var state_28954__$1 = state_28954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28954__$1,(4),ch);
} else {
if((state_val_28955 === (11))){
var inst_28914 = (state_28954[(8)]);
var inst_28919 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28920 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28914);
var inst_28921 = cljs.core.async.timeout.call(null,(1000));
var inst_28922 = [inst_28920,inst_28921];
var inst_28923 = (new cljs.core.PersistentVector(null,2,(5),inst_28919,inst_28922,null));
var state_28954__$1 = state_28954;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28954__$1,(14),inst_28923);
} else {
if((state_val_28955 === (9))){
var inst_28914 = (state_28954[(8)]);
var inst_28940 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28941 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28914);
var inst_28942 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28941);
var inst_28943 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28942)].join('');
var inst_28944 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28943);
var state_28954__$1 = (function (){var statearr_28967 = state_28954;
(statearr_28967[(10)] = inst_28940);

return statearr_28967;
})();
var statearr_28968_28996 = state_28954__$1;
(statearr_28968_28996[(2)] = inst_28944);

(statearr_28968_28996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (5))){
var inst_28907 = (state_28954[(7)]);
var inst_28909 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28910 = (new cljs.core.PersistentArrayMap(null,2,inst_28909,null));
var inst_28911 = (new cljs.core.PersistentHashSet(null,inst_28910,null));
var inst_28912 = figwheel.client.focus_msgs.call(null,inst_28911,inst_28907);
var inst_28913 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28912);
var inst_28914 = cljs.core.first.call(null,inst_28912);
var inst_28915 = figwheel.client.autoload_QMARK_.call(null);
var state_28954__$1 = (function (){var statearr_28969 = state_28954;
(statearr_28969[(9)] = inst_28913);

(statearr_28969[(8)] = inst_28914);

return statearr_28969;
})();
if(cljs.core.truth_(inst_28915)){
var statearr_28970_28997 = state_28954__$1;
(statearr_28970_28997[(1)] = (8));

} else {
var statearr_28971_28998 = state_28954__$1;
(statearr_28971_28998[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (14))){
var inst_28925 = (state_28954[(2)]);
var state_28954__$1 = state_28954;
var statearr_28972_28999 = state_28954__$1;
(statearr_28972_28999[(2)] = inst_28925);

(statearr_28972_28999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (16))){
var state_28954__$1 = state_28954;
var statearr_28973_29000 = state_28954__$1;
(statearr_28973_29000[(2)] = null);

(statearr_28973_29000[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (10))){
var inst_28946 = (state_28954[(2)]);
var state_28954__$1 = (function (){var statearr_28974 = state_28954;
(statearr_28974[(11)] = inst_28946);

return statearr_28974;
})();
var statearr_28975_29001 = state_28954__$1;
(statearr_28975_29001[(2)] = null);

(statearr_28975_29001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28955 === (8))){
var inst_28913 = (state_28954[(9)]);
var inst_28917 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28913,opts);
var state_28954__$1 = state_28954;
if(cljs.core.truth_(inst_28917)){
var statearr_28976_29002 = state_28954__$1;
(statearr_28976_29002[(1)] = (11));

} else {
var statearr_28977_29003 = state_28954__$1;
(statearr_28977_29003[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22927__auto___28985,ch))
;
return ((function (switch__22813__auto__,c__22927__auto___28985,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____0 = (function (){
var statearr_28981 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28981[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__);

(statearr_28981[(1)] = (1));

return statearr_28981;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____1 = (function (state_28954){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_28954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e28982){if((e28982 instanceof Object)){
var ex__22817__auto__ = e28982;
var statearr_28983_29004 = state_28954;
(statearr_28983_29004[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29005 = state_28954;
state_28954 = G__29005;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__ = function(state_28954){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____1.call(this,state_28954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___28985,ch))
})();
var state__22929__auto__ = (function (){var statearr_28984 = f__22928__auto__.call(null);
(statearr_28984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___28985);

return statearr_28984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___28985,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29006_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29006_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29013 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29013){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29011 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29012 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29012;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29011;
}}catch (e29010){if((e29010 instanceof Error)){
var e = e29010;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29013], null));
} else {
var e = e29010;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29013))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29014){
var map__29023 = p__29014;
var map__29023__$1 = ((((!((map__29023 == null)))?((((map__29023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29023):map__29023);
var opts = map__29023__$1;
var build_id = cljs.core.get.call(null,map__29023__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29023,map__29023__$1,opts,build_id){
return (function (p__29025){
var vec__29026 = p__29025;
var seq__29027 = cljs.core.seq.call(null,vec__29026);
var first__29028 = cljs.core.first.call(null,seq__29027);
var seq__29027__$1 = cljs.core.next.call(null,seq__29027);
var map__29029 = first__29028;
var map__29029__$1 = ((((!((map__29029 == null)))?((((map__29029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29029):map__29029);
var msg = map__29029__$1;
var msg_name = cljs.core.get.call(null,map__29029__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29027__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29026,seq__29027,first__29028,seq__29027__$1,map__29029,map__29029__$1,msg,msg_name,_,map__29023,map__29023__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29026,seq__29027,first__29028,seq__29027__$1,map__29029,map__29029__$1,msg,msg_name,_,map__29023,map__29023__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29023,map__29023__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29037){
var vec__29038 = p__29037;
var seq__29039 = cljs.core.seq.call(null,vec__29038);
var first__29040 = cljs.core.first.call(null,seq__29039);
var seq__29039__$1 = cljs.core.next.call(null,seq__29039);
var map__29041 = first__29040;
var map__29041__$1 = ((((!((map__29041 == null)))?((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29041):map__29041);
var msg = map__29041__$1;
var msg_name = cljs.core.get.call(null,map__29041__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29039__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29043){
var map__29055 = p__29043;
var map__29055__$1 = ((((!((map__29055 == null)))?((((map__29055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29055):map__29055);
var on_compile_warning = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29055__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29055,map__29055__$1,on_compile_warning,on_compile_fail){
return (function (p__29057){
var vec__29058 = p__29057;
var seq__29059 = cljs.core.seq.call(null,vec__29058);
var first__29060 = cljs.core.first.call(null,seq__29059);
var seq__29059__$1 = cljs.core.next.call(null,seq__29059);
var map__29061 = first__29060;
var map__29061__$1 = ((((!((map__29061 == null)))?((((map__29061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29061):map__29061);
var msg = map__29061__$1;
var msg_name = cljs.core.get.call(null,map__29061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29059__$1;
var pred__29063 = cljs.core._EQ_;
var expr__29064 = msg_name;
if(cljs.core.truth_(pred__29063.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29064))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29063.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29064))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29055,map__29055__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__,msg_hist,msg_names,msg){
return (function (state_29280){
var state_val_29281 = (state_29280[(1)]);
if((state_val_29281 === (7))){
var inst_29204 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29204)){
var statearr_29282_29328 = state_29280__$1;
(statearr_29282_29328[(1)] = (8));

} else {
var statearr_29283_29329 = state_29280__$1;
(statearr_29283_29329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (20))){
var inst_29274 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29284_29330 = state_29280__$1;
(statearr_29284_29330[(2)] = inst_29274);

(statearr_29284_29330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (27))){
var inst_29270 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29285_29331 = state_29280__$1;
(statearr_29285_29331[(2)] = inst_29270);

(statearr_29285_29331[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (1))){
var inst_29197 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29197)){
var statearr_29286_29332 = state_29280__$1;
(statearr_29286_29332[(1)] = (2));

} else {
var statearr_29287_29333 = state_29280__$1;
(statearr_29287_29333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (24))){
var inst_29272 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29288_29334 = state_29280__$1;
(statearr_29288_29334[(2)] = inst_29272);

(statearr_29288_29334[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (4))){
var inst_29278 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29280__$1,inst_29278);
} else {
if((state_val_29281 === (15))){
var inst_29276 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29289_29335 = state_29280__$1;
(statearr_29289_29335[(2)] = inst_29276);

(statearr_29289_29335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (21))){
var inst_29235 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29290_29336 = state_29280__$1;
(statearr_29290_29336[(2)] = inst_29235);

(statearr_29290_29336[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (31))){
var inst_29259 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29259)){
var statearr_29291_29337 = state_29280__$1;
(statearr_29291_29337[(1)] = (34));

} else {
var statearr_29292_29338 = state_29280__$1;
(statearr_29292_29338[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (32))){
var inst_29268 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29293_29339 = state_29280__$1;
(statearr_29293_29339[(2)] = inst_29268);

(statearr_29293_29339[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (33))){
var inst_29257 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29294_29340 = state_29280__$1;
(statearr_29294_29340[(2)] = inst_29257);

(statearr_29294_29340[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (13))){
var inst_29218 = figwheel.client.heads_up.clear.call(null);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(16),inst_29218);
} else {
if((state_val_29281 === (22))){
var inst_29239 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29240 = figwheel.client.heads_up.append_message.call(null,inst_29239);
var state_29280__$1 = state_29280;
var statearr_29295_29341 = state_29280__$1;
(statearr_29295_29341[(2)] = inst_29240);

(statearr_29295_29341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (36))){
var inst_29266 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29296_29342 = state_29280__$1;
(statearr_29296_29342[(2)] = inst_29266);

(statearr_29296_29342[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (29))){
var inst_29250 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29297_29343 = state_29280__$1;
(statearr_29297_29343[(2)] = inst_29250);

(statearr_29297_29343[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (6))){
var inst_29199 = (state_29280[(7)]);
var state_29280__$1 = state_29280;
var statearr_29298_29344 = state_29280__$1;
(statearr_29298_29344[(2)] = inst_29199);

(statearr_29298_29344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (28))){
var inst_29246 = (state_29280[(2)]);
var inst_29247 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29248 = figwheel.client.heads_up.display_warning.call(null,inst_29247);
var state_29280__$1 = (function (){var statearr_29299 = state_29280;
(statearr_29299[(8)] = inst_29246);

return statearr_29299;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(29),inst_29248);
} else {
if((state_val_29281 === (25))){
var inst_29244 = figwheel.client.heads_up.clear.call(null);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(28),inst_29244);
} else {
if((state_val_29281 === (34))){
var inst_29261 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(37),inst_29261);
} else {
if((state_val_29281 === (17))){
var inst_29226 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29300_29345 = state_29280__$1;
(statearr_29300_29345[(2)] = inst_29226);

(statearr_29300_29345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (3))){
var inst_29216 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29216)){
var statearr_29301_29346 = state_29280__$1;
(statearr_29301_29346[(1)] = (13));

} else {
var statearr_29302_29347 = state_29280__$1;
(statearr_29302_29347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (12))){
var inst_29212 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29303_29348 = state_29280__$1;
(statearr_29303_29348[(2)] = inst_29212);

(statearr_29303_29348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (2))){
var inst_29199 = (state_29280[(7)]);
var inst_29199__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29280__$1 = (function (){var statearr_29304 = state_29280;
(statearr_29304[(7)] = inst_29199__$1);

return statearr_29304;
})();
if(cljs.core.truth_(inst_29199__$1)){
var statearr_29305_29349 = state_29280__$1;
(statearr_29305_29349[(1)] = (5));

} else {
var statearr_29306_29350 = state_29280__$1;
(statearr_29306_29350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (23))){
var inst_29242 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29242)){
var statearr_29307_29351 = state_29280__$1;
(statearr_29307_29351[(1)] = (25));

} else {
var statearr_29308_29352 = state_29280__$1;
(statearr_29308_29352[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (35))){
var state_29280__$1 = state_29280;
var statearr_29309_29353 = state_29280__$1;
(statearr_29309_29353[(2)] = null);

(statearr_29309_29353[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (19))){
var inst_29237 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29237)){
var statearr_29310_29354 = state_29280__$1;
(statearr_29310_29354[(1)] = (22));

} else {
var statearr_29311_29355 = state_29280__$1;
(statearr_29311_29355[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (11))){
var inst_29208 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29312_29356 = state_29280__$1;
(statearr_29312_29356[(2)] = inst_29208);

(statearr_29312_29356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (9))){
var inst_29210 = figwheel.client.heads_up.clear.call(null);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(12),inst_29210);
} else {
if((state_val_29281 === (5))){
var inst_29201 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29280__$1 = state_29280;
var statearr_29313_29357 = state_29280__$1;
(statearr_29313_29357[(2)] = inst_29201);

(statearr_29313_29357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (14))){
var inst_29228 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29228)){
var statearr_29314_29358 = state_29280__$1;
(statearr_29314_29358[(1)] = (18));

} else {
var statearr_29315_29359 = state_29280__$1;
(statearr_29315_29359[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (26))){
var inst_29252 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29280__$1 = state_29280;
if(cljs.core.truth_(inst_29252)){
var statearr_29316_29360 = state_29280__$1;
(statearr_29316_29360[(1)] = (30));

} else {
var statearr_29317_29361 = state_29280__$1;
(statearr_29317_29361[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (16))){
var inst_29220 = (state_29280[(2)]);
var inst_29221 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29222 = figwheel.client.format_messages.call(null,inst_29221);
var inst_29223 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29224 = figwheel.client.heads_up.display_error.call(null,inst_29222,inst_29223);
var state_29280__$1 = (function (){var statearr_29318 = state_29280;
(statearr_29318[(9)] = inst_29220);

return statearr_29318;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(17),inst_29224);
} else {
if((state_val_29281 === (30))){
var inst_29254 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29255 = figwheel.client.heads_up.display_warning.call(null,inst_29254);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(33),inst_29255);
} else {
if((state_val_29281 === (10))){
var inst_29214 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29319_29362 = state_29280__$1;
(statearr_29319_29362[(2)] = inst_29214);

(statearr_29319_29362[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (18))){
var inst_29230 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29231 = figwheel.client.format_messages.call(null,inst_29230);
var inst_29232 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29233 = figwheel.client.heads_up.display_error.call(null,inst_29231,inst_29232);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(21),inst_29233);
} else {
if((state_val_29281 === (37))){
var inst_29263 = (state_29280[(2)]);
var state_29280__$1 = state_29280;
var statearr_29320_29363 = state_29280__$1;
(statearr_29320_29363[(2)] = inst_29263);

(statearr_29320_29363[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29281 === (8))){
var inst_29206 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29280__$1 = state_29280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29280__$1,(11),inst_29206);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22927__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22813__auto__,c__22927__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____0 = (function (){
var statearr_29324 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29324[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__);

(statearr_29324[(1)] = (1));

return statearr_29324;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____1 = (function (state_29280){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_29280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e29325){if((e29325 instanceof Object)){
var ex__22817__auto__ = e29325;
var statearr_29326_29364 = state_29280;
(statearr_29326_29364[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29325;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29365 = state_29280;
state_29280 = G__29365;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__ = function(state_29280){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____1.call(this,state_29280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__,msg_hist,msg_names,msg))
})();
var state__22929__auto__ = (function (){var statearr_29327 = f__22928__auto__.call(null);
(statearr_29327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_29327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__,msg_hist,msg_names,msg))
);

return c__22927__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22927__auto___29428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___29428,ch){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___29428,ch){
return (function (state_29411){
var state_val_29412 = (state_29411[(1)]);
if((state_val_29412 === (1))){
var state_29411__$1 = state_29411;
var statearr_29413_29429 = state_29411__$1;
(statearr_29413_29429[(2)] = null);

(statearr_29413_29429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (2))){
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29411__$1,(4),ch);
} else {
if((state_val_29412 === (3))){
var inst_29409 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29411__$1,inst_29409);
} else {
if((state_val_29412 === (4))){
var inst_29399 = (state_29411[(7)]);
var inst_29399__$1 = (state_29411[(2)]);
var state_29411__$1 = (function (){var statearr_29414 = state_29411;
(statearr_29414[(7)] = inst_29399__$1);

return statearr_29414;
})();
if(cljs.core.truth_(inst_29399__$1)){
var statearr_29415_29430 = state_29411__$1;
(statearr_29415_29430[(1)] = (5));

} else {
var statearr_29416_29431 = state_29411__$1;
(statearr_29416_29431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (5))){
var inst_29399 = (state_29411[(7)]);
var inst_29401 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29399);
var state_29411__$1 = state_29411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29411__$1,(8),inst_29401);
} else {
if((state_val_29412 === (6))){
var state_29411__$1 = state_29411;
var statearr_29417_29432 = state_29411__$1;
(statearr_29417_29432[(2)] = null);

(statearr_29417_29432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (7))){
var inst_29407 = (state_29411[(2)]);
var state_29411__$1 = state_29411;
var statearr_29418_29433 = state_29411__$1;
(statearr_29418_29433[(2)] = inst_29407);

(statearr_29418_29433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29412 === (8))){
var inst_29403 = (state_29411[(2)]);
var state_29411__$1 = (function (){var statearr_29419 = state_29411;
(statearr_29419[(8)] = inst_29403);

return statearr_29419;
})();
var statearr_29420_29434 = state_29411__$1;
(statearr_29420_29434[(2)] = null);

(statearr_29420_29434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22927__auto___29428,ch))
;
return ((function (switch__22813__auto__,c__22927__auto___29428,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22814__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22814__auto____0 = (function (){
var statearr_29424 = [null,null,null,null,null,null,null,null,null];
(statearr_29424[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22814__auto__);

(statearr_29424[(1)] = (1));

return statearr_29424;
});
var figwheel$client$heads_up_plugin_$_state_machine__22814__auto____1 = (function (state_29411){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_29411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e29425){if((e29425 instanceof Object)){
var ex__22817__auto__ = e29425;
var statearr_29426_29435 = state_29411;
(statearr_29426_29435[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29436 = state_29411;
state_29411 = G__29436;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22814__auto__ = function(state_29411){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22814__auto____1.call(this,state_29411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22814__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22814__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___29428,ch))
})();
var state__22929__auto__ = (function (){var statearr_29427 = f__22928__auto__.call(null);
(statearr_29427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___29428);

return statearr_29427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___29428,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_29457){
var state_val_29458 = (state_29457[(1)]);
if((state_val_29458 === (1))){
var inst_29452 = cljs.core.async.timeout.call(null,(3000));
var state_29457__$1 = state_29457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29457__$1,(2),inst_29452);
} else {
if((state_val_29458 === (2))){
var inst_29454 = (state_29457[(2)]);
var inst_29455 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29457__$1 = (function (){var statearr_29459 = state_29457;
(statearr_29459[(7)] = inst_29454);

return statearr_29459;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29457__$1,inst_29455);
} else {
return null;
}
}
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____0 = (function (){
var statearr_29463 = [null,null,null,null,null,null,null,null];
(statearr_29463[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__);

(statearr_29463[(1)] = (1));

return statearr_29463;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____1 = (function (state_29457){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_29457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e29464){if((e29464 instanceof Object)){
var ex__22817__auto__ = e29464;
var statearr_29465_29467 = state_29457;
(statearr_29465_29467[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29468 = state_29457;
state_29457 = G__29468;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__ = function(state_29457){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____1.call(this,state_29457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_29466 = f__22928__auto__.call(null);
(statearr_29466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_29466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29469){
var map__29476 = p__29469;
var map__29476__$1 = ((((!((map__29476 == null)))?((((map__29476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29476):map__29476);
var ed = map__29476__$1;
var formatted_exception = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29476__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29478_29482 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29479_29483 = null;
var count__29480_29484 = (0);
var i__29481_29485 = (0);
while(true){
if((i__29481_29485 < count__29480_29484)){
var msg_29486 = cljs.core._nth.call(null,chunk__29479_29483,i__29481_29485);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29486);

var G__29487 = seq__29478_29482;
var G__29488 = chunk__29479_29483;
var G__29489 = count__29480_29484;
var G__29490 = (i__29481_29485 + (1));
seq__29478_29482 = G__29487;
chunk__29479_29483 = G__29488;
count__29480_29484 = G__29489;
i__29481_29485 = G__29490;
continue;
} else {
var temp__6728__auto___29491 = cljs.core.seq.call(null,seq__29478_29482);
if(temp__6728__auto___29491){
var seq__29478_29492__$1 = temp__6728__auto___29491;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29478_29492__$1)){
var c__21044__auto___29493 = cljs.core.chunk_first.call(null,seq__29478_29492__$1);
var G__29494 = cljs.core.chunk_rest.call(null,seq__29478_29492__$1);
var G__29495 = c__21044__auto___29493;
var G__29496 = cljs.core.count.call(null,c__21044__auto___29493);
var G__29497 = (0);
seq__29478_29482 = G__29494;
chunk__29479_29483 = G__29495;
count__29480_29484 = G__29496;
i__29481_29485 = G__29497;
continue;
} else {
var msg_29498 = cljs.core.first.call(null,seq__29478_29492__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29498);

var G__29499 = cljs.core.next.call(null,seq__29478_29492__$1);
var G__29500 = null;
var G__29501 = (0);
var G__29502 = (0);
seq__29478_29482 = G__29499;
chunk__29479_29483 = G__29500;
count__29480_29484 = G__29501;
i__29481_29485 = G__29502;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29503){
var map__29506 = p__29503;
var map__29506__$1 = ((((!((map__29506 == null)))?((((map__29506.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29506.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29506):map__29506);
var w = map__29506__$1;
var message = cljs.core.get.call(null,map__29506__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20129__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20129__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20129__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29518 = cljs.core.seq.call(null,plugins);
var chunk__29519 = null;
var count__29520 = (0);
var i__29521 = (0);
while(true){
if((i__29521 < count__29520)){
var vec__29522 = cljs.core._nth.call(null,chunk__29519,i__29521);
var k = cljs.core.nth.call(null,vec__29522,(0),null);
var plugin = cljs.core.nth.call(null,vec__29522,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29528 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29518,chunk__29519,count__29520,i__29521,pl_29528,vec__29522,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29528.call(null,msg_hist);
});})(seq__29518,chunk__29519,count__29520,i__29521,pl_29528,vec__29522,k,plugin))
);
} else {
}

var G__29529 = seq__29518;
var G__29530 = chunk__29519;
var G__29531 = count__29520;
var G__29532 = (i__29521 + (1));
seq__29518 = G__29529;
chunk__29519 = G__29530;
count__29520 = G__29531;
i__29521 = G__29532;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__29518);
if(temp__6728__auto__){
var seq__29518__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29518__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__29518__$1);
var G__29533 = cljs.core.chunk_rest.call(null,seq__29518__$1);
var G__29534 = c__21044__auto__;
var G__29535 = cljs.core.count.call(null,c__21044__auto__);
var G__29536 = (0);
seq__29518 = G__29533;
chunk__29519 = G__29534;
count__29520 = G__29535;
i__29521 = G__29536;
continue;
} else {
var vec__29525 = cljs.core.first.call(null,seq__29518__$1);
var k = cljs.core.nth.call(null,vec__29525,(0),null);
var plugin = cljs.core.nth.call(null,vec__29525,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29537 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29518,chunk__29519,count__29520,i__29521,pl_29537,vec__29525,k,plugin,seq__29518__$1,temp__6728__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29537.call(null,msg_hist);
});})(seq__29518,chunk__29519,count__29520,i__29521,pl_29537,vec__29525,k,plugin,seq__29518__$1,temp__6728__auto__))
);
} else {
}

var G__29538 = cljs.core.next.call(null,seq__29518__$1);
var G__29539 = null;
var G__29540 = (0);
var G__29541 = (0);
seq__29518 = G__29538;
chunk__29519 = G__29539;
count__29520 = G__29540;
i__29521 = G__29541;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29542 = [];
var len__21324__auto___29545 = arguments.length;
var i__21325__auto___29546 = (0);
while(true){
if((i__21325__auto___29546 < len__21324__auto___29545)){
args29542.push((arguments[i__21325__auto___29546]));

var G__29547 = (i__21325__auto___29546 + (1));
i__21325__auto___29546 = G__29547;
continue;
} else {
}
break;
}

var G__29544 = args29542.length;
switch (G__29544) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29542.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__21331__auto__ = [];
var len__21324__auto___29553 = arguments.length;
var i__21325__auto___29554 = (0);
while(true){
if((i__21325__auto___29554 < len__21324__auto___29553)){
args__21331__auto__.push((arguments[i__21325__auto___29554]));

var G__29555 = (i__21325__auto___29554 + (1));
i__21325__auto___29554 = G__29555;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29550){
var map__29551 = p__29550;
var map__29551__$1 = ((((!((map__29551 == null)))?((((map__29551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29551):map__29551);
var opts = map__29551__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29549){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29549));
});


//# sourceMappingURL=client.js.map