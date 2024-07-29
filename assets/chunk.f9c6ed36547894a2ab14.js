"use strict";(self.webpackChunkcrates_io=self.webpackChunkcrates_io||[]).push([[136],{45136:(t,e,i)=>{i.d(e,{diagram:()=>p});var n=i(59659),s=i(84017),r=(i(92329),i(88641),i(31998),function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,3],i=[1,4],n=[1,5],s=[1,6],r=[1,10,12,14,16,18,19,20,21,22],l=[2,4],a=[1,5,10,12,14,16,18,19,20,21,22],c=[20,21,22],o=[2,7],h=[1,12],u=[1,13],y=[1,14],p=[1,15],d=[1,16],g=[1,17],_={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,PIE:5,document:6,showData:7,line:8,statement:9,txt:10,value:11,title:12,title_value:13,acc_title:14,acc_title_value:15,acc_descr:16,acc_descr_value:17,acc_descr_multiline_value:18,section:19,NEWLINE:20,";":21,EOF:22,$accept:0,$end:1},terminals_:{2:"error",5:"PIE",7:"showData",10:"txt",11:"value",12:"title",13:"title_value",14:"acc_title",15:"acc_title_value",16:"acc_descr",17:"acc_descr_value",18:"acc_descr_multiline_value",19:"section",20:"NEWLINE",21:";",22:"EOF"},productions_:[0,[3,2],[3,2],[3,3],[6,0],[6,2],[8,2],[9,0],[9,2],[9,2],[9,2],[9,2],[9,1],[9,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,n,s,r,l){var a=r.length-1;switch(s){case 3:n.setShowData(!0);break;case 6:this.$=r[a-1];break;case 8:n.addSection(r[a-1],n.cleanupValue(r[a]));break;case 9:this.$=r[a].trim(),n.setDiagramTitle(this.$);break;case 10:this.$=r[a].trim(),n.setAccTitle(this.$);break;case 11:case 12:this.$=r[a].trim(),n.setAccDescription(this.$);break;case 13:n.addSection(r[a].substr(8)),this.$=r[a].substr(8)}},table:[{3:1,4:2,5:e,20:i,21:n,22:s},{1:[3]},{3:7,4:2,5:e,20:i,21:n,22:s},t(r,l,{6:8,7:[1,9]}),t(a,[2,14]),t(a,[2,15]),t(a,[2,16]),{1:[2,1]},t(c,o,{8:10,9:11,1:[2,2],10:h,12:u,14:y,16:p,18:d,19:g}),t(r,l,{6:18}),t(r,[2,5]),{4:19,20:i,21:n,22:s},{11:[1,20]},{13:[1,21]},{15:[1,22]},{17:[1,23]},t(c,[2,12]),t(c,[2,13]),t(c,o,{8:10,9:11,1:[2,3],10:h,12:u,14:y,16:p,18:d,19:g}),t(r,[2,6]),t(c,[2,8]),t(c,[2,9]),t(c,[2,10]),t(c,[2,11])],defaultActions:{7:[2,1]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=[0],i=[],n=[null],s=[],r=this.table,l="",a=0,c=0,o=s.slice.call(arguments,1),h=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);h.setInput(t,u.yy),u.yy.lexer=h,u.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var p=h.yylloc;s.push(p);var d=h.options&&h.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,_,f,m,k,b,x,v,S,w={};;){if(_=e[e.length-1],this.defaultActions[_]?f=this.defaultActions[_]:(null==g&&(S=void 0,"number"!=typeof(S=i.pop()||h.lex()||1)&&(S instanceof Array&&(S=(i=S).pop()),S=this.symbols_[S]||S),g=S),f=r[_]&&r[_][g]),void 0===f||!f.length||!f[0]){var $;for(k in v=[],r[_])this.terminals_[k]&&k>2&&v.push("'"+this.terminals_[k]+"'");$=h.showPosition?"Parse error on line "+(a+1)+":\n"+h.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError($,{text:h.match,token:this.terminals_[g]||g,line:h.yylineno,loc:p,expected:v})}if(f[0]instanceof Array&&f.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+g);switch(f[0]){case 1:e.push(g),n.push(h.yytext),s.push(h.yylloc),e.push(f[1]),g=null,c=h.yyleng,l=h.yytext,a=h.yylineno,p=h.yylloc;break;case 2:if(b=this.productions_[f[1]][1],w.$=n[n.length-b],w._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},d&&(w._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(m=this.performAction.apply(w,[l,c,a,u.yy,f[1],n,s].concat(o))))return m;b&&(e=e.slice(0,-1*b*2),n=n.slice(0,-1*b),s=s.slice(0,-1*b)),e.push(this.productions_[f[1]][0]),n.push(w.$),s.push(w._$),x=r[e[e.length-2]][e[e.length-1]],e.push(x);break;case 3:return!0}}return!0}},f={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 20;case 5:return this.begin("title"),12;case 6:return this.popState(),"title_value";case 7:return this.begin("acc_title"),14;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),16;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:case 15:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:this.begin("string");break;case 16:return"txt";case 17:return 5;case 18:return 7;case 19:return"value";case 20:return 22}},rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[6],inclusive:!1},string:{rules:[15,16],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,7,9,11,14,17,18,19,20],inclusive:!0}}};function m(){this.yy={}}return _.lexer=f,m.prototype=_,_.Parser=m,new m}());r.parser=r;const l=r,a=n.B.pie,c={},o=!1;let h=c,u=o;const y=structuredClone(a),p={parser:l,db:{getConfig:()=>structuredClone(y),clear:()=>{h=structuredClone(c),u=o,(0,n.v)()},setDiagramTitle:n.q,getDiagramTitle:n.t,setAccTitle:n.s,getAccTitle:n.g,setAccDescription:n.b,getAccDescription:n.a,addSection:(t,e)=>{t=(0,n.d)(t,(0,n.c)()),void 0===h[t]&&(h[t]=e,n.l.debug(`added new section: ${t}, with value: ${e}`))},getSections:()=>h,cleanupValue:t=>(":"===t.substring(0,1)&&(t=t.substring(1).trim()),Number(t.trim())),setShowData:t=>{u=t},getShowData:()=>u},renderer:{draw:(t,e,i,r)=>{n.l.debug("rendering pie chart\n"+t);const l=r.db,a=(0,n.c)(),c=(0,n.C)(l.getConfig(),a.pie),o=(0,n.A)(e),h=o.append("g"),u=l.getSections();h.attr("transform","translate(225,225)");const{themeVariables:y}=a;let[p]=(0,n.D)(y.pieOuterStrokeWidth);p??(p=2);const d=c.textPosition,g=Math.min(450,450)/2-40,_=(0,s.JLW)().innerRadius(0).outerRadius(g),f=(0,s.JLW)().innerRadius(g*d).outerRadius(g*d);h.append("circle").attr("cx",0).attr("cy",0).attr("r",g+p/2).attr("class","pieOuterCircle");const m=(t=>{const e=Object.entries(t).map((t=>({label:t[0],value:t[1]}))).sort(((t,e)=>e.value-t.value));return(0,s.rLf)().value((t=>t.value))(e)})(u),k=[y.pie1,y.pie2,y.pie3,y.pie4,y.pie5,y.pie6,y.pie7,y.pie8,y.pie9,y.pie10,y.pie11,y.pie12],b=(0,s.UMr)(k);h.selectAll("mySlices").data(m).enter().append("path").attr("d",_).attr("fill",(t=>b(t.data.label))).attr("class","pieCircle");let x=0;Object.keys(u).forEach((t=>{x+=u[t]})),h.selectAll("mySlices").data(m).enter().append("text").text((t=>(t.data.value/x*100).toFixed(0)+"%")).attr("transform",(t=>"translate("+f.centroid(t)+")")).style("text-anchor","middle").attr("class","slice"),h.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const v=h.selectAll(".legend").data(b.domain()).enter().append("g").attr("class","legend").attr("transform",((t,e)=>"translate(216,"+(22*e-22*b.domain().length/2)+")"));v.append("rect").attr("width",18).attr("height",18).style("fill",b).style("stroke",b),v.data(m).append("text").attr("x",22).attr("y",14).text((t=>{const{label:e,value:i}=t.data;return l.getShowData()?`${e} [${i}]`:e}));const S=512+Math.max(...v.selectAll("text").nodes().map((t=>(null==t?void 0:t.getBoundingClientRect().width)??0)));o.attr("viewBox",`0 0 ${S} 450`),(0,n.i)(o,450,S,c.useMaxWidth)}},styles:t=>`\n  .pieCircle{\n    stroke: ${t.pieStrokeColor};\n    stroke-width : ${t.pieStrokeWidth};\n    opacity : ${t.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${t.pieOuterStrokeColor};\n    stroke-width: ${t.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${t.pieTitleTextSize};\n    fill: ${t.pieTitleTextColor};\n    font-family: ${t.fontFamily};\n  }\n  .slice {\n    font-family: ${t.fontFamily};\n    fill: ${t.pieSectionTextColor};\n    font-size:${t.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${t.pieLegendTextColor};\n    font-family: ${t.fontFamily};\n    font-size: ${t.pieLegendTextSize};\n  }\n`}}}]);