this.window&&(window.global=window),Object.assign(global,{g:global,skin:{},unit:{}}),(()=>{global.state={_raw:{},initEmpty:function(){state._raw={page:{},models:{},articles:{},male:[],female:[],news:[]}},setPage:function(t){e.page=t},addModel:t,addModels:function(e){e.forEach(t)},addArticle:function(t){e.articles[t.id]=t},setMaleList:function(t){e.male=t},setFemaleList:function(t){e.female=t},setNewsList:function(t){e.news=t},getPage:function(){return e.page},getMaleModels:function(){return[{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/man1.jpg",height:{cm:189,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Andrew Z",photo:"http://localhost:8000/images/man2.jpg",height:{cm:178,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Johny Y",photo:"http://localhost:8000/images/man3.jpg",height:{cm:198,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Sergey K",photo:"http://localhost:8000/images/man4.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/man5.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/man6.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/man7.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/man8.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}}]},getFemaleModels:function(){return[{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/woman1.jpg",height:{cm:189,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Andrew Z",photo:"http://localhost:8000/images/woman2.jpg",height:{cm:178,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Johny Y",photo:"http://localhost:8000/images/woman3.jpg",height:{cm:198,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Sergey K",photo:"http://localhost:8000/images/woman4.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/woman5.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/woman6.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/woman7.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}},{url:"/",name:"Marko Polo",photo:"http://localhost:8000/images/woman8.jpg",height:{cm:10,inch:"5' 9.5\""},chest:{cm:10,inch:'33"'},waist:{cm:10,inch:'24.5"'},hips:{cm:10,inch:'35.5"'}}]}};let e=state._raw;function t(t){e.models[t.id]=t}})(),(()=>{global.nav={urlFor:{},page:{},generateUrl:function(t){if("main"===t.type||"about"===t.type||"join"===t.type)return e[t.type]},parseUrl:function(e){const[i,r]=e.split("?"),a=i.slice(1).split("/"),[o,s,l]=a;return o?"about"===o?s?t.notFound:t.about:"contact"===o?s?t.notFound:t.contact:"join"===o?s?t.notFound:t.join:"news"===o?s?l?t.notFound:t.article(s):t.news:"men"===o||"women"===o?s?l?t.notFound:t.model(n(o),s):t.modelsList(n(o)):t.notFound:t.main}};const e={main:"/",about:"/about",contact:"/contact",join:"/join",news:"/news",article:e=>`/news/${e}`,modelsList:e=>`/${genderSlug(e)}`,model:(e,t)=>`/${genderSlug(e)}/${t}`},t={main:{type:"main"},about:{type:"about"},contact:{type:"contact"},join:{type:"join"},news:{type:"news"},article:e=>({type:"article",articleId:e}),modelsList:e=>({type:"modelsList",gender:e}),model:(e,t)=>({type:"model",gender:e,modelId:t}),notFound:{type:"notFound"}};function n(e){return"men"===e?1:0}})(),global.q={},(()=>{Object.assign(q,{attr:t,act:function(t){return(t=Array.isArray(t)?t:[t])[e]=!0,t},onBlur:n("onblur"),onChange:n("onchange"),onClick:n("onclick"),onFocus:n("onfocus"),onInput:n("oninput"),onKeyDown:n("onkeydown"),onKeyUp:n("onkeyup"),onMouseDown:n("onmousedown"),onMouseUp:n("onmouseup"),onTouchEnd:n("ontouchend"),onTouchStart:n("ontouchstart")});const e="__q_is_act";function t(e,t){return`${e}="${t}"`}function n(e){return(...n)=>t(e,function(e){const t=e[0];params=e.slice(1);const n=params.filter(i).map(e=>e[0]),r=[].concat(...params).map((a=n,e=>"number"==typeof e||"event"===e||"this"===e||a.includes(e)?e:JSON.stringify(e))).join(", ");var a;return`${t}(${r})`}(n))}function i(t){return Array.isArray(t)&&t[e]}})(),(()=>{Object.assign(q,{html:function(e,...t){let n="";return e.forEach((e,i)=>{let r=t[i];Array.isArray(r)&&(r=r.join("")),n+=e+(r||0===r?r:"")}),n}})})(),(()=>{this.befall=function(){const e=[],t=function(){const e=this,t=arguments;if("function"!=typeof t[0]){let n=!1;return e.forEach(e=>{!0===e.apply(null,t)&&(n=!0)}),n}[].slice.call(t).forEach(t=>e.push(t))}.bind(e);return t.off=function(e){const t=this;e?function(e,t){for(;;){const n=e.indexOf(t);if(!(n>=0))break;e.splice(n,-1)}}(t,e):t.length=0}.bind(e),t._subscribers=e,t._args=Array.from(arguments),t}})(),window.$=document.querySelector.bind(document),window.$$=document.querySelectorAll.bind(document),HTMLElement.prototype.$=HTMLElement.prototype.querySelector,HTMLElement.prototype.$$=HTMLElement.prototype.querySelectorAll,function(){"use strict";var e=function(t){if(!(this instanceof e))return new e(t);if(this.version=1,this.support=!("undefined"==typeof File||"undefined"==typeof Blob||"undefined"==typeof FileList||!Blob.prototype.webkitSlice&&!Blob.prototype.mozSlice&&!Blob.prototype.slice),!this.support)return!1;var n=this;n.files=[],n.defaults={chunkSize:1048576,forceChunkSize:!1,simultaneousUploads:3,fileParameterName:"file",chunkNumberParameterName:"resumableChunkNumber",chunkSizeParameterName:"resumableChunkSize",currentChunkSizeParameterName:"resumableCurrentChunkSize",totalSizeParameterName:"resumableTotalSize",typeParameterName:"resumableType",identifierParameterName:"resumableIdentifier",fileNameParameterName:"resumableFilename",relativePathParameterName:"resumableRelativePath",totalChunksParameterName:"resumableTotalChunks",throttleProgressCallbacks:.5,query:{},headers:{},preprocess:null,method:"multipart",uploadMethod:"POST",testMethod:"GET",prioritizeFirstAndLastChunk:!1,target:"/",testTarget:null,parameterNamespace:"",testChunks:!0,generateUniqueIdentifier:null,getTarget:null,maxChunkRetries:100,chunkRetryInterval:void 0,permanentErrors:[400,404,415,500,501],maxFiles:void 0,withCredentials:!1,xhrTimeout:0,clearInput:!0,chunkFormat:"blob",setChunkTypeFromFile:!1,maxFilesErrorCallback:function(e,t){var i=n.getOpt("maxFiles");alert("Please upload no more than "+i+" file"+(1===i?"":"s")+" at a time.")},minFileSize:1,minFileSizeErrorCallback:function(e,t){alert(e.fileName||e.name+" is too small, please upload files larger than "+i.formatSize(n.getOpt("minFileSize"))+".")},maxFileSize:void 0,maxFileSizeErrorCallback:function(e,t){alert(e.fileName||e.name+" is too large, please upload files less than "+i.formatSize(n.getOpt("maxFileSize"))+".")},fileType:[],fileTypeErrorCallback:function(e,t){alert(e.fileName||e.name+" has type not allowed, please upload files of type "+n.getOpt("fileType")+".")}},n.opts=t||{},n.getOpt=function(t){var n=this;if(t instanceof Array){var r={};return i.each(t,function(e){r[e]=n.getOpt(e)}),r}if(n instanceof f){if(void 0!==n.opts[t])return n.opts[t];n=n.fileObj}if(n instanceof u){if(void 0!==n.opts[t])return n.opts[t];n=n.resumableObj}if(n instanceof e)return void 0!==n.opts[t]?n.opts[t]:n.defaults[t]},n.events=[],n.on=function(e,t){n.events.push(e.toLowerCase(),t)},n.fire=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);var i=e[0].toLowerCase();for(t=0;t<=n.events.length;t+=2)n.events[t]==i&&n.events[t+1].apply(n,e.slice(1)),"catchall"==n.events[t]&&n.events[t+1].apply(null,e);"fileerror"==i&&n.fire("error",e[2],e[1]),"fileprogress"==i&&n.fire("progress")};var i={stopEvent:function(e){e.stopPropagation(),e.preventDefault()},each:function(e,t){if(void 0!==e.length){for(var n=0;n<e.length;n++)if(!1===t(e[n]))return}else for(n in e)if(!1===t(n,e[n]))return},generateUniqueIdentifier:function(e,t){var i=n.getOpt("generateUniqueIdentifier");if("function"==typeof i)return i(e,t);var r=e.webkitRelativePath||e.fileName||e.name;return e.size+"-"+r.replace(/[^0-9a-zA-Z_-]/gim,"")},contains:function(e,t){var n=!1;return i.each(e,function(e){return e!=t||(n=!0,!1)}),n},formatSize:function(e){return e<1024?e+" bytes":e<1048576?(e/1024).toFixed(0)+" KB":e<1073741824?(e/1024/1024).toFixed(1)+" MB":(e/1024/1024/1024).toFixed(1)+" GB"},getTarget:function(e,t){var i=n.getOpt("target");return"test"===e&&n.getOpt("testTarget")&&(i="/"===n.getOpt("testTarget")?n.getOpt("target"):n.getOpt("testTarget")),"function"==typeof i?i(t):i+(i.indexOf("?")<0?"?":"&")+t.join("&")}},r=function(e){i.stopEvent(e),e.dataTransfer&&e.dataTransfer.items?l(e.dataTransfer.items,e):e.dataTransfer&&e.dataTransfer.files&&l(e.dataTransfer.files,e)},a=function(e){e.preventDefault()};function o(e,t,n,i){var r,a,l,c,u;return e.isFile?e.file(function(e){e.relativePath=t+e.name,n.push(e),i()}):(e.isDirectory?r=e:e instanceof File&&n.push(e),"function"==typeof e.webkitGetAsEntry&&(r=e.webkitGetAsEntry()),r&&r.isDirectory?(a=r,l=t+r.name+"/",c=n,u=i,void a.createReader().readEntries(function(e){if(!e.length)return u();s(e.map(function(e){return o.bind(null,e,l,c)}),u)})):("function"==typeof e.getAsFile&&(e=e.getAsFile())instanceof File&&(e.relativePath=t+e.name,n.push(e)),void i()))}function s(e,t){if(!e||0===e.length)return t();e[0](function(){s(e.slice(1),t)})}function l(e,t){if(e.length){n.fire("beforeAdd");var i=[];s(Array.prototype.map.call(e,function(e){return o.bind(null,e,"",i)}),function(){i.length&&c(i,t)})}}var c=function(e,t){var r=0,a=n.getOpt(["maxFiles","minFileSize","maxFileSize","maxFilesErrorCallback","minFileSizeErrorCallback","maxFileSizeErrorCallback","fileType","fileTypeErrorCallback"]);if(void 0!==a.maxFiles&&a.maxFiles<e.length+n.files.length){if(1!==a.maxFiles||1!==n.files.length||1!==e.length)return a.maxFilesErrorCallback(e,r++),!1;n.removeFile(n.files[0])}var o=[],s=[],l=e.length,c=function(){if(!--l){if(!o.length&&!s.length)return;window.setTimeout(function(){n.fire("filesAdded",o,s)},0)}};i.each(e,function(e){var l=e.name,f=e.type;if(a.fileType.length>0){var h=!1;for(var m in a.fileType){a.fileType[m]=a.fileType[m].replace(/\s/g,"").toLowerCase();var p=(a.fileType[m].match(/^[^.][^/]+$/)?".":"")+a.fileType[m];if(l.substr(-1*p.length)===p||-1!==p.indexOf("/")&&(-1!==p.indexOf("*")&&f.substr(0,p.indexOf("*"))===p.substr(0,p.indexOf("*"))||f===p)){h=!0;break}}if(!h)return a.fileTypeErrorCallback(e,r++),!1}if(void 0!==a.minFileSize&&e.size<a.minFileSize)return a.minFileSizeErrorCallback(e,r++),!1;if(void 0!==a.maxFileSize&&e.size>a.maxFileSize)return a.maxFileSizeErrorCallback(e,r++),!1;function d(i){n.getFromUniqueIdentifier(i)?s.push(e):function(){e.uniqueIdentifier=i;var r=new u(n,e,i);n.files.push(r),o.push(r),r.container=void 0!==t?t.srcElement:null,window.setTimeout(function(){n.fire("fileAdded",r,t)},0)}(),c()}var g=i.generateUniqueIdentifier(e,t);g&&"function"==typeof g.then?g.then(function(e){d(e)},function(){c()}):d(g)})};function u(e,t,n){var r=this;r.opts={},r.getOpt=e.getOpt,r._prevProgress=0,r.resumableObj=e,r.file=t,r.fileName=t.fileName||t.name,r.size=t.size,r.relativePath=t.relativePath||t.webkitRelativePath||r.fileName,r.uniqueIdentifier=n,r._pause=!1,r.container="";var a=void 0!==n,o=function(e,t){switch(e){case"progress":r.resumableObj.fire("fileProgress",r,t);break;case"error":r.abort(),a=!0,r.chunks=[],r.resumableObj.fire("fileError",r,t);break;case"success":if(a)return;r.resumableObj.fire("fileProgress",r),r.isComplete()&&r.resumableObj.fire("fileSuccess",r,t);break;case"retry":r.resumableObj.fire("fileRetry",r)}};return r.chunks=[],r.abort=function(){var e=0;i.each(r.chunks,function(t){"uploading"==t.status()&&(t.abort(),e++)}),e>0&&r.resumableObj.fire("fileProgress",r)},r.cancel=function(){var e=r.chunks;r.chunks=[],i.each(e,function(e){"uploading"==e.status()&&(e.abort(),r.resumableObj.uploadNextChunk())}),r.resumableObj.removeFile(r),r.resumableObj.fire("fileProgress",r)},r.retry=function(){r.bootstrap();var e=!1;r.resumableObj.on("chunkingComplete",function(){e||r.resumableObj.upload(),e=!0})},r.bootstrap=function(){r.abort(),a=!1,r.chunks=[],r._prevProgress=0;for(var e=r.getOpt("forceChunkSize")?Math.ceil:Math.floor,t=Math.max(e(r.file.size/r.getOpt("chunkSize")),1),n=0;n<t;n++)!function(e){window.setTimeout(function(){r.chunks.push(new f(r.resumableObj,r,e,o)),r.resumableObj.fire("chunkingProgress",r,e/t)},0)}(n);window.setTimeout(function(){r.resumableObj.fire("chunkingComplete",r)},0)},r.progress=function(){if(a)return 1;var e=0,t=!1;return i.each(r.chunks,function(n){"error"==n.status()&&(t=!0),e+=n.progress(!0)}),e=t?1:e>.99999?1:e,e=Math.max(r._prevProgress,e),r._prevProgress=e,e},r.isUploading=function(){var e=!1;return i.each(r.chunks,function(t){if("uploading"==t.status())return e=!0,!1}),e},r.isComplete=function(){var e=!1;return i.each(r.chunks,function(t){var n=t.status();if("pending"==n||"uploading"==n||1===t.preprocessState)return e=!0,!1}),!e},r.pause=function(e){r._pause=void 0===e?!r._pause:e},r.isPaused=function(){return r._pause},r.resumableObj.fire("chunkingStart",r),r.bootstrap(),this}function f(e,t,n,r){var a=this;a.opts={},a.getOpt=e.getOpt,a.resumableObj=e,a.fileObj=t,a.fileObjSize=t.size,a.fileObjType=t.file.type,a.offset=n,a.callback=r,a.lastProgressCallback=new Date,a.tested=!1,a.retries=0,a.pendingRetry=!1,a.preprocessState=0;var o=a.getOpt("chunkSize");return a.loaded=0,a.startByte=a.offset*o,a.endByte=Math.min(a.fileObjSize,(a.offset+1)*o),a.fileObjSize-a.endByte<o&&!a.getOpt("forceChunkSize")&&(a.endByte=a.fileObjSize),a.xhr=null,a.test=function(){a.xhr=new XMLHttpRequest;var e=function(e){a.tested=!0;var t=a.status();"success"==t?(a.callback(t,a.message()),a.resumableObj.uploadNextChunk()):a.send()};a.xhr.addEventListener("load",e,!1),a.xhr.addEventListener("error",e,!1),a.xhr.addEventListener("timeout",e,!1);var t=[],n=a.getOpt("parameterNamespace"),r=a.getOpt("query");"function"==typeof r&&(r=r(a.fileObj,a)),i.each(r,function(e,i){t.push([encodeURIComponent(n+e),encodeURIComponent(i)].join("="))}),t=t.concat([["chunkNumberParameterName",a.offset+1],["chunkSizeParameterName",a.getOpt("chunkSize")],["currentChunkSizeParameterName",a.endByte-a.startByte],["totalSizeParameterName",a.fileObjSize],["typeParameterName",a.fileObjType],["identifierParameterName",a.fileObj.uniqueIdentifier],["fileNameParameterName",a.fileObj.fileName],["relativePathParameterName",a.fileObj.relativePath],["totalChunksParameterName",a.fileObj.chunks.length]].filter(function(e){return a.getOpt(e[0])}).map(function(e){return[n+a.getOpt(e[0]),encodeURIComponent(e[1])].join("=")})),a.xhr.open(a.getOpt("testMethod"),i.getTarget("test",t)),a.xhr.timeout=a.getOpt("xhrTimeout"),a.xhr.withCredentials=a.getOpt("withCredentials");var o=a.getOpt("headers");"function"==typeof o&&(o=o(a.fileObj,a)),i.each(o,function(e,t){a.xhr.setRequestHeader(e,t)}),a.xhr.send(null)},a.preprocessFinished=function(){a.preprocessState=2,a.send()},a.send=function(){var e=a.getOpt("preprocess");if("function"==typeof e)switch(a.preprocessState){case 0:return a.preprocessState=1,void e(a);case 1:return}if(!a.getOpt("testChunks")||a.tested){a.xhr=new XMLHttpRequest,a.xhr.upload.addEventListener("progress",function(e){new Date-a.lastProgressCallback>1e3*a.getOpt("throttleProgressCallbacks")&&(a.callback("progress"),a.lastProgressCallback=new Date),a.loaded=e.loaded||0},!1),a.loaded=0,a.pendingRetry=!1,a.callback("progress");var t=function(e){var t=a.status();if("success"==t||"error"==t)a.callback(t,a.message()),a.resumableObj.uploadNextChunk();else{a.callback("retry",a.message()),a.abort(),a.retries++;var n=a.getOpt("chunkRetryInterval");void 0!==n?(a.pendingRetry=!0,setTimeout(a.send,n)):a.send()}};a.xhr.addEventListener("load",t,!1),a.xhr.addEventListener("error",t,!1),a.xhr.addEventListener("timeout",t,!1);var n=[["chunkNumberParameterName",a.offset+1],["chunkSizeParameterName",a.getOpt("chunkSize")],["currentChunkSizeParameterName",a.endByte-a.startByte],["totalSizeParameterName",a.fileObjSize],["typeParameterName",a.fileObjType],["identifierParameterName",a.fileObj.uniqueIdentifier],["fileNameParameterName",a.fileObj.fileName],["relativePathParameterName",a.fileObj.relativePath],["totalChunksParameterName",a.fileObj.chunks.length]].filter(function(e){return a.getOpt(e[0])}).reduce(function(e,t){return e[a.getOpt(t[0])]=t[1],e},{}),r=a.getOpt("query");"function"==typeof r&&(r=r(a.fileObj,a)),i.each(r,function(e,t){n[e]=t});var o=a.fileObj.file.slice?"slice":a.fileObj.file.mozSlice?"mozSlice":a.fileObj.file.webkitSlice?"webkitSlice":"slice",s=a.fileObj.file[o](a.startByte,a.endByte,a.getOpt("setChunkTypeFromFile")?a.fileObj.file.type:""),l=null,c=[],u=a.getOpt("parameterNamespace");if("octet"===a.getOpt("method"))l=s,i.each(n,function(e,t){c.push([encodeURIComponent(u+e),encodeURIComponent(t)].join("="))});else if(l=new FormData,i.each(n,function(e,t){l.append(u+e,t),c.push([encodeURIComponent(u+e),encodeURIComponent(t)].join("="))}),"blob"==a.getOpt("chunkFormat"))l.append(u+a.getOpt("fileParameterName"),s,a.fileObj.fileName);else if("base64"==a.getOpt("chunkFormat")){var f=new FileReader;f.onload=function(e){l.append(u+a.getOpt("fileParameterName"),f.result),a.xhr.send(l)},f.readAsDataURL(s)}var h=i.getTarget("upload",c),m=a.getOpt("uploadMethod");a.xhr.open(m,h),"octet"===a.getOpt("method")&&a.xhr.setRequestHeader("Content-Type","application/octet-stream"),a.xhr.timeout=a.getOpt("xhrTimeout"),a.xhr.withCredentials=a.getOpt("withCredentials");var p=a.getOpt("headers");"function"==typeof p&&(p=p(a.fileObj,a)),i.each(p,function(e,t){a.xhr.setRequestHeader(e,t)}),"blob"==a.getOpt("chunkFormat")&&a.xhr.send(l)}else a.test()},a.abort=function(){a.xhr&&a.xhr.abort(),a.xhr=null},a.status=function(){return a.pendingRetry?"uploading":a.xhr?a.xhr.readyState<4?"uploading":200==a.xhr.status||201==a.xhr.status?"success":i.contains(a.getOpt("permanentErrors"),a.xhr.status)||a.retries>=a.getOpt("maxChunkRetries")?"error":(a.abort(),"pending"):"pending"},a.message=function(){return a.xhr?a.xhr.responseText:""},a.progress=function(e){void 0===e&&(e=!1);var t=e?(a.endByte-a.startByte)/a.fileObjSize:1;if(a.pendingRetry)return 0;switch(a.xhr&&a.xhr.status||(t*=.95),a.status()){case"success":case"error":return 1*t;case"pending":return 0*t;default:return a.loaded/(a.endByte-a.startByte)*t}},this}return n.uploadNextChunk=function(){var e=!1;if(n.getOpt("prioritizeFirstAndLastChunk")&&(i.each(n.files,function(t){return t.chunks.length&&"pending"==t.chunks[0].status()&&0===t.chunks[0].preprocessState?(t.chunks[0].send(),e=!0,!1):t.chunks.length>1&&"pending"==t.chunks[t.chunks.length-1].status()&&0===t.chunks[t.chunks.length-1].preprocessState?(t.chunks[t.chunks.length-1].send(),e=!0,!1):void 0}),e))return!0;if(i.each(n.files,function(t){if(!1===t.isPaused()&&i.each(t.chunks,function(t){if("pending"==t.status()&&0===t.preprocessState)return t.send(),e=!0,!1}),e)return!1}),e)return!0;var t=!1;return i.each(n.files,function(e){if(!e.isComplete())return t=!0,!1}),t||n.fire("complete"),!1},n.assignBrowse=function(e,t){void 0===e.length&&(e=[e]),i.each(e,function(e){var i;"INPUT"===e.tagName&&"file"===e.type?i=e:((i=document.createElement("input")).setAttribute("type","file"),i.style.display="none",e.addEventListener("click",function(){i.style.opacity=0,i.style.display="block",i.focus(),i.click(),i.style.display="none"},!1),e.appendChild(i));var r=n.getOpt("maxFiles");void 0===r||1!=r?i.setAttribute("multiple","multiple"):i.removeAttribute("multiple"),t?i.setAttribute("webkitdirectory","webkitdirectory"):i.removeAttribute("webkitdirectory");var a=n.getOpt("fileType");void 0!==a&&a.length>=1?i.setAttribute("accept",a.map(function(e){return(e=e.replace(/\s/g,"").toLowerCase()).match(/^[^.][^/]+$/)&&(e="."+e),e}).join(",")):i.removeAttribute("accept"),i.addEventListener("change",function(e){c(e.target.files,e),n.getOpt("clearInput")&&(e.target.value="")},!1)})},n.assignDrop=function(e){void 0===e.length&&(e=[e]),i.each(e,function(e){e.addEventListener("dragover",a,!1),e.addEventListener("dragenter",a,!1),e.addEventListener("drop",r,!1)})},n.unAssignDrop=function(e){void 0===e.length&&(e=[e]),i.each(e,function(e){e.removeEventListener("dragover",a),e.removeEventListener("dragenter",a),e.removeEventListener("drop",r)})},n.isUploading=function(){var e=!1;return i.each(n.files,function(t){if(t.isUploading())return e=!0,!1}),e},n.upload=function(){if(!n.isUploading()){n.fire("uploadStart");for(var e=1;e<=n.getOpt("simultaneousUploads");e++)n.uploadNextChunk()}},n.pause=function(){i.each(n.files,function(e){e.abort()}),n.fire("pause")},n.cancel=function(){n.fire("beforeCancel");for(var e=n.files.length-1;e>=0;e--)n.files[e].cancel();n.fire("cancel")},n.progress=function(){var e=0,t=0;return i.each(n.files,function(n){e+=n.progress()*n.size,t+=n.size}),t>0?e/t:0},n.addFile=function(e,t){c([e],t)},n.addFiles=function(e,t){c(e,t)},n.removeFile=function(e){for(var t=n.files.length-1;t>=0;t--)n.files[t]===e&&n.files.splice(t,1)},n.getFromUniqueIdentifier=function(e){var t=!1;return i.each(n.files,function(n){n.uniqueIdentifier==e&&(t=n)}),t},n.getSize=function(){var e=0;return i.each(n.files,function(t){e+=t.size}),e},n.handleDropEvent=function(e){r(e)},n.handleChangeEvent=function(e){c(e.target.files,e),e.target.value=""},n.updateQuery=function(e){n.opts.query=e},this};"undefined"!=typeof module?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):window.Resumable=e}(),(()=>{window.Layout={},Layout._onOverlayClick=t;var e={overlayHide:"Layout__overlay_hide"};function t(t){t.classList.add(e.overlayHide),setTimeout(()=>{t.remove()},600)}})();var slidesCount=document.querySelectorAll(".slider__slide").length,active=0,RIGHT_ARROW=39,LEFT_ARROW=37;function nextSlide(){document.querySelector(".slider").classList.remove("slider_first"),active<slidesCount-1&&(active+=1,actualizeLine()),active===slidesCount-1&&document.querySelector(".slider").classList.add("slider_last")}function prevSlide(){document.querySelector(".slider").classList.remove("slider_last"),active>0&&(active-=1,actualizeLine()),0===active&&document.querySelector(".slider").classList.add("slider_first")}function actualizeLine(){var e=document.querySelector(".slider__line"),t=-800*active;e.style.transform="translateX("+t+"px)"}window.addEventListener("keydown",function(e){e.keyCode==RIGHT_ARROW&&nextSlide(),e.keyCode==LEFT_ARROW&&prevSlide()});var img=1,intro=(RIGHT_ARROW=39,LEFT_ARROW=37,document.querySelector(".intro"));if("/"===location.pathname)var timer=setInterval(showNextImg,3e3);function showNextImg(){const e=$(".intro__content_active");(e.nextElementSibling||e.parentElement.firstElementChild).classList.add("intro__content_active"),e.classList.remove("intro__content_active")}function showPrevImg(){const e=$(".intro__content_active");(e.previousElementSibling||e.parentElement.lastElementChild).classList.add("intro__content_active"),e.classList.remove("intro__content_active")}function killTimer(){clearInterval(timer)}function onNextPress(){showNextImg(),killTimer()}function onPrevPress(){showPrevImg(),killTimer()}function onUploadImageChange(e){var t=e.files[0],n=new FileReader;n.addEventListener("load",function(){var t=document.createElement("div");t.className="upload__imagePreview",t.style="background-image: url("+this.result+")",e.parentElement.appendChild(t)}),n.readAsDataURL(t)}window.addEventListener("keydown",function(e){e.keyCode==RIGHT_ARROW&&onNextPress(),e.keyCode==LEFT_ARROW&&onPrevPress()}),window.Join={_onSubmit(e){}};