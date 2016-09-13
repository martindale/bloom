// Compiled by ClojureScript 1.9.89 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__7817_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__7817_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4425__auto__)){
var changed__$1 = temp__4425__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__7822 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__7823 = null;
var count__7824 = (0);
var i__7825 = (0);
while(true){
if((i__7825 < count__7824)){
var s = cljs.core._nth.call(null,chunk__7823,i__7825);
var temp__4425__auto___7826 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7826)){
var sheet_7827 = temp__4425__auto___7826;
var temp__4425__auto___7828__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7827.href,changed);
if(cljs.core.truth_(temp__4425__auto___7828__$1)){
var href_uri_7829 = temp__4425__auto___7828__$1;
sheet_7827.ownerNode.href = href_uri_7829.makeUnique().toString();
} else {
}
} else {
}

var G__7830 = seq__7822;
var G__7831 = chunk__7823;
var G__7832 = count__7824;
var G__7833 = (i__7825 + (1));
seq__7822 = G__7830;
chunk__7823 = G__7831;
count__7824 = G__7832;
i__7825 = G__7833;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7822);
if(temp__4425__auto__){
var seq__7822__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7822__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__7822__$1);
var G__7834 = cljs.core.chunk_rest.call(null,seq__7822__$1);
var G__7835 = c__7357__auto__;
var G__7836 = cljs.core.count.call(null,c__7357__auto__);
var G__7837 = (0);
seq__7822 = G__7834;
chunk__7823 = G__7835;
count__7824 = G__7836;
i__7825 = G__7837;
continue;
} else {
var s = cljs.core.first.call(null,seq__7822__$1);
var temp__4425__auto___7838__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___7838__$1)){
var sheet_7839 = temp__4425__auto___7838__$1;
var temp__4425__auto___7840__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_7839.href,changed);
if(cljs.core.truth_(temp__4425__auto___7840__$2)){
var href_uri_7841 = temp__4425__auto___7840__$2;
sheet_7839.ownerNode.href = href_uri_7841.makeUnique().toString();
} else {
}
} else {
}

var G__7842 = cljs.core.next.call(null,seq__7822__$1);
var G__7843 = null;
var G__7844 = (0);
var G__7845 = (0);
seq__7822 = G__7842;
chunk__7823 = G__7843;
count__7824 = G__7844;
i__7825 = G__7845;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__7850 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__7851 = null;
var count__7852 = (0);
var i__7853 = (0);
while(true){
if((i__7853 < count__7852)){
var s = cljs.core._nth.call(null,chunk__7851,i__7853);
var temp__4425__auto___7854 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7854)){
var image_7855 = temp__4425__auto___7854;
var temp__4425__auto___7856__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_7855.src,changed);
if(cljs.core.truth_(temp__4425__auto___7856__$1)){
var href_uri_7857 = temp__4425__auto___7856__$1;
image_7855.src = href_uri_7857.makeUnique().toString();
} else {
}
} else {
}

var G__7858 = seq__7850;
var G__7859 = chunk__7851;
var G__7860 = count__7852;
var G__7861 = (i__7853 + (1));
seq__7850 = G__7858;
chunk__7851 = G__7859;
count__7852 = G__7860;
i__7853 = G__7861;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7850);
if(temp__4425__auto__){
var seq__7850__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7850__$1)){
var c__7357__auto__ = cljs.core.chunk_first.call(null,seq__7850__$1);
var G__7862 = cljs.core.chunk_rest.call(null,seq__7850__$1);
var G__7863 = c__7357__auto__;
var G__7864 = cljs.core.count.call(null,c__7357__auto__);
var G__7865 = (0);
seq__7850 = G__7862;
chunk__7851 = G__7863;
count__7852 = G__7864;
i__7853 = G__7865;
continue;
} else {
var s = cljs.core.first.call(null,seq__7850__$1);
var temp__4425__auto___7866__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___7866__$1)){
var image_7867 = temp__4425__auto___7866__$1;
var temp__4425__auto___7868__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_7867.src,changed);
if(cljs.core.truth_(temp__4425__auto___7868__$2)){
var href_uri_7869 = temp__4425__auto___7868__$2;
image_7867.src = href_uri_7869.makeUnique().toString();
} else {
}
} else {
}

