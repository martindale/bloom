// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20141__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20141__auto__){
return or__20141__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20141__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25918_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25918_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25923 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25924 = null;
var count__25925 = (0);
var i__25926 = (0);
while(true){
if((i__25926 < count__25925)){
var n = cljs.core._nth.call(null,chunk__25924,i__25926);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25927 = seq__25923;
var G__25928 = chunk__25924;
var G__25929 = count__25925;
var G__25930 = (i__25926 + (1));
seq__25923 = G__25927;
chunk__25924 = G__25928;
count__25925 = G__25929;
i__25926 = G__25930;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__25923);
if(temp__6728__auto__){
var seq__25923__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25923__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__25923__$1);
var G__25931 = cljs.core.chunk_rest.call(null,seq__25923__$1);
var G__25932 = c__21044__auto__;
var G__25933 = cljs.core.count.call(null,c__21044__auto__);
var G__25934 = (0);
seq__25923 = G__25931;
chunk__25924 = G__25932;
count__25925 = G__25933;
i__25926 = G__25934;
continue;
} else {
var n = cljs.core.first.call(null,seq__25923__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25935 = cljs.core.next.call(null,seq__25923__$1);
var G__25936 = null;
var G__25937 = (0);
var G__25938 = (0);
seq__25923 = G__25935;
chunk__25924 = G__25936;
count__25925 = G__25937;
i__25926 = G__25938;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25989_26000 = cljs.core.seq.call(null,deps);
var chunk__25990_26001 = null;
var count__25991_26002 = (0);
var i__25992_26003 = (0);
while(true){
if((i__25992_26003 < count__25991_26002)){
var dep_26004 = cljs.core._nth.call(null,chunk__25990_26001,i__25992_26003);
topo_sort_helper_STAR_.call(null,dep_26004,(depth + (1)),state);

var G__26005 = seq__25989_26000;
var G__26006 = chunk__25990_26001;
var G__26007 = count__25991_26002;
var G__26008 = (i__25992_26003 + (1));
seq__25989_26000 = G__26005;
chunk__25990_26001 = G__26006;
count__25991_26002 = G__26007;
i__25992_26003 = G__26008;
continue;
} else {
var temp__6728__auto___26009 = cljs.core.seq.call(null,seq__25989_26000);
if(temp__6728__auto___26009){
var seq__25989_26010__$1 = temp__6728__auto___26009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25989_26010__$1)){
var c__21044__auto___26011 = cljs.core.chunk_first.call(null,seq__25989_26010__$1);
var G__26012 = cljs.core.chunk_rest.call(null,seq__25989_26010__$1);
var G__26013 = c__21044__auto___26011;
var G__26014 = cljs.core.count.call(null,c__21044__auto___26011);
var G__26015 = (0);
seq__25989_26000 = G__26012;
chunk__25990_26001 = G__26013;
count__25991_26002 = G__26014;
i__25992_26003 = G__26015;
continue;
} else {
var dep_26016 = cljs.core.first.call(null,seq__25989_26010__$1);
topo_sort_helper_STAR_.call(null,dep_26016,(depth + (1)),state);

var G__26017 = cljs.core.next.call(null,seq__25989_26010__$1);
var G__26018 = null;
var G__26019 = (0);
var G__26020 = (0);
seq__25989_26000 = G__26017;
chunk__25990_26001 = G__26018;
count__25991_26002 = G__26019;
i__25992_26003 = G__26020;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25993){
var vec__25997 = p__25993;
var seq__25998 = cljs.core.seq.call(null,vec__25997);
var first__25999 = cljs.core.first.call(null,seq__25998);
var seq__25998__$1 = cljs.core.next.call(null,seq__25998);
var x = first__25999;
var xs = seq__25998__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25997,seq__25998,first__25999,seq__25998__$1,x,xs,get_deps__$1){
return (function (p1__25939_SHARP_){
return clojure.set.difference.call(null,p1__25939_SHARP_,x);
});})(vec__25997,seq__25998,first__25999,seq__25998__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__26033 = cljs.core.seq.call(null,provides);
var chunk__26034 = null;
var count__26035 = (0);
var i__26036 = (0);
while(true){
if((i__26036 < count__26035)){
var prov = cljs.core._nth.call(null,chunk__26034,i__26036);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26037_26045 = cljs.core.seq.call(null,requires);
var chunk__26038_26046 = null;
var count__26039_26047 = (0);
var i__26040_26048 = (0);
while(true){
if((i__26040_26048 < count__26039_26047)){
var req_26049 = cljs.core._nth.call(null,chunk__26038_26046,i__26040_26048);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26049,prov);

var G__26050 = seq__26037_26045;
var G__26051 = chunk__26038_26046;
var G__26052 = count__26039_26047;
var G__26053 = (i__26040_26048 + (1));
seq__26037_26045 = G__26050;
chunk__26038_26046 = G__26051;
count__26039_26047 = G__26052;
i__26040_26048 = G__26053;
continue;
} else {
var temp__6728__auto___26054 = cljs.core.seq.call(null,seq__26037_26045);
if(temp__6728__auto___26054){
var seq__26037_26055__$1 = temp__6728__auto___26054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26037_26055__$1)){
var c__21044__auto___26056 = cljs.core.chunk_first.call(null,seq__26037_26055__$1);
var G__26057 = cljs.core.chunk_rest.call(null,seq__26037_26055__$1);
var G__26058 = c__21044__auto___26056;
var G__26059 = cljs.core.count.call(null,c__21044__auto___26056);
var G__26060 = (0);
seq__26037_26045 = G__26057;
chunk__26038_26046 = G__26058;
count__26039_26047 = G__26059;
i__26040_26048 = G__26060;
continue;
} else {
var req_26061 = cljs.core.first.call(null,seq__26037_26055__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26061,prov);

var G__26062 = cljs.core.next.call(null,seq__26037_26055__$1);
var G__26063 = null;
var G__26064 = (0);
var G__26065 = (0);
seq__26037_26045 = G__26062;
chunk__26038_26046 = G__26063;
count__26039_26047 = G__26064;
i__26040_26048 = G__26065;
continue;
}
} else {
}
}
break;
}

var G__26066 = seq__26033;
var G__26067 = chunk__26034;
var G__26068 = count__26035;
var G__26069 = (i__26036 + (1));
seq__26033 = G__26066;
chunk__26034 = G__26067;
count__26035 = G__26068;
i__26036 = G__26069;
continue;
} else {
var temp__6728__auto__ = cljs.core.seq.call(null,seq__26033);
if(temp__6728__auto__){
var seq__26033__$1 = temp__6728__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26033__$1)){
var c__21044__auto__ = cljs.core.chunk_first.call(null,seq__26033__$1);
var G__26070 = cljs.core.chunk_rest.call(null,seq__26033__$1);
var G__26071 = c__21044__auto__;
var G__26072 = cljs.core.count.call(null,c__21044__auto__);
var G__26073 = (0);
seq__26033 = G__26070;
chunk__26034 = G__26071;
count__26035 = G__26072;
i__26036 = G__26073;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26033__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26041_26074 = cljs.core.seq.call(null,requires);
var chunk__26042_26075 = null;
var count__26043_26076 = (0);
var i__26044_26077 = (0);
while(true){
if((i__26044_26077 < count__26043_26076)){
var req_26078 = cljs.core._nth.call(null,chunk__26042_26075,i__26044_26077);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26078,prov);

var G__26079 = seq__26041_26074;
var G__26080 = chunk__26042_26075;
var G__26081 = count__26043_26076;
var G__26082 = (i__26044_26077 + (1));
seq__26041_26074 = G__26079;
chunk__26042_26075 = G__26080;
count__26043_26076 = G__26081;
i__26044_26077 = G__26082;
continue;
} else {
var temp__6728__auto___26083__$1 = cljs.core.seq.call(null,seq__26041_26074);
if(temp__6728__auto___26083__$1){
var seq__26041_26084__$1 = temp__6728__auto___26083__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26041_26084__$1)){
var c__21044__auto___26085 = cljs.core.chunk_first.call(null,seq__26041_26084__$1);
var G__26086 = cljs.core.chunk_rest.call(null,seq__26041_26084__$1);
var G__26087 = c__21044__auto___26085;
var G__26088 = cljs.core.count.call(null,c__21044__auto___26085);
var G__26089 = (0);
seq__26041_26074 = G__26086;
chunk__26042_26075 = G__26087;
count__26043_26076 = G__26088;
i__26044_26077 = G__26089;
continue;
} else {
var req_26090 = cljs.core.first.call(null,seq__26041_26084__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26090,prov);

var G__26091 = cljs.core.next.call(null,seq__26041_26084__$1);
var G__26092 = null;
var G__26093 = (0);
var G__26094 = (0);
seq__26041_26074 = G__26091;
chunk__26042_26075 = G__26092;
count__26043_26076 = G__26093;
i__26044_26077 = G__26094;
continue;
}
} else {
}
}
break;
}

