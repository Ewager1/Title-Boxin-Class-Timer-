(this.webpackJsonptitle_interal_app=this.webpackJsonptitle_interal_app||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),i=t(18),a=t.n(i),o=(t(24),t(8)),r=t(3),u=t(10),d=s.a.createContext({userChoice:{totalRounds:8,currentRound:1,warmUpTime:7,activeRestTime:1,glovesOnOffTime:1,roundTime:3,coreTime:7},updateUserChoice:function(){},updateTrainingMode:function(){}}),m=t(2),l=(t(25),t(0)),j=function(e){return Object(l.jsx)("div",{className:"wrapper ".concat(e.className),children:e.children})},O=(t(27),function(e){return Object(l.jsx)("button",{className:"button ".concat(e.className),type:e.type||"button",onClick:e.onClick,value:e.value,ref:e.ref,children:e.children})}),b=t(14),h=t.n(b),f=(t(28),function(){var e=Object(c.useState)(h()().format("h:mm A")),n=Object(o.a)(e,2),t=n[0],s=n[1];return Object(c.useEffect)((function(){setInterval((function(){s(h()().format("h:mm A"))}),1e3)}),[]),Object(l.jsx)("h2",{className:"clock",children:t})}),T=(t(29),function(e){return Object(l.jsx)("header",{className:"timer-header",children:Object(l.jsxs)(j,{className:"header-wrapper",children:[" ",Object(l.jsx)(f,{}),Object(l.jsx)(u.b,{to:"/",children:Object(l.jsx)(O,{onClick:function(){return e.handleClearInterval()},className:"x-btn",children:"X"})})]})})}),C=(t(35),function(e){return Object(l.jsx)("main",{children:Object(l.jsxs)(j,{className:"itBody",children:[Object(l.jsxs)("button",{className:"emptyBtn",onClick:function(){return e.rewind()},children:[" ",Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"Button that rewinds timer 15 seconds"})]}),Object(l.jsx)("h1",{className:e.isPaused?"glow":"",onClick:e.isPaused?function(){return e.play()}:function(){return e.pause()},children:e.displayedTime})]})})}),R=t.p+"static/media/titleLogo.ece21b9b.png",v=(t(36),function(e){return Object(l.jsx)("footer",{children:Object(l.jsxs)(j,{className:"timerFooter",children:[Object(l.jsx)("h2",{children:e.classSegment})," ",Object(l.jsx)("span",{className:"triangle"}),Object(l.jsx)("img",{className:".logo",src:R,alt:"Title Boxing Logo"})]})})}),x=function(){var e=Object(c.useContext)(d),n=Object(c.useState)("Warmup"),t=Object(o.a)(n,2),s=t[0],i=t[1],a=Object(c.useState)(),r=Object(o.a)(a,2),u=r[0],j=r[1],O=Object(c.useState)({displayedTime:e.isTrainingMode?"3:00":"".concat(e.userChoice.warmUpTime,":00"),minutes:0,seconds:0,maxRoundTime:7}),b=Object(o.a)(O,2),h=b[0],f=b[1],R=Object(c.useState)(!1),x=Object(o.a)(R,2),A=x[0],p=x[1];Object(c.useEffect)((function(){if(e.isTrainingMode)switch(s){case"Warmup":i("Continuous Rounds");break;case"Continuous Rounds":f((function(e){return Object(m.a)(Object(m.a)({},e),{},{maxRoundTime:3})})),g(3,0);break;case"Continuous Active Rest":f((function(e){return Object(m.a)(Object(m.a)({},e),{},{maxRoundTime:1})})),g(1,0)}else switch(s){case"Warmup":f((function(n){return Object(m.a)(Object(m.a)({},n),{},{maxRoundTime:e.userChoice.warmUpTime})})),g(e.userChoice.warmUpTime,0);break;case"Gloves On":f((function(n){return Object(m.a)(Object(m.a)({},n),{},{maxRoundTime:e.userChoice.glovesOnOffTime})})),g(e.userChoice.glovesOnOffTime,0);break;case"Round ".concat(e.userChoice.currentRound):f((function(n){return Object(m.a)(Object(m.a)({},n),{},{maxRoundTime:e.userChoice.roundTime})})),g(e.userChoice.roundTime,0);break;case"Active Rest":f((function(n){return Object(m.a)(Object(m.a)({},n),{},{maxRoundTime:e.userChoice.activeRestTime})})),g(e.userChoice.activeRestTime,0);break;case"Gloves Off":f((function(n){return Object(m.a)(Object(m.a)({},n),{},{maxRoundTime:e.userChoice.glovesOnOffTime})})),g(e.userChoice.glovesOnOffTime,0);break;case"Core":f((function(n){return Object(m.a)(Object(m.a)({},n),{},{maxRoundTime:e.userChoice.coreTime})})),g(e.userChoice.coreTime,0)}return function(){clearInterval(u)}}),[s]);var g=function(n,t){var c=n,s=t,i=setInterval((function(){var n=s<10?"0":"";f((function(e){return Object(m.a)(Object(m.a)({},e),{},{minutes:c,seconds:s,displayedTime:"".concat(c,":").concat(n).concat(s)})})),s--,0===c&&s<0&&(clearInterval(i),e.isTrainingMode?w():k()),c>0&&s<0&&(c--,s=59)}),1e3);j(i)},k=function(){switch(s){case"Warmup":i("Gloves On");break;case"Gloves On":i("Round ".concat(e.userChoice.currentRound));break;case"Round ".concat(e.userChoice.currentRound):e.userChoice.currentRound===e.userChoice.totalRounds?i("Gloves Off"):(e.setuserChoice(Object(m.a)(Object(m.a)({},e.userChoice),{},{currentRound:e.userChoice.currentRound+=1})),i("Active Rest"));break;case"Active Rest":i("Round ".concat(e.userChoice.currentRound));break;case"Gloves Off":i("Core");break;case"Core":console.log("class done, this will reroute to home page ")}},w=function(){switch(s){case"Warmup":i("Continuous Rounds");break;case"Continuous Rounds":i("Continuous Active Rest");break;case"Continuous Active Rest":i("Continuous Rounds")}};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(T,{handleClearInterval:function(){return clearInterval}}),Object(l.jsx)(C,{displayedTime:h.displayedTime,play:function(){g(h.minutes,h.seconds),p(!1)},pause:function(){clearInterval(u),p(!0)},isPaused:A,rewind:function(){var e=h.minutes+1,n=h.seconds+15-60,t=h.seconds<10?"0":"";clearInterval(u),h.minutes===h.maxRoundTime&&0===h.seconds&&A||(h.minutes===h.maxRoundTime?(g(h.minutes,h.seconds),A&&f((function(e){return Object(m.a)(Object(m.a)({},e),{},{minutes:h.minutes,seconds:h.seconds,displayedTime:"".concat(h.minutes,":").concat(t).concat(h.seconds)})}))):h.minutes+1===h.maxRoundTime&&h.seconds>45?A?f((function(e){return Object(m.a)(Object(m.a)({},e),{},{minutes:h.maxRoundTime,seconds:0,displayedTime:"".concat(h.maxRoundTime,":00")})})):g(h.maxRoundTime,0):h.minutes<=1&&h.seconds<=1||(h.seconds>45?A?f((function(t){return Object(m.a)(Object(m.a)({},t),{},{minutes:e,seconds:n,displayedTime:"".concat(e,":").concat(n<10?"0":"").concat(n)})})):g(e,n):45===h.seconds?A?f((function(n){return Object(m.a)(Object(m.a)({},n),{},{minutes:e,seconds:0,displayedTime:"".concat(e,":00")})})):g(e,0):A?f((function(e){return Object(m.a)(Object(m.a)({},e),{},{minutes:h.minutes,seconds:h.seconds+15,displayedTime:"".concat(h.minutes,":").concat(h.seconds+15<10?"0":"").concat(h.seconds+15)})})):g(h.minutes,h.seconds+15)))}}),Object(l.jsx)(v,{classSegment:s})]})},A={totalRounds:4,currentRound:1,warmUpTime:7,activeRestTime:1,glovesOnOffTime:1,roundTime:3,coreTime:7},p={totalRounds:8,currentRound:1,warmUpTime:7,activeRestTime:1,glovesOnOffTime:1,roundTime:3,coreTime:7},g={totalRounds:8,currentRound:1,warmUpTime:15,activeRestTime:1,glovesOnOffTime:1,roundTime:3,coreTime:15},k={totalRounds:12,currentRound:1,warmUpTime:15,activeRestTime:1,glovesOnOffTime:1,roundTime:3,coreTime:15},w=(t(37),function(){var e=Object(c.useContext)(d),n=Object(r.f)(),t=function(t){e.updateUserChoice(t),n.push("./timer")};return Object(l.jsxs)("main",{className:"homepage",children:[Object(l.jsx)("h1",{children:"Choose a Class to Start"}),Object(l.jsxs)(j,{className:"flexWrapper",children:[Object(l.jsxs)(O,{className:"homePageBtn",onClick:function(){return t(A)},children:["4 Rounds",Object(l.jsx)("div",{children:Object(l.jsx)("small",{children:"30 Mins"})})," "]}),Object(l.jsxs)(O,{className:"homePageBtn",onClick:function(){return t(p)},children:["8 Rounds",Object(l.jsx)("div",{children:Object(l.jsx)("small",{children:"45 Mins"})})]}),Object(l.jsxs)(O,{className:"homePageBtn",onClick:function(){return t(g)},children:["8 Rounds",Object(l.jsx)("div",{children:Object(l.jsx)("small",{children:"60 Mins"})})]}),Object(l.jsxs)(O,{className:"homePageBtn",onClick:function(){return t(k)},children:["12 Rounds"," ",Object(l.jsxs)("div",{children:[" ",Object(l.jsx)("small",{children:"75 Mins"})]})]}),Object(l.jsxs)(O,{className:"homePageBtn",onClick:function(){return e.updateTrainingMode(!0),void n.push("./timer")},children:["Training Mode ",Object(l.jsx)("small",{children:"Continuous "})]})]})]})});var G=function(){var e=Object(c.useState)({totalRounds:8,currentRound:1,warmUpTime:7,activeRestTime:1,glovesOnOffTime:1,roundTime:3,coreTime:7}),n=Object(o.a)(e,2),t=n[0],s=n[1],i=Object(c.useState)(!1),a=Object(o.a)(i,2),m=a[0],j=a[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(d.Provider,{value:{userChoice:t,isTrainingMode:m,updateUserChoice:function(e){j(!1),s(e)},updateTrainingMode:j},children:Object(l.jsx)(u.a,{children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/timer",children:Object(l.jsx)(x,{})}),Object(l.jsx)(r.a,{path:"/",children:Object(l.jsx)(w,{})})]})})})})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(G,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.01c90346.chunk.js.map