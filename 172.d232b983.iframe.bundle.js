(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{802:function(module,exports,__webpack_require__){function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function source(re){return re?"string"==typeof re?re:re.source:null}function lookahead(re){return concat("(?=",re,")")}function concat(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var joined=args.map((function(x){return source(x)})).join("");return joined}function either(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var joined="("+args.map((function(x){return source(x)})).join("|")+")";return joined}__webpack_require__(135),__webpack_require__(56),__webpack_require__(39),__webpack_require__(70),__webpack_require__(127),__webpack_require__(41),__webpack_require__(85),__webpack_require__(75),__webpack_require__(18),__webpack_require__(20),__webpack_require__(10),__webpack_require__(21),__webpack_require__(16),__webpack_require__(15),__webpack_require__(17),__webpack_require__(54),__webpack_require__(8),__webpack_require__(37);var keywordWrapper=function(keyword){return concat(/\b/,keyword,/\w$/.test(keyword)?/\b/:/\B/)},dotKeywords=["Protocol","Type"].map(keywordWrapper),optionalDotKeywords=["init","self"].map(keywordWrapper),keywordTypes=["Any","Self"],keywords=["associatedtype","async","await",/as\?/,/as!/,"as","break","case","catch","class","continue","convenience","default","defer","deinit","didSet","do","dynamic","else","enum","extension","fallthrough",/fileprivate\(set\)/,"fileprivate","final","for","func","get","guard","if","import","indirect","infix",/init\?/,/init!/,"inout",/internal\(set\)/,"internal","in","is","lazy","let","mutating","nonmutating",/open\(set\)/,"open","operator","optional","override","postfix","precedencegroup","prefix",/private\(set\)/,"private","protocol",/public\(set\)/,"public","repeat","required","rethrows","return","set","some","static","struct","subscript","super","switch","throws","throw",/try\?/,/try!/,"try","typealias",/unowned\(safe\)/,/unowned\(unsafe\)/,"unowned","var","weak","where","while","willSet"],literals=["false","nil","true"],precedencegroupKeywords=["assignment","associativity","higherThan","left","lowerThan","none","right"],numberSignKeywords=["#colorLiteral","#column","#dsohandle","#else","#elseif","#endif","#error","#file","#fileID","#fileLiteral","#filePath","#function","#if","#imageLiteral","#keyPath","#line","#selector","#sourceLocation","#warn_unqualified_access","#warning"],builtIns=["abs","all","any","assert","assertionFailure","debugPrint","dump","fatalError","getVaList","isKnownUniquelyReferenced","max","min","numericCast","pointwiseMax","pointwiseMin","precondition","preconditionFailure","print","readLine","repeatElement","sequence","stride","swap","swift_unboxFromSwiftValueWithType","transcode","type","unsafeBitCast","unsafeDowncast","withExtendedLifetime","withUnsafeMutablePointer","withUnsafePointer","withVaList","withoutActuallyEscaping","zip"],operatorHead=either(/[/=\-+!*%<>&|^~?]/,/[\u00A1-\u00A7]/,/[\u00A9\u00AB]/,/[\u00AC\u00AE]/,/[\u00B0\u00B1]/,/[\u00B6\u00BB\u00BF\u00D7\u00F7]/,/[\u2016-\u2017]/,/[\u2020-\u2027]/,/[\u2030-\u203E]/,/[\u2041-\u2053]/,/[\u2055-\u205E]/,/[\u2190-\u23FF]/,/[\u2500-\u2775]/,/[\u2794-\u2BFF]/,/[\u2E00-\u2E7F]/,/[\u3001-\u3003]/,/[\u3008-\u3020]/,/[\u3030]/),operatorCharacter=either(operatorHead,/[\u0300-\u036F]/,/[\u1DC0-\u1DFF]/,/[\u20D0-\u20FF]/,/[\uFE00-\uFE0F]/,/[\uFE20-\uFE2F]/),operator=concat(operatorHead,operatorCharacter,"*"),identifierHead=either(/[a-zA-Z_]/,/[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,/[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,/[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,/[\u1E00-\u1FFF]/,/[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,/[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,/[\u2C00-\u2DFF\u2E80-\u2FFF]/,/[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,/[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,/[\uFE47-\uFEFE\uFF00-\uFFFD]/),identifierCharacter=either(identifierHead,/\d/,/[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),identifier=concat(identifierHead,identifierCharacter,"*"),typeIdentifier=concat(/[A-Z]/,identifierCharacter,"*"),keywordAttributes=["autoclosure",concat(/convention\(/,either("swift","block","c"),/\)/),"discardableResult","dynamicCallable","dynamicMemberLookup","escaping","frozen","GKInspectable","IBAction","IBDesignable","IBInspectable","IBOutlet","IBSegueAction","inlinable","main","nonobjc","NSApplicationMain","NSCopying","NSManaged",concat(/objc\(/,identifier,/\)/),"objc","objcMembers","propertyWrapper","requires_stored_property_inits","testable","UIApplicationMain","unknown","usableFromInline"],availabilityKeywords=["iOS","iOSApplicationExtension","macOS","macOSApplicationExtension","macCatalyst","macCatalystApplicationExtension","watchOS","watchOSApplicationExtension","tvOS","tvOSApplicationExtension","swift"];module.exports=function swift(hljs){var WHITESPACE={match:/\s+/,relevance:0},BLOCK_COMMENT=hljs.COMMENT("/\\*","\\*/",{contains:["self"]}),COMMENTS=[hljs.C_LINE_COMMENT_MODE,BLOCK_COMMENT],DOT_KEYWORD={className:"keyword",begin:concat(/\./,lookahead(either.apply(void 0,_toConsumableArray(dotKeywords).concat(_toConsumableArray(optionalDotKeywords))))),end:either.apply(void 0,_toConsumableArray(dotKeywords).concat(_toConsumableArray(optionalDotKeywords))),excludeBegin:!0},KEYWORD_GUARD={match:concat(/\./,either.apply(void 0,keywords)),relevance:0},PLAIN_KEYWORDS=keywords.filter((function(kw){return"string"==typeof kw})).concat(["_|0"]),REGEX_KEYWORDS=keywords.filter((function(kw){return"string"!=typeof kw})).concat(keywordTypes).map(keywordWrapper),KEYWORD={variants:[{className:"keyword",match:either.apply(void 0,_toConsumableArray(REGEX_KEYWORDS).concat(_toConsumableArray(optionalDotKeywords)))}]},KEYWORDS={$pattern:either(/\b\w+/,/#\w+/),keyword:PLAIN_KEYWORDS.concat(numberSignKeywords),literal:literals},KEYWORD_MODES=[DOT_KEYWORD,KEYWORD_GUARD,KEYWORD],BUILT_INS=[{match:concat(/\./,either.apply(void 0,builtIns)),relevance:0},{className:"built_in",match:concat(/\b/,either.apply(void 0,builtIns),/(?=\()/)}],OPERATOR_GUARD={match:/->/,relevance:0},OPERATORS=[OPERATOR_GUARD,{className:"operator",relevance:0,variants:[{match:operator},{match:`\\.(\\.|${operatorCharacter})+`}]}],NUMBER={className:"number",relevance:0,variants:[{match:"\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b"},{match:"\\b0x(([0-9a-fA-F]_*)+)(\\.(([0-9a-fA-F]_*)+))?([pP][+-]?(([0-9]_*)+))?\\b"},{match:/\b0o([0-7]_*)+\b/},{match:/\b0b([01]_*)+\b/}]},ESCAPED_CHARACTER=function(){var rawDelimiter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{className:"subst",variants:[{match:concat(/\\/,rawDelimiter,/[0\\tnr"']/)},{match:concat(/\\/,rawDelimiter,/u\{[0-9a-fA-F]{1,8}\}/)}]}},ESCAPED_NEWLINE=function(){var rawDelimiter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{className:"subst",match:concat(/\\/,rawDelimiter,/[\t ]*(?:[\r\n]|\r\n)/)}},INTERPOLATION=function(){var rawDelimiter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{className:"subst",label:"interpol",begin:concat(/\\/,rawDelimiter,/\(/),end:/\)/}},MULTILINE_STRING=function(){var rawDelimiter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{begin:concat(rawDelimiter,/"""/),end:concat(/"""/,rawDelimiter),contains:[ESCAPED_CHARACTER(rawDelimiter),ESCAPED_NEWLINE(rawDelimiter),INTERPOLATION(rawDelimiter)]}},SINGLE_LINE_STRING=function(){var rawDelimiter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{begin:concat(rawDelimiter,/"/),end:concat(/"/,rawDelimiter),contains:[ESCAPED_CHARACTER(rawDelimiter),INTERPOLATION(rawDelimiter)]}},STRING={className:"string",variants:[MULTILINE_STRING(),MULTILINE_STRING("#"),MULTILINE_STRING("##"),MULTILINE_STRING("###"),SINGLE_LINE_STRING(),SINGLE_LINE_STRING("#"),SINGLE_LINE_STRING("##"),SINGLE_LINE_STRING("###")]},QUOTED_IDENTIFIER={match:concat(/`/,identifier,/`/)},IDENTIFIERS=[QUOTED_IDENTIFIER,{className:"variable",match:/\$\d+/},{className:"variable",match:`\\$${identifierCharacter}+`}],ATTRIBUTES=[{match:/(@|#)available/,className:"keyword",starts:{contains:[{begin:/\(/,end:/\)/,keywords:availabilityKeywords,contains:[].concat(OPERATORS,[NUMBER,STRING])}]}},{className:"keyword",match:concat(/@/,either.apply(void 0,keywordAttributes))},{className:"meta",match:concat(/@/,identifier)}],TYPE={match:lookahead(/\b[A-Z]/),relevance:0,contains:[{className:"type",match:concat(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,identifierCharacter,"+")},{className:"type",match:typeIdentifier,relevance:0},{match:/[?!]+/,relevance:0},{match:/\.\.\./,relevance:0},{match:concat(/\s+&\s+/,lookahead(typeIdentifier)),relevance:0}]},GENERIC_ARGUMENTS={begin:/</,end:/>/,keywords:KEYWORDS,contains:[].concat(COMMENTS,KEYWORD_MODES,ATTRIBUTES,[OPERATOR_GUARD,TYPE])};TYPE.contains.push(GENERIC_ARGUMENTS);var _step,TUPLE={begin:/\(/,end:/\)/,relevance:0,keywords:KEYWORDS,contains:["self",{match:concat(identifier,/\s*:/),keywords:"_|0",relevance:0}].concat(COMMENTS,KEYWORD_MODES,BUILT_INS,OPERATORS,[NUMBER,STRING],IDENTIFIERS,ATTRIBUTES,[TYPE])},FUNC_PLUS_TITLE={beginKeywords:"func",contains:[{className:"title",match:either(QUOTED_IDENTIFIER.match,identifier,operator),endsParent:!0,relevance:0},WHITESPACE]},GENERIC_PARAMETERS={begin:/</,end:/>/,contains:[].concat(COMMENTS,[TYPE])},FUNCTION_PARAMETERS={begin:/\(/,end:/\)/,keywords:KEYWORDS,contains:[{begin:either(lookahead(concat(identifier,/\s*:/)),lookahead(concat(identifier,/\s+/,identifier,/\s*:/))),end:/:/,relevance:0,contains:[{className:"keyword",match:/\b_\b/},{className:"params",match:identifier}]}].concat(COMMENTS,KEYWORD_MODES,OPERATORS,[NUMBER,STRING],ATTRIBUTES,[TYPE,TUPLE]),endsParent:!0,illegal:/["']/},FUNCTION={className:"function",match:lookahead(/\bfunc\b/),contains:[FUNC_PLUS_TITLE,GENERIC_PARAMETERS,FUNCTION_PARAMETERS,WHITESPACE],illegal:[/\[/,/%/]},INIT_SUBSCRIPT={className:"function",match:/\b(subscript|init[?!]?)\s*(?=[<(])/,keywords:{keyword:"subscript init init? init!",$pattern:/\w+[?!]?/},contains:[GENERIC_PARAMETERS,FUNCTION_PARAMETERS,WHITESPACE],illegal:/\[|%/},OPERATOR_DECLARATION={beginKeywords:"operator",end:hljs.MATCH_NOTHING_RE,contains:[{className:"title",match:operator,endsParent:!0,relevance:0}]},PRECEDENCEGROUP={beginKeywords:"precedencegroup",end:hljs.MATCH_NOTHING_RE,contains:[{className:"title",match:typeIdentifier,relevance:0},{begin:/{/,end:/}/,relevance:0,endsParent:!0,keywords:[].concat(precedencegroupKeywords,literals),contains:[TYPE]}]},_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function(){};return{s:F,n:function(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function(e){throw e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function(){it=it.call(o)},n:function(){var step=it.next();return normalCompletion=step.done,step},e:function(e){didErr=!0,err=e},f:function(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(STRING.variants);try{for(_iterator.s();!(_step=_iterator.n()).done;){var interpolation=_step.value.contains.find((function(mode){return"interpol"===mode.label}));interpolation.keywords=KEYWORDS;var submodes=[].concat(KEYWORD_MODES,BUILT_INS,OPERATORS,[NUMBER,STRING],IDENTIFIERS);interpolation.contains=[].concat(_toConsumableArray(submodes),[{begin:/\(/,end:/\)/,contains:["self"].concat(_toConsumableArray(submodes))}])}}catch(err){_iterator.e(err)}finally{_iterator.f()}return{name:"Swift",keywords:KEYWORDS,contains:[].concat(COMMENTS,[FUNCTION,INIT_SUBSCRIPT,{className:"class",beginKeywords:"struct protocol class extension enum",end:"\\{",excludeEnd:!0,keywords:KEYWORDS,contains:[hljs.inherit(hljs.TITLE_MODE,{begin:/[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})].concat(KEYWORD_MODES)},OPERATOR_DECLARATION,PRECEDENCEGROUP,{beginKeywords:"import",end:/$/,contains:[].concat(COMMENTS),relevance:0}],KEYWORD_MODES,BUILT_INS,OPERATORS,[NUMBER,STRING],IDENTIFIERS,ATTRIBUTES,[TYPE,TUPLE])}}}}]);