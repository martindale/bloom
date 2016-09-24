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
var pred__28808 = cljs.core._EQ_;
var expr__28809 = (function (){var or__20141__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e28812){if((e28812 instanceof Error)){
var e = e28812;
return false;
} else {
throw e28812;

}
}})();
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28808.call(null,"true",expr__28809))){
return true;
} else {
if(cljs.core.truth_(pred__28808.call(null,"false",expr__28809))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28809)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28814){if((e28814 instanceof Error)){
var e = e28814;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28814;

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
var len__21324__auto___28816 = arguments.length;
var i__21325__auto___28817 = (0);
while(true){
if((i__21325__auto___28817 < len__21324__auto___28816)){
args__21331__auto__.push((arguments[i__21325__auto___28817]));

var G__28818 = (i__21325__auto___28817 + (1));
i__21325__auto___28817 = G__28818;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28815){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28815));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28819){
var map__28822 = p__28819;
var map__28822__$1 = ((((!((map__28822 == null)))?((((map__28822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28822):map__28822);
var message = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28822__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__22927__auto___28984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___28984,ch){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___28984,ch){
return (function (state_28953){
var state_val_28954 = (state_28953[(1)]);
if((state_val_28954 === (7))){
var inst_28949 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28955_28985 = state_28953__$1;
(statearr_28955_28985[(2)] = inst_28949);

(statearr_28955_28985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (1))){
var state_28953__$1 = state_28953;
var statearr_28956_28986 = state_28953__$1;
(statearr_28956_28986[(2)] = null);

(statearr_28956_28986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (4))){
var inst_28906 = (state_28953[(7)]);
var inst_28906__$1 = (state_28953[(2)]);
var state_28953__$1 = (function (){var statearr_28957 = state_28953;
(statearr_28957[(7)] = inst_28906__$1);

return statearr_28957;
})();
if(cljs.core.truth_(inst_28906__$1)){
var statearr_28958_28987 = state_28953__$1;
(statearr_28958_28987[(1)] = (5));

} else {
var statearr_28959_28988 = state_28953__$1;
(statearr_28959_28988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (15))){
var inst_28913 = (state_28953[(8)]);
var inst_28928 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28913);
var inst_28929 = cljs.core.first.call(null,inst_28928);
var inst_28930 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28929);
var inst_28931 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28930)].join('');
var inst_28932 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28931);
var state_28953__$1 = state_28953;
var statearr_28960_28989 = state_28953__$1;
(statearr_28960_28989[(2)] = inst_28932);

(statearr_28960_28989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (13))){
var inst_28937 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28961_28990 = state_28953__$1;
(statearr_28961_28990[(2)] = inst_28937);

(statearr_28961_28990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (6))){
var state_28953__$1 = state_28953;
var statearr_28962_28991 = state_28953__$1;
(statearr_28962_28991[(2)] = null);

(statearr_28962_28991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (17))){
var inst_28935 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28963_28992 = state_28953__$1;
(statearr_28963_28992[(2)] = inst_28935);

(statearr_28963_28992[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (3))){
var inst_28951 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28953__$1,inst_28951);
} else {
if((state_val_28954 === (12))){
var inst_28912 = (state_28953[(9)]);
var inst_28926 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28912,opts);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28926)){
var statearr_28964_28993 = state_28953__$1;
(statearr_28964_28993[(1)] = (15));

} else {
var statearr_28965_28994 = state_28953__$1;
(statearr_28965_28994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (2))){
var state_28953__$1 = state_28953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28953__$1,(4),ch);
} else {
if((state_val_28954 === (11))){
var inst_28913 = (state_28953[(8)]);
var inst_28918 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28919 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28913);
var inst_28920 = cljs.core.async.timeout.call(null,(1000));
var inst_28921 = [inst_28919,inst_28920];
var inst_28922 = (new cljs.core.PersistentVector(null,2,(5),inst_28918,inst_28921,null));
var state_28953__$1 = state_28953;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28953__$1,(14),inst_28922);
} else {
if((state_val_28954 === (9))){
var inst_28913 = (state_28953[(8)]);
var inst_28939 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28940 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28913);
var inst_28941 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28940);
var inst_28942 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28941)].join('');
var inst_28943 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28942);
var state_28953__$1 = (function (){var statearr_28966 = state_28953;
(statearr_28966[(10)] = inst_28939);

return statearr_28966;
})();
var statearr_28967_28995 = state_28953__$1;
(statearr_28967_28995[(2)] = inst_28943);

