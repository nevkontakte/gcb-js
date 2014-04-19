
(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>";c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
(function(window,undefined){var
readyList,rootjQuery,core_strundefined=typeof undefined,location=window.location,document=window.document,docElem=document.documentElement,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="1.10.2",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();},completed=function(event){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}},detach=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}};jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem;if(!selector){return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",length:0,toArray:function(){return core_slice.call(this);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.ready.promise().done(fn);return this;},slice:function(){return this.pushStack(core_slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj);},type:function(obj){if(obj==null){return String(obj);}
return typeof obj==="object"||typeof obj==="function"?class2type[core_toString.call(obj)]||"object":typeof obj;},isPlainObject:function(obj){var key;if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
if(jQuery.support.ownLast){for(key in obj){return core_hasOwn.call(obj,key);}}
for(key in obj){}
return key===undefined||core_hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},error:function(msg){throw new Error(msg);},parseHTML:function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);},parseJSON:function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(data===null){return data;}
if(typeof data==="string"){data=jQuery.trim(data);if(data){if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return(new Function("return "+data))();}}}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;},trim:core_trim&&!core_trim.call("\uFEFF\xA0")?function(text){return text==null?"":core_trim.call(text);}:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{core_push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}
return core_concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(core_slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},access:function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function(){return(new Date()).getTime();},swap:function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
detach();jQuery.ready();}})();}}}
return readyList.promise(obj);};jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||type!=="function"&&(length===0||typeof length==="number"&&length>0&&(length-1)in obj);}
rootjQuery=jQuery(document);(function(window,undefined){var i,support,cachedruns,Expr,getText,isXML,compile,outermostContext,sortInput,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+-(new Date()),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),hasDuplicate=false,sortOrder=function(a,b){if(a===b){hasDuplicate=true;return 0;}
return 0;},strundefined=typeof undefined,MAX_NEGATIVE=1<<31,hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+"*(?:([*^$|!~]?=)"+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rsibling=new RegExp(whitespace+"*[+~]"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);};try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results;}
if((nodeType=context.nodeType)!==1&&nodeType!==9){return[];}
if(documentIsHTML&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&(!rbuggyQSA||!rbuggyQSA.test(selector))){nid=old=expando;newContext=context;newSelector=nodeType===9&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+=" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return!!fn(div);}catch(e){return false;}finally{if(div.parentNode){div.parentNode.removeChild(div);}
div=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=attrs.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};support=Sizzle.support={};setDocument=Sizzle.setDocument=function(node){var doc=node?node.ownerDocument||node:preferredDoc,parent=doc.defaultView;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=doc.documentElement;documentIsHTML=!isXML(doc);if(parent&&parent.attachEvent&&parent!==parent.top){parent.attachEvent("onbeforeunload",function(){setDocument();});}
support.attributes=assert(function(div){div.className="i";return!div.getAttribute("className");});support.getElementsByTagName=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;});support.getElementsByClassName=assert(function(div){div.innerHTML="<div class='a'></div><div class='a i'></div>";div.firstChild.className="i";return div.getElementsByClassName("i").length===2;});support.getById=assert(function(div){docElem.appendChild(div).id=expando;return!doc.getElementsByName||!doc.getElementsByName(expando).length;});if(support.getById){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&documentIsHTML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{delete Expr.find["ID"];Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(doc.querySelectorAll))){assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){var input=doc.createElement("input");input.setAttribute("type","hidden");div.appendChild(input).setAttribute("t","");if(div.querySelectorAll("[t^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));contains=rnative.test(docElem.contains)||docElem.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=docElem.compareDocumentPosition?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b);if(compare){if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===doc||contains(preferredDoc,a)){return-1;}
if(b===doc||contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}
return compare&4?-1:1;}
return a.compareDocumentPosition?-1:1;}:function(a,b){var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(a===b){hasDuplicate=true;return 0;}else if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:sortInput?(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return doc;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val===undefined?support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null:val;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){for(;(node=elem[i]);i++){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]&&match[4]!==undefined){match[2]=match[4];}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!==strundefined&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.nodeType===4){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===elem.type);},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push(tokens=[]);}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);}
function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var data,cache,outerCache,dirkey=dirruns+" "+doneName;if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true||data===cachedruns){return data===true;}}else{cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,context,xml)||cachedruns;if(cache[1]===true){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1);if(outermost){outermostContext=context!==document&&context;cachedruns=matcherCachedRuns;}
for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;cachedruns=++matcherCachedRuns;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!group){group=tokenize(selector);}
i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));}
return cached;};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&support.getById&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&context.parentNode||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}}
compile(selector,match)(seed,context,!documentIsHTML,results,rsibling.test(selector));return results;}
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=hasDuplicate;setDocument();support.sortDetached=assert(function(div1){return div1.compareDocumentPosition(document.createElement("div"))&1;});if(!assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(div){div.innerHTML="<input/>";div.firstChild.setAttribute("value","");return div.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(div){return div.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return(val=elem.getAttributeNode(name))&&val.specified?val.value:elem[name]===true?name.toLowerCase():null;}});}
jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})(window);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);},empty:function(){list=[];firingLength=0;return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){if(list&&(!fired||stack)){args=args||[];args=[context,args.slice?args.slice():args];if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);}else{newDefer[action+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise().done(updateFunc(i,resolveContexts,resolveValues)).fail(deferred.reject).progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});jQuery.support=(function(support){var all,a,input,select,fragment,opt,eventName,isSupported,i,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*")||[];a=div.getElementsByTagName("a")[0];if(!a||!a.style||!all.length){return support;}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support.getSetAttribute=div.className!=="t";support.leadingWhitespace=div.firstChild.nodeType===3;support.tbody=!div.getElementsByTagName("tbody").length;support.htmlSerialize=!!div.getElementsByTagName("link").length;support.style=/top/.test(a.getAttribute("style"));support.hrefNormalized=a.getAttribute("href")==="/a";support.opacity=/^0.5/.test(a.style.opacity);support.cssFloat=!!a.style.cssFloat;support.checkOn=!!input.value;support.optSelected=opt.selected;support.enctype=!!document.createElement("form").enctype;support.html5Clone=document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";support.inlineBlockNeedsLayout=false;support.shrinkWrapBlocks=false;support.pixelPosition=false;support.deleteExpando=true;support.noCloneEvent=true;support.reliableMarginRight=true;support.boxSizingReliable=true;input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","t");input.setAttribute("name","t");fragment=document.createDocumentFragment();fragment.appendChild(input);support.appendChecked=input.checked;support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();}
for(i in{submit:true,change:true,focusin:true}){div.setAttribute(eventName="on"+i,"t");support[i+"Bubbles"]=eventName in window||div.attributes[eventName].expando===false;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";for(i in jQuery(support)){break;}
support.ownLast=i!=="0";jQuery(function(){var container,marginDiv,tds,divReset="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",body=document.getElementsByTagName("body")[0];if(!body){return;}
container=document.createElement("div");container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";body.appendChild(container).appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";jQuery.swap(body,body.style.zoom!=null?{zoom:1}:{},function(){support.boxSizing=div.offsetWidth===4;});if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight);}
if(typeof div.style.zoom!==core_strundefined){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=(div.offsetWidth===3);div.style.display="block";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=(div.offsetWidth!==3);if(support.inlineBlockNeedsLayout){body.style.zoom=1;}}
body.removeChild(container);container=div=tds=marginDiv=null;});all=select=fragment=opt=a=input=null;return support;})({});var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var ret,thisCache,internalKey=jQuery.expando,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&data===undefined&&typeof name==="string"){return;}
if(!id){if(isNode){id=elem[internalKey]=core_deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]=isNode?{}:{toJSON:jQuery.noop};}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(typeof name==="string"){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,i,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
i=name.length;while(i--){delete thisCache[name[i]];}
if(pvt?!isEmptyDataObject(thisCache):!jQuery.isEmptyObject(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}}
jQuery.extend({cache:{},noData:{"applet":true,"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);},acceptData:function(elem){if(elem.nodeType&&elem.nodeType!==1&&elem.nodeType!==9){return false;}
var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData;}});jQuery.fn.extend({data:function(key,value){var attrs,name,data=null,i=0,elem=this[0];if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=attrs[i].name;if(name.indexOf("data-")===0){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
return arguments.length>1?this.each(function(){jQuery.data(this,key,value);}):elem?dataAttr(elem,key,jQuery.data(elem,key)):null;},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var nodeHook,boolHook,rclass=/[\t\r\n\f]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,getSetInput=jQuery.support.input;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
elem.className=jQuery.trim(cur);}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
elem.className=value?jQuery.trim(cur):"";}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value;if(typeof stateVal==="boolean"&&type==="string"){return stateVal?this.addClass(value):this.removeClass(value);}
if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),classNames=value.match(core_rnotwhite)||[];while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(type===core_strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;},val:function(value){var ret,hooks,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:elem.text;}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if((option.selected=jQuery.inArray(jQuery(option).val(),values)>=0)){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}},attr:function(elem,name,value){var hooks,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute===core_strundefined){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(jQuery.expr.match.bool.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(jQuery.expr.match.bool.test(name)){if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem[propName]=false;}else{elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function(elem,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){return hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined?ret:(elem[name]=value);}else{return hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null?ret:elem[name];}},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");return tabindex?parseInt(tabindex,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:-1;}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=jQuery.expr.attrHandle[name]||jQuery.find.attr;jQuery.expr.attrHandle[name]=getSetInput&&getSetAttribute||!ruseDefault.test(name)?function(elem,name,isXML){var fn=jQuery.expr.attrHandle[name],ret=isXML?undefined:(jQuery.expr.attrHandle[name]=undefined)!=getter(elem,name,isXML)?name.toLowerCase():null;jQuery.expr.attrHandle[name]=fn;return ret;}:function(elem,name,isXML){return isXML?undefined:elem[jQuery.camelCase("default-"+name)]?name.toLowerCase():null;};});if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
if(!getSetAttribute){nodeHook={set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
ret.value=value+="";return name==="value"||value===elem.getAttribute(name)?value:undefined;}};jQuery.expr.attrHandle.id=jQuery.expr.attrHandle.name=jQuery.expr.attrHandle.coords=function(elem,name,isXML){var ret;return isXML?undefined:(ret=elem.getAttributeNode(name))&&ret.value!==""?ret.value:null;};jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);return ret&&ret.specified?ret.value:undefined;},set:nodeHook.set};jQuery.attrHooks.contenteditable={set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]={set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}};});}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}};if(!jQuery.support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=core_hasOwn.call(event,"type")?event.type:event,namespaces=core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault();}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;try{elem[type]();}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=core_slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}},_default:function(event){return jQuery.nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===core_strundefined){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});var isSimple=/^.[^:#\[\.,]*$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,ret=[],self=this,len=self.length;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=this.selector?this.selector+" "+selector:selector;return ret;},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(pos?pos.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){cur=ret.push(cur);break;}}}
return this.pushStack(ret.length>1?jQuery.unique(ret):ret);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(jQuery.unique(all));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
if(this.length>1){if(!guaranteedUnique[name]){ret=jQuery.unique(ret);}
if(rparentsprev.test(name)){ret=ret.reverse();}}
return this.pushStack(ret);};});jQuery.extend({filter:function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
return elems.length===1&&elem.nodeType===1?jQuery.find.matchesSelector(elem,expr)?[elem]:[]:jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,not){if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier==="string"){if(isSimple.test(qualifier)){return jQuery.filter(qualifier,elements,not);}
qualifier=jQuery.filter(qualifier,elements);}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)!==not;});}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:jQuery.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},append:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData){var elem,elems=selector?jQuery.filter(selector,this):this,i=0;for(;(elem=elems[i])!=null;i++){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var
args=jQuery.map(this,function(elem){return[elem.nextSibling,elem.parentNode];}),i=0;this.domManip(arguments,function(elem){var next=args[i++],parent=args[i++];if(parent){if(next&&next.parentNode!==parent){next=this.nextSibling;}
jQuery(this).remove();parent.insertBefore(elem,next);}},true);return i?this:this.remove();},detach:function(selector){return this.remove(selector,true);},domManip:function(args,callback,allowIntersection){args=core_concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||!(l<=1||typeof value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,self.html());}
self.domManip(args,callback,allowIntersection);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,!allowIntersection&&this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){jQuery._evalUrl(node.src);}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
fragment=first=null;}}
return this;}});function manipulationTarget(elem,content){return jQuery.nodeName(elem,"table")&&jQuery.nodeName(content.nodeType===1?content:content.firstChild,"tr")?elem.getElementsByTagName("tbody")[0]||elem.appendChild(elem.ownerDocument.createElement("tbody")):elem;}
function disableScript(elem){elem.type=(jQuery.find.attr(elem,"type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
nodeName=dest.nodeName.toLowerCase();if(!jQuery.support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
dest.removeAttribute(jQuery.expando);}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&manipulation_rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);core_push.apply(ret,elems.get());}
return this.pushStack(ret);};});function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==core_strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==core_strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
function fixDefaultChecked(elem){if(manipulation_rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
destElements=srcElements=node=null;return clone;},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
if(!jQuery.support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
tmp=safe.lastChild;}}}
if(tmp){safe.removeChild(tmp);}
if(!jQuery.support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
tmp=null;return safe;},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute!==core_strundefined){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
core_deletedIds.push(id);}}}}},_evalUrl:function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",async:false,global:false,"throws":true});}});jQuery.fn.extend({wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();}});var iframe,getStyles,curCSS,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName));}}else{if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){var len,styles,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!jQuery.support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;}});if(window.getComputedStyle){getStyles=function(elem){return window.getComputedStyle(elem,null);};curCSS=function(elem,name,_computed){var width,minWidth,maxWidth,computed=_computed||getStyles(elem),ret=computed?computed.getPropertyValue(name)||computed[name]:undefined,style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret;};}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,_computed){var left,rs,rsLeft,computed=_computed||getStyles(elem),ret=computed?computed[name]:undefined,style=elem.style;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
return ret===""?"auto":ret;};}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function css_defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype html><html><body>");doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.remove();return display;}
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}};}
if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}}};});}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;}).filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!manipulation_rcheckableType.test(type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});var
ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?"80":"443"))!==(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443"))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+ajax_nonce++):cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+"_="+ajax_nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(ajax_nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});var xhrCallbacks,xhrSupported,xhrId=0,xhrOnUnloadAbort=window.ActiveXObject&&function(){var key;for(key in xhrCallbacks){xhrCallbacks[key](undefined,true);}};function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;xhrSupported=jQuery.ajaxSettings.xhr();jQuery.support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=jQuery.support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(err){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,responseHeaders,statusText,responses;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async){callback();}else if(xhr.readyState===4){setTimeout(callback);}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var tween=this.createTween(prop,value),target=tween.cur(),parts=rfxnum.exec(value),unit=parts&&parts[3]||(jQuery.cssNumber[prop]?"":"px"),start=(jQuery.cssNumber[prop]||unit!=="px"&&+target)&&rfxnum.exec(jQuery.css(tween.elem,prop)),scale=1,maxIterations=20;if(start&&start[3]!==unit){unit=unit||start[3];parts=parts||[];start=+target||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
if(parts){start=tween.start=+start||+target||0;tween.unit=unit;tween.end=parts[1]?start+(parts[1]+1)*parts[2]:+parts[2];}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function createTween(value,prop,animation){var tween,collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
jQuery.map(props,createTween,animation);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});function defaultPrefilter(elem,props,opts){var prop,value,toggle,tween,hooks,oldfire,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHidden(elem),dataShow=jQuery._data(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(prop in props){value=props[prop];if(rfxtypes.exec(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue;}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
if(!jQuery.isEmptyObject(orig)){if(dataShow){if("hidden"in dataShow){hidden=dataShow.hidden;}}else{dataShow=jQuery._data(elem,"fxshow",{});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(prop in orig){tween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}}
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show().end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.start();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!==core_strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};};jQuery.offset={setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return;}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||docElem;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||docElem;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});jQuery.fn.size=function(){return this.length;};jQuery.fn.andSelf=jQuery.fn.addBack;if(typeof module==="object"&&module&&typeof module.exports==="object"){module.exports=jQuery;}else{window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}}})(window);
(function(undefined){var __m5=(function(){var can=window.can||{};if(typeof GLOBALCAN==='undefined'||GLOBALCAN!==false){window.can=can;}
can.isDeferred=function(obj){var isFunction=this.isFunction;return obj&&isFunction(obj.then)&&isFunction(obj.pipe);};var cid=0;can.cid=function(object,name){if(object._cid){return object._cid}else{return object._cid=(name||"")+(++cid)}}
can.VERSION='@EDGE';return can;})();var __m6=(function(can){can.each=function(elements,callback,context){var i=0,key;if(elements){if(typeof elements.length==='number'&&elements.pop){if(elements.attr){elements.attr('length');}
for(key=elements.length;i<key;i++){if(callback.call(context||elements[i],elements[i],i,elements)===false){break;}}}else if(elements.hasOwnProperty){for(key in elements){if(elements.hasOwnProperty(key)){if(callback.call(context||elements[key],elements[key],key,elements)===false){break;}}}}}
return elements;};return can;})(__m5);var __m3=(function($,can){$.extend(can,$,{trigger:function(obj,event,args){if(obj.trigger){obj.trigger(event,args);}else{$.event.trigger(event,args,obj,true);}},addEvent:function(ev,cb){$([this]).bind(ev,cb);return this;},removeEvent:function(ev,cb){$([this]).unbind(ev,cb);return this;},buildFragment:function(elems,context){var oldFragment=$.buildFragment,ret;elems=[elems];context=context||document;context=!context.nodeType&&context[0]||context;context=context.ownerDocument||context;ret=oldFragment.call(jQuery,elems,context);return ret.cacheable?$.clone(ret.fragment):ret.fragment||ret;},$:$,each:can.each});$.each(['bind','unbind','undelegate','delegate'],function(i,func){can[func]=function(){var t=this[func]?this:$([this]);t[func].apply(t,arguments);return this;};});$.each(["append","filter","addClass","remove","data","get"],function(i,name){can[name]=function(wrapped){return wrapped[name].apply(wrapped,can.makeArray(arguments).slice(1));};});var oldClean=$.cleanData;$.cleanData=function(elems){$.each(elems,function(i,elem){if(elem){can.trigger(elem,"destroyed",[],false);}});oldClean(elems);};return can;})(jQuery,__m5,__m6);var __m2=(function(can){var strUndHash=/_|-/,strColons=/\=\=/,strWords=/([A-Z]+)([A-Z][a-z])/g,strLowUp=/([a-z\d])([A-Z])/g,strDash=/([a-z\d])([A-Z])/g,strReplacer=/\{([^\}]+)\}/g,strQuote=/"/g,strSingleQuote=/'/g,getNext=function(obj,prop,add){var result=obj[prop];if(result===undefined&&add===true){result=obj[prop]={}}
return result},isContainer=function(current){return(/^f|^o/).test(typeof current);};can.extend(can,{esc:function(content){var isInvalid=content===null||content===undefined||(isNaN(content)&&(""+content==='NaN'));return(""+(isInvalid?'':content)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(strQuote,'&#34;').replace(strSingleQuote,"&#39;");},getObject:function(name,roots,add){var parts=name?name.split('.'):[],length=parts.length,current,r=0,i,container,rootsLength;roots=can.isArray(roots)?roots:[roots||window];rootsLength=roots.length
if(!length){return roots[0];}
for(r;r<rootsLength;r++){current=roots[r];container=undefined;for(i=0;i<length&&isContainer(current);i++){container=current;current=getNext(container,parts[i]);}
if(container!==undefined&&current!==undefined){break}}
if(add===false&&current!==undefined){delete container[parts[i-1]]}
if(add===true&&current===undefined){current=roots[0]
for(i=0;i<length&&isContainer(current);i++){current=getNext(current,parts[i],true);}}
return current;},capitalize:function(s,cache){return s.charAt(0).toUpperCase()+s.slice(1);},underscore:function(s){return s.replace(strColons,'/').replace(strWords,'$1_$2').replace(strLowUp,'$1_$2').replace(strDash,'_').toLowerCase();},sub:function(str,data,remove){var obs=[];str=str||'';obs.push(str.replace(strReplacer,function(whole,inside){var ob=can.getObject(inside,data,remove===true?false:undefined);if(ob===undefined){obs=null;return"";}
if(isContainer(ob)&&obs){obs.push(ob);return"";}
return""+ob;}));return obs===null?obs:(obs.length<=1?obs[0]:obs);},replacer:strReplacer,undHash:strUndHash});return can;})(__m3);var __m1=(function(can){var initializing=0;can.Construct=function(){if(arguments.length){return can.Construct.extend.apply(can.Construct,arguments);}};can.extend(can.Construct,{newInstance:function(){var inst=this.instance(),arg=arguments,args;if(inst.setup){args=inst.setup.apply(inst,arguments);}
if(inst.init){inst.init.apply(inst,args||arguments);}
return inst;},_inherit:function(newProps,oldProps,addTo){can.extend(addTo||newProps,newProps||{})},_overwrite:function(what,oldProps,propName,val){what[propName]=val;},setup:function(base,fullName){this.defaults=can.extend(true,{},base.defaults,this.defaults);},instance:function(){initializing=1;var inst=new this();initializing=0;return inst;},extend:function(fullName,klass,proto){if(typeof fullName!='string'){proto=klass;klass=fullName;fullName=null;}
if(!proto){proto=klass;klass=null;}
proto=proto||{};var _super_class=this,_super=this.prototype,name,shortName,namespace,prototype;prototype=this.instance();can.Construct._inherit(proto,_super,prototype);function Constructor(){if(!initializing){return this.constructor!==Constructor&&arguments.length?arguments.callee.extend.apply(arguments.callee,arguments):this.constructor.newInstance.apply(this.constructor,arguments);}}
for(name in _super_class){if(_super_class.hasOwnProperty(name)){Constructor[name]=_super_class[name];}}
can.Construct._inherit(klass,_super_class,Constructor);if(fullName){var parts=fullName.split('.'),shortName=parts.pop(),current=can.getObject(parts.join('.'),window,true),namespace=current,_fullName=can.underscore(fullName.replace(/\./g,"_")),_shortName=can.underscore(shortName);current[shortName]=Constructor;}
can.extend(Constructor,{constructor:Constructor,prototype:prototype,namespace:namespace,_shortName:_shortName,fullName:fullName,_fullName:_fullName});if(shortName!==undefined){Constructor.shortName=shortName;}
Constructor.prototype.constructor=Constructor;var t=[_super_class].concat(can.makeArray(arguments)),args=Constructor.setup.apply(Constructor,t);if(Constructor.init){Constructor.init.apply(Constructor,args||t);}
return Constructor;}});return can.Construct;})(__m2);var __m8=(function(can){can.bindAndSetup=function(){can.addEvent.apply(this,arguments);if(!this._init){if(!this._bindings){this._bindings=1;this._bindsetup&&this._bindsetup();}else{this._bindings++;}}
return this;};can.unbindAndTeardown=function(ev,handler){can.removeEvent.apply(this,arguments);this._bindings--;if(!this._bindings){this._bindteardown&&this._bindteardown();}
return this;}
return can;})(__m3);var __m7=(function(can,bind){var canMakeObserve=function(obj){return obj&&!can.isDeferred(obj)&&(can.isArray(obj)||can.isPlainObject(obj)||(obj instanceof can.Observe));},unhookup=function(items,namespace){return can.each(items,function(item){if(item&&item.unbind){item.unbind("change"+namespace);}});},hookupBubble=function(child,prop,parent,Ob,List){Ob=Ob||Observe;List=List||Observe.List;if(child instanceof Observe){parent._bindings&&unhookup([child],parent._cid);}else if(can.isArray(child)){child=new List(child);}else{child=new Ob(child);}
if(parent._bindings){bindToChildAndBubbleToParent(child,prop,parent)}
return child;},bindToChildAndBubbleToParent=function(child,prop,parent){child.bind("change"+parent._cid,function(){var args=can.makeArray(arguments),ev=args.shift();args[0]=(prop==="*"?[parent.indexOf(child),args[0]]:[prop,args[0]]).join(".");ev.triggeredNS=ev.triggeredNS||{};if(ev.triggeredNS[parent._cid]){return;}
ev.triggeredNS[parent._cid]=true;can.trigger(parent,ev,args);});}
observeId=0,serialize=function(observe,how,where){observe.each(function(val,name){where[name]=canMakeObserve(val)&&can.isFunction(val[how])?val[how]():val;});return where;},attrParts=function(attr,keepKey){if(keepKey){return[attr];}
return can.isArray(attr)?attr:(""+attr).split(".");},batchNum=1,transactions=0,batchEvents=[],stopCallbacks=[],makeBindSetup=function(wildcard){return function(){var parent=this;this._each(function(child,prop){if(child&&child.bind){bindToChildAndBubbleToParent(child,wildcard||prop,parent)}})};};var Observe=can.Map=can.Observe=can.Construct({bind:can.bindAndSetup,unbind:can.unbindAndTeardown,id:"id",canMakeObserve:canMakeObserve,startBatch:function(batchStopHandler){transactions++;batchStopHandler&&stopCallbacks.push(batchStopHandler);},stopBatch:function(force,callStart){if(force){transactions=0;}else{transactions--;}
if(transactions==0){var items=batchEvents.slice(0),callbacks=stopCallbacks.slice(0);batchEvents=[];stopCallbacks=[];batchNum++;callStart&&this.startBatch();can.each(items,function(args){can.trigger.apply(can,args);});can.each(callbacks,function(cb){cb();});}},triggerBatch:function(item,event,args){if(!item._init){if(transactions==0){return can.trigger(item,event,args);}else{event=typeof event==="string"?{type:event}:event;event.batchNum=batchNum;batchEvents.push([item,event,args]);}}},keys:function(observe){var keys=[];Observe.__reading&&Observe.__reading(observe,'__keys');for(var keyName in observe._data){keys.push(keyName);}
return keys;}},{setup:function(obj){this._data={};can.cid(this,".observe");this._init=1;this.attr(obj);this.bind('change'+this._cid,can.proxy(this._changes,this));delete this._init;},_bindsetup:makeBindSetup(),_bindteardown:function(){var cid=this._cid;this._each(function(child){unhookup([child],cid)})},_changes:function(ev,attr,how,newVal,oldVal){Observe.triggerBatch(this,{type:attr,batchNum:ev.batchNum},[newVal,oldVal]);},_triggerChange:function(attr,how,newVal,oldVal){Observe.triggerBatch(this,"change",can.makeArray(arguments))},_each:function(callback){var data=this.__get();for(var prop in data){if(data.hasOwnProperty(prop)){callback(data[prop],prop)}}},attr:function(attr,val){var type=typeof attr;if(type!=="string"&&type!=="number"){return this._attrs(attr,val)}else if(arguments.length===1){Observe.__reading&&Observe.__reading(this,attr)
return this._get(attr)}else{this._set(attr,val);return this;}},each:function(){Observe.__reading&&Observe.__reading(this,'__keys');return can.each.apply(undefined,[this.__get()].concat(can.makeArray(arguments)))},removeAttr:function(attr){var isList=this instanceof can.Observe.List,parts=attrParts(attr),prop=parts.shift(),current=isList?this[prop]:this._data[prop];if(parts.length){return current.removeAttr(parts)}else{if(isList){this.splice(prop,1)}else if(prop in this._data){delete this._data[prop];if(!(prop in this.constructor.prototype)){delete this[prop]}
Observe.triggerBatch(this,"__keys");this._triggerChange(prop,"remove",undefined,current);}
return current;}},_get:function(attr){var value=typeof attr==='string'&&!!~attr.indexOf('.')&&this.__get(attr);if(value){return value;}
var parts=attrParts(attr),current=this.__get(parts.shift());return parts.length?current?current._get(parts):undefined:current;},__get:function(attr){return attr?this._data[attr]:this._data;},_set:function(attr,value,keepKey){var parts=attrParts(attr,keepKey),prop=parts.shift(),current=this.__get(prop);if(canMakeObserve(current)&&parts.length){current._set(parts,value)}else if(!parts.length){if(this.__convert){value=this.__convert(prop,value)}
this.__set(prop,value,current)}else{throw"can.Observe: Object does not exist"}},__set:function(prop,value,current){if(value!==current){var changeType=this.__get().hasOwnProperty(prop)?"set":"add";this.___set(prop,canMakeObserve(value)?hookupBubble(value,prop,this):value);if(changeType=="add"){Observe.triggerBatch(this,"__keys",undefined);}
this._triggerChange(prop,changeType,value,current);current&&unhookup([current],this._cid);}},___set:function(prop,val){this._data[prop]=val;if(!(prop in this.constructor.prototype)){this[prop]=val}},bind:can.bindAndSetup,unbind:can.unbindAndTeardown,serialize:function(){return serialize(this,'serialize',{});},_attrs:function(props,remove){if(props===undefined){return serialize(this,'attr',{})}
props=can.extend({},props);var prop,self=this,newVal;Observe.startBatch();this.each(function(curVal,prop){newVal=props[prop];if(newVal===undefined){remove&&self.removeAttr(prop);return;}
if(self.__convert){newVal=self.__convert(prop,newVal)}
if(newVal instanceof can.Observe){self.__set(prop,newVal,curVal)}else if(canMakeObserve(curVal)&&canMakeObserve(newVal)&&curVal.attr){curVal.attr(newVal,remove)}else if(curVal!=newVal){self.__set(prop,newVal,curVal)}
delete props[prop];})
for(var prop in props){newVal=props[prop];this._set(prop,newVal,true)}
Observe.stopBatch()
return this;},compute:function(prop){return can.compute(this,prop);}});var splice=[].splice,list=Observe({setup:function(instances,options){this.length=0;can.cid(this,".observe")
this._init=1;if(can.isDeferred(instances)){this.replace(instances)}else{this.push.apply(this,can.makeArray(instances||[]));}
this.bind('change'+this._cid,can.proxy(this._changes,this));can.extend(this,options);delete this._init;},_triggerChange:function(attr,how,newVal,oldVal){Observe.prototype._triggerChange.apply(this,arguments)
if(!~attr.indexOf('.')){if(how==='add'){Observe.triggerBatch(this,how,[newVal,+attr]);Observe.triggerBatch(this,'length',[this.length]);}else if(how==='remove'){Observe.triggerBatch(this,how,[oldVal,+attr]);Observe.triggerBatch(this,'length',[this.length]);}else{Observe.triggerBatch(this,how,[newVal,+attr])}}},__get:function(attr){return attr?this[attr]:this;},___set:function(attr,val){this[attr]=val;if(+attr>=this.length){this.length=(+attr+1)}},_each:function(callback){var data=this.__get();for(var i=0;i<data.length;i++){callback(data[i],i)}},_bindsetup:makeBindSetup("*"),serialize:function(){return serialize(this,'serialize',[]);},splice:function(index,howMany){var args=can.makeArray(arguments),i;for(i=2;i<args.length;i++){var val=args[i];if(canMakeObserve(val)){args[i]=hookupBubble(val,"*",this,this.constructor.Observe,this.constructor)}}
if(howMany===undefined){howMany=args[1]=this.length-index;}
var removed=splice.apply(this,args);can.Observe.startBatch();if(howMany>0){this._triggerChange(""+index,"remove",undefined,removed);unhookup(removed,this._cid);}
if(args.length>2){this._triggerChange(""+index,"add",args.slice(2),removed);}
can.Observe.stopBatch();return removed;},_attrs:function(items,remove){if(items===undefined){return serialize(this,'attr',[]);}
items=can.makeArray(items);Observe.startBatch();this._updateAttrs(items,remove);Observe.stopBatch()},_updateAttrs:function(items,remove){var len=Math.min(items.length,this.length);for(var prop=0;prop<len;prop++){var curVal=this[prop],newVal=items[prop];if(canMakeObserve(curVal)&&canMakeObserve(newVal)){curVal.attr(newVal,remove)}else if(curVal!=newVal){this._set(prop,newVal)}else{}}
if(items.length>this.length){this.push.apply(this,items.slice(this.length));}else if(items.length<this.length&&remove){this.splice(items.length)}}}),getArgs=function(args){return args[0]&&can.isArray(args[0])?args[0]:can.makeArray(args);};can.each({push:"length",unshift:0},function(where,name){var orig=[][name]
list.prototype[name]=function(){var args=[],len=where?this.length:0,i=arguments.length,res,val,constructor=this.constructor;while(i--){val=arguments[i];args[i]=canMakeObserve(val)?hookupBubble(val,"*",this,this.constructor.Observe,this.constructor):val;}
res=orig.apply(this,args);if(!this.comparator||args.length){this._triggerChange(""+len,"add",args,undefined);}
return res;}});can.each({pop:"length",shift:0},function(where,name){list.prototype[name]=function(){var args=getArgs(arguments),len=where&&this.length?this.length-1:0;var res=[][name].apply(this,args)
this._triggerChange(""+len,"remove",undefined,[res])
if(res&&res.unbind){res.unbind("change"+this._cid)}
return res;}});can.extend(list.prototype,{indexOf:function(item){this.attr('length')
return can.inArray(item,this)},join:[].join,reverse:[].reverse,slice:function(){var temp=Array.prototype.slice.apply(this,arguments);return new this.constructor(temp);},concat:function(){var args=[];can.each(can.makeArray(arguments),function(arg,i){args[i]=arg instanceof can.Observe.List?arg.serialize():arg;});return new this.constructor(Array.prototype.concat.apply(this.serialize(),args));},forEach:function(cb,thisarg){can.each(this,cb,thisarg||this);},replace:function(newList){if(can.isDeferred(newList)){newList.then(can.proxy(this.replace,this));}else{this.splice.apply(this,[0,this.length].concat(can.makeArray(newList||[])));}
return this;}});can.List=Observe.List=list;Observe.setup=function(){can.Construct.setup.apply(this,arguments);this.List=Observe.List({Observe:this},{});}
return Observe;})(__m3,__m8,__m1);var __m9=(function(can,bind){var getValueAndObserved=function(func,self){var oldReading;if(can.Observe){oldReading=can.Observe.__reading;can.Observe.__reading=function(obj,attr){observed.push({obj:obj,attr:attr+""});};}
var observed=[],value=func.call(self);if(can.Observe){can.Observe.__reading=oldReading;}
return{value:value,observed:observed};},computeBinder=function(getterSetter,context,callback,computeState){var observing={},matched=true,data={value:undefined,teardown:function(){for(var name in observing){var ob=observing[name];ob.observe.obj.unbind(ob.observe.attr,onchanged);delete observing[name];}}},batchNum;var onchanged=function(ev){if(computeState&&!computeState.bound){return;}
if(ev.batchNum===undefined||ev.batchNum!==batchNum){var oldValue=data.value,newvalue=getValueAndBind();data.value=newvalue;if(newvalue!==oldValue){callback(newvalue,oldValue);}
batchNum=batchNum=ev.batchNum;}};var getValueAndBind=function(){var info=getValueAndObserved(getterSetter,context),newObserveSet=info.observed;var value=info.value;matched=!matched;can.each(newObserveSet,function(ob){if(observing[ob.obj._cid+"|"+ob.attr]){observing[ob.obj._cid+"|"+ob.attr].matched=matched;}else{observing[ob.obj._cid+"|"+ob.attr]={matched:matched,observe:ob};ob.obj.bind(ob.attr,onchanged);}});for(var name in observing){var ob=observing[name];if(ob.matched!==matched){ob.observe.obj.unbind(ob.observe.attr,onchanged);delete observing[name];}}
return value;};data.value=getValueAndBind();data.isListening=!can.isEmptyObject(observing);return data;}
can.compute=function(getterSetter,context,eventName){if(getterSetter&&getterSetter.isComputed){return getterSetter;}
var computedData,bindings=0,computed,computeState={bound:false,hasDependencies:false},on=function(){},off=function(){},value,get=function(){return value},set=function(newVal){value=newVal;},canReadForChangeEvent=true;computed=function(newVal){if(arguments.length){var old=value;var setVal=set.call(context,newVal,old);if(computed.hasDependencies){return get.call(context);}
if(setVal===undefined){value=get.call(context);}else{value=setVal;}
if(old!==value){can.Observe.triggerBatch(computed,"change",[value,old]);}
return value;}else{if(can.Observe.__reading&&canReadForChangeEvent){can.Observe.__reading(computed,'change');}
if(computeState.bound){return value;}else{return get.call(context);}}}
if(typeof getterSetter==="function"){set=getterSetter;get=getterSetter;canReadForChangeEvent=eventName===false?false:true;computed.hasDependencies=false;on=function(update){computedData=computeBinder(getterSetter,context||this,update,computeState);computed.hasDependencies=computedData.isListening
value=computedData.value;}
off=function(){computedData.teardown();}}else if(context){if(typeof context=="string"){var propertyName=context,isObserve=getterSetter instanceof can.Observe;if(isObserve){computed.hasDependencies=true;}
get=function(){if(isObserve){return getterSetter.attr(propertyName);}else{return getterSetter[propertyName];}}
set=function(newValue){if(isObserve){getterSetter.attr(propertyName,newValue)}else{getterSetter[propertyName]=newValue;}}
var handler;on=function(update){handler=function(){update(get(),value)};can.bind.call(getterSetter,eventName||propertyName,handler)
value=getValueAndObserved(get).value}
off=function(){can.unbind.call(getterSetter,eventName||propertyName,handler)}}else{if(typeof context==="function"){value=getterSetter;set=context;}else{value=getterSetter;var options=context;get=options.get||get;set=options.set||set;on=options.on||on;off=options.off||off;}}}else{value=getterSetter;}
computed.isComputed=true;can.cid(computed,"compute")
var updater=function(newValue,oldValue){value=newValue;can.Observe.triggerBatch(computed,"change",[newValue,oldValue])}
return can.extend(computed,{_bindsetup:function(){computeState.bound=true;on.call(this,updater)},_bindteardown:function(){off.call(this,updater)
computeState.bound=false;},bind:can.bindAndSetup,unbind:can.unbindAndTeardown});};can.compute.binder=computeBinder;return can.compute;})(__m3,__m8);var __m10=(function(can){var pipe=function(def,model,func){var d=new can.Deferred();def.then(function(){var args=can.makeArray(arguments);args[0]=model[func](args[0]);d.resolveWith(d,args);},function(){d.rejectWith(this,arguments);});if(typeof def.abort==='function'){d.abort=function(){return def.abort();}}
return d;},modelNum=0,ignoreHookup=/change.observe\d+/,getId=function(inst){can.Observe.__reading&&can.Observe.__reading(inst,inst.constructor.id)
return inst.__get(inst.constructor.id);},ajax=function(ajaxOb,data,type,dataType,success,error){var params={};if(typeof ajaxOb=="string"){var parts=ajaxOb.split(/\s+/);params.url=parts.pop();if(parts.length){params.type=parts.pop();}}else{can.extend(params,ajaxOb);}
params.data=typeof data=="object"&&!can.isArray(data)?can.extend(params.data||{},data):data;params.url=can.sub(params.url,params.data,true);return can.ajax(can.extend({type:type||"post",dataType:dataType||"json",success:success,error:error},params));},makeRequest=function(self,type,success,error,method){var args;if(can.isArray(self)){args=self[1];self=self[0];}else{args=self.serialize();}
args=[args];var deferred,model=self.constructor,jqXHR;if(type=='destroy'){args.shift();}
if(type!=='create'){args.unshift(getId(self));}
jqXHR=model[type].apply(model,args);deferred=jqXHR.pipe(function(data){self[method||type+"d"](data,jqXHR);return self;});if(jqXHR.abort){deferred.abort=function(){jqXHR.abort();};}
deferred.then(success,error);return deferred;},ajaxMethods={create:{url:"_shortName",type:"post"},update:{data:function(id,attrs){attrs=attrs||{};var identity=this.id;if(attrs[identity]&&attrs[identity]!==id){attrs["new"+can.capitalize(id)]=attrs[identity];delete attrs[identity];}
attrs[identity]=id;return attrs;},type:"put"},destroy:{type:"delete",data:function(id){var args={};args.id=args[this.id]=id;return args;}},findAll:{url:"_shortName"},findOne:{}},ajaxMaker=function(ajaxMethod,str){return function(data){data=ajaxMethod.data?ajaxMethod.data.apply(this,arguments):data;return ajax(str||this[ajaxMethod.url||"_url"],data,ajaxMethod.type||"get")}}
can.Model=can.Observe({fullName:"can.Model",_reqs:0,setup:function(base){this.store={};can.Observe.setup.apply(this,arguments);if(!can.Model){return;}
this.List=ML({Observe:this},{});var self=this,clean=can.proxy(this._clean,self);can.each(ajaxMethods,function(method,name){if(!can.isFunction(self[name])){self[name]=ajaxMaker(method,self[name]);}
if(self["make"+can.capitalize(name)]){var newMethod=self["make"+can.capitalize(name)](self[name]);can.Construct._overwrite(self,base,name,function(){can.Model._reqs++;var def=newMethod.apply(this,arguments);var then=def.then(clean,clean);then.abort=def.abort;return then;})}});if(self.fullName=="can.Model"||!self.fullName){self.fullName="Model"+(++modelNum);}
can.Model._reqs=0;this._url=this._shortName+"/{"+this.id+"}"},_ajax:ajaxMaker,_makeRequest:makeRequest,_clean:function(){can.Model._reqs--;if(!can.Model._reqs){for(var id in this.store){if(!this.store[id]._bindings){delete this.store[id];}}}
return arguments[0];},models:function(instancesRawData,oldList){can.Model._reqs++;if(!instancesRawData){return;}
if(instancesRawData instanceof this.List){return instancesRawData;}
var self=this,tmp=[],res=oldList instanceof can.Observe.List?oldList:new(self.List||ML),arr=can.isArray(instancesRawData),ml=(instancesRawData instanceof ML),raw=arr?instancesRawData:(ml?instancesRawData.serialize():instancesRawData.data),i=0;if(res.length){res.splice(0);}
can.each(raw,function(rawPart){tmp.push(self.model(rawPart));});res.push.apply(res,tmp);if(!arr){can.each(instancesRawData,function(val,prop){if(prop!=='data'){res.attr(prop,val);}})}
setTimeout(can.proxy(this._clean,this),1);return res;},model:function(attributes){if(!attributes){return;}
if(attributes instanceof this){attributes=attributes.serialize();}
var id=attributes[this.id],model=(id||id===0)&&this.store[id]?this.store[id].attr(attributes,this.removeAttr||false):new this(attributes);if(can.Model._reqs){this.store[attributes[this.id]]=model;}
return model;}},{isNew:function(){var id=getId(this);return!(id||id===0);},save:function(success,error){return makeRequest(this,this.isNew()?'create':'update',success,error);},destroy:function(success,error){if(this.isNew()){var self=this;var def=can.Deferred();def.then(success,error);return def.done(function(data){self.destroyed(data)}).resolve(self);}
return makeRequest(this,'destroy',success,error,'destroyed');},_bindsetup:function(){this.constructor.store[this.__get(this.constructor.id)]=this;return can.Observe.prototype._bindsetup.apply(this,arguments);},_bindteardown:function(){delete this.constructor.store[getId(this)];return can.Observe.prototype._bindteardown.apply(this,arguments)},___set:function(prop,val){can.Observe.prototype.___set.call(this,prop,val)
if(prop===this.constructor.id&&this._bindings){this.constructor.store[getId(this)]=this;}}});can.each({makeFindAll:"models",makeFindOne:"model",makeCreate:"model",makeUpdate:"model"},function(method,name){can.Model[name]=function(oldMethod){return function(){var args=can.makeArray(arguments),oldArgs=can.isFunction(args[1])?args.splice(0,1):args.splice(0,2),def=pipe(oldMethod.apply(this,oldArgs),this,method);def.then(args[0],args[1]);return def;};};});can.each(["created","updated","destroyed"],function(funcName){can.Model.prototype[funcName]=function(attrs){var stub,constructor=this.constructor;stub=attrs&&typeof attrs=='object'&&this.attr(attrs.attr?attrs.attr():attrs);can.trigger(this,"change",funcName)
can.trigger(constructor,funcName,this);};});var ML=can.Model.List=can.Observe.List({setup:function(params){if(can.isPlainObject(params)&&!can.isArray(params)){can.Observe.List.prototype.setup.apply(this);this.replace(this.constructor.Observe.findAll(params))}else{can.Observe.List.prototype.setup.apply(this,arguments);}},_changes:function(ev,attr){can.Observe.List.prototype._changes.apply(this,arguments);if(/\w+\.destroyed/.test(attr)){var index=this.indexOf(ev.target);if(index!=-1){this.splice(index,1);}}}})
return can.Model;})(__m3,__m7);var __m11=(function(can){var isFunction=can.isFunction,makeArray=can.makeArray,hookupId=1,$view=can.view=can.template=function(view,data,helpers,callback){if(isFunction(helpers)){callback=helpers;helpers=undefined;}
var pipe=function(result){return $view.frag(result);},wrapCallback=isFunction(callback)?function(frag){callback(pipe(frag));}:null,result=$view.render(view,data,helpers,wrapCallback),deferred=can.Deferred();if(isFunction(result)){return result;}
if(can.isDeferred(result)){result.then(function(result,data){deferred.resolve.call(deferred,pipe(result),data);},function(){deferred.fail.apply(deferred,arguments);});return deferred;}
return pipe(result);};can.extend($view,{frag:function(result,parentNode){return $view.hookup($view.fragment(result),parentNode);},fragment:function(result){var frag=can.buildFragment(result,document.body);if(!frag.childNodes.length){frag.appendChild(document.createTextNode(''));}
return frag;},toId:function(src){return can.map(src.toString().split(/\/|\./g),function(part){if(part){return part;}}).join("_");},hookup:function(fragment,parentNode){var hookupEls=[],id,func;can.each(fragment.childNodes?can.makeArray(fragment.childNodes):fragment,function(node){if(node.nodeType===1){hookupEls.push(node);hookupEls.push.apply(hookupEls,can.makeArray(node.getElementsByTagName('*')));}});can.each(hookupEls,function(el){if(el.getAttribute&&(id=el.getAttribute('data-view-id'))&&(func=$view.hookups[id])){func(el,parentNode,id);delete $view.hookups[id];el.removeAttribute('data-view-id');}});return fragment;},hookups:{},hook:function(cb){$view.hookups[++hookupId]=cb;return" data-view-id='"+hookupId+"'";},cached:{},cachedRenderers:{},cache:true,register:function(info){this.types["."+info.suffix]=info;},types:{},ext:".ejs",registerScript:function(){},preload:function(){},render:function(view,data,helpers,callback){if(isFunction(helpers)){callback=helpers;helpers=undefined;}
var deferreds=getDeferreds(data);if(deferreds.length){var deferred=new can.Deferred(),dataCopy=can.extend({},data);deferreds.push(get(view,true))
can.when.apply(can,deferreds).then(function(resolved){var objs=makeArray(arguments),renderer=objs.pop(),result;if(can.isDeferred(data)){dataCopy=usefulPart(resolved);}else{for(var prop in data){if(can.isDeferred(data[prop])){dataCopy[prop]=usefulPart(objs.shift());}}}
result=renderer(dataCopy,helpers);deferred.resolve(result,dataCopy);callback&&callback(result,dataCopy);},function(){deferred.reject.apply(deferred,arguments)});return deferred;}else{var response,async=isFunction(callback),deferred=get(view,async);if(async){response=deferred;deferred.then(function(renderer){callback(data?renderer(data,helpers):renderer);})}else{if(deferred.state()==="resolved"&&deferred.__view_id){var currentRenderer=$view.cachedRenderers[deferred.__view_id];return data?currentRenderer(data,helpers):currentRenderer;}else{deferred.then(function(renderer){response=data?renderer(data,helpers):renderer;});}}
return response;}},registerView:function(id,text,type,def){var func=(type||$view.types[$view.ext]).renderer(id,text);def=def||new can.Deferred();if($view.cache){$view.cached[id]=def;def.__view_id=id;$view.cachedRenderers[id]=func;}
return def.resolve(func);}});var checkText=function(text,url){if(!text.length){throw"can.view: No template or empty template:"+url;}},get=function(url,async){var suffix=url.match(/\.[\w\d]+$/),type,el,id,jqXHR;if(url.match(/^#/)){url=url.substr(1);}
if(el=document.getElementById(url)){suffix="."+el.type.match(/\/(x\-)?(.+)/)[2];}
if(!suffix&&!$view.cached[url]){url+=(suffix=$view.ext);}
if(can.isArray(suffix)){suffix=suffix[0]}
id=$view.toId(url);if(url.match(/^\/\//)){var sub=url.substr(2);url=!window.steal?sub:steal.config().root.mapJoin(""+steal.id(sub));}
type=$view.types[suffix];if($view.cached[id]){return $view.cached[id];}else if(el){return $view.registerView(id,el.innerHTML,type);}else{var d=new can.Deferred();can.ajax({async:async,url:url,dataType:"text",error:function(jqXHR){checkText("",url);d.reject(jqXHR);},success:function(text){checkText(text,url);$view.registerView(id,text,type,d)}});return d;}},getDeferreds=function(data){var deferreds=[];if(can.isDeferred(data)){return[data]}else{for(var prop in data){if(can.isDeferred(data[prop])){deferreds.push(data[prop]);}}}
return deferreds;},usefulPart=function(resolved){return can.isArray(resolved)&&resolved[1]==='success'?resolved[0]:resolved};if(window.steal){steal.type("view js",function(options,success,error){var type=$view.types["."+options.type],id=$view.toId(options.id);options.text="steal('"+(type.plugin||"can/view/"+options.type)+"',function(can){return "+"can.view.preload('"+id+"',"+options.text+");\n})";success();})}
can.extend($view,{register:function(info){this.types["."+info.suffix]=info;if(window.steal){steal.type(info.suffix+" view js",function(options,success,error){var type=$view.types["."+options.type],id=$view.toId(options.id+'');options.text=type.script(id,options.text)
success();})};$view[info.suffix]=function(id,text){if(!text){var renderer=function(){return $view.frag(renderer.render.apply(this,arguments));}
renderer.render=function(){var renderer=info.renderer(null,id);return renderer.apply(renderer,arguments);}
return renderer;}
$view.preload(id,info.renderer(id,text));return can.view(id);}},registerScript:function(type,id,src){return"can.view.preload('"+id+"',"+$view.types["."+type].script(id,src)+");";},preload:function(id,renderer){$view.cached[id]=new can.Deferred().resolve(function(data,helpers){return renderer.call(data,data,helpers);});function frag(){return $view.frag(renderer.apply(this,arguments));}
frag.render=renderer;return frag;}});return can;})(__m3);var __m14=(function(){var elements={tagToContentPropMap:{option:"textContent"in document.createElement("option")?"textContent":"innerText",textarea:"value"},attrMap:{"class":"className","value":"value","innerText":"innerText","textContent":"textContent","checked":true,"disabled":true,"readonly":true,"required":true},defaultValue:["input","textarea"],tagMap:{"":"span",table:"tbody",tr:"td",ol:"li",ul:"li",tbody:"tr",thead:"tr",tfoot:"tr",select:"option",optgroup:"option"},reverseTagMap:{tr:"tbody",option:"select",td:"tr",th:"tr",li:"ul"},getParentNode:function(el,defaultParentNode){return defaultParentNode&&el.parentNode.nodeType===11?defaultParentNode:el.parentNode;},setAttr:function(el,attrName,val){var tagName=el.nodeName.toString().toLowerCase(),prop=elements.attrMap[attrName];if(prop===true){el[attrName]=true;}else if(prop){el[prop]=val;if(prop==="value"&&can.inArray(tagName,elements.defaultValue)>=0){el.defaultValue=val;}}else{el.setAttribute(attrName,val);}},getAttr:function(el,attrName){return(elements.attrMap[attrName]&&el[elements.attrMap[attrName]]?el[elements.attrMap[attrName]]:el.getAttribute(attrName))||'';},removeAttr:function(el,attrName){if(elements.attrMap[attrName]===true){el[attrName]=false;}else{el.removeAttribute(attrName);}},contentText:function(text){if(typeof text=='string'){return text;}
if(!text&&text!==0){return'';}
return""+text;}};return elements;})();var __m13=(function(can,elements){var newLine=/(\r|\n)+/g,clean=function(content){return content.split('\\').join("\\\\").split("\n").join("\\n").split('"').join('\\"').split("\t").join("\\t");},getTag=function(tagName,tokens,i){if(tagName){return tagName;}else{while(i<tokens.length){if(tokens[i]=="<"&&elements.reverseTagMap[tokens[i+1]]){return elements.reverseTagMap[tokens[i+1]];}
i++;}}
return'';},bracketNum=function(content){return(--content.split("{").length)-(--content.split("}").length);},myEval=function(script){eval(script);},attrReg=/([^\s]+)[\s]*=[\s]*$/,startTxt='var ___v1ew = [];',finishTxt="return ___v1ew.join('')",put_cmd="___v1ew.push(",insert_cmd=put_cmd,htmlTag=null,quote=null,beforeQuote=null,rescan=null,status=function(){return quote?"'"+beforeQuote.match(attrReg)[1]+"'":(htmlTag?1:0);};can.view.Scanner=Scanner=function(options){can.extend(this,{text:{},tokens:[]},options);this.tokenReg=[];this.tokenSimple={"<":"<",">":">",'"':'"',"'":"'"};this.tokenComplex=[];this.tokenMap={};for(var i=0,token;token=this.tokens[i];i++){if(token[2]){this.tokenReg.push(token[2]);this.tokenComplex.push({abbr:token[1],re:new RegExp(token[2]),rescan:token[3]});}
else{this.tokenReg.push(token[1]);this.tokenSimple[token[1]]=token[0];}
this.tokenMap[token[0]]=token[1];}
this.tokenReg=new RegExp("("+this.tokenReg.slice(0).concat(["<",">",'"',"'"]).join("|")+")","g");};Scanner.prototype={helpers:[{name:/\s*\(([\$\w]+)\)\s*->([^\n]*)/,fn:function(content){var quickFunc=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,parts=content.match(quickFunc);return"can.proxy(function(__){var "+parts[1]+"=can.$(__);"+parts[2]+"}, this);";}}],scan:function(source,name){var tokens=[],last=0,simple=this.tokenSimple,complex=this.tokenComplex;source=source.replace(newLine,"\n");if(this.transform){source=this.transform(source);}
source.replace(this.tokenReg,function(whole,part){var offset=arguments[arguments.length-2];if(offset>last){tokens.push(source.substring(last,offset));}
if(simple[whole]){tokens.push(whole);}
else{for(var i=0,token;token=complex[i];i++){if(token.re.test(whole)){tokens.push(token.abbr);if(token.rescan){tokens.push(token.rescan(part));}
break;}}}
last=offset+part.length;});if(last<source.length){tokens.push(source.substr(last));}
var content='',buff=[startTxt+(this.text.start||'')],put=function(content,bonus){buff.push(put_cmd,'"',clean(content),'"'+(bonus||'')+');');},endStack=[],lastToken,startTag=null,magicInTag=false,tagName='',tagNames=[],popTagName=false,bracketCount,i=0,token,tmap=this.tokenMap;htmlTag=quote=beforeQuote=null;for(;(token=tokens[i++])!==undefined;){if(startTag===null){switch(token){case tmap.left:case tmap.escapeLeft:case tmap.returnLeft:magicInTag=htmlTag&&1;case tmap.commentLeft:startTag=token;if(content.length){put(content);}
content='';break;case tmap.escapeFull:magicInTag=htmlTag&&1;rescan=1;startTag=tmap.escapeLeft;if(content.length){put(content);}
rescan=tokens[i++];content=rescan.content||rescan;if(rescan.before){put(rescan.before);}
tokens.splice(i,0,tmap.right);break;case tmap.commentFull:break;case tmap.templateLeft:content+=tmap.left;break;case'<':if(tokens[i].indexOf("!--")!==0){htmlTag=1;magicInTag=0;}
content+=token;break;case'>':htmlTag=0;var emptyElement=content.substr(content.length-1)=="/"||content.substr(content.length-2)=="--";if(magicInTag||!popTagName&&elements.tagToContentPropMap[tagNames[tagNames.length-1]]){if(emptyElement){put(content.substr(0,content.length-1),",can.view.pending(),\"/>\"");}else{put(content,",can.view.pending(),\">\"");}
content='';magicInTag=0;}else{content+=token;}
if(emptyElement||popTagName){tagNames.pop();tagName=tagNames[tagNames.length-1];popTagName=false;}
break;case"'":case'"':if(htmlTag){if(quote&&quote===token){quote=null;}else if(quote===null){quote=token;beforeQuote=lastToken;}}
default:if(lastToken==='<'){tagName=token.split(/\s/)[0];if(tagName.indexOf("/")===0&&tagNames[tagNames.length-1]===tagName.substr(1)){tagName=tagNames[tagNames.length-1];popTagName=true;}else{tagNames.push(tagName);}}
content+=token;break;}}else{switch(token){case tmap.right:case tmap.returnRight:switch(startTag){case tmap.left:bracketCount=bracketNum(content);if(bracketCount==1){buff.push(insert_cmd,"can.view.txt(0,'"+getTag(tagName,tokens,i)+"',"+status()+",this,function(){",startTxt,content);endStack.push({before:"",after:finishTxt+"}));\n"});}else{last=endStack.length&&bracketCount==-1?endStack.pop():{after:";"};if(last.before){buff.push(last.before);}
buff.push(content,";",last.after);}
break;case tmap.escapeLeft:case tmap.returnLeft:bracketCount=bracketNum(content);if(bracketCount){endStack.push({before:finishTxt,after:"}));"});}
var escaped=startTag===tmap.escapeLeft?1:0,commands={insert:insert_cmd,tagName:getTag(tagName,tokens,i),status:status()};for(var ii=0;ii<this.helpers.length;ii++){var helper=this.helpers[ii];if(helper.name.test(content)){content=helper.fn(content,commands);if(helper.name.source==/^>[\s]*\w*/.source){escaped=0;}
break;}}
if(typeof content=='object'){if(content.raw){buff.push(content.raw);}}else{buff.push(insert_cmd,"can.view.txt("+escaped+",'"+tagName+"',"+status()+",this,function(){ "+(this.text.escape||'')+"return ",content,bracketCount?startTxt:"}));");}
if(rescan&&rescan.after&&rescan.after.length){put(rescan.after.length);rescan=null;}
break;}
startTag=null;content='';break;case tmap.templateLeft:content+=tmap.left;break;default:content+=token;break;}}
lastToken=token;}
if(content.length){put(content);}
buff.push(";");var template=buff.join(''),out={out:'with(_VIEW) { with (_CONTEXT) {'+template+" "+finishTxt+"}}"};myEval.call(out,'this.fn = (function(_CONTEXT,_VIEW){'+out.out+'});\r\n//@ sourceURL='+name+".js");return out;}};return Scanner;})(__m11,__m14);var __m17=(function(can){var canExpando=true;try{document.createTextNode('')._=0;}catch(ex){canExpando=false;}
var nodeMap={},textNodeMap={},nodeListMap={},expando="ejs_"+Math.random(),_id=0,id=function(node){if(canExpando||node.nodeType!==3){if(node[expando]){return node[expando];}else{return node[expando]=(node.nodeName?"element_":"obj_")+(++_id);}}else{for(var textNodeID in textNodeMap){if(textNodeMap[textNodeID]===node){return textNodeID;}}
textNodeMap["text_"+(++_id)]=node;return"text_"+_id;}},removeNodeListId=function(node,nodeListId){var nodeListIds=nodeMap[id(node)];if(nodeListIds){var index=can.inArray(nodeListId,nodeListIds);if(index>=0){nodeListIds.splice(index,1);}
if(!nodeListIds.length){delete nodeMap[id(node)];}}},addNodeListId=function(node,nodeListId){var nodeListIds=nodeMap[id(node)];if(!nodeListIds){nodeListIds=nodeMap[id(node)]=[];}
nodeListIds.push(nodeListId);};var nodeLists={id:id,replace:function(oldNodeList,newNodes){oldNodeList=can.makeArray(oldNodeList);var node=oldNodeList[0]
can.each(can.makeArray(nodeMap[id(node)]),function(nodeListId){var nodeList=nodeListMap[nodeListId],startIndex=can.inArray(node,nodeList),endIndex=can.inArray(oldNodeList[oldNodeList.length-1],nodeList);if(startIndex>=0&&endIndex>=0){for(var i=startIndex;i<=endIndex;i++){var n=nodeList[i];removeNodeListId(n,nodeListId);}
nodeList.splice.apply(nodeList,[startIndex,endIndex-startIndex+1].concat(newNodes));can.each(newNodes,function(node){addNodeListId(node,nodeListId);});}else{nodeLists.unregister(nodeList);}});},register:function(nodeList){var nLId=id(nodeList);nodeListMap[nLId]=nodeList;can.each(nodeList,function(node){addNodeListId(node,nLId);});},unregister:function(nodeList){var nLId=id(nodeList);can.each(nodeList,function(node){removeNodeListId(node,nLId);});delete nodeListMap[nLId];},nodeMap:nodeMap,nodeListMap:nodeListMap}
var ids=function(nodeList){return nodeList.map(function(n){return id(n)+":"+(n.innerHTML||n.nodeValue)})}
return nodeLists;})(__m3);var __m16=(function(can,elements,view,nodeLists){var setup=function(el,bind,unbind){var teardown=function(){unbind(data)
can.unbind.call(el,'destroyed',teardown);},data={teardownCheck:function(parent){if(!parent){teardown();}}}
can.bind.call(el,'destroyed',teardown);bind(data)
return data;},listen=function(el,compute,change){return setup(el,function(){compute.bind("change",change);},function(data){compute.unbind("change",change);if(data.nodeList){nodeLists.unregister(data.nodeList);}});},getAttributeParts=function(newVal){return(newVal||"").replace(/['"]/g,'').split('=')}
insertElementsAfter=function(oldElements,newFrag){var last=oldElements[oldElements.length-1];if(last.nextSibling){last.parentNode.insertBefore(newFrag,last.nextSibling);}else{last.parentNode.appendChild(newFrag);}};var live={nodeLists:nodeLists,list:function(el,list,func,context,parentNode){var nodesMap=[],add=function(ev,items,index){var frag=document.createDocumentFragment(),newMappings=[];can.each(items,function(item){var itemHTML=func.call(context,item),itemFrag=can.view.frag(itemHTML,parentNode);newMappings.push(can.makeArray(itemFrag.childNodes));frag.appendChild(itemFrag);})
if(!nodesMap[index]){insertElementsAfter(index==0?[text]:nodesMap[index-1],frag)}else{var el=nodesMap[index][0];el.parentNode.insertBefore(frag,el)}
can.each(newMappings,function(nodeList){nodeLists.register(nodeList)});[].splice.apply(nodesMap,[index,0].concat(newMappings));},remove=function(ev,items,index){var removedMappings=nodesMap.splice(index,items.length),itemsToRemove=[];can.each(removedMappings,function(nodeList){[].push.apply(itemsToRemove,nodeList)
nodeLists.replace(nodeList,[]);nodeLists.unregister(nodeList);});can.remove(can.$(itemsToRemove));},parentNode=elements.getParentNode(el,parentNode),text=document.createTextNode("");setup(parentNode,function(){list.bind("add",add).bind("remove",remove)},function(){list.unbind("add",add).unbind("remove",remove);can.each(nodesMap,function(nodeList){nodeLists.unregister(nodeList);})})
insertElementsAfter([el],text);can.remove(can.$(el));add({},list,0);},html:function(el,compute,parentNode){var parentNode=elements.getParentNode(el,parentNode),data=listen(parentNode,compute,function(ev,newVal,oldVal){var attached=nodes[0].parentNode;if(attached){makeAndPut(newVal);}
data.teardownCheck(nodes[0].parentNode);});var nodes,makeAndPut=function(val){var frag=can.view.frag(val,parentNode),newNodes=can.makeArray(frag.childNodes);insertElementsAfter(nodes||[el],frag)
if(!nodes){can.remove(can.$(el));nodes=newNodes;data.nodeList=nodes;nodeLists.register(nodes);}else{var nodesToRemove=can.makeArray(nodes);nodeLists.replace(nodes,newNodes);can.remove(can.$(nodesToRemove));}};makeAndPut(compute(),[el]);},text:function(el,compute,parentNode){var parent=elements.getParentNode(el,parentNode);var data=listen(el.parentNode!==parent?el.parentNode:parent,compute,function(ev,newVal,oldVal){if(typeof node.nodeValue!='unknown'){node.nodeValue=""+newVal;}
data.teardownCheck(node.parentNode);});var node=document.createTextNode(compute());if(el.parentNode!==parent){parent=el.parentNode;parent.insertBefore(node,el);parent.removeChild(el);}else{parent.insertBefore(node,el);parent.removeChild(el);}},attributes:function(el,compute,currentValue){var setAttrs=function(newVal){var parts=getAttributeParts(newVal),newAttrName=parts.shift();if((newAttrName!=attrName)&&attrName){elements.removeAttr(el,attrName);}
if(newAttrName){elements.setAttr(el,newAttrName,parts.join('='));attrName=newAttrName;}}
listen(el,compute,function(ev,newVal){setAttrs(newVal)})
if(arguments.length>=3){var attrName=getAttributeParts(currentValue)[0]}else{setAttrs(compute())}},attributePlaceholder:'__!!__',attributeReplace:/__!!__/g,attribute:function(el,attributeName,compute){listen(el,compute,function(ev,newVal){elements.setAttr(el,attributeName,hook.render());})
var wrapped=can.$(el),hooks;hooks=can.data(wrapped,'hooks');if(!hooks){can.data(wrapped,'hooks',hooks={});}
var attr=elements.getAttr(el,attributeName),parts=attr.split(live.attributePlaceholder),goodParts=[],hook;goodParts.push(parts.shift(),parts.join(live.attributePlaceholder));if(hooks[attributeName]){hooks[attributeName].computes.push(compute);}else{hooks[attributeName]={render:function(){var i=0,newAttr=attr?attr.replace(live.attributeReplace,function(){return elements.contentText(hook.computes[i++]());}):elements.contentText(hook.computes[i++]());return newAttr;},computes:[compute],batchNum:undefined};}
hook=hooks[attributeName];goodParts.splice(1,0,compute());elements.setAttr(el,attributeName,goodParts.join(""));}}
return live;})(__m3,__m14,__m11,__m17);var __m15=(function(can,elements,live){var pendingHookups=[],tagChildren=function(tagName){var newTag=elements.tagMap[tagName]||"span";if(newTag==="span"){return"@@!!@@";}
return"<"+newTag+">"+tagChildren(newTag)+"</"+newTag+">";},contentText=function(input,tag){if(typeof input=='string'){return input;}
if(!input&&input!==0){return'';}
var hook=(input.hookup&&function(el,id){input.hookup.call(input,el,id);})||(typeof input=='function'&&input);if(hook){if(tag){return"<"+tag+" "+can.view.hook(hook)+"></"+tag+">"}else{pendingHookups.push(hook);}
return'';}
return""+input;},contentEscape=function(txt){return(typeof txt=='string'||typeof txt=='number')?can.esc(txt):contentText(txt);};var current;can.extend(can.view,{live:live,setupLists:function(){var old=can.view.lists,data;can.view.lists=function(list,renderer){data={list:list,renderer:renderer}}
return function(){can.view.lists=old;return data;}},pending:function(){var hooks=pendingHookups.slice(0);lastHookups=hooks;pendingHookups=[];return can.view.hook(function(el){can.each(hooks,function(fn){fn(el);});});},txt:function(escape,tagName,status,self,func){var listTeardown=can.view.setupLists(),emptyHandler=function(){},unbind=function(){compute.unbind("change",emptyHandler)};var compute=can.compute(func,self,false);compute.bind("change",emptyHandler);var tag=(elements.tagMap[tagName]||"span"),listData=listTeardown(),value=compute();if(listData){return"<"+tag+can.view.hook(function(el,parentNode){live.list(el,listData.list,listData.renderer,self,parentNode);})+"></"+tag+">";}
if(!compute.hasDependencies){unbind();return(escape||status!==0?contentEscape:contentText)(value,status===0&&tag);}
var contentProp=elements.tagToContentPropMap[tagName];if(status===0&&!contentProp){return"<"+tag+can.view.hook(escape?function(el,parentNode){live.text(el,compute,parentNode);unbind();}:function(el,parentNode){live.html(el,compute,parentNode);unbind();})+">"+tagChildren(tag)+"</"+tag+">";}else if(status===1){pendingHookups.push(function(el){live.attributes(el,compute,compute());unbind();});return compute();}else{var attributeName=status===0?contentProp:status;(status===0?lastHookups:pendingHookups).push(function(el){live.attribute(el,attributeName,compute);unbind();});return live.attributePlaceholder;}}});return can;})(__m11,__m14,__m16,__m2);var __m12=(function(can){var extend=can.extend,EJS=function(options){if(this.constructor!=EJS){var ejs=new EJS(options);return function(data,helpers){return ejs.render(data,helpers);};}
if(typeof options=="function"){this.template={fn:options};return;}
extend(this,options);this.template=this.scanner.scan(this.text,this.name);};can.EJS=EJS;EJS.prototype.render=function(object,extraHelpers){object=object||{};return this.template.fn.call(object,object,new EJS.Helpers(object,extraHelpers||{}));};extend(EJS.prototype,{scanner:new can.view.Scanner({tokens:[["templateLeft","<%%"],["templateRight","%>"],["returnLeft","<%=="],["escapeLeft","<%="],["commentLeft","<%#"],["left","<%"],["right","%>"],["returnRight","%>"]],transform:function(source){return source.replace(/<%([\s\S]+?)%>/gm,function(whole,part){var brackets=[],foundBracketPair,i;part.replace(/[{}]/gm,function(bracket,offset){brackets.push([bracket,offset]);});do{foundBracketPair=false;for(i=brackets.length-2;i>=0;i--){if(brackets[i][0]=='{'&&brackets[i+1][0]=='}'){brackets.splice(i,2);foundBracketPair=true;break;}}}while(foundBracketPair);if(brackets.length>=2){var result=['<%'],bracket,last=0;for(i=0;bracket=brackets[i];i++){result.push(part.substring(last,last=bracket[1]));if((bracket[0]=='{'&&i<brackets.length-1)||(bracket[0]=='}'&&i>0)){result.push(bracket[0]=='{'?'{ %><% ':' %><% }');}else{result.push(bracket[0]);}
++last;}
result.push(part.substring(last),'%>');return result.join('');}
else{return'<%'+part+'%>';}});}})});EJS.Helpers=function(data,extras){this._data=data;this._extras=extras;extend(this,extras);};EJS.Helpers.prototype={list:function(list,cb){can.each(list,function(item,i){cb(item,i,list)})},each:function(list,cb){if(can.isArray(list)){this.list(list,cb);}else{can.view.lists(list,cb);}}};can.view.register({suffix:"ejs",script:function(id,src){return"can.EJS(function(_CONTEXT,_VIEW) { "+new EJS({text:src,name:id}).template.out+" })";},renderer:function(id,text){return EJS({text:text,name:id});}});return can;})(__m3,__m11,__m2,__m9,__m13,__m15);var __m18=(function(can){var bind=function(el,ev,callback){can.bind.call(el,ev,callback);return function(){can.unbind.call(el,ev,callback);};},isFunction=can.isFunction,extend=can.extend,each=can.each,slice=[].slice,paramReplacer=/\{([^\}]+)\}/g,special=can.getObject("$.event.special",[can])||{},delegate=function(el,selector,ev,callback){can.delegate.call(el,selector,ev,callback);return function(){can.undelegate.call(el,selector,ev,callback);};},binder=function(el,ev,callback,selector){return selector?delegate(el,can.trim(selector),ev,callback):bind(el,ev,callback);},basicProcessor;var Control=can.Control=can.Construct({setup:function(){can.Construct.setup.apply(this,arguments);if(can.Control){var control=this,funcName;control.actions={};for(funcName in control.prototype){if(control._isAction(funcName)){control.actions[funcName]=control._action(funcName);}}}},_shifter:function(context,name){var method=typeof name=="string"?context[name]:name;if(!isFunction(method)){method=context[method];}
return function(){context.called=name;return method.apply(context,[this.nodeName?can.$(this):this].concat(slice.call(arguments,0)));};},_isAction:function(methodName){var val=this.prototype[methodName],type=typeof val;return(methodName!=='constructor')&&(type=="function"||(type=="string"&&isFunction(this.prototype[val])))&&!!(special[methodName]||processors[methodName]||/[^\w]/.test(methodName));},_action:function(methodName,options){paramReplacer.lastIndex=0;if(options||!paramReplacer.test(methodName)){var convertedName=options?can.sub(methodName,[options,window]):methodName;if(!convertedName){return null;}
var arr=can.isArray(convertedName),name=arr?convertedName[1]:convertedName,parts=name.split(/\s+/g),event=parts.pop();return{processor:processors[event]||basicProcessor,parts:[name,parts.join(" "),event],delegate:arr?convertedName[0]:undefined};}},processors:{},defaults:{}},{setup:function(element,options){var cls=this.constructor,pluginname=cls.pluginName||cls._fullName,arr;this.element=can.$(element)
if(pluginname&&pluginname!=='can_control'){this.element.addClass(pluginname);}
(arr=can.data(this.element,"controls"))||can.data(this.element,"controls",arr=[]);arr.push(this);this.options=extend({},cls.defaults,options);this.on();return[this.element,this.options];},on:function(el,selector,eventName,func){if(!el){this.off();var cls=this.constructor,bindings=this._bindings,actions=cls.actions,element=this.element,destroyCB=can.Control._shifter(this,"destroy"),funcName,ready;for(funcName in actions){if(actions.hasOwnProperty(funcName)&&(ready=actions[funcName]||cls._action(funcName,this.options))){bindings.push(ready.processor(ready.delegate||element,ready.parts[2],ready.parts[1],funcName,this));}}
can.bind.call(element,"destroyed",destroyCB);bindings.push(function(el){can.unbind.call(el,"destroyed",destroyCB);});return bindings.length;}
if(typeof el=='string'){func=eventName;eventName=selector;selector=el;el=this.element;}
if(func===undefined){func=eventName;eventName=selector;selector=null;}
if(typeof func=='string'){func=can.Control._shifter(this,func);}
this._bindings.push(binder(el,eventName,func,selector));return this._bindings.length;},off:function(){var el=this.element[0]
each(this._bindings||[],function(value){value(el);});this._bindings=[];},destroy:function(){if(this.element===null){return;}
var Class=this.constructor,pluginName=Class.pluginName||Class._fullName,controls;this.off();if(pluginName&&pluginName!=='can_control'){this.element.removeClass(pluginName);}
controls=can.data(this.element,"controls");controls.splice(can.inArray(this,controls),1);can.trigger(this,"destroyed");this.element=null;}});var processors=can.Control.processors,basicProcessor=function(el,event,selector,methodName,control){return binder(el,event,can.Control._shifter(control,methodName),selector);};each(["change","click","contextmenu","dblclick","keydown","keyup","keypress","mousedown","mousemove","mouseout","mouseover","mouseup","reset","resize","scroll","select","submit","focusin","focusout","mouseenter","mouseleave","touchstart","touchmove","touchcancel","touchend","touchleave"],function(v){processors[v]=basicProcessor;});return Control;})(__m3,__m1);var __m20=(function(can){var digitTest=/^\d+$/,keyBreaker=/([^\[\]]+)|(\[\])/g,paramTest=/([^?#]*)(#.*)?$/,prep=function(str){return decodeURIComponent(str.replace(/\+/g," "));};can.extend(can,{deparam:function(params){var data={},pairs,lastPart;if(params&&paramTest.test(params)){pairs=params.split('&'),can.each(pairs,function(pair){var parts=pair.split('='),key=prep(parts.shift()),value=prep(parts.join("=")),current=data;if(key){parts=key.match(keyBreaker);for(var j=0,l=parts.length-1;j<l;j++){if(!current[parts[j]]){current[parts[j]]=digitTest.test(parts[j+1])||parts[j+1]=="[]"?[]:{};}
current=current[parts[j]];}
lastPart=parts.pop();if(lastPart=="[]"){current.push(value);}else{current[lastPart]=value;}}});}
return data;}});return can;})(__m3,__m2);var __m19=(function(can){var
matcher=/\:([\w\.]+)/g,paramsMatcher=/^(?:&[^=]+=[^&]*)+/,makeProps=function(props){var tags=[];can.each(props,function(val,name){tags.push((name==='className'?'class':name)+'="'+
(name==="href"?val:can.esc(val))+'"');});return tags.join(" ");},matchesData=function(route,data){var count=0,i=0,defaults={};for(var name in route.defaults){if(route.defaults[name]===data[name]){defaults[name]=1;count++;}}
for(;i<route.names.length;i++){if(!data.hasOwnProperty(route.names[i])){return-1;}
if(!defaults[route.names[i]]){count++;}}
return count;},onready=!0,location=window.location,wrapQuote=function(str){return(str+'').replace(/([.?*+\^$\[\]\\(){}|\-])/g,"\\$1");},each=can.each,extend=can.extend;can.route=function(url,defaults){defaults=defaults||{};var names=[],test=url.replace(matcher,function(whole,name,i){names.push(name);var next="\\"+(url.substr(i+whole.length,1)||can.route._querySeparator);return"([^"+next+"]"+(defaults[name]?"*":"+")+")";});can.route.routes[url]={test:new RegExp("^"+test+"($|"+wrapQuote(can.route._querySeparator)+")"),route:url,names:names,defaults:defaults,length:url.split('/').length};return can.route;};extend(can.route,{_querySeparator:'&',_paramsMatcher:paramsMatcher,param:function(data,_setRoute){var route,matches=0,matchCount,routeName=data.route,propCount=0;delete data.route;each(data,function(){propCount++;});each(can.route.routes,function(temp,name){matchCount=matchesData(temp,data);if(matchCount>matches){route=temp;matches=matchCount;}
if(matchCount>=propCount){return false;}});if(can.route.routes[routeName]&&matchesData(can.route.routes[routeName],data)===matches){route=can.route.routes[routeName];}
if(route){var cpy=extend({},data),res=route.route.replace(matcher,function(whole,name){delete cpy[name];return data[name]===route.defaults[name]?"":encodeURIComponent(data[name]);}),after;each(route.defaults,function(val,name){if(cpy[name]===val){delete cpy[name];}});after=can.param(cpy);if(_setRoute){can.route.attr('route',route.route);}
return res+(after?can.route._querySeparator+after:"");}
return can.isEmptyObject(data)?"":can.route._querySeparator+can.param(data);},deparam:function(url){var route={length:-1};each(can.route.routes,function(temp,name){if(temp.test.test(url)&&temp.length>route.length){route=temp;}});if(route.length>-1){var
parts=url.match(route.test),start=parts.shift(),remainder=url.substr(start.length-(parts[parts.length-1]===can.route._querySeparator?1:0)),obj=(remainder&&can.route._paramsMatcher.test(remainder))?can.deparam(remainder.slice(1)):{};obj=extend(true,{},route.defaults,obj);each(parts,function(part,i){if(part&&part!==can.route._querySeparator){obj[route.names[i]]=decodeURIComponent(part);}});obj.route=route.route;return obj;}
if(url.charAt(0)!==can.route._querySeparator){url=can.route._querySeparator+url;}
return can.route._paramsMatcher.test(url)?can.deparam(url.slice(1)):{};},data:new can.Observe({}),routes:{},ready:function(val){if(val===false){onready=val;}
if(val===true||onready===true){can.route._setup();setState();}
return can.route;},url:function(options,merge){if(merge){options=extend({},curParams,options)}
return"#!"+can.route.param(options);},link:function(name,options,props,merge){return"<a "+makeProps(extend({href:can.route.url(options,merge)},props))+">"+name+"</a>";},current:function(options){return location.hash=="#!"+can.route.param(options)},_setup:function(){can.bind.call(window,'hashchange',setState);},_getHash:function(){return location.href.split(/#!?/)[1]||"";},_setHash:function(serialized){var path=(can.route.param(serialized,true));location.hash="#!"+path;return path;}});each(['bind','unbind','delegate','undelegate','attr','removeAttr'],function(name){can.route[name]=function(){if(!can.route.data[name]){return;}
return can.route.data[name].apply(can.route.data,arguments);}})
var
timer,curParams,setState=can.route.setState=function(){var hash=can.route._getHash();curParams=can.route.deparam(hash);if(!changingData||hash!==lastHash){can.route.attr(curParams,true);}},lastHash,changingData;can.route.bind("change",function(ev,attr){changingData=1;clearTimeout(timer);timer=setTimeout(function(){changingData=0;var serialized=can.route.data.serialize();lastHash=can.route._setHash(serialized);},1);});can.bind.call(document,"ready",can.route.ready);if((document.readyState==='complete'||document.readyState==="interactive")&&onready){can.route.ready();}
can.route.constructor.canMakeObserve=can.Observe.canMakeObserve;return can.route;})(__m3,__m7,__m20);var __m21=(function(can){can.Control.processors.route=function(el,event,selector,funcName,controller){selector=selector||"";can.route(selector);var batchNum,check=function(ev,attr,how){if(can.route.attr('route')===(selector)&&(ev.batchNum===undefined||ev.batchNum!==batchNum)){batchNum=ev.batchNum;var d=can.route.attr();delete d.route;if(can.isFunction(controller[funcName])){controller[funcName](d);}else{controller[controller[funcName]](d);}}};can.route.bind('change',check);return function(){can.route.unbind('change',check);};};return can;})(__m3,__m19,__m18);window['can']=__m5;})();
!function($){"use strict";$(function(){$.support.transition=(function(){var transitionEnd=(function(){var el=document.createElement('bootstrap'),transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd otransitionend','transition':'transitionend'},name
for(name in transEndEventNames){if(el.style[name]!==undefined){return transEndEventNames[name]}}}())
return transitionEnd&&{end:transitionEnd}})()})}(window.jQuery);!function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.prototype.close=function(e){var $this=$(this),selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
e&&e.preventDefault()
$parent.length||($parent=$this.hasClass('alert')?$this:$this.parent())
$parent.trigger(e=$.Event('close'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent.trigger('closed').remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.on($.support.transition.end,removeElement):removeElement()}
var old=$.fn.alert
$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data('alert')
if(!data)$this.data('alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.alert.data-api',dismiss,Alert.prototype.close)}(window.jQuery);!function($){"use strict";var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.button.defaults,options)}
Button.prototype.setState=function(state){var d='disabled',$el=this.$element,data=$el.data(),val=$el.is('input')?'val':'html'
state=state+'Text'
data.resetText||$el.data('resetText',$el[val]())
$el[val](data[state]||this.options[state])
setTimeout(function(){state=='loadingText'?$el.addClass(d).attr(d,d):$el.removeClass(d).removeAttr(d)},0)}
Button.prototype.toggle=function(){var $parent=this.$element.closest('[data-toggle="buttons-radio"]')
$parent&&$parent.find('.active').removeClass('active')
this.$element.toggleClass('active')}
var old=$.fn.button
$.fn.button=function(option){return this.each(function(){var $this=$(this),data=$this.data('button'),options=typeof option=='object'&&option
if(!data)$this.data('button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
$.fn.button.defaults={loadingText:'loading...'}
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.button.data-api','[data-toggle^=button]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
$btn.button('toggle')})}(window.jQuery);!function($){"use strict";var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.options.pause=='hover'&&this.$element.on('mouseenter',$.proxy(this.pause,this)).on('mouseleave',$.proxy(this.cycle,this))}
Carousel.prototype={cycle:function(e){if(!e)this.paused=false
if(this.interval)clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this},getActiveIndex:function(){this.$active=this.$element.find('.item.active')
this.$items=this.$active.parent().children()
return this.$items.index(this.$active)},to:function(pos){var activeIndex=this.getActiveIndex(),that=this
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding){return this.$element.one('slid',function(){that.to(pos)})}
if(activeIndex==pos){return this.pause().cycle()}
return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]))},pause:function(e){if(!e)this.paused=true
if(this.$element.find('.next, .prev').length&&$.support.transition.end){this.$element.trigger($.support.transition.end)
this.cycle(true)}
clearInterval(this.interval)
this.interval=null
return this},next:function(){if(this.sliding)return
return this.slide('next')},prev:function(){if(this.sliding)return
return this.slide('prev')},slide:function(type,next){var $active=this.$element.find('.item.active'),$next=next||$active[type](),isCycling=this.interval,direction=type=='next'?'left':'right',fallback=type=='next'?'first':'last',that=this,e
this.sliding=true
isCycling&&this.pause()
$next=$next.length?$next:this.$element.find('.item')[fallback]()
e=$.Event('slide',{relatedTarget:$next[0],direction:direction})
if($next.hasClass('active'))return
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
this.$element.one('slid',function(){var $nextIndicator=$(that.$indicators.children()[that.getActiveIndex()])
$nextIndicator&&$nextIndicator.addClass('active')})}
if($.support.transition&&this.$element.hasClass('slide')){this.$element.trigger(e)
if(e.isDefaultPrevented())return
$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
this.$element.one($.support.transition.end,function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger('slid')},0)})}else{this.$element.trigger(e)
if(e.isDefaultPrevented())return
$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger('slid')}
isCycling&&this.cycle()
return this}}
var old=$.fn.carousel
$.fn.carousel=function(option){return this.each(function(){var $this=$(this),data=$this.data('carousel'),options=$.extend({},$.fn.carousel.defaults,typeof option=='object'&&option),action=typeof option=='string'?option:options.slide
if(!data)$this.data('carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
$.fn.carousel.defaults={interval:5000,pause:'hover'}
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
$(document).on('click.carousel.data-api','[data-slide], [data-slide-to]',function(e){var $this=$(this),href,$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')),options=$.extend({},$target.data(),$this.data()),slideIndex
$target.carousel(options)
if(slideIndex=$this.attr('data-slide-to')){$target.data('carousel').pause().to(slideIndex).cycle()}
e.preventDefault()})}(window.jQuery);!function($){"use strict";var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.collapse.defaults,options)
if(this.options.parent){this.$parent=$(this.options.parent)}
this.options.toggle&&this.toggle()}
Collapse.prototype={constructor:Collapse,dimension:function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'},show:function(){var dimension,scroll,actives,hasData
if(this.transitioning||this.$element.hasClass('in'))return
dimension=this.dimension()
scroll=$.camelCase(['scroll',dimension].join('-'))
actives=this.$parent&&this.$parent.find('> .accordion-group > .in')
if(actives&&actives.length){hasData=actives.data('collapse')
if(hasData&&hasData.transitioning)return
actives.collapse('hide')
hasData||actives.data('collapse',null)}
this.$element[dimension](0)
this.transition('addClass',$.Event('show'),'shown')
$.support.transition&&this.$element[dimension](this.$element[0][scroll])},hide:function(){var dimension
if(this.transitioning||!this.$element.hasClass('in'))return
dimension=this.dimension()
this.reset(this.$element[dimension]())
this.transition('removeClass',$.Event('hide'),'hidden')
this.$element[dimension](0)},reset:function(size){var dimension=this.dimension()
this.$element.removeClass('collapse')
[dimension](size||'auto')
[0].offsetWidth
this.$element[size!==null?'addClass':'removeClass']('collapse')
return this},transition:function(method,startEvent,completeEvent){var that=this,complete=function(){if(startEvent.type=='show')that.reset()
that.transitioning=0
that.$element.trigger(completeEvent)}
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
this.transitioning=1
this.$element[method]('in')
$.support.transition&&this.$element.hasClass('collapse')?this.$element.one($.support.transition.end,complete):complete()},toggle:function(){this[this.$element.hasClass('in')?'hide':'show']()}}
var old=$.fn.collapse
$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data('collapse'),options=$.extend({},$.fn.collapse.defaults,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.collapse.defaults={toggle:true}
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href,target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''),option=$(target).data('collapse')?'toggle':$this.data()
$this[$(target).hasClass('in')?'addClass':'removeClass']('collapsed')
$(target).collapse(option)})}(window.jQuery);!function($){"use strict";var toggle='[data-toggle=dropdown]',Dropdown=function(element){var $el=$(element).on('click.dropdown.data-api',this.toggle)
$('html').on('click.dropdown.data-api',function(){$el.parent().removeClass('open')})}
Dropdown.prototype={constructor:Dropdown,toggle:function(e){var $this=$(this),$parent,isActive
if($this.is('.disabled, :disabled'))return
$parent=getParent($this)
isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){if('ontouchstart'in document.documentElement){$('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click',clearMenus)}
$parent.toggleClass('open')}
$this.focus()
return false},keydown:function(e){var $this,$items,$active,$parent,isActive,index
if(!/(38|40|27)/.test(e.keyCode))return
$this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
$parent=getParent($this)
isActive=$parent.hasClass('open')
if(!isActive||(isActive&&e.keyCode==27)){if(e.which==27)$parent.find(toggle).focus()
return $this.click()}
$items=$('[role=menu] li:not(.divider):visible a',$parent)
if(!$items.length)return
index=$items.index($items.filter(':focus'))
if(e.keyCode==38&&index>0)index--
if(e.keyCode==40&&index<$items.length-1)index++
if(!~index)index=0
$items.eq(index).focus()}}
function clearMenus(){$('.dropdown-backdrop').remove()
$(toggle).each(function(){getParent($(this)).removeClass('open')})}
function getParent($this){var selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&/#/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=selector&&$(selector)
if(!$parent||!$parent.length)$parent=$this.parent()
return $parent}
var old=$.fn.dropdown
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('dropdown')
if(!data)$this.data('dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document).on('click.dropdown.data-api',clearMenus).on('click.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()}).on('click.dropdown.data-api',toggle,Dropdown.prototype.toggle).on('keydown.dropdown.data-api',toggle+', [role=menu]',Dropdown.prototype.keydown)}(window.jQuery);!function($){"use strict";var Modal=function(element,options){this.options=options
this.$element=$(element).delegate('[data-dismiss="modal"]','click.dismiss.modal',$.proxy(this.hide,this))
this.options.remote&&this.$element.find('.modal-body').load(this.options.remote)}
Modal.prototype={constructor:Modal,toggle:function(){return this[!this.isShown?'show':'hide']()},show:function(){var that=this,e=$.Event('show')
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(document.body)}
that.$element.show()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in').attr('aria-hidden',false)
that.enforceFocus()
transition?that.$element.one($.support.transition.end,function(){that.$element.focus().trigger('shown')}):that.$element.focus().trigger('shown')})},hide:function(e){e&&e.preventDefault()
var that=this
e=$.Event('hide')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off('focusin.modal')
this.$element.removeClass('in').attr('aria-hidden',true)
$.support.transition&&this.$element.hasClass('fade')?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var that=this
$(document).on('focusin.modal',function(e){if(that.$element[0]!==e.target&&!that.$element.has(e.target).length){that.$element.focus()}})},escape:function(){var that=this
if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.modal',function(e){e.which==27&&that.hide()})}else if(!this.isShown){this.$element.off('keyup.dismiss.modal')}},hideWithTransition:function(){var that=this,timeout=setTimeout(function(){that.$element.off($.support.transition.end)
that.hideModal()},500)
this.$element.one($.support.transition.end,function(){clearTimeout(timeout)
that.hideModal()})},hideModal:function(){var that=this
this.$element.hide()
this.backdrop(function(){that.removeBackdrop()
that.$element.trigger('hidden')})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null},backdrop:function(callback){var that=this,animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body)
this.$backdrop.click(this.options.backdrop=='static'?$.proxy(this.$element[0].focus,this.$element[0]):$.proxy(this.hide,this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one($.support.transition.end,callback):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one($.support.transition.end,callback):callback()}else if(callback){callback()}}}
var old=$.fn.modal
$.fn.modal=function(option){return this.each(function(){var $this=$(this),data=$this.data('modal'),options=$.extend({},$.fn.modal.defaults,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option]()
else if(options.show)data.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr('href'),$target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))),option=$target.data('modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
e.preventDefault()
$target.modal(option).one('hide',function(){$this.focus()})})}(window.jQuery);!function($){"use strict";var Tooltip=function(element,options){this.init('tooltip',element,options)}
Tooltip.prototype={constructor:Tooltip,init:function(type,element,options){var eventIn,eventOut,triggers,trigger,i
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.enabled=true
triggers=this.options.trigger.split(' ')
for(i=triggers.length;i--;){trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){eventIn=trigger=='hover'?'mouseenter':'focus'
eventOut=trigger=='hover'?'mouseleave':'blur'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()},getOptions:function(options){options=$.extend({},$.fn[this.type].defaults,this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options},enter:function(e){var defaults=$.fn[this.type].defaults,options={},self
this._options&&$.each(this._options,function(key,value){if(defaults[key]!=value)options[key]=value},this)
self=$(e.currentTarget)[this.type](options).data(this.type)
if(!self.options.delay||!self.options.delay.show)return self.show()
clearTimeout(this.timeout)
self.hoverState='in'
this.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)},leave:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type)
if(this.timeout)clearTimeout(this.timeout)
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.hoverState='out'
this.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)},show:function(){var $tip,pos,actualWidth,actualHeight,placement,tp,e=$.Event('show')
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip=this.tip()
this.setContent()
if(this.options.animation){$tip.addClass('fade')}
placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
$tip.detach().css({top:0,left:0,display:'block'})
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
pos=this.getPosition()
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight
switch(placement){case'bottom':tp={top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}
break
case'top':tp={top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}
break
case'left':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}
break
case'right':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}
break}
this.applyPlacement(tp,placement)
this.$element.trigger('shown')}},applyPlacement:function(offset,placement){var $tip=this.tip(),width=$tip[0].offsetWidth,height=$tip[0].offsetHeight,actualWidth,actualHeight,delta,replace
$tip.offset(offset).addClass(placement).addClass('in')
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight
replace=true}
if(placement=='bottom'||placement=='top'){delta=0
if(offset.left<0){delta=offset.left*-2
offset.left=0
$tip.offset(offset)
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight}
this.replaceArrow(delta-width+actualWidth,actualWidth,'left')}else{this.replaceArrow(actualHeight-height,actualHeight,'top')}
if(replace)$tip.offset(offset)},replaceArrow:function(delta,dimension,position){this.arrow().css(position,delta?(50*(1-delta/dimension)+"%"):'')},setContent:function(){var $tip=this.tip(),title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')},hide:function(){var that=this,$tip=this.tip(),e=$.Event('hide')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
function removeWithAnimation(){var timeout=setTimeout(function(){$tip.off($.support.transition.end).detach()},500)
$tip.one($.support.transition.end,function(){clearTimeout(timeout)
$tip.detach()})}
$.support.transition&&this.$tip.hasClass('fade')?removeWithAnimation():$tip.detach()
this.$element.trigger('hidden')
return this},fixTitle:function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}},hasContent:function(){return this.getTitle()},getPosition:function(){var el=this.$element[0]
return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():{width:el.offsetWidth,height:el.offsetHeight},this.$element.offset())},getTitle:function(){var title,$e=this.$element,o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title},tip:function(){return this.$tip=this.$tip||$(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var self=e?$(e.currentTarget)[this.type](this._options).data(this.type):this
self.tip().hasClass('in')?self.hide():self.show()},destroy:function(){this.hide().$element.off('.'+this.type).removeData(this.type)}}
var old=$.fn.tooltip
$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data('tooltip'),options=typeof option=='object'&&option
if(!data)$this.data('tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.defaults={animation:true,placement:'top',selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false}
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(window.jQuery);!function($){"use strict";var Popover=function(element,options){this.init('popover',element,options)}
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype,{constructor:Popover,setContent:function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content')[this.options.html?'html':'text'](content)
$tip.removeClass('fade top bottom left right in')},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var content,$e=this.$element,o=this.options
content=(typeof o.content=='function'?o.content.call($e[0]):o.content)||$e.attr('data-content')
return content},tip:function(){if(!this.$tip){this.$tip=$(this.options.template)}
return this.$tip},destroy:function(){this.hide().$element.off('.'+this.type).removeData(this.type)}})
var old=$.fn.popover
$.fn.popover=function(option){return this.each(function(){var $this=$(this),data=$this.data('popover'),options=typeof option=='object'&&option
if(!data)$this.data('popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.popover.Constructor=Popover
$.fn.popover.defaults=$.extend({},$.fn.tooltip.defaults,{placement:'right',trigger:'click',content:'',template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(window.jQuery);!function($){"use strict";function ScrollSpy(element,options){var process=$.proxy(this.process,this),$element=$(element).is('body')?$(window):$(element),href
this.options=$.extend({},$.fn.scrollspy.defaults,options)
this.$scrollElement=$element.on('scroll.scroll-spy.data-api',process)
this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a'
this.$body=$('body')
this.refresh()
this.process()}
ScrollSpy.prototype={constructor:ScrollSpy,refresh:function(){var self=this,$targets
this.offsets=$([])
this.targets=$([])
$targets=this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),$href=/^#\w/.test(href)&&$(href)
return($href&&$href.length&&[[$href.position().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})},process:function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i
if(scrollTop>=maxScroll){return activeTarget!=(i=targets.last()[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}},activate:function(target){var active,selector
this.activeTarget=target
$(this.selector).parent('.active').removeClass('active')
selector=this.selector
+'[data-target="'+target+'"],'
+this.selector+'[href="'+target+'"]'
active=$(selector).parent('li').addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate')}}
var old=$.fn.scrollspy
$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data('scrollspy'),options=typeof option=='object'&&option
if(!data)$this.data('scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.defaults={offset:10}
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
$spy.scrollspy($spy.data())})})}(window.jQuery);!function($){"use strict";var Tab=function(element){this.element=$(element)}
Tab.prototype={constructor:Tab,show:function(){var $this=this.element,$ul=$this.closest('ul:not(.dropdown-menu)'),selector=$this.attr('data-target'),previous,$target,e
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
previous=$ul.find('.active:last a')[0]
e=$.Event('show',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
$target=$(selector)
this.activate($this.parent('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown',relatedTarget:previous})})},activate:function(element,container,callback){var $active=container.find('> .active'),transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one($.support.transition.end,next):next()
$active.removeClass('in')}}
var old=$.fn.tab
$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data('tab')
if(!data)$this.data('tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
$(document).on('click.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
$(this).tab('show')})}(window.jQuery);!function($){"use strict";var Affix=function(element,options){this.options=$.extend({},$.fn.affix.defaults,options)
this.$window=$(window).on('scroll.affix.data-api',$.proxy(this.checkPosition,this)).on('click.affix.data-api',$.proxy(function(){setTimeout($.proxy(this.checkPosition,this),1)},this))
this.$element=$(element)
this.checkPosition()}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var scrollHeight=$(document).height(),scrollTop=this.$window.scrollTop(),position=this.$element.offset(),offset=this.options.offset,offsetBottom=offset.bottom,offsetTop=offset.top,reset='affix affix-top affix-bottom',affix
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top()
if(typeof offsetBottom=='function')offsetBottom=offset.bottom()
affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&scrollTop<=offsetTop?'top':false
if(this.affixed===affix)return
this.affixed=affix
this.unpin=affix=='bottom'?position.top-scrollTop:null
this.$element.removeClass(reset).addClass('affix'+(affix?'-'+affix:''))}
var old=$.fn.affix
$.fn.affix=function(option){return this.each(function(){var $this=$(this),data=$this.data('affix'),options=typeof option=='object'&&option
if(!data)$this.data('affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.affix.Constructor=Affix
$.fn.affix.defaults={offset:0}
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data()
data.offset=data.offset||{}
data.offsetBottom&&(data.offset.bottom=data.offsetBottom)
data.offsetTop&&(data.offset.top=data.offsetTop)
$spy.affix(data)})})}(window.jQuery);
var LZString={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_f:String.fromCharCode,compressToBase64:function(input){if(input==null)return"";var output="";var chr1,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;input=LZString.compress(input);while(i<input.length*2){if(i%2==0){chr1=input.charCodeAt(i/2)>>8;chr2=input.charCodeAt(i/2)&255;if(i/2+1<input.length)
chr3=input.charCodeAt(i/2+1)>>8;else
chr3=NaN;}else{chr1=input.charCodeAt((i-1)/2)&255;if((i+1)/2<input.length){chr2=input.charCodeAt((i+1)/2)>>8;chr3=input.charCodeAt((i+1)/2)&255;}else
chr2=chr3=NaN;}
i+=3;enc1=chr1>>2;enc2=((chr1&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64;}else if(isNaN(chr3)){enc4=64;}
output=output+
LZString._keyStr.charAt(enc1)+LZString._keyStr.charAt(enc2)+
LZString._keyStr.charAt(enc3)+LZString._keyStr.charAt(enc4);}
return output;},decompressFromBase64:function(input){if(input==null)return"";var output="",ol=0,output_,chr1,chr2,chr3,enc1,enc2,enc3,enc4,i=0,f=LZString._f;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<input.length){enc1=LZString._keyStr.indexOf(input.charAt(i++));enc2=LZString._keyStr.indexOf(input.charAt(i++));enc3=LZString._keyStr.indexOf(input.charAt(i++));enc4=LZString._keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;if(ol%2==0){output_=chr1<<8;if(enc3!=64){output+=f(output_|chr2);}
if(enc4!=64){output_=chr3<<8;}}else{output=output+f(output_|chr1);if(enc3!=64){output_=chr2<<8;}
if(enc4!=64){output+=f(output_|chr3);}}
ol+=3;}
return LZString.decompress(output);},compressToUTF16:function(input){if(input==null)return"";var output="",i,c,current,status=0,f=LZString._f;input=LZString.compress(input);for(i=0;i<input.length;i++){c=input.charCodeAt(i);switch(status++){case 0:output+=f((c>>1)+32);current=(c&1)<<14;break;case 1:output+=f((current+(c>>2))+32);current=(c&3)<<13;break;case 2:output+=f((current+(c>>3))+32);current=(c&7)<<12;break;case 3:output+=f((current+(c>>4))+32);current=(c&15)<<11;break;case 4:output+=f((current+(c>>5))+32);current=(c&31)<<10;break;case 5:output+=f((current+(c>>6))+32);current=(c&63)<<9;break;case 6:output+=f((current+(c>>7))+32);current=(c&127)<<8;break;case 7:output+=f((current+(c>>8))+32);current=(c&255)<<7;break;case 8:output+=f((current+(c>>9))+32);current=(c&511)<<6;break;case 9:output+=f((current+(c>>10))+32);current=(c&1023)<<5;break;case 10:output+=f((current+(c>>11))+32);current=(c&2047)<<4;break;case 11:output+=f((current+(c>>12))+32);current=(c&4095)<<3;break;case 12:output+=f((current+(c>>13))+32);current=(c&8191)<<2;break;case 13:output+=f((current+(c>>14))+32);current=(c&16383)<<1;break;case 14:output+=f((current+(c>>15))+32,(c&32767)+32);status=0;break;}}
return output+f(current+32);},decompressFromUTF16:function(input){if(input==null)return"";var output="",current,c,status=0,i=0,f=LZString._f;while(i<input.length){c=input.charCodeAt(i)-32;switch(status++){case 0:current=c<<1;break;case 1:output+=f(current|(c>>14));current=(c&16383)<<2;break;case 2:output+=f(current|(c>>13));current=(c&8191)<<3;break;case 3:output+=f(current|(c>>12));current=(c&4095)<<4;break;case 4:output+=f(current|(c>>11));current=(c&2047)<<5;break;case 5:output+=f(current|(c>>10));current=(c&1023)<<6;break;case 6:output+=f(current|(c>>9));current=(c&511)<<7;break;case 7:output+=f(current|(c>>8));current=(c&255)<<8;break;case 8:output+=f(current|(c>>7));current=(c&127)<<9;break;case 9:output+=f(current|(c>>6));current=(c&63)<<10;break;case 10:output+=f(current|(c>>5));current=(c&31)<<11;break;case 11:output+=f(current|(c>>4));current=(c&15)<<12;break;case 12:output+=f(current|(c>>3));current=(c&7)<<13;break;case 13:output+=f(current|(c>>2));current=(c&3)<<14;break;case 14:output+=f(current|(c>>1));current=(c&1)<<15;break;case 15:output+=f(current|c);status=0;break;}
i++;}
return LZString.decompress(output);},compress:function(uncompressed){if(uncompressed==null)return"";var i,value,context_dictionary={},context_dictionaryToCreate={},context_c="",context_wc="",context_w="",context_enlargeIn=2,context_dictSize=3,context_numBits=2,context_data_string="",context_data_val=0,context_data_position=0,ii,f=LZString._f;for(ii=0;ii<uncompressed.length;ii+=1){context_c=uncompressed.charAt(ii);if(!Object.prototype.hasOwnProperty.call(context_dictionary,context_c)){context_dictionary[context_c]=context_dictSize++;context_dictionaryToCreate[context_c]=true;}
context_wc=context_w+context_c;if(Object.prototype.hasOwnProperty.call(context_dictionary,context_wc)){context_w=context_wc;}else{if(Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)){if(context_w.charCodeAt(0)<256){for(i=0;i<context_numBits;i++){context_data_val=(context_data_val<<1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}}
value=context_w.charCodeAt(0);for(i=0;i<8;i++){context_data_val=(context_data_val<<1)|(value&1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=value>>1;}}else{value=1;for(i=0;i<context_numBits;i++){context_data_val=(context_data_val<<1)|value;if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=0;}
value=context_w.charCodeAt(0);for(i=0;i<16;i++){context_data_val=(context_data_val<<1)|(value&1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=value>>1;}}
context_enlargeIn--;if(context_enlargeIn==0){context_enlargeIn=Math.pow(2,context_numBits);context_numBits++;}
delete context_dictionaryToCreate[context_w];}else{value=context_dictionary[context_w];for(i=0;i<context_numBits;i++){context_data_val=(context_data_val<<1)|(value&1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=value>>1;}}
context_enlargeIn--;if(context_enlargeIn==0){context_enlargeIn=Math.pow(2,context_numBits);context_numBits++;}
context_dictionary[context_wc]=context_dictSize++;context_w=String(context_c);}}
if(context_w!==""){if(Object.prototype.hasOwnProperty.call(context_dictionaryToCreate,context_w)){if(context_w.charCodeAt(0)<256){for(i=0;i<context_numBits;i++){context_data_val=(context_data_val<<1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}}
value=context_w.charCodeAt(0);for(i=0;i<8;i++){context_data_val=(context_data_val<<1)|(value&1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=value>>1;}}else{value=1;for(i=0;i<context_numBits;i++){context_data_val=(context_data_val<<1)|value;if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=0;}
value=context_w.charCodeAt(0);for(i=0;i<16;i++){context_data_val=(context_data_val<<1)|(value&1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=value>>1;}}
context_enlargeIn--;if(context_enlargeIn==0){context_enlargeIn=Math.pow(2,context_numBits);context_numBits++;}
delete context_dictionaryToCreate[context_w];}else{value=context_dictionary[context_w];for(i=0;i<context_numBits;i++){context_data_val=(context_data_val<<1)|(value&1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=value>>1;}}
context_enlargeIn--;if(context_enlargeIn==0){context_enlargeIn=Math.pow(2,context_numBits);context_numBits++;}}
value=2;for(i=0;i<context_numBits;i++){context_data_val=(context_data_val<<1)|(value&1);if(context_data_position==15){context_data_position=0;context_data_string+=f(context_data_val);context_data_val=0;}else{context_data_position++;}
value=value>>1;}
while(true){context_data_val=(context_data_val<<1);if(context_data_position==15){context_data_string+=f(context_data_val);break;}
else context_data_position++;}
return context_data_string;},decompress:function(compressed){if(compressed==null)return"";if(compressed=="")return null;var dictionary=[],next,enlargeIn=4,dictSize=4,numBits=3,entry="",result="",i,w,bits,resb,maxpower,power,c,f=LZString._f,data={string:compressed,val:compressed.charCodeAt(0),position:32768,index:1};for(i=0;i<3;i+=1){dictionary[i]=i;}
bits=0;maxpower=Math.pow(2,2);power=1;while(power!=maxpower){resb=data.val&data.position;data.position>>=1;if(data.position==0){data.position=32768;data.val=data.string.charCodeAt(data.index++);}
bits|=(resb>0?1:0)*power;power<<=1;}
switch(next=bits){case 0:bits=0;maxpower=Math.pow(2,8);power=1;while(power!=maxpower){resb=data.val&data.position;data.position>>=1;if(data.position==0){data.position=32768;data.val=data.string.charCodeAt(data.index++);}
bits|=(resb>0?1:0)*power;power<<=1;}
c=f(bits);break;case 1:bits=0;maxpower=Math.pow(2,16);power=1;while(power!=maxpower){resb=data.val&data.position;data.position>>=1;if(data.position==0){data.position=32768;data.val=data.string.charCodeAt(data.index++);}
bits|=(resb>0?1:0)*power;power<<=1;}
c=f(bits);break;case 2:return"";}
dictionary[3]=c;w=result=c;while(true){if(data.index>data.string.length){return"";}
bits=0;maxpower=Math.pow(2,numBits);power=1;while(power!=maxpower){resb=data.val&data.position;data.position>>=1;if(data.position==0){data.position=32768;data.val=data.string.charCodeAt(data.index++);}
bits|=(resb>0?1:0)*power;power<<=1;}
switch(c=bits){case 0:bits=0;maxpower=Math.pow(2,8);power=1;while(power!=maxpower){resb=data.val&data.position;data.position>>=1;if(data.position==0){data.position=32768;data.val=data.string.charCodeAt(data.index++);}
bits|=(resb>0?1:0)*power;power<<=1;}
dictionary[dictSize++]=f(bits);c=dictSize-1;enlargeIn--;break;case 1:bits=0;maxpower=Math.pow(2,16);power=1;while(power!=maxpower){resb=data.val&data.position;data.position>>=1;if(data.position==0){data.position=32768;data.val=data.string.charCodeAt(data.index++);}
bits|=(resb>0?1:0)*power;power<<=1;}
dictionary[dictSize++]=f(bits);c=dictSize-1;enlargeIn--;break;case 2:return result;}
if(enlargeIn==0){enlargeIn=Math.pow(2,numBits);numBits++;}
if(dictionary[c]){entry=dictionary[c];}else{if(c===dictSize){entry=w+w.charAt(0);}else{return null;}}
result+=entry;dictionary[dictSize++]=w+entry.charAt(0);enlargeIn--;w=entry;if(enlargeIn==0){enlargeIn=Math.pow(2,numBits);numBits++;}}}};if(typeof module!=='undefined'&&module!=null){module.exports=LZString}
var Gcb=(function(publish){"use strict";publish.Form=can.Control({'submit':function(el,event){event.preventDefault();window.location.hash=can.route.param({'url':this.element.find('input[name=url]').val()});},'go/:url route':function(data){this.element.find('input[name=url]').val(data['url'])}});publish.BackendManager=can.Control({'defaults':{'backend':['http://webcache.googleusercontent.com/search?q=cache%3Ahttp%3A%2F%2Fcache.nevkontakte.com%2Fproxy.html']}},{'go/:url route':function(data){var backend=this.options.backend[Math.floor(Math.random()*this.options.backend.length)];setTimeout(function(){window.location.href=backend+can.route.url(data);},1)}});publish.Bookmarklet=can.Control({init:function(){var bookmarklet=function(){var loader=document.createElement("script");loader.setAttribute("type","text/javascript");loader.setAttribute("src","http://cache.nevkontakte.com/bookmarklet.js");if(document.body!=null){document.body.appendChild(loader);}else{document.appendChild(loader);}};this.element.attr("href","javascript:void("+encodeURIComponent(bookmarklet.toString())+"())");}});publish.UserVoice=can.Control({init:function(){(function(){var uv=document.createElement('script');uv.type='text/javascript';uv.async=true;uv.src='//widget.uservoice.com/5qPiGp5jMVO57L4MPuGw.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(uv,s)})();var uv=window.UserVoice||[];uv.push(['set',{accent_color:'#448dd6',trigger_color:'white',trigger_background_color:'#6aba2e',mode:'smartvote'}]);window.UserVoice=uv;},showModal:function(){$('[data-contact-trigger]').each(function(){window.UserVoice.push(['show',{target:this}]);});},hideModal:function(){window.UserVoice.push(['hide']);},'route':function(){this.hideModal();},':page route':function(data){if(data['page']=='contact'){this.showModal();}else{this.hideModal();}}});publish.Modal=can.Control({defaults:{page:null,backdrop:'static',show:false}},{init:function(el){el.modal(this.options);},showModal:function(){this.element.modal('show');},hideModal:function(){this.element.modal('hide');},'route':function(){this.hideModal();},':page route':function(data){if(data['page']===this.options.page){this.showModal();}else{this.hideModal();}}});publish.Navbar=can.Control({init:function(el){el.attr('class','navbar navbar-static-top navbar-inverse');$('<!--suppress HtmlUnknownAnchorTarget --><div class="navbar-inner">\
                <div class="container">\
                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                </a>\
                \
                <a class="brand" href="http://cache.nevkontakte.com/">Google Cache Browser</a>\
                <form class="gcb-form navbar-search pull-left">\
                    <div class="input-append">\
                    <input type="text" class="span4" placeholder="Enter web page URL" name="url">\
                    <button type="submit" class="btn">\
                    <i class="icon-long-arrow-right"></i>\
                    </button>\
                    </div>\
                </form>\
            <div class="nav-collapse collapse">\
                <ul class="nav nav-pills pull-right">\
                <li><a href="http://cache.nevkontakte.com/#!about"><i class="icon-info-sign"></i> About</a></li>\
                <li><a href="http://cache.nevkontakte.com/#!faq"><i class="icon-question-sign"></i> F.A.Q.</a></li>\
                <li><a href="http://cache.nevkontakte.com/#!contact" data-contact-trigger><i class="icon-envelope"></i> Contact</a></li>\
                <li><a href="https://github.com/nevkontakte/gcb-js"><i class="icon-github"></i> GitHub</a></li>\
                </ul>\
                </div>\
            </div>').appendTo(el);new publish.Form($('.gcb-form',el));}});publish.Nav=can.Control({init:function(el){this.entries=$('.nav li',el);},updateClass:function(page){this.entries.removeClass('active');this.entries.filter('li:has(a[href$="#!'+page+'"])').addClass('active');},':page route':function(data){this.updateClass(data['page'])},'route':function(){this.updateClass('');}});publish.Viewport=can.Control({init:function(el,options){this.navbar=options.navbar;this.initial=window.location.href.split(location.hash||"#")[0];this.foreignAlert=$('<div class="alert"><strong>Warning!</strong> You have leaved Google cache and currently viewing some other pages.</div>');this.foreignAlert.hide();this.view=$('<iframe style="border: none" src="'+this.initial+'">');this.view.css('background','#FFF');this.view.css('width','100%');this.view.load($.proxy(function(){try{this.view.contents();this.foreignAlert.is(':visible')&&this.foreignAlert.slideUp({step:$.proxy(this.resize,this)});}catch(e){this.foreignAlert.is(':visible')||this.foreignAlert.slideDown({step:$.proxy(this.resize,this)});}},this));this.card=$('<div class="card">');this.element.append(this.card.append(this.foreignAlert).append(this.view));this.element.addClass('container gcb-viewport');},'resize':function(){this.view.height($(window).height()
-this.element.offset().top
-(this.card.outerHeight(true)-this.card.height())
-(this.foreignAlert.is(':visible')?this.foreignAlert.outerHeight(true):0));},replaceContent:function(data,watch){var doc=this.view.get(0).contentDocument;if(doc==null){this.view.attr('src','about:blank');setTimeout($.proxy(function(){this.replaceContent(data)},this),0);return;}
doc.open();doc.write(data);doc.close();$(doc).find('div:first').css('margin','0').css('padding','0');if(watch!==false){this.watchLinks();}},watchLinks:function(){var doc=$(this.view.get(0).contentDocument);doc.find('body').on('click','a',function(){can.route.attr('url',this.href);return false;});},errorPage:function(content){return'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">'+'<link href="http://cache.nevkontakte.com/assets/gcb-js.css" rel="stylesheet" type="text/css">'+'</head><body class="viewport">'+
content+'</body></html>'},errorNotFound:function(url){return this.errorPage('<div class="hero-unit error">'+'<h1>Page is not cached <small>404 :-(</small></h1>'+'<p>No cached copy of page <a href="'+url+'" target="_blank">'+url+'</a> was found in Google\'s cache. You may try to open it directly to view recent version of the page.</p>'+'</div>');},errorUnknown:function(url,error){var report={'url':url,'location':{'href':document.location.href,'hash':document.location.hash},'userAgent':window.navigator.userAgent,'readyState':error.readyState,'status':error.status,'statusText':error.statusText};report=LZString.compressToBase64(report.toSource());report=[].concat.apply([],report.split('').map(function(x,i){return i%80?[]:report.slice(i,i+80)})).join('\n');return this.errorPage('<div class="hero-unit error">'+'<h1>Ooops, that\'s embarrassing <small>:-[</small></h1>'+'<p>Google Cache Browser failed to load cached version of page you requested. You may try to <a href="https://google.com/search?q=cache:'+encodeURIComponent(url)+'" target="_blank">open</a> it directly from Google\'s cache.</p>'+'<p>Please, take a minute to submit us feedback to let us investigate the case quoting following code in your report: </p>'+'<textarea class="input-block-level" rows="7"> '+report+'</textarea>'+'</div>');},loadError:function(url,error){if(error.status===404){this.replaceContent(this.errorNotFound(url),false);}else{this.replaceContent(this.errorUnknown(url,error),false)}},'{window} resize':function(){this.resize();},'go/:url route':function(data){var doc=this.view.get(0).contentDocument;if(data['url']==""){doc.location.replace(this.initial);}
var query="http://webcache.googleusercontent.com/search?q="+encodeURIComponent("cache:"+data['url']);if(data['url'].match(/^https?:\/\/webcache\.googleusercontent\.com/)){query=data['url'];}
$.ajax(query,{"context":this,"success":this.replaceContent,"error":function(error){this.loadError(data['url'],error)},"dataType":"html"});}});publish.Navigator=can.Control({init:function(el){$('#greetings').remove();$('body *').hide();var meta=[{'name':'viewport','content':'width=device-width, initial-scale=1.0'}];var head=$('head');for(var i=0;i<meta.length;i++){var tag=$('<meta>');tag.attr(meta[i]);head.append(tag);}
var navbar=new publish.Navbar($('<div>'));el.append(navbar.element);var viewport=new publish.Viewport($('<div>'),{navbar:navbar});el.append(viewport.element);viewport.resize();can.route.ready(true)}});return publish;}(Gcb||{}));
window.Gcb.backends=(window.Gcb.backends||[]).concat(['http://webcache.googleusercontent.com/search?q=cache%3Ahttp%3A%2F%2Fcache.nevkontakte.com%2Fproxy.html']);
$(document).ready(function(){"use strict";(function(d,w,c){(w[c]=w[c]||[]).push(function(){try{w.yaCounter11894347=new Ya.Metrika({id:11894347,webvisor:true,clickmap:true,trackLinks:true,accurateTrackBounce:true,trackHash:true});}catch(e){}});var n=d.getElementsByTagName("script")[0],s=d.createElement("script"),f=function(){n.parentNode.insertBefore(s,n);};s.type="text/javascript";s.async=true;s.src=(d.location.protocol=="https:"?"https:":"http:")+"//mc.yandex.ru/metrika/watch.js";if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",f,false);}else{f();}})(document,window,"yandex_metrika_callbacks");});
//@ sourceMappingURL=gcb-js.map.js