var G__26095 = cljs.core.next.call(null,seq__26033__$1);
var G__26096 = null;
var G__26097 = (0);
var G__26098 = (0);
seq__26033 = G__26095;
chunk__26034 = G__26096;
count__26035 = G__26097;
i__26036 = G__26098;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26103_26107 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26104_26108 = null;
var count__26105_26109 = (0);
var i__26106_26110 = (0);
while(true){
if((i__26106_26110 < count__26105_26109)){
var ns_26111 = cljs.core._nth.call(null,chunk__26104_26108,i__26106_26110);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26111);

var G__26112 = seq__26103_26107;
var G__26113 = chunk__26104_26108;
var G__26114 = count__26105_26109;
var G__26115 = (i__26106_26110 + (1));
seq__26103_26107 = G__26112;
chunk__26104_26108 = G__26113;
count__26105_26109 = G__26114;
i__26106_26110 = G__26115;
continue;
} else {
var temp__6728__auto___26116 = cljs.core.seq.call(null,seq__26103_26107);
if(temp__6728__auto___26116){
var seq__26103_26117__$1 = temp__6728__auto___26116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26103_26117__$1)){
var c__21044__auto___26118 = cljs.core.chunk_first.call(null,seq__26103_26117__$1);
var G__26119 = cljs.core.chunk_rest.call(null,seq__26103_26117__$1);
var G__26120 = c__21044__auto___26118;
var G__26121 = cljs.core.count.call(null,c__21044__auto___26118);
var G__26122 = (0);
seq__26103_26107 = G__26119;
chunk__26104_26108 = G__26120;
count__26105_26109 = G__26121;
i__26106_26110 = G__26122;
continue;
} else {
var ns_26123 = cljs.core.first.call(null,seq__26103_26117__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26123);

var G__26124 = cljs.core.next.call(null,seq__26103_26117__$1);
var G__26125 = null;
var G__26126 = (0);
var G__26127 = (0);
seq__26103_26107 = G__26124;
chunk__26104_26108 = G__26125;
count__26105_26109 = G__26126;
i__26106_26110 = G__26127;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20141__auto__ = goog.require__;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__26128__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26129__i = 0, G__26129__a = new Array(arguments.length -  0);
while (G__26129__i < G__26129__a.length) {G__26129__a[G__26129__i] = arguments[G__26129__i + 0]; ++G__26129__i;}
  args = new cljs.core.IndexedSeq(G__26129__a,0);
} 
return G__26128__delegate.call(this,args);};
G__26128.cljs$lang$maxFixedArity = 0;
G__26128.cljs$lang$applyTo = (function (arglist__26130){
var args = cljs.core.seq(arglist__26130);
return G__26128__delegate(args);
});
G__26128.cljs$core$IFn$_invoke$arity$variadic = G__26128__delegate;
return G__26128;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26132 = cljs.core._EQ_;
var expr__26133 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26132.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26133))){
var path_parts = ((function (pred__26132,expr__26133){
return (function (p1__26131_SHARP_){
return clojure.string.split.call(null,p1__26131_SHARP_,/[\/\\]/);
});})(pred__26132,expr__26133))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26132,expr__26133){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26135){if((e26135 instanceof Error)){
var e = e26135;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26135;

}
}})());
});
;})(path_parts,sep,root,pred__26132,expr__26133))
} else {
if(cljs.core.truth_(pred__26132.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26133))){
return ((function (pred__26132,expr__26133){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__26132,expr__26133){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26132,expr__26133))
);

return deferred.addErrback(((function (deferred,pred__26132,expr__26133){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26132,expr__26133))
);
});
;})(pred__26132,expr__26133))
} else {
return ((function (pred__26132,expr__26133){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26132,expr__26133))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26136,callback){
var map__26139 = p__26136;
var map__26139__$1 = ((((!((map__26139 == null)))?((((map__26139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26139):map__26139);
var file_msg = map__26139__$1;
var request_url = cljs.core.get.call(null,map__26139__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26139,map__26139__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26139,map__26139__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_26163){
var state_val_26164 = (state_26163[(1)]);
if((state_val_26164 === (7))){
var inst_26159 = (state_26163[(2)]);
var state_26163__$1 = state_26163;
var statearr_26165_26185 = state_26163__$1;
(statearr_26165_26185[(2)] = inst_26159);

(statearr_26165_26185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26164 === (1))){
var state_26163__$1 = state_26163;
var statearr_26166_26186 = state_26163__$1;
(statearr_26166_26186[(2)] = null);

(statearr_26166_26186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26164 === (4))){
var inst_26143 = (state_26163[(7)]);
var inst_26143__$1 = (state_26163[(2)]);
var state_26163__$1 = (function (){var statearr_26167 = state_26163;
(statearr_26167[(7)] = inst_26143__$1);

return statearr_26167;
})();
if(cljs.core.truth_(inst_26143__$1)){
var statearr_26168_26187 = state_26163__$1;
(statearr_26168_26187[(1)] = (5));

} else {
var statearr_26169_26188 = state_26163__$1;
(statearr_26169_26188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26164 === (6))){
var state_26163__$1 = state_26163;
var statearr_26170_26189 = state_26163__$1;
(statearr_26170_26189[(2)] = null);

(statearr_26170_26189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26164 === (3))){
var inst_26161 = (state_26163[(2)]);
var state_26163__$1 = state_26163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26163__$1,inst_26161);
} else {
if((state_val_26164 === (2))){
var state_26163__$1 = state_26163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26163__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26164 === (11))){
var inst_26155 = (state_26163[(2)]);
var state_26163__$1 = (function (){var statearr_26171 = state_26163;
(statearr_26171[(8)] = inst_26155);

return statearr_26171;
})();
var statearr_26172_26190 = state_26163__$1;
(statearr_26172_26190[(2)] = null);

(statearr_26172_26190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26164 === (9))){
var inst_26147 = (state_26163[(9)]);
var inst_26149 = (state_26163[(10)]);
var inst_26151 = inst_26149.call(null,inst_26147);
var state_26163__$1 = state_26163;
var statearr_26173_26191 = state_26163__$1;
(statearr_26173_26191[(2)] = inst_26151);

(statearr_26173_26191[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26164 === (5))){
var inst_26143 = (state_26163[(7)]);
var inst_26145 = figwheel.client.file_reloading.blocking_load.call(null,inst_26143);
var state_26163__$1 = state_26163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26163__$1,(8),inst_26145);
} else {
if((state_val_26164 === (10))){
var inst_26147 = (state_26163[(9)]);
var inst_26153 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26147);
var state_26163__$1 = state_26163;
var statearr_26174_26192 = state_26163__$1;
(statearr_26174_26192[(2)] = inst_26153);

(statearr_26174_26192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26164 === (8))){
var inst_26149 = (state_26163[(10)]);
var inst_26143 = (state_26163[(7)]);
var inst_26147 = (state_26163[(2)]);
var inst_26148 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26149__$1 = cljs.core.get.call(null,inst_26148,inst_26143);
var state_26163__$1 = (function (){var statearr_26175 = state_26163;
(statearr_26175[(9)] = inst_26147);

(statearr_26175[(10)] = inst_26149__$1);

return statearr_26175;
})();
if(cljs.core.truth_(inst_26149__$1)){
var statearr_26176_26193 = state_26163__$1;
(statearr_26176_26193[(1)] = (9));

} else {
var statearr_26177_26194 = state_26163__$1;
(statearr_26177_26194[(1)] = (10));

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
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22814__auto__ = null;
var figwheel$client$file_reloading$state_machine__22814__auto____0 = (function (){
var statearr_26181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26181[(0)] = figwheel$client$file_reloading$state_machine__22814__auto__);

(statearr_26181[(1)] = (1));

return statearr_26181;
});
var figwheel$client$file_reloading$state_machine__22814__auto____1 = (function (state_26163){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_26163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e26182){if((e26182 instanceof Object)){
var ex__22817__auto__ = e26182;
var statearr_26183_26195 = state_26163;
(statearr_26183_26195[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26196 = state_26163;
state_26163 = G__26196;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22814__auto__ = function(state_26163){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22814__auto____1.call(this,state_26163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22814__auto____0;
figwheel$client$file_reloading$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22814__auto____1;
return figwheel$client$file_reloading$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_26184 = f__22928__auto__.call(null);
(statearr_26184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_26184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26197,callback){
var map__26200 = p__26197;
var map__26200__$1 = ((((!((map__26200 == null)))?((((map__26200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26200):map__26200);
var file_msg = map__26200__$1;
var namespace = cljs.core.get.call(null,map__26200__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26200,map__26200__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26200,map__26200__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26202){
var map__26205 = p__26202;
var map__26205__$1 = ((((!((map__26205 == null)))?((((map__26205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26205):map__26205);
var file_msg = map__26205__$1;
var namespace = cljs.core.get.call(null,map__26205__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20129__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20129__auto__){
var or__20141__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
var or__20141__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20141__auto____$1)){
return or__20141__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20129__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26207,callback){
var map__26210 = p__26207;
var map__26210__$1 = ((((!((map__26210 == null)))?((((map__26210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26210):map__26210);
var file_msg = map__26210__$1;
var request_url = cljs.core.get.call(null,map__26210__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22927__auto___26314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___26314,out){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___26314,out){
return (function (state_26296){
var state_val_26297 = (state_26296[(1)]);
if((state_val_26297 === (1))){
var inst_26270 = cljs.core.seq.call(null,files);
var inst_26271 = cljs.core.first.call(null,inst_26270);
var inst_26272 = cljs.core.next.call(null,inst_26270);
var inst_26273 = files;
var state_26296__$1 = (function (){var statearr_26298 = state_26296;
(statearr_26298[(7)] = inst_26273);

(statearr_26298[(8)] = inst_26271);

(statearr_26298[(9)] = inst_26272);

return statearr_26298;
})();
var statearr_26299_26315 = state_26296__$1;
(statearr_26299_26315[(2)] = null);

(statearr_26299_26315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26297 === (2))){
var inst_26273 = (state_26296[(7)]);
var inst_26279 = (state_26296[(10)]);
var inst_26278 = cljs.core.seq.call(null,inst_26273);
var inst_26279__$1 = cljs.core.first.call(null,inst_26278);
var inst_26280 = cljs.core.next.call(null,inst_26278);
var inst_26281 = (inst_26279__$1 == null);
var inst_26282 = cljs.core.not.call(null,inst_26281);
var state_26296__$1 = (function (){var statearr_26300 = state_26296;
(statearr_26300[(10)] = inst_26279__$1);

(statearr_26300[(11)] = inst_26280);

return statearr_26300;
})();
if(inst_26282){
var statearr_26301_26316 = state_26296__$1;
(statearr_26301_26316[(1)] = (4));

} else {
var statearr_26302_26317 = state_26296__$1;
(statearr_26302_26317[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26297 === (3))){
var inst_26294 = (state_26296[(2)]);
var state_26296__$1 = state_26296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26296__$1,inst_26294);
} else {
if((state_val_26297 === (4))){
var inst_26279 = (state_26296[(10)]);
var inst_26284 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26279);
var state_26296__$1 = state_26296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26296__$1,(7),inst_26284);
} else {
if((state_val_26297 === (5))){
var inst_26290 = cljs.core.async.close_BANG_.call(null,out);
var state_26296__$1 = state_26296;
var statearr_26303_26318 = state_26296__$1;
(statearr_26303_26318[(2)] = inst_26290);

(statearr_26303_26318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26297 === (6))){
var inst_26292 = (state_26296[(2)]);
var state_26296__$1 = state_26296;
var statearr_26304_26319 = state_26296__$1;
(statearr_26304_26319[(2)] = inst_26292);

(statearr_26304_26319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26297 === (7))){
var inst_26280 = (state_26296[(11)]);
var inst_26286 = (state_26296[(2)]);
var inst_26287 = cljs.core.async.put_BANG_.call(null,out,inst_26286);
var inst_26273 = inst_26280;
var state_26296__$1 = (function (){var statearr_26305 = state_26296;
(statearr_26305[(7)] = inst_26273);

(statearr_26305[(12)] = inst_26287);

return statearr_26305;
})();
var statearr_26306_26320 = state_26296__$1;
(statearr_26306_26320[(2)] = null);

(statearr_26306_26320[(1)] = (2));


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
});})(c__22927__auto___26314,out))
;
return ((function (switch__22813__auto__,c__22927__auto___26314,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto____0 = (function (){
var statearr_26310 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26310[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto__);

(statearr_26310[(1)] = (1));

return statearr_26310;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto____1 = (function (state_26296){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_26296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e26311){if((e26311 instanceof Object)){
var ex__22817__auto__ = e26311;
var statearr_26312_26321 = state_26296;
(statearr_26312_26321[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26322 = state_26296;
state_26296 = G__26322;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto__ = function(state_26296){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto____1.call(this,state_26296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___26314,out))
})();
var state__22929__auto__ = (function (){var statearr_26313 = f__22928__auto__.call(null);
(statearr_26313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___26314);

return statearr_26313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___26314,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26323,opts){
var map__26327 = p__26323;
var map__26327__$1 = ((((!((map__26327 == null)))?((((map__26327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26327):map__26327);
var eval_body__$1 = cljs.core.get.call(null,map__26327__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26327__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20129__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20129__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20129__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26329){var e = e26329;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6726__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26330_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26330_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6726__auto__)){
var file_msg = temp__6726__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__26339){
var vec__26340 = p__26339;
var k = cljs.core.nth.call(null,vec__26340,(0),null);
var v = cljs.core.nth.call(null,vec__26340,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26343){
var vec__26344 = p__26343;
var k = cljs.core.nth.call(null,vec__26344,(0),null);
var v = cljs.core.nth.call(null,vec__26344,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26350,p__26351){
var map__26598 = p__26350;
var map__26598__$1 = ((((!((map__26598 == null)))?((((map__26598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26598):map__26598);
var opts = map__26598__$1;
var before_jsload = cljs.core.get.call(null,map__26598__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26598__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26598__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26599 = p__26351;
var map__26599__$1 = ((((!((map__26599 == null)))?((((map__26599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26599):map__26599);
var msg = map__26599__$1;
var files = cljs.core.get.call(null,map__26599__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26599__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26599__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26752){
var state_val_26753 = (state_26752[(1)]);
if((state_val_26753 === (7))){
var inst_26614 = (state_26752[(7)]);
var inst_26613 = (state_26752[(8)]);
var inst_26616 = (state_26752[(9)]);
var inst_26615 = (state_26752[(10)]);
var inst_26621 = cljs.core._nth.call(null,inst_26614,inst_26616);
var inst_26622 = figwheel.client.file_reloading.eval_body.call(null,inst_26621,opts);
var inst_26623 = (inst_26616 + (1));
var tmp26754 = inst_26614;
var tmp26755 = inst_26613;
var tmp26756 = inst_26615;
var inst_26613__$1 = tmp26755;
var inst_26614__$1 = tmp26754;
var inst_26615__$1 = tmp26756;
var inst_26616__$1 = inst_26623;
var state_26752__$1 = (function (){var statearr_26757 = state_26752;
(statearr_26757[(7)] = inst_26614__$1);

(statearr_26757[(8)] = inst_26613__$1);

(statearr_26757[(9)] = inst_26616__$1);

(statearr_26757[(10)] = inst_26615__$1);

(statearr_26757[(11)] = inst_26622);

return statearr_26757;
})();
var statearr_26758_26844 = state_26752__$1;
(statearr_26758_26844[(2)] = null);

(statearr_26758_26844[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (20))){
var inst_26656 = (state_26752[(12)]);
var inst_26664 = figwheel.client.file_reloading.sort_files.call(null,inst_26656);
var state_26752__$1 = state_26752;
var statearr_26759_26845 = state_26752__$1;
(statearr_26759_26845[(2)] = inst_26664);

(statearr_26759_26845[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (27))){
var state_26752__$1 = state_26752;
var statearr_26760_26846 = state_26752__$1;
(statearr_26760_26846[(2)] = null);

(statearr_26760_26846[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (1))){
var inst_26605 = (state_26752[(13)]);
var inst_26602 = before_jsload.call(null,files);
var inst_26603 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26604 = (function (){return ((function (inst_26605,inst_26602,inst_26603,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26347_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26347_SHARP_);
});
;})(inst_26605,inst_26602,inst_26603,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26605__$1 = cljs.core.filter.call(null,inst_26604,files);
var inst_26606 = cljs.core.not_empty.call(null,inst_26605__$1);
var state_26752__$1 = (function (){var statearr_26761 = state_26752;
(statearr_26761[(14)] = inst_26603);

(statearr_26761[(15)] = inst_26602);

(statearr_26761[(13)] = inst_26605__$1);

return statearr_26761;
})();
if(cljs.core.truth_(inst_26606)){
var statearr_26762_26847 = state_26752__$1;
(statearr_26762_26847[(1)] = (2));

} else {
var statearr_26763_26848 = state_26752__$1;
(statearr_26763_26848[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (24))){
var state_26752__$1 = state_26752;
var statearr_26764_26849 = state_26752__$1;
(statearr_26764_26849[(2)] = null);

(statearr_26764_26849[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (39))){
var inst_26706 = (state_26752[(16)]);
var state_26752__$1 = state_26752;
var statearr_26765_26850 = state_26752__$1;
(statearr_26765_26850[(2)] = inst_26706);

(statearr_26765_26850[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (46))){
var inst_26747 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26766_26851 = state_26752__$1;
(statearr_26766_26851[(2)] = inst_26747);

(statearr_26766_26851[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (4))){
var inst_26650 = (state_26752[(2)]);
var inst_26651 = cljs.core.List.EMPTY;
var inst_26652 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26651);
var inst_26653 = (function (){return ((function (inst_26650,inst_26651,inst_26652,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26348_SHARP_){
var and__20129__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26348_SHARP_);
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26348_SHARP_));
} else {
return and__20129__auto__;
}
});
;})(inst_26650,inst_26651,inst_26652,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26654 = cljs.core.filter.call(null,inst_26653,files);
var inst_26655 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26656 = cljs.core.concat.call(null,inst_26654,inst_26655);
var state_26752__$1 = (function (){var statearr_26767 = state_26752;
(statearr_26767[(17)] = inst_26652);

(statearr_26767[(18)] = inst_26650);

(statearr_26767[(12)] = inst_26656);

return statearr_26767;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26768_26852 = state_26752__$1;
(statearr_26768_26852[(1)] = (16));

} else {
var statearr_26769_26853 = state_26752__$1;
(statearr_26769_26853[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (15))){
var inst_26640 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26770_26854 = state_26752__$1;
(statearr_26770_26854[(2)] = inst_26640);

(statearr_26770_26854[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (21))){
var inst_26666 = (state_26752[(19)]);
var inst_26666__$1 = (state_26752[(2)]);
var inst_26667 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26666__$1);
var state_26752__$1 = (function (){var statearr_26771 = state_26752;
(statearr_26771[(19)] = inst_26666__$1);

return statearr_26771;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26752__$1,(22),inst_26667);
} else {
if((state_val_26753 === (31))){
var inst_26750 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26752__$1,inst_26750);
} else {
if((state_val_26753 === (32))){
var inst_26706 = (state_26752[(16)]);
var inst_26711 = inst_26706.cljs$lang$protocol_mask$partition0$;
var inst_26712 = (inst_26711 & (64));
var inst_26713 = inst_26706.cljs$core$ISeq$;
var inst_26714 = (inst_26712) || (inst_26713);
var state_26752__$1 = state_26752;
if(cljs.core.truth_(inst_26714)){
var statearr_26772_26855 = state_26752__$1;
(statearr_26772_26855[(1)] = (35));

} else {
var statearr_26773_26856 = state_26752__$1;
(statearr_26773_26856[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (40))){
var inst_26727 = (state_26752[(20)]);
var inst_26726 = (state_26752[(2)]);
var inst_26727__$1 = cljs.core.get.call(null,inst_26726,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26728 = cljs.core.get.call(null,inst_26726,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26729 = cljs.core.not_empty.call(null,inst_26727__$1);
var state_26752__$1 = (function (){var statearr_26774 = state_26752;
(statearr_26774[(21)] = inst_26728);

(statearr_26774[(20)] = inst_26727__$1);

return statearr_26774;
})();
if(cljs.core.truth_(inst_26729)){
var statearr_26775_26857 = state_26752__$1;
(statearr_26775_26857[(1)] = (41));

} else {
var statearr_26776_26858 = state_26752__$1;
(statearr_26776_26858[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (33))){
var state_26752__$1 = state_26752;
var statearr_26777_26859 = state_26752__$1;
(statearr_26777_26859[(2)] = false);

(statearr_26777_26859[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (13))){
var inst_26626 = (state_26752[(22)]);
var inst_26630 = cljs.core.chunk_first.call(null,inst_26626);
var inst_26631 = cljs.core.chunk_rest.call(null,inst_26626);
var inst_26632 = cljs.core.count.call(null,inst_26630);
var inst_26613 = inst_26631;
var inst_26614 = inst_26630;
var inst_26615 = inst_26632;
var inst_26616 = (0);
var state_26752__$1 = (function (){var statearr_26778 = state_26752;
(statearr_26778[(7)] = inst_26614);

(statearr_26778[(8)] = inst_26613);

(statearr_26778[(9)] = inst_26616);

(statearr_26778[(10)] = inst_26615);

return statearr_26778;
})();
var statearr_26779_26860 = state_26752__$1;
(statearr_26779_26860[(2)] = null);

(statearr_26779_26860[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (22))){
var inst_26670 = (state_26752[(23)]);
var inst_26674 = (state_26752[(24)]);
var inst_26669 = (state_26752[(25)]);
var inst_26666 = (state_26752[(19)]);
var inst_26669__$1 = (state_26752[(2)]);
var inst_26670__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26669__$1);
var inst_26671 = (function (){var all_files = inst_26666;
var res_SINGLEQUOTE_ = inst_26669__$1;
var res = inst_26670__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26670,inst_26674,inst_26669,inst_26666,inst_26669__$1,inst_26670__$1,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26349_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26349_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26670,inst_26674,inst_26669,inst_26666,inst_26669__$1,inst_26670__$1,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26672 = cljs.core.filter.call(null,inst_26671,inst_26669__$1);
var inst_26673 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26674__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26673);
var inst_26675 = cljs.core.not_empty.call(null,inst_26674__$1);
var state_26752__$1 = (function (){var statearr_26780 = state_26752;
(statearr_26780[(23)] = inst_26670__$1);

(statearr_26780[(24)] = inst_26674__$1);

(statearr_26780[(25)] = inst_26669__$1);

(statearr_26780[(26)] = inst_26672);

return statearr_26780;
})();
if(cljs.core.truth_(inst_26675)){
var statearr_26781_26861 = state_26752__$1;
(statearr_26781_26861[(1)] = (23));

} else {
var statearr_26782_26862 = state_26752__$1;
(statearr_26782_26862[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (36))){
var state_26752__$1 = state_26752;
var statearr_26783_26863 = state_26752__$1;
(statearr_26783_26863[(2)] = false);

(statearr_26783_26863[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (41))){
var inst_26727 = (state_26752[(20)]);
var inst_26731 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26732 = cljs.core.map.call(null,inst_26731,inst_26727);
var inst_26733 = cljs.core.pr_str.call(null,inst_26732);
var inst_26734 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26733)].join('');
var inst_26735 = figwheel.client.utils.log.call(null,inst_26734);
var state_26752__$1 = state_26752;
var statearr_26784_26864 = state_26752__$1;
(statearr_26784_26864[(2)] = inst_26735);

(statearr_26784_26864[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (43))){
var inst_26728 = (state_26752[(21)]);
var inst_26738 = (state_26752[(2)]);
var inst_26739 = cljs.core.not_empty.call(null,inst_26728);
var state_26752__$1 = (function (){var statearr_26785 = state_26752;
(statearr_26785[(27)] = inst_26738);

return statearr_26785;
})();
if(cljs.core.truth_(inst_26739)){
var statearr_26786_26865 = state_26752__$1;
(statearr_26786_26865[(1)] = (44));

} else {
var statearr_26787_26866 = state_26752__$1;
(statearr_26787_26866[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (29))){
var inst_26670 = (state_26752[(23)]);
var inst_26674 = (state_26752[(24)]);
var inst_26669 = (state_26752[(25)]);
var inst_26666 = (state_26752[(19)]);
var inst_26672 = (state_26752[(26)]);
var inst_26706 = (state_26752[(16)]);
var inst_26702 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26705 = (function (){var all_files = inst_26666;
var res_SINGLEQUOTE_ = inst_26669;
var res = inst_26670;
var files_not_loaded = inst_26672;
var dependencies_that_loaded = inst_26674;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26706,inst_26702,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26704){
var map__26788 = p__26704;
var map__26788__$1 = ((((!((map__26788 == null)))?((((map__26788.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26788.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26788):map__26788);
var namespace = cljs.core.get.call(null,map__26788__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26706,inst_26702,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26706__$1 = cljs.core.group_by.call(null,inst_26705,inst_26672);
var inst_26708 = (inst_26706__$1 == null);
var inst_26709 = cljs.core.not.call(null,inst_26708);
var state_26752__$1 = (function (){var statearr_26790 = state_26752;
(statearr_26790[(28)] = inst_26702);

(statearr_26790[(16)] = inst_26706__$1);

return statearr_26790;
})();
if(inst_26709){
var statearr_26791_26867 = state_26752__$1;
(statearr_26791_26867[(1)] = (32));

} else {
var statearr_26792_26868 = state_26752__$1;
(statearr_26792_26868[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (44))){
var inst_26728 = (state_26752[(21)]);
var inst_26741 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26728);
var inst_26742 = cljs.core.pr_str.call(null,inst_26741);
var inst_26743 = [cljs.core.str("not required: "),cljs.core.str(inst_26742)].join('');
var inst_26744 = figwheel.client.utils.log.call(null,inst_26743);
var state_26752__$1 = state_26752;
var statearr_26793_26869 = state_26752__$1;
(statearr_26793_26869[(2)] = inst_26744);

(statearr_26793_26869[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (6))){
var inst_26647 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26794_26870 = state_26752__$1;
(statearr_26794_26870[(2)] = inst_26647);

(statearr_26794_26870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (28))){
var inst_26672 = (state_26752[(26)]);
var inst_26699 = (state_26752[(2)]);
var inst_26700 = cljs.core.not_empty.call(null,inst_26672);
var state_26752__$1 = (function (){var statearr_26795 = state_26752;
(statearr_26795[(29)] = inst_26699);

return statearr_26795;
})();
if(cljs.core.truth_(inst_26700)){
var statearr_26796_26871 = state_26752__$1;
(statearr_26796_26871[(1)] = (29));

} else {
var statearr_26797_26872 = state_26752__$1;
(statearr_26797_26872[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (25))){
var inst_26670 = (state_26752[(23)]);
var inst_26686 = (state_26752[(2)]);
var inst_26687 = cljs.core.not_empty.call(null,inst_26670);
var state_26752__$1 = (function (){var statearr_26798 = state_26752;
(statearr_26798[(30)] = inst_26686);

return statearr_26798;
})();
if(cljs.core.truth_(inst_26687)){
var statearr_26799_26873 = state_26752__$1;
(statearr_26799_26873[(1)] = (26));

} else {
var statearr_26800_26874 = state_26752__$1;
(statearr_26800_26874[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (34))){
var inst_26721 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
if(cljs.core.truth_(inst_26721)){
var statearr_26801_26875 = state_26752__$1;
(statearr_26801_26875[(1)] = (38));

} else {
var statearr_26802_26876 = state_26752__$1;
(statearr_26802_26876[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (17))){
var state_26752__$1 = state_26752;
var statearr_26803_26877 = state_26752__$1;
(statearr_26803_26877[(2)] = recompile_dependents);

(statearr_26803_26877[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (3))){
var state_26752__$1 = state_26752;
var statearr_26804_26878 = state_26752__$1;
(statearr_26804_26878[(2)] = null);

(statearr_26804_26878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (12))){
var inst_26643 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26805_26879 = state_26752__$1;
(statearr_26805_26879[(2)] = inst_26643);

(statearr_26805_26879[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (2))){
var inst_26605 = (state_26752[(13)]);
var inst_26612 = cljs.core.seq.call(null,inst_26605);
var inst_26613 = inst_26612;
var inst_26614 = null;
var inst_26615 = (0);
var inst_26616 = (0);
var state_26752__$1 = (function (){var statearr_26806 = state_26752;
(statearr_26806[(7)] = inst_26614);

(statearr_26806[(8)] = inst_26613);

(statearr_26806[(9)] = inst_26616);

(statearr_26806[(10)] = inst_26615);

return statearr_26806;
})();
var statearr_26807_26880 = state_26752__$1;
(statearr_26807_26880[(2)] = null);

(statearr_26807_26880[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (23))){
var inst_26670 = (state_26752[(23)]);
var inst_26674 = (state_26752[(24)]);
var inst_26669 = (state_26752[(25)]);
var inst_26666 = (state_26752[(19)]);
var inst_26672 = (state_26752[(26)]);
var inst_26677 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26679 = (function (){var all_files = inst_26666;
var res_SINGLEQUOTE_ = inst_26669;
var res = inst_26670;
var files_not_loaded = inst_26672;
var dependencies_that_loaded = inst_26674;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26677,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26678){
var map__26808 = p__26678;
var map__26808__$1 = ((((!((map__26808 == null)))?((((map__26808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26808):map__26808);
var request_url = cljs.core.get.call(null,map__26808__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26677,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26680 = cljs.core.reverse.call(null,inst_26674);
var inst_26681 = cljs.core.map.call(null,inst_26679,inst_26680);
var inst_26682 = cljs.core.pr_str.call(null,inst_26681);
var inst_26683 = figwheel.client.utils.log.call(null,inst_26682);
var state_26752__$1 = (function (){var statearr_26810 = state_26752;
(statearr_26810[(31)] = inst_26677);

return statearr_26810;
})();
var statearr_26811_26881 = state_26752__$1;
(statearr_26811_26881[(2)] = inst_26683);

(statearr_26811_26881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (35))){
var state_26752__$1 = state_26752;
var statearr_26812_26882 = state_26752__$1;
(statearr_26812_26882[(2)] = true);

(statearr_26812_26882[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (19))){
var inst_26656 = (state_26752[(12)]);
var inst_26662 = figwheel.client.file_reloading.expand_files.call(null,inst_26656);
var state_26752__$1 = state_26752;
var statearr_26813_26883 = state_26752__$1;
(statearr_26813_26883[(2)] = inst_26662);

(statearr_26813_26883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (11))){
var state_26752__$1 = state_26752;
var statearr_26814_26884 = state_26752__$1;
(statearr_26814_26884[(2)] = null);

(statearr_26814_26884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (9))){
var inst_26645 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26815_26885 = state_26752__$1;
(statearr_26815_26885[(2)] = inst_26645);

(statearr_26815_26885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (5))){
var inst_26616 = (state_26752[(9)]);
var inst_26615 = (state_26752[(10)]);
var inst_26618 = (inst_26616 < inst_26615);
var inst_26619 = inst_26618;
var state_26752__$1 = state_26752;
if(cljs.core.truth_(inst_26619)){
var statearr_26816_26886 = state_26752__$1;
(statearr_26816_26886[(1)] = (7));

} else {
var statearr_26817_26887 = state_26752__$1;
(statearr_26817_26887[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (14))){
var inst_26626 = (state_26752[(22)]);
var inst_26635 = cljs.core.first.call(null,inst_26626);
var inst_26636 = figwheel.client.file_reloading.eval_body.call(null,inst_26635,opts);
var inst_26637 = cljs.core.next.call(null,inst_26626);
var inst_26613 = inst_26637;
var inst_26614 = null;
var inst_26615 = (0);
var inst_26616 = (0);
var state_26752__$1 = (function (){var statearr_26818 = state_26752;
(statearr_26818[(7)] = inst_26614);

(statearr_26818[(8)] = inst_26613);

(statearr_26818[(32)] = inst_26636);

(statearr_26818[(9)] = inst_26616);

(statearr_26818[(10)] = inst_26615);

return statearr_26818;
})();
var statearr_26819_26888 = state_26752__$1;
(statearr_26819_26888[(2)] = null);

(statearr_26819_26888[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (45))){
var state_26752__$1 = state_26752;
var statearr_26820_26889 = state_26752__$1;
(statearr_26820_26889[(2)] = null);

(statearr_26820_26889[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (26))){
var inst_26670 = (state_26752[(23)]);
var inst_26674 = (state_26752[(24)]);
var inst_26669 = (state_26752[(25)]);
var inst_26666 = (state_26752[(19)]);
var inst_26672 = (state_26752[(26)]);
var inst_26689 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26691 = (function (){var all_files = inst_26666;
var res_SINGLEQUOTE_ = inst_26669;
var res = inst_26670;
var files_not_loaded = inst_26672;
var dependencies_that_loaded = inst_26674;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26689,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26690){
var map__26821 = p__26690;
var map__26821__$1 = ((((!((map__26821 == null)))?((((map__26821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26821):map__26821);
var namespace = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26821__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26689,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26692 = cljs.core.map.call(null,inst_26691,inst_26670);
var inst_26693 = cljs.core.pr_str.call(null,inst_26692);
var inst_26694 = figwheel.client.utils.log.call(null,inst_26693);
var inst_26695 = (function (){var all_files = inst_26666;
var res_SINGLEQUOTE_ = inst_26669;
var res = inst_26670;
var files_not_loaded = inst_26672;
var dependencies_that_loaded = inst_26674;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26689,inst_26691,inst_26692,inst_26693,inst_26694,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26670,inst_26674,inst_26669,inst_26666,inst_26672,inst_26689,inst_26691,inst_26692,inst_26693,inst_26694,state_val_26753,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26696 = setTimeout(inst_26695,(10));
var state_26752__$1 = (function (){var statearr_26823 = state_26752;
(statearr_26823[(33)] = inst_26694);

(statearr_26823[(34)] = inst_26689);

return statearr_26823;
})();
var statearr_26824_26890 = state_26752__$1;
(statearr_26824_26890[(2)] = inst_26696);

(statearr_26824_26890[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (16))){
var state_26752__$1 = state_26752;
var statearr_26825_26891 = state_26752__$1;
(statearr_26825_26891[(2)] = reload_dependents);

(statearr_26825_26891[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (38))){
var inst_26706 = (state_26752[(16)]);
var inst_26723 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26706);
var state_26752__$1 = state_26752;
var statearr_26826_26892 = state_26752__$1;
(statearr_26826_26892[(2)] = inst_26723);

(statearr_26826_26892[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (30))){
var state_26752__$1 = state_26752;
var statearr_26827_26893 = state_26752__$1;
(statearr_26827_26893[(2)] = null);

(statearr_26827_26893[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (10))){
var inst_26626 = (state_26752[(22)]);
var inst_26628 = cljs.core.chunked_seq_QMARK_.call(null,inst_26626);
var state_26752__$1 = state_26752;
if(inst_26628){
var statearr_26828_26894 = state_26752__$1;
(statearr_26828_26894[(1)] = (13));

} else {
var statearr_26829_26895 = state_26752__$1;
(statearr_26829_26895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (18))){
var inst_26660 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
if(cljs.core.truth_(inst_26660)){
var statearr_26830_26896 = state_26752__$1;
(statearr_26830_26896[(1)] = (19));

} else {
var statearr_26831_26897 = state_26752__$1;
(statearr_26831_26897[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (42))){
var state_26752__$1 = state_26752;
var statearr_26832_26898 = state_26752__$1;
(statearr_26832_26898[(2)] = null);

(statearr_26832_26898[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (37))){
var inst_26718 = (state_26752[(2)]);
var state_26752__$1 = state_26752;
var statearr_26833_26899 = state_26752__$1;
(statearr_26833_26899[(2)] = inst_26718);

(statearr_26833_26899[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26753 === (8))){
var inst_26626 = (state_26752[(22)]);
var inst_26613 = (state_26752[(8)]);
var inst_26626__$1 = cljs.core.seq.call(null,inst_26613);
var state_26752__$1 = (function (){var statearr_26834 = state_26752;
(statearr_26834[(22)] = inst_26626__$1);

return statearr_26834;
})();
if(inst_26626__$1){
var statearr_26835_26900 = state_26752__$1;
(statearr_26835_26900[(1)] = (10));

} else {
var statearr_26836_26901 = state_26752__$1;
(statearr_26836_26901[(1)] = (11));

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
});})(c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22813__auto__,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto____0 = (function (){
var statearr_26840 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26840[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto__);

(statearr_26840[(1)] = (1));

return statearr_26840;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto____1 = (function (state_26752){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_26752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e26841){if((e26841 instanceof Object)){
var ex__22817__auto__ = e26841;
var statearr_26842_26902 = state_26752;
(statearr_26842_26902[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26903 = state_26752;
state_26752 = G__26903;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto__ = function(state_26752){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto____1.call(this,state_26752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22929__auto__ = (function (){var statearr_26843 = f__22928__auto__.call(null);
(statearr_26843[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_26843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__,map__26598,map__26598__$1,opts,before_jsload,on_jsload,reload_dependents,map__26599,map__26599__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22927__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26906,link){
var map__26909 = p__26906;
var map__26909__$1 = ((((!((map__26909 == null)))?((((map__26909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26909):map__26909);
var file = cljs.core.get.call(null,map__26909__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = link.href;
if(cljs.core.truth_(temp__6728__auto__)){
var link_href = temp__6728__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6728__auto__,map__26909,map__26909__$1,file){
return (function (p1__26904_SHARP_,p2__26905_SHARP_){
if(cljs.core._EQ_.call(null,p1__26904_SHARP_,p2__26905_SHARP_)){
return p1__26904_SHARP_;
} else {
return false;
}
});})(link_href,temp__6728__auto__,map__26909,map__26909__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6728__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26915){
var map__26916 = p__26915;
var map__26916__$1 = ((((!((map__26916 == null)))?((((map__26916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26916):map__26916);
var match_length = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26916__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26911_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26911_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6728__auto__)){
var res = temp__6728__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26918 = [];
var len__21324__auto___26921 = arguments.length;
var i__21325__auto___26922 = (0);
while(true){
if((i__21325__auto___26922 < len__21324__auto___26921)){
args26918.push((arguments[i__21325__auto___26922]));

var G__26923 = (i__21325__auto___26922 + (1));
i__21325__auto___26922 = G__26923;
continue;
} else {
}
break;
}

var G__26920 = args26918.length;
switch (G__26920) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26918.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26925_SHARP_,p2__26926_SHARP_){
return cljs.core.assoc.call(null,p1__26925_SHARP_,cljs.core.get.call(null,p2__26926_SHARP_,key),p2__26926_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26927){
var map__26930 = p__26927;
var map__26930__$1 = ((((!((map__26930 == null)))?((((map__26930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26930):map__26930);
var f_data = map__26930__$1;
var file = cljs.core.get.call(null,map__26930__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6728__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6728__auto__)){
var link = temp__6728__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26932,files_msg){
var map__26939 = p__26932;
var map__26939__$1 = ((((!((map__26939 == null)))?((((map__26939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26939):map__26939);
var opts = map__26939__$1;
var on_cssload = cljs.core.get.call(null,map__26939__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26941_26945 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26942_26946 = null;
var count__26943_26947 = (0);
var i__26944_26948 = (0);
while(true){
if((i__26944_26948 < count__26943_26947)){
var f_26949 = cljs.core._nth.call(null,chunk__26942_26946,i__26944_26948);
figwheel.client.file_reloading.reload_css_file.call(null,f_26949);

var G__26950 = seq__26941_26945;
var G__26951 = chunk__26942_26946;
var G__26952 = count__26943_26947;
var G__26953 = (i__26944_26948 + (1));
seq__26941_26945 = G__26950;
chunk__26942_26946 = G__26951;
count__26943_26947 = G__26952;
i__26944_26948 = G__26953;
continue;
} else {
var temp__6728__auto___26954 = cljs.core.seq.call(null,seq__26941_26945);
if(temp__6728__auto___26954){
var seq__26941_26955__$1 = temp__6728__auto___26954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26941_26955__$1)){
var c__21044__auto___26956 = cljs.core.chunk_first.call(null,seq__26941_26955__$1);
var G__26957 = cljs.core.chunk_rest.call(null,seq__26941_26955__$1);
var G__26958 = c__21044__auto___26956;
var G__26959 = cljs.core.count.call(null,c__21044__auto___26956);
var G__26960 = (0);
seq__26941_26945 = G__26957;
chunk__26942_26946 = G__26958;
count__26943_26947 = G__26959;
i__26944_26948 = G__26960;
continue;
} else {
var f_26961 = cljs.core.first.call(null,seq__26941_26955__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26961);

var G__26962 = cljs.core.next.call(null,seq__26941_26955__$1);
var G__26963 = null;
var G__26964 = (0);
var G__26965 = (0);
seq__26941_26945 = G__26962;
chunk__26942_26946 = G__26963;
count__26943_26947 = G__26964;
i__26944_26948 = G__26965;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26939,map__26939__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26939,map__26939__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map