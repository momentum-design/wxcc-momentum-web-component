(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{710:function(module,exports,__webpack_require__){function source(re){return re?"string"==typeof re?re:re.source:null}function concat(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var joined=args.map((function(x){return source(x)})).join("");return joined}__webpack_require__(135),__webpack_require__(56),module.exports=function http(hljs){var VERSION="HTTP/(2|1\\.[01])",HEADER={className:"attribute",begin:concat("^",/[A-Za-z][A-Za-z0-9-]*/,"(?=\\:\\s)"),starts:{contains:[{className:"punctuation",begin:/: /,relevance:0,starts:{end:"$",relevance:0}}]}},HEADERS_AND_BODY=[HEADER,{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}];return{name:"HTTP",aliases:["https"],illegal:/\S/,contains:[{begin:"^(?="+VERSION+" \\d{3})",end:/$/,contains:[{className:"meta",begin:VERSION},{className:"number",begin:"\\b\\d{3}\\b"}],starts:{end:/\b\B/,illegal:/\S/,contains:HEADERS_AND_BODY}},{begin:"(?=^[A-Z]+ (.*?) "+VERSION+"$)",end:/$/,contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{className:"meta",begin:VERSION},{className:"keyword",begin:"[A-Z]+"}],starts:{end:/\b\B/,illegal:/\S/,contains:HEADERS_AND_BODY}},hljs.inherit(HEADER,{relevance:0})]}}}}]);