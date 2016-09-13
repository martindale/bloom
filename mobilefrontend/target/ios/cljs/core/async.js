// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22986 = [];
var len__21324__auto___22992 = arguments.length;
var i__21325__auto___22993 = (0);
while(true){
if((i__21325__auto___22993 < len__21324__auto___22992)){
args22986.push((arguments[i__21325__auto___22993]));

var G__22994 = (i__21325__auto___22993 + (1));
i__21325__auto___22993 = G__22994;
continue;
} else {
}
break;
}

var G__22988 = args22986.length;
switch (G__22988) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22986.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22989 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22989 = (function (f,blockable,meta22990){
this.f = f;
this.blockable = blockable;
this.meta22990 = meta22990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22991,meta22990__$1){
var self__ = this;
var _22991__$1 = this;
return (new cljs.core.async.t_cljs$core$async22989(self__.f,self__.blockable,meta22990__$1));
});

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22991){
var self__ = this;
var _22991__$1 = this;
return self__.meta22990;
});

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22990","meta22990",-2017853405,null)], null);
});

cljs.core.async.t_cljs$core$async22989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22989";

cljs.core.async.t_cljs$core$async22989.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async22989");
});

cljs.core.async.__GT_t_cljs$core$async22989 = (function cljs$core$async$__GT_t_cljs$core$async22989(f__$1,blockable__$1,meta22990){
return (new cljs.core.async.t_cljs$core$async22989(f__$1,blockable__$1,meta22990));
});

}

return (new cljs.core.async.t_cljs$core$async22989(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22998 = [];
var len__21324__auto___23001 = arguments.length;
var i__21325__auto___23002 = (0);
while(true){
if((i__21325__auto___23002 < len__21324__auto___23001)){
args22998.push((arguments[i__21325__auto___23002]));

var G__23003 = (i__21325__auto___23002 + (1));
i__21325__auto___23002 = G__23003;
continue;
} else {
}
break;
}

var G__23000 = args22998.length;
switch (G__23000) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22998.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args23005 = [];
var len__21324__auto___23008 = arguments.length;
var i__21325__auto___23009 = (0);
while(true){
if((i__21325__auto___23009 < len__21324__auto___23008)){
args23005.push((arguments[i__21325__auto___23009]));

var G__23010 = (i__21325__auto___23009 + (1));
i__21325__auto___23009 = G__23010;
continue;
} else {
}
break;
}

var G__23007 = args23005.length;
switch (G__23007) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23005.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args23012 = [];
var len__21324__auto___23015 = arguments.length;
var i__21325__auto___23016 = (0);
while(true){
if((i__21325__auto___23016 < len__21324__auto___23015)){
args23012.push((arguments[i__21325__auto___23016]));

var G__23017 = (i__21325__auto___23016 + (1));
i__21325__auto___23016 = G__23017;
continue;
} else {
}
break;
}

var G__23014 = args23012.length;
switch (G__23014) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23012.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23019 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23019);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23019,ret){
return (function (){
return fn1.call(null,val_23019);
});})(val_23019,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args23020 = [];
var len__21324__auto___23023 = arguments.length;
var i__21325__auto___23024 = (0);
while(true){
if((i__21325__auto___23024 < len__21324__auto___23023)){
args23020.push((arguments[i__21325__auto___23024]));

var G__23025 = (i__21325__auto___23024 + (1));
i__21325__auto___23024 = G__23025;
continue;
} else {
}
break;
}

var G__23022 = args23020.length;
switch (G__23022) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23020.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6726__auto__)){
var ret = temp__6726__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6726__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6726__auto__)){
var retb = temp__6726__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6726__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6726__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21154__auto___23027 = n;
var x_23028 = (0);
while(true){
if((x_23028 < n__21154__auto___23027)){
(a[x_23028] = (0));

var G__23029 = (x_23028 + (1));
x_23028 = G__23029;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__23030 = (i + (1));
i = G__23030;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async23034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23034 = (function (alt_flag,flag,meta23035){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta23035 = meta23035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23036,meta23035__$1){
var self__ = this;
var _23036__$1 = this;
return (new cljs.core.async.t_cljs$core$async23034(self__.alt_flag,self__.flag,meta23035__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23036){
var self__ = this;
var _23036__$1 = this;
return self__.meta23035;
});})(flag))
;

cljs.core.async.t_cljs$core$async23034.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23034.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23035","meta23035",-532404428,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23034";

cljs.core.async.t_cljs$core$async23034.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async23034");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async23034 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23034(alt_flag__$1,flag__$1,meta23035){
return (new cljs.core.async.t_cljs$core$async23034(alt_flag__$1,flag__$1,meta23035));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23034(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async23040 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23040 = (function (alt_handler,flag,cb,meta23041){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta23041 = meta23041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23042,meta23041__$1){
var self__ = this;
var _23042__$1 = this;
return (new cljs.core.async.t_cljs$core$async23040(self__.alt_handler,self__.flag,self__.cb,meta23041__$1));
});

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23042){
var self__ = this;
var _23042__$1 = this;
return self__.meta23041;
});

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23040.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23041","meta23041",-1373053288,null)], null);
});

cljs.core.async.t_cljs$core$async23040.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23040";

cljs.core.async.t_cljs$core$async23040.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async23040");
});

cljs.core.async.__GT_t_cljs$core$async23040 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23040(alt_handler__$1,flag__$1,cb__$1,meta23041){
return (new cljs.core.async.t_cljs$core$async23040(alt_handler__$1,flag__$1,cb__$1,meta23041));
});

}