var G__7870 = cljs.core.next.call(null,seq__7850__$1);
var G__7871 = null;
var G__7872 = (0);
var G__7873 = (0);
seq__7850 = G__7870;
chunk__7851 = G__7871;
count__7852 = G__7872;
i__7853 = G__7873;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__7876){
var map__7879 = p__7876;
var map__7879__$1 = ((((!((map__7879 == null)))?((((map__7879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7879):map__7879);
var on_jsload = cljs.core.get.call(null,map__7879__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__7879,map__7879__$1,on_jsload){
return (function (p1__7874_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__7874_SHARP_,".js");
});})(map__7879,map__7879__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__7879,map__7879__$1,on_jsload){
return (function (p1__7875_SHARP_){
return goog.Uri.parse(p1__7875_SHARP_).makeUnique();
});})(js_files,map__7879,map__7879__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__7879,map__7879__$1,on_jsload){
return (function() { 
var G__7881__delegate = function (_){
return on_jsload.call(null);
};
var G__7881 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7882__i = 0, G__7882__a = new Array(arguments.length -  0);
while (G__7882__i < G__7882__a.length) {G__7882__a[G__7882__i] = arguments[G__7882__i + 0]; ++G__7882__i;}
  _ = new cljs.core.IndexedSeq(G__7882__a,0);
} 
return G__7881__delegate.call(this,_);};
G__7881.cljs$lang$maxFixedArity = 0;
G__7881.cljs$lang$applyTo = (function (arglist__7883){
var _ = cljs.core.seq(arglist__7883);
return G__7881__delegate(_);
});
G__7881.cljs$core$IFn$_invoke$arity$variadic = G__7881__delegate;
return G__7881;
})()
;})(js_files,map__7879,map__7879__$1,on_jsload))
,((function (js_files,map__7879,map__7879__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__7879,map__7879__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__7888_7892 = cljs.core.seq.call(null,things_to_log);
var chunk__7889_7893 = null;
var count__7890_7894 = (0);
var i__7891_7895 = (0);
while(true){
if((i__7891_7895 < count__7890_7894)){
var t_7896 = cljs.core._nth.call(null,chunk__7889_7893,i__7891_7895);
console.log(t_7896);

var G__7897 = seq__7888_7892;
var G__7898 = chunk__7889_7893;
var G__7899 = count__7890_7894;
var G__7900 = (i__7891_7895 + (1));
seq__7888_7892 = G__7897;
chunk__7889_7893 = G__7898;
count__7890_7894 = G__7899;
i__7891_7895 = G__7900;
continue;
} else {
var temp__4425__auto___7901 = cljs.core.seq.call(null,seq__7888_7892);
if(temp__4425__auto___7901){
var seq__7888_7902__$1 = temp__4425__auto___7901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7888_7902__$1)){
var c__7357__auto___7903 = cljs.core.chunk_first.call(null,seq__7888_7902__$1);
var G__7904 = cljs.core.chunk_rest.call(null,seq__7888_7902__$1);
var G__7905 = c__7357__auto___7903;
var G__7906 = cljs.core.count.call(null,c__7357__auto___7903);
var G__7907 = (0);
seq__7888_7892 = G__7904;
chunk__7889_7893 = G__7905;
count__7890_7894 = G__7906;
i__7891_7895 = G__7907;
continue;
} else {
var t_7908 = cljs.core.first.call(null,seq__7888_7902__$1);
console.log(t_7908);

var G__7909 = cljs.core.next.call(null,seq__7888_7902__$1);
var G__7910 = null;
var G__7911 = (0);
var G__7912 = (0);
seq__7888_7892 = G__7909;
chunk__7889_7893 = G__7910;
count__7890_7894 = G__7911;
i__7891_7895 = G__7912;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__7913_SHARP_){
return [cljs.core.str(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(p1__7913_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__7915 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__7915);

adzerk.boot_reload.reload.reload_css.call(null,G__7915);

adzerk.boot_reload.reload.reload_img.call(null,G__7915);

return G__7915;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map