(statearr_28967_28995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (5))){
var inst_28906 = (state_28953[(7)]);
var inst_28908 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28909 = (new cljs.core.PersistentArrayMap(null,2,inst_28908,null));
var inst_28910 = (new cljs.core.PersistentHashSet(null,inst_28909,null));
var inst_28911 = figwheel.client.focus_msgs.call(null,inst_28910,inst_28906);
var inst_28912 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28911);
var inst_28913 = cljs.core.first.call(null,inst_28911);
var inst_28914 = figwheel.client.autoload_QMARK_.call(null);
var state_28953__$1 = (function (){var statearr_28968 = state_28953;
(statearr_28968[(8)] = inst_28913);

(statearr_28968[(9)] = inst_28912);

return statearr_28968;
})();
if(cljs.core.truth_(inst_28914)){
var statearr_28969_28996 = state_28953__$1;
(statearr_28969_28996[(1)] = (8));

} else {
var statearr_28970_28997 = state_28953__$1;
(statearr_28970_28997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (14))){
var inst_28924 = (state_28953[(2)]);
var state_28953__$1 = state_28953;
var statearr_28971_28998 = state_28953__$1;
(statearr_28971_28998[(2)] = inst_28924);

(statearr_28971_28998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (16))){
var state_28953__$1 = state_28953;
var statearr_28972_28999 = state_28953__$1;
(statearr_28972_28999[(2)] = null);

(statearr_28972_28999[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (10))){
var inst_28945 = (state_28953[(2)]);
var state_28953__$1 = (function (){var statearr_28973 = state_28953;
(statearr_28973[(11)] = inst_28945);

return statearr_28973;
})();
var statearr_28974_29000 = state_28953__$1;
(statearr_28974_29000[(2)] = null);

(statearr_28974_29000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28954 === (8))){
var inst_28912 = (state_28953[(9)]);
var inst_28916 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28912,opts);
var state_28953__$1 = state_28953;
if(cljs.core.truth_(inst_28916)){
var statearr_28975_29001 = state_28953__$1;
(statearr_28975_29001[(1)] = (11));

} else {
var statearr_28976_29002 = state_28953__$1;
(statearr_28976_29002[(1)] = (12));

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
});})(c__22927__auto___28984,ch))
;
return ((function (switch__22813__auto__,c__22927__auto___28984,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____0 = (function (){
var statearr_28980 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28980[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__);

(statearr_28980[(1)] = (1));

return statearr_28980;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____1 = (function (state_28953){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_28953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e28981){if((e28981 instanceof Object)){
var ex__22817__auto__ = e28981;
var statearr_28982_29003 = state_28953;
(statearr_28982_29003[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29004 = state_28953;
state_28953 = G__29004;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__ = function(state_28953){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____1.call(this,state_28953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22814__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___28984,ch))
})();
var state__22929__auto__ = (function (){var statearr_28983 = f__22928__auto__.call(null);
(statearr_28983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___28984);

return statearr_28983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___28984,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29005_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29005_SHARP_));
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
var base_path_29012 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29012){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29010 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29011 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29011;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29010;
}}catch (e29009){if((e29009 instanceof Error)){
var e = e29009;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29012], null));
} else {
var e = e29009;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29012))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29013){
var map__29022 = p__29013;
var map__29022__$1 = ((((!((map__29022 == null)))?((((map__29022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29022):map__29022);
var opts = map__29022__$1;
var build_id = cljs.core.get.call(null,map__29022__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29022,map__29022__$1,opts,build_id){
return (function (p__29024){
var vec__29025 = p__29024;
var seq__29026 = cljs.core.seq.call(null,vec__29025);
var first__29027 = cljs.core.first.call(null,seq__29026);
var seq__29026__$1 = cljs.core.next.call(null,seq__29026);
var map__29028 = first__29027;
var map__29028__$1 = ((((!((map__29028 == null)))?((((map__29028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29028):map__29028);
var msg = map__29028__$1;
var msg_name = cljs.core.get.call(null,map__29028__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29026__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29025,seq__29026,first__29027,seq__29026__$1,map__29028,map__29028__$1,msg,msg_name,_,map__29022,map__29022__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29025,seq__29026,first__29027,seq__29026__$1,map__29028,map__29028__$1,msg,msg_name,_,map__29022,map__29022__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29022,map__29022__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29036){
var vec__29037 = p__29036;
var seq__29038 = cljs.core.seq.call(null,vec__29037);
var first__29039 = cljs.core.first.call(null,seq__29038);
var seq__29038__$1 = cljs.core.next.call(null,seq__29038);
var map__29040 = first__29039;
var map__29040__$1 = ((((!((map__29040 == null)))?((((map__29040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29040):map__29040);
var msg = map__29040__$1;
var msg_name = cljs.core.get.call(null,map__29040__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29038__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29042){
var map__29054 = p__29042;
var map__29054__$1 = ((((!((map__29054 == null)))?((((map__29054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29054):map__29054);
var on_compile_warning = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29054,map__29054__$1,on_compile_warning,on_compile_fail){
return (function (p__29056){
var vec__29057 = p__29056;
var seq__29058 = cljs.core.seq.call(null,vec__29057);
var first__29059 = cljs.core.first.call(null,seq__29058);
var seq__29058__$1 = cljs.core.next.call(null,seq__29058);
var map__29060 = first__29059;
var map__29060__$1 = ((((!((map__29060 == null)))?((((map__29060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29060):map__29060);
var msg = map__29060__$1;
var msg_name = cljs.core.get.call(null,map__29060__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29058__$1;
var pred__29062 = cljs.core._EQ_;
var expr__29063 = msg_name;
if(cljs.core.truth_(pred__29062.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29063))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29062.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29063))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29054,map__29054__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__,msg_hist,msg_names,msg){
return (function (state_29279){
var state_val_29280 = (state_29279[(1)]);
if((state_val_29280 === (7))){
var inst_29203 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29203)){
var statearr_29281_29327 = state_29279__$1;
(statearr_29281_29327[(1)] = (8));

} else {
var statearr_29282_29328 = state_29279__$1;
(statearr_29282_29328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (20))){
var inst_29273 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29283_29329 = state_29279__$1;
(statearr_29283_29329[(2)] = inst_29273);

(statearr_29283_29329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (27))){
var inst_29269 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29284_29330 = state_29279__$1;
(statearr_29284_29330[(2)] = inst_29269);

(statearr_29284_29330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (1))){
var inst_29196 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29196)){
var statearr_29285_29331 = state_29279__$1;
(statearr_29285_29331[(1)] = (2));

} else {
var statearr_29286_29332 = state_29279__$1;
(statearr_29286_29332[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (24))){
var inst_29271 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29287_29333 = state_29279__$1;
(statearr_29287_29333[(2)] = inst_29271);

(statearr_29287_29333[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (4))){
var inst_29277 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29279__$1,inst_29277);
} else {
if((state_val_29280 === (15))){
var inst_29275 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29288_29334 = state_29279__$1;
(statearr_29288_29334[(2)] = inst_29275);

(statearr_29288_29334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (21))){
var inst_29234 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29289_29335 = state_29279__$1;
(statearr_29289_29335[(2)] = inst_29234);

(statearr_29289_29335[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (31))){
var inst_29258 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29258)){
var statearr_29290_29336 = state_29279__$1;
(statearr_29290_29336[(1)] = (34));

} else {
var statearr_29291_29337 = state_29279__$1;
(statearr_29291_29337[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (32))){
var inst_29267 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29292_29338 = state_29279__$1;
(statearr_29292_29338[(2)] = inst_29267);

(statearr_29292_29338[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (33))){
var inst_29256 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29293_29339 = state_29279__$1;
(statearr_29293_29339[(2)] = inst_29256);

(statearr_29293_29339[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (13))){
var inst_29217 = figwheel.client.heads_up.clear.call(null);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(16),inst_29217);
} else {
if((state_val_29280 === (22))){
var inst_29238 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29239 = figwheel.client.heads_up.append_message.call(null,inst_29238);
var state_29279__$1 = state_29279;
var statearr_29294_29340 = state_29279__$1;
(statearr_29294_29340[(2)] = inst_29239);

(statearr_29294_29340[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (36))){
var inst_29265 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29295_29341 = state_29279__$1;
(statearr_29295_29341[(2)] = inst_29265);

(statearr_29295_29341[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (29))){
var inst_29249 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29296_29342 = state_29279__$1;
(statearr_29296_29342[(2)] = inst_29249);

(statearr_29296_29342[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (6))){
var inst_29198 = (state_29279[(7)]);
var state_29279__$1 = state_29279;
var statearr_29297_29343 = state_29279__$1;
(statearr_29297_29343[(2)] = inst_29198);

(statearr_29297_29343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (28))){
var inst_29245 = (state_29279[(2)]);
var inst_29246 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29247 = figwheel.client.heads_up.display_warning.call(null,inst_29246);
var state_29279__$1 = (function (){var statearr_29298 = state_29279;
(statearr_29298[(8)] = inst_29245);

return statearr_29298;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(29),inst_29247);
} else {
if((state_val_29280 === (25))){
var inst_29243 = figwheel.client.heads_up.clear.call(null);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(28),inst_29243);
} else {
if((state_val_29280 === (34))){
var inst_29260 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(37),inst_29260);
} else {
if((state_val_29280 === (17))){
var inst_29225 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29299_29344 = state_29279__$1;
(statearr_29299_29344[(2)] = inst_29225);

(statearr_29299_29344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (3))){
var inst_29215 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29215)){
var statearr_29300_29345 = state_29279__$1;
(statearr_29300_29345[(1)] = (13));

} else {
var statearr_29301_29346 = state_29279__$1;
(statearr_29301_29346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (12))){
var inst_29211 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29302_29347 = state_29279__$1;
(statearr_29302_29347[(2)] = inst_29211);

(statearr_29302_29347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (2))){
var inst_29198 = (state_29279[(7)]);
var inst_29198__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29279__$1 = (function (){var statearr_29303 = state_29279;
(statearr_29303[(7)] = inst_29198__$1);

return statearr_29303;
})();
if(cljs.core.truth_(inst_29198__$1)){
var statearr_29304_29348 = state_29279__$1;
(statearr_29304_29348[(1)] = (5));

} else {
var statearr_29305_29349 = state_29279__$1;
(statearr_29305_29349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (23))){
var inst_29241 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29241)){
var statearr_29306_29350 = state_29279__$1;
(statearr_29306_29350[(1)] = (25));

} else {
var statearr_29307_29351 = state_29279__$1;
(statearr_29307_29351[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (35))){
var state_29279__$1 = state_29279;
var statearr_29308_29352 = state_29279__$1;
(statearr_29308_29352[(2)] = null);

(statearr_29308_29352[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (19))){
var inst_29236 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29236)){
var statearr_29309_29353 = state_29279__$1;
(statearr_29309_29353[(1)] = (22));

} else {
var statearr_29310_29354 = state_29279__$1;
(statearr_29310_29354[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (11))){
var inst_29207 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29311_29355 = state_29279__$1;
(statearr_29311_29355[(2)] = inst_29207);

(statearr_29311_29355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (9))){
var inst_29209 = figwheel.client.heads_up.clear.call(null);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(12),inst_29209);
} else {
if((state_val_29280 === (5))){
var inst_29200 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29279__$1 = state_29279;
var statearr_29312_29356 = state_29279__$1;
(statearr_29312_29356[(2)] = inst_29200);

(statearr_29312_29356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (14))){
var inst_29227 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29227)){
var statearr_29313_29357 = state_29279__$1;
(statearr_29313_29357[(1)] = (18));

} else {
var statearr_29314_29358 = state_29279__$1;
(statearr_29314_29358[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (26))){
var inst_29251 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29251)){
var statearr_29315_29359 = state_29279__$1;
(statearr_29315_29359[(1)] = (30));

} else {
var statearr_29316_29360 = state_29279__$1;
(statearr_29316_29360[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (16))){
var inst_29219 = (state_29279[(2)]);
var inst_29220 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29221 = figwheel.client.format_messages.call(null,inst_29220);
var inst_29222 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29223 = figwheel.client.heads_up.display_error.call(null,inst_29221,inst_29222);
var state_29279__$1 = (function (){var statearr_29317 = state_29279;
(statearr_29317[(9)] = inst_29219);

return statearr_29317;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(17),inst_29223);
} else {
if((state_val_29280 === (30))){
var inst_29253 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29254 = figwheel.client.heads_up.display_warning.call(null,inst_29253);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(33),inst_29254);
} else {
if((state_val_29280 === (10))){
var inst_29213 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29318_29361 = state_29279__$1;
(statearr_29318_29361[(2)] = inst_29213);

(statearr_29318_29361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (18))){
var inst_29229 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29230 = figwheel.client.format_messages.call(null,inst_29229);
var inst_29231 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29232 = figwheel.client.heads_up.display_error.call(null,inst_29230,inst_29231);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(21),inst_29232);
} else {
if((state_val_29280 === (37))){
var inst_29262 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29319_29362 = state_29279__$1;
(statearr_29319_29362[(2)] = inst_29262);

(statearr_29319_29362[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29280 === (8))){
var inst_29205 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29279__$1,(11),inst_29205);
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
var statearr_29323 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29323[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__);

(statearr_29323[(1)] = (1));

return statearr_29323;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____1 = (function (state_29279){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_29279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e29324){if((e29324 instanceof Object)){
var ex__22817__auto__ = e29324;
var statearr_29325_29363 = state_29279;
(statearr_29325_29363[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29279);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29364 = state_29279;
state_29279 = G__29364;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__ = function(state_29279){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____1.call(this,state_29279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__,msg_hist,msg_names,msg))
})();
var state__22929__auto__ = (function (){var statearr_29326 = f__22928__auto__.call(null);
(statearr_29326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_29326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__,msg_hist,msg_names,msg))
);

return c__22927__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22927__auto___29427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___29427,ch){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___29427,ch){
return (function (state_29410){
var state_val_29411 = (state_29410[(1)]);
if((state_val_29411 === (1))){
var state_29410__$1 = state_29410;
var statearr_29412_29428 = state_29410__$1;
(statearr_29412_29428[(2)] = null);

(statearr_29412_29428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (2))){
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29410__$1,(4),ch);
} else {
if((state_val_29411 === (3))){
var inst_29408 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29410__$1,inst_29408);
} else {
if((state_val_29411 === (4))){
var inst_29398 = (state_29410[(7)]);
var inst_29398__$1 = (state_29410[(2)]);
var state_29410__$1 = (function (){var statearr_29413 = state_29410;
(statearr_29413[(7)] = inst_29398__$1);

return statearr_29413;
})();
if(cljs.core.truth_(inst_29398__$1)){
var statearr_29414_29429 = state_29410__$1;
(statearr_29414_29429[(1)] = (5));

} else {
var statearr_29415_29430 = state_29410__$1;
(statearr_29415_29430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (5))){
var inst_29398 = (state_29410[(7)]);
var inst_29400 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29398);
var state_29410__$1 = state_29410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29410__$1,(8),inst_29400);
} else {
if((state_val_29411 === (6))){
var state_29410__$1 = state_29410;
var statearr_29416_29431 = state_29410__$1;
(statearr_29416_29431[(2)] = null);

(statearr_29416_29431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (7))){
var inst_29406 = (state_29410[(2)]);
var state_29410__$1 = state_29410;
var statearr_29417_29432 = state_29410__$1;
(statearr_29417_29432[(2)] = inst_29406);

(statearr_29417_29432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29411 === (8))){
var inst_29402 = (state_29410[(2)]);
var state_29410__$1 = (function (){var statearr_29418 = state_29410;
(statearr_29418[(8)] = inst_29402);

return statearr_29418;
})();
var statearr_29419_29433 = state_29410__$1;
(statearr_29419_29433[(2)] = null);

(statearr_29419_29433[(1)] = (2));


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
});})(c__22927__auto___29427,ch))
;
return ((function (switch__22813__auto__,c__22927__auto___29427,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22814__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22814__auto____0 = (function (){
var statearr_29423 = [null,null,null,null,null,null,null,null,null];
(statearr_29423[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22814__auto__);

(statearr_29423[(1)] = (1));

return statearr_29423;
});
var figwheel$client$heads_up_plugin_$_state_machine__22814__auto____1 = (function (state_29410){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_29410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e29424){if((e29424 instanceof Object)){
var ex__22817__auto__ = e29424;
var statearr_29425_29434 = state_29410;
(statearr_29425_29434[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29424;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29435 = state_29410;
state_29410 = G__29435;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22814__auto__ = function(state_29410){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22814__auto____1.call(this,state_29410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22814__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22814__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___29427,ch))
})();
var state__22929__auto__ = (function (){var statearr_29426 = f__22928__auto__.call(null);
(statearr_29426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___29427);

return statearr_29426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___29427,ch))
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
return (function (state_29456){
var state_val_29457 = (state_29456[(1)]);
if((state_val_29457 === (1))){
var inst_29451 = cljs.core.async.timeout.call(null,(3000));
var state_29456__$1 = state_29456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29456__$1,(2),inst_29451);
} else {
if((state_val_29457 === (2))){
var inst_29453 = (state_29456[(2)]);
var inst_29454 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29456__$1 = (function (){var statearr_29458 = state_29456;
(statearr_29458[(7)] = inst_29453);

return statearr_29458;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29456__$1,inst_29454);
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
var statearr_29462 = [null,null,null,null,null,null,null,null];
(statearr_29462[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__);

(statearr_29462[(1)] = (1));

return statearr_29462;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____1 = (function (state_29456){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_29456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e29463){if((e29463 instanceof Object)){
var ex__22817__auto__ = e29463;
var statearr_29464_29466 = state_29456;
(statearr_29464_29466[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29467 = state_29456;
state_29456 = G__29467;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__ = function(state_29456){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____1.call(this,state_29456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22814__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_29465 = f__22928__auto__.call(null);
(statearr_29465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_29465;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29468){
var map__29475 = p__29468;
var map__29475__$1 = ((((!((map__29475 == null)))?((((map__29475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29475):map__29475);
var ed = map__29475__$1;
var formatted_exception = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29475__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29477_29481 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29478_29482 = null;
var count__29479_29483 = (0);
var i__29480_29484 = (0);
while(true){
if((i__29480_29484 < count__29479_29483)){
var msg_29485 = cljs.core._nth.call(null,chunk__29478_29482,i__29480_29484);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29485);

var G__29486 = seq__29477_29481;
var G__29487 = chunk__29478_29482;
var G__29488 = count__29479_29483;
var G__29489 = (i__29480_29484 + (1));
seq__29477_29481 = G__29486;
chunk__29478_29482 = G__29487;
count__29479_29483 = G__29488;
i__29480_29484 = G__29489;
continue;
} else {
var temp__6728__auto___29490 = cljs.core.seq.call(null,seq__29477_29481);
if(temp__6728__auto___29490){
var seq__29477_29491__$1 = temp__6728__auto___29490;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29477_29491__$1)){
var c__21044__auto___29492 = cljs.core.chunk_first.call(null,seq__29477_29491__$1);
var G__29493 = cljs.core.chunk_rest.call(null,seq__29477_29491__$1);
var G__29494 = c__21044__auto___29492;
var G__29495 = cljs.core.count.call(null,c__21044__auto___29492);
var G__29496 = (0);
seq__29477_29481 = G__29493;
chunk__29478_29482 = G__29494;
count__29479_29483 = G__29495;
i__29480_29484 = G__29496;
continue;
} else {
var msg_29497 = cljs.core.first.call(null,seq__29477_29491__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29497);

var G__29498 = cljs.core.next.call(null,seq__29477_29491__$1);
var G__29499 = null;
var G__29500 = (0);
var G__29501 = (0);
seq__29477_29481 = G__29498;
chunk__29478_29482 = G__29499;
count__29479_29483 = G__29500;
i__29480_29484 = G__29501;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29502){
var map__29505 = p__29502;
var map__29505__$1 = ((((!((map__29505 == null)))?((((map__29505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29505):map__29505);
var w = map__29505__$1;
var message = cljs.core.get.call(null,map__29505__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29517 = cljs.core.seq.call(null,plugins);
var chunk__29518 = null;
var count__29519 = (0);
var i__29520 = (0);
while(true){
if((i__29520 < count__29519)){
var vec__29521 = cljs.core._nth.call(null,chunk__29518,i__29520);
var k = cljs.core.nth.call(null,vec__29521,(0),null);
var plugin = cljs.core.nth.call(null,vec__29521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29527 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29517,chunk__29518,count__29519,i__29520,pl_29527,vec__29521,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29527.call(null,msg_hist);
});})(seq__29517,chunk__29518,count__29519,i__29520,pl_29527,vec__29521,k,plugin))
);
} else {
}

var G__29528 = seq__29517;
var G__29529 = chunk__29518;
var G__29530 = count__29519;
var G__29531 = (i__29520 + (1));
seq__29517 = G__29528;
chunk__29518 = G__29529;
count__29519 = G__29530;
i__29520 = G__29531;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__29517);
if(temp__6728__auto__){
var seq__29517__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29517__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__29517__$1);
var G__29532 = cljs.core.chunk_rest.call(null,seq__29517__$1);
var G__29533 = c__21044__auto__;
var G__29534 = cljs.core.count.call(null,c__21044__auto__);
var G__29535 = (0);
seq__29517 = G__29532;
chunk__29518 = G__29533;
count__29519 = G__29534;
i__29520 = G__29535;
continue;
} else {
var vec__29524 = cljs.core.first.call(null,seq__29517__$1);
var k = cljs.core.nth.call(null,vec__29524,(0),null);
var plugin = cljs.core.nth.call(null,vec__29524,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29536 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29517,chunk__29518,count__29519,i__29520,pl_29536,vec__29524,k,plugin,seq__29517__$1,temp__6728__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29536.call(null,msg_hist);
});})(seq__29517,chunk__29518,count__29519,i__29520,pl_29536,vec__29524,k,plugin,seq__29517__$1,temp__6728__auto__))
);
} else {
}

var G__29537 = cljs.core.next.call(null,seq__29517__$1);
var G__29538 = null;
var G__29539 = (0);
var G__29540 = (0);
seq__29517 = G__29537;
chunk__29518 = G__29538;
count__29519 = G__29539;
i__29520 = G__29540;
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
var args29541 = [];
var len__21324__auto___29544 = arguments.length;
var i__21325__auto___29545 = (0);
while(true){
if((i__21325__auto___29545 < len__21324__auto___29544)){
args29541.push((arguments[i__21325__auto___29545]));

var G__29546 = (i__21325__auto___29545 + (1));
i__21325__auto___29545 = G__29546;
continue;
} else {
}
break;
}

var G__29543 = args29541.length;
switch (G__29543) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29541.length)].join('')));

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
var len__21324__auto___29552 = arguments.length;
var i__21325__auto___29553 = (0);
while(true){
if((i__21325__auto___29553 < len__21324__auto___29552)){
args__21331__auto__.push((arguments[i__21325__auto___29553]));

var G__29554 = (i__21325__auto___29553 + (1));
i__21325__auto___29553 = G__29554;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((0) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__21332__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29549){
var map__29550 = p__29549;
var map__29550__$1 = ((((!((map__29550 == null)))?((((map__29550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29550):map__29550);
var opts = map__29550__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29548){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29548));
});


//# sourceMappingURL=client.js.map