return (new cljs.core.async.t_cljs$core$async23040(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23043_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23043_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23044_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23044_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20141__auto__ = wport;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23045 = (i + (1));
i = G__23045;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20141__auto__ = ret;
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6728__auto__ = (function (){var and__20129__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20129__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20129__auto__;
}
})();
if(cljs.core.truth_(temp__6728__auto__)){
var got = temp__6728__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__21331__auto__ = [];
var len__21324__auto___23051 = arguments.length;
var i__21325__auto___23052 = (0);
while(true){
if((i__21325__auto___23052 < len__21324__auto___23051)){
args__21331__auto__.push((arguments[i__21325__auto___23052]));

var G__23053 = (i__21325__auto___23052 + (1));
i__21325__auto___23052 = G__23053;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((1) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21332__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23048){
var map__23049 = p__23048;
var map__23049__$1 = ((((!((map__23049 == null)))?((((map__23049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23049):map__23049);
var opts = map__23049__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23046){
var G__23047 = cljs.core.first.call(null,seq23046);
var seq23046__$1 = cljs.core.next.call(null,seq23046);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23047,seq23046__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args23054 = [];
var len__21324__auto___23104 = arguments.length;
var i__21325__auto___23105 = (0);
while(true){
if((i__21325__auto___23105 < len__21324__auto___23104)){
args23054.push((arguments[i__21325__auto___23105]));

var G__23106 = (i__21325__auto___23105 + (1));
i__21325__auto___23105 = G__23106;
continue;
} else {
}
break;
}

var G__23056 = args23054.length;
switch (G__23056) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23054.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22927__auto___23108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___23108){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___23108){
return (function (state_23080){
var state_val_23081 = (state_23080[(1)]);
if((state_val_23081 === (7))){
var inst_23076 = (state_23080[(2)]);
var state_23080__$1 = state_23080;
var statearr_23082_23109 = state_23080__$1;
(statearr_23082_23109[(2)] = inst_23076);

(statearr_23082_23109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (1))){
var state_23080__$1 = state_23080;
var statearr_23083_23110 = state_23080__$1;
(statearr_23083_23110[(2)] = null);

(statearr_23083_23110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (4))){
var inst_23059 = (state_23080[(7)]);
var inst_23059__$1 = (state_23080[(2)]);
var inst_23060 = (inst_23059__$1 == null);
var state_23080__$1 = (function (){var statearr_23084 = state_23080;
(statearr_23084[(7)] = inst_23059__$1);

return statearr_23084;
})();
if(cljs.core.truth_(inst_23060)){
var statearr_23085_23111 = state_23080__$1;
(statearr_23085_23111[(1)] = (5));

} else {
var statearr_23086_23112 = state_23080__$1;
(statearr_23086_23112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (13))){
var state_23080__$1 = state_23080;
var statearr_23087_23113 = state_23080__$1;
(statearr_23087_23113[(2)] = null);

(statearr_23087_23113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (6))){
var inst_23059 = (state_23080[(7)]);
var state_23080__$1 = state_23080;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23080__$1,(11),to,inst_23059);
} else {
if((state_val_23081 === (3))){
var inst_23078 = (state_23080[(2)]);
var state_23080__$1 = state_23080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23080__$1,inst_23078);
} else {
if((state_val_23081 === (12))){
var state_23080__$1 = state_23080;
var statearr_23088_23114 = state_23080__$1;
(statearr_23088_23114[(2)] = null);

(statearr_23088_23114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (2))){
var state_23080__$1 = state_23080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23080__$1,(4),from);
} else {
if((state_val_23081 === (11))){
var inst_23069 = (state_23080[(2)]);
var state_23080__$1 = state_23080;
if(cljs.core.truth_(inst_23069)){
var statearr_23089_23115 = state_23080__$1;
(statearr_23089_23115[(1)] = (12));

} else {
var statearr_23090_23116 = state_23080__$1;
(statearr_23090_23116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (9))){
var state_23080__$1 = state_23080;
var statearr_23091_23117 = state_23080__$1;
(statearr_23091_23117[(2)] = null);

(statearr_23091_23117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (5))){
var state_23080__$1 = state_23080;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23092_23118 = state_23080__$1;
(statearr_23092_23118[(1)] = (8));

} else {
var statearr_23093_23119 = state_23080__$1;
(statearr_23093_23119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (14))){
var inst_23074 = (state_23080[(2)]);
var state_23080__$1 = state_23080;
var statearr_23094_23120 = state_23080__$1;
(statearr_23094_23120[(2)] = inst_23074);

(statearr_23094_23120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (10))){
var inst_23066 = (state_23080[(2)]);
var state_23080__$1 = state_23080;
var statearr_23095_23121 = state_23080__$1;
(statearr_23095_23121[(2)] = inst_23066);

(statearr_23095_23121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23081 === (8))){
var inst_23063 = cljs.core.async.close_BANG_.call(null,to);
var state_23080__$1 = state_23080;
var statearr_23096_23122 = state_23080__$1;
(statearr_23096_23122[(2)] = inst_23063);

(statearr_23096_23122[(1)] = (10));


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
});})(c__22927__auto___23108))
;
return ((function (switch__22813__auto__,c__22927__auto___23108){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_23100 = [null,null,null,null,null,null,null,null];
(statearr_23100[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_23100[(1)] = (1));

return statearr_23100;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_23080){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23101){if((e23101 instanceof Object)){
var ex__22817__auto__ = e23101;
var statearr_23102_23123 = state_23080;
(statearr_23102_23123[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23124 = state_23080;
state_23080 = G__23124;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_23080){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_23080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___23108))
})();
var state__22929__auto__ = (function (){var statearr_23103 = f__22928__auto__.call(null);
(statearr_23103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___23108);

return statearr_23103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___23108))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23312){
var vec__23313 = p__23312;
var v = cljs.core.nth.call(null,vec__23313,(0),null);
var p = cljs.core.nth.call(null,vec__23313,(1),null);
var job = vec__23313;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22927__auto___23499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___23499,res,vec__23313,v,p,job,jobs,results){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___23499,res,vec__23313,v,p,job,jobs,results){
return (function (state_23320){
var state_val_23321 = (state_23320[(1)]);
if((state_val_23321 === (1))){
var state_23320__$1 = state_23320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23320__$1,(2),res,v);
} else {
if((state_val_23321 === (2))){
var inst_23317 = (state_23320[(2)]);
var inst_23318 = cljs.core.async.close_BANG_.call(null,res);
var state_23320__$1 = (function (){var statearr_23322 = state_23320;
(statearr_23322[(7)] = inst_23317);

return statearr_23322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23320__$1,inst_23318);
} else {
return null;
}
}
});})(c__22927__auto___23499,res,vec__23313,v,p,job,jobs,results))
;
return ((function (switch__22813__auto__,c__22927__auto___23499,res,vec__23313,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0 = (function (){
var statearr_23326 = [null,null,null,null,null,null,null,null];
(statearr_23326[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__);

(statearr_23326[(1)] = (1));

return statearr_23326;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1 = (function (state_23320){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23327){if((e23327 instanceof Object)){
var ex__22817__auto__ = e23327;
var statearr_23328_23500 = state_23320;
(statearr_23328_23500[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23501 = state_23320;
state_23320 = G__23501;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = function(state_23320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1.call(this,state_23320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___23499,res,vec__23313,v,p,job,jobs,results))
})();
var state__22929__auto__ = (function (){var statearr_23329 = f__22928__auto__.call(null);
(statearr_23329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___23499);

return statearr_23329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___23499,res,vec__23313,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23330){
var vec__23331 = p__23330;
var v = cljs.core.nth.call(null,vec__23331,(0),null);
var p = cljs.core.nth.call(null,vec__23331,(1),null);
var job = vec__23331;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21154__auto___23502 = n;
var __23503 = (0);
while(true){
if((__23503 < n__21154__auto___23502)){
var G__23334_23504 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23334_23504) {
case "compute":
var c__22927__auto___23506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23503,c__22927__auto___23506,G__23334_23504,n__21154__auto___23502,jobs,results,process,async){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (__23503,c__22927__auto___23506,G__23334_23504,n__21154__auto___23502,jobs,results,process,async){
return (function (state_23347){
var state_val_23348 = (state_23347[(1)]);
if((state_val_23348 === (1))){
var state_23347__$1 = state_23347;
var statearr_23349_23507 = state_23347__$1;
(statearr_23349_23507[(2)] = null);

(statearr_23349_23507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (2))){
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23347__$1,(4),jobs);
} else {
if((state_val_23348 === (3))){
var inst_23345 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23347__$1,inst_23345);
} else {
if((state_val_23348 === (4))){
var inst_23337 = (state_23347[(2)]);
var inst_23338 = process.call(null,inst_23337);
var state_23347__$1 = state_23347;
if(cljs.core.truth_(inst_23338)){
var statearr_23350_23508 = state_23347__$1;
(statearr_23350_23508[(1)] = (5));

} else {
var statearr_23351_23509 = state_23347__$1;
(statearr_23351_23509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (5))){
var state_23347__$1 = state_23347;
var statearr_23352_23510 = state_23347__$1;
(statearr_23352_23510[(2)] = null);

(statearr_23352_23510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (6))){
var state_23347__$1 = state_23347;
var statearr_23353_23511 = state_23347__$1;
(statearr_23353_23511[(2)] = null);

(statearr_23353_23511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23348 === (7))){
var inst_23343 = (state_23347[(2)]);
var state_23347__$1 = state_23347;
var statearr_23354_23512 = state_23347__$1;
(statearr_23354_23512[(2)] = inst_23343);

(statearr_23354_23512[(1)] = (3));


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
});})(__23503,c__22927__auto___23506,G__23334_23504,n__21154__auto___23502,jobs,results,process,async))
;
return ((function (__23503,switch__22813__auto__,c__22927__auto___23506,G__23334_23504,n__21154__auto___23502,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0 = (function (){
var statearr_23358 = [null,null,null,null,null,null,null];
(statearr_23358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__);

(statearr_23358[(1)] = (1));

return statearr_23358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1 = (function (state_23347){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23359){if((e23359 instanceof Object)){
var ex__22817__auto__ = e23359;
var statearr_23360_23513 = state_23347;
(statearr_23360_23513[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23514 = state_23347;
state_23347 = G__23514;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = function(state_23347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1.call(this,state_23347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__;
})()
;})(__23503,switch__22813__auto__,c__22927__auto___23506,G__23334_23504,n__21154__auto___23502,jobs,results,process,async))
})();
var state__22929__auto__ = (function (){var statearr_23361 = f__22928__auto__.call(null);
(statearr_23361[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___23506);

return statearr_23361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(__23503,c__22927__auto___23506,G__23334_23504,n__21154__auto___23502,jobs,results,process,async))
);


break;
case "async":
var c__22927__auto___23515 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23503,c__22927__auto___23515,G__23334_23504,n__21154__auto___23502,jobs,results,process,async){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (__23503,c__22927__auto___23515,G__23334_23504,n__21154__auto___23502,jobs,results,process,async){
return (function (state_23374){
var state_val_23375 = (state_23374[(1)]);
if((state_val_23375 === (1))){
var state_23374__$1 = state_23374;
var statearr_23376_23516 = state_23374__$1;
(statearr_23376_23516[(2)] = null);

(statearr_23376_23516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (2))){
var state_23374__$1 = state_23374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23374__$1,(4),jobs);
} else {
if((state_val_23375 === (3))){
var inst_23372 = (state_23374[(2)]);
var state_23374__$1 = state_23374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23374__$1,inst_23372);
} else {
if((state_val_23375 === (4))){
var inst_23364 = (state_23374[(2)]);
var inst_23365 = async.call(null,inst_23364);
var state_23374__$1 = state_23374;
if(cljs.core.truth_(inst_23365)){
var statearr_23377_23517 = state_23374__$1;
(statearr_23377_23517[(1)] = (5));

} else {
var statearr_23378_23518 = state_23374__$1;
(statearr_23378_23518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (5))){
var state_23374__$1 = state_23374;
var statearr_23379_23519 = state_23374__$1;
(statearr_23379_23519[(2)] = null);

(statearr_23379_23519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (6))){
var state_23374__$1 = state_23374;
var statearr_23380_23520 = state_23374__$1;
(statearr_23380_23520[(2)] = null);

(statearr_23380_23520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23375 === (7))){
var inst_23370 = (state_23374[(2)]);
var state_23374__$1 = state_23374;
var statearr_23381_23521 = state_23374__$1;
(statearr_23381_23521[(2)] = inst_23370);

(statearr_23381_23521[(1)] = (3));


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
});})(__23503,c__22927__auto___23515,G__23334_23504,n__21154__auto___23502,jobs,results,process,async))
;
return ((function (__23503,switch__22813__auto__,c__22927__auto___23515,G__23334_23504,n__21154__auto___23502,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0 = (function (){
var statearr_23385 = [null,null,null,null,null,null,null];
(statearr_23385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__);

(statearr_23385[(1)] = (1));

return statearr_23385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1 = (function (state_23374){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23386){if((e23386 instanceof Object)){
var ex__22817__auto__ = e23386;
var statearr_23387_23522 = state_23374;
(statearr_23387_23522[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23523 = state_23374;
state_23374 = G__23523;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = function(state_23374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1.call(this,state_23374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__;
})()
;})(__23503,switch__22813__auto__,c__22927__auto___23515,G__23334_23504,n__21154__auto___23502,jobs,results,process,async))
})();
var state__22929__auto__ = (function (){var statearr_23388 = f__22928__auto__.call(null);
(statearr_23388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___23515);

return statearr_23388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(__23503,c__22927__auto___23515,G__23334_23504,n__21154__auto___23502,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23524 = (__23503 + (1));
__23503 = G__23524;
continue;
} else {
}
break;
}

var c__22927__auto___23525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___23525,jobs,results,process,async){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___23525,jobs,results,process,async){
return (function (state_23410){
var state_val_23411 = (state_23410[(1)]);
if((state_val_23411 === (1))){
var state_23410__$1 = state_23410;
var statearr_23412_23526 = state_23410__$1;
(statearr_23412_23526[(2)] = null);

(statearr_23412_23526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23411 === (2))){
var state_23410__$1 = state_23410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23410__$1,(4),from);
} else {
if((state_val_23411 === (3))){
var inst_23408 = (state_23410[(2)]);
var state_23410__$1 = state_23410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23410__$1,inst_23408);
} else {
if((state_val_23411 === (4))){
var inst_23391 = (state_23410[(7)]);
var inst_23391__$1 = (state_23410[(2)]);
var inst_23392 = (inst_23391__$1 == null);
var state_23410__$1 = (function (){var statearr_23413 = state_23410;
(statearr_23413[(7)] = inst_23391__$1);

return statearr_23413;
})();
if(cljs.core.truth_(inst_23392)){
var statearr_23414_23527 = state_23410__$1;
(statearr_23414_23527[(1)] = (5));

} else {
var statearr_23415_23528 = state_23410__$1;
(statearr_23415_23528[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23411 === (5))){
var inst_23394 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23410__$1 = state_23410;
var statearr_23416_23529 = state_23410__$1;
(statearr_23416_23529[(2)] = inst_23394);

(statearr_23416_23529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23411 === (6))){
var inst_23391 = (state_23410[(7)]);
var inst_23396 = (state_23410[(8)]);
var inst_23396__$1 = cljs.core.async.chan.call(null,(1));
var inst_23397 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23398 = [inst_23391,inst_23396__$1];
var inst_23399 = (new cljs.core.PersistentVector(null,2,(5),inst_23397,inst_23398,null));
var state_23410__$1 = (function (){var statearr_23417 = state_23410;
(statearr_23417[(8)] = inst_23396__$1);

return statearr_23417;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23410__$1,(8),jobs,inst_23399);
} else {
if((state_val_23411 === (7))){
var inst_23406 = (state_23410[(2)]);
var state_23410__$1 = state_23410;
var statearr_23418_23530 = state_23410__$1;
(statearr_23418_23530[(2)] = inst_23406);

(statearr_23418_23530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23411 === (8))){
var inst_23396 = (state_23410[(8)]);
var inst_23401 = (state_23410[(2)]);
var state_23410__$1 = (function (){var statearr_23419 = state_23410;
(statearr_23419[(9)] = inst_23401);

return statearr_23419;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23410__$1,(9),results,inst_23396);
} else {
if((state_val_23411 === (9))){
var inst_23403 = (state_23410[(2)]);
var state_23410__$1 = (function (){var statearr_23420 = state_23410;
(statearr_23420[(10)] = inst_23403);

return statearr_23420;
})();
var statearr_23421_23531 = state_23410__$1;
(statearr_23421_23531[(2)] = null);

(statearr_23421_23531[(1)] = (2));


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
});})(c__22927__auto___23525,jobs,results,process,async))
;
return ((function (switch__22813__auto__,c__22927__auto___23525,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0 = (function (){
var statearr_23425 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__);

(statearr_23425[(1)] = (1));

return statearr_23425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1 = (function (state_23410){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23426){if((e23426 instanceof Object)){
var ex__22817__auto__ = e23426;
var statearr_23427_23532 = state_23410;
(statearr_23427_23532[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23533 = state_23410;
state_23410 = G__23533;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = function(state_23410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1.call(this,state_23410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___23525,jobs,results,process,async))
})();
var state__22929__auto__ = (function (){var statearr_23428 = f__22928__auto__.call(null);
(statearr_23428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___23525);

return statearr_23428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___23525,jobs,results,process,async))
);


var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__,jobs,results,process,async){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__,jobs,results,process,async){
return (function (state_23466){
var state_val_23467 = (state_23466[(1)]);
if((state_val_23467 === (7))){
var inst_23462 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
var statearr_23468_23534 = state_23466__$1;
(statearr_23468_23534[(2)] = inst_23462);

(statearr_23468_23534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (20))){
var state_23466__$1 = state_23466;
var statearr_23469_23535 = state_23466__$1;
(statearr_23469_23535[(2)] = null);

(statearr_23469_23535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (1))){
var state_23466__$1 = state_23466;
var statearr_23470_23536 = state_23466__$1;
(statearr_23470_23536[(2)] = null);

(statearr_23470_23536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (4))){
var inst_23431 = (state_23466[(7)]);
var inst_23431__$1 = (state_23466[(2)]);
var inst_23432 = (inst_23431__$1 == null);
var state_23466__$1 = (function (){var statearr_23471 = state_23466;
(statearr_23471[(7)] = inst_23431__$1);

return statearr_23471;
})();
if(cljs.core.truth_(inst_23432)){
var statearr_23472_23537 = state_23466__$1;
(statearr_23472_23537[(1)] = (5));

} else {
var statearr_23473_23538 = state_23466__$1;
(statearr_23473_23538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (15))){
var inst_23444 = (state_23466[(8)]);
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23466__$1,(18),to,inst_23444);
} else {
if((state_val_23467 === (21))){
var inst_23457 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
var statearr_23474_23539 = state_23466__$1;
(statearr_23474_23539[(2)] = inst_23457);

(statearr_23474_23539[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (13))){
var inst_23459 = (state_23466[(2)]);
var state_23466__$1 = (function (){var statearr_23475 = state_23466;
(statearr_23475[(9)] = inst_23459);

return statearr_23475;
})();
var statearr_23476_23540 = state_23466__$1;
(statearr_23476_23540[(2)] = null);

(statearr_23476_23540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (6))){
var inst_23431 = (state_23466[(7)]);
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23466__$1,(11),inst_23431);
} else {
if((state_val_23467 === (17))){
var inst_23452 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
if(cljs.core.truth_(inst_23452)){
var statearr_23477_23541 = state_23466__$1;
(statearr_23477_23541[(1)] = (19));

} else {
var statearr_23478_23542 = state_23466__$1;
(statearr_23478_23542[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (3))){
var inst_23464 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23466__$1,inst_23464);
} else {
if((state_val_23467 === (12))){
var inst_23441 = (state_23466[(10)]);
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23466__$1,(14),inst_23441);
} else {
if((state_val_23467 === (2))){
var state_23466__$1 = state_23466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23466__$1,(4),results);
} else {
if((state_val_23467 === (19))){
var state_23466__$1 = state_23466;
var statearr_23479_23543 = state_23466__$1;
(statearr_23479_23543[(2)] = null);

(statearr_23479_23543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (11))){
var inst_23441 = (state_23466[(2)]);
var state_23466__$1 = (function (){var statearr_23480 = state_23466;
(statearr_23480[(10)] = inst_23441);

return statearr_23480;
})();
var statearr_23481_23544 = state_23466__$1;
(statearr_23481_23544[(2)] = null);

(statearr_23481_23544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (9))){
var state_23466__$1 = state_23466;
var statearr_23482_23545 = state_23466__$1;
(statearr_23482_23545[(2)] = null);

(statearr_23482_23545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (5))){
var state_23466__$1 = state_23466;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23483_23546 = state_23466__$1;
(statearr_23483_23546[(1)] = (8));

} else {
var statearr_23484_23547 = state_23466__$1;
(statearr_23484_23547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (14))){
var inst_23444 = (state_23466[(8)]);
var inst_23446 = (state_23466[(11)]);
var inst_23444__$1 = (state_23466[(2)]);
var inst_23445 = (inst_23444__$1 == null);
var inst_23446__$1 = cljs.core.not.call(null,inst_23445);
var state_23466__$1 = (function (){var statearr_23485 = state_23466;
(statearr_23485[(8)] = inst_23444__$1);

(statearr_23485[(11)] = inst_23446__$1);

return statearr_23485;
})();
if(inst_23446__$1){
var statearr_23486_23548 = state_23466__$1;
(statearr_23486_23548[(1)] = (15));

} else {
var statearr_23487_23549 = state_23466__$1;
(statearr_23487_23549[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (16))){
var inst_23446 = (state_23466[(11)]);
var state_23466__$1 = state_23466;
var statearr_23488_23550 = state_23466__$1;
(statearr_23488_23550[(2)] = inst_23446);

(statearr_23488_23550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (10))){
var inst_23438 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
var statearr_23489_23551 = state_23466__$1;
(statearr_23489_23551[(2)] = inst_23438);

(statearr_23489_23551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (18))){
var inst_23449 = (state_23466[(2)]);
var state_23466__$1 = state_23466;
var statearr_23490_23552 = state_23466__$1;
(statearr_23490_23552[(2)] = inst_23449);

(statearr_23490_23552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23467 === (8))){
var inst_23435 = cljs.core.async.close_BANG_.call(null,to);
var state_23466__$1 = state_23466;
var statearr_23491_23553 = state_23466__$1;
(statearr_23491_23553[(2)] = inst_23435);

(statearr_23491_23553[(1)] = (10));


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
});})(c__22927__auto__,jobs,results,process,async))
;
return ((function (switch__22813__auto__,c__22927__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0 = (function (){
var statearr_23495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23495[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__);

(statearr_23495[(1)] = (1));

return statearr_23495;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1 = (function (state_23466){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23496){if((e23496 instanceof Object)){
var ex__22817__auto__ = e23496;
var statearr_23497_23554 = state_23466;
(statearr_23497_23554[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23555 = state_23466;
state_23466 = G__23555;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__ = function(state_23466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1.call(this,state_23466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22814__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__,jobs,results,process,async))
})();
var state__22929__auto__ = (function (){var statearr_23498 = f__22928__auto__.call(null);
(statearr_23498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_23498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__,jobs,results,process,async))
);

return c__22927__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23556 = [];
var len__21324__auto___23559 = arguments.length;
var i__21325__auto___23560 = (0);
while(true){
if((i__21325__auto___23560 < len__21324__auto___23559)){
args23556.push((arguments[i__21325__auto___23560]));

var G__23561 = (i__21325__auto___23560 + (1));
i__21325__auto___23560 = G__23561;
continue;
} else {
}
break;
}

var G__23558 = args23556.length;
switch (G__23558) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23556.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23563 = [];
var len__21324__auto___23566 = arguments.length;
var i__21325__auto___23567 = (0);
while(true){
if((i__21325__auto___23567 < len__21324__auto___23566)){
args23563.push((arguments[i__21325__auto___23567]));

var G__23568 = (i__21325__auto___23567 + (1));
i__21325__auto___23567 = G__23568;
continue;
} else {
}
break;
}

var G__23565 = args23563.length;
switch (G__23565) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23563.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23570 = [];
var len__21324__auto___23623 = arguments.length;
var i__21325__auto___23624 = (0);
while(true){
if((i__21325__auto___23624 < len__21324__auto___23623)){
args23570.push((arguments[i__21325__auto___23624]));

var G__23625 = (i__21325__auto___23624 + (1));
i__21325__auto___23624 = G__23625;
continue;
} else {
}
break;
}

var G__23572 = args23570.length;
switch (G__23572) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23570.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22927__auto___23627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___23627,tc,fc){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___23627,tc,fc){
return (function (state_23598){
var state_val_23599 = (state_23598[(1)]);
if((state_val_23599 === (7))){
var inst_23594 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
var statearr_23600_23628 = state_23598__$1;
(statearr_23600_23628[(2)] = inst_23594);

(statearr_23600_23628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (1))){
var state_23598__$1 = state_23598;
var statearr_23601_23629 = state_23598__$1;
(statearr_23601_23629[(2)] = null);

(statearr_23601_23629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (4))){
var inst_23575 = (state_23598[(7)]);
var inst_23575__$1 = (state_23598[(2)]);
var inst_23576 = (inst_23575__$1 == null);
var state_23598__$1 = (function (){var statearr_23602 = state_23598;
(statearr_23602[(7)] = inst_23575__$1);

return statearr_23602;
})();
if(cljs.core.truth_(inst_23576)){
var statearr_23603_23630 = state_23598__$1;
(statearr_23603_23630[(1)] = (5));

} else {
var statearr_23604_23631 = state_23598__$1;
(statearr_23604_23631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (13))){
var state_23598__$1 = state_23598;
var statearr_23605_23632 = state_23598__$1;
(statearr_23605_23632[(2)] = null);

(statearr_23605_23632[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (6))){
var inst_23575 = (state_23598[(7)]);
var inst_23581 = p.call(null,inst_23575);
var state_23598__$1 = state_23598;
if(cljs.core.truth_(inst_23581)){
var statearr_23606_23633 = state_23598__$1;
(statearr_23606_23633[(1)] = (9));

} else {
var statearr_23607_23634 = state_23598__$1;
(statearr_23607_23634[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (3))){
var inst_23596 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23598__$1,inst_23596);
} else {
if((state_val_23599 === (12))){
var state_23598__$1 = state_23598;
var statearr_23608_23635 = state_23598__$1;
(statearr_23608_23635[(2)] = null);

(statearr_23608_23635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (2))){
var state_23598__$1 = state_23598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23598__$1,(4),ch);
} else {
if((state_val_23599 === (11))){
var inst_23575 = (state_23598[(7)]);
var inst_23585 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23598__$1,(8),inst_23585,inst_23575);
} else {
if((state_val_23599 === (9))){
var state_23598__$1 = state_23598;
var statearr_23609_23636 = state_23598__$1;
(statearr_23609_23636[(2)] = tc);

(statearr_23609_23636[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (5))){
var inst_23578 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23579 = cljs.core.async.close_BANG_.call(null,fc);
var state_23598__$1 = (function (){var statearr_23610 = state_23598;
(statearr_23610[(8)] = inst_23578);

return statearr_23610;
})();
var statearr_23611_23637 = state_23598__$1;
(statearr_23611_23637[(2)] = inst_23579);

(statearr_23611_23637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (14))){
var inst_23592 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
var statearr_23612_23638 = state_23598__$1;
(statearr_23612_23638[(2)] = inst_23592);

(statearr_23612_23638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (10))){
var state_23598__$1 = state_23598;
var statearr_23613_23639 = state_23598__$1;
(statearr_23613_23639[(2)] = fc);

(statearr_23613_23639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23599 === (8))){
var inst_23587 = (state_23598[(2)]);
var state_23598__$1 = state_23598;
if(cljs.core.truth_(inst_23587)){
var statearr_23614_23640 = state_23598__$1;
(statearr_23614_23640[(1)] = (12));

} else {
var statearr_23615_23641 = state_23598__$1;
(statearr_23615_23641[(1)] = (13));

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
});})(c__22927__auto___23627,tc,fc))
;
return ((function (switch__22813__auto__,c__22927__auto___23627,tc,fc){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_23619 = [null,null,null,null,null,null,null,null,null];
(statearr_23619[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_23619[(1)] = (1));

return statearr_23619;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_23598){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23620){if((e23620 instanceof Object)){
var ex__22817__auto__ = e23620;
var statearr_23621_23642 = state_23598;
(statearr_23621_23642[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23643 = state_23598;
state_23598 = G__23643;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_23598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_23598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___23627,tc,fc))
})();
var state__22929__auto__ = (function (){var statearr_23622 = f__22928__auto__.call(null);
(statearr_23622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___23627);

return statearr_23622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___23627,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_23707){
var state_val_23708 = (state_23707[(1)]);
if((state_val_23708 === (7))){
var inst_23703 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23709_23730 = state_23707__$1;
(statearr_23709_23730[(2)] = inst_23703);

(statearr_23709_23730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (1))){
var inst_23687 = init;
var state_23707__$1 = (function (){var statearr_23710 = state_23707;
(statearr_23710[(7)] = inst_23687);

return statearr_23710;
})();
var statearr_23711_23731 = state_23707__$1;
(statearr_23711_23731[(2)] = null);

(statearr_23711_23731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (4))){
var inst_23690 = (state_23707[(8)]);
var inst_23690__$1 = (state_23707[(2)]);
var inst_23691 = (inst_23690__$1 == null);
var state_23707__$1 = (function (){var statearr_23712 = state_23707;
(statearr_23712[(8)] = inst_23690__$1);

return statearr_23712;
})();
if(cljs.core.truth_(inst_23691)){
var statearr_23713_23732 = state_23707__$1;
(statearr_23713_23732[(1)] = (5));

} else {
var statearr_23714_23733 = state_23707__$1;
(statearr_23714_23733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (6))){
var inst_23687 = (state_23707[(7)]);
var inst_23690 = (state_23707[(8)]);
var inst_23694 = (state_23707[(9)]);
var inst_23694__$1 = f.call(null,inst_23687,inst_23690);
var inst_23695 = cljs.core.reduced_QMARK_.call(null,inst_23694__$1);
var state_23707__$1 = (function (){var statearr_23715 = state_23707;
(statearr_23715[(9)] = inst_23694__$1);

return statearr_23715;
})();
if(inst_23695){
var statearr_23716_23734 = state_23707__$1;
(statearr_23716_23734[(1)] = (8));

} else {
var statearr_23717_23735 = state_23707__$1;
(statearr_23717_23735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (3))){
var inst_23705 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23707__$1,inst_23705);
} else {
if((state_val_23708 === (2))){
var state_23707__$1 = state_23707;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23707__$1,(4),ch);
} else {
if((state_val_23708 === (9))){
var inst_23694 = (state_23707[(9)]);
var inst_23687 = inst_23694;
var state_23707__$1 = (function (){var statearr_23718 = state_23707;
(statearr_23718[(7)] = inst_23687);

return statearr_23718;
})();
var statearr_23719_23736 = state_23707__$1;
(statearr_23719_23736[(2)] = null);

(statearr_23719_23736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (5))){
var inst_23687 = (state_23707[(7)]);
var state_23707__$1 = state_23707;
var statearr_23720_23737 = state_23707__$1;
(statearr_23720_23737[(2)] = inst_23687);

(statearr_23720_23737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (10))){
var inst_23701 = (state_23707[(2)]);
var state_23707__$1 = state_23707;
var statearr_23721_23738 = state_23707__$1;
(statearr_23721_23738[(2)] = inst_23701);

(statearr_23721_23738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23708 === (8))){
var inst_23694 = (state_23707[(9)]);
var inst_23697 = cljs.core.deref.call(null,inst_23694);
var state_23707__$1 = state_23707;
var statearr_23722_23739 = state_23707__$1;
(statearr_23722_23739[(2)] = inst_23697);

(statearr_23722_23739[(1)] = (10));


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
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22814__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22814__auto____0 = (function (){
var statearr_23726 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23726[(0)] = cljs$core$async$reduce_$_state_machine__22814__auto__);

(statearr_23726[(1)] = (1));

return statearr_23726;
});
var cljs$core$async$reduce_$_state_machine__22814__auto____1 = (function (state_23707){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23707);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23727){if((e23727 instanceof Object)){
var ex__22817__auto__ = e23727;
var statearr_23728_23740 = state_23707;
(statearr_23728_23740[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23741 = state_23707;
state_23707 = G__23741;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22814__auto__ = function(state_23707){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22814__auto____1.call(this,state_23707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22814__auto____0;
cljs$core$async$reduce_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22814__auto____1;
return cljs$core$async$reduce_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_23729 = f__22928__auto__.call(null);
(statearr_23729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_23729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23742 = [];
var len__21324__auto___23794 = arguments.length;
var i__21325__auto___23795 = (0);
while(true){
if((i__21325__auto___23795 < len__21324__auto___23794)){
args23742.push((arguments[i__21325__auto___23795]));

var G__23796 = (i__21325__auto___23795 + (1));
i__21325__auto___23795 = G__23796;
continue;
} else {
}
break;
}

var G__23744 = args23742.length;
switch (G__23744) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23742.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_23769){
var state_val_23770 = (state_23769[(1)]);
if((state_val_23770 === (7))){
var inst_23751 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23771_23798 = state_23769__$1;
(statearr_23771_23798[(2)] = inst_23751);

(statearr_23771_23798[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (1))){
var inst_23745 = cljs.core.seq.call(null,coll);
var inst_23746 = inst_23745;
var state_23769__$1 = (function (){var statearr_23772 = state_23769;
(statearr_23772[(7)] = inst_23746);

return statearr_23772;
})();
var statearr_23773_23799 = state_23769__$1;
(statearr_23773_23799[(2)] = null);

(statearr_23773_23799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (4))){
var inst_23746 = (state_23769[(7)]);
var inst_23749 = cljs.core.first.call(null,inst_23746);
var state_23769__$1 = state_23769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23769__$1,(7),ch,inst_23749);
} else {
if((state_val_23770 === (13))){
var inst_23763 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23774_23800 = state_23769__$1;
(statearr_23774_23800[(2)] = inst_23763);

(statearr_23774_23800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (6))){
var inst_23754 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
if(cljs.core.truth_(inst_23754)){
var statearr_23775_23801 = state_23769__$1;
(statearr_23775_23801[(1)] = (8));

} else {
var statearr_23776_23802 = state_23769__$1;
(statearr_23776_23802[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (3))){
var inst_23767 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23769__$1,inst_23767);
} else {
if((state_val_23770 === (12))){
var state_23769__$1 = state_23769;
var statearr_23777_23803 = state_23769__$1;
(statearr_23777_23803[(2)] = null);

(statearr_23777_23803[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (2))){
var inst_23746 = (state_23769[(7)]);
var state_23769__$1 = state_23769;
if(cljs.core.truth_(inst_23746)){
var statearr_23778_23804 = state_23769__$1;
(statearr_23778_23804[(1)] = (4));

} else {
var statearr_23779_23805 = state_23769__$1;
(statearr_23779_23805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (11))){
var inst_23760 = cljs.core.async.close_BANG_.call(null,ch);
var state_23769__$1 = state_23769;
var statearr_23780_23806 = state_23769__$1;
(statearr_23780_23806[(2)] = inst_23760);

(statearr_23780_23806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (9))){
var state_23769__$1 = state_23769;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23781_23807 = state_23769__$1;
(statearr_23781_23807[(1)] = (11));

} else {
var statearr_23782_23808 = state_23769__$1;
(statearr_23782_23808[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (5))){
var inst_23746 = (state_23769[(7)]);
var state_23769__$1 = state_23769;
var statearr_23783_23809 = state_23769__$1;
(statearr_23783_23809[(2)] = inst_23746);

(statearr_23783_23809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (10))){
var inst_23765 = (state_23769[(2)]);
var state_23769__$1 = state_23769;
var statearr_23784_23810 = state_23769__$1;
(statearr_23784_23810[(2)] = inst_23765);

(statearr_23784_23810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23770 === (8))){
var inst_23746 = (state_23769[(7)]);
var inst_23756 = cljs.core.next.call(null,inst_23746);
var inst_23746__$1 = inst_23756;
var state_23769__$1 = (function (){var statearr_23785 = state_23769;
(statearr_23785[(7)] = inst_23746__$1);

return statearr_23785;
})();
var statearr_23786_23811 = state_23769__$1;
(statearr_23786_23811[(2)] = null);

(statearr_23786_23811[(1)] = (2));


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
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_23790 = [null,null,null,null,null,null,null,null];
(statearr_23790[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_23790[(1)] = (1));

return statearr_23790;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_23769){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_23769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e23791){if((e23791 instanceof Object)){
var ex__22817__auto__ = e23791;
var statearr_23792_23812 = state_23769;
(statearr_23792_23812[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23813 = state_23769;
state_23769 = G__23813;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_23769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_23769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_23793 = f__22928__auto__.call(null);
(statearr_23793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_23793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20854__auto__ = (((_ == null))?null:_);
var m__20855__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,_);
} else {
var m__20855__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__20855__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m,ch);
} else {
var m__20855__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m);
} else {
var m__20855__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24039 = (function (mult,ch,cs,meta24040){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24040 = meta24040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24041,meta24040__$1){
var self__ = this;
var _24041__$1 = this;
return (new cljs.core.async.t_cljs$core$async24039(self__.mult,self__.ch,self__.cs,meta24040__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24041){
var self__ = this;
var _24041__$1 = this;
return self__.meta24040;
});})(cs))
;

cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24039.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24040","meta24040",373365398,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24039";

cljs.core.async.t_cljs$core$async24039.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async24039");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24039 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24039(mult__$1,ch__$1,cs__$1,meta24040){
return (new cljs.core.async.t_cljs$core$async24039(mult__$1,ch__$1,cs__$1,meta24040));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24039(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22927__auto___24264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___24264,cs,m,dchan,dctr,done){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___24264,cs,m,dchan,dctr,done){
return (function (state_24176){
var state_val_24177 = (state_24176[(1)]);
if((state_val_24177 === (7))){
var inst_24172 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24178_24265 = state_24176__$1;
(statearr_24178_24265[(2)] = inst_24172);

(statearr_24178_24265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (20))){
var inst_24075 = (state_24176[(7)]);
var inst_24087 = cljs.core.first.call(null,inst_24075);
var inst_24088 = cljs.core.nth.call(null,inst_24087,(0),null);
var inst_24089 = cljs.core.nth.call(null,inst_24087,(1),null);
var state_24176__$1 = (function (){var statearr_24179 = state_24176;
(statearr_24179[(8)] = inst_24088);

return statearr_24179;
})();
if(cljs.core.truth_(inst_24089)){
var statearr_24180_24266 = state_24176__$1;
(statearr_24180_24266[(1)] = (22));

} else {
var statearr_24181_24267 = state_24176__$1;
(statearr_24181_24267[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (27))){
var inst_24124 = (state_24176[(9)]);
var inst_24044 = (state_24176[(10)]);
var inst_24117 = (state_24176[(11)]);
var inst_24119 = (state_24176[(12)]);
var inst_24124__$1 = cljs.core._nth.call(null,inst_24117,inst_24119);
var inst_24125 = cljs.core.async.put_BANG_.call(null,inst_24124__$1,inst_24044,done);
var state_24176__$1 = (function (){var statearr_24182 = state_24176;
(statearr_24182[(9)] = inst_24124__$1);

return statearr_24182;
})();
if(cljs.core.truth_(inst_24125)){
var statearr_24183_24268 = state_24176__$1;
(statearr_24183_24268[(1)] = (30));

} else {
var statearr_24184_24269 = state_24176__$1;
(statearr_24184_24269[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (1))){
var state_24176__$1 = state_24176;
var statearr_24185_24270 = state_24176__$1;
(statearr_24185_24270[(2)] = null);

(statearr_24185_24270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (24))){
var inst_24075 = (state_24176[(7)]);
var inst_24094 = (state_24176[(2)]);
var inst_24095 = cljs.core.next.call(null,inst_24075);
var inst_24053 = inst_24095;
var inst_24054 = null;
var inst_24055 = (0);
var inst_24056 = (0);
var state_24176__$1 = (function (){var statearr_24186 = state_24176;
(statearr_24186[(13)] = inst_24094);

(statearr_24186[(14)] = inst_24056);

(statearr_24186[(15)] = inst_24055);

(statearr_24186[(16)] = inst_24053);

(statearr_24186[(17)] = inst_24054);

return statearr_24186;
})();
var statearr_24187_24271 = state_24176__$1;
(statearr_24187_24271[(2)] = null);

(statearr_24187_24271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (39))){
var state_24176__$1 = state_24176;
var statearr_24191_24272 = state_24176__$1;
(statearr_24191_24272[(2)] = null);

(statearr_24191_24272[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (4))){
var inst_24044 = (state_24176[(10)]);
var inst_24044__$1 = (state_24176[(2)]);
var inst_24045 = (inst_24044__$1 == null);
var state_24176__$1 = (function (){var statearr_24192 = state_24176;
(statearr_24192[(10)] = inst_24044__$1);

return statearr_24192;
})();
if(cljs.core.truth_(inst_24045)){
var statearr_24193_24273 = state_24176__$1;
(statearr_24193_24273[(1)] = (5));

} else {
var statearr_24194_24274 = state_24176__$1;
(statearr_24194_24274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (15))){
var inst_24056 = (state_24176[(14)]);
var inst_24055 = (state_24176[(15)]);
var inst_24053 = (state_24176[(16)]);
var inst_24054 = (state_24176[(17)]);
var inst_24071 = (state_24176[(2)]);
var inst_24072 = (inst_24056 + (1));
var tmp24188 = inst_24055;
var tmp24189 = inst_24053;
var tmp24190 = inst_24054;
var inst_24053__$1 = tmp24189;
var inst_24054__$1 = tmp24190;
var inst_24055__$1 = tmp24188;
var inst_24056__$1 = inst_24072;
var state_24176__$1 = (function (){var statearr_24195 = state_24176;
(statearr_24195[(18)] = inst_24071);

(statearr_24195[(14)] = inst_24056__$1);

(statearr_24195[(15)] = inst_24055__$1);

(statearr_24195[(16)] = inst_24053__$1);

(statearr_24195[(17)] = inst_24054__$1);

return statearr_24195;
})();
var statearr_24196_24275 = state_24176__$1;
(statearr_24196_24275[(2)] = null);

(statearr_24196_24275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (21))){
var inst_24098 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24200_24276 = state_24176__$1;
(statearr_24200_24276[(2)] = inst_24098);

(statearr_24200_24276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (31))){
var inst_24124 = (state_24176[(9)]);
var inst_24128 = done.call(null,null);
var inst_24129 = cljs.core.async.untap_STAR_.call(null,m,inst_24124);
var state_24176__$1 = (function (){var statearr_24201 = state_24176;
(statearr_24201[(19)] = inst_24128);

return statearr_24201;
})();
var statearr_24202_24277 = state_24176__$1;
(statearr_24202_24277[(2)] = inst_24129);

(statearr_24202_24277[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (32))){
var inst_24117 = (state_24176[(11)]);
var inst_24116 = (state_24176[(20)]);
var inst_24119 = (state_24176[(12)]);
var inst_24118 = (state_24176[(21)]);
var inst_24131 = (state_24176[(2)]);
var inst_24132 = (inst_24119 + (1));
var tmp24197 = inst_24117;
var tmp24198 = inst_24116;
var tmp24199 = inst_24118;
var inst_24116__$1 = tmp24198;
var inst_24117__$1 = tmp24197;
var inst_24118__$1 = tmp24199;
var inst_24119__$1 = inst_24132;
var state_24176__$1 = (function (){var statearr_24203 = state_24176;
(statearr_24203[(22)] = inst_24131);

(statearr_24203[(11)] = inst_24117__$1);

(statearr_24203[(20)] = inst_24116__$1);

(statearr_24203[(12)] = inst_24119__$1);

(statearr_24203[(21)] = inst_24118__$1);

return statearr_24203;
})();
var statearr_24204_24278 = state_24176__$1;
(statearr_24204_24278[(2)] = null);

(statearr_24204_24278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (40))){
var inst_24144 = (state_24176[(23)]);
var inst_24148 = done.call(null,null);
var inst_24149 = cljs.core.async.untap_STAR_.call(null,m,inst_24144);
var state_24176__$1 = (function (){var statearr_24205 = state_24176;
(statearr_24205[(24)] = inst_24148);

return statearr_24205;
})();
var statearr_24206_24279 = state_24176__$1;
(statearr_24206_24279[(2)] = inst_24149);

(statearr_24206_24279[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (33))){
var inst_24135 = (state_24176[(25)]);
var inst_24137 = cljs.core.chunked_seq_QMARK_.call(null,inst_24135);
var state_24176__$1 = state_24176;
if(inst_24137){
var statearr_24207_24280 = state_24176__$1;
(statearr_24207_24280[(1)] = (36));

} else {
var statearr_24208_24281 = state_24176__$1;
(statearr_24208_24281[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (13))){
var inst_24065 = (state_24176[(26)]);
var inst_24068 = cljs.core.async.close_BANG_.call(null,inst_24065);
var state_24176__$1 = state_24176;
var statearr_24209_24282 = state_24176__$1;
(statearr_24209_24282[(2)] = inst_24068);

(statearr_24209_24282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (22))){
var inst_24088 = (state_24176[(8)]);
var inst_24091 = cljs.core.async.close_BANG_.call(null,inst_24088);
var state_24176__$1 = state_24176;
var statearr_24210_24283 = state_24176__$1;
(statearr_24210_24283[(2)] = inst_24091);

(statearr_24210_24283[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (36))){
var inst_24135 = (state_24176[(25)]);
var inst_24139 = cljs.core.chunk_first.call(null,inst_24135);
var inst_24140 = cljs.core.chunk_rest.call(null,inst_24135);
var inst_24141 = cljs.core.count.call(null,inst_24139);
var inst_24116 = inst_24140;
var inst_24117 = inst_24139;
var inst_24118 = inst_24141;
var inst_24119 = (0);
var state_24176__$1 = (function (){var statearr_24211 = state_24176;
(statearr_24211[(11)] = inst_24117);

(statearr_24211[(20)] = inst_24116);

(statearr_24211[(12)] = inst_24119);

(statearr_24211[(21)] = inst_24118);

return statearr_24211;
})();
var statearr_24212_24284 = state_24176__$1;
(statearr_24212_24284[(2)] = null);

(statearr_24212_24284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (41))){
var inst_24135 = (state_24176[(25)]);
var inst_24151 = (state_24176[(2)]);
var inst_24152 = cljs.core.next.call(null,inst_24135);
var inst_24116 = inst_24152;
var inst_24117 = null;
var inst_24118 = (0);
var inst_24119 = (0);
var state_24176__$1 = (function (){var statearr_24213 = state_24176;
(statearr_24213[(11)] = inst_24117);

(statearr_24213[(20)] = inst_24116);

(statearr_24213[(12)] = inst_24119);

(statearr_24213[(21)] = inst_24118);

(statearr_24213[(27)] = inst_24151);

return statearr_24213;
})();
var statearr_24214_24285 = state_24176__$1;
(statearr_24214_24285[(2)] = null);

(statearr_24214_24285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (43))){
var state_24176__$1 = state_24176;
var statearr_24215_24286 = state_24176__$1;
(statearr_24215_24286[(2)] = null);

(statearr_24215_24286[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (29))){
var inst_24160 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24216_24287 = state_24176__$1;
(statearr_24216_24287[(2)] = inst_24160);

(statearr_24216_24287[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (44))){
var inst_24169 = (state_24176[(2)]);
var state_24176__$1 = (function (){var statearr_24217 = state_24176;
(statearr_24217[(28)] = inst_24169);

return statearr_24217;
})();
var statearr_24218_24288 = state_24176__$1;
(statearr_24218_24288[(2)] = null);

(statearr_24218_24288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (6))){
var inst_24108 = (state_24176[(29)]);
var inst_24107 = cljs.core.deref.call(null,cs);
var inst_24108__$1 = cljs.core.keys.call(null,inst_24107);
var inst_24109 = cljs.core.count.call(null,inst_24108__$1);
var inst_24110 = cljs.core.reset_BANG_.call(null,dctr,inst_24109);
var inst_24115 = cljs.core.seq.call(null,inst_24108__$1);
var inst_24116 = inst_24115;
var inst_24117 = null;
var inst_24118 = (0);
var inst_24119 = (0);
var state_24176__$1 = (function (){var statearr_24219 = state_24176;
(statearr_24219[(30)] = inst_24110);

(statearr_24219[(29)] = inst_24108__$1);

(statearr_24219[(11)] = inst_24117);

(statearr_24219[(20)] = inst_24116);

(statearr_24219[(12)] = inst_24119);

(statearr_24219[(21)] = inst_24118);

return statearr_24219;
})();
var statearr_24220_24289 = state_24176__$1;
(statearr_24220_24289[(2)] = null);

(statearr_24220_24289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (28))){
var inst_24135 = (state_24176[(25)]);
var inst_24116 = (state_24176[(20)]);
var inst_24135__$1 = cljs.core.seq.call(null,inst_24116);
var state_24176__$1 = (function (){var statearr_24221 = state_24176;
(statearr_24221[(25)] = inst_24135__$1);

return statearr_24221;
})();
if(inst_24135__$1){
var statearr_24222_24290 = state_24176__$1;
(statearr_24222_24290[(1)] = (33));

} else {
var statearr_24223_24291 = state_24176__$1;
(statearr_24223_24291[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (25))){
var inst_24119 = (state_24176[(12)]);
var inst_24118 = (state_24176[(21)]);
var inst_24121 = (inst_24119 < inst_24118);
var inst_24122 = inst_24121;
var state_24176__$1 = state_24176;
if(cljs.core.truth_(inst_24122)){
var statearr_24224_24292 = state_24176__$1;
(statearr_24224_24292[(1)] = (27));

} else {
var statearr_24225_24293 = state_24176__$1;
(statearr_24225_24293[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (34))){
var state_24176__$1 = state_24176;
var statearr_24226_24294 = state_24176__$1;
(statearr_24226_24294[(2)] = null);

(statearr_24226_24294[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (17))){
var state_24176__$1 = state_24176;
var statearr_24227_24295 = state_24176__$1;
(statearr_24227_24295[(2)] = null);

(statearr_24227_24295[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (3))){
var inst_24174 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24176__$1,inst_24174);
} else {
if((state_val_24177 === (12))){
var inst_24103 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24228_24296 = state_24176__$1;
(statearr_24228_24296[(2)] = inst_24103);

(statearr_24228_24296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (2))){
var state_24176__$1 = state_24176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24176__$1,(4),ch);
} else {
if((state_val_24177 === (23))){
var state_24176__$1 = state_24176;
var statearr_24229_24297 = state_24176__$1;
(statearr_24229_24297[(2)] = null);

(statearr_24229_24297[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (35))){
var inst_24158 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24230_24298 = state_24176__$1;
(statearr_24230_24298[(2)] = inst_24158);

(statearr_24230_24298[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (19))){
var inst_24075 = (state_24176[(7)]);
var inst_24079 = cljs.core.chunk_first.call(null,inst_24075);
var inst_24080 = cljs.core.chunk_rest.call(null,inst_24075);
var inst_24081 = cljs.core.count.call(null,inst_24079);
var inst_24053 = inst_24080;
var inst_24054 = inst_24079;
var inst_24055 = inst_24081;
var inst_24056 = (0);
var state_24176__$1 = (function (){var statearr_24231 = state_24176;
(statearr_24231[(14)] = inst_24056);

(statearr_24231[(15)] = inst_24055);

(statearr_24231[(16)] = inst_24053);

(statearr_24231[(17)] = inst_24054);

return statearr_24231;
})();
var statearr_24232_24299 = state_24176__$1;
(statearr_24232_24299[(2)] = null);

(statearr_24232_24299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (11))){
var inst_24075 = (state_24176[(7)]);
var inst_24053 = (state_24176[(16)]);
var inst_24075__$1 = cljs.core.seq.call(null,inst_24053);
var state_24176__$1 = (function (){var statearr_24233 = state_24176;
(statearr_24233[(7)] = inst_24075__$1);

return statearr_24233;
})();
if(inst_24075__$1){
var statearr_24234_24300 = state_24176__$1;
(statearr_24234_24300[(1)] = (16));

} else {
var statearr_24235_24301 = state_24176__$1;
(statearr_24235_24301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (9))){
var inst_24105 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24236_24302 = state_24176__$1;
(statearr_24236_24302[(2)] = inst_24105);

(statearr_24236_24302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (5))){
var inst_24051 = cljs.core.deref.call(null,cs);
var inst_24052 = cljs.core.seq.call(null,inst_24051);
var inst_24053 = inst_24052;
var inst_24054 = null;
var inst_24055 = (0);
var inst_24056 = (0);
var state_24176__$1 = (function (){var statearr_24237 = state_24176;
(statearr_24237[(14)] = inst_24056);

(statearr_24237[(15)] = inst_24055);

(statearr_24237[(16)] = inst_24053);

(statearr_24237[(17)] = inst_24054);

return statearr_24237;
})();
var statearr_24238_24303 = state_24176__$1;
(statearr_24238_24303[(2)] = null);

(statearr_24238_24303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (14))){
var state_24176__$1 = state_24176;
var statearr_24239_24304 = state_24176__$1;
(statearr_24239_24304[(2)] = null);

(statearr_24239_24304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (45))){
var inst_24166 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24240_24305 = state_24176__$1;
(statearr_24240_24305[(2)] = inst_24166);

(statearr_24240_24305[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (26))){
var inst_24108 = (state_24176[(29)]);
var inst_24162 = (state_24176[(2)]);
var inst_24163 = cljs.core.seq.call(null,inst_24108);
var state_24176__$1 = (function (){var statearr_24241 = state_24176;
(statearr_24241[(31)] = inst_24162);

return statearr_24241;
})();
if(inst_24163){
var statearr_24242_24306 = state_24176__$1;
(statearr_24242_24306[(1)] = (42));

} else {
var statearr_24243_24307 = state_24176__$1;
(statearr_24243_24307[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (16))){
var inst_24075 = (state_24176[(7)]);
var inst_24077 = cljs.core.chunked_seq_QMARK_.call(null,inst_24075);
var state_24176__$1 = state_24176;
if(inst_24077){
var statearr_24244_24308 = state_24176__$1;
(statearr_24244_24308[(1)] = (19));

} else {
var statearr_24245_24309 = state_24176__$1;
(statearr_24245_24309[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (38))){
var inst_24155 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24246_24310 = state_24176__$1;
(statearr_24246_24310[(2)] = inst_24155);

(statearr_24246_24310[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (30))){
var state_24176__$1 = state_24176;
var statearr_24247_24311 = state_24176__$1;
(statearr_24247_24311[(2)] = null);

(statearr_24247_24311[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (10))){
var inst_24056 = (state_24176[(14)]);
var inst_24054 = (state_24176[(17)]);
var inst_24064 = cljs.core._nth.call(null,inst_24054,inst_24056);
var inst_24065 = cljs.core.nth.call(null,inst_24064,(0),null);
var inst_24066 = cljs.core.nth.call(null,inst_24064,(1),null);
var state_24176__$1 = (function (){var statearr_24248 = state_24176;
(statearr_24248[(26)] = inst_24065);

return statearr_24248;
})();
if(cljs.core.truth_(inst_24066)){
var statearr_24249_24312 = state_24176__$1;
(statearr_24249_24312[(1)] = (13));

} else {
var statearr_24250_24313 = state_24176__$1;
(statearr_24250_24313[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (18))){
var inst_24101 = (state_24176[(2)]);
var state_24176__$1 = state_24176;
var statearr_24251_24314 = state_24176__$1;
(statearr_24251_24314[(2)] = inst_24101);

(statearr_24251_24314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (42))){
var state_24176__$1 = state_24176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24176__$1,(45),dchan);
} else {
if((state_val_24177 === (37))){
var inst_24135 = (state_24176[(25)]);
var inst_24044 = (state_24176[(10)]);
var inst_24144 = (state_24176[(23)]);
var inst_24144__$1 = cljs.core.first.call(null,inst_24135);
var inst_24145 = cljs.core.async.put_BANG_.call(null,inst_24144__$1,inst_24044,done);
var state_24176__$1 = (function (){var statearr_24252 = state_24176;
(statearr_24252[(23)] = inst_24144__$1);

return statearr_24252;
})();
if(cljs.core.truth_(inst_24145)){
var statearr_24253_24315 = state_24176__$1;
(statearr_24253_24315[(1)] = (39));

} else {
var statearr_24254_24316 = state_24176__$1;
(statearr_24254_24316[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24177 === (8))){
var inst_24056 = (state_24176[(14)]);
var inst_24055 = (state_24176[(15)]);
var inst_24058 = (inst_24056 < inst_24055);
var inst_24059 = inst_24058;
var state_24176__$1 = state_24176;
if(cljs.core.truth_(inst_24059)){
var statearr_24255_24317 = state_24176__$1;
(statearr_24255_24317[(1)] = (10));

} else {
var statearr_24256_24318 = state_24176__$1;
(statearr_24256_24318[(1)] = (11));

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
});})(c__22927__auto___24264,cs,m,dchan,dctr,done))
;
return ((function (switch__22813__auto__,c__22927__auto___24264,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22814__auto__ = null;
var cljs$core$async$mult_$_state_machine__22814__auto____0 = (function (){
var statearr_24260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24260[(0)] = cljs$core$async$mult_$_state_machine__22814__auto__);

(statearr_24260[(1)] = (1));

return statearr_24260;
});
var cljs$core$async$mult_$_state_machine__22814__auto____1 = (function (state_24176){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_24176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e24261){if((e24261 instanceof Object)){
var ex__22817__auto__ = e24261;
var statearr_24262_24319 = state_24176;
(statearr_24262_24319[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24320 = state_24176;
state_24176 = G__24320;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22814__auto__ = function(state_24176){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22814__auto____1.call(this,state_24176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22814__auto____0;
cljs$core$async$mult_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22814__auto____1;
return cljs$core$async$mult_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___24264,cs,m,dchan,dctr,done))
})();
var state__22929__auto__ = (function (){var statearr_24263 = f__22928__auto__.call(null);
(statearr_24263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___24264);

return statearr_24263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___24264,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args24321 = [];
var len__21324__auto___24324 = arguments.length;
var i__21325__auto___24325 = (0);
while(true){
if((i__21325__auto___24325 < len__21324__auto___24324)){
args24321.push((arguments[i__21325__auto___24325]));

var G__24326 = (i__21325__auto___24325 + (1));
i__21325__auto___24325 = G__24326;
continue;
} else {
}
break;
}

var G__24323 = args24321.length;
switch (G__24323) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24321.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m,ch);
} else {
var m__20855__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m,ch);
} else {
var m__20855__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m);
} else {
var m__20855__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m,state_map);
} else {
var m__20855__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20854__auto__ = (((m == null))?null:m);
var m__20855__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,m,mode);
} else {
var m__20855__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__21331__auto__ = [];
var len__21324__auto___24338 = arguments.length;
var i__21325__auto___24339 = (0);
while(true){
if((i__21325__auto___24339 < len__21324__auto___24338)){
args__21331__auto__.push((arguments[i__21325__auto___24339]));

var G__24340 = (i__21325__auto___24339 + (1));
i__21325__auto___24339 = G__24340;
continue;
} else {
}
break;
}

var argseq__21332__auto__ = ((((3) < args__21331__auto__.length))?(new cljs.core.IndexedSeq(args__21331__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__21332__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24332){
var map__24333 = p__24332;
var map__24333__$1 = ((((!((map__24333 == null)))?((((map__24333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24333):map__24333);
var opts = map__24333__$1;
var statearr_24335_24341 = state;
(statearr_24335_24341[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6728__auto__ = cljs.core.async.do_alts.call(null,((function (map__24333,map__24333__$1,opts){
return (function (val){
var statearr_24336_24342 = state;
(statearr_24336_24342[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24333,map__24333__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6728__auto__)){
var cb = temp__6728__auto__;
var statearr_24337_24343 = state;
(statearr_24337_24343[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24328){
var G__24329 = cljs.core.first.call(null,seq24328);
var seq24328__$1 = cljs.core.next.call(null,seq24328);
var G__24330 = cljs.core.first.call(null,seq24328__$1);
var seq24328__$2 = cljs.core.next.call(null,seq24328__$1);
var G__24331 = cljs.core.first.call(null,seq24328__$2);
var seq24328__$3 = cljs.core.next.call(null,seq24328__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24329,G__24330,G__24331,seq24328__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24509 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24510){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24510 = meta24510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24511,meta24510__$1){
var self__ = this;
var _24511__$1 = this;
return (new cljs.core.async.t_cljs$core$async24509(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24510__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24511){
var self__ = this;
var _24511__$1 = this;
return self__.meta24510;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24510","meta24510",-678786726,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24509.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24509";

cljs.core.async.t_cljs$core$async24509.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async24509");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24509 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24509(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24510){
return (new cljs.core.async.t_cljs$core$async24509(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24510));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24509(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22927__auto___24674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___24674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___24674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24611){
var state_val_24612 = (state_24611[(1)]);
if((state_val_24612 === (7))){
var inst_24527 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24613_24675 = state_24611__$1;
(statearr_24613_24675[(2)] = inst_24527);

(statearr_24613_24675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (20))){
var inst_24539 = (state_24611[(7)]);
var state_24611__$1 = state_24611;
var statearr_24614_24676 = state_24611__$1;
(statearr_24614_24676[(2)] = inst_24539);

(statearr_24614_24676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (27))){
var state_24611__$1 = state_24611;
var statearr_24615_24677 = state_24611__$1;
(statearr_24615_24677[(2)] = null);

(statearr_24615_24677[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (1))){
var inst_24515 = (state_24611[(8)]);
var inst_24515__$1 = calc_state.call(null);
var inst_24517 = (inst_24515__$1 == null);
var inst_24518 = cljs.core.not.call(null,inst_24517);
var state_24611__$1 = (function (){var statearr_24616 = state_24611;
(statearr_24616[(8)] = inst_24515__$1);

return statearr_24616;
})();
if(inst_24518){
var statearr_24617_24678 = state_24611__$1;
(statearr_24617_24678[(1)] = (2));

} else {
var statearr_24618_24679 = state_24611__$1;
(statearr_24618_24679[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (24))){
var inst_24571 = (state_24611[(9)]);
var inst_24562 = (state_24611[(10)]);
var inst_24585 = (state_24611[(11)]);
var inst_24585__$1 = inst_24562.call(null,inst_24571);
var state_24611__$1 = (function (){var statearr_24619 = state_24611;
(statearr_24619[(11)] = inst_24585__$1);

return statearr_24619;
})();
if(cljs.core.truth_(inst_24585__$1)){
var statearr_24620_24680 = state_24611__$1;
(statearr_24620_24680[(1)] = (29));

} else {
var statearr_24621_24681 = state_24611__$1;
(statearr_24621_24681[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (4))){
var inst_24530 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24530)){
var statearr_24622_24682 = state_24611__$1;
(statearr_24622_24682[(1)] = (8));

} else {
var statearr_24623_24683 = state_24611__$1;
(statearr_24623_24683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (15))){
var inst_24556 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24556)){
var statearr_24624_24684 = state_24611__$1;
(statearr_24624_24684[(1)] = (19));

} else {
var statearr_24625_24685 = state_24611__$1;
(statearr_24625_24685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (21))){
var inst_24561 = (state_24611[(12)]);
var inst_24561__$1 = (state_24611[(2)]);
var inst_24562 = cljs.core.get.call(null,inst_24561__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24563 = cljs.core.get.call(null,inst_24561__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24564 = cljs.core.get.call(null,inst_24561__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24611__$1 = (function (){var statearr_24626 = state_24611;
(statearr_24626[(10)] = inst_24562);

(statearr_24626[(13)] = inst_24563);

(statearr_24626[(12)] = inst_24561__$1);

return statearr_24626;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24611__$1,(22),inst_24564);
} else {
if((state_val_24612 === (31))){
var inst_24593 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24593)){
var statearr_24627_24686 = state_24611__$1;
(statearr_24627_24686[(1)] = (32));

} else {
var statearr_24628_24687 = state_24611__$1;
(statearr_24628_24687[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (32))){
var inst_24570 = (state_24611[(14)]);
var state_24611__$1 = state_24611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24611__$1,(35),out,inst_24570);
} else {
if((state_val_24612 === (33))){
var inst_24561 = (state_24611[(12)]);
var inst_24539 = inst_24561;
var state_24611__$1 = (function (){var statearr_24629 = state_24611;
(statearr_24629[(7)] = inst_24539);

return statearr_24629;
})();
var statearr_24630_24688 = state_24611__$1;
(statearr_24630_24688[(2)] = null);

(statearr_24630_24688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (13))){
var inst_24539 = (state_24611[(7)]);
var inst_24546 = inst_24539.cljs$lang$protocol_mask$partition0$;
var inst_24547 = (inst_24546 & (64));
var inst_24548 = inst_24539.cljs$core$ISeq$;
var inst_24549 = (inst_24547) || (inst_24548);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24549)){
var statearr_24631_24689 = state_24611__$1;
(statearr_24631_24689[(1)] = (16));

} else {
var statearr_24632_24690 = state_24611__$1;
(statearr_24632_24690[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (22))){
var inst_24571 = (state_24611[(9)]);
var inst_24570 = (state_24611[(14)]);
var inst_24569 = (state_24611[(2)]);
var inst_24570__$1 = cljs.core.nth.call(null,inst_24569,(0),null);
var inst_24571__$1 = cljs.core.nth.call(null,inst_24569,(1),null);
var inst_24572 = (inst_24570__$1 == null);
var inst_24573 = cljs.core._EQ_.call(null,inst_24571__$1,change);
var inst_24574 = (inst_24572) || (inst_24573);
var state_24611__$1 = (function (){var statearr_24633 = state_24611;
(statearr_24633[(9)] = inst_24571__$1);

(statearr_24633[(14)] = inst_24570__$1);

return statearr_24633;
})();
if(cljs.core.truth_(inst_24574)){
var statearr_24634_24691 = state_24611__$1;
(statearr_24634_24691[(1)] = (23));

} else {
var statearr_24635_24692 = state_24611__$1;
(statearr_24635_24692[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (36))){
var inst_24561 = (state_24611[(12)]);
var inst_24539 = inst_24561;
var state_24611__$1 = (function (){var statearr_24636 = state_24611;
(statearr_24636[(7)] = inst_24539);

return statearr_24636;
})();
var statearr_24637_24693 = state_24611__$1;
(statearr_24637_24693[(2)] = null);

(statearr_24637_24693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (29))){
var inst_24585 = (state_24611[(11)]);
var state_24611__$1 = state_24611;
var statearr_24638_24694 = state_24611__$1;
(statearr_24638_24694[(2)] = inst_24585);

(statearr_24638_24694[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (6))){
var state_24611__$1 = state_24611;
var statearr_24639_24695 = state_24611__$1;
(statearr_24639_24695[(2)] = false);

(statearr_24639_24695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (28))){
var inst_24581 = (state_24611[(2)]);
var inst_24582 = calc_state.call(null);
var inst_24539 = inst_24582;
var state_24611__$1 = (function (){var statearr_24640 = state_24611;
(statearr_24640[(15)] = inst_24581);

(statearr_24640[(7)] = inst_24539);

return statearr_24640;
})();
var statearr_24641_24696 = state_24611__$1;
(statearr_24641_24696[(2)] = null);

(statearr_24641_24696[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (25))){
var inst_24607 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24642_24697 = state_24611__$1;
(statearr_24642_24697[(2)] = inst_24607);

(statearr_24642_24697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (34))){
var inst_24605 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24643_24698 = state_24611__$1;
(statearr_24643_24698[(2)] = inst_24605);

(statearr_24643_24698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (17))){
var state_24611__$1 = state_24611;
var statearr_24644_24699 = state_24611__$1;
(statearr_24644_24699[(2)] = false);

(statearr_24644_24699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (3))){
var state_24611__$1 = state_24611;
var statearr_24645_24700 = state_24611__$1;
(statearr_24645_24700[(2)] = false);

(statearr_24645_24700[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (12))){
var inst_24609 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24611__$1,inst_24609);
} else {
if((state_val_24612 === (2))){
var inst_24515 = (state_24611[(8)]);
var inst_24520 = inst_24515.cljs$lang$protocol_mask$partition0$;
var inst_24521 = (inst_24520 & (64));
var inst_24522 = inst_24515.cljs$core$ISeq$;
var inst_24523 = (inst_24521) || (inst_24522);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24523)){
var statearr_24646_24701 = state_24611__$1;
(statearr_24646_24701[(1)] = (5));

} else {
var statearr_24647_24702 = state_24611__$1;
(statearr_24647_24702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (23))){
var inst_24570 = (state_24611[(14)]);
var inst_24576 = (inst_24570 == null);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24576)){
var statearr_24648_24703 = state_24611__$1;
(statearr_24648_24703[(1)] = (26));

} else {
var statearr_24649_24704 = state_24611__$1;
(statearr_24649_24704[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (35))){
var inst_24596 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
if(cljs.core.truth_(inst_24596)){
var statearr_24650_24705 = state_24611__$1;
(statearr_24650_24705[(1)] = (36));

} else {
var statearr_24651_24706 = state_24611__$1;
(statearr_24651_24706[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (19))){
var inst_24539 = (state_24611[(7)]);
var inst_24558 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24539);
var state_24611__$1 = state_24611;
var statearr_24652_24707 = state_24611__$1;
(statearr_24652_24707[(2)] = inst_24558);

(statearr_24652_24707[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (11))){
var inst_24539 = (state_24611[(7)]);
var inst_24543 = (inst_24539 == null);
var inst_24544 = cljs.core.not.call(null,inst_24543);
var state_24611__$1 = state_24611;
if(inst_24544){
var statearr_24653_24708 = state_24611__$1;
(statearr_24653_24708[(1)] = (13));

} else {
var statearr_24654_24709 = state_24611__$1;
(statearr_24654_24709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (9))){
var inst_24515 = (state_24611[(8)]);
var state_24611__$1 = state_24611;
var statearr_24655_24710 = state_24611__$1;
(statearr_24655_24710[(2)] = inst_24515);

(statearr_24655_24710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (5))){
var state_24611__$1 = state_24611;
var statearr_24656_24711 = state_24611__$1;
(statearr_24656_24711[(2)] = true);

(statearr_24656_24711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (14))){
var state_24611__$1 = state_24611;
var statearr_24657_24712 = state_24611__$1;
(statearr_24657_24712[(2)] = false);

(statearr_24657_24712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (26))){
var inst_24571 = (state_24611[(9)]);
var inst_24578 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24571);
var state_24611__$1 = state_24611;
var statearr_24658_24713 = state_24611__$1;
(statearr_24658_24713[(2)] = inst_24578);

(statearr_24658_24713[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (16))){
var state_24611__$1 = state_24611;
var statearr_24659_24714 = state_24611__$1;
(statearr_24659_24714[(2)] = true);

(statearr_24659_24714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (38))){
var inst_24601 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24660_24715 = state_24611__$1;
(statearr_24660_24715[(2)] = inst_24601);

(statearr_24660_24715[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (30))){
var inst_24571 = (state_24611[(9)]);
var inst_24562 = (state_24611[(10)]);
var inst_24563 = (state_24611[(13)]);
var inst_24588 = cljs.core.empty_QMARK_.call(null,inst_24562);
var inst_24589 = inst_24563.call(null,inst_24571);
var inst_24590 = cljs.core.not.call(null,inst_24589);
var inst_24591 = (inst_24588) && (inst_24590);
var state_24611__$1 = state_24611;
var statearr_24661_24716 = state_24611__$1;
(statearr_24661_24716[(2)] = inst_24591);

(statearr_24661_24716[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (10))){
var inst_24515 = (state_24611[(8)]);
var inst_24535 = (state_24611[(2)]);
var inst_24536 = cljs.core.get.call(null,inst_24535,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24537 = cljs.core.get.call(null,inst_24535,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24538 = cljs.core.get.call(null,inst_24535,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24539 = inst_24515;
var state_24611__$1 = (function (){var statearr_24662 = state_24611;
(statearr_24662[(16)] = inst_24536);

(statearr_24662[(17)] = inst_24537);

(statearr_24662[(18)] = inst_24538);

(statearr_24662[(7)] = inst_24539);

return statearr_24662;
})();
var statearr_24663_24717 = state_24611__$1;
(statearr_24663_24717[(2)] = null);

(statearr_24663_24717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (18))){
var inst_24553 = (state_24611[(2)]);
var state_24611__$1 = state_24611;
var statearr_24664_24718 = state_24611__$1;
(statearr_24664_24718[(2)] = inst_24553);

(statearr_24664_24718[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (37))){
var state_24611__$1 = state_24611;
var statearr_24665_24719 = state_24611__$1;
(statearr_24665_24719[(2)] = null);

(statearr_24665_24719[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24612 === (8))){
var inst_24515 = (state_24611[(8)]);
var inst_24532 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24515);
var state_24611__$1 = state_24611;
var statearr_24666_24720 = state_24611__$1;
(statearr_24666_24720[(2)] = inst_24532);

(statearr_24666_24720[(1)] = (10));


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
});})(c__22927__auto___24674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22813__auto__,c__22927__auto___24674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22814__auto__ = null;
var cljs$core$async$mix_$_state_machine__22814__auto____0 = (function (){
var statearr_24670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24670[(0)] = cljs$core$async$mix_$_state_machine__22814__auto__);

(statearr_24670[(1)] = (1));

return statearr_24670;
});
var cljs$core$async$mix_$_state_machine__22814__auto____1 = (function (state_24611){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_24611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e24671){if((e24671 instanceof Object)){
var ex__22817__auto__ = e24671;
var statearr_24672_24721 = state_24611;
(statearr_24672_24721[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24722 = state_24611;
state_24611 = G__24722;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22814__auto__ = function(state_24611){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22814__auto____1.call(this,state_24611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22814__auto____0;
cljs$core$async$mix_$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22814__auto____1;
return cljs$core$async$mix_$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___24674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22929__auto__ = (function (){var statearr_24673 = f__22928__auto__.call(null);
(statearr_24673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___24674);

return statearr_24673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___24674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20854__auto__ = (((p == null))?null:p);
var m__20855__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__20855__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20854__auto__ = (((p == null))?null:p);
var m__20855__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,p,v,ch);
} else {
var m__20855__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24723 = [];
var len__21324__auto___24726 = arguments.length;
var i__21325__auto___24727 = (0);
while(true){
if((i__21325__auto___24727 < len__21324__auto___24726)){
args24723.push((arguments[i__21325__auto___24727]));

var G__24728 = (i__21325__auto___24727 + (1));
i__21325__auto___24727 = G__24728;
continue;
} else {
}
break;
}

var G__24725 = args24723.length;
switch (G__24725) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24723.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20854__auto__ = (((p == null))?null:p);
var m__20855__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,p);
} else {
var m__20855__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20854__auto__ = (((p == null))?null:p);
var m__20855__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20854__auto__)]);
if(!((m__20855__auto__ == null))){
return m__20855__auto__.call(null,p,v);
} else {
var m__20855__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__20855__auto____$1 == null))){
return m__20855__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24731 = [];
var len__21324__auto___24856 = arguments.length;
var i__21325__auto___24857 = (0);
while(true){
if((i__21325__auto___24857 < len__21324__auto___24856)){
args24731.push((arguments[i__21325__auto___24857]));

var G__24858 = (i__21325__auto___24857 + (1));
i__21325__auto___24857 = G__24858;
continue;
} else {
}
break;
}

var G__24733 = args24731.length;
switch (G__24733) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24731.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20141__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20141__auto__)){
return or__20141__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20141__auto__,mults){
return (function (p1__24730_SHARP_){
if(cljs.core.truth_(p1__24730_SHARP_.call(null,topic))){
return p1__24730_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24730_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20141__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24734 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24734 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24735){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24735 = meta24735;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24736,meta24735__$1){
var self__ = this;
var _24736__$1 = this;
return (new cljs.core.async.t_cljs$core$async24734(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24735__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24736){
var self__ = this;
var _24736__$1 = this;
return self__.meta24735;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6728__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6728__auto__)){
var m = temp__6728__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24735","meta24735",1799291435,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24734.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24734.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24734";

cljs.core.async.t_cljs$core$async24734.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async24734");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24734 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24734(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24735){
return (new cljs.core.async.t_cljs$core$async24734(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24735));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24734(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22927__auto___24860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___24860,mults,ensure_mult,p){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___24860,mults,ensure_mult,p){
return (function (state_24808){
var state_val_24809 = (state_24808[(1)]);
if((state_val_24809 === (7))){
var inst_24804 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24810_24861 = state_24808__$1;
(statearr_24810_24861[(2)] = inst_24804);

(statearr_24810_24861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (20))){
var state_24808__$1 = state_24808;
var statearr_24811_24862 = state_24808__$1;
(statearr_24811_24862[(2)] = null);

(statearr_24811_24862[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (1))){
var state_24808__$1 = state_24808;
var statearr_24812_24863 = state_24808__$1;
(statearr_24812_24863[(2)] = null);

(statearr_24812_24863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (24))){
var inst_24787 = (state_24808[(7)]);
var inst_24796 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24787);
var state_24808__$1 = state_24808;
var statearr_24813_24864 = state_24808__$1;
(statearr_24813_24864[(2)] = inst_24796);

(statearr_24813_24864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (4))){
var inst_24739 = (state_24808[(8)]);
var inst_24739__$1 = (state_24808[(2)]);
var inst_24740 = (inst_24739__$1 == null);
var state_24808__$1 = (function (){var statearr_24814 = state_24808;
(statearr_24814[(8)] = inst_24739__$1);

return statearr_24814;
})();
if(cljs.core.truth_(inst_24740)){
var statearr_24815_24865 = state_24808__$1;
(statearr_24815_24865[(1)] = (5));

} else {
var statearr_24816_24866 = state_24808__$1;
(statearr_24816_24866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (15))){
var inst_24781 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24817_24867 = state_24808__$1;
(statearr_24817_24867[(2)] = inst_24781);

(statearr_24817_24867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (21))){
var inst_24801 = (state_24808[(2)]);
var state_24808__$1 = (function (){var statearr_24818 = state_24808;
(statearr_24818[(9)] = inst_24801);

return statearr_24818;
})();
var statearr_24819_24868 = state_24808__$1;
(statearr_24819_24868[(2)] = null);

(statearr_24819_24868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (13))){
var inst_24763 = (state_24808[(10)]);
var inst_24765 = cljs.core.chunked_seq_QMARK_.call(null,inst_24763);
var state_24808__$1 = state_24808;
if(inst_24765){
var statearr_24820_24869 = state_24808__$1;
(statearr_24820_24869[(1)] = (16));

} else {
var statearr_24821_24870 = state_24808__$1;
(statearr_24821_24870[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (22))){
var inst_24793 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
if(cljs.core.truth_(inst_24793)){
var statearr_24822_24871 = state_24808__$1;
(statearr_24822_24871[(1)] = (23));

} else {
var statearr_24823_24872 = state_24808__$1;
(statearr_24823_24872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (6))){
var inst_24789 = (state_24808[(11)]);
var inst_24739 = (state_24808[(8)]);
var inst_24787 = (state_24808[(7)]);
var inst_24787__$1 = topic_fn.call(null,inst_24739);
var inst_24788 = cljs.core.deref.call(null,mults);
var inst_24789__$1 = cljs.core.get.call(null,inst_24788,inst_24787__$1);
var state_24808__$1 = (function (){var statearr_24824 = state_24808;
(statearr_24824[(11)] = inst_24789__$1);

(statearr_24824[(7)] = inst_24787__$1);

return statearr_24824;
})();
if(cljs.core.truth_(inst_24789__$1)){
var statearr_24825_24873 = state_24808__$1;
(statearr_24825_24873[(1)] = (19));

} else {
var statearr_24826_24874 = state_24808__$1;
(statearr_24826_24874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (25))){
var inst_24798 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24827_24875 = state_24808__$1;
(statearr_24827_24875[(2)] = inst_24798);

(statearr_24827_24875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (17))){
var inst_24763 = (state_24808[(10)]);
var inst_24772 = cljs.core.first.call(null,inst_24763);
var inst_24773 = cljs.core.async.muxch_STAR_.call(null,inst_24772);
var inst_24774 = cljs.core.async.close_BANG_.call(null,inst_24773);
var inst_24775 = cljs.core.next.call(null,inst_24763);
var inst_24749 = inst_24775;
var inst_24750 = null;
var inst_24751 = (0);
var inst_24752 = (0);
var state_24808__$1 = (function (){var statearr_24828 = state_24808;
(statearr_24828[(12)] = inst_24750);

(statearr_24828[(13)] = inst_24751);

(statearr_24828[(14)] = inst_24752);

(statearr_24828[(15)] = inst_24749);

(statearr_24828[(16)] = inst_24774);

return statearr_24828;
})();
var statearr_24829_24876 = state_24808__$1;
(statearr_24829_24876[(2)] = null);

(statearr_24829_24876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (3))){
var inst_24806 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24808__$1,inst_24806);
} else {
if((state_val_24809 === (12))){
var inst_24783 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24830_24877 = state_24808__$1;
(statearr_24830_24877[(2)] = inst_24783);

(statearr_24830_24877[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (2))){
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24808__$1,(4),ch);
} else {
if((state_val_24809 === (23))){
var state_24808__$1 = state_24808;
var statearr_24831_24878 = state_24808__$1;
(statearr_24831_24878[(2)] = null);

(statearr_24831_24878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (19))){
var inst_24789 = (state_24808[(11)]);
var inst_24739 = (state_24808[(8)]);
var inst_24791 = cljs.core.async.muxch_STAR_.call(null,inst_24789);
var state_24808__$1 = state_24808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24808__$1,(22),inst_24791,inst_24739);
} else {
if((state_val_24809 === (11))){
var inst_24763 = (state_24808[(10)]);
var inst_24749 = (state_24808[(15)]);
var inst_24763__$1 = cljs.core.seq.call(null,inst_24749);
var state_24808__$1 = (function (){var statearr_24832 = state_24808;
(statearr_24832[(10)] = inst_24763__$1);

return statearr_24832;
})();
if(inst_24763__$1){
var statearr_24833_24879 = state_24808__$1;
(statearr_24833_24879[(1)] = (13));

} else {
var statearr_24834_24880 = state_24808__$1;
(statearr_24834_24880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (9))){
var inst_24785 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24835_24881 = state_24808__$1;
(statearr_24835_24881[(2)] = inst_24785);

(statearr_24835_24881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (5))){
var inst_24746 = cljs.core.deref.call(null,mults);
var inst_24747 = cljs.core.vals.call(null,inst_24746);
var inst_24748 = cljs.core.seq.call(null,inst_24747);
var inst_24749 = inst_24748;
var inst_24750 = null;
var inst_24751 = (0);
var inst_24752 = (0);
var state_24808__$1 = (function (){var statearr_24836 = state_24808;
(statearr_24836[(12)] = inst_24750);

(statearr_24836[(13)] = inst_24751);

(statearr_24836[(14)] = inst_24752);

(statearr_24836[(15)] = inst_24749);

return statearr_24836;
})();
var statearr_24837_24882 = state_24808__$1;
(statearr_24837_24882[(2)] = null);

(statearr_24837_24882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (14))){
var state_24808__$1 = state_24808;
var statearr_24841_24883 = state_24808__$1;
(statearr_24841_24883[(2)] = null);

(statearr_24841_24883[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (16))){
var inst_24763 = (state_24808[(10)]);
var inst_24767 = cljs.core.chunk_first.call(null,inst_24763);
var inst_24768 = cljs.core.chunk_rest.call(null,inst_24763);
var inst_24769 = cljs.core.count.call(null,inst_24767);
var inst_24749 = inst_24768;
var inst_24750 = inst_24767;
var inst_24751 = inst_24769;
var inst_24752 = (0);
var state_24808__$1 = (function (){var statearr_24842 = state_24808;
(statearr_24842[(12)] = inst_24750);

(statearr_24842[(13)] = inst_24751);

(statearr_24842[(14)] = inst_24752);

(statearr_24842[(15)] = inst_24749);

return statearr_24842;
})();
var statearr_24843_24884 = state_24808__$1;
(statearr_24843_24884[(2)] = null);

(statearr_24843_24884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (10))){
var inst_24750 = (state_24808[(12)]);
var inst_24751 = (state_24808[(13)]);
var inst_24752 = (state_24808[(14)]);
var inst_24749 = (state_24808[(15)]);
var inst_24757 = cljs.core._nth.call(null,inst_24750,inst_24752);
var inst_24758 = cljs.core.async.muxch_STAR_.call(null,inst_24757);
var inst_24759 = cljs.core.async.close_BANG_.call(null,inst_24758);
var inst_24760 = (inst_24752 + (1));
var tmp24838 = inst_24750;
var tmp24839 = inst_24751;
var tmp24840 = inst_24749;
var inst_24749__$1 = tmp24840;
var inst_24750__$1 = tmp24838;
var inst_24751__$1 = tmp24839;
var inst_24752__$1 = inst_24760;
var state_24808__$1 = (function (){var statearr_24844 = state_24808;
(statearr_24844[(17)] = inst_24759);

(statearr_24844[(12)] = inst_24750__$1);

(statearr_24844[(13)] = inst_24751__$1);

(statearr_24844[(14)] = inst_24752__$1);

(statearr_24844[(15)] = inst_24749__$1);

return statearr_24844;
})();
var statearr_24845_24885 = state_24808__$1;
(statearr_24845_24885[(2)] = null);

(statearr_24845_24885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (18))){
var inst_24778 = (state_24808[(2)]);
var state_24808__$1 = state_24808;
var statearr_24846_24886 = state_24808__$1;
(statearr_24846_24886[(2)] = inst_24778);

(statearr_24846_24886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24809 === (8))){
var inst_24751 = (state_24808[(13)]);
var inst_24752 = (state_24808[(14)]);
var inst_24754 = (inst_24752 < inst_24751);
var inst_24755 = inst_24754;
var state_24808__$1 = state_24808;
if(cljs.core.truth_(inst_24755)){
var statearr_24847_24887 = state_24808__$1;
(statearr_24847_24887[(1)] = (10));

} else {
var statearr_24848_24888 = state_24808__$1;
(statearr_24848_24888[(1)] = (11));

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
});})(c__22927__auto___24860,mults,ensure_mult,p))
;
return ((function (switch__22813__auto__,c__22927__auto___24860,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_24852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24852[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_24852[(1)] = (1));

return statearr_24852;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_24808){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_24808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e24853){if((e24853 instanceof Object)){
var ex__22817__auto__ = e24853;
var statearr_24854_24889 = state_24808;
(statearr_24854_24889[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24890 = state_24808;
state_24808 = G__24890;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_24808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_24808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___24860,mults,ensure_mult,p))
})();
var state__22929__auto__ = (function (){var statearr_24855 = f__22928__auto__.call(null);
(statearr_24855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___24860);

return statearr_24855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___24860,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24891 = [];
var len__21324__auto___24894 = arguments.length;
var i__21325__auto___24895 = (0);
while(true){
if((i__21325__auto___24895 < len__21324__auto___24894)){
args24891.push((arguments[i__21325__auto___24895]));

var G__24896 = (i__21325__auto___24895 + (1));
i__21325__auto___24895 = G__24896;
continue;
} else {
}
break;
}

var G__24893 = args24891.length;
switch (G__24893) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24891.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24898 = [];
var len__21324__auto___24901 = arguments.length;
var i__21325__auto___24902 = (0);
while(true){
if((i__21325__auto___24902 < len__21324__auto___24901)){
args24898.push((arguments[i__21325__auto___24902]));

var G__24903 = (i__21325__auto___24902 + (1));
i__21325__auto___24902 = G__24903;
continue;
} else {
}
break;
}

var G__24900 = args24898.length;
switch (G__24900) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24898.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24905 = [];
var len__21324__auto___24976 = arguments.length;
var i__21325__auto___24977 = (0);
while(true){
if((i__21325__auto___24977 < len__21324__auto___24976)){
args24905.push((arguments[i__21325__auto___24977]));

var G__24978 = (i__21325__auto___24977 + (1));
i__21325__auto___24977 = G__24978;
continue;
} else {
}
break;
}

var G__24907 = args24905.length;
switch (G__24907) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24905.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22927__auto___24980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___24980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___24980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24946){
var state_val_24947 = (state_24946[(1)]);
if((state_val_24947 === (7))){
var state_24946__$1 = state_24946;
var statearr_24948_24981 = state_24946__$1;
(statearr_24948_24981[(2)] = null);

(statearr_24948_24981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (1))){
var state_24946__$1 = state_24946;
var statearr_24949_24982 = state_24946__$1;
(statearr_24949_24982[(2)] = null);

(statearr_24949_24982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (4))){
var inst_24910 = (state_24946[(7)]);
var inst_24912 = (inst_24910 < cnt);
var state_24946__$1 = state_24946;
if(cljs.core.truth_(inst_24912)){
var statearr_24950_24983 = state_24946__$1;
(statearr_24950_24983[(1)] = (6));

} else {
var statearr_24951_24984 = state_24946__$1;
(statearr_24951_24984[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (15))){
var inst_24942 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24952_24985 = state_24946__$1;
(statearr_24952_24985[(2)] = inst_24942);

(statearr_24952_24985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (13))){
var inst_24935 = cljs.core.async.close_BANG_.call(null,out);
var state_24946__$1 = state_24946;
var statearr_24953_24986 = state_24946__$1;
(statearr_24953_24986[(2)] = inst_24935);

(statearr_24953_24986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (6))){
var state_24946__$1 = state_24946;
var statearr_24954_24987 = state_24946__$1;
(statearr_24954_24987[(2)] = null);

(statearr_24954_24987[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (3))){
var inst_24944 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24946__$1,inst_24944);
} else {
if((state_val_24947 === (12))){
var inst_24932 = (state_24946[(8)]);
var inst_24932__$1 = (state_24946[(2)]);
var inst_24933 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24932__$1);
var state_24946__$1 = (function (){var statearr_24955 = state_24946;
(statearr_24955[(8)] = inst_24932__$1);

return statearr_24955;
})();
if(cljs.core.truth_(inst_24933)){
var statearr_24956_24988 = state_24946__$1;
(statearr_24956_24988[(1)] = (13));

} else {
var statearr_24957_24989 = state_24946__$1;
(statearr_24957_24989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (2))){
var inst_24909 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24910 = (0);
var state_24946__$1 = (function (){var statearr_24958 = state_24946;
(statearr_24958[(9)] = inst_24909);

(statearr_24958[(7)] = inst_24910);

return statearr_24958;
})();
var statearr_24959_24990 = state_24946__$1;
(statearr_24959_24990[(2)] = null);

(statearr_24959_24990[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (11))){
var inst_24910 = (state_24946[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24946,(10),Object,null,(9));
var inst_24919 = chs__$1.call(null,inst_24910);
var inst_24920 = done.call(null,inst_24910);
var inst_24921 = cljs.core.async.take_BANG_.call(null,inst_24919,inst_24920);
var state_24946__$1 = state_24946;
var statearr_24960_24991 = state_24946__$1;
(statearr_24960_24991[(2)] = inst_24921);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24946__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (9))){
var inst_24910 = (state_24946[(7)]);
var inst_24923 = (state_24946[(2)]);
var inst_24924 = (inst_24910 + (1));
var inst_24910__$1 = inst_24924;
var state_24946__$1 = (function (){var statearr_24961 = state_24946;
(statearr_24961[(10)] = inst_24923);

(statearr_24961[(7)] = inst_24910__$1);

return statearr_24961;
})();
var statearr_24962_24992 = state_24946__$1;
(statearr_24962_24992[(2)] = null);

(statearr_24962_24992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (5))){
var inst_24930 = (state_24946[(2)]);
var state_24946__$1 = (function (){var statearr_24963 = state_24946;
(statearr_24963[(11)] = inst_24930);

return statearr_24963;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24946__$1,(12),dchan);
} else {
if((state_val_24947 === (14))){
var inst_24932 = (state_24946[(8)]);
var inst_24937 = cljs.core.apply.call(null,f,inst_24932);
var state_24946__$1 = state_24946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24946__$1,(16),out,inst_24937);
} else {
if((state_val_24947 === (16))){
var inst_24939 = (state_24946[(2)]);
var state_24946__$1 = (function (){var statearr_24964 = state_24946;
(statearr_24964[(12)] = inst_24939);

return statearr_24964;
})();
var statearr_24965_24993 = state_24946__$1;
(statearr_24965_24993[(2)] = null);

(statearr_24965_24993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (10))){
var inst_24914 = (state_24946[(2)]);
var inst_24915 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24946__$1 = (function (){var statearr_24966 = state_24946;
(statearr_24966[(13)] = inst_24914);

return statearr_24966;
})();
var statearr_24967_24994 = state_24946__$1;
(statearr_24967_24994[(2)] = inst_24915);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24946__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24947 === (8))){
var inst_24928 = (state_24946[(2)]);
var state_24946__$1 = state_24946;
var statearr_24968_24995 = state_24946__$1;
(statearr_24968_24995[(2)] = inst_24928);

(statearr_24968_24995[(1)] = (5));


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
});})(c__22927__auto___24980,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22813__auto__,c__22927__auto___24980,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_24972 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24972[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_24972[(1)] = (1));

return statearr_24972;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_24946){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_24946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e24973){if((e24973 instanceof Object)){
var ex__22817__auto__ = e24973;
var statearr_24974_24996 = state_24946;
(statearr_24974_24996[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24997 = state_24946;
state_24946 = G__24997;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_24946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_24946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___24980,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22929__auto__ = (function (){var statearr_24975 = f__22928__auto__.call(null);
(statearr_24975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___24980);

return statearr_24975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___24980,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24999 = [];
var len__21324__auto___25057 = arguments.length;
var i__21325__auto___25058 = (0);
while(true){
if((i__21325__auto___25058 < len__21324__auto___25057)){
args24999.push((arguments[i__21325__auto___25058]));

var G__25059 = (i__21325__auto___25058 + (1));
i__21325__auto___25058 = G__25059;
continue;
} else {
}
break;
}

var G__25001 = args24999.length;
switch (G__25001) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24999.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22927__auto___25061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___25061,out){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___25061,out){
return (function (state_25033){
var state_val_25034 = (state_25033[(1)]);
if((state_val_25034 === (7))){
var inst_25013 = (state_25033[(7)]);
var inst_25012 = (state_25033[(8)]);
var inst_25012__$1 = (state_25033[(2)]);
var inst_25013__$1 = cljs.core.nth.call(null,inst_25012__$1,(0),null);
var inst_25014 = cljs.core.nth.call(null,inst_25012__$1,(1),null);
var inst_25015 = (inst_25013__$1 == null);
var state_25033__$1 = (function (){var statearr_25035 = state_25033;
(statearr_25035[(7)] = inst_25013__$1);

(statearr_25035[(9)] = inst_25014);

(statearr_25035[(8)] = inst_25012__$1);

return statearr_25035;
})();
if(cljs.core.truth_(inst_25015)){
var statearr_25036_25062 = state_25033__$1;
(statearr_25036_25062[(1)] = (8));

} else {
var statearr_25037_25063 = state_25033__$1;
(statearr_25037_25063[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (1))){
var inst_25002 = cljs.core.vec.call(null,chs);
var inst_25003 = inst_25002;
var state_25033__$1 = (function (){var statearr_25038 = state_25033;
(statearr_25038[(10)] = inst_25003);

return statearr_25038;
})();
var statearr_25039_25064 = state_25033__$1;
(statearr_25039_25064[(2)] = null);

(statearr_25039_25064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (4))){
var inst_25003 = (state_25033[(10)]);
var state_25033__$1 = state_25033;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25033__$1,(7),inst_25003);
} else {
if((state_val_25034 === (6))){
var inst_25029 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25040_25065 = state_25033__$1;
(statearr_25040_25065[(2)] = inst_25029);

(statearr_25040_25065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (3))){
var inst_25031 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25033__$1,inst_25031);
} else {
if((state_val_25034 === (2))){
var inst_25003 = (state_25033[(10)]);
var inst_25005 = cljs.core.count.call(null,inst_25003);
var inst_25006 = (inst_25005 > (0));
var state_25033__$1 = state_25033;
if(cljs.core.truth_(inst_25006)){
var statearr_25042_25066 = state_25033__$1;
(statearr_25042_25066[(1)] = (4));

} else {
var statearr_25043_25067 = state_25033__$1;
(statearr_25043_25067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (11))){
var inst_25003 = (state_25033[(10)]);
var inst_25022 = (state_25033[(2)]);
var tmp25041 = inst_25003;
var inst_25003__$1 = tmp25041;
var state_25033__$1 = (function (){var statearr_25044 = state_25033;
(statearr_25044[(11)] = inst_25022);

(statearr_25044[(10)] = inst_25003__$1);

return statearr_25044;
})();
var statearr_25045_25068 = state_25033__$1;
(statearr_25045_25068[(2)] = null);

(statearr_25045_25068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (9))){
var inst_25013 = (state_25033[(7)]);
var state_25033__$1 = state_25033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25033__$1,(11),out,inst_25013);
} else {
if((state_val_25034 === (5))){
var inst_25027 = cljs.core.async.close_BANG_.call(null,out);
var state_25033__$1 = state_25033;
var statearr_25046_25069 = state_25033__$1;
(statearr_25046_25069[(2)] = inst_25027);

(statearr_25046_25069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (10))){
var inst_25025 = (state_25033[(2)]);
var state_25033__$1 = state_25033;
var statearr_25047_25070 = state_25033__$1;
(statearr_25047_25070[(2)] = inst_25025);

(statearr_25047_25070[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25034 === (8))){
var inst_25013 = (state_25033[(7)]);
var inst_25014 = (state_25033[(9)]);
var inst_25003 = (state_25033[(10)]);
var inst_25012 = (state_25033[(8)]);
var inst_25017 = (function (){var cs = inst_25003;
var vec__25008 = inst_25012;
var v = inst_25013;
var c = inst_25014;
return ((function (cs,vec__25008,v,c,inst_25013,inst_25014,inst_25003,inst_25012,state_val_25034,c__22927__auto___25061,out){
return (function (p1__24998_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24998_SHARP_);
});
;})(cs,vec__25008,v,c,inst_25013,inst_25014,inst_25003,inst_25012,state_val_25034,c__22927__auto___25061,out))
})();
var inst_25018 = cljs.core.filterv.call(null,inst_25017,inst_25003);
var inst_25003__$1 = inst_25018;
var state_25033__$1 = (function (){var statearr_25048 = state_25033;
(statearr_25048[(10)] = inst_25003__$1);

return statearr_25048;
})();
var statearr_25049_25071 = state_25033__$1;
(statearr_25049_25071[(2)] = null);

(statearr_25049_25071[(1)] = (2));


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
});})(c__22927__auto___25061,out))
;
return ((function (switch__22813__auto__,c__22927__auto___25061,out){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_25053 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25053[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_25053[(1)] = (1));

return statearr_25053;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_25033){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_25033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e25054){if((e25054 instanceof Object)){
var ex__22817__auto__ = e25054;
var statearr_25055_25072 = state_25033;
(statearr_25055_25072[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25073 = state_25033;
state_25033 = G__25073;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_25033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_25033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___25061,out))
})();
var state__22929__auto__ = (function (){var statearr_25056 = f__22928__auto__.call(null);
(statearr_25056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___25061);

return statearr_25056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___25061,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args25074 = [];
var len__21324__auto___25123 = arguments.length;
var i__21325__auto___25124 = (0);
while(true){
if((i__21325__auto___25124 < len__21324__auto___25123)){
args25074.push((arguments[i__21325__auto___25124]));

var G__25125 = (i__21325__auto___25124 + (1));
i__21325__auto___25124 = G__25125;
continue;
} else {
}
break;
}

var G__25076 = args25074.length;
switch (G__25076) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25074.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22927__auto___25127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___25127,out){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___25127,out){
return (function (state_25100){
var state_val_25101 = (state_25100[(1)]);
if((state_val_25101 === (7))){
var inst_25082 = (state_25100[(7)]);
var inst_25082__$1 = (state_25100[(2)]);
var inst_25083 = (inst_25082__$1 == null);
var inst_25084 = cljs.core.not.call(null,inst_25083);
var state_25100__$1 = (function (){var statearr_25102 = state_25100;
(statearr_25102[(7)] = inst_25082__$1);

return statearr_25102;
})();
if(inst_25084){
var statearr_25103_25128 = state_25100__$1;
(statearr_25103_25128[(1)] = (8));

} else {
var statearr_25104_25129 = state_25100__$1;
(statearr_25104_25129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (1))){
var inst_25077 = (0);
var state_25100__$1 = (function (){var statearr_25105 = state_25100;
(statearr_25105[(8)] = inst_25077);

return statearr_25105;
})();
var statearr_25106_25130 = state_25100__$1;
(statearr_25106_25130[(2)] = null);

(statearr_25106_25130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (4))){
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25100__$1,(7),ch);
} else {
if((state_val_25101 === (6))){
var inst_25095 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25107_25131 = state_25100__$1;
(statearr_25107_25131[(2)] = inst_25095);

(statearr_25107_25131[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (3))){
var inst_25097 = (state_25100[(2)]);
var inst_25098 = cljs.core.async.close_BANG_.call(null,out);
var state_25100__$1 = (function (){var statearr_25108 = state_25100;
(statearr_25108[(9)] = inst_25097);

return statearr_25108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25100__$1,inst_25098);
} else {
if((state_val_25101 === (2))){
var inst_25077 = (state_25100[(8)]);
var inst_25079 = (inst_25077 < n);
var state_25100__$1 = state_25100;
if(cljs.core.truth_(inst_25079)){
var statearr_25109_25132 = state_25100__$1;
(statearr_25109_25132[(1)] = (4));

} else {
var statearr_25110_25133 = state_25100__$1;
(statearr_25110_25133[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (11))){
var inst_25077 = (state_25100[(8)]);
var inst_25087 = (state_25100[(2)]);
var inst_25088 = (inst_25077 + (1));
var inst_25077__$1 = inst_25088;
var state_25100__$1 = (function (){var statearr_25111 = state_25100;
(statearr_25111[(10)] = inst_25087);

(statearr_25111[(8)] = inst_25077__$1);

return statearr_25111;
})();
var statearr_25112_25134 = state_25100__$1;
(statearr_25112_25134[(2)] = null);

(statearr_25112_25134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (9))){
var state_25100__$1 = state_25100;
var statearr_25113_25135 = state_25100__$1;
(statearr_25113_25135[(2)] = null);

(statearr_25113_25135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (5))){
var state_25100__$1 = state_25100;
var statearr_25114_25136 = state_25100__$1;
(statearr_25114_25136[(2)] = null);

(statearr_25114_25136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (10))){
var inst_25092 = (state_25100[(2)]);
var state_25100__$1 = state_25100;
var statearr_25115_25137 = state_25100__$1;
(statearr_25115_25137[(2)] = inst_25092);

(statearr_25115_25137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25101 === (8))){
var inst_25082 = (state_25100[(7)]);
var state_25100__$1 = state_25100;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25100__$1,(11),out,inst_25082);
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
});})(c__22927__auto___25127,out))
;
return ((function (switch__22813__auto__,c__22927__auto___25127,out){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_25119 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25119[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_25119[(1)] = (1));

return statearr_25119;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_25100){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_25100);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e25120){if((e25120 instanceof Object)){
var ex__22817__auto__ = e25120;
var statearr_25121_25138 = state_25100;
(statearr_25121_25138[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25100);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25139 = state_25100;
state_25100 = G__25139;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_25100){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_25100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___25127,out))
})();
var state__22929__auto__ = (function (){var statearr_25122 = f__22928__auto__.call(null);
(statearr_25122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___25127);

return statearr_25122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___25127,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25147 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25147 = (function (map_LT_,f,ch,meta25148){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25148 = meta25148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25149,meta25148__$1){
var self__ = this;
var _25149__$1 = this;
return (new cljs.core.async.t_cljs$core$async25147(self__.map_LT_,self__.f,self__.ch,meta25148__$1));
});

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25149){
var self__ = this;
var _25149__$1 = this;
return self__.meta25148;
});

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25150 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25150 = (function (map_LT_,f,ch,meta25148,_,fn1,meta25151){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25148 = meta25148;
this._ = _;
this.fn1 = fn1;
this.meta25151 = meta25151;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25152,meta25151__$1){
var self__ = this;
var _25152__$1 = this;
return (new cljs.core.async.t_cljs$core$async25150(self__.map_LT_,self__.f,self__.ch,self__.meta25148,self__._,self__.fn1,meta25151__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25150.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25152){
var self__ = this;
var _25152__$1 = this;
return self__.meta25151;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25150.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25150.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25140_SHARP_){
return f1.call(null,(((p1__25140_SHARP_ == null))?null:self__.f.call(null,p1__25140_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25150.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25148","meta25148",1331108097,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25147","cljs.core.async/t_cljs$core$async25147",1891614647,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25151","meta25151",326113322,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25150.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25150.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25150";

cljs.core.async.t_cljs$core$async25150.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async25150");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25150 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25150(map_LT___$1,f__$1,ch__$1,meta25148__$1,___$2,fn1__$1,meta25151){
return (new cljs.core.async.t_cljs$core$async25150(map_LT___$1,f__$1,ch__$1,meta25148__$1,___$2,fn1__$1,meta25151));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25150(self__.map_LT_,self__.f,self__.ch,self__.meta25148,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20129__auto__ = ret;
if(cljs.core.truth_(and__20129__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20129__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25148","meta25148",1331108097,null)], null);
});

cljs.core.async.t_cljs$core$async25147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25147";

cljs.core.async.t_cljs$core$async25147.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async25147");
});

cljs.core.async.__GT_t_cljs$core$async25147 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25147(map_LT___$1,f__$1,ch__$1,meta25148){
return (new cljs.core.async.t_cljs$core$async25147(map_LT___$1,f__$1,ch__$1,meta25148));
});

}

return (new cljs.core.async.t_cljs$core$async25147(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25156 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25156 = (function (map_GT_,f,ch,meta25157){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25157 = meta25157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25158,meta25157__$1){
var self__ = this;
var _25158__$1 = this;
return (new cljs.core.async.t_cljs$core$async25156(self__.map_GT_,self__.f,self__.ch,meta25157__$1));
});

cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25158){
var self__ = this;
var _25158__$1 = this;
return self__.meta25157;
});

cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25157","meta25157",-1476237323,null)], null);
});

cljs.core.async.t_cljs$core$async25156.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25156";

cljs.core.async.t_cljs$core$async25156.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async25156");
});

cljs.core.async.__GT_t_cljs$core$async25156 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25156(map_GT___$1,f__$1,ch__$1,meta25157){
return (new cljs.core.async.t_cljs$core$async25156(map_GT___$1,f__$1,ch__$1,meta25157));
});

}

return (new cljs.core.async.t_cljs$core$async25156(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25162 = (function (filter_GT_,p,ch,meta25163){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25163 = meta25163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25164,meta25163__$1){
var self__ = this;
var _25164__$1 = this;
return (new cljs.core.async.t_cljs$core$async25162(self__.filter_GT_,self__.p,self__.ch,meta25163__$1));
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25164){
var self__ = this;
var _25164__$1 = this;
return self__.meta25163;
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25163","meta25163",-1264184818,null)], null);
});

cljs.core.async.t_cljs$core$async25162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25162";

cljs.core.async.t_cljs$core$async25162.cljs$lang$ctorPrWriter = (function (this__20793__auto__,writer__20794__auto__,opt__20795__auto__){
return cljs.core._write.call(null,writer__20794__auto__,"cljs.core.async/t_cljs$core$async25162");
});

cljs.core.async.__GT_t_cljs$core$async25162 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25162(filter_GT___$1,p__$1,ch__$1,meta25163){
return (new cljs.core.async.t_cljs$core$async25162(filter_GT___$1,p__$1,ch__$1,meta25163));
});

}

return (new cljs.core.async.t_cljs$core$async25162(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args25165 = [];
var len__21324__auto___25209 = arguments.length;
var i__21325__auto___25210 = (0);
while(true){
if((i__21325__auto___25210 < len__21324__auto___25209)){
args25165.push((arguments[i__21325__auto___25210]));

var G__25211 = (i__21325__auto___25210 + (1));
i__21325__auto___25210 = G__25211;
continue;
} else {
}
break;
}

var G__25167 = args25165.length;
switch (G__25167) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25165.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22927__auto___25213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___25213,out){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___25213,out){
return (function (state_25188){
var state_val_25189 = (state_25188[(1)]);
if((state_val_25189 === (7))){
var inst_25184 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25190_25214 = state_25188__$1;
(statearr_25190_25214[(2)] = inst_25184);

(statearr_25190_25214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (1))){
var state_25188__$1 = state_25188;
var statearr_25191_25215 = state_25188__$1;
(statearr_25191_25215[(2)] = null);

(statearr_25191_25215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (4))){
var inst_25170 = (state_25188[(7)]);
var inst_25170__$1 = (state_25188[(2)]);
var inst_25171 = (inst_25170__$1 == null);
var state_25188__$1 = (function (){var statearr_25192 = state_25188;
(statearr_25192[(7)] = inst_25170__$1);

return statearr_25192;
})();
if(cljs.core.truth_(inst_25171)){
var statearr_25193_25216 = state_25188__$1;
(statearr_25193_25216[(1)] = (5));

} else {
var statearr_25194_25217 = state_25188__$1;
(statearr_25194_25217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (6))){
var inst_25170 = (state_25188[(7)]);
var inst_25175 = p.call(null,inst_25170);
var state_25188__$1 = state_25188;
if(cljs.core.truth_(inst_25175)){
var statearr_25195_25218 = state_25188__$1;
(statearr_25195_25218[(1)] = (8));

} else {
var statearr_25196_25219 = state_25188__$1;
(statearr_25196_25219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (3))){
var inst_25186 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25188__$1,inst_25186);
} else {
if((state_val_25189 === (2))){
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25188__$1,(4),ch);
} else {
if((state_val_25189 === (11))){
var inst_25178 = (state_25188[(2)]);
var state_25188__$1 = state_25188;
var statearr_25197_25220 = state_25188__$1;
(statearr_25197_25220[(2)] = inst_25178);

(statearr_25197_25220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (9))){
var state_25188__$1 = state_25188;
var statearr_25198_25221 = state_25188__$1;
(statearr_25198_25221[(2)] = null);

(statearr_25198_25221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (5))){
var inst_25173 = cljs.core.async.close_BANG_.call(null,out);
var state_25188__$1 = state_25188;
var statearr_25199_25222 = state_25188__$1;
(statearr_25199_25222[(2)] = inst_25173);

(statearr_25199_25222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (10))){
var inst_25181 = (state_25188[(2)]);
var state_25188__$1 = (function (){var statearr_25200 = state_25188;
(statearr_25200[(8)] = inst_25181);

return statearr_25200;
})();
var statearr_25201_25223 = state_25188__$1;
(statearr_25201_25223[(2)] = null);

(statearr_25201_25223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25189 === (8))){
var inst_25170 = (state_25188[(7)]);
var state_25188__$1 = state_25188;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25188__$1,(11),out,inst_25170);
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
});})(c__22927__auto___25213,out))
;
return ((function (switch__22813__auto__,c__22927__auto___25213,out){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_25205 = [null,null,null,null,null,null,null,null,null];
(statearr_25205[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_25205[(1)] = (1));

return statearr_25205;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_25188){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_25188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e25206){if((e25206 instanceof Object)){
var ex__22817__auto__ = e25206;
var statearr_25207_25224 = state_25188;
(statearr_25207_25224[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25225 = state_25188;
state_25188 = G__25225;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_25188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_25188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___25213,out))
})();
var state__22929__auto__ = (function (){var statearr_25208 = f__22928__auto__.call(null);
(statearr_25208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___25213);

return statearr_25208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___25213,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25226 = [];
var len__21324__auto___25229 = arguments.length;
var i__21325__auto___25230 = (0);
while(true){
if((i__21325__auto___25230 < len__21324__auto___25229)){
args25226.push((arguments[i__21325__auto___25230]));

var G__25231 = (i__21325__auto___25230 + (1));
i__21325__auto___25230 = G__25231;
continue;
} else {
}
break;
}

var G__25228 = args25226.length;
switch (G__25228) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25226.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22927__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto__){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto__){
return (function (state_25398){
var state_val_25399 = (state_25398[(1)]);
if((state_val_25399 === (7))){
var inst_25394 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25400_25441 = state_25398__$1;
(statearr_25400_25441[(2)] = inst_25394);

(statearr_25400_25441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (20))){
var inst_25364 = (state_25398[(7)]);
var inst_25375 = (state_25398[(2)]);
var inst_25376 = cljs.core.next.call(null,inst_25364);
var inst_25350 = inst_25376;
var inst_25351 = null;
var inst_25352 = (0);
var inst_25353 = (0);
var state_25398__$1 = (function (){var statearr_25401 = state_25398;
(statearr_25401[(8)] = inst_25375);

(statearr_25401[(9)] = inst_25353);

(statearr_25401[(10)] = inst_25350);

(statearr_25401[(11)] = inst_25351);

(statearr_25401[(12)] = inst_25352);

return statearr_25401;
})();
var statearr_25402_25442 = state_25398__$1;
(statearr_25402_25442[(2)] = null);

(statearr_25402_25442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (1))){
var state_25398__$1 = state_25398;
var statearr_25403_25443 = state_25398__$1;
(statearr_25403_25443[(2)] = null);

(statearr_25403_25443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (4))){
var inst_25339 = (state_25398[(13)]);
var inst_25339__$1 = (state_25398[(2)]);
var inst_25340 = (inst_25339__$1 == null);
var state_25398__$1 = (function (){var statearr_25404 = state_25398;
(statearr_25404[(13)] = inst_25339__$1);

return statearr_25404;
})();
if(cljs.core.truth_(inst_25340)){
var statearr_25405_25444 = state_25398__$1;
(statearr_25405_25444[(1)] = (5));

} else {
var statearr_25406_25445 = state_25398__$1;
(statearr_25406_25445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (15))){
var state_25398__$1 = state_25398;
var statearr_25410_25446 = state_25398__$1;
(statearr_25410_25446[(2)] = null);

(statearr_25410_25446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (21))){
var state_25398__$1 = state_25398;
var statearr_25411_25447 = state_25398__$1;
(statearr_25411_25447[(2)] = null);

(statearr_25411_25447[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (13))){
var inst_25353 = (state_25398[(9)]);
var inst_25350 = (state_25398[(10)]);
var inst_25351 = (state_25398[(11)]);
var inst_25352 = (state_25398[(12)]);
var inst_25360 = (state_25398[(2)]);
var inst_25361 = (inst_25353 + (1));
var tmp25407 = inst_25350;
var tmp25408 = inst_25351;
var tmp25409 = inst_25352;
var inst_25350__$1 = tmp25407;
var inst_25351__$1 = tmp25408;
var inst_25352__$1 = tmp25409;
var inst_25353__$1 = inst_25361;
var state_25398__$1 = (function (){var statearr_25412 = state_25398;
(statearr_25412[(14)] = inst_25360);

(statearr_25412[(9)] = inst_25353__$1);

(statearr_25412[(10)] = inst_25350__$1);

(statearr_25412[(11)] = inst_25351__$1);

(statearr_25412[(12)] = inst_25352__$1);

return statearr_25412;
})();
var statearr_25413_25448 = state_25398__$1;
(statearr_25413_25448[(2)] = null);

(statearr_25413_25448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (22))){
var state_25398__$1 = state_25398;
var statearr_25414_25449 = state_25398__$1;
(statearr_25414_25449[(2)] = null);

(statearr_25414_25449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (6))){
var inst_25339 = (state_25398[(13)]);
var inst_25348 = f.call(null,inst_25339);
var inst_25349 = cljs.core.seq.call(null,inst_25348);
var inst_25350 = inst_25349;
var inst_25351 = null;
var inst_25352 = (0);
var inst_25353 = (0);
var state_25398__$1 = (function (){var statearr_25415 = state_25398;
(statearr_25415[(9)] = inst_25353);

(statearr_25415[(10)] = inst_25350);

(statearr_25415[(11)] = inst_25351);

(statearr_25415[(12)] = inst_25352);

return statearr_25415;
})();
var statearr_25416_25450 = state_25398__$1;
(statearr_25416_25450[(2)] = null);

(statearr_25416_25450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (17))){
var inst_25364 = (state_25398[(7)]);
var inst_25368 = cljs.core.chunk_first.call(null,inst_25364);
var inst_25369 = cljs.core.chunk_rest.call(null,inst_25364);
var inst_25370 = cljs.core.count.call(null,inst_25368);
var inst_25350 = inst_25369;
var inst_25351 = inst_25368;
var inst_25352 = inst_25370;
var inst_25353 = (0);
var state_25398__$1 = (function (){var statearr_25417 = state_25398;
(statearr_25417[(9)] = inst_25353);

(statearr_25417[(10)] = inst_25350);

(statearr_25417[(11)] = inst_25351);

(statearr_25417[(12)] = inst_25352);

return statearr_25417;
})();
var statearr_25418_25451 = state_25398__$1;
(statearr_25418_25451[(2)] = null);

(statearr_25418_25451[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (3))){
var inst_25396 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25398__$1,inst_25396);
} else {
if((state_val_25399 === (12))){
var inst_25384 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25419_25452 = state_25398__$1;
(statearr_25419_25452[(2)] = inst_25384);

(statearr_25419_25452[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (2))){
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25398__$1,(4),in$);
} else {
if((state_val_25399 === (23))){
var inst_25392 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25420_25453 = state_25398__$1;
(statearr_25420_25453[(2)] = inst_25392);

(statearr_25420_25453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (19))){
var inst_25379 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25421_25454 = state_25398__$1;
(statearr_25421_25454[(2)] = inst_25379);

(statearr_25421_25454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (11))){
var inst_25364 = (state_25398[(7)]);
var inst_25350 = (state_25398[(10)]);
var inst_25364__$1 = cljs.core.seq.call(null,inst_25350);
var state_25398__$1 = (function (){var statearr_25422 = state_25398;
(statearr_25422[(7)] = inst_25364__$1);

return statearr_25422;
})();
if(inst_25364__$1){
var statearr_25423_25455 = state_25398__$1;
(statearr_25423_25455[(1)] = (14));

} else {
var statearr_25424_25456 = state_25398__$1;
(statearr_25424_25456[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (9))){
var inst_25386 = (state_25398[(2)]);
var inst_25387 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25398__$1 = (function (){var statearr_25425 = state_25398;
(statearr_25425[(15)] = inst_25386);

return statearr_25425;
})();
if(cljs.core.truth_(inst_25387)){
var statearr_25426_25457 = state_25398__$1;
(statearr_25426_25457[(1)] = (21));

} else {
var statearr_25427_25458 = state_25398__$1;
(statearr_25427_25458[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (5))){
var inst_25342 = cljs.core.async.close_BANG_.call(null,out);
var state_25398__$1 = state_25398;
var statearr_25428_25459 = state_25398__$1;
(statearr_25428_25459[(2)] = inst_25342);

(statearr_25428_25459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (14))){
var inst_25364 = (state_25398[(7)]);
var inst_25366 = cljs.core.chunked_seq_QMARK_.call(null,inst_25364);
var state_25398__$1 = state_25398;
if(inst_25366){
var statearr_25429_25460 = state_25398__$1;
(statearr_25429_25460[(1)] = (17));

} else {
var statearr_25430_25461 = state_25398__$1;
(statearr_25430_25461[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (16))){
var inst_25382 = (state_25398[(2)]);
var state_25398__$1 = state_25398;
var statearr_25431_25462 = state_25398__$1;
(statearr_25431_25462[(2)] = inst_25382);

(statearr_25431_25462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25399 === (10))){
var inst_25353 = (state_25398[(9)]);
var inst_25351 = (state_25398[(11)]);
var inst_25358 = cljs.core._nth.call(null,inst_25351,inst_25353);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25398__$1,(13),out,inst_25358);
} else {
if((state_val_25399 === (18))){
var inst_25364 = (state_25398[(7)]);
var inst_25373 = cljs.core.first.call(null,inst_25364);
var state_25398__$1 = state_25398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25398__$1,(20),out,inst_25373);
} else {
if((state_val_25399 === (8))){
var inst_25353 = (state_25398[(9)]);
var inst_25352 = (state_25398[(12)]);
var inst_25355 = (inst_25353 < inst_25352);
var inst_25356 = inst_25355;
var state_25398__$1 = state_25398;
if(cljs.core.truth_(inst_25356)){
var statearr_25432_25463 = state_25398__$1;
(statearr_25432_25463[(1)] = (10));

} else {
var statearr_25433_25464 = state_25398__$1;
(statearr_25433_25464[(1)] = (11));

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
});})(c__22927__auto__))
;
return ((function (switch__22813__auto__,c__22927__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22814__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22814__auto____0 = (function (){
var statearr_25437 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25437[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22814__auto__);

(statearr_25437[(1)] = (1));

return statearr_25437;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22814__auto____1 = (function (state_25398){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_25398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e25438){if((e25438 instanceof Object)){
var ex__22817__auto__ = e25438;
var statearr_25439_25465 = state_25398;
(statearr_25439_25465[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25466 = state_25398;
state_25398 = G__25466;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22814__auto__ = function(state_25398){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22814__auto____1.call(this,state_25398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22814__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22814__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto__))
})();
var state__22929__auto__ = (function (){var statearr_25440 = f__22928__auto__.call(null);
(statearr_25440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto__);

return statearr_25440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto__))
);

return c__22927__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25467 = [];
var len__21324__auto___25470 = arguments.length;
var i__21325__auto___25471 = (0);
while(true){
if((i__21325__auto___25471 < len__21324__auto___25470)){
args25467.push((arguments[i__21325__auto___25471]));

var G__25472 = (i__21325__auto___25471 + (1));
i__21325__auto___25471 = G__25472;
continue;
} else {
}
break;
}

var G__25469 = args25467.length;
switch (G__25469) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25467.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25474 = [];
var len__21324__auto___25477 = arguments.length;
var i__21325__auto___25478 = (0);
while(true){
if((i__21325__auto___25478 < len__21324__auto___25477)){
args25474.push((arguments[i__21325__auto___25478]));

var G__25479 = (i__21325__auto___25478 + (1));
i__21325__auto___25478 = G__25479;
continue;
} else {
}
break;
}

var G__25476 = args25474.length;
switch (G__25476) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25474.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25481 = [];
var len__21324__auto___25532 = arguments.length;
var i__21325__auto___25533 = (0);
while(true){
if((i__21325__auto___25533 < len__21324__auto___25532)){
args25481.push((arguments[i__21325__auto___25533]));

var G__25534 = (i__21325__auto___25533 + (1));
i__21325__auto___25533 = G__25534;
continue;
} else {
}
break;
}

var G__25483 = args25481.length;
switch (G__25483) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25481.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22927__auto___25536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___25536,out){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___25536,out){
return (function (state_25507){
var state_val_25508 = (state_25507[(1)]);
if((state_val_25508 === (7))){
var inst_25502 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
var statearr_25509_25537 = state_25507__$1;
(statearr_25509_25537[(2)] = inst_25502);

(statearr_25509_25537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (1))){
var inst_25484 = null;
var state_25507__$1 = (function (){var statearr_25510 = state_25507;
(statearr_25510[(7)] = inst_25484);

return statearr_25510;
})();
var statearr_25511_25538 = state_25507__$1;
(statearr_25511_25538[(2)] = null);

(statearr_25511_25538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (4))){
var inst_25487 = (state_25507[(8)]);
var inst_25487__$1 = (state_25507[(2)]);
var inst_25488 = (inst_25487__$1 == null);
var inst_25489 = cljs.core.not.call(null,inst_25488);
var state_25507__$1 = (function (){var statearr_25512 = state_25507;
(statearr_25512[(8)] = inst_25487__$1);

return statearr_25512;
})();
if(inst_25489){
var statearr_25513_25539 = state_25507__$1;
(statearr_25513_25539[(1)] = (5));

} else {
var statearr_25514_25540 = state_25507__$1;
(statearr_25514_25540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (6))){
var state_25507__$1 = state_25507;
var statearr_25515_25541 = state_25507__$1;
(statearr_25515_25541[(2)] = null);

(statearr_25515_25541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (3))){
var inst_25504 = (state_25507[(2)]);
var inst_25505 = cljs.core.async.close_BANG_.call(null,out);
var state_25507__$1 = (function (){var statearr_25516 = state_25507;
(statearr_25516[(9)] = inst_25504);

return statearr_25516;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25507__$1,inst_25505);
} else {
if((state_val_25508 === (2))){
var state_25507__$1 = state_25507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25507__$1,(4),ch);
} else {
if((state_val_25508 === (11))){
var inst_25487 = (state_25507[(8)]);
var inst_25496 = (state_25507[(2)]);
var inst_25484 = inst_25487;
var state_25507__$1 = (function (){var statearr_25517 = state_25507;
(statearr_25517[(7)] = inst_25484);

(statearr_25517[(10)] = inst_25496);

return statearr_25517;
})();
var statearr_25518_25542 = state_25507__$1;
(statearr_25518_25542[(2)] = null);

(statearr_25518_25542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (9))){
var inst_25487 = (state_25507[(8)]);
var state_25507__$1 = state_25507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25507__$1,(11),out,inst_25487);
} else {
if((state_val_25508 === (5))){
var inst_25484 = (state_25507[(7)]);
var inst_25487 = (state_25507[(8)]);
var inst_25491 = cljs.core._EQ_.call(null,inst_25487,inst_25484);
var state_25507__$1 = state_25507;
if(inst_25491){
var statearr_25520_25543 = state_25507__$1;
(statearr_25520_25543[(1)] = (8));

} else {
var statearr_25521_25544 = state_25507__$1;
(statearr_25521_25544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (10))){
var inst_25499 = (state_25507[(2)]);
var state_25507__$1 = state_25507;
var statearr_25522_25545 = state_25507__$1;
(statearr_25522_25545[(2)] = inst_25499);

(statearr_25522_25545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25508 === (8))){
var inst_25484 = (state_25507[(7)]);
var tmp25519 = inst_25484;
var inst_25484__$1 = tmp25519;
var state_25507__$1 = (function (){var statearr_25523 = state_25507;
(statearr_25523[(7)] = inst_25484__$1);

return statearr_25523;
})();
var statearr_25524_25546 = state_25507__$1;
(statearr_25524_25546[(2)] = null);

(statearr_25524_25546[(1)] = (2));


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
});})(c__22927__auto___25536,out))
;
return ((function (switch__22813__auto__,c__22927__auto___25536,out){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_25528 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25528[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_25528[(1)] = (1));

return statearr_25528;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_25507){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_25507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e25529){if((e25529 instanceof Object)){
var ex__22817__auto__ = e25529;
var statearr_25530_25547 = state_25507;
(statearr_25530_25547[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25548 = state_25507;
state_25507 = G__25548;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_25507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_25507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___25536,out))
})();
var state__22929__auto__ = (function (){var statearr_25531 = f__22928__auto__.call(null);
(statearr_25531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___25536);

return statearr_25531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___25536,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25549 = [];
var len__21324__auto___25619 = arguments.length;
var i__21325__auto___25620 = (0);
while(true){
if((i__21325__auto___25620 < len__21324__auto___25619)){
args25549.push((arguments[i__21325__auto___25620]));

var G__25621 = (i__21325__auto___25620 + (1));
i__21325__auto___25620 = G__25621;
continue;
} else {
}
break;
}

var G__25551 = args25549.length;
switch (G__25551) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25549.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22927__auto___25623 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___25623,out){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___25623,out){
return (function (state_25589){
var state_val_25590 = (state_25589[(1)]);
if((state_val_25590 === (7))){
var inst_25585 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
var statearr_25591_25624 = state_25589__$1;
(statearr_25591_25624[(2)] = inst_25585);

(statearr_25591_25624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (1))){
var inst_25552 = (new Array(n));
var inst_25553 = inst_25552;
var inst_25554 = (0);
var state_25589__$1 = (function (){var statearr_25592 = state_25589;
(statearr_25592[(7)] = inst_25554);

(statearr_25592[(8)] = inst_25553);

return statearr_25592;
})();
var statearr_25593_25625 = state_25589__$1;
(statearr_25593_25625[(2)] = null);

(statearr_25593_25625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (4))){
var inst_25557 = (state_25589[(9)]);
var inst_25557__$1 = (state_25589[(2)]);
var inst_25558 = (inst_25557__$1 == null);
var inst_25559 = cljs.core.not.call(null,inst_25558);
var state_25589__$1 = (function (){var statearr_25594 = state_25589;
(statearr_25594[(9)] = inst_25557__$1);

return statearr_25594;
})();
if(inst_25559){
var statearr_25595_25626 = state_25589__$1;
(statearr_25595_25626[(1)] = (5));

} else {
var statearr_25596_25627 = state_25589__$1;
(statearr_25596_25627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (15))){
var inst_25579 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
var statearr_25597_25628 = state_25589__$1;
(statearr_25597_25628[(2)] = inst_25579);

(statearr_25597_25628[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (13))){
var state_25589__$1 = state_25589;
var statearr_25598_25629 = state_25589__$1;
(statearr_25598_25629[(2)] = null);

(statearr_25598_25629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (6))){
var inst_25554 = (state_25589[(7)]);
var inst_25575 = (inst_25554 > (0));
var state_25589__$1 = state_25589;
if(cljs.core.truth_(inst_25575)){
var statearr_25599_25630 = state_25589__$1;
(statearr_25599_25630[(1)] = (12));

} else {
var statearr_25600_25631 = state_25589__$1;
(statearr_25600_25631[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (3))){
var inst_25587 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25589__$1,inst_25587);
} else {
if((state_val_25590 === (12))){
var inst_25553 = (state_25589[(8)]);
var inst_25577 = cljs.core.vec.call(null,inst_25553);
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25589__$1,(15),out,inst_25577);
} else {
if((state_val_25590 === (2))){
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25589__$1,(4),ch);
} else {
if((state_val_25590 === (11))){
var inst_25569 = (state_25589[(2)]);
var inst_25570 = (new Array(n));
var inst_25553 = inst_25570;
var inst_25554 = (0);
var state_25589__$1 = (function (){var statearr_25601 = state_25589;
(statearr_25601[(10)] = inst_25569);

(statearr_25601[(7)] = inst_25554);

(statearr_25601[(8)] = inst_25553);

return statearr_25601;
})();
var statearr_25602_25632 = state_25589__$1;
(statearr_25602_25632[(2)] = null);

(statearr_25602_25632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (9))){
var inst_25553 = (state_25589[(8)]);
var inst_25567 = cljs.core.vec.call(null,inst_25553);
var state_25589__$1 = state_25589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25589__$1,(11),out,inst_25567);
} else {
if((state_val_25590 === (5))){
var inst_25562 = (state_25589[(11)]);
var inst_25557 = (state_25589[(9)]);
var inst_25554 = (state_25589[(7)]);
var inst_25553 = (state_25589[(8)]);
var inst_25561 = (inst_25553[inst_25554] = inst_25557);
var inst_25562__$1 = (inst_25554 + (1));
var inst_25563 = (inst_25562__$1 < n);
var state_25589__$1 = (function (){var statearr_25603 = state_25589;
(statearr_25603[(11)] = inst_25562__$1);

(statearr_25603[(12)] = inst_25561);

return statearr_25603;
})();
if(cljs.core.truth_(inst_25563)){
var statearr_25604_25633 = state_25589__$1;
(statearr_25604_25633[(1)] = (8));

} else {
var statearr_25605_25634 = state_25589__$1;
(statearr_25605_25634[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (14))){
var inst_25582 = (state_25589[(2)]);
var inst_25583 = cljs.core.async.close_BANG_.call(null,out);
var state_25589__$1 = (function (){var statearr_25607 = state_25589;
(statearr_25607[(13)] = inst_25582);

return statearr_25607;
})();
var statearr_25608_25635 = state_25589__$1;
(statearr_25608_25635[(2)] = inst_25583);

(statearr_25608_25635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (10))){
var inst_25573 = (state_25589[(2)]);
var state_25589__$1 = state_25589;
var statearr_25609_25636 = state_25589__$1;
(statearr_25609_25636[(2)] = inst_25573);

(statearr_25609_25636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25590 === (8))){
var inst_25562 = (state_25589[(11)]);
var inst_25553 = (state_25589[(8)]);
var tmp25606 = inst_25553;
var inst_25553__$1 = tmp25606;
var inst_25554 = inst_25562;
var state_25589__$1 = (function (){var statearr_25610 = state_25589;
(statearr_25610[(7)] = inst_25554);

(statearr_25610[(8)] = inst_25553__$1);

return statearr_25610;
})();
var statearr_25611_25637 = state_25589__$1;
(statearr_25611_25637[(2)] = null);

(statearr_25611_25637[(1)] = (2));


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
});})(c__22927__auto___25623,out))
;
return ((function (switch__22813__auto__,c__22927__auto___25623,out){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_25615 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25615[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_25615[(1)] = (1));

return statearr_25615;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_25589){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_25589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e25616){if((e25616 instanceof Object)){
var ex__22817__auto__ = e25616;
var statearr_25617_25638 = state_25589;
(statearr_25617_25638[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25616;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25639 = state_25589;
state_25589 = G__25639;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_25589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_25589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___25623,out))
})();
var state__22929__auto__ = (function (){var statearr_25618 = f__22928__auto__.call(null);
(statearr_25618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___25623);

return statearr_25618;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___25623,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25640 = [];
var len__21324__auto___25714 = arguments.length;
var i__21325__auto___25715 = (0);
while(true){
if((i__21325__auto___25715 < len__21324__auto___25714)){
args25640.push((arguments[i__21325__auto___25715]));

var G__25716 = (i__21325__auto___25715 + (1));
i__21325__auto___25715 = G__25716;
continue;
} else {
}
break;
}

var G__25642 = args25640.length;
switch (G__25642) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25640.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22927__auto___25718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22927__auto___25718,out){
return (function (){
var f__22928__auto__ = (function (){var switch__22813__auto__ = ((function (c__22927__auto___25718,out){
return (function (state_25684){
var state_val_25685 = (state_25684[(1)]);
if((state_val_25685 === (7))){
var inst_25680 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25686_25719 = state_25684__$1;
(statearr_25686_25719[(2)] = inst_25680);

(statearr_25686_25719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (1))){
var inst_25643 = [];
var inst_25644 = inst_25643;
var inst_25645 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25684__$1 = (function (){var statearr_25687 = state_25684;
(statearr_25687[(7)] = inst_25644);

(statearr_25687[(8)] = inst_25645);

return statearr_25687;
})();
var statearr_25688_25720 = state_25684__$1;
(statearr_25688_25720[(2)] = null);

(statearr_25688_25720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (4))){
var inst_25648 = (state_25684[(9)]);
var inst_25648__$1 = (state_25684[(2)]);
var inst_25649 = (inst_25648__$1 == null);
var inst_25650 = cljs.core.not.call(null,inst_25649);
var state_25684__$1 = (function (){var statearr_25689 = state_25684;
(statearr_25689[(9)] = inst_25648__$1);

return statearr_25689;
})();
if(inst_25650){
var statearr_25690_25721 = state_25684__$1;
(statearr_25690_25721[(1)] = (5));

} else {
var statearr_25691_25722 = state_25684__$1;
(statearr_25691_25722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (15))){
var inst_25674 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25692_25723 = state_25684__$1;
(statearr_25692_25723[(2)] = inst_25674);

(statearr_25692_25723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (13))){
var state_25684__$1 = state_25684;
var statearr_25693_25724 = state_25684__$1;
(statearr_25693_25724[(2)] = null);

(statearr_25693_25724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (6))){
var inst_25644 = (state_25684[(7)]);
var inst_25669 = inst_25644.length;
var inst_25670 = (inst_25669 > (0));
var state_25684__$1 = state_25684;
if(cljs.core.truth_(inst_25670)){
var statearr_25694_25725 = state_25684__$1;
(statearr_25694_25725[(1)] = (12));

} else {
var statearr_25695_25726 = state_25684__$1;
(statearr_25695_25726[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (3))){
var inst_25682 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25684__$1,inst_25682);
} else {
if((state_val_25685 === (12))){
var inst_25644 = (state_25684[(7)]);
var inst_25672 = cljs.core.vec.call(null,inst_25644);
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25684__$1,(15),out,inst_25672);
} else {
if((state_val_25685 === (2))){
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25684__$1,(4),ch);
} else {
if((state_val_25685 === (11))){
var inst_25648 = (state_25684[(9)]);
var inst_25652 = (state_25684[(10)]);
var inst_25662 = (state_25684[(2)]);
var inst_25663 = [];
var inst_25664 = inst_25663.push(inst_25648);
var inst_25644 = inst_25663;
var inst_25645 = inst_25652;
var state_25684__$1 = (function (){var statearr_25696 = state_25684;
(statearr_25696[(11)] = inst_25662);

(statearr_25696[(7)] = inst_25644);

(statearr_25696[(12)] = inst_25664);

(statearr_25696[(8)] = inst_25645);

return statearr_25696;
})();
var statearr_25697_25727 = state_25684__$1;
(statearr_25697_25727[(2)] = null);

(statearr_25697_25727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (9))){
var inst_25644 = (state_25684[(7)]);
var inst_25660 = cljs.core.vec.call(null,inst_25644);
var state_25684__$1 = state_25684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25684__$1,(11),out,inst_25660);
} else {
if((state_val_25685 === (5))){
var inst_25648 = (state_25684[(9)]);
var inst_25652 = (state_25684[(10)]);
var inst_25645 = (state_25684[(8)]);
var inst_25652__$1 = f.call(null,inst_25648);
var inst_25653 = cljs.core._EQ_.call(null,inst_25652__$1,inst_25645);
var inst_25654 = cljs.core.keyword_identical_QMARK_.call(null,inst_25645,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25655 = (inst_25653) || (inst_25654);
var state_25684__$1 = (function (){var statearr_25698 = state_25684;
(statearr_25698[(10)] = inst_25652__$1);

return statearr_25698;
})();
if(cljs.core.truth_(inst_25655)){
var statearr_25699_25728 = state_25684__$1;
(statearr_25699_25728[(1)] = (8));

} else {
var statearr_25700_25729 = state_25684__$1;
(statearr_25700_25729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (14))){
var inst_25677 = (state_25684[(2)]);
var inst_25678 = cljs.core.async.close_BANG_.call(null,out);
var state_25684__$1 = (function (){var statearr_25702 = state_25684;
(statearr_25702[(13)] = inst_25677);

return statearr_25702;
})();
var statearr_25703_25730 = state_25684__$1;
(statearr_25703_25730[(2)] = inst_25678);

(statearr_25703_25730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (10))){
var inst_25667 = (state_25684[(2)]);
var state_25684__$1 = state_25684;
var statearr_25704_25731 = state_25684__$1;
(statearr_25704_25731[(2)] = inst_25667);

(statearr_25704_25731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25685 === (8))){
var inst_25644 = (state_25684[(7)]);
var inst_25648 = (state_25684[(9)]);
var inst_25652 = (state_25684[(10)]);
var inst_25657 = inst_25644.push(inst_25648);
var tmp25701 = inst_25644;
var inst_25644__$1 = tmp25701;
var inst_25645 = inst_25652;
var state_25684__$1 = (function (){var statearr_25705 = state_25684;
(statearr_25705[(7)] = inst_25644__$1);

(statearr_25705[(14)] = inst_25657);

(statearr_25705[(8)] = inst_25645);

return statearr_25705;
})();
var statearr_25706_25732 = state_25684__$1;
(statearr_25706_25732[(2)] = null);

(statearr_25706_25732[(1)] = (2));


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
});})(c__22927__auto___25718,out))
;
return ((function (switch__22813__auto__,c__22927__auto___25718,out){
return (function() {
var cljs$core$async$state_machine__22814__auto__ = null;
var cljs$core$async$state_machine__22814__auto____0 = (function (){
var statearr_25710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25710[(0)] = cljs$core$async$state_machine__22814__auto__);

(statearr_25710[(1)] = (1));

return statearr_25710;
});
var cljs$core$async$state_machine__22814__auto____1 = (function (state_25684){
while(true){
var ret_value__22815__auto__ = (function (){try{while(true){
var result__22816__auto__ = switch__22813__auto__.call(null,state_25684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22816__auto__;
}
break;
}
}catch (e25711){if((e25711 instanceof Object)){
var ex__22817__auto__ = e25711;
var statearr_25712_25733 = state_25684;
(statearr_25712_25733[(5)] = ex__22817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25734 = state_25684;
state_25684 = G__25734;
continue;
} else {
return ret_value__22815__auto__;
}
break;
}
});
cljs$core$async$state_machine__22814__auto__ = function(state_25684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22814__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22814__auto____1.call(this,state_25684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22814__auto____0;
cljs$core$async$state_machine__22814__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22814__auto____1;
return cljs$core$async$state_machine__22814__auto__;
})()
;})(switch__22813__auto__,c__22927__auto___25718,out))
})();
var state__22929__auto__ = (function (){var statearr_25713 = f__22928__auto__.call(null);
(statearr_25713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22927__auto___25718);

return statearr_25713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22929__auto__);
});})(c__22927__auto___25718,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map